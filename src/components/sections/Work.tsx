"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface WorkProps {
    showTitle?: boolean;
}

const projects = [
    {
        id: "fintech",
        title: "Fintech Core Banking",
        category: "Platform Engineering",
        description: "A high-frequency banking engine designed for global scale, handling millions of transactions with sub-millisecond latency.",
        metrics: ["+40% txn speed", "Zero downtime"],
        color: "rgba(59, 130, 246, 0.2)", // Blue
        image: "/projects/fintech.png"
    },
    {
        id: "healthcare",
        title: "Healthcare Data Sync",
        category: "Data Infrastructure",
        description: "HIPAA-compliant data synchronization layer enabling real-time genomic data sharing between research institutions.",
        metrics: ["HIPAA compliant", "Sub-second sync"],
        color: "rgba(16, 185, 129, 0.2)", // Emerald
        image: "/projects/healthcare.png"
    },
    {
        id: "retail",
        title: "Retail Automation",
        category: "Internal Tools",
        description: "Cloud-native inventory management system automating logistics for over 500+ retail locations worldwide.",
        metrics: ["-30% manual ops", "$1.2M saved/yr"],
        color: "rgba(245, 158, 11, 0.2)", // Amber
        image: "/projects/retail.png"
    }
];

export function Work({ showTitle = true }: WorkProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        // Set initial value
        checkMobile();
        // Add event listener
        window.addEventListener("resize", checkMobile);
        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="work" className="py-24 relative z-10">
            <Container>
                {showTitle && (
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
                                className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-foreground tracking-tighter leading-[1]"
                            >
                                Selected recent <br className="hidden md:block"/>
                                <span className="text-foreground/40">projects.</span>
                            </motion.h2>
                        </div>
                    </div>
                )}

                {/* Cinematic Project Showcase */}
                <div className="w-full flex flex-col pt-12">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                id={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="sticky w-full mb-12 lg:mb-20"
                                style={{
                                    top: `calc(80px + ${index * (isMobile ? 20 : 40)}px)`,
                                    zIndex: index + 10,
                                }}
                            >
                                <div className={cn(
                                    "flex flex-col lg:flex-row items-center gap-8 lg:gap-24 p-6 lg:p-12 rounded-[32px] md:rounded-[40px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] transition-all duration-700 hover:bg-white/[0.05] hover:border-white/[0.12]",
                                    !isEven && "lg:flex-row-reverse"
                                )}>
                                    
                                    {/* Visual Side: Mockup Container */}
                                    <div className="w-full lg:w-3/5 aspect-[16/10] relative rounded-[32px] overflow-hidden group/visual">
                                        {/* Abstract Glow in background */}
                                        <div 
                                            className="absolute inset-0 opacity-20 blur-[100px] pointer-events-none transition-transform duration-1000 group-hover/visual:scale-110"
                                            style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
                                        />
                                        
                                        {/* Pure Cinematic Number Overlay */}
                                        <div className="absolute top-4 left-4 text-9xl md:text-[14rem] font-heading font-black text-foreground/[0.02] select-none leading-none z-0">
                                            0{index + 1}
                                        </div>

                                        {/* The Mockup Display */}
                                        <div className="absolute inset-4 md:inset-8 rounded-[24px] overflow-hidden border border-white/10 shadow-2xl z-10 transition-transform duration-1000 group-hover/visual:scale-[1.02]">
                                            <div className="relative w-full h-full bg-white/[0.02]">
                                                <Image 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover/visual:scale-105"
                                                />
                                                {/* Liquid Glass Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-8">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                <span className="text-[10px] font-bold tracking-widest text-blue-500 uppercase">
                                                    {project.category}
                                                </span>
                                            </div>
                                            
                                            <h4 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground tracking-tight leading-[1.1]">
                                                {project.title}
                                            </h4>
                                            
                                            <p className="text-lg text-foreground/50 font-light leading-relaxed max-w-md">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Key Results / Metrics */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.metrics.map((metric, idx) => (
                                                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/[0.03] border border-foreground/[0.05]">
                                                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                                                    <span className="text-sm font-medium text-foreground/80 italic">{metric}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <div className="pt-4">
                                            <div className="group/btn flex items-center gap-6 cursor-pointer w-fit">
                                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 group-hover/btn:text-foreground transition-colors">
                                                    Explore Case Study
                                                </span>
                                                <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/[0.02] group-hover/btn:bg-blue-500 group-hover/btn:border-blue-500 transition-all duration-500 group-hover/btn:scale-110">
                                                    <ArrowRight className="w-5 h-5 group-hover/btn:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
