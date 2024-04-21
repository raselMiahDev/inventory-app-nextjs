"use client";

import { useEffect, useState } from "react";
import {
  CUSTOMER_LIST_REQUEST,
  DELETE_CUSTOMER_REQUEST,
} from "@/app/apiRequiest/customerApi";
import { useSelector } from "react-redux";
import { LiaEditSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import { DeleteAlart } from "@/helper/DeleteAlart";

const page = () => {
  let [searchKeyword, setSearchKeyword] = useState("0");
  let [perPage, setPerPage] = useState(20);

  useEffect(() => {
    (async () => {
      await CUSTOMER_LIST_REQUEST(1, perPage, searchKeyword);
    })();
  }, []);
  let DataList = useSelector((state) => state.customer.List);
  let Total = useSelector((state) => state.customer.ListTotal);

  const handlePageClick = async (event) => {
    await CUSTOMER_LIST_REQUEST(event.selected + 1, perPage, searchKeyword);
  };
  // const perPageOnChange = async (e) => {
  //   console.log(e.target.value);
  //   setPerPage(parseInt(e.target.value));
  //   await CUSTOMER_LIST_REQUEST(1, e.target.value, searchKeyword);
  // };
  const searchKeywordOnChange = async (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value.length === 0) {
      setSearchKeyword("0");
      await CUSTOMER_LIST_REQUEST(1, perPage, "0");
    }
  };
  const TextSearch = (e) => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      row.style.display = row.innerText.includes(e.target.value) ? "" : "none";
    });
  };

  const DeleteItem = async (id) => {
    let Result = await DeleteAlart();
    if (Result.isConfirmed) {
      let DeleteResult = await DELETE_CUSTOMER_REQUEST(id);
      if (DeleteResult) {
        await CUSTOMER_LIST_REQUEST(1, perPage, searchKeyword);
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <div className="py-5 px-5 flex justify-between">
                <div>
                  <input
                    type="text"
                    onKeyUp={TextSearch}
                    placeholder="Search Here"
                    className="border-blue-300 border-2 p-2 rounded-md focus:outline-none focus:ring-0 w-72"
                  />
                </div>
                <div>
                  <select
                    onChange={(e) => setPerPage(e.target.value)}
                    data-hs-select='{
                      "placeholder": "Select option...",
                      "toggleTag": "<button type=\"button\"></button>",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1]",
                      "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                      "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                      "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                    }'
                    class="hidden"
                  >
                    <option value="20">20 Per Page</option>
                    <option value="30">30 Per Page</option>
                    <option value="50">50 Per Page</option>
                    <option value="100">100 Per Page</option>
                    <option value="150">150 Per Page</option>
                  </select>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table">
                <thead className="bg-blue-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-100 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-100 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-200">
                  {DataList.length > 0
                    ? DataList.map((item) => {
                        return (
                          <tr key={item["id"]}>
                            <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-800">
                              {item["name"]}
                            </td>
                            <td className="px-6 whitespace-nowrap text-sm text-gray-800">
                              {item["email"]}
                            </td>
                            <td className="px-6 whitespace-nowrap text-sm text-gray-800">
                              {item["phone"]}
                            </td>
                            <td className="px-6 whitespace-nowrap text-sm text-gray-800">
                              {item["address"]}
                            </td>
                            <td className="px-6 whitespace-nowrap text-end text-sm font-medium">
                              <div class="inline-flex rounded-lg shadow-sm">
                                <button
                                  type="button"
                                  className="py-3 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <LiaEditSolid color="blue" />
                                </button>
                                <button
                                  onClick={DeleteItem.bind(this, item["_id"])}
                                  type="button"
                                  className="py-3 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-red-500 text-gray-800 shadow-sm hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <AiOutlineDelete />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : "No data found"}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
