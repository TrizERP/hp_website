"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Server, Database, Share2, Layers, Cpu } from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";


import SplineHero from "@/Components/ui/spline-hero.tsx";
import EcosystemSection from "@/Components/ui/ecosystem-section.tsx";
import ArchitectureSection from "@/Components/ui/architecture-section.tsx";

const IntegrationContent = () => {
    const data = PRODUCTS_DROPDOWN_DATA.find(
        (item) => item.category === "Integration"
    );

    if (!data) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-white font-inter overflow-hidden">

            {/* --- HERO SECTION --- */}
            <SplineHero
                title={
                    <>
                        Seamlessly <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Connected</span>.<br />Universally Compatible.
                    </>
                }
                description={`${data.description}. Break down silos with our robust API architecture and pre-built connectors for the tools you use every day.`}
                badgeText="Enterprise Integration"
                badgeLabel="Platform"
                ctaButtons={[
                    { text: "View API Docs", href: "/contact", primary: true },
                    { text: "See Connectors", href: "#integrations" }
                ]}
            />

            {/* --- INTEGRATION LOGO WALL --- */}
            <EcosystemSection />

            {/* --- FEATURES / PRODUCTS --- */}
            <section id="integrations" className="py-24 bg-white">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-indigo-50 rounded-3xl p-6 md:p-10 lg:p-16 border border-indigo-100"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">System Integration</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Our enterprise service bus architecture allows for real-time data synchronization between your ERP, LMS, and HRIS systems. Never enter data twice.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Real-time Sync", "Secure Encryption", "Error Logging", "Custom Mapping"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/products/integration/system-integration">
                                <button suppressHydrationWarning className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                    Learn more about System Integration <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-purple-50 rounded-3xl p-6 md:p-10 lg:p-16 border border-purple-100"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">HRIT Solutions</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Specialized infrastructure support for Human Resources IT. We manage the technical complexity so your HR team can focus on people.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Infrastructure Audit", "Migration Services", "Security Hardening", "24/7 Monitoring"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/products/integration/hrit-solutions">
                                <button suppressHydrationWarning className="text-purple-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                    Explore HRIT Solutions <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- ARCHITECTURE SECTION --- */}
            <ArchitectureSection />

            {/* --- CTA --- */}
            <section className="py-24 bg-[#2A3E5C] text-white text-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Connect Everything.</h2>
                    <p className="text-indigo-200 text-xl max-w-2xl mx-auto mb-10">
                        Ready to unify your digital landscape? Let's talk architecture.
                    </p>
                    <Link href="/contact">
                        <button suppressHydrationWarning className="px-12 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-all shadow-xl">
                            Contact Architects
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default IntegrationContent;
