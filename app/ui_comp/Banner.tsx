import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
            {/* banner - start */}
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="relative flex flex-wrap rounded-lg bg-indigo-500 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                    <div className="order-1 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a section of some simple filler text, also known as placeholder text.</div>
                    <Link href="/" className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn more</Link>
                </div>
            </div>
            {/* banner - end */}
        </div>

    )
}

export default Banner