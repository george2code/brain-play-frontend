import { TIME_TRAVELER_ROUND_SIZE } from '@/constants/game-rules.constants';

import { timeTravelerContent } from '@/i18n/dictionaries';

import type {
  DemoQuestion,
  Locale,
  Localized,
} from '@/shared/types/game.types';

import { TIME_TRAVELER_VISUAL_OPTIONS } from './time-traveler-visual-options';

export const TIME_CARD_IDS = [
  'sumer',
  'egypt',
  'shang',
  'maya',
  'indus',
  'persia',
  'rome',
  'mali',
  'song',
  'inca',
  'abbasid',
  'viking',
  'greece',
  'phoenicia',
  'aksum',
  'khmer',
  'zimbabwe',
  'mexica',
  'benin',
  'mughal',
  'un1945',
  'sputnik1957',
  'shinkansen1964',
  'apollo1969',
  'earthDay1970',
  'voyager1977',
  'ibmPc1981',
  'berlinWall1989',
  'babylon',
  'olmec',
  'tang',
  'florence',
  'edo',
  'stockton1825',
  'wright1903',
  'penicillin1928',
  'gobekli',
  'catalhoyuk',
  'stonehenge',
  'urZiggurat',
  'knossos',
  'hattusa',
  'mycenae',
  'meroe',
  'carthage',
  'cerveteri',
  'qinWarriors',
  'chavin',
  'nazcaLines',
  'jericho',
  'lascaux',
  'skaraBrae',
  'caral',
  'ugarit',
  'nineveh',
  'petra',
  'teotihuacan',
  'hagiaSophia',
  'aachen',
  'cordoba',
  'borobudur',
  'lalibela',
  'kilwa',
  'bukhara',
  'samarkand',
  'djenne',
  'cahokia',
  'chichenItza',
  'alhambra',
  'haiti1804',
  'rocket1829',
  'faraday1831',
  'morse1844',
  'senecaFalls1848',
  'greatExhibition1851',
  'nightingale1854',
  'darwin1859',
  'emancipation1863',
  'meiji1868',
  'suez1869',
  'bell1876',
  'lightbulb1879',
  'liberty1886',
  'eiffel1889',
  'xray1895',
  'olympics1896',
  'adwa1896',
  'philippines1896',
  'marconi1897',
  'blitz1940',
  'normandy1944',
  'partition1947',
  'udhr1948',
  'dna1953',
  'brown1954',
  'bandung1955',
  'nasa1958',
  'gagarin1961',
  'march1963',
  'mexico1968',
  'microprocessor1971',
  'mobile1973',
  'apolloSoyuz1975',
  'smallpox1980',
  'internet1983',
  'liveAid1985',
  'chornobyl1986',
  'montreal1987',
  'web1989',
  'chauvet',
  'carnac',
  'banChiang',
  'dilmun',
  'giza',
  'abuSimbel',
  'thebes',
  'sanchi',
  'ajanta',
  'pasargadae',
  'ephesus',
  'pompeii',
  'colosseum',
  'hadriansWall',
  'palmyra',
  'hegra',
  'leptisMagna',
  'delphi',
  'mogao',
  'anuradhapura',
  'kyivSophia',
  'bulguksa',
  'himeji',
  'forbiddenCity',
  'machuPicchu',
  'marrakesh',
  'fez',
  'kairouan',
  'timbuktu',
  'askia',
  'sukhothai',
  'bagan',
  'bamiyan',
  'greatWall',
  'montSaintMichel',
  'venice',
  'lubeck',
  'novgorod',
  'haeinsa',
  'shibam',
  'zhengHe',
  'gutenberg',
  'istanbul1453',
  'tenochtitlan',
  'fatehpurSikri',
  'sistineCeiling',
  'copernicus1543',
  'suleymaniye',
  'globe1599',
  'galileo1609',
  'tajMahal',
  'isfahan',
  'versailles',
  'newton1687',
  'petersburg1703',
  'declaration1776',
  'montgolfier1783',
  'french1789',
  'wollstonecraft1792',
  'jenner1796',
  'nobel1901',
  'einstein1905',
  'modelT1908',
  'southPole1911',
  'titanic1912',
  'panama1914',
  'russian1917',
  'flu1918',
  'suffrage1920',
  'tutankhamun1922',
  'turkey1923',
  'lindbergh1927',
  'crash1929',
  'saltMarch1930',
  'earhart1932',
  'war1939',
  'hubble1990',
  'mandela1994',
  'pathfinder1997',
  'iss1998',
  'monteAlban',
  'palenque',
  'tiwanaku',
  'mesaVerde',
  'rapaNui',
  'brihadeeswara',
  'mapungubwe',
  'harar',
  'ussr1991',
  'beijing1995',
  'dolly1996',
  'liverpool1830',
  'tokyo1964',
  'transcontinental1915',
  'transatlantic1927',
  'segoviaAqueduct',
  'tarragonaAqueduct',
  'elvasAqueduct',
  'epidaurusTheatre',
  'benz1886',
  'beetle1945',
  'mini1959',
  'scott1912',
  'mawson1911',
  'shackleton1914',
  'charlesBalloon1783',
  'blanchardBalloon1785',
  'zeppelin1900',
  'oscars1929',
  'pulitzer1917',
  'fields1936',
  'panic1907',
  'blackMonday1987',
  'crisis2008',
  'kamakuraSamurai',
  'sengokuSamurai',
  'edoSamurai',
  'merian1705',
  'wallace1854',
  'mendel1865',
  'tgv1981',
  'ice1991',
  'eurostar1994',
  'dynatac1984',
  'vodafone1985',
  'sms1992',
] as const;
export type TimeCardId = (typeof TIME_CARD_IDS)[number];

export const TWENTIETH_CENTURY_CARD_IDS = new Set<TimeCardId>([
  'un1945',
  'sputnik1957',
  'shinkansen1964',
  'apollo1969',
  'earthDay1970',
  'voyager1977',
  'ibmPc1981',
  'berlinWall1989',
  'wright1903',
  'penicillin1928',
  'nobel1901',
  'einstein1905',
  'modelT1908',
  'southPole1911',
  'titanic1912',
  'panama1914',
  'russian1917',
  'flu1918',
  'suffrage1920',
  'tutankhamun1922',
  'turkey1923',
  'lindbergh1927',
  'crash1929',
  'saltMarch1930',
  'earhart1932',
  'war1939',
  'hubble1990',
  'mandela1994',
  'pathfinder1997',
  'iss1998',
  'blitz1940',
  'ussr1991',
  'beijing1995',
  'dolly1996',
  'normandy1944',
  'partition1947',
  'udhr1948',
  'dna1953',
  'brown1954',
  'bandung1955',
  'nasa1958',
  'gagarin1961',
  'march1963',
  'mexico1968',
  'microprocessor1971',
  'mobile1973',
  'apolloSoyuz1975',
  'smallpox1980',
  'internet1983',
  'liveAid1985',
  'chornobyl1986',
  'montreal1987',
  'web1989',
]);

export const ANCIENT_CARD_IDS = new Set<TimeCardId>([
  'sumer',
  'egypt',
  'shang',
  'indus',
  'persia',
  'rome',
  'greece',
  'phoenicia',
  'babylon',
  'olmec',
  'gobekli',
  'catalhoyuk',
  'stonehenge',
  'urZiggurat',
  'knossos',
  'hattusa',
  'mycenae',
  'meroe',
  'carthage',
  'cerveteri',
  'qinWarriors',
  'chavin',
  'nazcaLines',
  'jericho',
  'lascaux',
  'skaraBrae',
  'caral',
  'ugarit',
  'nineveh',
  'petra',
  'teotihuacan',
  'chauvet',
  'carnac',
  'banChiang',
  'dilmun',
  'giza',
  'abuSimbel',
  'thebes',
  'sanchi',
  'ajanta',
  'pasargadae',
  'ephesus',
  'pompeii',
  'colosseum',
  'hadriansWall',
  'palmyra',
  'hegra',
  'leptisMagna',
  'delphi',
  'mogao',
  'anuradhapura',
  'monteAlban',
  'palenque',
  'tiwanaku',
]);

