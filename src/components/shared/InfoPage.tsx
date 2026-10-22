'use client';
import { ArrowLeft, Sprout } from 'lucide-react';

import Link from '@/components/shared/LocalizedLink';

import { useLocale } from '@/i18n/LocaleProvider';

export function InfoPage({ kind }: { kind: 'about' | 'privacy' }) {
  const { t } = useLocale();
  return (
    <div className="page-container py-12">
      <section className="surface-card mx-auto max-w-2xl p-7 sm:p-10">
        <Sprout className="mb-5 text-primary" size={32} />
        <h1 className="section-title">{t[kind]}</h1>
        <p className="mt-5 leading-8 text-muted-foreground">
          {kind === 'about' ? t.aboutText : t.privacyText}
        </p>
        <Link href="/" className="quiet-link mt-7">
          <ArrowLeft size={15} />
          {t.home}
        </Link>
      </section>
    </div>
  );
}
