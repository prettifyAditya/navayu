"use client";
import { useModal } from "@/hooks/useModal";
import Hero from "../../organisms/Hero";
import BlogWrapper from "./BlogWrapper";
import "@/uploads/sass/blog/blog.css";

export default function BlogListingPage() {
  const { openModal } = useModal();
  return (
    <main>
      <Hero
        className="blog_hero"
        video="/video/blog_banner.mp4"
        poster="/video/blog_poster.jpg"
        tag="Blogs"
        title="Wellness & Health Insights"
        button={{
          onClick: () => openModal("enquirePop"),
          label: "Book a Consultation",
        }}
      />
      <BlogWrapper />
    </main>
  );
}
