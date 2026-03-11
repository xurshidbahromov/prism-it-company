"use client";

import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Work() {
    const projects = [
        {
            title: "Fintech Core Banking",
            category: "Platform Engineering",
            metrics: ["+40% txn speed", "Zero downtime"],
            color: "rgba(79, 70, 229, 0.15)", // Indigo
        },
        {
            title: "Healthcare Data Sync",
            category: "Data Infrastructure",
            metrics: ["HIPAA compliant", "Sub-second sync"],
            color: "rgba(16, 185, 129, 0.15)", // Emerald
        },
        {
            title: "Retail Automation",
            category: "Internal Tools",
            metrics: ["-30% manual ops", "$1.2M saved/yr"],
            color: "rgba(245, 158, 11, 0.15)", // Amber
        }
    ];

    return (
        <section id="work" className="pt-24 pb-32 relative z-10">
            <Container>
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-4 block"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.05]"
                        >
                            Selected recent <br className="hidden md:block"/>
                            <span className="text-foreground/40">projects.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Cinematic Alternating Projects */}
                <div className="w-full flex flex-col pt-12">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="sticky w-full py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center bg-background/95 backdrop-blur-2xl border-t border-foreground/5 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_-20px_rgba(255,255,255,0.02)]"
                                style={{
                                    top: `calc(100px + ${index * 40}px)`,
                                    zIndex: index + 10,
                                }}
                            >
                                {/* Visual Side */}
                                <div className={`w-full lg:w-1/2 justify-center aspect-[4/3] rounded-3xl bg-foreground/[0.02] relative overflow-hidden flex items-center group/visual ${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-foreground/5 blur-3xl transform group-hover/visual:scale-110 transition-transform duration-1000 ease-out"></div>
                                    <div className="text-foreground/5 font-heading font-black text-6xl md:text-9xl tracking-tighter mix-blend-overlay select-none transition-transform duration-1000 group-hover/visual:scale-105">
                                        0{index + 1}
                                    </div>
                                    {/* Abstract Accent Color representation (simulating a project image/gradient) */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-1000 mix-blend-overlay"
                                        style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
                                    />
                                </div>

                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''} group`}>
                                    <div className="text-sm font-medium tracking-widest text-foreground/40 uppercase mb-6">
                                        {project.category}
                                    </div>
                                    
                                    <h4 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-foreground mb-10 tracking-tight leading-[1.1]">
                                        {project.title}
                                    </h4>

                                    <div className="flex flex-wrap gap-4 mb-14">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className="px-6 py-4 rounded-2xl bg-foreground/[0.03] border border-transparent group-hover:border-foreground/[0.05] transition-colors duration-500">
                                                <span className="text-base font-medium text-foreground tracking-wide">{metric}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-foreground/80 group-hover:text-foreground transition-colors w-fit group/btn cursor-pointer">
                                        <span className="text-xl font-medium mr-6 border-b border-transparent group-hover:border-foreground/20 pb-1 transition-all">Explore Case Study</span>
                                        <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/5 group-hover/btn:bg-foreground/10 group-hover/btn:scale-110 transition-all duration-300">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
