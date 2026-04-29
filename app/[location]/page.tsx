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
    metaTitle: "{{LOCATION1_META_TITLE}}",
    metaDescription: "{{LOCATION1_META_DESCRIPTION}}",
  },
  {
    component: LocationPage2,
    metaTitle: "{{LOCATION2_META_TITLE}}",
    metaDescription: "{{LOCATION2_META_DESCRIPTION}}",
  },
  {
    component: LocationPage3,
    metaTitle: "{{LOCATION3_META_TITLE}}",
    metaDescription: "{{LOCATION3_META_DESCRIPTION}}",
  },
  {
    component: LocationPage4,
    metaTitle: "{{LOCATION4_META_TITLE}}",
    metaDescription: "{{LOCATION4_META_DESCRIPTION}}",
  },
  {
    component: LocationPage5,
    metaTitle: "{{LOCATION5_META_TITLE}}",
    metaDescription: "{{LOCATION5_META_DESCRIPTION}}",
  },
  {
    component: LocationPage6,
    metaTitle: "{{LOCATION6_META_TITLE}}",
    metaDescription: "{{LOCATION6_META_DESCRIPTION}}",
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

  return {
    title: page.metaTitle,
    description: page.metaDescription,
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
