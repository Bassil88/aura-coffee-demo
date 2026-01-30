import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Brightway2Deutschland | Ausbildung Consulting",
    template: "%s | Brightway2Deutschland",
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

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="en" />
      {children}
    </>
  );
}
