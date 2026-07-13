"use client";
import Image from "next/image";
import Button from "../../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useModal } from "@/hooks/useModal";
import TeamCol from "../../molecules/TeamCol";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Experts() {
  const isDesktop = useMediaQuery("(min-width: 991px)");
  const { openModal } = useModal();
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
                className="expert_slider no-padding"
                allowTouchMove={false}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  768: {
                    autoplay: false,
                    allowTouchMove: true,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    direction: "horizontal",
                  },
                  991: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                    direction: "vertical",
                  },
                }}
                modules={[Autoplay]}
                speed={2000}
                loop={true}
              >
                {expertsData.map((data) => (
                  <SwiperSlide key={data.id}>
                    <TeamCol
                      data={data}
                      onClick={() => openModal("teamPop", data)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {isDesktop && (
                <Swiper
                  className="expert_slider no-padding"
                  allowTouchMove={false}
                  autoplay={{
                    reverseDirection: true,
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                      direction: "horizontal",
                    },
                    991: {
                      slidesPerView: 1.4,
                      spaceBetween: 20,
                      direction: "vertical",
                    },
                  }}
                  modules={[Autoplay]}
                  speed={2000}
                  loop={true}
                >
                  {expertsData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <TeamCol
                        data={data}
                        onClick={() => openModal("teamPop", data)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
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
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 2,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team2.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 3,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team3.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 4,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team4.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
];
