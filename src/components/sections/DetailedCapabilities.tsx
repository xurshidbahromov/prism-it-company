"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import {
    PenTool, Code2, Cpu, Cloud,
    CheckCircle2, Layers, Search,
    Zap, Rocket, ShieldCheck,
    MessageSquare, Terminal,
    ArrowRight
} from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTypescript,
    SiTailwindcss, SiFigma, SiNodedotjs,
    SiPython, SiPostgresql, SiOpenai,
    SiDocker, SiKubernetes
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { cn } from "@/lib/cn";
import Link from "next/link";

const capabilities = [
    {
        id: "creative-design",
        title: "Creative UI/UX Design",
        tagline: "Human-Centered Digital Experiences",
        description: "We don't just 'design' interfaces — we engineer user journeys based on behavioral psychology and interaction data. Our goal is to create emotional resonance that drives logic-driven conversions.",
        icon: PenTool,
        color: "text-blue-400",
        bgGlow: "bg-blue-500/10",
        features: [
            "User Research & Journey Mapping",
            "High-Fidelity Interaction Prototyping",
            "Design Systems & Component Libraries",
            "Accessibility (WCAG) Auditing",
            "A/B Testing & Optimization"
        ],
        tech: [
            { icon: SiFigma, name: "Figma" },
            { icon: Layers, name: "Adobe CC" },
            { icon: Search, name: "Maze" }
        ]
    },
    {
        id: "full-stack",
        title: "Full-Stack Engineering",
        tagline: "Scalable. Resilient. High-Performance.",
        description: "Deploying production-ready applications built to handle millions of requests. We prioritize type-safety, efficient state management, and optimized delivery pipelines for 99.9% reliability.",
        icon: Code2,
        color: "text-emerald-400",
        bgGlow: "bg-emerald-500/10",
        features: [
            "Modern React/Next.js Architecture",
            "Type-Safe Backend (Node/Go/Python)",
            "Distributed Systems Design",
            "Real-time Data Streaming",
            "Performance Tuning & Core Web Vitals"
        ],
        tech: [
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiPostgresql, name: "PostgreSQL" }
        ]
    },
    {
        id: "ai-automation",
        title: "AI & Intelligent Automation",
        tagline: "Beyond Generative AI — True Intelligence",
        description: "We bridge the gap between AI hype and business value. From custom fine-tuned LLMs to autonomous workflow agents, we build intelligence into the fabric of your infrastructure.",
        icon: Cpu,
        color: "text-violet-400",
        bgGlow: "bg-violet-500/10",
        features: [
            "Custom LLM Fine-Tuning & RAG",
            "Predictive Analytics & Forecasting",
            "Autonomous Agents & Workflow Automation",
            "Natural Language Search (Vector DBs)",
            "Computer Vision & Pattern Recognition"
        ],
        tech: [
            { icon: SiOpenai, name: "OpenAI" },
            { icon: SiPython, name: "Python" },
            { icon: MessageSquare, name: "LangChain" },
            { icon: Terminal, name: "Pinecone" }
        ]
    },
    {
        id: "cloud-infra",
        title: "Cloud & Infrastructure",
        tagline: "Automated. Secure. Globally Scalable.",
        description: "DevOps is the heartbeat of modern software. We engineer automated ecosystems that allow your team to ship faster with confidence, using zero-trust security and infrastructure-as-code.",
        icon: Cloud,
        color: "text-cyan-400",
        bgGlow: "bg-cyan-500/10",
        features: [
            "IaC (Terraform / Pulumi)",
            "Kubernetes & Container Orchestration",
            "CI/CD Pipeline Automation",
            "Multi-Cloud & Edge Computing",
            "Zero-Trust Security & Compliance"
        ],
        tech: [
            { icon: FaAws, name: "AWS" },
            { icon: SiDocker, name: "Docker" },
            { icon: SiKubernetes, name: "K8s" },
            { icon: ShieldCheck, name: "Security" }
        ]
    }
];

export function DetailedCapabilities() {
    return (
        <section className="py-32 relative overflow-hidden">
            <Container>
                <div className="space-y-48 md:space-y-64">
                    {capabilities.map((cap, index) => (
                        <div key={cap.id} id={cap.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
                            {/* Section Background Glow — Contained */}
                            <div className={cn("absolute inset-0 opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0", cap.bgGlow)}></div>

                            {/* Information side (5 columns) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10 relative z-10"
                            >
                                <div className="space-y-6">
                                    <div className={cn("inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-foreground/[0.03] border border-foreground/[0.08] backdrop-blur-md", cap.color.replace('text-', 'text-opacity-80 text-'))}>
                                        <cap.icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">{cap.title.split(' ').slice(-1)}</span>
                                    </div>
                                    <h3 className="text-5xl md:text-6xl font-heading font-medium text-foreground tracking-tighter leading-[1.1]">
                                        {cap.title}
                                    </h3>
                                    <p className="text-xl text-foreground/40 font-light leading-relaxed max-w-md">
                                        {cap.tagline}
                                    </p>
                                </div>

                                <p className="text-lg text-foreground/60 leading-relaxed font-light max-w-lg">
                                    {cap.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5 pt-4">
                                    {cap.tech.map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 px-4 py-2.5 bg-foreground/[0.02] border border-foreground/[0.05] rounded-xl group/tech hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-500">
                                            <t.icon className="w-4 h-4 text-foreground/30 group-hover/tech:text-foreground transition-colors" />
                                            <span className="text-xs font-medium text-foreground/50 group-hover/tech:text-foreground">{t.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-10">
                                    <Link href="#contact" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground transition-all">
                                        <span className="border-b border-foreground/10 group-hover:border-foreground pb-1 transition-all">
                                            Inquire regarding {cap.title.split(' ').slice(-1)}
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 group-hover:scale-110 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Features side (7 columns) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {cap.features.map((feature, idx) => (
                                        <div 
                                            key={idx} 
                                            className="group relative bg-foreground/[0.02] border border-foreground/[0.06] backdrop-blur-sm p-8 flex flex-col justify-between rounded-3xl hover:bg-foreground/[0.04] hover:border-foreground/10 transition-all duration-500 min-h-[200px]"
                                        >
                                            <div className="mb-6">
                                                <div className={cn("w-1.5 h-10 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500", cap.bgGlow.replace('/10', '/60'))}></div>
                                            </div>
                                            <span className="text-lg md:text-xl text-foreground/80 font-medium tracking-tight leading-snug group-hover:text-foreground transition-colors duration-500">
                                                {feature}
                                            </span>
                                            
                                            {/* Subtle liquid glow on hover */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl overflow-hidden">
                                                <div className={cn("absolute -top-1/2 -left-1/2 w-full h-full opacity-10 blur-[80px]", cap.bgGlow)}></div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Decoration filler if odd */}
                                    {cap.features.length % 2 !== 0 && (
                                        <div className="hidden md:flex items-center justify-center p-8 rounded-3xl border border-dashed border-foreground/10 opacity-20">
                                            <div className="w-12 h-12 rounded-full border border-foreground/20 animate-pulse"></div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
