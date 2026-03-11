"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Enterprise Clients" },
    { value: "$120M+", label: "Client Revenue Generated" },
    { value: "8 yrs", label: "In the Industry" },
    { value: "12", label: "Countries Served" },
];

const team = [
    {
        name: "Alex Chen",
        role: "Founder & CEO",
        bio: "Ex-Google engineer with 12 years building scalable systems. Believes great software is 80% thinking, 20% code.",
    },
    {
        name: "Sara Kim",
        role: "Head of Design",
        bio: "Former lead designer at a Series B fintech. Obsessed with the space between pixels and the human experience.",
    },
    {
        name: "James Liu",
        role: "CTO",
        bio: "Infrastructure architect turned product engineer. Built systems that process 10M+ transactions daily.",
    },
    {
        name: "Mia Patel",
        role: "Head of Delivery",
        bio: "Keeps every project on time, on spec, and on budget — all while making it look effortless.",
    },
];

const values = [
    {
        number: "01",
        title: "Engineering First",
        desc: "We don't ship fast — we ship right. Every decision is driven by technical excellence, not shortcuts.",
    },
    {
        number: "02",
        title: "Radical Transparency",
        desc: "No black boxes. We work alongside your team with full visibility into process, timelines, and trade-offs.",
    },
    {
        number: "03",
        title: "Outcomes Over Output",
        desc: "Lines of code don't matter. What matters is measurable business impact — velocity, retention, revenue.",
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

export function About() {
    return (
        <div>
            {/* 1. Hero / Manifesto */}
            <section className="pt-32 pb-24 relative z-10">
                <Container>
                    <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block">
                        About Us
                    </motion.span>
                    <motion.h1
                        {...fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl"
                    >
                        We don't just build <br className="hidden md:block" />
                        <span className="text-foreground/40">software.</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl leading-relaxed"
                    >
                        We architect digital infrastructure that powers the next generation of ambitious companies.
                    </motion.p>
                </Container>
            </section>

            {/* 2. Stats Row */}
            <section className="py-16 border-t border-b border-foreground/[0.05] relative z-10">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col"
                            >
                                <span className="text-4xl md:text-5xl font-heading font-medium tracking-tighter text-foreground mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-foreground/40 font-medium uppercase tracking-widest">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 3. Mission Statement */}
            <section className="py-32 relative z-10">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="w-full lg:w-5/12">
                            <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                                Who We Are
                            </motion.span>
                            <motion.h2
                                {...fadeUp}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                            >
                                A team of builders, <br />
                                <span className="text-foreground/40">not just coders.</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.2 }}
                            className="w-full lg:w-7/12 flex flex-col gap-8 justify-center"
                        >
                            <p className="text-xl text-foreground/70 font-light leading-relaxed">
                                PRISM was founded on a simple idea: the best software teams in the world shouldn't be gatekept behind Silicon Valley zip codes. We built a distributed team of elite engineers and designers who operate with the rigour of a product company — not a traditional agency.
                            </p>
                            <p className="text-xl text-foreground/70 font-light leading-relaxed">
                                Today, we partner with startups scaling their first platform and enterprises re-architecting legacy systems alike. What unites all our work is an unwillingness to compromise on quality.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* 4. Team */}
            <section className="py-32 border-t border-foreground/[0.05] relative z-10">
                <Container>
                    <div className="mb-20">
                        <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                            The Team
                        </motion.span>
                        <motion.h2
                            {...fadeUp}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                        >
                            The people behind <br />
                            <span className="text-foreground/40">the product.</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="bg-foreground/[0.02] border border-foreground/[0.05] rounded-2xl p-8 flex flex-col gap-4 hover:bg-foreground/[0.04] transition-colors duration-500"
                            >
                                {/* Avatar placeholder */}
                                <div className="w-14 h-14 rounded-full bg-foreground/[0.06] border border-foreground/[0.08] flex items-center justify-center text-foreground/20 font-heading font-bold text-xl">
                                    {member.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-heading font-medium text-lg text-foreground mb-1">{member.name}</div>
                                    <div className="text-xs uppercase tracking-widest text-blue-500/80 font-medium">{member.role}</div>
                                </div>
                                <p className="text-sm text-foreground/50 font-light leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. Values */}
            <section className="py-32 border-t border-foreground/[0.05] relative z-10">
                <Container>
                    <div className="mb-20">
                        <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                            Our Principles
                        </motion.span>
                        <motion.h2
                            {...fadeUp}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                        >
                            How we work, <br />
                            <span className="text-foreground/40">and why it matters.</span>
                        </motion.h2>
                    </div>
                    <div className="flex flex-col">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-t border-foreground/[0.05] group"
                            >
                                <div className="text-5xl font-heading font-medium text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 w-20 shrink-0">
                                    {val.number}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-16 flex-1">
                                    <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground tracking-tight md:w-1/3 shrink-0">
                                        {val.title}
                                    </h3>
                                    <p className="text-lg text-foreground/60 font-light leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Last border */}
                        <div className="border-t border-foreground/[0.05]" />
                    </div>
                </Container>
            </section>
        </div>
    );
}

