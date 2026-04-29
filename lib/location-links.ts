import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "{{MAIN_LOCATION_NAME}}",
  href: "/",
};

type LocationMetadata = {
  label: string;
  href: string;
  county: string;
  region: string;
  population: string;
};

const mainLocationMetadata: LocationMetadata = {
  label: "{{MAIN_LOCATION_NAME}}",
  href: "/",
  county: "{{MAIN_LOCATION_COUNTY}}",
  region: "{{MAIN_LOCATION_REGION}}",
  population: "{{MAIN_LOCATION_POPULATION}}",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "{{LOCATION_1_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_1_NAME}}")}`,
    county: "{{LOCATION_1_COUNTY}}",
    region: "{{LOCATION_1_REGION}}",
    population: "{{LOCATION_1_POPULATION}}",
  },
  {
    label: "{{LOCATION_2_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_2_NAME}}")}`,
    county: "{{LOCATION_2_COUNTY}}",
    region: "{{LOCATION_2_REGION}}",
    population: "{{LOCATION_2_POPULATION}}",
  },
  {
    label: "{{LOCATION_3_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_3_NAME}}")}`,
    county: "{{LOCATION_3_COUNTY}}",
    region: "{{LOCATION_3_REGION}}",
    population: "{{LOCATION_3_POPULATION}}",
  },
  {
    label: "{{LOCATION_4_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_4_NAME}}")}`,
    county: "{{LOCATION_4_COUNTY}}",
    region: "{{LOCATION_4_REGION}}",
    population: "{{LOCATION_4_POPULATION}}",
  },
  {
    label: "{{LOCATION_5_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_5_NAME}}")}`,
    county: "{{LOCATION_5_COUNTY}}",
    region: "{{LOCATION_5_REGION}}",
    population: "{{LOCATION_5_POPULATION}}",
  },
  {
    label: "{{LOCATION_6_NAME}}",
    href: `/${slugifyLocation("{{LOCATION_6_NAME}}")}`,
    county: "{{LOCATION_6_COUNTY}}",
    region: "{{LOCATION_6_REGION}}",
    population: "{{LOCATION_6_POPULATION}}",
  },
];

export const nearbyLocationLinks = LOCATION_METADATA.map(({ label, href }) => ({
  label,
  href,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentHref = currentLocationLabel ? `/${slugifyLocation(currentLocationLabel)}` : "/";
  const filteredNearbyLinks = nearbyLocationLinks.filter((location) => location.href !== currentHref);

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_METADATA.map(({ label }, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}));
