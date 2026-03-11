import { Container } from "@/components/layout/Container";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <Container>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                    Get in Touch
                </h2>
                <p className="text-foreground/60 leading-relaxed max-w-lg mb-8">
                    Have an idea, project, or question? Fill out the form below and we’ll
                    get back to you within 1–2 business days.
                </p>
                {/* placeholder form - replace with real implementation later */}
                <form className="max-w-xl mx-auto flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-foreground/20 rounded-lg bg-background/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-3 border border-foreground/20 rounded-lg bg-background/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="How can we help?"
                        rows={4}
                        className="w-full px-4 py-3 border border-foreground/20 rounded-lg bg-background/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="self-start px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-semibold transition"
                    >
                        Send Message
                    </button>
                </form>
            </Container>
        </section>
    );
}
