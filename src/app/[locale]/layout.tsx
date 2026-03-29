import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Dancing_Script } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { PageTransition } from "@/components/ui/PageTransition";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} ${dancingScript.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-body transition-colors duration-500 leading-relaxed`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalBackground />
          <NoiseOverlay />
          <Navbar />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <MobileNav />
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
