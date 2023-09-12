import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputPlaceholders: string[]; // Add a prop for input placeholders
}

export default function Compose({ isOpen, setIsOpen, inputPlaceholders }: ModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Modals: With Form */}
      <div>
        {/* Modal Container */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-90" onClose={closeModal}>
            {/* Modal Backdrop */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm" />
            </Transition.Child>
            {/* END Modal Backdrop */}
  
            {/* Modal Dialog */}
            <div className="fixed inset-0 overflow-y-auto p-4 lg:p-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-125"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-125"
              >
                <Dialog.Panel className="w-full max-w-md mx-auto flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                  <div className="flex justify-between items-center py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                    <Dialog.Title
                      as="h3"
                      className="font-medium flex items-center space-x-2"
                    >
                      <span>Compose</span>
                    </Dialog.Title>
  
                    <div className="-my-4">
                      <button
                        onClick={closeModal}
                        type="button"
                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                      >
                        <svg className="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-5 grow">
                    {inputPlaceholders.map((placeholder, index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder={placeholder} // Use the placeholder from props
                        className="w-full my-2 block border placeholder-gray-500 px-3 py-2 leading-5 text-sm rounded-lg border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-rose-500 dark:placeholder-gray-400"
                      />
                    ))}
                  </div>
                  <div className="text-right space-x-2 py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
                    <button
                      onClick={closeModal}
                      type="button" 
                      className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      type="button" 
                      className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-rose-700 bg-rose-700 text-white hover:text-white hover:bg-rose-600 hover:border-rose-600 focus:ring focus:ring-rose-400 focus:ring-opacity-50 active-bg-rose-700 active:border-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            {/* END Modal Dialog */}
          </Dialog>
        </Transition>
        {/* END Modal Container */}
      </div>
      {/* END Modals: With Form */}
    </>
  );
}
