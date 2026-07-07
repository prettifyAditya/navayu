import Image from "next/image";

export default function AboutTreatment() {
  return (
    <section>
      <div className="top_nav">
        <ul className="container">
          <li>
            <div className="icon">
              <Image src="/icon/house.svg" width={25} height={25} alt="house" />
            </div>
            <p>NABH Accredited</p>
          </li>
          <li>
            <div className="icon">
              <Image src="/icon/card.svg" width={25} height={25} alt="card" />
            </div>
            <p>Insurance / Cashless</p>
          </li>
          <li>
            <div className="icon">
              <Image src="/icon/globe.svg" width={25} height={25} alt="globe" />
            </div>
            <p>International Patients Welcome</p>
          </li>
          <li>
            <div className="icon">
              <Image
                src="/icon/ambulance.svg"
                width={25}
                height={25}
                alt="ambulance"
              />
            </div>
            <p>24/7 Emergency Care</p>
          </li>
        </ul>
      </div>
      <div className="about_treatment">
        <div className="container">
          <div className="main_wrapper flex">
            <figcaption>
              <h6 className="tag">About The Procedure</h6>
              <h2>What is Rheumatoid Arthritis?</h2>
              <div className="desc">
                <p>
                  Our Rheumatoid Arthritis treatment program is designed to help
                  patients manage pain, reduce inflammation, restore mobility,
                  and improve daily comfort through comprehensive and
                  personalized care. We focus on controlling disease progression
                  while enhancing joint function and overall well-being.
                </p>
                <p>
                  RA commonly affects the hands, wrists, knees, and feet, often
                  impacting the same joints on both sides of the body. In some
                  cases, it can also affect other organs, including the eyes,
                  lungs, heart, and blood vessels.
                </p>
              </div>
            </figcaption>
            <figure>
              <Image
                src="/image/treatment/about-treatment.jpg"
                width={525}
                height={360}
                alt="about-treatment"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
