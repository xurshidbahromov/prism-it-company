"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const TABS_CONTENT = [
    {
        id: "reliability",
        label: "Reliability",
        title: "Engineered for maximum stability.",
        description: "We build systems that don't just work on day one, but scale elegantly as your user base grows.",
        bullets: [
            "Zero-downtime deployment strategies",
            "Automated testing and QA pipelines",
            "Infrastructure as code (IaC)",
        ]
    },
    {
        id: "transparency",
        label: "Transparency",
        title: "Clear communication, predictable delivery.",
        description: "No black boxes. You have full visibility into our codebase, sprint progress, and decision-making.",
        bullets: [
            "Weekly progress and velocity reports",
            "Direct access to engineering leads",
            "Open architecture documentation",
        ]
    },
    {
        id: "scale",
        label: "Scale",
        title: "Architected for tomorrow.",
        description: "We don't take shortcuts. Every line of code is written with future feature expansions in mind.",
        bullets: [
            "Microservices and serverless ready",
            "Global CDN and edge computing",
            "Optimized database schemas",
        ]
    },
    {
        id: "growth",
        label: "Growth",
        title: "Aligned with your business metrics.",
        description: "Technology is a tool for growth. We optimize for conversion, retention, and performance.",
        bullets: [
            "Technical SEO foundations",
            "Core Web Vitals optimization",
            "A/B testing infrastructure",
        ]
    }
];

export function Tabs() {
    const [activeTab, setActiveTab] = useState(TABS_CONTENT[0].id);
    const activeContent = TABS_CONTENT.find((tab) => tab.id === activeTab)!;

    return (
        <section id="standard" className="py-32 md:py-48 relative overflow-hidden bg-background border-t border-foreground/5">
            {/* Architectural guide line */}
            <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-foreground/5 via-transparent to-transparent hidden lg:block"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Heading & Protocol Navigation (lg:col-span-5) */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 block"
                            >
                                The PRISM Standard
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1] max-w-sm"
                            >
                                Delivery without <span className="text-foreground/40">doubt.</span>
                            </motion.h2>
                        </div>

                        {/* Architectural Tabs Navigation Box - Minimalist Makeover */}
                        <div className="relative space-y-1">
                            {TABS_CONTENT.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "group relative w-full text-left px-6 py-5 transition-all duration-500 rounded-xl overflow-hidden text-lg font-heading font-medium tracking-tight",
                                        activeTab === tab.id ? "text-foreground" : "text-foreground/30 hover:text-foreground/60"
                                    )}
                                >
                                    <div className="relative z-10 flex items-center gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 font-body">
                                            {String(TABS_CONTENT.indexOf(tab) + 1).padStart(2, '0')}
                                        </span>
                                        <span>
                                            {tab.label}
                                        </span>
                                    </div>

                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="active-tab-indicator"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-1/2 bg-blue-500 rounded-r-full"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Architectural Content Display (lg:col-span-7) */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="relative group"
                            >
                                {/* Subtle Mist Glass background removed in favor of a clean, structureless look like Services.tsx */}
                                
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tighter text-foreground leading-[1.05]">
                                            {activeContent.title}
                                        </h4>
                                        <p className="text-lg text-foreground/50 font-light leading-relaxed max-w-2xl">
                                            {activeContent.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-12 border-t border-foreground/5">
                                        {activeContent.bullets.map((bullet, idx) => (
                                            <div key={idx} className="flex items-start gap-4 group/item">
                                                <div className="w-5 h-5 rounded-full border border-foreground/10 flex items-center justify-center mt-0.5 group-hover/item:border-blue-500/50 transition-colors duration-500">
                                                    <Check className="w-3 h-3 text-blue-500 opacity-0 group-hover/item:opacity-100 scale-50 group-hover/item:scale-100 transition-all duration-500" />
                                                </div>
                                                <span className="text-sm md:text-base text-foreground/70 font-medium tracking-tight group-hover/item:text-foreground transition-colors duration-500">
                                                    {bullet}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8">
                                        <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors">
                                            Investigate standard specification
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
