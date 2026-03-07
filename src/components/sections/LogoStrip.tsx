import { Container } from "@/components/layout/Container";

export function LogoStrip() {
    const logos = [
        "ACME Corp",
        "GlobalTech",
        "Nexus",
        "Vanguard",
        "Horizon",
    ];

    return (
        <section className="py-12 border-y border-border/50 bg-background/50">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-sm font-semibold tracking-widest text-text-muted uppercase shrink-0">
                        Choice of market leaders
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 w-full opacity-50 grayscale">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="text-xl font-heading font-bold text-text-muted hover:text-white transition-colors duration-300"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
