"use client";

import React from "react";

export default function ServicesBenefits() {
    const benefits = [
        {
            id: '01',
            text: 'Stops Proxy Attendance & manual errors'
        },
        {
            id: '02',
            text: 'Enhances Security with verified identities'
        },
        {
            id: '03',
            text: 'Automates Payroll & Leave Tracking'
        },
        {
            id: '04',
            text: 'Delivers Accurate Reports in Real-Time'
        },
        {
            id: '05',
            text: 'Keeps Parents Informed Instantly'
        }
    ];

    return (
        <section
            className="w-full py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/assets/Benifits_services.png')" }}
        >
            <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay if text contrast needed */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16 lg:mb-24">
                    Benefits
                </h2>

                <div className="relative flex flex-col lg:flex-row lg:flex-nowrap justify-center gap-8 lg:gap-6 items-center lg:items-start">

                    {/* Dashed Connector Line Removed as per request */}

                    {benefits.map((benefit, index) => {
                        // Apply margin-top to even items to create zig-zag effect on desktop
                        const isEven = index % 2 !== 0;
                        const marginTopClass = isEven ? 'lg:mt-32' : '';

                        return (
                            <div
                                key={benefit.id}
                                className={`w-[280px] h-[250px] shrink-0 rounded-2xl p-8 flex flex-col justify-start bg-gradient-to-b from-[#6594DC] to-[#3770C6] shadow-lg text-white ${marginTopClass}`}
                            >
                                <span className="text-2xl font-bold opacity-90 mb-6 font-['Consolas']">
                                    {benefit.id}
                                </span>
                                <h3 className="text-2xl font-medium leading-tight">
                                    {benefit.text}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
