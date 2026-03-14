"use client";

import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { AeroButton as Button } from "@/components/ui/AeroButton";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Assuming you have simple SVG logos in LogoStrip, we can inline or import it.
// We'll build a custom logo section to match the screenshot perfectly.
import { cn } from "@/lib/cn";
import { SiReact, SiNextdotjs, SiTypescript, SiFigma, SiNodedotjs, SiPython, SiPostgresql, SiOpenai } from "react-icons/si";
import { FaAws } from "react-icons/fa";

// badge / expert data structure makes it easy to update from one place

interface BadgeInfo {
    id: string;
    name: string;
    subtitle: string;
    gradientFrom: string;
    gradientTo: string;
    positionClasses: string;
    animation: "float" | "floatDelayed" | "floatDelayed2";
    cursor?: "frontend" | "figma" | "backend";
}

const badges: BadgeInfo[] = [
    {
        id: "frontend",
        name: "Alex Chen",
        subtitle: "Frontend Expert · 120+ projects",
        gradientFrom: "blue-500",
        gradientTo: "indigo-600",
        positionClasses: "top-[18%] left-[1%] xl:left-[2%]",
        animation: "float",
        cursor: "frontend",
    },
    {
        id: "uiux",
        name: "Sara Kim",
        subtitle: "UI/UX Expert · Figma wizard",
        gradientFrom: "violet-500",
        gradientTo: "pink-500",
        positionClasses: "top-[48%] right-[1%] xl:right-[2%]",
        animation: "floatDelayed",
        cursor: "figma",
    },
    {
        id: "backend",
        name: "James L.",
        subtitle: "Backend Expert · Node / Go",
        gradientFrom: "cyan-500",
        gradientTo: "slate-700",
        positionClasses: "top-[62%] left-[1%] xl:left-[2%]",
        animation: "floatDelayed2",
        cursor: "backend",
    },
];

