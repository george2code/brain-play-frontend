'use client';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import { DailyCard } from '@/components/games/DailyCard';
import { GameCard } from '@/components/games/GameCard';
import { ProgressSummary } from '@/components/profile/ProgressSummary';
import { AdSlot } from '@/components/shared/AdSlot';
import { HeroArtwork } from '@/components/shared/HeroArtwork';

import { GAMES } from '@/constants/games.constants';

import { useDemoProfile } from '@/hooks/useDemoProfile';
import { useFlagProgress } from '@/hooks/useFlagProgress';

import { useLocale } from '@/i18n/LocaleProvider';

import { combinedGameStats, numberTrophy } from '@/utils/progress.utils';

export default function Home() {
  const { t } = useLocale();
  const { profile } = useDemoProfile();
  const { stats: flagStats, history: flagHistory } = useFlagProgress();
  return (
    <div className="page-container py-7 sm:py-9">
      <section className="relative flex items-center justify-between gap-5 overflow-hidden rounded-3xl border border-border bg-hero px-6 py-9 sm:px-10 sm:py-10">
        <div className="relative z-10 max-w-[590px]">
          <p className="eyebrow mb-5 flex items-center gap-2 text-primary">
            <Sparkles size={14} />
            {t.eyebrow}
          </p>
          <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-1.8px] sm:text-[54px] lg:text-[60px]">
            {t.heroFirst}
            <br />
            <span className="text-primary">{t.heroSecond}</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            {t.heroDescription}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="#games" className="action-link">
              {t.explore}
              <ArrowRight size={16} />
            </a>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Check size={13} className="text-primary" />
              {t.noAccount}
            </span>
          </div>
        </div>
        <HeroArtwork />
      </section>
      <div className="mt-10 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px]">
        <section id="games" className="min-w-0 scroll-mt-6">
          <div className="mb-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="section-title">{t.choose}</h2>
              <span className="hidden shrink-0 rounded-full border px-3 py-1 text-xs text-muted-foreground sm:block">
                4 {t.games.toLowerCase()}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.chooseDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {GAMES.map((game) => {
              const summary = combinedGameStats(profile, game.code, flagStats);
              const accuracy = summary.total
                ? Math.round((summary.correct / summary.total) * 100)
                : 0;
              return (
                <GameCard
                  key={game.code}
                  game={game}
                  best={summary.played ? summary.bestScore : undefined}
                  played={summary.played}
                  accuracy={accuracy}
                  numberBestLevel={
                    game.code === 'number-iq'
                      ? numberTrophy(profile)?.level
                      : undefined
                  }
                />
              );
            })}
          </div>
          <div className="mt-7">
            <AdSlot />
          </div>
        </section>
        <aside className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <DailyCard />
          <div className="hidden lg:block">
            <AdSlot format="rectangle" />
          </div>
          <ProgressSummary flagStats={flagStats} flagHistory={flagHistory} />
        </aside>
      </div>
    </div>
  );
}
