"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpg",
    alt: "{{LOCATION5_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_5_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION5_HERO_TITLE}}"
      heroDescription="{{LOCATION5_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION5_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION5_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION5_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION5_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION5_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION5_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION5_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION5_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION5_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION5_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION5_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION5_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION5_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION5_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION5_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION5_FAQ_1_QUESTION}}", answer: "{{LOCATION5_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION5_FAQ_2_QUESTION}}", answer: "{{LOCATION5_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION5_FAQ_3_QUESTION}}", answer: "{{LOCATION5_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION5_FAQ_4_QUESTION}}", answer: "{{LOCATION5_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION5_FAQ_5_QUESTION}}", answer: "{{LOCATION5_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
