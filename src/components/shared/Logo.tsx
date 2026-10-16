import { Brain } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="BrainPlay"
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <span className="flex size-10 rotate-[-7deg] items-center justify-center rounded-[14px] bg-primary text-white">
        <Brain size={25} strokeWidth={1.7} />
      </span>
      <span className="text-[23px] font-bold tracking-[-1px]">
        brain<span className="text-primary">play</span>
        <span className="text-peach">.</span>
      </span>
    </Link>
  );
}
