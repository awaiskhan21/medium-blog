import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col pl-2 border-b border-slate-200 py-2 p-6">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight mx-2">{authorName}</div>
          <div className="font-light text-slate-500">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-sm font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
}

export default BlogCard;
