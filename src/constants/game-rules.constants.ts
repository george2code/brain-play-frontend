import type { GameCode } from '@/shared/types/game.types';

const GAME_RULES = {
  'geo-challenge': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
  'number-iq': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
  'time-traveler': { currentVersion: 1, rounds: { 1: 3 } },
  'flag-master': { currentVersion: 2, rounds: { 1: 3, 2: 10 } },
} as const satisfies Record<
  GameCode,
  { currentVersion: number; rounds: Record<number, number> }
>;

export const currentRulesVersion = (game: GameCode) =>
  GAME_RULES[game].currentVersion;

export const roundSizeFor = (game: GameCode, version: number) =>
  (GAME_RULES[game].rounds as Record<number, number>)[version];
