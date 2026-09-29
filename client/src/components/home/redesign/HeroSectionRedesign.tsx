import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { HeroClarityArtwork } from "./HeroClarityArtwork";

const APP_URL = "https://kubear.kuberos.in";

export function HeroSectionRedesign() {
  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
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
        {/* Stay 2-columns on tablet & laptop (md: and up), only stacking on phones */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: HERO CONTENT                                         */}
          {/* ================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 xl:col-span-5 z-10 flex flex-col justify-center"
          >
            
            {/* Main Headline - Balanced, rhythmic editorial line breaks */}
            <h1 className="hero-serif-headline text-[2.65rem] sm:text-[3.25rem] md:text-[2.85rem] lg:text-[3.65rem] xl:text-[4.25rem] mb-6 sm:mb-7 md:mb-7 lg:mb-8 leading-[1.08]">
              <span className="block">Life is enough to manage.</span>
              <span className="block mt-1 sm:mt-1.5">
                Your money shouldn't{" "}
                <span className="relative inline-block mt-1">
                  <span 
                    className="absolute -inset-x-2 -inset-y-1 bg-[#FEF08A] rounded-xl sm:rounded-2xl -z-0 shadow-2xs" 
                    aria-hidden="true" 
                  />
                  <span className="relative z-10 px-1 font-normal">be another job.</span>
                </span>
              </span>
            </h1>

            {/* CTA Button & Trust Meta */}
            <div className="flex flex-col items-start gap-3 sm:gap-3.5">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0F172A] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm md:text-xs lg:text-[15px] shadow-[0_12px_24px_-6px_rgba(15,23,42,0.28)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.36)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Get started</span>
                  <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>

                <Link
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAF7F0] text-[#123630] border border-[rgba(18,54,48,0.18)] hover:border-[rgba(18,54,48,0.35)] font-semibold text-xs sm:text-sm md:text-xs lg:text-[15px] transition-all duration-200 shadow-2xs"
                >
                  <span>Explore Product</span>
                  <span className="text-xs leading-none">↗</span>
                </Link>
              </div>

              {/* Trust Indicators with subtle visual refinement */}
              <div className="text-slate-500 text-[11px] sm:text-xs lg:text-[13px] font-medium tracking-normal flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>Free to try</span>
                </span>
                <span className="text-slate-300">·</span>
                <span>Secure &amp; private</span>
                <span className="text-slate-300">·</span>
                <span>Made for India</span>
              </div>
            </div>

          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: CLARITY ARTWORK VISUAL                              */}
          {/* ================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 xl:col-span-7 flex justify-center md:justify-end items-center"
          >
            <HeroClarityArtwork />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
