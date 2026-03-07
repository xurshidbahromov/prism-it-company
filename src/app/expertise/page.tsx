import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "Expertise | PRISM",
    description: "Our core software engineering and design capabilities.",
};

export default function ExpertisePage() {
    return (
        <main className="pt-20">
            <FadeIn>
                <Services />
            </FadeIn>
            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
