'use client';
import { ArrowUpRight, Flame, Gamepad2, Sprout, Target } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/routes.config';

import { useDemoProfile } from '@/hooks/useDemoProfile';
import type { VerifiedStats } from '@/hooks/useVerifiedProgress';

import { useLocale } from '@/i18n/LocaleProvider';

import type { ServerAttempt } from '@/services/flag-master.service';

import { progressStats } from '@/utils/progress.utils';
import { verifiedTotals } from '@/utils/verified-progress.utils';

export function ProgressSummary({
  verifiedStats,
  verifiedHistory,
}: {
  verifiedStats: VerifiedStats;
  verifiedHistory: ServerAttempt[];
}) {
  const { t } = useLocale();
  const { profile } = useDemoProfile();
  const localTotals = Object.values(profile.totals || {});
  const remote = verifiedTotals(verifiedStats);
  const played =
    localTotals.reduce((sum, item) => sum + item.played, 0) + remote.played;
  const correct =
    localTotals.reduce((sum, item) => sum + item.correct, 0) + remote.correct;
  const total =
    localTotals.reduce((sum, item) => sum + item.total, 0) + remote.total;
  const streak = progressStats([
    ...profile.attempts,
    ...verifiedHistory.map((item) => ({
      completedAt: item.completedAt,
      correct: item.correctAnswers,
      total: item.totalRounds,
    })),
  ]).streak;
  const hasPlayed = played > 0;
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
            { icon: Gamepad2, label: t.played, value: played },
            {
              icon: Target,
              label: t.accuracy,
              value: `${total ? Math.round((correct / total) * 100) : 0}%`,
            },
            { icon: Flame, label: t.streak, value: streak },
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
