'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useLocale } from '@/i18n/LocaleProvider';

export function AuthFeedback() {
  const { t } = useLocale();
  useEffect(() => {
    const url = new URL(window.location.href);
    const result = url.searchParams.get('auth');
    if (result !== 'success' && result !== 'error') return;
    url.searchParams.delete('auth');
    window.history.replaceState(window.history.state, '', url);
    if (result === 'success') toast.success(t.googleSuccess);
    else toast.error(t.googleError);
  }, [t]);
  return null;
}
