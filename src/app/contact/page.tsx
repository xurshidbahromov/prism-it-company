"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const projectTypes = [
    { id: "web", label: "Web Application", desc: "SaaS, internal tools, platforms" },
    { id: "mobile", label: "Mobile App", desc: "iOS, Android, React Native" },
    { id: "design", label: "UI/UX Design", desc: "Brand identity, design system" },
    { id: "ai", label: "AI Integration", desc: "LLMs, automation, agents" },
    { id: "cloud", label: "Cloud & DevOps", desc: "Infrastructure, CI/CD, migration" },
    { id: "other", label: "Something Else", desc: "Let's talk about it" },
];

const budgetRanges = [
    { id: "10-25k", label: "$10k – $25k" },
    { id: "25-50k", label: "$25k – $50k" },
    { id: "50-100k", label: "$50k – $100k" },
    { id: "100k+", label: "$100k+" },
];

const timelineOptions = [
    { id: "asap", label: "ASAP" },
    { id: "1-3m", label: "1 – 3 months" },
    { id: "3-6m", label: "3 – 6 months" },
    { id: "6m+", label: "6+ months" },
];

const inputClass = "w-full px-5 py-4 bg-foreground/[0.03] border border-foreground/10 rounded-[16px] focus:outline-none focus:border-blue-500/50 focus:bg-foreground/[0.05] transition-all duration-300 text-foreground placeholder:text-foreground/20 text-[15px]";

