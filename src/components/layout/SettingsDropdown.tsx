"use client";

import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Settings, Sun, Moon, Monitor, ChevronRight, Check } from "lucide-react";

const themes = [
    { value: "light", icon: Sun, label: "Light Mode" },
    { value: "dark", icon: Moon, label: "Dark Mode" },
    { value: "system", icon: Monitor, label: "System Sync" },
];

const languages = [
    { value: "en", label: "English" },
    { value: "uz", label: "O'zbekcha" },
    { value: "ru", label: "Русский" },
];

interface SettingsDropdownProps {
    direction?: "up" | "down";
}

export function SettingsDropdown({ direction = "down" }: SettingsDropdownProps = {}) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Current language (mock state since app doesn't have an active i18n provider yet)
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => { setMounted(true); }, []);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    };

    if (!mounted) return null;

    return (
        <div 
            className="relative z-50 flex items-center justify-center" 
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-[24px] text-foreground/60 hover:text-foreground transition-colors group focus:outline-none"
                aria-label="Settings"
                aria-expanded={isOpen}
            >
                <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)" }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]" />
                <Settings size={18} className="transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: direction === "down" ? -10 : 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: direction === "down" ? -10 : 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                            "absolute right-0 w-[220px] rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]",
                            direction === "down" ? "top-full mt-3" : "bottom-full mb-3"
                        )}

                    >
                        {/* Glass Dropdown Background */}
                        <div className="absolute inset-0 aero-island rounded-[24px] z-[-1]" style={{ backdropFilter: "blur(64px) saturate(200%)" }} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]" />
                        
                        <div className="relative z-10 p-2 flex flex-col gap-1">
                            
                            {/* Theme Section */}
                            <div className="px-3 py-2">
                                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold ml-1">Theme</span>
                            </div>
                            {themes.map((t) => {
                                const active = theme === t.value;
                                const Icon = t.icon;
                                return (
                                    <button
                                        key={t.value}
                                        onClick={() => setTheme(t.value)}
                                        className={cn(
                                            "w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-all duration-200",
                                            active ? "bg-foreground text-background shadow-md" : "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={14} strokeWidth={active ? 2.5 : 2} />
                                            {t.label}
                                        </div>
                                        {active && <Check size={14} strokeWidth={2.5} />}
                                    </button>
                                );
                            })}
                            
                            <div className="h-px bg-foreground/10 mx-2 my-1" />

                            {/* Language Section */}
                            <div className="px-3 py-2">
                                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold ml-1">Language</span>
                            </div>
                            {languages.map((l) => {
                                const active = currentLang === l.value;
                                return (
                                    <button
                                        key={l.value}
                                        onClick={() => setCurrentLang(l.value)}
                                        className={cn(
                                            "w-full flex items-center justify-between px-4 py-2.5 rounded-[16px] text-sm font-medium transition-all duration-200",
                                            active ? "text-blue-500 bg-blue-500/10" : "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground"
                                        )}
                                    >
                                        <span>{l.label}</span>
                                        {active && <Check size={14} className="text-blue-500" strokeWidth={2.5} />}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
