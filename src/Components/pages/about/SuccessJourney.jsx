"use client";

import { useEffect, useRef, useState } from 'react';

const events = [
    {
        year: '2010',
        title: 'Inception',
        description: 'Established with a vision to transform education through technology.'
    },
    {
        year: '2014',
        title: 'Government Partnership',
        description: 'Developed teacher attendance systems for the Nagaland Government.'
    },
    {
        year: '2016',
        title: 'Rapid Expansion',
        description: 'Expanded into private and public institutions, serving 400+ schools.'
    },
    {
        year: '2021',
        title: 'AI Integration',
        description: 'Collaborated with Gujarat Government for AI-driven learning outcomes.'
    },
    {
        year: '2023',
        title: 'Personalized Learning',
        description: 'Introduced performance-based personalized lesson planning engines.'
    }
];

export default function SuccessJourney() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [lineHeight, setLineHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const top = rect.top;
                const height = rect.height;

                // Start animating when the section hits the middle of the viewport
                // and finish when it leaves the view
                const startOffset = windowHeight / 2;
                const endOffset = 100; // Buffer

                // Calculate progress
                // 0% when top is at windowHeight/2
                // 100% when bottom is roughly at windowHeight/2

                const scrolled = startOffset - top;
                const totalScrollable = height - endOffset;

                let progress = scrolled / totalScrollable;
                progress = Math.max(0, Math.min(1, progress));

                setLineHeight(progress * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
                    }
                });
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.journey-card').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-6">
                        Our Success Journey
                    </h2>
                    <p className="text-black max-w-2xl mx-auto text-lg">
                        Milestones that define our path to excellence in education technology.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line Background (Dashed) - Perfectly Centered */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

                    {/* Filling Line (Solid Orange) - Perfectly Centered */}
                    <div
                        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-orange-500 to-red-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] rounded-full transition-all duration-75 ease-linear"
                        style={{ height: `${lineHeight}%` }}
                    >
                        {/* Moving Head/Pin */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-xl z-20"></div>
                    </div>

                    <div className="space-y-24 pb-12">
                        {events.map((event, index) => {
                            const isLeft = index % 2 === 0;
                            const isVisible = visibleItems.includes(index);

                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`journey-card flex flex-col md:flex-row items-center w-full relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                        }`}
                                >
                                    {/* Left Content - Shows on mobile for ALL events, on desktop only for even events */}
                                    <div className={`w-full md:w-1/2 pl-8 md:pl-0 md:pr-16 order-2 md:order-1 text-left md:text-right ${!isLeft ? 'md:invisible' : ''}`}>
                                        <div className="relative bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                            <span className="text-6xl md:text-8xl font-black text-gray-200 absolute -bottom-4 right-0 opacity-100 select-none z-0 pointer-events-none">
                                                {event.year}
                                            </span>
                                            <h3 className="text-2xl font-bold text-black mb-2 relative z-10">{event.year}</h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3 relative z-10">{event.title}</h4>
                                            <p className="text-black leading-relaxed relative z-10">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot (Fixed) - Perfectly Centered */}
                                    <div className={`absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-white border-2 border-gray-300 rounded-full z-10 transition-colors duration-500 order-1 md:order-2 ${isVisible ? 'border-orange-500 bg-orange-50' : ''}`}></div>

                                    {/* Right Content - Hidden on mobile, only visible on desktop for odd events */}
                                    <div className={`hidden md:block w-full md:w-1/2 pl-8 md:pl-16 order-3 md:order-3 text-left ${isLeft ? 'md:invisible' : ''}`}>
                                        <div className="relative bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                            <span className="text-6xl md:text-8xl font-black text-gray-200 absolute -bottom-4 right-0 opacity-100 select-none z-0 pointer-events-none">
                                                {event.year}
                                            </span>
                                            <h3 className="text-2xl font-bold text-black mb-2 relative z-10">{event.year}</h3>
                                            <h4 className="text-lg font-semibold text-blue-600 mb-3 relative z-10">{event.title}</h4>
                                            <p className="text-black leading-relaxed relative z-10">{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
