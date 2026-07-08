"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import AboutStory from "./AboutStory";
import DirectorMessage from "./DirectorMessage";
import OurTeam from "../../organisms/OurTeam";
import AwarenessTrust from "./AwarenessTrust";
import MissionVision from "./MissionVision";
import SignaturePillars from "./SignaturePillars";
import Awards from "./Awards";
import NewsMedia from "./NewsMedia";
import "@/uploads/sass/about/about.css";

export default function AboutUsPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="about_hero"
        video="/video/about_banner.mp4"
        poster="/video/about-poster.jpg"
        tag="About Us"
        title="Redefining Healing Through Science"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <AboutStory />
      <DirectorMessage />
      <OurTeam />
      <AwarenessTrust />
      <MissionVision />
      <SignaturePillars />
      <Awards />
      <NewsMedia />
    </main>
  );
}
