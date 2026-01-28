"use client";

import Image from 'next/image';

export default function PartnersHero() {
    return (
        <section className="relative w-full h-[80vh] md:h-[60vh] min-h-[700px] md:min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/Hero_Partners.png"
                    alt="Partners Hero"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pb-56 md:pb-12">

                {/* Main Text */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl drop-shadow-md">
                    Partner with Scholar Clone to<br />
                    Shape the Future of Education
                </h1>

                <p className="text-lg md:text-xl text-blue-50 max-w-2xl mb-10 drop-shadow-sm">
                    Join hands with us to revolutionize learning for K-12, higher education, and corporate training. Together, we can empower institutions, educators, and learners to achieve more.
                </p>

                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    suppressHydrationWarning
                >
                    Become a Partner
                </button>

            </div>

            {/* Search Bar Container - Bottom Left */}
            <div className="absolute bottom-20 md:bottom-8 left-4 right-4 md:left-20 md:right-auto z-20 flex items-center gap-4 w-auto md:w-full md:max-w-md">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-3 rounded-full text-black bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        suppressHydrationWarning
                    />
                    <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
                    suppressHydrationWarning
                >
                    Search
                </button>
            </div>

            {/* Angled Cut */}
            <div
                className="
                    absolute
                    bottom-[-25px]
                    right-[-20px]
                    w-[50%]
                    h-[60px]
                    bg-slate-50
                    skew-x-[-30deg]
                    origin-bottom-right
                    z-30
                "
            ></div>


        </section >
    );
}
