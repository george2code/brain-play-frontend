'use client';
import { ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { GameArtwork } from '@/components/games/GameArtwork';
import { AdSlot } from '@/components/shared/AdSlot';
import { Button } from '@/components/ui/button';

import { ROUTES } from '@/config/routes.config';

import { GAMES } from '@/constants/games.constants';

import { useLocale } from '@/i18n/LocaleProvider';

export default function Leaderboard() {
  const { t } = useLocale();
  const [game, setGame] = useState(GAMES[0]);
  return (
    <div className="page-container py-10">
      <p className="eyebrow mb-3 text-primary">{t.leaderboard}</p>
      <h1 className="section-title sm:text-4xl">{t.rankingTitle}</h1>
      <p className="mt-4 text-muted-foreground">{t.rankingDescription}</p>
      <div aria-label={t.games} className="my-8 flex flex-wrap gap-2">
        {GAMES.map((item) => (
          <Button
            key={item.code}
            variant={game.code === item.code ? 'default' : 'outline'}
            className="h-11 px-4"
            aria-pressed={game.code === item.code}
            onClick={() => setGame(item)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <section className="surface-card mx-auto max-w-3xl overflow-hidden">
        <GameArtwork code={game.code} />
        <div className="p-8 text-center">
          <Trophy size={32} className="mx-auto mb-4 text-time-ink" />
          <h2 className="text-2xl font-semibold">{t.rankingEmpty}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t.rankingNote}
          </p>
          <Link href={ROUTES.game(game.code)} className="action-link mt-6">
            {game.title}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <div className="mt-10">
        <AdSlot />
      </div>
    </div>
  );
}
