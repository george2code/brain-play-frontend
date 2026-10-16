'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { GameArtwork } from '@/components/games/GameArtwork';

import { ROUTES } from '@/config/routes.config';

import { GAMES } from '@/constants/games.constants';

import { useLocale } from '@/i18n/LocaleProvider';

import type { GameCode } from '@/shared/types/game.types';

export function GameRecommendations({
  currentGame,
}: {
  currentGame: GameCode;
}) {
  const { t, locale } = useLocale();

  return (
    <section aria-labelledby="more-games-title" className="mt-10">
      <h2 id="more-games-title" className="section-title">
        {t.tryAnotherGame}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {t.tryAnotherGameDescription}
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {GAMES.filter((game) => game.code !== currentGame).map((game) => (
          <Link
            key={game.code}
            href={ROUTES.game(game.code)}
            aria-label={`${t.play} — ${game.title}`}
            className="surface-card group overflow-hidden transition-colors hover:border-primary/40"
          >
            <GameArtwork code={game.code} className="h-32" />
            <div className="p-4">
              <p className="mb-2 text-[11px] text-muted-foreground">
                {game.category[locale]}
              </p>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold tracking-tight">
                  {game.title}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
