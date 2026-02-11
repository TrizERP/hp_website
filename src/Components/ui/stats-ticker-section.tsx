"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { label: "Data Points Processed", value: "10B+", suffix: "" },
    { label: "Global Enterprise Users", value: "50k", suffix: "+" },
    { label: "Uptime SLA Guarantee", value: "99.99", suffix: "%" },
    { label: "ROI Average", value: "350", suffix: "%" },
];

export function StatsTickerSection() {
    return (
        <section className="py-12 md:py-20 bg-white border-y border-slate-100">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-slate-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-2 sm:p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-[clamp(2rem,4vw,3.75rem)] font-extrabold text-[#2A3E5C] mb-1 sm:mb-2 leading-none"
                            >
                                {stat.value}<span className="text-cyan-600 text-[clamp(1.5rem,3vw,3rem)]">{stat.suffix}</span>
                            </motion.div>
                            <p className="text-slate-500 font-medium text-[clamp(0.75rem,2vw,0.875rem)] md:text-sm tracking-widest uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
