import assert from 'node:assert/strict';
import test from 'node:test';

import { GAMES } from '../src/constants/games.constants';
import { DEMO_QUESTIONS } from '../src/services/demo/demo.questions';
import { createFlagQuestions } from '../src/services/demo/flags/flag-questions';
import flagCatalog from '../src/services/demo/flags/flags.json';
import {
  NUMBER_QUESTION_BANK,
  createNumberQuestions,
} from '../src/services/demo/number-questions';
import type { DemoAttempt } from '../src/shared/types/game.types';
import {
  EMPTY_PROFILE,
  addAttempt,
  combinedGameStats,
  dailyGame,
  gameStats,
  numberTrophy,
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
test('Time Traveler has three fully translated valid questions', () => {
  for (const game of GAMES.filter((game) => game.code === 'time-traveler')) {
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
test('Number IQ has 300 distinct, explained puzzles across three difficulties', () => {
  assert.equal(NUMBER_QUESTION_BANK.length, 300);
  assert.equal(new Set(NUMBER_QUESTION_BANK.map((item) => item.id)).size, 300);
  assert.equal(
    new Set(NUMBER_QUESTION_BANK.map((item) => item.visual)).size,
    300,
  );
  for (const difficulty of ['easy', 'medium', 'hard'] as const) {
    assert.equal(
      NUMBER_QUESTION_BANK.filter((item) => item.difficulty === difficulty)
        .length,
      100,
    );
  }
  const positions = new Set<string>();
  for (const item of NUMBER_QUESTION_BANK) {
    assert.equal(item.options.length, 4, item.id);
    assert.equal(
      new Set(item.options.map((option) => option.en)).size,
      4,
      item.id,
    );
    assert.equal(
      Number(item.options[item.answer].en),
      item.terms[item.missingIndex],
      item.id,
    );
    assert.equal(item.visual?.split('?').length, 2, item.id);
    positions.add(
      item.missingIndex === 0
        ? 'first'
        : item.missingIndex === item.terms.length - 1
          ? 'last'
          : 'middle',
    );
    for (const locale of ['en', 'uk', 'ru'] as const) {
      assert.ok(item.prompt[locale], item.id);
      assert.ok(
        item.explanation?.[locale].includes(
          String(item.terms[item.missingIndex]),
        ),
        item.id,
      );
    }
  }
  assert.deepEqual([...positions].sort(), ['first', 'last', 'middle']);
  for (const level of ['mixed', 'easy', 'medium', 'hard'] as const) {
    const round = createNumberQuestions(level, '2026-10-17');
    assert.equal(round.length, 10);
    assert.equal(new Set(round.map((item) => item.id)).size, 10);
    assert.deepEqual(createNumberQuestions(level, '2026-10-17'), round);
    assert.ok(
      new Set(round.map((item) => item.family)).size >=
        (level === 'mixed' ? 10 : 4),
    );
    if (level !== 'mixed')
      assert.ok(round.every((item) => item.difficulty === level));
  }
});
test('ten-question Number IQ results persist without discarding older three-question rounds', () => {
  const oldRound = attempt({ id: 'old', correct: 3, total: 3, score: 300 });
  const newRound = attempt({
    id: 'new',
    correct: 10,
    total: 10,
    score: 1000,
    rulesVersion: 2,
  });
  const saved = parseProfile(
    JSON.stringify(addAttempt(addAttempt(EMPTY_PROFILE, oldRound), newRound)),
  );
  assert.equal(saved.attempts.length, 2);
  assert.equal(gameStats(saved, 'number-iq').bestScore, 1000);
  assert.equal(gameStats(saved, 'number-iq').played, 2);
  assert.equal(gameStats(saved, 'number-iq').total, 13);
  assert.equal(saved.totals?.['number-iq:1'].bestScore, 300);
});

test('Number IQ trophy follows the highest score and uses Mixed for equal scores', () => {
  let profile = EMPTY_PROFILE;
  for (const [level, score] of [
    ['easy', 100],
    ['medium', 400],
    ['hard', 300],
    ['mixed', 100],
  ] as const) {
    profile = addAttempt(
      profile,
      attempt({
        id: level,
        total: 10,
        correct: score / 100,
        score,
        rulesVersion: 2,
        numberLevel: level,
      }),
    );
  }
  assert.deepEqual(numberTrophy(profile), { level: 'medium', score: 400 });
  profile = addAttempt(
    profile,
    attempt({
      id: 'hard-tie',
      total: 10,
      correct: 4,
      score: 400,
      rulesVersion: 2,
      numberLevel: 'hard',
    }),
  );
  assert.deepEqual(numberTrophy(profile), { level: 'hard', score: 400 });
  profile = addAttempt(
    profile,
    attempt({
      id: 'mixed-tie',
      total: 10,
      correct: 4,
      score: 400,
      rulesVersion: 2,
      numberLevel: 'mixed',
    }),
  );
  assert.deepEqual(numberTrophy(parseProfile(JSON.stringify(profile))), {
    level: 'mixed',
    score: 400,
  });
  profile = addAttempt(
    profile,
    attempt({
      id: 'hard-perfect',
      total: 10,
      correct: 10,
      score: 1000,
      rulesVersion: 2,
      numberLevel: 'hard',
    }),
  );
  profile = addAttempt(
    profile,
    attempt({
      id: 'mixed-perfect',
      total: 10,
      correct: 10,
      score: 1000,
      rulesVersion: 2,
      numberLevel: 'mixed',
    }),
  );
  assert.deepEqual(numberTrophy(profile), { level: 'mixed', score: 1000 });
});

test('Number IQ trophy survives local history cap and upgrades older results as Mixed', () => {
  let profile = addAttempt(
    EMPTY_PROFILE,
    attempt({
      id: 'best',
      total: 10,
      correct: 9,
      score: 900,
      rulesVersion: 2,
      numberLevel: 'medium',
    }),
  );
  for (let index = 0; index < 105; index++)
    profile = addAttempt(
      profile,
      attempt({
        id: `later-${index}`,
        total: 10,
        correct: 0,
        score: 0,
        rulesVersion: 2,
        numberLevel: 'easy',
      }),
    );
  const restored = parseProfile(JSON.stringify(profile));
  assert.equal(restored.attempts.length, 100);
  assert.deepEqual(numberTrophy(restored), { level: 'medium', score: 900 });
  const legacy = parseProfile(
    JSON.stringify({
      version: 1,
      nickname: '',
      attempts: [],
      totals: {
        'number-iq:2': { played: 1, correct: 6, total: 10, bestScore: 600 },
      },
    }),
  );
  assert.deepEqual(numberTrophy(legacy), { level: 'mixed', score: 600 });
});

test('Flag Master card counts completed local and verified server rounds together', () => {
  const local = addAttempt(
    addAttempt(
      EMPTY_PROFILE,
      attempt({
        id: 'flag-old',
        game: 'flag-master',
        correct: 2,
        total: 3,
        score: 200,
      }),
    ),
    attempt({
      id: 'flag-demo',
      game: 'flag-master',
      correct: 6,
      total: 10,
      score: 600,
      rulesVersion: 2,
    }),
  );
  const restored = parseProfile(JSON.stringify(local));
  assert.equal(gameStats(restored, 'flag-master').played, 2);
  const summary = combinedGameStats(restored, 'flag-master', {
    played: 4,
    correct: 32,
    bestScore: 900,
  });
  assert.deepEqual(summary, {
    played: 6,
    correct: 40,
    total: 53,
    bestScore: 900,
  });
});
test('Flag Master has 195 translated flags and ten unique questions with four options', () => {
  assert.equal(flagCatalog.length, 195);
  assert.equal(new Set(flagCatalog.map((flag) => flag.code)).size, 195);
  for (const flag of flagCatalog) {
    for (const locale of ['en', 'ru', 'uk'] as const) {
      assert.ok(flag.name[locale].trim());
      assert.ok(flag.factBefore[locale].trim());
      assert.ok(flag.factAfter[locale].trim(), `${flag.code}: ${locale}`);
      assert.ok(
        flag.factAfter[locale].length > flag.factBefore[locale].length,
        `${flag.code}: post-answer fact should expand the teaser in ${locale}`,
      );
    }
    assert.ok(flag.source.startsWith('https://'));
  }
  for (const locale of ['en', 'ru', 'uk'] as const) {
    const teasers = flagCatalog.map((flag) => flag.factBefore[locale]);
    assert.equal(new Set(teasers).size, flagCatalog.length);
    assert.ok(
      teasers.filter((fact) => /(?:1\d{3}|20\d{2})/u.test(fact)).length <=
        Math.floor(flagCatalog.length / 10),
      `Too many year-based pre-answer facts in ${locale}`,
    );
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
