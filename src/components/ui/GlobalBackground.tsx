"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function GlobalBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Orb 1 — parallax drifts down and shifts right on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.4, 1], [0.7, 1, 0.5]);

  // Orb 2 — counter-parallax, shifts left
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4, 1], [0.55, 0.85, 0.4]);

  // Orb 3 — fades in from center as you scroll
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.35, 0.55, 0.2]);
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {/* Orb 1 — top left: cool blue-gray */}
      <motion.div
        style={{
          y: y1, x: x1, scale: scale1, opacity: opacity1,
          background: "radial-gradient(circle at 40% 40%, rgba(99,155,219,0.22) 0%, rgba(147,197,253,0.1) 40%, transparent 80%)",
          filter: "blur(40px)",
        }}
        className="absolute -top-[20%] -left-[15%] w-[70vw] h-[70vw] min-w-[550px] min-h-[550px] rounded-full"
      />

      {/* Orb 2 — bottom right: blue shimmer */}
      <motion.div
        style={{
          y: y2, x: x2, scale: scale2, opacity: opacity2,
          background: "radial-gradient(circle at 60% 60%, rgba(59,130,246,0.18) 0%, rgba(212,212,212,0.06) 45%, transparent 80%)",
          filter: "blur(40px)",
        }}
        className="absolute -bottom-[20%] -right-[15%] w-[60vw] h-[60vw] min-w-[480px] min-h-[480px] rounded-full"
      />

      {/* Orb 3 — center: fades in on scroll */}
      <motion.div
        style={{
          y: y3, scale: scale3, opacity: opacity3,
          background: "radial-gradient(circle at 50% 50%, rgba(147,197,253,0.15) 0%, rgba(99,155,219,0.06) 50%, transparent 80%)",
          filter: "blur(60px)",
        }}
        className="absolute top-[20%] left-[15%] w-[65vw] h-[65vw] min-w-[500px] min-h-[500px] rounded-full"
      />

      {/* Top shine */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)" }}
      />

    </div>
  );
}
