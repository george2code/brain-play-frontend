import type { AxiosInstance } from 'axios';

import { API_ROUTES } from '@/config/api.config';

import type {
  ApiAttempt,
  ApiProfile,
  ApiStatistics,
  CursorPage,
} from '@/shared/types/api.types';
import type { Locale } from '@/shared/types/game.types';

export function createProfileService(client: AxiosInstance) {
  return {
    async me(signal?: AbortSignal) {
      return (await client.get<ApiProfile>(API_ROUTES.profile, { signal }))
        .data;
    },
    async update(data: { nickname?: string; preferredLocale?: Locale }) {
      return (await client.patch<ApiProfile>(API_ROUTES.profile, data)).data;
    },
    async statistics(signal?: AbortSignal) {
      return (
        await client.get<ApiStatistics[]>(API_ROUTES.statistics, { signal })
      ).data;
    },
    async attempts(cursor?: string, signal?: AbortSignal) {
      return (
        await client.get<CursorPage<ApiAttempt>>(API_ROUTES.attempts, {
          params: { cursor, limit: 20 },
          signal,
        })
      ).data;
    },
  };
}
