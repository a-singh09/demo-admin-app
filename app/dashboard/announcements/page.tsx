"use client"

import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import Footer from "../../components/footer";
import DashboardComponent from "../../components/dashboardComponent";
import Stacks from "@/app/components/stacks";
import Compose from "@/app/components/compose";

function Announcements() {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownItems = [
        { title: "Delete" },
        { title: "Edit" },
    ];

    const stackData = [
        { title: "Stack 1", message: "Lorem ipsum dolor sit amet.", dropdownItems },
        { title: "Stack 2", message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam esse sint corporis consequatur voluptate neque corrupti, fugit assumenda fugiat, porro sequi. Dolorem, non molestiae? Adipisci sint, laboriosam quo possimus aliquid dignissimos iure repellat at.", dropdownItems },
        // Add more stack objects as needed
    ];

    function openModal() {
        setIsOpen(true);
      }

      const inputPlaceholders = ["From", "To", "Subject", "Message"];

    return (
        <>

            <div
                id="page-container"
                className={`flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900 ${desktopSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                <DashboardComponent />

                <Compose isOpen={isOpen} setIsOpen={setIsOpen} inputPlaceholders={inputPlaceholders}  />

                {/* Page Content */}
                <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
                    {/* Page Section */}
                    <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full bg-white">

                        {/* Form Elements: Select */}
                        <form className="space-y-6 dark:text-gray-100">
                            {/* Select Box */}
                            <div className="space-y-1">
                                {/* <label htmlFor="select" className="font-medium">Select</label> */}
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
                        <Stacks stacks={stackData} dropdownItems={dropdownItems} />
                        <div className="flex justify-end">
                            
                            <button type="button" onClick={openModal} className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-500 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                                +
                            </button>
                        </div>
                    </div>
                    {/* END Page Section */}
                </main>
                {/* END Page Content */}

                <Footer />
            </div>
        </>

    )
}

export default Announcements