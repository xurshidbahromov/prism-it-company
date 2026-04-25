"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("prism_preloader_played");
    if (hasLoaded) {
      // setIsLoading(false);
      // return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("prism_preloader_played", "true");
    }, 3000); // 3 seconds to let the drawing animation finish completely

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background/90 backdrop-blur-2xl overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-6">
            
            {/* Logo Drawing Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Motion SVG to animate the paths of the Logo */}
              <motion.svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 h-32 md:w-48 md:h-48"
              >
                <defs>
                  <mask id="cut-top-pre">
                    <rect width="100" height="100" fill="white" />
                    <line x1="-10" y1="110" x2="110" y2="-10" stroke="black" strokeWidth="12" />
                    <polygon points="-10,110 110,-10 110,110" fill="black" />
                  </mask>
                  
                  <mask id="cut-bottom-pre">
                    <rect width="100" height="100" fill="white" />
                    <line x1="-10" y1="110" x2="110" y2="-10" stroke="black" strokeWidth="12" />
                    <polygon points="-10,110 110,-10 -10,-10" fill="black" />
                  </mask>
                </defs>

                {/* The Initial Full Border Drawing (No Mask so it draws perfectly) */}
                <motion.rect 
                  x="12" y="12" width="76" height="76" rx="22" 
                  className="stroke-foreground/60" 
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 0 }}
                  transition={{ 
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    opacity: { duration: 0.2, delay: 1.8 } 
                  }}
                />

                {/* The Laser Cut Line */}
                <motion.line 
                  x1="-10" y1="110" x2="110" y2="-10" 
                  className="stroke-background/60" 
                  strokeWidth="12"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 0 }}
                  transition={{ 
                    pathLength: { duration: 0.5, ease: "easeInOut", delay: 1.2 },
                    opacity: { duration: 0.2, delay: 1.8 }
                  }}
                />

                {/* The Final Masked Pieces Fading In */}
                <motion.rect 
                  x="12" y="12" width="76" height="76" rx="22" 
                  className="fill-foreground/10 stroke-foreground/60" 
                  strokeWidth="4"
                  mask="url(#cut-top-pre)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
                />
                
                <motion.rect 
                  x="12" y="12" width="76" height="76" rx="22" 
                  className="fill-blue-500/20 stroke-blue-500" 
                  strokeWidth="4"
                  mask="url(#cut-bottom-pre)" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
                />
              </motion.svg>
            </motion.div>

            {/* Typography Reveal */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
                  className="text-2xl md:text-4xl font-heading font-semibold tracking-[0.3em] uppercase text-foreground leading-none"
                >
                  PRISM
                </motion.h1>
              </div>
              <div className="overflow-hidden mt-2">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}
                  className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-foreground/40 text-center"
                >
                  IT Studio
                </motion.p>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
