"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Target, Zap, Sparkles, CheckCircle2, Trophy, Heart, Rocket, Search, Bell, Settings, BarChart3, Calendar, FileText, Star, TrendingUp, Award, Briefcase } from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";
import { ContainerScroll } from "@/Components/ui/container-scroll-animation";

const TalentContent = () => {
    const data = PRODUCTS_DROPDOWN_DATA.find(
        (item) => item.category === "Talent Solutions"
    );

    if (!data) return <div>Category not found</div>;

    return (
        <div className="min-h-screen bg-white font-inter overflow-hidden">

            {/* --- HERO SECTION WITH SCROLL ANIMATION --- */}
            <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Grid pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #2A3E5C10 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                    {/* Floating circles */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-[#2A3E5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <ContainerScroll
                    titleComponent={
                        <>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A3E5C]/10 text-[#2A3E5C] font-semibold text-sm mb-6 border border-[#2A3E5C]/20">
                                <Sparkles className="w-4 h-4" />
                                <span>AI-Powered Talent Platform</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-bold text-[#2A3E5C] leading-tight tracking-tight">
                                Unleash Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A3E5C] to-blue-500">
                                    Workforce Potential
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                                {data.description}. Connect talent acquisition, performance management, and career development into one seamless ecosystem.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <Link href="/contact">
                                    <button suppressHydrationWarning className="px-8 py-4 bg-[#2A3E5C] text-white font-bold rounded-full hover:bg-[#1e2d42] transition-all shadow-lg hover:shadow-[#2A3E5C]/30 transform hover:-translate-y-1">
                                        Get Started Free
                                    </button>
                                </Link>
                                <Link href="#solutions">
                                    <button suppressHydrationWarning className="px-8 py-4 bg-white text-[#2A3E5C] font-bold rounded-full border-2 border-[#2A3E5C]/20 hover:border-[#2A3E5C]/50 transition-all transform hover:-translate-y-1">
                                        View Solutions
                                    </button>
                                </Link>
                            </div>
                        </>
                    }
                >
                    {/* Real HR Platform Interface */}
                    <div className="h-full w-full bg-white rounded-xl flex flex-col overflow-hidden">
                        {/* Top Navigation Bar */}
                        <div className="bg-[#2A3E5C] px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white font-bold text-lg hidden md:block">Scholar Clone HR</span>
                                </div>
                                <nav className="hidden lg:flex items-center gap-6 ml-8">
                                    <span className="text-white/80 hover:text-white cursor-pointer text-sm font-medium">Dashboard</span>
                                    <span className="text-white border-b-2 border-white cursor-pointer text-sm font-medium">Talent Pool</span>
                                    <span className="text-white/80 hover:text-white cursor-pointer text-sm font-medium">Recruitment</span>
                                    <span className="text-white/80 hover:text-white cursor-pointer text-sm font-medium">Performance</span>
                                    <span className="text-white/80 hover:text-white cursor-pointer text-sm font-medium">Reports</span>
                                </nav>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20">
                                    <Search className="w-4 h-4 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 relative">
                                    <Bell className="w-4 h-4 text-white" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                                </div>
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    SK
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 bg-slate-50 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                                {/* Left Column - Stats & Quick Actions */}
                                <div className="space-y-4">
                                    {/* Welcome Card */}
                                    <div className="bg-gradient-to-br from-[#2A3E5C] to-blue-600 rounded-xl p-5 text-white">
                                        <h3 className="font-bold text-lg mb-1">Welcome back, Sarah!</h3>
                                        <p className="text-blue-100 text-sm mb-4">You have 12 pending reviews</p>
                                        <div className="flex gap-2">
                                            <button suppressHydrationWarning className="px-3 py-1.5 bg-white/20 rounded-lg text-xs font-medium hover:bg-white/30">View Tasks</button>
                                            <button suppressHydrationWarning className="px-3 py-1.5 bg-white text-[#2A3E5C] rounded-lg text-xs font-medium">Quick Hire</button>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white rounded-xl p-4 border border-slate-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-slate-900">89%</div>
                                            <div className="text-xs text-slate-500">Retention Rate</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 border border-slate-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <Users className="w-4 h-4 text-blue-600" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-slate-900">1,284</div>
                                            <div className="text-xs text-slate-500">Total Employees</div>
                                        </div>
                                    </div>

                                    {/* Upcoming Interviews */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-slate-900 text-sm">Today's Interviews</span>
                                            <Calendar className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { name: "Alex Johnson", role: "Sr. Developer", time: "10:00 AM" },
                                                { name: "Maria Garcia", role: "UI Designer", time: "2:30 PM" },
                                            ].map((interview, i) => (
                                                <div key={i} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                                                    <div className="w-8 h-8 bg-[#2A3E5C] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                        {interview.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-slate-900">{interview.name}</div>
                                                        <div className="text-xs text-slate-500">{interview.role}</div>
                                                    </div>
                                                    <div className="text-xs font-medium text-[#2A3E5C]">{interview.time}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column - Talent Pool */}
                                <div className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-slate-900">Active Talent Pool</h3>
                                        <button suppressHydrationWarning className="text-xs text-[#2A3E5C] font-medium hover:underline">View All</button>
                                    </div>
                                    <div className="space-y-3 flex-1 overflow-hidden">
                                        {[
                                            { name: "James Wilson", role: "Full Stack Developer", match: 95, skills: ["React", "Node.js", "AWS"], status: "Interview" },
                                            { name: "Emily Chen", role: "Product Manager", match: 92, skills: ["Agile", "Jira", "Strategy"], status: "Shortlisted" },
                                            { name: "Michael Brown", role: "Data Scientist", match: 88, skills: ["Python", "ML", "SQL"], status: "New" },
                                            { name: "Sarah Davis", role: "UX Researcher", match: 85, skills: ["Figma", "UserTesting"], status: "Screening" },
                                        ].map((candidate, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                                                <div className="w-10 h-10 bg-gradient-to-br from-[#2A3E5C] to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                                    {candidate.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-semibold text-slate-900 truncate">{candidate.name}</span>
                                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${candidate.status === 'Interview' ? 'bg-green-100 text-green-700' :
                                                            candidate.status === 'Shortlisted' ? 'bg-blue-100 text-blue-700' :
                                                                candidate.status === 'New' ? 'bg-purple-100 text-purple-700' :
                                                                    'bg-yellow-100 text-yellow-700'
                                                            }`}>{candidate.status}</span>
                                                    </div>
                                                    <div className="text-xs text-slate-500">{candidate.role}</div>
                                                    <div className="flex gap-1 mt-1">
                                                        {candidate.skills.slice(0, 2).map((skill, j) => (
                                                            <span key={j} className="text-[10px] px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-lg font-bold text-[#2A3E5C]">{candidate.match}%</div>
                                                    <div className="text-[10px] text-slate-400">Match</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column - Performance & Goals */}
                                <div className="space-y-4">
                                    {/* Team Performance */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-bold text-slate-900 text-sm">Team Performance</span>
                                            <BarChart3 className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="flex items-end gap-1 h-24">
                                            {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                                <div key={i} className="flex-1 bg-gradient-to-t from-[#2A3E5C] to-blue-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between mt-2 text-[10px] text-slate-400">
                                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                        </div>
                                    </div>

                                    {/* Top Performers */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-slate-900 text-sm">Top Performers</span>
                                            <Award className="w-4 h-4 text-yellow-500" />
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Lisa Wang", score: 98 },
                                                { name: "Tom Hardy", score: 95 },
                                                { name: "Anna Lee", score: 93 },
                                            ].map((performer, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 bg-[#2A3E5C] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span className="flex-1 text-sm text-slate-700">{performer.name}</span>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                                        <span className="text-sm font-bold text-slate-900">{performer.score}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Open Positions */}
                                    <div className="bg-white rounded-xl p-4 border border-slate-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-slate-900 text-sm">Open Positions</span>
                                            <Briefcase className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { role: "Senior Developer", applicants: 24 },
                                                { role: "Product Designer", applicants: 18 },
                                                { role: "Data Analyst", applicants: 12 },
                                            ].map((position, i) => (
                                                <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                                                    <span className="text-sm text-slate-700">{position.role}</span>
                                                    <span className="text-xs font-medium text-[#2A3E5C]">{position.applicants} applicants</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </ContainerScroll>
            </section>

            {/* --- STATS BANNER --- */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            { value: "500+", label: "Organizations" },
                            { value: "1M+", label: "Employees Managed" },
                            { value: "45%", label: "Faster Hiring" },
                            { value: "98%", label: "Retention Rate" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
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
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full"
                            >
                                <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-4 block">About Talent Solutions</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    The Complete Platform for Modern Workforce Management
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Scholar Clone's Talent Solutions is an end-to-end human capital management platform designed to transform how organizations attract, develop, and retain their most valuable asset — their people.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    From AI-powered recruitment that identifies the best candidates faster, to comprehensive performance management that keeps your teams aligned with business goals, our platform provides the tools you need to build a thriving, engaged workforce. Whether you're a growing startup or a global enterprise, Talent Solutions scales with your ambitions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {["AI Recruitment", "Performance Tracking", "Skill Mapping", "Career Paths"].map((tag) => (
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
                                className="space-y-6 w-full"
                            >
                                {[
                                    {
                                        icon: Users,
                                        title: "Unified Talent Pool",
                                        desc: "Centralize all candidate and employee data in one intelligent platform with advanced search and filtering."
                                    },
                                    {
                                        icon: Zap,
                                        title: "Smart Automation",
                                        desc: "Automate repetitive HR tasks like resume screening, interview scheduling, and onboarding workflows."
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Real-Time Insights",
                                        desc: "Track key metrics and generate actionable reports to make data-driven decisions about your workforce."
                                    },
                                    {
                                        icon: Target,
                                        title: "Goal Alignment",
                                        desc: "Connect individual performance to company objectives with transparent OKR and KPI tracking."
                                    }
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

            {/* --- WHY CHOOSE US (Expanded Content) --- */}
            <section className="py-24 bg-slate-50 relative">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-4 block">Why Scholar Clone</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Reimagine Your Talent Strategy</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Move beyond spreadsheets and disconnected systems. Our comprehensive suite covers every stage of the employee lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "AI-Powered Intelligence", desc: "Automate screening, skill matching, and career pathing with our advanced AI engine.", color: "from-blue-500 to-cyan-500" },
                            { icon: Target, title: "Precision Hiring", desc: "Reduce time-to-hire by 40% while improving candidate quality through data-backed insights.", color: "from-[#2A3E5C] to-blue-600" },
                            { icon: Heart, title: "Employee-Centric", desc: "Create meaningful growth journeys that keep your top talent engaged and motivated.", color: "from-pink-500 to-rose-500" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${item.color} shadow-lg`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRODUCTS GRID --- */}
            <section id="solutions" className="py-24 bg-white">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#2A3E5C] font-bold tracking-widest uppercase text-sm mb-2 block">Our Tools</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Complete Talent Suite</h2>
                        <div className="h-1 w-20 bg-[#2A3E5C] mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {data.products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#2A3E5C]/20 transition-all duration-300 group flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-[#2A3E5C]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#2A3E5C] transition-all duration-300">
                                        <Users className="w-7 h-7 text-[#2A3E5C] group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2A3E5C] transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-slate-500 leading-relaxed mb-8 flex-grow text-sm">
                                    {product.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link href={product.href || "#"} className="inline-flex items-center text-sm font-bold text-[#2A3E5C] group-hover:gap-2 transition-all">
                                        Explore Solution <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIAL / TRUST SECTION (NEW) --- */}
            <section className="py-24 bg-slate-50">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-8 border border-yellow-200">
                            <Trophy className="w-4 h-4" />
                            <span>Trusted by Industry Leaders</span>
                        </div>

                        <blockquote className="text-2xl md:text-4xl text-slate-800 font-medium leading-relaxed mb-8">
                            "Scholar Clone transformed how we approach talent management. Our hiring velocity increased by 45% and employee engagement scores are at an all-time high."
                        </blockquote>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-14 h-14 bg-[#2A3E5C] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                SK
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900">Sarah Kim</div>
                                <div className="text-slate-500 text-sm">Chief People Officer, TechCorp Inc.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BIG CTA (Redesigned) --- */}
            <section className="py-24 bg-white relative overflow-hidden">
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
                            <Rocket className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hidden md:flex"
                        >
                            <Users className="w-7 h-7 text-white" />
                        </motion.div>

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Ready to build your <br />dream team?
                            </h2>
                            <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                                Join 500+ forward-thinking organizations transforming their workforce and culture with Scholar Clone.
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                                <Link href="/contact">
                                    <button suppressHydrationWarning className="px-10 py-5 bg-white text-[#2A3E5C] font-bold text-lg rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Schedule a Demo
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button suppressHydrationWarning className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all hover:scale-105">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 flex items-center justify-center gap-8 text-white/60">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="text-sm">14-day free trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="text-sm">No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2 hidden md:flex">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="text-sm">Cancel anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TalentContent;
