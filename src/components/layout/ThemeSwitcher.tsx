"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Sun, Moon, Monitor } from "lucide-react";

const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "system", icon: Monitor, label: "System" },
    { value: "dark", icon: Moon, label: "Dark" },
];

interface ThemeSwitcherProps {
    uniqueId?: string;
}

export function ThemeSwitcher({ uniqueId = "default" }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const current = options.find((o) => o.value === theme) ?? options[2];
    const CurrentIcon = current.icon;

    return (
        <div
            className="relative flex h-10 w-11 items-center justify-center z-20"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Absolute expanding container to prevent flex sibling pushing */}
            <motion.div
                className="absolute right-0 flex items-center rounded-[24px] px-1 py-1 origin-right"
                animate={{ width: hovered ? options.length * 36 + 8 : 44 }}
                transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.9 }}
            >
                {/* Glass background */}
                <div
                    className="absolute inset-0 aero-island rounded-[24px] z-[-1]"
                    style={{ backdropFilter: "blur(64px) saturate(200%)", WebkitBackdropFilter: "blur(64px) saturate(200%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]" />

                <div className="relative flex items-center z-10 h-8 overflow-hidden w-full">
                <AnimatePresence mode="popLayout">
                    {hovered ? (
                            // Expanded: show all options
                            <div className="flex relative">
                                {options.map((option, index) => {
                                    const active = theme === option.value;
                                    const Icon = option.icon;
                                    return (
                                        <div key={option.value} className="relative w-9 h-8 shrink-0 flex items-center justify-center">
                                            {active && (
                                                <motion.div
                                                    layoutId={`active-theme-pill-${uniqueId}`}
                                                    className="absolute inset-0 bg-foreground rounded-[18px]"
                                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                                />
                                            )}
                                            <button
                                                onClick={() => setTheme(option.value)}
                                                className={cn(
                                                    "relative z-10 w-full h-full flex items-center justify-center transition-colors duration-300",
                                                    active ? "text-background" : "text-foreground/50 hover:text-foreground"
                                                )}
                                                title={`${option.label} mode`}
                                            >
                                                <Icon size={15} strokeWidth={active ? 2.5 : 1.8} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            // Collapsed: show only current
                            <div className="relative w-9 h-8 shrink-0">
                                <motion.div
                                    layoutId={`theme-active-${uniqueId}`}
                                    className="absolute inset-0 bg-transparent rounded-[18px]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <motion.button
                                    key="current"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.85 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    onClick={() => setHovered(true)}
                                    className="relative z-10 w-full h-full flex items-center justify-center rounded-[18px] text-foreground/60"
                                    title="Change theme"
                                >
                                    <CurrentIcon size={15} strokeWidth={2} />
                                </motion.button>
                            </div>
                        )}
                </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

