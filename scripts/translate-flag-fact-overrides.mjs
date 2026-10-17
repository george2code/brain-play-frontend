import fs from 'node:fs/promises';

const input = JSON.parse(
  await fs.readFile('scripts/flag-fact-overrides.en.json', 'utf8'),
);
const outputFile = 'scripts/flag-fact-overrides.json';
let output;
try {
  output = JSON.parse(await fs.readFile(outputFile, 'utf8'));
} catch {
  output = { before: {}, after: {} };
}

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
    try {
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
    } catch (error) {
      if (retry === 4) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 750 * (retry + 1) ** 2));
  }
  throw new Error(`Translation retries exhausted: ${locale}`);
}

let next = 0;
const entries = Object.entries(input).flatMap(([section, facts]) =>
  Object.entries(facts).map(([code, en]) => ({ section, code, en })),
);
let save = Promise.resolve();
async function worker() {
  while (next < entries.length) {
    const { section, code, en } = entries[next++];
    const fact = output[section][code];
    if (fact?.en === en && fact.ru && fact.uk) continue;
    const [ru, uk] = await Promise.all([
      translate(en, 'ru'),
      translate(en, 'uk'),
    ]);
    output[section][code] = { en, ru, uk };
    save = save.then(() =>
      fs.writeFile(outputFile, `${JSON.stringify(output, null, 2)}\n`),
    );
    await save;
    if (next % 25 === 0) console.log(`${next}/${entries.length}`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
console.log(`Translated ${entries.length} flag facts.`);
