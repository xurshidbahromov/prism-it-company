"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
    const pathname = usePathname();

    const closeMenu = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeMenu]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-4" : "py-6"
            )}
        >
            {/* SVG Filters for Liquid/Gooey effects */}
            <svg className="invisible absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                    {/* Droplet Gooey Filter — Precision Solid Physics */}
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 font-heading font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[24px] px-6 py-3.5 hover:scale-[1.02] active:scale-[0.98] group relative"
                    aria-label="PRISM Home"
                >
                    {/* Dedicated Glass Layer */}
                    <div
                        className="absolute inset-0 aero-island rounded-[24px] z-[-1]"
                        style={{ backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)' }}
                    ></div>
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]"></div>
                    <div className="w-5 h-5 bg-foreground mask-prism shadow-[0_0_12px_var(--aero-shadow)] flex-shrink-0 relative z-10"></div>
                    <span className="text-foreground relative z-10 font-bold">PRISM</span>
                </Link>

                {/* Desktop Nav — Aero Glass Pill with Liquid Transition */}
                <div className="hidden md:flex items-center relative rounded-[24px] px-1.5 py-1.5 min-w-[500px]">
                    {/* Dedicated Glass Layer */}
                    <div
                        className="absolute inset-0 aero-island rounded-[24px] z-[-1]"
                        style={{ backdropFilter: 'blur(64px) saturate(200%)', WebkitBackdropFilter: 'blur(64px) saturate(200%)' }}
                    ></div>
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]"></div>

                    {/* Liquid Background Layer (Gooey Filtered Pill) */}
                    <div
                        className="absolute inset-x-1.5 inset-y-1.5 pointer-events-none flex items-center justify-between z-0"
                        style={{ filter: "url(#goo)", width: "calc(100% - 12px)" }}
                    >
                        {navLinks.map((link) => (
                            <div key={`bg-${link.href}`} className="relative h-full flex-1 flex items-center justify-center">
                                {isActive(link.href) && (
                                    <motion.div
                                        layoutId="liquid-pill"
                                        className="h-full w-full aero-pill rounded-[18px]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 450,
                                            damping: 32,
                                            mass: 0.8,
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Crisp Text Layer */}
                    <nav className="relative flex items-center justify-between w-full z-10" aria-label="Desktop Navigation">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={cn(
                                        "relative px-5 py-2.5 rounded-[18px] text-sm font-medium transition-colors duration-500 hover-trigger flex-1 text-center",
                                        active ? "text-background font-bold" : "text-foreground/40 hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <ThemeSwitcher uniqueId="desktop-nav" />

                    {/* CTA Island — Aero Glass */}
                    <Link href="/#contact" tabIndex={-1} className="rounded-[24px] p-1 group relative">
                        {/* Dedicated Glass Layer */}
                        <div
                            className="absolute inset-0 aero-island rounded-[24px] z-[-1]"
                            style={{ backdropFilter: 'blur(64px) saturate(200%)', WebkitBackdropFilter: 'blur(64px) saturate(200%)' }}
                        ></div>
                        {/* Glass Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]"></div>
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

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-screen opacity-100 border-white/10 shadow-2xl" : "max-h-0 opacity-0 border-transparent"
                )}
            >
                <div className="flex flex-col gap-6 p-8">
                    <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
                        <div className="flex justify-between items-center px-4 py-2">
                            <span className="text-sm font-medium text-white/50 uppercase tracking-widest">Theme Mode</span>
                            <div className="w-32 scale-90 origin-right">
                                <ThemeSwitcher uniqueId="mobile-dropdown" />
                            </div>
                        </div>
                        <hr className="border-white/10 my-2" />
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={cn(
                                    "text-xl font-heading font-medium transition-colors px-4 py-2 rounded-xl",
                                    isActive(link.href)
                                        ? "text-foreground bg-foreground/10"
                                        : "text-foreground/60 hover:text-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <hr className="border-white/10 my-2" />
                    <Link href="/#contact" onClick={closeMenu} tabIndex={-1}>
                        <Button variant="primary" size="lg" className="w-full font-bold rounded-full">
                            Book a call
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

