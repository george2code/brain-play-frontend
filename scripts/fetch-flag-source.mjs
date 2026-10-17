import fs from 'node:fs/promises';

const catalog = JSON.parse(
  await fs.readFile('src/services/demo/flags/flags.json', 'utf8'),
);
const directory = '.flag-source-data';
await fs.mkdir(directory, { recursive: true });

let next = 0;
async function worker() {
  while (next < catalog.length) {
    const { code } = catalog[next++];
    const file = `${directory}/${code}.json`;
    try {
      await fs.access(file);
      continue;
    } catch {}
    const url = `https://raw.githubusercontent.com/niemela/flags/master/data/${code}.json`;
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`${code}: HTTP ${response.status}`);
    const metadata = await response.json();
    if (metadata.id !== code) throw new Error(`${code}: unexpected source id`);
    await fs.writeFile(file, `${JSON.stringify(metadata, null, 2)}\n`);
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
console.log(`Fetched source metadata for ${catalog.length} flags.`);
