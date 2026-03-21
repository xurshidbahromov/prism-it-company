import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
    return (
        <div
            id={id}
            className={cn("w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20", className)}
        >
            {children}
        </div>
    );
}
