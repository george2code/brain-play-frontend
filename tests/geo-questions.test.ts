import assert from 'node:assert/strict';
import test from 'node:test';

import { GEO_REGIONS, getGeoAreas } from '../src/services/demo/geo-map-data';
import { createGeoQuestions } from '../src/services/demo/geo-questions';

test('every geography question has a selectable target on its map', () => {
  const seen = new Set<string>();
  for (let day = 1; day <= 31; day++) {
    const date = `2026-10-${String(day).padStart(2, '0')}`;
    const questions = createGeoQuestions(date);
    assert.equal(questions.length, 10);
    assert.equal(new Set(questions.map((question) => question.id)).size, 10);
    assert.deepEqual(
      new Set(questions.map((question) => question.mapRegion)),
      new Set(GEO_REGIONS),
    );
    for (const question of questions) {
      seen.add(question.id);
      const areas = getGeoAreas(question.mapRegion, question.viewport);
      assert.equal(new Set(areas.map((area) => area.id)).size, areas.length);
      assert.ok(
        areas.length >= 10,
        `${question.id} needs enough visible places to choose from`,
      );
      assert.equal(areas[question.answer].id, question.targetId);
      assert.ok(areas[question.answer].path.length > 0);
      const [left, top, right, bottom] = areas[question.answer].bounds;
      assert.ok(right > left && bottom > top);
      assert.ok(question.viewport.width > 0);
      assert.ok(question.viewport.height > 0);
    }
  }
  assert.equal(seen.size, 24);
});

test('daily geography questions repeat for the same UTC date', () => {
  assert.deepEqual(
    createGeoQuestions('2026-10-17'),
    createGeoQuestions('2026-10-17'),
  );
});
