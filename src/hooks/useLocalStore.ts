'use client';

import { useSyncExternalStore } from 'react';

const subscribe = (listener: () => void) => {
  window.addEventListener('storage', listener);
  window.addEventListener('brainplay:storage', listener);
  return () => {
    window.removeEventListener('storage', listener);
    window.removeEventListener('brainplay:storage', listener);
  };
};
const fallback = new Map<string, string>();
export function readLocal(key: string) {
  if (typeof window === 'undefined') return null;
  if (fallback.has(key)) return fallback.get(key)!;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
export function writeLocal(key: string, value: string): boolean {
  let persisted = true;
  try {
    localStorage.setItem(key, value);
    fallback.delete(key);
  } catch {
    fallback.set(key, value);
    persisted = false;
  }
  window.dispatchEvent(new Event('brainplay:storage'));
  return persisted;
}
export function useLocalStore(key: string) {
  return useSyncExternalStore(
    subscribe,
    () => readLocal(key),
    () => null,
  );
}
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
