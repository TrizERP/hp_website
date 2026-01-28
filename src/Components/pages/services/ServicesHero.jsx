"use client";

import React from "react";

export default function ServicesHero() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F3B77] leading-[1.15]">
                            Complete Attendance & Tracking Solution for Schools & Higher Education Institutes
                        </h1>
                        <p className="text-lg lg:text-xl text-[#333333] leading-relaxed max-w-xl">
                            The Scholar Clone Attendance & Tracking System automates attendance and vehicle tracking with seamless ERP integration for security and accuracy.
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/HeroServices.png"
                            alt="Attendance and Tracking System Features"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
