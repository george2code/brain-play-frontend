import { NextRequest, NextResponse } from 'next/server';

import { isIndexable } from '@/config/site.config';

import { defaultLocale, isLocale, localizedPath } from '@/i18n/routing';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  // next start can use its internal hostname in nextUrl behind a reverse proxy.
  // Only the two known public hosts affect canonical redirects and indexing.
  const hostname = (request.headers.get('host') ?? url.host)
    .toLowerCase()
    .replace(/:\d+$/, '');
  const publicHost =
    hostname === 'quizroam.net' || hostname === 'www.quizroam.net';
  let redirect = false;
  if (publicHost) {
    url.host = 'quizroam.net';
    url.port = '';
    url.protocol = 'https:';
    redirect = hostname === 'www.quizroam.net';
  }
  const legacy =
    /^\/(?:|about|privacy|faq|daily|profile|leaderboard|games\/[^/]+)\/?$/;
  if (!isLocale(url.pathname.split('/')[1]) && legacy.test(url.pathname)) {
    url.pathname = localizedPath(url.pathname, defaultLocale);
    redirect = true;
  }
  const response = redirect
    ? NextResponse.redirect(url, 308)
    : NextResponse.next();
  if (!isIndexable() || !publicHost)
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  return response;
}

export const config = {
  matcher: [
    '/((?!api(?:/|$)|_next/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$).*)',
  ],
};
