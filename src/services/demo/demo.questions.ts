import type {
  DemoQuestion,
  GameCode,
  Localized,
} from '@/shared/types/game.types';

const l = (en: string, uk: string = en, ru: string = en): Localized => ({
  en,
  uk,
  ru,
});
export const DEMO_QUESTIONS: Record<GameCode, DemoQuestion[]> = {
  'geo-challenge': [
    {
      id: 'geo-1',
      prompt: l(
        'Which country is home to Kyoto?',
        'У якій країні розташоване Кіото?',
        'В какой стране находится Киото?',
      ),
      options: [
        l('Japan', 'Японія', 'Япония'),
        l('South Korea', 'Південна Корея', 'Южная Корея'),
        l('China', 'Китай', 'Китай'),
        l('Thailand', 'Таїланд', 'Таиланд'),
      ],
      answer: 0,
      visual: 'geo',
    },
    {
      id: 'geo-2',
      prompt: l(
        'On which continent is the Sahara?',
        'На якому континенті розташована Сахара?',
        'На каком континенте находится Сахара?',
      ),
      options: [
        l('Asia', 'Азія', 'Азия'),
        l('Africa', 'Африка', 'Африка'),
        l('Australia', 'Австралія', 'Австралия'),
        l('South America', 'Південна Америка', 'Южная Америка'),
      ],
      answer: 1,
    },
    {
      id: 'geo-3',
      prompt: l(
        'Which ocean lies between Europe and North America?',
        'Який океан між Європою та Північною Америкою?',
        'Какой океан между Европой и Северной Америкой?',
      ),
      options: [
        l('Pacific', 'Тихий', 'Тихий'),
        l('Indian', 'Індійський', 'Индийский'),
        l('Atlantic', 'Атлантичний', 'Атлантический'),
        l('Southern', 'Південний', 'Южный'),
      ],
      answer: 2,
    },
  ],
  'number-iq': [],
  'time-traveler': [
    {
      id: 'time-1',
      prompt: l(
        'Which happened first?',
        'Що відбулося раніше?',
        'Что произошло раньше?',
      ),
      options: [
        l(
          'First Moon landing (1969)',
          'Перша висадка на Місяць (1969)',
          'Первая высадка на Луну (1969)',
        ),
        l(
          'First human in space (1961)',
          'Перша людина в космосі (1961)',
          'Первый человек в космосе (1961)',
        ),
        l(
          'First powered airplane flight (1903)',
          'Перший політ моторного літака (1903)',
          'Первый полёт моторного самолёта (1903)',
        ),
        l(
          'First artificial satellite (1957)',
          'Перший штучний супутник (1957)',
          'Первый искусственный спутник (1957)',
        ),
      ],
      answer: 2,
    },
    {
      id: 'time-2',
      prompt: l(
        'What came after the printing press but before the telephone?',
        'Що з’явилося після друкарського верстата, але до телефона?',
        'Что появилось после печатного станка, но до телефона?',
      ),
      options: [
        l('World Wide Web', 'Всесвітня павутина', 'Всемирная паутина'),
        l('Steam locomotive', 'Паровоз', 'Паровоз'),
        l('Smartphone', 'Смартфон', 'Смартфон'),
        l('Television', 'Телебачення', 'Телевидение'),
      ],
      answer: 1,
    },
    {
      id: 'time-3',
      prompt: l(
        'Which landmark is the oldest?',
        'Яка пам’ятка найдавніша?',
        'Какая достопримечательность самая древняя?',
      ),
      options: [
        l('Eiffel Tower', 'Ейфелева вежа', 'Эйфелева башня'),
        l('Colosseum', 'Колізей', 'Колизей'),
        l('Great Pyramid of Giza', 'Піраміда Хеопса', 'Пирамида Хеопса'),
        l('Taj Mahal', 'Тадж-Махал', 'Тадж-Махал'),
      ],
      answer: 2,
    },
  ],
  'flag-master': [],
};
