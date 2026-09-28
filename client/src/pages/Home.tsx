import React from "react";
import { motion, type Variants } from "framer-motion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { HeroSectionRedesign } from "@/components/home/redesign/HeroSectionRedesign";
import { PlansChangeSection } from "@/components/home/redesign/PlansChangeSection";
import { YouNeedAnAnswerSection } from "@/components/home/redesign/YouNeedAnAnswerSection";
import { ShouldntHaveToAskSection } from "@/components/home/redesign/ShouldntHaveToAskSection";
import { JustMineAndOursSection } from "@/components/home/redesign/JustMineAndOursSection";
import { YourLifeComesFirstSection } from "@/components/home/redesign/YourLifeComesFirstSection";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1]
    } 
  }
};

export default function Home() {
  return (
    <SiteLayout>
      <PageMeta
        title="Kubear: Understand Your Complete Financial Life"
        description="Kubear brings your income, spending, loans, savings, investments and goals together, so you know what you can spend, what needs attention and what to do next."
      />

      <main className="w-full overflow-hidden bg-white text-[#16191E]">
        
        {/* Section 1: Hero */}
        <HeroSectionRedesign />

        {/* Section 2: Plans Change (02) */}
        <PlansChangeSection />

        {/* Section 3: You Need an Answer (03) */}
        <YouNeedAnAnswerSection />

        {/* Section 4: And Sometimes, You Shouldn't Have to Ask (04) */}
        <ShouldntHaveToAskSection />

        {/* Section 5: Not everything needs to be shared (05) */}
        <JustMineAndOursSection />

        {/* Section 6: Your Life Comes First (06) */}
        <YourLifeComesFirstSection />

      </main>
    </SiteLayout>
  );
}
