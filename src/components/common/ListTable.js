import React from "react";

const ListTable = (props) => {
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
                    placeholder="Search Here"
                    className="border-purple-300 border-2 p-2 rounded-md focus:outline-none focus:ring-0 w-72"
                  />
                </div>
                <div>
                  <select>
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                  </select>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table">
                <thead className="bg-purple-400">
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
                  {props.data.length > 0
                    ? props.data.map((item) => {
                        return (
                          <tr key={item["id"]}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {item["name"]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item["email"]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item["phoneNumber"]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item["address"]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <div class="inline-flex rounded-lg shadow-sm">
                                <button
                                  type="button"
                                  className="py-3 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  See
                                </button>
                                <button
                                  type="button"
                                  className="py-3 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                  delete
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

export default ListTable;
