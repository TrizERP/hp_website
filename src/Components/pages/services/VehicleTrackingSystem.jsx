"use client";

import React from "react";

export default function VehicleTrackingSystem() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Centered Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B77] text-center mb-16">
                    Vehicle Tracking System (VTS)
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                            The Vehicle Tracking System (VTS) provides real-time GPS tracking, route optimization, and driver monitoring for safe and efficient student transportation.
                        </p>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-black">Key Features:</h3>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                                {/* Feature 1 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Live GPS Tracking & Geofencing –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        View real-time locations of school buses.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Driver Behavior Monitoring –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Tracks speed, sudden braking, and idling to ensure safety.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        SOS & Emergency Alerts –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Instant notifications for breakdowns or route deviations.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        RFID-Based Student Bus Attendance –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Auto-updates attendance when students board/exit buses.
                                    </p>
                                </div>

                                {/* Feature 5 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Parental Tracking App –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Allows parents to track bus location and estimated arrival time.
                                    </p>
                                </div>

                                {/* Feature 6 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Route Optimization & Fuel Monitoring –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Helps manage transportation efficiency and costs.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-[45%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/VTS_Services.png"
                            alt="Vehicle Tracking System Mobile Interface"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
