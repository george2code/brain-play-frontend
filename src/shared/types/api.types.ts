import type { Locale } from '@/shared/types/game.types';

// These are transport contracts for the existing NestJS read endpoints, not UI demo models.
export interface ApiGameMode {
  id: string;
  code: string;
  type: string;
  difficulty: string;
  rulesVersion: number;
  scoreOrder: 'HIGHER_FIRST' | 'LOWER_FIRST';
}
export interface ApiGame {
  id: string;
  code: string;
  title: string;
  position: number;
  modes: ApiGameMode[];
}
export interface ApiProfile {
  id: string;
  nickname: string | null;
  email: string | null;
  status: 'GUEST' | 'REGISTERED' | 'MERGED';
  preferredLocale: Locale;
  createdAt: string;
  registeredAt: string | null;
}
export interface ApiStatistics {
  modeId: string;
  rulesVersion: number;
  contentVersion: string;
  _count: { _all: number };
  _max: { score: number | null };
  _min: { score: number | null };
  _avg: { score: number | null; durationMs: number | null };
  _sum: { correctAnswers: number | null; totalRounds: number | null };
}
export interface ApiAttempt {
  id: string;
  score: number | null;
  correctAnswers: number | null;
  totalRounds: number;
  durationMs: number | null;
  completedAt: string | null;
  verificationStatus: string;
  mode: {
    id: string;
    code: string;
    difficulty: string;
    rulesVersion: number;
    game: { code: string; title: string };
  };
}
export interface ApiLeaderboardEntry {
  userId: string;
  nickname: string;
  score: number;
  durationMs: number | null;
  place: number;
}
export interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
}
