import React from 'react'

function Footer() {
    return (
        <>
            {/* Page Footer */}
            <footer id="page-footer" className="flex flex-none items-center bg-white dark:bg-gray-800 dark:bg-opacity-50">
                <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
                    <div className="pt-4 pb-1 md:pb-4">
                        <a href="#" target="_blank" className="font-medium text-rose-600 hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-300">Sturec</a> ©
                    </div>
                    <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
                        <span>Crafted with</span>
                        <svg className="hi-solid hi-heart inline-block w-4 h-4 mx-1 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                        <span>by <a href="https://github.com/a-singh09" target="_blank" className="font-medium text-rose-600 hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-300">Anshdeep Singh</a></span>
                    </div>
                </div>
            </footer>
            {/* END Page Footer */}
        </>
    )
}

export default Footer