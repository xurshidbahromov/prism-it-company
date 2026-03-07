import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverable = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300",
                    hoverable && "hover:border-white/20 hover:bg-white/[0.05] hover:shadow-glass group",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";
