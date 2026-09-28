import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, CreditCard, ShieldCheck, CheckCircle2, ArrowDown, Eye, EyeOff, Sparkles } from "lucide-react";
import { playTick, playChime } from "@/lib/soundFx";

interface BillItem {
  id: string;
  name: string;
  amount: number;
  formatted: string;
  due: string;
  detail: string;
  icon: typeof Home;
}

const UPCOMING_BILLS: BillItem[] = [
  { 
    id: "rent", 
    name: "Rent & Society Maintenance", 
    amount: 65000, 
    formatted: "₹65,000", 
    due: "Due 5th", 
    detail: "Landlord transfer + maintenance scheduled",
    icon: Home 
  },
  { 
    id: "loans", 
    name: "HDFC Card + Index SIPs", 
    amount: 38000, 
    formatted: "₹38,000", 
    due: "Due 7th–10th", 
    detail: "Statement auto-cleared so no finance charges",
    icon: CreditCard 
  },
  { 
    id: "safety", 
    name: "Term Insurance & School Fee", 
    amount: 24700, 
    formatted: "₹24,700", 
    due: "Due 12th", 
    detail: "Annual premium installment quarantined",
    icon: ShieldCheck 
  },
];

const TOTAL_IN_ACCOUNT = 285000;
const COMMITTED_TOTAL = 127700;
const SAFE_TO_SPEND = 157300;

