import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, CheckCircle2, TrendingUp, ArrowDown } from "lucide-react";

export function MoneyQuestionsSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  // Staggered parallax translation for the 3 decision cards
  const card1Y = useTransform(scrollYProgress, [0.05, 0.45], [50, 0]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.55], [70, 0]);
  const card3Y = useTransform(scrollYProgress, [0.25, 0.65], [90, 0]);

  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  // Mathematical proof callout reveal as cards settle into place
  const proofReveal = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="stories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Definitive Decisions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]">
            Your money questions deserve <span className="text-[#059669] italic font-serif">real answers</span>.
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              Not "it depends." Not generic financial advice. Kubear answers with your actual numbers, your upcoming commitments, and the exact mathematical formulas behind each conclusion.
            </p>
          </div>
        </div>

        {/* 3 Scroll-Choreographed Decision Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* CARD 1: CAN I AFFORD THIS? (iPhone 16)                                    */}
          {/* ========================================================================= */}
          <motion.div
            style={{ y: card1Y, opacity: card1Opacity }}
            className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-7 shadow-[0_8px_30px_rgba(18,54,48,0.06)] hover:shadow-[0_18px_45px_rgba(18,54,48,0.12)] transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-4 items-start mb-6">
                {/* iPhone 16 Silhouette */}
                <div className="relative w-16 sm:w-20 shrink-0 aspect-[9/18] bg-stone-900 rounded-[1.25rem] p-1.5 shadow-md border border-stone-700 flex flex-col justify-between overflow-hidden">
                  <div className="w-8 h-12 bg-stone-800 rounded-xl p-1 flex flex-col justify-between border border-stone-700 shadow-inner">
                    <div className="size-4 rounded-full bg-stone-950 border border-stone-600 flex items-center justify-center">
                      <div className="size-1.5 rounded-full bg-blue-900/60" />
                    </div>
                    <div className="size-4 rounded-full bg-stone-950 border border-stone-600 flex items-center justify-center">
                      <div className="size-1.5 rounded-full bg-blue-900/60" />
                    </div>
                  </div>
                  <div className="self-center opacity-30 text-white text-[8px] font-mono"></div>
                  <div className="h-1" />
                </div>

                {/* Card Header & Price */}
                <div className="flex-1 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
                    Decision Check #1
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123630]">
                    "Can I afford this?"
                  </h3>
                  <p className="text-xs text-[#516761] font-semibold mt-1">
                    iPhone 16: <span className="font-serif font-bold text-[#123630]">₹6,500/month EMI</span>
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F4EA] border border-[#A7F3D0] text-[#065F46] text-xs font-bold shadow-2xs">
                    <Check className="size-3.5 stroke-[3]" />
                    <span>Yes, with ₹9,230 to spare</span>
                  </div>
                </div>
              </div>

              {/* Mathematical Proof Unpacking */}
              <div className="space-y-2.5 pt-4 border-t border-[#FAF7F0] text-xs font-medium text-[#123630]">
                <div className="flex items-start gap-2">
                  <span className="text-[#EA580C] font-bold text-sm leading-none">→</span>
                  <span>Your Europe trip goal runway shifts by 3 months</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold text-sm leading-none">→</span>
                  <span>Emergency fund remains 100% untouched</span>
                </div>
                
                <motion.div 
                  style={{ opacity: proofReveal }}
                  className="mt-3 p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/80 text-[11px] text-[#516761] leading-relaxed"
                >
                  <strong className="text-[#123630]">Live Math:</strong> Available Safe Spend (₹15,730) − Monthly EMI (₹6,500) = Remaining Guilt-Free Surplus (₹9,230)
                </motion.div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#FAF7F0] flex items-center justify-between text-[11px] text-[#059669] font-bold">
              <span>Decision Confidence: High</span>
              <span className="bg-[#E6F4EA] px-2 py-0.5 rounded-full border border-[#A7F3D0]">Real-Time Math</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2: WHAT NEEDS MY ATTENTION NEXT? (3 things due before the 15th)      */}
          {/* ========================================================================= */}
          <motion.div
            style={{ y: card2Y, opacity: card2Opacity }}
            className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-7 shadow-[0_8px_30px_rgba(18,54,48,0.06)] hover:shadow-[0_18px_45px_rgba(18,54,48,0.12)] transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                Radar Tracking #2
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123630]">
                "What needs my attention next?"
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#EA580C] mt-1.5 mb-4">
                3 commitments due before the 15th:
              </p>

              {/* Dues List */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium text-[#123630]">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#EA580C] font-bold text-sm">→</span>
                    <span className="font-bold">HDFC Credit Card</span>
                  </div>
                  <span className="font-serif font-bold text-[#EA580C] tabular-nums">₹19,800 (3 days)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold text-sm">→</span>
                    <span className="font-medium">Home Rent</span>
                  </div>
                  <span className="font-serif font-bold text-[#123630] tabular-nums">₹23,000 (5 days)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold text-sm">→</span>
                    <span className="font-medium">LIC Term Insurance</span>
                  </div>
                  <span className="font-serif font-bold text-[#123630] tabular-nums">₹16,000 (10 days)</span>
                </div>

                <motion.div 
                  style={{ opacity: proofReveal }}
                  className="mt-3 p-2.5 rounded-xl bg-[#E6F4EA]/80 border border-[#A7F3D0] text-[11px] text-[#065F46] font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle2 className="size-3.5 text-[#059669] shrink-0" />
                  <span>All ₹58,800 quarantined in your account today</span>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#FAF7F0] flex items-center justify-between text-[11px] text-[#065F46] font-bold">
              <span>Shortfall Risk: 0%</span>
              <span className="bg-[#E6F4EA] px-2 py-0.5 rounded-full border border-[#A7F3D0]">Protected</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 3: AM I STILL ON TRACK? (Europe Trip Simulator)                      */}
          {/* ========================================================================= */}
          <motion.div
            style={{ y: card3Y, opacity: card3Opacity }}
            className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-7 shadow-[0_8px_30px_rgba(18,54,48,0.06)] hover:shadow-[0_18px_45px_rgba(18,54,48,0.12)] transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-4 items-start mb-4">
                {/* Europe Travel Photo */}
                <div className="w-16 sm:w-20 shrink-0 aspect-[3/4] rounded-2xl overflow-hidden border border-[#EADBCA] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=260&auto=format&fit=crop"
                    alt="Europe Trip"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title & Goal Target */}
                <div className="flex-1 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] block mb-1">
                    Goal Runway #3
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123630]">
                    "Am I still on track?"
                  </h3>
                  <p className="text-xs text-[#516761] font-semibold mt-1">
                    Europe Vacation: <span className="font-serif font-bold text-[#123630]">₹3,20,000 target</span>
                  </p>

                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-xs font-bold text-[#065F46] bg-[#E6F4EA] px-2.5 py-1 rounded-full border border-[#A7F3D0]">
                      68% funded
                    </span>
                    <span className="text-xs font-serif font-bold text-[#123630] tabular-nums">
                      ₹2,14,000 saved
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact points requested + Runway Projection */}
              <div className="space-y-2.5 pt-4 border-t border-[#FAF7F0] text-xs font-medium text-[#123630]">
                <div className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold text-sm leading-none">→</span>
                  <span>At current pace: <strong>Ready in 4 months</strong></span>
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="size-3.5 text-[#059669]" />
                    <span className="font-semibold text-[#123630]">SIP Acceleration (+₹3,000):</span>
                  </div>
                  <span className="font-serif font-bold text-[#059669] tabular-nums">
                    Ready in 2.5 mos
                  </span>
                </div>

                <motion.div 
                  style={{ opacity: proofReveal }}
                  className="p-2.5 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-[11px] text-[#4F46E5] font-semibold"
                >
                  Formula: Target remaining (₹1,06,000) ÷ Monthly SIP (₹26,500) = 4.0 months
                </motion.div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#FAF7F0] flex items-center justify-between text-[11px] text-[#4F46E5] font-bold">
              <span>Runway: Fully Solved</span>
              <span className="bg-[#EEF2FF] px-2 py-0.5 rounded-full border border-[#C7D2FE]">No Speculation</span>
            </div>
          </motion.div>

        </div>

        {/* Annotation (handwritten) */}
        <div className="mt-12 text-center select-none">
          <span className="kh-handwritten text-[#EA580C] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
            Math. Sources. Formulas you can see. Never "you should."
          </span>
        </div>

      </div>
    </section>
  );
}
