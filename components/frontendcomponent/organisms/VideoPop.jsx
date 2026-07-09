"use client";
import { useModal } from "@/hooks/useModal";
import { useSelector } from "react-redux";

export default function VideoPop() {
  const { isModal, modalData } = useSelector((state) => state.modal);
  const { modalVideo } = modalData || {};

  const { closeModal } = useModal();

  return (
    <div className={`model video-pop ${isModal === "video" ? "is-open" : ""}`}>
      <div className="model-body">
        <button className="close-video" onClick={closeModal}>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75L23.25 23.25M0.75 23.25L23.25 0.75"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {modalVideo && (
          <iframe
            id="iframe1"
            allow="autoplay;fullscreen"
            allowFullScreen
            src={modalVideo}
          />
        )}
      </div>
    </div>
  );
}
