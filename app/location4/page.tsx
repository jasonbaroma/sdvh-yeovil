"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpg",
    alt: "Dark blue estate car on a quiet country road outside Sherborne in the Dorset countryside.",
  };

  return (
    <HomePage
      currentLocationLabel="Sherborne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Vehicle Hire Ilminster for commuters, local businesses, moving jobs and weekend plans. Flexible rental with access to a broad fleet across cars, vans, minibuses and trucks."
      serviceAreasTitle="Serving Ilminster and nearby routes"
      serviceAreasDescription="We provide vehicle hire for Ilminster and nearby parts of South Somerset, supporting local travel, business transport and larger carrying jobs."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Why Ilminster hires often come down to route, load and timing"
      infoContentSectionIntro="Vehicle hire in Ilminster often revolves around practical route planning. Some bookings are for work and deliveries, others for household jobs or longer personal travel, but in each case the main aim is the same: having a vehicle that suits the day properly without overcomplicating it."
      infoContentBlock1Title="Useful when the route starts with the A303"
      infoContentBlock1Body="With easy access towards the A303 corridor, Ilminster is a practical place to start longer journeys where reliability and vehicle comfort matter. Hiring can be a sensible option if your own vehicle is unavailable or simply not the right fit for the distance."
      infoContentBlock2Title="Extra support for business and trade use"
      infoContentBlock2Body="For local firms, temporary hire can help cover seasonal demand, short-notice transport needs or periods when a regular vehicle is being repaired. Vans and trucks are especially useful when the workload changes faster than your fleet can."
      infoContentBlock3Title="Getting load space right from the outset"
      infoContentBlock3Body="If you are based in Ilminster and need to collect stock, tools, furniture or equipment, choosing the right vehicle first time avoids wasted journeys. That can be the difference between a quick job and a full day of back-and-forth driving."
      bottomCtaTitle="Get moving with Ilminster hire"
      bottomCtaDescription="Planning a hire in Ilminster? We can help you arrange a vehicle that fits the route, the load and the timing."
      secondaryCtaTitle="Ask about your Ilminster options"
      secondaryCtaDescription="If you want to check availability or talk through the best vehicle for an Ilminster booking, we are ready to help."
      faqs={[
        { question: "What vehicles can I hire in Ilminster?", answer: "Yes. Customers in Ilminster can hire cars, vans, minibuses and trucks depending on the type of journey or transport job involved." },
        { question: "Can the hire vehicle come to my address in Ilminster?", answer: "Delivery is available on many bookings, and it can be especially useful when you are working to a narrow schedule or starting from home." },
        { question: "Is one-way vehicle hire available from Ilminster?", answer: "Some bookings can be arranged on a one-way basis. If that would help your route, mention it when you request availability." },
        { question: "Does the hire include insurance?", answer: "Included insurance is part of the standard hire structure. We can talk through the details before the booking is confirmed." },
        { question: "Can I drive to Europe with an Ilminster hire?", answer: "European travel may be possible on selected vehicles, but it must be agreed in advance so the right cover is in place." },
      ]}
    />
  );
}
