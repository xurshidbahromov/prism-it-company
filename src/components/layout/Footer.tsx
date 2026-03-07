import { Container } from "./Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#05050A] pt-20 pb-12 mt-0 relative overflow-hidden">
            <Container className="max-w-[1200px] border-t border-white/10 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">

                    {/* Brand Col - 4 cols */}
                    <div className="col-span-12 lg:col-span-4">
                        <Link href="#top" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm mb-6">
                            <span className="font-heading font-medium text-3xl tracking-tight text-white flex items-center gap-3">
                                <div className="w-8 h-8 bg-white mask-prism shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                                SURA
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-[250px] font-light">
                            Building digital engines that drive growth for ambitious brands worldwide.
                        </p>
                    </div>

                    {/* Services Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6 text-sm">Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/expertise" className="text-sm text-white/50 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/expertise" className="text-sm text-white/50 hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/expertise" className="text-sm text-white/50 hover:text-white transition-colors">Digital Strategy</Link></li>
                            <li><Link href="/expertise" className="text-sm text-white/50 hover:text-white transition-colors">Performance Optimization</Link></li>
                        </ul>
                    </div>

                    {/* Company Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6 text-sm">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/work" className="text-sm text-white/50 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6 text-sm">Connect</h4>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-all group">
                                    Twitter <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-all group">
                                    LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-all group">
                                    Dribbble <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-all group">
                                    Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links Col */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <h4 className="font-semibold text-white mb-6 text-sm">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="pt-8 flex justify-between items-center opacity-50">
                    <p className="text-xs font-light text-white">
                        &copy; {currentYear} SURA. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