export const TIME_CARDS: Record<TimeCardId, { image: string; source: string }> =
  {
    sumer: {
      image: '/time-traveler/sumer-scribe.png',
      source:
        'https://www.britishmuseum.org/sites/default/files/2019-09/Visit_Mesopotamia_KS2b.pdf',
    },
    egypt: {
      image: '/time-traveler/egypt-papyrus.png',
      source: 'https://www.metmuseum.org/toah/ht/02/afe.html',
    },
    shang: {
      image: '/time-traveler/shang-bronze.png',
      source: 'https://www.metmuseum.org/art/collection/search/53947',
    },
    maya: {
      image: '/time-traveler/maya-market.png',
      source: 'https://www.metmuseum.org/art/collection/search/313240',
    },
    indus: {
      image: '/time-traveler/indus-mohenjo-daro.png',
      source: 'https://whc.unesco.org/en/list/138/',
    },
    persia: {
      image: '/time-traveler/persia-persepolis.png',
      source: 'https://whc.unesco.org/en/list/114/',
    },
    rome: {
      image: '/time-traveler/rome-aqueduct.png',
      source: 'https://whc.unesco.org/en/list/344/',
    },
    mali: {
      image: '/time-traveler/mali-timbuktu.png',
      source: 'https://whc.unesco.org/en/list/119/',
    },
    song: {
      image: '/time-traveler/song-printing.png',
      source:
        'https://asia-archive.si.edu/learn/for-educators/teaching-china-with-the-smithsonian/explore-by-dynasty/song-dynasty/',
    },
    inca: {
      image: '/time-traveler/inca-road-v2.png',
      source: 'https://whc.unesco.org/en/list/1459/',
    },
    abbasid: {
      image: '/time-traveler/abbasid-baghdad.png',
      source:
        'https://www.metmuseum.org/essays/astronomy-and-astrology-in-the-medieval-islamic-world',
    },
    viking: {
      image: '/time-traveler/viking-harbor.png',
      source: 'https://timeandnavigation.si.edu/multimedia-asset/viking-ship',
    },
    greece: {
      image: '/time-traveler/greece-olympia.png',
      source: 'https://whc.unesco.org/en/list/517/',
    },
    phoenicia: {
      image: '/time-traveler/phoenicia-harbor.png',
      source: 'https://www.metmuseum.org/essays/the-phoenicians-1500-300-b-c',
    },
    aksum: {
      image: '/time-traveler/aksum-stelae.png',
      source: 'https://whc.unesco.org/en/list/15/',
    },
    khmer: {
      image: '/time-traveler/khmer-angkor.png',
      source: 'https://whc.unesco.org/en/list/668/',
    },
    zimbabwe: {
      image: '/time-traveler/zimbabwe-walls.png',
      source: 'https://whc.unesco.org/en/list/364/',
    },
    mexica: {
      image: '/time-traveler/mexica-tenochtitlan.png',
      source: 'https://www.metmuseum.org/essays/tenochtitlan',
    },
    benin: {
      image: '/time-traveler/benin-court.png',
      source:
        'https://www.britishmuseum.org/collection/object/E_Af1898-0115-23',
    },
    mughal: {
      image: '/time-traveler/mughal-agra.png',
      source: 'https://whc.unesco.org/en/list/252/',
    },
    un1945: {
      image: '/time-traveler/un-charter-1945-v2.png',
      source:
        'https://www.un.org/en/about-us/history-of-the-un/preparatory-years',
    },
    sputnik1957: {
      image: '/time-traveler/sputnik-1957.png',
      source: 'https://www.nasa.gov/history/sputnik/sputorig.html',
    },
    shinkansen1964: {
      image: '/time-traveler/shinkansen-1964.png',
      source: 'https://global.jr-central.co.jp/en/company/about_shinkansen/',
    },
    apollo1969: {
      image: '/time-traveler/apollo-11-1969-v2.png',
      source: 'https://www.nasa.gov/mission/apollo-11/',
    },
    earthDay1970: {
      image: '/time-traveler/earth-day-1970.png',
      source: 'https://www.epa.gov/history/epa-history-earth-day',
    },
    voyager1977: {
      image: '/time-traveler/voyager-1977.png',
      source:
        'https://science.nasa.gov/mission/voyager/golden-record-contents/',
    },
    ibmPc1981: {
      image: '/time-traveler/ibm-pc-1981.png',
      source: 'https://www.ibm.com/history/personal-computer',
    },
    berlinWall1989: {
      image: '/time-traveler/berlin-wall-1989.png',
      source:
        'https://www.berlin.de/en/history/8482274-8619314-opening-and-fall-of-the-berlin-wall.en.html',
    },
    babylon: {
      image: '/time-traveler/babylon-hammurabi-v2.png',
      source: 'https://www.louvre.fr/en/the-code-of-hammurabi',
    },
    olmec: {
      image: '/time-traveler/olmec-head.png',
      source: 'https://www.metmuseum.org/de/essays/la-venta-stone-sculpture',
    },
    tang: {
      image: '/time-traveler/tang-printing.png',
      source:
        'https://idp.bl.uk/discover/learning/buddhism-on-the-silk-roads/articles/buddhism-on-the-ground/buddhist-texts-the-diamond-sutra/',
    },
    florence: {
      image: '/time-traveler/florence-dome-v2.png',
      source:
        'https://duomo.firenze.it/en/opera-magazine/post/4649/on-30-august-1436-the-work-on-brunelleschi-s-dome-was-completed',
    },
    edo: {
      image: '/time-traveler/edo-printshop.png',
      source: 'https://www.loc.gov/exhibits/ukiyo-e/intro.html',
    },
    stockton1825: {
      image: '/time-traveler/stockton-railway.png',
      source:
        'https://blog.railwaymuseum.org.uk/shildon-the-cradle-of-the-railways-and-locomotion-no-1/',
    },
    wright1903: {
      image: '/time-traveler/wright-flyer.png',
      source:
        'https://www.nasa.gov/history/120-years-ago-the-first-powered-flight-at-kitty-hawk/',
    },
    penicillin1928: {
      image: '/time-traveler/fleming-penicillin-v2.png',
      source:
        'https://www.nobelprize.org/prizes/medicine/1945/fleming/questions-and-answers/',
    },
    gobekli: {
      image: '/time-traveler/gobekli-tepe.webp',
      source: 'https://whc.unesco.org/en/list/1572/',
    },
    catalhoyuk: {
      image: '/time-traveler/catalhoyuk.webp',
      source: 'https://whc.unesco.org/en/list/1405/',
    },
    stonehenge: {
      image: '/time-traveler/stonehenge.webp',
      source: 'https://whc.unesco.org/en/list/373/',
    },
    urZiggurat: {
      image: '/time-traveler/ziggurat-ur.webp',
      source: 'https://whc.unesco.org/en/list/1481/',
    },
    knossos: {
      image: '/time-traveler/knossos.webp',
      source: 'https://whc.unesco.org/en/list/1733/',
    },
    hattusa: {
      image: '/time-traveler/hattusa.webp',
      source: 'https://whc.unesco.org/en/list/377/',
    },
    mycenae: {
      image: '/time-traveler/mycenae.webp',
      source: 'https://whc.unesco.org/en/list/941/',
    },
    meroe: {
      image: '/time-traveler/meroe.webp',
      source: 'https://whc.unesco.org/en/list/1336/',
    },
    carthage: {
      image: '/time-traveler/carthage.webp',
      source: 'https://whc.unesco.org/en/list/37/',
    },
    cerveteri: {
      image: '/time-traveler/cerveteri.webp',
      source: 'https://whc.unesco.org/en/list/1158/',
    },
    qinWarriors: {
      image: '/time-traveler/qin-warriors.webp',
      source: 'https://whc.unesco.org/en/list/441/',
    },
    chavin: {
      image: '/time-traveler/chavin.webp',
      source: 'https://whc.unesco.org/en/list/330/',
    },
    nazcaLines: {
      image: '/time-traveler/nazca-lines.webp',
      source: 'https://whc.unesco.org/en/list/700/',
    },
    jericho: {
      image: '/time-traveler/jericho.webp',
      source: 'https://whc.unesco.org/en/list/1687/',
    },
    lascaux: {
      image: '/time-traveler/lascaux.webp',
      source: 'https://whc.unesco.org/en/list/85/',
    },
    skaraBrae: {
      image: '/time-traveler/skara-brae.webp',
      source: 'https://whc.unesco.org/en/list/514/',
    },
    caral: {
      image: '/time-traveler/caral.webp',
      source: 'https://whc.unesco.org/en/list/1269/',
    },
    ugarit: {
      image: '/time-traveler/ugarit.webp',
      source: 'https://whc.unesco.org/en/tentativelists/1292/',
    },
    nineveh: {
      image: '/time-traveler/nineveh.webp',
      source: 'https://www.metmuseum.org/art/collection/search/322612',
    },
    petra: {
      image: '/time-traveler/petra.webp',
      source: 'https://whc.unesco.org/en/list/326/',
    },
    teotihuacan: {
      image: '/time-traveler/teotihuacan.webp',
      source: 'https://whc.unesco.org/en/list/414/',
    },
    hagiaSophia: {
      image: '/time-traveler/hagia-sophia.webp',
      source: 'https://whc.unesco.org/en/list/356/',
    },
    aachen: {
      image: '/time-traveler/aachen.webp',
      source: 'https://whc.unesco.org/en/list/3/',
    },
    cordoba: {
      image: '/time-traveler/cordoba.webp',
      source: 'https://whc.unesco.org/en/list/313/',
    },
    borobudur: {
      image: '/time-traveler/borobudur.webp',
      source: 'https://whc.unesco.org/en/list/592/',
    },
    lalibela: {
      image: '/time-traveler/lalibela.webp',
      source: 'https://whc.unesco.org/en/list/18/',
    },
    kilwa: {
      image: '/time-traveler/kilwa.webp',
      source: 'https://whc.unesco.org/en/list/144/',
    },
    bukhara: {
      image: '/time-traveler/bukhara.webp',
      source: 'https://whc.unesco.org/en/list/602/',
    },
    samarkand: {
      image: '/time-traveler/samarkand.webp',
      source: 'https://whc.unesco.org/en/list/603/',
    },
    djenne: {
      image: '/time-traveler/djenne.webp',
      source: 'https://whc.unesco.org/en/list/116/',
    },
    cahokia: {
      image: '/time-traveler/cahokia.webp',
      source: 'https://whc.unesco.org/en/list/198/',
    },
    chichenItza: {
      image: '/time-traveler/chichen-itza.webp',
      source: 'https://whc.unesco.org/en/list/483/',
    },
    alhambra: {
      image: '/time-traveler/alhambra.webp',
      source: 'https://whc.unesco.org/en/list/314/',
    },
    haiti1804: {
      image: '/time-traveler/haiti-1804.webp',
      source: 'https://history.state.gov/milestones/1784-1800/haitian-rev/1000',
    },
    rocket1829: {
      image: '/time-traveler/rocket-1829.webp',
      source:
        'https://blog.scienceandindustrymuseum.org.uk/rocket-engineering-excellence/',
    },
    faraday1831: {
      image: '/time-traveler/faraday-1831.webp',
      source:
        'https://www.rigb.org/explore-science/explore/collection/history-research-ri',
    },
    morse1844: {
      image: '/time-traveler/morse-1844.webp',
      source:
        'https://www.loc.gov/collections/samuel-morse-papers/articles-and-essays/invention-of-the-telegraph/',
    },
    senecaFalls1848: {
      image: '/time-traveler/seneca-falls-1848.webp',
      source:
        'https://www.nps.gov/articles/declaration-of-sentiments-the-first-women-s-rights-convention.htm',
    },
    greatExhibition1851: {
      image: '/time-traveler/great-exhibition-1851.webp',
      source: 'https://www.vam.ac.uk/articles/the-great-exhibition-of-1851',
    },
    nightingale1854: {
      image: '/time-traveler/nightingale-1854.webp',
      source: 'https://www.florence-nightingale.co.uk/origins/',
    },
    darwin1859: {
      image: '/time-traveler/darwin-1859.webp',
      source:
        'https://www.nhm.ac.uk/discover/charles-darwin-most-famous-biologist.html',
    },
    emancipation1863: {
      image: '/time-traveler/emancipation-1863.webp',
      source:
        'https://www.archives.gov/milestone-documents/emancipation-proclamation',
    },
    meiji1868: {
      image: '/time-traveler/meiji-1868.webp',
      source: 'https://www.ndl.go.jp/portrait/e/pickup/012',
    },
    suez1869: {
      image: '/time-traveler/suez-1869.webp',
      source:
        'https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx',
    },
    bell1876: {
      image: '/time-traveler/bell-1876.webp',
      source:
        'https://www.si.edu/collections/snapshot/alexander-graham-bells-large-box-telephone',
    },
    lightbulb1879: {
      image: '/time-traveler/lightbulb-1879.webp',
      source:
        'https://www.nps.gov/edis/learn/historyculture/edison-biography.htm?simple=True',
    },
    liberty1886: {
      image: '/time-traveler/liberty-1886-v2.webp',
      source: 'https://www.nps.gov/stli/learn/statue-of-liberty-facts.htm',
    },
    eiffel1889: {
      image: '/time-traveler/eiffel-1889.webp',
      source:
        'https://www.toureiffel.paris/en/the-monument/universal-exhibition',
    },
    xray1895: {
      image: '/time-traveler/xray-1895.webp',
      source:
        'https://www.nobelprize.org/prizes/physics/1901/rontgen/biographical/',
    },
    olympics1896: {
      image: '/time-traveler/olympics-1896.webp',
      source:
        'https://library.olympics.com/Default/basicfilesdownload.ashx?itemGuid=2ECE9BE9-EA5F-4F0F-97DF-84C75B6BC60A',
    },
    adwa1896: {
      image: '/time-traveler/adwa-1896.webp',
      source: 'https://whc.unesco.org/document/155767',
    },
    philippines1896: {
      image: '/time-traveler/philippines-1896.webp',
      source:
        'https://philhistoricsites.nhcp.gov.ph/registry_database/andres-bonifacio-1863-1897/',
    },
    marconi1897: {
      image: '/time-traveler/marconi-1897.webp',
      source:
        'https://www.nobelprize.org/prizes/physics/1909/marconi/biographical/',
    },
    blitz1940: {
      image: '/time-traveler/london-blitz-1940.webp',
      source:
        'https://www.iwm.org.uk/sites/default/files/files/2025-01/Artists%20%26%20War%20Teacher%20Notes%20-%20Second%20World%20War.pdf',
    },
    normandy1944: {
      image: '/time-traveler/normandy-1944.webp',
      source: 'https://www.nps.gov/articles/the-great-crusade-75-years-ago.htm',
    },
    partition1947: {
      image: '/time-traveler/partition-1947.webp',
      source:
        'https://www.nationalarchives.gov.uk/education/teaching-resources/partition-of-british-india/',
    },
    udhr1948: {
      image: '/time-traveler/human-rights-1948.webp',
      source: 'https://www.un.org/en/about-us/udhr/history-of-the-declaration',
    },
    dna1953: {
      image: '/time-traveler/dna-1953.webp',
      source:
        'https://www.genome.gov/25520255/online-education-kit-1953-dna-double-helix',
    },
    brown1954: {
      image: '/time-traveler/brown-1954.webp',
      source:
        'https://www.archives.gov/milestone-documents/brown-v-board-of-education',
    },
    bandung1955: {
      image: '/time-traveler/bandung-1955.webp',
      source:
        'https://www.unesco.org/en/memory-world/asian-african-conference-archives',
    },
    nasa1958: {
      image: '/time-traveler/nasa-1958.webp',
      source:
        'https://www.nasa.gov/history/65-years-ago-the-national-aeronautics-and-space-act-of-1958-creates-nasa/',
    },
    gagarin1961: {
      image: '/time-traveler/gagarin-1961.webp',
      source:
        'https://www.nasa.gov/image-article/april-1961-first-human-entered-space/',
    },
    march1963: {
      image: '/time-traveler/washington-march-1963.webp',
      source: 'https://www.nps.gov/articles/march-on-washington.htm/index.htm',
    },
    mexico1968: {
      image: '/time-traveler/mexico-olympics-1968.webp',
      source:
        'https://library.olympics.com/Default/basicfilesdownload.ashx?itemGuid=2ECE9BE9-EA5F-4F0F-97DF-84C75B6BC60A',
    },
    microprocessor1971: {
      image: '/time-traveler/microprocessor-1971.webp',
      source:
        'https://timeline.intel.com/1971/the-first-programmable-microprocessor%3A-the-4004',
    },
    mobile1973: {
      image: '/time-traveler/mobile-phone-1973.webp',
      source:
        'https://americanhistory.si.edu/explore/stories/true-magic-dialing-cell-phone-history-marty-cooper',
    },
    apolloSoyuz1975: {
      image: '/time-traveler/apollo-soyuz-1975.webp',
      source:
        'https://www.nasa.gov/missions/apollo-soyuz/the-apollo-soyuz-mission/',
    },
    smallpox1980: {
      image: '/time-traveler/smallpox-1980.webp',
      source:
        'https://www.who.int/news/item/08-05-2020-commemorating-smallpox-eradication-a-legacy-of-hope-for-covid-19-and-other-diseases',
    },
    internet1983: {
      image: '/time-traveler/internet-1983.webp',
      source:
        'https://www.internetsociety.org/internet/history-internet/brief-history-internet/',
    },
    liveAid1985: {
      image: '/time-traveler/live-aid-1985.webp',
      source:
        'https://www.nli.ie/news-stories/news/step-back-1985-nli-live-aid-archive-goes-digital',
    },
    chornobyl1986: {
      image: '/time-traveler/chernobyl-1986.webp',
      source:
        'https://www.who.int/publications/m/item/1986-2016-chernobyl-at-30',
    },
    montreal1987: {
      image: '/time-traveler/montreal-1987.webp',
      source: 'https://ozone.unep.org/treaties/montreal-protocol?q=treaties',
    },
    web1989: {
      image: '/time-traveler/web-1989.webp',
      source:
        'https://home.cern/science/computing/the-birth-of-the-web/short-history-web/',
    },
    chauvet: {
      image: '/time-traveler/chauvet.webp',
      source: 'https://whc.unesco.org/en/list/1426/',
    },
    carnac: {
      image: '/time-traveler/carnac.webp',
      source: 'https://whc.unesco.org/en/list/1725/',
    },
    banChiang: {
      image: '/time-traveler/ban-chiang.webp',
      source: 'https://whc.unesco.org/en/list/575/',
    },
    dilmun: {
      image: '/time-traveler/dilmun.webp',
      source: 'https://whc.unesco.org/en/list/1542/',
    },
    giza: {
      image: '/time-traveler/giza.webp',
      source: 'https://whc.unesco.org/en/list/86/',
    },
    abuSimbel: {
      image: '/time-traveler/abu-simbel.webp',
      source: 'https://whc.unesco.org/en/list/88/',
    },
    thebes: {
      image: '/time-traveler/thebes.webp',
      source: 'https://whc.unesco.org/en/list/87/',
    },
    sanchi: {
      image: '/time-traveler/sanchi.webp',
      source: 'https://whc.unesco.org/en/list/524/',
    },
    ajanta: {
      image: '/time-traveler/ajanta.webp',
      source: 'https://whc.unesco.org/en/list/242/',
    },
    pasargadae: {
      image: '/time-traveler/pasargadae.webp',
      source: 'https://whc.unesco.org/en/list/1106/',
    },
    ephesus: {
      image: '/time-traveler/ephesus.webp',
      source: 'https://whc.unesco.org/en/list/1018/',
    },
    pompeii: {
      image: '/time-traveler/pompeii.webp',
      source: 'https://whc.unesco.org/en/list/829/',
    },
    colosseum: {
      image: '/time-traveler/colosseum.webp',
      source: 'https://whc.unesco.org/en/list/91/',
    },
    hadriansWall: {
      image: '/time-traveler/hadrians-wall.webp',
      source: 'https://whc.unesco.org/en/list/430/',
    },
    palmyra: {
      image: '/time-traveler/palmyra.webp',
      source: 'https://whc.unesco.org/en/list/23/',
    },
    hegra: {
      image: '/time-traveler/hegra.webp',
      source: 'https://whc.unesco.org/en/list/1293/',
    },
    leptisMagna: {
      image: '/time-traveler/leptis-magna.webp',
      source: 'https://whc.unesco.org/en/list/183/',
    },
    delphi: {
      image: '/time-traveler/delphi.webp',
      source: 'https://whc.unesco.org/en/list/393/',
    },
    mogao: {
      image: '/time-traveler/mogao.webp',
      source: 'https://whc.unesco.org/en/list/440/',
    },
    anuradhapura: {
      image: '/time-traveler/anuradhapura.webp',
      source: 'https://whc.unesco.org/en/list/200/',
    },
    kyivSophia: {
      image: '/time-traveler/kyiv-sophia.webp',
      source: 'https://whc.unesco.org/en/list/527/',
    },
    bulguksa: {
      image: '/time-traveler/bulguksa.webp',
      source: 'https://whc.unesco.org/en/list/736/',
    },
    himeji: {
      image: '/time-traveler/himeji-v2.webp',
      source: 'https://whc.unesco.org/en/list/661/',
    },
    forbiddenCity: {
      image: '/time-traveler/forbidden-city.webp',
      source: 'https://whc.unesco.org/en/list/439/',
    },
    machuPicchu: {
      image: '/time-traveler/machu-picchu.webp',
      source: 'https://whc.unesco.org/en/list/274/',
    },
    marrakesh: {
      image: '/time-traveler/marrakesh.webp',
      source: 'https://whc.unesco.org/en/list/331/',
    },
    fez: {
      image: '/time-traveler/fez.webp',
      source: 'https://whc.unesco.org/en/list/170/',
    },
    kairouan: {
      image: '/time-traveler/kairouan.webp',
      source: 'https://whc.unesco.org/en/list/499/',
    },
    timbuktu: {
      image: '/time-traveler/timbuktu.webp',
      source: 'https://whc.unesco.org/en/list/119/',
    },
    askia: {
      image: '/time-traveler/askia.webp',
      source: 'https://whc.unesco.org/en/list/1139/',
    },
    sukhothai: {
      image: '/time-traveler/sukhothai.webp',
      source: 'https://whc.unesco.org/en/list/574/',
    },
    bagan: {
      image: '/time-traveler/bagan.webp',
      source: 'https://whc.unesco.org/en/list/1588/',
    },
    bamiyan: {
      image: '/time-traveler/bamiyan.webp',
      source: 'https://whc.unesco.org/en/list/208/',
    },
    greatWall: {
      image: '/time-traveler/great-wall.webp',
      source: 'https://whc.unesco.org/en/list/438/',
    },
    montSaintMichel: {
      image: '/time-traveler/mont-saint-michel.webp',
      source: 'https://whc.unesco.org/en/list/80/',
    },
    venice: {
      image: '/time-traveler/venice.webp',
      source: 'https://whc.unesco.org/en/list/394/',
    },
    lubeck: {
      image: '/time-traveler/lubeck.webp',
      source: 'https://whc.unesco.org/en/list/272/',
    },
    novgorod: {
      image: '/time-traveler/novgorod.webp',
      source: 'https://whc.unesco.org/en/list/604/',
    },
    haeinsa: {
      image: '/time-traveler/haeinsa.webp',
      source: 'https://whc.unesco.org/en/list/737/',
    },
    shibam: {
      image: '/time-traveler/shibam.webp',
      source: 'https://whc.unesco.org/en/list/192/',
    },
    zhengHe: {
      image: '/time-traveler/zheng-he.webp',
      source: 'https://www.si.edu/object/siris_sil_843382',
    },
    gutenberg: {
      image: '/time-traveler/gutenberg.webp',
      source: 'https://www.loc.gov/exhibits/bibles/the-gutenberg-bible.html',
    },
    istanbul1453: {
      image: '/time-traveler/istanbul-1453.webp',
      source: 'https://whc.unesco.org/en/list/356/',
    },
    tenochtitlan: {
      image: '/time-traveler/tenochtitlan.webp',
      source: 'https://whc.unesco.org/en/list/412/',
    },
    fatehpurSikri: {
      image: '/time-traveler/fatehpur-sikri.webp',
      source: 'https://whc.unesco.org/en/list/255/',
    },
    sistineCeiling: {
      image: '/time-traveler/sistine-ceiling-v2.webp',
      source:
        'https://www.vatican.va/content/vatican/en/ra/cappella-sistina.html',
    },
    copernicus1543: {
      image: '/time-traveler/copernicus.webp',
      source: 'https://cosmicopia.gsfc.nasa.gov/hist_bef1600.html',
    },
    suleymaniye: {
      image: '/time-traveler/suleymaniye.webp',
      source: 'https://whc.unesco.org/en/list/356/',
    },
    globe1599: {
      image: '/time-traveler/globe-theatre.webp',
      source:
        'https://www.shakespearesglobe.com/discover/shakespeares-world/the-globe/',
    },
    galileo1609: {
      image: '/time-traveler/galileo.webp',
      source: 'https://catalogue.museogalileo.it/multimedia/TelescopeBis.html',
    },
    tajMahal: {
      image: '/time-traveler/taj-mahal.webp',
      source: 'https://whc.unesco.org/en/list/252/',
    },
    isfahan: {
      image: '/time-traveler/isfahan.webp',
      source: 'https://whc.unesco.org/en/list/115/',
    },
    versailles: {
      image: '/time-traveler/versailles.webp',
      source: 'https://whc.unesco.org/en/list/83/',
    },
    newton1687: {
      image: '/time-traveler/newton-principia.webp',
      source: 'https://royalsociety.org/blog/2014/07/principia/',
    },
    petersburg1703: {
      image: '/time-traveler/petersburg-1703.webp',
      source: 'https://whc.unesco.org/en/list/540/',
    },
    declaration1776: {
      image: '/time-traveler/american-declaration.webp',
      source:
        'https://www.archives.gov/milestone-documents/declaration-of-independence',
    },
    montgolfier1783: {
      image: '/time-traveler/montgolfier.webp',
      source:
        'https://airandspace.si.edu/collection-objects/ascension-montgolfier-balloon/nasm_A19370051000',
    },
    french1789: {
      image: '/time-traveler/french-revolution.webp',
      source:
        'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/revolution-francaise',
    },
    wollstonecraft1792: {
      image: '/time-traveler/wollstonecraft.webp',
      source: 'https://www.loc.gov/item/34033009/',
    },
    jenner1796: {
      image: '/time-traveler/jenner-1796.webp',
      source:
        'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination',
    },
    nobel1901: {
      image: '/time-traveler/nobel-1901.webp',
      source:
        'https://www.nobelprize.org/prizes/themes/the-very-first-nobel-prizes/',
    },
    einstein1905: {
      image: '/time-traveler/einstein-1905.webp',
      source:
        'https://www.aps.org/funding-recognition/historic-sites/einsteinhaus',
    },
    modelT1908: {
      image: '/time-traveler/model-t-1908.webp',
      source:
        'https://www.thehenryford.org/collections/explore/artifact/312908',
    },
    southPole1911: {
      image: '/time-traveler/south-pole-1911.webp',
      source:
        'https://museum.wa.gov.au/museums/wa-maritime-museum/roald-amundsens-south-pole-expedition-1910-1912',
    },
    titanic1912: {
      image: '/time-traveler/titanic-1912.webp',
      source: 'https://www.rmg.co.uk/stories/topics/rms-titanic-facts',
    },
    panama1914: {
      image: '/time-traveler/panama-1914.webp',
      source: 'https://pancanal.com/en/panama-canal-turns-90/',
    },
    russian1917: {
      image: '/time-traveler/russian-1917.webp',
      source: 'https://www.loc.gov/exhibits/empire/chronology.html',
    },
    flu1918: {
      image: '/time-traveler/flu-1918.webp',
      source:
        'https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/1918-pandemic-h1n1.html',
    },
    suffrage1920: {
      image: '/time-traveler/suffrage-1920.webp',
      source: 'https://www.archives.gov/milestone-documents/19th-amendment',
    },
    tutankhamun1922: {
      image: '/time-traveler/tutankhamun-1922.webp',
      source: 'https://www.britishmuseum.org/collection/term/BIOG53212',
    },
    turkey1923: {
      image: '/time-traveler/turkey-1923.webp',
      source:
        'https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/56c8022b-b5e2-4402-9770-018672b83200.pdf',
    },
    lindbergh1927: {
      image: '/time-traveler/lindbergh-1927.webp',
      source:
        'https://airandspace.si.edu/collection-objects/barograph-spirit-st-louis-charles-lindbergh-ny-paris-flight-may-1927/nasm_A19310028000',
    },
    crash1929: {
      image: '/time-traveler/wallstreet-1929.webp',
      source:
        'https://www.federalreservehistory.org/essays/stock-market-crash-of-1929',
    },
    saltMarch1930: {
      image: '/time-traveler/salt-march-1930.webp',
      source: 'https://cmsadmin.amritmahotsav.nic.in/day-1-12th-march.htm',
    },
    earhart1932: {
      image: '/time-traveler/earhart-1932.webp',
      source:
        'https://airandspace.si.edu/multimedia-gallery/amelia-earhart-departs-solo-flight-across-atlantic-may-20-1932',
    },
    war1939: {
      image: '/time-traveler/war-1939.webp',
      source:
        'https://www.iwm.org.uk/sites/default/files/files/2023-10/second_world_war_galleries_large_print.pdf',
    },
    hubble1990: {
      image: '/time-traveler/hubble-1990.webp',
      source:
        'https://science.nasa.gov/mission/hubble/overview/hubble-timeline/hubble-history-timeline-full-text/',
    },
    mandela1994: {
      image: '/time-traveler/mandela-1994.webp',
      source: 'https://www.nelsonmandela.org/democracy',
    },
    pathfinder1997: {
      image: '/time-traveler/pathfinder-1997.webp',
      source: 'https://science.nasa.gov/mission/mars-pathfinder/',
    },
    iss1998: {
      image: '/time-traveler/iss-1998.webp',
      source: 'https://www.nasa.gov/international-space-station/unity-module/',
    },
    monteAlban: {
      image: '/time-traveler/monte-alban.webp',
      source: 'https://whc.unesco.org/en/list/415/',
    },
    palenque: {
      image: '/time-traveler/palenque.webp',
      source: 'https://whc.unesco.org/en/list/411/',
    },
    tiwanaku: {
      image: '/time-traveler/tiwanaku.webp',
      source: 'https://whc.unesco.org/en/list/567/',
    },
    mesaVerde: {
      image: '/time-traveler/mesa-verde.webp',
      source: 'https://whc.unesco.org/en/list/27/',
    },
    rapaNui: {
      image: '/time-traveler/rapa-nui.webp',
      source: 'https://whc.unesco.org/en/list/715/',
    },
    brihadeeswara: {
      image: '/time-traveler/brihadeeswara.webp',
      source: 'https://whc.unesco.org/en/list/250/',
    },
    mapungubwe: {
      image: '/time-traveler/mapungubwe.webp',
      source: 'https://whc.unesco.org/en/list/1099/',
    },
    harar: {
      image: '/time-traveler/harar.webp',
      source: 'https://whc.unesco.org/en/list/1189/',
    },
    ussr1991: {
      image: '/time-traveler/ussr-1991.webp',
      source: 'https://2001-2009.state.gov/r/pa/ho/time/pcw/108229.htm',
    },
    beijing1995: {
      image: '/time-traveler/beijing-1995.webp',
      source: 'https://www.un.org/womenwatch/daw/beijing/fwcw.htm',
    },
    dolly1996: {
      image: '/time-traveler/dolly-1996.webp',
      source: 'https://vet.ed.ac.uk/roslin/about/history/dolly',
    },
    liverpool1830: {
      image: '/time-traveler/liverpool-1830.webp',
      source:
        'https://blog.railwaymuseum.org.uk/railway-heritage-designation-advisory-board/',
    },
    tokyo1964: {
      image: '/time-traveler/tokyo-1964.webp',
      source:
        'https://library.olympics.com/Default/basicfilesdownload.ashx?itemGuid=2ECE9BE9-EA5F-4F0F-97DF-84C75B6BC60A',
    },
    transcontinental1915: {
      image: '/time-traveler/telephone-1915.webp',
      source:
        'https://about.att.com/story/2026/150-years-first-telephone-call.html',
    },
    transatlantic1927: {
      image: '/time-traveler/telephone-1927.webp',
      source:
        'https://about.att.com/story/2026/150-years-first-telephone-call.html',
    },
    segoviaAqueduct: {
      image: '/time-traveler/segovia-aqueduct.webp',
      source: 'https://whc.unesco.org/en/list/311',
    },
    tarragonaAqueduct: {
      image: '/time-traveler/tarragona-aqueduct.webp',
      source: 'https://whc.unesco.org/en/list/875',
    },
    elvasAqueduct: {
      image: '/time-traveler/elvas-aqueduct.webp',
      source: 'https://whc.unesco.org/en/list/1367',
    },
    epidaurusTheatre: {
      image: '/time-traveler/epidaurus-theatre.webp',
      source: 'https://whc.unesco.org/en/list/491',
    },
    benz1886: {
      image: '/time-traveler/benz-1886.webp',
      source:
        'https://group.mercedes-benz.com/company/tradition/company-history/1885-1886.html',
    },
    beetle1945: {
      image: '/time-traveler/beetle-1945.webp',
      source:
        'https://www.volkswagen-newsroom.com/en/press-releases/75-years-ago-in-wolfsburg-start-of-series-production-of-the-volkswagen-beetle-6732',
    },
    mini1959: {
      image: '/time-traveler/mini-1959.webp',
      source:
        'https://www.mini.com/en_MS/home/heritage/1959-the-mini-was-born.html',
    },
    scott1912: {
      image: '/time-traveler/scott-1912.webp',
      source:
        'https://www.rmg.co.uk/stories/maritime-history/race-south-pole-scott-amundsen',
    },
    mawson1911: {
      image: '/time-traveler/mawson-1911.webp',
      source:
        'https://www.nma.gov.au/defining-moments/resources/mawson-in-the-antarctic',
    },
    shackleton1914: {
      image: '/time-traveler/shackleton-1914.webp',
      source:
        'https://www.rmg.co.uk/stories/maritime-history/sir-ernest-shackleton',
    },
    charlesBalloon1783: {
      image: '/time-traveler/charles-balloon-1783.webp',
      source:
        'https://airandspace.si.edu/collection-objects/ascension-montgolfier-balloon/nasm_A19370051000',
    },
    blanchardBalloon1785: {
      image: '/time-traveler/blanchard-balloon-1785.webp',
      source:
        'https://airandspace.si.edu/collection-archive/george-walpole-3rd-earl-orford-letter-regarding-early-ballooning/sova-nasm-xxxx-0995',
    },
    zeppelin1900: {
      image: '/time-traveler/zeppelin-1900.webp',
      source:
        'https://www.zeppelin-museum.de/uploads/20241018_PM_ZM_Zeppelin_Kalender_2025_28910d75e5.pdf',
    },
    oscars1929: {
      image: '/time-traveler/oscars-1929.webp',
      source: 'https://www.oscars.org/oscars/ceremonies/1929',
    },
    pulitzer1917: {
      image: '/time-traveler/pulitzer-1917.webp',
      source: 'https://www.pulitzer.org/prize-winners-by-year/1917',
    },
    fields1936: {
      image: '/time-traveler/fields-1936.webp',
      source:
        'https://www.mathunion.org/imu-awards/imu-awards-prizes-and-special-lecture',
    },
    panic1907: {
      image: '/time-traveler/panic-1907.webp',
      source: 'https://www.federalreservehistory.org/essays/panic-of-1907',
    },
    blackMonday1987: {
      image: '/time-traveler/black-monday-1987.webp',
      source:
        'https://www.federalreservehistory.org/essays/stock-market-crash-of-1987',
    },
    crisis2008: {
      image: '/time-traveler/crisis-2008.webp',
      source:
        'https://www.federalreservehistory.org/essays/great-recession-and-its-aftermath',
    },
    kamakuraSamurai: {
      image: '/time-traveler/kamakura-samurai.webp',
      source:
        'https://www.metmuseum.org/exhibitions/listings/2009/art-of-the-samurai/photo-gallery',
    },
    sengokuSamurai: {
      image: '/time-traveler/sengoku-samurai.webp',
      source: 'https://www.metmuseum.org/art/collection/search/22505',
    },
    edoSamurai: {
      image: '/time-traveler/edo-samurai.webp',
      source: 'https://www.metmuseum.org/toah/ht/09/eaj.html',
    },
    merian1705: {
      image: '/time-traveler/merian-1705.webp',
      source:
        'https://www.nhm.ac.uk/discover/maria-sibylla-merian-metamorphosis-art-and-science.html',
    },
    wallace1854: {
      image: '/time-traveler/wallace-1854.webp',
      source:
        'https://www.nhm.ac.uk/discover/who-was-alfred-russel-wallace.html',
    },
    mendel1865: {
      image: '/time-traveler/mendel-1865.webp',
      source:
        'https://www.nature.com/scitable/topicpage/gregor-mendel-a-private-scientist-6618227/',
    },
    tgv1981: {
      image: '/time-traveler/tgv-1981.webp',
      source:
        'https://www.sncf-voyageurs.com/en/travel-with-us/in-france/news/45-years-of-high-speed-travel-and-still-one-step-ahead/',
    },
    ice1991: {
      image: '/time-traveler/ice-1991.webp',
      source: 'https://www.deutschebahn.com/de/1991-ICE-1-7033058',
    },
    eurostar1994: {
      image: '/time-traveler/eurostar-1994.webp',
      source:
        'https://press.eurostar.com/section/about-us/our-story/?country=UK&lang=eng',
    },
    dynatac1984: {
      image: '/time-traveler/dynatac-1984.webp',
      source: 'https://americanhistory.si.edu/collections/object/nmah_1191361',
    },
    vodafone1985: {
      image: '/time-traveler/vodafone-1985.webp',
      source: 'https://www.vodafone.com/our-company/our-history',
    },
    sms1992: {
      image: '/time-traveler/sms-1992.webp',
      source:
        'https://www.vodafone.com/news/newsroom/technology/25-anniversary-text-message',
    },
  };

