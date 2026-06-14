import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import ScrollIndicator from "../components/ScrollIndicator";

export const metadata: Metadata = {
  title: {
    default: "Aura Organic Coffee | Bio Kaffee & Wellness",
    template: "%s | Aura Organic Coffee",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Cast locale to expected type if necessary for child components, 
  // but for the layout we just need it to be a string for routing purposes.
  const displayLocale = locale === "en" ? "en" : "de";

  return (
    <>
      <Navbar locale={displayLocale} />
      <ScrollIndicator locale={displayLocale} />
      {children}
    </>
  );
}
