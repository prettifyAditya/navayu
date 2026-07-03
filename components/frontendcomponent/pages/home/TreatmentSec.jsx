"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TreatmentSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="treatment_sec">
      <div className="circle_wrapper">
        <h6 className="title">Treatments</h6>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
      <div className="content_wrapper">
        <Swiper
          className="content_slider"
          direction="vertical"
          allowTouchMove={false}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 15 },
            540: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            991: { slidesPerView: 2.8, spaceBetween: 40 },
          }}
          modules={[Autoplay]}
          speed={2000}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          loop={true}
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
