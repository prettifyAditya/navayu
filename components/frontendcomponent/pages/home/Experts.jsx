import Image from "next/image";
import Button from "../../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Experts() {
  return (
    <section>
      <div className="experts_sec">
        <div className="container">
          <div className="main_wrapper flex">
            <div className="heading">
              <h2 className="c-primary">Meet Our Experts in Healing & Care</h2>
              <p>
                With years of expertise and a patient-first approach, our
                specialists deliver compassionate, personalized care focused on
                restoring mobility, relieving pain, and improving quality of
                life.
              </p>
              <Button variant="btn-gradient-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.75 2.5a.75.75 0 0 0-.75.75V9c0 3.06 2.29 5.585 5.25 5.954v.796a6 6 0 0 0 12 0v-.844A3.001 3.001 0 0 0 18.5 9a3 3 0 0 0-.75 5.906v.844a4.5 4.5 0 0 1-9 0v-.796A6 6 0 0 0 14 9V3.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v5a4.5 4.5 0 1 1-9 0V4h1.75a.75.75 0 0 0 0-1.5zm15.75 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                  ></path>
                </svg>{" "}
                Book a Consultation{" "}
              </Button>
            </div>
            <div className="experts_wrapper">
              <Swiper
                direction="vertical"
                slidesPerView={1.4}
                spaceBetween={20}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                speed={2000}
                loop={true}
              >
                {expertsData.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div className="team_col item-md">
                      <figure>
                        <Image
                          src={data.imgSrc}
                          width={280}
                          height={373}
                          alt={`${data.name}'s Image`}
                        ></Image>
                      </figure>
                      <figcaption>
                        <h6>{data.name}</h6>
                        <p>{data.role}</p>
                      </figcaption>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertsData = [
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
];
