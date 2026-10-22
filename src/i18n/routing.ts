import type { Locale } from '@/shared/types/game.types';

export const locales = ['en', 'uk', 'ru'] as const;
export const defaultLocale: Locale = 'en';
export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
export function withoutLocale(path: string): string {
  return path.replace(/^\/(en|uk|ru)(?=\/|\?|#|$)/, '') || '/';
}
export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = withoutLocale(path).replace(/^\/(?=[?#])/, '');
  return '/' + locale + (base === '/' ? '' : base);
}
