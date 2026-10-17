import Image from 'next/image';

import { useLocale } from '@/i18n/LocaleProvider';

export function QuestionVisual({ visual }: { visual?: string }) {
  const { locale, t } = useLocale();
  if (visual?.startsWith('flag:'))
    return (
      <Image
        src={`/flags/${visual.slice(5)}.svg`}
        alt={t.flagImage}
        width={240}
        height={180}
        unoptimized
        className="mx-auto my-8 h-36 w-60 rounded-lg border bg-white object-contain shadow-sm"
      />
    );
  const descriptions: Record<string, Record<string, string>> = {
    japan: {
      en: 'A red circle on a white field',
      uk: 'Червоне коло на білому тлі',
      ru: 'Красный круг на белом фоне',
    },
    ukraine: {
      en: 'Two horizontal stripes: blue above yellow',
      uk: 'Дві горизонтальні смуги: синя над жовтою',
      ru: 'Две горизонтальные полосы: синяя над жёлтой',
    },
    france: {
      en: 'Three vertical stripes: blue, white, red',
      uk: 'Три вертикальні смуги: синя, біла, червона',
      ru: 'Три вертикальные полосы: синяя, белая, красная',
    },
  };
  if (!visual || visual === 'geo') return null;
  if (!['japan', 'ukraine', 'france'].includes(visual))
    return (
      <p
        data-testid="question-visual"
        className="my-8 rounded-2xl bg-number/60 px-4 py-8 text-center text-2xl font-semibold tracking-wider text-number-ink sm:text-4xl"
      >
        {visual}
      </p>
    );
  // A neutral description keeps the answer out of accessible text.
  return (
    <svg
      role="img"
      aria-label={descriptions[visual][locale]}
      viewBox="0 0 240 144"
      className="mx-auto my-8 h-32 rounded-lg border shadow-sm"
    >
      {visual === 'japan' && (
        <>
          <rect width="240" height="144" fill="white" />
          <circle cx="120" cy="72" r="40" fill="#bc002d" />
        </>
      )}
      {visual === 'ukraine' && (
        <>
          <rect width="240" height="72" fill="#0057b7" />
          <rect y="72" width="240" height="72" fill="#ffd700" />
        </>
      )}
      {visual === 'france' && (
        <>
          <rect width="80" height="144" fill="#002654" />
          <rect x="80" width="80" height="144" fill="white" />
          <rect x="160" width="80" height="144" fill="#ed2939" />
        </>
      )}
    </svg>
  );
}
