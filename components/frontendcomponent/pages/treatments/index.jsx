"use client";
import Hero from "../../organisms/Hero";
import TreatmentListing from "./TreatmentListing";
import "@/uploads/sass/treatment/treatment.css";

export default function TreatmentsPage() {
  return (
    <main>
      <Hero
        className="treatment-banner"
        video="/video/treatment-banner.mp4"
        poster="/video/treatment-poster.jpg"
        title="Beyond Treatment Towards Total Wellness"
        button={{
          onClick: () => {
            console.log("clicked");
          },
          label: "Book a Consultation",
        }}
      />
      <TreatmentListing />
    </main>
  );
}
