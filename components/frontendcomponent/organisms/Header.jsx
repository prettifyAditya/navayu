"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import "@/uploads/sass/header/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <a href="" className="logo">
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
          </div>

          <Button className="btn-border-primary">Book a Consultation </Button>
          <button className="ham-btn">
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
