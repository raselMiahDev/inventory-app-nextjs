import dynamic from "next/dynamic";
const Login = dynamic(() => import("@/components/user/Login"));
const Register = dynamic(() => import("./../components/user/Register"));
const page = () => {
  return (
    <div className="grid justify-center items-center h-[100vh] md:h-[100vh] bg-slate-50">
      <div className=" bg-white px-8 py-10 shadow-2xl rounded-lg">
        <div className="px-4">
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-gray-600 active"
              id="basic-tabs-item-1"
              data-hs-tab="#basic-tabs-1"
              aria-controls="basic-tabs-1"
              role="tab"
            >
              Login
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-gray-600"
              id="basic-tabs-item-2"
              data-hs-tab="#basic-tabs-2"
              aria-controls="basic-tabs-2"
              role="tab"
            >
              Register
            </button>
          </nav>
        </div>
        <div className="mt-3 p-4">
          <div
            id="basic-tabs-1"
            role="tabpanel"
            aria-labelledby="basic-tabs-item-1"
          >
            <Login />
          </div>
          <div
            id="basic-tabs-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="basic-tabs-item-2"
          >
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
