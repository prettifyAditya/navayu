import Hero from "@/components/frontendcomponent/organisms/Hero";

export const metadata = {
  title: "Thank You | Navayu",
  description: "Thank You | Navayu",
};

export default function ThankYou() {
  return (
    <Hero
      className="thank-you"
      video="/video/faq_banner.mp4"
      poster="/video/faq_poster.jpg"
      title="Thank You !!"
      button={{
        href: "/",
        label: "Go to home",
      }}
    />
  );
}
