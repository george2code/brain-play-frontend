'use client';
import { ArrowUpRight, Brain } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useLocale } from '@/i18n/LocaleProvider';

export function SignInDialog({
  compact = false,
  profileLink = false,
}: {
  compact?: boolean;
  profileLink?: boolean;
}) {
  const { t } = useLocale();
  return (
    <Dialog>
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
        <Button variant="outline" className="h-12" disabled>
          <span aria-hidden="true" className="text-lg font-bold">
            G
          </span>
          {t.google}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {t.googleSoon}
        </p>
      </DialogContent>
    </Dialog>
  );
}
