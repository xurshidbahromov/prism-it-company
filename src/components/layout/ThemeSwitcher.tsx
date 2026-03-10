"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Sun, Moon, Laptop } from "lucide-react";

interface ThemeSwitcherProps {
    uniqueId?: string;
}

export function ThemeSwitcher({ uniqueId = "default" }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const options = [
        { value: "light", icon: Sun, label: "Light" },
        { value: "system", icon: Laptop, label: "System" },
        { value: "dark", icon: Moon, label: "Dark" },
    ];

    return (
        <div className="flex items-center relative rounded-[24px] px-1 py-1 group">
            {/* Dedicated Glass Layer */}
            <div
                className="absolute inset-0 aero-island rounded-[24px] z-[-1]"
                style={{ backdropFilter: 'blur(64px) saturate(200%)', WebkitBackdropFilter: 'blur(64px) saturate(200%)' }}
            ></div>
            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40 rounded-[24px]"></div>

            {/* Liquid Background Layer */}
            <div
                className="absolute inset-x-1 inset-y-1 pointer-events-none z-0 flex items-center justify-between overflow-hidden rounded-[18px]"
                style={{ filter: "url(#goo)", width: "calc(100% - 8px)" }}
            >
                {options.map((option) => (
                    <div key={`bg-${option.value}`} className="relative h-full flex-1 flex items-center justify-center">
                        {theme === option.value && (
                            <motion.div
                                layoutId={`theme-pill-${uniqueId}`}
                                className="h-full w-[94%] aero-pill rounded-[18px]"
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

            {/* Buttons Layer */}
            <div className="relative flex items-center z-10 w-full h-8">
                {options.map((option) => {
                    const active = theme === option.value;
                    const Icon = option.icon;
                    return (
                        <button
                            key={option.value}
                            onClick={() => setTheme(option.value)}
                            className={cn(
                                "flex-1 flex items-center justify-center h-full px-2.5 rounded-[18px] transition-colors duration-500",
                                active ? "text-background" : "text-foreground/40 hover:text-foreground"
                            )}
                            title={`Switch to ${option.label} theme`}
                        >
                            <Icon size={16} strokeWidth={active ? 2.5 : 2} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
