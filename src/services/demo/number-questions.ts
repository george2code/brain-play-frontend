import { dictionaries, numberRuleCopy } from '@/i18n/dictionaries';

import type {
  DemoQuestion,
  Locale,
  Localized,
  NumberDifficulty,
  NumberLevel,
} from '@/shared/types/game.types';

type Family = keyof typeof numberRuleCopy.en;

export interface NumberQuestion extends DemoQuestion {
  difficulty: NumberDifficulty;
  family: Family;
  terms: number[];
  missingIndex: number;
}

const families: { family: Family; difficulty: NumberDifficulty }[] = [
  { family: 'add', difficulty: 'easy' },
  { family: 'subtract', difficulty: 'easy' },
  { family: 'multiply', difficulty: 'easy' },
  { family: 'squares', difficulty: 'easy' },
  { family: 'growing', difficulty: 'medium' },
  { family: 'cubes', difficulty: 'medium' },
  { family: 'lanesAdd', difficulty: 'medium' },
  { family: 'multiplyAdd', difficulty: 'medium' },
  { family: 'lanesMultiply', difficulty: 'hard' },
  { family: 'previousSum', difficulty: 'hard' },
  { family: 'alternate', difficulty: 'hard' },
  { family: 'threeLanes', difficulty: 'hard' },
];

const localize = (value: string): Localized => ({
  en: value,
  uk: value,
  ru: value,
});

function makeTerms(
  family: Family,
  variant: number,
): { terms: number[]; formula: (index: number) => string } {
  const v = variant;
  if (family === 'add' || family === 'subtract') {
    const step = 2 + (v % (family === 'add' ? 8 : 5));
    const start = family === 'add' ? 2 + ((v * 7) % 23) : 60 + ((v * 11) % 51);
    const sign = family === 'add' ? 1 : -1;
    const terms = Array.from({ length: 6 }, (_, i) => start + sign * i * step);
    return {
      terms,
      formula: (i) =>
        i === 0
          ? `${terms[1]} ${sign === 1 ? '−' : '+'} ${step} = ${terms[0]}`
          : `${terms[i - 1]} ${sign === 1 ? '+' : '−'} ${step} = ${terms[i]}`,
    };
  }
  if (family === 'multiply') {
    const start = 1 + (v % 6);
    const factor = 2 + (Math.floor(v / 6) % 2);
    const terms = Array.from({ length: 6 }, (_, i) => start * factor ** i);
    return {
      terms,
      formula: (i) =>
        i === 0
          ? `${terms[1]} ÷ ${factor} = ${terms[0]}`
          : `${terms[i - 1]} × ${factor} = ${terms[i]}`,
    };
  }
  if (family === 'squares' || family === 'cubes') {
    const first = 1 + (v % (family === 'squares' ? 5 : 4));
    const offset =
      Math.floor(v / (family === 'squares' ? 5 : 4)) *
      (family === 'squares' ? 3 : 1);
    const power = family === 'squares' ? 2 : 3;
    const terms = Array.from(
      { length: 6 },
      (_, i) => (first + i) ** power + offset,
    );
    return {
      terms,
      formula: (i) =>
        `${first + i}${power === 2 ? '²' : '³'} + ${offset} = ${terms[i]}`,
    };
  }
  if (family === 'growing') {
    const start = 2 + (v % 15);
    const firstStep = 2 + (Math.floor(v / 5) % 4);
    const growth = 2 + (v % 4);
    const terms = Array.from(
      { length: 7 },
      (_, i) => start + i * firstStep + (growth * i * (i - 1)) / 2,
    );
    return {
      terms,
      formula: (i) =>
        i === 0
          ? `${terms[1]} − ${firstStep} = ${terms[0]}`
          : `${terms[i - 1]} + (${firstStep} + ${i - 1} × ${growth}) = ${terms[i]}`,
    };
  }
  if (family === 'lanesAdd' || family === 'lanesMultiply') {
    const multiply = family === 'lanesMultiply';
    const starts = multiply
      ? [1 + (v % 7), 4 + (Math.floor(v / 7) % 4)]
      : [2 + (v % 12), 31 + (Math.floor(v / 3) % 17)];
    const steps = multiply
      ? [2 + (v % 2), 2 + (Math.floor(v / 5) % 2)]
      : [2 + (v % 5), 3 + (Math.floor(v / 5) % 5)];
    const terms = Array.from({ length: 8 }, (_, i) => {
      const lane = i % 2;
      const turn = Math.floor(i / 2);
      return multiply
        ? starts[lane] * steps[lane] ** turn
        : starts[lane] + steps[lane] * turn;
    });
    return {
      terms,
      formula: (i) => {
        const step = steps[i % 2];
        const symbol = multiply ? '×' : '+';
        return i < 2
          ? `${terms[i + 2]} ${multiply ? '÷' : '−'} ${step} = ${terms[i]}`
          : `${terms[i - 2]} ${symbol} ${step} = ${terms[i]}`;
      },
    };
  }
  if (family === 'multiplyAdd') {
    const start = 1 + (v % 9);
    const factor = 2;
    const add = 1 + (Math.floor(v / 9) % 3);
    const terms = [start];
    for (let i = 1; i < 6; i++) terms.push(terms[i - 1] * factor + add);
    return {
      terms,
      formula: (i) =>
        i === 0
          ? `(${terms[1]} − ${add}) ÷ ${factor} = ${terms[0]}`
          : `${terms[i - 1]} × ${factor} + ${add} = ${terms[i]}`,
    };
  }
  if (family === 'previousSum') {
    const terms = [1 + (v % 8), 3 + (Math.floor(v / 8) % 4)];
    for (let i = 2; i < 8; i++) terms.push(terms[i - 1] + terms[i - 2]);
    return {
      terms,
      formula: (i) => `${terms[i - 2]} + ${terms[i - 1]} = ${terms[i]}`,
    };
  }
  if (family === 'alternate') {
    const add = 2 + (Math.floor(v / 9) % 3);
    const factor = 2 + (v % 2);
    const terms = [2 + (v % 9)];
    for (let i = 1; i < 8; i++)
      terms.push(i % 2 === 1 ? terms[i - 1] + add : terms[i - 1] * factor);
    return {
      terms,
      formula: (i) =>
        `${terms[i - 1]} ${i % 2 === 1 ? `+ ${add}` : `× ${factor}`} = ${terms[i]}`,
    };
  }
  const starts = [
    1 + (v % 8),
    22 + (Math.floor(v / 4) % 9),
    53 + (Math.floor(v / 8) % 9),
  ];
  const steps = [
    2 + (v % 4),
    3 + (Math.floor(v / 5) % 4),
    4 + (Math.floor(v / 7) % 4),
  ];
  const terms = Array.from(
    { length: 9 },
    (_, i) => starts[i % 3] + Math.floor(i / 3) * steps[i % 3],
  );
  return {
    terms,
    formula: (i) => `${terms[i - 3]} + ${steps[i % 3]} = ${terms[i]}`,
  };
}

