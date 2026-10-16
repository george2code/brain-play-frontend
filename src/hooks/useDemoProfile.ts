'use client';

import { useMemo } from 'react';
import toast from 'react-hot-toast';

import {
  readLocal,
  useHydrated,
  useLocalStore,
  writeLocal,
} from '@/hooks/useLocalStore';

import { useLocale } from '@/i18n/LocaleProvider';

import type { DemoAttempt } from '@/shared/types/game.types';

import {
  EMPTY_PROFILE,
  addAttempt,
  parseProfile,
} from '@/utils/progress.utils';

const KEY = 'brainplay:demo-profile:v1';
export function useDemoProfile() {
  const raw = useLocalStore(KEY);
  const profile = useMemo(() => parseProfile(raw), [raw]);
  const hydrated = useHydrated();
  const { t } = useLocale();
  function write(value: typeof profile) {
    if (!writeLocal(KEY, JSON.stringify(value)))
      toast.error(t.storageError, { id: 'storage-error' });
  }
  return {
    profile,
    hydrated,
    hasPlayed: profile.attempts.length > 0,
    complete: (attempt: DemoAttempt) =>
      write(addAttempt(parseProfile(readLocal(KEY)), attempt)),
    rename: (nickname: string) =>
      write({
        ...parseProfile(readLocal(KEY)),
        nickname: nickname.trim().slice(0, 24),
      }),
    reset: () => write(EMPTY_PROFILE),
  };
}
