"use client"

import DashboardComponent from "@/app/components/dashboardComponent";
import Footer from "@/app/components/footer";
import Table from "@/app/components/table";
import { useState } from "react";

export default function CreateUsers() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  const dropdownItems = [
    { title: "Delete" },
    { title: "Edit" },
];

  const users = [
    {
      name: "Nansi Hart",
      email: "n.hart@example.com",
      plan: "Agency",
      mmr: "$49,00",
    },
    {
      name: "Nansi Hart",
      email: "n.hart@example.com",
      plan: "Agency",
      mmr: "$49,00",
    },
  ];

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


            <Table users={users} dropdownItems={dropdownItems}/>


          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
        <Footer />
      </div>
    </>
  )
}