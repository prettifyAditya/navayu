import Image from "next/image";

export default function Symptoms() {
  return (
    <section>
      <div className="symptoms sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>Symptoms of Rheumatoid Arthritis (RA)</h2>
          </div>
          <div className="main_wrapper">
            {symptomsData.map((item) => (
              <div className="symptoms_col" key={item.id}>
                <div className="icon">
                  <Image
                    src={item.iconSrc}
                    alt="symptoms"
                    width={63}
                    height={63}
                  />
                </div>
                <div className="content">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const symptomsData = [
  {
    id: 1,
    iconSrc: "/image/treatment/symptoms1.svg",
    title: "Joint Pain",
    desc: "Persistent pain and tenderness, especially in the hands, wrists, feet, and knees.",
  },
  {
    id: 2,
    iconSrc: "/image/treatment/symptoms2.svg",
    title: "Joint Swelling",
    desc: "Inflammation causes joints to become swollen, warm, and sensitive to touch.",
  },
  {
    id: 3,
    iconSrc: "/image/treatment/symptoms3.svg",
    title: "Fatigue",
    desc: "Ongoing tiredness and low energy levels, even after adequate rest.",
  },
  {
    id: 4,
    iconSrc: "/image/treatment/symptoms4.svg",
    title: "Low-Grade Fever",
    desc: "Some people experience mild fever during periods of active inflammation.",
  },
  {
    id: 5,
    iconSrc: "/image/treatment/symptoms1.svg",
    title: "Joint Pain",
    desc: "Persistent pain and tenderness, especially in the hands, wrists, feet, and knees.",
  },
  {
    id: 6,
    iconSrc: "/image/treatment/symptoms2.svg",
    title: "Joint Swelling",
    desc: "Inflammation causes joints to become swollen, warm, and sensitive to touch.",
  },
  {
    id: 7,
    iconSrc: "/image/treatment/symptoms3.svg",
    title: "Fatigue",
    desc: "Ongoing tiredness and low energy levels, even after adequate rest.",
  },
  {
    id: 8,
    iconSrc: "/image/treatment/symptoms4.svg",
    title: "Low-Grade Fever",
    desc: "Some people experience mild fever during periods of active inflammation.",
  },
];
