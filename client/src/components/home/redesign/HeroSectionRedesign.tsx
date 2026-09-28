import React from "react";
import { BarChart2, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { HeroVisualPlaceholder } from "./HeroVisualPlaceholder";

const APP_URL = "https://kubear.kuberos.in";

export function HeroSectionRedesign() {
  return (
    <section className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 overflow-hidden bg-white">
      {/* Editorial Fraunces serif styling matching the reference image */}
      <style>{`
        .hero-serif-headline {
          font-family: "Fraunces", "DM Serif Display", Georgia, serif !important;
          font-weight: 400 !important;
          color: #123630 !important;
          letter-spacing: -0.03em !important;
          line-height: 1.09 !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: HERO / SECOND SECTION CONTENT                         */}
          {/* ================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 z-10 flex flex-col justify-center"
          >
            
            {/* Main Headline - Editorial Fraunces Serif with 5 lines */}
            <h1 className="hero-serif-headline text-[2.75rem] sm:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.15rem] mb-7 sm:mb-8">
              Life is enough<br />
              to manage.<br />
              Your money<br />
              shouldn't<br />
              <span className="relative inline-block mt-1">
                <span 
                  className="absolute -inset-x-2 -inset-y-0.5 bg-[#FEF08A] rounded-xl sm:rounded-2xl -z-0" 
                  aria-hidden="true" 
                />
                <span className="relative z-10 px-1">be another job.</span>
              </span>
            </h1>

            {/* 3 Value Proposition Bullets */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-9 max-w-lg">
              
              {/* Bullet 1: Income, spending, EMIs */}
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="size-9 sm:size-10 rounded-full bg-[#E8F8F0] flex items-center justify-center shrink-0 text-[#059669]">
                  <BarChart2 className="size-4 sm:size-5" />
                </div>
                <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed">
                  Income, spending, EMIs, savings, investments and goals connected in one clear view
                </p>
              </div>

              {/* Bullet 2: Affordability */}
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="size-9 sm:size-10 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 text-[#2563EB]">
                  <Eye className="size-4 sm:size-5" />
                </div>
                <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed">
                  See where you stand and what you can afford
                </p>
              </div>

              {/* Bullet 3: Attention next */}
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="size-9 sm:size-10 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 text-[#EA580C]">
                  <Zap className="size-4 sm:size-5" />
                </div>
                <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed">
                  Know what needs your attention next
                </p>
              </div>

            </div>

            {/* CTA Button & Trust Meta */}
            <div className="flex flex-col items-start gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get started</span>
                <span className="text-base leading-none">→</span>
              </a>

              <p className="text-slate-500 text-xs sm:text-[13px] font-medium tracking-normal flex items-center gap-2">
                <span>Free to try</span>
                <span className="text-slate-300">·</span>
                <span>Secure &amp; private</span>
                <span className="text-slate-300">·</span>
                <span>Made for India</span>
              </p>
            </div>

          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: SCRIBBLER ARTWORK VISUAL                            */}
          {/* ================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center"
          >
            <HeroVisualPlaceholder />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
