"use client";

import { Process } from "@/components/sections/Process";
import { Tabs } from "@/components/sections/Tabs";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function ProcessPage() {
    return (
        <main className="relative">
            {/* Background Glows — Shrink to prevent overflow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[5%] right-[-10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-foreground/[0.02] blur-[150px] rounded-full transition-opacity duration-1000"></div>
                <div className="absolute top-[35%] left-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500/[0.01] blur-[120px] rounded-full transition-opacity duration-1000"></div>
                <div className="absolute top-[65%] right-[5%] w-[450px] md:w-[900px] h-[450px] md:h-[900px] bg-foreground/[0.02] blur-[150px] rounded-full transition-opacity duration-1000"></div>
            </div>

            {/* 1. Hero Section */}
            <section className="pt-44 pb-20 md:pt-48 md:pb-32 relative z-10">
                <Container>
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl"
                    >
                        Built with <br className="hidden md:block" />
                        <span className="text-foreground/40">precision.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl leading-relaxed"
                    >
                        Protocol-driven engineering that replaces agency chaos with predictable excellence.
                    </motion.p>
                </Container>
            </section>

            <Process />

            <FadeIn>
                <Tabs />
            </FadeIn>

            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
