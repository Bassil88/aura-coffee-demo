import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";

export const metadata: Metadata = {
  title: {
    default: "Aura Organic Coffee | Aura Bio Kaffee",
    template: "%s | Aura Organic Coffee",
  },
  alternates: {
    canonical: "https://brightway2deutschland.com/en",
    languages: {
      de: "https://brightway2deutschland.com/de",
      en: "https://brightway2deutschland.com/en",
      "x-default": "https://brightway2deutschland.com/",
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
