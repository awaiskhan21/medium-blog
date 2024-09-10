import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center font-semibold text-2xl">
          Medium
        </div>
      </Link>
      <div className="flex">
        <Link
          to={"/publish"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4"
        >
          <button type="button">New</button>
        </Link>
        <Avatar name="Khan" size="big" />
      </div>
    </div>
  );
}

export default Appbar;
