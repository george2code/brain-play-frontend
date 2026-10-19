'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import {
  readFlagStats,
  readVerifiedHistory,
} from '@/services/flag-master.service';
import type { ServerFlagStats } from '@/services/flag-master.service';
import { readQuizStats } from '@/services/quiz-rounds.service';
import type { ServerQuizStats } from '@/services/quiz-rounds.service';

export const VERIFIED_PROGRESS_EVENT = 'brainplay:verified-progress';

export type VerifiedStats = {
  'flag-master': ServerFlagStats | null;
  'geo-challenge': ServerQuizStats | null;
  'number-iq': ServerQuizStats | null;
};

const emptyStats: VerifiedStats = {
  'flag-master': null,
  'geo-challenge': null,
  'number-iq': null,
};

export function useVerifiedProgress() {
  const client = useQueryClient();
  const query = useQuery({
    queryKey: ['verified-progress'],
    queryFn: async () => {
      const [flag, geo, number, history] = await Promise.all([
        readFlagStats().catch(() => null),
        readQuizStats('geo-challenge').catch(() => null),
        readQuizStats('number-iq').catch(() => null),
        readVerifiedHistory().catch(() => []),
      ]);
      return {
        stats: {
          'flag-master': flag,
          'geo-challenge': geo,
          'number-iq': number,
        } satisfies VerifiedStats,
        history,
      };
    },
    retry: false,
  });

  useEffect(() => {
    const refresh = () => {
      void client.invalidateQueries({ queryKey: ['verified-progress'] });
    };
    window.addEventListener(VERIFIED_PROGRESS_EVENT, refresh);
    return () => window.removeEventListener(VERIFIED_PROGRESS_EVENT, refresh);
  }, [client]);

  return {
    stats: query.data?.stats ?? emptyStats,
    history: query.data?.history ?? [],
    loading: query.isPending,
  };
}
