"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpg",
    alt: "{{LOCATION2_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_2_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION2_HERO_TITLE}}"
      heroDescription="{{LOCATION2_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION2_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION2_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION2_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION2_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION2_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION2_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION2_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION2_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION2_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION2_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION2_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION2_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION2_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION2_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION2_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION2_FAQ_1_QUESTION}}", answer: "{{LOCATION2_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION2_FAQ_2_QUESTION}}", answer: "{{LOCATION2_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION2_FAQ_3_QUESTION}}", answer: "{{LOCATION2_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION2_FAQ_4_QUESTION}}", answer: "{{LOCATION2_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION2_FAQ_5_QUESTION}}", answer: "{{LOCATION2_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
