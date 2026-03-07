import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 bg-[#05050A] relative z-10 w-full flex justify-center px-4 md:px-8">
            <Container className="max-w-[1200px] w-full p-0">
                {/* Main cosmic capsule container */}
                <div className="relative w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col items-center justify-center text-center py-24 md:py-32 px-6 shadow-[0_0_80px_rgba(59,130,246,0.15)] border border-white/10 group">

                    {/* Cosmic Background Image (Unsplash placeholder representing the nebula) */}
                    <div className="absolute inset-0 w-full h-full object-cover">
                        <img
                            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80"
                            alt="Cosmic background"
                            className="w-full h-full object-cover opacity-40 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                        />
                        {/* Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-[#05050A]/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/80 via-transparent to-[#05050A]/80"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Ready to Build Something <br />
                            <span className="font-script italic font-light text-[1.2em] px-2 text-white/90">Great?</span>
                        </h2>

                        <p className="text-base md:text-lg text-white/60 font-light mb-12 max-w-lg leading-relaxed">
                            Let&apos;s create a digital experience that sets you apart from the competition.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            {/* Primary Button */}
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group/btn">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary Button */}
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md">
                                Schedule a call
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
