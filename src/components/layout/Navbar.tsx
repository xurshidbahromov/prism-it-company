"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const megaMenu: Record<string, { label: string; desc: string; href: string }[]> = {
    "/expertise": [
        { label: "UI/UX Design", desc: "Human-centered, pixel-perfect interfaces", href: "/expertise#creative-design" },
        { label: "Full-Stack Dev", desc: "Scalable, type-safe modern applications", href: "/expertise#full-stack" },
        { label: "AI Integration", desc: "Custom LLMs and autonomous agents", href: "/expertise#ai-automation" },
        { label: "Cloud Systems", desc: "Zero-trust, high-uptime infrastructure", href: "/expertise#cloud-infra" },
    ],
    "/process": [
        { label: "Discovery & Architecture", desc: "Blueprint before a single line of code", href: "/process#discovery" },
        { label: "Design System", desc: "Component libraries aligned with your brand", href: "/process#design" },
        { label: "Development", desc: "Agile sprints with strict testing protocols", href: "/process#development" },
        { label: "Launch & Iterate", desc: "Zero-downtime deployments from Day 1", href: "/process#launch" },
    ],
    "/work": [
        { label: "Fintech Core Banking", desc: "+40% transaction speed, zero downtime", href: "/work#fintech" },
        { label: "Healthcare Data Sync", desc: "HIPAA compliant, sub-second sync", href: "/work#healthcare" },
        { label: "Retail Automation", desc: "$1.2M saved/yr, -30% manual ops", href: "/work#retail" },
    ],
    "/about": [
        { label: "Our Story", desc: "How PRISM was built and why it matters", href: "/about#story" },
        { label: "The Team", desc: "Elite engineers and designers", href: "/about#team" },
        { label: "Our Values", desc: "Engineering first, outcomes over output", href: "/about#values" },
        { label: "Careers", desc: "Join our distributed team", href: "#" },
    ],
};

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/expertise" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    const closeMenu = useCallback(() => setIsOpen(false), []);

    const handleNavMouseEnter = (href: string) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        if (megaMenu[href]) setHoveredLink(href);
        else setHoveredLink(null);
    };

    const handleNavMouseLeave = () => {
        closeTimeout.current = setTimeout(() => setHoveredLink(null), 120);
    };

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") { closeMenu(); setHoveredLink(null); }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeMenu]);

    useEffect(() => { setHoveredLink(null); }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const currentDropdown = hoveredLink ? megaMenu[hoveredLink] : null;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 font-heading font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[24px] px-6 py-3.5 hover:scale-[1.02] active:scale-[0.98] group relative"
                    aria-label="PRISM Home"
                >
                    <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)" }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]" />
                    <div className="w-5 h-5 bg-foreground mask-prism shadow-[0_0_12px_var(--aero-shadow)] flex-shrink-0 relative z-10" />
                    <span className="text-foreground relative z-10 font-bold">PRISM</span>
                </Link>

                {/* Desktop Nav Island with Mega Menu */}
                <div
                    className="hidden md:flex items-center relative rounded-[24px] min-w-[500px]"
                    onMouseLeave={handleNavMouseLeave}
                >
                    {/* Glass Layer — pill row only */}
                    <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]" />

                    {/* Pill Row */}
                    <div className="relative flex items-center px-1.5 py-1.5 w-full">
                        <div className="absolute inset-x-1.5 inset-y-1.5 pointer-events-none flex items-center justify-between z-0">
                            {navLinks.map((link) => (
                                <div key={`bg-${link.href}`} className="relative h-full flex-1 flex items-center justify-center">
                                    {isActive(link.href) && (
                                        <motion.div
                                            layoutId="liquid-pill"
                                            className="absolute inset-0 aero-pill rounded-[18px]"
                                            transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <nav className="relative flex items-center justify-between w-full z-10" aria-label="Desktop Navigation">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMenu}
                                        onMouseEnter={() => handleNavMouseEnter(link.href)}
                                        className={cn(
                                            "relative px-5 py-2.5 rounded-[18px] text-sm transition-all duration-300 flex-1 text-center",
                                            active ? "text-background font-semibold" : "text-foreground/60 hover:text-foreground font-medium"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Mega Menu Dropdown — absolute, floats below the island */}
                    <AnimatePresence>
                        {currentDropdown && (
                            <motion.div
                                key={hoveredLink}
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-full left-0 right-0 mt-2 rounded-[20px] overflow-hidden z-50"
                                onMouseEnter={() => { if (closeTimeout.current) clearTimeout(closeTimeout.current); }}
                                style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }}
                            >
                                {/* Glass shell for dropdown */}
                                <div className="relative aero-island rounded-[20px]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[20px]" />
                                    <div className="relative z-10 px-3 py-3">
                                        <div className="grid grid-cols-2 gap-1">
                                            {currentDropdown.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.href}
                                                    onClick={() => setHoveredLink(null)}
                                                    className="group flex flex-col px-3 py-3 rounded-xl hover:bg-foreground/[0.05] transition-colors duration-200"
                                                >
                                                    <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                                                        {item.label}
                                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                                                    </span>
                                                    <span className="text-xs text-foreground/40 group-hover:text-foreground/60 mt-0.5 transition-colors duration-200">
                                                        {item.desc}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Controls */}
                <div className="hidden lg:flex items-center gap-2">
                    <ThemeSwitcher uniqueId="desktop-nav" />
                    <LanguageSwitcher />

                    <Link href="/#contact" tabIndex={-1} className="rounded-[24px] p-1 group relative">
                        <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]" />
                        <Button
                            variant="primary"
                            className="relative z-10 font-semibold px-6 py-4 rounded-[20px] bg-blue-500 hover:bg-white hover:text-blue-600 text-white border-transparent shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:px-8"
                        >
                            Get a Proposal
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 -mr-2 text-foreground/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition-colors"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-screen opacity-100 border-foreground/10 shadow-2xl" : "max-h-0 opacity-0 border-transparent"
                )}
            >
                <div className="flex flex-col gap-4 p-6">
                    {/* Nav links */}
                    <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={cn(
                                    "text-lg font-heading font-medium transition-colors px-4 py-3 rounded-xl",
                                    isActive(link.href)
                                        ? "text-foreground bg-foreground/10"
                                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/[0.04]"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="border-t border-foreground/[0.06] pt-4 flex items-center justify-between gap-3">
                        <ThemeSwitcher uniqueId="mobile-dropdown" />
                        <LanguageSwitcher />
                        <Link href="/#contact" onClick={closeMenu} tabIndex={-1} className="flex-1">
                            <Button variant="primary" size="lg" className="w-full font-bold rounded-xl px-4">
                                Get a Proposal
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
