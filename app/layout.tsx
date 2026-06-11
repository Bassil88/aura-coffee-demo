import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
// import ScrollToContactButton from "./components/ScrollToContactButton";
// import ScrollToContact from "./components/ScrollToContactButton";
import LenisProvider from "./providers/LenisProvider";
// import ScrollShader from "./components/ScrollShader";
import { CartProvider } from "./providers/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brightway2Deutschland | Ausbildung & Career Consulting in Germany",
  description: "Brightway2Deutschland helps international applicants find Ausbildung opportunities and build a professional future in Germany. Personal consulting, guidance, and support.",

  metadataBase: new URL("https://brightway2deutschland.com"),

  alternates: {
    languages: {
      "de-DE": "https://brightway2deutschland.com/de",
      "en-US": "https://brightway2deutschland.com/en",
    },
  },

  openGraph: {
    title: "Brightway2Deutschland | Ausbildung Consulting in Germany",
    description: "Professional Ausbildung consulting for international applicants. Personal guidance, career planning, and support for your future in Germany.",
    url: "https://brightway2deutschland.com",
    siteName: "Brightway2Deutschland",
    locale: "de_DE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="glass-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap in="SourceGraphic" in2="blurred" scale="18" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brightway2Deutschland",
              url: "https://brightway2deutschland.com",
              logo: "https://brightway2deutschland.com/logo.png",
              image: "https://brightway2deutschland.com/logo.png",
              description: "Brightway2Deutschland provides Ausbildung and career consulting for international applicants seeking a professional future in Germany.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-4141-428438",
                contactType: "customer support",
                areaServed: "DE",
                availableLanguage: ["de", "en"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kolonnenstraße 8",
                addressLocality: "Berlin",
                postalCode: "10827",
                addressCountry: "DE",
              },
            }),
          }}
        />

        <main>
          <CartProvider>
            <LenisProvider>{children}</LenisProvider>
          </CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
