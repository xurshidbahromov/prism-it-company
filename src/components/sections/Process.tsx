"use client";

import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Process() {
    const steps = [
        {
            title: "Discovery & Architecture",
            desc: "Deep-dive into business logic, technical constraints, and long-term scaling vectors. We define the blueprint before writing a single line of code.",
            number: "01",
            color: "rgba(79, 70, 229, 0.15)" // Indigo
        },
        {
            title: "Design System & UI/UX",
            desc: "Pixel-perfect, accessible, and kinetic interface engineering. We build comprehensive component libraries aligned with your core brand.",
            number: "02",
            color: "rgba(236, 72, 153, 0.15)" // Pink
        },
        {
            title: "Full-Stack Development",
            desc: "Agile sprints deploying secure, highly performant code. We leverage modern frameworks, cloud-native infra, and strict testing protocols.",
            number: "03",
            color: "rgba(16, 185, 129, 0.15)" // Emerald
        },
        {
            title: "Launch & Iterate",
            desc: "Zero-downtime deployments, real-time telemetry, and continuous integration pipelines guaranteeing stability from Day 1 to Day 1000.",
            number: "04",
            color: "rgba(245, 158, 11, 0.15)" // Amber
        }
    ];

    return (
        <section id="process" className="bg-background pt-24 pb-32 relative z-10 overflow-hidden">
            {/* Soft background glow (Adaptive) */}
            <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen transition-opacity duration-1000"></div>

            <Container>
                <div className="mb-20 text-center mx-auto max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium text-foreground tracking-tight leading-[1.1] mb-6">
                        Our <br />
                        <span className="font-bold italic font-script text-accent">Creative</span> Process
                    </h2>
                    <p className="text-lg text-foreground/60 font-light leading-relaxed">
                        A transparent, data-driven approach designed to deliver exceptional results.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Side: Sticky Storytelling Title */}
                    <div className="w-full lg:w-5/12">
                        <div className="sticky top-40 flex flex-col justify-start">
                            <h2 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                                Delivery Methodology
                            </h2>
                            <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tight leading-tight mb-8 text-foreground">
                                Execution without <span className="text-foreground/40 italic font-serif">compromise.</span>
                            </h3>
                            <p className="text-xl text-foreground/60 font-light leading-relaxed max-w-md">
                                We replace agency chaos with engineering discipline. Predictable velocity, transparent reporting, and elite code quality.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Scrolling Steps */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-12">
                        {steps.map((step, idx) => (
                            <SpotlightCard
                                key={idx}
                                spotlightColor={step.color}
                                className="w-full relative group cursor-pointer p-8 md:p-12 hover:-translate-y-2 transition-transform duration-500 ease-out border-foreground/10 bg-background/50"
                            >
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                                    <div className="text-7xl font-heading font-black tracking-tighter text-foreground/5 group-hover:text-foreground/10 transition-colors">
                                        {step.number}
                                    </div>
                                    <div className="flex flex-col justify-center">
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
