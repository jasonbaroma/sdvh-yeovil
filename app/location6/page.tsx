"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Clean hire car on a quiet road near a rural station approach outside Crewkerne.",
  };

  return (
    <HomePage
      currentLocationLabel="Crewkerne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Crewkerne"
      heroDescription="Vehicle Hire Crewkerne for local journeys, business use, family travel and moving jobs, with access to cars, vans, minibuses and trucks across the wider area."
      serviceAreasTitle="Vehicle hire around Crewkerne"
      serviceAreasDescription="We cover Crewkerne and surrounding villages and routes, supporting customers across South Somerset who need dependable access to self-drive vehicles."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Making vehicle hire work smoothly in Crewkerne"
      infoContentSectionIntro="Hiring a vehicle in Crewkerne can be a sensible choice when plans stretch beyond everyday local driving. Whether you are travelling for work, collecting stock, moving home or heading away with family, having the right vehicle makes the journey more manageable."
      infoContentBlock1Title="Useful for cross-county travel"
      infoContentBlock1Body="Crewkerne works well as a base for travel between South Somerset, Dorset and East Devon. If your own vehicle is not suitable, hiring gives you a practical way to manage deliveries, appointments or longer road trips without overcomplicating the journey."
      infoContentBlock2Title="A better fit for carrying loads"
      infoContentBlock2Body="For house moves, furniture collections or trade work, the right van or truck saves time and repeated journeys. From smaller vans to larger load space, it helps when you need more carrying capacity than a standard car can offer."
      infoContentBlock3Title="Straightforward options for group trips"
      infoContentBlock3Body="Group travel can be awkward to organise from smaller towns, especially when trains and lift sharing do not line up. A minibus or larger vehicle can make family outings, event travel and team transport much simpler from Crewkerne."
      bottomCtaTitle="Book vehicle hire in Crewkerne"
      bottomCtaDescription="Tell us what you need the vehicle for and when you need it, and we will help arrange practical hire in Crewkerne with the right vehicle for the job."
      secondaryCtaTitle="Plan your Crewkerne booking"
      secondaryCtaDescription="From short local needs to longer runs further afield, we can help you find a suitable hire vehicle for Crewkerne without unnecessary fuss."
      faqs={[
        { question: "What vehicles can I hire in Crewkerne?", answer: "Yes, we can support vehicle hire in Crewkerne across cars, vans, minibuses and trucks, subject to availability and the usual hire checks." },
        { question: "Can a hire vehicle be delivered to Crewkerne?", answer: "In many cases, yes. Delivery and collection options depend on the vehicle type, booking length and the exact address, so it is best to ask when booking." },
        { question: "Do you offer one-way vehicle hire from Crewkerne?", answer: "One-way hire is available on selected bookings. This can be useful if you are moving, making a business delivery or finishing your journey in another part of the UK." },
        { question: "Can I take a Crewkerne hire vehicle to Europe?", answer: "Some hires can be arranged for European travel, but this must be agreed in advance so the correct vehicle cover and paperwork can be put in place." },
        { question: "Is insurance included with vehicle hire in Crewkerne?", answer: "Standard insurance is included with many hires. If you have your own suitable cover, speak to the team and we can confirm the options available for your booking." },
      ]}
    />
  );
}
