"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "White hatchback on an open rural road near Ilminster surrounded by green fields",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Practical vehicle hire in Ilminster for local errands, business trips, house moves and longer journeys, with a wide fleet and straightforward booking support."
      serviceAreasTitle="Serving Ilminster and nearby areas"
      serviceAreasDescription="We support customers across Ilminster and nearby villages, with vehicle hire that suits local travel, deliveries, moving jobs and onward routes across Somerset and Devon."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Getting the most from vehicle hire in Ilminster"
      infoContentSectionIntro="Ilminster works well for drivers who need quick access to the A303 as well as local routes through South Somerset. Whether you are collecting stock, moving home, visiting family or heading further across the South West, hiring the right vehicle in Ilminster can make the journey simpler and more efficient."
      infoContentBlock1Title="Using the A30 and nearby trunk routes"
      infoContentBlock1Body="Sherborne is well placed on the A30, making local collection and onward driving straightforward whether you are heading east towards Shaftesbury or west towards Yeovil. For longer trips, the A303 is accessible via nearby routes, which helps when planning cross-country business travel or larger moves."
      infoContentBlock2Title="Town-centre access and stop planning"
      infoContentBlock2Body="For fuel and everyday stops, Sherborne has town-centre amenities and nearby filling options on the approach roads, while larger service choices open up towards Yeovil. If you are collecting bulky items or travelling with a group, it helps to plan loading and refuelling before heading into narrower central streets."
      infoContentBlock3Title="Why hire works well in Sherborne"
      infoContentBlock3Body="Sherborne hires are often practical for family visits, school moves, antiques collections and trips out into the Dorset countryside. Destinations such as Sherborne Castle, surrounding villages and onward routes towards Dorchester or South Somerset are easier to manage when you have the right size vehicle from the start."
      bottomCtaTitle="Book vehicle hire in Ilminster"
      bottomCtaDescription="Speak to us about vehicle hire in Ilminster and we will help arrange the right car, van, minibus or truck for your journey."
      secondaryCtaTitle="Need help planning your Ilminster hire?"
      secondaryCtaDescription="If you are comparing options for Ilminster, contact our team and we will talk you through suitable vehicles and hire arrangements."
      faqs={[
        { question: "Can I book more than just a van in Sherborne?", answer: "Yes, we can support bookings for Sherborne with a wide range of self-drive options, including cars, vans, minibuses and trucks depending on availability." },
        { question: "Do you offer vehicle delivery in Sherborne?", answer: "Delivery may be available in and around Sherborne, which can be useful if you are booking from home, a workplace or a nearby rural address." },
        { question: "Is one-way hire possible from Sherborne?", answer: "Yes, one-way hire can often be arranged for selected routes. This is especially helpful for relocations, returns to another branch area or longer business journeys." },
        { question: "Will insurance be included with my Sherborne booking?", answer: "Included cover is available on many bookings, with the exact level depending on the vehicle type and journey details. We explain this before you confirm." },
        { question: "Can I take a hire vehicle from Sherborne abroad?", answer: "European travel can be possible on request for certain vehicles. Let us know before booking so we can check availability and any additional travel requirements." },
      ]}
    />
  );
}
