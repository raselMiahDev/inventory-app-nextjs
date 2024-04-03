"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideMenu = () => {
  const currenRoute = usePathname();
  const menuList = [
    {
      buttonText: "Customer",
      subMenu: [
        {
          title: "Create Customer",
          href: "/dashboard/customer/create-customer",
        },
        {
          title: "Customer List",
          href: "/dashboard/customer/customer-list",
        },
      ],
    },
    {
      buttonText: "Supplier",
      subMenu: [
        {
          title: "Create Supplier",
          href: "/dashboard/supplier/create-supplier",
        },
        {
          title: "Supplier List",
          href: "/dashboard/supplier/supplier-list",
        },
      ],
    },
    {
      buttonText: "Products",
      subMenu: [
        {
          title: "Create Products",
          href: "/dashboard/product/create-product",
        },
        {
          title: "Products List",
          href: "/dashboard/product/product-list",
        },
      ],
    },

    {
      buttonText: "Purchase",
      subMenu: [
        {
          title: "Create Purchase",
          href: "/dashboard/purchase/create-purchase",
        },
        {
          title: "Products List",
          href: "/dashboard/purchase/purchase-list",
        },
      ],
    },
    {
      buttonText: "Sells",
      subMenu: [
        {
          title: "Create Sells",
          href: "/dashboard/sells/create-sells",
        },
        {
          title: "Sells List",
          href: "/dashboard/sells/sells-list",
        },
      ],
    },
    {
      buttonText: "Expense Type",
      subMenu: [
        {
          title: "Create Expense",
          href: "/dashboard/expenseType/create-expenseType",
        },
        {
          title: "Expense List",
          href: "/dashboard/expenseType/expenseType-list",
        },
      ],
    },
    {
      buttonText: "Expense",
      subMenu: [
        {
          title: "Create Expense",
          href: "/dashboard/expense/create-expense",
        },
        {
          title: "Expense List",
          href: "/dashboard/expense/expense-list",
        },
      ],
    },
    {
      buttonText: "Brands",
      subMenu: [
        {
          title: "Create Brands",
          href: "/dashboard/brand/create-brand",
        },
      ],
    },
    {
      buttonText: "Categoris",
      subMenu: [
        {
          title: "Create Categoris",
          href: "/dashboard/categories/create-categories",
        },
      ],
    },
  ];
  return (
    <div className="block">
      <>
        {/* Navigation Toggle */}
        <button
          type="button"
          className="text-gray-200 hover:text-gray-600 w-96"
          data-hs-overlay="#docs-sidebar"
          aria-controls="docs-sidebar"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="flex-shrink-0 size-10"
            width={20}
            height={20}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {/* End Navigation Toggle */}
        <div
          id="docs-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="px-6">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              Inventory
            </Link>
          </div>
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open=""
          >
            <ul className="space-y-1.5">
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-gray-500 dark:bg-gray-900  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/dashboard"
                >
                  <svg
                    className="size-4"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Dashboard
                </Link>
              </li>

              {menuList.map((item, index) => {
                return (
                  <li className="hs-accordion" id={index}>
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="size-4"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {item["buttonText"]}
                      <svg
                        className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id={index}
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="pt-2 ps-2">
                        <li>
                          {item.subMenu.map((menu) => {
                            return (
                              <Link
                                className={
                                  currenRoute === menu["href"]
                                    ? "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white border-r-4"
                                    : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-500 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                }
                                href={menu["href"]}
                              >
                                {menu.title}
                              </Link>
                            );
                          })}
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    </div>
  );
};

export default SideMenu;
