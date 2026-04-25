import { getCaseStudy, caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CTA } from "@/components/sections/CTA";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const t = await getTranslations('CaseStudies');
  const tCommon = await getTranslations('Work'); // if needed for general strings, or we can just use static text

  return (
    <main className="relative overflow-hidden w-full pb-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] blur-[150px] rounded-full transition-opacity duration-1000"
          style={{ backgroundColor: study.color, opacity: 0.5 }}
        ></div>
      </div>

      <Container className="pt-32 md:pt-48 relative z-10">
        {/* Back Link */}
        <FadeIn>
          <Link 
            href={`/${locale}/work`} 
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('back')}
          </Link>
        </FadeIn>

        {/* Hero Section */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 md:mb-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-6 block">
                {t(`${study.slug}.role`)}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1.05] text-foreground">
                {t(`${study.slug}.title`)}
              </h1>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end text-sm text-foreground/60">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{t('clientLabel')}</span>
                <span className="font-medium text-foreground">{t(`${study.slug}.client`)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{t('timelineLabel')}</span>
                <span className="font-medium text-foreground">{t(`${study.slug}.timeline`)}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Main Image */}
        <FadeIn>
          <div className="w-full aspect-video md:aspect-[21/9] relative rounded-[24px] md:rounded-[40px] overflow-hidden mb-24 border border-foreground/[0.08] shadow-2xl">
            <Image 
              src={study.image} 
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/40 mb-6">{t('techStack')}</h3>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] text-xs font-medium text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-16">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6">{t('challenge')}</h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                {t(`${study.slug}.challenge`)}
              </p>
            </FadeIn>
            
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6">{t('solution')}</h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                {t(`${study.slug}.solution`)}
              </p>
            </FadeIn>

            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-8">{t('resultsTitle')}</h2>
              <div className="flex flex-col gap-4">
                {[0, 1, 2].map((i) => {
                  const resultText = t(`${study.slug}.results.${i}`);
                  if (!resultText) return null;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground/80 font-medium">{resultText}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
      
      <div className="mt-32">
        <CTA />
      </div>
    </main>
  );
}
