'use client';

import { useState } from 'react';

import { useLocale } from '@/i18n/LocaleProvider';

import { geoMapProjection, getGeoAreas } from '@/services/demo/geo-map-data';

import type { GeoRegion, GeoViewport } from '@/shared/types/game.types';

const CORRECT_FILL = '#a4df65';
const WRONG_FILL = '#f16c65';
const locatorViewports = {
  africa: { bounds: [-22, -37, 56, 40], width: 106, height: 76 },
  asia: { bounds: [25, -15, 180, 78], width: 106, height: 76 },
  europe: { bounds: [-20, 27, 55, 72], width: 106, height: 76 },
  'north-america': { bounds: [-170, 4, -47, 80], width: 106, height: 76 },
  'south-america': { bounds: [-83, -58, -33, 15], width: 106, height: 76 },
  oceania: { bounds: [95, -57, 180, 22], width: 106, height: 76 },
  usa: { bounds: [-127, 22, -66, 52], width: 106, height: 76 },
} as const satisfies Record<GeoRegion, GeoViewport>;

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
  const locatorViewport = locatorViewports[region];
  const locatorAreas = getGeoAreas(region, locatorViewport);
  const locatorProjection = geoMapProjection(locatorViewport);
  const [west, south, east, north] = viewport.bounds;
  const topLeft = locatorProjection([west, north]) ?? [0, 0];
  const bottomRight = locatorProjection([east, south]) ?? [0, 0];
  const smallAreas = areas
    .map((area, index) => ({ area, index }))
    .filter(({ area }) => {
      const [left, top, right, bottom] = area.bounds;
      return Math.min(right - left, bottom - top) < viewport.width * 0.13;
    })
    .sort(({ area: first }, { area: second }) => {
      const firstSize =
        (first.bounds[2] - first.bounds[0]) *
        (first.bounds[3] - first.bounds[1]);
      const secondSize =
        (second.bounds[2] - second.bounds[0]) *
        (second.bounds[3] - second.bounds[1]);
      return secondSize - firstSize;
    });
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
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="rounded-full bg-geo px-3 py-1.5 text-xs font-semibold text-geo-ink">
          {regionNames[region]}
        </span>
        {region !== 'south-america' && (
          <svg
            aria-hidden="true"
            viewBox={`0 0 ${locatorViewport.width} ${locatorViewport.height}`}
            className="h-[64px] w-[90px] shrink-0 rounded-lg bg-[#d7edf0]"
          >
            {locatorAreas.map((area) => (
              <path key={area.id} d={area.path} fill="#7aaf98" />
            ))}
            <rect
              x={Math.min(topLeft[0], bottomRight[0])}
              y={Math.min(topLeft[1], bottomRight[1])}
              width={Math.abs(bottomRight[0] - topLeft[0])}
              height={Math.abs(bottomRight[1] - topLeft[1])}
              fill="#f7b55444"
              stroke="#c66a20"
              strokeWidth="2"
            />
          </svg>
        )}
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
          {smallAreas.map(({ area, index }) => (
            <path
              key={`touch-${area.id}`}
              aria-hidden="true"
              d={area.path}
              fill="none"
              stroke="transparent"
              strokeWidth="24"
              vectorEffect="non-scaling-stroke"
              pointerEvents={selected === null ? 'stroke' : 'none'}
              className="cursor-pointer sm:hidden"
              onPointerEnter={() => setHovered(index)}
              onPointerLeave={() => setHovered(null)}
              onClick={() => {
                if (selected === null) onSelect(index);
              }}
            />
          ))}
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
