import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowRight } from "lucide-react";

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
        <section id="work" className="pt-24 pb-48 bg-background relative z-10 border-b border-white/5">
            <Container>
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                            Selected Work
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tight leading-tight">
                            Impact at <span className="text-white/40 italic font-serif">scale.</span>
                        </h3>
                    </div>
                    <p className="text-text-muted text-lg max-w-sm font-light">
                        High-volume systems and modern digital products built for extreme performance.
                    </p>
                </div>

                {/* Sticky Stacking Cards Container */}
                <div className="relative w-full flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="sticky top-32 w-full transition-all duration-500 ease-in-out hover:scale-[1.01]"
                            style={{
                                top: `calc(130px + ${index * 30}px)`,
                                zIndex: index + 10,
                            }}
                        >
                            <SpotlightCard
                                spotlightColor={project.color}
                                className="w-full flex flex-col md:flex-row gap-8 lg:gap-16 p-6 md:p-12 min-h-[500px] border-white/10 bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.8)]"
                            >
                                {/* Image Side (Left) */}
                                <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto rounded-xl bg-surface/50 border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
                                    {/* Subtle placeholder abstract visual */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/5 blur-3xl transform group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-heading font-black text-6xl tracking-tighter mix-blend-overlay">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content Side (Right) */}
                                <div className="w-full md:w-7/12 flex flex-col justify-center py-4">
                                    <div className="text-sm font-medium tracking-widest text-text-muted uppercase mb-4">
                                        {project.category}
                                    </div>
                                    <h4 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight">
                                        {project.title}
                                    </h4>

                                    <div className="flex flex-wrap gap-4 mb-12">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                                                <span className="text-sm font-medium text-white/90">{metric}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between text-white/80 group-hover:text-white transition-colors w-fit group/btn cursor-pointer">
                                        <span className="text-lg font-medium mr-4">Explore Case Study</span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover/btn:bg-white/10 group-hover/btn:scale-110 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
