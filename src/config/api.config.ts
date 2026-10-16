export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
export const API_ROUTES = {
  games: '/games',
  profile: '/users/me',
  statistics: '/statistics/me',
  attempts: '/game-attempts/me',
  leaderboard: (modeId: string) =>
    `/leaderboards/${encodeURIComponent(modeId)}`,
} as const;
