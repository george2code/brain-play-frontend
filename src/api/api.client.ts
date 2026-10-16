import axios from 'axios';

import { API_BASE_URL } from '@/config/api.config';

// Public catalog client. Private services receive a session-scoped client explicitly.
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: { Accept: 'application/json' },
});
// Auth orchestration is not available in the backend yet. Never persist tokens in localStorage.
export function createAuthenticatedClient(accessToken: string) {
  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 15_000,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
