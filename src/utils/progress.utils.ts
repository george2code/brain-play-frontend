import { roundSizeFor } from '@/constants/game-rules.constants';
import { GAMES, isGameCode } from '@/constants/games.constants';

import type {
  DemoAttempt,
  DemoGameStats,
  DemoProfile,
  GameCode,
  NumberLevel,
} from '@/shared/types/game.types';

const TROPHY_ORDER: NumberLevel[] = ['mixed', 'hard', 'medium', 'easy'];
const isNumberLevel = (value: unknown): value is NumberLevel =>
  TROPHY_ORDER.some((level) => level === value);

function legacyNumberBest(
  totals?: Record<string, DemoGameStats>,
): NonNullable<DemoProfile['numberBestByLevel']> {
  const score = Math.max(
    totals?.['number-iq:1']?.bestScore ?? -1,
    totals?.['number-iq:2']?.bestScore ?? -1,
  );
  return score >= 0 ? { mixed: score } : {};
}

export const EMPTY_PROFILE: DemoProfile = {
  version: 1,
  nickname: '',
  attempts: [],
  totals: {},
};
const statsKey = (game: GameCode, version: number) => `${game}:${version}`;

function addToTotals(
  totals: Record<string, DemoGameStats>,
  attempt: DemoAttempt,
) {
  const key = statsKey(attempt.game, attempt.rulesVersion ?? 1);
  const previous = totals[key] || {
    played: 0,
    correct: 0,
    total: 0,
    bestScore: 0,
  };
  return {
    ...totals,
    [key]: {
      played: previous.played + 1,
      correct: previous.correct + attempt.correct,
      total: previous.total + attempt.total,
      bestScore: Math.max(previous.bestScore, attempt.score),
    },
  };
}

export function gameStats(profile: DemoProfile, game: GameCode): DemoGameStats {
  return Object.entries(profile.totals || {}).reduce<DemoGameStats>(
    (summary, [key, stats]) =>
      key.startsWith(`${game}:`)
        ? {
            played: summary.played + stats.played,
            correct: summary.correct + stats.correct,
            total: summary.total + stats.total,
            bestScore: Math.max(summary.bestScore, stats.bestScore),
          }
        : summary,
    { played: 0, correct: 0, total: 0, bestScore: 0 },
  );
}

export function numberTrophy(
  profile: DemoProfile,
  remoteBest?: Partial<Record<NumberLevel, number>>,
): {
  level: NumberLevel;
  score: number;
} | null {
  const bests = profile.numberBestByLevel || legacyNumberBest(profile.totals);
  let winner: { level: NumberLevel; score: number } | null = null;
  for (const level of TROPHY_ORDER) {
    const score = Math.max(bests[level] ?? -1, remoteBest?.[level] ?? -1);
    if (score >= 0 && (!winner || score > winner.score))
      winner = { level, score };
  }
  return winner;
}

export function combinedGameStats(
  profile: DemoProfile,
  game: GameCode,
  remoteStats?: {
    played: number;
    correct: number;
    total?: number;
    bestScore: number;
  } | null,
): DemoGameStats {
  const local = gameStats(profile, game);
  if (!remoteStats) return local;
  return {
    played: local.played + remoteStats.played,
    correct: local.correct + remoteStats.correct,
    total: local.total + (remoteStats.total ?? remoteStats.played * 10),
    bestScore: Math.max(local.bestScore, remoteStats.bestScore),
  };
}
export const utcDay = (date: Date = new Date()) =>
  date.toISOString().slice(0, 10);
export function dailyGame(date: string) {
  const index =
    Math.floor(Date.parse(`${date}T00:00:00Z`) / 86_400_000) % GAMES.length;
  return GAMES[index];
}

