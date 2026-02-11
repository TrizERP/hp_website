"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FeatureSplitSection() {
    return (
        <section className="py-16 md:py-24 bg-[#2A3E5C] overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-1 border border-white/10 backdrop-blur-sm shadow-2xl">
                            <div className="rounded-xl overflow-hidden bg-[#1e2d42] aspect-video relative">
                                {/* Abstract Chart UI */}
                                <div className="absolute inset-x-4 sm:inset-x-8 bottom-0 h-3/4 flex items-end justify-between gap-1 sm:gap-2">
                                    {[35, 55, 45, 70, 65, 85, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-sm opacity-80"
                                        />
                                    ))}
                                </div>
                                {/* Grid Lines */}
                                <div className="absolute inset-0 border-t border-white/5 top-1/4"></div>
                                <div className="absolute inset-0 border-t border-white/5 top-2/4"></div>
                                <div className="absolute inset-0 border-t border-white/5 top-3/4"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-white">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-[clamp(1.75rem,4vw,3rem)] font-bold mb-4 sm:mb-6 leading-tight"
                        >
                            Predictive Analytics <br />
                            <span className="text-cyan-400">Before it Happens</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed"
                        >
                            Stop reacting to past data. Our AI models analyze historical patterns to forecast future trends, allowing you to make proactive decisions that drive growth.
                        </motion.p>

                        <div className="space-y-3 sm:space-y-4">
                            {[
                                "95% Forecast Accuracy",
                                "Automated Anomaly Detection",
                                "Customizable Alert Thresholds"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                                    <span className="text-base sm:text-lg font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
