import Image from "next/image";

export default function MissionVision() {
  return (
    <div className="mission_vision sec-pad-all">
      <div className="container">
        <div className="vision_col">
          <figcaption>
            <h3>Vision</h3>
            <div className="desc">
              <p>
                To become India’s most trusted and transformative network of
                integrated functional and regenerative health centres—redefining
                healthcare from disease management to lifelong vitality, and
                empowering millions to live healthier, longer, and more
                meaningful lives.
              </p>
            </div>
          </figcaption>
          <figure>
            <Image
              src="/image/about/vision.svg"
              width={224}
              height={336}
              alt="vision_img"
            ></Image>
          </figure>
        </div>
        <div className="mission_col">
          <figure>
            <Image
              src="/image/about/mission.svg"
              width={301}
              height={301}
              alt="mission_img"
            ></Image>
          </figure>
          <figcaption>
            <h3>Mission</h3>
            <div className="desc">
              <p>
                At Navayu, our mission is to transform healthcare from reactive
                treatment to proactive healing—by combining advanced medical
                science, functional medicine, regenerative therapies, and
                AI-driven insights to deliver measurable outcomes. We aim to
                make high-quality, integrated healthcare accessible,
                accountable, and outcome-focused—helping individuals prevent
                disease, reverse risk, restore function, and achieve long-term
                vitality.”
              </p>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
