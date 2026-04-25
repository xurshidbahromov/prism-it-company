"use client";

import { Container } from "@/components/layout/Container";
import { AeroButton as Button } from "@/components/ui/AeroButton";
import { Link } from "@/i18n/routing";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, Bot, Zap, Rocket } from "lucide-react";
import { cn } from "@/lib/cn";
import {
    SiReact, SiNextdotjs, SiTypescript,
    SiNodedotjs, SiPostgresql, SiTelegram, SiPrisma
} from "react-icons/si";
import { useTranslations } from 'next-intl';

// ─── Floating Icon Orbs (iOS Glassy Style) ───────────────────────────────────
const orbs = [
    {
        id: "web",
        icon: Globe,
        iconColor: "text-blue-400",
        glowColor: "rgba(59,130,246,0.12)",
        positionClasses: "top-[22%] left-[4%] xl:left-[6%]",
        size: "w-14 h-14",
        delay: 0,
        duration: 4.4,
        distance: 16,
    },
    {
        id: "telegram",
        icon: Bot,
        iconColor: "text-sky-400",
        glowColor: "rgba(14,165,233,0.12)",
        positionClasses: "top-[38%] right-[4%] xl:right-[7%]",
        size: "w-16 h-16",
        delay: 0.9,
        duration: 3.9,
        distance: -15,
    },
    {
        id: "automation",
        icon: Zap,
        iconColor: "text-amber-400",
        glowColor: "rgba(245,158,11,0.12)",
        positionClasses: "top-[62%] left-[5%] xl:left-[7%]",
        size: "w-12 h-12",
        delay: 1.7,
        duration: 4.9,
        distance: 13,
    },
    {
        id: "saas",
        icon: Rocket,
        iconColor: "text-violet-400",
        glowColor: "rgba(139,92,246,0.12)",
        positionClasses: "top-[70%] right-[5%] xl:right-[6%]",
        size: "w-14 h-14",
        delay: 0.4,
        duration: 5.1,
        distance: -18,
    },
];

// ─── Tech stack for bottom strip ─────────────────────────────────────────────
const techStack = [
    {
        group: "Frontend",
        icons: [
            { Icon: SiNextdotjs, color: "hover:text-foreground", label: "Next.js" },
            { Icon: SiReact, color: "hover:text-[#61DAFB]", label: "React" },
            { Icon: SiTypescript, color: "hover:text-[#3178C6]", label: "TypeScript" },
        ],
    },
    {
        group: "Backend & DB",
        icons: [
            { Icon: SiNodedotjs, color: "hover:text-[#339933]", label: "Node.js" },
            { Icon: SiPostgresql, color: "hover:text-[#4169E1]", label: "PostgreSQL" },
            { Icon: SiPrisma, color: "hover:text-foreground", label: "Prisma" },
        ],
    },
    {
        group: "Ecosystem",
        icons: [
            { Icon: SiTelegram, color: "hover:text-[#26A5E4]", label: "Telegram" },
            { Icon: Bot as any, color: "hover:text-violet-400", label: "AI Agents", isLucide: true },
            { Icon: Zap as any, color: "hover:text-amber-400", label: "Automation", isLucide: true },
        ],
    },
];

export function Hero() {
    const t = useTranslations('Hero');
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="top"
            role="region"
            aria-labelledby="hero-heading"
            className="relative pt-32 pb-16 md:pt-42 md:pb-32 min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* ── Floating Icon Orbs ───────────────────────────────────────── */}
            {orbs.map((orb) => {
                const Icon = orb.icon;
                return (
                    <motion.div
                        key={orb.id}
                        className={cn(
                            "absolute z-20 hidden lg:flex items-center justify-center",
                            "rounded-2xl cursor-default select-none",
                            "border border-white/[0.09]",
                            orb.size,
                            orb.positionClasses,
                        )}
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                            backdropFilter: "blur(20px) saturate(1.6)",
                            WebkitBackdropFilter: "blur(20px) saturate(1.6)",
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px ${orb.glowColor}, 0 0 0 1px rgba(255,255,255,0.04)`,
                        }}
                        animate={shouldReduceMotion ? {} : {
                            y: [0, orb.distance, orb.distance * 0.4, 0],
                            scale: [1, 1.04, 1.01, 1],
                        }}
                        transition={{
                            duration: orb.duration,
                            delay: orb.delay,
                            repeat: Infinity,
                            ease: [0.45, 0, 0.55, 1],
                            times: [0, 0.38, 0.68, 1],
                        }}
                    >
                        <Icon className={cn("w-[22px] h-[22px]", orb.iconColor)} strokeWidth={1.6} />
                    </motion.div>
                );
            })}

            {/* ── Main Content ────────────────────────────────────────────── */}
            <Container className="relative z-10 flex flex-col items-center text-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 bg-foreground px-5 py-2.5 rounded-full mb-10 shadow-[0_0_30px_var(--aero-shadow)] hover-trigger"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
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
                    {t('headingMain')}{" "}
                    <span className="font-script italic font-light text-foreground/[0.95] text-[1.1em] px-2">
                        {t('headingHighlight')}
                    </span>{" "}
                    {t('headingSuffix')}
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

                {/* ── Tech Stack Strip ──────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full max-w-5xl flex flex-col items-center gap-5"
                >
                    <p className="text-xs font-semibold tracking-[0.3em] text-foreground/30 uppercase">
                        {t('trustLabel')}
                    </p>

                    <div className="w-full flex flex-wrap justify-center items-stretch gap-px bg-foreground/[0.06] border border-foreground/[0.08] backdrop-blur-md rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_10px_40px_var(--aero-shadow)]">
                        {techStack.map((group, gi) => (
                            <div
                                key={group.group}
                                className={cn(
                                    "flex-1 min-w-[120px] flex flex-col items-center gap-3 px-4 sm:px-8 py-5 bg-background/60 hover:bg-background/80 transition-colors duration-300",
                                    gi < techStack.length - 1 && "border-r border-foreground/[0.06]"
                                )}
                            >
                                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/25">
                                    {group.group}
                                </span>
                                <div className="flex items-center gap-4 sm:gap-5">
                                    {group.icons.map(({ Icon, color, label, isLucide }) => (
                                        <div key={label} className="group/icon flex flex-col items-center gap-1.5">
                                            <Icon
                                                className={cn(
                                                    "transition-colors duration-300 text-foreground/40",
                                                    color,
                                                    isLucide
                                                        ? "w-5 h-5 sm:w-6 sm:h-6"
                                                        : "w-5 h-5 sm:w-6 sm:h-6"
                                                )}
                                                strokeWidth={isLucide ? 1.5 : undefined}
                                            />
                                            <span className="text-[9px] text-foreground/20 group-hover/icon:text-foreground/40 transition-colors tracking-wide">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}
