export const SITE_URL = 'https://quizroam.net';

export function isIndexable(
  env: Record<string, string | undefined> = process.env,
) {
  return (
    env.SEO_INDEXABLE === 'true' &&
    env.NODE_ENV === 'production' &&
    (!env.VERCEL_ENV || env.VERCEL_ENV === 'production')
  );
}
