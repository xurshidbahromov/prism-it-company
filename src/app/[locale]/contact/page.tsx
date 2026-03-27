"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Clock, ChevronRight, Instagram, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import confetti from "canvas-confetti";

const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#3b82f6', '#8b5cf6', '#ffffff'] // Brand colors
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#3b82f6', '#8b5cf6', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };
    frame();
};

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleType = (id: string) => {
        setSelectedTypes((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        
        // Add Web3Forms access key
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
        if (!accessKey) {
            alert("Xatolik: Web3Forms kaliti (NEXT_PUBLIC_WEB3FORMS_KEY) topilmadi. Sozlamalarni tekshiring.");
            return;
        }
        formData.append("access_key", accessKey);
        
        // Add custom state-driven fields
        formData.append("Project Types", selectedTypes.length > 0 ? selectedTypes.join(", ") : "None selected");
        formData.append("Timeline/Budget", selectedTimeline);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                triggerConfetti();
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                console.error("Form error:", data);
                alert("Xatolik: Xabar yuborilmadi. Qayta urinib ko'ring.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Tarmoq xatosi. Iltimos kuting va qayta urinib ko'ring.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Background glow - constrained so won't cause horizontal overflow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none overflow-hidden" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px] pointer-events-none overflow-hidden" />

            <Container>
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div 
                            key="form-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.96 }}
                            transition={{ duration: 0.5 }}
                            className="pt-44 pb-20 md:pt-48 md:pb-32 relative z-10"
                        >

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
                        <div className="lg:col-span-7">
                            <form
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
                                                    <input name="name" required type="text" placeholder="Alex Chen" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Email *</label>
                                                    <input name="email" required type="email" placeholder="alex@company.com" className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Company</label>
                                                    <input name="company" type="text" placeholder="Acme Inc." className={inputClass} />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Phone (optional)</label>
                                                    <input name="phone" type="tel" placeholder="+998 90 123 45 67" className={inputClass} />
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
                                                        name="message"
                                                        required
                                                        rows={5}
                                                        placeholder="Describe your project, goals, and any specific requirements. The more detail, the better our proposal..."
                                                        className={cn(inputClass, "resize-none")}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Reference or Inspiration URL (optional)</label>
                                                    <input name="reference_url" type="url" placeholder="https://example.com" className={inputClass} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative w-full sm:w-auto sm:self-start flex items-center justify-center gap-3 bg-foreground text-background px-8 sm:px-10 py-4 sm:py-5 rounded-[24px] text-base font-semibold transition-all duration-500 hover:px-14 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:px-8 sm:disabled:hover:px-10 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                                {isSubmitting ? "Sending..." : "Submit Your Brief"}
                                            </span>
                                            {!isSubmitting && <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />}
                                        </button>
                                    </form>
                        </div>

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
                                    { icon: Mail, label: "Email", value: "xurshidbahromov06@gmail.com", href: "mailto:xurshidbahromov06@gmail.com" },
                                    { icon: Phone, label: "Phone", value: "+998 94 101 26 80", href: "tel:+998941012680" },
                                    { icon: MapPin, label: "Office", value: "Tashkent, Uzbekistan", href: "#" },
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

                            {/* Interactive Map */}
                            {/* Interactive Map */}
                            <div className="h-64 sm:h-80 lg:h-[360px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-foreground/[0.06] relative group mt-2">
                                {/* Subtle blue overlay to match brand */}
                                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none z-10 transition-colors duration-500 group-hover:bg-transparent" />
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263717281!2d69.13085278786968!3d41.2825125464132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1711200000000!5m2!1sen!2s" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(85%) grayscale(20%)" }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 mt-2">
                                {[
                                    { icon: Instagram, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Send, href: "#" }, // Telegram
                                ].map((social, i) => (
                                    <a 
                                        key={i} 
                                        href={social.href} 
                                        className="w-12 h-12 rounded-full border border-foreground/[0.08] flex items-center justify-center text-foreground/40 hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>
                        </motion.aside>
                    </div>
                </motion.div>
                ) : (
                    <motion.div
                        key="success-view"
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        className="pt-44 md:pt-48 pb-36 lg:pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center relative z-10"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-8 border border-blue-500/20">
                            <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-medium tracking-tighter text-foreground mb-6">
                            Brief received.
                        </h2>
                        <p className="text-xl md:text-2xl text-foreground/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                            Thank you! Our team will review your project brief and reach out within 24 hours with a tailored proposal.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground/[0.03] hover:bg-foreground/[0.08] border border-foreground/[0.06] rounded-full text-base font-medium transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                            Submit another brief
                        </button>
                    </motion.div>
                )}
                </AnimatePresence>
            </Container>
        </div>
    );
}
