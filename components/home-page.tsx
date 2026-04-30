"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { companyName, mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import {
  ArrowRight,
  BadgePoundSterling,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HomePageProps = {
  currentLocationLabel?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  heroImage?: string;
  heroImageAlt?: string;
  heroTitle?: string;
  heroDescription?: string;
  serviceAreasTitle?: string;
  serviceAreasDescription?: string;
  infoContentSectionKicker?: string;
  infoContentSectionTitle?: string;
  infoContentSectionIntro?: string;
  infoContentBlock1Title?: string;
  infoContentBlock1Body?: string;
  infoContentBlock2Title?: string;
  infoContentBlock2Body?: string;
  infoContentBlock3Title?: string;
  infoContentBlock3Body?: string;
  bottomCtaTitle?: string;
  bottomCtaDescription?: string;
  secondaryCtaTitle?: string;
  secondaryCtaDescription?: string;
};

function DeliveryCollectionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <polygon
        fill="#17a24a"
        points="92.59 75.21 88.21 76.09 88.06 71.28 82.76 67.06 78.04 68.01 77.9 63.2 67.75 55.12 65.24 58.27 75.49 66.42 73 69.55 62.75 61.4 59.5 65.5 69.65 73.57 74.37 72.63 74.51 77.44 79.81 81.65 84.54 80.71 84.67 85.18 95.85 85.93 92.59 75.21"
      />
      <path
        fill="#17a24a"
        d="M64.33,38.97l-14.1-11.22c-3.34-2.66-8.17-2.15-10.91,1.08-2.14-3.05-4.96-6.03-8.28-8.67-4.89-3.89-10.28-6.6-15.17-7.64-5.37-1.14-9.62-.15-11.96,2.79-4.57,5.75,.19,16.88,10.83,25.34,4.89,3.89,10.28,6.6,15.17,7.64,1.45,.31,2.83,.46,4.1,.46,3.43,0,6.16-1.11,7.86-3.26l-3.13-2.49c-.73,.92-1.95,1.47-3.52,1.66l8.75-11c.66-.84,1.89-.98,2.73-.32l2.6,2.07c.84,.67,.98,1.89,.31,2.73l-10.74,13.51c-.22,.28-.51,.47-.82,.59v.04c-1.26,.31-2.61,.47-4.05,.47-1.55,0-3.21-.18-4.93-.55-.84-.18-1.68-.41-2.54-.67,.5,1.16,1.28,2.22,2.34,3.06l14.11,11.21c3.4,2.71,8.37,2.14,11.08-1.27l11.52-14.49c2.71-3.41,2.15-8.37-1.26-11.08ZM7.04,17.81c1.33-1.67,4.24-2.17,8-1.37,4.3,.91,9.09,3.35,13.51,6.86,3.38,2.69,6.19,5.73,8.15,8.8l-9.06,11.4c-3.43-1.23-7.03-3.28-10.41-5.96C7.89,30.1,4.36,21.18,7.04,17.81Z"
      />
    </svg>
  );
}

function UnlimitedMileageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M62.89,23.16l.85-3.91c-3.39-.74-6.92-1.08-10.4-1.01l.08,4c3.19-.07,6.38,.24,9.46,.92Z"
      />
      <path
        fill="#17a24a"
        d="M10.34,56.69l3.96,.52c.42-3.15,1.21-6.25,2.35-9.21l-3.73-1.44c-1.26,3.25-2.13,6.66-2.59,10.13Z"
      />
      <path
        fill="#17a24a"
        d="M44.02,23.54l-1.01-3.87c-3.37,.88-6.65,2.17-9.72,3.83l1.9,3.52c2.8-1.51,5.77-2.68,8.84-3.48Z"
      />
      <path
        fill="#17a24a"
        d="M27.4,32.49l-2.67-2.98c-2.6,2.33-4.93,4.96-6.92,7.83l3.29,2.28c1.81-2.61,3.93-5.01,6.29-7.12Z"
      />
      <path
        fill="#17a24a"
        d="M78.67,35.42l-2.42,3.21c3.24,2.98,5.92,6.63,7.76,10.81,1.11,2.51,1.67,5.33,1.67,8.36h4c0-3.59-.68-6.94-2.01-9.97-2.13-4.82-5.23-9.02-9-12.41Z"
      />
      <path
        fill="#17a24a"
        d="M59.26,54.53h0s.06-.08,.06-.08c0,0,.01-.01,.02-.02l22.62-30.01c.63-.84-.36-1.94-1.26-1.4l-10.9,6.54c-4.77-2.26-10.05-3.52-15.54-3.52-14.46,0-27.58,8.55-33.41,21.79-1.33,3.03-2.01,6.38-2.01,9.97h4c0-3.03,.56-5.84,1.67-8.36,5.19-11.79,16.87-19.4,29.75-19.4,3.94,0,7.75,.73,11.31,2.06l-17.09,10.26s-.02,0-.02,.01l-.09,.05h0c-1.32,.8-2.49,1.96-3.22,3.76-1.23,3.01-.79,6.53,1.4,8.93,3.06,3.35,8.28,3.6,11.66,.56,.39-.35,.74-.74,1.05-1.15Zm-3.73-1.82c-1.76,1.58-4.48,1.44-6.06-.32-1.58-1.76-1.44-4.48,.32-6.06s4.48-1.44,6.06,.32c1.58,1.76,1.44,4.47-.32,6.06Z"
      />
      <path
        fill="#17a24a"
        d="M30.7,62.38h-8.01c-1,0-1.82,.82-1.82,1.82v13.75c0,1,.82,1.82,1.82,1.82h8.01c1,0,1.82-.82,1.82-1.82v-13.75c0-1-.82-1.82-1.82-1.82Zm-2,12.94h-4v-8.49h4v8.49Z"
      />
      <path
        fill="#17a24a"
        d="M49.07,62.38h-8c-1,0-1.82,.82-1.82,1.82v13.75c0,1,.82,1.82,1.82,1.82h8c1.01,0,1.82-.82,1.82-1.82v-13.75c0-1-.81-1.82-1.82-1.82Zm-2,12.94h-4v-8.49h4v8.49Z"
      />
      <path
        fill="#17a24a"
        d="M67.45,62.38h-8c-1.01,0-1.82,.82-1.82,1.82v13.75c0,1,.81,1.82,1.82,1.82h8c1.01,0,1.82-.82,1.82-1.82v-13.75c0-1-.81-1.82-1.82-1.82Zm-2,12.94h-4v-8.49h4v8.49Z"
      />
      <path
        fill="#17a24a"
        d="M85.83,62.38h-8.01c-1,0-1.82,.82-1.82,1.82v13.75c0,1,.82,1.82,1.82,1.82h8.01c1,0,1.82-.82,1.82-1.82v-13.75c0-1-.82-1.82-1.82-1.82Zm-2,12.94h-4v-8.49h4v8.49Z"
      />
    </svg>
  );
}

function NationwideCoverageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M24.82,30.06c-2.23,2.24-4.19,4.75-5.82,7.46l3.43,2.07c1.46-2.43,3.22-4.69,5.23-6.7l-2.84-2.82Z"
      />
      <path
        fill="#17a24a"
        d="M58.88,22.92l.68-3.94c-3.1-.53-6.33-.69-9.44-.48l.27,3.99c2.8-.19,5.71-.04,8.49,.43Z"
      />
      <path
        fill="#17a24a"
        d="M42.04,24.07l-1.21-3.81c-3.01,.96-5.9,2.28-8.6,3.94l2.09,3.41c2.42-1.49,5.02-2.67,7.72-3.53Z"
      />
      <path
        fill="#17a24a"
        d="M76.77,26.5c-2.51-1.92-5.26-3.54-8.15-4.8l-1.6,3.66c2.6,1.14,5.06,2.59,7.32,4.32l2.43-3.18Z"
      />
      <path fill="#17a24a" d="M39.14,51.24l-8.61-10.53c-2.37,3.07-4.11,6.64-5.05,10.53h13.66Z" />
      <path
        fill="#17a24a"
        d="M33.3,37.62l11.14,13.63h1.87v-6.21l-8.8-10.76c-1.51,.98-2.92,2.1-4.21,3.35Z"
      />
      <path fill="#17a24a" d="M46.31,30.5c-1.79,.42-3.51,1.02-5.14,1.76l5.14,6.29v-8.05Z" />
      <path
        fill="#17a24a"
        d="M59.43,51.36h6.21l10.76-8.8c-.98-1.51-2.1-2.92-3.35-4.21l-13.63,11.14v1.87Z"
      />
      <path fill="#17a24a" d="M59.43,44.19l10.53-8.61c-3.07-2.37-6.64-4.11-10.53-5.05v13.66Z" />
      <path fill="#17a24a" d="M46.2,85.2v-13.66l-10.53,8.61c3.07,2.37,6.64,4.11,10.53,5.05Z" />
      <path fill="#17a24a" d="M78.42,46.22l-6.29,5.14h8.05c-.42-1.79-1.02-3.51-1.76-5.14Z" />
      <path
        fill="#17a24a"
        d="M59.32,64.48v6.21l8.8,10.76c1.51-.98,2.92-2.1,4.21-3.35l-11.14-13.63h-1.87Z"
      />
      <path fill="#17a24a" d="M75.1,75.01c2.37-3.07,4.11-6.64,5.05-10.53h-13.66l8.61,10.53Z" />
      <path
        fill="#17a24a"
        d="M29.22,73.16c.98,1.51,2.1,2.92,3.35,4.21l13.63-11.14v-1.87h-6.21l-10.76,8.8Z"
      />
      <path fill="#17a24a" d="M59.32,85.23c1.79-.42,3.51-1.02,5.14-1.76l-5.14-6.29v8.05Z" />
      <path fill="#17a24a" d="M25.45,64.36c.42,1.79,1.02,3.51,1.76,5.14l6.29-5.14h-8.05Z" />
      <path
        fill="#17a24a"
        d="M55.33,55.46V29.85c-.83-.07-1.67-.12-2.51-.12s-1.61,.04-2.4,.11v25.5H24.81c-.07,.83-.12,1.67-.12,2.52s.04,1.61,.11,2.4h25.5v25.61c.83,.07,1.67,.12,2.51,.12s1.61-.04,2.4-.11v-25.5h25.61c.07-.83,.12-1.67,.12-2.52s-.04-1.61-.11-2.4h-25.5Z"
      />
      <path
        fill="#17a24a"
        d="M17.06,41.34c-.57-.33-1.31-.13-1.64,.44-.33,.57-.14,1.31,.44,1.64,1.24,.73,2.24,1.81,2.87,3.1,.44,.91-.23,1.97-1.24,1.97-.53,0-1.01-.31-1.24-.78-.74-1.5-2.28-2.54-4.07-2.54s-3.33,1.03-4.07,2.54c-.23,.48-.71,.78-1.24,.78-1.01,0-1.69-1.06-1.24-1.97,.63-1.29,1.64-2.38,2.87-3.1,.57-.34,.77-1.07,.44-1.64-.33-.57-1.07-.78-1.64-.44-2.88,1.68-4.81,4.8-4.81,8.38,0,2.13,.69,4.09,1.85,5.69l4.84,7.44c1.42,2.18,4.61,2.18,6.03,0l4.84-7.44c1.16-1.6,1.85-3.57,1.85-5.69,0-3.57-1.93-6.69-4.81-8.38Zm1.67,11.56c-.17,.36-.39,.74-.66,1.1l-.04,.05-4.87,7.49c-.31,.47-.76,.54-1,.54s-.69-.07-1-.54l-4.87-7.49-.04-.05c-.26-.36-.47-.73-.64-1.08-.45-.92,.22-1.98,1.24-1.98,.53,0,1.01,.3,1.24,.78,.74,1.5,2.28,2.54,4.07,2.54s3.33-1.03,4.07-2.54c.23-.47,.71-.78,1.24-.78h0c1.01,0,1.68,1.05,1.25,1.96Z"
      />
      <path
        fill="#17a24a"
        d="M92.57,27.79c-.57-.33-1.31-.13-1.64,.44-.33,.57-.14,1.31,.44,1.64,1.24,.73,2.24,1.81,2.87,3.1,.44,.91-.23,1.97-1.24,1.97-.53,0-1.01-.31-1.24-.78-.74-1.5-2.28-2.54-4.07-2.54s-3.33,1.03-4.07,2.54c-.23,.48-.71,.78-1.24,.78-1.01,0-1.69-1.06-1.24-1.97,.63-1.29,1.64-2.38,2.87-3.1,.57-.34,.77-1.07,.44-1.64-.33-.57-1.07-.78-1.64-.44-2.88,1.68-4.81,4.8-4.81,8.38,0,2.13,.69,4.09,1.85,5.69l4.84,7.44c1.42,2.18,4.61,2.18,6.03,0l4.84-7.44c1.16-1.6,1.85-3.57,1.85-5.69,0-3.57-1.93-6.69-4.81-8.38Zm1.67,11.56c-.17,.36-.39,.74-.66,1.1l-.04,.05-4.87,7.49c-.31,.47-.76,.54-1,.54s-.69-.07-1-.54l-4.87-7.49-.04-.05c-.26-.36-.47-.73-.64-1.08-.45-.92,.22-1.98,1.24-1.98,.53,0,1.01,.31,1.24,.78,.74,1.5,2.28,2.54,4.07,2.54s3.33-1.03,4.07-2.54c.23-.47,.71-.78,1.24-.78h0c1.01,0,1.68,1.05,1.25,1.96Z"
      />
    </svg>
  );
}

function EuropeanCoverIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M40.66,50c0-8.2-6.67-14.86-14.86-14.86s-14.86,6.67-14.86,14.86,6.67,14.86,14.86,14.86,14.86-6.67,14.86-14.86Zm-14.86,10.86c-5.99,0-10.86-4.87-10.86-10.86s4.87-10.86,10.86-10.86,10.86,4.87,10.86,10.86-4.87,10.86-10.86,10.86Z"
      />
      <path
        fill="#17a24a"
        d="M56.35,16.31c-11.4,0-21.87,5.76-28.04,15.04,1.43,.19,2.81,.55,4.13,1.04,5.16-7.01,13.22-11.47,22.06-12.03-2.76,2.07-6.33,5.41-5.99,8.69,.54,5.3,10.6,2.38,13.95-4,1.41,.32,2.38-.43,2.38-.43,0,0-3.14,4.53-1.19,7.18-4.33-1.24-7.29,3.09-7.29,3.09,0,0-7.31-.97-6.66,3.68,.65,4.65,13.84,2.7,14.06,5.52,.22,2.81-9.99-1.84-15.27,1.08-5.28,2.92-4.95,8-4.09,10.6,.87,2.6,3.68,4.65,6.92,4.65s6.06-.65,6.17,2.7c.11,3.35,1.84,10.38,4.65,11.57,2.81,1.19,6.92,.32,7.25-4.54,.32-4.87,1.95-6.81,4.54-9.19,2.6-2.38,3.57-5.73-.76-9.63,5.73,2.49,5.08-1.33,5.08-1.33,0,0,4.56,2.27,7.75,1.68-.88,15.59-13.84,28.01-29.64,28.01-9.56,0-18.39-4.59-23.91-12.08-1.31,.5-2.7,.85-4.13,1.04,6.17,9.28,16.64,15.04,28.04,15.04,18.58,0,33.7-15.12,33.7-33.7s-15.12-33.7-33.7-33.7Z"
      />
      <polygon fill="#17a24a" points="30.71 44.55 24.56 50.7 20.88 47.03 18.05 49.86 24.56 56.36 33.54 47.38 30.71 44.55" />
    </svg>
  );
}

function OneWayRentalsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M47.91,74.22l2.07,3.18c4.37,6.71,14.2,6.71,18.56,0l14.9-22.92c3.58-4.93,5.69-10.98,5.69-17.54,0-11.01-5.95-20.62-14.81-25.8-1.76-1.03-4.03-.4-5.06,1.37-1.02,1.77-.42,4.02,1.34,5.06,3.81,2.24,6.9,5.57,8.85,9.56,1.37,2.8-.72,6.07-3.83,6.07-1.63,0-3.1-.94-3.82-2.4-2.28-4.63-7.03-7.81-12.54-7.81s-10.26,3.19-12.54,7.81c-.72,1.46-2.19,2.4-3.82,2.4h0c-3.12,0-5.2-3.26-3.83-6.07,1.95-3.99,5.04-7.32,8.85-9.56,1.76-1.04,2.36-3.29,1.34-5.06-1.02-1.77-3.29-2.4-5.06-1.37-8.86,5.18-14.81,14.8-14.81,25.8,0,6.55,2.11,12.61,5.69,17.54l10.65,16.37c-4.02,2.14-6.53,5.23-6.53,8.74,0,6.6,8.81,11.77,20.07,11.77s20.07-5.17,20.07-11.77c0-2.41-1.19-4.63-3.23-6.47l-2.23,3.42c.93,.99,1.45,2.03,1.45,3.05,0,3.68-6.6,7.77-16.07,7.77s-16.07-4.1-16.07-7.77c0-1.88,1.75-3.87,4.72-5.37Zm5.21-40.59l4.41,4.41,7.88-7.88,2.83,2.83-10.7,10.71-7.24-7.24,2.83-2.83Zm-12.05,16.49c-.81-1.12-1.46-2.25-1.98-3.32-1.37-2.82,.67-6.11,3.81-6.11,1.63,0,3.1,.94,3.82,2.4,2.27,4.63,7.03,7.82,12.54,7.82s10.27-3.19,12.54-7.82c.72-1.46,2.19-2.4,3.82-2.4h0c3.11,0,5.17,3.24,3.84,6.05-.53,1.11-1.19,2.27-2.02,3.38l-.11,.15-15.01,23.08c-.94,1.45-2.33,1.66-3.07,1.66s-2.13-.22-3.07-1.66l-15.01-23.08-.11-.15Z"
      />
      <polygon fill="#17a24a" points="23.99 61.75 32.05 69.81 23.99 77.88 26.82 80.71 37.71 69.81 26.82 58.92 23.99 61.75" />
      <polygon fill="#17a24a" points="9.45 61.75 17.52 69.81 9.45 77.88 12.28 80.71 23.17 69.81 12.28 58.92 9.45 61.75" />
    </svg>
  );
}

function InsuranceIncludedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M56.76,79.54c0,1.37-1.12,2.49-2.49,2.49s-2.49-1.12-2.49-2.49v-31.83c-.58-.08-1.18-.13-1.79-.13-.76,0-1.49,.07-2.21,.2v31.76c0,3.58,2.91,6.49,6.49,6.49s6.49-2.91,6.49-6.49v-3.74h-4v3.74Z"
      />
      <path
        fill="#17a24a"
        d="M57.39,15.41c4.24,6.88,6.71,19.51,7.22,32.38,2.24-2.75,6.25-4.58,10.82-4.58,5.24,0,9.74,2.4,11.69,5.83h.84c-1.66-16.82-14.25-30.43-30.58-33.64Z"
      />
      <path
        fill="#17a24a"
        d="M12.03,49.04h.84c1.95-3.43,6.45-5.83,11.69-5.83,4.58,0,8.58,1.83,10.82,4.58,.51-12.87,2.98-25.5,7.22-32.38-16.32,3.2-28.91,16.81-30.58,33.64Z"
      />
      <path
        fill="#17a24a"
        d="M60.61,47.54c-.63-15.77-4-26.82-7.4-31.28-.76-.99-1.94-1.58-3.19-1.58h-.03c-1.25,0-2.43,.59-3.19,1.58-3.4,4.45-6.77,15.5-7.4,31.28,2.28-2.61,6.17-4.34,10.61-4.34s8.34,1.73,10.61,4.34Z"
      />
    </svg>
  );
}

function OwnInsuranceDiscountIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M94,45.8L57.16,19.96c-1.92-1.34-4.25-1.95-6.58-1.71l-19.47,2.01c-3.42,.35-6.03,2.83-6.79,5.91-4.4,.99-9.04,3.38-13.21,6.87C1.55,41.03-2.18,51.79,2.63,57.54c1.9,2.28,4.82,3.38,8.24,3.38,5.21,0,11.6-2.55,17.38-7.38,4.4-3.68,7.75-8.14,9.42-12.55,1.82-4.8,1.49-9.05-.94-11.96l-3.07,2.57c1.16,1.39,1.45,3.46,.88,5.94-2.66-.82-4.59-3.28-4.59-6.21,0-3.59,2.91-6.51,6.51-6.51s6.51,2.91,6.51,6.51c0,.64-.1,1.25-.27,1.83,.35,2.64,.02,5.54-1.04,8.59-1.54,4.45-4.55,8.91-8.58,12.8l36.73,25.77c3.69,2.59,8.78,1.69,11.37-2l14.82-21.16c2.58-3.69,1.69-8.77-2-11.36Zm-68.31,4.67c-7.58,6.33-16.73,8.4-19.99,4.5-3.25-3.89,.4-12.54,7.98-18.87,3.38-2.83,7.19-4.88,10.72-5.84l4.37,17.26c-.95,1.02-1.97,2.01-3.09,2.94Zm48.02,1.08l2.29-2.98c.27-.35,.77-.41,1.11-.15l1.91,1.47c.35,.27,.41,.77,.15,1.11l-2.29,2.98c-.27,.35-.77,.41-1.11,.15l-1.91-1.47c-.35-.27-.41-.77-.15-1.11Zm-27.9-.55l-1.94-1.49c-.34-.26-.41-.75-.14-1.09l10.44-13.59-1.89-1.45c-.34-.26-.41-.75-.14-1.09l1.49-1.94c.26-.34,.75-.41,1.09-.14l4.26,3.27c.45,.34,.53,.98,.19,1.43l-12.26,15.96c-.26,.34-.75,.41-1.09,.14Zm11.29,8.73l-3.41-2.62c-2.24-1.72-2.67-4.95-.94-7.2l7.13-9.28c1.72-2.24,4.95-2.67,7.2-.94l3.41,2.62c2.24,1.72,2.67,4.95,.94,7.2l-7.13,9.28c-1.72,2.25-4.95,2.67-7.2,.94Zm19.94,8.55l-2.29,2.98c-.27,.35-.77,.41-1.12,.15l-1.91-1.47c-.35-.27-.41-.77-.15-1.11l2.29-2.98c.27-.35,.77-.41,1.12-.15l1.91,1.47c.35,.27,.41,.77,.15,1.11Zm8.86-11.04l-19.37,8.98c-.29,.14-.64,0-.78-.28l-1.19-2.57c-.14-.29,0-.64,.28-.78l19.37-8.98c.29-.14,.64,0,.78,.28l1.19,2.57c.14,.29,0,.64-.28,.78Z"
      />
      <path
        fill="#17a24a"
        d="M56.24,46.43h11.7c.63,0,1.13,.51,1.13,1.13v4.3c0,.63-.51,1.13-1.13,1.13h-11.7c-.63,0-1.13-.51-1.13-1.13v-4.3c0-.63,.51-1.13,1.13-1.13Z"
        transform="translate(-15.16 68.67) rotate(-52.47)"
      />
    </svg>
  );
}

function WideVehicleChoiceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true" className="h-[8.1rem] w-[8.1rem]">
      <path
        fill="#17a24a"
        d="M30.17,61.7h0c0-6.11,4.97-11.07,11.07-11.07,2.73,0,5.22,.99,7.15,2.64v-18.4H29.61c-2.4,0-4.7,.93-6.42,2.6l-6.71,6.49h-1.11c-4.93,0-9.27,2.51-11.83,6.31h4.88v4H1.69c-.36,1.25-.56,2.57-.56,3.93v3.51h7.24c0,3.9,3.17,7.07,7.07,7.07s7.07-3.17,7.07-7.07h7.66Zm-4.2-21.37c.98-.94,2.28-1.47,3.64-1.47h15.02l-4.83,4.61c-.84,.8-1.95,1.25-3.11,1.25h-15.25l4.53-4.38Zm-9.41,9.93h11.71v4h-11.71v-4Zm-1.12,14.52c-1.7,0-3.07-1.38-3.07-3.07h6.15c0,1.7-1.38,3.07-3.07,3.07Z"
      />
      <path
        fill="#17a24a"
        d="M34.17,61.7c0,3.9,3.17,7.07,7.07,7.07s7.07-3.17,7.07-7.07-3.17-7.07-7.07-7.07-7.07,3.17-7.07,7.07Zm10.15,0c0,1.7-1.38,3.07-3.07,3.07s-3.07-1.38-3.07-3.07,1.38-3.07,3.07-3.07,3.07,1.38,3.07,3.07Z"
      />
      <path
        fill="#17a24a"
        d="M66.01,61.7c0-3.9-3.17-7.07-7.07-7.07s-7.07,3.17-7.07,7.07,3.17,7.07,7.07,7.07,7.07-3.17,7.07-7.07Zm-10.15,0c0-1.7,1.38-3.07,3.07-3.07s3.07,1.38,3.07,3.07-1.38,3.07-3.07,3.07-3.07-1.38-3.07-3.07Z"
      />
      <path
        fill="#17a24a"
        d="M98.57,50.25v-6.55c0-2.78-.43-5.55-1.34-8.18-1.53-4.41-4.76-10.64-11.49-15.64-1.45-1.08-3.19-1.68-5-1.68h-28.8V53.13c1.91-1.57,4.35-2.51,7-2.51,6.11,0,11.07,4.97,11.07,11.07,0,0,0,0,0,0h6.94c0,3.9,3.18,7.07,7.07,7.07s7.07-3.17,7.07-7.07h7.47v-7.45h-5.54v-4h5.54Zm-41.53-8.61v-13.44h6.43l3.18,13.44h-9.61Zm27.84,12.61h-11.71v-4h11.71v4Zm-.86,10.52c-1.69,0-3.07-1.38-3.07-3.07h6.15c0,1.69-1.38,3.07-3.07,3.07Zm-13.08-23.13l-3.64-13.72h21.16c5.03,6.07,5.98,12.32,6.11,13.4v.31h-23.63Z"
      />
      <path fill="#17a24a" d="M50,79.8c-10.82,0-22.88-4.1-22.88-9.99h-4c0,7.84,11.81,13.99,26.88,13.99s26.88-6.14,26.88-13.99h-4c0,5.89-12.06,9.99-22.88,9.99Z" />
    </svg>
  );
}

