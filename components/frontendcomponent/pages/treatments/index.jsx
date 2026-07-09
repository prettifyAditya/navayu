"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import TreatmentListing from "./TreatmentListing";
import "@/uploads/sass/treatment/treatment.css";

export default function TreatmentsPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="treatment-banner"
        video="/video/treatment-banner.mp4"
        poster="/video/treatment-poster.jpg"
        title="Beyond Treatment Towards Total Wellness"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <TreatmentListing />
    </main>
  );
}
