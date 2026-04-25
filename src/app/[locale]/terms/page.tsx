import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Terms of Service | PRISM IT Studio",
    description: "Terms of Service for PRISM IT Studio — the rules and conditions for using our services.",
};

export default function TermsPage() {
    const t = useTranslations("Legal");

    const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <main className="relative min-h-screen">
            <Container>
                <div className="pt-44 pb-32 max-w-3xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                        {t('badge')}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tighter leading-[1.05] mb-6 text-foreground">
                        {t('termsTitle')}
                    </h1>
                    <p className="text-foreground/50 text-sm mb-16">{t('updated')}</p>

                    <div className="space-y-12 text-foreground/70 leading-relaxed">
                        {sections.map((num) => {
                            const sectionList = t.raw(`termsSections.${num}.list` as any) as string[] | undefined;
                            const p = t.raw(`termsSections.${num}.p` as any) as string | undefined;
                            
                            return (
                                <div key={num}>
                                    <section className="space-y-4">
                                        <h2 className="text-xl font-heading font-medium text-foreground tracking-tight">{t(`termsSections.${num}.title` as any)}</h2>
                                        {p && <p>{p}</p>}
                                        
                                        {sectionList && sectionList.length > 0 && (
                                            <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/60">
                                                {sectionList.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {num === 9 && (
                                            <div className="bg-foreground/[0.02] border border-foreground/[0.06] rounded-2xl p-6 mt-4 space-y-2">
                                                <p><strong className="text-foreground/80">PRISM IT Studio</strong></p>
                                                <p>Tashkent, Uzbekistan</p>
                                                <p>Email: <a href="mailto:xurshidbahromov06@gmail.com" className="text-blue-500 hover:underline">xurshidbahromov06@gmail.com</a></p>
                                            </div>
                                        )}
                                    </section>
                                    {num !== sections[sections.length - 1] && <div className="h-px bg-foreground/[0.06] mt-12" />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </main>
    );
}
