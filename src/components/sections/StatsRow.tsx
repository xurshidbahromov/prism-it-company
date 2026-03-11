"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
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

export function StatsRow() {
    const stats = [
        {
            label: "Client Retention",
            value: 95,
            suffix: "%",
            description: "Built on engineering excellence and long-term partnership trust."
        },
        {
            label: "Projects Delivered",
            value: 200,
            prefix: "+",
            description: "From tactical MVP launches to enterprise-scale digital transformations."
        },
        {
            label: "Users Reached",
            value: 3.2,
            prefix: "+",
            suffix: "M",
            isDecimal: true,
            description: "Products engineered by PRISM serve millions of daily active users."
        },
        {
            label: "Efficiency Lift",
            value: 40,
            suffix: "%",
            description: "Average operational performance gain through intelligent automation."
        }
    ];

    return (
        <section id="stats" className="bg-background py-32 md:py-48 relative z-10 overflow-hidden border-t border-foreground/5">
            {/* Minimal architectural line */}
            <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-foreground/10 via-transparent to-transparent hidden md:block"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Heading & Narrative */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">Our Impact</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.05] mb-8">
                                The logic beyond <br />
                                high-impact <span className="text-foreground/40">success.</span>
                            </h2>
                            <p className="text-lg text-foreground/50 font-light leading-relaxed mb-10 max-w-md">
                                Precision is our primary driver. We measure success by the resilience of the architecture and the tangible value delivered to your bottom line.
                            </p>

                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <Link
                                    href="/work"
                                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-blue-500 transition-colors"
                                >
                                    View Portolio
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/about"
                                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
                                >
                                    Client Trust
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Metrics Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
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
                                        <div className="text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-foreground">
                                            {stat.isDecimal ? (
                                                <DecimalCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            ) : (
                                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            )}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
                                                {stat.label}
                                            </h4>
                                            <p className="text-xs text-foreground/40 font-light leading-relaxed group-hover:text-foreground/60 transition-colors">
                                                {stat.description}
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
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value * 10, {
                duration: 2,
                ease: "easeOut",
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
