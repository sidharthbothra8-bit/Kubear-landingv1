import React from "react";
import { User } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

export function HeroArtwork() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Framed Lifestyle Photography Container */}
      <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[490px] rounded-[2rem] overflow-hidden shadow-[0_12px_36px_rgba(20,40,32,0.08)] border border-[#E0E9E2] bg-[#F4F7F4] group">
        {/* Serene Sunlit Workspace Still Life */}
        <img
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop"
          alt="Serene sunlit wooden desk with journal, pen, and coffee"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient subtle vignette gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

        {/* Background framed board detail: Plans People Progress */}
        <div className="absolute top-5 right-5 w-24 sm:w-28 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E1D5] rounded-xl p-2.5 shadow-[0_4px_12px_rgba(20,40,32,0.08)] rotate-1 pointer-events-none hidden xs:block transition-transform duration-200">
          <div className="text-[10px] sm:text-[11px] font-bold text-[#6D6456] leading-tight font-serif tracking-wide">
            Plans<br />
            People<br />
            Progress
          </div>
          <div className="text-[#E85D3F] text-[11px] mt-0.5">♥</div>
        </div>

        {/* Desk Mug Detail: Good Money Brighter Days */}
        <div className="absolute bottom-6 right-5 sm:right-8 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8E0D2] rounded-xl px-3.5 py-2.5 shadow-[0_4px_12px_rgba(20,40,32,0.08)] pointer-events-none hidden sm:block">
          <div className="text-[10px] font-bold text-[#45423D] leading-tight text-center font-serif">
            Good Money<br />
            Brighter Days
          </div>
        </div>
      </div>

      {/* Overlapping Answer Card in the lower-left area with physics-based floating elevation */}
      <div className="kh-floating-hero-card mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 sm:max-w-[360px] w-full rounded-2xl p-4 sm:p-5 z-20">
        <div className="flex items-center justify-end mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#EDE4D8] text-[11px] font-medium text-[#142823] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <span>Can I spend ₹9,000 this month?</span>
            <span className="size-4 rounded-full bg-[#FDEEE5] flex items-center justify-center shrink-0">
              <User className="size-2.5 text-[#C96632]" />
            </span>
          </div>
        </div>

        {/* Answer result block in warm balanced light surface with dark circle logo */}
        <div className="rounded-xl bg-gradient-to-br from-[#FAFCFA] via-[#F6FAF7] to-[#EEF5F0] border border-[#D8E6DC] p-3.5 sm:p-4 flex items-start gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_8px_rgba(20,40,32,0.04)]">
          <div className="size-8 rounded-full bg-[#183B32] flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(24,59,50,0.25)] mt-0.5">
            <KubearLogo className="size-4" inverse={true} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-lg sm:text-xl text-[#142823] tabular-nums tracking-tight">
                ₹3,000
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[#142823]">
                would remain.
              </span>
            </div>
            <p className="text-xs text-[#53625C] mt-0.5 leading-snug">
              After the bills, spending and savings you included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
