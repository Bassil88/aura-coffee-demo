import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";

export const metadata: Metadata = {
  title: {
    default: "Aura Organic Coffee | Aura Bio Kaffee",
    template: "%s | Aura Organic Coffee",
  },
  alternates: {
    canonical: "https://aura-coffee.vercel.app/en",
    languages: {
      de: "https://aura-coffee.vercel.app/de",
      en: "https://aura-coffee.vercel.app/en",
      "x-default": "https://aura-coffee.vercel.app/",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar locale="en" />
      <ScrollIndicator locale="en" />
      {children}
    </>
  );
}
