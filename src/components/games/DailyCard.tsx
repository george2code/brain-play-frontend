'use client';
import { ArrowRight, Check, Sparkles, Sun } from 'lucide-react';

import Link from '@/components/shared/LocalizedLink';

import { ROUTES } from '@/config/routes.config';

import { useDemoProfile } from '@/hooks/useDemoProfile';
import { useUtcDay } from '@/hooks/useUtcDay';
import { useVerifiedProgress } from '@/hooks/useVerifiedProgress';

import { useLocale } from '@/i18n/LocaleProvider';

import { dailyGame } from '@/utils/progress.utils';

export function DailyCard() {
  const { t } = useLocale();
  const today = useUtcDay();
  const { profile } = useDemoProfile();
  const { history } = useVerifiedProgress();
  const completed =
    today &&
    (profile.attempts.some(
      (a) => a.mode === 'daily' && a.dailyDate === today,
    ) ||
      history.some(
        (attempt) =>
          attempt.mode.code === 'daily' &&
          attempt.completedAt.slice(0, 10) === today,
      ));
  return (
    <section className="relative overflow-hidden rounded-2xl border border-primary/15 bg-hero p-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-card/80 text-primary">
          <Sun size={24} strokeWidth={1.6} />
        </span>
        <span className="rounded-full border border-primary/15 bg-card/60 px-2.5 py-1 text-[10px] font-medium text-primary">
          {t.daily}
        </span>
      </div>
      <p className="eyebrow mb-3 text-primary/80">{t.dailyEyebrow}</p>
      <h2 className="max-w-56 text-[27px] leading-tight font-semibold tracking-tight">
        {completed ? t.dailyCompleted : t.dailyTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {completed ? t.tomorrow : t.dailyDescription}
      </p>
      <div className="my-5 flex items-center gap-2 border-y border-primary/10 py-3 text-sm">
        <Sparkles size={16} className="text-primary" />
        {today ? dailyGame(today).title : '…'}
      </div>
      <Link
        href={completed ? ROUTES.profile : ROUTES.daily}
        className="action-link w-full px-3 text-xs"
      >
        {completed ? <Check size={15} /> : null}
        {completed ? t.viewProfile : t.startDaily}
        <ArrowRight size={15} />
      </Link>
      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        {t.dailyNote}
      </p>
    </section>
  );
}
