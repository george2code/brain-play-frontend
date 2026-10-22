import assert from 'node:assert/strict';
import test from 'node:test';

import {
  isIndexable,
  languageAlternates,
  pageMetadata,
  publicPaths,
} from '../src/config/seo.config';
import {
  isLocale,
  locales,
  localizedPath,
  withoutLocale,
} from '../src/i18n/routing';

test('localized paths preserve queries and anchors without prefixing external destinations', () => {
  assert.equal(localizedPath('/', 'uk'), '/uk');
  assert.equal(
    localizedPath('/ru/games/flag-master?mode=daily#rules', 'uk'),
    '/uk/games/flag-master?mode=daily#rules',
  );
  assert.equal(localizedPath('/#games', 'ru'), '/ru#games');
  assert.equal(localizedPath('/en?auth=success', 'uk'), '/uk?auth=success');
  assert.equal(
    localizedPath('https://example.com', 'ru'),
    'https://example.com',
  );
  assert.equal(localizedPath('//example.com', 'ru'), '//example.com');
  assert.equal(localizedPath('#rules', 'ru'), '#rules');
  assert.equal(withoutLocale('/en/about'), '/about');
  assert.equal(withoutLocale('/english'), '/english');
  assert.equal(isLocale('ua'), false);
});

test('indexing needs an explicit launch flag and never opens Vercel previews', () => {
  assert.equal(isIndexable({ NODE_ENV: 'production' }), false);
  assert.equal(
    isIndexable({ NODE_ENV: 'development', SEO_INDEXABLE: 'true' }),
    false,
  );
  assert.equal(
    isIndexable({
      NODE_ENV: 'production',
      SEO_INDEXABLE: 'true',
      VERCEL_ENV: 'preview',
    }),
    false,
  );
  assert.equal(
    isIndexable({
      NODE_ENV: 'production',
      SEO_INDEXABLE: 'true',
      VERCEL_ENV: 'production',
    }),
    true,
  );
});

test('public pages have unique localized titles, descriptions and reciprocal production alternates', () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const path of publicPaths) {
    const alternates = languageAlternates(path);
    assert.equal(Object.keys(alternates).length, 4);
    for (const locale of locales) {
      const metadata = pageMetadata(locale, path);
      assert.ok(metadata.title);
      assert.ok(metadata.description);
      assert.ok(
        !titles.has(metadata.title),
        `${locale}${path} duplicate title`,
      );
      assert.ok(
        !descriptions.has(metadata.description),
        `${locale}${path} duplicate description`,
      );
      titles.add(metadata.title);
      descriptions.add(metadata.description);
      assert.equal(metadata.alternates?.canonical, alternates[locale]);
      assert.deepEqual(metadata.alternates?.languages, alternates);
      assert.match(
        String(metadata.alternates?.canonical),
        /^https:\/\/quizroam\.net\/(en|uk|ru)(\/|$)/,
      );
    }
  }
  assert.equal(titles.size, 24);
  for (const path of ['/profile', '/leaderboard', '/privacy']) {
    const robots = pageMetadata('ru', path).robots;
    assert.ok(robots && typeof robots === 'object');
    assert.equal(robots.index, false);
  }
});
