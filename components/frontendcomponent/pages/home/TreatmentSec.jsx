"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Button from "../../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ANGLE_STEP = 60;
const DOT_COUNT = 6;

export default function TreatmentSec() {
  const rotationSteps = useRef(0);
  const prevRealIndex = useRef(0);

  const [rotation, setRotation] = useState(0);

  const stepsRotated = Math.round(-rotation / ANGLE_STEP);
  const activeSlot = ((stepsRotated % DOT_COUNT) + DOT_COUNT) % DOT_COUNT;

  return (
    <div className="treatment_sec">
      <div className="circle_wrapper">
        <h6 className="title">Treatments</h6>
        <div
          className="circle_rotater"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <div
              key={i}
              className={`dots${i === activeSlot ? " active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="content_wrapper">
        <Swiper
          className="content_slider"
          loop={true}
          direction="vertical"
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 2.5, spaceBetween: 35 },
            540: { slidesPerView: 2.8, spaceBetween: 33 },
            768: { slidesPerView: 2.6, spaceBetween: 45 },
            991: { slidesPerView: 2.8, spaceBetween: 25 },
            1281: { slidesPerView: 2.8, spaceBetween: 40 },
          }}
          modules={[Autoplay]}
          speed={2000}
          onSlideChange={(swiper) => {
            const newIndex = swiper.realIndex;
            if (newIndex === prevRealIndex.current) return;

            rotationSteps.current += 1;
            setRotation(-rotationSteps.current * ANGLE_STEP);
            prevRealIndex.current = newIndex;
          }}
        >
          {treatments.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="content_col">
                <div className="count">{String(i + 1).padStart(2, "0")}</div>
                <div className="content_details">
                  <figcaption>
                    <h4>{item.title}</h4>
                    <div className="desc">
                      <p>{item.desc}</p>
                    </div>
                    <Button variant="btn-border-primary">Read More</Button>
                  </figcaption>
                  <figure>
                    <Image
                      src={item.image}
                      width={138}
                      height={161}
                      alt={item.title}
                    />
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const treatments = [
  {
    title: "Spine & Joint Care",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category1.jpg",
  },
  {
    title: "Wellness & Longevity Care",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category2.jpg",
  },
  {
    title: "Metabolic and Lifestyle  Disease Management",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category3.jpg",
  },
  {
    title: "Spine & Joint Care",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category1.jpg",
  },
  {
    title: "Wellness & Longevity Care",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category2.jpg",
  },
  {
    title: "Metabolic and Lifestyle  Disease Management",
    desc: "Advanced spine and joint care designed to restore mobility, relieve pain, and help you live an active, healthier life with expert-led personalized treatments.",
    image: "/image/home/category3.jpg",
  },
];
