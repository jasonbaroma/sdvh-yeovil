import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { resolvedMainLocationName } from "@/lib/company";

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = `Vehicle Hire ${resolvedMainLocationName} | Cars, Vans, Minibuses & Trucks`;
  const metaDescription = `Vehicle hire in ${resolvedMainLocationName} for cars, vans, minibuses and trucks. Practical self-drive options with flexible booking, local support and wide area coverage.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: "/",
    },
  };
}

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Modern estate car travelling on a tree-lined rural road in the Yeovil area at golden hour",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Yeovil"
      heroDescription="From compact cars to Luton vans, minibuses and larger trucks, we help drivers in Yeovil find practical self-drive hire for business use, local moves and longer UK journeys."
      serviceAreasTitle="Vehicle hire coverage around Yeovil"
      serviceAreasDescription="From Yeovil we cover surrounding Somerset towns and nearby routes into Dorset and beyond, making it easy to arrange car, van, minibus and truck hire where you need it."
      infoContentSectionKicker="Local hire advice"
      infoContentSectionTitle="Practical vehicle hire guidance for Yeovil journeys"
      infoContentSectionIntro="Hiring a vehicle in Yeovil often comes down to convenience. The town is a working hub for South Somerset, with regular business travel, residential moves and onward routes towards Dorset, the A303 corridor and the wider South West."
      infoContentBlock1Title="Roads that make local hire practical"
      infoContentBlock1Body="Yeovil sits well for cross-county travel, with the A30 running through town and quick links to the A37 and A303. That makes hired vehicles useful for work trips, home moves and collecting larger items without relying on multiple local runs."
      infoContentBlock2Title="Make collection simpler"
      infoContentBlock2Body="If you need a van, minibus or truck but do not want to collect from a depot, delivery can save time. For homes, offices and sites around Yeovil, that can make planning much easier, especially on short notice or tight schedules."
      infoContentBlock3Title="Useful for onward travel across the area"
      infoContentBlock3Body="Yeovil is a sensible starting point for journeys towards Sherborne, Dorchester, Taunton and South Somerset villages. Whether you need extra seats for a group or more load space for equipment, hiring locally gives you flexibility without long detours first."
      bottomCtaTitle="Book the right vehicle for Yeovil"
      bottomCtaDescription="Tell us what you need to move, carry or plan, and we will help match the right vehicle for the job in Yeovil and beyond."
      secondaryCtaTitle="Talk through your Yeovil hire"
      secondaryCtaDescription="Tell us what you need to move, carry or organise and we will point you towards the right vehicle for your trip from Yeovil."
      faqs={[
        { question: "What types of vehicles can I hire in Yeovil?", answer: "We provide car hire, van hire, minibus hire and truck hire, so you can book for anything from a weekend away to a house move or commercial delivery." },
        { question: "Can you deliver a hire vehicle to my address?", answer: "Yes, delivery and collection can often be arranged across Yeovil and nearby areas, which is useful if you are short on time or need the vehicle brought to your home or site." },
        { question: "Do you offer one-way vehicle hire?", answer: "One-way hire is available on selected bookings, subject to route and vehicle type. It is a practical option if you are relocating or finishing your journey in a different part of the UK." },
        { question: "Is insurance included with the hire?", answer: "Many hires include insurance as part of the booking. The exact cover depends on the vehicle and journey, so we confirm the details clearly before you travel." },
        { question: "Can I take a hire vehicle from Yeovil to Europe?", answer: "Some vehicles can be taken into Europe by prior arrangement. Let us know your travel plans early so we can check availability and the paperwork needed." },
      ]}
    />
  );
}
