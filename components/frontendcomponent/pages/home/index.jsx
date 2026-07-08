"use client";
import Hero from "@/components/frontendcomponent/organisms/Hero";
import Movement from "./Movement";
import Overview from "./Overview";
import Signature from "./Signature";
import Experts from "./Experts";
import DirectorMessage from "./DirectorMessage";
import HealingVoice from "./HealingVoice";
import EnquireNow from "./EnquireNow";
import TreatmentSec from "./TreatmentSec";
import "@/uploads/sass/home/home.css";
import { useModal } from "@/hooks/useModal";

const Home = () => {
  const { openModal } = useModal();
  return (
    <>
      <Hero
        className="home-hero"
        video="/video/home-banner.mp4"
        poster="/images/hero-banner-poster.png"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
        slider={[
          "Redefining Health. Reimagining Life. ",
          "Take the First Step Toward Pain-Free Living",
          "Innovative Non-Surgical Care for Everyday Wellness",
        ]}
        isHome={true}
      />
      <TreatmentSec />
      <Movement />
      <Overview />
      <Signature />
      <Experts />
      <DirectorMessage />
      <HealingVoice />
      <EnquireNow />
    </>
  );
};

export default Home;
