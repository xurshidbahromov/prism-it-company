"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 relative z-10 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
                    {/* Left Side: Info */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block"
                        >
                            Contact Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1.05] mb-6 sm:mb-8 text-foreground"
                        >
                            Let's start a <br className="hidden lg:block"/>
                            <span className="text-foreground/40">conversation.</span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-xl text-foreground/60 font-light leading-relaxed mb-8 sm:mb-12"
                        >
                            Have an idea, project, or question? Drop us a message and our team will get back to you within 24 hours.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-5"
                        >
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Email</div>
                                    <a href="mailto:hello@prism.dev" className="text-sm sm:text-lg font-medium hover:text-blue-500 transition-colors">hello@prism.dev</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Office</div>
                                    <span className="text-sm sm:text-lg font-medium">San Francisco, CA</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: CTA Card → links to /contact */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full lg:w-7/12"
                    >
                        <Link href="/contact" className="group block">
                            <div className="relative bg-foreground/[0.02] border border-foreground/[0.06] rounded-[24px] sm:rounded-[2rem] p-8 sm:p-12 md:p-16 flex flex-col gap-8 hover:border-foreground/10 hover:bg-foreground/[0.04] transition-all duration-500 overflow-hidden">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.04] rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/[0.07] transition-all duration-700" />
                                
                                <div className="relative z-10">
                                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6">Start a Project</p>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tighter text-foreground mb-4 leading-tight">
                                        Ready to build something<br/>
                                        <span className="text-foreground/40">remarkable?</span>
                                    </h3>
                                    <p className="text-sm sm:text-base text-foreground/50 font-light leading-relaxed max-w-md">
                                        Fill out our project brief and get a tailored proposal within 24 hours. No generic quotes — just a precise scope and roadmap built for you.
                                    </p>
                                </div>

                                {/* What's inside preview */}
                                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {["Project Type", "Budget & Timeline", "Project Brief"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-foreground/[0.03] border border-foreground/[0.05] rounded-xl px-4 py-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                                            <span className="text-xs font-medium text-foreground/50">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10 flex items-center gap-3 text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors duration-300">
                                    Open the project form
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
