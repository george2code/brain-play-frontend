'use client';

import { createContext, useContext, useEffect } from 'react';

import { useLocalStore, writeLocal } from '@/hooks/useLocalStore';

import { type Dictionary, dictionaries } from '@/i18n/dictionaries';

import type { Locale } from '@/shared/types/game.types';

const LocaleContext = createContext<{
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
} | null>(null);
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const stored = useLocalStore('brainplay:locale');
  const locale: Locale = stored === 'ru' || stored === 'uk' ? stored : 'en';
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <LocaleContext
      value={{
        locale,
        t: dictionaries[locale],
        setLocale: (value) => {
          writeLocal('brainplay:locale', value);
        },
      }}
    >
      {children}
    </LocaleContext>
  );
}
export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useLocale requires LocaleProvider');
  return value;
}
