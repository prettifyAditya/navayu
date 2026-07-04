import "@/uploads/sass/footer/footer.css";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import VideoPop from "./VideoPop";
import Hamburger from "./Hamburger";
import EnquirePop from "./EnquirePop";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <ul className="left">
              {stats.map(({ icon, description }, index) => (
                <li className="item" key={index}>
                  <figure>
                    <Image src={icon} alt="icon" width={54} height={54} />
                  </figure>
                  <figcaption
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </li>
              ))}
            </ul>
            <div className="right">
              <button className="btn btn-gradient-a">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="middle">
            <div className="container">
              <div className="col">
                <Image
                  src="/image/logo.svg"
                  alt="logo"
                  width={204}
                  height={68}
                />
              </div>
              {footerLink.map(({ title, list }, i) => {
                return (
                  <div className="col" key={i}>
                    <h4>{title}</h4>
                    <ul>
                      {list.map(({ label, path }, j) => {
                        return (
                          <li key={j}>
                            <Link href={path}>{label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              <div className="col">
                <Link className="phone" href="tel:+919217373153">
                  +91-9217373153
                </Link>
                <Link href="" className="btn btn-border-primary">
                  <Image
                    src="/icon/whatsapp-primary.svg"
                    alt="whatsapp"
                    width={18}
                    height={18}
                  />{" "}
                  Whatsapp
                </Link>
                <ul className="social">
                  {social.map(({ icon, href }, i) => {
                    return (
                      <li key={i}>
                        <Link href={href}>
                          <Image
                            src={icon}
                            alt="social"
                            width={20}
                            height={20}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="container">
              <p>
                &copy; Navayu . All Right Reserved
                <span>
                  Made by
                  <Link href="https://prettifycreative.in">
                    <Image
                      src="/image/prettify.svg"
                      alt="prettify"
                      width={57}
                      height={21}
                    />
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Overlay />
      <VideoPop />
      <Hamburger />
      <EnquirePop />
    </>
  );
};

export default Footer;

const stats = [
  {
    icon: "/icon/youtube-color.svg",
    description:
      "<p>Over <span>55,000+</span> people  chose to follow our journey  on YouTube </p>",
  },
  {
    icon: "/icon/instagram-color.svg",
    description:
      "<p>More than <span>20,000+</span> individuals connected  with us on Instagram</p>",
  },
  {
    icon: "/icon/group-color.svg",
    description:
      "<p><span> Thousands</span> reached out daily seeking guidance and solutions</p>",
  },
];

const footerLink = [
  {
    title: "Treatments",
    list: [
      {
        label: "Spine & Joint Care",
        path: "",
      },
      {
        label: "Wellness, Anti-ageing & Longevity",
        path: "",
      },
      {
        label: "Metabolic & Lifestyle Disease",
        path: "",
      },
    ],
  },
  {
    title: "Quick Links",
    list: [
      {
        label: "About us",
        path: "",
      },
      {
        label: "Contact us",
        path: "",
      },
      {
        label: "FAQ's",
        path: "",
      },
      {
        label: "Blogs",
        path: "",
      },
      {
        label: "Privacy Policy",
        path: "",
      },
    ],
  },
];

const social = [
  {
    icon: "/icon/twitter-primary.svg",
    href: "#",
  },
  {
    icon: "/icon/facebook-primary.svg",
    href: "#",
  },
  {
    icon: "/icon/instagram-primary.svg",
    href: "#",
  },
  {
    icon: "/icon/linkedin-primary.svg",
    href: "#",
  },
];
