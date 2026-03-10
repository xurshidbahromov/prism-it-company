import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section id="contact" className="py-24 bg-background relative z-10 w-full flex justify-center px-4 md:px-8">
            <Container className="max-w-[1200px] w-full p-0">
                {/* Main cosmic capsule container */}
                <div className="relative w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center py-24 md:py-32 px-6 shadow-[0_20px_80px_var(--aero-shadow)] border border-foreground/10 group">

                    {/* Cosmic Background Image (Adaptive) */}
                    <div className="absolute inset-0 w-full h-full object-cover">
                        <img
                            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80"
                            alt="Cosmic background"
                            className="w-full h-full object-cover opacity-20 dark:opacity-40 mix-blend-screen dark:mix-blend-screen scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
                        />
                        {/* Overlay to ensure text readability (Adaptive) */}
                        <div className="absolute inset-0 bg-background/60 dark:bg-background/80 mix-blend-multiply dark:mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80"></div>

                        {/* Soft Glow */}
                        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 blur-[150px] rounded-full pointer-events-none transition-opacity duration-1000"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium text-foreground tracking-tight leading-[1.1] mb-6">
                            Ready to Build Something <br />
                            <span className="font-script italic font-light text-[1.2em] px-2 text-foreground/90">Great?</span>
                        </h2>

                        <p className="text-base md:text-lg text-foreground/60 font-light mb-12 max-w-lg leading-relaxed">
                            Let&apos;s create a digital experience that sets you apart from the competition.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            {/* Primary Button */}
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_8px_24px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_36px_rgba(59,130,246,0.6)] group/btn">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary Button */}
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground/5 border border-foreground/20 hover:bg-foreground/10 text-foreground px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md">
                                Schedule a call
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
