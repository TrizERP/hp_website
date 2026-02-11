'use client'

import { SplineScene } from "@/Components/ui/splite";
import { Card } from "@/Components/ui/card"
import { Spotlight } from "@/Components/ui/spotlight"

interface SplineHeroProps {
    title?: React.ReactNode;
    description?: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
}

export default function SplineHero({
    title = "Interactive 3D",
    description = "Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.",
    badgeText,
    badgeLabel,
    ctaButtons
}: SplineHeroProps) {
    return (
        <Card className="w-full min-h-[100vh] h-auto py-20 bg-gradient-to-b from-[#2A3E5C] to-white relative overflow-hidden flex flex-col justify-center border-0 rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#1a1a1a"
            />

            <div className="flex h-full flex-col md:flex-row w-full relative z-10 items-center justify-between px-4 md:px-12 lg:px-20">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center max-w-4xl">
                    {badgeLabel && badgeText && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 self-start mb-8 w-fit backdrop-blur-md">
                            <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/80">{badgeLabel}</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span className="text-sm font-bold tracking-tight text-white">{badgeText}</span>
                        </div>
                    )}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white [-webkit-text-stroke:1px_black] leading-[1] drop-shadow-sm">
                        {title}
                    </h1>
                    <p className="mt-8 text-neutral-800 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed">
                        {description}
                    </p>

                    {ctaButtons && ctaButtons.length > 0 && (
                        <div className="flex flex-wrap items-center gap-4 pt-10">
                            {ctaButtons.map((button, index) => (
                                <a
                                    key={index}
                                    href={button.href}
                                    suppressHydrationWarning
                                    className={`rounded-full border-2 px-8 py-4 text-base font-bold tracking-tight transition-all focus:outline-none focus:ring-2 focus:ring-black duration-300 ${button.primary
                                        ? "bg-black text-white border-black hover:bg-neutral-800 hover:scale-105"
                                        : "text-black border-black hover:bg-black hover:text-white"
                                        }`}
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[600px] md:min-h-full w-full h-full flex items-center justify-center scale-[1.5] md:scale-[1.8] lg:scale-[2.2] translate-x-0 md:translate-x-10 lg:translate-x-20 translate-y-10 origin-center">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    )
}
