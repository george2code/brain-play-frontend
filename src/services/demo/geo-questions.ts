import { GEO_REGIONS, getGeoAreas } from '@/services/demo/geo-map-data';

import type {
  GeoQuestion,
  GeoRegion,
  GeoViewport,
  Localized,
} from '@/shared/types/game.types';

const l = (en: string, uk: string, ru: string): Localized => ({ en, uk, ru });

const viewports = {
  westAfrica: { bounds: [-21, -2, 29, 31], width: 820, height: 600 },
  southAfrica: { bounds: [10, -36, 45, -5], width: 760, height: 660 },
  eastAfrica: { bounds: [16, -20, 54, 23], width: 760, height: 680 },
  northAfrica: { bounds: [-21, 9, 37, 40], width: 820, height: 580 },
  eastAsia: { bounds: [91, -5, 158, 59], width: 780, height: 700 },
  southAsia: { bounds: [50, -2, 113, 43], width: 780, height: 640 },
  southeastAsia: { bounds: [83, -13, 137, 34], width: 760, height: 670 },
  centralEurope: { bounds: [-14, 33, 45, 67], width: 820, height: 600 },
  southEurope: { bounds: [-12, 27, 38, 61], width: 820, height: 600 },
  iberia: { bounds: [-19, 25, 30, 61], width: 820, height: 600 },
  eastEurope: { bounds: [8, 31, 51, 67], width: 820, height: 620 },
  northAmerica: { bounds: [-170, 5, -47, 80], width: 820, height: 650 },
  mexico: { bounds: [-145, 4, -59, 65], width: 820, height: 640 },
  southAmerica: { bounds: [-82, -57, -34, 14], width: 580, height: 850 },
  australia: { bounds: [100, -53, 180, 13], width: 820, height: 650 },
  newZealand: { bounds: [112, -56, 180, 2], width: 780, height: 680 },
  papuaNewGuinea: { bounds: [106, -24, 170, 17], width: 820, height: 600 },
  unitedStates: { bounds: [-126, 22, -67, 51], width: 820, height: 570 },
} as const satisfies Record<string, GeoViewport>;