export function parseProfile(raw: string | null): DemoProfile {
  if (!raw) return EMPTY_PROFILE;
  try {
    const value = JSON.parse(raw);
    if (
      value?.version !== 1 ||
      typeof value.nickname !== 'string' ||
      !Array.isArray(value.attempts)
    )
      return EMPTY_PROFILE;
    const attempts: DemoAttempt[] = value.attempts
      .filter(
        (a: DemoAttempt) =>
          a &&
          typeof a.id === 'string' &&
          isGameCode(a.game) &&
          ['practice', 'daily'].includes(a.mode) &&
          Number.isInteger(a.total) &&
          a.total === roundSizeFor(a.game, a.rulesVersion ?? 1) &&
          Number.isInteger(a.correct) &&
          a.correct >= 0 &&
          a.correct <= a.total &&
          a.score === a.correct * 100 &&
          typeof a.completedAt === 'string' &&
          Number.isFinite(Date.parse(a.completedAt)) &&
          (a.numberLevel === undefined ||
            (a.game === 'number-iq' && isNumberLevel(a.numberLevel))) &&
          (a.mode !== 'daily' ||
            (typeof a.dailyDate === 'string' &&
              /^\d{4}-\d{2}-\d{2}$/.test(a.dailyDate) &&
              Number.isFinite(Date.parse(a.dailyDate)))),
      )
      .slice(0, 100);
    let totals: Record<string, DemoGameStats> = {};
    if (
      value.totals &&
      typeof value.totals === 'object' &&
      !Array.isArray(value.totals)
    ) {
      for (const [key, stat] of Object.entries(value.totals)) {
        const match = key.match(/^([^:]+):([1-9]\d*)$/);
        const roundSize =
          match && isGameCode(match[1])
            ? roundSizeFor(match[1], Number(match[2]))
            : undefined;
        const item = stat as DemoGameStats;
        if (
          roundSize !== undefined &&
          item &&
          Number.isInteger(item.played) &&
          item.played >= 0 &&
          Number.isInteger(item.correct) &&
          item.correct >= 0 &&
          Number.isInteger(item.total) &&
          item.total >= item.correct &&
          Number.isInteger(item.bestScore) &&
          item.bestScore >= 0 &&
          item.bestScore <= roundSize * 100
        )
          totals[key] = item;
      }
    } else {
      for (const attempt of attempts) totals = addToTotals(totals, attempt);
    }
    const numberBestByLevel: NonNullable<DemoProfile['numberBestByLevel']> = {};
    if (
      value.numberBestByLevel &&
      typeof value.numberBestByLevel === 'object' &&
      !Array.isArray(value.numberBestByLevel)
    ) {
      for (const level of TROPHY_ORDER) {
        const score = value.numberBestByLevel[level];
        if (
          Number.isInteger(score) &&
          score >= 0 &&
          score <= 1000 &&
          score % 100 === 0
        )
          numberBestByLevel[level] = score;
      }
    }
    if (Object.keys(numberBestByLevel).length === 0)
      Object.assign(numberBestByLevel, legacyNumberBest(totals));
    return {
      version: 1,
      nickname: value.nickname.trim().slice(0, 24),
      attempts,
      totals,
      numberBestByLevel,
    };
  } catch {
    return EMPTY_PROFILE;
  }
}

export function addAttempt(
  profile: DemoProfile,
  attempt: DemoAttempt,
): DemoProfile {
  if (
    profile.attempts.some(
      (a) =>
        a.id === attempt.id ||
        (attempt.mode === 'daily' &&
          a.mode === 'daily' &&
          a.dailyDate === attempt.dailyDate),
    )
  )
    return profile;
  const numberBestByLevel =
    profile.numberBestByLevel || legacyNumberBest(profile.totals);
  const level = attempt.numberLevel || 'mixed';
  return {
    ...profile,
    attempts: [attempt, ...profile.attempts].slice(0, 100),
    totals: addToTotals(profile.totals || {}, attempt),
    ...(attempt.game === 'number-iq'
      ? {
          numberBestByLevel: {
            ...numberBestByLevel,
            [level]: Math.max(numberBestByLevel[level] ?? -1, attempt.score),
          },
        }
      : {}),
  };
}

export function progressStats(
  attempts: Pick<DemoAttempt, 'completedAt' | 'correct' | 'total'>[],
  today = utcDay(),
) {
  const correct = attempts.reduce((sum, a) => sum + a.correct, 0);
  const total = attempts.reduce((sum, a) => sum + a.total, 0);
  const days = new Set(attempts.map((a) => utcDay(new Date(a.completedAt))));
  let cursor = Date.parse(`${today}T00:00:00Z`);
  if (!days.has(today)) cursor -= 86_400_000;
  let streak = 0;
  while (days.has(utcDay(new Date(cursor)))) {
    streak++;
    cursor -= 86_400_000;
  }
  return {
    played: attempts.length,
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    correct,
    streak,
  };
}
