import { dictionaries } from '@/i18n/dictionaries';

import type { DemoQuestion, Localized } from '@/shared/types/game.types';

import flagCatalog from './flags.json';

export const FLAG_ROUND_SIZE = 10;

type Flag = {
  code: string;
  name: Localized;
  factBefore: Localized;
  factAfter: Localized;
  source: string;
};

const flags: Flag[] = flagCatalog;

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function dailyRandom(date: string): () => number {
  let seed = 2166136261;
  for (const char of date)
    seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createFlagQuestions(dailyDate?: string): DemoQuestion[] {
  const random = dailyDate ? dailyRandom(dailyDate) : Math.random;
  const selected = shuffle(flags, random).slice(0, FLAG_ROUND_SIZE);
  return selected.map((flag) => {
    const distractors = shuffle(
      flags.filter((candidate) => candidate.code !== flag.code),
      random,
    ).slice(0, 3);
    const options = shuffle([flag, ...distractors], random);
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
      options: options.map((option) => option.name),
      answer: options.findIndex((option) => option.code === flag.code),
    };
  });
}
