"use client";

import React from "react";

export default function VehicleTrackingSystem() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Centered Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B77] text-center mb-16">
                    Field Force & Fleet Tracking System
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                            Optimize your logistics and field operations with our advanced GPS Tracking System. Monitor vehicle fleets, track sales force in real-time, and ensure timely deliveries and client visits.
                        </p>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-black">Key Features:</h3>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                                {/* Feature 1 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Live GPS Fleet Tracking –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Real-time location and route history of vehicles.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Driver Performance Analysis –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Monitor speed, idling, and harsh braking.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Geofencing & Route Alerts –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Instant notifications for route deviations.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Field Force Attendance –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        GPS-based check-ins for sales & service staff.
                                    </p>
                                </div>

                                {/* Feature 5 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Trip & Delivery Management –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Assign tasks and track estimated arrival times (ETA).
                                    </p>
                                </div>

                                {/* Feature 6 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Fuel & Maintenance Reports –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Reduce operational costs with actionable insights.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Column:   Image */}
                    <div className="w- full lg:w-[45%]">
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
