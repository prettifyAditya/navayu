"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useEffect } from "react";

export default function Benefits() {
  const isDesktop = useMediaQuery("(min-width: 991px)");
  useEffect(() => {
    if (!isDesktop) return;
    const section = document.querySelector(".benefits_sec .main_wrapper");
    const figCaption = document.querySelectorAll(
      ".benefits_sec .main_wrapper figcaption",
    );

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.remove("active");
          section.classList.add("active");
          timeoutId = setTimeout(() => {
            figCaption.forEach((item) => {
              item.classList.add("active");
            });
          }, 1500);
        } else {
          section.classList.remove("active");
          if (timeoutId) {
            figCaption.forEach((item) => {
              item.classList.remove("active");
            });
            clearTimeout(timeoutId);
            timeoutId = null;
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -60% 0px",
      },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      section.classList.remove("active");
      figCaption.forEach((item) => item.classList.remove("active"));
    };
  }, [isDesktop]);
  return (
    <section>
      <div className="benefits_sec">
        <div className="container">
          <div className="heading">
            <h2>Benefits of Non-Surgical Treatment</h2>
            <p>
              Effective relief. Better mobility. Improved quality of life. All
              without surgery.
            </p>
          </div>
          <div className="main_wrapper">
            <figcaption>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit1.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Reduces joint pain, swelling, and stiffness</h6>
                  <p>
                    Helps control inflammation and eases discomfort for better
                    daily living.
                  </p>
                </div>
              </div>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit2.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Improves flexibility, mobility, and daily movement</h6>
                  <p>
                    Enhances range of motion and helps you move more
                    comfortably.
                  </p>
                </div>
              </div>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit3.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Enhances strength and overall physical function</h6>
                  <p>
                    Builds muscle support around joints and improves endurance.
                  </p>
                </div>
              </div>
            </figcaption>
            <figure>
              <Image
                src="/image/treatment/benefit_woman.png"
                width={360}
                height={460}
                alt="sitting_woman"
              ></Image>
            </figure>
            <figcaption>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit1.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Reduces joint pain, swelling, and stiffness</h6>
                  <p>
                    Helps control inflammation and eases discomfort for better
                    daily living.
                  </p>
                </div>
              </div>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit2.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Improves flexibility, mobility, and daily movement</h6>
                  <p>
                    Enhances range of motion and helps you move more
                    comfortably.
                  </p>
                </div>
              </div>
              <div className="benefit_col">
                <div className="icon">
                  <Image
                    src="/image/treatment/benefit3.svg"
                    width={65}
                    height={65}
                    alt="benefits_icon"
                  />
                </div>
                <div className="details">
                  <h6>Enhances strength and overall physical function</h6>
                  <p>
                    Builds muscle support around joints and improves endurance.
                  </p>
                </div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
