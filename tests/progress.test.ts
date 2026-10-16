import assert from 'node:assert/strict';
import test from 'node:test';

import { GAMES } from '../src/constants/games.constants';
import { DEMO_QUESTIONS } from '../src/services/demo/demo.questions';
import { createFlagQuestions } from '../src/services/demo/flags/flag-questions';
import flagCatalog from '../src/services/demo/flags/flags.json';
import type { DemoAttempt } from '../src/shared/types/game.types';
import {
  EMPTY_PROFILE,
  addAttempt,
  dailyGame,
  gameStats,
  parseProfile,
  progressStats,
  utcDay,
} from '../src/utils/progress.utils';

const attempt = (overrides: Partial<DemoAttempt> = {}): DemoAttempt => ({
  id: 'a',
  game: 'number-iq',
  mode: 'practice',
  score: 200,
  correct: 2,
  total: 3,
  completedAt: '2026-10-15T10:00:00.000Z',
  ...overrides,
});
test('malformed and older browser data never breaks rendering', () => {
  for (const raw of [
    null,
    'invalid',
    '{}',
    'null',
    '{"version":2}',
    '{"version":1,"nickname":4,"attempts":[]}',
  ])
    assert.deepEqual(parseProfile(raw), EMPTY_PROFILE);
  const parsed = parseProfile(
    JSON.stringify({
      version: 1,
      nickname: '  Test  ',
      attempts: [null, {}, attempt({ score: 10000 }), attempt()],
    }),
  );
  assert.equal(parsed.nickname, 'Test');
  assert.equal(parsed.attempts.length, 1);
});
test('finishing the same round twice or replaying a daily cannot duplicate progress', () => {
  const first = addAttempt(EMPTY_PROFILE, attempt());
  assert.equal(addAttempt(first, attempt()).attempts.length, 1);
  const daily = addAttempt(
    first,
    attempt({ id: 'daily', mode: 'daily', dailyDate: '2026-10-15' }),
  );
  assert.equal(
    addAttempt(
      daily,
      attempt({ id: 'another', mode: 'daily', dailyDate: '2026-10-15' }),
    ).attempts.length,
    2,
  );
  assert.equal(
    addAttempt(
      daily,
      attempt({ id: 'next', mode: 'daily', dailyDate: '2026-10-16' }),
    ).attempts.length,
    3,
  );
});
test('streak counts unique UTC days, survives yesterday and expires after a missed day', () => {
  const attempts = [
    attempt(),
    attempt({ id: 'b' }),
    attempt({ id: 'c', completedAt: '2026-10-14T23:59:00Z' }),
  ];
  assert.equal(progressStats(attempts, '2026-10-15').streak, 2);
  assert.equal(progressStats(attempts, '2026-10-16').streak, 2);
  assert.equal(progressStats(attempts, '2026-10-17').streak, 0);
  assert.equal(progressStats(attempts, '2026-10-15').accuracy, 67);
  assert.equal(progressStats([], '2026-10-15').accuracy, 0);
  assert.equal(utcDay(new Date('2026-10-16T00:30:00+03:00')), '2026-10-15');
});
test('daily pick is deterministic and rotates through all four games', () => {
  const codes = new Set(
    [15, 16, 17, 18].map((day) => dailyGame(`2026-10-${day}`).code),
  );
  assert.equal(codes.size, 4);
  assert.equal(dailyGame('2026-10-15').code, dailyGame('2026-10-15').code);
});
test('other demos have three fully translated valid questions', () => {
  for (const game of GAMES.filter((game) => game.code !== 'flag-master')) {
    assert.equal(DEMO_QUESTIONS[game.code].length, 3);
    for (const question of DEMO_QUESTIONS[game.code]) {
      assert.ok(
        question.answer >= 0 && question.answer < question.options.length,
      );
      for (const locale of ['en', 'uk', 'ru'] as const) {
        assert.ok(question.prompt[locale]);
        assert.ok(question.options.every((option) => option[locale]));
      }
    }
  }
});
test('Flag Master has 195 translated flags and ten unique questions with four options', () => {
  assert.equal(flagCatalog.length, 195);
  assert.equal(new Set(flagCatalog.map((flag) => flag.code)).size, 195);
  for (const flag of flagCatalog) {
    for (const locale of ['en', 'ru', 'uk'] as const) {
      assert.ok(flag.name[locale].trim());
      assert.ok(flag.factBefore[locale].trim());
      assert.ok(flag.factAfter[locale].trim(), `${flag.code}: ${locale}`);
    }
    assert.ok(flag.source.startsWith('https://'));
  }
  const questions = createFlagQuestions('2026-10-16');
  assert.equal(questions.length, 10);
  assert.equal(new Set(questions.map((question) => question.id)).size, 10);
  for (const question of questions) {
    assert.equal(question.options.length, 4);
    assert.ok(question.answer >= 0 && question.answer < 4);
  }
  assert.deepEqual(createFlagQuestions('2026-10-16'), questions);
});
test('flag best and accuracy survive the 100-attempt local history cap', () => {
  let profile = EMPTY_PROFILE;
  for (let index = 0; index < 105; index++) {
    profile = addAttempt(
      profile,
      attempt({
        id: `flag-${index}`,
        game: 'flag-master',
        correct: index === 0 ? 10 : 1,
        total: 10,
        score: index === 0 ? 1000 : 100,
        rulesVersion: 2,
      }),
    );
  }
  const restored = parseProfile(JSON.stringify(profile));
  const stats = gameStats(restored, 'flag-master');
  assert.equal(restored.attempts.length, 100);
  assert.equal(stats.played, 105);
  assert.equal(stats.bestScore, 1000);
  assert.equal(stats.correct, 114);
  assert.equal(stats.total, 1050);
});
