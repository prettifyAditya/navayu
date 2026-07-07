export default function AboutStory() {
  return (
    <section>
      <div className="about_story sec-pad-all">
        <div className="container">
          <div className="main_wrapper flex">
            <figure>
              <video
                src="/video/home-banner.mp4"
                poster="/images/hero-banner.png"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </figure>
            <figcaption>
              <h3>
                This is not just a healthcare story. This is a belief system.
              </h3>
              <p>
                At Navayu, we believe healthcare should begin long before pain,
                fear, or surgery become inevitable. Built on the philosophy of
                regenerative and non-surgical healing, we are redefining what
                modern healthcare can look like — science-led, patient-first,
                and deeply rooted in hope. Our journey is not just about
                treating conditions; it is about empowering the body’s natural
                ability to repair, restore, and heal. Every patient who walks
                through our doors carries a story, a struggle, and a belief that
                recovery can be achieved differently. Through innovation, trust,
                and transformative care, Navayu stands for a future where
                healing is proactive, compassionate, and life-changing.
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