const cursorSvgs: Record<string, ReactNode> = {
    frontend: (
        <svg
            className="absolute -right-4 -bottom-4 w-6 h-6 drop-shadow-[0_4px_8px_var(--aero-shadow)] select-none pointer-events-none text-blue-300 bg-background rounded-full p-1 ring-1 ring-foreground/10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    figma: (
        <svg
            className="absolute -left-4 -top-3 w-6 h-6 drop-shadow-[0_4px_8px_var(--aero-shadow)] select-none pointer-events-none text-purple-300 bg-background rounded-full p-1 ring-1 ring-foreground/10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 7L3 7M21 7L14 7M14 7.25195C17.4505 8.14004 20 11.2722 20 14.9999M4 14.9999C4 11.2722 6.54955 8.14004 10 7.25195M3.6 19H4.4C4.96005 19 5.24008 19 5.45399 18.891C5.64215 18.7951 5.79513 18.6422 5.89101 18.454C6 18.2401 6 17.9601 6 17.4V16.6C6 16.0399 6 15.7599 5.89101 15.546C5.79513 15.3578 5.64215 15.2049 5.45399 15.109C5.24008 15 4.96005 15 4.4 15H3.6C3.03995 15 2.75992 15 2.54601 15.109C2.35785 15.2049 2.20487 15.3578 2.10899 15.546C2 15.7599 2 16.0399 2 16.6V17.4C2 17.9601 2 18.2401 2.10899 18.454C2.20487 18.6422 2.35785 18.7951 2.54601 18.891C2.75992 19 3.03995 19 3.6 19ZM11.6 9H12.4C12.9601 9 13.2401 9 13.454 8.89101C13.6422 8.79513 13.7951 8.64215 13.891 8.45399C14 8.24008 14 7.96005 14 7.4V6.6C14 6.03995 14 5.75992 13.891 5.54601C13.7951 5.35785 13.6422 5.20487 13.454 5.10899C13.2401 5 12.9601 5 12.4 5H11.6C11.0399 5 10.7599 5 10.546 5.10899C10.3578 5.20487 10.2049 5.35785 10.109 5.54601C10 5.75992 10 6.03995 10 6.6V7.4C10 7.96005 10 8.24008 10.109 8.45399C10.2049 8.64215 10.3578 8.79513 10.546 8.89101C10.7599 9 11.0399 9 11.6 9ZM19.6 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V16.6C22 16.0399 22 15.7599 21.891 15.546C21.7951 15.3578 21.6422 15.2049 21.454 15.109C21.2401 15 20.9601 15 20.4 15H19.6C19.0399 15 18.7599 15 18.546 15.109C18.3578 15.2049 18.2049 15.3578 18.109 15.546C18 15.7599 18 16.0399 18 16.6V17.4C18 17.9601 18 18.2401 18.109 18.454C18.2049 18.6422 18.3578 18.7951 18.546 18.891C18.7599 19 19.0399 19 19.6 19ZM22 7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7C20 6.44772 20.4477 6 21 6C21.5523 6 22 6.44772 22 7ZM4 7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6C3.55228 6 4 6.44772 4 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    backend: (
        <svg
            className="absolute -right-4 -bottom-4 w-6 h-6 drop-shadow-[0_4px_8px_var(--aero-shadow)] select-none pointer-events-none text-cyan-300 bg-background rounded-full p-1 ring-1 ring-foreground/10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

export function Hero() {
    const shouldReduceMotion = useReducedMotion();

    // Floating animation for expert badges
    const floatAnimation = {
        y: shouldReduceMotion ? 0 : [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut" as const
        }
    };

    const floatAnimationDelayed = {
        y: shouldReduceMotion ? 0 : [0, 15, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeOut" as const,
            delay: 1
        }
    };

    const floatAnimationDelayed2 = {
        y: shouldReduceMotion ? 0 : [0, -10, 0],
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut" as const,
            delay: 2
        }
    };

    return (
        <section id="top" role="region" aria-labelledby="hero-heading" className="relative pt-44 pb-20 md:pt-42 md:pb-32 min-h-screen flex flex-col justify-center overflow-hidden bg-background">

            {/* High-Contrast Minimalist Monochromatic Glows */}
            {/* Left Dominant Glow (White in Dark, Black in Light) */}
            <div aria-hidden="true" className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-foreground/[0.08] blur-[150px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

            {/* Right Supporting Glow */}
            <div aria-hidden="true" className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-foreground/[0.04] blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000"></div>

            {/* Custom Cursor SVG component (reusable inline) */}
            {/* Expert badges are now data-driven to simplify updates */}
            {badges.map((b) => {
                const animMap = {
                    float: floatAnimation,
                    floatDelayed: floatAnimationDelayed,
                    floatDelayed2: floatAnimationDelayed2,
                } as const;

                return (
                    <motion.div
                        key={b.id}
                        animate={animMap[b.animation]}
                        className={cn(
                            "absolute z-20 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/80 backdrop-blur-xl border border-foreground/10 shadow-[0_8px_32px_var(--aero-shadow)] cursor-default select-none",
                            b.positionClasses
                        )}
                    >
                        <div
                            className={`relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-${b.gradientFrom} to-${b.gradientTo} flex items-center justify-center ring-2 ring-white/10 overflow-hidden`}
                        >
                            <svg
                                className="w-8 h-8 text-white/60 mt-1"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
                            </svg>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-sm font-semibold text-foreground">{b.name}</span>
                            <span className="text-xs text-foreground/50 mt-0.5">{b.subtitle}</span>
                        </div>
                        {b.cursor && cursorSvgs[b.cursor]}
                    </motion.div>
                );
            })}

            <Container className="relative z-10 flex flex-col items-center text-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 bg-foreground px-5 py-2.5 rounded-full mb-10 shadow-[0_0_30px_var(--aero-shadow)] hover-trigger"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    <span className="text-background text-sm font-semibold tracking-tight">
                        Join +50 enterprise clients scaling with our engineering.
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    id="hero-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-[76px] lg:text-[84px] font-heading font-medium text-foreground mb-6 tracking-tight leading-[1.1] max-w-5xl"
                >
                    We Build The <span className="font-script italic font-light text-foreground/[0.95] text-[1.1em] px-2">Software</span> That <br className="hidden sm:block" />
                    Transforms Businesses.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-[20px] font-light text-foreground/60 mb-12 leading-relaxed max-w-[700px]"
                >
                    We partner with ambitious brands to engineer high-performing
                    technological solutions and digital products that turn visions into reality.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-24"
                >
                    {/* Primary CTA (Blue Pill) */}
                    <Link href="#contact" className="w-full sm:w-auto hover-trigger">
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-semibold bg-blue-500 hover:bg-blue-400 text-white border border-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Start a Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    {/* Secondary CTA (Outline Pill) */}
                    <Link href="/work" className="w-full sm:w-auto hover-trigger">
                        <Button
                            variant="secondary"
                            className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-medium border border-foreground/20 text-foreground bg-transparent hover:bg-foreground/5 transition-all duration-300"
                        >
                            View Case Studies
                        </Button>
                    </Link>
                </motion.div>

                {/* small expert badge strip shown only on mobile */}
                <div className="flex xl:hidden justify-center gap-6 mb-12">
                    {badges.map((b) => (
                        <div
                            key={b.id}
                            className={`w-10 h-10 rounded-full bg-gradient-to-br from-${b.gradientFrom} to-${b.gradientTo}`}
                            aria-label={`${b.name}, ${b.subtitle}`}
                        />
                    ))}
                </div>

                {/* Trust Logos (Glass Bottom Panel) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full max-w-5xl flex flex-col items-center"
                >
                    <p className="text-sm font-semibold tracking-widest text-foreground/40 uppercase shrink-0">
                        Full-Stack & AI Infrastructure
                    </p>

                    <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-background/5 border border-foreground/10 backdrop-blur-md rounded-[32px] px-8 py-6 shadow-[0_10px_40px_var(--aero-shadow)] hover-trigger">
                        <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
                            {/* Frontend */}
                            <div className="flex items-center gap-6 border-r border-foreground/10 pr-8">
                                <SiNextdotjs className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-foreground transition-colors" />
                                <SiReact className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#61DAFB] transition-colors" />
                                <SiTypescript className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#3178C6] transition-colors" />
                            </div>

                            {/* Backend & DB */}
                            <div className="flex items-center gap-6 border-r border-foreground/10 pr-8">
                                <SiNodedotjs className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#339933] transition-colors" />
                                <SiPython className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#3776AB] transition-colors" />
                                <SiPostgresql className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#4169E1] transition-colors" />
                            </div>

                            {/* AI & Cloud */}
                            <div className="flex items-center gap-6">
                                <SiOpenai className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#412991] transition-colors" />
                                <FaAws className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#FF9900] transition-colors" />
                                <SiFigma className="w-12 h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#F24E1E] transition-colors" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}
