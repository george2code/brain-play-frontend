import type { Metadata } from 'next';

import { SITE_URL, isIndexable } from '@/config/site.config';

import { dictionaries, faqCopy, seoCopy } from '@/i18n/dictionaries';
import { locales, localizedPath } from '@/i18n/routing';

import type { GameCode, Locale } from '@/shared/types/game.types';

export { SITE_URL, isIndexable } from '@/config/site.config';
export const publicPaths = [
  '/',
  '/daily',
  '/faq',
  '/about',
  '/games/flag-master',
  '/games/geo-challenge',
  '/games/number-iq',
  '/games/time-traveler',
] as const;

export function languageAlternates(path: string) {
  return Object.fromEntries([
    ...locales.map((locale) => [
      locale,
      SITE_URL + localizedPath(path, locale),
    ]),
    ['x-default', SITE_URL + localizedPath(path, 'en')],
  ]);
}

export function pageMetadata(locale: Locale, path: string): Metadata {
  const t = dictionaries[locale];
  const copy = seoCopy[locale];
  const gameCode = path.startsWith('/games/')
    ? (path.slice(7) as GameCode)
    : undefined;
  const content = gameCode
    ? copy.games[gameCode]
    : path === '/'
      ? copy.home
      : path === '/daily'
        ? copy.daily
        : undefined;
  const title =
    content?.title ??
    (path === '/faq'
      ? faqCopy[locale].title
      : path === '/about'
        ? t.about
        : path === '/privacy'
          ? t.privacy
          : path === '/profile'
            ? t.profile
            : t.leaderboard);
  const description =
    content?.description ??
    (path === '/faq'
      ? faqCopy[locale].description
      : path === '/about'
        ? t.aboutText
        : path === '/privacy'
          ? t.privacyText
          : undefined);
  const canonical = SITE_URL + localizedPath(path, locale);
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    robots: {
      index: isIndexable() && publicPaths.some((item) => item === path),
      follow: true,
    },
    openGraph: {
      title: title + ' · QuizRoam',
      description,
      url: canonical,
      siteName: 'QuizRoam',
      type: 'website',
      locale: { en: 'en_US', uk: 'uk_UA', ru: 'ru_RU' }[locale],
    },
    twitter: { card: 'summary', title: title + ' · QuizRoam', description },
  };
}
