import Hero from "../components/Hero";
import Services from "../components/Services";
import Requirements from "../components/Requirements";
import OurStory from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/Process";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import RealChallenge from "../components/RealChallenge";
import CommonChallenges from "../components/CommenChallenges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ausbildung Beratung für internationale Bewerber | Brightway2Deutschland",
  description:
    "Professionelle Ausbildung Beratung für internationale Bewerber. Unterstützung bei Bewerbung, Karriereplanung und Start in Deutschland.",
};

export default function DePage() {
  return (
    <>
      <Hero locale="de" />
      <RealChallenge locale="de" />
      <Services locale="de" />
      <CommonChallenges locale="de" />
      <WhyChooseUs locale="de" />
      <HowItWorks locale="de" />
      <Requirements locale="de" />
      <Contact locale="de" />
      <OurStory locale="de" />
      <FAQ locale="de" />
    </>
  );
}
