'use client';
import { GameSession } from '@/components/games/GameSession';
import { Skeleton } from '@/components/ui/skeleton';

import { useUtcDay } from '@/hooks/useUtcDay';

import { dailyGame } from '@/utils/progress.utils';

export default function Daily() {
  const day = useUtcDay();
  if (!day)
    return (
      <div className="page-container py-10">
        <Skeleton className="mx-auto h-[480px] max-w-[720px] rounded-2xl" />
      </div>
    );
  return <GameSession key={day} game={dailyGame(day)} dailyDate={day} />;
}
