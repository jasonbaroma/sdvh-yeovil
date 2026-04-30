"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Clean rental car on a winding country road near Somerton at sunrise with light mist over fields",
  };

  return (
    <HomePage
      currentLocationLabel="Somerton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Somerton"
      heroDescription="Dependable vehicle hire in Somerton for everyday journeys, rural travel, business use and jobs that need more space or carrying capacity."
      serviceAreasTitle="Serving Somerton and nearby routes"
      serviceAreasDescription="We support Somerton and the surrounding South Somerset area, with vehicle hire arranged for local residents, businesses and customers travelling between nearby towns and villages."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="What to consider before driving from Somerton"
      infoContentSectionIntro="Vehicle hire in Somerton is often about flexibility. The town is well placed for rural routes, nearby market towns and onward travel across Somerset, so customers regularly need anything from a practical car to a larger van, minibus or truck for work, events and moving jobs."
      infoContentBlock1Title="Road links around town"
      infoContentBlock1Body="Somerton sits just off the A372, making it handy for local runs to Street, Langport and Yeovil while still giving straightforward links towards the A303. If you are collecting stock, visiting customers or heading out on a house move, choosing the right size vehicle matters more here than raw distance."
      infoContentBlock2Title="Fuel and practical stop planning"
      infoContentBlock2Body="For everyday fuel and supplies, many drivers top up in Street, Langport or Yeovil depending on direction of travel. In Somerton itself, the centre is easier to manage in a car or small van, while larger vehicles are often better loaded and checked before setting off rather than stopping repeatedly in the older streets."
      infoContentBlock3Title="Useful hires for rural and family travel"
      infoContentBlock3Body="Somerton works well as a base for countryside travel, weddings, family gatherings and short-notice transport needs across South Somerset. A minibus can simplify group trips, while a van or truck is useful for property work, event kit or rural deliveries where your own vehicle may not offer enough room."
      bottomCtaTitle="Reserve your Somerton vehicle"
      bottomCtaDescription="Book vehicle hire in Somerton with practical support for local travel, family plans, work use and larger transport jobs."
      secondaryCtaTitle="Need help choosing for Somerton?"
      secondaryCtaDescription="If you are weighing up vehicle sizes, trip length or delivery options in Somerton, we can help you narrow it down and book with confidence."
      faqs={[
        { question: "Can I hire different vehicle types in Somerton?", answer: "Yes, we can help arrange vehicle hire for Somerton, with options across cars, vans, minibuses and trucks depending on availability." },
        { question: "Is Somerton convenient for wider Somerset travel?", answer: "Yes, delivery and collection can usually be arranged in Somerton and the surrounding area, helping if you would rather not travel to collect the vehicle yourself. It is a useful option for household moves, planned trips and short-term commercial hire." },
        { question: "Do you offer van hire in Somerton for moving or trade use?", answer: "One-way hire is available on selected routes and vehicle categories. If you are not returning to the same area, ask us to check the options before booking." },
        { question: "Can I hire a minibus in Somerton for family or group travel?", answer: "Many bookings include insurance, with the final cover based on the vehicle and use case. We confirm that clearly as part of the booking process." },
        { question: "Is advance booking recommended for Somerton vehicle hire?", answer: "Some vehicles may be taken to Europe by arrangement in advance. Let us know your route and dates so we can confirm what is possible." },
      ]}
    />
  );
}
