"use client"

import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import Footer from "../../components/footer";
import DashboardComponent from "../../components/dashboardComponent";
import Stacks from "@/app/components/stacks";
import Compose from "@/app/components/compose";

function AdmissionForm() {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownItems = [
        { title: "Delete" },
        { title: "Edit" },
    ];

    const stackData = [
        { title: "Stack 1", email: "stack1@example.com", dropdownItems },
        { title: "Stack 2", email: "stack2@example.com", dropdownItems },
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

                <Compose isOpen={isOpen} setIsOpen={setIsOpen} inputPlaceholders={inputPlaceholders} />

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
                        <div>
                            {/* Button (normal) */}
                            <button type="button" className="inline-flex justify-center items-center mt-5 space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                                Click Here to View Admission Form
                            </button>
                            {/* END Button (normal) */}
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

export default AdmissionForm