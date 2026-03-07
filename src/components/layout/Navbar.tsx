"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

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
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                {/* Logo / Wordmark */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm w-[200px]"
                    aria-label="PRISM Home"
                >
                    <div className="w-6 h-6 bg-white mask-prism shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                    PRISM
                </Link>

                {/* Desktop Nav — Liquid Glass Pill */}
                <nav
                    className="hidden md:flex items-center gap-0.5 bg-white/[0.06] border border-white/[0.12] backdrop-blur-2xl rounded-full px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
                    aria-label="Desktop Navigation"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-trigger",
                                isActive(link.href)
                                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right CTA */}
                <div className="hidden md:flex items-center justify-end w-[200px]">
                    <Link href="/#contact" tabIndex={-1}>
                        <Button variant="primary" className="font-semibold px-6 py-5 rounded-full bg-blue-500 hover:bg-blue-400 text-white border-transparent shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Get a Proposal
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 -mr-2 text-text-muted hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md transition-colors"
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={cn(
                                    "text-xl font-heading font-medium transition-colors px-4 py-2 rounded-xl",
                                    isActive(link.href)
                                        ? "text-white bg-white/10"
                                        : "text-text-muted hover:text-white"
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

