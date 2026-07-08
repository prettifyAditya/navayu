import { useState } from "react";

export default function FaqsListing() {
  const [activeFaq, setActiveFaq] = useState(faqData[0].id);
  return (
    <div className="faq_sec sec-pad-all">
      <div className="container">
        <div className="faq_wrapper">
          {faqData.map((item) => (
            <div
              className={`faq_col ${activeFaq === item.id ? "active" : ""}`}
              onClick={() => setActiveFaq(item.id)}
              key={item.id}
            >
              <div className="faq_title">
                <h4>{item.title}</h4>
                <div className="icon"></div>
              </div>
              <article>
                <div className="faq_details">
                  <p>{item.desc}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    id: 1,
    title: "Are your treatments a replacement for surgery?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
  {
    id: 2,
    title: "What conditions do you treat?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
  {
    id: 3,
    title: "Are your treatments scientifically proven?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
  {
    id: 4,
    title: "How do I know if I am a suitable candidate for treatment?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
  {
    id: 5,
    title: "Do your treatments require hospitalization?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
  {
    id: 6,
    title: "Do you provide personalized treatment plans?",
    desc: "Not always. Our approach is to explore effective non-surgical options first. If surgery is necessary, we help patients make informed decisions about their care.",
  },
];
