import fs from 'node:fs';
import path from 'node:path';
import countries from 'world-countries';

const sourceDir = '.flag-source-data';
const source = countries
  .filter((country) => country.unMember || country.cca2 === 'PS')
  .sort((a, b) => a.cca2.localeCompare(b.cca2));
const ukNames = new Intl.DisplayNames(['uk'], { type: 'region' });

function chooseHistoryFact(history, year) {
  const sentences = history
    .split('. ')
    .map((part, index, all) => (index === all.length - 1 ? part : `${part}.`));
  const notYearOnly = sentences.filter(
    (sentence) =>
      sentence.length >= 40 &&
      sentence.length <= 245 &&
      !(/\badopted\b/i.test(sentence) && sentence.includes(year)),
  );
  let sentence =
    notYearOnly[0] || sentences.find((s) => s.length <= 245) || sentences[0];
  if (sentence.length > 245) {
    const clause = sentence.slice(0, 245);
    const cut = Math.max(clause.lastIndexOf(';'), clause.lastIndexOf(','));
    sentence =
      cut > 70
        ? `${clause.slice(0, cut)}.`
        : `${clause.slice(0, clause.lastIndexOf(' '))}…`;
  }
  return sentence;
}

const catalog = source.map((country) => {
  const code = country.cca2;
  const metadata = JSON.parse(
    fs.readFileSync(path.join(sourceDir, `${code}.json`), 'utf8'),
  );
  const year = metadata.periods[0].start.slice(0, 4);
  return {
    code,
    name: {
      en: country.name.common,
      ru:
        country.translations.rus?.common ||
        new Intl.DisplayNames(['ru'], { type: 'region' }).of(code),
      uk: ukNames.of(code),
    },
    factBefore: {
      en: `The current version of this flag dates to ${year}.`,
      ru: `Современная версия этого флага появилась в ${year} году.`,
      uk: `Сучасна версія цього прапора з’явилася ${year} року.`,
    },
    factAfter: {
      en: chooseHistoryFact(metadata.history, year),
      ru: '',
      uk: '',
    },
    source: metadata.sources[0],
  };
});

if (catalog.length !== 195)
  throw new Error(`Expected 195 countries, got ${catalog.length}`);
fs.mkdirSync('src/services/demo/flags', { recursive: true });
fs.writeFileSync(
  'src/services/demo/flags/flags.json',
  JSON.stringify(catalog, null, 2) + '\n',
);
console.log(`Wrote ${catalog.length} flag records`);
