"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Silver family car driving near the edge of Street with village stone walls and countryside beyond",
  };

  return (
    <HomePage
      currentLocationLabel="Street"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Street"
      heroDescription="Reliable vehicle hire in Street for shopping trips, family travel, local business needs and practical transport across Somerset."
      serviceAreasTitle="Vehicle hire around Street"
      serviceAreasDescription="Our coverage includes Street and nearby parts of mid-Somerset, supporting private and business customers with flexible vehicle hire for short and longer journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical hire advice for driving in Street"
      infoContentSectionIntro="Street is a practical place to hire a vehicle if you need easy access around mid-Somerset, whether you are heading into Glastonbury, travelling on towards Wells and Bridgwater, or managing a move or delivery locally. With busy retail traffic around the Clarks Village area and regular onward journeys across the county, having the right vehicle can save time and make planning easier."
      infoContentBlock1Title="Quick access to the A303"
      infoContentBlock1Body="Ilminster stands close to the A303, so it is a strong choice for drivers heading east-west across the South West. Whether you are moving equipment, visiting multiple sites or setting off early for a longer trip, hiring locally can save wear on your own vehicle and make motorway-style travel easier."
      infoContentBlock2Title="Refuelling before longer runs"
      infoContentBlock2Body="The town has useful day-to-day amenities, while larger refuelling and stop options sit along the main road network around the A303 and A358 approaches. If you are taking a van or truck, planning your fuel stop before joining faster routes can keep the day running smoothly."
      infoContentBlock3Title="Common journeys from Ilminster"
      infoContentBlock3Body="Ilminster hire often suits practical routes towards Taunton, Chard and South Somerset villages, as well as leisure travel into the Blackdown Hills. A larger vehicle can also be useful for market, retail or event-related transport where a normal family car is too limited."
      bottomCtaTitle="Start your Street vehicle hire"
      bottomCtaDescription="Arrange vehicle hire in Street with a fleet suited to family travel, local moves, business use and longer-distance driving."
      secondaryCtaTitle="Compare Street hire options"
      secondaryCtaDescription="Tell us what you need in Street and we will help match you with a suitable vehicle for the job or journey."
      faqs={[
        { question: "Can I book vehicle hire in Street for a weekend?", answer: "Yes, we can help arrange vehicle hire for customers in Street, subject to vehicle availability and the usual booking checks." },
        { question: "What kind of trips do people hire vehicles for in Street?", answer: "Street is well placed for trips towards Glastonbury, Wells, Bridgwater and the wider Somerset area, so many customers hire for shopping runs, family visits, events and practical transport needs." },
        { question: "Do you offer vans as well as cars in Street?", answer: "One-way hire can often be arranged on selected routes and vehicle categories. It is worth asking early if your return point will be elsewhere in the UK." },
        { question: "Is Street a useful base for longer drives across Somerset?", answer: "Insurance is commonly included with many bookings, with cover confirmed according to the vehicle and intended use before the hire starts." },
        { question: "Can I hire a larger vehicle in Street for a group trip or move?", answer: "European travel is possible on some vehicles by prior agreement. We can confirm what is suitable once we know your travel dates and destination." },
      ]}
    />
  );
}
