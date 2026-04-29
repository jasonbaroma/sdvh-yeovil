"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Rental car rounding a gentle country road bend near Somerton with summer greenery and stone walls.",
  };

  return (
    <HomePage
      currentLocationLabel="Somerton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Crewkerne"
      heroDescription="Vehicle Hire Crewkerne for local convenience and longer road trips. Flexible rental for cars, vans, minibuses and trucks, with practical support for home, work and transport needs."
      serviceAreasTitle="Covering Crewkerne and the surrounding area"
      serviceAreasDescription="We support customers in Crewkerne and nearby villages with flexible vehicle hire for moving, travel, delivery work and wider regional journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Straightforward vehicle hire planning for Crewkerne customers"
      infoContentSectionIntro="In Crewkerne, vehicle hire is often about flexibility. People need temporary transport for projects, larger shopping runs, family occasions or business jobs, and having access to the right vehicle at the right time can make a busy day much easier to control."
      infoContentBlock1Title="Good for longer drives beyond town"
      infoContentBlock1Body="Crewkerne works well as a starting point for journeys into South Somerset, West Dorset and East Devon, so hire is often chosen by people who need a vehicle for more than a short local errand. Extra room and the right body type can make those longer routes much more manageable."
      infoContentBlock2Title="Helpful when home projects gather pace"
      infoContentBlock2Body="For local moves and home projects, vans are often the most practical choice, especially when you are collecting furniture, tools or renovation materials. Hiring for a day or a weekend can be a straightforward way to get the job done without borrowing or making multiple trips."
      infoContentBlock3Title="Keeping the plan simple on the day"
      infoContentBlock3Body="If your booking starts or ends at a residential address in Crewkerne, delivery and collection can save time and reduce the number of arrangements you need to juggle. That is particularly useful when other people are involved in loading or unloading."
      bottomCtaTitle="Start your Crewkerne booking"
      bottomCtaDescription="If you need a vehicle in Crewkerne for travel, transport or a move, we can help you get organised quickly."
      secondaryCtaTitle="Compare options for Crewkerne"
      secondaryCtaDescription="Not sure which vehicle is best for your route or load? We can help you narrow it down before you commit."
      faqs={[
        { question: "What kind of vehicle hire is available in Crewkerne?", answer: "We offer vehicles suitable for everyday trips, removals, business use and group travel, so the booking can be matched to what you actually need to do." },
        { question: "Do you deliver hire vehicles to Crewkerne?", answer: "Yes, in many cases we can arrange delivery and collection around Crewkerne, subject to the vehicle and booking schedule." },
        { question: "Can I do a one-way hire from Crewkerne?", answer: "Some hires can be set up as one-way rentals. It depends on the vehicle and destination, so it is best to ask when booking." },
        { question: "Is cover included with the vehicle?", answer: "Standard hire includes insurance. If you would like clarification on the cover or have your own policy to discuss, just let us know." },
        { question: "Are European trips possible from Crewkerne?", answer: "European travel is available on selected bookings, but it needs prior approval so the vehicle and documentation are prepared correctly." },
      ]}
    />
  );
}
