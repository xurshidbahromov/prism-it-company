"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const TABS_CONTENT = [
    {
        id: "reliability",
        label: "Reliability",
        title: "Engineered for maximum stability.",
        description: "We build systems that don't just work on day one, but scale elegantly as your user base grows.",
        bullets: [
            "Zero-downtime deployment strategies",
            "Automated testing and QA pipelines",
            "Infrastructure as code (IaC)",
        ]
    },
    {
        id: "transparency",
        label: "Transparency",
        title: "Clear communication, predictable delivery.",
        description: "No black boxes. You have full visibility into our codebase, sprint progress, and decision-making.",
        bullets: [
            "Weekly progress and velocity reports",
            "Direct access to engineering leads",
            "Open architecture documentation",
        ]
    },
    {
        id: "scale",
        label: "Scale",
        title: "Architected for tomorrow.",
        description: "We don't take shortcuts. Every line of code is written with future feature expansions in mind.",
        bullets: [
            "Microservices and serverless ready",
            "Global CDN and edge computing",
            "Optimized database schemas",
        ]
    },
    {
        id: "growth",
        label: "Growth",
        title: "Aligned with your business metrics.",
        description: "Technology is a tool for growth. We optimize for conversion, retention, and performance.",
        bullets: [
            "Technical SEO foundations",
            "Core Web Vitals optimization",
            "A/B testing infrastructure",
        ]
    }
];

export function Tabs() {
    const [activeTab, setActiveTab] = useState(TABS_CONTENT[0].id);

    const activeContent = TABS_CONTENT.find((tab) => tab.id === activeTab)!;

    return (
        <section className="section-padding overflow-hidden relative">
            <div className="bg-fog absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10 rounded-full opacity-40"></div>

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                        Delivery without doubt
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
                        The PRISM Standard
                    </h3>
                </div>

                <div className="grid grid-cols-12 gap-8 lg:gap-16">
                    {/* Tabs Navigation - 4 cols */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
                        {TABS_CONTENT.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "text-left px-5 py-4 rounded-xl font-heading font-semibold text-lg transition-all whitespace-nowrap md:whitespace-normal",
                                    activeTab === tab.id
                                        ? "bg-white/10 text-white shadow-glass border border-white/10"
                                        : "text-text-muted hover:bg-white/5 hover:text-white border border-transparent"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content - 8 cols */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-9">
                        <Card hoverable={false} className="h-full border-white/5 bg-background/50">
                            <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                {activeContent.title}
                            </h4>
                            <p className="text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                                {activeContent.description}
                            </p>

                            <ul className="space-y-4">
                                {activeContent.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                                        </div>
                                        <span className="text-text-muted font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}
