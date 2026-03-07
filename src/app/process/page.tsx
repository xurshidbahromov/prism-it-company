import { Process } from "@/components/sections/Process";
import { Tabs } from "@/components/sections/Tabs";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "Process | PRISM",
    description: "Our engineered approach to building digital products.",
};

export default function ProcessPage() {
    return (
        <main className="pt-20">
            <FadeIn>
                <Tabs />
            </FadeIn>
            <FadeIn>
                <Process />
            </FadeIn>
            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
