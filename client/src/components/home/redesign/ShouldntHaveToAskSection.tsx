import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export function ShouldntHaveToAskSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  // Staged storytelling:
  // 1. "detecting_spikes" -> First shows Food & Travel spending spike cards above
  // 2. "lines_connect"   -> Dashed connector lines carry data down
  // 3. "alert_card"      -> Proactive alert card reveals: "This month looks a little tighter. ₹4,800"
  // 4. "resolutions"     -> Reassurance pills reveal: "EMI + SIP still covered", "Nothing urgent."
  // 5. "settled"         -> Stays calm for reading, then loops
  const [stage, setStage] = useState<"detecting_spikes" | "lines_connect" | "alert_card" | "resolutions" | "settled">("detecting_spikes");

  useEffect(() => {
    if (!isInView) {
      setStage("detecting_spikes");
      return;
    }

    let isCancelled = false;

    const runStory = async () => {
      if (isCancelled) return;

      // 1. Spikes detected
      setStage("detecting_spikes");
      await new Promise((r) => setTimeout(r, 2000));
      if (isCancelled) return;

      // 2. Connecting lines
      setStage("lines_connect");
      await new Promise((r) => setTimeout(r, 1200));
      if (isCancelled) return;

      // 3. Proactive insight card appears
      setStage("alert_card");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 4. Resolution actions check off
      setStage("resolutions");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 5. Settled reading pause
      setStage("settled");
      await new Promise((r) => setTimeout(r, 5000));
      if (isCancelled) return;

      runStory();
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  const showLines = stage !== "detecting_spikes";
  const showAlert = stage === "alert_card" || stage === "resolutions" || stage === "settled";
  const showResolutions = stage === "resolutions" || stage === "settled";

  return (
    <section 
      ref={containerRef}
      id="shouldnt-have-to-ask" 
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div 
        className="absolute top-1/3 right-1/4 w-[540px] h-[540px] pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.08) 0%, rgba(249, 115, 22, 0.04) 45%, transparent 70%)"
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-1/6 w-[480px] h-[480px] pointer-events-none opacity-30 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.2) 0%, transparent 65%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & COPY                          */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 04 ─────── */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-400 font-medium text-sm sm:text-base tracking-wider font-mono">
                04
              </span>
              <div className="w-16 sm:w-20 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.08] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
              And sometimes,<br />
              you shouldn’t<br />
              <span className="inline-block relative mt-2 pt-0.5">
                <span 
                  className="absolute inset-0 bg-[#FEF08A]/75 rounded-full -skew-y-0.5 scale-y-110 scale-x-105 z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-[#0F172A] px-3.5 py-0.5 font-bold">
                  have to ask.
                </span>
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-8 text-slate-600 text-base sm:text-lg lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-lg">
              Kubear keeps an eye on what’s changing and brings up what actually needs your attention.
            </p>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: PROGRESSIVE ATTENTION CARDS VISUAL                  */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex justify-center items-center overflow-x-auto sm:overflow-visible py-6">
            <div className="relative w-[520px] sm:w-[580px] h-[480px] sm:h-[500px] select-none shrink-0 scale-[0.84] xs:scale-[0.92] sm:scale-100 origin-center">
              
              {/* Organic Backdrop Warm Shape */}
              <div 
                className="absolute -top-6 -right-6 w-[420px] h-[420px] rounded-full pointer-events-none -z-10"
                style={{
                  background: "radial-gradient(circle at 60% 40%, rgba(254, 243, 199, 0.45) 0%, rgba(255, 237, 213, 0.25) 50%, transparent 75%)"
                }}
                aria-hidden="true"
              />

              {/* SVG Connecting Flow Lines behind cards */}
              <svg 
                viewBox="0 0 580 500" 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                fill="none"
              >
                {showLines && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.8 }}
                  >
                    <path 
                      d="M 190,85 C 230,110 245,150 250,175" 
                      stroke="#E2E8F0" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3.5" 
                    />
                    <path 
                      d="M 370,85 C 380,120 350,150 330,175" 
                      stroke="#E2E8F0" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3.5" 
                    />
                  </motion.g>
                )}
              </svg>

              {/* TOP CARD 1: Food (+₹1,840 higher than usual) */}
              <motion.div 
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[20px] left-[20px] z-20"
              >
                <div 
                  className="bg-white rounded-2xl py-3.5 px-4 sm:px-5 border border-slate-100/90 flex items-center gap-3.5 w-[215px] sm:w-[230px]"
                  style={{
                    boxShadow: "0 14px 32px -8px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 via-orange-100 to-orange-200 ring-4 ring-amber-50/70 shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 opacity-80" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-800 block leading-tight">
                      Food
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-normal block leading-tight mt-0.5 whitespace-nowrap">
                      ₹1,840 higher than usual
                    </span>
                  </div>

                  <div className="flex items-end gap-1 shrink-0 h-4 pb-0.5">
                    <span className="w-1 h-2 rounded-full bg-orange-400 opacity-60" />
                    <span className="w-1 h-3 rounded-full bg-orange-400 opacity-80" />
                    <span className="w-1 h-4 rounded-full bg-orange-400" />
                  </div>
                </div>
              </motion.div>

              {/* TOP CARD 2: Travel (+₹2,960 higher than usual) */}
              <motion.div 
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[28px] left-[265px] sm:left-[285px] z-20"
              >
                <div 
                  className="bg-white rounded-2xl py-3.5 px-4 sm:px-5 border border-slate-100/90 flex items-center gap-3.5 w-[220px] sm:w-[235px]"
                  style={{
                    boxShadow: "0 14px 32px -8px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-200 ring-4 ring-purple-50/70 shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-200 to-indigo-300 opacity-80" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-800 block leading-tight">
                      Travel
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-normal block leading-tight mt-0.5 whitespace-nowrap">
                      ₹2,960 higher than usual
                    </span>
                  </div>

                  <div className="flex items-end gap-1 shrink-0 h-4 pb-0.5">
                    <span className="w-1 h-2 rounded-full bg-purple-400 opacity-60" />
                    <span className="w-1 h-3 rounded-full bg-purple-400 opacity-80" />
                    <span className="w-1 h-4 rounded-full bg-purple-400" />
                  </div>
                </div>
              </motion.div>

              {/* MAIN CENTER PROACTIVE CARD */}
              <div className="absolute top-[125px] left-[35px] sm:left-[45px] z-30 w-[450px] sm:w-[490px]">
                <AnimatePresence>
                  {showAlert && (
                    <motion.div 
                      initial={{ opacity: 0, y: 22, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-100 shadow-md"
                      style={{
                        boxShadow: "0 24px 56px -12px rgba(0, 0, 0, 0.08), 0 6px 20px rgba(0, 0, 0, 0.02)"
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-300 ring-4 ring-amber-50/80 shrink-0 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 opacity-90" />
                        </div>
                        <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight">
                          This month looks a little tighter.
                        </h3>
                      </div>

                      {/* Amount & Explanation */}
                      <div className="mt-5 pl-1">
                        <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#9A3412] tabular-nums">
                          ₹4,800
                        </div>
                        <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-1.5">
                          less comfortable to spend than usual.
                        </p>
                      </div>

                      {/* Proactive Resolution Rows */}
                      <div className="mt-7 flex flex-col gap-2.5">
                        <AnimatePresence>
                          {showResolutions && (
                            <>
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#F0FDF4]/90 rounded-2xl p-3.5 px-4 flex items-center gap-3 border border-[#DCFCE7]/80"
                              >
                                <span className="w-3 h-3 rounded-full bg-[#10B981] ring-4 ring-emerald-100 shrink-0" />
                                <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                                  EMI + SIP still covered
                                </span>
                              </motion.div>

                              <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-[#F8FAFC] rounded-2xl p-3.5 px-4 flex items-center gap-3 border border-slate-100"
                              >
                                <span className="w-3 h-3 rounded-full bg-[#60A5FA] ring-4 ring-blue-100 shrink-0" />
                                <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                                  Nothing urgent. Keep an eye on spending this week.
                                </span>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
