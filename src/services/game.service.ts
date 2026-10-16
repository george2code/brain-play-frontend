import { apiClient } from '@/api/api.client';

import { API_ROUTES } from '@/config/api.config';

import type { ApiGame, ApiLeaderboardEntry } from '@/shared/types/api.types';

export const gameService = {
  async list(signal?: AbortSignal) {
    return (await apiClient.get<ApiGame[]>(API_ROUTES.games, { signal })).data;
  },
  async find(code: string, signal?: AbortSignal) {
    return (
      await apiClient.get<ApiGame>(
        `${API_ROUTES.games}/${encodeURIComponent(code)}`,
        { signal },
      )
    ).data;
  },
  async leaderboard(modeId: string, signal?: AbortSignal) {
    return (
      await apiClient.get<ApiLeaderboardEntry[]>(
        API_ROUTES.leaderboard(modeId),
        { signal },
      )
    ).data;
  },
};
