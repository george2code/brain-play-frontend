import { expect, test } from '@playwright/test';

import flagCatalog from '../../src/services/demo/flags/flags.json';
import { NUMBER_QUESTION_BANK } from '../../src/services/demo/number-questions';

test('catalog, round, profile persistence, rename and reset', async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'A little play. A sharper mind.' }),
  ).toBeVisible();
  await expect(page.locator('#games article')).toHaveCount(4);
  await expect(page.getByRole('link', { name: 'My profile' })).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/home-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page
    .getByRole('link', { name: 'Let’s play — Number IQ', exact: true })
    .click();
  await page.getByRole('button', { name: 'Start demo round' }).click();
  await expect(page.locator('[data-ad-slot]')).toHaveCount(0);
  await expect(
    page.getByRole('region', { name: 'Try something new' }),
  ).toHaveCount(0);
  const seen = new Set<string>();
  for (let round = 0; round < 10; round++) {
    const visual = await page.getByTestId('question-visual').textContent();
    const question = NUMBER_QUESTION_BANK.find(
      (item) => item.visual === visual,
    );
    expect(question).toBeDefined();
    seen.add(question!.id);
    const choice =
      String.fromCharCode(65 + question!.answer) +
      ' ' +
      question!.terms[question!.missingIndex];
    await page.getByRole('button', { name: choice, exact: true }).click();
    if (round === 0)
      await expect(page.getByText(question!.explanation!.en)).toBeVisible();
    await page
      .getByRole('button', {
        name: round === 9 ? 'See my result' : 'Next question',
      })
      .click();
  }
  expect(seen.size).toBe(10);
  await expect(page.getByText('1000', { exact: true })).toBeVisible();
  const recommendations = page.getByRole('region', {
    name: 'Try something new',
  });
  await expect(recommendations.getByRole('link')).toHaveCount(3);
  await expect(
    recommendations.getByRole('link', { name: /Number IQ/ }),
  ).toHaveCount(0);
  await expect(page.locator('[data-ad-slot]')).toHaveCount(1);
  const bannerBox = await page.locator('[data-ad-slot]').boundingBox();
  const recommendationsBox = await recommendations.boundingBox();
  expect(bannerBox!.y + bannerBox!.height).toBeLessThan(recommendationsBox!.y);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/result-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await recommendations
    .getByRole('link', { name: 'Let’s play — Geo Challenge', exact: true })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Geo Challenge', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Start demo round' }),
  ).toBeVisible();
  await page.goto('/profile');
  await expect(
    page.getByRole('heading', { name: 'Curious player.' }),
  ).toBeVisible();
  await page.reload();
  await expect(page.getByText('100%', { exact: true }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Edit nickname' }).click();
  await page.getByLabel('Nickname', { exact: true }).fill('Explorer');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Explorer.' })).toBeVisible();
  await page.screenshot({
    path: `test-results/profile-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.getByRole('button', { name: 'Clear local progress' }).click();
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Explorer.' })).toBeVisible();
  await page.getByRole('button', { name: 'Clear local progress' }).click();
  await page
    .getByRole('button', { name: 'Clear progress', exact: true })
    .click();
  await expect(
    page.getByRole('heading', { name: 'Your story starts with a game.' }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test('languages, navigation and honest unavailable sign-in', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Українська' }).click();
  await expect(
    page.getByRole('heading', { name: 'Трохи гри. Більше відкриттів.' }),
  ).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');
  await page.getByRole('combobox', { name: 'Мова' }).click();
  await page.getByRole('option', { name: 'Русский' }).click();
  await expect(
    page.getByRole('heading', { name: 'Немного игры. Больше открытий.' }),
  ).toBeVisible();
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Открыть меню' }).click();
    await page.getByRole('link', { name: 'Рейтинг', exact: true }).click();
  } else await page.getByRole('link', { name: 'Рейтинг', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'Немного дружеского соревнования.' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Flag Master', exact: true }).click();
  await expect(
    page.getByRole('link', { name: 'Flag Master', exact: true }),
  ).toHaveAttribute('href', '/games/flag-master');
  await page.goto('/');
  if (testInfo.project.name === 'mobile')
    await page.getByRole('button', { name: 'Открыть меню' }).click();
  await page.getByRole('button', { name: 'Войти', exact: true }).click();
  await page.getByRole('button', { name: 'Продолжить с Google' }).click();
  await expect(
    page.getByText(
      'Вход через Google пока не подключён. Можно играть без аккаунта.',
    ),
  ).toBeVisible();
});

test('Number IQ shows the answer and worked solution in the current question', async ({
  page,
}, testInfo) => {
  await page.goto('/games/number-iq');
  await page.getByRole('button', { name: 'Challenge' }).click();
  await page.getByRole('button', { name: 'Start demo round' }).click();
  const visual = await page.getByTestId('question-visual').textContent();
  const question = NUMBER_QUESTION_BANK.find((item) => item.visual === visual);
  expect(question?.difficulty).toBe('hard');
  const wrong = (question!.answer + 1) % 4;
  await page
    .getByRole('button', {
      name: String.fromCharCode(65 + wrong) + ' ' + question!.options[wrong].en,
      exact: true,
    })
    .click();
  await expect(
    page.getByText(`Correct answer: ${question!.options[question!.answer].en}`),
  ).toBeVisible();
  await expect(page.getByText(question!.explanation!.en)).toBeVisible();
  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Русский' }).click();
  await expect(page.getByText(question!.explanation!.ru)).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Следующий вопрос' }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/number-solution-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test('daily is recorded once, unknown route returns 404', async ({ page }) => {
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.goto('/daily');
  await expect(
    page.getByRole('button', { name: /^Start (flag|demo) round$/ }),
  ).toBeVisible();
  const isFlagDay =
    (await page.getByRole('button', { name: 'Start flag round' }).count()) > 0;
  await page
    .getByRole('button', {
      name: isFlagDay ? 'Start flag round' : 'Start demo round',
    })
    .click();
  const isNumberDay =
    (await page.getByRole('heading', { name: 'Number IQ' }).count()) > 0;
  const roundCount = isFlagDay || isNumberDay ? 10 : 3;
  for (let round = 0; round < roundCount; round++) {
    await page.getByRole('button', { name: /^A/ }).click();
    await page
      .getByRole('button', {
        name: round === roundCount - 1 ? 'See my result' : 'Next question',
      })
      .click();
  }
  await page.reload();
  await expect(
    page.getByRole('heading', { name: 'Today’s challenge complete' }),
  ).toBeVisible();
  await expect(
    page.getByRole('region', { name: 'Try something new' }).getByRole('link'),
  ).toHaveCount(3);
  const count = await page.evaluate(
    () =>
      JSON.parse(localStorage.getItem('brainplay:demo-profile:v1')!).attempts
        .length,
  );
  expect(count).toBe(1);
  const response = await page.goto('/games/not-a-game');
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole('heading', { name: 'This discovery is still off the map.' }),
  ).toBeVisible();
});

test('Flag Master teaches after each answer and records ten rounds locally when API is unavailable', async ({
  page,
}) => {
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.goto('/games/flag-master');
  await page.getByRole('button', { name: 'Start flag round' }).click();
  await expect(page.getByText('Round 1 of 10')).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Flag to identify' }),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: /^[A-D]/ })).toHaveCount(4);
  await expect(page.getByRole('link', { name: 'Read the source' })).toHaveCount(
    0,
  );
  const teaser = await page
    .locator('[aria-live="polite"] p')
    .first()
    .textContent();
  const currentFlag = flagCatalog.find((flag) => flag.factBefore.en === teaser);
  expect(currentFlag).toBeDefined();
  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Українська' }).click();
  await expect(
    page.getByText(currentFlag!.factBefore.uk, { exact: true }),
  ).toBeVisible();
  await page.getByRole('combobox', { name: 'Мова' }).click();
  await page.getByRole('option', { name: 'Русский' }).click();
  await expect(
    page.getByText(currentFlag!.factBefore.ru, { exact: true }),
  ).toBeVisible();
  await page.getByRole('combobox', { name: 'Язык' }).click();
  await page.getByRole('option', { name: 'English' }).click();
  for (let round = 0; round < 10; round++) {
    await page.getByRole('button', { name: /^A/ }).click();
    if (round === 0) {
      await expect(
        page.getByText(currentFlag!.factAfter.en, { exact: true }),
      ).toBeVisible();
    }
    await expect(
      page.getByRole('link', { name: 'Read the source' }),
    ).toBeVisible();
    await page
      .getByRole('button', {
        name: round === 9 ? 'See my result' : 'Next question',
      })
      .click();
  }
  await expect(
    page.getByRole('heading', { name: 'Curiosity looks good on you.' }),
  ).toBeVisible();
  await page.goto('/');
  const card = page.getByRole('link', { name: 'Let’s play — Flag Master' });
  await expect(card.getByLabel(/Personal best:/)).toBeVisible();
  await expect(card.getByLabel(/Games played: 1/)).toBeVisible();
  await expect(card.getByLabel(/Accuracy:/)).toBeVisible();
  await page.goto('/profile');
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Flag Master' })
      .getByLabel(/Games played: 1/),
  ).toBeVisible();
});

test('profile cards include older rounds and local Flag Master demos alongside saved rounds', async ({
  page,
}) => {
  const cors = {
    'access-control-allow-origin': 'http://localhost:3100',
    'access-control-allow-credentials': 'true',
  };
  await page.route('**/flag-master/stats', (route) =>
    route.fulfill({
      json: {
        played: 4,
        correct: 32,
        wrong: 8,
        accuracy: 80,
        bestScore: 900,
        rulesVersion: 2,
      },
      headers: cors,
    }),
  );
  await page.route('**/game-attempts/me**', (route) =>
    route.fulfill({
      json: {
        items: Array.from({ length: 4 }, (_, index) => ({
          id: `server-flag-${index}`,
          score: 800,
          correctAnswers: 8,
          totalRounds: 10,
          completedAt: `2026-10-${String(13 + index).padStart(2, '0')}T10:00:00.000Z`,
          mode: {
            code: 'classic',
            rulesVersion: 2,
            game: { code: 'flag-master' },
          },
        })),
      },
      headers: cors,
    }),
  );
  await page.goto('/');
  await page.evaluate(() => {
    const rounds = [
      ['local-flag-old', 'flag-master', 3, 2, 1],
      ['local-flag-new', 'flag-master', 10, 6, 2],
      ['local-number-old', 'number-iq', 3, 2, 1],
      ['local-number-new', 'number-iq', 10, 6, 2],
    ] as const;
    localStorage.setItem(
      'brainplay:demo-profile:v1',
      JSON.stringify({
        version: 1,
        nickname: 'Player',
        attempts: rounds.map(([id, game, total, correct, rulesVersion]) => ({
          id,
          game,
          mode: 'practice',
          total,
          correct,
          score: correct * 100,
          rulesVersion,
          completedAt: '2026-10-12T10:00:00.000Z',
        })),
        totals: {
          'flag-master:1': { played: 1, correct: 2, total: 3, bestScore: 200 },
          'flag-master:2': { played: 1, correct: 6, total: 10, bestScore: 600 },
          'number-iq:1': { played: 1, correct: 2, total: 3, bestScore: 200 },
          'number-iq:2': { played: 1, correct: 6, total: 10, bestScore: 600 },
        },
      }),
    );
  });
  await page.goto('/profile');
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Flag Master' })
      .getByLabel('Games played: 6'),
  ).toBeVisible();
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Number IQ' })
      .getByLabel('Games played: 2'),
  ).toBeVisible();
  await expect(page.getByRole('row')).toHaveCount(9);
  await page.goto('/');
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Flag Master' })
      .getByLabel('Games played: 6'),
  ).toBeVisible();
  await expect(
    page
      .locator('aside')
      .getByText('Games played')
      .locator('..')
      .locator('strong'),
  ).toHaveText('8');
});