export function BankBalanceIllusion() {
  const containerRef = useRef<HTMLElement>(null);
  const [manualRevealed, setManualRevealed] = useState<boolean | null>(null);

  // Bind scroll progress directly to this section's journey through viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 30%"],
  });

  // Pure scroll-driven animations:
  const scrollBankOpacity = useTransform(scrollYProgress, [0.1, 0.48], [1, 0]);
  const scrollBankY = useTransform(scrollYProgress, [0.1, 0.48], [0, -24]);
  const scrollBankScale = useTransform(scrollYProgress, [0.1, 0.48], [1, 0.94]);

  const scrollKubearOpacity = useTransform(scrollYProgress, [0.38, 0.75], [0, 1]);
  const scrollKubearY = useTransform(scrollYProgress, [0.38, 0.75], [28, 0]);
  const scrollKubearScale = useTransform(scrollYProgress, [0.38, 0.75], [0.96, 1]);

  // Commitments slide and dock into their quarantined state with scroll
  const bill1Slide = useTransform(scrollYProgress, [0.25, 0.55], [-20, 0]);
  const bill2Slide = useTransform(scrollYProgress, [0.35, 0.65], [-20, 0]);
  const bill3Slide = useTransform(scrollYProgress, [0.45, 0.75], [-20, 0]);

  const quarantineTagOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const scrollTrackProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleToggleManual = () => {
    const next = manualRevealed === null ? true : !manualRevealed;
    setManualRevealed(next);
    if (next) {
      playChime();
    } else {
      playTick(0.85);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="reality"
    >
      {/* Background Soft Glow that warms with scroll progress */}
      <motion.div 
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.6, 1], [0.35, 0.7, 0.85]),
          scale: useTransform(scrollYProgress, [0, 1], [0.9, 1.1]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[380px] rounded-full blur-3xl pointer-events-none bg-emerald-100/40" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Kicker */}
        <div className="text-center mb-3 select-none">
          <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
            The Bank Balance Illusion
          </span>
        </div>

        {/* Master Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#123630] tracking-tight leading-[1.12]">
            ₹2,85,000 in your account isn't ₹2,85,000 to spend.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#516761] font-medium leading-relaxed">
            Scroll or toggle to peel away the illusion. See how Kubear shields tomorrow's obligations so your current spending is genuine guilt-free freedom.
          </p>

          {/* Interactive Scrub and Peel Action Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EADBCA] shadow-2xs text-xs font-semibold text-[#516761]">
              <span className="text-[11px] uppercase tracking-wider">Scroll-linked peel</span>
              <div className="w-20 h-1.5 bg-[#EADBCA] rounded-full overflow-hidden">
                <motion.div 
                  style={{ width: scrollTrackProgress }} 
                  className="h-full bg-[#059669] rounded-full" 
                />
              </div>
              <ArrowDown className="size-3 text-[#059669] animate-bounce" />
            </div>

            <button
              onClick={handleToggleManual}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123630] text-white hover:bg-[#0A241E] text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {manualRevealed ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5 text-[#059669]" />}
              <span>{manualRevealed ? "Reset to Bank View" : "Tap to Peel Instantly"}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE SCROLL-BOUND PEEL CONTAINER                                           */}
        {/* ========================================================================= */}
        <div className="max-w-xl mx-auto relative min-h-[460px] sm:min-h-[490px]">
          
          {/* LAYER 1: DECEPTIVE BANK VIEW (Fades & shifts upward as user scrolls) */}
          <motion.div
            style={
              manualRevealed === null
                ? {
                    opacity: scrollBankOpacity,
                    y: scrollBankY,
                    scale: scrollBankScale,
                    pointerEvents: useTransform(scrollYProgress, (v) => v > 0.5 ? "none" : "auto"),
                  }
                : {
                    opacity: manualRevealed ? 0 : 1,
                    y: manualRevealed ? -24 : 0,
                    scale: manualRevealed ? 0.94 : 1,
                    pointerEvents: manualRevealed ? "none" : "auto",
                  }
            }
            className="absolute inset-x-0 top-0 rounded-3xl p-6 sm:p-10 border border-stone-200 bg-white shadow-[0_16px_45px_rgba(18,54,48,0.06)] transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-stone-100 text-[#516761]">
                Deceptive Ledger Balance
              </span>
              <span className="text-xs text-[#516761] font-semibold">
                What banking apps display
              </span>
            </div>

            <div className="py-3">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#123630] tabular-nums tracking-tight">
                ₹{TOTAL_IN_ACCOUNT.toLocaleString("en-IN")}
              </div>
              <p className="text-sm sm:text-base font-bold text-[#EA580C] mt-2 flex items-center gap-2">
                <span>⚠️ Looks flush, but ₹1,27,700 is already owed by the 12th</span>
              </p>
            </div>

            <div className="h-px w-full bg-[#FAF7F0] border-t border-[#EADBCA]/60 my-6" />

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed font-medium">
              Traditional banking apps show a single inflated number. They ignore scheduled EMIs, pending rent transfers, credit card cycles, and school fees that must be cleared within days.
            </div>
          </motion.div>

          {/* LAYER 2: KUBEAR SAFE TO SPEND REALITY (Peels in cleanly with docked bills) */}
          <motion.div
            style={
              manualRevealed === null
                ? {
                    opacity: scrollKubearOpacity,
                    y: scrollKubearY,
                    scale: scrollKubearScale,
                  }
                : {
                    opacity: manualRevealed ? 1 : 0,
                    y: manualRevealed ? 0 : 28,
                    scale: manualRevealed ? 1 : 0.96,
                  }
            }
            className="relative rounded-3xl p-6 sm:p-10 border-2 border-[#059669]/60 bg-white shadow-[0_20px_55px_rgba(5,150,105,0.12)] ring-4 ring-[#059669]/10 transition-all duration-500"
          >
            {/* Top Status */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#E6F4EA] text-[#065F46] border border-[#A7F3D0] flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="size-3 text-[#059669]" />
                <span>True Safe-to-Spend</span>
              </span>

              <motion.span 
                style={manualRevealed === null ? { opacity: quarantineTagOpacity } : { opacity: 1 }}
                className="text-xs text-[#059669] font-bold flex items-center gap-1.5"
              >
                <CheckCircle2 className="size-3.5" />
                <span>All upcoming commitments quarantined</span>
              </motion.span>
            </div>

            {/* The Safe Number */}
            <div className="py-2">
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#065F46] tabular-nums tracking-tight">
                ₹{SAFE_TO_SPEND.toLocaleString("en-IN")}
              </div>
              <p className="text-sm sm:text-base font-bold text-[#059669] mt-2 flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#059669] inline-block animate-pulse" />
                <span>Zero guesswork. Available for today with zero month-end shortfall.</span>
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#FAF7F0] border-t border-[#EADBCA]/60 my-5" />

            {/* Upcoming Commitments Breakdown (Docked on scroll) */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#516761] mb-3">
                <span>Quarantined Before the 15th</span>
                <span className="text-[#059669]">Automatically Shielded</span>
              </div>

              <div className="space-y-2.5">
                {UPCOMING_BILLS.map((bill, index) => {
                  const Icon = bill.icon;
                  const slideAnim = index === 0 ? bill1Slide : index === 1 ? bill2Slide : bill3Slide;

                  return (
                    <motion.div
                      key={bill.id}
                      style={manualRevealed === null ? { x: slideAnim } : { x: 0 }}
                      className="p-3.5 rounded-2xl border border-[#EADBCA] bg-[#FAF7F0]/70 hover:bg-[#FAF7F0] flex items-center justify-between text-xs sm:text-sm transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white text-[#059669] shadow-2xs border border-[#EADBCA]">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <div className="font-bold text-[#123630] leading-tight">
                            {bill.name}
                          </div>
                          <div className="text-[11px] text-[#516761] font-medium mt-0.5">
                            {bill.due} · {bill.detail}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-serif font-bold text-[#EA580C] tabular-nums">
                          −{bill.formatted}
                        </div>
                        <div className="text-[10px] text-[#059669] font-bold mt-0.5">
                          Quarantined
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Total deduction summary */}
              <div className="mt-4 pt-3.5 border-t border-[#EADBCA]/60 flex items-center justify-between text-xs">
                <span className="text-[#516761] font-semibold">
                  Total commitments safely set aside:
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#123630] tabular-nums">
                  −₹{COMMITTED_TOTAL.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Footer Punchline */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-[#123630] font-serif font-bold">
            Your bank shows what's in your account. Kubear protects what's already promised.
          </p>
        </div>

      </div>
    </section>
  );
}
