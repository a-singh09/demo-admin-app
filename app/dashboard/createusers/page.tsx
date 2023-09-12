"use client"

import DashboardComponent from "@/app/components/dashboardComponent";
import Footer from "@/app/components/footer";
import { useState } from "react";

export default function CreateUsers() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  return (
    <>
      <div
        id="page-container"
        className={`flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900 ${desktopSidebarOpen ? "lg:pl-64" : ""
          }`}
      >
        <DashboardComponent />
        <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8 w-full">




            {/* <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700">Content (max width 1280px)</div> */}


            {/* Tables: In Card with Search and Actions */}
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
              <div className="py-4 px-5 bg-gray-50 text-center sm:text-left flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center dark:bg-gray-700/50">
                <div>
                  <h3 className="font-semibold mb-1">
                    All Subscriptions
                  </h3>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    You have <a href="#" className="text-rose-600 hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-300">5 subscribers</a>
                  </h4>
                </div>
                <div className="flex items-center gap-2">

                  <select id="date" name="date" className="sm:w-36 block border font-semibold border-gray-200 rounded-lg px-3 py-2 leading-5 text-sm w-full focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-rose-500">
                    <option>Principal</option>
                    <option>Teacher</option>
                    <option selected>Student</option>
                    <option>Driver</option>
                    <option>Employee</option>
                    <option>Classroom</option>
                    <option>Buses</option>
                  </select>
                </div>
              </div>
              <div className="p-5 grow border-b border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <div className="flex items-center">
                    <input type="text" id="primary_normal" name="primary_normal" placeholder="Enter Student Mail" className="grow focus:z-1 mr-6 w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" />
                    <input type="text" id="primary_normal" name="primary_normal" placeholder="Enter Admission No." className="grow focus:z-1 mr-6 w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" />
                    <button type="button" className="flex-none inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 grow">
                {/* Responsive Table Container */}
                <div className="rounded overflow-x-auto min-w-full bg-white dark:bg-gray-800 dark:border-gray-700">
                  {/* Table */}
                  <table className="min-w-full text-sm align-middle whitespace-nowrap">
                    {/* Table Header */}
                    <thead>
                      <tr>
                        <th className="pr-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                          Name
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                          Email
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                          Plan
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-right dark:text-gray-50 dark:border-gray-700">
                          MMR
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-right dark:text-gray-50 dark:border-gray-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {/* END Table Header */}

                    {/* Table Body */}
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="pr-3 py-3 font-medium">
                          Nansi Hart
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          n.hart@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 border border-transparent bg-emerald-100 dark:font-medium dark:text-emerald-200 dark:border-emerald-900 dark:bg-emerald-700 dark:bg-opacity-10">Agency</div>
                        </td>
                        <td className="p-3 text-right">
                          $49,00
                        </td>
                        <td className="pl-3 py-3 text-right">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="pr-3 py-3 font-medium">
                          Lia Baker
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          l.baker@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-rose-900 border border-transparent bg-rose-100 dark:font-medium dark:text-rose-200 dark:border-rose-900 dark:border-opacity-75 dark:bg-rose-700 dark:bg-opacity-10">Freelancer</div>
                        </td>
                        <td className="p-3 text-right">
                          $19,00
                        </td>
                        <td className="pl-3 py-3 text-right">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="pr-3 py-3 font-medium">
                          Xavier Rosales
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          x.rosales@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-orange-900 border border-transparent bg-orange-100 dark:font-medium dark:text-orange-200 dark:border-orange-900 dark:border-opacity-75 dark:bg-orange-700 dark:bg-opacity-10">Trial</div>
                        </td>
                        <td className="p-3 text-right">
                          $0,00
                        </td>
                        <td className="pl-3 py-3 text-right">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="pr-3 py-3 font-medium">
                          Danyal Clark
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          d.clark@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 border border-transparent bg-emerald-100 dark:font-medium dark:text-emerald-200 dark:border-emerald-900 dark:bg-emerald-700 dark:bg-opacity-10">Agency</div>
                        </td>
                        <td className="p-3 text-right">
                          $49,00
                        </td>
                        <td className="pl-3 py-3 text-right">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <td className="pr-3 py-3 font-medium">
                          Keira Simons
                        </td>
                        <td className="p-3 text-gray-500 dark:text-gray-400">
                          k.simons@example.com
                        </td>
                        <td className="p-3">
                          <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-rose-900 border border-transparent bg-rose-100 dark:font-medium dark:text-rose-200 dark:border-rose-900 dark:border-opacity-75 dark:bg-rose-700 dark:bg-opacity-10">Freelancer</div>
                        </td>
                        <td className="p-3 text-right">
                          $19,00
                        </td>
                        <td className="pl-3 py-3 text-right">
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Edit
                          </button>
                          <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-2 py-1 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* END Table Body */}
                  </table>
                  {/* END Table */}
                </div>
                {/* END Responsive Table Container */}
                <div className="flex justify-end">
                <button type="button" className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                  Save
                </button>
                <button type="button" className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                  Import From Excel
                </button>
                </div>
                
              </div>

            </div>
            {/* END Tables: In Card with Search and Actions */}


          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
        <Footer />
      </div>
    </>
  )
}