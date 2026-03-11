import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { PageTransition } from "@/components/ui/PageTransition";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-inter", // Keeping variable name same to minimize CSS/Tailwind changes
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-space-grotesk", // Keeping variable name same to minimize CSS/Tailwind changes
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRISM",
  description: "Engineering modern digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${dancingScript.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-body transition-colors duration-500 leading-relaxed`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseOverlay />
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <MobileNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
