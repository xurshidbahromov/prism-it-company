import { Services } from "@/components/sections/Services";
import { DetailedCapabilities } from "@/components/sections/DetailedCapabilities";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout/Container";

export const metadata = {
    title: "Expertise | PRISM",
    description: "Our core software engineering and design capabilities.",
};

export default function ExpertisePage() {
    return (
        <main className="pt-20 relative overflow-hidden">
            {/* Background Glows for Expertise Detail Refraction */}
            <div className="absolute top-[15%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
            <div className="absolute top-[45%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-40"></div>
            <div className="absolute top-[75%] right-[5%] w-[700px] h-[700px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen opacity-30"></div>

            <FadeIn>
                <Services />
            </FadeIn>

            <Container className="pt-24 pb-12">
                <div className="max-w-3xl">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">Deep Dive</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-medium text-foreground tracking-tight">
                        Our Core Technological <br /> Pillars & Capabilities
                    </h3>
                </div>
            </Container>

            <FadeIn>
                <DetailedCapabilities />
            </FadeIn>

            <FadeIn>
                <CTA />
            </FadeIn>
        </main>
    );
}
