"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PieChart, Wallet, CalendarCheck, FileText, CheckCircle2, Building2, DollarSign, Users, Shield, TrendingUp, Calculator, Clock } from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";

// Dynamic import with SSR disabled - required for Three.js/WebGL components
const ShaderAnimation = dynamic(
    () => import("@/Components/ui/shader-animation").then(mod => mod.ShaderAnimation),
    { ssr: false, loading: () => <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" /> }
);

const FinanceContent = () => {
    const data = PRODUCTS_DROPDOWN_DATA.find(
        (item) => item.category === "Finance & HR"
    );

    if (!data) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-white font-inter text-slate-900 overflow-hidden">

            {/* --- HERO SECTION WITH SHADER ANIMATION --- */}
            <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 overflow-hidden min-h-screen flex items-center">
                {/* Shader Animation Background */}
                <ShaderAnimation />


                {/* Floating Decorative Icons */}
                <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-10 lg:left-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/20 z-10 hidden md:flex"
                >
                    <DollarSign className="w-8 h-8 text-cyan-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-10 lg:right-24 w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-white/20 z-10 hidden md:flex"
                >
                    <Shield className="w-7 h-7 text-green-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-40 left-16 lg:left-32 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-white/20 z-10 hidden lg:flex"
                >
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-48 right-16 lg:right-36 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/20 z-10 hidden lg:flex"
                >
                    <Calculator className="w-7 h-7 text-amber-400" />
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
                                <Building2 className="w-5 h-5 text-cyan-400" />
                            </motion.div>
                            <span>Enterprise Grade Solutions</span>
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight"
                        >
                            Accuracy, Compliance, & <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                            >Peace of Mind</motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed bg-white/5 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/10"
                        >
                            {data.description}. Our integrated Finance & HR suite ensures your operations are compliant, automated, and error-free.
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
                                    className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl flex items-center gap-2 group"
                                >
                                    Request Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link href="#features">
                                <motion.button
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    suppressHydrationWarning
                                    className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all"
                                >
                                    Explore Features
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
                                { label: "Payroll", icon: "💰" },
                                { label: "Compliance", icon: "✅" },
                                { label: "HR Management", icon: "👥" },
                                { label: "Reporting", icon: "📊" }
                            ].map((badge, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white shadow-lg cursor-default flex items-center gap-2 hover:bg-white/20 transition-all"
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

            {/* --- STATS SECTION --- */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Processing Accuracy", value: "99.9%" },
                            { label: "Time Saved", value: "40hrs/mo" },
                            { label: "Compliance Rate", value: "100%" },
                            { label: "Cost Reduction", value: "35%" }
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

            {/* --- INTERACTIVE FINANCIAL DASHBOARD PREVIEW --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Animated Background Patterns */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#2A3E5C] rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-2 block"
                        >
                            Live Dashboard Preview
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                        >
                            Your Financial Command Center
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 max-w-2xl mx-auto"
                        >
                            Real-time insights at your fingertips. Monitor, analyze, and act on your financial data instantly.
                        </motion.p>
                    </div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-6xl mx-auto"
                    >
                        {/* Main Dashboard Container */}
                        <div className="bg-slate-900 backdrop-blur-xl rounded-3xl border border-slate-700 p-6 lg:p-8 shadow-2xl">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                                        <PieChart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Financial Overview</h3>
                                        <p className="text-slate-400 text-sm">Last updated: Just now</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-green-400 text-sm font-medium">Live</span>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                                {/* Revenue Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30 cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-300 font-medium">Total Revenue</span>
                                        <motion.div
                                            animate={{ rotate: [0, 10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center"
                                        >
                                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="text-3xl lg:text-4xl font-bold text-white mb-2"
                                    >
                                        $2.4M
                                    </motion.div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-emerald-400 text-sm font-medium">+12.5%</span>
                                        <span className="text-slate-400 text-sm">vs last month</span>
                                    </div>
                                    {/* Mini Chart */}
                                    <div className="mt-4 flex items-end gap-1 h-12">
                                        {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + i * 0.05 }}
                                                className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-sm group-hover:from-emerald-400 group-hover:to-emerald-200 transition-colors"
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Expenses Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-2xl p-6 border border-orange-500/30 cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-300 font-medium">Total Expenses</span>
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center"
                                        >
                                            <Wallet className="w-5 h-5 text-orange-400" />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="text-3xl lg:text-4xl font-bold text-white mb-2"
                                    >
                                        $892K
                                    </motion.div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-orange-400 text-sm font-medium">-8.3%</span>
                                        <span className="text-slate-400 text-sm">vs last month</span>
                                    </div>
                                    {/* Donut Chart Mockup */}
                                    <div className="mt-4 flex justify-center">
                                        <div className="relative w-16 h-16">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                                                <motion.circle
                                                    cx="32" cy="32" r="28"
                                                    stroke="url(#orangeGradient)"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    initial={{ strokeDasharray: "0 176" }}
                                                    whileInView={{ strokeDasharray: "132 176" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                />
                                                <defs>
                                                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#f97316" />
                                                        <stop offset="100%" stopColor="#fbbf24" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">75%</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Payroll Status Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30 cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-300 font-medium">Payroll Status</span>
                                        <motion.div
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center"
                                        >
                                            <Users className="w-5 h-5 text-blue-400" />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="text-3xl lg:text-4xl font-bold text-white mb-2"
                                    >
                                        1,247
                                    </motion.div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-400 text-sm font-medium">Employees Processed</span>
                                    </div>
                                    {/* Progress Bars */}
                                    <div className="mt-4 space-y-2">
                                        {[
                                            { label: "Salaried", value: 85, color: "from-blue-500 to-cyan-400" },
                                            { label: "Hourly", value: 65, color: "from-purple-500 to-pink-400" }
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-1">
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-slate-400">{item.label}</span>
                                                    <span className="text-slate-300">{item.value}%</span>
                                                </div>
                                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.value}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                                                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Section - Activity Feed & Quick Actions */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Recent Activity */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-white/5 rounded-2xl p-5 border border-white/10"
                                >
                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-cyan-400" />
                                        Recent Activity
                                    </h4>
                                    <div className="space-y-3">
                                        {[
                                            { action: "Payroll processed", time: "2 mins ago", icon: "✅", color: "text-green-400" },
                                            { action: "New expense submitted", time: "15 mins ago", icon: "📝", color: "text-blue-400" },
                                            { action: "Tax report generated", time: "1 hour ago", icon: "📊", color: "text-purple-400" },
                                            { action: "Budget approved", time: "3 hours ago", icon: "💰", color: "text-amber-400" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7 + i * 0.1 }}
                                                className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                <div className="flex-1">
                                                    <span className="text-slate-200 text-sm">{item.action}</span>
                                                </div>
                                                <span className={`text-xs ${item.color}`}>{item.time}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Quick Actions */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-white/5 rounded-2xl p-5 border border-white/10"
                                >
                                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                                        Quick Actions
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: "Run Payroll", icon: DollarSign, color: "from-green-500 to-emerald-600" },
                                            { label: "Add Expense", icon: FileText, color: "from-blue-500 to-cyan-600" },
                                            { label: "Generate Report", icon: PieChart, color: "from-purple-500 to-pink-600" },
                                            { label: "View Compliance", icon: Shield, color: "from-amber-500 to-orange-600" }
                                        ].map((action, i) => (
                                            <motion.button
                                                key={i}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                suppressHydrationWarning
                                                className={`bg-gradient-to-br ${action.color} p-4 rounded-xl flex flex-col items-center gap-2 text-white font-medium text-sm shadow-lg hover:shadow-xl transition-shadow`}
                                            >
                                                <action.icon className="w-6 h-6" />
                                                {action.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl hidden lg:flex"
                        >
                            <CheckCircle2 className="w-12 h-12 text-white" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-2xl hidden lg:flex"
                        >
                            <TrendingUp className="w-10 h-10 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- FEATURES GRID (Bento Style) --- */}
            <section id="features" className="py-24 bg-slate-50">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-2 block">Our Platform</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Unified Operations Platform</h2>
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
                                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#2A3E5C]/20 transition-all duration-300 group flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-[#2A3E5C]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#2A3E5C] transition-all duration-300">
                                        {index === 0 ? <Wallet className="w-7 h-7 text-[#2A3E5C] group-hover:text-white transition-colors" /> :
                                            index === 1 ? <CalendarCheck className="w-7 h-7 text-[#2A3E5C] group-hover:text-white transition-colors" /> :
                                                <FileText className="w-7 h-7 text-[#2A3E5C] group-hover:text-white transition-colors" />}
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
                                        Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
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
                                <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    Streamline Your Financial & HR Operations
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Our comprehensive platform integrates payroll, HR management, compliance tracking, and financial reporting into one seamless solution. Reduce manual work, eliminate errors, and ensure regulatory compliance.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Automated", "Secure", "Compliant", "Scalable"].map((tag) => (
                                        <span key={tag} className="px-4 py-2 bg-[#2A3E5C]/5 text-[#2A3E5C] rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Content - Feature Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-5"
                            >
                                {[
                                    { icon: Clock, title: "Save 40+ Hours Monthly", desc: "Automate payroll, leave management, and HR workflows to focus on what matters." },
                                    { icon: Shield, title: "100% Compliance", desc: "Stay compliant with automatic updates to tax laws and labor regulations." },
                                    { icon: TrendingUp, title: "Real-time Analytics", desc: "Get instant insights into your financial health and workforce metrics." },
                                    { icon: Users, title: "Employee Self-Service", desc: "Empower employees with self-service portals for leave, payslips, and more." }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 5 }}
                                        className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2A3E5C]/20 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-[#2A3E5C] rounded-xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-slate-50">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="relative bg-gradient-to-br from-[#2A3E5C] to-[#1a2a3f] rounded-[40px] p-8 md:p-10 lg:p-20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-10 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hidden md:flex"
                        >
                            <DollarSign className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hidden md:flex"
                        >
                            <CheckCircle2 className="w-7 h-7 text-green-400" />
                        </motion.div>

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Secure. Scalable. <br />Simple.
                            </h2>
                            <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                                Stop worrying about compliance and manual errors. Switch to the platform that handles it all for you.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        suppressHydrationWarning
                                        className="px-10 py-5 bg-white text-[#2A3E5C] font-bold text-lg rounded-full hover:bg-blue-50 transition-all shadow-2xl"
                                    >
                                        Get Started Today
                                    </motion.button>
                                </Link>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        suppressHydrationWarning
                                        className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
                                    >
                                        Talk to Sales
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinanceContent;
