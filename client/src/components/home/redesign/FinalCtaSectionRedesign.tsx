import React from "react";
import { ArrowRight, Check } from "lucide-react";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

export function FinalCtaSectionRedesign() {
  return (
    <section id="start" className="w-full py-24 sm:py-36 bg-[#F8F5EE] border-t border-[#ECE7DC] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Small Label */}
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8D96]">
          GET STARTED
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#16191E] leading-[1.08]">
          See where you stand.
        </h2>

        {/* Body */}
        <p className="text-base sm:text-lg text-[#525660] leading-relaxed max-w-xl mx-auto font-normal">
          Bring your finances together and get a clear picture of what you can afford and what to do next.
        </p>

        {/* CTAs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-[#16191E] hover:bg-black text-white font-semibold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get started</span>
            <ArrowRight className="size-4" />
          </a>

          <a
            href={PLAY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#16191E] font-semibold text-sm sm:text-[15px] border border-[#E5E0D5] shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <svg className="size-4 shrink-0" viewBox="0 0 512 512">
              <path fill="#4285F4" d="M32.5 17.5L273.7 256 32.5 494.5c-4.4-4.8-7-11.2-7-18.5V36c0-7.3 2.6-13.7 7-18.5z"/>
              <path fill="#FBBC04" d="M379.8 152.2L32.5 17.5l241.2 238.5 106.1-103.8z"/>
              <path fill="#EA4335" d="M32.5 494.5l347.3-134.7-106.1-103.8L32.5 494.5z"/>
              <path fill="#34A853" d="M486.9 238.9l-107.1-86.7-106.1 103.8 106.1 103.8 107.1-86.7c7.5-6.1 11.8-15.3 11.8-25.2s-4.3-19.1-11.8-25.2z"/>
            </svg>
            <span>Get it on Google Play</span>
          </a>
        </div>

        {/* Trust Unboxed Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-[13px] font-medium text-[#7A7D85]">
          <div className="flex items-center gap-1.5 text-[#F06535]">
            <Check className="size-3.5" />
            <span className="text-[#525660]">Free to explore</span>
          </div>
          <span className="text-[#D8D4CA] hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-[#F06535]">
            <Check className="size-3.5" />
            <span className="text-[#525660]">No credit card required</span>
          </div>
          <span className="text-[#D8D4CA] hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-[#F06535]">
            <Check className="size-3.5" />
            <span className="text-[#525660]">Safe and secure</span>
          </div>
        </div>

      </div>
    </section>
  );
}
