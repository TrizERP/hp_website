"use client";

import React from "react";

export default function VehicleTrackingBenefits() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Centered Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B77] text-center mb-16">
                    Benefits
                </h2>

                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-[45%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/VehicleTrackingBenefits.png"
                            alt="Vehicle Tracking Benefits and Safety"
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">

                        {/* GPS Tracker Installation */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-black">
                                GPS Tracker Installation:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-[#333333] text-base leading-relaxed marker:text-black">
                                <li>
                                    A GPS device is installed on school buses to provide live location updates.
                                </li>
                                <li>
                                    Vehicles are monitored through the Scholar Clone ERP dashboard.
                                </li>
                            </ul>
                        </div>

                        {/* Student Entry/Exit Verification */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-bold text-black">
                                Student Entry/Exit Verification:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-[#333333] text-base leading-relaxed marker:text-black">
                                <li>
                                    If RFID is enabled, students scan their RFID cards while boarding and exiting the bus.
                                </li>
                                <li>
                                    Parents receive real-time SMS/app alerts confirming their child&apos;s travel details.
                                </li>
                            </ul>
                        </div>

                        {/* Additional Benefits List */}
                        <div className="flex flex-col gap-4 mt-4">
                            <p className="text-[#333333] text-base">
                                Ensures student safety & security during transportation
                            </p>
                            <p className="text-[#333333] text-base text-right pr-4">
                                Reduces wait time for parents through real-time tracking
                            </p>
                            <p className="text-[#333333] text-base">
                                Minimizes unauthorized stops & delays
                            </p>
                            <p className="text-[#333333] text-base text-right pr-4">
                                Optimizes routes & reduces fuel consumption
                            </p>
                            <p className="text-[#333333] text-base">
                                Enhances emergency response & quick alerts
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
