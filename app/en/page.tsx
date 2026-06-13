import Hero from "../components/Hero";
import RealChallenge from "../components/RealChallenge";
import dynamic from "next/dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura Organic Coffee | Aura Bio Kaffee",
  description:
    "Discover the rich flavors of Aura Organic Coffee, your source for premium organic coffee beans and brewing equipment.",
};

const Services = dynamic(() => import("../components/Services"));
const CommonChallenges = dynamic(() => import("../components/CommenChallenges"));
const WhyChooseUs = dynamic(() => import("../components/WhyChooseUs"));
const HowItWorks = dynamic(() => import("../components/Process"));
const Requirements = dynamic(() => import("../components/Requirements"));
const Contact = dynamic(() => import("../components/Contact"));
const OurStory = dynamic(() => import("../components/AboutUs"));
const FAQ = dynamic(() => import("../components/FAQ"));

export default function EnPage() {
  return (
    <>
      <Hero locale="en" />
      <RealChallenge locale="en" />
      <Services locale="en" />
      <CommonChallenges locale="en" />
      <WhyChooseUs locale="en" />
      <HowItWorks locale="en" />
      <Requirements locale="en" />
      <Contact locale="en" />
      <OurStory locale="en" />
      <FAQ locale="en" />
    </>
  );
}
