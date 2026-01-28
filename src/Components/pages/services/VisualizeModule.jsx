"use client";

import React from "react";

export default function VisualizeModule() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-scaled-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F3B77] text-center mb-12">
                    Visualize your module
                </h2>

                {/* Image Container */}
                <div className="w-full max-w-6xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/Visual_services.png"
                        alt="Visualize your module dashboard"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
