"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useModal } from "@/hooks/useModal";
import "@/uploads/sass/component/component.css";

export default function TeamPop() {
  const { isModal, modalData } = useSelector((state) => state.modal);
  const { closeModal } = useModal();
  const { name, role, details, imgSrc } = modalData || {};

  return (
    <div className={`model team-pop ${isModal === "teamPop" ? "is-open" : ""}`}>
      <button className="close" onClick={closeModal}>
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
      <div className="model-body">
        <div className="team_wrapper">
          <figure>
            {imgSrc && (
              <Image
                src={imgSrc}
                width={280}
                height={373}
                alt="Team Image"
              ></Image>
            )}
            {/* <div className="social_icon">
              <a href="javascript:;" target="_blank" className="socialLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                  ></path>
                </svg>
              </a>
              <a href="javascript:;" target="_blank" className="socialLinks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                  />
                </svg>
              </a>
            </div> */}
          </figure>
          <figcaption>
            <div className="heading">
              <h6>{name}</h6>
              <p>{role}</p>
            </div>
            <div
              className="team_details"
              dangerouslySetInnerHTML={{ __html: details }}
            ></div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
