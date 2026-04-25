"use client";

import { Container } from "./Container";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="pt-16 sm:pt-24 pb-32 lg:pb-6 mt-0 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-12 gap-8 lg:gap-8 mb-16 sm:mb-24 relative z-10">

                    {/* Brand Col — 4 cols */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm mb-6">
                                <span className="font-heading font-semibold text-2xl sm:text-3xl tracking-[0.2em] uppercase text-foreground flex items-center gap-4">
                                    <Logo className="w-8 h-8 drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                                    PRISM
                                </span>
                            </Link>
                            <p className="text-foreground/50 text-sm sm:text-base leading-relaxed max-w-[280px] font-light">
                                {t('description')}
                            </p>
                        </div>
                    </div>

                    {/* Services Links Col */}
                    <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">
                            {t('columns.services')}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/expertise#web-dev" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('services.webDev')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/expertise#telegram" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('services.telegram')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/expertise#automation" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('services.automation')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/expertise#saas" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('services.saas')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('services.pricing')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links Col */}
                    <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">
                            {t('columns.company')}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('company.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/work" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('company.work')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/process" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('company.process')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {t('company.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Links Col */}
                    <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">
                            {t('columns.connect')}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="https://t.me/prismit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    Telegram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/prismit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/company/prismit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/prismit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links Col */}
                    <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">
                            {t('columns.legal')}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="/privacy" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">{t('legalLinks.privacy')}</a></li>
                            <li><a href="/terms" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">{t('legalLinks.terms')}</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-foreground/40 border-t border-foreground/[0.05] relative z-10">
                    <p className="text-xs font-medium tracking-wide">
                        {t('copyright')}
                    </p>
                    <p className="text-xs font-medium tracking-wide">
                        DESIGNED WITH <span className="text-foreground/80">&hearts;</span> BY PRISM
                    </p>
                </div>
            </Container>

            {/* Massive Branding Typography — Full Viewport Width */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full overflow-hidden pointer-events-none select-none"
            >
                <h2 className="w-full text-center whitespace-nowrap font-heading font-black tracking-tighter text-foreground/[0.06] leading-none uppercase"
                    style={{ fontSize: "20vw" }}
                >
                    PRISM
                </h2>
            </motion.div>
        </footer>
    );
}
