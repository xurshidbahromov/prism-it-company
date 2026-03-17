"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Grid, Layers, Briefcase, User } from "lucide-react";
import { cn } from "@/lib/cn";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const mobileLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/expertise", icon: Grid },
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "About", href: "/about", icon: User },
];

export function MobileNav() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    // Hide on scroll down, show on scroll up logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-48px)] max-w-sm"
                >
                    {/* SVG Filters for Liquid/Gooey effects — Precision Solid Physics */}
                    <svg className="invisible absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                        <defs>
                            <filter id="mobile-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
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

                    <div className="relative flex flex-col aero-island rounded-[32px] p-2 overflow-hidden" 
                         style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }}>
                        
                        {/* Glass Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40"></div>

                        {/* Top Section: Nav Icons */}
                        <div className="relative flex items-center justify-between">
                            {/* Liquid Background Layer */}
                            <div
                                className="absolute inset-x-1 inset-y-1 pointer-events-none z-0 flex items-center justify-between"
                                style={{ filter: "url(#mobile-goo)", width: "calc(100% - 8px)" }}
                            >
                                {mobileLinks.map((link) => (
                                    <div key={`bg-${link.href}`} className="relative h-full flex-1 flex items-center justify-center">
                                        {isActive(link.href) && (
                                            <motion.div
                                                layoutId="mobile-nav-pill"
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

                            {/* Icons Layer */}
                            {mobileLinks.map((link) => {
                                const active = isActive(link.href);
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "relative flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded-[18px] transition-colors duration-500 z-10",
                                            active ? "text-black font-bold" : "text-white/50 hover:text-white"
                                        )}
                                    >
                                        <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                                        <span className="text-[10px] font-semibold tracking-tight whitespace-nowrap">
                                            {link.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Bottom Section: Theme & Language Switchers */}
                        <div className="relative z-10 flex items-center justify-center gap-6 py-2 border-t border-white/10 mt-1">
                            <ThemeSwitcher uniqueId="mobile-island-theme" />
                            <div className="w-[1px] h-4 bg-white/10" />
                            <LanguageSwitcher />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
