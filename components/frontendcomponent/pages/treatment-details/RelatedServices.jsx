"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";
import ServiceCol from "../../molecules/ServiceCol";

export default function RelatedServices() {
  return (
    <section>
      <div className="related_services sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Related Services</h2>
          </div>
          <div className="related_wrapper">
            <Swiper
              modules={[Navigation]}
              className="related_slider"
              navigation={{
                prevEl: ".related-prev",
                nextEl: ".related-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 15 },
                540: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                991: { slidesPerView: 3, spaceBetween: 25 },
              }}
            >
              {servicesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <ServiceCol item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav center-full">
              <SwiperButton classname="related-prev white swiper-prev" />
              <SwiperButton classname="related-next white swiper-next" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    id: 1,
    serviceImg: "/image/treatment/service1.jpg",
    title: "Rheumatoid Arthritis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 2,
    serviceImg: "/image/treatment/service2.jpg",
    title: "Ankylosing Spondylosis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 3,
    serviceImg: "/image/treatment/service3.jpg",
    title: "Osteoporosis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 4,
    serviceImg: "/image/treatment/service4.jpg",
    title: "Fibromyalgia",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 5,
    serviceImg: "/image/treatment/service5.jpg",
    title: "Rheumatoid Arthritis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 6,
    serviceImg: "/image/treatment/service6.jpg",
    title: "Ankylosing Spondylosis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 7,
    serviceImg: "/image/treatment/service7.jpg",
    title: "Rheumatoid Arthritis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 8,
    serviceImg: "/image/treatment/service8.jpg",
    title: "Ankylosing Spondylosis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
  {
    id: 9,
    serviceImg: "/image/treatment/service9.jpg",
    title: "Osteoporosis",
    desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
    linkHref: "/treatment-details",
  },
];
