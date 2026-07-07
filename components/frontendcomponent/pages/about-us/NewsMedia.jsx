import Image from "next/image";
import Button from "../../atoms/Button";
import { useState } from "react";

export default function NewsMedia() {
  const [activeTab, setActiveTab] = useState(mediaData[0].id);
  return (
    <div className="news_media_sec sec-pad-all">
      <div className="container">
        <div className="heading">
          <h2>News and Media</h2>
        </div>
        <div className="main_wrapper flex">
          <div className="news_media tab-nav-content">
            {mediaData.map((item) => (
              <div
                className={`tabs ${activeTab === item.id ? "active" : ""}`}
                key={item.id}
              >
                <div className="banner news_banner">
                  <div className="bg">
                    <Image
                      src={item.newsBg}
                      width="780"
                      height="609"
                      alt="banner Image"
                    ></Image>
                    <div className="banner-wrapper">
                      <h4>{item.newsTitle}</h4>
                      <Button href={item.newsLink} variant="btn-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="news_info">
            {mediaData.map((item) => (
              <div
                className={`info_col ${activeTab === item.id ? "active" : ""}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="count">{String(item.id).padStart(2, "0")}</div>
                <div className="desc">
                  <p>{item.newsTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mediaData = [
  {
    id: 1,
    newsTitle:
      "Why More Patients Are Choosing Non-Surgical Solutions for Chronic Back Pain",
    newsLink: "",
    newsBg: "/image/about/media1.png",
  },
  {
    id: 2,
    newsTitle:
      "Managing Knee Pain Without Surgery: What the Latest Research Shows",
    newsLink: "",
    newsBg: "/image/about/media1.png",
  },
  {
    id: 3,
    newsTitle: "Simple Daily Habits That Support Long-Term Spine Wellness",
    newsLink: "",
    newsBg: "/image/about/media1.png",
  },
  {
    id: 4,
    newsTitle: "Clinic Introduces Advanced Non-Surgical Treatment Programs",
    newsLink: "",
    newsBg: "/image/about/media1.png",
  },
  {
    id: 5,
    newsTitle: "Understanding the Root Causes of Persistent Neck and Back Pain",
    newsLink: "",
    newsBg: "/image/about/media1.png",
  },
];
