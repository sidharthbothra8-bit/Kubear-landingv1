import React from "react";
import { BookOpen, Sparkles, Calculator, CheckCircle2, Shield, ArrowRight, Layers } from "lucide-react";

export function LearnLibraryVisual() {
  return (
    <div
      className="relative w-full min-h-[320px] sm:min-h-[360px] md:min-h-[380px] rounded-3xl bg-[#102B28] p-5 sm:p-7 flex items-center justify-center overflow-hidden border border-[#204E45] shadow-2xl group"
      aria-hidden="true"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFF8EE 1px, transparent 1px),
            linear-gradient(to bottom, #FFF8EE 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C96632]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#34D399]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Elegant Corner Ribbon (positioned neatly in the top-right corner, non-obstructive) */}
      <div className="absolute -top-1 right-8 z-30 pointer-events-none">
        <div className="relative bg-[#C96632] text-[#FFF8EE] text-[9px] font-mono font-bold tracking-widest px-3 py-1.5 pt-2 rounded-b-md shadow-md flex items-center gap-1 border-x border-b border-[#E07A44]">
          <span>VERIFIED</span>
          <div className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-[#C96632] [clip-path:polygon(0_0,50%_100%,100%_0)]" />
        </div>
      </div>

      {/* Layer 1: Back Tab (Amber Gold - Planning & Simulators) */}
      <div
        className="absolute w-[82%] sm:w-[78%] h-[80%] rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] border border-amber-300/40 shadow-lg transform rotate-6 translate-x-3 translate-y-1 transition-transform duration-300 group-hover:rotate-8 group-hover:translate-x-5"
      >
        <div className="p-3 text-amber-950/80 flex items-center justify-between text-[10px] font-mono font-bold">
          <span className="flex items-center gap-1">
            <Calculator className="size-3" /> VOL III • SIMULATORS
          </span>
          <span>SIP / EMI / FIRE</span>
        </div>
      </div>

      {/* Layer 2: Middle Tab (Sage Mint - 10 Core Pillars) */}
      <div
        className="absolute w-[84%] sm:w-[80%] h-[82%] rounded-2xl bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] border border-emerald-200/60 shadow-md transform -rotate-4 -translate-x-3 -translate-y-1 transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-x-5"
      >
        <div className="p-3 text-emerald-950/80 flex items-center justify-between text-[10px] font-mono font-bold">
          <span className="flex items-center gap-1">
            <Layers className="size-3" /> VOL II • 10 PILLARS
          </span>
          <span>SALARY TO RETIREMENT</span>
        </div>
      </div>

      {/* Layer 3: Main Archival Index Card (Crisp Warm Cream Paper) */}
      <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] bg-[#FFFDF8] rounded-2xl p-5 sm:p-6 border border-[#EBE4D5] shadow-xl text-[#102B28] transform transition-transform duration-300 group-hover:-translate-y-1">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#ECE5D4] pb-3 mb-3.5">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-[#FAF0E6] border border-[#E8D9C8] flex items-center justify-center text-[#C96632]">
              <BookOpen className="size-4.5" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-[#8A9C95] uppercase">
                Kubear Editorial Desk
              </div>
              <div className="text-[11px] font-bold text-[#102B28]">
                Knowledge Archive
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-[10px] font-mono font-semibold">
            <CheckCircle2 className="size-3" /> 2026 Edition
          </div>
        </div>

        {/* Card Title & Headline */}
        <div className="text-center py-1">
          <div className="text-2xl sm:text-3xl font-serif text-[#102B28] tracking-tight leading-tight">
            50 Plain-English Guides
          </div>
          <div className="text-xs sm:text-sm font-serif italic text-[#C96632] mt-0.5">
            &amp; 3 Interactive Simulators
          </div>
          <p className="text-[11px] sm:text-xs text-[#526D66] mt-2 leading-relaxed max-w-[280px] mx-auto">
            Practical financial math for salary day, UPI habits, tax season &amp; home purchase.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-3 gap-1.5 mt-4 pt-3 border-t border-[#ECE5D4]">
          <div className="p-1.5 rounded-lg bg-[#F8F5EE] border border-[#E8E0CE] text-center">
            <div className="text-[11px] font-bold font-mono text-[#102B28]">50</div>
            <div className="text-[9px] text-[#6B8079]">Guides</div>
          </div>
          <div className="p-1.5 rounded-lg bg-[#F8F5EE] border border-[#E8E0CE] text-center">
            <div className="text-[11px] font-bold font-mono text-[#C96632]">3</div>
            <div className="text-[9px] text-[#6B8079]">Calculators</div>
          </div>
          <div className="p-1.5 rounded-lg bg-[#F8F5EE] border border-[#E8E0CE] text-center">
            <div className="text-[11px] font-bold font-mono text-[#10B981]">10</div>
            <div className="text-[9px] text-[#6B8079]">Pillars</div>
          </div>
        </div>

        {/* Card Footer Tagline */}
        <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#839790] pt-1">
          <span className="flex items-center gap-1">
            <Shield className="size-3 text-[#C96632]" /> Zero Sponsored Bias
          </span>
          <span className="text-[#C96632] font-bold">100% Free &amp; Open</span>
        </div>
      </div>
    </div>
  );
}
