"use client";

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Globe, Bot, Rocket } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

const packageIds = ["starter", "business", "saas"] as const;
const addonIds = ["telegram", "automation", "multilingual", "analytics"] as const;
const faqIndices = [0, 1, 2, 3, 4] as const;

export default function PricingPage() {
    const t = useTranslations("Pricing");

    const packagesData = {
        starter: { icon: Globe, color: "text-blue-400", border: "border-foreground/[0.08]", glow: "bg-blue-500/[0.04]", price: "$300", priceSuffix: "– $700", popular: false },
        business: { icon: Bot, color: "text-violet-400", border: "border-violet-500/30", glow: "bg-violet-500/[0.06]", price: "$800", priceSuffix: "– $2,000", popular: true },
        saas: { icon: Rocket, color: "text-amber-400", border: "border-foreground/[0.08]", glow: "bg-amber-500/[0.03]", price: "Custom", priceSuffix: "", popular: false }
    };

    const addonsData = {
        telegram: { icon: Bot },
        automation: { icon: Zap },
        multilingual: { icon: Globe },
        analytics: { icon: Zap }
    };

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <Container>
                {/* Hero */}
                <section className="pt-44 pb-16 md:pt-48 md:pb-20 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block"
                    >
                        {t('hero.badge')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl"
                    >
                        {t('hero.titleMain')} <br className="hidden md:block" />
                        <span className="text-foreground/40">{t('hero.titleHighlight')}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl leading-relaxed"
                    >
                        {t('hero.subtext')}
                    </motion.p>
                </section>

                {/* Pricing Cards */}
                <section className="pb-24 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packageIds.map((id, i) => {
                            const pkgData = packagesData[id];
                            const Icon = pkgData.icon;
                            return (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "relative rounded-[28px] border p-8 flex flex-col gap-8 transition-all duration-500",
                                        pkgData.border,
                                        pkgData.popular
                                            ? "bg-foreground/[0.04] shadow-[0_0_60px_rgba(139,92,246,0.1)]"
                                            : "bg-foreground/[0.02] hover:bg-foreground/[0.04]"
                                    )}
                                >
                                    <div className={cn("absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none", pkgData.glow)} />

                                    {pkgData.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">
                                            {t('popularBadge')}
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <div className={cn("w-12 h-12 rounded-2xl bg-foreground/[0.04] border border-foreground/[0.08] flex items-center justify-center mb-5", pkgData.popular && "border-violet-500/20")}>
                                            <Icon className={cn("w-6 h-6", pkgData.color)} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-heading font-medium text-foreground tracking-tight mb-1">{t(`packages.${id}.name` as any)}</h3>
                                        <p className="text-sm text-foreground/40">{t(`packages.${id}.tagline` as any)}</p>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-heading font-medium text-foreground tracking-tight">{pkgData.price}</span>
                                            {pkgData.priceSuffix && <span className="text-xl text-foreground/40">{pkgData.priceSuffix}</span>}
                                        </div>
                                        <p className="text-xs text-foreground/30 mt-1 uppercase tracking-widest">{t(`packages.${id}.period` as any)}</p>
                                    </div>

                                    <div className="h-px bg-foreground/[0.06]" />

                                    <ul className="relative z-10 flex flex-col gap-3 flex-1">
                                        {[0,1,2,3,4,5].map((idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                                                <span className="text-sm text-foreground/60">{t(`packages.${id}.features.${idx}` as any)}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={cn(
                                            "relative z-10 group flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold transition-all duration-300",
                                            pkgData.popular
                                                ? "bg-violet-500 text-white hover:bg-violet-400"
                                                : "bg-foreground/[0.04] text-foreground hover:bg-foreground/[0.08] border border-foreground/[0.08]"
                                        )}
                                    >
                                        {t(`packages.${id}.cta` as any)}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-foreground/30 text-sm mt-8"
                    >
                        {t('note')} 
                        <Link href="/contact" className="text-blue-500 hover:underline ml-1">{t('freeEstimate')}</Link>
                    </motion.p>
                </section>

                {/* Add-ons */}
                <section className="pb-24 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-medium tracking-tighter text-foreground mb-3"
                    >
                        {t('addons.titleMain')} <span className="text-foreground/40">{t('addons.titleHighlight')}</span>
                    </motion.h2>
                    <p className="text-foreground/40 text-base mb-10">{t('addons.subtext')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {addonIds.map((id, i) => {
                            const Icon = addonsData[id].icon;
                            return (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-4 p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.06] hover:border-foreground/[0.12] hover:bg-foreground/[0.04] transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">{t(`addons.items.${id}.name` as any)}</p>
                                        <p className="text-xs text-foreground/40 mt-0.5">{t(`addons.items.${id}.price` as any)}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ */}
                <section className="pb-32 relative z-10 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-medium tracking-tighter text-foreground mb-12"
                    >
                        {t('faq.titleMain')} <span className="text-foreground/40">{t('faq.titleHighlight')}</span>
                    </motion.h2>
                    <div className="flex flex-col divide-y divide-foreground/[0.06]">
                        {faqIndices.map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="py-7"
                            >
                                <h3 className="text-base font-semibold text-foreground mb-3">{t(`faq.items.${i}.q` as any)}</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">{t(`faq.items.${i}.a` as any)}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}
