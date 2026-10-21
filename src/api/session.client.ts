import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

import { API_BASE_URL } from '@/config/api.config';

// Tokens stay in HttpOnly cookies. One refresh serves concurrent profile/game requests.
export const authClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  withCredentials: true,
});
export const sessionClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  withCredentials: true,
});

let refresh: Promise<unknown> | undefined;
let guest: Promise<unknown> | undefined;

export function isUnauthorized(error: unknown) {
  return axios.isAxiosError(error) && error.response?.status === 401;
}

sessionClient.interceptors.response.use(undefined, async (error: unknown) => {
  if (!isUnauthorized(error) || !axios.isAxiosError(error) || !error.config)
    throw error;
  const config = error.config as InternalAxiosRequestConfig & {
    sessionRetried?: boolean;
  };
  if (config.sessionRetried) throw error;
  config.sessionRetried = true;
  refresh ??= authClient.post('/auth/refresh', {}).finally(() => {
    refresh = undefined;
  });
  await refresh;
  return sessionClient.request(config);
});

export async function withGuestSession<T>(
  operation: () => Promise<T>,
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    // Provider outages must not replace a registered user's identity with a guest.
    if (!isUnauthorized(error)) throw error;
  }
  guest ??= authClient
    .post('/auth/guest', {})
    .then(() => {
      window.dispatchEvent(new Event('brainplay:session-changed'));
    })
    .finally(() => {
      guest = undefined;
    });
  await guest;
  return operation();
}
