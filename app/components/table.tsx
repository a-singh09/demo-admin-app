"use client"

import DropdownButton from "./dropdownButton";

interface User {
    name?: string;
    admissionNumber?: string;
    rollNumber?: number;
    fees?: number;
    balance?: number;
    class?: number;
    section?: string;
    contact?: number;
    attendance?: string;

    // subjects
    english?: number;
    punjabi?: number;
    maths?: number;
    science?: number;
    social?: number;
    hindi?: number;
    totalMarks?: number;
    percentage?: number;

    // events
    eventName?: string;
    fromDate?: string;
    toDate?: string;

    //timetable
    time?: string;
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;

    //fees
    date?: string;
    amountPaid?: number;
    remarks?: string;
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
                    {user.name && <td className="pr-3 py-3 font-medium">{user.name}</td>}
                    {user.admissionNumber && <td className="p-3 text-gray-500 dark:text-gray-400">
                        {user.admissionNumber}
                    </td>}
                    {user.fees && <td className="p-3 text-center">Rs. {user.fees}</td>}
                    {user.balance && <td className="p-3 text-center">Rs. {user.balance}</td>}
                    {user.class && <td className="p-3 text-center">{user.class}</td>}
                    {user.section && <td className="p-3 text-center">{user.section}</td>}
                    {user.contact && <td className="p-3 text-center">{user.contact}</td>}
                    {user.rollNumber && <td className="p-3 text-center">{user.rollNumber}</td>}
                    {user.attendance && <td className="p-3 text-center">{user.attendance}</td>}
                    {user.english && <td className="p-3 text-center">{user.english}</td>}
                    {user.punjabi && <td className="p-3 text-center">{user.punjabi}</td>}
                    {user.maths && <td className="p-3 text-center">{user.maths}</td>}
                    {user.science && <td className="p-3 text-center">{user.science}</td>}
                    {user.social && <td className="p-3 text-center">{user.social}</td>}
                    {user.hindi && <td className="p-3 text-center">{user.hindi}</td>}
                    {user.totalMarks && <td className="p-3 text-center">{user.totalMarks}</td>}
                    {user.percentage && <td className="p-3 text-center">{user.percentage}</td>}

                    {/* events */}
                    {user.eventName && <td className="p-3 text-center">{user.eventName}</td>}
                    {user.fromDate && <td className="p-3 text-center">{user.fromDate}</td>}
                    {user.toDate && <td className="p-3 text-center">{user.toDate}</td>}

                    {/* fees */}
                    {user.date && <td className="p-3 text-center">{user.date}</td>}
                    {user.amountPaid && <td className="p-3 text-center">{user.amountPaid}</td>}
                    {user.remarks && <td className="p-3 text-center">{user.remarks}</td>}

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