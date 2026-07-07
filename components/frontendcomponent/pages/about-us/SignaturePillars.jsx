"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";

export default function SignaturePillars() {
  return (
    <div className="signature_pillars">
      <div className="bg_video">
        <video
          src="/image/about/pillars_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="container">
        <div className="heading">
          <h2>Navayu Signature Pillars</h2>
        </div>
        <div className="main_wrapper">
          <Swiper
            modules={[Navigation]}
            speed={1000}
            className="pillar_slider"
            navigation={{
              prevEl: ".pillar-prev",
              nextEl: ".pillar-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 15 },
              540: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              991: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {pillarData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pillar_col">
                  <div className="icon">
                    <Image
                      src={item.iconSrc}
                      width={60}
                      height={60}
                      alt="pillar_icon"
                    ></Image>
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-nav center-full">
            <SwiperButton classname="pillar-prev white swiper-prev" />
            <SwiperButton classname="pillar-next white swiper-next" />
          </div>
        </div>
      </div>
    </div>
  );
}

const pillarData = [
  {
    id: 1,
    iconSrc: "/image/about/pillar1.svg",
    title: "Root-Cause Healing",
    desc: "Going beyond symptom suppression to identify and treat the underlying cause of disease.",
  },
  {
    id: 2,
    iconSrc: "/image/about/pillar2.svg",
    title: "Whole-Person Care",
    desc: "Treating the body as an integrated system—addressing physical, metabolic, mental, emotional, and lifestyle dimensions of health.",
  },
  {
    id: 3,
    iconSrc: "/image/about/pillar3.svg",
    title: "Science with Integrity",
    desc: "Every therapy offered is guided by clinical reasoning, evolving evidence, and ethical medical practice.",
  },
  {
    id: 4,
    iconSrc: "/image/about/pillar1.svg",
    title: "Root-Cause Healing",
    desc: "Going beyond symptom suppression to identify and treat the underlying cause of disease.",
  },
  {
    id: 5,
    iconSrc: "/image/about/pillar2.svg",
    title: "Whole-Person Care",
    desc: "Treating the body as an integrated system—addressing physical, metabolic, mental, emotional, and lifestyle dimensions of health.",
  },
];
