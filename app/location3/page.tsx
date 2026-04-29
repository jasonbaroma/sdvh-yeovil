"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpg",
    alt: "{{LOCATION3_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_3_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION3_HERO_TITLE}}"
      heroDescription="{{LOCATION3_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION3_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION3_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION3_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION3_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION3_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION3_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION3_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION3_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION3_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION3_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION3_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION3_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION3_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION3_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION3_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION3_FAQ_1_QUESTION}}", answer: "{{LOCATION3_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION3_FAQ_2_QUESTION}}", answer: "{{LOCATION3_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION3_FAQ_3_QUESTION}}", answer: "{{LOCATION3_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION3_FAQ_4_QUESTION}}", answer: "{{LOCATION3_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION3_FAQ_5_QUESTION}}", answer: "{{LOCATION3_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
