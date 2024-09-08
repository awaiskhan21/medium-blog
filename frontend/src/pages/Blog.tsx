import { useParams } from "react-router-dom";
import FullBlog from "../component/FullBlog";
import { useBlog } from "../hooks";

export default function BlogPage() {
  const { id } = useParams();
  const { loading, blog }: any = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>loading......</div>;
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
}
