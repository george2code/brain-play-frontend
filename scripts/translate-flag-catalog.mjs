import fs from 'node:fs';

const file = 'src/services/demo/flags/flags.json';
const catalog = JSON.parse(fs.readFileSync(file, 'utf8'));

async function translate(value, locale) {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.search = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: locale,
    dt: 't',
    q: value,
  }).toString();
  for (let retry = 0; retry < 5; retry++) {
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (response.ok) {
      const data = await response.json();
      const result = data[0]
        .map((part) => part[0])
        .join('')
        .trim();
      if (!result) throw new Error(`Empty translation: ${locale}`);
      return result;
    }
    if (response.status !== 429 && response.status < 500)
      throw new Error(`Translation HTTP ${response.status}`);
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 * (retry + 1) ** 2),
    );
  }
  throw new Error(`Translation retries exhausted: ${locale}`);
}

for (const locale of ['ru', 'uk']) {
  for (let index = 0; index < catalog.length; index++) {
    if (catalog[index].factAfter[locale]) continue;
    catalog[index].factAfter[locale] = await translate(
      catalog[index].factAfter.en,
      locale,
    );
    fs.writeFileSync(file, JSON.stringify(catalog, null, 2) + '\n');
    if ((index + 1) % 20 === 0)
      console.log(`${locale}: ${index + 1}/${catalog.length}`);
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
}
console.log('Translations complete');
