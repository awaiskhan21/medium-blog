import { signupInput } from "@awais21/mediun-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<signupInput>({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      } else {
        throw new Error("No token received");
      }
    } catch (e) {
      console.error("Authentication error:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" h-screen flex justify-center flex-col ">
      <div className="flex justify-center ">
        <div className="">
          <div className=" px-14 ">
            <div className="font-extrabold text-3xl">
              {type === "signup" ? "Create an account" : "Welcome back"}
            </div>
            <div className="text-slate-400">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Login" : "Sign Up"}
              </Link>
            </div>
          </div>

          <div className="mt-6">
            {type === "signup" ? (
              <LabledInput
                label="Name"
                placeholder="Awais Khan..."
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabledInput
              label="email"
              placeholder="awiskhan@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabledInput
              label="password"
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              type="button"
              onClick={sendRequest}
              disabled={loading}
              className={`w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading
                ? "Processing..."
                : type === "signup"
                ? "Sign Up"
                : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface labelInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabledInput({ label, placeholder, onChange, type }: labelInputType) {
  return (
    <div>
      <label className="block mt-2 mb-1 text-sm font-bold text-black">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
