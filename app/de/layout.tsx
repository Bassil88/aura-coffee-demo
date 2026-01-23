import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://brightway2deutschland.com/de",
  },
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale="de" />
      {children}
    </>
  );
}