const QUESTION_IDS = [
  'clay',
  'papyrus',
  'bronze',
  'cacao',
  'indusDrain',
  'indusSeals',
  'persiaPersepolis',
  'persiaRoad',
  'romeAqueduct',
  'romeAppia',
  'maliMusa',
  'maliTimbuktu',
  'songType',
  'songMoney',
  'incaQuipu',
  'incaRoad',
  'abbasidWisdom',
  'abbasidTranslations',
  'vikingShips',
  'vikingGreenland',
  'greeceOlympia',
  'greeceParthenon',
  'phoeniciaPurple',
  'phoeniciaAlphabet',
  'aksumStelae',
  'aksumTrade',
  'khmerWat',
  'khmerWater',
  'zimbabweWalls',
  'zimbabweTrade',
  'mexicaLake',
  'mexicaPrecinct',
  'beninPlaques',
  'beninCasting',
  'mughalTaj',
  'mughalFatehpur',
  'unCharter',
  'unAssembly',
  'sputnikFirst',
  'sputnikSignals',
  'shinkansenRoute',
  'shinkansenTime',
  'apolloLanding',
  'apolloCollins',
  'earthDayCrowds',
  'earthDayAgency',
  'voyagerRecord',
  'voyagerOrder',
  'ibmPcLaunch',
  'ibmPcSoftware',
  'berlinWallOpening',
  'berlinWallBorder',
  'babylonStele',
  'babylonShamash',
  'olmecHeads',
  'olmecBasalt',
  'tangSutra',
  'tangChangan',
  'florenceDome',
  'florenceConstruction',
  'edoPrints',
  'edoCapital',
  'stocktonPassengers',
  'stocktonLocomotion',
  'wrightFlight',
  'wrightSeconds',
  'penicillinMold',
  'penicillinName',
  'gobekliPillars',
  'catalhoyukRoofs',
  'stonehengeCircle',
  'urZiggurat',
  'knossosFrescoes',
  'hattusaLionGate',
  'mycenaeWalls',
  'meroePyramids',
  'carthageHarbor',
  'cerveteriTombs',
  'qinClayArmy',
  'chavinTemple',
  'nazcaGeoglyphs',
  'jerichoTower',
  'lascauxAnimals',
  'skaraBraeHouses',
  'caralPlazas',
  'ugaritAlphabet',
  'ninevehReliefs',
  'petraRockCity',
  'teotihuacanAvenue',
  'hagiaSophiaDome',
  'aachenOctagon',
  'cordobaArches',
  'borobudurTerraces',
  'lalibelaRockChurches',
  'kilwaOceanTrade',
  'bukharaSilkRoad',
  'samarkandCrossroads',
  'djenneEarthenCity',
  'cahokiaMound',
  'chichenItzaCaracol',
  'alhambraPalace',
  'haitiFreedom',
  'rocketRainhill',
  'faradayInduction',
  'morseTelegraph',
  'senecaDeclaration',
  'greatExhibitionGlass',
  'nightingaleScutari',
  'darwinOrigin',
  'emancipationProclamation',
  'meijiRestoration',
  'suezOpening',
  'bellTelephone',
  'edisonLighting',
  'libertyDedication',
  'eiffelExposition',
  'rontgenXray',
  'athensOlympics',
  'adwaVictory',
  'philippineRevolution',
  'marconiWireless',
  'blitzShelters',
  'normandyLandings',
  'partitionTrains',
  'humanRightsDeclaration',
  'dnaDoubleHelix',
  'brownDecision',
  'bandungConference',
  'nasaFounded',
  'gagarinOrbit',
  'washingtonMarch',
  'mexicoOlympics',
  'intel4004',
  'mobileCall',
  'apolloSoyuzHandshake',
  'smallpoxEradication',
  'tcpIpSwitch',
  'liveAidConcert',
  'chornobylAccident',
  'montrealProtocol',
  'webProposal',
  'chauvetAnimals',
  'carnacRows',
  'banChiangPots',
  'dilmunMounds',
  'gizaKhufu',
  'abuSimbelStatues',
  'thebesKarnak',
  'sanchiStupa',
  'ajantaPaintings',
  'pasargadaeCyrus',
  'ephesusLibrary',
  'pompeiiAsh',
  'colosseumArena',
  'hadriansWallFrontier',
  'palmyraCaravans',
  'hegraTombs',
  'leptisForum',
  'delphiOracle',
  'mogaoSilkRoad',
  'anuradhapuraCity',
  'chauvetSealed',
  'carnacMenhirs',
  'banChiangBurials',
  'dilmunTrade',
  'gizaWonder',
  'abuSimbelRescue',
  'thebesNecropolis',
  'sanchiGateways',
  'ajantaCliff',
  'pasargadaeCapital',
  'ephesusArtemis',
  'pompeiiFrescoes',
  'colosseumFlavian',
  'hadriansWallForts',
  'palmyraColumns',
  'hegraInscriptions',
  'leptisSeverus',
  'delphiTreasuries',
  'mogaoMurals',
  'anuradhapuraBodhi',
  'kyivMosaics',
  'bulguksaSilla',
  'himejiWhite',
  'forbiddenPalace',
  'machuRidge',
  'marrakeshAlmoravid',
  'fezMedina',
  'kairouanMosque',
  'timbuktuScholars',
  'askiaTomb',
  'sukhothaiWriting',
  'baganTemples',
  'bamiyanBuddhas',
  'greatWallMing',
  'montTides',
  'veniceLagoon',
  'lubeckHansa',
  'novgorodTrade',
  'haeinsaBlocks',
  'shibamTowers',
  'kyivOrans',
  'bulguksaSeokguram',
  'himejiDefences',
  'forbiddenAxis',
  'machuTerraces',
  'marrakeshWalls',
  'fezMarinids',
  'kairouanAghlabids',
  'timbuktuMosques',
  'askiaGao',
  'sukhothaiTemples',
  'baganPlain',
  'bamiyanNiches',
  'greatWallWatchtowers',
  'montPilgrims',
  'veniceGalleys',
  'lubeckBrick',
  'novgorodSophia',
  'haeinsaRepository',
  'shibamSkyscrapers',
  'zhengFleet',
  'gutenbergBible',
  'istanbulConquest',
  'tenochtitlanCanals',
  'fatehpurAkbar',
  'sistineMichelangelo',
  'copernicusSun',
  'suleymaniyeMosque',
  'globeStage',
  'galileoMoon',
  'tajMumtaz',
  'isfahanSquare',
  'versaillesLouis',
  'newtonPrincipia',
  'petersburgFounding',
  'declarationCongress',
  'montgolfierBalloon',
  'bastille1789',
  'wollstonecraftRights',
  'jennerVaccine',
  'zhengPorts',
  'gutenbergType',
  'istanbulBosphorus',
  'tenochtitlanChinampas',
  'fatehpurDecade',
  'sistineGenesis',
  'copernicusEarth',
  'suleymaniyeSinan',
  'globeAudience',
  'galileoJupiter',
  'tajYamuna',
  'isfahanPolo',
  'versaillesGardens',
  'newtonHalley',
  'petersburgNeva',
  'declarationAugust',
  'montgolfierAnnonay',
  'bastilleJuly',
  'wollstonecraftEducation',
  'jennerCowpox',
  'nobelFirst',
  'einsteinPapers',
  'fordModelT',
  'amundsenPole',
  'titanicVoyage',
  'panamaOpening',
  'russianRevolution',
  'fluPandemic',
  'suffrageAmendment',
  'tutTomb',
  'turkeyRepublic',
  'lindberghAtlantic',
  'stockCrash',
  'gandhiSalt',
  'earhartSolo',
  'warOutbreak',
  'hubbleLaunch',
  'saElection',
  'pathfinderMars',
  'issModules',
  'monteAlbanHill',
  'palenqueMaya',
  'tiwanakuGateway',
  'mesaCliffs',
  'rapaMoai',
  'cholaTemple',
  'mapungubweGold',
  'hararWalls',
  'ussrDissolution',
  'beijingWomen',
  'dollyClone',
  'monteAlbanPlaza',
  'palenqueReliefs',
  'tiwanakuAltiplano',
  'mesaManyRooms',
  'rapaAhu',
  'cholaBronzes',
  'mapungubweRivers',
  'hararGates',
] as const;
type QuestionId = (typeof QUESTION_IDS)[number];
export const TIME_TRAVELER_QUESTION_COUNT = QUESTION_IDS.length;

