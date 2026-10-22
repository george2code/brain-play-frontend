import { notFound } from 'next/navigation';

import { pageMetadata } from '@/config/seo.config';

import { isLocale } from '@/i18n/routing';

export function metadataForPath(path: string) {
  return async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return pageMetadata(locale, path);
  };
}
