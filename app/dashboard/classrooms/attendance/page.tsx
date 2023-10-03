"use client"

import Compose from "@/app/components/compose";
import DashboardComponent from "@/app/components/dashboardComponent";
import Footer from "@/app/components/footer";
import Table from "@/app/components/table";
import { useState } from "react";

export default function Score() {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownItems = [
        { title: "Delete" },
        { title: "Edit" },
    ];

    const users = [
        {
            name: "John",
            admissionNumber: "98987321",
            rollNumber: 3,
            attendance: "Present",
        },
        {
            name: "Steve",
            admissionNumber: "98987321",
            rollNumber: 4,
            attendance: "Absent",
        },
    ];

    function openModal() {
        setIsOpen(true);
    }

    const inputPlaceholders = ["Full Name", "Admission Number", "Contact", "Grade", "Section"];

    return (
        <>
            <div
                id="page-container"
                className={`flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900 ${desktopSidebarOpen ? "lg:pl-64" : ""
                    }`}
            >
                <DashboardComponent />

                <Compose isOpen={isOpen} setIsOpen={setIsOpen} inputPlaceholders={inputPlaceholders} />

                <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
                    {/* Page Section */}
                    <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8 w-full">




                        {/* <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700">Content (max width 1280px)</div> */}

                        {/* Tables: In Card with Search and Actions */}
                        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                            <div className="py-4 px-5 bg-gray-50 text-center sm:text-left flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center dark:bg-gray-700/50">
                                <div>
                                    <h3 className="font-semibold mb-1">All Subscriptions</h3>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        You have{" "}
                                        <a
                                            href="#"
                                            className="text-rose-600 hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-300"
                                        >
                                            5 subscribers
                                        </a>
                                    </h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* <select
                                        id="date"
                                        name="date"
                                        defaultValue="student"
                                        className="sm:w-36 block border font-semibold border-gray-200 rounded-lg px-3 py-2 leading-5 text-sm w-full focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-rose-500"
                                    >
                                        <option value="principal">January</option>
                                        <option value="teacher">February</option>
                                        <option value="student">March</option>
                                        <option value="driver">April</option>
                                        <option value="employee">May</option>
                                        <option value="classroom">June</option>
                                        <option value="buses">July</option>
                                    </select> */}
                                    <input type="date" name="date" />
                                </div>
                            </div>
                            <div className="p-5 grow border-b border-gray-100 dark:border-gray-700">
                                <div className="relative">
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            id="primary_normal"
                                            name="primary_normal"
                                            placeholder="Enter Student Name"
                                            className="grow focus:z-1 mr-6 w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400"
                                        />
                                        <input
                                            type="text"
                                            id="primary_normal"
                                            name="primary_normal"
                                            placeholder="Enter Admission No."
                                            className="grow focus:z-1 mr-6 w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400"
                                        />
                                        <select
                                            id="primary_normal"
                                            name="primary_normal"
                                            className="grow focus:z-1 mr-6 w-full block border px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500"
                                        >

                                            <option value="">Enter Class</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        <select
                                            id="primary_normal"
                                            name="primary_normal"
                                            className="grow focus:z-1 mr-6 w-full block border px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500"
                                        >

                                            <option value="">Enter Section</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>


                                        <button
                                            type="button"
                                            className="flex-none inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                                        >
                                            Search
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
                                                    Admission No.
                                                </th>
                                                <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                                                    Roll No.
                                                </th>
                                                <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-right dark:text-gray-50 dark:border-gray-700">
                                                    Attendance
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* END Table Header */}

                                        <Table users={users} dropdownItems={dropdownItems} />

                                    </table>
                                    {/* END Table */}
                                </div>
                                {/* END Responsive Table Container */}
                                {/* <div className="flex justify-start">
                  <button type="button" onClick={openModal} className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90">
                    Add New
                  </button>
                </div> */}
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active-bg-rose-700 active-border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                                    >
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