"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { AeroButton as Button } from "@/components/ui/AeroButton";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { SettingsDropdown } from "./SettingsDropdown";
import { useTranslations } from "next-intl";

const NAV_LINK_KEYS = [
    { key: "home", href: "/" },
    { key: "services", href: "/expertise" },
    { key: "process", href: "/process" },
    { key: "work", href: "/work" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
];

const MEGA_MENU_KEYS: Record<string, { key: string; href: string }[]> = {
    "/expertise": [
        { key: "uiux", href: "/expertise#creative-design" },
        { key: "fullstack", href: "/expertise#full-stack" },
        { key: "ai", href: "/expertise#ai-automation" },
        { key: "cloud", href: "/expertise#cloud-infra" },
    ],
    "/process": [
        { key: "discovery", href: "/process#discovery" },
        { key: "design", href: "/process#design" },
        { key: "development", href: "/process#development" },
        { key: "launch", href: "/process#launch" },
    ],
    "/work": [
        { key: "fintech", href: "/work#fintech" },
        { key: "healthcare", href: "/work#healthcare" },
        { key: "retail", href: "/work#retail" },
    ],
    "/about": [
        { key: "story", href: "/about#story" },
        { key: "team", href: "/about#team" },
        { key: "values", href: "/about#values" },
        { key: "careers", href: "#" },
    ],
};

const MEGA_MENU_SECTION: Record<string, string> = {
    "/expertise": "expertise",
    "/process": "process",
    "/work": "work",
    "/about": "about",
};

export function Navbar() {
    const t = useTranslations('Navbar');
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    const closeMenu = useCallback(() => setHoveredLink(null), []);

    const handleNavMouseEnter = (href: string) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        if (MEGA_MENU_KEYS[href]) setHoveredLink(href);
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
                    const shouldBeScrolled = window.scrollY > 20;
                    setScrolled(prev => {
                        if (prev !== shouldBeScrolled) return shouldBeScrolled;
                        return prev;
                    });
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

    const currentDropdownKeys = hoveredLink ? MEGA_MENU_KEYS[hoveredLink] : null;
    const currentSection = hoveredLink ? MEGA_MENU_SECTION[hoveredLink] : null;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
            )}
        >
            <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 xl:px-20 flex items-center justify-between gap-2 sm:gap-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 font-heading font-bold text-base sm:text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[20px] px-4 sm:px-6 py-2.5 sm:py-3.5 hover:scale-[1.02] active:scale-[0.98] group relative"
                    aria-label="PRISM Home"
                >
                    <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(16px) saturate(180%)", WebkitBackdropFilter: "blur(16px) saturate(180%)" }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]" />
                    <div className="w-5 h-5 bg-foreground mask-prism shadow-[0_0_12px_var(--aero-shadow)] flex-shrink-0 relative z-10" />
                    <span className="text-foreground relative z-10 font-bold">PRISM</span>
                </Link>

                {/* Desktop Nav Island with Mega Menu */}
                <div
                    className="hidden lg:flex items-center relative rounded-[24px] min-w-[400px] xl:min-w-[500px]"
                    onMouseLeave={handleNavMouseLeave}
                >
                    {/* Glass Layer — pill row only */}
                    <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]" />

                    {/* Pill Row */}
                    <div className="relative flex items-center p-1.5 w-full">
                        <nav className="flex items-center w-full gap-0.5" aria-label="Desktop Navigation">
                            {NAV_LINK_KEYS.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMenu}
                                        onMouseEnter={() => handleNavMouseEnter(link.href)}
                                        className={cn(
                                            "relative flex-1 flex items-center justify-center px-3 py-2.5 rounded-[16px] text-sm select-none group",
                                            active
                                                ? "text-background font-semibold"
                                                : "text-foreground/60 hover:text-foreground font-medium transition-colors duration-200"
                                        )}
                                    >
                                        {/* Active glass pill — blur-dissolve entry */}
                                        <AnimatePresence>
                                            {active && (
                                                <motion.div
                                                    key={link.href}
                                                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                                    exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                    className="absolute inset-0 aero-pill rounded-[16px] pointer-events-none z-[-1]"
                                                >
                                                    {/* Shimmer sweep — fixed Unicode minus bug */}
                                                    <motion.span
                                                        className="absolute inset-0 rounded-[16px] pointer-events-none overflow-hidden"
                                                        aria-hidden
                                                    >
                                                        <motion.span
                                                            className="absolute inset-0 block rounded-[16px]"
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
                                                    </motion.span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Hover glow for inactive — CSS only, zero JS overhead */}
                                        <span
                                            className="absolute inset-0 rounded-[16px] bg-foreground/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-0"
                                        />

                                        <span className="relative z-10 tracking-tight whitespace-nowrap">
                                            {t(`links.${link.key}` as any)}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Mega Menu Dropdown — absolute, floats below the island */}
                    <AnimatePresence>
                        {currentDropdownKeys && currentSection && (
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
                                            {currentDropdownKeys.map((item: { key: string; href: string }, i: number) => (
                                                <Link
                                                    key={i}
                                                    href={item.href}
                                                    onClick={() => setHoveredLink(null)}
                                                    className="group flex flex-col px-3 py-3 rounded-xl hover:bg-foreground/[0.05] transition-colors duration-200"
                                                >
                                                    <span className="text-sm font-medium text-foreground flex items-center gap-1.5">
                                                        {t(`megaMenu.${currentSection}.${item.key}.label` as any)}
                                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                                                    </span>
                                                    <span className="text-xs text-foreground/40 group-hover:text-foreground/60 mt-0.5 transition-colors duration-200">
                                                        {t(`megaMenu.${currentSection}.${item.key}.desc` as any)}
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
                <div className="flex items-center gap-2">
                    <SettingsDropdown />

                    <Link href="/contact" tabIndex={-1} className="hidden lg:flex rounded-[24px] p-1 group relative">
                        <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50 rounded-[24px]" />
                        <Button
                            variant="primary"
                            className="relative z-10 font-semibold px-6 py-4 rounded-[20px] bg-blue-500 hover:bg-white hover:text-blue-600 text-white border-transparent shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:px-8"
                        >
                            {t('cta')}
                        </Button>
                    </Link>
                </div>
            </div>

        </header>
    );
}
