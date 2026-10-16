import { expect, test } from '@playwright/test';

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
  await page.getByRole('button', { name: 'C 32', exact: true }).click();
  await page.getByRole('button', { name: 'Next question' }).click();
  await page.getByRole('button', { name: 'B 16', exact: true }).click();
  await page.getByRole('button', { name: 'Next question' }).click();
  await page.getByRole('button', { name: 'D 27', exact: true }).click();
  await page.getByRole('button', { name: 'See my result' }).click();
  await expect(page.getByText('300', { exact: true })).toBeVisible();
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

test('daily is recorded once, unknown route returns 404', async ({ page }) => {
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.goto('/daily');
  const isFlagDay =
    (await page.getByRole('button', { name: 'Start flag round' }).count()) > 0;
  await page
    .getByRole('button', {
      name: isFlagDay ? 'Start flag round' : 'Start demo round',
    })
    .click();
  const roundCount = isFlagDay ? 10 : 3;
  for (let round = 0; round < roundCount; round++) {
    await page.getByRole('button', { name: /^A / }).click();
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
  await expect(page.getByRole('button', { name: /^[A-D] / })).toHaveCount(4);
  await expect(page.getByRole('link', { name: 'Read the source' })).toHaveCount(
    0,
  );
  for (let round = 0; round < 10; round++) {
    await page.getByRole('button', { name: /^A / }).click();
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
