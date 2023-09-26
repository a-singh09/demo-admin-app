"use client"

import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import Footer from "../../components/footer";
import DashboardComponent from "../../components/dashboardComponent";
import Stacks from "@/app/components/stacks";


function Complaints() {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
    

    const dropdownItems = [
        { title: "Delete" }
    ];

    const stackData = [
        { title: "Stack 1", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quod eaque repellat at fugit magnam quibusdam modi ipsam fugiat id?", dropdownItems },
        { title: "Stack 2", message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque voluptatibus ducimus vero dolore nostrum? Voluptatibus quidem, sed aliquid ab repellendus sequi, cupiditate quaerat culpa sunt totam eveniet veniam eligendi quasi placeat quisquam maiores hic? Tenetur obcaecati itaque, iure quaerat quibusdam minima ad voluptatibus quia id quasi natus cumque tempore beatae qui a iusto atque nihil.", dropdownItems },
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
                    <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full bg-white">

                        <Stacks stacks={stackData} dropdownItems={dropdownItems} />
                        
                    </div>
                    {/* END Page Section */}
                </main>
                {/* END Page Content */}

                <Footer />
            </div>
        </>

    )
}

export default Complaints