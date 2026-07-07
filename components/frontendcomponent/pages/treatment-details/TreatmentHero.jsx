"use client";
import Image from "next/image";
import Button from "../../atoms/Button";
import { useModal } from "@/hooks/useModal";

export default function TreatmentHero() {
  const { openModal } = useModal();
  return (
    <div className="banner treatmentDetails-banner">
      <div className="bg">
        <Image
          src="/image/treatment/treatmentD_banner.jpg"
          width={1288}
          height={625}
          alt="Treatment_Details_Banner"
        ></Image>
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="heading">
              <h1>Rheumatoid Arthritis</h1>
              <p>
                Rheumatoid Arthritis is an autoimmune condition that causes
                pain, swelling, and stiffness in the joints.
              </p>
            </div>
            <div className="btn_wrap">
              <Button
                variant="btn-gradient-b"
                onClick={() => openModal("enquirePop")}
              >
                Book a Consultation
              </Button>
              <Button variant="btn-white">
                <Image
                  src="/icon/call_grad.svg"
                  width={20}
                  height={20}
                  alt="Call_Icon"
                ></Image>
                Call Now
              </Button>
            </div>
            <ul className="counter_wrap">
              <li>
                <h6>15,000+</h6>
                <p>Patients treated</p>
              </li>
              <li>
                <h6>98%</h6>
                <p>Success Rate</p>
              </li>
              <li>
                <h6>25+</h6>
                <p>Years Experience</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
