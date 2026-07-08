"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import "@/uploads/sass/doctor/doctor.css";
import AvailableDoctors from "./AvailableDoctors";

export default function DoctorListingPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="doctor_hero"
        video="/video/doctor_banner.mp4"
        poster="/video/doctor_poster.jpg"
        title="Meet Our Healthcare Experts"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <AvailableDoctors />
    </main>
  );
}
