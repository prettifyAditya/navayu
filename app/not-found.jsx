import Hero from "@/components/frontendcomponent/organisms/Hero";

export const metadata = {
  title: "Not Found | Navayu",
  description: "Not Found | Navayu",
};

export default function NotFound() {
  return (
    <Hero
      className="thank-you"
      video="/video/faq_banner.mp4"
      poster="/video/faq_poster.jpg"
      title="Something went wrong"
      button={{
        href: "/",
        label: "Go to home",
      }}
    />
  );
}
