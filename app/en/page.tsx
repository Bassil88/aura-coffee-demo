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

export default function EePage() {
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
