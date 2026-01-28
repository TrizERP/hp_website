import Image from 'next/image';

export default function CareerHero() {
    return (
        <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Hero_Partners.png"
                    alt="Careers at Scholar Clone"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-[#001E58]/60 mix-blend-multiply"></div>

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
                <div className="
                    w-[95%] md:w-[80%] lg:w-[60%] max-w-6xl
                    border border-white/50 rounded-2xl
                    px-4 py-8 md:px-12 md:py-16 lg:py-20
                    backdrop-blur-[2px] bg-[#001E58]/10 shadow-2xl
                ">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest mb-4 drop-shadow-xl uppercase">
                        We Are Hiring
                    </h1>
                    <p className="text-lg md:text-2xl lg:text-3xl tracking-[0.3em] md:tracking-[0.5em] font-light text-blue-50 uppercase">
                        Join Our Team
                    </p>
                </div>
            </div>

            {/* Angled Cut */}
            <div
                className="
                    absolute
                    bottom-[-25px]
                    right-[-20px]
                    w-[50%]
                    h-[60px]
                    bg-white
                    skew-x-[-30deg]
                    origin-bottom-right
                    z-30
                "
            ></div>
        </section>
    );
}
