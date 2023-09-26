import Link from "next/link";
import DropdownButton from "./dropdownButton";
import {HiMail, HiPhone} from "react-icons/hi"
import {ImWhatsapp} from "react-icons/im"

interface StackProps {
    title: string;
    email?: string;
    message?: string;
    phoneNumber?: number;
    whatsappNumber?: number;
    dropdownItems: DropdownItem[];
}

interface DropdownItem {
    title: string;
  }

const Stack = ({ title, email, message, phoneNumber, whatsappNumber, dropdownItems }: StackProps) => {
    return (
        <>
            
            <form className="flex items-center justify-between space-x-2 p-4 my-2 rounded-lg bg-rose-100 dark:bg-gray-900/50">
                <div className="space-y-1">
                    <h4 className="font-semibold">{title}</h4>
                    {email && <div className="flex items-center space-x-2"><HiMail /> <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Email: </strong>{email} </p></div>}
                    {phoneNumber && <div className="flex items-center space-x-2"><HiPhone /> <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Phone No: </strong>{phoneNumber} </p></div>}
                    {whatsappNumber && <div className="flex items-center space-x-2"><ImWhatsapp /> <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Whatsapp No: </strong>{whatsappNumber} </p></div>}
                    {message && <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>}
                </div>
                <div className="flex-none">
                    {/* <button
                        type="submit"
                        className="inline-flex justify-center items-center space-x-1 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                    >
                        Edit
                    </button> */}
                    <DropdownButton items={dropdownItems} />
                </div>
            </form>
        </>
    );
};

interface StacksProps {
    stacks: StackProps[];
    dropdownItems: DropdownItem[];
}

const Stacks = ({ stacks, dropdownItems }: StacksProps) => {
    return (
        <>
            {stacks.map((stack, index) => (
                <Stack key={index} {...stack} dropdownItems={dropdownItems} />
            ))}
        </>
    );
};

export default Stacks;
