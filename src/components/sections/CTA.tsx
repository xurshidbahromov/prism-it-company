"use client";

import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ButtonWithIconDemo from "@/components/ui/ButtonWithIcon";

export function CTA() {
    return (
        <section id="contact" className="py-32 w-full relative z-10 overflow-hidden">

            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 md:py-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block"
                    >
                        Start Your Project
                    </motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground"
                    >
                        Ready to build <br/> 
                        <span className="text-foreground/40">something great?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/50 font-light mb-16 max-w-2xl leading-relaxed"
                    >
                        Let&apos;s create a digital experience that sets you apart from the competition. No fluff, just results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row shadow-[0_4px_40px_rgba(0,0,0,0.05)] dark:shadow-none items-center justify-center gap-6 w-full sm:w-auto p-4 rounded-3xl md:rounded-[2rem] bg-foreground/[0.02] border border-foreground/[0.05] backdrop-blur-xl"
                    >
                        {/* Primary Button */}
                        <ButtonWithIconDemo href="#contact" />

                        {/* Secondary Button */}
                        <Link href="mailto:hello@prism.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-foreground/5 text-foreground px-8 py-5 rounded-xl md:rounded-2xl text-base font-medium transition-all duration-300">
                            hello@prism.com
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
