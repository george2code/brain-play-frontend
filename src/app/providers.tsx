'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { LocaleProvider } from '@/i18n/LocaleProvider';

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
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <LocaleProvider>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{ className: 'font-sans text-sm' }}
        />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
