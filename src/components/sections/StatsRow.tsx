import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StatsRow() {
    return (
        <section className="bg-[#05050A] pt-20 pb-32 relative z-10 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Typography Section */}
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-medium text-white tracking-tight leading-[1.1] mb-6">
                            The <span className="font-script italic font-light text-[1.1em] px-2">Numbers</span> Behind <br />
                            <span className="font-bold">Our Success</span>
                        </h2>
                        <p className="text-base text-white/50 font-light leading-relaxed mb-10">
                            We don&apos;t just build digital products, we create experiences that convert, engage, and scale. Our track record speaks for itself, with measurable outcomes that have helped brands across industries achieve their ambitious growth goals.
                        </p>
                        <Link href="/work" className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group">
                            See Our Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/link ml-6 px-4 py-2">
                            Read client testimonials
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right 2x2 Bento Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">

                        {/* Top Left: Solid Blue Retention Card */}
                        <div className="bg-blue-500 p-8 rounded-3xl flex flex-col justify-between shadow-[0_10px_40px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-5xl lg:text-6xl font-heading font-semibold text-white mb-6">
                                95%
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-white/90 mb-2">Client Retention Rate</h4>
                                <p className="text-xs text-white/70 font-medium leading-relaxed">
                                    Our clients stick around because we deliver results, not just designs. Long-term partnerships are built on trust and consistent performance.
                                </p>
                            </div>
                        </div>

                        {/* Top Right: Projects Delivered Card */}
                        <div className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/[0.05] transition-colors duration-300">
                            <div className="text-5xl lg:text-6xl font-heading font-medium text-white mb-6">
                                +200
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-white/90 mb-2">Projects Delivered</h4>
                                <p className="text-xs text-white/50 font-medium leading-relaxed">
                                    From MVP launches to full-scale digital transformations, we&apos;ve partnered with brands of all sizes to bring their visions to life.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Left: Users Reached Card */}
                        <div className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/[0.05] transition-colors duration-300 mt-0 sm:-mt-6">
                            <div className="text-5xl lg:text-6xl font-heading font-medium text-white mb-6">
                                +3.2M
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-white/90 mb-2">Users Reached</h4>
                                <p className="text-xs text-white/50 font-medium leading-relaxed">
                                    The digital products we&apos;ve built collectively serve millions of active users, creating meaningful interactions every single day.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right: Conversion Lift Card */}
                        <div className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/[0.05] transition-colors duration-300 mt-0 sm:-mt-6">
                            <div className="text-5xl lg:text-6xl font-heading font-medium text-white mb-6">
                                40%
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-white/90 mb-2">Average Conversion Lift</h4>
                                <p className="text-xs text-white/50 font-medium leading-relaxed">
                                    Through strategic UX improvements and data-driven design, our clients see real, measurable growth in their key metrics.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
