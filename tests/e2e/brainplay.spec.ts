import { expect, test } from '@playwright/test';

import flagCatalog from '../../src/services/demo/flags/flags.json';
import { createGeoQuestions } from '../../src/services/demo/geo-questions';
import {
  NUMBER_QUESTION_BANK,
  createNumberQuestions,
} from '../../src/services/demo/number-questions';

test.beforeEach(async ({ page }) => {
  // The existing UI suite exercises the explicit offline demo path.
  await page.route('**/api/v1/quiz-rounds/**', (route) => route.abort());
});

test('Time Traveler reveals dates without opening cards before continuing', async ({
  page,
}, testInfo) => {
  await page.setViewportSize(
    testInfo.project.name === 'mobile'
      ? { width: 390, height: 844 }
      : { width: 1280, height: 900 },
  );
  await page.goto('/games/time-traveler');
  await page.getByRole('button', { name: 'Start round' }).click();
  const cards = page.locator('button[aria-pressed]');
  const dates = cards.locator(':scope > span:last-child > span:last-child');
  await expect(cards).toHaveCount(4);
  expect((await dates.allTextContents()).every((date) => !date.trim())).toBe(
    true,
  );
  await cards.first().click();
  expect((await dates.allTextContents()).every((date) => date.trim())).toBe(
    true,
  );
  await expect(page.getByText('A little history')).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Next question' }),
  ).toBeVisible();
  await expect
    .poll(() =>
      cards
        .locator('img')
        .evaluateAll((images) =>
          images.every(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  await page.screenshot({
    path: testInfo.outputPath('time-traveler-reveal.png'),
    fullPage: true,
  });
  await expect(cards.first()).toBeDisabled();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.getByRole('button', { name: 'Next question' }).click();
  expect((await dates.allTextContents()).every((date) => !date.trim())).toBe(
    true,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test('server Geo and Number rounds appear in the profile without local copies', async ({
  page,
}) => {
  const cors = {
    'access-control-allow-origin': 'http://localhost:3100',
    'access-control-allow-credentials': 'true',
  };
  const completed: string[] = [];
  await page.unroute('**/api/v1/quiz-rounds/**');
  await page.route('**/api/v1/quiz-rounds/**', (route) => {
    const path = new URL(route.request().url()).pathname;
    const game = path.includes('geo-challenge') ? 'geo-challenge' : 'number-iq';
    if (path.endsWith('/stats')) {
      const played = completed.filter((item) => item === game).length;
      return route.fulfill({
        json: {
          played,
          correct: played * 5,
          total: played * 10,
          bestScore: played ? 500 : 0,
          bestByLevel: game === 'number-iq' && played ? { mixed: 500 } : {},
          rulesVersion: 2,
        },
        headers: cors,
      });
    }
    if (path.endsWith('/complete')) {
      completed.push(game);
      return route.fulfill({
        json: {
          roundId: `server-${game}`,
          correctAnswers: 5,
          score: 500,
          totalRounds: 10,
          completedAt: '2026-10-19T12:00:00.000Z',
        },
        headers: cors,
      });
    }
    const ids =
      game === 'geo-challenge'
        ? createGeoQuestions('2026-10-19').map((item) => item.id)
        : createNumberQuestions('mixed', '2026-10-19').map((item) => item.id);
    return route.fulfill({
      json: {
        roundId: `server-${game}`,
        rulesVersion: 2,
        contentVersion: '1',
        questions: ids.map((id) => ({ id })),
      },
      headers: cors,
    });
  });
  await page.route('**/game-attempts/me**', (route) =>
    route.fulfill({
      json: {
        items: completed.map((game) => ({
          id: `server-${game}`,
          score: 500,
          correctAnswers: 5,
          totalRounds: 10,
          completedAt: '2026-10-19T12:00:00.000Z',
          verificationStatus: 'VERIFIED',
          mode: {
            code: 'classic',
            rulesVersion: 2,
            game: { code: game },
          },
        })),
      },
      headers: cors,
    }),
  );
  await page.goto('/games/number-iq');
  await page.getByRole('button', { name: 'Start round' }).click();
  await expect(page.getByText('Result saved when you finish')).toBeVisible();
  for (let index = 0; index < 10; index++) {
    await page.getByRole('button', { name: /^A / }).click();
    await page
      .getByRole('button', {
        name: index === 9 ? 'See my result' : 'Next question',
      })
      .click();
  }
  await page.goto('/games/geo-challenge');
  await page.getByRole('button', { name: 'Start round' }).click();
  await expect(page.getByText('Result saved when you finish')).toBeVisible();
  for (let index = 0; index < 10; index++) {
    await page.locator('path[data-area-id]').first().dispatchEvent('click');
    await page
      .getByRole('button', {
        name: index === 9 ? 'See my result' : 'Next question',
      })
      .click();
  }
  await page.goto('/profile');
  for (const game of ['Number IQ', 'Geo Challenge']) {
    await expect(
      page
        .getByRole('link', { name: `Let’s play — ${game}` })
        .getByLabel('Games played: 1'),
    ).toBeVisible();
  }
  await expect(page.getByRole('row')).toHaveCount(3);
  expect(
    await page.evaluate(() =>
      localStorage.getItem('brainplay:demo-profile:v1'),
    ),
  ).toBeNull();
});

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
  await page.getByRole('button', { name: 'Start round' }).click();
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
  await expect(page.getByRole('button', { name: 'Start round' })).toBeVisible();
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

test('Geo Challenge selects a map area and reveals the correct location', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => {
    Math.random = () => 0.5;
  });
  await page.goto('/games/geo-challenge');
  await expect(page.getByText('10 map questions per round')).toBeVisible();
  await page.getByRole('button', { name: 'Start round' }).click();
  const map = page.locator('svg[aria-label^="Interactive map"]');
  const paths = map.locator('path[data-area-id]');
  await expect(map).toBeVisible();
  expect(await paths.count()).toBeGreaterThanOrEqual(10);
  await expect(page.getByRole('button', { name: /^A / })).toHaveCount(0);
  await expect(
    page.getByRole('button', { name: 'Zoom in on map' }),
  ).toHaveCount(0);
  await expect(
    page.getByRole('button', { name: 'Zoom out of map' }),
  ).toHaveCount(0);
  await page.screenshot({
    path: `test-results/geo-map-${testInfo.project.name}.png`,
    fullPage: true,
  });
  const targetPoolIds = new Set([
    '288',
    '716',
    '404',
    '504',
    '392',
    '356',
    '704',
    '764',
    '276',
    '380',
    '724',
    '804',
    '124',
    '484',
    '076',
    '032',
    '152',
    '036',
    '554',
    '598',
    '48',
    '06',
    '04',
    '12',
  ]);
  await map.scrollIntoViewIfNeeded();
  const wrongPoint = await paths.evaluateAll(
    (nodes, targetIds) => {
      const targets = new Set(targetIds);
      const candidates = nodes
        .map((node) => ({
          node: node as SVGGeometryElement,
          id: node.getAttribute('data-area-id')!,
          box: (node as SVGGeometryElement).getBBox(),
        }))
        .filter(
          ({ id, box }) =>
            !targets.has(id) && box.width > 20 && box.height > 20,
        )
        .sort(
          (a, b) => b.box.width * b.box.height - a.box.width * a.box.height,
        );
      for (const { node, id, box } of candidates) {
        for (let row = 1; row <= 5; row++) {
          for (let column = 1; column <= 5; column++) {
            const point = new DOMPoint(
              box.x + (box.width * column) / 6,
              box.y + (box.height * row) / 6,
            );
            if (!node.isPointInFill(point)) continue;
            const screen = point.matrixTransform(node.getScreenCTM()!);
            if (
              screen.x > 12 &&
              screen.x < innerWidth - 12 &&
              screen.y > 12 &&
              screen.y < innerHeight - 12
            )
              return { id, x: screen.x, y: screen.y };
          }
        }
      }
      return null;
    },
    [...targetPoolIds],
  );
  expect(wrongPoint).not.toBeNull();
  const wrongArea = map.locator(`path[data-area-id="${wrongPoint!.id}"]`);
  const wrongName = await wrongArea.getAttribute('aria-label');
  if (testInfo.project.name === 'desktop') {
    await page.mouse.move(wrongPoint!.x, wrongPoint!.y);
    await expect(wrongArea).toHaveCSS('fill', 'rgb(96, 186, 134)');
    await expect(page.getByText(wrongName!, { exact: true })).toHaveCount(0);
    await page.mouse.click(wrongPoint!.x, wrongPoint!.y);
  } else await page.touchscreen.tap(wrongPoint!.x, wrongPoint!.y);
  await expect(wrongArea).toHaveAttribute('fill', '#f16c65');
  await expect(map.locator('path[fill="#a4df65"]')).toHaveCount(1);
  await expect(wrongArea).toHaveCSS('fill', 'rgb(241, 108, 101)');
  await expect(map.locator('path[fill="#a4df65"]')).toHaveCSS(
    'fill',
    'rgb(164, 223, 101)',
  );
  await expect(
    page.getByText('Not quite. The green area is the right place.'),
  ).toBeVisible();
  await page.screenshot({
    path: `test-results/geo-feedback-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.getByRole('button', { name: 'Next question' }).click();
  await expect(page.getByText('Round 2 of 10')).toBeVisible();
  const seenRegions = new Set<string>();
  for (let round = 2; round <= 10; round++) {
    const currentMap = page.locator('svg[aria-label^="Interactive map"]');
    const label = await currentMap.getAttribute('aria-label');
    seenRegions.add(label!);
    expect(
      await currentMap.locator('path[data-area-id]').count(),
    ).toBeGreaterThanOrEqual(10);
    const viewBox = (await currentMap.getAttribute('viewBox'))!
      .split(' ')
      .map(Number);
    if (label === 'Interactive map: South America')
      expect(viewBox[3]).toBeGreaterThan(viewBox[2]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (
      ['Interactive map: South America', 'Interactive map: Europe'].includes(
        label!,
      )
    ) {
      await page.screenshot({
        path: `test-results/geo-${label!.split(': ')[1].replaceAll(' ', '-').toLowerCase()}-${testInfo.project.name}.png`,
        fullPage: true,
      });
    }
    if ([2, 3, 7, 8].includes(round)) {
      await page.screenshot({
        path: `test-results/geo-context-round-${round}-${testInfo.project.name}.png`,
        fullPage: true,
      });
    }
    await currentMap.locator('path[data-area-id]').first().focus();
    await page.keyboard.press('Enter');
    await page
      .getByRole('button', {
        name: round === 10 ? 'See my result' : 'Next question',
      })
      .click();
  }
  expect(seenRegions.size).toBeGreaterThanOrEqual(6);
  await expect(page.getByText('Correct answers')).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test('Geo Challenge frames an island target for direct tapping', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => {
    Math.random = () => 0.35;
  });
  await page.goto('/games/geo-challenge');
  await page.getByRole('button', { name: 'Start round' }).click();
  await expect(
    page.getByRole('heading', { name: 'Find Papua New Guinea on the map.' }),
  ).toBeVisible();
  const map = page.locator('svg[aria-label^="Interactive map"]');
  const target = map.locator('path[data-area-id="598"]');
  await expect(target).toBeVisible();
  const width = await target.evaluate(
    (node) => node.getBoundingClientRect().width,
  );
  expect(width).toBeGreaterThan(testInfo.project.name === 'mobile' ? 60 : 120);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/geo-papua-new-guinea-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test('Geo Challenge lets a small country be selected on the map', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => {
    Math.random = () => 0.5;
  });
  await page.goto('/games/geo-challenge');
  await page.getByRole('button', { name: 'Start round' }).click();
  await expect(
    page.getByRole('heading', { name: 'Find Ghana on the map.' }),
  ).toBeVisible();
  const map = page.locator('svg[aria-label^="Interactive map"]');
  await map.scrollIntoViewIfNeeded();
  const target = map.locator('path[data-area-id="288"]');
  const point = await target.evaluate((node) => {
    const shape = node as SVGGeometryElement;
    const box = shape.getBBox();
    for (let row = 1; row <= 7; row++) {
      for (let column = 1; column <= 7; column++) {
        const candidate = new DOMPoint(
          box.x + (box.width * column) / 8,
          box.y + (box.height * row) / 8,
        );
        if (shape.isPointInFill(candidate)) {
          const screen = candidate.matrixTransform(shape.getScreenCTM()!);
          return { x: screen.x, y: screen.y };
        }
      }
    }
    return null;
  });
  expect(point).not.toBeNull();
  if (testInfo.project.name === 'mobile')
    await page.touchscreen.tap(point!.x, point!.y);
  else await page.mouse.click(point!.x, point!.y);
  await expect(target).toHaveAttribute('fill', '#a4df65');
  await expect(page.getByText('You got it!')).toBeVisible();
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
  await page.getByRole('button', { name: 'Start round' }).click();
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
  await page.getByRole('button', { name: 'Следующий вопрос' }).click();
  for (let round = 1; round < 10; round++) {
    await page.getByRole('button', { name: /^A / }).click();
    await page
      .getByRole('button', {
        name: round === 9 ? 'Мой результат' : 'Следующий вопрос',
      })
      .click();
  }
  const savedLevel = await page.evaluate(
    () =>
      JSON.parse(localStorage.getItem('brainplay:demo-profile:v1')!).attempts[0]
        .numberLevel,
  );
  expect(savedLevel).toBe('hard');
  await page.goto('/');
  await expect(
    page
      .getByRole('link', { name: 'Играть — Number IQ' })
      .getByTestId('number-trophy'),
  ).toHaveClass(/text-trophy-silver/);
});

test('Number IQ card shows the highest scoring trophy and breaks ties toward gold', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  const saveProfile = async (bests: Record<string, number>) => {
    await page.evaluate((levels) => {
      const top = Math.max(...Object.values(levels));
      localStorage.setItem(
        'brainplay:demo-profile:v1',
        JSON.stringify({
          version: 1,
          nickname: '',
          attempts: [
            {
              id: 'number-card-test',
              game: 'number-iq',
              mode: 'practice',
              correct: top / 100,
              total: 10,
              score: top,
              completedAt: '2026-10-17T10:00:00.000Z',
              rulesVersion: 2,
              numberLevel: Object.keys(levels).find(
                (level) => levels[level] === top,
              ),
            },
          ],
          totals: {
            'number-iq:2': {
              played: 1,
              correct: top / 100,
              total: 10,
              bestScore: top,
            },
          },
          numberBestByLevel: levels,
        }),
      );
    }, bests);
    await page.reload();
  };
  const card = page.getByRole('link', { name: 'Let’s play — Number IQ' });
  await saveProfile({ easy: 200 });
  await expect(card.getByTestId('number-trophy')).toHaveClass(
    /text-trophy-easy/,
  );
  await saveProfile({ mixed: 100, medium: 400 });
  await expect(card.getByTestId('number-trophy')).toHaveClass(
    /text-trophy-bronze/,
  );
  await expect(card.getByText('· Medium')).toBeVisible();
  await card.screenshot({
    path: `test-results/number-trophy-bronze-${testInfo.project.name}.png`,
  });
  await saveProfile({ mixed: 900, hard: 1000 });
  await expect(card.getByTestId('number-trophy')).toHaveClass(
    /text-trophy-silver/,
  );
  await saveProfile({ mixed: 1000, hard: 1000 });
  await expect(card.getByTestId('number-trophy')).toHaveClass(
    /text-trophy-gold/,
  );
  await expect(card.getByText('· Mixed')).toBeVisible();
  await card.screenshot({
    path: `test-results/number-trophy-gold-${testInfo.project.name}.png`,
  });
  await page.screenshot({
    path: `test-results/number-trophy-home-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.goto('/profile');
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Number IQ' })
      .getByTestId('number-trophy'),
  ).toHaveClass(/text-trophy-gold/);
  await page.screenshot({
    path: `test-results/number-trophy-profile-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test('daily is recorded once, unknown route returns 404', async ({ page }) => {
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.goto('/daily');
  await expect(
    page.getByRole('button', { name: /^Start (flag )?round$/ }),
  ).toBeVisible();
  const isFlagDay =
    (await page.getByRole('button', { name: 'Start flag round' }).count()) > 0;
  await page
    .getByRole('button', {
      name: isFlagDay ? 'Start flag round' : 'Start round',
    })
    .click();
  const isNumberDay =
    (await page.getByRole('heading', { name: 'Number IQ' }).count()) > 0;
  const isGeoDay =
    (await page.getByRole('heading', { name: 'Geo Challenge' }).count()) > 0;
  const roundCount = isFlagDay || isNumberDay || isGeoDay ? 10 : 3;
  for (let round = 0; round < roundCount; round++) {
    if (isGeoDay)
      await page.locator('path[data-area-id]').first().dispatchEvent('click');
    else await page.getByRole('button', { name: /^A/ }).click();
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
          verificationStatus: 'VERIFIED',
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

test('profile history shows eight results per page from the latest fifty', async ({
  page,
}) => {
  const cors = {
    'access-control-allow-origin': 'http://localhost:3100',
    'access-control-allow-credentials': 'true',
  };
  const attempts = Array.from({ length: 52 }, (_, index) => ({
    id: `server-history-${index}`,
    score: 1000 - index,
    correctAnswers: 8,
    totalRounds: 10,
    verificationStatus: 'VERIFIED',
    completedAt: new Date(
      Date.UTC(2026, 9, 19, 12) - index * 60_000,
    ).toISOString(),
    mode: {
      code: 'classic',
      rulesVersion: 2,
      game: { code: 'flag-master' },
    },
  }));
  await page.route('**/flag-master/stats', (route) =>
    route.fulfill({
      json: {
        played: 52,
        correct: 416,
        wrong: 104,
        accuracy: 80,
        bestScore: 1000,
        rulesVersion: 2,
      },
      headers: cors,
    }),
  );
  await page.route('**/quiz-rounds/**/stats', (route) =>
    route.fulfill({ status: 401, json: {}, headers: cors }),
  );
  const requestedCursors: string[] = [];
  await page.route('**/game-attempts/me**', (route) => {
    const cursor = new URL(route.request().url()).searchParams.get('cursor');
    if (cursor) requestedCursors.push(cursor);
    return route.fulfill({
      json: {
        items: attempts.slice(0, 50),
        nextCursor: attempts[49].id,
      },
      headers: cors,
    });
  });

  await page.goto('/profile');
  const rows = page.getByRole('row');
  await expect(rows).toHaveCount(9);
  await expect(rows.nth(1)).toContainText('1000');
  await expect(
    page.getByRole('navigation', { name: 'Discovery pages' }),
  ).toContainText('Page 1 of 7');
  await expect(
    page.getByRole('button', { name: 'Previous page' }),
  ).toBeDisabled();
  for (let index = 0; index < 6; index++) {
    await page.getByRole('button', { name: 'Next page' }).click();
  }
  await expect(rows).toHaveCount(3);
  await expect(rows.nth(1)).toContainText('952');
  await expect(rows.nth(2)).toContainText('951');
  await expect(page.getByRole('button', { name: 'Next page' })).toBeDisabled();
  expect(requestedCursors).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test('profile hides history pagination when there are exactly eight results', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      'brainplay:demo-profile:v1',
      JSON.stringify({
        version: 1,
        nickname: 'Explorer',
        attempts: Array.from({ length: 8 }, (_, index) => ({
          id: `local-history-${index}`,
          game: 'flag-master',
          mode: 'practice',
          correct: 8,
          total: 10,
          score: 800,
          completedAt: new Date(
            Date.UTC(2026, 9, 19, 12) - index * 60_000,
          ).toISOString(),
          rulesVersion: 2,
        })),
      }),
    );
  });
  await page.route('**/game-attempts/me**', (route) =>
    route.fulfill({ status: 401, json: {} }),
  );
  await page.goto('/profile');
  await expect(page.getByRole('row')).toHaveCount(9);
  await expect(
    page.getByRole('navigation', { name: 'Discovery pages' }),
  ).toHaveCount(0);
});

test('profile shows both recent ten-question Geo Challenge results above older games', async ({
  page,
}) => {
  await page.route('http://localhost:5000/api/v1/**', (route) => route.abort());
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.setItem(
      'brainplay:demo-profile:v1',
      JSON.stringify({
        version: 1,
        nickname: 'Explorer',
        attempts: [
          {
            id: 'geo-19-later',
            game: 'geo-challenge',
            mode: 'practice',
            correct: 6,
            total: 10,
            score: 600,
            completedAt: '2026-10-19T14:00:00.000Z',
            rulesVersion: 2,
          },
          {
            id: 'geo-19-earlier',
            game: 'geo-challenge',
            mode: 'practice',
            correct: 7,
            total: 10,
            score: 700,
            completedAt: '2026-10-19T09:00:00.000Z',
            rulesVersion: 2,
          },
          {
            id: 'number-17',
            game: 'number-iq',
            mode: 'practice',
            correct: 3,
            total: 3,
            score: 300,
            completedAt: '2026-10-17T10:00:00.000Z',
          },
        ],
        totals: {
          'geo-challenge:2': {
            played: 2,
            correct: 13,
            total: 20,
            bestScore: 700,
          },
          'number-iq:1': {
            played: 1,
            correct: 3,
            total: 3,
            bestScore: 300,
          },
        },
      }),
    );
  });
  await page.goto('/profile');
  await expect(
    page
      .getByRole('link', { name: 'Let’s play — Geo Challenge' })
      .getByLabel('Games played: 2'),
  ).toBeVisible();
  const rows = page.getByRole('row');
  await expect(rows).toHaveCount(4);
  await expect(rows.nth(1)).toContainText('Geo Challenge');
  await expect(rows.nth(1)).toContainText('Oct 19');
  await expect(rows.nth(2)).toContainText('Geo Challenge');
  await expect(rows.nth(2)).toContainText('Oct 19');
  await expect(rows.nth(3)).toContainText('Oct 17');
});
