import React from "react";
import Link from "next/link";
const Register = () => {
  return (
    <div>
      <>
        <div className="relative">
          <input
            type="text"
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400"
            placeholder="First name"
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
        <div className="relative mt-3">
          <input
            type="text"
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400"
            placeholder="Last name"
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
        <div className="relative mt-3">
          <input
            type="Email"
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400"
            placeholder="Valid email"
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
        <div className="relative mt-3">
          <input
            type="text"
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-green-500  disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400"
            placeholder="Phone number"
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
        <div className="relative py-3">
          <input
            type="password"
            className="peer py-3 px-4 ps-11 block w-96 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Password"
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
          <Link
            className="bg-blue-700 py-2 block rounded-md text-white font-semibold hover:bg-blue-900"
            href={"/dashboard"}
          >
            Register
          </Link>
        </div>
      </>
    </div>
  );
};

export default Register;
