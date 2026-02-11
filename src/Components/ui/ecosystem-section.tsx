"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiMicrosoftazure, SiAmazon, SiOracle, SiSap } from "react-icons/si";

const ecosystems = [
    {
        name: "Azure",
        icon: SiMicrosoftazure,
        color: "#0078D4",
        description: "Enterprise Cloud"
    },
    {
        name: "AWS",
        icon: SiAmazon,
        color: "#FF9900",
        description: "Cloud Services"
    },
    {
        name: "Oracle",
        icon: SiOracle,
        color: "#C74634",
        description: "Database Systems"
    },
    {
        name: "SAP",
        icon: SiSap,
        color: "#0FAAFF",
        description: "ERP Solutions"
    },
    {
        name: "Workday",
        icon: (props: any) => (
            <span {...props} className="font-extrabold text-3xl flex items-center justify-center">WD</span>
        ),
        color: "#CF3C29",
        description: "Finance & HR"
    }
];

export default function EcosystemSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6"
                    >
                        Works with your favorite ecosystems
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Native integrations with the world's leading enterprise platforms.
                        Connect seamlessly without custom code.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                    {ecosystems.map((system, index) => (
                        <motion.div
                            key={system.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Hover Gradient Border Effect */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    boxShadow: `inset 0 0 0 2px ${system.color}20`
                                }}
                            />

                            <div
                                className="mb-6 p-4 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors duration-300"
                                style={{ color: system.color }}
                            >
                                {/* Render Icon */}
                                <system.icon className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-2">{system.name}</h3>
                            <p className="text-sm font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                                {system.description}
                            </p>

                            {/* Connector Line Visual */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-0 bg-gradient-to-t from-slate-200 to-transparent group-hover:h-8 transition-all duration-500 delay-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
