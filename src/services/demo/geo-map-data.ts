import { geoMercator, geoPath } from 'd3-geo';
import type { Feature, FeatureCollection, Geometry, MultiPoint } from 'geojson';
import { feature } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import usAtlas from 'us-atlas/states-10m.json';
import worldAtlas from 'world-atlas/countries-50m.json';
import countries from 'world-countries';

import type {
  GeoRegion,
  GeoViewport,
  Localized,
} from '@/shared/types/game.types';

export interface GeoArea {
  id: string;
  path: string;
  name: Localized;
}

const world = worldAtlas as unknown as Topology;
const us = usAtlas as unknown as Topology;
const worldFeatures = (
  feature(
    world,
    world.objects.countries as GeometryCollection,
  ) as FeatureCollection
).features;
const stateFeatures = (
  feature(us, us.objects.states as GeometryCollection) as FeatureCollection
).features;

const countryByNumber = new Map(
  countries
    .filter((country) => country.ccn3)
    .map((country) => [country.ccn3, country]),
);
const areaCache = new Map<string, GeoArea[]>();

function countryName(id: string, fallback: string): Localized {
  const code = countryByNumber.get(id)?.cca2;
  if (!code) return { en: fallback, uk: fallback, ru: fallback };
  return {
    en: new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? fallback,
    uk: new Intl.DisplayNames(['uk'], { type: 'region' }).of(code) ?? fallback,
    ru: new Intl.DisplayNames(['ru'], { type: 'region' }).of(code) ?? fallback,
  };
}

function inRegion(id: string, region: GeoRegion) {
  const country = countryByNumber.get(id);
  if (!country) return false;
  if (region === 'north-america')
    return (
      country.region === 'Americas' && country.subregion !== 'South America'
    );
  if (region === 'south-america') return country.subregion === 'South America';
  return country.region.toLowerCase() === region;
}

export const GEO_REGIONS: GeoRegion[] = [
  'africa',
  'asia',
  'europe',
  'north-america',
  'south-america',
  'oceania',
  'usa',
];

export function getGeoAreas(
  region: GeoRegion,
  viewport: GeoViewport,
): GeoArea[] {
  const key = `${region}:${viewport.bounds.join(',')}:${viewport.width}:${viewport.height}`;
  const cached = areaCache.get(key);
  if (cached) return cached;

  const isStates = region === 'usa';
  const features = (isStates ? stateFeatures : worldFeatures).filter((item) =>
    isStates ? true : inRegion(String(item.id).padStart(3, '0'), region),
  );
  const [west, south, east, north] = viewport.bounds;
  const bounds: MultiPoint = {
    type: 'MultiPoint',
    coordinates: [
      [west, south],
      [west, north],
      [east, south],
      [east, north],
    ],
  };
  const projection = geoMercator()
    .fitExtent(
      [
        [0, 0],
        [viewport.width, viewport.height],
      ],
      bounds,
    )
    .clipExtent([
      [0, 0],
      [viewport.width, viewport.height],
    ]);
  const path = geoPath(projection);
  const areas = new Map<string, GeoArea>();
  for (const item of features) {
    const id = isStates
      ? String(item.id).padStart(2, '0')
      : String(item.id).padStart(3, '0');
    const outline = path(item as Feature<Geometry>);
    if (!outline) continue;
    const existing = areas.get(id);
    if (existing) {
      existing.path += outline;
      continue;
    }
    const fallback = String(item.properties?.name ?? id);
    areas.set(id, {
      id,
      path: outline,
      name: isStates
        ? { en: fallback, uk: fallback, ru: fallback }
        : countryName(id, fallback),
    });
  }
  const result = [...areas.values()];
  areaCache.set(key, result);
  return result;
}
