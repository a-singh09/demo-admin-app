"use client"

import DropdownButton from "./dropdownButton";

interface User {
    name: string;
    email: string;
    plan: string;
    mmr: string;
}

interface DropdownItem {
    title: string;
}

interface TableProps {
    users: User[];
    dropdownItems: DropdownItem[];
}

const Table: React.FC<TableProps> = ({ users, dropdownItems }) => {
    return (
        <>
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
                        <select
                            id="date"
                            name="date"
                            defaultValue="student"
                            className="sm:w-36 block border font-semibold border-gray-200 rounded-lg px-3 py-2 leading-5 text-sm w-full focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-rose-500"
                        >
                            <option value="principal">Principal</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            <option value="driver">Driver</option>
                            <option value="employee">Employee</option>
                            <option value="classroom">Classroom</option>
                            <option value="buses">Buses</option>
                        </select>
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
                            <input
                                type="text"
                                id="primary_normal"
                                name="primary_normal"
                                placeholder="Enter Date of Joining"
                                className="grow focus:z-1 mr-6 w-full block border placeholder-gray-500 px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400"
                            />
                            <select
                                id="primary_normal"
                                name="primary_normal"
                                className="grow focus:z-1 mr-6 w-full block border px-3 py-2 leading-6 rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500"
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="option1">Option 1</option>
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
                                        Email
                                    </th>
                                    <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-left dark:text-gray-50 dark:border-gray-700">
                                        Plan
                                    </th>
                                    <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-right dark:text-gray-50 dark:border-gray-700">
                                        MMR
                                    </th>
                                    <th className="px-3 pb-4 text-gray-900 border-b-2 border-gray-200/50 font-semibold text-right dark:text-gray-50 dark:border-gray-700">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            {/* END Table Header */}

                            {/* Table Body */}
                            {users.map((user, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 dark:border-gray-700/50"
                                >
                                    <td className="pr-3 py-3 font-medium">{user.name}</td>
                                    <td className="p-3 text-gray-500 dark:text-gray-400">
                                        {user.email}
                                    </td>
                                    <td className="p-3">
                                        <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-emerald-900 border border-transparent bg-emerald-100 dark:font-medium dark:text-emerald-200 dark:border-emerald-900 dark:bg-emerald-700 dark:bg-opacity-10">
                                            {user.plan}
                                        </div>
                                    </td>
                                    <td className="p-3 text-right">{user.mmr}</td>
                                    <td className="pl-3 py-3 text-right">
                                        <DropdownButton items={dropdownItems} />
                                    </td>
                                </tr>
                            ))}
                            {/* END Table Body */}
                        </table>
                        {/* END Table */}
                    </div>
                    {/* END Responsive Table Container */}
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
        </>
    )
}

export default Table