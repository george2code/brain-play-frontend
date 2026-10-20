import type { GameCode } from '@/shared/types/game.types';

export const TIME_TRAVELER_ROUND_SIZE = 10;

const GAME_RULES = {
  'geo-challenge': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
  'number-iq': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
  'time-traveler': {
    currentVersion: 5,
    rounds: { 1: 3, 2: 4, 3: 10, 4: 300, 5: TIME_TRAVELER_ROUND_SIZE },
  },
  'flag-master': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
} as const satisfies Record<
  GameCode,
  { currentVersion: number; rounds: Record<number, number> }
>;

export const currentRulesVersion = (game: GameCode) =>
  GAME_RULES[game].currentVersion;

export const roundSizeFor = (game: GameCode, version: number) =>
  (GAME_RULES[game].rounds as Record<number, number>)[version];
