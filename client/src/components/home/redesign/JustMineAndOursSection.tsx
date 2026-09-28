import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  User, 
  Users, 
  ChevronRight, 
  CreditCard, 
  TrendingUp, 
  ShoppingBag, 
  MoreHorizontal, 
  Home, 
  Zap
} from "lucide-react";

export function JustMineAndOursSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  // Staged storytelling:
  // 1. "just_mine_first"  -> First show private personal finances ("Just mine": Salary, Investments, Personal spending)
  // 2. "ours_appears"     -> Household shared dashboard appears ("Ours": Rent, Groceries, Electricity)
  // 3. "annotation_leads" -> Handwritten note & curving arrow point to what gets shared
  // 4. "trip_transfers"   -> Shared Goa Trip card floats into position between the two
  // 5. "settled"          -> Sits calmly for comfortable reading, then loops
  const [stage, setStage] = useState<"just_mine_first" | "ours_appears" | "annotation_leads" | "trip_transfers" | "settled">("just_mine_first");

  useEffect(() => {
    if (!isInView) {
      setStage("just_mine_first");
      return;
    }

    let isCancelled = false;

    const runStory = async () => {
      if (isCancelled) return;

      // 1. Just mine
      setStage("just_mine_first");
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 2. Ours appears
      setStage("ours_appears");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 3. Annotation and arrow draw
      setStage("annotation_leads");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 4. Goa trip card moves into shared focus
      setStage("trip_transfers");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 5. Settled
      setStage("settled");
      await new Promise((r) => setTimeout(r, 5500));
      if (isCancelled) return;

      runStory();
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  const showOurs = stage !== "just_mine_first";
  const showAnnotation = stage === "annotation_leads" || stage === "trip_transfers" || stage === "settled";
  const showSharedTrip = stage === "trip_transfers" || stage === "settled";

  return (
    <section 
      ref={containerRef}
      id="just-mine-and-ours" 
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white border-t border-slate-100"
    >
      <style>{`
        .handwritten-annotation {
          font-family: "Caveat", "Architects Daughter", "Bradley Hand", "Comic Sans MS", cursive;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* Background Soft Atmospheric Ambient Glows */}
      <div 
        className="absolute top-1/3 right-1/3 w-[450px] h-[450px] pointer-events-none opacity-45 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(186, 230, 253, 0.45) 0%, rgba(224, 242, 254, 0.2) 50%, transparent 75%)"
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-1/12 w-[420px] h-[420px] pointer-events-none opacity-35 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.45) 0%, rgba(255, 237, 213, 0.2) 50%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & COPY                          */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 05 ─────── */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-400 font-medium text-sm sm:text-base tracking-wider font-mono">
                05
              </span>
              <div className="w-16 sm:w-20 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.08] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
              Not everything<br />
              needs to be shared.<br />
              <span className="inline-block relative mt-2 pt-0.5">
                <span 
                  className="absolute inset-0 bg-[#FEF08A]/75 rounded-full -skew-y-0.5 scale-y-110 scale-x-105 z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-[#0F172A] px-3.5 py-0.5 font-bold">
                  Just the things
                </span>
              </span><br />
              <span className="inline-block relative mt-1 pt-0.5">
                <span 
                  className="absolute inset-0 bg-[#FEF08A]/75 rounded-full -skew-y-0.5 scale-y-110 scale-x-105 z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-[#0F172A] px-3.5 py-0.5 font-bold">
                  you share.
                </span>
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-8 text-slate-600 text-base sm:text-lg lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-lg">
              Keep your own money to yourself, while managing the bills, goals and responsibilities you share at home.
            </p>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: PROGRESSIVE DUAL DEVICE COMPOSITION                 */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex justify-center items-center overflow-x-auto sm:overflow-visible py-6">
            <div className="relative w-[560px] sm:w-[620px] h-[520px] sm:h-[540px] select-none shrink-0 scale-[0.82] xs:scale-[0.9] sm:scale-100 origin-center">
              
              {/* DEVICE 1 (LEFT): "Just mine" */}
              <motion.div 
                initial={{ opacity: 0, x: -20, rotate: -4 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[28px] left-[15px] sm:left-[25px] z-10 w-[220px] sm:w-[235px]"
              >
                <div 
                  className="bg-white rounded-[32px] p-4 sm:p-5 border border-slate-100"
                  style={{
                    boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.07), 0 4px 16px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-slate-50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        Just mine
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>

                  {/* List Rows */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-800 block leading-tight">
                            Salary
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                            ₹80,000
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-800 block leading-tight">
                            Investments
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                            ₹12,000
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-800 block leading-tight">
                            Personal spending
                          </span>
                          <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                            ₹8,200
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          And more...
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* HANDWRITTEN ANNOTATION & SVG CURVED ARROW */}
              <AnimatePresence>
                {showAnnotation && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-[148px] left-[200px] sm:left-[215px] z-20 pointer-events-none"
                  >
                    <span className="handwritten-annotation text-[#4338CA] text-sm sm:text-base font-semibold block transform -rotate-[7deg]">
                      Share only<br />what belongs here
                    </span>

                    <svg 
                      width="130" 
                      height="75" 
                      viewBox="0 0 130 75" 
                      fill="none" 
                      className="absolute -bottom-4 left-10 overflow-visible"
                    >
                      <line x1="-8" y1="12" x2="-2" y2="4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="-1" y1="15" x2="6" y2="10" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />

                      <motion.path 
                        d="M 12,22 C 32,22 42,42 68,40 C 80,39 88,43 96,48" 
                        stroke="#6366F1" 
                        strokeWidth="1.75" 
                        strokeLinecap="round" 
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9 }}
                      />
                      <path 
                        d="M 91,42 L 98,49 L 90,53" 
                        stroke="#6366F1" 
                        strokeWidth="1.75" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FLOATING SHARED CARD: "Goa trip · ₹42,000" */}
              <AnimatePresence>
                {showSharedTrip && (
                  <motion.div 
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[230px] left-[175px] sm:left-[195px] z-30"
                  >
                    <div 
                      className="bg-white rounded-2xl py-3 px-4 sm:px-5 border border-slate-100 flex items-center gap-3.5 transform -rotate-[1deg]"
                      style={{
                        boxShadow: "0 18px 40px -8px rgba(0, 0, 0, 0.12), 0 4px 14px rgba(0, 0, 0, 0.03)"
                      }}
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl shadow-xs">
                        🏝️
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight">
                          Goa trip
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-slate-600 block leading-tight mt-0.5 tabular-nums">
                          ₹42,000
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* DEVICE 2 (RIGHT): "Ours" */}
              <AnimatePresence>
                {showOurs && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[16px] left-[325px] sm:left-[350px] z-10 w-[220px] sm:w-[235px]"
                  >
                    <div className="absolute -top-4 -right-2 flex items-center gap-1 pointer-events-none">
                      <span className="w-1 h-3 rounded-full bg-orange-400 transform rotate-[-35deg]" />
                      <span className="w-1 h-3.5 rounded-full bg-orange-400 transform -translate-y-1" />
                      <span className="w-1 h-3 rounded-full bg-orange-400 transform rotate-[35deg]" />
                    </div>

                    <div 
                      className="bg-white rounded-[32px] p-4 sm:p-5 border border-slate-100"
                      style={{
                        boxShadow: "0 22px 50px -10px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.02)"
                      }}
                    >
                      <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-slate-50">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <span className="text-sm sm:text-base font-bold text-slate-900">
                            Ours
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <Home className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                                Rent
                              </span>
                              <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                                ₹18,000
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                              <ShoppingBag className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                                Groceries
                              </span>
                              <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                                ₹7,600
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                              <Zap className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-slate-800 block leading-tight">
                                Electricity
                              </span>
                              <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 tabular-nums">
                                ₹2,400
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-100/60">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-base">
                              🏝️
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-slate-900 block leading-tight">
                                Goa trip
                              </span>
                              <span className="text-[11px] text-slate-600 block leading-tight mt-0.5 tabular-nums font-medium">
                                ₹42,000
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>

                        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700">
                              And more...
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
