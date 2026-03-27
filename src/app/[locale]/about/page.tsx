import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "About | PRISM",
    description: "The team and vision behind PRISM software engineering.",
};

export default function AboutPage() {
    return (
        <main className="relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[1000px] h-[1000px] bg-foreground/[0.02] blur-[150px] rounded-full transition-opacity duration-1000"></div>
                <div className="absolute top-[40%] right-[-5%] w-[800px] h-[800px] bg-blue-500/[0.01] blur-[120px] rounded-full transition-opacity duration-1000"></div>
            </div>

            <div className="relative z-10">
                <FadeIn>
                    <About />
                </FadeIn>
                <FadeIn>
                    <CTA />
                </FadeIn>
            </div>
        </main>
    );
}
