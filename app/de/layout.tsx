import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";

export const metadata: Metadata = {
title: {
  default: "Aura Organic Coffee | Bio Kaffee & Wellness",
  template: "%s | Aura Organic Coffee",
},
  alternates: {
    canonical: "https://aura-coffee-demo.vercel.app/de",
    languages: {
      de: "https://aura-coffee-demo.vercel.app/de",
      en: "https://aura-coffee-demo.vercel.app/en",
      "x-default": "https://aura-coffee-demo.vercel.app/",
    },
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar locale="de" />
      <ScrollIndicator locale="de" />
      {children}
    </>
  );
}
