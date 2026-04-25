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
import { Preloader } from "@/components/ui/Preloader";
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
  title: {
    default: "PRISM IT Studio — Web, Telegram & Business Software",
    template: "%s | PRISM IT Studio",
  },
  description: "Full-stack development studio building websites, Telegram bots & Mini Apps, business automation, and SaaS products for ambitious companies in Uzbekistan and beyond.",
  keywords: ["web development", "telegram bot", "telegram mini app", "business automation", "CRM", "SaaS", "Uzbekistan", "Tashkent"],
  authors: [{ name: "PRISM IT Studio" }],
  creator: "PRISM IT Studio",
  metadataBase: new URL("https://prismit.studio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prismit.studio",
    siteName: "PRISM IT Studio",
    title: "PRISM IT Studio — Web, Telegram & Business Software",
    description: "We build websites, Telegram solutions, business automation tools, and SaaS products. Based in Tashkent, Uzbekistan. Working globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRISM IT Studio",
    description: "Full-stack development studio — web, Telegram, automation, SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <Preloader />
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
