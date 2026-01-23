import Hero from "../components/Hero";
import RealChallenge from "../components/RealChallenge";
// import Services from "../components/Services";
// import Requirements from "../components/Requirements";
// import OurStory from "../components/AboutUs";
// import WhyChooseUs from "../components/WhyChooseUs";
// import HowItWorks from "../components/Process";
// import Contact from "../components/Contact";
// import FAQ from "../components/FAQ";
// import CommonChallenges from "../components/CommenChallenges";
import dynamic from "next/dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ausbildung Consulting for International Applicants | Brightway2Deutschland",
  description:
    "Professional Ausbildung consulting for international applicants. Career guidance, application support, and long-term success in Germany.",
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
