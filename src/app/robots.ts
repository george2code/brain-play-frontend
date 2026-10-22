import type { MetadataRoute } from 'next';

import { SITE_URL, isIndexable } from '@/config/seo.config';

export default function robots(): MetadataRoute.Robots {
  // Permit crawling so search engines can see noindex on private and preview pages.
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    ...(isIndexable() ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
