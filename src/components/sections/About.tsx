"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const statKeys = ["enterprise", "revenue", "industry", "countries"] as const;

const teamMemberKeys = ["alex", "sara", "james", "mia"] as const;

const valueKeys = ["engineering", "transparency", "outcomes"] as const;

const valueNumbers = {
    engineering: "01",
    transparency: "02",
    outcomes: "03",
};

const teamMemberNames = {
    alex: "Alex Chen",
    sara: "Sara Kim",
    james: "James Liu",
    mia: "Mia Patel",
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20px" },
};

export function About() {
    const t = useTranslations("About");

    return (
        <div>
            {/* 1. Hero / Manifesto */}
            <section className="pt-44 pb-20 md:pt-48 md:pb-32 relative z-10">
                <Container>
                    <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-8 block">
                        {t("hero.badge")}
                    </motion.span>
                    <motion.h1
                        {...fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground max-w-5xl"
                    >
                        {t("hero.titleMain")} <br className="hidden md:block" />
                        <span className="text-foreground/40">{t("hero.titleHighlight")}</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl leading-relaxed"
                    >
                        {t("hero.subtext")}
                    </motion.p>
                </Container>
            </section>

            {/* 2. Stats Row */}
            <section className="py-16 border-t border-b border-foreground/[0.05] relative z-10">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
                        {statKeys.map((key, i) => {
                            // Define static values since they are not in translations (usually numbers don't change by locale)
                            const valuesData = {
                                enterprise: "50+",
                                revenue: "$120M+",
                                industry: "8 yrs",
                                countries: "12",
                            };

                            return (
                                <motion.div
                                    key={key}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tighter text-foreground mb-2">
                                        {valuesData[key]}
                                    </span>
                                    <span className="text-sm text-foreground/40 font-medium uppercase tracking-widest">
                                        {t(`stats.${key}`)}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* 3. Mission Statement */}
            <section className="py-32 relative z-10">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-32">
                        <div className="w-full lg:w-5/12">
                            <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                                {t("mission.badge")}
                            </motion.span>
                            <motion.h2
                                {...fadeUp}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                            >
                                {t("mission.titleMain")} <br />
                                <span className="text-foreground/40">{t("mission.titleHighlight")}</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.2 }}
                            className="w-full lg:w-7/12 flex flex-col gap-8 justify-center"
                        >
                            <p className="text-xl text-foreground/70 font-light leading-relaxed">
                                {t("mission.p1")}
                            </p>
                            <p className="text-xl text-foreground/70 font-light leading-relaxed">
                                {t("mission.p2")}
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
                            {t("team.badge")}
                        </motion.span>
                        <motion.h2
                            {...fadeUp}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                        >
                            {t("team.titleMain")} <br />
                            <span className="text-foreground/40">{t("team.titleHighlight")}</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMemberKeys.map((key, i) => {
                            const name = teamMemberNames[key];
                            const role = t(`team.members.${key}.role`);
                            const bio = t(`team.members.${key}.bio`);

                            return (
                                <motion.div
                                    key={key}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-foreground/[0.02] border border-foreground/[0.05] rounded-2xl p-5 sm:p-8 flex flex-col gap-4 hover:bg-foreground/[0.04] transition-colors duration-500"
                                >
                                    {/* Avatar placeholder */}
                                    <div className="w-14 h-14 rounded-full bg-foreground/[0.06] border border-foreground/[0.08] flex items-center justify-center text-foreground/20 font-heading font-bold text-xl">
                                        {name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-heading font-medium text-lg text-foreground mb-1">{name}</div>
                                        <div className="text-xs uppercase tracking-widest text-blue-500/80 font-medium">{role}</div>
                                    </div>
                                    <p className="text-sm text-foreground/50 font-light leading-relaxed">{bio}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* 5. Values */}
            <section className="py-32 border-t border-foreground/[0.05] relative z-10">
                <Container>
                    <div className="mb-20">
                        <motion.span {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                            {t("values.badge")}
                        </motion.span>
                        <motion.h2
                            {...fadeUp}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground"
                        >
                            {t("values.titleMain")} <br />
                            <span className="text-foreground/40">{t("values.titleHighlight")}</span>
                        </motion.h2>
                    </div>
                    <div className="flex flex-col">
                        {valueKeys.map((key, i) => {
                            const number = valueNumbers[key];
                            const title = t(`values.items.${key}.title`);
                            const desc = t(`values.items.${key}.desc`);

                            return (
                                <motion.div
                                    key={key}
                                    {...fadeUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-t border-foreground/[0.05] group"
                                >
                                    <div className="text-5xl font-heading font-medium text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 w-20 shrink-0">
                                        {number}
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-16 flex-1">
                                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground tracking-tight md:w-1/3 shrink-0">
                                            {title}
                                        </h3>
                                        <p className="text-lg text-foreground/60 font-light leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                        {/* Last border */}
                        <div className="border-t border-foreground/[0.05]" />
                    </div>
                </Container>
            </section>
        </div>
    );
}

