import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Brightway2Deutschland | Ausbildung Consulting",
    template: "%s | Brightway2Deutschland",
  },
  alternates: {
    canonical: "https://brightway2deutschland.com/en",
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
