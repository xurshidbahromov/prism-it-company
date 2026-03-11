"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    spotlightColor?: string;
}

export function SpotlightCard({
    children,
    className,
    spotlightColor = "rgba(79, 70, 229, 0.15)", // Default accent/indigo
    ...props
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/5 bg-surface/30 px-8 py-10 transition-colors hover:border-white/10 group",
                className
            )}
            {...props}
        >
            {/* Background Spotlight Layer */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            {/* Border Spotlight Layer */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                    maskImage: "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                    WebkitMaskImage: "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
                    maskClip: "content-box, border-box",
                    WebkitMaskClip: "content-box, border-box",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />
            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
}
