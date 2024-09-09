import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../component/Appbar";
import TextEditor from "../component/TextEditer";
import { BACKEND_URL } from "../config";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className=" p-10 flex justify-center">
        <div className="max-w-screen-lg w-full">
          <label className="block mb-2 text-3xl font-bold text-gray-900">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4"
            placeholder="Unleashing Creativity: A Journey Begins"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="max-w-screen-lg w-full ">
          <TextEditor onChange={(e) => setContent(e.target.value)} />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Published
          </button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
