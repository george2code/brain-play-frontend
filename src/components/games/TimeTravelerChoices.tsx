'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';

import { useLocale } from '@/i18n/LocaleProvider';

import { cn } from '@/lib/utils';

import {
  TIME_CARDS,
  type TimeTravelerQuestion,
  timeCardCopy,
} from '@/services/demo/time-traveler';

interface Props {
  question: TimeTravelerQuestion;
  selected: number | null;
  onSelect: (answer: number) => void;
}

export function TimeTravelerChoices({ question, selected, onSelect }: Props) {
  const { locale } = useLocale();

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        {question.cardIds.map((cardId, answer) => {
          const card = TIME_CARDS[cardId];
          const copy = timeCardCopy(cardId, locale);
          const revealed = selected !== null;
          const isCorrect = revealed && answer === question.answer;
          const isWrong = revealed && answer === selected && !isCorrect;
          return (
            <button
              key={`${question.id}-${cardId}`}
              type="button"
              aria-pressed={selected === answer}
              disabled={revealed}
              onClick={() => onSelect(answer)}
              className={cn(
                'group relative flex min-w-0 cursor-pointer flex-col overflow-hidden border-4 bg-card text-left shadow-sm transition-colors disabled:cursor-default focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring',
                isCorrect
                  ? 'border-primary bg-accent'
                  : isWrong
                    ? 'border-destructive bg-destructive/5'
                    : 'border-time-card-frame',
                !revealed &&
                  'hover:border-time-card-frame-hover hover:bg-time-card-hover',
              )}
            >
              <span className="relative m-1.5 block aspect-[4/3] w-[calc(100%-0.75rem)] overflow-hidden sm:m-2 sm:w-[calc(100%-1rem)]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 45vw, 300px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex w-full flex-1 flex-col items-center justify-center px-2 pt-1 pb-3 text-center sm:px-4">
                <span className="flex items-center gap-1.5 text-sm leading-tight font-semibold sm:text-base">
                  {copy.title}
                  {isCorrect && (
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                  )}
                </span>
                <span className="mt-1 min-h-8 text-xs leading-tight text-muted-foreground sm:text-sm">
                  {revealed ? copy.dates : '\u00a0'}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
