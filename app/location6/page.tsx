"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/locations/callington-country-road.jpg",
    alt: "{{LOCATION6_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_6_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION6_HERO_TITLE}}"
      heroDescription="{{LOCATION6_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION6_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION6_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION6_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION6_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION6_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION6_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION6_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION6_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION6_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION6_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION6_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION6_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION6_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION6_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION6_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION6_FAQ_1_QUESTION}}", answer: "{{LOCATION6_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION6_FAQ_2_QUESTION}}", answer: "{{LOCATION6_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION6_FAQ_3_QUESTION}}", answer: "{{LOCATION6_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION6_FAQ_4_QUESTION}}", answer: "{{LOCATION6_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION6_FAQ_5_QUESTION}}", answer: "{{LOCATION6_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
