
import Image from 'next/image';

export default function WhatWeDo() {
    return (
        <section className="w-full relative">
            {/* Section 1: Intro Image */}
            <div className="sticky top-0 w-full h-screen z-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/what_we_about.png"
                        alt="What We Do"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Section 2: What We Offer */}
            <div className="sticky top-0 w-full min-h-screen z-10 bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div className="py-20 px-2 md:px-8 max-w-[1400px] mx-auto flex flex-col justify-center h-full">
                    <div className="w-full text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">
                            What We Offer
                        </h2>
                        <p className="text-black text-lg md:text-xl leading-relaxed text-left md:text-justify px-2 md:px-0">
                            Scholar Clone is a forward-thinking company dedicated to transforming educational experiences through innovative solutions. We specialize in providing a comprehensive school management system that streamlines administrative tasks, enhances communication, and improves operational efficiency. Our Learning Management System (LMS) empowers educators and students with tools for interactive learning, assessment, and progress tracking, tailored to modern educational needs. In addition, our career counseling services guide students toward fulfilling their academic and professional aspirations, ensuring they make informed decisions about their future. At Scholar Clone, we are committed to fostering an environment where education and technology come together to create meaningful impacts on students' lives.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[1000px] mx-auto h-[300px] md:h-[500px]">
                        <Image
                            src="/assets/what_we_1_about.png"
                            alt="What We Offer Icons"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3: The Value You Unlock */}
            <div className="sticky top-0 w-full min-h-screen z-20 bg-white border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div className="py-20 px-2 md:px-8 max-w-[1400px] mx-auto flex flex-col justify-center h-full">
                    <div className="w-full mb-8">
                        <h2 className="text-center text-3xl md:text-5xl font-bold text-orange-500 mb-8">
                            The Value You Unlock
                        </h2>
                        <ul className="text-black text-lg md:text-xl leading-relaxed space-y-2 list-disc pl-6 max-w-[1300px] mx-auto text-left">
                            <li>Automating daily tasks reduces administrative burden and saves valuable time for staff and management.</li>
                            <li>Tracking student progress with real-time data and personalized learning tools improves performance through targeted interventions.</li>
                            <li>Streamlined communication channels strengthen connections between parents, teachers, and management.</li>
                            <li>Detailed analytics help make informed decisions that enhance both educational outcomes and operational efficiency.</li>
                            <li>Equipping students with modern tools and resources prepares them to thrive in a competitive academic and career landscape.</li>
                            <li>Automation and centralized management reduce overhead costs, freeing up the budget for essential growth areas.</li>
                            <li>Supporting academic success alongside career planning ensures students are ready for future challenges.</li>
                        </ul>
                    </div>

                    <div className="relative w-full max-w-[1000px] mx-auto h-[300px] md:h-[500px]">
                        <Image
                            src="/assets/what_we_2_about.png"
                            alt="Value You Unlock Icons"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
