"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Trophy, Users, Lightbulb, Target, Layers, Smartphone, Globe, Layout } from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";
import ShaderBackground from "@/Components/ui/shader-background";

const LearningContent = () => {
    const data = PRODUCTS_DROPDOWN_DATA.find(
        (item) => item.category === "Learning Solutions"
    );

    if (!data) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-white font-inter overflow-hidden">

            {/* --- HERO SECTION WITH SHADER BACKGROUND --- */}
            <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 overflow-hidden min-h-screen flex items-center">
                {/* Shader Wave Background */}
                <ShaderBackground />

                {/* Floating Decorative Icons */}
                <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-10 lg:left-20 w-16 h-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-10 hidden md:flex"
                >
                    <BookOpen className="w-8 h-8 text-[#2A3E5C]" />
                </motion.div>

                <motion.div
                    animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-10 lg:right-24 w-14 h-14 bg-white/80 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-slate-100 z-10 hidden md:flex"
                >
                    <Trophy className="w-7 h-7 text-amber-500" />
                </motion.div>

                <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-40 left-16 lg:left-32 w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-slate-100 z-10 hidden lg:flex"
                >
                    <Target className="w-6 h-6 text-green-500" />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-48 right-16 lg:right-36 w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-slate-100 z-10 hidden lg:flex"
                >
                    <Lightbulb className="w-7 h-7 text-yellow-500" />
                </motion.div>

                {/* Content Overlay */}
                <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold text-sm mb-8 border border-white/20 backdrop-blur-md shadow-lg cursor-default"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Globe className="w-5 h-5 text-indigo-400" />
                            </motion.div>
                            <span>Future-Ready Workforce</span>
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight"
                        >
                            Upskill, Engage, & <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                            >Empower Teams</motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-md rounded-2xl px-8 py-5 shadow-lg border border-white/50"
                        >
                            {data.description}. Create a culture of upskilling with our engaging LMS, personalized paths, and mobile-first experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-5"
                        >
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    suppressHydrationWarning
                                    className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-900/40 flex items-center gap-2 group"
                                >
                                    Start Learning Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link href="#solutions">
                                <motion.button
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    suppressHydrationWarning
                                    className="px-10 py-4 bg-white/95 backdrop-blur-md text-slate-900 font-bold rounded-full border-2 border-slate-200 hover:border-slate-400 transition-all shadow-xl"
                                >
                                    Explore Platform
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Floating Feature Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-4 mt-14"
                        >
                            {[
                                { label: "AI-Powered", icon: "✨" },
                                { label: "Mobile Learning", icon: "📱" },
                                { label: "Gamification", icon: "🎮" },
                                { label: "Analytics", icon: "📊" }
                            ].map((badge, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="px-5 py-2.5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-sm font-semibold text-slate-800 shadow-lg cursor-default flex items-center gap-2 hover:shadow-xl transition-all"
                                >
                                    <span>{badge.icon}</span>
                                    {badge.label}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                        <span className="text-slate-500 text-sm font-medium">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-slate-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* --- LEARNING STATS --- */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Course Completion", value: "94%" },
                            { label: "Active Learners", value: "10k+" },
                            { label: "Skills Gained", value: "500+" },
                            { label: "ROI Increase", value: "3x" }
                        ].map((stat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-2">{stat.value}</div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INTRODUCTION SECTION --- */}
            <section className="py-24 bg-white">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-4 block">About Learning Solutions</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    Transform Your Organization into a Learning Powerhouse
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Scholar Clone's Learning Solutions is a comprehensive learning management ecosystem designed to cultivate knowledge, develop skills, and drive organizational excellence through continuous education.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    From interactive e-learning modules and personalized learning paths to mobile-first experiences and workforce planning, our platform empowers employees to learn anytime, anywhere, while giving leaders the insights they need to build a future-ready workforce.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["LMS", "E-Learning", "Mobile", "Workforce Planning"].map((tag) => (
                                        <span key={tag} className="px-4 py-2 bg-[#2A3E5C]/5 text-[#2A3E5C] rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Content - Feature Highlights */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-5"
                            >
                                {[
                                    { icon: Lightbulb, title: "Personalized Learning Paths", desc: "AI-curated courses and content tailored to each learner's role, skills, and career goals." },
                                    { icon: Smartphone, title: "Mobile-First Experience", desc: "Learn on-the-go with our responsive mobile app, supporting offline access and microlearning." },
                                    { icon: Target, title: "Skill Gap Analysis", desc: "Identify and close skill gaps across your organization with data-driven insights." },
                                    { icon: Trophy, title: "Gamification & Badges", desc: "Boost engagement with leaderboards, achievements, and certification programs." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2A3E5C]/20 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#2A3E5C] rounded-xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LEARNING JOURNEY TIMELINE --- */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-2 block"
                        >
                            Your Path to Success
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                        >
                            The Learning Journey
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 max-w-2xl mx-auto text-lg"
                        >
                            From onboarding to mastery, we guide every step of growth
                        </motion.p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2A3E5C] via-blue-400 to-[#2A3E5C] rounded-full -translate-x-1/2 hidden lg:block" />

                        {[
                            {
                                step: 1,
                                title: "Onboarding & Assessment",
                                description: "Personalized skill assessment to identify strengths and gaps. AI creates a custom learning path tailored to your role.",
                                icon: "🎯",
                                color: "from-blue-500 to-cyan-400",
                                align: "right"
                            },
                            {
                                step: 2,
                                title: "Interactive Learning",
                                description: "Engage with multimedia courses, simulations, and hands-on projects. Learn at your own pace with bite-sized modules.",
                                icon: "📚",
                                color: "from-purple-500 to-pink-400",
                                align: "left"
                            },
                            {
                                step: 3,
                                title: "Practice & Apply",
                                description: "Real-world scenarios and case studies to apply what you've learned. Get instant feedback and guidance.",
                                icon: "💡",
                                color: "from-amber-500 to-orange-400",
                                align: "right"
                            },
                            {
                                step: 4,
                                title: "Collaborate & Grow",
                                description: "Connect with peers, join study groups, and participate in mentorship programs for accelerated growth.",
                                icon: "🤝",
                                color: "from-green-500 to-emerald-400",
                                align: "left"
                            },
                            {
                                step: 5,
                                title: "Certify & Advance",
                                description: "Earn industry-recognized certifications and badges. Track your achievements and plan your next career milestone.",
                                icon: "🏆",
                                color: "from-[#2A3E5C] to-blue-500",
                                align: "right"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: item.align === "right" ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className={`relative flex items-center mb-12 lg:mb-16 ${item.align === "right"
                                    ? "lg:flex-row flex-col"
                                    : "lg:flex-row-reverse flex-col"
                                    }`}
                            >
                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className={`w-full lg:w-[45%] ${item.align === "right" ? "lg:pr-12" : "lg:pl-12"}`}
                                >
                                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-300 group relative overflow-hidden">
                                        {/* Gradient Accent */}
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />

                                        {/* Step Badge */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">
                                                Step {item.step}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2A3E5C] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Hover Arrow */}
                                        <motion.div
                                            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-5 h-5 text-[#2A3E5C]" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Center Circle - Desktop */}
                                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white z-10`}
                                    >
                                        {item.step}
                                    </motion.div>
                                </div>

                                {/* Spacer for alignment */}
                                <div className="hidden lg:block w-[45%]" />
                            </motion.div>
                        ))}

                        {/* Final Achievement Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex justify-center mt-8"
                        >
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(42, 62, 92, 0.3)",
                                        "0 0 0 20px rgba(42, 62, 92, 0)",
                                        "0 0 0 0 rgba(42, 62, 92, 0)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="bg-gradient-to-br from-[#2A3E5C] to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3"
                            >
                                <Trophy className="w-6 h-6 text-amber-400" />
                                Ready to Transform Your Team?
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* --- PRODUCTS SECTION --- */}
            <section id="features" className="py-24 bg-slate-50">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-2 block">Our Tools</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Learning Ecosystem</h2>
                        <div className="h-1 w-20 bg-[#2A3E5C] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {data.products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-indigo-500/20 transition-all duration-300 group flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-[#2A3E5C]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#2A3E5C] transition-all duration-300">
                                        <BookOpen className="w-7 h-7 text-[#2A3E5C] group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2A3E5C] transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-slate-500 leading-relaxed mb-8 flex-grow text-sm">
                                    {product.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link href={product.href || "#"} className="inline-flex items-center text-sm font-bold text-[#2A3E5C]">
                                        Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-white">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="relative bg-gradient-to-br from-[#2A3E5C] to-[#1a2a3f] rounded-[40px] p-12 md:p-20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-10 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hidden md:flex"
                        >
                            <GraduationCap className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hidden md:flex"
                        >
                            <Trophy className="w-7 h-7 text-white" />
                        </motion.div>

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Ready to upskill <br />your team?
                            </h2>
                            <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                                Empower your employees with the knowledge they need to succeed in a rapidly changing world.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <button suppressHydrationWarning className="px-10 py-5 bg-white text-[#2A3E5C] font-bold text-lg rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:scale-105">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button suppressHydrationWarning className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all hover:scale-105">
                                        Request Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LearningContent;
