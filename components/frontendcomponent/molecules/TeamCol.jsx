import Image from "next/image";
import "@/uploads/sass/component/component.css";

export default function TeamCol({ data }) {
  if (!data) return null;
  return (
    <div className="team_col item-md">
      <figure>
        <Image
          src={data.imgSrc}
          width={280}
          height={373}
          alt={`${data.name}'s Image`}
        ></Image>
      </figure>
      <figcaption>
        <h6>{data.name}</h6>
        <p>{data.role}</p>
      </figcaption>
    </div>
  );
}
