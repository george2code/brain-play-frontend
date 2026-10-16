'use client';

import { queryOptions, useQuery } from '@tanstack/react-query';

import { gameService } from '@/services/game.service';

export const gamesQuery = () =>
  queryOptions({
    queryKey: ['games'],
    queryFn: ({ signal }) => gameService.list(signal),
    staleTime: 5 * 60_000,
  });
// Explicitly opt in at integration time; the preview never hides API errors behind demo data.
export function useGames(enabled = false) {
  return useQuery({ ...gamesQuery(), enabled });
}
