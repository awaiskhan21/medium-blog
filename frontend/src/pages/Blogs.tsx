import Appbar from "../component/Appbar";
import BlogCard from "../component/BlogCard";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading......</div>;
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
              publishedDate={"6th aug 20204"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
