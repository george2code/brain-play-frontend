'use client';
import { Sprout } from 'lucide-react';
import Link from 'next/link';

import { useLocale } from '@/i18n/LocaleProvider';

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="mt-16 border-t">
      <div className="page-container flex flex-col items-start justify-between gap-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <span className="flex items-center gap-2">
          <Sprout className="text-primary" size={17} />
          BrainPlay · {t.footer}
        </span>
        <div className="flex flex-wrap items-center gap-5">
          <Link className="py-2 hover:text-primary" href="/about">
            {t.about}
          </Link>
          <Link className="py-2 hover:text-primary" href="/privacy">
            {t.privacy}
          </Link>
          <span className="rounded-md bg-secondary px-2 py-1">{t.demo}</span>
        </div>
      </div>
    </footer>
  );
}
