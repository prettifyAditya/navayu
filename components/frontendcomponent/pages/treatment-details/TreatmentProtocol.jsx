"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "../../atoms/SwiperButton";

export default function TreatmentProtocol() {
  return (
    <section>
      <div className="treatment_protocol sec-pad-all">
        <div className="heading">
          <h2>Our Treatment Protocol</h2>
        </div>
        <div className="main_wrapper">
          <Swiper
            className="protocol_slider"
            // loop={true}
            modules={[Navigation, Pagination]}
            speed={1000}
            navigation={{
              prevEl: ".protocol-prev",
              nextEl: ".protocol-next",
            }}
            pagination={{
              enabled: true,
              el: ".progressbar",
              type: "progressbar",
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 5,
              },
              540: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              991: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3.8,
                // spaceBetween: 20,
              },
            }}
          >
            {protocolData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="protocol_col">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                  <figure>
                    <Image
                      src={item.imgSrc}
                      width={132}
                      height={132}
                      alt="Protocol"
                    ></Image>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav_wrapper swiper-nav primary-border">
            <SwiperButton classname="protocol-prev primary-border swiper-prev" />
            <div className="progressbar"></div>
            <SwiperButton classname="protocol-next primary-border swiper-next" />
          </div>
        </div>
      </div>
    </section>
  );
}

const protocolData = [
  {
    id: 1,
    title: "DSCB Injection",
    desc: "A minimally invasive, non-surgical treatment that helps relieve disc-related pain, reduce nerve compression, and improve mobility.",
    imgSrc: "/image/treatment/protocol1.svg",
  },
  {
    id: 2,
    title: "PRP/GFC/BMAC",
    desc: "Regenerative therapies that use the body's own healing components to repair tissues, reduce inflammation, and accelerate recovery.",
    imgSrc: "/image/treatment/protocol2.svg",
  },
  {
    id: 3,
    title: "Ozone Discectomy",
    desc: "A blood purification therapy designed to enhance oxygen delivery, improve circulation, and support natural detoxification processes.",
    imgSrc: "/image/treatment/protocol3.svg",
  },
  {
    id: 4,
    title: "DSCB Injection",
    desc: "A minimally invasive, non-surgical treatment that helps relieve disc-related pain, reduce nerve compression, and improve mobility.",
    imgSrc: "/image/treatment/protocol4.svg",
  },
  {
    id: 5,
    title: "Hydrogen Therapy",
    desc: "An advanced therapy that helps combat oxidative stress, support cellular function, and promote overall recovery and wellness.",
    imgSrc: "/image/treatment/protocol5.svg",
  },
  {
    id: 6,
    title: "EBOO Ozone Therapy",
    desc: "A blood purification therapy designed to enhance oxygen delivery, improve circulation, and support natural detoxification processes.",
    imgSrc: "/image/treatment/protocol6.svg",
  },
];
