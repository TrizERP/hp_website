"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, LineChart, PieChart, Activity, TrendingUp } from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";
import { WebGLShader } from "@/Components/ui/web-gl-shader";
import { LiquidButton } from '@/Components/ui/liquid-glass-button';
import { AnalyticsBentoGrid } from "@/Components/ui/analytics-bento-grid";
import { FeatureSplitSection } from "@/Components/ui/feature-split-section";
import { StatsTickerSection } from "@/Components/ui/stats-ticker-section";
import { ModernCTA } from "@/Components/ui/modern-cta";

const AnalyticsContent = () => {
    const data = PRODUCTS_DROPDOWN_DATA.find(
        (item) => item.category === "Analytics"
    );

    if (!data) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-slate-50 font-inter text-slate-900 overflow-hidden">

            {/* --- HERO SECTION --- */}

            {/* --- HERO SECTION --- */}
            <div className="relative flex w-full min-h-screen md:min-h-[130vh] flex-col items-center justify-center overflow-hidden bg-[#2A3E5C]">
                <WebGLShader className="absolute -top-[20%] md:-top-[50%] left-0 w-full h-[120%] md:h-[150%] block opacity-100" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
                    <div className="relative border border-white/10 bg-black/20 backdrop-blur-sm p-2 w-full mx-auto max-w-4xl rounded-2xl">
                        <main className="relative border border-white/10 bg-black/40 rounded-xl py-16 px-6 overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="mb-6 text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,6vw,6rem)] font-extrabold tracking-tighter leading-tight">
                                    Turn Data into <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Decisive Action</span>
                                </h1>
                                <p className="text-white/70 px-2 sm:px-6 text-center text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                                    {data.description}. Visualize performance, track engagement, and predict trends with our comprehensive analytics suite.
                                </p>

                                <div className="my-8 flex items-center justify-center gap-2">
                                    <span className="relative flex h-3 w-3 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                                    </span>
                                    <p className="text-sm text-cyan-400 font-medium">Live Demo Available</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                                    <Link href="/contact">
                                        <LiquidButton className="text-white border-white/20 hover:bg-white/10" size={'lg'}>Request Demo</LiquidButton>
                                    </Link>
                                    <Link href="#dashboards">
                                        <button suppressHydrationWarning className="px-6 py-3 sm:px-8 sm:py-4 text-white/80 font-bold hover:text-white transition-all flex items-center gap-2 group text-sm sm:text-base">
                                            See Dashboards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </main>
                    </div>
                </div>
            </div>

            {/* --- NEW SECTIONS --- */}
            <StatsTickerSection />
            <FeatureSplitSection />
            <AnalyticsBentoGrid />

            {/* --- PRODUCT SECTIONS --- */}
            <section id="dashboards" className="py-12 md:py-24 bg-white">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-[#2A3E5C] mb-4">Specialized Analytics Modules</h2>
                        <p className="text-slate-600 text-lg">tailored dashboards for every aspect of your institution</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {data.products.map((product, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="group relative overflow-hidden rounded-2xl bg-[#2A3E5C] text-white p-6 md:p-10 h-auto flex flex-col justify-between shadow-2xl gap-6"
                            >
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 ${index === 0 ? 'bg-cyan-500' : 'bg-blue-600'} rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none`}></div>

                                <div className="relative z-10">
                                    <div className="mb-4 p-3 bg-white/10 w-fit rounded-lg backdrop-blur-md">
                                        <BarChart3 className="w-6 h-6 text-cyan-300" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                                    <p className="text-slate-300 leading-relaxed max-w-sm">{product.description}</p>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <Link href={product.href || "#"} className="inline-flex items-center font-bold text-cyan-300 hover:text-white transition-colors">
                                        Access Dashboard <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ModernCTA />

        </div>
    );
};

export default AnalyticsContent;
