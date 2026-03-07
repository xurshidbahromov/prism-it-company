import { Container } from "@/components/layout/Container";

export function About() {
    return (
        <section id="about" className="py-24">
            <Container>
                <div className="max-w-3xl mx-auto text-center border p-12 border-border border-dashed rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Placeholder</h2>
                    <p className="text-text-muted">
                        Information about the PRISM team, mission, and working style will reside here. This acts as a simple placeholder section for the scroll navigation.
                    </p>
                </div>
            </Container>
        </section>
    );
}
