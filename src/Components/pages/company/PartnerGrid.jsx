"use client";

import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Sample data to match the visual variety in the screenshot
import { PARTNERS_DATA as PARTNERS } from "@/lib/data";

export default function PartnerGrid() {
    const [visibleCount, setVisibleCount] = useState(12);

    return (
        <section className="py-20 bg-slate-50">
            <div className="w-full px-4 md:px-20">
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {PARTNERS.slice(0, visibleCount).map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer border border-slate-100"
                        >
                            {/* Card Image */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <Image
                                    src={partner.image}
                                    alt={partner.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Category Tag */}
                                <span className="text-purple-600 font-bold text-xs uppercase mb-3 tracking-wide">
                                    {partner.category}
                                </span>

                                {/* Title Row */}
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-black leading-tight">
                                        {partner.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors duration-300" />
                                </div>

                                {/* Description */}
                                <p className="text-black text-sm leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-16">
                    <button
                        className="flex items-center gap-2 px-8 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold rounded-full transition-colors duration-300"
                        suppressHydrationWarning
                    >
                        <ChevronDown className="w-4 h-4" />
                        Load more
                    </button>
                </div>

            </div>
        </section>
    );
}
