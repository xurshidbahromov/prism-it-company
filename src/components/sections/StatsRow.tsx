"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";
import { useTranslations } from "next-intl";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1], // Custom extremely smooth easeOut curve
                onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </span>
    );
}

const statsData = [
    {
        id: "retention",
        value: 95,
        suffix: "%",
    },
    {
        id: "projects",
        value: 200,
        prefix: "+",
    },
    {
        id: "users",
        value: 3.2,
        prefix: "+",
        suffix: "M",
        isDecimal: true,
    },
    {
        id: "efficiency",
        value: 40,
        suffix: "%",
    }
];

export function StatsRow() {
    const t = useTranslations('StatsRow');

    return (
        <section id="stats" className="py-32 md:py-48 relative z-10 overflow-hidden">
            {/* Minimal architectural line */}
            <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-foreground/10 via-transparent to-transparent hidden md:block"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-24 items-start">

                    {/* Left: Heading & Narrative */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">{t('badge')}</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.05] mb-8">
                                {t('heading1')} <br />
                                {t('heading2')} <span className="text-foreground/40">{t('headingHighlight')}</span>
                            </h2>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed mb-10 max-w-md">
                                {t('description')}
                            </p>

                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <Link
                                    href="/work"
                                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-blue-500 transition-colors"
                                >
                                    {t('linkPortfolio')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/about"
                                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
                                >
                                    {t('linkTrust')}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Metrics Grid */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            {statsData.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative p-8 rounded-2xl border border-foreground/5 bg-foreground/[0.01] hover:border-foreground/10 hover:bg-foreground/[0.02] transition-all duration-500"
                                >
                                    {/* Subtle Mist glass */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-[12px] rounded-2xl transition-opacity duration-700 pointer-events-none"></div>

                                    <div className="relative z-10 flex flex-col items-start gap-4">
                                        <div className="text-4xl lg:text-5xl xl:text-6xl font-heading font-medium tracking-tighter text-foreground">
                                            {stat.isDecimal ? (
                                                <DecimalCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            ) : (
                                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                                                {t(`items.${stat.id}.label` as any)}
                                            </h4>
                                            <p className="text-xs text-foreground/40 font-light leading-relaxed group-hover:text-foreground/60 transition-colors">
                                                {t(`items.${stat.id}.description` as any)}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

// Fixed Counter for Decimal points (e.g. 3.2M)
function DecimalCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value * 10, {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue / 10}{suffix}
        </span>
    );
}
