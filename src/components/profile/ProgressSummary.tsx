'use client';
import { ArrowUpRight, Flame, Gamepad2, Sprout, Target } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/routes.config';

import { useDemoProfile } from '@/hooks/useDemoProfile';

import { useLocale } from '@/i18n/LocaleProvider';

import { progressStats } from '@/utils/progress.utils';

export function ProgressSummary() {
  const { t } = useLocale();
  const { profile, hasPlayed } = useDemoProfile();
  const stats = progressStats(profile.attempts);
  return (
    <section className="surface-card p-6">
      <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
        <Sprout size={23} />
      </span>
      <h2 className="text-lg font-semibold tracking-tight">
        {hasPlayed ? t.progress : t.firstTitle}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {hasPlayed ? t.progressDescription : t.firstDescription}
      </p>
      {hasPlayed && (
        <div className="my-5 space-y-3">
          {[
            { icon: Gamepad2, label: t.played, value: stats.played },
            { icon: Target, label: t.accuracy, value: `${stats.accuracy}%` },
            { icon: Flame, label: t.streak, value: stats.streak },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <Icon size={15} className="text-muted-foreground" />
              <span className="flex-1 text-muted-foreground">{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      )}
      <Link
        href={hasPlayed ? ROUTES.profile : '/#games'}
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
      >
        {hasPlayed ? t.viewProfile : t.pickGame}
        <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
