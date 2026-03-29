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
import { useTranslations } from 'next-intl';
// badge / expert data structure makes it easy to update from one place

export interface BadgeInfo {
    id: string;
    name: string;
    subtitle: string;
    gradientFrom: string;
    gradientTo: string;
    positionClasses: string;
    animation: "float" | "floatDelayed" | "floatDelayed2";
}

const badges: BadgeInfo[] = [
    {
        id: "frontend",
        name: "Alex Chen",
        subtitle: "Frontend Expert · 120+ projects",
        gradientFrom: "from-blue-500",
        gradientTo: "to-indigo-600",
        positionClasses: "top-[18%] left-[1%] xl:left-[2%]",
        animation: "float",
    },
    {
        id: "uiux",
        name: "Sara Kim",
        subtitle: "UI/UX Expert · Figma wizard",
        gradientFrom: "from-violet-500",
        gradientTo: "to-pink-500",
        positionClasses: "top-[48%] right-[1%] xl:right-[2%]",
        animation: "floatDelayed",
    },
    {
        id: "backend",
        name: "James L.",
        subtitle: "Backend Expert · Node / Go",
        gradientFrom: "from-cyan-500",
        gradientTo: "to-slate-700",
        positionClasses: "top-[62%] left-[1%] xl:left-[2%]",
        animation: "floatDelayed2",
    },
];

export function Hero() {
    const t = useTranslations('Hero');
    const shouldReduceMotion = useReducedMotion();

    // Floating animation for expert badges
    const floatAnimation = {
        y: shouldReduceMotion ? 0 : [0, -12, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
    };

    const floatAnimationDelayed = {
        y: shouldReduceMotion ? 0 : [0, 12, 0],
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }
    };

    const floatAnimationDelayed2 = {
        y: shouldReduceMotion ? 0 : [0, -8, 0],
        transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
    };

    return (
        <section id="top" role="region" aria-labelledby="hero-heading" className="relative pt-32 pb-16 md:pt-42 md:pb-32 min-h-screen flex flex-col justify-center overflow-hidden">

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
                            "absolute z-20 hidden lg:flex lg:scale-[0.8] xl:scale-100 origin-center items-center gap-3 px-4 py-3 rounded-2xl bg-background/80 backdrop-blur-xl border border-foreground/10 shadow-[0_8px_32px_var(--aero-shadow)] cursor-default select-none transition-all duration-500 will-change-transform",
                            b.positionClasses,
                            // Adjust inward strictly on lg so they don't hit edge
                            b.id === "frontend" && "lg:left-[2%] xl:left-[2%]",
                            b.id === "uiux" && "lg:right-[2%] xl:right-[2%]",
                            b.id === "backend" && "lg:left-[2%] xl:left-[2%]"
                        )}
                    >
                        <div
                            className={`relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${b.gradientFrom} ${b.gradientTo} flex items-center justify-center ring-2 ring-white/10 overflow-hidden`}
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
                            <span className="text-sm font-semibold text-foreground">{t(`badges.${b.id}.name` as any)}</span>
                            <span className="text-xs text-foreground/50 mt-0.5">{t(`badges.${b.id}.subtitle` as any)}</span>
                        </div>
                    </motion.div>
                );
            })}

            <Container className="relative z-10 flex flex-col items-center text-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 bg-foreground px-5 py-2.5 rounded-full mb-10 shadow-[0_0_30px_var(--aero-shadow)] hover-trigger"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    <span className="text-background text-sm font-semibold tracking-tight">
                        {t('pill')}
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    id="hero-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                    className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[68px] xl:text-[84px] font-heading font-medium text-foreground mb-6 tracking-tight leading-[1.1] max-w-4xl xl:max-w-5xl"
                >
                    {t('headingMain')} <span className="font-script italic font-light text-foreground/[0.95] text-[1.1em] px-2">{t('headingHighlight')}</span> {t('headingSuffix')}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-sm sm:text-lg md:text-[20px] font-light text-foreground/60 mb-10 leading-relaxed max-w-[700px]"
                >
                    {t('subtext')}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="flex flex-col sm:flex-row items-center gap-3 mb-16 w-full sm:w-auto"
                >
                    {/* Primary CTA (Blue Pill) */}
                    <Link href="/contact" className="w-full sm:w-auto hover-trigger">
                        <Button
                            variant="aero"
                            size="pill"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 group"
                        >
                            {t('ctaPrimary')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    {/* Secondary CTA (Outline Pill) */}
                    <Link href="/work" className="w-full sm:w-auto hover-trigger">
                        <Button
                            variant="ghost"
                            size="pill"
                            className="w-full sm:w-auto font-medium"
                        >
                            {t('ctaSecondary')}
                        </Button>
                    </Link>
                </motion.div>



                {/* Trust Logos (Glass Bottom Panel) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full max-w-5xl flex flex-col items-center"
                >
                    <p className="text-sm font-semibold tracking-widest text-foreground/40 uppercase shrink-0">
                        {t('trustLabel')}
                    </p>

                    <div className="w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 bg-background/5 border border-foreground/10 backdrop-blur-md rounded-[24px] sm:rounded-[32px] px-4 sm:px-8 py-4 sm:py-6 shadow-[0_10px_40px_var(--aero-shadow)] hover-trigger">
                        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 flex-wrap justify-center">
                            {/* Frontend */}
                            <div className="flex items-center gap-3 sm:gap-6 lg:border-r border-foreground/10 pr-3 sm:pr-4 lg:pr-8">
                                <SiNextdotjs className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-foreground transition-colors" />
                                <SiReact className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#61DAFB] transition-colors" />
                                <SiTypescript className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#3178C6] transition-colors" />
                            </div>

                            {/* Backend & DB */}
                            <div className="flex items-center gap-3 sm:gap-6 lg:border-r border-foreground/10 pr-3 sm:pr-4 lg:pr-8">
                                <SiNodedotjs className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#339933] transition-colors" />
                                <SiPython className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#3776AB] transition-colors" />
                                <SiPostgresql className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#4169E1] transition-colors" />
                            </div>

                            {/* AI & Cloud */}
                            <div className="flex items-center gap-3 sm:gap-6">
                                <SiOpenai className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#412991] transition-colors" />
                                <FaAws className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#FF9900] transition-colors" />
                                <SiFigma className="w-7 h-4 sm:w-12 sm:h-6 md:w-14 md:h-7 text-foreground/60 hover:text-[#F24E1E] transition-colors" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}
