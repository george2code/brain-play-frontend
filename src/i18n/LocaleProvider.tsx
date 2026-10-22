'use client';
import { useRouter } from 'next/navigation';
import { createContext, useContext } from 'react';

import { writeLocal } from '@/hooks/useLocalStore';
import { LOCALE_NAVIGATION_EVENT } from '@/hooks/useLocalePreservedState';

import { type Dictionary, dictionaries } from '@/i18n/dictionaries';
import { localizedPath } from '@/i18n/routing';

import type { Locale } from '@/shared/types/game.types';

const LocaleContext = createContext<{
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
} | null>(null);
export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const router = useRouter();
  return (
    <LocaleContext
      value={{
        locale,
        t: dictionaries[locale],
        setLocale: (value) => {
          if (value === locale) return;
          writeLocal('brainplay:locale', value);
          window.dispatchEvent(new Event(LOCALE_NAVIGATION_EVENT));
          router.push(
            localizedPath(window.location.pathname, value) +
              window.location.search +
              window.location.hash,
            { scroll: false },
          );
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
