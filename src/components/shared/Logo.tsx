import { Brain } from 'lucide-react';

import Link from '@/components/shared/LocalizedLink';

import { brand } from '@/i18n/dictionaries';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={brand.name}
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <span className="flex size-10 rotate-[-7deg] items-center justify-center rounded-[14px] bg-primary text-white">
        <Brain size={25} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span
        className="text-[23px] font-bold tracking-[-1px] text-black"
        aria-hidden="true"
      >
        {brand.prefix}
        <span className="text-primary">{brand.suffix}</span>
        <span className="text-peach">.</span>
      </span>
    </Link>
  );
}
