"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function NeuralBackground({
    className,
    color = "#6366f1", // Default Indigo
    trailOpacity = 0.15,
    particleCount = 600,
    speed = 1,
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // --- CONFIGURATION ---
        let width = container.clientWidth;
        let height = container.clientHeight;
        let particles = [];
        let animationFrameId;
        let mouse = { x: -1000, y: -1000 }; // Start off-screen

        // --- PARTICLE CLASS ---
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.age = 0;
                // Random lifespan to create natural recycling
                this.life = Math.random() * 200 + 100;
            }

            update() {
                // 1. Flow Field Math (Simplex-ish noise)
                // We calculate an angle based on position to create the "flow"
                const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

                // 2. Add force from flow field
                this.vx += Math.cos(angle) * 0.2 * speed;
                this.vy += Math.sin(angle) * 0.2 * speed;

                // 3. Mouse Repulsion/Attraction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 150;

                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    // Push away
                    this.vx -= dx * force * 0.05;
                    this.vy -= dy * force * 0.05;
                }

                // 4. Apply Velocity & Friction
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.95; // Friction to stop infinite acceleration
                this.vy *= 0.95;

                // 5. Aging
                this.age++;
                if (this.age > this.life) {
                    this.reset();
                }

                // 6. Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.age = 0;
                this.life = Math.random() * 200 + 100;
            }

            draw(context) {
                context.fillStyle = color;
                // Bold and bold more: Higher opacity, less fade
                const alpha = 0.5 + Math.abs((this.age / this.life) - 0.5);
                context.globalAlpha = alpha;

                // Neo/Glow effect
                context.shadowBlur = 8;
                context.shadowColor = color;

                // Larger particles for "bold" look
                context.beginPath();
                context.arc(this.x, this.y, 2, 0, Math.PI * 2);
                context.fill();
            }
        }

        // --- INITIALIZATION ---
        const init = () => {
            width = container.clientWidth;
            height = container.clientHeight;

            // Handle High-DPI screens (Retina) - Cap at 2x for performance
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            // Do NOT set style width/height causing potential layout thrashing with CSS
            // canvas.style.width = `${width}px`; 
            // canvas.style.height = `${height}px`;

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        // --- ANIMATION LOOP ---
        const animate = () => {
            if (!ctx) return;

            // "Neo Shinney" Background - Optimized
            // Create gradient only if needed (could be cached, but creation is okay if valid coords)
            // To avoid flickering, ensure we cover the whole canvas
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height));
            gradient.addColorStop(0, "rgba(58, 80, 115, 0.3)"); // Lighter/Shiny center
            gradient.addColorStop(1, "rgba(42, 62, 92, 0.4)");  // Darker edges

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Intense neon effect
            ctx.globalCompositeOperation = 'lighter';

            particles.forEach((p) => {
                p.update();
                p.draw(ctx);
            });

            // Reset composite
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(animate);
        };

        // --- EVENT LISTENERS ---
        // Debounce resize to prevent flashing
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = container.clientWidth;
                height = container.clientHeight;
                init();
            }, 200);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        // Start
        init();
        animate();

        window.addEventListener("resize", handleResize);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, trailOpacity, particleCount, speed]);

    return (
        <div ref={containerRef} className={cn("relative w-full h-full bg-[#2A3E5C] overflow-hidden", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
