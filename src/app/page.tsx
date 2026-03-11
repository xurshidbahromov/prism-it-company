import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StatsRow } from "@/components/sections/StatsRow";
import { Tabs } from "@/components/sections/Tabs";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn direction="none">
        <Hero />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <StatsRow />
      </FadeIn>
      <FadeIn>
        <Tabs />
      </FadeIn>
      <FadeIn>
        <Process />
      </FadeIn>
      <FadeIn>
        <Work />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
