import { expect, test } from '@playwright/test';

const headers = {
  'access-control-allow-origin': 'http://localhost:3100',
  'access-control-allow-credentials': 'true',
  'access-control-allow-methods': 'GET, POST, PATCH, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

test('Google button starts server OAuth and handles an unavailable provider', async ({
  page,
}) => {
  let starts = 0;
  await page.route('**/api/v1/**', async (route) => {
    const path = new URL(route.request().url()).pathname;
    if (route.request().method() === 'OPTIONS')
      return route.fulfill({ status: 204, headers });
    if (path.endsWith('/auth/config'))
      return route.fulfill({ json: { googleEnabled: true }, headers });
    if (path.endsWith('/auth/google')) {
      starts++;
      return route.fulfill({
        status: 503,
        json: { message: 'Unavailable' },
        headers,
      });
    }
    return route.fulfill({ status: 401, json: {}, headers });
  });
  await page.goto('/profile');
  await page
    .getByRole('button', { name: 'Connect Google', exact: true })
    .click();
  const google = page.getByRole('button', { name: 'Continue with Google' });
  await expect(google).toBeEnabled();
  await google.click();
  await expect(
    page.getByText('Could not complete the request. Please try again.'),
  ).toBeVisible();
  expect(starts).toBe(1);
  await expect(google).toBeEnabled();
});

test('registered profile supports server nickname, logout and real leaderboard rendering', async ({
  page,
}) => {
  let signedIn = true;
  let nickname = 'Cloud Player';
  await page.route('**/api/v1/**', async (route) => {
    const req = route.request();
    const path = new URL(req.url()).pathname;
    if (req.method() === 'OPTIONS')
      return route.fulfill({ status: 204, headers });
    if (path.endsWith('/users/me')) {
      if (!signedIn) return route.fulfill({ status: 401, json: {}, headers });
      if (req.method() === 'PATCH') nickname = req.postDataJSON().nickname;
      return route.fulfill({
        headers,
        json: {
          id: 'registered',
          status: 'REGISTERED',
          nickname,
          email: 'player@example.com',
          preferredLocale: 'en',
          createdAt: '2026-10-20T00:00:00Z',
          registeredAt: '2026-10-20T00:00:00Z',
        },
      });
    }
    if (path.endsWith('/auth/logout')) {
      signedIn = false;
      return route.fulfill({ json: { status: 'signed-out' }, headers });
    }
    if (path.endsWith('/auth/config'))
      return route.fulfill({ json: { googleEnabled: true }, headers });
    if (path.includes('/games/'))
      return route.fulfill({
        headers,
        json: {
          modes: [{ id: 'mode-id', code: 'classic', rulesVersion: 2 }],
        },
      });
    if (path.includes('/leaderboards/'))
      return route.fulfill({
        headers,
        json: [
          {
            userId: 'registered',
            nickname,
            score: 800,
            durationMs: 20000,
            place: 1,
          },
        ],
      });
    return route.fulfill({ status: 401, json: {}, headers });
  });
  await page.goto('/profile?auth=success');
  await expect(
    page.getByRole('heading', { name: 'Google account connected', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText('player@example.com', { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText('Google connected. Your online progress is saved.'),
  ).toBeVisible();
  await expect(page).toHaveURL(/\/profile$/);
  await page.getByRole('button', { name: 'Edit nickname' }).click();
  await page.getByLabel('Nickname', { exact: true }).fill('Updated Player');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await expect(
    page.getByRole('heading', { name: 'Updated Player.' }),
  ).toBeVisible();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(nickname).toBe('Updated Player');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: test.info().outputPath('google-profile.png'),
    fullPage: true,
    animations: 'disabled',
  });
  await page.goto('/leaderboard');
  await expect(
    page.getByRole('cell', { name: 'Updated Player' }),
  ).toBeVisible();
  await expect(page.getByRole('cell', { name: '800 pts' })).toBeVisible();
  await page.goto('/profile');
  await page.getByRole('button', { name: 'Sign out', exact: true }).click();
  await expect(
    page.getByRole('button', { name: 'Connect Google', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText('player@example.com', { exact: true }),
  ).toHaveCount(0);
});
