'use client';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Brain } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { authClient } from '@/api/session.client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useAuth } from '@/hooks/useAuth';

import { useLocale } from '@/i18n/LocaleProvider';

export function SignInDialog({
  compact = false,
  profileLink = false,
}: {
  compact?: boolean;
  profileLink?: boolean;
}) {
  const { t } = useLocale();
  const { registered } = useAuth();
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const config = useQuery({
    queryKey: ['auth-config'],
    queryFn: async () =>
      (await authClient.get<{ googleEnabled: boolean }>('/auth/config')).data,
    enabled: open,
    retry: false,
  });
  if (registered) return null;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant={compact ? 'outline' : 'default'}
            className={
              profileLink
                ? 'min-h-11 max-w-full rounded-xl px-4 py-2 text-center whitespace-normal'
                : 'h-11 rounded-xl px-4'
            }
          />
        }
      >
        {profileLink ? t.googleLinkAction : compact ? t.signIn : t.saveResult}
        <ArrowUpRight size={15} />
      </DialogTrigger>
      <DialogContent className="p-7 sm:max-w-md">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
          <Brain size={30} />
        </span>
        <DialogHeader>
          <DialogTitle className="text-2xl leading-tight">
            {profileLink ? t.googleLinkTitle : t.authTitle}
          </DialogTitle>
          <DialogDescription className="leading-relaxed">
            {profileLink ? t.googleLinkDescription : t.authDescription}
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          className="h-12"
          disabled={!config.data?.googleEnabled || busy}
          onClick={async () => {
            setBusy(true);
            try {
              const { data } = await authClient.post<{ url: string }>(
                '/auth/google',
                {},
              );
              const url = new URL(data.url);
              if (url.protocol !== 'https:')
                throw new Error('Invalid sign-in URL.');
              window.location.assign(url.href);
            } catch {
              toast.error(t.googleError);
              setBusy(false);
            }
          }}
        >
          <span aria-hidden="true" className="text-lg font-bold">
            G
          </span>
          {busy ? t.googleConnecting : t.google}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {config.data?.googleEnabled ? t.googlePrivacy : t.googleSoon}
        </p>
      </DialogContent>
    </Dialog>
  );
}
