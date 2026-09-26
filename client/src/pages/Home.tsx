import React from "react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { HeroSection } from "@/components/home/hero/HeroSection";
import { BankBalanceIllusion } from "@/components/home/BankBalanceIllusion";
import { ConnectedMoneyFlow } from "@/components/home/ConnectedMoneyFlow";
import { MoneyQuestionsSection } from "@/components/home/MoneyQuestionsSection";
import { IndiaMoneyCalendar } from "@/components/home/IndiaMoneyCalendar";
import { AskYourMoneySection } from "@/components/home/AskYourMoneySection";
import { PersonalVsSharedSection } from "@/components/home/PersonalVsSharedSection";
import { ProductShowcaseSection } from "@/components/home/ProductShowcaseSection";
import { TrustPillarsSection } from "@/components/home/TrustPillarsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import "@/homepage-clarity.css";

export default function Home() {
  return (
    <SiteLayout>
      <PageMeta
        title="Kubear: Understand Your Complete Financial Life"
        description="Kubear connects your complete financial life and shows you what you can afford, what needs attention, and whether you're on track."
      />

      {/* Main Redesigned Homepage Container matching download.png */}
      <main className="kubear-home-clarity w-full overflow-hidden bg-[#FAF7F0] text-[#123630]">
        
        {/* Chapter 1: Hero Section */}
        <HeroSection />

        {/* Chapter 2: The Bank Balance Illusion */}
        <BankBalanceIllusion />

        {/* Chapter 3: Because Your Money Is All Connected */}
        <ConnectedMoneyFlow />

        {/* Chapter 4: Money Questions Deserve Better Than 'It Depends' */}
        <MoneyQuestionsSection />

        {/* Chapter 5: Because Money in India Has a Busy Calendar */}
        <IndiaMoneyCalendar />

        {/* Chapter 6: Dark Editorial Section - Ask Your Money Anything */}
        <AskYourMoneySection />

        {/* Chapter 7: Some Money Is Yours. Some Plans Are Shared. */}
        <PersonalVsSharedSection />

        {/* Chapter 8: The Kubear App - All That Clarity. One Place. */}
        <ProductShowcaseSection />

        {/* Chapter 9: Trust Section - Your Financial Life Is Personal */}
        <TrustPillarsSection />

        {/* Chapter 10: Final Call to Action - Now You Can Have A Plan Too */}
        <FinalCtaSection />

      </main>
    </SiteLayout>
  );
}
