"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperButton from "../../atoms/SwiperButton";
import BlogCol from "../../molecules/BlogCol";

export default function MoreBlogs() {
  return (
    <section>
      <div className="more_blogs sec-pad-bottom">
        <div className="container">
          <div className="heading">
            <h2>More Blogs</h2>
          </div>
          <div className="main_wrapper">
            <Swiper
              modules={[Navigation]}
              className="blogs_slider"
              speed={1000}
              navigation={{
                prevEl: ".blogs-prev",
                nextEl: ".blogs-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 15 },
                540: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                991: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {blogsData.map((item) => (
                <SwiperSlide key={item.id}>
                  <BlogCol item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav center-full">
              <SwiperButton classname="blogs-prev white swiper-prev" />
              <SwiperButton classname="blogs-next white swiper-next" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const blogsData = [
  {
    id: 1,
    blogImg: "/image/others/blog1.jpg",
    title: "The Future of Non-Surgical Regenerative Healthcare",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
  {
    id: 2,
    blogImg: "/image/others/blog2.jpg",
    title: "How Functional Medicine Helps Treat Chronic Pain Naturally",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
  {
    id: 3,
    blogImg: "/image/others/blog3.jpg",
    title: "Can Joint Damage Be Reversed Without Surgery?",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
  {
    id: 4,
    blogImg: "/image/others/blog1.jpg",
    title: "The Future of Non-Surgical Regenerative Healthcare",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
  {
    id: 5,
    blogImg: "/image/others/blog2.jpg",
    title: "How Functional Medicine Helps Treat Chronic Pain Naturally",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
  {
    id: 6,
    blogImg: "/image/others/blog3.jpg",
    title: "Can Joint Damage Be Reversed Without Surgery?",
    date: "27 May 2026",
    linkHref: "/blog-details",
  },
];