const pool: {
  id: string;
  mapRegion: GeoRegion;
  viewport: GeoViewport;
  targetId: string;
  prompt: Localized;
}[] = [
  {
    id: 'ghana',
    mapRegion: 'africa',
    viewport: viewports.westAfrica,
    targetId: '288',
    prompt: l(
      'Find Ghana on the map.',
      'Знайди Гану на мапі.',
      'Найди Гану на карте.',
    ),
  },
  {
    id: 'zimbabwe',
    mapRegion: 'africa',
    viewport: viewports.southAfrica,
    targetId: '716',
    prompt: l(
      'Find Zimbabwe on the map.',
      'Знайди Зімбабве на мапі.',
      'Найди Зимбабве на карте.',
    ),
  },
  {
    id: 'kenya',
    mapRegion: 'africa',
    viewport: viewports.eastAfrica,
    targetId: '404',
    prompt: l(
      'Which country is home to Nairobi?',
      'У якій країні розташоване Найробі?',
      'В какой стране находится Найроби?',
    ),
  },
  {
    id: 'morocco',
    mapRegion: 'africa',
    viewport: viewports.northAfrica,
    targetId: '504',
    prompt: l(
      'Find Morocco on the map.',
      'Знайди Марокко на мапі.',
      'Найди Марокко на карте.',
    ),
  },
  {
    id: 'japan',
    mapRegion: 'asia',
    viewport: viewports.eastAsia,
    targetId: '392',
    prompt: l(
      'Which country is home to Kyoto?',
      'У якій країні розташоване Кіото?',
      'В какой стране находится Киото?',
    ),
  },
  {
    id: 'india',
    mapRegion: 'asia',
    viewport: viewports.southAsia,
    targetId: '356',
    prompt: l(
      'Find India on the map.',
      'Знайди Індію на мапі.',
      'Найди Индию на карте.',
    ),
  },
  {
    id: 'vietnam',
    mapRegion: 'asia',
    viewport: viewports.southeastAsia,
    targetId: '704',
    prompt: l(
      'Find Vietnam on the map.',
      'Знайди Вʼєтнам на мапі.',
      'Найди Вьетнам на карте.',
    ),
  },
  {
    id: 'thailand',
    mapRegion: 'asia',
    viewport: viewports.southeastAsia,
    targetId: '764',
    prompt: l(
      'Which country is home to Bangkok?',
      'У якій країні розташований Бангкок?',
      'В какой стране находится Бангкок?',
    ),
  },
  {
    id: 'germany',
    mapRegion: 'europe',
    viewport: viewports.centralEurope,
    targetId: '276',
    prompt: l(
      'Find Germany on the map.',
      'Знайди Німеччину на мапі.',
      'Найди Германию на карте.',
    ),
  },
  {
    id: 'italy',
    mapRegion: 'europe',
    viewport: viewports.southEurope,
    targetId: '380',
    prompt: l(
      'Find Italy on the map.',
      'Знайди Італію на мапі.',
      'Найди Италию на карте.',
    ),
  },
  {
    id: 'spain',
    mapRegion: 'europe',
    viewport: viewports.iberia,
    targetId: '724',
    prompt: l(
      'Find Spain on the map.',
      'Знайди Іспанію на мапі.',
      'Найди Испанию на карте.',
    ),
  },
  {
    id: 'ukraine',
    mapRegion: 'europe',
    viewport: viewports.eastEurope,
    targetId: '804',
    prompt: l(
      'Find Ukraine on the map.',
      'Знайди Україну на мапі.',
      'Найди Украину на карте.',
    ),
  },
  {
    id: 'canada',
    mapRegion: 'north-america',
    viewport: viewports.northAmerica,
    targetId: '124',
    prompt: l(
      'Find Canada on the map.',
      'Знайди Канаду на мапі.',
      'Найди Канаду на карте.',
    ),
  },
  {
    id: 'mexico',
    mapRegion: 'north-america',
    viewport: viewports.mexico,
    targetId: '484',
    prompt: l(
      'Find Mexico on the map.',
      'Знайди Мексику на мапі.',
      'Найди Мексику на карте.',
    ),
  },
  {
    id: 'brazil',
    mapRegion: 'south-america',
    viewport: viewports.southAmerica,
    targetId: '076',
    prompt: l(
      'Find Brazil on the map.',
      'Знайди Бразилію на мапі.',
      'Найди Бразилию на карте.',
    ),
  },
  {
    id: 'argentina',
    mapRegion: 'south-america',
    viewport: viewports.southAmerica,
    targetId: '032',
    prompt: l(
      'Find Argentina on the map.',
      'Знайди Аргентину на мапі.',
      'Найди Аргентину на карте.',
    ),
  },
  {
    id: 'chile',
    mapRegion: 'south-america',
    viewport: viewports.southAmerica,
    targetId: '152',
    prompt: l(
      'Find Chile on the map.',
      'Знайди Чилі на мапі.',
      'Найди Чили на карте.',
    ),
  },
  {
    id: 'australia',
    mapRegion: 'oceania',
    viewport: viewports.australia,
    targetId: '036',
    prompt: l(
      'Find Australia on the map.',
      'Знайди Австралію на мапі.',
      'Найди Австралию на карте.',
    ),
  },
  {
    id: 'new-zealand',
    mapRegion: 'oceania',
    viewport: viewports.newZealand,
    targetId: '554',
    prompt: l(
      'Find New Zealand on the map.',
      'Знайди Нову Зеландію на мапі.',
      'Найди Новую Зеландию на карте.',
    ),
  },
  {
    id: 'papua-new-guinea',
    mapRegion: 'oceania',
    viewport: viewports.papuaNewGuinea,
    targetId: '598',
    prompt: l(
      'Find Papua New Guinea on the map.',
      'Знайди Папуа Нову Гвінею на мапі.',
      'Найди Папуа — Новую Гвинею на карте.',
    ),
  },
  {
    id: 'texas',
    mapRegion: 'usa',
    viewport: viewports.unitedStates,
    targetId: '48',
    prompt: l(
      'Find Texas on the map.',
      'Знайди Техас на мапі.',
      'Найди Техас на карте.',
    ),
  },
  {
    id: 'california',
    mapRegion: 'usa',
    viewport: viewports.unitedStates,
    targetId: '06',
    prompt: l(
      'Find California on the map.',
      'Знайди Каліфорнію на мапі.',
      'Найди Калифорнию на карте.',
    ),
  },
  {
    id: 'arizona',
    mapRegion: 'usa',
    viewport: viewports.unitedStates,
    targetId: '04',
    prompt: l(
      'Which state is home to the Grand Canyon?',
      'У якому штаті розташований Гранд-Каньйон?',
      'В каком штате находится Гранд-Каньон?',
    ),
  },
  {
    id: 'florida',
    mapRegion: 'usa',
    viewport: viewports.unitedStates,
    targetId: '12',
    prompt: l(
      'Find Florida on the map.',
      'Знайди Флориду на мапі.',
      'Найди Флориду на карте.',
    ),
  },
];

function seededRandom(seedText: string): () => number {
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
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function makeGeoQuestion(item: (typeof pool)[number]): GeoQuestion {
  const areas = getGeoAreas(item.mapRegion, item.viewport);
  const answer = areas.findIndex((area) => area.id === item.targetId);
  if (answer < 0)
    throw new Error(`Missing map area ${item.mapRegion}:${item.targetId}`);
  return {
    ...item,
    options: areas.map((area) => area.name),
    answer,
  };
}

export function geoQuestionsFromIds(ids: string[]): GeoQuestion[] {
  if (ids.length !== 10 || new Set(ids).size !== 10)
    throw new Error('Invalid Geo Challenge round.');
  return ids.map((id) => {
    const item = pool.find((candidate) => candidate.id === id);
    if (!item) throw new Error('Unknown Geo Challenge question.');
    return makeGeoQuestion(item);
  });
}

export function createGeoQuestions(dailyDate?: string): GeoQuestion[] {
  const random = dailyDate
    ? seededRandom(`geo-challenge:${dailyDate}`)
    : Math.random;
  const firstPerRegion = GEO_REGIONS.map(
    (region) =>
      shuffle(
        pool.filter((item) => item.mapRegion === region),
        random,
      )[0],
  );
  const extras = shuffle(
    pool.filter((item) => !firstPerRegion.includes(item)),
    random,
  ).slice(0, 10 - GEO_REGIONS.length);
  return shuffle([...firstPerRegion, ...extras], random).map(makeGeoQuestion);
}
