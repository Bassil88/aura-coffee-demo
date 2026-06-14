import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import LenisProvider from "./providers/LenisProvider";
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
  title: "Aura Organic Coffee | Aura Bio Kaffee",
  description: "Discover the rich flavors of Aura Organic Coffee, your source for premium organic coffee beans and brewing equipment.",

  // metadataBase: new URL("https://brightway2deutschland.com"),
  metadataBase: new URL("https://aura-coffee.vercel.app"),

  alternates: {
    languages: {
      "de-DE": "https://brightway2deutschland.com/de",
      "en-US": "https://brightway2deutschland.com/en",
    },
  },

  openGraph: {
    title: "Aura Organic Coffee | Bio Kaffee & Wellness",
    description: "Discover the rich flavors of Aura Organic Coffee, your source for premium organic coffee beans and brewing equipment.",
    url: "https://brightway2deutschland.com",
    siteName: "Aura Organic Coffee",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
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
              name: "Aura Organic Coffee",
              url: "https://brightway2deutschland.com",
              logo: "https://brightway2deutschland.com/logo1.png",
              image: "https://brightway2deutschland.com/logo1.png",
              description: "Aura Organic Coffee provides premium organic coffee beans and brewing equipment.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-123-4567890",
                contactType: "customer support",
                areaServed: "DE",
                availableLanguage: ["de", "en"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Musterstraße 10",
                addressLocality: "Berlin",
                postalCode: "10827",
                addressCountry: "DE",
              },
            }),
          }}
        />

        <main className="flex-1">
          <CartProvider>
            <LenisProvider>{children}</LenisProvider>
          </CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
