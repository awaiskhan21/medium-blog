import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import TextEditor from "../components/TextEditer";
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
          <div className="flex justify-between ">
            <label className="block mb-2 text-3xl font-bold text-gray-900">
              Title
            </label>
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
              className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Published
            </button>
          </div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4"
            placeholder="Unleashing Creativity: A Journey Begins"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="max-w-screen-lg w-full ">
          <label className="block mb-2 text-3xl font-bold text-gray-900">
            Content
          </label>
          <TextEditor onChange={(e: any) => setContent(e)} />
          <div className="pb-8"></div>
        </div>
      </div>
    </div>
  );
}

export default Publish;
