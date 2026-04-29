"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Unbranded estate car driving on a rural A-road near Ilminster through open farmland.",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Sherborne"
      heroDescription="Vehicle Hire Sherborne for everyday travel, house moves, group trips and commercial transport. Practical rental options with access to the wider fleet when you need more than a standard car."
      serviceAreasTitle="Serving Sherborne and nearby areas"
      serviceAreasDescription="We cover Sherborne and surrounding routes, supporting local customers with flexible vehicle hire for town journeys, rural addresses and onward travel across Dorset and nearby Somerset."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Vehicle hire that suits how Sherborne journeys actually work"
      infoContentSectionIntro="Sherborne hires are often about practicality rather than routine commuting. People regularly need extra space for family travel, event transport, moving jobs or collecting larger items, and a short-term rental can be a much simpler answer than trying to make do with the wrong vehicle."
      infoContentBlock1Title="A practical choice for family and town travel"
      infoContentBlock1Body="Sherborne is well placed for local driving across the Dorset and Somerset border, so hiring can be useful when plans stretch beyond a quick town journey. A larger car or minibus suits family visits and events, while a van helps with furniture, equipment or collecting bulky purchases."
      infoContentBlock2Title="Think ahead about road space and load size"
      infoContentBlock2Body="The town's historic streets and surrounding rural routes mean it helps to choose the right vehicle size before the day of hire. If you are loading up in Sherborne and heading toward Yeovil, Dorchester or further afield, matching the vehicle to the route makes the journey easier."
      infoContentBlock3Title="Useful support for busy booking days"
      infoContentBlock3Body="For customers in Sherborne, delivery and collection can remove a lot of running around, especially when your booking is tied to moving dates, event timings or business schedules. It is a straightforward way to keep the day focused on the job itself."
      bottomCtaTitle="Arrange your Sherborne hire"
      bottomCtaDescription="Tell us what kind of journey or job you are planning in Sherborne and we will help you arrange a suitable vehicle."
      secondaryCtaTitle="Need help choosing in Sherborne?"
      secondaryCtaDescription="If you are weighing up sizes, trip length or collection options, get in touch and we will talk you through the best fit."
      faqs={[
        { question: "Can I hire more than just a car in Sherborne?", answer: "Yes. We can help with vehicle hire in Sherborne across cars, vans, minibuses and trucks, depending on what you need for the journey." },
        { question: "Is delivery available in Sherborne?", answer: "In many cases, yes. Delivery and collection can be a useful option around Sherborne, especially for moves, planned collections or business bookings." },
        { question: "Can I return the vehicle to a different place?", answer: "That depends on the type of hire and route. If you are finishing elsewhere, ask about one-way availability when you enquire." },
        { question: "What cover comes with a Sherborne hire?", answer: "Included insurance forms part of the standard hire arrangement. We can also explain the position if you already have suitable cover of your own." },
        { question: "Can I drive from Sherborne into Europe?", answer: "Yes, selected hires may be suitable for European travel, but it needs to be agreed before departure so the correct setup can be arranged." },
      ]}
    />
  );
}
