import type { GameCode, GameDefinition } from '@/shared/types/game.types';

export const GAMES: GameDefinition[] = [
  {
    code: 'geo-challenge',
    title: 'Geo Challenge',
    color: 'geo',
    category: { en: 'Geography', uk: 'Географія', ru: 'География' },
    description: {
      en: 'A whole world to discover. How well do you know yours?',
      uk: 'Цілий світ відкриттів. Як добре ти його знаєш?',
      ru: 'Целый мир открытий. Насколько хорошо ты его знаешь?',
    },
  },
  {
    code: 'number-iq',
    title: 'Number IQ',
    color: 'number',
    category: {
      en: 'Logic & numbers',
      uk: 'Логіка та числа',
      ru: 'Логика и числа',
    },
    description: {
      en: 'Find the pattern. Connect the dots. Trust your logic.',
      uk: 'Знайди закономірність. Поєднай підказки. Довірся логіці.',
      ru: 'Найди закономерность. Соедини подсказки. Доверься логике.',
    },
  },
  {
    code: 'time-traveler',
    title: 'Time Traveler',
    color: 'time',
    category: { en: 'History', uk: 'Історія', ru: 'История' },
    description: {
      en: 'Explore beautiful scenes, answer one question, and uncover a little story from the past.',
      uk: 'Роздивляйся історичні сцени, відповідай на запитання й відкривай історії минулого.',
      ru: 'Рассматривай исторические сцены, отвечай на вопрос и открывай истории прошлого.',
    },
  },
  {
    code: 'flag-master',
    title: 'Flag Master',
    color: 'flag',
    category: {
      en: 'Flags & countries',
      uk: 'Прапори та країни',
      ru: 'Флаги и страны',
    },
    description: {
      en: 'One flag, one country. Let your memory lead the way.',
      uk: 'Один прапор, одна країна. Довірся своїй пам’яті.',
      ru: 'Один флаг, одна страна. Доверься своей памяти.',
    },
  },
];

export function getGame(code: string) {
  return GAMES.find((game) => game.code === code);
}

export function isGameCode(value: unknown): value is GameCode {
  return typeof value === 'string' && GAMES.some((game) => game.code === value);
}
