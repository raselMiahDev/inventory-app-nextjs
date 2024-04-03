"use client";
import { ErrorToast, IsEmail, IsEmpty } from "@/helper/formHelper";
import { LOGIN_REQUEST } from "@/app/apiRequiest/API";
import { useRouter } from "next/navigation";
import SubmitButton from "../common/SubmitButton";
import { setToken } from "@/helper/sessionHelper";
import { useState } from "react";
const Login = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    if (IsEmail(email)) {
      return ErrorToast("Valid email is required");
    } else if (IsEmpty(password)) {
      return ErrorToast("password is required");
    } else {
      await LOGIN_REQUEST(email, password).then((res) => {
        console.log(res);
        if (res.status == "success") {
          setToken(res.token);
          route.push("/dashboard");
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            onChange={handleOnChange}
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400"
            placeholder="Enter email"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg
              className="flex-shrink-0 size-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
        </div>
        <div className="relative py-5">
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter password"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg
              className="flex-shrink-0 size-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
              <circle cx="16.5" cy="7.5" r=".5" />
            </svg>
          </div>
        </div>

        <div className="w-96 pb-2 text-center">
          <button
            text="Login"
            type="submit"
            className="bg-blue-700 py-2 block w-full rounded-md text-white font-semibold hover:bg-blue-900"
          >
            Submit
          </button>
          <button />
        </div>
        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-100 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-300 after:ms-6 dark:text-gray-600 dark:before:border-gray-300 dark:after:border-gray-300">
          Or
        </div>
        <div className="text-center text-blue-600">
          <p className="pt-5 text-blue-600">Forget Password ?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
