"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * ProductPageTemplate
 * 
 * A re-usable template for all product category pages.
 * 
 * @param {string} title - Main title of the product category.
 * @param {string} description - Description text for the hero section.
 * @param {string} iconName - Name of the icon (optional, for hero).
 * @param {Array} products - List of sub-products to display.
 * @param {Array} features - List of features/benefits (optional).
 */
const ProductPageTemplate = ({
    title,
    description,
    products = [],
    features = [],
}) => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden font-inter">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">

                {/* Abstract 3D Background Elements (CSS only for performance) */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none select-none">
                    <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-40 right-40 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 right-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D0D2B] mb-6 tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                                    Get Started
                                </button>
                            </Link>
                            <Link href="#products-grid">
                                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all shadow-sm">
                                    Explore Solutions
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SUB-PRODUCTS GRID --- */}
            <section id="products-grid" className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Suite of Solutions</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Detailed, modular tools designed to fit your specific needs.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:border-blue-100"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    {/* Placeholder Icon */}
                                    <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                <p className="text-gray-500 mb-6 leading-relaxed">{product.description}</p>
                                <Link href={product.href || "#"} className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- WHY CHOOSE US / IMPACT SECTION (New) --- */}
            <section className="py-24 bg-[#0D0D2B] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Why Leading Organizations Choose {title}
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive measurable results. Experience seamless integration, actionable insights, and scalable architecture.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Enterprise-grade Security & Compliance",
                                    "AI-Powered Insights & Automation",
                                    "Seamless Integration Ecosystem",
                                    "24/7 Dedicated Support",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0" />
                                        <span className="text-lg text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link href="/about">
                                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                                        Discover Our Mission
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 3D-like generic visuals */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 p-8">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <h4 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">98%</h4>
                                        <p className="text-gray-400">Client Satisfaction</p>
                                    </div>
                                </div>
                                {/* Floating orbital elements */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                        Join thousands of forward-thinking organizations using our {title} to drive growth and efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl">
                                Schedule a Demo
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPageTemplate;
