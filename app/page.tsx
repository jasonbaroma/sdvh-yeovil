"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpg",
    alt: "{{HOMEPAGE_HERO_IMAGE_ALT}}",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="{{HERO_TITLE}}"
      heroDescription="{{HERO_DESCRIPTION}}"
      serviceAreasTitle="{{SERVICE_AREAS_TITLE}}"
      serviceAreasDescription="{{SERVICE_AREAS_DESCRIPTION}}"
      infoContentSectionKicker="{{INFO_CONTENT_SECTION_KICKER}}"
      infoContentSectionTitle="{{INFO_CONTENT_SECTION_TITLE}}"
      infoContentSectionIntro="{{INFO_CONTENT_SECTION_INTRO}}"
      infoContentBlock1Title="{{INFO_CONTENT_BLOCK_1_TITLE}}"
      infoContentBlock1Body="{{INFO_CONTENT_BLOCK_1_BODY}}"
      infoContentBlock2Title="{{INFO_CONTENT_BLOCK_2_TITLE}}"
      infoContentBlock2Body="{{INFO_CONTENT_BLOCK_2_BODY}}"
      infoContentBlock3Title="{{INFO_CONTENT_BLOCK_3_TITLE}}"
      infoContentBlock3Body="{{INFO_CONTENT_BLOCK_3_BODY}}"
      bottomCtaTitle="{{BOTTOM_CTA_TITLE}}"
      bottomCtaDescription="{{BOTTOM_CTA_DESCRIPTION}}"
      secondaryCtaTitle="{{SECONDARY_CTA_TITLE}}"
      secondaryCtaDescription="{{SECONDARY_CTA_DESCRIPTION}}"
      faqs={[
        { question: "{{FAQ_1_QUESTION}}", answer: "{{FAQ_1_ANSWER}}" },
        { question: "{{FAQ_2_QUESTION}}", answer: "{{FAQ_2_ANSWER}}" },
        { question: "{{FAQ_3_QUESTION}}", answer: "{{FAQ_3_ANSWER}}" },
        { question: "{{FAQ_4_QUESTION}}", answer: "{{FAQ_4_ANSWER}}" },
        { question: "{{FAQ_5_QUESTION}}", answer: "{{FAQ_5_ANSWER}}" },
      ]}
    />
  );
}
