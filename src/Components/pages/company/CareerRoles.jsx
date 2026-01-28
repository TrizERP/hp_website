"use client";

import { motion } from 'framer-motion';
import { Monitor, Code2, Briefcase } from 'lucide-react';
import { CAREER_ROLES_DATA } from '@/lib/data';

export default function CareerRoles() {
    const iconMap = {
        code: <Code2 className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
        monitor: <Monitor className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
        briefcase: <Briefcase className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
    };

    return (
        <section className="py-20 bg-white relative z-20 mt-0 mb-40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
                    Explore Open Roles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {CAREER_ROLES_DATA.map((role, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-slate-100 p-8 rounded-2xl shadow-lg w-full max-w-[350px] flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Icon Container */}
                            <div className="mb-6 p-4 rounded-full bg-blue-50">
                                {iconMap[role.iconKey] || <Briefcase className="w-10 h-10 text-blue-500" strokeWidth={1.5} />}
                            </div>

                            <h3 className="text-xl font-bold text-blue-900 mb-4">
                                {role.title}
                            </h3>

                            <div className="text-black mb-8 space-y-1">
                                <p>Location: {role.location}</p>
                                <p>Experience: {role.experience}</p>
                            </div>

                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-full transition-colors duration-300"
                                suppressHydrationWarning
                            >
                                Apply Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
