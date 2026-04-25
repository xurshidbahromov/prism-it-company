"use client";

import { Services } from "@/components/sections/Services";
import { DetailedCapabilities } from "@/components/sections/DetailedCapabilities";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ExpertisePage() {
    const t = useTranslations("ExpertisePage");
    return (
        <main className="relative overflow-hidden w-full">
            {/* Background Glows — Contained to prevent overflow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-foreground/[0.03] blur-[150px] rounded-full transition-opacity duration-1000"></div>
                <div className="absolute top-[40%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500/[0.02] blur-[120px] rounded-full transition-opacity duration-1000"></div>
            </div>

            <section className="pt-44 pb-20 md:pt-48 md:pb-32 relative z-10">
                <Container>
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
                </Container>
            </section>

            <FadeIn>
                <Services showViewAll={false} />
            </FadeIn>

            <Container className="pt-40 pb-12 overflow-hidden">
                <div className="max-w-3xl">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block"
                    >
                        {t('deepDive.badge')}
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.1]"
                    >
                        {t('deepDive.title')}
                    </motion.h2>
                </div>
            </Container>

            <FadeIn>
                <DetailedCapabilities />
            </FadeIn>

            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
