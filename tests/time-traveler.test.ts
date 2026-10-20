import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

import {
  ANCIENT_CARD_IDS,
  TIME_CARDS,
  TIME_CARD_IDS,
  TIME_TRAVELER_QUESTION_COUNT,
  TWENTIETH_CENTURY_CARD_IDS,
  createTimeTravelerQuestions,
  timeCardCopy,
} from '../src/services/demo/time-traveler';

test('Time Traveler questions have four reusable cards and one answer', () => {
  const questions = createTimeTravelerQuestions('2026-10-19');
  assert.equal(questions.length, 4);
  assert.equal(new Set(questions.map((question) => question.id)).size, 4);
  assert.equal(
    new Set(questions.map((question) => question.cardIds[question.answer]))
      .size,
    4,
  );
  for (const question of questions) {
    assert.equal(question.cardIds.length, 4);
    assert.equal(new Set(question.cardIds).size, 4);
    assert.ok(question.answer >= 0 && question.answer < 4);
    assert.ok(question.factAfter);
    assert.ok(question.source);
    for (const cardId of question.cardIds) {
      assert.ok(TIME_CARDS[cardId].image);
      for (const locale of ['en', 'uk', 'ru'] as const) {
        assert.ok(timeCardCopy(cardId, locale).title);
        assert.ok(timeCardCopy(cardId, locale).dates);
      }
    }
  }
});

test('Time Traveler bank rotates through 300 questions and 200 illustrated cards across eras', () => {
  assert.ok(TWENTIETH_CENTURY_CARD_IDS.size >= 50);
  assert.ok(ANCIENT_CARD_IDS.size >= 50);
  assert.ok(TWENTIETH_CENTURY_CARD_IDS.has('ussr1991'));
  assert.ok(ANCIENT_CARD_IDS.has('tiwanaku'));
  const questionIds = new Set<string>();
  const correctCardIds = new Set<string>();
  for (let day = 0; day < 365; day++) {
    const date = new Date(Date.UTC(2026, 0, day + 1))
      .toISOString()
      .slice(0, 10);
    const questions = createTimeTravelerQuestions(date);
    const answers = questions.map(
      (question) => question.cardIds[question.answer],
    );
    assert.ok(answers.some((answer) => TWENTIETH_CENTURY_CARD_IDS.has(answer)));
    assert.ok(answers.some((answer) => ANCIENT_CARD_IDS.has(answer)));
    for (const question of questions) {
      questionIds.add(question.id);
      correctCardIds.add(question.cardIds[question.answer]);
      for (const locale of ['en', 'uk', 'ru'] as const) {
        assert.ok(question.prompt[locale]);
        assert.ok(question.factAfter?.[locale]);
      }
    }
  }
  assert.equal(TIME_TRAVELER_QUESTION_COUNT, 300);
  assert.equal(TIME_CARD_IDS.length, 200);
  assert.equal(
    new Set(Object.values(TIME_CARDS).map((card) => card.image)).size,
    200,
  );
  assert.ok(questionIds.size >= 280);
  assert.ok(correctCardIds.size >= 180);
  for (const card of Object.values(TIME_CARDS)) {
    assert.ok(existsSync(join(process.cwd(), 'public', card.image.slice(1))));
  }
});

test('daily Time Traveler order is stable', () => {
  assert.deepEqual(
    createTimeTravelerQuestions('2026-10-19'),
    createTimeTravelerQuestions('2026-10-19'),
  );
});
