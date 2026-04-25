import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  drawAnimation?: boolean;
}

export function Logo({ className, drawAnimation = false }: LogoProps) {
  // If we're animating, we use pathLength. We'll set up variants for Framer Motion.
  // Since Logo is a pure SVG component without motion wrapper by default (to avoid client boundary issues everywhere),
  // we can use standard CSS animations or let the parent wrap it in motion.svg.
  // We'll define the paths cleanly so the parent can animate them if needed.

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 shrink-0", className)}
    >
      <defs>
        <mask id="cut-top">
          <rect width="100" height="100" fill="white" />
          <line x1="-10" y1="110" x2="110" y2="-10" stroke="black" strokeWidth="12" />
          <polygon points="-10,110 110,-10 110,110" fill="black" />
        </mask>
        
        <mask id="cut-bottom">
          <rect width="100" height="100" fill="white" />
          <line x1="-10" y1="110" x2="110" y2="-10" stroke="black" strokeWidth="12" />
          <polygon points="-10,110 110,-10 -10,-10" fill="black" />
        </mask>
      </defs>

      {/* Top-Left Glass Block */}
      <rect 
        x="12" 
        y="12" 
        width="76" 
        height="76" 
        rx="22" 
        className={cn("fill-foreground/5 stroke-foreground/40", drawAnimation && "stroke-dasharray-1000 stroke-dashoffset-1000 animate-draw")} 
        strokeWidth="4"
        mask="url(#cut-top)" 
      />
      
      {/* Bottom-Right Glass Block */}
      <rect 
        x="12" 
        y="12" 
        width="76" 
        height="76" 
        rx="22" 
        className={cn("fill-blue-500/10 stroke-blue-500/60", drawAnimation && "stroke-dasharray-1000 stroke-dashoffset-1000 animate-draw")}
        strokeWidth="4"
        mask="url(#cut-bottom)" 
      />
      
      {/* Inner Glows for more Glassy effect */}
      <rect 
        x="14" 
        y="14" 
        width="72" 
        height="72" 
        rx="20" 
        className="fill-foreground/10" 
        mask="url(#cut-top)" 
      />
      <rect 
        x="14" 
        y="14" 
        width="72" 
        height="72" 
        rx="20" 
        className="fill-blue-500/20" 
        mask="url(#cut-bottom)" 
      />
    </svg>
  );
}
