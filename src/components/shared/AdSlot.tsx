'use client';
import { useLocale } from '@/i18n/LocaleProvider';

import { cn } from '@/lib/utils';

// Reserved layout only. AdSense requires publisher setup, consent and policy review.
export function AdSlot({
  format = 'banner',
}: {
  format?: 'banner' | 'rectangle';
}) {
  const { t } = useLocale();
  return (
    <aside
      aria-label={t.advertisement}
      data-ad-slot={format}
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-input bg-muted/30 text-center',
        format === 'rectangle' ? 'min-h-[250px] p-6' : 'min-h-[100px] px-5',
      )}
    >
      <span className="text-[9px] tracking-[.24em] text-muted-foreground">
        {t.advertisement}
      </span>
      <span className="text-xs text-muted-foreground/80">
        {t.adPlaceholder}
      </span>
      <span aria-hidden="true" className="text-[10px] text-muted-foreground/60">
        {format === 'rectangle' ? '300 × 250' : '728 × 90 / responsive'}
      </span>
    </aside>
  );
}
