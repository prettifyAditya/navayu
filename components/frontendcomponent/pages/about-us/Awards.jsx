"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";

export default function Awards() {
  return (
    <div className="awards_sec">
      <div className="container">
        <div className="heading">
          <h2>Awards and Accreditations</h2>
        </div>
        <div className="award_wrapper">
          <Swiper
            modules={[Navigation]}
            className="award_slider"
            speed={1000}
            centeredSlides={true}
            centeredSlidesBounds={true}
            navigation={{
              prevEl: ".award-prev",
              nextEl: ".award-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 15 },
              540: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              991: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {awardsData.map((item) => (
              <SwiperSlide key={item.id}>
                <figure>
                  <Image
                    src={item.imageSrc}
                    width={455}
                    height={321}
                    alt="awards_image"
                  ></Image>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-nav center-full">
            <SwiperButton classname="award-prev no-background swiper-prev" />
            <SwiperButton classname="award-next no-background swiper-next" />
          </div>
        </div>
      </div>
    </div>
  );
}

const awardsData = [
  {
    id: 1,
    imageSrc: "/image/about/award1.jpg",
  },
  {
    id: 2,
    imageSrc: "/image/about/award1.jpg",
  },
  {
    id: 3,
    imageSrc: "/image/about/award1.jpg",
  },
  {
    id: 4,
    imageSrc: "/image/about/award1.jpg",
  },
  {
    id: 5,
    imageSrc: "/image/about/award1.jpg",
  },
];
