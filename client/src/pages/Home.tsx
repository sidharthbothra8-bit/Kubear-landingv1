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
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

export default function Home() {
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
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-[clamp(1rem,3.5vw,3.5rem)] items-center">
              {/* Left Column: Eyebrow, Headline, Supporting Copy, Actions (always col-span-6) */}
              <div className="col-span-6 flex flex-col items-start text-left min-w-0">
                {/* Eyebrow Pill */}
                <span className="inline-flex items-center px-[clamp(0.6rem,1.2vw,0.875rem)] py-[clamp(0.2rem,0.5vw,0.35rem)] rounded-full text-[clamp(0.68rem,0.85vw,0.75rem)] font-bold bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] mb-4 sm:mb-6">
                  <span className="size-1.5 rounded-full bg-[#EA580C] kh-live-dot mr-1.5 inline-block shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                  Live Indian Financial Clarity
                </span>

                {/* Headline matching exact 3 lines with fluid proportional clamp */}
                <h1 className="text-[clamp(1.5rem,3.4vw,3.6rem)] font-extrabold text-[#0E241E] tracking-tight leading-[1.12]">
                  Life has plans.<br />
                  Can your money<br />
                  keep up?
                </h1>

                {/* Exact supporting copy with fluid sizing */}
                <p className="text-[clamp(0.8rem,1.2vw,1.125rem)] text-[#42564F] mt-3 sm:mt-5 max-w-lg leading-relaxed font-medium">
                  Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you’re on track for your goals.
                </p>

                {/* Actions - consistently side-by-side with proportional padding */}
                <div className="flex flex-row items-center gap-3 sm:gap-5 mt-5 sm:mt-8">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kh-btn-primary inline-flex items-center justify-center min-h-[clamp(38px,3.8vw,48px)] px-[clamp(1rem,2vw,2rem)] py-[clamp(0.45rem,0.9vw,0.75rem)] rounded-xl text-white font-bold text-[clamp(0.76rem,1.05vw,1rem)] cursor-pointer gap-2 whitespace-nowrap"
                  >
                    <span>Start on Web</span>
                    <ArrowRight className="size-[clamp(13px,1.2vw,16px)]" />
                  </a>
                  <a
                    href={PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kh-link-secondary inline-flex items-center gap-1.5 min-h-[clamp(38px,3.8vw,48px)] text-[clamp(0.76rem,1.05vw,1rem)] font-bold py-1 cursor-pointer whitespace-nowrap"
                  >
                    <span>Get it on Google Play</span>
                    <ArrowRight className="size-[clamp(13px,1.2vw,16px)] text-[#EA580C]" />
                  </a>
                </div>

                {/* Authentic Handwritten Annotation in Surya Saffron */}
                <div className="mt-5 sm:mt-8 relative pointer-events-none">
                  <span className="kh-handwritten text-[#EA580C] text-[clamp(1rem,1.8vw,1.5rem)] font-bold block">
                    A calmer tomorrow starts here.
                  </span>
                  <svg
                    className="w-[clamp(130px,18vw,210px)] h-3 text-[#EA580C] -mt-1"
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

              {/* Right Column: Split Hero Artwork with overlapping Answer Card (always col-span-6) */}
              <div data-reveal data-reveal-delay="1" className="col-span-6 w-full min-w-0">
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
