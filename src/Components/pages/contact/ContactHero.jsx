import Image from 'next/image';

export default function ContactHero() {
    return (
        <section className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Hero_contactus.png"
                    alt="Contact Us Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}
