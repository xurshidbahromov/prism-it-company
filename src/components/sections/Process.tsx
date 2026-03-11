"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const StepCard = ({ step, idx }: { step: any; idx: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            transition={{ 
                duration: 1, 
                delay: idx * 0.05,
                ease: [0.19, 1, 0.22, 1] 
            }}
            className="group relative bg-foreground/[0.02] border border-foreground/[0.06] backdrop-blur-xl p-8 md:p-12 rounded-[32px] hover:border-foreground/10 transition-colors duration-700 overflow-hidden"
        >
            {/* Mouse Spotlight Glow */}
            <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
                }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div className="text-7xl md:text-8xl font-heading font-medium tracking-tighter text-foreground/[0.03] group-hover:text-blue-500/10 transition-all duration-700 shrink-0 leading-none">
                    {step.number}
                </div>
                <div className="flex flex-col justify-center space-y-4">
                    <h4 className="text-2xl md:text-3xl font-heading font-medium text-foreground tracking-tight">
                        {step.title}
                    </h4>
                    <p className="text-base md:text-lg text-foreground/50 font-light leading-relaxed max-w-lg">
                        {step.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const steps = [
    {
        title: "Discovery & Architecture",
        desc: "Deep-dive into business logic, technical constraints, and long-term scaling vectors. We define the blueprint before writing a single line of code.",
        number: "01",
    },
    {
        title: "Design System & UI/UX",
        desc: "Pixel-perfect, accessible, and kinetic interface engineering. We build comprehensive component libraries aligned with your core brand.",
        number: "02",
    },
    {
        title: "Full-Stack Development",
        desc: "Agile sprints deploying secure, highly performant code. We leverage modern frameworks, cloud-native infra, and strict testing protocols.",
        number: "03",
    },
    {
        title: "Launch & Iterate",
        desc: "Zero-downtime deployments, real-time telemetry, and continuous integration pipelines guaranteeing stability from Day 1 to Day 1000.",
        number: "04",
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 relative z-10">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative items-start">

                    {/* Left Side: Sticky Storytelling Title */}
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-fit">
                        <div className="flex flex-col justify-start">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block"
                            >
                                Method
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1] mb-10 text-foreground"
                            >
                                Protocol <br className="hidden lg:block"/>
                                <span className="text-foreground/40">Mindset.</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-foreground/50 font-light leading-relaxed max-w-md"
                            >
                                We've engineered our process to eliminate ambiguity. From the first line of architecture to the final deployment, every step is governed by data and discipline.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Side: Scrolling Steps */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-12">
                        {steps.map((step, idx) => (
                            <StepCard key={idx} step={step} idx={idx} />
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
