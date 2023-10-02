"use client"

import DropdownButton from "./dropdownButton";

interface User {
    name: string;
    admissionNumber?: string;
    rollNumber?: number;
    fees?: number;
    balance?: number;
    class?: number;
    section?: string;
    contact?: number;

    // subjects
    english?: number;
    punjabi?: number;
    maths?: number;
    science?: number;
    social?: number;
    hindi?: number;
    totalMarks?: number;
    percentage?: number;
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
                    {user.class && <td className="p-3 text-right">{user.class}</td>}
                    {user.section && <td className="p-3 text-right">{user.section}</td>}
                    {user.contact && <td className="p-3 text-right">{user.contact}</td>}
                    {user.rollNumber && <td className="p-3 text-right">{user.rollNumber}</td>}
                    {user.english && <td className="p-3 text-right">{user.english}</td>}
                    {user.punjabi && <td className="p-3 text-right">{user.punjabi}</td>}
                    {user.maths && <td className="p-3 text-right">{user.maths}</td>}
                    {user.science && <td className="p-3 text-right">{user.science}</td>}
                    {user.social && <td className="p-3 text-right">{user.social}</td>}
                    {user.hindi && <td className="p-3 text-right">{user.hindi}</td>}
                    {user.totalMarks && <td className="p-3 text-right">{user.totalMarks}</td>}
                    {user.percentage && <td className="p-3 text-right">{user.percentage}</td>}
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