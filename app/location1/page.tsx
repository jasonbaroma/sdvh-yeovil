"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpg",
    alt: "{{LOCATION1_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_1_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION1_HERO_TITLE}}"
      heroDescription="{{LOCATION1_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION1_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION1_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION1_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION1_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION1_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION1_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION1_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION1_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION1_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION1_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION1_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION1_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION1_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION1_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION1_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION1_FAQ_1_QUESTION}}", answer: "{{LOCATION1_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION1_FAQ_2_QUESTION}}", answer: "{{LOCATION1_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION1_FAQ_3_QUESTION}}", answer: "{{LOCATION1_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION1_FAQ_4_QUESTION}}", answer: "{{LOCATION1_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION1_FAQ_5_QUESTION}}", answer: "{{LOCATION1_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
