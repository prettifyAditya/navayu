"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "@/uploads/sass/component/component.css";

const Hero = ({
  className = "",
  video,
  poster,
  image,
  title,
  button,
  slider,
  isHome,
}) => {
  const { label, href, onClick } = button;

  return (
    <section className={`banner hero-banner ${className}`}>
      <div className="bg">
        {video && (
          <video
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        )}
        {image && <Image src={image} alt={title} width={1920} height={1080} />}
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="content">
              {title && <h1>{title}</h1>}
              {slider && (
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  spaceBetween={15}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: true,
                  }}
                  modules={[Autoplay]}
                  speed={2000}
                  loop={false}
                >
                  {slider.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <h1>{item}</h1>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
              {href && (
                <Button href={href} variant="btn-gradient-b">
                  {label}
                </Button>
              )}
              {onClick && (
                <Button onClick={onClick} variant="btn-gradient-b">
                  {label}
                </Button>
              )}
            </div>
          </div>
        </div>
        {isHome && (
          <div className="content-bottom">
            <div className="container-fluid">
              <ul>
                {stats.map(({ icon, description }, i) => {
                  return (
                    <li key={i}>
                      <figure>
                        <Image
                          src={icon}
                          alt="Social icon"
                          width={40}
                          height={40}
                        />
                      </figure>
                      <figcaption
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></figcaption>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

const stats = [
  {
    icon: "/icon/youtube.svg",
    description: `<p>Over  <span>55,000+</span> people chose to follow our journey on YouTube</p>`,
  },
  {
    icon: "/icon/instagram.svg",
    description: `<p>More than <span>20,000+</span> individuals connected  with us on Instagram</p>`,
  },
  {
    icon: "/icon/patient.svg",
    description: `<p><span>15,000+</span> Patient  Treated Across India</p>`,
  },
];
