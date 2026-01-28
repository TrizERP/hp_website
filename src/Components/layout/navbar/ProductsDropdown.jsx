"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    ArrowUpRight,
    Building2,
    Presentation,
    Briefcase,
    Rocket,
    Megaphone,
    BarChart3,
    ArrowRight,
    UserSquare2,
    Box
} from "lucide-react";
import { PRODUCTS_DROPDOWN_DATA } from "@/lib/data";

// Map string icon names from data to actual components
const ICON_MAP = {
    "Building2": Building2,
    "Presentation": Presentation,
    "Briefcase": Briefcase,
    "Rocket": Rocket,
    "Megaphone": Megaphone,
    "BarChart3": BarChart3,
    "UserSquare2": UserSquare2
};

export default function ProductsDropdown({
    isOpen,
    onClose,
    onMouseEnter,
    onMouseLeave,
}) {
    // Determine initial index to show - default to first item
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const activeCategory = PRODUCTS_DROPDOWN_DATA[activeCategoryIndex];

    return (
        <div
            className="w-full h-[550px] flex flex-row rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-slate-900/5 items-stretch"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {/* LEFT SIDEBAR: Categories */}
            <div className="w-[300px] bg-slate-50 border-r border-slate-200 flex flex-col py-6 relative z-10 shrink-0 h-full">
                <div className="px-6 mb-4">
                    <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                        Modules
                    </h3>
                </div>

                <div className="flex flex-col gap-2 px-3 relative flex-1 pb-4">
                    {PRODUCTS_DROPDOWN_DATA.map((category, idx) => {
                        const IconComponent = ICON_MAP[category.icon] || Box;

                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                className={`
                                    relative flex-1 flex items-center gap-4 px-6 rounded-xl text-left transition-all duration-300 cursor-pointer border
                                    ${activeCategoryIndex === idx
                                        ? 'bg-white border-[#2A3E5C]/20 shadow-md text-slate-900 -mr-6 z-20 rounded-r-none'
                                        : 'border-transparent text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm'}
                                `}
                            >
                                <div className={`
                                    p-2.5 rounded-lg transition-all duration-300
                                    ${activeCategoryIndex === idx
                                        ? 'bg-[#2A3E5C] text-white shadow-lg shadow-[#2A3E5C]/20'
                                        : 'bg-slate-100 text-slate-400 group-hover:bg-[#2A3E5C]/10 group-hover:text-[#2A3E5C]'}
                                `}>
                                    <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <span className={`block text-sm font-bold tracking-tight ${activeCategoryIndex === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {category.category}
                                    </span>
                                </div>
                                {activeCategoryIndex === idx && (
                                    <ChevronRight className="w-4 h-4 text-[#2A3E5C]" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT CONTENT: Product Grid */}
            <div className="flex-1 bg-white p-8 overflow-y-auto relative h-full">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategoryIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Category Header */}
                        <div className="mb-8 border-b border-slate-100 pb-6">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                {activeCategory.category}
                                <span className="px-3 py-1 rounded-full bg-[#2A3E5C]/10 text-[#2A3E5C] text-xs font-bold tracking-wide border border-[#2A3E5C]/20 uppercase">
                                    {activeCategory.products.length} Products
                                </span>
                            </h2>
                            <p className="text-slate-500 mt-2 text-sm max-w-2xl">
                                {activeCategory.description}
                            </p>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {activeCategory.products.map((product, pIdx) => (
                                <Link
                                    key={pIdx}
                                    href={product.href}
                                    onClick={onClose}
                                    className="group relative bg-white border border-slate-200 rounded-xl p-4 hover:border-[#2A3E5C]/50 hover:shadow-md transition-all duration-300 flex flex-col items-start"
                                >
                                    <div className="mb-3 w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#2A3E5C] group-hover:text-white transition-colors duration-300">
                                        <Box className="w-5 h-5" />
                                    </div>

                                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#2A3E5C] transition-colors mb-1 pr-6">
                                        {product.name}
                                    </h4>

                                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto flex items-center text-xs font-semibold text-[#2A3E5C] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Explore <ArrowRight className="w-3 h-3 ml-1" />
                                    </div>

                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#2A3E5C]" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Footer Link */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                            <Link
                                href={activeCategory.href || "/products"}
                                onClick={onClose}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#2A3E5C] transition-colors"
                            >
                                View all {activeCategory.category}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
