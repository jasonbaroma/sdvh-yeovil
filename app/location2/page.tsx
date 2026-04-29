"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Compact SUV crossing a rural bridge near Langport with riverside meadows and open countryside.",
  };

  return (
    <HomePage
      currentLocationLabel="Langport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Chard"
      heroDescription="Vehicle Hire Chard for local moves, deliveries, work travel and longer trips. From cars and vans to minibuses and trucks, we offer practical options for customers in and around the town."
      serviceAreasTitle="Vehicle hire around Chard"
      serviceAreasDescription="Our Chard coverage extends across the town and nearby communities, with vehicle hire arranged for personal bookings, trade use and regional travel in all directions."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="How vehicle hire helps with work and moving jobs in Chard"
      infoContentSectionIntro="Vehicle hire in Chard often needs to work around practical jobs rather than simple day-to-day motoring. Whether you are transporting goods, covering a busy work period or sorting out a move, the right rental vehicle can make local and regional travel far easier to manage."
      infoContentBlock1Title="Useful for cross-county travel"
      infoContentBlock1Body="Chard is well connected for journeys into Somerset, Dorset and Devon, which makes it a sensible place to hire when your plans cover several stops or longer mileage. A van can simplify delivery runs, while a car or minibus gives more comfort for longer personal travel."
      infoContentBlock2Title="A workable option for business transport"
      infoContentBlock2Body="For local businesses, temporary hire can help when regular vehicles are off the road, demand has increased or a specialist body type is needed for a specific job. That flexibility is often just as important as the vehicle itself."
      infoContentBlock3Title="Avoiding repeat runs on moving day"
      infoContentBlock3Body="If you are moving items between homes, storage units or work sites in the Chard area, choosing the right load space early can prevent repeat trips. For larger or heavier jobs, stepping up from a standard van to a bigger model or truck can save time overall."
      bottomCtaTitle="Book vehicle hire in Chard"
      bottomCtaDescription="Let us know what you are moving, carrying or planning in Chard and we will help line up the right vehicle."
      secondaryCtaTitle="Talk through your Chard journey"
      secondaryCtaDescription="We can help you compare vehicle sizes and hire options if you are planning a route from Chard or the nearby area."
      faqs={[
        { question: "What are people usually hiring vehicles for in Chard?", answer: "Yes. We regularly help with Chard hires for moving home, business deliveries, family travel and group transport, using vehicles sized to suit the job." },
        { question: "Can the vehicle be delivered to Chard?", answer: "Delivery and collection may be available, depending on the booking details and the vehicle requested." },
        { question: "Do you offer one-way hire from Chard?", answer: "One-way rental is possible on some bookings. If your route starts in Chard and ends elsewhere, mention it early so we can check availability." },
        { question: "Is insurance included on Chard vehicle hire?", answer: "Included insurance is part of the standard hire setup, and we can explain any options clearly before you confirm the booking." },
        { question: "Can I take a Chard hire vehicle abroad?", answer: "Some vehicles can be prepared for European travel, but this must be arranged in advance rather than added after collection." },
      ]}
    />
  );
}
