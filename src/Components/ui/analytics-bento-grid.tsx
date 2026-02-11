"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Lock, Zap, Globe, MousePointer2, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    {
        title: "Real-time Analytics",
        description: "Track user behavior as it happens with sub-second latency data processing.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#2A3E5C]/5 to-[#2A3E5C]/10 border border-[#2A3E5C]/10 p-4 relative overflow-hidden flex-col gap-2 group-hover/bento:bg-[#2A3E5C]/5 transition-colors">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-1 items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] uppercase font-bold text-[#2A3E5C]/70 tracking-wider">Live</span>
                    </div>
                </div>
                <div className="flex gap-2 items-end h-full pb-2 px-2">
                    {[40, 70, 50, 90, 60, 80, 75, 55, 85, 95].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "20%" }}
                            whileInView={{ height: `${h}%` }}
                            animate={{
                                height: [`${h}%`, `${Math.max(20, h - 20)}%`, `${h}%`],
                            }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full bg-gradient-to-t from-[#2A3E5C] to-cyan-500 rounded-t-sm opacity-80"
                        />
                    ))}
                </div>
            </div>
        ),
        icon: <BarChart3 className="h-4 w-4 text-[#2A3E5C]" />,
        className: "md:col-span-2",
    },
    {
        title: "Global Infrastructure",
        description: "Distributed edge network ensures your data is always available and fast.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white border border-[#2A3E5C]/10 p-4 relative overflow-hidden items-center justify-center group-hover/bento:bg-slate-50 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#2A3E5C_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative z-10 w-24 h-24 border border-dashed border-[#2A3E5C]/30 rounded-full flex items-center justify-center"
                >
                    <Globe className="w-10 h-10 text-[#2A3E5C]/80" />
                    {/* Orbiting Dot */}
                    <motion.div
                        className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-500 rounded-full blur-[1px]"
                        style={{ x: "-50%", y: "-50%" }}
                    />
                </motion.div>
            </div>
        ),
        icon: <Globe className="h-4 w-4 text-[#2A3E5C]" />,
        className: "md:col-span-1",
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption and SOC2 compliance out of the box.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#2A3E5C] to-[#1e2d42] p-4 relative overflow-hidden flex items-center justify-center group/lock">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Scanning line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="z-10 relative bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20">
                    <Lock className="w-8 h-8 text-white group-hover/lock:text-cyan-300 transition-colors" />
                </div>

                <div className="absolute top-3 right-3 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
            </div>
        ),
        icon: <Lock className="h-4 w-4 text-[#2A3E5C]" />,
        className: "md:col-span-1",
    },
    {
        title: "Instant Insights",
        description: "AI-powered recommendations help you optimize conversion rates immediately.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white border border-[#2A3E5C]/10 p-4 relative overflow-hidden group-hover/bento:bg-slate-50 transition-colors">
                <div className="flex flex-col gap-2 relative z-10 w-full">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.5, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center gap-3 p-2 rounded-lg bg-white border border-[#2A3E5C]/5 shadow-sm w-full"
                        >
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-cyan-500' : 'bg-[#2A3E5C]'}`}></div>
                            <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="absolute -right-6 -bottom-6 text-[#2A3E5C]/5 rotate-12"
                    animate={{ scale: [1, 1.1, 1], rotate: [12, 0, 12] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <Zap className="w-32 h-32" />
                </motion.div>
            </div>
        ),
        icon: <Zap className="h-4 w-4 text-[#2A3E5C]" />,
        className: "md:col-span-2",
    },
];

export function AnalyticsBentoGrid() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#2A3E5C] mb-4">
                        Everything you need to grow
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
                        Our platform provides comprehensive tools to analyze, optimize, and scale your digital presence.
                    </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "row-span-1 rounded-2xl group/bento hover:shadow-2xl transition duration-300 shadow-sm border border-[#2A3E5C]/10 bg-white p-6 justify-between flex flex-col space-y-4",
                                // Switch col-spans to apply only at XL, keeping single col at MD/LG for better space
                                item.className?.replace('md:', 'xl:')
                            )}
                        >
                            {item.header}
                            <div className="group-hover/bento:translate-x-2 transition duration-200">
                                <div className="p-2 w-fit rounded-lg bg-[#2A3E5C]/10 mb-3 group-hover/bento:bg-[#2A3E5C] group-hover/bento:text-white transition-colors">
                                    {React.cloneElement(item.icon, { className: "h-5 w-5 group-hover/bento:text-white text-[#2A3E5C]" })}
                                </div>
                                <div className="font-bold text-[#2A3E5C] text-lg mb-2">
                                    {item.title}
                                </div>
                                <div className="font-normal text-slate-600 text-sm leading-relaxed group-hover/bento:text-slate-900">
                                    {item.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
