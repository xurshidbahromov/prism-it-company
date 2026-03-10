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
        <section className="py-24 relative overflow-hidden">
            <Container>
                <div className="space-y-40">
                    {capabilities.map((cap, index) => (
                        <div key={cap.id} id={cap.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            {/* Information side (4 columns) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-5 space-y-8"
                            >
                                <div className="space-y-4">
                                    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10", cap.color.replace('text-', 'text-opacity-70 text-'))}>
                                        <cap.icon className="w-3 h-3" strokeWidth={2} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{cap.title.split(' ').slice(-1)}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tighter leading-tight">
                                        {cap.title}
                                    </h3>
                                    <p className="text-lg text-foreground/40 font-light leading-relaxed">
                                        {cap.tagline}
                                    </p>
                                </div>

                                <p className="text-base text-foreground/60 leading-relaxed font-light">
                                    {cap.description}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {cap.tech.map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-foreground/[0.02] border border-foreground/5 rounded-lg group/tech hover:border-foreground/20 transition-all duration-500">
                                            <t.icon className="w-4 h-4 text-foreground/30 group-hover/tech:text-foreground transition-colors" />
                                            <span className="text-[11px] font-medium text-foreground/50 group-hover/tech:text-foreground">{t.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors">
                                        Inquire regarding {cap.title.split(' ').slice(-1)}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Features side (7 columns) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="lg:col-span-7"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
                                    {cap.features.map((feature, idx) => (
                                        <div key={idx} className="bg-background/80 backdrop-blur-sm p-8 flex flex-col justify-between hover:bg-background/40 transition-colors duration-500 min-h-[160px]">
                                            <div className="mb-4">
                                                <div className={cn("w-1 h-8 rounded-full opacity-30", cap.bgGlow.replace('/10', '/40'))}></div>
                                            </div>
                                            <span className="text-base text-foreground/80 font-medium tracking-tight leading-snug">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                    {/* Empty filler if odd */}
                                    {cap.features.length % 2 !== 0 && (
                                        <div className="bg-background/80 backdrop-blur-sm p-8 opacity-20"></div>
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
