import Link from "next/link";
import Image from "next/image";
import "@/uploads/sass/component/component.css";

export default function ServiceCol({ item }) {
  return (
    <Link className="service_col item-md" href={item.linkHref} key={item.id}>
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
  );
}
