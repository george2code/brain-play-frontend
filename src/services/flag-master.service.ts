import axios from 'axios';

import {
  sessionClient as client,
  withGuestSession,
} from '@/api/session.client';

import { dictionaries } from '@/i18n/dictionaries';

import flagCatalog from '@/services/demo/flags/flags.json';

import type { DemoQuestion } from '@/shared/types/game.types';
import type { GameCode } from '@/shared/types/game.types';

const flags = new Map(flagCatalog.map((flag) => [flag.code, flag]));

export type ServerFlagRound = {
  roundId: string;
  rulesVersion: number;
  questions: { code: string; options: string[] }[];
};
export type ServerFlagResult = {
  roundId: string;
  correctAnswers: number;
  score: number;
  totalRounds: number;
  completedAt: string;
};
export type ServerFlagStats = {
  played: number;
  correct: number;
  wrong: number;
  accuracy: number;
  bestScore: number;
  rulesVersion: number;
};

export async function startFlagRound(
  mode: 'classic' | 'daily',
): Promise<ServerFlagRound> {
  const start = () =>
    client.post<ServerFlagRound>('/flag-master/rounds', { mode });
  return (await withGuestSession(start)).data;
}

export async function completeFlagRound(
  roundId: string,
  answers: number[],
): Promise<ServerFlagResult> {
  return (
    await client.post<ServerFlagResult>(
      `/flag-master/rounds/${encodeURIComponent(roundId)}/complete`,
      { answers },
    )
  ).data;
}

export async function readFlagStats(): Promise<ServerFlagStats | null> {
  try {
    return (await client.get<ServerFlagStats>('/flag-master/stats')).data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401)
      return null;
    throw error;
  }
}

type StoredAttempt = {
  id: string;
  score: number | null;
  correctAnswers: number | null;
  totalRounds: number;
  completedAt: string | null;
  verificationStatus: 'VERIFIED' | 'PENDING' | 'REJECTED';
  mode: { code: string; rulesVersion: number; game: { code: string } };
};
export type ServerAttempt = StoredAttempt & {
  score: number;
  correctAnswers: number;
  completedAt: string;
};

export async function readVerifiedHistory(): Promise<ServerAttempt[]> {
  try {
    const response = await client.get<{ items: StoredAttempt[] }>(
      '/game-attempts/me',
      { params: { limit: 50 } },
    );
    return response.data.items.filter(
      (attempt): attempt is ServerAttempt =>
        attempt.score !== null &&
        attempt.correctAnswers !== null &&
        attempt.completedAt !== null &&
        Number.isFinite(Date.parse(attempt.completedAt)) &&
        attempt.verificationStatus === 'VERIFIED' &&
        ['flag-master', 'geo-challenge', 'number-iq', 'time-traveler'].includes(
          attempt.mode.game.code as GameCode,
        ),
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) return [];
    throw error;
  }
}

export function serverRoundToQuestions(round: ServerFlagRound): DemoQuestion[] {
  if (round.rulesVersion !== 2 || round.questions.length !== 10)
    throw new Error('Unsupported Flag Master round.');
  const seen = new Set<string>();
  return round.questions.map((question) => {
    const flag = flags.get(question.code);
    if (
      !flag ||
      seen.has(flag.code) ||
      question.options.length !== 4 ||
      new Set(question.options).size !== 4 ||
      !question.options.includes(flag.code)
    ) {
      throw new Error('Invalid Flag Master round.');
    }
    seen.add(flag.code);
    const options = question.options.map((code) => flags.get(code)?.name);
    if (options.some((option) => !option))
      throw new Error('Unknown flag option.');
    return {
      id: `flag-${flag.code}`,
      prompt: {
        en: dictionaries.en.flagQuestion,
        ru: dictionaries.ru.flagQuestion,
        uk: dictionaries.uk.flagQuestion,
      },
      visual: `flag:${flag.code.toLowerCase()}`,
      factBefore: flag.factBefore,
      factAfter: flag.factAfter,
      source: flag.source,
      options: options as (typeof flag.name)[],
      answer: question.options.indexOf(flag.code),
    };
  });
}
