"use client"

import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import Footer from "../../components/footer";
import DashboardComponent from "../../components/dashboardComponent";
import Stacks from "@/app/components/stacks";

function ManageUsers() {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

    const stackData = [
        { title: "Stack 1", email: "stack1@example.com" },
        { title: "Stack 2", email: "stack2@example.com" },
        // Add more stack objects as needed
    ];


    return (
        <>

            <div
                id="page-container"
                className={`flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900 ${desktopSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                <DashboardComponent />

                {/* Page Content */}
                <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
                    {/* Page Section */}
                    <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">

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
                        <Stacks stacks={stackData} />

                    </div>
                    {/* END Page Section */}
                </main>
                {/* END Page Content */}

                <Footer />
            </div>
        </>

    )
}

export default ManageUsers