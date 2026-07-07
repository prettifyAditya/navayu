import { useState } from "react";
import Image from "next/image";
import ServiceCol from "../../molecules/ServiceCol";

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
                  <ServiceCol key={item.id} item={item} />
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
