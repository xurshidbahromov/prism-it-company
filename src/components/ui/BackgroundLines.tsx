"use client";

import { motion } from "framer-motion";

export function BackgroundLines() {
  return (
    <div className="absolute inset-x-0 top-[100vh] bottom-0 pointer-events-none z-0 overflow-hidden">
      {/* 
          These lines are modeled after the StatsRow style:
          1px width, subtle gradients, and sharp architectural turns.
      */}
      
      <div className="relative w-full h-full opacity-60">
        {/* Main Backbone - Left */}
        <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent hidden md:block" />
        
        {/* Branch: Services to Stats */}
        <div className="absolute left-[20%] top-[400px] w-[40%] h-[1px] bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent hidden md:block" />
        <div className="absolute left-[60%] top-[400px] h-[1200px] w-[1px] bg-gradient-to-b from-foreground/10 via-transparent to-transparent hidden md:block" />
        
        {/* Branch: Stats to Process */}
        <div className="absolute right-[20%] top-[1800px] w-[50%] h-[1px] bg-gradient-to-l from-foreground/10 via-foreground/5 to-transparent hidden md:block" />
        <div className="absolute right-[20%] top-[1800px] h-[3000px] w-[1px] bg-gradient-to-b from-foreground/10 via-transparent to-transparent hidden md:block" />
        
        {/* Cross Connection */}
        <div className="absolute left-[10%] top-[3500px] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-foreground/5 to-transparent hidden md:block" />

        {/* Cinematic Glow Pulses */}
        <motion.div
          animate={{ 
            y: [0, 6000],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-[19.95%] top-0 w-[2px] h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent blur-sm z-10 hidden md:block"
        />
        
        <motion.div
          animate={{ 
            y: [0, 6000],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: 4,
            ease: "linear"
          }}
          className="absolute right-[19.95%] top-0 w-[2px] h-80 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent blur-md z-10 hidden md:block"
        />
      </div>
    </div>
  );
}
