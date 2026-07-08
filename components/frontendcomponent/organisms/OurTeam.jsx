"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useModal } from "@/hooks/useModal";
import "swiper/css";
import "swiper/css/navigation";
import TeamCol from "../molecules/TeamCol";
import SwiperButton from "../atoms/SwiperButton";
import "@/uploads/sass/component/component.css";

export default function OurTeam() {
  const { openModal } = useModal();
  return (
    <section>
      <div className="our_team sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Meet Our Team</h2>
          </div>
          <div className="team_wrapper">
            <Swiper
              modules={[Navigation]}
              className="team_slider"
              speed={1000}
              navigation={{
                prevEl: ".team-prev",
                nextEl: ".team-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 15 },
                540: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                991: { slidesPerView: 3, spaceBetween: 20 },
                1280: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {teamData.map((item) => (
                <SwiperSlide key={item.id}>
                  <TeamCol data={item} onClick={() => openModal("teamPop")} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav center-full">
              <SwiperButton classname="team-prev white swiper-prev" />
              <SwiperButton classname="team-next white swiper-next" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const teamData = [
  {
    id: 1,
    name: "Dr. Sunil Saini",
    role: "MBBS, MS (Orthopedics), Trauma & Ilizarov Surgeon",
    imgSrc: "/image/others/team1.jpg",
  },
  {
    id: 2,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team2.jpg",
  },
  {
    id: 3,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team3.jpg",
  },
  {
    id: 4,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team4.jpg",
  },
  {
    id: 5,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team3.jpg",
  },
  {
    id: 6,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team4.jpg",
  },
];
