import { expect, test } from '@playwright/test';

import { dictionaries, seoCopy } from '../../src/i18n/dictionaries';
import { locales } from '../../src/i18n/routing';

test('localized content and metadata are complete without JavaScript', async ({
  browser,
  baseURL,
}, testInfo) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport: testInfo.project.use.viewport,
  });
  const page = await context.newPage();
  for (const locale of locales) {
    for (const path of [
      '',
      '/games/flag-master',
      '/games/geo-challenge',
      '/games/number-iq',
      '/games/time-traveler',
    ]) {
      const copy = path
        ? seoCopy[locale].games[path.slice(7) as keyof typeof seoCopy.en.games]
        : seoCopy[locale].home;
      const response = await page.goto(`/${locale}${path}?utm_source=test`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page).toHaveTitle(`${copy.title} · QuizRoam`);
      await expect(
        page.getByRole('heading', { name: copy.heading, exact: true }),
      ).toBeVisible();
      await expect(page.getByText(copy.body, { exact: true })).toBeVisible();
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        copy.description,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://quizroam.net/${locale}${path}`,
      );
      for (const alternate of [...locales, 'x-default']) {
        await expect(
          page.locator(`link[hreflang="${alternate}"]`),
        ).toHaveAttribute(
          'href',
          `https://quizroam.net/${alternate === 'x-default' ? 'en' : alternate}${path}`,
        );
      }
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        'content',
        process.env.SEO_TEST_INDEXABLE === 'true'
          ? 'index, follow'
          : 'noindex, follow',
      );
    }
    await page.goto(`/${locale}/daily`);
    await expect(
      page.getByText(seoCopy[locale].daily.body, { exact: true }),
    ).toBeVisible();
    await page.goto(`/${locale}/faq`);
    expect(await page.locator('h3').count()).toBeGreaterThan(10);
  }
  await context.close();
});

test('language switches preserve pending requests and selected answers, ordinary navigation resets the round', async ({
  page,
}) => {
  let releaseRequest!: () => void;
  const pendingRequest = new Promise<void>((resolve) => {
    releaseRequest = resolve;
  });
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.route('**/flag-master/rounds', async (route) => {
    await pendingRequest;
    await route.abort();
  });
  await page.goto('/en/games/flag-master');
  await page.getByRole('button', { name: dictionaries.en.flagStart }).click();
  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Українська' }).click();
  await expect(page.getByRole('combobox', { name: 'Мова' })).toBeVisible();
  releaseRequest();
  await expect(page.getByRole('button', { name: /^A / })).toBeEnabled();
  await page.getByRole('button', { name: /^A / }).click();
  await page.getByRole('combobox', { name: 'Мова' }).click();
  await page.getByRole('option', { name: 'Русский' }).click();
  await expect(page.getByRole('combobox', { name: 'Язык' })).toBeVisible();
  await expect(page.getByRole('button', { name: /^A / })).toBeDisabled();
  await expect(
    page.getByRole('button', { name: dictionaries.ru.next }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'QuizRoam', exact: true }).click();
  await page
    .getByRole('link', {
      name: `${dictionaries.ru.play} — Flag Master`,
      exact: true,
    })
    .click();
  await expect(
    page.getByRole('button', { name: dictionaries.ru.flagStart }),
  ).toBeEnabled();
});

test('only the production domain can have indexable HTTP responses', async ({
  request,
}) => {
  const canonical = await request.get('/en', {
    headers: { host: 'quizroam.net' },
  });
  expect(canonical.status()).toBe(200);
  expect(canonical.headers()['x-robots-tag']).toBe(
    process.env.SEO_TEST_INDEXABLE === 'true' ? undefined : 'noindex, follow',
  );
  const alias = await request.get('/en', {
    headers: { host: 'quizroam-preview.vercel.app' },
  });
  expect(alias.headers()['x-robots-tag']).toBe('noindex, follow');
  const www = await request.get('/ru/faq?from=test', {
    headers: { host: 'www.quizroam.net' },
    maxRedirects: 0,
  });
  expect(www.status()).toBe(308);
  expect(www.headers().location).toBe('https://quizroam.net/ru/faq?from=test');
});

test('legacy redirects keep callback parameters and sitemap contains only canonical public pages', async ({
  request,
}) => {
  const old = await request.get('/profile?auth=success', { maxRedirects: 0 });
  expect(old.status()).toBe(308);
  expect(new URL(old.headers().location, old.url()).pathname).toBe(
    '/en/profile',
  );
  expect(new URL(old.headers().location, old.url()).search).toBe(
    '?auth=success',
  );
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  if (process.env.SEO_TEST_INDEXABLE === 'true') {
    expect(xml.match(/<loc>/g)).toHaveLength(24);
    expect(xml).toContain('https://quizroam.net/uk/games/number-iq');
    expect(await robots.text()).toContain(
      'Sitemap: https://quizroam.net/sitemap.xml',
    );
  } else {
    expect(xml).not.toContain('<loc>');
    expect(await robots.text()).not.toContain('Sitemap:');
  }
  expect(xml).not.toMatch(
    /\/profile|\/leaderboard|\/privacy|localhost|vercel\.app/,
  );
  expect((await request.get('/icon.svg')).status()).toBe(200);
});

test('unknown pages return 404 and private pages stay noindex', async ({
  page,
}) => {
  for (const path of ['/de', '/ru/missing-page', '/en/games/not-a-game']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    expect(
      await page
        .locator('meta[name="robots"]')
        .evaluateAll((nodes) =>
          nodes.some((node) =>
            node.getAttribute('content')?.includes('noindex'),
          ),
        ),
    ).toBe(true);
  }
  for (const path of ['/en/profile', '/uk/leaderboard', '/ru/privacy']) {
    await page.goto(path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    );
  }
});

test('URL language wins over saved preference and switching keeps the route, query and anchor', async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem('brainplay:locale', 'ru'),
  );
  await page.goto('/en/faq?from=test#flag-master');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Українська' }).click();
  await expect(page).toHaveURL(/\/uk\/faq\?from=test#flag-master$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://quizroam.net/uk/faq',
  );
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
});
