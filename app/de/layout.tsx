import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";

export const metadata: Metadata = {
  title: {
    default: "Brightway2Deutschland | Ausbildung & Beratung",
    template: "%s | Brightway2Deutschland",
  },
  alternates: {
    canonical: "https://brightway2deutschland.com/de",
    languages: {
      de: "https://brightway2deutschland.com/de",
      en: "https://brightway2deutschland.com/en",
      "x-default": "https://brightway2deutschland.com/",
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
