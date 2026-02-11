"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function ModernCTA() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-50 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A3E5C]/5 text-[#2A3E5C] text-sm font-semibold mb-6 sm:mb-8 border border-[#2A3E5C]/10"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Start your free 14-day trial</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#2A3E5C] mb-6 sm:mb-8 tracking-tight leading-tight"
                    >
                        Ready to transform <br /> your data strategy?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-2xl mx-auto px-2"
                    >
                        Join thousands of data-driven companies using our platform to make smarter, faster decisions every day.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-[#2A3E5C] text-white font-bold text-base sm:text-lg rounded-full hover:bg-[#1e2d42] transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                                Get Started Now <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link href="/pricing" className="w-full sm:w-auto">
                            <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white text-[#2A3E5C] font-bold text-base sm:text-lg rounded-full border-2 border-[#2A3E5C]/10 hover:border-[#2A3E5C] transition-all hover:bg-blue-50">
                                View Pricing
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
