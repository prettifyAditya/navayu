"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import FaqsListing from "./FaqsListing";
import "@/uploads/sass/faq/faq.css";

export default function FaqPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="faq_hero"
        video="/video/faq_banner.mp4"
        poster="/video/faq_poster.jpg"
        title="Frequently Asked Questions"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <FaqsListing />
    </main>
  );
}
