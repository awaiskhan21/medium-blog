import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { Button } from "./ui/button";

function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center font-semibold text-2xl">
          Medium
        </div>
      </Link>
      <div className="flex">
        <Button
          asChild
          className="font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4"
        >
          <Link to={"/publish"}>New</Link>
        </Button>
        <Avatar name="Khan" size="big" />
      </div>
    </div>
  );
}

export default Appbar;
