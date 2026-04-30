"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Silver estate car on a straight rural road near Langport under a wide Somerset sky",
  };

  return (
    <HomePage
      currentLocationLabel="Langport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Langport"
      heroDescription="Straightforward vehicle hire in Langport for rural journeys, home moves, work transport and trips across Somerset."
      serviceAreasTitle="Vehicle hire for Langport and surrounding villages"
      serviceAreasDescription="We support Langport and nearby Somerset villages with vehicle hire for local errands, countryside routes, business journeys and practical transport needs."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Hiring a vehicle for Langport and the Levels"
      infoContentSectionIntro="In Langport, vehicle hire is often the practical answer for market-day loads, home moves, trade jobs and family trips across the Somerset Levels. With the A372 running through town and the A303 within easy reach, a suitable car, van, minibus or truck helps keep local journeys and longer runs straightforward."
      infoContentBlock1Title="A practical base for multi-stop travel"
      infoContentBlock1Body="Somerton sits between several useful local centres, so hired vehicles are often used for trips towards Street, Yeovil, Langport and the A37 or A303 approach roads. That makes it a sensible place to start a job when your day involves several stops rather than one short journey."
      infoContentBlock2Title="Choosing the right size for local roads"
      infoContentBlock2Body="With a historic town layout and surrounding rural roads, it helps to think about turning space and loading access before choosing a larger vehicle. For furniture collection, event equipment or trade work, the right size van can save repeat trips and reduce wasted time."
      infoContentBlock3Title="Everyday uses around Somerton"
      infoContentBlock3Body="Somerton hire is useful for domestic projects, visiting family across Somerset and handling seasonal or part-time business demand without adding a permanent vehicle. Nearby fuel and convenience stops are easier to find on the main routes out of town, so planning ahead is worthwhile for longer hires."
      bottomCtaTitle="Arrange hire in Langport"
      bottomCtaDescription="Plan your Langport vehicle hire with support for local journeys, business needs, moving jobs and wider travel across Somerset."
      secondaryCtaTitle="Looking at vehicles in Langport?"
      secondaryCtaDescription="Let us know what you need from your Langport hire and we will help you choose a suitable option from the wider fleet."
      faqs={[
        { question: "Can I book a vehicle in Langport for everyday local use?", answer: "Yes, we can arrange vehicle hire for Langport customers, subject to the normal availability and driver checks." },
        { question: "What journeys are common from Langport?", answer: "Yes, delivery and collection can often be arranged in Langport and nearby villages, which is especially useful if you are hiring for a move, a family trip or temporary business transport. Availability depends on the vehicle and booking details." },
        { question: "Do you offer vans in Langport for house moves or deliveries?", answer: "One-way bookings are possible on selected vehicles and routes. If you are ending your journey in another town or region, ask us to check availability." },
        { question: "Is Langport suitable for hiring a larger vehicle for country routes?", answer: "Many hires include insurance as standard, with cover based on the vehicle and intended journey. We explain the booking terms clearly before confirmation." },
        { question: "Can I hire for business travel from Langport?", answer: "European travel may be possible with some vehicles if agreed before travel. Advance notice helps us confirm the right paperwork and eligibility." },
      ]}
    />
  );
}
