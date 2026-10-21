'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { isUnauthorized, sessionClient } from '@/api/session.client';

import type { ApiProfile } from '@/shared/types/api.types';

export function useAuth() {
  const client = useQueryClient();
  const query = useQuery({
    queryKey: ['auth-profile'],
    queryFn: async ({ signal }) => {
      try {
        return (await sessionClient.get<ApiProfile>('/users/me', { signal }))
          .data;
      } catch (error) {
        if (isUnauthorized(error)) return null;
        throw error;
      }
    },
    retry: false,
    // Several profile children subscribe to this query. Remounting them after an
    // outage must not restart loading and unmount them again in a request loop.
    retryOnMount: false,
  });
  useEffect(() => {
    const refresh = () => {
      void client.invalidateQueries({ queryKey: ['auth-profile'] });
    };
    window.addEventListener('brainplay:session-changed', refresh);
    return () =>
      window.removeEventListener('brainplay:session-changed', refresh);
  }, [client]);
  return {
    user: query.data ?? null,
    registered: query.data?.status === 'REGISTERED',
    loading: query.isPending,
  };
}
