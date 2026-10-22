import type { MetadataRoute } from 'next';

import {
  SITE_URL,
  isIndexable,
  languageAlternates,
  publicPaths,
} from '@/config/seo.config';

import { locales, localizedPath } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable()) return [];
  return publicPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: SITE_URL + localizedPath(path, locale),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
