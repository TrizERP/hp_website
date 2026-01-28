"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Handshake, ChevronRight, Globe, Users, ArrowUpRight, GraduationCap } from "lucide-react";

// Company Menu Items (Sidebar)
const COMPANY_CATEGORIES = [
    {
        id: "careers",
        name: "Careers",
        icon: Briefcase,
        description: "Join our mission to transform education.",
        href: "/company/careers",
    },
    {
        id: "partners",
        name: "Partners",
        icon: Handshake,
        description: "Collaborate with us for global impact.",
        href: "/company/partners",
    },
];

export default function CompanyDropdown({
    isOpen,
    onClose,
    onMouseEnter,
    onMouseLeave,
}) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    if (!isOpen) return null;

    const activeCategory = COMPANY_CATEGORIES[activeCategoryIndex];

    return (
        <div
            className="absolute right-0 top-full z-50 pt-2"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`
                    relative z-50 rounded-2xl overflow-hidden flex h-[450px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top-right
                    backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5
                    w-[900px]
                `}
            >
                {/* LEFT SIDEBAR: Categories */}
                <div className="flex flex-col py-6 relative z-10 transition-all duration-500 bg-slate-50/50 w-[300px] border-r border-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-100/50 pointer-events-none" />

                    <h3 className="relative px-6 text-xs font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-5 pl-8">
                        Company
                    </h3>

                    <div className="flex flex-col gap-1 px-3 relative">
                        {COMPANY_CATEGORIES.map((category, idx) => (
                            <Link
                                key={idx}
                                href={category.href}
                                onClick={onClose}
                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                className={`
                                    relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group overflow-hidden
                                    ${activeCategoryIndex === idx
                                        ? 'bg-gradient-to-r from-[#2A3E5C] to-[#3B5478] text-white shadow-lg shadow-[#2A3E5C]/30 translate-x-1'
                                        : 'text-black hover:bg-white hover:shadow-sm hover:text-[#2A3E5C]'}
                                `}
                            >
                                <div className={`
                                    p-2 rounded-lg transition-all duration-300 backdrop-blur-sm
                                    ${activeCategoryIndex === idx
                                        ? 'bg-white/20 text-white rotate-0'
                                        : 'bg-slate-200/50 text-black group-hover:bg-[#2A3E5C]/10 group-hover:text-[#2A3E5C] group-hover:-rotate-3'}
                                `}>
                                    <category.icon className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 z-10">
                                    <span className={`block text-sm font-bold tracking-tight ${activeCategoryIndex === idx ? 'text-white' : ''}`}>
                                        {category.name}
                                    </span>
                                </div>
                                {activeCategoryIndex === idx && (
                                    <motion.div
                                        layoutId="active-indicator-company"
                                        className="absolute right-3"
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-white/90" />
                                    </motion.div>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Link for About */}
                    <div className="mt-auto px-6">
                        <Link href="/about" onClick={onClose} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#2A3E5C] transition-colors py-2">
                            <span>More about us</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* RIGHT CONTENT: Dynamic Preview Panel */}
                <div className="flex-1 bg-white/60 p-8 flex flex-col relative h-full overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {activeCategory.id === 'careers' && (
                            <motion.div
                                key="careers"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-black mb-2">Build the Future of EdTech</h2>
                                    <p className="text-black text-sm leading-relaxed max-w-md">
                                        We're looking for passionate individuals to join our mission of transforming education through technology.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#76B900]/30 hover:bg-[#F6F7ED] transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#76B900]">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-black text-sm mb-1">Culture First</h4>
                                        <p className="text-xs text-black">Work in an environment that values innovation and growth.</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-blue-600">
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-black text-sm mb-1">Impact at Scale</h4>
                                        <p className="text-xs text-black">Your work directly empowers millions of students globally.</p>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href="/company/careers"
                                        onClick={onClose}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A3E5C] text-white rounded-lg text-sm font-semibold hover:bg-[#3B5478] transition-colors shadow-lg shadow-[#2A3E5C]/20"
                                    >
                                        View Open Positions
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )}

                        {activeCategory.id === 'partners' && (
                            <motion.div
                                key="partners"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-black mb-2">Partner with Excellence</h2>
                                    <p className="text-black text-sm leading-relaxed max-w-md">
                                        Join our global network of educational institutes and technology partners driving digital transformation.
                                    </p>
                                </div>

                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 to-slate-900 p-6 text-white mb-6 shadow-xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4 opacity-80">
                                            <Globe className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase tracking-wider">Global Reach</span>
                                        </div>
                                        <div className="text-3xl font-bold mb-1">500+</div>
                                        <div className="text-sm text-indigo-200">Institutes Transformed</div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        href="/company/partners"
                                        onClick={onClose}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-black rounded-lg text-sm font-semibold hover:text-[#2A3E5C] hover:border-[#2A3E5C]/30 hover:bg-slate-50 transition-all shadow-sm"
                                    >
                                        Become a Partner
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
