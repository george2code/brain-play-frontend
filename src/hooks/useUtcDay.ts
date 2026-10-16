'use client';

import { useSyncExternalStore } from 'react';

import { utcDay } from '@/utils/progress.utils';

function subscribe(listener: () => void) {
  const timer = window.setInterval(listener, 30_000);
  window.addEventListener('focus', listener);
  return () => {
    clearInterval(timer);
    window.removeEventListener('focus', listener);
  };
}
export function useUtcDay() {
  return useSyncExternalStore(
    subscribe,
    () => utcDay(),
    () => null,
  );
}
