"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpg",
    alt: "{{LOCATION4_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      currentLocationLabel="{{LOCATION_4_NAME}}"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="{{LOCATION4_HERO_TITLE}}"
      heroDescription="{{LOCATION4_HERO_DESCRIPTION}}"
      serviceAreasTitle="{{LOCATION4_SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{LOCATION4_SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{LOCATION4_INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{LOCATION4_INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{LOCATION4_INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{LOCATION4_INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{LOCATION4_INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{LOCATION4_INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{LOCATION4_INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{LOCATION4_INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{LOCATION4_INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{LOCATION4_BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{LOCATION4_BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{LOCATION4_SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{LOCATION4_SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{LOCATION4_FAQ_1_QUESTION}}", answer: "{{LOCATION4_FAQ_1_ANSWER}}" },
        { question: "{{LOCATION4_FAQ_2_QUESTION}}", answer: "{{LOCATION4_FAQ_2_ANSWER}}" },
        { question: "{{LOCATION4_FAQ_3_QUESTION}}", answer: "{{LOCATION4_FAQ_3_ANSWER}}" },
        { question: "{{LOCATION4_FAQ_4_QUESTION}}", answer: "{{LOCATION4_FAQ_4_ANSWER}}" },
        { question: "{{LOCATION4_FAQ_5_QUESTION}}", answer: "{{LOCATION4_FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
