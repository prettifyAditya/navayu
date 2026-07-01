"use client";
import Hero from "@/components/frontendcomponent/organisms/Hero";
import Movement from "./Movement";
import Overview from "./Overview";
import Signature from "./Signature";
import "@/uploads/sass/home/home.css";
import Experts from "./Experts";
import DirectorMessage from "./DirectorMessage";

const Home = () => {
  return (
    <>
      <Hero
        video="/video/home-banner.mp4"
        poster="/images/hero-banner-poster.png"
        button={{
          onClick: () => {
            console.log("clicked");
          },
          label: "Book a Consultation",
        }}
        slider={[
          "Redefining Health. Reimagining Life. ",
          "Take the First Step Toward Pain-Free Living",
          "Innovative Non-Surgical Care for Everyday Wellness",
        ]}
        isHome={true}
      />
      <Movement />
      <Overview />
      <Signature />
      <Experts />
      <DirectorMessage />
    </>
  );
};

export default Home;
