"use client";

import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

export function Process() {
    const steps = [
        {
            title: "Discovery & Architecture",
            desc: "Deep-dive into business logic, technical constraints, and long-term scaling vectors. We define the blueprint before writing a single line of code.",
            number: "01",
            color: "rgba(255, 255, 255, 0.15)" // White
        },
        {
            title: "Design System & UI/UX",
            desc: "Pixel-perfect, accessible, and kinetic interface engineering. We build comprehensive component libraries aligned with your core brand.",
            number: "02",
            color: "rgba(255, 255, 255, 0.15)" // White
        },
        {
            title: "Full-Stack Development",
            desc: "Agile sprints deploying secure, highly performant code. We leverage modern frameworks, cloud-native infra, and strict testing protocols.",
            number: "03",
            color: "rgba(255, 255, 255, 0.15)" // White
        },
        {
            title: "Launch & Iterate",
            desc: "Zero-downtime deployments, real-time telemetry, and continuous integration pipelines guaranteeing stability from Day 1 to Day 1000.",
            number: "04",
            color: "rgba(255, 255, 255, 0.15)" // White
        }
    ];

    return (
        <section id="process" className="pt-24 pb-32 relative z-10">

            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Side: Sticky Storytelling Title */}
                    <div className="w-full lg:w-5/12">
                        <div className="lg:sticky top-40 flex flex-col justify-start">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block"
                            >
                                Methodology
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground"
                            >
                                Execution without <br className="hidden lg:block"/>
                                <span className="text-foreground/40">compromise.</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-foreground/60 font-light leading-relaxed max-w-md mb-8"
                            >
                                We replace agency chaos with engineering discipline. Predictable velocity, transparent reporting, and elite code quality.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Side: Scrolling Steps */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-12">
                        {steps.map((step, idx) => (
                            <SpotlightCard
                                key={idx}
                                spotlightColor={step.color}
                                className="w-full relative group cursor-pointer p-8 md:p-12 hover:-translate-y-2 transition-transform duration-500 ease-out"
                            >
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                                    <div className="text-6xl md:text-7xl font-heading font-medium tracking-tight text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                                        {step.number}
                                    </div>
                                    <div className="flex flex-col justify-center max-w-lg">
                                        <h4 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4">
                                            {step.title}
                                        </h4>
                                        <p className="text-lg text-foreground/60 font-light leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
