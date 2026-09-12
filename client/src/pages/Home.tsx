import React from "react";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ThreeQuestionsSection } from "@/components/home/ThreeQuestionsSection";
import { ConnectedLifeSection } from "@/components/home/ConnectedLifeSection";
import { PersonalHouseholdSection } from "@/components/home/PersonalHouseholdSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ClosingCtaSection } from "@/components/home/ClosingCtaSection";
import "@/homepage-clarity.css";

const APP_URL = "https://kubear.kuberos.in";

export default function Home() {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear: Understand Your Complete Financial Life"
        description="Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you’re on track for your goals."
      />

      {/* Scoped Homepage Body Wrapper */}
      <div className="kubear-home-clarity">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Eyebrow, Headline, Supporting Copy, Actions */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Eyebrow Pill */}
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF4ED] text-[#C96632] border border-[#FCD9C6] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] mb-6">
                  <span className="size-1.5 rounded-full bg-[#E85D3F] kh-live-dot mr-2 inline-block shadow-[0_0_6px_rgba(232,93,63,0.5)]" />
                  A little more clarity.
                </span>

                {/* Headline matching exact 3 lines */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-[#142823] tracking-tight leading-[1.12]">
                  Life has plans.<br />
                  Can your money<br />
                  keep up?
                </h1>

                {/* Exact supporting copy */}
                <p className="text-base sm:text-lg text-[#53625C] mt-6 max-w-lg leading-relaxed">
                  Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you’re on track for your goals.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-8">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kh-btn-primary inline-flex items-center justify-center min-h-[46px] px-7 py-3 rounded-xl text-white font-semibold text-sm sm:text-base cursor-pointer"
                  >
                    Get early access
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={scrollToHowItWorks}
                    className="kh-link-secondary inline-flex items-center gap-1.5 min-h-[46px] text-sm sm:text-base font-semibold py-2 cursor-pointer"
                  >
                    <span>See how it works</span>
                    <ArrowRight className="size-4 text-[#C96632]" />
                  </a>
                </div>

                {/* Authentic Handwritten Annotation in Kubear Terracotta */}
                <div className="mt-8 relative pointer-events-none">
                  <span className="kh-handwritten text-[#C96632] text-xl sm:text-2xl font-bold">
                    A calmer tomorrow starts here.
                  </span>
                  <svg
                    className="w-52 h-3.5 text-[#E85D3F] -mt-1"
                    viewBox="0 0 210 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 4 8 C 55 14, 155 2, 204 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Column: Split Hero Artwork with overlapping Answer Card */}
              <div className="lg:col-span-6 w-full">
                <HeroArtwork />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. HOW IT WORKS                                                           */}
        {/* ========================================================================= */}
        <HowItWorksSection />

        {/* ========================================================================= */}
        {/* 3. THREE MONEY QUESTIONS                                                  */}
        {/* ========================================================================= */}
        <ThreeQuestionsSection />

        {/* ========================================================================= */}
        {/* 4. CONNECTED FINANCIAL LIFE                                               */}
        {/* ========================================================================= */}
        <ConnectedLifeSection />

        {/* ========================================================================= */}
        {/* 5. PERSONAL AND HOUSEHOLD                                                 */}
        {/* ========================================================================= */}
        <PersonalHouseholdSection />

        {/* ========================================================================= */}
        {/* 6. FAQS                                                                   */}
        {/* ========================================================================= */}
        <FaqSection />

        {/* ========================================================================= */}
        {/* 7. CLOSING CTA                                                            */}
        {/* ========================================================================= */}
        <ClosingCtaSection appUrl={APP_URL} />
      </div>
    </SiteLayout>
  );
}
