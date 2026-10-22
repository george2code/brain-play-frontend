import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GameSession } from '@/components/games/GameSession';

import { pageMetadata } from '@/config/seo.config';

import { GAMES, getGame } from '@/constants/games.constants';

import { isLocale } from '@/i18n/routing';

export function generateStaticParams() {
  return GAMES.map(({ code }) => ({ code }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string; locale: string }>;
}): Promise<Metadata> {
  const { code, locale } = await params;
  const game = getGame(code);
  if (!game || !isLocale(locale)) notFound();
  return pageMetadata(locale, '/games/' + game.code);
}
export default async function Page({
  params,
}: {
  params: Promise<{ code: string; locale: string }>;
}) {
  const game = getGame((await params).code);
  if (!game) notFound();
  return <GameSession game={game} />;
}
