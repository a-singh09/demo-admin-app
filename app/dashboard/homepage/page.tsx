"use client"

import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";
import Footer from "../../components/footer";
import DashboardComponent from "../../components/dashboardComponent";
import Cards from "@/app/components/cards"

function HomePage() {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  const cardsData = [
    {
      title: 'Create Users',
      content: 'Create User Profiles',
      footer: 'Footer for Card 1',
      url: 'createusers',
    },
    {
      title: 'Manage Users',
      content: 'Manage User Profiles',
      footer: 'Footer for Card 2',
      url: 'manageusers',
    },
    {
      title: 'Fees',
      content: 'Change Fee Details Here',
      footer: 'Footer for Card 2',
      url: 'fees',
    },
    {
      title: 'Announcements',
      content: 'Make an Announcement',
      footer: 'Footer for Card 2',
      url: 'announcements',
    },
    {
      title: 'Leaves',
      content: 'Grant Leaves Here',
      footer: 'Footer for Card 2',
      url: 'leaves',
    },
    {
      title: 'Complaints',
      content: 'View Complaints Here',
      footer: 'Footer for Card 2',
      url: 'complaints',
    }, {
      title: 'Transport',
      content: 'View Driver Status Here',
      footer: 'Footer for Card 2',
      url: 'transport',
    }, {
      title: 'Classrooms',
      content: 'View All Classrooms Here',
      footer: 'Footer for Card 2',
      url: 'classrooms',
    }, {
      title: 'Academic Calender',
      content: 'View and Edit Academic Calender',
      footer: 'Footer for Card 2',
      url: 'calendar',
    }, {
      title: 'Contacts',
      content: 'View Contacts',
      footer: 'Footer for Card 2',
      url: 'contacts',
    }, {
      title: 'Admission Form',
      content: 'View Admission Form',
      footer: 'Footer for Card 2',
      url: 'admissionform',
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

        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
          {/* Page Section */}
          <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">

            <Cards cardsData={cardsData} />

          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}

        <Footer />
      </div>
    </>

  )
}

export default HomePage