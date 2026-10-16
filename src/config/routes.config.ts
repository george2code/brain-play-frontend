import type { GameCode } from '@/shared/types/game.types';

export const ROUTES = {
  home: '/',
  profile: '/profile',
  daily: '/daily',
  leaderboard: '/leaderboard',
  game: (code: GameCode) => `/games/${code}`,
} as const;
