"use client";
import { useState } from "react";
import Select from "../../atoms/Select";
import TeamCol from "../../molecules/TeamCol";
import { useModal } from "@/hooks/useModal";

export default function AvailableDoctors() {
  const [location, setLocation] = useState(null);
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const { openModal } = useModal();
  return (
    <section>
      <div className="doctor_listing_sec">
        <div className="container">
          <nav>
            <h6 className="total_doc">22 Doctors Found</h6>
            <div className="filter_wrap">
              <div className="search_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#0000004D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                  ></path>
                </svg>
                <input type="text" name="" id="" placeholder="Search" />
              </div>
              <Select
                classname="location_filter"
                label="Location"
                name="location"
                id="location"
                value={location}
                onChange={handleChange}
                options={[
                  { value: "Gurugram", label: "Gurugram" },
                  { value: "Noida", label: "Noida" },
                  { value: "Delhi", label: "Delhi" },
                ]}
              />
            </div>
          </nav>
          <div className="main_wrapper">
            {doctorData.map((item) => (
              <TeamCol
                data={item}
                onClick={() => openModal("teamPop", item)}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const doctorData = [
  {
    id: 1,
    name: "Dr. Sunil Saini",
    role: "MBBS, MS (Orthopedics), Trauma & Ilizarov Surgeon",
    imgSrc: "/image/others/team1.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 2,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team2.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 3,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team3.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 4,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team4.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 5,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team3.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
  {
    id: 6,
    name: "Name Here",
    role: "MBBS, MS (Orthopedics)",
    imgSrc: "/image/others/team4.jpg",
    details: `<p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p> <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
      distinctio a fugiat similique quis in inventore? Quaerat ut eius
      architecto sequi autem eos accusamus consequatur non? Ab quidem
      facere vitae sunt ipsa possimus tenetur, dolorum maiores alias
      obcaecati doloribus sint, cumque nemo architecto ea minus? Nam
      doloribus architecto, blanditiis laudantium dicta facere iure
      ipsum voluptatem itaque adipisci praesentium reprehenderit autem
      officia ullam eaque porro dolore accusamus, provident iste
      natus. Veritatis perferendis debitis voluptate commodi error
      tempore ab, repellendus reiciendis quas nesciunt velit impedit
      corporis suscipit cum unde soluta! Nihil dolorum deleniti
      incidunt veniam velit culpa, nulla in maiores quas a.
    </p>`,
  },
];