export default function ContactPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [selectedTimeline, setSelectedTimeline] = useState<string>("");
    const [submitted, setSubmitted] = useState(false);

    const toggleType = (id: string) => {
        setSelectedTypes((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Background glow - constrained so won't cause horizontal overflow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none overflow-hidden" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px] pointer-events-none overflow-hidden" />

            <Container>
                    {/* 1. Hero Section */}
                    <div className="pt-44 pb-20 md:pt-48 md:pb-32 relative z-10">

                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-10 md:mb-16 lg:mb-24"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                            Start a Project
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl">
                            Let's build something{" "}
                            <span className="text-foreground/40">remarkable.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl leading-relaxed">
                            Tell us about your project. We'll review your brief and respond within 24 hours with a tailored proposal.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 xl:gap-20 items-start relative">

                        {/* Left — Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                            className="lg:col-span-7"
                        >
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-8 sm:gap-10"
                                    >
                                        {/* Step 1: About You */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[11px] font-bold text-blue-400">01</span>
                                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">About You</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Full Name *</label>
                                                    <input required type="text" placeholder="Alex Chen" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Email *</label>
                                                    <input required type="email" placeholder="alex@company.com" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Company</label>
                                                    <input type="text" placeholder="Acme Inc." className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Phone (optional)</label>
                                                    <input type="tel" placeholder="+1 555 000 0000" className={inputClass} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-foreground/[0.06]" />

                                        {/* Step 2: Project Type */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[11px] font-bold text-blue-400">02</span>
                                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Project Type</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                                                {projectTypes.map((type) => {
                                                    const active = selectedTypes.includes(type.id);
                                                    return (
                                                        <button
                                                            key={type.id}
                                                            type="button"
                                                            onClick={() => toggleType(type.id)}
                                                            className={cn(
                                                                "group relative text-left p-4 rounded-[16px] border transition-all duration-300",
                                                                active
                                                                    ? "bg-blue-500/10 border-blue-500/40 text-foreground"
                                                                    : "bg-foreground/[0.02] border-foreground/[0.06] hover:border-foreground/20 hover:bg-foreground/[0.04]"
                                                            )}
                                                        >
                                                            <div className="text-sm font-semibold text-foreground mb-1">{type.label}</div>
                                                            <div className="text-xs text-foreground/40 font-light">{type.desc}</div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-foreground/[0.06]" />

                                        {/* Step 3: Budget + Timeline */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[11px] font-bold text-blue-400">03</span>
                                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Budget & Timeline</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="flex flex-col gap-3">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Budget Range</label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {budgetRanges.map((b) => (
                                                            <button
                                                                key={b.id}
                                                                type="button"
                                                                onClick={() => setSelectedBudget(b.id)}
                                                                className={cn(
                                                                    "px-4 py-3 rounded-[12px] border text-sm font-medium transition-all duration-200",
                                                                    selectedBudget === b.id
                                                                        ? "bg-blue-500/10 border-blue-500/40 text-blue-400"
                                                                        : "bg-foreground/[0.02] border-foreground/[0.06] text-foreground/60 hover:border-foreground/20"
                                                                )}
                                                            >
                                                                {b.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Timeline</label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {timelineOptions.map((t) => (
                                                            <button
                                                                key={t.id}
                                                                type="button"
                                                                onClick={() => setSelectedTimeline(t.id)}
                                                                className={cn(
                                                                    "px-4 py-3 rounded-[12px] border text-sm font-medium transition-all duration-200",
                                                                    selectedTimeline === t.id
                                                                        ? "bg-blue-500/10 border-blue-500/40 text-blue-400"
                                                                        : "bg-foreground/[0.02] border-foreground/[0.06] text-foreground/60 hover:border-foreground/20"
                                                                )}
                                                            >
                                                                {t.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-foreground/[0.06]" />

                                        {/* Step 4: Brief */}
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[11px] font-bold text-blue-400">04</span>
                                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/40">Project Brief</span>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Project Summary *</label>
                                                    <textarea
                                                        required
                                                        rows={5}
                                                        placeholder="Describe your project, goals, and any specific requirements. The more detail, the better our proposal..."
                                                        className={cn(inputClass, "resize-none")}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Reference or Inspiration URL (optional)</label>
                                                    <input type="url" placeholder="https://example.com" className={inputClass} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="group relative w-full sm:w-auto sm:self-start flex items-center justify-center gap-3 bg-foreground text-background px-8 sm:px-10 py-4 sm:py-5 rounded-[24px] text-base font-semibold transition-all duration-500 sm:hover:px-14 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Submit Your Brief</span>
                                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-start gap-8 py-16"
                                    >
                                        <div className="w-12 h-[2px] bg-blue-500 rounded-full" />
                                        <div>
                                            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tighter text-foreground mb-4">
                                                Brief received.
                                            </h2>
                                            <p className="text-xl text-foreground/50 font-light leading-relaxed max-w-lg">
                                                Thank you! Our team will review your project brief and reach out within 24 hours with a tailored proposal.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="flex items-center gap-2 text-sm font-medium text-foreground/40 hover:text-foreground transition-colors"
                                        >
                                            <ChevronRight className="w-4 h-4 rotate-180" />
                                            Submit another brief
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Right — Info Panel */}
                        <motion.aside
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32"
                        >
                            {/* Response Promise */}
                            <div className="relative rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 bg-foreground/[0.02] border border-foreground/[0.06] overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
                                <div className="relative z-10">
                                    <Clock className="w-8 h-8 text-blue-500 mb-5" strokeWidth={1.5} />
                                    <h3 className="text-xl font-heading font-medium text-foreground mb-3">24hr Response</h3>
                                    <p className="text-sm text-foreground/50 font-light leading-relaxed">
                                        We review every project brief personally and respond with a detailed proposal — no auto-replies, no generic quotes.
                                    </p>
                                </div>
                            </div>

                            {/* What to expect */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xs uppercase tracking-widest text-foreground/30 font-bold">What happens next</h3>
                                {[
                                    { step: "01", title: "Brief Review", desc: "Our team reviews your submission and clarifies any questions." },
                                    { step: "02", title: "Discovery Call", desc: "A 30-min kickoff to align on goals, scope, and timeline." },
                                    { step: "03", title: "Tailored Proposal", desc: "You receive a precise quote and phased project roadmap." },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4 items-start group">
                                        <div className="w-8 h-8 shrink-0 rounded-full bg-foreground/[0.04] border border-foreground/[0.08] flex items-center justify-center text-[10px] font-bold text-foreground/30 mt-0.5">
                                            {item.step}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-foreground mb-0.5">{item.title}</div>
                                            <div className="text-xs text-foreground/40 font-light leading-relaxed">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-foreground/[0.06]" />

                            {/* Contact Info */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-xs uppercase tracking-widest text-foreground/30 font-bold">Prefer to reach out directly?</h3>
                                {[
                                    { icon: Mail, label: "Email", value: "hello@prism.dev", href: "mailto:hello@prism.dev" },
                                    { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                                    { icon: MapPin, label: "Office", value: "San Francisco, CA", href: "#" },
                                ].map((item) => (
                                    <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-300">
                                            <item.icon className="w-4 h-4 text-foreground/40 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-widest text-foreground/30 mb-0.5">{item.label}</div>
                                            <div className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </Container>
        </div>
    );
}
