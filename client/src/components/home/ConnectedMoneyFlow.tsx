import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Sprout, ShieldCheck, Target, Wallet, ArrowRight, ArrowDown } from "lucide-react";

export function ConnectedMoneyFlow() {
  const containerRef = useRef<HTMLElement>(null);

  // Link scroll progress through this section directly to the salary value
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Smoothly transform salary from baseline ₹85,000 up to ₹1,45,000 as user scrolls
  const rawSalary = useTransform(scrollYProgress, [0.1, 0.85], [85000, 145000]);

  // Derived mathematical breakdowns directly linked to scroll
  const commitments = 38600; // Fixed rent, utilities, insurance
  
  // Transform outputs formatted for live UI
  const displaySalary = useTransform(rawSalary, (v) => `₹${Math.round(v).toLocaleString("en-IN")}`);
  const emergencyVal = useTransform(rawSalary, (v) => `₹${Math.round(v * 0.14).toLocaleString("en-IN")}`);
  const investmentVal = useTransform(rawSalary, (v) => `₹${Math.round(v * 0.28).toLocaleString("en-IN")}`);
  const availableVal = useTransform(rawSalary, (v) => {
    const val = Math.max(0, Math.round(v - commitments - v * 0.14 - v * 0.28));
    return `₹${val.toLocaleString("en-IN")}`;
  });
  const goalMonthsVal = useTransform(rawSalary, (v) => {
    const inv = v * 0.28;
    const months = Math.max(3, Math.round(180000 / (inv * 0.45)));
    return `${months} months`;
  });

  // Visual pulses and progress track
  const beamOpacity = useTransform(scrollYProgress, [0.15, 0.85], [0.4, 1]);
  const scrollIndicatorWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="features"
    >
      {/* Background ambient lighting */}
      <motion.div 
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [0.95, 1.15]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.7]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] rounded-full blur-3xl pointer-events-none bg-emerald-100/35" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Integrated Living System
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]">
            One change.<br />
            <span className="text-[#059669] italic font-serif">Everything updates.</span>
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              Your money isn't 12 disconnected spreadsheets or siloed banking tabs. As you scroll, observe how an increase in monthly income instantly cascades across safety buffers, investments, free spending, and your goal finish line.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#516761]">
              <span className="text-[11px] uppercase tracking-wider">Scroll down to propagate salary change</span>
              <div className="w-24 h-1.5 bg-[#EADBCA] rounded-full overflow-hidden">
                <motion.div 
                  style={{ width: scrollIndicatorWidth }} 
                  className="h-full bg-[#059669] rounded-full" 
                />
              </div>
              <ArrowDown className="size-3 text-[#059669] animate-bounce" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PURE SCROLL-PROPAGATED GRAPH                                              */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center relative">
            
            {/* 1. CENTER HUB: "Your Salary" Driven by Scroll */}
            <div className="md:col-span-5 flex justify-center md:justify-start z-20">
              <div className="relative w-full max-w-[340px]">

                <div className="bg-white rounded-3xl border-2 border-[#123630] p-6 sm:p-7 shadow-[0_16px_36px_rgba(18,54,48,0.08)] text-left relative overflow-hidden">
                  
                  {/* Top Status Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#516761]">
                      Monthly Income (Scroll-Linked)
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#065F46] border border-[#A7F3D0]">
                      Active Flow
                    </span>
                  </div>

                  {/* Dynamic Salary Number mapped to scroll */}
                  <div className="mb-4">
                    <motion.div className="font-serif text-4xl sm:text-5xl font-bold tabular-nums tracking-tight text-[#123630]">
                      {displaySalary}
                    </motion.div>
                    <span className="text-xs text-[#516761] font-medium block mt-1">
                      Take-home salary credited on the 1st
                    </span>
                  </div>

                  {/* Range visual marker */}
                  <div className="my-4 pt-3 border-t border-[#FAF7F0]">
                    <div className="flex justify-between text-[11px] font-bold text-[#516761] mb-1.5">
                      <span>Baseline: ₹85,000</span>
                      <span className="text-[#059669] font-semibold">Scaling with scroll</span>
                      <span>Target: ₹1,45,000</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#FAF7F0] border border-[#EADBCA] overflow-hidden p-0.5">
                      <motion.div 
                        style={{ width: scrollIndicatorWidth }} 
                        className="h-full bg-gradient-to-r from-[#059669] to-[#123630] rounded-full" 
                      />
                    </div>
                  </div>

                  {/* Flow Beam Signal */}
                  <motion.div 
                    style={{ opacity: beamOpacity }}
                    className="flex items-center justify-between text-xs text-[#059669] font-bold bg-[#E6F4EA] px-3.5 py-2 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#059669] animate-ping" />
                      <span>Mathematical Propagation</span>
                    </div>
                    <ArrowRight className="size-3.5 text-[#059669]" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 2. THE 5 CONNECTED LIVING BUCKETS (Recalculating with scroll) */}
            <div className="md:col-span-7 flex flex-col gap-3 sm:gap-3.5 z-20">
              
              {/* Emergency Fund */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#EADBCA] px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-[0_4px_16px_rgba(18,54,48,0.04)]">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-[#FAF7F0] text-[#123630] border border-[#EADBCA]">
                    <ShieldCheck className="size-5 text-[#059669]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#123630]">Emergency Fund (14%)</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#E6F4EA] text-[#065F46] border border-[#A7F3D0]">
                        Auto-buffer
                      </span>
                    </div>
                    <span className="text-xs text-[#516761] font-medium block">Liquid safety reserve</span>
                  </div>
                </div>
                <motion.span className="font-serif text-base sm:text-xl font-bold tabular-nums text-[#123630]">
                  {emergencyVal}
                </motion.span>
              </div>

              {/* Investments */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#EADBCA] px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-[0_4px_16px_rgba(18,54,48,0.04)]">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-[#FAF7F0] text-[#123630] border border-[#EADBCA]">
                    <Sprout className="size-5 text-[#059669]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#123630]">Investments & SIPs (28%)</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#E6F4EA] text-[#065F46] border border-[#A7F3D0]">
                        Compounding
                      </span>
                    </div>
                    <span className="text-xs text-[#516761] font-medium block">Monthly index funds & equity</span>
                  </div>
                </div>
                <motion.span className="font-serif text-base sm:text-xl font-bold tabular-nums text-[#059669]">
                  {investmentVal}
                </motion.span>
              </div>

              {/* Available to Spend */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#059669]/50 px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-[0_6px_20px_rgba(5,150,105,0.08)] bg-emerald-50/30">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-white text-[#059669] border border-[#A7F3D0]">
                    <Wallet className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#065F46]">Available Safe to Spend</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#059669] text-white">
                        Guaranteed Safe
                      </span>
                    </div>
                    <span className="text-xs text-[#516761] font-medium block">Guilt-free lifestyle quota</span>
                  </div>
                </div>
                <motion.span className="font-serif text-base sm:text-xl font-bold tabular-nums text-[#065F46]">
                  {availableVal}
                </motion.span>
              </div>

              {/* Commitments */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#EADBCA] px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-[0_4px_16px_rgba(18,54,48,0.04)]">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-[#FAF7F0] text-[#123630] border border-[#EADBCA]">
                    <Home className="size-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#123630]">Fixed Commitments</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5]">
                        Protected
                      </span>
                    </div>
                    <span className="text-xs text-[#516761] font-medium block">Rent, EMIs, Maintenance</span>
                  </div>
                </div>
                <span className="font-serif text-base sm:text-xl font-bold tabular-nums text-[#123630]">
                  ₹{commitments.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Goal Horizon */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#EADBCA] px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-[0_4px_16px_rgba(18,54,48,0.04)]">
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-[#FAF7F0] text-[#123630] border border-[#EADBCA]">
                    <Target className="size-5 text-[#4F46E5]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#123630]">Europe Vacation Runway</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]">
                        Accelerating
                      </span>
                    </div>
                    <span className="text-xs text-[#516761] font-medium block">Target ₹1,80,000 completion time</span>
                  </div>
                </div>
                <motion.span className="font-serif text-base sm:text-xl font-bold tabular-nums text-[#4F46E5]">
                  {goalMonthsVal}
                </motion.span>
              </div>

            </div>

          </div>

          {/* Bottom Annotation */}
          <div className="mt-8 text-center md:text-right select-none pr-4 sm:pr-8">
            <span className="kh-handwritten text-[#EA580C] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
              As your salary changes on scroll, every bucket adapts automatically. That's true financial connectivity.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
