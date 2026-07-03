import { useModal } from "@/hooks/useModal";
import Image from "next/image";

export default function DirectorMessage() {
  const { openModal } = useModal();
  return (
    <div className="director_message">
      <div className="container">
        <div className="main_wrapper flex">
          <figure>
            <Image
              src="/image/home/director_img.png"
              width={408}
              height={592}
              alt="Director's Image"
            ></Image>
          </figure>
          <figcaption>
            <h4>
              Why should people live in pain when healing is possible without
              surgery?
            </h4>
            <div className="desc">
              <p>This question wasn’t just curiosity—it was conviction.</p>
              <p>
                Driven by a deep commitment to patient-first care, Dr. Sunil
                Saini began a journey to explore non invasive, science-backed
                treatments that could restore quality of life without the risks,
                costs, and recovery of surgery.
              </p>
            </div>
            <div className="below_wrap">
              <button
                className="play-btn"
                onClick={() => openModal("video", "/video/healing1.mp4")}
              ></button>
              <div className="director_details">
                <h6>Dr. Sunil Saini</h6>
                <p>MBBS, MS (Orthopedics), Trauma & Ilizarov Surgeon</p>
              </div>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
