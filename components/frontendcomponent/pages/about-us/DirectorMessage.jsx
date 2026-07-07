import Image from "next/image";

export default function DirectorMessage() {
  return (
    <div className="directors_message">
      <div className="container">
        <div className="main_wrapper flex">
          <figcaption>
            <div className="quote">
              <Image
                src="/image/about/quote.svg"
                width={75}
                height={56}
                alt="quote"
              ></Image>
            </div>
            <h6>Director’s Message</h6>
            <div className="desc">
              <p>
                Navayu was built on a simple belief that the healing should be
                science-backed, compassionate, and not always surgical.
              </p>
            </div>
            <div className="details">
              <h4>Dr Sunil Saini</h4>
              <p>MBBS, MS (Orthopedics), Trauma & Ilizarov Surgeon</p>
            </div>
          </figcaption>
          <figure>
            <Image
              src="/image/home/director_img.png"
              width={408}
              height={592}
              alt="Director's Image"
            ></Image>
          </figure>
        </div>
      </div>
    </div>
  );
}
