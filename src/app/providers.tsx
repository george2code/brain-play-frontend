'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { AuthFeedback } from '@/components/auth/AuthFeedback';

import { LocaleProvider } from '@/i18n/LocaleProvider';

import type { Locale } from '@/shared/types/game.types';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60_000, retry: 1, refetchOnWindowFocus: false },
    },
  });
}
let browserClient: QueryClient | undefined;
function getQueryClient() {
  if (typeof window === 'undefined') return makeQueryClient();
  return (browserClient ??= makeQueryClient());
}
export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <LocaleProvider locale={locale}>
        <AuthFeedback />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{ className: 'font-sans text-sm' }}
        />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
