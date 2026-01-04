import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brightway2Deutschland",
  description: "Helping Asian applicants build a future in Germany",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // NOTE: lang here is fine; real locale lang is set in [locale]/layout.tsx
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* GLOBAL SVG FILTER – OK */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.005 0.005"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="160"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
