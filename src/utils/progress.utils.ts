import { GAMES, isGameCode } from '@/constants/games.constants';

import type {
  DemoAttempt,
  DemoGameStats,
  DemoProfile,
  GameCode,
} from '@/shared/types/game.types';

export const EMPTY_PROFILE: DemoProfile = {
  version: 1,
  nickname: '',
  attempts: [],
  totals: {},
};
const statsKey = (game: GameCode, version: number) => `${game}:${version}`;
const currentVersion = (game: GameCode) => (game === 'flag-master' ? 2 : 1);

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
  return (
    profile.totals?.[statsKey(game, currentVersion(game))] || {
      played: 0,
      correct: 0,
      total: 0,
      bestScore: 0,
    }
  );
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
          a.total ===
            (a.game === 'flag-master' && a.rulesVersion === 2 ? 10 : 3) &&
          Number.isInteger(a.correct) &&
          a.correct >= 0 &&
          a.correct <= a.total &&
          a.score === a.correct * 100 &&
          typeof a.completedAt === 'string' &&
          Number.isFinite(Date.parse(a.completedAt)) &&
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
        const item = stat as DemoGameStats;
        if (
          /^(geo-challenge|number-iq|time-traveler):1$|^flag-master:[12]$/.test(
            key,
          ) &&
          item &&
          Number.isInteger(item.played) &&
          item.played >= 0 &&
          Number.isInteger(item.correct) &&
          item.correct >= 0 &&
          Number.isInteger(item.total) &&
          item.total >= item.correct &&
          Number.isInteger(item.bestScore) &&
          item.bestScore >= 0 &&
          item.bestScore <= (key === 'flag-master:2' ? 1000 : 300)
        )
          totals[key] = item;
      }
    } else {
      for (const attempt of attempts) totals = addToTotals(totals, attempt);
    }
    return {
      version: 1,
      nickname: value.nickname.trim().slice(0, 24),
      attempts,
      totals,
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
  return {
    ...profile,
    attempts: [attempt, ...profile.attempts].slice(0, 100),
    totals: addToTotals(profile.totals || {}, attempt),
  };
}

export function progressStats(attempts: DemoAttempt[], today = utcDay()) {
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
