import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LocationPage1 from "@/app/location1/page";
import LocationPage2 from "@/app/location2/page";
import LocationPage3 from "@/app/location3/page";
import LocationPage4 from "@/app/location4/page";
import LocationPage5 from "@/app/location5/page";
import LocationPage6 from "@/app/location6/page";
import { siteUrl } from "@/lib/company";
import { locationSlugEntries } from "@/lib/location-links";

const locationPages = [
  {
    component: LocationPage1,
  },
  {
    component: LocationPage2,
  },
  {
    component: LocationPage3,
  },
  {
    component: LocationPage4,
  },
  {
    component: LocationPage5,
  },
  {
    component: LocationPage6,
  },
];

export function generateStaticParams() {
  return locationSlugEntries.map((entry) => ({
    location: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const match = locationSlugEntries.find((entry) => entry.slug === location);

  if (!match) {
    return {};
  }

  const page = locationPages[match.index - 1];
  const metaTitle = `Vehicle Hire ${match.label} | Cars, Vans, Minibuses & Trucks`;
  const areaLabel = match.county || match.region || match.label;
  const metaDescription = `Vehicle Hire ${match.label} with cars, vans, minibuses and trucks available across ${areaLabel}. Flexible booking, delivery options and practical rental support.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${siteUrl}/${location}`,
    },
  };
}

export default async function LocationSlugPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const match = locationSlugEntries.find((entry) => entry.slug === location);

  if (!match) {
    notFound();
  }

  const PageComponent = locationPages[match.index - 1].component;
  return <PageComponent />;
}
