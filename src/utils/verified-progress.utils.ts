import { isGameCode } from '@/constants/games.constants';

import type { VerifiedStats } from '@/hooks/useVerifiedProgress';

import type { ServerAttempt } from '@/services/flag-master.service';

import type { DemoAttempt, GameCode } from '@/shared/types/game.types';

export function verifiedStatsForGame(stats: VerifiedStats, game: GameCode) {
  return game === 'time-traveler' ? null : stats[game];
}

export function verifiedTotals(stats: VerifiedStats) {
  const values = Object.values(stats).filter((item) => item !== null);
  return {
    played: values.reduce((sum, item) => sum + item.played, 0),
    correct: values.reduce((sum, item) => sum + item.correct, 0),
    total: values.reduce(
      (sum, item) => sum + ('total' in item ? item.total : item.played * 10),
      0,
    ),
  };
}

export function verifiedAttempts(history: ServerAttempt[]): DemoAttempt[] {
  return history.flatMap((attempt) => {
    const game = attempt.mode.game.code;
    if (!isGameCode(game)) return [];
    return [
      {
        id: attempt.id,
        game,
        mode: attempt.mode.code === 'daily' ? 'daily' : 'practice',
        ...(attempt.mode.code === 'daily'
          ? { dailyDate: attempt.completedAt.slice(0, 10) }
          : {}),
        score: attempt.score,
        correct: attempt.correctAnswers,
        total: attempt.totalRounds,
        completedAt: attempt.completedAt,
        rulesVersion: attempt.mode.rulesVersion,
        ...(game === 'number-iq'
          ? {
              numberLevel:
                attempt.mode.code === 'daily' || attempt.mode.code === 'classic'
                  ? ('mixed' as const)
                  : (attempt.mode.code as 'easy' | 'medium' | 'hard'),
            }
          : {}),
      },
    ];
  });
}
