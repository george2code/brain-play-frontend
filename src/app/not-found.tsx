'use client';
import { Compass } from 'lucide-react';
import Link from 'next/link';

import { useLocale } from '@/i18n/LocaleProvider';

export default function NotFound() {
  const { t } = useLocale();
  return (
    <main className="page-container flex min-h-[75vh] flex-col items-center justify-center gap-6 text-center">
      <Compass size={45} className="text-primary" />
      <p className="eyebrow">404</p>
      <h1 className="section-title">{t.notFound}</h1>
      <Link href="/" className="action-link">
        {t.home}
      </Link>
    </main>
  );
}
