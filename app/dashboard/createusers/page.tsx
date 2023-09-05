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


            {/* Form Elements: Select */}
            <form className="space-y-6 dark:text-gray-100">
              {/* Select Box */}
              <div className="space-y-1">
                <label htmlFor="select" className="font-medium">Select option</label>
                <select id="select" name="select" className="w-full block border px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500">
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Driver</option>
                  <option>Employee</option>
                  <option>Classroom</option>
                  <option>Buses</option>
                </select>
              </div>
              {/* END Select Box */}

            </form>
            {/* END Form Elements: Select */}

            {/* <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700">Content (max width 1280px)</div> */}


          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}
        <Footer />
      </div>
    </>
  )
}