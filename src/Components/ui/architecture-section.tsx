"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Activity } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "End-to-end encryption compliant with SOC2 and GDPR standards."
    },
    {
        icon: Zap,
        title: "Micro-Latency",
        description: "Process millions of requests with sub-millisecond response times."
    },
    {
        icon: Activity,
        title: "99.99% Uptime",
        description: "Redundant architecture ensuring your critical data never stops flowing."
    }
];

export default function ArchitectureSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-[#2A3E5C]">
            {/* Background Grid - Subtle for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white [-webkit-text-stroke:1px_black] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                        >
                            THE CORE OF <br />
                            <span className="text-white [-webkit-text-stroke:1px_#1e293b] drop-shadow-sm">
                                MODERN INFRASTRUCTURE
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-[#2A3E5C] max-w-xl leading-relaxed font-black uppercase tracking-tight opacity-90"
                        >
                            Built on a distributed cloud substrate, our platform handles the complexity of API orchestration.
                            Scalable, secure, and always on.
                        </motion.p>

                        <div className="grid gap-6 mt-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex items-start gap-6 p-6 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-black/5 hover:border-black/20 hover:bg-white/50 transition-all group shadow-sm hover:shadow-md"
                                >
                                    <div className="p-4 rounded-xl bg-[#2A3E5C] text-white group-hover:scale-110 transition-transform shadow-lg">
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white [-webkit-text-stroke:1px_#1e293b] tracking-tight uppercase mb-1 drop-shadow-sm">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-800 font-extrabold uppercase leading-snug opacity-80 group-hover:opacity-100 transition-opacity">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract Visualization */}
                    <div className="flex-1 w-full flex justify-center perspective-1000">
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                            {/* Spinning Rings */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 10 + i * 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatType: "loop"
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-black/10"
                                    style={{
                                        scale: 1 - i * 0.2,
                                        transformStyle: 'preserve-3d',
                                        rotateX: 60 + i * 10,
                                        rotateY: i * 20
                                    }}
                                >
                                    {/* Particles on ring */}
                                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#2A3E5C] rounded-full shadow-[0_0_15px_rgba(42,62,92,0.5)]" />
                                </motion.div>
                            ))}

                            {/* Center Core */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#2A3E5C] to-slate-800 rounded-full blur-md opacity-20"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#2A3E5C] rounded-full shadow-2xl z-20 flex items-center justify-center border-4 border-white">
                                <Server className="w-10 h-10 text-white" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -30, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-5 -right-5 p-5 bg-[#2A3E5C] text-white border-2 border-white rounded-2xl shadow-2xl z-30"
                            >
                                <div className="text-[10px] uppercase font-black tracking-widest mb-1 opacity-60">Status</div>
                                <div className="text-emerald-400 font-black text-lg flex items-center gap-2">
                                    <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                                    LIVE
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 30, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-5 -left-5 p-5 bg-white text-[#2A3E5C] border-2 border-[#2A3E5C] rounded-2xl shadow-2xl z-30"
                            >
                                <div className="text-[10px] uppercase font-black tracking-widest mb-1 opacity-60">Latency</div>
                                <div className="font-black text-xl">0.2ms</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
