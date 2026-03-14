import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const AeroButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none",

                    /* Variants */
                    variant === "primary" && "bg-foreground text-background hover:opacity-90 shadow-[0_4px_12px_var(--aero-shadow)]",
                    variant === "secondary" && "bg-accent text-white hover:brightness-110 shadow-[0_4px_15px_rgba(59,130,246,0.3)]",
                    variant === "ghost" && "bg-transparent text-foreground hover:bg-foreground/5 border border-foreground/10",

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
AeroButton.displayName = "AeroButton";
