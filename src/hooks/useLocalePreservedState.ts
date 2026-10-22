'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

import { withoutLocale } from '@/i18n/routing';

export const LOCALE_NAVIGATION_EVENT = 'quizroam:locale-navigation';

type Store<T, R> = {
  transient: R;
  getSnapshot: () => T;
  subscribe: (listener: () => void) => () => void;
  update: (patch: Partial<T>) => void;
};

function createStore<T, R>(initial: T, transient: R): Store<T, R> {
  let state = initial;
  const listeners = new Set<() => void>();
  return {
    transient,
    getSnapshot: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    update: (patch) => {
      state = { ...state, ...patch };
      listeners.forEach((listener) => listener());
    },
  };
}

// Only an explicit language switch hands a mounted client store to the next route.
// Never populated on the server or persisted to browser storage.
let handoff:
  { key: string; path: string; expires: number; store: unknown } | undefined;

export function useLocalePreservedState<T, R>(
  key: string,
  initial: T,
  transient: R,
) {
  const [store] = useState<Store<T, R>>(() => {
    if (
      typeof window !== 'undefined' &&
      handoff?.key === key &&
      handoff.path === withoutLocale(window.location.pathname) &&
      handoff.expires > Date.now()
    ) {
      return handoff.store as Store<T, R>;
    }
    return createStore(initial, transient);
  });
  const state = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
  );

  useEffect(() => {
    if (handoff?.store === store) handoff = undefined;
    const preserve = () => {
      handoff = {
        key,
        path: withoutLocale(window.location.pathname),
        expires: Date.now() + 30_000,
        store,
      };
    };
    window.addEventListener(LOCALE_NAVIGATION_EVENT, preserve);
    return () => window.removeEventListener(LOCALE_NAVIGATION_EVENT, preserve);
  }, [key, store]);

  return [state, store.update, store.transient] as const;
}