const QUESTION_DATA: Record<
  QuestionId,
  { answer: TimeCardId; cardIds: readonly TimeCardId[]; source: string }
> = {
  clay: {
    answer: 'sumer',
    cardIds: ['sumer', 'egypt', 'shang', 'maya'],
    source:
      'https://www.britishmuseum.org/sites/default/files/2019-09/Visit_Mesopotamia_KS2b.pdf',
  },
  papyrus: {
    answer: 'egypt',
    cardIds: ['sumer', 'egypt', 'shang', 'maya'],
    source:
      'https://www.metmuseum.org/essays/egypt-in-the-old-kingdom-ca-2649-2150-b-c',
  },
  bronze: {
    answer: 'shang',
    cardIds: ['sumer', 'egypt', 'shang', 'maya'],
    source: 'https://www.metmuseum.org/art/collection/search/53947',
  },
  cacao: {
    answer: 'maya',
    cardIds: ['sumer', 'egypt', 'shang', 'maya'],
    source: 'https://www.metmuseum.org/perspectives/maya-drinking-cup',
  },
  indusDrain: {
    answer: 'indus',
    cardIds: ['indus', 'sumer', 'egypt', 'rome'],
    source: 'https://whc.unesco.org/en/list/138/',
  },
  indusSeals: {
    answer: 'indus',
    cardIds: ['indus', 'shang', 'maya', 'sumer'],
    source: 'https://www.britishmuseum.org/collection/object/A_1947-0416-1',
  },
  persiaPersepolis: {
    answer: 'persia',
    cardIds: ['persia', 'rome', 'shang', 'inca'],
    source: 'https://whc.unesco.org/en/list/114/',
  },
  persiaRoad: {
    answer: 'persia',
    cardIds: ['persia', 'rome', 'mali', 'song'],
    source: 'https://82nd-and-fifth.metmuseum.org/toah/ht/04/wai.html',
  },
  romeAqueduct: {
    answer: 'rome',
    cardIds: ['rome', 'inca', 'persia', 'abbasid'],
    source: 'https://whc.unesco.org/en/list/344/',
  },
  romeAppia: {
    answer: 'rome',
    cardIds: ['rome', 'persia', 'mali', 'viking'],
    source: 'https://whc.unesco.org/en/list/1708/',
  },
  maliMusa: {
    answer: 'mali',
    cardIds: ['mali', 'persia', 'inca', 'viking'],
    source: 'https://www.metmuseum.org/toah/ht/07/afu.html',
  },
  maliTimbuktu: {
    answer: 'mali',
    cardIds: ['mali', 'abbasid', 'maya', 'song'],
    source: 'https://whc.unesco.org/en/list/119/',
  },
  songType: {
    answer: 'song',
    cardIds: ['song', 'shang', 'abbasid', 'viking'],
    source:
      'https://blogs.loc.gov/international-collections/2021/06/the-history-of-printing-in-asia-according-to-library-of-congress-asian-collections-part-1/',
  },
  songMoney: {
    answer: 'song',
    cardIds: ['song', 'rome', 'mali', 'persia'],
    source:
      'https://asia-archive.si.edu/learn/for-educators/teaching-china-with-the-smithsonian/explore-by-dynasty/song-dynasty/',
  },
  incaQuipu: {
    answer: 'inca',
    cardIds: ['inca', 'maya', 'shang', 'mali'],
    source: 'https://www.si.edu/collections/snapshot/quipu',
  },
  incaRoad: {
    answer: 'inca',
    cardIds: ['inca', 'persia', 'rome', 'viking'],
    source: 'https://whc.unesco.org/en/list/1459/',
  },
  abbasidWisdom: {
    answer: 'abbasid',
    cardIds: ['abbasid', 'song', 'mali', 'rome'],
    source:
      'https://www.metmuseum.org/learn/educators/curriculum-resources/art-of-the-islamic-world/unit-four',
  },
  abbasidTranslations: {
    answer: 'abbasid',
    cardIds: ['abbasid', 'persia', 'song', 'inca'],
    source:
      'https://www.metmuseum.org/essays/astronomy-and-astrology-in-the-medieval-islamic-world',
  },
  vikingShips: {
    answer: 'viking',
    cardIds: ['viking', 'rome', 'mali', 'inca'],
    source: 'https://timeandnavigation.si.edu/multimedia-asset/viking-ship',
  },
  vikingGreenland: {
    answer: 'viking',
    cardIds: ['viking', 'maya', 'song', 'persia'],
    source: 'https://timeandnavigation.si.edu/multimedia-asset/viking-ship',
  },
  greeceOlympia: {
    answer: 'greece',
    cardIds: ['greece', 'rome', 'persia', 'phoenicia'],
    source: 'https://whc.unesco.org/en/list/517/',
  },
  greeceParthenon: {
    answer: 'greece',
    cardIds: ['greece', 'rome', 'persia', 'mughal'],
    source: 'https://whc.unesco.org/en/list/404/',
  },
  phoeniciaPurple: {
    answer: 'phoenicia',
    cardIds: ['phoenicia', 'greece', 'persia', 'benin'],
    source: 'https://www.metmuseum.org/essays/the-phoenicians-1500-300-b-c',
  },
  phoeniciaAlphabet: {
    answer: 'phoenicia',
    cardIds: ['phoenicia', 'sumer', 'egypt', 'shang'],
    source:
      'https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/alphabet',
  },
  aksumStelae: {
    answer: 'aksum',
    cardIds: ['aksum', 'egypt', 'zimbabwe', 'benin'],
    source: 'https://whc.unesco.org/en/list/15/',
  },
  aksumTrade: {
    answer: 'aksum',
    cardIds: ['aksum', 'mali', 'benin', 'zimbabwe'],
    source: 'https://whc.unesco.org/en/list/15/',
  },
  khmerWat: {
    answer: 'khmer',
    cardIds: ['khmer', 'mughal', 'maya', 'song'],
    source: 'https://whc.unesco.org/en/list/668/',
  },
  khmerWater: {
    answer: 'khmer',
    cardIds: ['khmer', 'indus', 'inca', 'rome'],
    source: 'https://whc.unesco.org/en/list/668/',
  },
  zimbabweWalls: {
    answer: 'zimbabwe',
    cardIds: ['zimbabwe', 'mali', 'benin', 'aksum'],
    source: 'https://whc.unesco.org/en/list/364/',
  },
  zimbabweTrade: {
    answer: 'zimbabwe',
    cardIds: ['zimbabwe', 'mali', 'benin', 'aksum'],
    source: 'https://whc.unesco.org/en/list/364/',
  },
  mexicaLake: {
    answer: 'mexica',
    cardIds: ['mexica', 'maya', 'inca', 'khmer'],
    source: 'https://www.metmuseum.org/essays/tenochtitlan',
  },
  mexicaPrecinct: {
    answer: 'mexica',
    cardIds: ['mexica', 'maya', 'inca', 'khmer'],
    source: 'https://www.metmuseum.org/essays/tenochtitlan',
  },
  beninPlaques: {
    answer: 'benin',
    cardIds: ['benin', 'mali', 'aksum', 'zimbabwe'],
    source: 'https://www.britishmuseum.org/collection/object/E_Af1898-0115-23',
  },
  beninCasting: {
    answer: 'benin',
    cardIds: ['benin', 'shang', 'mali', 'aksum'],
    source: 'https://www.britishmuseum.org/collection/object/E_Af1898-0115-23',
  },
  mughalTaj: {
    answer: 'mughal',
    cardIds: ['mughal', 'khmer', 'abbasid', 'persia'],
    source: 'https://whc.unesco.org/en/list/252/',
  },
  mughalFatehpur: {
    answer: 'mughal',
    cardIds: ['mughal', 'khmer', 'abbasid', 'persia'],
    source: 'https://whc.unesco.org/en/list/255/',
  },
  unCharter: {
    answer: 'un1945',
    cardIds: ['un1945', 'sputnik1957', 'earthDay1970', 'berlinWall1989'],
    source:
      'https://www.un.org/en/about-us/history-of-the-un/preparatory-years',
  },
  unAssembly: {
    answer: 'un1945',
    cardIds: ['un1945', 'ibmPc1981', 'earthDay1970', 'berlinWall1989'],
    source:
      'https://www.un.org/pga/70/2016/01/11/un-general-assembly-celebrates-70th-anniversary/',
  },
  sputnikFirst: {
    answer: 'sputnik1957',
    cardIds: ['sputnik1957', 'apollo1969', 'voyager1977', 'shinkansen1964'],
    source: 'https://www.nasa.gov/history/sputnik/sputorig.html',
  },
  sputnikSignals: {
    answer: 'sputnik1957',
    cardIds: ['sputnik1957', 'apollo1969', 'voyager1977', 'ibmPc1981'],
    source: 'https://www.nasa.gov/history/sputnik/sputorig.html',
  },
  shinkansenRoute: {
    answer: 'shinkansen1964',
    cardIds: ['shinkansen1964', 'sputnik1957', 'ibmPc1981', 'berlinWall1989'],
    source: 'https://global.jr-central.co.jp/en/company/about_shinkansen/',
  },
  shinkansenTime: {
    answer: 'shinkansen1964',
    cardIds: ['shinkansen1964', 'earthDay1970', 'ibmPc1981', 'un1945'],
    source:
      'https://global.jr-central.co.jp/en/company/ir/annualreport/_pdf/annualreport2024-03.pdf',
  },
  apolloLanding: {
    answer: 'apollo1969',
    cardIds: ['apollo1969', 'sputnik1957', 'voyager1977', 'shinkansen1964'],
    source: 'https://www.nasa.gov/mission/apollo-11/',
  },
  apolloCollins: {
    answer: 'apollo1969',
    cardIds: ['apollo1969', 'sputnik1957', 'voyager1977', 'ibmPc1981'],
    source: 'https://www.nasa.gov/history/apollo-11-mission-overview/',
  },
  earthDayCrowds: {
    answer: 'earthDay1970',
    cardIds: ['earthDay1970', 'un1945', 'berlinWall1989', 'voyager1977'],
    source: 'https://www.epa.gov/earthday',
  },
  earthDayAgency: {
    answer: 'earthDay1970',
    cardIds: ['earthDay1970', 'un1945', 'berlinWall1989', 'ibmPc1981'],
    source: 'https://www.epa.gov/history/epa-history-earth-day',
  },
  voyagerRecord: {
    answer: 'voyager1977',
    cardIds: ['voyager1977', 'sputnik1957', 'apollo1969', 'ibmPc1981'],
    source: 'https://science.nasa.gov/mission/voyager/golden-record-contents/',
  },
  voyagerOrder: {
    answer: 'voyager1977',
    cardIds: ['voyager1977', 'sputnik1957', 'apollo1969', 'shinkansen1964'],
    source: 'https://science.nasa.gov/mission/voyager/fact-sheet/',
  },
  ibmPcLaunch: {
    answer: 'ibmPc1981',
    cardIds: ['ibmPc1981', 'sputnik1957', 'shinkansen1964', 'voyager1977'],
    source: 'https://www.ibm.com/history/personal-computer',
  },
  ibmPcSoftware: {
    answer: 'ibmPc1981',
    cardIds: ['ibmPc1981', 'apollo1969', 'sputnik1957', 'shinkansen1964'],
    source: 'https://www.ibm.com/history/personal-computer',
  },
  berlinWallOpening: {
    answer: 'berlinWall1989',
    cardIds: ['berlinWall1989', 'un1945', 'earthDay1970', 'shinkansen1964'],
    source:
      'https://www.berlin.de/en/history/8482274-8619314-opening-and-fall-of-the-berlin-wall.en.html',
  },
  berlinWallBorder: {
    answer: 'berlinWall1989',
    cardIds: ['berlinWall1989', 'un1945', 'earthDay1970', 'ibmPc1981'],
    source:
      'https://www.berlin.de/en/history/8482274-8619314-opening-and-fall-of-the-berlin-wall.en.html',
  },
  babylonStele: {
    answer: 'babylon',
    cardIds: ['babylon', 'sumer', 'shang', 'persia'],
    source: 'https://www.louvre.fr/en/the-code-of-hammurabi',
  },
  babylonShamash: {
    answer: 'babylon',
    cardIds: ['babylon', 'egypt', 'olmec', 'greece'],
    source: 'https://www.louvre.fr/en/the-code-of-hammurabi',
  },
  olmecHeads: {
    answer: 'olmec',
    cardIds: ['olmec', 'maya', 'mexica', 'inca'],
    source: 'https://www.metmuseum.org/de/essays/la-venta-stone-sculpture',
  },
  olmecBasalt: {
    answer: 'olmec',
    cardIds: ['olmec', 'maya', 'zimbabwe', 'aksum'],
    source: 'https://www.metmuseum.org/de/essays/la-venta-stone-sculpture',
  },
  tangSutra: {
    answer: 'tang',
    cardIds: ['tang', 'song', 'edo', 'abbasid'],
    source:
      'https://idp.bl.uk/discover/learning/buddhism-on-the-silk-roads/articles/buddhism-on-the-ground/buddhist-texts-the-diamond-sutra/',
  },
  tangChangan: {
    answer: 'tang',
    cardIds: ['tang', 'song', 'shang', 'khmer'],
    source:
      'https://asia.si.edu/education/educator-resources/teaching-china-with-the-smithsonian/explore-by-dynasty/tang-dynasty/',
  },
  florenceDome: {
    answer: 'florence',
    cardIds: ['florence', 'rome', 'mughal', 'greece'],
    source:
      'https://duomo.firenze.it/en/opera-magazine/post/4649/on-30-august-1436-the-work-on-brunelleschi-s-dome-was-completed',
  },
  florenceConstruction: {
    answer: 'florence',
    cardIds: ['florence', 'khmer', 'mughal', 'persia'],
    source:
      'https://duomo.firenze.it/en/opera-magazine/post/4649/on-30-august-1436-the-work-on-brunelleschi-s-dome-was-completed',
  },
  edoPrints: {
    answer: 'edo',
    cardIds: ['edo', 'tang', 'song', 'florence'],
    source: 'https://www.loc.gov/exhibits/ukiyo-e/intro.html',
  },
  edoCapital: {
    answer: 'edo',
    cardIds: ['edo', 'tang', 'mughal', 'khmer'],
    source: 'https://www.loc.gov/exhibits/ukiyo-e/intro.html',
  },
  stocktonPassengers: {
    answer: 'stockton1825',
    cardIds: ['stockton1825', 'shinkansen1964', 'wright1903', 'ibmPc1981'],
    source:
      'https://blog.railwaymuseum.org.uk/shildon-the-cradle-of-the-railways-and-locomotion-no-1/',
  },
  stocktonLocomotion: {
    answer: 'stockton1825',
    cardIds: ['stockton1825', 'shinkansen1964', 'wright1903', 'sputnik1957'],
    source:
      'https://blog.railwaymuseum.org.uk/shildon-the-cradle-of-the-railways-and-locomotion-no-1/',
  },
  wrightFlight: {
    answer: 'wright1903',
    cardIds: ['wright1903', 'stockton1825', 'sputnik1957', 'apollo1969'],
    source:
      'https://www.nasa.gov/history/120-years-ago-the-first-powered-flight-at-kitty-hawk/',
  },
  wrightSeconds: {
    answer: 'wright1903',
    cardIds: ['wright1903', 'stockton1825', 'shinkansen1964', 'voyager1977'],
    source:
      'https://airandspace.si.edu/collection-media/NASM-A19610048000-NASM2018-10799',
  },
  penicillinMold: {
    answer: 'penicillin1928',
    cardIds: ['penicillin1928', 'wright1903', 'ibmPc1981', 'earthDay1970'],
    source:
      'https://www.nobelprize.org/prizes/medicine/1945/fleming/questions-and-answers/',
  },
  penicillinName: {
    answer: 'penicillin1928',
    cardIds: ['penicillin1928', 'un1945', 'sputnik1957', 'earthDay1970'],
    source:
      'https://www.nobelprize.org/prizes/medicine/1945/fleming/questions-and-answers/',
  },
  gobekliPillars: {
    answer: 'gobekli',
    cardIds: ['gobekli', 'catalhoyuk', 'stonehenge', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/1572/',
  },
  catalhoyukRoofs: {
    answer: 'catalhoyuk',
    cardIds: ['catalhoyuk', 'gobekli', 'stonehenge', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/1405/',
  },
  stonehengeCircle: {
    answer: 'stonehenge',
    cardIds: ['stonehenge', 'gobekli', 'catalhoyuk', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/373/',
  },
  urZiggurat: {
    answer: 'urZiggurat',
    cardIds: ['urZiggurat', 'hattusa', 'knossos', 'mycenae'],
    source: 'https://whc.unesco.org/en/list/1481/',
  },
  knossosFrescoes: {
    answer: 'knossos',
    cardIds: ['knossos', 'mycenae', 'hattusa', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/1733/',
  },
  hattusaLionGate: {
    answer: 'hattusa',
    cardIds: ['hattusa', 'mycenae', 'knossos', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/377/',
  },
  mycenaeWalls: {
    answer: 'mycenae',
    cardIds: ['mycenae', 'knossos', 'hattusa', 'urZiggurat'],
    source: 'https://whc.unesco.org/en/list/941/',
  },
  meroePyramids: {
    answer: 'meroe',
    cardIds: ['meroe', 'egypt', 'aksum', 'zimbabwe'],
    source: 'https://whc.unesco.org/en/list/1336/',
  },
  carthageHarbor: {
    answer: 'carthage',
    cardIds: ['carthage', 'phoenicia', 'rome', 'greece'],
    source: 'https://whc.unesco.org/en/list/37/',
  },
  cerveteriTombs: {
    answer: 'cerveteri',
    cardIds: ['cerveteri', 'mycenae', 'rome', 'greece'],
    source: 'https://whc.unesco.org/en/list/1158/',
  },
  qinClayArmy: {
    answer: 'qinWarriors',
    cardIds: ['qinWarriors', 'shang', 'tang', 'song'],
    source: 'https://whc.unesco.org/en/list/441/',
  },
  chavinTemple: {
    answer: 'chavin',
    cardIds: ['chavin', 'inca', 'nazcaLines', 'maya'],
    source: 'https://whc.unesco.org/en/list/330/',
  },
  nazcaGeoglyphs: {
    answer: 'nazcaLines',
    cardIds: ['nazcaLines', 'chavin', 'inca', 'maya'],
    source: 'https://whc.unesco.org/en/list/700/',
  },
  jerichoTower: {
    answer: 'jericho',
    cardIds: ['jericho', 'gobekli', 'catalhoyuk', 'skaraBrae'],
    source: 'https://whc.unesco.org/en/list/1687/',
  },
  lascauxAnimals: {
    answer: 'lascaux',
    cardIds: ['lascaux', 'gobekli', 'stonehenge', 'skaraBrae'],
    source: 'https://whc.unesco.org/en/list/85/',
  },
  skaraBraeHouses: {
    answer: 'skaraBrae',
    cardIds: ['skaraBrae', 'catalhoyuk', 'jericho', 'stonehenge'],
    source: 'https://whc.unesco.org/en/list/514/',
  },
  caralPlazas: {
    answer: 'caral',
    cardIds: ['caral', 'chavin', 'nazcaLines', 'teotihuacan'],
    source: 'https://whc.unesco.org/en/list/1269/',
  },
  ugaritAlphabet: {
    answer: 'ugarit',
    cardIds: ['ugarit', 'sumer', 'phoenicia', 'carthage'],
    source: 'https://whc.unesco.org/en/tentativelists/1292/',
  },
  ninevehReliefs: {
    answer: 'nineveh',
    cardIds: ['nineveh', 'babylon', 'urZiggurat', 'persia'],
    source: 'https://www.metmuseum.org/art/collection/search/322612',
  },
  petraRockCity: {
    answer: 'petra',
    cardIds: ['petra', 'carthage', 'rome', 'persia'],
    source: 'https://whc.unesco.org/en/list/326/',
  },
  teotihuacanAvenue: {
    answer: 'teotihuacan',
    cardIds: ['teotihuacan', 'caral', 'mexica', 'maya'],
    source: 'https://whc.unesco.org/en/list/414/',
  },
  hagiaSophiaDome: {
    answer: 'hagiaSophia',
    cardIds: ['hagiaSophia', 'aachen', 'cordoba', 'alhambra'],
    source: 'https://whc.unesco.org/en/list/356/',
  },
  aachenOctagon: {
    answer: 'aachen',
    cardIds: ['aachen', 'hagiaSophia', 'cordoba', 'bukhara'],
    source: 'https://whc.unesco.org/en/list/3/',
  },
  cordobaArches: {
    answer: 'cordoba',
    cardIds: ['cordoba', 'aachen', 'hagiaSophia', 'alhambra'],
    source: 'https://whc.unesco.org/en/list/313/',
  },
  borobudurTerraces: {
    answer: 'borobudur',
    cardIds: ['borobudur', 'khmer', 'chichenItza', 'lalibela'],
    source: 'https://whc.unesco.org/en/list/592/',
  },
  lalibelaRockChurches: {
    answer: 'lalibela',
    cardIds: ['lalibela', 'aksum', 'kilwa', 'djenne'],
    source: 'https://whc.unesco.org/en/list/18/',
  },
  kilwaOceanTrade: {
    answer: 'kilwa',
    cardIds: ['kilwa', 'djenne', 'mali', 'zimbabwe'],
    source: 'https://whc.unesco.org/en/list/144/',
  },
  bukharaSilkRoad: {
    answer: 'bukhara',
    cardIds: ['bukhara', 'samarkand', 'cordoba', 'abbasid'],
    source: 'https://whc.unesco.org/en/list/602/',
  },
  samarkandCrossroads: {
    answer: 'samarkand',
    cardIds: ['samarkand', 'bukhara', 'tang', 'mughal'],
    source: 'https://whc.unesco.org/en/list/603/',
  },
  djenneEarthenCity: {
    answer: 'djenne',
    cardIds: ['djenne', 'kilwa', 'mali', 'zimbabwe'],
    source: 'https://whc.unesco.org/en/list/116/',
  },
  cahokiaMound: {
    answer: 'cahokia',
    cardIds: ['cahokia', 'chichenItza', 'teotihuacan', 'mexica'],
    source: 'https://whc.unesco.org/en/list/198/',
  },
  chichenItzaCaracol: {
    answer: 'chichenItza',
    cardIds: ['chichenItza', 'cahokia', 'teotihuacan', 'mexica'],
    source: 'https://whc.unesco.org/en/list/483/',
  },
  alhambraPalace: {
    answer: 'alhambra',
    cardIds: ['alhambra', 'cordoba', 'bukhara', 'florence'],
    source: 'https://whc.unesco.org/en/list/314/',
  },
  haitiFreedom: {
    answer: 'haiti1804',
    cardIds: ['haiti1804', 'rocket1829', 'faraday1831', 'morse1844'],
    source: 'https://history.state.gov/milestones/1784-1800/haitian-rev/1000',
  },
  rocketRainhill: {
    answer: 'rocket1829',
    cardIds: ['haiti1804', 'rocket1829', 'faraday1831', 'morse1844'],
    source:
      'https://blog.scienceandindustrymuseum.org.uk/rocket-engineering-excellence/',
  },
  faradayInduction: {
    answer: 'faraday1831',
    cardIds: ['haiti1804', 'rocket1829', 'faraday1831', 'morse1844'],
    source:
      'https://www.rigb.org/explore-science/explore/collection/history-research-ri',
  },
  morseTelegraph: {
    answer: 'morse1844',
    cardIds: ['haiti1804', 'rocket1829', 'faraday1831', 'morse1844'],
    source:
      'https://www.loc.gov/collections/samuel-morse-papers/articles-and-essays/invention-of-the-telegraph/',
  },
  senecaDeclaration: {
    answer: 'senecaFalls1848',
    cardIds: [
      'senecaFalls1848',
      'greatExhibition1851',
      'nightingale1854',
      'darwin1859',
    ],
    source:
      'https://www.nps.gov/articles/declaration-of-sentiments-the-first-women-s-rights-convention.htm',
  },
  greatExhibitionGlass: {
    answer: 'greatExhibition1851',
    cardIds: [
      'senecaFalls1848',
      'greatExhibition1851',
      'nightingale1854',
      'darwin1859',
    ],
    source: 'https://www.vam.ac.uk/articles/the-great-exhibition-of-1851',
  },
  nightingaleScutari: {
    answer: 'nightingale1854',
    cardIds: [
      'senecaFalls1848',
      'greatExhibition1851',
      'nightingale1854',
      'darwin1859',
    ],
    source: 'https://www.florence-nightingale.co.uk/origins/',
  },
  darwinOrigin: {
    answer: 'darwin1859',
    cardIds: [
      'senecaFalls1848',
      'greatExhibition1851',
      'nightingale1854',
      'darwin1859',
    ],
    source:
      'https://www.nhm.ac.uk/discover/charles-darwin-most-famous-biologist.html',
  },
  emancipationProclamation: {
    answer: 'emancipation1863',
    cardIds: ['emancipation1863', 'meiji1868', 'suez1869', 'bell1876'],
    source:
      'https://www.archives.gov/milestone-documents/emancipation-proclamation',
  },
  meijiRestoration: {
    answer: 'meiji1868',
    cardIds: ['emancipation1863', 'meiji1868', 'suez1869', 'bell1876'],
    source: 'https://www.ndl.go.jp/portrait/e/pickup/012',
  },
  suezOpening: {
    answer: 'suez1869',
    cardIds: ['emancipation1863', 'meiji1868', 'suez1869', 'bell1876'],
    source:
      'https://www.suezcanal.gov.eg/English/About/SuezCanal/Pages/CanalHistory.aspx',
  },
  bellTelephone: {
    answer: 'bell1876',
    cardIds: ['emancipation1863', 'meiji1868', 'suez1869', 'bell1876'],
    source:
      'https://www.si.edu/collections/snapshot/alexander-graham-bells-large-box-telephone',
  },
  edisonLighting: {
    answer: 'lightbulb1879',
    cardIds: ['lightbulb1879', 'liberty1886', 'eiffel1889', 'xray1895'],
    source:
      'https://www.nps.gov/edis/learn/historyculture/edison-biography.htm?simple=True',
  },
  libertyDedication: {
    answer: 'liberty1886',
    cardIds: ['lightbulb1879', 'liberty1886', 'eiffel1889', 'xray1895'],
    source: 'https://www.nps.gov/stli/learn/statue-of-liberty-facts.htm',
  },
  eiffelExposition: {
    answer: 'eiffel1889',
    cardIds: ['lightbulb1879', 'liberty1886', 'eiffel1889', 'xray1895'],
    source: 'https://www.toureiffel.paris/en/the-monument/universal-exhibition',
  },
  rontgenXray: {
    answer: 'xray1895',
    cardIds: ['lightbulb1879', 'liberty1886', 'eiffel1889', 'xray1895'],
    source:
      'https://www.nobelprize.org/prizes/physics/1901/rontgen/biographical/',
  },
  athensOlympics: {
    answer: 'olympics1896',
    cardIds: ['olympics1896', 'adwa1896', 'philippines1896', 'marconi1897'],
    source:
      'https://library.olympics.com/Default/basicfilesdownload.ashx?itemGuid=2ECE9BE9-EA5F-4F0F-97DF-84C75B6BC60A',
  },
  adwaVictory: {
    answer: 'adwa1896',
    cardIds: ['olympics1896', 'adwa1896', 'philippines1896', 'marconi1897'],
    source: 'https://whc.unesco.org/document/155767',
  },
  philippineRevolution: {
    answer: 'philippines1896',
    cardIds: ['olympics1896', 'adwa1896', 'philippines1896', 'marconi1897'],
    source:
      'https://philhistoricsites.nhcp.gov.ph/registry_database/andres-bonifacio-1863-1897/',
  },
  marconiWireless: {
    answer: 'marconi1897',
    cardIds: ['olympics1896', 'adwa1896', 'philippines1896', 'marconi1897'],
    source:
      'https://www.nobelprize.org/prizes/physics/1909/marconi/biographical/',
  },
  blitzShelters: {
    answer: 'blitz1940',
    cardIds: ['blitz1940', 'normandy1944', 'partition1947', 'udhr1948'],
    source:
      'https://www.iwm.org.uk/sites/default/files/files/2025-01/Artists%20%26%20War%20Teacher%20Notes%20-%20Second%20World%20War.pdf',
  },
  normandyLandings: {
    answer: 'normandy1944',
    cardIds: ['blitz1940', 'normandy1944', 'partition1947', 'udhr1948'],
    source: 'https://www.nps.gov/articles/the-great-crusade-75-years-ago.htm',
  },
  partitionTrains: {
    answer: 'partition1947',
    cardIds: ['blitz1940', 'normandy1944', 'partition1947', 'udhr1948'],
    source:
      'https://www.nationalarchives.gov.uk/education/teaching-resources/partition-of-british-india/',
  },
  humanRightsDeclaration: {
    answer: 'udhr1948',
    cardIds: ['blitz1940', 'normandy1944', 'partition1947', 'udhr1948'],
    source: 'https://www.un.org/en/about-us/udhr/history-of-the-declaration',
  },
  dnaDoubleHelix: {
    answer: 'dna1953',
    cardIds: ['dna1953', 'brown1954', 'bandung1955', 'nasa1958'],
    source:
      'https://www.genome.gov/25520255/online-education-kit-1953-dna-double-helix',
  },
  brownDecision: {
    answer: 'brown1954',
    cardIds: ['dna1953', 'brown1954', 'bandung1955', 'nasa1958'],
    source:
      'https://www.archives.gov/milestone-documents/brown-v-board-of-education',
  },
  bandungConference: {
    answer: 'bandung1955',
    cardIds: ['dna1953', 'brown1954', 'bandung1955', 'nasa1958'],
    source:
      'https://www.unesco.org/en/memory-world/asian-african-conference-archives',
  },
  nasaFounded: {
    answer: 'nasa1958',
    cardIds: ['dna1953', 'brown1954', 'bandung1955', 'nasa1958'],
    source:
      'https://www.nasa.gov/history/65-years-ago-the-national-aeronautics-and-space-act-of-1958-creates-nasa/',
  },
  gagarinOrbit: {
    answer: 'gagarin1961',
    cardIds: ['gagarin1961', 'march1963', 'mexico1968', 'microprocessor1971'],
    source:
      'https://www.nasa.gov/image-article/april-1961-first-human-entered-space/',
  },
  washingtonMarch: {
    answer: 'march1963',
    cardIds: ['gagarin1961', 'march1963', 'mexico1968', 'microprocessor1971'],
    source: 'https://www.nps.gov/articles/march-on-washington.htm/index.htm',
  },
  mexicoOlympics: {
    answer: 'mexico1968',
    cardIds: ['gagarin1961', 'march1963', 'mexico1968', 'microprocessor1971'],
    source:
      'https://library.olympics.com/Default/basicfilesdownload.ashx?itemGuid=2ECE9BE9-EA5F-4F0F-97DF-84C75B6BC60A',
  },
  intel4004: {
    answer: 'microprocessor1971',
    cardIds: ['gagarin1961', 'march1963', 'mexico1968', 'microprocessor1971'],
    source:
      'https://timeline.intel.com/1971/the-first-programmable-microprocessor%3A-the-4004',
  },
  mobileCall: {
    answer: 'mobile1973',
    cardIds: ['mobile1973', 'apolloSoyuz1975', 'smallpox1980', 'internet1983'],
    source:
      'https://americanhistory.si.edu/explore/stories/true-magic-dialing-cell-phone-history-marty-cooper',
  },
  apolloSoyuzHandshake: {
    answer: 'apolloSoyuz1975',
    cardIds: ['mobile1973', 'apolloSoyuz1975', 'smallpox1980', 'internet1983'],
    source:
      'https://www.nasa.gov/missions/apollo-soyuz/the-apollo-soyuz-mission/',
  },
  smallpoxEradication: {
    answer: 'smallpox1980',
    cardIds: ['mobile1973', 'apolloSoyuz1975', 'smallpox1980', 'internet1983'],
    source:
      'https://www.who.int/news/item/08-05-2020-commemorating-smallpox-eradication-a-legacy-of-hope-for-covid-19-and-other-diseases',
  },
  tcpIpSwitch: {
    answer: 'internet1983',
    cardIds: ['mobile1973', 'apolloSoyuz1975', 'smallpox1980', 'internet1983'],
    source:
      'https://www.internetsociety.org/internet/history-internet/brief-history-internet/',
  },
  liveAidConcert: {
    answer: 'liveAid1985',
    cardIds: ['liveAid1985', 'chornobyl1986', 'montreal1987', 'web1989'],
    source:
      'https://www.nli.ie/news-stories/news/step-back-1985-nli-live-aid-archive-goes-digital',
  },
  chornobylAccident: {
    answer: 'chornobyl1986',
    cardIds: ['liveAid1985', 'chornobyl1986', 'montreal1987', 'web1989'],
    source: 'https://www.who.int/publications/m/item/1986-2016-chernobyl-at-30',
  },
  montrealProtocol: {
    answer: 'montreal1987',
    cardIds: ['liveAid1985', 'chornobyl1986', 'montreal1987', 'web1989'],
    source: 'https://ozone.unep.org/treaties/montreal-protocol?q=treaties',
  },
  webProposal: {
    answer: 'web1989',
    cardIds: ['liveAid1985', 'chornobyl1986', 'montreal1987', 'web1989'],
    source:
      'https://home.cern/science/computing/the-birth-of-the-web/short-history-web/',
  },
  chauvetAnimals: {
    answer: 'chauvet',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1426/',
  },
  carnacRows: {
    answer: 'carnac',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1725/',
  },
  banChiangPots: {
    answer: 'banChiang',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/575/',
  },
  dilmunMounds: {
    answer: 'dilmun',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1542/',
  },
  gizaKhufu: {
    answer: 'giza',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/86/',
  },
  abuSimbelStatues: {
    answer: 'abuSimbel',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/88/',
  },
  thebesKarnak: {
    answer: 'thebes',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/87/',
  },
  sanchiStupa: {
    answer: 'sanchi',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/524/',
  },
  ajantaPaintings: {
    answer: 'ajanta',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/242/',
  },
  pasargadaeCyrus: {
    answer: 'pasargadae',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/1106/',
  },
  ephesusLibrary: {
    answer: 'ephesus',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/1018/',
  },
  pompeiiAsh: {
    answer: 'pompeii',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/829/',
  },
  colosseumArena: {
    answer: 'colosseum',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/91/',
  },
  hadriansWallFrontier: {
    answer: 'hadriansWall',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/430/',
  },
  palmyraCaravans: {
    answer: 'palmyra',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/23/',
  },
  hegraTombs: {
    answer: 'hegra',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/1293/',
  },
  leptisForum: {
    answer: 'leptisMagna',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/183/',
  },
  delphiOracle: {
    answer: 'delphi',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/393/',
  },
  mogaoSilkRoad: {
    answer: 'mogao',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/440/',
  },
  anuradhapuraCity: {
    answer: 'anuradhapura',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/200/',
  },
  chauvetSealed: {
    answer: 'chauvet',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1426/',
  },
  carnacMenhirs: {
    answer: 'carnac',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1725/',
  },
  banChiangBurials: {
    answer: 'banChiang',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/575/',
  },
  dilmunTrade: {
    answer: 'dilmun',
    cardIds: ['chauvet', 'carnac', 'banChiang', 'dilmun'],
    source: 'https://whc.unesco.org/en/list/1542/',
  },
  gizaWonder: {
    answer: 'giza',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/86/',
  },
  abuSimbelRescue: {
    answer: 'abuSimbel',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/88/',
  },
  thebesNecropolis: {
    answer: 'thebes',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/87/',
  },
  sanchiGateways: {
    answer: 'sanchi',
    cardIds: ['giza', 'abuSimbel', 'thebes', 'sanchi'],
    source: 'https://whc.unesco.org/en/list/524/',
  },
  ajantaCliff: {
    answer: 'ajanta',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/242/',
  },
  pasargadaeCapital: {
    answer: 'pasargadae',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/1106/',
  },
  ephesusArtemis: {
    answer: 'ephesus',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/1018/',
  },
  pompeiiFrescoes: {
    answer: 'pompeii',
    cardIds: ['ajanta', 'pasargadae', 'ephesus', 'pompeii'],
    source: 'https://whc.unesco.org/en/list/829/',
  },
  colosseumFlavian: {
    answer: 'colosseum',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/91/',
  },
  hadriansWallForts: {
    answer: 'hadriansWall',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/430/',
  },
  palmyraColumns: {
    answer: 'palmyra',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/23/',
  },
  hegraInscriptions: {
    answer: 'hegra',
    cardIds: ['colosseum', 'hadriansWall', 'palmyra', 'hegra'],
    source: 'https://whc.unesco.org/en/list/1293/',
  },
  leptisSeverus: {
    answer: 'leptisMagna',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/183/',
  },
  delphiTreasuries: {
    answer: 'delphi',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/393/',
  },
  mogaoMurals: {
    answer: 'mogao',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/440/',
  },
  anuradhapuraBodhi: {
    answer: 'anuradhapura',
    cardIds: ['leptisMagna', 'delphi', 'mogao', 'anuradhapura'],
    source: 'https://whc.unesco.org/en/list/200/',
  },
  kyivMosaics: {
    answer: 'kyivSophia',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/527/',
  },
  bulguksaSilla: {
    answer: 'bulguksa',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/736/',
  },
  himejiWhite: {
    answer: 'himeji',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/661/',
  },
  forbiddenPalace: {
    answer: 'forbiddenCity',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/439/',
  },
  machuRidge: {
    answer: 'machuPicchu',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/274/',
  },
  marrakeshAlmoravid: {
    answer: 'marrakesh',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/331/',
  },
  fezMedina: {
    answer: 'fez',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/170/',
  },
  kairouanMosque: {
    answer: 'kairouan',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/499/',
  },
  timbuktuScholars: {
    answer: 'timbuktu',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/119/',
  },
  askiaTomb: {
    answer: 'askia',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/1139/',
  },
  sukhothaiWriting: {
    answer: 'sukhothai',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/574/',
  },
  baganTemples: {
    answer: 'bagan',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/1588/',
  },
  bamiyanBuddhas: {
    answer: 'bamiyan',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/208/',
  },
  greatWallMing: {
    answer: 'greatWall',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/438/',
  },
  montTides: {
    answer: 'montSaintMichel',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/80/',
  },
  veniceLagoon: {
    answer: 'venice',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/394/',
  },
  lubeckHansa: {
    answer: 'lubeck',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/272/',
  },
  novgorodTrade: {
    answer: 'novgorod',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/604/',
  },
  haeinsaBlocks: {
    answer: 'haeinsa',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/737/',
  },
  shibamTowers: {
    answer: 'shibam',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/192/',
  },
  kyivOrans: {
    answer: 'kyivSophia',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/527/',
  },
  bulguksaSeokguram: {
    answer: 'bulguksa',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/736/',
  },
  himejiDefences: {
    answer: 'himeji',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/661/',
  },
  forbiddenAxis: {
    answer: 'forbiddenCity',
    cardIds: ['kyivSophia', 'bulguksa', 'himeji', 'forbiddenCity'],
    source: 'https://whc.unesco.org/en/list/439/',
  },
  machuTerraces: {
    answer: 'machuPicchu',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/274/',
  },
  marrakeshWalls: {
    answer: 'marrakesh',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/331/',
  },
  fezMarinids: {
    answer: 'fez',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/170/',
  },
  kairouanAghlabids: {
    answer: 'kairouan',
    cardIds: ['machuPicchu', 'marrakesh', 'fez', 'kairouan'],
    source: 'https://whc.unesco.org/en/list/499/',
  },
  timbuktuMosques: {
    answer: 'timbuktu',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/119/',
  },
  askiaGao: {
    answer: 'askia',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/1139/',
  },
  sukhothaiTemples: {
    answer: 'sukhothai',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/574/',
  },
  baganPlain: {
    answer: 'bagan',
    cardIds: ['timbuktu', 'askia', 'sukhothai', 'bagan'],
    source: 'https://whc.unesco.org/en/list/1588/',
  },
  bamiyanNiches: {
    answer: 'bamiyan',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/208/',
  },
  greatWallWatchtowers: {
    answer: 'greatWall',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/438/',
  },
  montPilgrims: {
    answer: 'montSaintMichel',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/80/',
  },
  veniceGalleys: {
    answer: 'venice',
    cardIds: ['bamiyan', 'greatWall', 'montSaintMichel', 'venice'],
    source: 'https://whc.unesco.org/en/list/394/',
  },
  lubeckBrick: {
    answer: 'lubeck',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/272/',
  },
  novgorodSophia: {
    answer: 'novgorod',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/604/',
  },
  haeinsaRepository: {
    answer: 'haeinsa',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/737/',
  },
  shibamSkyscrapers: {
    answer: 'shibam',
    cardIds: ['lubeck', 'novgorod', 'haeinsa', 'shibam'],
    source: 'https://whc.unesco.org/en/list/192/',
  },
  zhengFleet: {
    answer: 'zhengHe',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://www.si.edu/object/siris_sil_843382',
  },
  gutenbergBible: {
    answer: 'gutenberg',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://www.loc.gov/exhibits/bibles/the-gutenberg-bible.html',
  },
  istanbulConquest: {
    answer: 'istanbul1453',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://whc.unesco.org/en/list/356/',
  },
  tenochtitlanCanals: {
    answer: 'tenochtitlan',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://whc.unesco.org/en/list/412/',
  },
  fatehpurAkbar: {
    answer: 'fatehpurSikri',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://whc.unesco.org/en/list/255/',
  },
  sistineMichelangelo: {
    answer: 'sistineCeiling',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source:
      'https://www.vatican.va/content/vatican/en/ra/cappella-sistina.html',
  },
  copernicusSun: {
    answer: 'copernicus1543',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://cosmicopia.gsfc.nasa.gov/hist_bef1600.html',
  },
  suleymaniyeMosque: {
    answer: 'suleymaniye',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://whc.unesco.org/en/list/356/',
  },
  globeStage: {
    answer: 'globe1599',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source:
      'https://www.shakespearesglobe.com/discover/shakespeares-world/the-globe/',
  },
  galileoMoon: {
    answer: 'galileo1609',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://catalogue.museogalileo.it/multimedia/TelescopeBis.html',
  },
  tajMumtaz: {
    answer: 'tajMahal',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://whc.unesco.org/en/list/252/',
  },
  isfahanSquare: {
    answer: 'isfahan',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://whc.unesco.org/en/list/115/',
  },
  versaillesLouis: {
    answer: 'versailles',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://whc.unesco.org/en/list/83/',
  },
  newtonPrincipia: {
    answer: 'newton1687',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://royalsociety.org/blog/2014/07/principia/',
  },
  petersburgFounding: {
    answer: 'petersburg1703',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://whc.unesco.org/en/list/540/',
  },
  declarationCongress: {
    answer: 'declaration1776',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source:
      'https://www.archives.gov/milestone-documents/declaration-of-independence',
  },
  montgolfierBalloon: {
    answer: 'montgolfier1783',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://airandspace.si.edu/collection-objects/ascension-montgolfier-balloon/nasm_A19370051000',
  },
  bastille1789: {
    answer: 'french1789',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/revolution-francaise',
  },
  wollstonecraftRights: {
    answer: 'wollstonecraft1792',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source: 'https://www.loc.gov/item/34033009/',
  },
  jennerVaccine: {
    answer: 'jenner1796',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination',
  },
  zhengPorts: {
    answer: 'zhengHe',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://www.si.edu/object/siris_sil_843382',
  },
  gutenbergType: {
    answer: 'gutenberg',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://www.loc.gov/exhibits/bibles/the-gutenberg-bible.html',
  },
  istanbulBosphorus: {
    answer: 'istanbul1453',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://whc.unesco.org/en/list/356/',
  },
  tenochtitlanChinampas: {
    answer: 'tenochtitlan',
    cardIds: ['zhengHe', 'gutenberg', 'istanbul1453', 'tenochtitlan'],
    source: 'https://whc.unesco.org/en/list/412/',
  },
  fatehpurDecade: {
    answer: 'fatehpurSikri',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://whc.unesco.org/en/list/255/',
  },
  sistineGenesis: {
    answer: 'sistineCeiling',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source:
      'https://www.vatican.va/content/vatican/en/ra/cappella-sistina.html',
  },
  copernicusEarth: {
    answer: 'copernicus1543',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://cosmicopia.gsfc.nasa.gov/hist_bef1600.html',
  },
  suleymaniyeSinan: {
    answer: 'suleymaniye',
    cardIds: [
      'fatehpurSikri',
      'sistineCeiling',
      'copernicus1543',
      'suleymaniye',
    ],
    source: 'https://whc.unesco.org/en/list/356/',
  },
  globeAudience: {
    answer: 'globe1599',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source:
      'https://www.shakespearesglobe.com/discover/shakespeares-world/the-globe/',
  },
  galileoJupiter: {
    answer: 'galileo1609',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://catalogue.museogalileo.it/multimedia/TelescopeBis.html',
  },
  tajYamuna: {
    answer: 'tajMahal',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://whc.unesco.org/en/list/252/',
  },
  isfahanPolo: {
    answer: 'isfahan',
    cardIds: ['globe1599', 'galileo1609', 'tajMahal', 'isfahan'],
    source: 'https://whc.unesco.org/en/list/115/',
  },
  versaillesGardens: {
    answer: 'versailles',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://whc.unesco.org/en/list/83/',
  },
  newtonHalley: {
    answer: 'newton1687',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://royalsociety.org/blog/2014/07/principia/',
  },
  petersburgNeva: {
    answer: 'petersburg1703',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source: 'https://whc.unesco.org/en/list/540/',
  },
  declarationAugust: {
    answer: 'declaration1776',
    cardIds: ['versailles', 'newton1687', 'petersburg1703', 'declaration1776'],
    source:
      'https://www.archives.gov/milestone-documents/declaration-of-independence',
  },
  montgolfierAnnonay: {
    answer: 'montgolfier1783',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://airandspace.si.edu/collection-objects/ascension-montgolfier-balloon/nasm_A19370051000',
  },
  bastilleJuly: {
    answer: 'french1789',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/revolution-francaise',
  },
  wollstonecraftEducation: {
    answer: 'wollstonecraft1792',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source: 'https://www.loc.gov/item/34033009/',
  },
  jennerCowpox: {
    answer: 'jenner1796',
    cardIds: [
      'montgolfier1783',
      'french1789',
      'wollstonecraft1792',
      'jenner1796',
    ],
    source:
      'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination',
  },
  nobelFirst: {
    answer: 'nobel1901',
    cardIds: ['nobel1901', 'einstein1905', 'modelT1908', 'southPole1911'],
    source:
      'https://www.nobelprize.org/prizes/themes/the-very-first-nobel-prizes/',
  },
  einsteinPapers: {
    answer: 'einstein1905',
    cardIds: ['nobel1901', 'einstein1905', 'modelT1908', 'southPole1911'],
    source:
      'https://www.aps.org/funding-recognition/historic-sites/einsteinhaus',
  },
  fordModelT: {
    answer: 'modelT1908',
    cardIds: ['nobel1901', 'einstein1905', 'modelT1908', 'southPole1911'],
    source: 'https://www.thehenryford.org/collections/explore/artifact/312908',
  },
  amundsenPole: {
    answer: 'southPole1911',
    cardIds: ['nobel1901', 'einstein1905', 'modelT1908', 'southPole1911'],
    source:
      'https://museum.wa.gov.au/museums/wa-maritime-museum/roald-amundsens-south-pole-expedition-1910-1912',
  },
  titanicVoyage: {
    answer: 'titanic1912',
    cardIds: ['titanic1912', 'panama1914', 'russian1917', 'flu1918'],
    source: 'https://www.rmg.co.uk/stories/topics/rms-titanic-facts',
  },
  panamaOpening: {
    answer: 'panama1914',
    cardIds: ['titanic1912', 'panama1914', 'russian1917', 'flu1918'],
    source: 'https://pancanal.com/en/panama-canal-turns-90/',
  },
  russianRevolution: {
    answer: 'russian1917',
    cardIds: ['titanic1912', 'panama1914', 'russian1917', 'flu1918'],
    source: 'https://www.loc.gov/exhibits/empire/chronology.html',
  },
  fluPandemic: {
    answer: 'flu1918',
    cardIds: ['titanic1912', 'panama1914', 'russian1917', 'flu1918'],
    source:
      'https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/1918-pandemic-h1n1.html',
  },
  suffrageAmendment: {
    answer: 'suffrage1920',
    cardIds: ['suffrage1920', 'tutankhamun1922', 'turkey1923', 'lindbergh1927'],
    source: 'https://www.archives.gov/milestone-documents/19th-amendment',
  },
  tutTomb: {
    answer: 'tutankhamun1922',
    cardIds: ['suffrage1920', 'tutankhamun1922', 'turkey1923', 'lindbergh1927'],
    source: 'https://www.britishmuseum.org/collection/term/BIOG53212',
  },
  turkeyRepublic: {
    answer: 'turkey1923',
    cardIds: ['suffrage1920', 'tutankhamun1922', 'turkey1923', 'lindbergh1927'],
    source:
      'https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/56c8022b-b5e2-4402-9770-018672b83200.pdf',
  },
  lindberghAtlantic: {
    answer: 'lindbergh1927',
    cardIds: ['suffrage1920', 'tutankhamun1922', 'turkey1923', 'lindbergh1927'],
    source:
      'https://airandspace.si.edu/collection-objects/barograph-spirit-st-louis-charles-lindbergh-ny-paris-flight-may-1927/nasm_A19310028000',
  },
  stockCrash: {
    answer: 'crash1929',
    cardIds: ['crash1929', 'saltMarch1930', 'earhart1932', 'war1939'],
    source:
      'https://www.federalreservehistory.org/essays/stock-market-crash-of-1929',
  },
  gandhiSalt: {
    answer: 'saltMarch1930',
    cardIds: ['crash1929', 'saltMarch1930', 'earhart1932', 'war1939'],
    source: 'https://cmsadmin.amritmahotsav.nic.in/day-1-12th-march.htm',
  },
  earhartSolo: {
    answer: 'earhart1932',
    cardIds: ['crash1929', 'saltMarch1930', 'earhart1932', 'war1939'],
    source:
      'https://airandspace.si.edu/multimedia-gallery/amelia-earhart-departs-solo-flight-across-atlantic-may-20-1932',
  },
  warOutbreak: {
    answer: 'war1939',
    cardIds: ['crash1929', 'saltMarch1930', 'earhart1932', 'war1939'],
    source:
      'https://www.iwm.org.uk/sites/default/files/files/2023-10/second_world_war_galleries_large_print.pdf',
  },
  hubbleLaunch: {
    answer: 'hubble1990',
    cardIds: ['hubble1990', 'mandela1994', 'pathfinder1997', 'iss1998'],
    source:
      'https://science.nasa.gov/mission/hubble/overview/hubble-timeline/hubble-history-timeline-full-text/',
  },
  saElection: {
    answer: 'mandela1994',
    cardIds: ['hubble1990', 'mandela1994', 'pathfinder1997', 'iss1998'],
    source: 'https://www.nelsonmandela.org/democracy',
  },
  pathfinderMars: {
    answer: 'pathfinder1997',
    cardIds: ['hubble1990', 'mandela1994', 'pathfinder1997', 'iss1998'],
    source: 'https://science.nasa.gov/mission/mars-pathfinder/',
  },
  issModules: {
    answer: 'iss1998',
    cardIds: ['hubble1990', 'mandela1994', 'pathfinder1997', 'iss1998'],
    source: 'https://www.nasa.gov/international-space-station/unity-module/',
  },
  monteAlbanHill: {
    answer: 'monteAlban',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/415/',
  },
  palenqueMaya: {
    answer: 'palenque',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/411/',
  },
  tiwanakuGateway: {
    answer: 'tiwanaku',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/567/',
  },
  mesaCliffs: {
    answer: 'mesaVerde',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/27/',
  },
  rapaMoai: {
    answer: 'rapaNui',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/715/',
  },
  cholaTemple: {
    answer: 'brihadeeswara',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/250/',
  },
  mapungubweGold: {
    answer: 'mapungubwe',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/1099/',
  },
  hararWalls: {
    answer: 'harar',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/1189/',
  },
  ussrDissolution: {
    answer: 'ussr1991',
    cardIds: ['ussr1991', 'beijing1995', 'dolly1996', 'iss1998'],
    source: 'https://2001-2009.state.gov/r/pa/ho/time/pcw/108229.htm',
  },
  beijingWomen: {
    answer: 'beijing1995',
    cardIds: ['ussr1991', 'beijing1995', 'dolly1996', 'iss1998'],
    source: 'https://www.un.org/womenwatch/daw/beijing/fwcw.htm',
  },
  dollyClone: {
    answer: 'dolly1996',
    cardIds: ['ussr1991', 'beijing1995', 'dolly1996', 'iss1998'],
    source: 'https://vet.ed.ac.uk/roslin/about/history/dolly',
  },
  monteAlbanPlaza: {
    answer: 'monteAlban',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/415/',
  },
  palenqueReliefs: {
    answer: 'palenque',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/411/',
  },
  tiwanakuAltiplano: {
    answer: 'tiwanaku',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/567/',
  },
  mesaManyRooms: {
    answer: 'mesaVerde',
    cardIds: ['monteAlban', 'palenque', 'tiwanaku', 'mesaVerde'],
    source: 'https://whc.unesco.org/en/list/27/',
  },
  rapaAhu: {
    answer: 'rapaNui',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/715/',
  },
  cholaBronzes: {
    answer: 'brihadeeswara',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/250/',
  },
  mapungubweRivers: {
    answer: 'mapungubwe',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/1099/',
  },
  hararGates: {
    answer: 'harar',
    cardIds: ['rapaNui', 'brihadeeswara', 'mapungubwe', 'harar'],
    source: 'https://whc.unesco.org/en/list/1189/',
  },
};

export interface TimeTravelerQuestion extends DemoQuestion {
  cardIds: TimeCardId[];
}

export function timeCardCopy(cardId: TimeCardId, locale: Locale) {
  return timeTravelerContent[locale].cards[cardId];
}

function localized(getValue: (locale: Locale) => string): Localized {
  return {
    en: getValue('en'),
    uk: getValue('uk'),
    ru: getValue('ru'),
  };
}

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function seededRandom(value: string): () => number {
  let seed = 2166136261;
  for (const char of value)
    seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let next = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    next ^= next + Math.imul(next ^ (next >>> 7), 61 | next);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

export function createTimeTravelerQuestions(
  dailyDate?: string,
): TimeTravelerQuestion[] {
  const random = dailyDate
    ? seededRandom(`time-traveler:${dailyDate}`)
    : Math.random;
  const modernIds = shuffle(
    QUESTION_IDS.filter((id) =>
      TWENTIETH_CENTURY_CARD_IDS.has(QUESTION_DATA[id].answer),
    ),
    random,
  );
  const ancientIds = shuffle(
    QUESTION_IDS.filter((id) => ANCIENT_CARD_IDS.has(QUESTION_DATA[id].answer)),
    random,
  );
  const selectedIds: QuestionId[] = [modernIds[0], ancientIds[0]];
  const usedAnswers = new Set<TimeCardId>(
    selectedIds.map((id) => QUESTION_DATA[id].answer),
  );
  for (const id of shuffle(QUESTION_IDS, random)) {
    const answer = QUESTION_DATA[id].answer;
    if (usedAnswers.has(answer)) continue;
    selectedIds.push(id);
    usedAnswers.add(answer);
    if (selectedIds.length === TIME_TRAVELER_ROUND_SIZE) break;
  }
  return buildTimeTravelerQuestions(shuffle(selectedIds, random), random);
}

function buildTimeTravelerQuestions(
  ids: readonly QuestionId[],
  random: () => number,
): TimeTravelerQuestion[] {
  return ids.map((id) => {
    const visualOptions = TIME_TRAVELER_VISUAL_OPTIONS.get(id);
    const cardIds = shuffle(visualOptions ?? QUESTION_DATA[id].cardIds, random);
    return {
      id: `time-${id}`,
      prompt: localized(
        (locale) => timeTravelerContent[locale].questions[id].prompt,
      ),
      factAfter: localized(
        (locale) => timeTravelerContent[locale].questions[id].fact,
      ),
      options: cardIds.map((cardId) =>
        localized((locale) => timeTravelerContent[locale].cards[cardId].title),
      ),
      answer: cardIds.indexOf(QUESTION_DATA[id].answer),
      cardIds,
      source: QUESTION_DATA[id].source,
    };
  });
}

export function timeTravelerQuestionsFromIds(
  ids: string[],
  dailyDate?: string,
): TimeTravelerQuestion[] {
  if (
    ids.length !== TIME_TRAVELER_ROUND_SIZE ||
    new Set(ids).size !== ids.length
  )
    throw new Error('Invalid Time Traveler round.');
  const questionIds = ids.map((id) => {
    if (!id.startsWith('time-'))
      throw new Error('Invalid Time Traveler question.');
    const key = id.slice(5);
    if (!Object.hasOwn(QUESTION_DATA, key))
      throw new Error('Unknown Time Traveler question.');
    return key as QuestionId;
  });
  const random = dailyDate
    ? seededRandom(`time-traveler:${dailyDate}:cards`)
    : Math.random;
  return buildTimeTravelerQuestions(questionIds, random);
}

export function timeTravelerQuestionBank(): TimeTravelerQuestion[] {
  return buildTimeTravelerQuestions(
    QUESTION_IDS,
    seededRandom('time-traveler:catalog'),
  );
}
