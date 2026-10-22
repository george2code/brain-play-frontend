'use client';
import { GameSession } from '@/components/games/GameSession';
import { Skeleton } from '@/components/ui/skeleton';

import { useUtcDay } from '@/hooks/useUtcDay';

import { useLocale } from '@/i18n/LocaleProvider';
import { seoCopy } from '@/i18n/dictionaries';

import { dailyGame } from '@/utils/progress.utils';

export default function Daily() {
  const day = useUtcDay();
  const { locale } = useLocale();
  const copy = seoCopy[locale].daily;
  return (
    <>
      <section className="page-container pt-10">
        <h1 className="section-title">{copy.heading}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
          {copy.body}
        </p>
      </section>
      {day ? (
        <GameSession key={day} game={dailyGame(day)} dailyDate={day} />
      ) : (
        <div className="page-container py-10">
          <Skeleton className="mx-auto h-[480px] max-w-[720px] rounded-2xl" />
        </div>
      )}
    </>
  );
}
