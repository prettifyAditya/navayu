import Image from "next/image";
import Link from "next/link";

export default function BlogCol({ item }) {
  return (
    <Link href={item.linkHref} className="blogs_col" key={item.id}>
      <figure>
        <Image
          src={item.blogImg}
          width={382}
          height={250}
          alt="blogs_img"
        ></Image>
      </figure>
      <figcaption>
        <h6>{item.title}</h6>
        <p>{item.date}</p>
      </figcaption>
    </Link>
  );
}
