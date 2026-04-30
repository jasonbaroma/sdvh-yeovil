"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Grey crossover approaching a small stone bridge on a rural road near Crewkerne",
  };

  return (
    <HomePage
      currentLocationLabel="Crewkerne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Crewkerne"
      heroDescription="Vehicle hire in Crewkerne for straightforward local journeys, commercial runs, weekend plans and larger transport needs across Somerset, Dorset and Devon routes."
      serviceAreasTitle="Vehicle hire around Crewkerne"
      serviceAreasDescription="We cover Crewkerne and the surrounding area with flexible vehicle hire for everyday driving, business use, moving jobs and longer trips across Somerset, Dorset and Devon."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Crewkerne vehicle hire tips for local and regional travel"
      infoContentSectionIntro="Crewkerne works as both a local market town and a stepping-off point for journeys across South Somerset and the Devon and Dorset borders. Hiring a vehicle here is often about practical access, whether you are moving goods, visiting customers or organising family travel."
      infoContentBlock1Title="A useful base on the A30 corridor"
      infoContentBlock1Body="Crewkerne is especially convenient for drivers using the A30, with quick links towards Yeovil, Chard and wider South West routes. That makes it a practical place to hire a vehicle for trade jobs, stock runs or onward journeys that need more space than your usual vehicle provides."
      infoContentBlock2Title="Loading around Crewkerne town centre"
      infoContentBlock2Body="The town centre is compact, so it helps to think ahead if you are collecting furniture, loading tools or organising a minibus trip. Planning where to park and load before entering tighter streets can save time, particularly at busier points in the day."
      infoContentBlock3Title="Stops, fuel and onward travel"
      infoContentBlock3Body="For longer trips, drivers often use nearby fuel stops on routes towards Chard or Yeovil, where service options widen. Crewkerne hire also suits journeys into the Blackdown Hills area, local farm and business runs, or travel towards the Jurassic Coast without overpacking a smaller car."
      bottomCtaTitle="Book vehicle hire for Crewkerne"
      bottomCtaDescription="Planning a vehicle hire in Crewkerne? We can help organise a practical self-drive option for work, travel, moving day or a one-off transport job."
      secondaryCtaTitle="Talk through your Crewkerne plans"
      secondaryCtaDescription="If you are unsure what will work best in Crewkerne, we can talk through vehicle size, passenger space and route suitability before you book."
      faqs={[
        { question: "What kind of vehicles are available in Crewkerne?", answer: "Yes, Crewkerne bookings can include cars, vans, minibuses and trucks, so the right option depends on what you need to carry and where you are going." },
        { question: "Can the hire vehicle be delivered to Crewkerne?", answer: "Delivery and collection can often be arranged for Crewkerne and nearby addresses, which is helpful if you need the vehicle brought directly to you." },
        { question: "Do you provide one-way hire from Crewkerne?", answer: "One-way hire is available on some bookings, subject to the vehicle and route. It can be a good fit for business trips or relocations ending outside the area." },
        { question: "Is insurance part of the hire package in Crewkerne?", answer: "Many hires include insurance, with details confirmed around the selected vehicle and planned use. We keep that information clear at booking stage." },
        { question: "Can I drive from Crewkerne into Europe in a hire vehicle?", answer: "Selected vehicles may be approved for European travel if agreed in advance. Let us know your route before finalising the booking." },
      ]}
    />
  );
}
