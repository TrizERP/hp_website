
import Link from "next/link";

export default function AboutHero() {
    return (
        <>
            {/* --- HERO IMAGE SECTION --- */}
            <div className="relative w-full">
                {/* Image */}
                <div className="relative h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/hero_aboutus.jpg"
                        alt="About Us Hero"
                        className="object-cover w-full h-full"
                    />
                    {/* Overlay Layer */}
                    <div
                        className="absolute inset-0 z-10 opacity-50"
                        style={{ backgroundColor: '#6097d5ff' }}
                    ></div>
                </div>

                {/* Bottom Section */}
                <div className="bg-[#AFC1D6] py-10 text-center relative z-20">
                    <h1 className="text-4xl md:text-5xl font-semibold text-blue-600">
                        Our Company
                    </h1>
                </div>

                {/* Angled Cut */}
                <div
                    className="
                        absolute
                        // Change bottom-[110px] to move Up/Down (Y-axis)
                        bottom-[110px]
                        // Change right-[-20px] to move Left/Right (X-axis). e.g. right-[10px]
                        right-[-20px]
                        w-[50%]
                        h-[45px]
                        bg-white/90
                        skew-x-[-20deg]
                        origin-bottom-right
                        z-30
                        shadow-[-10px_-10px_30px_rgba(0,0,0,0.25)]
                    "
                ></div>
            </div>

            {/* --- COMPANY DESCRIPTION & LOGO SECTION --- */}
            <section className="bg-white py-16 px-4 md:px-16 relative z-40">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-stretch gap-12">

                    {/* Left Side: Description Text */}
                    <div className="md:w-2/3 text-left flex items-center">
                        <p className="
                            text-black 
                            text-base md:text-lg 
                            leading-normal
                            relative
                            top-0 lg:top-[-100px]
                            left-0 lg:left-[-70px]
                        ">
                            Founded in 2010, Scholar Clone has been a pioneering force in transforming technology for
                            education and corporate sectors. Specializes in software solutions for the education and
                            training sectors. It provides next-generation education solutions for schools, higher education institutes,
                            SMEs, and corporate clients, both in India and globally. Our advanced solutions,
                            including automated Learning Management Systems (LMS), cover everything from lesion
                            creation to performance management, enhancing learning experiences and optimizing
                            operational efficiency. Committed to driving growth and innovation, we deliver technology that
                            accelerates success.
                        </p>
                    </div>

                    {/* Right Side: Logo Block */}
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="
                            bg-[#F5F5F5] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl w-full h-full min-h-[200px] md:min-h-[300px] p-6 md:p-8 flex items-center justify-center gap-6
                            relative
                            top-0 lg:top-[-100px]
                            right-0 lg:right-[-60px]
                        ">
                            {/* Logo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Logo.png"
                                alt="Scholar Clone Logo"
                                className="h-16 md:h-24 w-auto"
                            />

                            {/* Brand Text */}
                            <div className="flex flex-col">
                                <span className="text-2xl md:text-4xl font-bold leading-none text-black">
                                    Scholar
                                </span>
                                <span className="text-2xl md:text-4xl font-bold leading-none text-black">
                                    Clone
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
