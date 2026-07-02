"use client";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VideoPop() {
  const [videoSrc, setVideoSrc] = useState("");

  const { isModal, modalData } = useSelector((state) => state.modal);
  const { closeModal } = useModal();

  const handleCloseVideo = () => {
    setVideoSrc("");
    closeVideo();
  };

  useEffect(() => {
    const handleClick = (event) => {
      const videoTarget = event.target.closest("[data-video]");

      if (videoTarget) {
        let src = videoTarget.getAttribute("data-video");

        if (src.includes("youtube.com/embed/")) {
          const videoId = src.split("embed/")[1].split("?")[0];
          src += `&autoplay=1&mute=1&loop=1&playlist=${videoId}`;
        } else if (src.includes("vimeo.com/video/")) {
          src = src.split("?")[0];
          src += `?autoplay=1&muted=1&loop=1&background=1`;
        }
        setVideoSrc(src);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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
        {modalData && (
          <iframe
            id="iframe1"
            allow="autoplay;fullscreen"
            allowFullScreen
            src={modalData}
          />
        )}
      </div>
    </div>
  );
}
