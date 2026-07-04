import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TreatmentListing() {
  const [activeTab, setActiveTab] = useState(treatmentData[0].id);
  return (
    <section>
      <div className="treatment_listing">
        <nav>
          <div className="container">
            <ul className="tab-nav">
              {treatmentData.map((list) => (
                <li
                  key={list.id}
                  className={activeTab === list.id ? "active" : ""}
                  onClick={() => setActiveTab(list.id)}
                >
                  <div className="icon">
                    <Image
                      src={list.catIcon}
                      width={35}
                      height={35}
                      alt="Category_Icon"
                    ></Image>
                  </div>
                  <p>{list.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="container tab-nav-content">
          {treatmentData.map((data) => (
            <div
              className={`tabs ${activeTab === data.id ? "active" : ""}`}
              key={data.id}
            >
              <div className="service_wrapper">
                {data.servicesData.map((item) => (
                  <Link
                    className="service_col item-md"
                    href={item.linkHref}
                    key={item.id}
                  >
                    <figure>
                      <Image
                        src={item.serviceImg}
                        width={380}
                        height={317}
                        alt={`${item.title} Image`}
                      ></Image>
                    </figure>
                    <figcaption>
                      <h6>{item.title}</h6>
                      <div className="desc">
                        <p>{item.desc}</p>
                        <button type="button" className="plus">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </figcaption>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const treatmentData = [
  {
    id: 1,
    category: "Spine & Joint Care",
    catIcon: "/icon/category1.svg",
    servicesData: [
      {
        id: 1,
        serviceImg: "/image/treatment/service1.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 2,
        serviceImg: "/image/treatment/service2.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 3,
        serviceImg: "/image/treatment/service3.jpg",
        title: "Osteoporosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 4,
        serviceImg: "/image/treatment/service4.jpg",
        title: "Fibromyalgia",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 5,
        serviceImg: "/image/treatment/service5.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 6,
        serviceImg: "/image/treatment/service6.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 7,
        serviceImg: "/image/treatment/service7.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 8,
        serviceImg: "/image/treatment/service8.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 9,
        serviceImg: "/image/treatment/service9.jpg",
        title: "Osteoporosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
    ],
  },
  {
    id: 2,
    category: "Wellness, Anti-ageing & Longevity",
    catIcon: "/icon/category1.svg",
    servicesData: [
      {
        id: 1,
        serviceImg: "/image/treatment/service1.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 2,
        serviceImg: "/image/treatment/service2.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 3,
        serviceImg: "/image/treatment/service3.jpg",
        title: "Osteoporosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 4,
        serviceImg: "/image/treatment/service4.jpg",
        title: "Fibromyalgia",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 5,
        serviceImg: "/image/treatment/service5.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 6,
        serviceImg: "/image/treatment/service6.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
    ],
  },
  {
    id: 3,
    category: "Metabolic & Lifestyle Disease",
    catIcon: "/icon/category1.svg",
    servicesData: [
      {
        id: 1,
        serviceImg: "/image/treatment/service1.jpg",
        title: "Rheumatoid Arthritis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 2,
        serviceImg: "/image/treatment/service2.jpg",
        title: "Ankylosing Spondylosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 3,
        serviceImg: "/image/treatment/service3.jpg",
        title: "Osteoporosis",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
      {
        id: 4,
        serviceImg: "/image/treatment/service4.jpg",
        title: "Fibromyalgia",
        desc: "Rheumatoid Arthritis causes joint pain, swelling, stiffness, and inflammation due to an overactive immune system.",
        linkHref: "/treatment-details",
      },
    ],
  },
];
