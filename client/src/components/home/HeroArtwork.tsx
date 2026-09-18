import React from "react";
import { Check, Sparkles, User } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

export function HeroArtwork() {
  return (
    <div className="relative w-full mx-auto">
      {/* Framed Lifestyle Photography Container with subtle Saffron/Emerald Ambient Glow */}
      <div className="relative w-full h-[clamp(250px,35vw,490px)] rounded-[clamp(1.25rem,2vw,2rem)] overflow-hidden shadow-[0_16px_40px_rgba(234,88,12,0.1),0_24px_60px_rgba(14,36,30,0.08)] border border-[#E8EFEA] bg-[#FAF8F5] group">
        {/* Serene Sunlit Workspace Still Life */}
        <img
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop"
          alt="Serene sunlit wooden desk with journal, pen, and coffee"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient subtle warm vignette gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E241E]/30 via-transparent to-transparent pointer-events-none" />

        {/* Background framed board detail: Plans People Progress */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EADBCA] rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-[0_6px_16px_rgba(14,36,30,0.1)] rotate-1 pointer-events-none transition-transform duration-200">
          <div className="text-[clamp(8px,0.9vw,11px)] font-extrabold text-[#5C4830] leading-tight font-serif tracking-wide">
            Family Plans<br />
            Peaceful Mind<br />
            Real Progress
          </div>
          <div className="text-[#EA580C] text-[clamp(8px,0.9vw,11px)] mt-0.5 font-bold">✦</div>
        </div>

        {/* Desk Mug Detail: Good Money Brighter Days */}
        <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-8 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EADBCA] rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 shadow-[0_6px_16px_rgba(14,36,30,0.1)] pointer-events-none">
          <div className="text-[clamp(8px,0.85vw,10px)] font-bold text-[#0E241E] leading-tight text-center font-serif">
            Same Salary<br />
            More Possibilities
          </div>
        </div>
      </div>

      {/* Overlapping Answer Card in the lower-left area - ALWAYS floating and locked in place */}
      <div className="kh-floating-hero-card absolute -bottom-[clamp(10px,2vw,24px)] -left-[clamp(8px,1.8vw,24px)] max-w-[94%] sm:max-w-[370px] w-full rounded-xl sm:rounded-2xl p-[clamp(0.6rem,1.3vw,1.25rem)] z-20 border-t-2 border-t-[#059669]">
        <div className="flex items-center justify-between mb-2 sm:mb-3 gap-1">
          <span className="inline-flex items-center gap-1 text-[clamp(8px,0.8vw,10px)] font-extrabold uppercase tracking-wider text-[#047857] bg-[#ECFDF5] px-2 sm:px-2.5 py-0.5 rounded-full border border-[#A7F3D0] shrink-0">
            <Sparkles className="size-2.5 text-[#059669]" /> Decision Engine
          </span>
          <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FFFDF9] border border-[#EAE3D6] text-[clamp(8.5px,0.9vw,11px)] font-semibold text-[#0E241E] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] truncate">
            <span className="truncate">Spend ₹12k this weekend?</span>
            <span className="size-3.5 sm:size-4.5 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
              <User className="size-2 sm:size-2.5 text-[#EA580C]" />
            </span>
          </div>
        </div>

        {/* Answer result block in Kalyan Emerald glow */}
        <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F0FDF4] via-[#E8F8EE] to-[#DCF5E5] border border-[#B7E8C7] p-2.5 sm:p-4 flex items-start gap-2 sm:gap-3 shadow-[inset_0_1.5px_0_rgba(255,255,255,1),0_4px_14px_rgba(5,150,105,0.1)]">
          <div className="size-7 sm:size-8.5 rounded-full bg-[#065F46] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(6,95,70,0.3)] mt-0.5">
            <KubearLogo className="size-3.5 sm:size-4" inverse={true} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-extrabold text-[clamp(1rem,1.6vw,1.25rem)] text-[#0E241E] tabular-nums tracking-tight">
                ₹5,400
              </span>
              <span className="inline-flex items-center text-[clamp(8.5px,0.85vw,10px)] font-bold text-[#065F46] bg-[#D1FAE5] border border-[#A7F3D0] px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                <Check className="size-2.5 sm:size-3 mr-0.5" /> Safe to spend
              </span>
            </div>
            <p className="text-[clamp(9.5px,0.95vw,12px)] text-[#24523F] mt-0.5 sm:mt-1 leading-snug font-medium">
              After rent on 5th, commitments & ₹15k SIP are fully locked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

