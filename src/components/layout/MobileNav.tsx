"use client";

import { useState, useEffect, useRef } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Grid, Briefcase, User, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

const MOBILE_LINKS = [
    { key: "home",      href: "/",          icon: Home },
    { key: "expertise", href: "/expertise", icon: Grid },
    { key: "work",      href: "/work",      icon: Briefcase },
    { key: "about",     href: "/about",     icon: User },
    { key: "contact",   href: "/contact",   icon: MessageCircle },
];

export function MobileNav() {
    const t = useTranslations("MobileNav");
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    // Hide on scroll-down, show on scroll-up — rAF-throttled
    useEffect(() => {
        const handleScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            window.requestAnimationFrame(() => {
                const currentY = window.scrollY;
                setIsVisible(currentY <= lastScrollY.current || currentY <= 80);
                lastScrollY.current = currentY;
                ticking.current = false;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 120, opacity: isVisible ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.9 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-20px)] max-w-[520px]"
            style={{ pointerEvents: isVisible ? "auto" : "none" }}
            aria-label="Mobile Navigation"
        >
            {/* Glass island shell */}
            <div className="relative flex items-center rounded-[26px] p-1.5">
                {/* Background glass */}
                <div
                    className="absolute inset-0 aero-island rounded-[26px]"
                    style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }}
                />
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-40 rounded-[26px] pointer-events-none" />

                {/* Nav items */}
                <nav className="relative flex items-center w-full gap-0.5 z-10" aria-label="Mobile Navigation">
                    {MOBILE_LINKS.map((link) => {
                        const active = isActive(link.href);
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative flex-1 flex flex-col items-center justify-center gap-[3px] py-2.5 rounded-[20px] select-none group",
                                    active
                                        ? "text-[var(--aero-pill-text)] font-semibold"
                                        : "text-foreground/50 font-medium transition-colors duration-200 hover:text-foreground"
                                )}
                            >
                                {/* Active pill — same blur-dissolve as desktop */}
                                <AnimatePresence>
                                    {active && (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="absolute inset-0 aero-pill rounded-[20px] pointer-events-none z-[-1]"
                                        >
                                            {/* Shimmer sweep */}
                                            <span className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none" aria-hidden>
                                                <motion.span
                                                    className="absolute inset-0 block"
                                                    initial={{ x: "-110%" }}
                                                    animate={{ x: "210%" }}
                                                    transition={{
                                                        duration: 1.4,
                                                        ease: "easeInOut",
                                                        delay: 0.3,
                                                        repeat: Infinity,
                                                        repeatDelay: 4,
                                                    }}
                                                    style={{
                                                        background:
                                                            "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)",
                                                    }}
                                                />
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Hover glow — CSS only */}
                                <span className="absolute inset-0 rounded-[20px] bg-foreground/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-0" />

                                <Icon
                                    size={20}
                                    strokeWidth={active ? 2.5 : 1.8}
                                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="relative z-10 text-[9px] sm:text-[10px] font-semibold tracking-tight whitespace-nowrap">
                                    {t(`tabs.${link.key}` as any)}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </motion.div>
    );
}
