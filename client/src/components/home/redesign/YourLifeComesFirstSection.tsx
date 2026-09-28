import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export function YourLifeComesFirstSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const APP_URL = "https://kubear.kuberos.in";

  // Staged storytelling for the financial life river:
  // Step 1: "salary"     -> Salary milestone arrives
  // Step 2: "dinner"     -> Everyday life & dinner expense
  // Step 3: "center"     -> "Everything still on track" reassurance appears
  // Step 4: "emi"        -> Scheduled EMI & commitments protected
  // Step 5: "trip"       -> Vacation & long-term goals intact
  // Step 6: "settled"    -> Complete river visible, peaceful reading time
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!isInView) {
      setActiveStep(0);
      return;
    }

    let isCancelled = false;

    const runRiverFlow = async () => {
      if (isCancelled) return;

      // 0. Reset to salary
      setActiveStep(1);
      await new Promise((r) => setTimeout(r, 1800));
      if (isCancelled) return;

      // 1. Dinner
      setActiveStep(2);
      await new Promise((r) => setTimeout(r, 1500));
      if (isCancelled) return;

      // 2. Center reassurance
      setActiveStep(3);
      await new Promise((r) => setTimeout(r, 1500));
      if (isCancelled) return;

      // 3. EMI
      setActiveStep(4);
      await new Promise((r) => setTimeout(r, 1500));
      if (isCancelled) return;

      // 4. Trip
      setActiveStep(5);
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 5. Settled view
      setActiveStep(6);
      await new Promise((r) => setTimeout(r, 5500));
      if (isCancelled) return;

      runRiverFlow();
    };

    runRiverFlow();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  const showSalary = activeStep >= 1;
  const showDinner = activeStep >= 2;
  const showCenter = activeStep >= 3;
  const showEMI = activeStep >= 4;
  const showTrip = activeStep >= 5;

  return (
    <section 
      ref={containerRef}
      id="life-comes-first" 
      className="relative w-full pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================= */}
        {/* CENTERED HEADER & VALUE PROPOSITION                               */}
        {/* ================================================================= */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Section Index: 06 ─────── */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
            <span className="text-slate-400 font-medium text-sm sm:text-base tracking-wider font-mono">
              06
            </span>
            <div className="w-12 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
          </div>

          {/* Main Headline */}
          <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.12] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
            Your life comes first.<br />
            <span className="inline-block relative mt-2.5 pt-0.5">
              <span 
                className="absolute inset-0 bg-[#FEF08A]/75 rounded-full -skew-y-0.5 scale-y-110 scale-x-105 z-0"
                aria-hidden="true"
              />
              <span className="relative z-10 text-[#0F172A] px-4 sm:px-6 py-0.5 font-bold">
                Your money can work around it.
              </span>
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="mt-8 text-slate-600 text-base sm:text-lg lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-2xl">
            Bring your money together once. Kubear helps you understand where you stand, what you can do and what needs your attention next.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust microcopy */}
          <p className="mt-5 text-xs sm:text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
            <span>Free to try</span>
            <span className="text-slate-300">·</span>
            <span>Built for India</span>
            <span className="text-slate-300">·</span>
            <span>Your data stays yours</span>
          </p>

        </div>

        {/* ================================================================= */}
        {/* FINANCIAL HORIZON & MILESTONES RIVER COMPOSITION                  */}
        {/* ================================================================= */}
        <div className="relative mt-16 sm:mt-24 w-full overflow-x-auto lg:overflow-visible pb-8 pt-4">
          <div className="relative w-[880px] sm:w-[980px] lg:w-full max-w-5xl mx-auto h-[240px] sm:h-[260px] select-none">
            
            {/* SVG RIVER FLOW LINE & AMBIENCE */}
            <svg 
              viewBox="0 0 1000 240" 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              fill="none"
            >
              <defs>
                <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.75" />
                  <stop offset="25%" stopColor="#FB7185" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.75" />
                  <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
                </linearGradient>

                <radialGradient id="salaryAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="dinnerAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="emiAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="tripAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient Auras behind icons */}
              {showSalary && <ellipse cx="100" cy="155" rx="85" ry="60" fill="url(#salaryAura)" />}
              {showDinner && <ellipse cx="308" cy="175" rx="75" ry="50" fill="url(#dinnerAura)" />}
              {showEMI && <ellipse cx="710" cy="170" rx="75" ry="50" fill="url(#emiAura)" />}
              {showTrip && <ellipse cx="895" cy="155" rx="85" ry="65" fill="url(#tripAura)" />}

              {/* Main River Wave Line */}
              <motion.path 
                d="M 5,170 C 60,185 80,182 100,182 C 140,182 180,165 240,178 C 275,185 295,190 310,190 C 345,190 375,178 430,178 C 470,178 485,188 505,188 C 525,188 540,178 575,178 C 630,178 670,190 710,190 C 740,190 770,182 825,174 C 865,168 880,185 895,185 C 925,185 960,172 995,175" 
                stroke="url(#riverGrad)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                initial={{ pathLength: 0.2 }}
                animate={{ pathLength: Math.min(0.2 + (activeStep * 0.16), 1) }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Node 1: Salary */}
              {showSalary && (
                <g>
                  <circle cx="100" cy="182" r="10" fill="#10B981" fillOpacity="0.2" />
                  <circle cx="100" cy="182" r="5" fill="#10B981" />
                </g>
              )}

              {/* Node 2: Dinner */}
              {showDinner && (
                <g>
                  <circle cx="310" cy="190" r="10" fill="#FB7185" fillOpacity="0.2" />
                  <circle cx="310" cy="190" r="5" fill="#FB7185" />
                </g>
              )}

              {/* Node 3: Center */}
              {showCenter && (
                <g>
                  <circle cx="505" cy="188" r="9" fill="#14B8A6" fillOpacity="0.25" />
                  <circle cx="505" cy="188" r="4.5" fill="#14B8A6" />
                </g>
              )}

              {/* Node 4: EMI */}
              {showEMI && (
                <g>
                  <circle cx="710" cy="190" r="10" fill="#3B82F6" fillOpacity="0.2" />
                  <circle cx="710" cy="190" r="5" fill="#3B82F6" />
                </g>
              )}

              {/* Node 5: Trip */}
              {showTrip && (
                <g>
                  <circle cx="895" cy="185" r="10" fill="#F59E0B" fillOpacity="0.2" />
                  <circle cx="895" cy="185" r="5" fill="#F59E0B" />
                </g>
              )}
            </svg>

            {/* VIGNETTE 1: SALARY */}
            <AnimatePresence>
              {showSalary && (
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-[30px] left-[45px] sm:left-[55px] w-[100px] flex flex-col items-center"
                >
                  <div className="flex items-center gap-1.5 mb-1 text-emerald-400">
                    <span className="w-0.5 h-2.5 rounded-full bg-emerald-400 transform -rotate-[30deg]" />
                    <span className="w-0.5 h-3 rounded-full bg-emerald-400 transform -translate-y-1" />
                    <span className="w-0.5 h-2.5 rounded-full bg-emerald-400 transform rotate-[30deg]" />
                  </div>

                  <div className="relative w-20 h-16 flex items-center justify-center">
                    <span className="absolute -left-2 top-2 text-emerald-200 text-lg select-none transform -rotate-12">🌿</span>
                    <div className="relative w-16 h-12 bg-white rounded-lg border-2 border-emerald-400 shadow-sm flex items-center justify-center transform -rotate-[6deg]">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                        <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1.5 w-20 h-1.5 bg-emerald-300 rounded-full" />
                    </div>
                  </div>

                  <span className="mt-14 text-xs sm:text-sm font-semibold text-slate-800">
                    Salary
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VIGNETTE 2: DINNER */}
            <AnimatePresence>
              {showDinner && (
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-[48px] left-[255px] sm:left-[265px] w-[110px] flex flex-col items-center"
                >
                  <div className="flex items-center gap-1.5 mb-1 text-rose-300">
                    <span className="w-0.5 h-2 rounded-full bg-rose-300 transform -rotate-[25deg]" />
                    <span className="w-0.5 h-2.5 rounded-full bg-rose-300 transform -translate-y-0.5" />
                    <span className="w-0.5 h-2 rounded-full bg-rose-300 transform rotate-[25deg]" />
                  </div>

                  <div className="relative flex items-end gap-1.5 h-14">
                    <div className="relative w-14 h-9 bg-gradient-to-b from-orange-200 to-rose-200 rounded-b-2xl border border-rose-300 shadow-xs flex items-center justify-center overflow-hidden">
                      <div className="absolute top-0.5 w-12 h-4 bg-amber-400/90 rounded-full flex items-center justify-center gap-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <span className="text-[10px] text-rose-400 font-bold select-none leading-none -mb-1 animate-pulse">~</span>
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-xs border border-amber-950/20 relative">
                        <span className="absolute -right-1.5 top-1 w-2 h-3.5 border border-amber-800 rounded-r-md" />
                      </div>
                    </div>
                  </div>

                  <span className="mt-14 text-xs sm:text-sm font-semibold text-slate-800">
                    Dinner
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VIGNETTE 3: "EVERYTHING STILL ON TRACK" (Center) */}
            <AnimatePresence>
              {showCenter && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-[82px] left-[430px] sm:left-[435px] w-[150px] flex flex-col items-center z-10"
                >
                  <div className="flex items-center gap-1.5 mb-1.5 text-teal-400">
                    <span className="w-0.5 h-2 rounded-full bg-teal-400 transform -rotate-[25deg]" />
                    <span className="w-0.5 h-2.5 rounded-full bg-teal-400 transform -translate-y-0.5" />
                    <span className="w-0.5 h-2 rounded-full bg-teal-400 transform rotate-[25deg]" />
                  </div>

                  <div 
                    className="bg-white rounded-2xl py-2 px-3 sm:px-4 border border-slate-100 flex items-center gap-2.5 shadow-sm"
                    style={{
                      boxShadow: "0 12px 30px -6px rgba(20, 184, 166, 0.15), 0 4px 12px rgba(0, 0, 0, 0.03)"
                    }}
                  >
                    <div className="flex items-end gap-0.5 h-4 shrink-0 pb-0.5">
                      <span className="w-1 h-2 rounded-full bg-emerald-400" />
                      <span className="w-1 h-3 rounded-full bg-emerald-500" />
                      <span className="w-1 h-4 rounded-full bg-emerald-500" />
                    </div>

                    <div className="text-left whitespace-nowrap">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 block leading-tight">
                        Everything
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 block leading-tight">
                        still on track.
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VIGNETTE 4: EMI */}
            <AnimatePresence>
              {showEMI && (
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-[46px] left-[655px] sm:left-[665px] w-[110px] flex flex-col items-center"
                >
                  <div className="relative w-20 h-16 flex items-center justify-center">
                    <div className="absolute -top-1 right-1 w-9 h-9 bg-blue-100 rounded-xl border border-blue-200 shadow-xs flex flex-col p-1">
                      <div className="flex justify-between items-center px-0.5">
                        <span className="w-1 h-1.5 rounded-full bg-blue-500" />
                        <span className="w-1 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-1 place-items-center">
                        <span className="w-2 h-2 rounded-sm bg-blue-300" />
                        <span className="w-2 h-2 rounded-sm bg-blue-400" />
                      </div>
                    </div>

                    <div className="relative w-12 h-14 bg-white rounded-lg border border-slate-200 shadow-sm p-1.5 flex flex-col justify-between transform -rotate-[5deg]">
                      <span className="text-[9px] font-black tracking-tight text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-center">
                        EMI
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="w-full h-0.5 bg-slate-200 rounded" />
                        <span className="w-3/4 h-0.5 bg-slate-200 rounded" />
                        <span className="w-1/2 h-0.5 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>

                  <span className="mt-14 text-xs sm:text-sm font-semibold text-slate-800">
                    EMI
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* VIGNETTE 5: TRIP */}
            <AnimatePresence>
              {showTrip && (
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-[32px] left-[845px] sm:left-[855px] w-[105px] flex flex-col items-center"
                >
                  <div className="flex items-center gap-1.5 mb-1 text-amber-400">
                    <span className="w-0.5 h-2 rounded-full bg-amber-400 transform -rotate-[25deg]" />
                    <span className="w-0.5 h-2.5 rounded-full bg-amber-400 transform -translate-y-0.5" />
                    <span className="w-0.5 h-2 rounded-full bg-amber-400 transform rotate-[25deg]" />
                  </div>

                  <div className="relative w-20 h-16 flex items-center justify-center">
                    <span className="absolute -right-2 top-0 text-2xl select-none">🌴</span>
                    <span className="absolute -left-2 bottom-1 text-slate-300 text-xs">⛰️</span>

                    <div className="relative w-13 h-10 bg-amber-400 rounded-lg border border-amber-500 shadow-sm flex items-center justify-center">
                      <span className="absolute -top-1.5 w-4 h-1.5 border border-amber-700 rounded-t-sm" />
                      <div className="w-full flex justify-around px-2">
                        <span className="w-1 h-full bg-amber-600/40" />
                        <span className="w-1 h-full bg-amber-600/40" />
                      </div>
                    </div>
                  </div>

                  <span className="mt-14 text-xs sm:text-sm font-semibold text-slate-800">
                    Trip
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
