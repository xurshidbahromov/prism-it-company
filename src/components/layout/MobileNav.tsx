"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Grid, Layers, Briefcase, User } from "lucide-react";
import { cn } from "@/lib/cn";

const mobileLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/expertise", icon: Grid },
    { label: "Process", href: "/process", icon: Layers },
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
                    {/* SVG Filter for Liquid/Gooey effect */}
                    <svg className="invisible absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                        <defs>
                            <filter id="mobile-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
                                    result="goo"
                                />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                    <div className="relative flex items-center justify-between bg-white/[0.08] backdrop-blur-2xl border border-white/[0.12] rounded-full p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {/* Liquid Background Layer */}
                        <div
                            className="absolute inset-2 pointer-events-none"
                            style={{ filter: "url(#mobile-goo)" }}
                        >
                            {mobileLinks.map((link) => (
                                <div key={`bg-mobile-${link.href}`} className="absolute inset-0 flex items-center justify-around">
                                    {/* These are just placeholders to define the grid, only the active one renders the pill */}
                                </div>
                            ))}

                            {/* The single active pill that moves */}
                            {mobileLinks.map((link, idx) => (
                                isActive(link.href) && (
                                    <motion.div
                                        key="active-pill"
                                        layoutId="mobile-liquid-pill"
                                        className="absolute h-full bg-white rounded-full transition-shadow"
                                        style={{
                                            width: `${100 / mobileLinks.length}%`,
                                            left: `${(100 / mobileLinks.length) * idx}%`
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 28,
                                            mass: 1.2,
                                        }}
                                    />
                                )
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
                                        "relative flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-full transition-colors duration-500 z-10",
                                        active ? "text-black" : "text-white/50 hover:text-white"
                                    )}
                                >
                                    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                                    <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
