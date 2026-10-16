export const GAME_CODES = [
  'geo-challenge',
  'number-iq',
  'time-traveler',
  'flag-master',
] as const;
export type GameCode = (typeof GAME_CODES)[number];
export type Locale = 'en' | 'uk' | 'ru';
export type Localized = Record<Locale, string>;
export interface GameDefinition {
  code: GameCode;
  title: string;
  category: Localized;
  description: Localized;
  color: 'geo' | 'number' | 'time' | 'flag';
}
export interface DemoQuestion {
  id: string;
  prompt: Localized;
  options: Localized[];
  answer: number;
  visual?: string;
  factBefore?: Localized;
  factAfter?: Localized;
  source?: string;
}
export interface DemoAttempt {
  id: string;
  game: GameCode;
  mode: 'practice' | 'daily';
  dailyDate?: string;
  score: number;
  correct: number;
  total: number;
  completedAt: string;
  rulesVersion?: number;
}
export interface DemoGameStats {
  played: number;
  correct: number;
  total: number;
  bestScore: number;
}
export interface DemoProfile {
  version: 1;
  nickname: string;
  attempts: DemoAttempt[];
  totals?: Record<string, DemoGameStats>;
}
