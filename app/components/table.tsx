"use client"

import DropdownButton from "./dropdownButton";

interface User {
    name: string;
    admissionNumber: string;
    fees?: number;
    balance?: number;
    class: number;
    section: string;
    contact: number;
}

interface DropdownItem {
    title: string;
    onClick?: () => void;
}

interface TableProps {
    users: User[];
    dropdownItems: DropdownItem[];

}

const Table: React.FC<TableProps> = ({ users, dropdownItems }) => {
    return (
        <>


            {/* Table Component */}
            {/* Table Body */}
            {users.map((user, index) => (
                <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700/50"
                >
                    <td className="pr-3 py-3 font-medium">{user.name}</td>
                    <td className="p-3 text-gray-500 dark:text-gray-400">
                        {user.admissionNumber}
                    </td>
                    {user.fees && <td className="p-3 text-right">Rs. {user.fees}</td>}
                    {user.balance && <td className="p-3 text-right">Rs. {user.balance}</td>}
                    <td className="p-3 text-right">{user.class}</td>
                    <td className="p-3 text-right">{user.section}</td>
                    <td className="p-3 text-right">{user.contact}</td>
                    <td className="pl-3 py-3 text-right">
                        <DropdownButton items={dropdownItems} />
                    </td>
                </tr>
            ))}
            {/* END Table Body */}
            {/* Table Component ends */}

        </>
    )
}

export default Table