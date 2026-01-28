"use client";

import React from 'react';
import { motion } from 'framer-motion';

const VALUES_DATA = [
    {
        title: "Career Growth & Development",
        description: "Gain hands-on experience with structured learning, mentorship, and leadership training in AI, EdTech, and SaaS."
    },
    {
        title: "Work That Matters",
        description: "Create impactful AI-driven education solutions that empower students, educators, and institutions globally."
    },
    {
        title: "Culture of Innovation",
        description: "Thrive in a collaborative, data-driven environment that values bold thinking and creative problem-solving."
    }
];

export default function CareerValues() {
    return (
        <section className="bg-white py-20 px-4 mt-0 lg:-mt-[280px] relative z-20">
            <div className="container mx-auto max-w-7xl">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What&apos;s in It for You?
                </motion.h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VALUES_DATA.map((value, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-50 border-2 border-blue-200 p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[300px] cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "#3b82f6"
                            }}
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-6">
                                {value.title}
                            </h3>
                            <p className="text-black leading-relaxed text-base">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
