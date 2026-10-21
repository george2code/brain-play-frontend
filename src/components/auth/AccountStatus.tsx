'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  authClient,
  isUnauthorized,
  sessionClient,
} from '@/api/session.client';

import { SignInDialog } from '@/components/auth/SignInDialog';
import { Button } from '@/components/ui/button';

import { useAuth } from '@/hooks/useAuth';

import { useLocale } from '@/i18n/LocaleProvider';

function discardPrivateCaches() {
  // A full reload cancels in-flight requests and discards all account-scoped query data.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign('/profile');
}

export function AccountStatus() {
  const { user, registered, loading } = useAuth();
  const { t } = useLocale();
  const [busy, setBusy] = useState(false);
  return (
    <section className="flex flex-col items-start gap-5 rounded-2xl border border-primary/15 bg-hero p-6">
      <div>
        <h2 className="text-lg font-semibold">
          {registered ? t.googleConnected : t.googleLinkTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed break-words text-muted-foreground">
          {registered ? user?.email : t.googleLinkDescription}
        </p>
      </div>
      {registered ? (
        <Button
          variant="outline"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              // Use the refresh-aware client so expired access cookies can still sign out.
              await sessionClient.post('/auth/logout', {});
              discardPrivateCaches();
            } catch (error) {
              if (isUnauthorized(error)) {
                // Refresh clears invalid cookies. Reload also discards private query caches.
                await authClient
                  .post('/auth/logout', {})
                  .catch(() => undefined);
                discardPrivateCaches();
              } else {
                toast.error(t.googleError);
                setBusy(false);
              }
            }
          }}
        >
          {t.signOut}
        </Button>
      ) : !loading ? (
        <SignInDialog profileLink />
      ) : null}
    </section>
  );
}
