import axios from 'axios';

import { API_BASE_URL } from '@/config/api.config';

import { NUMBER_QUESTION_BANK } from '@/services/demo/number-questions';

import type { GameCode, NumberLevel } from '@/shared/types/game.types';

export type QuizGame = Extract<GameCode, 'geo-challenge' | 'number-iq'>;
export type ServerQuizRound = {
  roundId: string;
  rulesVersion: number;
  contentVersion: string;
  dailyDate?: string;
  questions: { id: string }[];
};
export type ServerQuizResult = {
  roundId: string;
  correctAnswers: number;
  score: number;
  totalRounds: number;
  completedAt: string;
};
export type ServerQuizStats = {
  played: number;
  correct: number;
  total: number;
  bestScore: number;
  bestByLevel?: Partial<Record<NumberLevel, number>>;
  rulesVersion: number;
};

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export async function startQuizRound(
  game: QuizGame,
  mode: 'classic' | 'daily' | 'easy' | 'medium' | 'hard',
): Promise<ServerQuizRound> {
  const start = () =>
    client.post<ServerQuizRound>(`/quiz-rounds/${game}`, { mode });
  try {
    return (await start()).data;
  } catch (error) {
    if (!axios.isAxiosError(error) || error.response?.status !== 401)
      throw error;
  }
  try {
    await client.post('/auth/refresh', {});
  } catch {
    await client.post('/auth/guest', {});
  }
  return (await start()).data;
}

export async function completeQuizRound(
  game: QuizGame,
  roundId: string,
  answers: Array<number | string>,
): Promise<ServerQuizResult> {
  const complete = () =>
    client.post<ServerQuizResult>(
      `/quiz-rounds/${game}/${encodeURIComponent(roundId)}/complete`,
      { answers },
    );
  try {
    return (await complete()).data;
  } catch (error) {
    if (!axios.isAxiosError(error) || error.response?.status !== 401)
      throw error;
    await client.post('/auth/refresh', {});
    return (await complete()).data;
  }
}

export async function readQuizStats(
  game: QuizGame,
): Promise<ServerQuizStats | null> {
  try {
    return (await client.get<ServerQuizStats>(`/quiz-rounds/${game}/stats`))
      .data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401)
      return null;
    throw error;
  }
}

export function numberQuestionsFromIds(ids: string[]) {
  if (ids.length !== 10 || new Set(ids).size !== 10)
    throw new Error('Invalid Number IQ round.');
  const bank = new Map(NUMBER_QUESTION_BANK.map((item) => [item.id, item]));
  return ids.map((id) => {
    const question = bank.get(id);
    if (!question) throw new Error('Unknown Number IQ question.');
    return question;
  });
}
