"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import ContactMap from "./ContactMap";
import ContactDetails from "./ContactDetails";
import "@/uploads/sass/contact/contact.css";

export default function ContactUsPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="contact_hero"
        video="/video/contact_banner.mp4"
        poster="/video/contact_poster.jpg"
        tag="Contact Us"
        title="Let’s Start Your Healing Journey"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <ContactDetails />
      <ContactMap />
    </main>
  );
}
