"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target or any parent is a link, button, or has a specific class
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest(".hover-trigger")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Visual offsets to center the rings around the *body* of the custom Mac cursors
    // rather than exactly at the tip (hotspot) where the actual click happens.
    const cursorOffsetX = 4;
    const cursorOffsetY = 4;

    return (
        <>
            {/* Small trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/50 pointer-events-none z-[9999] shadow-[0_0_15px_rgba(79,70,229,0.3)] hidden md:block"
                animate={{
                    x: mousePosition.x - 16 + cursorOffsetX,
                    y: mousePosition.y - 16 + cursorOffsetY,
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.5
                }}
            />
            {/* Outer subtle expanding glow on hover */}
            <motion.div
                className="fixed top-0 left-0 w-24 h-24 rounded-full border border-white/20 bg-white/5 pointer-events-none z-[9998] hidden md:block mix-blend-screen"
                animate={{
                    x: mousePosition.x - 48 + cursorOffsetX,
                    y: mousePosition.y - 48 + cursorOffsetY,
                    scale: isHovered ? 1.5 : 0.5,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8
                }}
            />
        </>
    );
}
