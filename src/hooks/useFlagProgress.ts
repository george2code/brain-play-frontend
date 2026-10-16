'use client';

import { useEffect, useState } from 'react';

import { readFlagHistory, readFlagStats } from '@/services/flag-master.service';
import type {
  ServerAttempt,
  ServerFlagStats,
} from '@/services/flag-master.service';

export const FLAG_PROGRESS_EVENT = 'brainplay:flag-progress';

export function useFlagProgress() {
  const [stats, setStats] = useState<ServerFlagStats | null>(null);
  const [history, setHistory] = useState<ServerAttempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const refresh = () => {
      void Promise.all([readFlagStats(), readFlagHistory()])
        .then(([nextStats, nextHistory]) => {
          if (active) {
            setStats(nextStats);
            setHistory(nextHistory);
            setLoading(false);
          }
        })
        .catch(() => {
          if (active) {
            setStats(null);
            setHistory([]);
            setLoading(false);
          }
        });
    };
    refresh();
    window.addEventListener(FLAG_PROGRESS_EVENT, refresh);
    return () => {
      active = false;
      window.removeEventListener(FLAG_PROGRESS_EVENT, refresh);
    };
  }, []);

  return { stats, history, loading };
}
