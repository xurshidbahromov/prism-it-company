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
        <section id="work" className="bg-background pt-24 pb-32 relative z-10">
            {/* Subtle background glow (Adaptive) */}
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen transition-opacity duration-1000"></div>
            <Container>
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium text-foreground tracking-tight leading-[1.1] mb-6">
                        Selected <br />
                        <span className="font-bold">Projects</span>
                    </h2>
                    <p className="text-lg text-foreground/60 font-light max-w-lg leading-relaxed">
                        A showcase of our best work in design, engineering, and digital strategy.
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
                                className="w-full flex flex-col md:flex-row gap-8 lg:gap-16 p-6 md:p-12 min-h-[500px] border-foreground/10 bg-background/95 backdrop-blur-3xl shadow-[0_-10px_40px_-20px_var(--aero-shadow)]"
                            >
                                {/* Image Side (Left) */}
                                <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto rounded-xl bg-foreground/5 border border-foreground/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent z-10"></div>
                                    {/* Subtle placeholder abstract visual */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-foreground/5 blur-3xl transform group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5 font-heading font-black text-6xl tracking-tighter mix-blend-overlay">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content Side (Right) */}
                                <div className="w-full md:w-7/12 flex flex-col justify-center py-4">
                                    <div className="text-sm font-medium tracking-widest text-foreground/40 uppercase mb-4">
                                        {project.category}
                                    </div>
                                    <h4 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-foreground mb-8 tracking-tight">
                                        {project.title}
                                    </h4>

                                    <div className="flex flex-wrap gap-4 mb-12">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className="px-5 py-3 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-md">
                                                <span className="text-sm font-medium text-foreground/90">{metric}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-foreground/5 flex items-center justify-between text-foreground/80 group-hover:text-foreground transition-colors w-fit group/btn cursor-pointer">
                                        <span className="text-lg font-medium mr-4">Explore Case Study</span>
                                        <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/5 group-hover/btn:bg-foreground/10 group-hover/btn:scale-110 transition-all duration-300">
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