export function HomePage({
  currentLocationLabel,
  faqs,
  heroImage,
  heroImageAlt,
  heroTitle,
  heroDescription,
  serviceAreasTitle,
  serviceAreasDescription,
  infoContentSectionKicker,
  infoContentSectionTitle,
  infoContentSectionIntro,
  infoContentBlock1Title,
  infoContentBlock1Body,
  infoContentBlock2Title,
  infoContentBlock2Body,
  infoContentBlock3Title,
  infoContentBlock3Body,
  bottomCtaTitle,
  bottomCtaDescription,
  secondaryCtaTitle,
  secondaryCtaDescription,
}: HomePageProps) {
  const textMatchesLocation = (text: string | undefined, location: string) => {
    if (!text) return false;
    return text.toLowerCase().includes(location.toLowerCase());
  };

  const heroBackgroundImage = heroImage ?? "/images/homepage-hero-country-road.jpg";
  const resolvedHeroImageAlt =
    heroImageAlt ?? "Scenic country road for vehicle hire hero banner";
  const locationLinks = buildLocationLinks(currentLocationLabel);
  const pageLocation = currentLocationLabel || mainLocationName;
  const pageTitle =
    currentLocationLabel
      ? textMatchesLocation(heroTitle, currentLocationLabel)
        ? heroTitle!
        : `Vehicle Hire ${currentLocationLabel}`
      : heroTitle ?? `Vehicle Hire ${mainLocationName}`;
  const pageSummary =
    currentLocationLabel
      ? textMatchesLocation(heroDescription, currentLocationLabel)
        ? heroDescription!
        : `Vehicle Hire ${currentLocationLabel} for local convenience and longer road trips. Flexible rental for cars, vans, minibuses and trucks, with practical support for home, work and transport needs.`
      : heroDescription ??
        `Vehicle Hire ${mainLocationName} for cars, vans, minibuses and trucks. Flexible rental options for personal travel, business use, local moves and longer UK journeys.`;
  const resolvedServiceAreasTitle = serviceAreasTitle ?? "Covering Barnstaple and nearby North Devon towns";
  const resolvedServiceAreasDescription =
    serviceAreasDescription ?? "Based around Barnstaple, we cover North Devon towns and surrounding areas with self-drive car hire, van hire, minibus hire and truck hire for business and personal use.";
  const resolvedInfoContentSectionKicker =
    infoContentSectionKicker ?? "Local hire guidance";
  const resolvedInfoContentSectionTitle =
    infoContentSectionTitle ?? "Planning vehicle hire in and around Barnstaple";
  const resolvedInfoContentSectionIntro =
    infoContentSectionIntro ?? "Barnstaple sits at the centre of many everyday journeys in North Devon, so vehicle hire here is often about practicality. Whether you need extra load space, more seats or a reliable vehicle for a longer trip, the right rental can make local and regional travel much easier.";
  const resolvedInfoContentBlock1Title =
    infoContentBlock1Title ?? "Getting around North Devon efficiently";
  const resolvedInfoContentBlock1Body =
    infoContentBlock1Body ?? "Barnstaple is a practical base for travel across North Devon, whether you are heading towards Braunton, Bideford, South Molton or the coast. Hiring locally can make sense when your own vehicle is too small, unavailable or simply not suited to the journey ahead.";
  const resolvedInfoContentBlock2Title =
    infoContentBlock2Title ?? "Useful options for work and moving days";
  const resolvedInfoContentBlock2Body =
    infoContentBlock2Body ?? "Van and truck hire is often useful in Barnstaple for home moves, furniture collection, site work and trade deliveries. If you need the vehicle brought to your address or workplace, delivery can save time and simplify the day.";
  const resolvedInfoContentBlock3Title =
    infoContentBlock3Title ?? "Choosing the right vehicle for the route";
  const resolvedInfoContentBlock3Body =
    infoContentBlock3Body ?? "For family trips, group travel and longer drives through Devon and beyond, choosing the right size vehicle matters. A car, 7-seater or minibus can give you the extra room you need without turning the journey into a squeeze.";
  const resolvedBottomCtaTitle = bottomCtaTitle ?? "Book the right vehicle for your trip";
  const resolvedBottomCtaDescription =
    bottomCtaDescription ?? `Tell us what you need to move, carry or plan, and we will help you find a suitable hire vehicle in ${pageLocation}.`;
  const resolvedSecondaryCtaTitle =
    secondaryCtaTitle ?? `Talk through your ${pageLocation} hire plans`;
  const resolvedSecondaryCtaDescription =
    secondaryCtaDescription ?? `If you want to compare vehicle sizes, trip suitability or delivery options in ${pageLocation}, speak to our team and we will help you narrow it down.`;
  const resolvedHeroCardTitle = `Straightforward ${pageLocation} hire support`;
  const resolvedHeroCardPoint1 = `${pageLocation} cars to trucks`;
  const resolvedHeroCardPoint2 = `Delivery available in ${pageLocation}`;
  const resolvedHeroCardPoint3 = "UK and one-way options";
  const resolvedChooseVehicleTitle = `Choose your vehicle in ${pageLocation}`;
  const resolvedChooseVehicleDescription = `Pick a vehicle that fits the journey, the load and the people travelling in and around ${pageLocation}.`;
  const resolvedWhyChooseSectionTitle = `Why customers choose SDVH ${pageLocation}`;
  const resolvedWhyChooseParagraph1 = `Hiring a vehicle in ${pageLocation} should feel clear and manageable, especially when time matters. We focus on practical self-drive rental with a broad fleet, helpful booking support and services that work for both personal and commercial use around ${pageLocation}.`;
  const resolvedWhyChooseParagraph2 = `From short local jobs to longer planned journeys, we aim to make access to the right vehicle simpler for customers booking in ${pageLocation}. That includes everyday car hire, moving vans, group travel vehicles and heavier-duty transport with flexible options designed around real travel needs.`;
  const resolvedVehicleTypesSectionTitle = `Vehicles for work, travel and transport in ${pageLocation}`;
  const resolvedVehicleTypesParagraph1 = `Our fleet is set up for everyday driving, planned transport and specialist jobs in ${pageLocation}. Whether you need a compact car for local mileage, a van for moving stock, a minibus for group travel or a truck for heavier work, we offer practical self-drive choices backed by straightforward booking support.`;
  const resolvedVehicleTypesParagraph2 = `We help customers hiring in ${pageLocation} arrange vehicles for short local runs, longer UK journeys, one-way moves and selected European travel. With a wide vehicle mix and guidance on choosing the right size, it is easier to book something that actually fits the job.`;
  const resolvedFaqSectionTitle = `${pageLocation} vehicle hire FAQs`;

  const vehicleCategories = [
    {
      title: "Car",
      description: `Cars for everyday travel, family use and longer journeys around ${pageLocation}.`,
      href: "#vehicle-types",
      image: "/images/CAR-150x150.png",
    },
    {
      title: "Van",
      description: `Vans for moves, deliveries and business use in ${pageLocation}.`,
      href: "#vehicle-types",
      image: "/images/VAN-150x150.png",
    },
    {
      title: "Minibus",
      description: `Minibuses for group outings, events and shared travel from ${pageLocation}.`,
      href: "#vehicle-types",
      image: "/images/MINI-BUS-150x150.png",
    },
    {
      title: "Truck",
      description: `Trucks for heavier loads, trade work and site transport in ${pageLocation}.`,
      href: "#vehicle-types",
      image: "/images/TRUCK-150x150.png",
    },
  ];

  const benefits = [
    {
      title: "Free Delivery & Collection",
      description: `Free delivery and collection is available in many areas around ${pageLocation}, helping you get on the road without an extra trip to collect the vehicle. It is a simple option for home moves, business hires and busy schedules.`,
      icon: DeliveryCollectionIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "Unlimited Rental Mileage",
      description: `Unlimited mileage is available on many standard hires, making it easier to plan longer journeys from ${pageLocation} without constantly checking distance. It suits touring, repeat site visits and broad regional travel.`,
      icon: UnlimitedMileageIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "Entire United Kingdom Coverage",
      description: `Although we serve ${pageLocation} closely, our wider network supports hires across the UK. That means more flexibility for collection, delivery and longer-distance travel planning.`,
      icon: NationwideCoverageIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "European Cover Option",
      description: `Planning to take your hire vehicle abroad from ${pageLocation}? European travel can often be arranged on suitable vehicles, giving you a practical option for longer business trips, holidays and cross-border journeys.`,
      icon: EuropeanCoverIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "One Way Vehicle Rental",
      description: `One-way hire is available on selected bookings, which is useful if your journey from ${pageLocation} starts in one place and ends in another. It can save time on relocations, business deliveries and planned route changes.`,
      icon: OneWayRentalsIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "Insurance Is Included",
      description: `Insurance is included as part of the hire, so customers booking in ${pageLocation} can plan with a clearer idea of what is covered. Our team can explain the details and help you choose the right vehicle for the job.`,
      icon: InsuranceIncludedIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "Company Own Insurance - 10%",
      description: `If you already have suitable cover in place, speak to our team when booking in ${pageLocation}. We can confirm whether an own-insurance arrangement is possible on your chosen vehicle.`,
      icon: OwnInsuranceDiscountIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
    {
      title: "Wide Range Available",
      description: `From everyday cars to practical vans, minibuses and heavier trucks, we offer a broad rental range for personal and commercial use in ${pageLocation}. That makes it easier to match the vehicle to the journey, rather than compromise.`,
      icon: WideVehicleChoiceIcon,
      iconClassName: "text-[var(--brand-green)]",
      iconWrapperClassName: "bg-transparent p-0",
    },
  ];

  const vehicleTypes = [
    {
      title: "Car Hire",
      image: "/images/CarRental.jpg",
      description: `Our car hire range in ${pageLocation} covers everything from simple runaround models to family cars, automatics, executive options and larger 7-seaters for passengers and luggage.`,
      details: `Car hire suits business appointments, weekend travel, replacement transport and longer journeys from ${pageLocation} where comfort matters. If you need something efficient for town driving or a roomier vehicle for family use, we can help point you to a practical match.`,
    },
    {
      title: "Van Hire",
      image: "/images/VanRental.jpg",
      description: `We supply vans in ${pageLocation} for home moves, business deliveries, stock collection and trade work, from compact models to larger panel vans and specialist load-carrying options.`,
      details: "Choices can include smaller vans for light urban use, medium wheelbase vans for regular transport, and larger vehicles such as Transit-style vans, Lutons and tail-lift options where extra space or easier loading is needed.",
    },
    {
      title: "Minibus Hire",
      image: "/images/MinibusRental.jpg",
      description: `Minibus hire is ideal when keeping a group together matters more than taking multiple cars. We offer practical options in ${pageLocation} for family events, sports trips and organised outings.`,
      details: "Depending on the requirement, minibuses can suit smaller and larger groups with useful luggage space and straightforward self-drive convenience. They are often chosen for airport runs, celebrations, school-related travel and touring around the UK.",
    },
    {
      title: "Truck Hire",
      image: "/images/TruckRental.jpg",
      description: `For heavier transport needs, our truck hire options in ${pageLocation} support site work, trade jobs and larger load movements that go beyond standard van capacity.`,
      details: `Available vehicle types may include practical working formats such as tipper, dropside and curtain-side trucks, helping with materials, machinery, equipment or bulky stock. If the job needs stronger payload support, truck hire can be the right step up.`,
    },
  ];

  const faqItems =
    faqs ??
    [
      {
        question: "What types of vehicles can I hire?",
        answer: "We provide car hire, van hire, minibus hire and truck hire, so you can book for anything from a weekend away to a business delivery or house move.",
      },
      {
        question: "Do you offer delivery and collection?",
        answer: "Yes, delivery and collection is available in many areas. Let us know your location and preferred timing when you enquire, and we will confirm the options.",
      },
      {
        question: "Can I arrange a one-way rental?",
        answer: "One-way hire is available on selected bookings. If you need to collect in one place and return elsewhere, we can check what works for your route.",
      },
      {
        question: "Can I take a hire vehicle to Europe?",
        answer: "European travel can be arranged on suitable vehicles, but it needs to be agreed before travel. Contact us in advance so we can confirm availability and documents.",
      },
      {
        question: "Is unlimited mileage available?",
        answer: "Many hires include unlimited mileage, depending on the vehicle and rental type. We will confirm this clearly when you book.",
      },
    ];

  return (
    <div className="min-h-screen bg-[var(--page-background)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[var(--brand-green-dark)] bg-[var(--brand-green)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/SDVH_logo.svg"
              alt={companyName}
              width={193}
              height={62}
              className="h-11 w-auto"
            />
            <span className="text-[1.65rem] font-semibold tracking-[-0.02em] text-white sm:text-[2.025rem]">
              {mainLocationName}
            </span>
          </Link>
          <nav className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto sm:justify-end">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                Locations
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full mt-3 w-64 rounded-3xl border border-slate-200 bg-white p-3 text-slate-900 shadow-2xl">
                {locationLinks.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block rounded-2xl px-4 py-3 text-sm transition hover:bg-slate-50"
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="rounded-full bg-[var(--brand-blue)] px-6 text-white hover:bg-[var(--brand-blue-dark)]" asChild>
              <a href={phoneHref}>Book Now</a>
            </Button>
          </nav>
        </div>
      </header>

      <section className="border-b border-[var(--brand-green)]/15 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center justify-items-center gap-x-6 gap-y-2 px-4 py-3 text-center text-sm font-bold text-[var(--brand-green)] md:flex md:flex-nowrap md:items-center md:justify-center md:gap-x-32 md:px-6">
          <span className="w-full md:w-auto">One Way Rentals</span>
          <span className="w-full md:w-auto">Unlimited Mileage</span>
          <span className="w-full md:w-auto">Free Delivery & Collection</span>
          <span className="w-full md:w-auto">Entire UK Coverage</span>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBackgroundImage}
            alt={resolvedHeroImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="max-w-4xl rounded-[32px] border border-white/10 bg-slate-950/30 p-6 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.95)] backdrop-blur-md md:p-8">
            <div className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              {pageLocation}
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-balance md:text-6xl">
              {pageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              {pageSummary}
            </p>
          </div>

          <Card className="overflow-hidden rounded-[32px] border-white/10 bg-white/95 p-0 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.85)]">
            <div className="grid gap-6 p-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                  {resolvedHeroCardTitle}
                </h2>
              </div>
              <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--brand-green)]/10 bg-[var(--brand-green-soft)] px-4 py-4 font-semibold leading-6">
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
                <div className="rounded-2xl border border-[var(--brand-green)]/10 bg-[var(--brand-green-soft)] px-4 py-4 font-semibold leading-6">
                  <p>Saturday</p>
                  <p>8:00 AM - 5:00 PM</p>
                  <p className="mt-2">Sunday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-[var(--brand-blue)] px-7 text-white hover:bg-[var(--brand-blue-dark)]"
                  asChild
                >
                  <a href={phoneHref}>Call {phoneDisplay}</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl px-8 py-12 text-center md:px-12">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-6xl">
            {resolvedChooseVehicleTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            {resolvedChooseVehicleDescription}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {vehicleCategories.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="relative flex h-32 w-full max-w-[207px] items-center justify-center p-4">
                  <Image
                    src={item.image}
                    alt={`${item.title} placeholder`}
                    fill
                    className="object-contain"
                    sizes="207px"
                  />
                </div>
                <p className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[var(--brand-green)]">
                  {item.title}
                </p>
                <Button
                  size="sm"
                  className="mt-4 rounded-full bg-[var(--brand-blue)] px-5 text-sm text-white hover:bg-[var(--brand-blue-dark)]"
                  asChild
                >
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-green)]">
              {`Why Choose SDVH ${pageLocation}`}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
              {resolvedWhyChooseSectionTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {resolvedWhyChooseParagraph1}
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {resolvedWhyChooseParagraph2}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <Card key={item.title} className="rounded-[28px] border-slate-200 p-7">
                <div className={`flex w-full justify-center ${item.iconWrapperClassName ?? "rounded-2xl bg-[var(--brand-green-soft)] p-3"} ${item.iconClassName ?? "text-[var(--brand-green)]"}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
            {resolvedVehicleTypesSectionTitle}
          </h2>
          <p className="mt-6 text-left text-lg leading-8 text-slate-600">
            {resolvedVehicleTypesParagraph1}
          </p>
          <p className="mt-5 text-left text-lg leading-8 text-slate-600">
            {resolvedVehicleTypesParagraph2}
          </p>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {vehicleTypes.map((item) => (
            <div key={item.title} className="grid gap-6">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(135deg,#eef7f0_0%,#f9fcfa_100%)] shadow-[0_18px_50px_-35px_rgba(15,23,42,0.28)]">
                <Image
                  src={item.image}
                  alt={`${item.title} placeholder`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="px-2">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
                <p className="mt-4 text-lg leading-8 text-slate-600">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[18px] border-2 border-[var(--brand-green)] bg-[linear-gradient(120deg,rgba(248,251,250,0.98),rgba(238,247,240,0.9))]">
          <div className="px-8 py-12 text-center md:px-12">
            <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-6xl">
              {resolvedSecondaryCtaTitle}
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-slate-950">
              {resolvedSecondaryCtaDescription}
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-xl bg-[var(--brand-blue)] px-8 text-white hover:bg-[var(--brand-blue-dark)]"
              asChild
            >
              <a href={phoneHref}>Call: {phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbf9_0%,#ffffff_100%)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-green)]">
              Service Areas
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
              {resolvedServiceAreasTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {resolvedServiceAreasDescription}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {locationLinks.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--brand-green)]/40 hover:text-[var(--brand-green)]"
                >
                  {location.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-green)]">
              {resolvedInfoContentSectionKicker}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
              {resolvedInfoContentSectionTitle}
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-8 text-lg leading-8 text-slate-600">
            <p>{resolvedInfoContentSectionIntro}</p>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {resolvedInfoContentBlock1Title}
              </h3>
              <p className="mt-2">{resolvedInfoContentBlock1Body}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {resolvedInfoContentBlock2Title}
              </h3>
              <p className="mt-2">{resolvedInfoContentBlock2Body}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {resolvedInfoContentBlock3Title}
              </h3>
              <p className="mt-2">{resolvedInfoContentBlock3Body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-green)]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl">
            {resolvedFaqSectionTitle}
          </h2>
        </div>
        <div className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 shadow-sm">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border-b border-slate-200 py-2 last:border-b-0" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-slate-950">
                <span>{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-base leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[18px] border-2 border-[var(--brand-green)] bg-[linear-gradient(120deg,rgba(248,251,250,0.98),rgba(238,247,240,0.9))]">
          <div className="px-8 py-12 text-center md:px-12">
            <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-6xl">
              {resolvedBottomCtaTitle}
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-slate-950">
              {resolvedBottomCtaDescription}
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-xl bg-[var(--brand-blue)] px-8 text-white hover:bg-[var(--brand-blue-dark)]"
              asChild
            >
              <a href={phoneHref}>Call: {phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--brand-green-dark)] bg-[var(--brand-green)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14 text-center md:items-start md:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <Image
                src="/images/SDVH_logo.svg"
                alt={companyName}
                width={193}
                height={62}
                className="h-11 w-auto"
              />
              <span className="text-[2.63rem] font-semibold tracking-[-0.02em] text-white">
                {mainLocationName}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-green-50">
              <a href={phoneHref}>Phone: {phoneDisplay}</a>
              <p>Opening hours: Mon to Fri 8am to 6pm</p>
              <p>Saturday 8am to 5pm, Sunday 9am to 5pm</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 px-6 py-5 text-center text-sm text-green-50">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
