import Image from "next/image";
import Button from "../../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButton from "../../atoms/SwiperButton";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";

export default function HealingVoice() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(healingData[0].id);

  return (
    <div className="healing_voice sec-pad-all">
      <div className="container">
        <div className="upper_sec">
          <div className="heading">
            <h2>When Healing Found a Voice</h2>
          </div>
          <ul className="tab-nav">
            {healingData.map((data) => (
              <li
                key={data.id}
                className={activeTab === data.id ? "active" : ""}
                onClick={() => setActiveTab(data.id)}
              >
                <div className="icon">
                  <Image src={data.iconSrc} width={35} height={35} alt="Icon" />
                </div>
                <p>{data.healingCat}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="healing_wrapper tab-nav-content">
          {healingData.map((data) => (
            <div
              className={`tabs ${activeTab === data.id ? "active" : ""}`}
              key={data.id}
            >
              <Swiper
                modules={[Navigation]}
                className="healing_slider"
                centeredSlides={true}
                centeredSlidesBounds={true}
                speed={1000}
                navigation={{
                  prevEl: `.healing-prev-${data.id}`,
                  nextEl: `.healing-next-${data.id}`,
                }}
                breakpoints={{
                  0: { slidesPerView: 1.3, spaceBetween: 15 },
                  540: { slidesPerView: 1.5, spaceBetween: 20 },
                  768: { slidesPerView: 2.2, spaceBetween: 20 },
                  991: { slidesPerView: 3, spaceBetween: 20 },
                }}
              >
                {data.healingSwiper.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="healing_col">
                      <figure>
                        <Image
                          src={item.imgSrc}
                          width={378}
                          height={275}
                          alt="Healing"
                        ></Image>
                        <button
                          type="button"
                          className="play-btn"
                          onClick={() =>
                            openModal("video", { modalVideo: item.videoPopSrc })
                          }
                        ></button>
                      </figure>
                      <figcaption>
                        <h6>{item.title}</h6>
                      </figcaption>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-nav center-full">
                <SwiperButton
                  classname={`healing-prev-${data.id} white swiper-prev`}
                />
                <SwiperButton
                  classname={`healing-next-${data.id} white swiper-next`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="btn_wrap">
          <Button variant="btn-gradient-b">Book a Consultation</Button>
        </div>
      </div>
    </div>
  );
}

const healingData = [
  {
    id: 1,
    healingCat: "Educational videos",
    iconSrc: "/icon/healing1.svg",
    healingSwiper: [
      {
        id: 1,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 2,
        imgSrc: "/image/home/healing2.jpg",
        title: "What is the right way to do morning walk",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 3,
        imgSrc: "/image/home/healing3.jpg",
        title:
          "Meet Dr. Sunil Saini in Pune | Sciatica Pain, Knee Pain, Back Pain, DSCB Injection",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 4,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 5,
        imgSrc: "/image/home/healing2.jpg",
        title: "What is the right way to do morning walk",
        videoPopSrc: "/video/healing1.mp4",
      },
    ],
  },
  {
    id: 2,
    healingCat: "Real patient testimonials",
    iconSrc: "/icon/healing2.svg",
    healingSwiper: [
      {
        id: 1,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 2,
        imgSrc: "/image/home/healing2.jpg",
        title: "What is the right way to do morning walk",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 3,
        imgSrc: "/image/home/healing3.jpg",
        title:
          "Meet Dr. Sunil Saini in Pune | Sciatica Pain, Knee Pain, Back Pain, DSCB Injection",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 4,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
    ],
  },
  {
    id: 3,
    healingCat: "Non-Surgical Treatments",
    iconSrc: "/icon/healing3.svg",
    healingSwiper: [
      {
        id: 1,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 2,
        imgSrc: "/image/home/healing2.jpg",
        title: "What is the right way to do morning walk",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 3,
        imgSrc: "/image/home/healing3.jpg",
        title:
          "Meet Dr. Sunil Saini in Pune | Sciatica Pain, Knee Pain, Back Pain, DSCB Injection",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 4,
        imgSrc: "/image/home/healing1.jpg",
        title: "Sciatica Pain Treatment by DSCB Injection only",
        videoPopSrc: "/video/healing1.mp4",
      },
      {
        id: 5,
        imgSrc: "/image/home/healing2.jpg",
        title: "What is the right way to do morning walk",
        videoPopSrc: "/video/healing1.mp4",
      },
    ],
  },
];
