import Appbar from "../component/Appbar";
import BlogCard from "../component/BlogCard";
import { BlogSkeleton } from "../component/BlogSkeleton";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  //skeleton
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className=" max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={formatDate(blog.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  // Options for date formatting
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export default Blogs;
