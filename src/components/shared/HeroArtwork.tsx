import { Brain, Globe2, Lightbulb, MoveUpRight, Sparkles } from 'lucide-react';

export function HeroArtwork() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto hidden h-[260px] w-[310px] shrink-0 items-center justify-center md:flex"
    >
      <div className="absolute size-[230px] rounded-full border border-primary/15" />
      <div className="absolute size-[290px] rounded-full border border-dashed border-primary/15" />
      <div className="absolute size-[180px] rounded-full bg-accent/80" />
      <div className="relative flex size-32 rotate-[-8deg] items-center justify-center rounded-[35px] border-[5px] border-white bg-primary text-accent shadow-xl shadow-primary/15">
        <Brain size={76} strokeWidth={1.2} />
      </div>
      <div className="absolute top-4 right-5 flex size-20 rotate-12 items-center justify-center rounded-2xl border-4 border-white bg-time text-time-ink shadow-md">
        <Lightbulb size={38} strokeWidth={1.4} />
      </div>
      <div className="absolute bottom-6 left-1 flex size-[76px] rotate-[-14deg] items-center justify-center rounded-2xl border-4 border-white bg-flag text-flag-ink shadow-md">
        <Globe2 size={39} strokeWidth={1.4} />
      </div>
      <div className="absolute top-4 left-8 rounded-xl bg-white p-3 text-number-ink shadow-sm">
        <span className="text-2xl font-bold">2 + 2</span>
      </div>
      <div className="absolute right-2 bottom-6 flex rotate-6 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-sm">
        <span className="text-primary">a-ha!</span>
        <Sparkles className="text-time-ink" size={19} />
      </div>
      <Sparkles className="absolute top-24 right-1 text-peach" size={25} />
      <MoveUpRight
        className="absolute bottom-1 left-28 text-primary/40"
        size={23}
      />
    </div>
  );
}
