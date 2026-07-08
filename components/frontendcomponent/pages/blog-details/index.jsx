import Hero from "../../organisms/Hero";
import BlogsContent from "./BlogsContent";
import MoreBlogs from "./MoreBlogs";
import "@/uploads/sass/blog/blog.css";

export default function BlogDetailsPage() {
  return (
    <main>
      <Hero
        className="blog_details_hero"
        image="/image/others/blog_banner.jpg"
        tag="27 May 2026"
        title="The Future of Non-Surgical Regenerative Healthcare"
      />
      <BlogsContent />
      <MoreBlogs />
    </main>
  );
}
