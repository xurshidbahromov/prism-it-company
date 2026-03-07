import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "About | PRISM",
    description: "The team and vision behind PRISM software engineering.",
};

export default function AboutPage() {
    return (
        <main className="pt-20">
            <FadeIn>
                <About />
            </FadeIn>
            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
