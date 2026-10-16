'use client';
import { Button } from '@/components/ui/button';

import { useLocale } from '@/i18n/LocaleProvider';

export default function ErrorPage({ reset }: { reset: () => void }) {
  const { t } = useLocale();
  return (
    <section className="page-container py-20 text-center">
      <h1 className="section-title mb-7">{t.errorTitle}</h1>
      <Button className="h-11 px-6" onClick={reset}>
        {t.retry}
      </Button>
    </section>
  );
}
