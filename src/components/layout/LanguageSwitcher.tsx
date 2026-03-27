"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
    { value: "uz", label: "UZ" },
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
];

export function LanguageSwitcher() {
    const current = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [hovered, setHovered] = useState(false);

    const changeLanguage = (lang: string) => {
        router.replace(pathname, { locale: lang });
    };

    return (
        <div
            className="relative flex h-10 w-12 items-center justify-center z-20"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Absolute expanding container to prevent flex sibling pushing */}
            <motion.div
                className="absolute right-0 flex items-center rounded-[24px] px-1 py-1 origin-right"
                animate={{ width: hovered ? languages.length * 40 + 8 : 48 }}
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
                        languages.map((lang) => (
                            <motion.button
                                key={lang.value}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                onClick={() => changeLanguage(lang.value)}
                                className={cn(
                                    "w-10 h-8 flex items-center justify-center rounded-[18px] text-[11px] font-bold tracking-wider transition-colors duration-300 shrink-0",
                                    current === lang.value
                                        ? "bg-foreground text-background"
                                        : "text-foreground/40 hover:text-foreground"
                                )}
                                title={lang.label}
                            >
                                {lang.label}
                            </motion.button>
                        ))
                    ) : (
                        <motion.button
                            key="current"
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={() => setHovered(true)}
                            className="w-10 h-8 flex items-center justify-center rounded-[18px] text-[11px] font-bold tracking-wider text-foreground/60 shrink-0"
                            title="Change language"
                        >
                            {current.toUpperCase()}
                        </motion.button>
                    )}
                </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
