"use client";
import { useSelector } from "react-redux";
import { useModal } from "@/hooks/useModal";
import FormWrapper from "./FormWrapper";

export default function EnquirePop() {
  const { isModal } = useSelector((state) => state.modal);
  const { closeModal } = useModal();
  return (
    <div
      className={`model enquire-pop ${isModal === "enquirePop" ? "is-open" : ""}`}
    >
      <button className="close" onClick={() => closeModal()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="model-body">
        <div className="title">
          <h4>Enquire Now</h4>
          <p>Share your details and our team will be in touch shortly.</p>
        </div>
        <FormWrapper classname="enquire-form" />
      </div>
    </div>
  );
}
