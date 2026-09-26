import React, { useState, useEffect } from "react";
import { Check, Sparkles, User, ShieldCheck, Lock, ArrowUpRight, TrendingUp } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

export function HeroArtwork() {
  const [displayAmount, setDisplayAmount] = useState(0);

  // Smooth rolling counter for ₹5,400 on component mount
  useEffect(() => {
    let animationFrameId: number;
    const target = 5400;
    const duration = 1400;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayAmount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    }

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full mx-auto select-none">
      {/* Radiant ambient glow halo behind the frame for warmth and studio depth */}
      <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#FED7AA]/40 via-[#A7F3D0]/30 to-[#FDE68A]/35 rounded-[3.5rem] blur-3xl -z-10 kh-ambient-aura pointer-events-none" />

      {/* Gallery Mount Stage with Luxury Beveled Outer Frame */}
      <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 bg-gradient-to-b from-white/95 via-[#FCFAF6]/90 to-[#EFEAE2]/90 border border-[#E3DCD0]/90 shadow-[0_28px_65px_-15px_rgba(14,36,30,0.16),0_12px_28px_-8px_rgba(234,88,12,0.08)] backdrop-blur-md group overflow-hidden">
        
        {/* Living Financial Stream Canvas Viewport */}
        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[490px] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F4EFE6] border border-[#EAE3D6]/70 flex flex-col justify-between p-4 sm:p-6">
          
          {/* Subtle Isometric Pattern Texture */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#0E241E 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Animated SVG Financial Stream Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="emeraldStream" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="saffronStream" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
                <stop offset="60%" stopColor="#EA580C" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C2410C" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Income to Commitments Stream Wave */}
            <path
              d="M -20,80 C 120,40 240,160 460,90 S 680,180 820,130"
              fill="none"
              stroke="url(#emeraldStream)"
              strokeWidth="2.5"
              className="kh-stream-path"
            />

            {/* Commitments to Buffer Flow Stream */}
            <path
              d="M -30,220 C 140,170 260,310 520,240 S 740,290 850,220"
              fill="none"
              stroke="url(#saffronStream)"
              strokeWidth="2"
              className="kh-stream-path"
              style={{ animationDuration: "3.2s" }}
            />
          </svg>

          {/* Canvas Top Bar: Live Status & Financial Telemetry */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E8DFD3] shadow-[0_2px_8px_rgba(14,36,30,0.04)] text-[11px] sm:text-xs font-semibold text-[#18362F]">
              <span className="relative flex size-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
                <span className="relative inline-flex rounded-full size-1.5 bg-[#059669]" />
              </span>
              <span>Monthly Cashflow Stream</span>
              <span className="text-[#059669] font-bold">100% Protected</span>
            </div>

            {/* Top-Right Stationery Memo: Family Plans / Peaceful Mind / Real Progress */}
            <div className="kh-animate-float-1 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EADBCA] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_24px_rgba(14,36,30,0.09),0_2px_4px_rgba(0,0,0,0.03)] rotate-2 group-hover:rotate-0 transition-transform duration-300 pointer-events-none">
              <div className="text-[10px] sm:text-[11px] font-bold text-[#423120] leading-snug font-serif tracking-wide">
                Family Plans<br />
                Peaceful Mind<br />
                Real Progress
              </div>
              <div className="text-[#EA580C] text-xs mt-0.5 font-bold flex items-center gap-1">
                <span>✦</span>
                <span className="h-px w-5 bg-[#EA580C]/30 inline-block" />
              </div>
            </div>
          </div>

          {/* Middle Ambient Depth Stack: Commitments Locked Layer */}
          <div className="relative z-10 my-auto -mt-2 sm:mt-1 max-w-[92%] sm:max-w-[88%] mx-auto w-full">
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-[#E8E1D5] p-3.5 sm:p-4 shadow-[0_8px_20px_rgba(14,36,30,0.04)] rotate-[-1.5deg] transition-transform duration-300 group-hover:rotate-0">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#EAE3D6]/70 text-[10.5px] sm:text-xs font-semibold text-[#546860]">
                <span className="inline-flex items-center gap-1.5 text-[#047857] font-bold">
                  <Lock className="size-3 text-[#059669]" /> Automated Allocations
                </span>
                <span className="text-[#EA580C] font-semibold flex items-center gap-0.5">
                  <TrendingUp className="size-3" /> Guaranteed
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2 rounded-xl bg-[#FAF8F4] border border-[#EFE9DE]">
                  <div className="text-[10px] text-[#6E8078] font-medium">Rent on 5th</div>
                  <div className="text-xs sm:text-sm font-bold text-[#0E241E] tabular-nums mt-0.5">₹28,000 Locked</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF8F4] border border-[#EFE9DE]">
                  <div className="text-[10px] text-[#6E8078] font-medium">Mutual Fund SIP</div>
                  <div className="text-xs sm:text-sm font-bold text-[#059669] tabular-nums mt-0.5">₹15,000 Safe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Canvas Bottom Bar: Floating Pill Companion */}
          <div className="relative z-10 flex justify-end">
            <div className="kh-animate-float-2 bg-[#FFFDF9]/95 backdrop-blur-md border border-[#E8DFD3] rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2 shadow-[0_8px_20px_rgba(14,36,30,0.08),inset_0_1px_0_rgba(255,255,255,1)] pointer-events-none">
              <div className="text-[10px] sm:text-xs font-bold text-[#0E241E] leading-tight text-center font-serif tracking-wide">
                Same Salary<br />
                <span className="text-[#059669]">More Possibilities</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Overlapping Floating Decision Engine Focal Card - Studio Master Widget */}
      <div className="kh-floating-hero-card absolute -bottom-5 sm:-bottom-7 -left-2 sm:-left-6 max-w-[95%] sm:max-w-[400px] w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 z-20 border border-white/95">
        {/* Header: Decision Engine Badge + Question Pill */}
        <div className="flex items-center justify-between mb-3.5 gap-2">
          <span className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#047857] bg-[#ECFDF5] px-2.5 sm:px-3 py-1 rounded-full border border-[#A7F3D0] shrink-0 shadow-[0_1px_2px_rgba(5,150,105,0.08)]">
            <Sparkles className="size-2.5 sm:size-3 text-[#059669]" /> Decision Engine
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5DFD5] text-[10.5px] sm:text-xs font-semibold text-[#18362F] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] truncate">
            <span className="truncate">Spend ₹12k this weekend?</span>
            <span className="size-4 sm:size-4.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center shrink-0">
              <User className="size-2 sm:size-2.5 text-[#EA580C]" />
            </span>
          </div>
        </div>

        {/* Answer Result Block in Luminous Kalyan Emerald */}
        <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F0FDF4] via-[#E8F8EE] to-[#DCFCE7]/70 border border-[#86EFAC]/80 p-3.5 sm:p-4.5 flex items-start gap-3 sm:gap-3.5 shadow-[inset_0_1.5px_0_rgba(255,255,255,1),0_8px_22px_-4px_rgba(5,150,105,0.14)]">
          {/* Kubear Jewel Logo Circle */}
          <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-br from-[#065F46] to-[#034432] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(6,95,70,0.35)] ring-2 ring-emerald-400/25 mt-0.5">
            <KubearLogo className="size-4 sm:size-5" inverse={true} />
          </div>

          <div className="min-w-0 flex-1">
            {/* Amount and Status Pill with Radar Ripple Ping */}
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <span className="font-extrabold text-[1.45rem] sm:text-[1.8rem] text-[#064E3B] tracking-tight tabular-nums leading-none">
                ₹{displayAmount.toLocaleString("en-IN")}
              </span>
              <div className="relative inline-flex items-center">
                {/* Radar Ripple Effect */}
                <span className="kh-radar-ring absolute inset-0 rounded-full bg-[#10B981]/40 pointer-events-none" />
                <span className="relative inline-flex items-center text-[10px] sm:text-[11.5px] font-bold text-white bg-[#059669] px-2.5 py-0.5 sm:py-1 rounded-full shadow-[0_2px_6px_rgba(5,150,105,0.3)] whitespace-nowrap">
                  <Check className="size-3 mr-1 stroke-[2.5]" /> Safe to spend
                </span>
              </div>
            </div>

            {/* Exact Contextual Reasoning Copy */}
            <p className="text-[11.5px] sm:text-[12.5px] text-[#24523F] mt-1.5 leading-snug font-medium">
              After rent on 5th, commitments & ₹15k SIP are fully locked.
            </p>

            {/* Micro commitment visual tags for tangible clarity */}
            <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-emerald-600/15 text-[9px] sm:text-[10px] font-semibold text-[#065F46]">
              <span className="inline-flex items-center gap-0.5 bg-white/80 px-1.5 py-0.5 rounded-md border border-emerald-300/60 shadow-[0_1px_2px_rgba(5,150,105,0.05)]">
                <Lock className="size-2.5 text-[#059669]" /> Rent locked (5th)
              </span>
              <span className="inline-flex items-center gap-0.5 bg-white/80 px-1.5 py-0.5 rounded-md border border-emerald-300/60 shadow-[0_1px_2px_rgba(5,150,105,0.05)]">
                <ShieldCheck className="size-2.5 text-[#059669]" /> ₹15k SIP safe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


