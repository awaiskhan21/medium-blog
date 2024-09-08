import { Blog } from "../hooks";
import Appbar from "./Appbar";
import Avatar from "./Avatar";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-12">
        <div className="grid grid-cols-12 w-full px-10 max-w-screen-2xl ">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold"> {blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 2nd sep 2024</div>
            <div> {blog.content}</div>
          </div>
          <div className="col-span-4 m-2 text-slate-600 text-lg">
            Author
            <div className="flex">
              <div className="flex flex-col justify-center px-4 ">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />{" "}
              </div>
              <div>
                <div className="text-2xl font-bold pt-2">
                  <div>{blog.author.name || "Anonymous"}</div>
                </div>
                <div className="text-slate-500">
                  {" "}
                  Some random catch phrase about the author ability to grab
                  User's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
