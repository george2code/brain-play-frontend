'use client';
import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import { useLocale } from '@/i18n/LocaleProvider';
import { localizedPath } from '@/i18n/routing';

export default function LocalizedLink({
  href,
  ...props
}: ComponentProps<typeof NextLink>) {
  const { locale } = useLocale();
  const localized =
    typeof href === 'string'
      ? localizedPath(href, locale)
      : {
          ...href,
          pathname: href.pathname
            ? localizedPath(href.pathname, locale)
            : href.pathname,
        };
  return <NextLink {...props} href={localized} />;
}
