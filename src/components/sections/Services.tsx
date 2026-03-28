"use client";

import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PenTool, Code2, Cpu, Cloud, ArrowRight } from "lucide-react";
import { SiOpenai } from "react-icons/si";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const servicesData = [
    {
        id: "uiux",
        Icon: PenTool,
        href: "/expertise#creative-design",
    },
    {
        id: "fullstack",
        Icon: Code2,
        href: "/expertise#full-stack",
    },
    {
        id: "ai",
        Icon: Cpu,
        href: "/expertise#ai-automation",
    },
    {
        id: "cloud",
        Icon: Cloud,
        href: "/expertise#cloud-infra",
    },
];

export function Services({ showViewAll = true }: { showViewAll?: boolean }) {
    const t = useTranslations('Services');
    return (
        <section id="services" className="pt-32 pb-40 relative z-10 overflow-hidden">
            {/* Minimal Background — No heavy glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

            <Container>
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-4 block"
                        >
                            {t('badge')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.05]"
                        >
                            {t('heading1')} <br />
                            {t('heading2')} <span className="text-foreground/40">{t('headingHighlight')}</span>
                        </motion.h2>
                    </div>
                    {showViewAll && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/expertise" className="group flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors">
                                {t('viewAll')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    )}
                </div>

                {/* Minimal 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-foreground/5 border border-foreground/5 rounded-[32px] overflow-hidden">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-background p-6 md:p-10 xl:p-12 flex flex-col justify-between hover:bg-foreground/[0.01] transition-colors duration-500"
                        >
                            {/* Subtle Mist Glass Hover Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                <div className="absolute inset-0 bg-foreground/[0.02] backdrop-blur-[12px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="mb-12">
                                    <service.Icon className="w-8 h-8 text-foreground/40 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />
                                </div>
                                <h4 className="text-xl font-heading font-medium mb-4 text-foreground tracking-tight">
                                    {t(`items.${service.id}.title` as any)}
                                </h4>
                                <p className="text-sm text-foreground/40 leading-relaxed font-light group-hover:text-foreground/60 transition-colors duration-500">
                                    {t(`items.${service.id}.description` as any)}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 pt-8 border-t border-foreground/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground"
                                >
                                    {t('learnMore')}
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
