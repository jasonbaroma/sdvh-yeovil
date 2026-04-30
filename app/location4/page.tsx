"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "White van on a country road near Chard after rain with hedgerows and rolling fields",
  };

  return (
    <HomePage
      currentLocationLabel="Chard"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Chard"
      heroDescription="Flexible vehicle hire in Chard for commuting, deliveries, local business use, home moves and longer trips across Somerset and beyond."
      serviceAreasTitle="Covering Chard and nearby routes"
      serviceAreasDescription="We cover Chard and surrounding parts of South Somerset, helping drivers arrange suitable vehicles for local travel, business work and wider regional journeys."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Useful local guidance for hiring in Chard"
      infoContentSectionIntro="Chard works well for flexible vehicle hire because it sits close to the A30 and A358, making local jobs, home moves and longer runs into Somerset, Devon and Dorset straightforward. Whether you need a car for day-to-day travel, a van for carrying loads or a larger vehicle for group or work use, hired transport can be a practical option around Chard."
      infoContentBlock1Title="Driving across the Levels from Langport"
      infoContentBlock1Body="Langport is shaped by the Somerset Levels, so vehicle hire here is often about reaching rural properties, villages and work sites with the right amount of space. Routes such as the A372 help connect drivers towards Taunton, Street and the wider local road network."
      infoContentBlock2Title="Useful planning for rural access"
      infoContentBlock2Body="If you are hiring a larger van or truck, it is worth thinking about narrower local roads, bridge approaches and where you will load before setting out. For village collections or property work, a delivered vehicle can be a practical way to avoid extra coordination on the day."
      infoContentBlock3Title="When extra space really helps"
      infoContentBlock3Body="Langport hire can be handy for market-day transport, home improvement projects and family travel to places like Street, Glastonbury or Taunton. Drivers heading farther afield often choose a vehicle with more room from the outset rather than making repeat journeys on country roads."
      bottomCtaTitle="Choose your vehicle in Chard"
      bottomCtaDescription="Get your Chard vehicle hire arranged with a fleet that covers everyday driving, commercial use, moving jobs and longer-distance travel."
      secondaryCtaTitle="Talk through your Chard booking"
      secondaryCtaDescription="If you are planning a trip, move or delivery from Chard, we can help you find a vehicle that suits the route and load."
      faqs={[
        { question: "Can I hire more than just a car in Chard?", answer: "Yes, we can arrange vehicle hire for customers in Chard, from everyday cars to larger vans, minibuses and trucks, subject to availability." },
        { question: "Is Chard a good location for regional travel?", answer: "Chard sits close to the A30 and A358 corridors, so it is a useful base for travel across Somerset, East Devon and onward routes towards Taunton and the South Coast." },
        { question: "Do you provide van hire in Chard for moving or deliveries?", answer: "One-way hire may be available for selected journeys. If your route finishes outside the local area, ask when booking and we can check the options." },
        { question: "Can I arrange a minibus in Chard for group travel?", answer: "Many bookings include insurance, with the exact cover depending on the vehicle and how it will be used. We confirm the details before the hire begins." },
        { question: "How far ahead should I book vehicle hire in Chard?", answer: "Some vehicles can travel into Europe if arranged in advance. We will check the vehicle, route and paperwork requirements before confirming." },
      ]}
    />
  );
}
