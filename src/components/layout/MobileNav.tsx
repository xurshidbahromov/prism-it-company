"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Grid, Layers, Briefcase, User, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const mobileLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/expertise", icon: Grid },
    { label: "Process", href: "/process", icon: Layers },
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "About", href: "/about", icon: User },
    { label: "Contact", href: "/contact", icon: MessageCircle },
];

export function MobileNav() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const activeIndex = mobileLinks.findIndex(link => {
        if (link.href === "/") return pathname === "/";
        return pathname.startsWith(link.href);
    });

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    // Hide on scroll down, show on scroll up logic with performance optimization
    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update pill position when pathname or visibility changes
    useEffect(() => {
        if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
            const el = linkRefs.current[activeIndex];
            if (el) {
                setPillStyle({
                    left: el.offsetLeft,
                    width: el.offsetWidth,
                    opacity: 1
                });
            }
        } else {
            setPillStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [activeIndex, pathname]);

    return (
        <motion.div
            initial={{ bottom: -100, opacity: 0 }}
            animate={{
                bottom: isVisible ? 24 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-24px)] max-w-lg"
            style={{
                pointerEvents: isVisible ? "auto" : "none"
            }}
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

            <div className="relative flex rounded-[28px] p-1.5 sm:p-2 shadow-2xl shadow-black/20">
                {/* Glass Layer from Laptop Navbar effect */}
                <div className="absolute inset-0 aero-island rounded-[28px]" style={{ zIndex: 0, backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }} />

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[28px]" style={{ zIndex: 1 }}></div>

                {/* Top Section: Nav Icons */}
                <div className="relative flex flex-1 items-center justify-between" style={{ zIndex: 10 }}>
                    {/* Stable Active Pill Layer */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <motion.div
                            className="h-full aero-pill rounded-[18px]"
                            initial={false}
                            animate={{
                                left: pillStyle.left,
                                width: pillStyle.width,
                                opacity: pillStyle.opacity,
                                scale: pillStyle.opacity > 0 ? 1 : 0.8
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 450,
                                damping: 35,
                                mass: 0.8
                            }}
                            style={{
                                position: "absolute",
                                top: 0,
                                height: "100%"
                            }}
                        />
                    </div>

                    {/* Icons Layer */}
                    {mobileLinks.map((link, index) => {
                        const active = isActive(link.href);
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                ref={(el) => { linkRefs.current[index] = el; }}
                                className={cn(
                                    "relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 sm:py-3 rounded-[14px] sm:rounded-[18px] transition-colors duration-500 z-10",
                                    active ? "text-[var(--aero-pill-text)] font-bold" : "text-foreground/50 hover:text-foreground"
                                )}
                            >
                                <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                                <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight whitespace-nowrap">
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
