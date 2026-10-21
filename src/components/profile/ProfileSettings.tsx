'use client';
import { useQueryClient } from '@tanstack/react-query';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { sessionClient } from '@/api/session.client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { useAuth } from '@/hooks/useAuth';
import { useDemoProfile } from '@/hooks/useDemoProfile';

import { useLocale } from '@/i18n/LocaleProvider';

export function ProfileSettings() {
  const { profile, rename, reset } = useDemoProfile();
  const { t } = useLocale();
  const { user } = useAuth();
  const client = useQueryClient();
  const [saving, setSaving] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [nickname, setNickname] = useState(profile.nickname);
  return (
    <div className="flex flex-wrap gap-2">
      <Dialog
        open={editOpen}
        onOpenChange={(open) => {
          setEditOpen(open);
          if (open) setNickname(user?.nickname || profile.nickname);
        }}
      >
        <DialogTrigger
          render={<Button variant="outline" className="h-11 px-4" />}
        >
          <Pencil size={15} />
          {t.editProfile}
        </DialogTrigger>
        <DialogContent className="p-6">
          <DialogHeader>
            <DialogTitle>{t.editProfile}</DialogTitle>
            <DialogDescription>{t.nicknameHint}</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (nickname.trim().length < 2) return;
              setSaving(true);
              try {
                if (user) {
                  await sessionClient.patch('/users/me', {
                    nickname: nickname.trim(),
                  });
                  await client.invalidateQueries({
                    queryKey: ['auth-profile'],
                  });
                } else rename(nickname);
                setEditOpen(false);
                toast.success(t.saved);
              } catch {
                toast.error(t.googleError);
              } finally {
                setSaving(false);
              }
            }}
          >
            <label
              htmlFor="nickname"
              className="mb-2 block text-sm font-medium"
            >
              {t.nickname}
            </label>
            <Input
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              minLength={2}
              maxLength={24}
              required
              autoComplete="nickname"
              className="h-11"
            />
            <Button
              type="submit"
              disabled={saving || nickname.trim().length < 2}
              className="mt-4 h-11 w-full"
            >
              {t.save}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <AlertDialog open={resetOpen} onOpenChange={setResetOpen}>
        <AlertDialogTrigger
          render={
            <Button variant="ghost" className="h-11 text-muted-foreground" />
          }
        >
          <Trash2 size={15} />
          {t.reset}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.resetTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.resetDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="min-h-11">
              {t.cancel}
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              className="min-h-11"
              onClick={() => {
                setResetOpen(false);
                reset();
              }}
            >
              {t.resetConfirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
