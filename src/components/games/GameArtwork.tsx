import { cn } from '@/lib/utils';

import type { GameCode } from '@/shared/types/game.types';

const themes: Record<GameCode, string> = {
  'geo-challenge': 'bg-geo text-geo-ink',
  'number-iq': 'bg-number text-number-ink',
  'time-traveler': 'bg-time text-time-ink',
  'flag-master': 'bg-flag text-flag-ink',
};

export function GameArtwork({
  code,
  className,
}: {
  code: GameCode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative isolate flex h-44 items-center justify-center overflow-hidden',
        themes[code],
        className,
      )}
    >
      <div className="dot-texture absolute inset-0 opacity-10" />
      <svg
        viewBox="0 0 360 180"
        className="relative h-full w-full max-w-[430px] overflow-visible"
        fill="none"
      >
        {code === 'geo-challenge' && (
          <>
            <ellipse
              cx="184"
              cy="160"
              rx="74"
              ry="9"
              fill="currentColor"
              opacity=".08"
            />
            <g transform="rotate(-14 180 90)">
              <circle
                cx="180"
                cy="87"
                r="65"
                fill="var(--card)"
                fillOpacity=".7"
              />
              <circle
                cx="180"
                cy="87"
                r="65"
                stroke="currentColor"
                strokeWidth="2"
                opacity=".3"
              />
              <ellipse
                cx="180"
                cy="87"
                rx="30"
                ry="65"
                stroke="currentColor"
                opacity=".2"
              />
              <path
                d="M115 87h130M126 52h108M126 122h108M180 22v130"
                stroke="currentColor"
                opacity=".2"
              />
              <path
                d="m141 31 19-7 13 7-2 16-18 8 5 17-16 7-19-15 2-17Zm21 51 20 2 12 17-10 22-9 19-10-18-7-24Zm35-43 18-3 18 19-3 13-14-5-10 18-15-8-3-21Zm20 66 16 4 7 15-16 12-16-7Z"
                fill="currentColor"
                opacity=".65"
              />
            </g>
            <g transform="rotate(10 246 61)">
              <rect
                x="223"
                y="32"
                width="52"
                height="62"
                rx="12"
                fill="var(--card)"
              />
              <path
                d="M249 45c-9 0-14 6-14 13 0 10 14 21 14 21s14-11 14-21c0-7-5-13-14-13Z"
                fill="var(--peach)"
              />
              <circle cx="249" cy="58" r="5" fill="var(--card)" />
            </g>
            <path
              d="m86 95 6-6m-6 0 6 6M274 125l7-7m-7 0 7 7"
              stroke="currentColor"
              strokeWidth="2"
              opacity=".6"
            />
            <circle cx="99" cy="43" r="4" fill="var(--peach)" />
          </>
        )}
        {code === 'number-iq' && (
          <>
            <ellipse
              cx="181"
              cy="160"
              rx="90"
              ry="8"
              fill="currentColor"
              opacity=".07"
            />
            <path
              d="M64 104c40-73 178 84 233-38"
              stroke="currentColor"
              strokeDasharray="5 6"
              opacity=".3"
            />
            {[
              { x: 77, y: 63, n: '2', r: -12 },
              { x: 133, y: 42, n: '4', r: -4 },
              { x: 190, y: 62, n: '8', r: 8 },
              { x: 247, y: 39, n: '?', r: 16 },
            ].map(({ x, y, n, r }) => (
              <g key={n} transform={`rotate(${r} ${x + 26} ${y + 31})`}>
                <rect
                  x={x + 2}
                  y={y + 5}
                  width="55"
                  height="65"
                  rx="12"
                  fill="currentColor"
                  opacity=".16"
                />
                <rect
                  x={x}
                  y={y}
                  width="55"
                  height="65"
                  rx="12"
                  fill={n === '?' ? 'currentColor' : 'var(--card)'}
                />
                <text
                  x={x + 27}
                  y={y + 44}
                  textAnchor="middle"
                  fill={n === '?' ? 'var(--card)' : 'currentColor'}
                  fontSize="35"
                  fontWeight="600"
                >
                  {n}
                </text>
              </g>
            ))}
            <path
              d="M105 35v12m-6-6h12M235 135v12m-6-6h12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="306" cy="116" r="4" fill="var(--peach)" />
          </>
        )}
        {code === 'time-traveler' && (
          <>
            <ellipse
              cx="180"
              cy="160"
              rx="95"
              ry="8"
              fill="currentColor"
              opacity=".08"
            />
            <path
              d="M63 129h233"
              stroke="currentColor"
              strokeDasharray="4 5"
              opacity=".4"
            />
            <g transform="rotate(-9 112 95)">
              <rect
                x="71"
                y="55"
                width="78"
                height="80"
                rx="10"
                fill="var(--card)"
              />
              <path
                d="m82 82 28-15 28 15Zm7 6v28m14-28v28m14-28v28m14-28v28m-49 5h55"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <text
                x="110"
                y="148"
                textAnchor="middle"
                fill="currentColor"
                fontSize="11"
              >
                ANCIENT
              </text>
            </g>
            <g transform="rotate(8 246 96)">
              <rect
                x="214"
                y="57"
                width="66"
                height="78"
                rx="10"
                fill="var(--card)"
              />
              <path
                d="m247 71-8 10-3 23h21l-3-23Zm-11 28-9 12h10m20-12 9 12h-10m-14-2-2 10m12-10 2 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <circle cx="247" cy="87" r="4" fill="var(--peach)" />
              <text
                x="248"
                y="148"
                textAnchor="middle"
                fill="currentColor"
                fontSize="11"
              >
                MODERN
              </text>
            </g>
            <g>
              <circle
                cx="180"
                cy="73"
                r="36"
                fill="var(--time)"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="180" cy="73" r="29" fill="var(--card)" />
              <path
                d="M180 53v21l13 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="180" cy="73" r="3" fill="var(--peach)" />
            </g>
            <path d="m75 32 4-8 4 8 8 4-8 4-4 8-4-8-8-4Z" fill="var(--peach)" />
          </>
        )}
        {code === 'flag-master' && (
          <>
            <ellipse
              cx="180"
              cy="157"
              rx="93"
              ry="8"
              fill="currentColor"
              opacity=".08"
            />
            <g transform="rotate(-16 111 87)">
              <rect
                x="62"
                y="48"
                width="91"
                height="66"
                rx="9"
                fill="var(--card)"
              />
              <path d="M69 55h25v52H69Z" fill="#385a98" />
              <path d="M121 55h25v52h-25Z" fill="#d87f76" />
            </g>
            <g transform="rotate(15 249 88)">
              <rect
                x="207"
                y="50"
                width="91"
                height="66"
                rx="9"
                fill="var(--card)"
              />
              <path d="M214 57h77v26h-77Z" fill="#6a9bc9" />
              <path d="M214 83h77v26h-77Z" fill="#edc76f" />
            </g>
            <g transform="rotate(-3 180 105)">
              <rect
                x="128"
                y="71"
                width="107"
                height="75"
                rx="10"
                fill="currentColor"
                opacity=".12"
              />
              <rect
                x="125"
                y="65"
                width="107"
                height="75"
                rx="10"
                fill="var(--card)"
              />
              <circle cx="179" cy="102" r="19" fill="#ce6c69" />
            </g>
            <path
              d="M176 22v12m-6-6h12M291 130v10m-5-5h10"
              stroke="currentColor"
              strokeWidth="2"
              opacity=".5"
            />
            <circle cx="69" cy="137" r="4" fill="var(--peach)" />
          </>
        )}
      </svg>
    </div>
  );
}
