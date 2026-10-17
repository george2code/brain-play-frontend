'use client';
import { ArrowUpRight, Clock3, Gamepad2, Target, Trophy } from 'lucide-react';
import Link from 'next/link';

import { GameArtwork } from '@/components/games/GameArtwork';

import { ROUTES } from '@/config/routes.config';

import { useLocale } from '@/i18n/LocaleProvider';

import type { GameDefinition, NumberLevel } from '@/shared/types/game.types';

const trophyColor: Record<NumberLevel, string> = {
  mixed: 'text-trophy-gold',
  hard: 'text-trophy-silver',
  medium: 'text-trophy-bronze',
  easy: 'text-trophy-easy',
};

export function GameCard({
  game,
  best,
  played,
  accuracy,
  numberBestLevel,
}: {
  game: GameDefinition;
  best?: number;
  played?: number;
  accuracy?: number;
  numberBestLevel?: NumberLevel;
}) {
  const { locale, t } = useLocale();
  const levelLabel =
    numberBestLevel === 'mixed'
      ? t.numberMixed
      : numberBestLevel === 'hard'
        ? t.numberHard
        : numberBestLevel === 'medium'
          ? t.numberMedium
          : numberBestLevel === 'easy'
            ? t.numberEasy
            : null;
  return (
    <article className="surface-card group overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <Link
        href={ROUTES.game(game.code)}
        className="block outline-offset-[-4px]"
        aria-label={`${t.play} — ${game.title}`}
      >
        <GameArtwork code={game.code} />
        <div className="p-5 sm:px-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="eyebrow text-muted-foreground">
              {game.category[locale]}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Clock3 size={12} />
              {game.code === 'flag-master'
                ? t.flagMinutes
                : game.code === 'number-iq'
                  ? t.numberMinutes
                  : t.minutes}
            </span>
          </div>
          <h3 className="mb-2 text-[23px] font-semibold tracking-tight">
            {game.title}
          </h3>
          <p className="min-h-11 text-sm leading-relaxed text-muted-foreground">
            {game.description[locale]}
          </p>
          <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-t pt-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              {best !== undefined ? (
                <>
                  <span
                    className="inline-flex items-center gap-1"
                    aria-label={`${t.best}: ${best} ${t.points}${levelLabel ? `, ${t.numberLevel}: ${levelLabel}` : ''}`}
                  >
                    <Trophy
                      size={game.code === 'number-iq' ? 17 : 13}
                      data-testid={
                        game.code === 'number-iq' ? 'number-trophy' : undefined
                      }
                      className={
                        game.code === 'number-iq' && numberBestLevel
                          ? trophyColor[numberBestLevel]
                          : 'text-time-ink'
                      }
                    />
                    {best} {t.points}
                    {levelLabel && <span>· {levelLabel}</span>}
                  </span>
                  <span
                    className="inline-flex items-center gap-1"
                    aria-label={`${t.played}: ${played}`}
                  >
                    <Gamepad2 size={13} className="text-flag-ink" />
                    {played}
                  </span>
                  <span
                    className="inline-flex items-center gap-1"
                    aria-label={`${t.accuracy}: ${accuracy}%`}
                  >
                    <Target size={13} className="text-destructive" />
                    {accuracy}%
                  </span>
                </>
              ) : game.code === 'flag-master' ? (
                t.flagRoundSize
              ) : game.code === 'number-iq' ? (
                t.numberRoundSize
              ) : game.code === 'geo-challenge' ? (
                t.geoRoundSize
              ) : (
                t.quickRound
              )}
            </div>
            <span className="inline-flex items-center justify-self-end gap-2 whitespace-nowrap text-sm font-semibold text-primary">
              {t.play}
              <span className="flex size-8 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-accent">
                <ArrowUpRight size={17} />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
