import type { TimeCardId } from './time-traveler';

type VisualSet = {
  questions: readonly string[];
  cards: readonly [TimeCardId, TimeCardId, TimeCardId, TimeCardId];
};

// Each answer is surrounded by illustrations of the same kind of place, object,
// or activity. Card titles and dates still come from the shared locale dictionary.
const VISUAL_SETS: readonly VisualSet[] = [
  {
    questions: ['persiaPersepolis'],
    cards: ['persia', 'urZiggurat', 'teotihuacan', 'borobudur'],
  },
  {
    questions: ['romeAqueduct'],
    cards: ['rome', 'segoviaAqueduct', 'tarragonaAqueduct', 'elvasAqueduct'],
  },
  {
    questions: ['incaRoad'],
    cards: ['inca', 'greatWall', 'hadriansWall', 'petra'],
  },
  {
    questions: ['vikingShips', 'vikingGreenland', 'zhengFleet', 'zhengPorts'],
    cards: ['viking', 'phoenicia', 'zhengHe', 'venice'],
  },
  {
    questions: ['unCharter', 'unAssembly', 'beijingWomen'],
    cards: ['un1945', 'udhr1948', 'bandung1955', 'beijing1995'],
  },
  {
    questions: ['stocktonPassengers', 'stocktonLocomotion', 'rocketRainhill'],
    cards: ['shinkansen1964', 'stockton1825', 'rocket1829', 'liverpool1830'],
  },
  {
    questions: ['shinkansenRoute', 'shinkansenTime'],
    cards: ['shinkansen1964', 'tgv1981', 'ice1991', 'eurostar1994'],
  },
  {
    questions: [
      'apolloLanding',
      'apolloCollins',
      'gagarinOrbit',
      'hubbleLaunch',
      'issModules',
    ],
    cards: ['apollo1969', 'gagarin1961', 'hubble1990', 'iss1998'],
  },
  {
    questions: ['voyagerRecord', 'voyagerOrder', 'pathfinderMars'],
    cards: ['voyager1977', 'sputnik1957', 'pathfinder1997', 'apolloSoyuz1975'],
  },
  {
    questions: [
      'earthDayCrowds',
      'earthDayAgency',
      'washingtonMarch',
      'gandhiSalt',
    ],
    cards: ['earthDay1970', 'march1963', 'saltMarch1930', 'suffrage1920'],
  },
  {
    questions: ['ibmPcLaunch', 'ibmPcSoftware', 'intel4004'],
    cards: ['ibmPc1981', 'microprocessor1971', 'internet1983', 'web1989'],
  },
  {
    questions: [
      'berlinWallOpening',
      'berlinWallBorder',
      'hadriansWallForts',
      'greatWallMing',
      'greatWallWatchtowers',
      'hararWalls',
      'hararGates',
    ],
    cards: ['berlinWall1989', 'hadriansWall', 'greatWall', 'harar'],
  },
  {
    questions: ['olmecHeads'],
    cards: ['olmec', 'rapaNui', 'abuSimbel', 'qinWarriors'],
  },
  {
    questions: [
      'florenceDome',
      'florenceConstruction',
      'kyivMosaics',
      'kyivOrans',
    ],
    cards: ['florence', 'hagiaSophia', 'kyivSophia', 'suleymaniye'],
  },
  {
    questions: ['wrightFlight', 'lindberghAtlantic', 'earhartSolo'],
    cards: ['wright1903', 'lindbergh1927', 'earhart1932', 'montgolfier1783'],
  },
  {
    questions: [
      'penicillinMold',
      'penicillinName',
      'rontgenXray',
      'edisonLighting',
      'faradayInduction',
    ],
    cards: ['penicillin1928', 'xray1895', 'lightbulb1879', 'faraday1831'],
  },
  {
    questions: [
      'haitiFreedom',
      'emancipationProclamation',
      'saElection',
      'turkeyRepublic',
    ],
    cards: ['haiti1804', 'emancipation1863', 'mandela1994', 'turkey1923'],
  },
  {
    questions: ['meijiRestoration'],
    cards: ['meiji1868', 'kamakuraSamurai', 'sengokuSamurai', 'edoSamurai'],
  },
  {
    questions: ['suezOpening', 'titanicVoyage', 'panamaOpening'],
    cards: ['suez1869', 'titanic1912', 'panama1914', 'zhengHe'],
  },
  {
    questions: ['bellTelephone'],
    cards: [
      'bell1876',
      'transcontinental1915',
      'transatlantic1927',
      'mobile1973',
    ],
  },
  {
    questions: ['mobileCall'],
    cards: ['mobile1973', 'dynatac1984', 'vodafone1985', 'sms1992'],
  },
  {
    questions: ['libertyDedication', 'eiffelExposition'],
    cards: ['liberty1886', 'eiffel1889', 'rapaNui', 'abuSimbel'],
  },
  {
    questions: ['rapaMoai', 'rapaAhu'],
    cards: ['rapaNui', 'olmec', 'abuSimbel', 'qinWarriors'],
  },
  {
    questions: ['athensOlympics', 'mexicoOlympics'],
    cards: ['greece', 'olympics1896', 'tokyo1964', 'mexico1968'],
  },
  {
    questions: ['marconiWireless', 'morseTelegraph'],
    cards: ['marconi1897', 'morse1844', 'bell1876', 'faraday1831'],
  },
  {
    questions: ['darwinOrigin'],
    cards: ['darwin1859', 'merian1705', 'wallace1854', 'mendel1865'],
  },
  {
    questions: ['dollyClone'],
    cards: ['dolly1996', 'dna1953', 'penicillin1928', 'jenner1796'],
  },
  {
    questions: ['palmyraColumns', 'leptisSeverus'],
    cards: ['palmyra', 'leptisMagna', 'ephesus', 'pompeii'],
  },
  {
    questions: ['hegraInscriptions', 'tutTomb'],
    cards: ['hegra', 'tutankhamun1922', 'petra', 'cerveteri'],
  },
  {
    questions: ['delphiTreasuries'],
    cards: ['delphi', 'mycenae', 'knossos', 'greece'],
  },
  {
    questions: [
      'mogaoSilkRoad',
      'mogaoMurals',
      'bamiyanBuddhas',
      'bamiyanNiches',
    ],
    cards: ['mogao', 'bamiyan', 'ajanta', 'lalibela'],
  },
  {
    questions: ['anuradhapuraBodhi', 'baganTemples', 'baganPlain'],
    cards: ['anuradhapura', 'bagan', 'sanchi', 'borobudur'],
  },
  {
    questions: [
      'bulguksaSilla',
      'bulguksaSeokguram',
      'sukhothaiWriting',
      'sukhothaiTemples',
    ],
    cards: ['bulguksa', 'sukhothai', 'haeinsa', 'bagan'],
  },
  {
    questions: [
      'himejiWhite',
      'himejiDefences',
      'forbiddenPalace',
      'forbiddenAxis',
    ],
    cards: ['himeji', 'forbiddenCity', 'versailles', 'fatehpurSikri'],
  },
  {
    questions: [
      'machuRidge',
      'machuTerraces',
      'tiwanakuGateway',
      'tiwanakuAltiplano',
    ],
    cards: ['machuPicchu', 'tiwanaku', 'chavin', 'inca'],
  },
  {
    questions: [
      'marrakeshAlmoravid',
      'marrakeshWalls',
      'fezMedina',
      'fezMarinids',
    ],
    cards: ['marrakesh', 'fez', 'kairouan', 'harar'],
  },
  {
    questions: [
      'kairouanMosque',
      'kairouanAghlabids',
      'suleymaniyeMosque',
      'suleymaniyeSinan',
    ],
    cards: ['kairouan', 'suleymaniye', 'cordoba', 'djenne'],
  },
  {
    questions: ['timbuktuScholars', 'timbuktuMosques', 'askiaTomb', 'askiaGao'],
    cards: ['timbuktu', 'askia', 'djenne', 'mali'],
  },
  {
    questions: ['montTides', 'montPilgrims', 'veniceLagoon', 'veniceGalleys'],
    cards: ['montSaintMichel', 'venice', 'kilwa', 'tenochtitlan'],
  },
  {
    questions: [
      'lubeckHansa',
      'lubeckBrick',
      'novgorodTrade',
      'novgorodSophia',
    ],
    cards: ['lubeck', 'novgorod', 'bukhara', 'samarkand'],
  },
  {
    questions: [
      'haeinsaBlocks',
      'haeinsaRepository',
      'gutenbergBible',
      'gutenbergType',
    ],
    cards: ['haeinsa', 'gutenberg', 'song', 'tang'],
  },
  {
    questions: ['shibamTowers', 'shibamSkyscrapers'],
    cards: ['shibam', 'fez', 'harar', 'marrakesh'],
  },
  {
    questions: [
      'istanbulConquest',
      'istanbulBosphorus',
      'isfahanSquare',
      'isfahanPolo',
    ],
    cards: ['istanbul1453', 'isfahan', 'samarkand', 'bukhara'],
  },
  {
    questions: ['tenochtitlanCanals', 'tenochtitlanChinampas'],
    cards: ['tenochtitlan', 'venice', 'kilwa', 'khmer'],
  },
  {
    questions: ['fatehpurAkbar', 'fatehpurDecade', 'tajMumtaz', 'tajYamuna'],
    cards: ['fatehpurSikri', 'tajMahal', 'mughal', 'isfahan'],
  },
  {
    questions: ['sistineMichelangelo', 'sistineGenesis'],
    cards: ['sistineCeiling', 'ajanta', 'mogao', 'knossos'],
  },
  {
    questions: [
      'copernicusSun',
      'copernicusEarth',
      'newtonPrincipia',
      'newtonHalley',
    ],
    cards: ['copernicus1543', 'newton1687', 'galileo1609', 'einstein1905'],
  },
  {
    questions: ['globeStage', 'globeAudience'],
    cards: ['globe1599', 'epidaurusTheatre', 'colosseum', 'olympics1896'],
  },
  {
    questions: ['galileoMoon', 'galileoJupiter'],
    cards: ['galileo1609', 'copernicus1543', 'hubble1990', 'newton1687'],
  },
  {
    questions: [
      'versaillesLouis',
      'versaillesGardens',
      'petersburgFounding',
      'petersburgNeva',
    ],
    cards: ['versailles', 'petersburg1703', 'forbiddenCity', 'fatehpurSikri'],
  },
  {
    questions: ['declarationCongress', 'declarationAugust'],
    cards: ['declaration1776', 'udhr1948', 'emancipation1863', 'un1945'],
  },
  {
    questions: ['montgolfierBalloon', 'montgolfierAnnonay'],
    cards: [
      'montgolfier1783',
      'charlesBalloon1783',
      'blanchardBalloon1785',
      'zeppelin1900',
    ],
  },
  {
    questions: [
      'bastille1789',
      'bastilleJuly',
      'russianRevolution',
      'ussrDissolution',
    ],
    cards: ['french1789', 'russian1917', 'ussr1991', 'haiti1804'],
  },
  {
    questions: [
      'wollstonecraftRights',
      'wollstonecraftEducation',
      'suffrageAmendment',
    ],
    cards: [
      'wollstonecraft1792',
      'suffrage1920',
      'senecaFalls1848',
      'beijing1995',
    ],
  },
  {
    questions: ['jennerVaccine', 'jennerCowpox', 'fluPandemic'],
    cards: ['jenner1796', 'flu1918', 'penicillin1928', 'smallpox1980'],
  },
  {
    questions: ['nobelFirst'],
    cards: ['nobel1901', 'oscars1929', 'pulitzer1917', 'fields1936'],
  },
  {
    questions: ['einsteinPapers'],
    cards: ['einstein1905', 'newton1687', 'faraday1831', 'galileo1609'],
  },
  {
    questions: ['fordModelT'],
    cards: ['modelT1908', 'benz1886', 'beetle1945', 'mini1959'],
  },
  {
    questions: ['amundsenPole'],
    cards: ['southPole1911', 'scott1912', 'mawson1911', 'shackleton1914'],
  },
  {
    questions: ['stockCrash'],
    cards: ['crash1929', 'panic1907', 'blackMonday1987', 'crisis2008'],
  },
  {
    questions: ['warOutbreak'],
    cards: ['war1939', 'blitz1940', 'normandy1944', 'adwa1896'],
  },
  {
    questions: [
      'monteAlbanHill',
      'monteAlbanPlaza',
      'palenqueMaya',
      'palenqueReliefs',
    ],
    cards: ['monteAlban', 'palenque', 'teotihuacan', 'chichenItza'],
  },
  {
    questions: ['mesaCliffs', 'mesaManyRooms'],
    cards: ['mesaVerde', 'petra', 'hegra', 'lalibela'],
  },
  {
    questions: ['cholaTemple', 'cholaBronzes'],
    cards: ['brihadeeswara', 'borobudur', 'bulguksa', 'sukhothai'],
  },
  {
    questions: ['mapungubweGold', 'mapungubweRivers'],
    cards: ['mapungubwe', 'zimbabwe', 'mali', 'aksum'],
  },
];

export const TIME_TRAVELER_VISUAL_OPTIONS = new Map<string, VisualSet['cards']>(
  VISUAL_SETS.flatMap(({ questions, cards }) =>
    questions.map((question) => [question, cards] as const),
  ),
);
