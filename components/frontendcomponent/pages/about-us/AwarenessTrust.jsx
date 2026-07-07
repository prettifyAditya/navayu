import Image from "next/image";

export default function AwarenessTrust() {
  return (
    <div className="awareness_trust">
      <div className="container">
        <div className="heading">
          <h2>From Awareness to Trust</h2>
        </div>
        <div className="main_wrapper">
          <div className="awareness_col">
            <div className="icon">
              <Image
                src="/image/about/youtube.svg"
                width="52"
                height="52"
                alt="youtube_icon"
              ></Image>
            </div>
            <h6>55,000+</h6>
            <p>people chose to follow our journey on YouTube</p>
          </div>
          <div className="awareness_col">
            <div className="icon">
              <Image
                src="/image/about/instagram.svg"
                width="52"
                height="52"
                alt="instagram_icon"
              ></Image>
            </div>
            <h6>20,000+</h6>
            <p>individuals connected with us on Instagram</p>
          </div>
          <div className="awareness_col">
            <div className="icon">
              <Image
                src="/image/about/user.svg"
                width="52"
                height="52"
                alt="instagram_icon"
              ></Image>
            </div>
            <h6>1,000+</h6>
            <p>reached out daily seeking guidance and solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
