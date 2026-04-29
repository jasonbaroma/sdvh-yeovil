"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Compact hire car parked near Chard while a driver loads a small bag into the boot.",
  };

  return (
    <HomePage
      currentLocationLabel="Chard"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Martock"
      heroDescription="Vehicle Hire Martock for daily transport needs, local moves, business use and group travel. Sensible rental options backed by a broad fleet and practical service."
      serviceAreasTitle="Serving Chard and nearby routes"
      serviceAreasDescription="Our Chard vehicle hire coverage extends across the town and surrounding parts of South Somerset and East Devon, making it easy to arrange transport for local jobs and longer journeys."
      infoContentSectionKicker="Practical hire advice"
      infoContentSectionTitle="Vehicle hire in Chard for work, moves and longer trips"
      infoContentSectionIntro="Vehicle hire in Martock is often chosen for straightforward practical reasons: more room, more carrying capacity, or a better vehicle for the journey ahead. Whether the need is personal or commercial, short-term hire gives you flexibility without needing a permanent larger vehicle."
      infoContentBlock1Title="A good fit for everyday South Somerset travel"
      infoContentBlock1Body="Martock is a place where many journeys quickly become regional rather than purely local, whether you are heading into Yeovil, across South Somerset or toward main routes further east and west. Hiring can give you the space or capacity your regular vehicle lacks."
      infoContentBlock2Title="Useful for moving and home jobs"
      infoContentBlock2Body="For home moves, furniture collections and garden or renovation projects, a van or truck can save repeated loading and unloading. Getting the right size from the start is usually the simplest way to keep the day on track."
      infoContentBlock3Title="Keeping the booking convenient"
      infoContentBlock3Body="When time matters, delivery and collection can make hiring in Martock much more convenient. It helps you stay focused on the job, especially if other people are involved or access to a second driver is limited."
      bottomCtaTitle="Plan your Martock vehicle hire"
      bottomCtaDescription="We can help you sort the right vehicle for Martock, whether the job is local, regional or part of a longer route."
      secondaryCtaTitle="Check Chard vehicle availability"
      secondaryCtaDescription="If you already know the dates and vehicle type you need, we can help you arrange a straightforward booking for Chard and nearby areas."
      faqs={[
        { question: "Can I choose from different vehicle types in Martock?", answer: "Yes. Martock customers can book across the wider fleet, including cars, vans, minibuses and trucks." },
        { question: "Do you offer delivery in Martock?", answer: "Delivery and collection can often be arranged, which is useful if you are planning around home, work or moving-day timing." },
        { question: "Can I hire a vehicle one way from Martock?", answer: "One-way hire is available on selected bookings. If you do not plan to return to the starting area, tell us when you enquire." },
        { question: "Is insurance part of the hire agreement?", answer: "Standard hire includes insurance, and we can explain the setup clearly before you confirm the rental." },
        { question: "Can a Martock hire be used for travel in Europe?", answer: "Yes, European travel may be possible on some vehicles, provided it is arranged in advance." },
      ]}
    />
  );
}
