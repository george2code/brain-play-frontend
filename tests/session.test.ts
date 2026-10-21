import { AxiosError } from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';

import {
  authClient,
  sessionClient,
  withGuestSession,
} from '../src/api/session.client';
import { readVerifiedHistory } from '../src/services/flag-master.service';

const originalAuth = authClient.defaults.adapter;
const originalSession = sessionClient.defaults.adapter;
afterEach(() => {
  authClient.defaults.adapter = originalAuth;
  sessionClient.defaults.adapter = originalSession;
});
function response(
  config: InternalAxiosRequestConfig,
  data: unknown,
  status = 200,
) {
  return { config, data, status, statusText: String(status), headers: {} };
}
function denied(config: InternalAxiosRequestConfig, status = 401) {
  return new AxiosError(
    'Request failed',
    'ERR_BAD_RESPONSE',
    config,
    undefined,
    response(config, {}, status),
  );
}

test('parallel private requests share one refresh and retry once', async () => {
  let refreshes = 0;
  let ready = false;
  authClient.defaults.adapter = async (config) => {
    refreshes++;
    await new Promise((resolve) => setTimeout(resolve, 20));
    ready = true;
    return response(config, { status: 'ready' });
  };
  sessionClient.defaults.adapter = async (config) => {
    if (!ready) throw denied(config);
    return response(config, { ok: true });
  };
  const results = await Promise.all(
    ['/users/me', '/flag-master/stats', '/game-attempts/me'].map((path) =>
      sessionClient.get(path),
    ),
  );
  assert.equal(refreshes, 1);
  assert.ok(results.every((result) => result.data.ok));
});

test('provider outages never create a guest or retry indefinitely', async () => {
  const authCalls: string[] = [];
  authClient.defaults.adapter = async (config) => {
    authCalls.push(config.url!);
    throw denied(config, 503);
  };
  sessionClient.defaults.adapter = async (config) => {
    throw denied(config);
  };
  await assert.rejects(
    withGuestSession(() => sessionClient.post('/quiz-rounds/number-iq', {})),
  );
  assert.deepEqual(authCalls, ['/auth/refresh']);
});

test('history retains old rule versions and discards incomplete records', async () => {
  const valid = {
    id: 'old-round',
    score: 100,
    correctAnswers: 1,
    totalRounds: 3,
    completedAt: '2026-10-15T12:00:00.000Z',
    verificationStatus: 'VERIFIED',
    mode: { code: 'classic', rulesVersion: 1, game: { code: 'flag-master' } },
  };
  sessionClient.defaults.adapter = async (config) =>
    response(config, {
      items: [
        valid,
        { ...valid, id: 'incomplete', completedAt: null },
        { ...valid, id: 'unverified', verificationStatus: 'PENDING' },
      ],
    });
  assert.deepEqual(
    (await readVerifiedHistory()).map((item) => item.id),
    ['old-round'],
  );
});
