import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
    title: "Work | PRISM",
    description: "Selected case studies and digital products.",
};

export default function WorkPage() {
    return (
        <main className="pt-20">
            <FadeIn>
                <Work />
            </FadeIn>
            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
