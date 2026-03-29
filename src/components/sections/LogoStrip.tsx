import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";

export function LogoStrip() {
    const t = useTranslations("LogoStrip");
    const logos = [
        "ACME Corp",
        "GlobalTech",
        "Nexus",
        "Vanguard",
        "Horizon",
    ];

    return (
        <section className="py-12 border-y border-foreground/10 bg-background transition-colors">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-sm font-semibold tracking-widest text-text-muted uppercase shrink-0">
                        {t("trusted")}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 w-full opacity-50 grayscale">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="text-xl font-heading font-bold text-foreground/40 hover:text-foreground transition-all duration-300 transform hover:scale-105 cursor-default"
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
