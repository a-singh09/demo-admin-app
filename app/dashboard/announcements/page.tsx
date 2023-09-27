"use client"

import React, { useState } from "react";
import DashboardComponent from "../../components/dashboardComponent";
import Compose from "@/app/components/compose";
import Stacks from "@/app/components/stacks";
import Footer from "../../components/footer";

function Announcements() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

    const dropdownItems = [
        { title: "Delete" },
        { title: "Edit" },
    ];

    const stackData = [
        { title: "Stack 1", message: "Lorem ipsum dolor sit amet.", date: "2023-09-05", dropdownItems },
        { title: "Stack 2", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat non ipsum sed iure et quae ducimus, doloribus sunt impedit nostrum dolor fugiat molestiae repellendus vel repellat accusantium, ullam blanditiis eos aliquid animi corporis. Tempora nesciunt quo, quisquam fuga mollitia recusandae.", date: "2023-09-04", dropdownItems },
        // Add more stack objects as needed
    ];

    const inputPlaceholders = ["From", "To", "Subject", "Message"];

    function openModal() {
        setIsOpen(true);
    }

    function groupAndSortAnnouncements(stackData: any[]) {
        const groupedAnnouncements: Record<string, any[]> = {};

        stackData.forEach((announcement) => {
            const date = new Date(announcement.date).toDateString();
            if (!groupedAnnouncements[date]) {
                groupedAnnouncements[date] = [];
            }
            groupedAnnouncements[date].push(announcement);
        });

        for (const date in groupedAnnouncements) {
            groupedAnnouncements[date].sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
        }

        return groupedAnnouncements;
    }

    const groupedAnnouncements = groupAndSortAnnouncements(stackData);

    return (
        <div
            id="page-container"
            className={`flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900 ${desktopSidebarOpen ? "lg:pl-64" : ""
        }`}        
        >
            <DashboardComponent />

            <Compose isOpen={isOpen} setIsOpen={setIsOpen} inputPlaceholders={inputPlaceholders} />

            <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
                <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full bg-white">
                    <form className="space-y-6 dark:text-gray-100">
                        <div className="space-y-1">
                            <select
                                id="select"
                                name="select"
                                className="w-full block border px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500"
                            >
                                <option>Teacher</option>
                                <option>Student</option>
                                <option>Driver</option>
                                <option>Employee</option>
                                <option>Classroom</option>
                                <option>Buses</option>
                            </select>
                        </div>
                    </form>
                    {/* Display grouped and sorted announcements */}
                    {Object.keys(groupedAnnouncements).map((date) => (
                        <div key={date}>
                            <h2 className="text-xl font-semibold mt-6 mb-2">{date}</h2>
                            {/* Replace individual announcements with <Stacks /> */}
                            <Stacks stacks={groupedAnnouncements[date]} dropdownItems={dropdownItems} />
                        </div>
                    ))}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={openModal}
                            className="inline-flex mr-2 mt-2 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-rose-700 bg-rose-500 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                        >
                            +
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Announcements;
