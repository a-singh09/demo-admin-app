"use client"

import DashboardComponent from "@/app/components/dashboardComponent";
import Footer from "@/app/components/footer";
import Table from "@/app/components/table";
import { useState } from "react";
import Compose from "@/app/components/compose";

export default function UserInfo() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    { title: "Collect Fee", onClick: openModal },
    { title: "Check Report", onClick: openModal },
  ];

  const user = {
    name: "John",
    admissionNumber: "98987321",
    fees: 20000,
    balance: 40000,
    class: 3,
    section: "B",
    contact: 1234567890,
  }

  const feeData = [
    {
      date: "12/12/2021",
      amountPaid: 20000,
      remarks: "Paid",
    }
  ]

  function openModal() {
    setIsOpen(true);
  }

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

            {/* Form Layouts: Multiple Cards */}
            <div className="space-y-4 lg:space-y-8 dark:text-gray-100">
              {/* User Profile */}
              <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                {/* Header */}
                <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                  <h3 className="flex items-center space-x-2">
                    <span>User Profile</span>
                  </h3>
                </div>
                {/* END Header */}

                {/* Body */}
                <div className="p-5 grow md:flex md:space-x-5">
                  <p className="md:flex-none md:w-1/3 text-gray-500 text-sm mb-5 dark:text-gray-400">
                    Profile of the Student
                  </p>
                  <form className="space-y-6 md:w-1/2">
                    <div className="space-y-1">
                      <label htmlFor="name" className="font-medium">Name</label>
                      <input type="text" id="name" name="name" defaultValue={user.name} className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" disabled />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="admissionNumber" className="font-medium">Admission No.</label>
                      <input type="text" id="admissionNumber" name="admissionNumber" defaultValue={user.admissionNumber} className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" disabled />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact" className="font-medium">Contact</label>
                      <input type="text" id="contact" name="contact" defaultValue={user.contact} className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" disabled />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="grade" className="font-medium">Class</label>
                      <input type="text" id="grade" name="grade" defaultValue={user.class} className="w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400" disabled />
                    </div>

                  </form>
                </div>
                {/* END Body */}
              </div>
              {/* END User Profile */}

            </div>
            {/* END Form Layouts: Multiple Cards */}

            {/* Tables: In Card with Search and Actions */}
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800 mt-5">
              <div className="py-4 px-5 bg-gray-50 text-center sm:text-left flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center dark:bg-gray-700/50">
                <div>
                  <h3 className="font-semibold mb-1">Fee Records</h3>
                </div>
                <div className="flex items-center gap-2">
                  <input type="date" name="date" />
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
                          Date
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                         Amount Paid
                        </th>
                        <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                          Remarks
                        </th>
                        
                      </tr>
                    </thead>
                    {/* END Table Header */}

                    <Table users={feeData} dropdownItems={dropdownItems} />

                  </table>
                  {/* END Table */}
                </div>
                {/* END Responsive Table Container */}
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