function missingPosition(
  family: Family,
  variant: number,
  length: number,
): number {
  const slot = variant % 5;
  if (family === 'previousSum' || family === 'alternate')
    return [3, 4, 5, 6, length - 1][slot];
  if (family === 'threeLanes') return [3, 4, 5, 6, 8][slot];
  if (family === 'lanesAdd' || family === 'lanesMultiply')
    return [2, 3, 4, 5, length - 1][slot];
  return [0, 2, 3, 4, length - 1][slot];
}

function makeOptions(
  value: number,
  variant: number,
): { options: Localized[]; answer: number } {
  const spread = Math.max(2, Math.round(value * 0.08));
  const candidates = [
    value - spread,
    value + spread,
    value + 2 * spread,
    value - 2 * spread,
    value + 1,
    value + 3,
  ].filter((candidate) => candidate > 0 && candidate !== value);
  const distractors = [...new Set(candidates)].slice(0, 3);
  const answer = variant % 4;
  const values = [...distractors];
  values.splice(answer, 0, value);
  return { options: values.map((item) => localize(String(item))), answer };
}

function makeQuestion(
  family: Family,
  difficulty: NumberDifficulty,
  variant: number,
): NumberQuestion {
  const { terms, formula } = makeTerms(family, variant);
  const missingIndex = missingPosition(family, variant, terms.length);
  const value = terms[missingIndex];
  const { options, answer } = makeOptions(value, variant);
  const prompt = Object.fromEntries(
    (['en', 'uk', 'ru'] as Locale[]).map((locale) => [
      locale,
      dictionaries[locale][
        missingIndex === terms.length - 1 ? 'numberNext' : 'numberMissing'
      ],
    ]),
  ) as Localized;
  const explanation = Object.fromEntries(
    (['en', 'uk', 'ru'] as Locale[]).map((locale) => [
      locale,
      `${numberRuleCopy[locale][family]}\n${formula(missingIndex)}`,
    ]),
  ) as Localized;
  return {
    id: `number-${family}-${variant + 1}`,
    difficulty,
    family,
    terms,
    missingIndex,
    prompt,
    visual: terms
      .map((term, i) => (i === missingIndex ? '?' : term))
      .join(' · '),
    options,
    answer,
    explanation,
  };
}

export const NUMBER_QUESTION_BANK: NumberQuestion[] = families.flatMap(
  ({ family, difficulty }) =>
    Array.from({ length: 25 }, (_, variant) =>
      makeQuestion(family, difficulty, variant),
    ),
);

export const NUMBER_ROUND_SIZE = 10;

function randomFromSeed(seedText: string): () => number {
  let seed = 2166136261;
  for (const char of seedText)
    seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value ^= value + Math.imul(value ^ (value >>> 7), 61 | value);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createNumberQuestions(
  level: NumberLevel = 'mixed',
  dailyDate?: string,
): NumberQuestion[] {
  const random = dailyDate
    ? randomFromSeed(`number-iq:${dailyDate}`)
    : Math.random;
  const byDifficulty = (difficulty: NumberDifficulty, count: number) => {
    const groups = shuffle(
      families.filter((item) => item.difficulty === difficulty),
      random,
    ).map(({ family }) =>
      shuffle(
        NUMBER_QUESTION_BANK.filter((item) => item.family === family),
        random,
      ),
    );
    return Array.from(
      { length: count },
      (_, index) =>
        groups[index % groups.length][Math.floor(index / groups.length)],
    );
  };
  const selected =
    level === 'mixed'
      ? [
          ...byDifficulty('easy', 4),
          ...byDifficulty('medium', 3),
          ...byDifficulty('hard', 3),
        ]
      : byDifficulty(level, NUMBER_ROUND_SIZE);
  return shuffle(selected, random);
}
