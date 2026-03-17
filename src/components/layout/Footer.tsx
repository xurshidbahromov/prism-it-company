"use client";

import { Container } from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-24 pb-6 mt-0 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24 relative z-10">

                    {/* Brand Col - 4 cols */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="#top" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm mb-6">
                                <span className="font-heading font-medium text-3xl tracking-tight text-foreground flex items-center gap-3">
                                    <div className="w-8 h-8 bg-foreground mask-prism shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                                    PRISM
                                </span>
                            </Link>
                            <p className="text-foreground/50 text-base leading-relaxed max-w-[280px] font-light">
                                Building digital engines that drive growth for ambitious brands worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Services Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">Services</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/expertise" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Web Development</Link></li>
                            <li><Link href="/expertise" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/expertise" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Digital Strategy</Link></li>
                            <li><Link href="/expertise" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Performance</Link></li>
                        </ul>
                    </div>

                    {/* Company Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="/work" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">Connect</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    Twitter <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    Dribbble <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-all group">
                                    Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-medium text-foreground mb-6 text-sm uppercase tracking-widest opacity-40">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/40 border-t border-foreground/[0.05] relative z-10">
                    <p className="text-xs font-medium tracking-wide">
                        &copy; {currentYear} PRISM. ALL RIGHTS RESERVED.
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
