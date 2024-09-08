import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>loading......</div>;
  }
  return <div></div>;
}

export default Blog;
