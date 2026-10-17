'use client';

import { useState } from 'react';

import { useLocale } from '@/i18n/LocaleProvider';

import { getGeoAreas } from '@/services/demo/geo-map-data';

import type { GeoRegion, GeoViewport } from '@/shared/types/game.types';

const CORRECT_FILL = '#a4df65';
const WRONG_FILL = '#f16c65';

export function GeoMap({
  region,
  viewport,
  selected,
  correct,
  onSelect,
}: {
  region: GeoRegion;
  viewport: GeoViewport;
  selected: number | null;
  correct: number;
  onSelect: (index: number) => void;
}) {
  const { locale, t } = useLocale();
  const [hovered, setHovered] = useState<number | null>(null);
  const areas = getGeoAreas(region, viewport);
  const regionNames: Record<GeoRegion, string> = {
    africa: t.geoAfrica,
    asia: t.geoAsia,
    europe: t.geoEurope,
    'north-america': t.geoNorthAmerica,
    'south-america': t.geoSouthAmerica,
    oceania: t.geoOceania,
    usa: t.geoUnitedStates,
  };
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center">
        <span className="rounded-full bg-geo px-3 py-1.5 text-xs font-semibold text-geo-ink">
          {regionNames[region]}
        </span>
      </div>
      <div
        className="mx-auto w-full max-w-full overflow-hidden rounded-2xl border border-geo-ink/15 bg-[#a9d5df]"
        style={{ maxWidth: viewport.width }}
      >
        <svg
          role="group"
          aria-label={`${t.geoMapLabel}: ${regionNames[region]}`}
          viewBox={`0 0 ${viewport.width} ${viewport.height}`}
          className="block h-auto w-full touch-manipulation"
        >
          <rect
            width={viewport.width}
            height={viewport.height}
            fill="#a9d5df"
          />
          {areas.map((area, index) => {
            const isCorrect = selected !== null && index === correct;
            const isWrong = selected === index && index !== correct;
            return (
              <path
                key={area.id}
                data-area-id={area.id}
                d={area.path}
                fill={
                  isCorrect
                    ? CORRECT_FILL
                    : isWrong
                      ? WRONG_FILL
                      : hovered === index && selected === null
                        ? '#60ba86'
                        : '#237d50'
                }
                stroke={isCorrect ? '#267748' : isWrong ? '#ae4240' : '#c0e3de'}
                strokeWidth={isCorrect || isWrong ? 1.1 : 0.75}
                className="cursor-pointer transition-colors duration-150 focus:outline-2 focus:outline-offset-2 focus:outline-amber-300"
                role="button"
                tabIndex={selected === null ? 0 : -1}
                aria-label={area.name[locale]}
                aria-disabled={selected !== null}
                onPointerEnter={() => setHovered(index)}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                onClick={() => {
                  if (selected === null) onSelect(index);
                }}
                onKeyDown={(event) => {
                  if (selected !== null) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect(index);
                  }
                }}
              />
            );
          })}
        </svg>
      </div>
      {selected === null && (
        <p className="mt-2 text-xs text-muted-foreground">{t.geoMapHint}</p>
      )}
      {selected !== null && (
        <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span
              className="size-3 rounded-sm"
              style={{ backgroundColor: CORRECT_FILL }}
            />
            {t.geoCorrectMarker}
          </span>
          {selected !== correct && (
            <span className="inline-flex items-center gap-2">
              <span
                className="size-3 rounded-sm"
                style={{ backgroundColor: WRONG_FILL }}
              />
              {t.geoWrongMarker}
            </span>
          )}
        </div>
      )}
      <a
        href={
          region === 'usa'
            ? 'https://github.com/topojson/us-atlas'
            : 'https://github.com/topojson/world-atlas'
        }
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-xs text-muted-foreground underline underline-offset-2"
      >
        {t.geoMapSource}
      </a>
    </div>
  );
}
