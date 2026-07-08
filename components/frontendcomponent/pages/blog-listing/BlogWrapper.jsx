import BlogCol from "../../molecules/BlogCol";

export default function BlogWrapper() {
  return (
    <section>
      <div className="blog_wrapper sec-pad-all">
        <div className="container">
          <div className="main_wrapper">
            {blogsData.map((item) => (
              <BlogCol key={item.id} item={item} />
            ))}
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
