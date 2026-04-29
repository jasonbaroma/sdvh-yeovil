"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpg",
    alt: "Clean hire car travelling on a tree-lined country lane in the Somerset countryside.",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Yeovil"
      heroDescription="Vehicle Hire Yeovil for cars, vans, minibuses and trucks. Flexible rental for business use, personal travel, moves and planned transport across the UK."
      serviceAreasTitle="Areas we cover around Yeovil"
      serviceAreasDescription="We provide vehicle hire in Yeovil and across surrounding towns in Somerset and nearby counties, helping private and business customers access the right vehicle when they need it."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Useful vehicle hire advice for getting around Yeovil"
      infoContentSectionIntro="Hiring a vehicle in Yeovil can be the easiest way to handle everything from a local flat move to a business delivery run or a family trip that needs more space. With strong road links across South Somerset and toward the wider South West, the right hire vehicle can take pressure off your schedule and keep the journey straightforward."
      infoContentBlock1Title="Picking a vehicle for local and regional routes"
      infoContentBlock1Body="Yeovil sits well for routes across South Somerset and onward towards Sherborne, Crewkerne and the A303, so hire often makes sense when your own vehicle is too small, unavailable or not suited to the trip. Choosing the right size from the start can save time on the day."
      infoContentBlock2Title="Making collections, moves and deliveries simpler"
      infoContentBlock2Body="For home moves, furniture collections or business deliveries around Yeovil, delivery and collection can make the booking much easier to manage. It is especially useful when you are coordinating keys, loading help, or work schedules across more than one address."
      infoContentBlock3Title="Planning longer trips from Yeovil"
      infoContentBlock3Body="Yeovil is a practical base for longer drives across the South West and beyond, whether you need a car for comfort, a minibus for group travel or a truck for commercial transport. If your route is not a simple out-and-back journey, ask about one-way and longer-distance options."
      bottomCtaTitle="Book the right vehicle for Yeovil"
      bottomCtaDescription="Tell us what you need to move, carry or plan for, and we will help you choose a vehicle that fits the job."
      secondaryCtaTitle="Talk through your hire options"
      secondaryCtaDescription="Need something specific for an upcoming trip, move or work booking? Speak to our team and we will help match the right vehicle to your plans."
      faqs={[
        { question: "What types of vehicles can I hire?", answer: "We hire out cars, vans, minibuses and trucks, so whether you need a small runabout or something for a larger transport job, we can help match the vehicle to the task." },
        { question: "Do you offer delivery and collection?", answer: "Yes, delivery and collection can be arranged in many areas. Availability will depend on the vehicle, location and timing of your booking." },
        { question: "Can I book a one-way rental?", answer: "Some bookings can be arranged as one-way hire, which is useful if you are moving, relocating stock or finishing your journey in another town or city." },
        { question: "Can I take the vehicle into Europe?", answer: "European travel may be possible on selected hires. Let us know your plans before booking so we can confirm vehicle suitability and the right cover." },
        { question: "Is insurance included with the hire?", answer: "Included cover is part of the standard hire setup. If you have questions about what is included or want to discuss your own insurance, just ask before booking." },
      ]}
    />
  );
}
