"use client";

import React from "react";

export default function AttendanceSystem() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Centered Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B77] text-center mb-16">
                    Biometric & RFID-Based Attendance System
                </h2>

                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-[45%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/attendancesystem_services.png"
                            alt="Biometric and RFID Attendance Devices"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-8">

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                            Eliminates manual tracking with fingerprint scanning, facial recognition, and RFID smart cards. Ensures real-time updates, prevents proxy attendance, and integrates with Scholar Clone ERP.
                        </p>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-black">Key Features:</h3>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                                {/* Feature 1 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Biometric Authentication –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Fingerprint, Facial Recognition, Iris Scan
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        RFID Smart Cards & Readers –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Contactless attendance at entry/exit points
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        ERP & Payroll Integration –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Auto-syncs with attendance, payroll & leaves
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Instant Notifications –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        SMS/App alerts for student/staff check
                                    </p>
                                </div>

                                {/* Feature 5 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Real-Time Reports & Analytics –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Insights on attendance trends
                                    </p>
                                </div>

                                {/* Feature 6 */}
                                <div>
                                    <h4 className="font-bold text-black text-lg mb-1">
                                        Cloud & On-Premise Storage –
                                    </h4>
                                    <p className="text-[#444444] text-base leading-snug">
                                        Secure access to records
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
