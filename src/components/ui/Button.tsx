import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none",

                    /* Variants */
                    variant === "primary" && "bg-white text-background hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                    variant === "secondary" && "bg-accent text-white hover:brightness-110 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.4)]",
                    variant === "ghost" && "bg-transparent text-white hover:bg-white/5 border border-transparent hover:border-white/10",

                    /* Sizes */
                    size === "sm" && "h-9 px-4 text-sm",
                    size === "md" && "h-11 px-6 text-base",
                    size === "lg" && "h-14 px-8 text-lg",

                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
