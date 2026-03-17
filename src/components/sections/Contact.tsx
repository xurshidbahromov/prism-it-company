"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact-form" className="py-32 relative z-10 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Info */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block"
                        >
                            Contact Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1.05] mb-8 text-foreground"
                        >
                            Let's start a <br className="hidden lg:block"/>
                            <span className="text-foreground/40">conversation.</span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-foreground/60 font-light leading-relaxed mb-12"
                        >
                            Have an idea, project, or question? Drop us a message and our team will get back to you within 24 hours.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Email</div>
                                    <a href="mailto:hello@prism.com" className="text-lg font-medium hover:text-blue-500 transition-colors">hello@prism.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Office</div>
                                    <span className="text-lg font-medium">100 Innovation Drive, Tech City</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full lg:w-7/12"
                    >
                        <form className="bg-foreground/[0.02] border border-foreground/[0.05] rounded-[2rem] p-8 md:p-12 backdrop-blur-xl flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-background/50 border border-foreground/10 rounded-xl focus:outline-none focus:border-foreground/30 focus:bg-background/80 transition-all text-foreground placeholder:text-foreground/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-5 py-4 bg-background/50 border border-foreground/10 rounded-xl focus:outline-none focus:border-foreground/30 focus:bg-background/80 transition-all text-foreground placeholder:text-foreground/20"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Inquiry Type</label>
                                <div className="relative">
                                    <select className="w-full px-5 py-4 bg-background/50 border border-foreground/10 rounded-xl focus:outline-none focus:border-foreground/30 focus:bg-background/80 transition-all text-foreground appearance-none cursor-pointer">
                                        <option value="project" className="bg-background text-foreground">New Project</option>
                                        <option value="career" className="bg-background text-foreground">Career</option>
                                        <option value="other" className="bg-background text-foreground">Other</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-foreground/40 font-medium ml-1">Message</label>
                                <textarea
                                    placeholder="Tell us about your goals..."
                                    rows={4}
                                    className="w-full px-5 py-4 bg-background/50 border border-foreground/10 rounded-xl focus:outline-none focus:border-foreground/30 focus:bg-background/80 transition-all text-foreground placeholder:text-foreground/20 resize-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90 px-8 py-5 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
