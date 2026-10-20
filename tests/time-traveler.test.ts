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
import { TIME_TRAVELER_VISUAL_OPTIONS } from '../src/services/demo/time-traveler-visual-options';

test('Time Traveler review round contains all 300 questions with four cards each', () => {
  const questions = createTimeTravelerQuestions('2026-10-19');
  assert.equal(questions.length, 300);
  assert.equal(new Set(questions.map((question) => question.id)).size, 300);
  assert.equal(
    new Set(questions.map((question) => question.cardIds[question.answer]))
      .size,
    200,
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

test('Time Traveler review covers 200 answers and its illustrated distractors across eras', () => {
  assert.ok(TWENTIETH_CENTURY_CARD_IDS.size >= 50);
  assert.ok(ANCIENT_CARD_IDS.size >= 50);
  assert.ok(TWENTIETH_CENTURY_CARD_IDS.has('ussr1991'));
  assert.ok(ANCIENT_CARD_IDS.has('tiwanaku'));
  const questions = createTimeTravelerQuestions();
  const answers = questions.map(
    (question) => question.cardIds[question.answer],
  );
  assert.ok(answers.some((answer) => TWENTIETH_CENTURY_CARD_IDS.has(answer)));
  assert.ok(answers.some((answer) => ANCIENT_CARD_IDS.has(answer)));
  for (const question of questions) {
    for (const locale of ['en', 'uk', 'ru'] as const) {
      assert.ok(question.prompt[locale]);
      assert.ok(question.factAfter?.[locale]);
    }
  }
  assert.equal(TIME_TRAVELER_QUESTION_COUNT, 300);
  assert.equal(TIME_CARD_IDS.length, 235);
  assert.equal(
    new Set(Object.values(TIME_CARDS).map((card) => card.image)).size,
    235,
  );
  for (const card of Object.values(TIME_CARDS)) {
    assert.ok(existsSync(join(process.cwd(), 'public', card.image.slice(1))));
  }
});

test('all unreviewed questions and flagged visual clues use thematic options', () => {
  const questions = createTimeTravelerQuestions();
  for (const question of questions.slice(174)) {
    assert.ok(
      TIME_TRAVELER_VISUAL_OPTIONS.has(question.id.slice(5)),
      question.id,
    );
  }
  for (const id of [
    'romeAqueduct',
    'shinkansenRoute',
    'bellTelephone',
    'mexicoOlympics',
    'fordModelT',
    'amundsenPole',
  ]) {
    const question = questions.find((item) => item.id === `time-${id}`);
    assert.ok(question, id);
    assert.deepEqual(
      new Set(question.cardIds),
      new Set(TIME_TRAVELER_VISUAL_OPTIONS.get(id)),
    );
  }
});

test('Time Traveler review order stays stable between sessions and dates', () => {
  assert.deepEqual(
    createTimeTravelerQuestions('2026-10-19'),
    createTimeTravelerQuestions('2026-10-19'),
  );
  assert.deepEqual(
    createTimeTravelerQuestions(),
    createTimeTravelerQuestions('2026-10-20'),
  );
});
