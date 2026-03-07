import { Container } from "@/components/layout/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PenTool, Code2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
    return (
        <section id="services" className="bg-[#05050A] pt-24 pb-32 relative z-10 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <Container>
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Services That Scale Your <br />
                        <span className="font-bold">Business</span>
                    </h2>
                    <p className="text-lg text-white/50 font-light max-w-lg leading-relaxed">
                        From concept to launch, we provide end-to-end solutions that drive measurable results.
                    </p>
                </div>

                {/* SURA Style Glowing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left Tall Card: UI/UX Design */}
                    <SpotlightCard className="col-span-1 lg:row-span-2 flex flex-col justify-between p-10 lg:p-14 group border-white/[0.08] bg-white/[0.02]">
                        <div className="w-full flex justify-center items-center py-16 mb-8 relative">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-700 ease-out"></div>

                            {/* Hexagon/Icon Container */}
                            <div className="relative z-10 w-48 h-48 border border-blue-400/30 bg-blue-900/10 backdrop-blur-sm rounded-[2rem] rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:rotate-0 transition-all duration-700 ease-out">
                                <PenTool className="w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" strokeWidth={1} />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl lg:text-3xl font-heading font-medium mb-4 text-white">UI/UX Design</h4>
                            <p className="text-base text-white/50 font-light leading-relaxed mb-8">
                                Beautiful, intuitive interfaces designed to engage users and drive conversions.
                            </p>
                            <Link href="/expertise" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/link border border-white/10 rounded-full px-6 py-3 hover:bg-white/5">
                                View Details
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </SpotlightCard>

                    {/* Right Top Card: Performance */}
                    <SpotlightCard className="col-span-1 flex flex-col sm:flex-row justify-between p-10 lg:p-12 group border-white/[0.08] bg-white/[0.02]">
                        <div className="flex-1 order-2 sm:order-1 mt-8 sm:mt-0">
                            <h4 className="text-2xl font-heading font-medium mb-4 text-white">Performance Optimization</h4>
                            <p className="text-base text-white/50 font-light leading-relaxed mb-8 max-w-xs">
                                Lightning-fast websites optimized for speed, SEO, and user experience.
                            </p>
                            <Link href="/expertise" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/link border border-white/10 rounded-full px-6 py-3 hover:bg-white/5">
                                View Details
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="w-32 h-32 shrink-0 flex items-center justify-center order-1 sm:order-2 relative ml-auto">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                            <Zap className="relative z-10 w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                        </div>
                    </SpotlightCard>

                    {/* Right Bottom Card: Web Dev */}
                    <SpotlightCard className="col-span-1 flex flex-col sm:flex-row justify-between p-10 lg:p-12 group border-white/[0.08] bg-white/[0.02]">
                        <div className="flex-1 order-2 sm:order-1 mt-8 sm:mt-0">
                            <h4 className="text-2xl font-heading font-medium mb-4 text-white">Web Development</h4>
                            <p className="text-base text-white/50 font-light leading-relaxed mb-8 max-w-xs">
                                Custom websites and web applications built with cutting-edge technologies for optimal performance.
                            </p>
                            <Link href="/expertise" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/link border border-white/10 rounded-full px-6 py-3 hover:bg-white/5">
                                View Details
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="w-32 h-32 shrink-0 flex items-center justify-center order-1 sm:order-2 relative ml-auto">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                            <Code2 className="relative z-10 w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                        </div>
                    </SpotlightCard>

                </div>
            </Container>
        </section>
    );
}
