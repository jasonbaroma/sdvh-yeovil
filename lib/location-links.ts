import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Yeovil",
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
  label: "Yeovil",
  href: "/",
  county: "Somerset",
  region: "South West England",
  population: "49701",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Ilminster",
    href: `/${slugifyLocation("Ilminster")}`,
    county: "Somerset",
    region: "South West England",
    population: "5808",
  },
  {
    label: "Crewkerne",
    href: `/${slugifyLocation("Crewkerne")}`,
    county: "Somerset",
    region: "South West England",
    population: "8177",
  },
  {
    label: "Street",
    href: `/${slugifyLocation("Street")}`,
    county: "Somerset",
    region: "South West England",
    population: "11705",
  },
  {
    label: "Chard",
    href: `/${slugifyLocation("Chard")}`,
    county: "Somerset",
    region: "South West England",
    population: "13074",
  },
  {
    label: "Langport",
    href: `/${slugifyLocation("Langport")}`,
    county: "Somerset",
    region: "South West England",
    population: "3681",
  },
  {
    label: "Somerton",
    href: `/${slugifyLocation("Somerton")}`,
    county: "Somerset",
    region: "South West England",
    population: "4702",
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
  county: LOCATION_METADATA[index]?.county ?? "",
  region: LOCATION_METADATA[index]?.region ?? "",
  slug: slugifyLocation(label),
}));
export { mainLocationMetadata };
