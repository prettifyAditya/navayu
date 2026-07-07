import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section>
      <div className="why_choose_us sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Why Choose Us</h2>
          </div>
          <div className="why_wrapper">
            {whyData.map((item) => (
              <div className="why_col" key={item.id}>
                <div className="icon">
                  <Image
                    src={item.iconSrc}
                    width={54}
                    height={54}
                    alt="Icon"
                  ></Image>
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const whyData = [
  {
    id: 1,
    iconSrc: "/image/treatment/why1.svg",
    title: "Specialized Non-Surgical Treatment Solutions",
  },
  {
    id: 2,
    iconSrc: "/image/treatment/why2.svg",
    title: "Expert Team of Healthcare Professionals",
  },
  {
    id: 3,
    iconSrc: "/image/treatment/why3.svg",
    title: "Advanced Diagnostics and Assessments",
  },
  {
    id: 4,
    iconSrc: "/image/treatment/why4.svg",
    title: "Personalized Care for Every Patient",
  },
  {
    id: 5,
    iconSrc: "/image/treatment/why5.svg",
    title: "Holistic Approach to Health and Wellness",
  },
  {
    id: 6,
    iconSrc: "/image/treatment/why6.svg",
    title: "Cutting-Edge Therapeutic Technologies",
  },
];
