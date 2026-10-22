import '@fontsource-variable/dm-sans';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Providers from '@/app/providers';

import { SITE_URL } from '@/config/seo.config';

import { brand } from '@/i18n/dictionaries';
import { isLocale, locales } from '@/i18n/routing';

import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: brand.name,
  title: { default: brand.name, template: '%s · ' + brand.name },
  robots: { index: false, follow: true },
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
