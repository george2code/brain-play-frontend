import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GameSession } from '@/components/games/GameSession';

import { GAMES, getGame } from '@/constants/games.constants';

export function generateStaticParams() {
  return GAMES.map(({ code }) => ({ code }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const game = getGame((await params).code);
  return { title: game?.title || 'Game not found' };
}
export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const game = getGame((await params).code);
  if (!game) notFound();
  return <GameSession game={game} />;
}
