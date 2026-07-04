"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import "@/uploads/sass/header/header.css";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? "header-fixed" : ""}>
      <div className="header-wrapper">
        <a href="/" className="logo">
          <Image src="/image/logo.svg" alt="logo" width={149} height={51} />
        </a>

        <div className="right">
          <div className="drop-down">
            <span className="text">Treatments</span>
            <Image
              src="/icon/down-arrow.svg"
              alt="down-arrow"
              width={20}
              height={9}
            />
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link href="">
                    <Image
                      src="/icon/category1.svg"
                      alt="category1"
                      width={35}
                      height={35}
                    />
                    <figcaption>
                      <h6>Spine & Joint Care</h6>
                      <p>
                        Advanced spine and joint care designed to restore
                        mobility.
                      </p>
                    </figcaption>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Image
                      src="/icon/category2.svg"
                      alt="category1"
                      width={35}
                      height={35}
                    />
                    <figcaption>
                      <h6>Wellness & Longevity Care</h6>
                      <p>
                        Advanced spine and joint care designed to restore
                        mobility.
                      </p>
                    </figcaption>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Image
                      src="/icon/category3.svg"
                      alt="category1"
                      width={35}
                      height={35}
                    />
                    <figcaption>
                      <h6>Metabolic and Lifestyle Disease Management</h6>
                      <p>
                        Advanced spine and joint care designed to restore
                        mobility.
                      </p>
                    </figcaption>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Button
            className="btn-border-primary"
            onClick={() => openModal("enquirePop")}
          >
            Book a Consultation{" "}
          </Button>
          <button className="ham-btn" onClick={() => openModal("hamPop")}>
            {Array.from({ length: 3 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
