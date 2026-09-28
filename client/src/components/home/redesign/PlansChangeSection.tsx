import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check } from "lucide-react";

interface ExpenseScenario {
  id: string;
  title: string;
  amount: number;
  paymentMethod: string;
  time: string;
  beforeComfortable: number;
  nowComfortable: number;
  beforePercentage: number;
  nowPercentage: number;
  goalTitle: string;
  goalStatus: string;
  goalSaved: number;
  goalTarget: number;
  goalPercentage: number;
}

const scenarios: ExpenseScenario[] = [
  {
    id: "dinner",
    title: "Dinner",
    amount: 1200,
    paymentMethod: "UPI",
    time: "Today, 9:14 PM",
    beforeComfortable: 24300,
    nowComfortable: 23100,
    beforePercentage: 64,
    nowPercentage: 52,
    goalTitle: "Goa Trip",
    goalStatus: "Still on track",
    goalSaved: 42000,
    goalTarget: 70000,
    goalPercentage: 60,
  },
  {
    id: "shopping",
    title: "Weekend Shopping",
    amount: 2800,
    paymentMethod: "UPI",
    time: "Today, 6:30 PM",
    beforeComfortable: 24300,
    nowComfortable: 21500,
    beforePercentage: 64,
    nowPercentage: 47,
    goalTitle: "Goa Trip",
    goalStatus: "Still on track",
    goalSaved: 42000,
    goalTarget: 70000,
    goalPercentage: 60,
  }
];

// Stages for progressive storytelling:
// 1. "baseline"         -> Starts by showing initial state: "Before this expense: ₹24,300 comfortable to spend"
// 2. "expense_arrives"  -> Then, an expense arrives at the top ("Dinner - ₹1,200", Debited)
// 3. "trajectory_flows" -> Pink trajectory draws down to the money timeline
// 4. "impact_hits"      -> Hits the bead: shockwave ripples, radiating ticks flare, curve flexes
// 5. "now_updates"      -> Arrow and "Now" card reveal, counter rolls down smoothly ₹24,300 -> ₹23,100, bar glides
// 6. "goal_reassured"   -> Line drops to Goa Trip goal: "Still on track" reassuring long-term goals are safe
// 7. "settled"          -> Sits calmly for reading before gently transitioning to the next story cycle

export function PlansChangeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [stage, setStage] = useState<
    "baseline" | "expense_arrives" | "trajectory_flows" | "impact_hits" | "now_updates" | "goal_reassured" | "settled"
  >("baseline");

  const [displayedComfortable, setDisplayedComfortable] = useState(scenarios[0].beforeComfortable);
  const [displayedPercentage, setDisplayedPercentage] = useState(scenarios[0].beforePercentage);

  const current = scenarios[activeScenarioIndex];

  useEffect(() => {
    // When out of view, reset immediately back to clean baseline
    if (!isInView) {
      setStage("baseline");
      setDisplayedComfortable(scenarios[0].beforeComfortable);
      setDisplayedPercentage(scenarios[0].beforePercentage);
      setActiveScenarioIndex(0);
      return;
    }

    let isCancelled = false;

    const runProgressiveStory = async () => {
      if (isCancelled) return;

      // 1. Baseline: Show existing comfortable balance first
      setStage("baseline");
      setDisplayedComfortable(current.beforeComfortable);
      setDisplayedPercentage(current.beforePercentage);

      // Unhurried pause to understand initial budget state (2 seconds)
      await new Promise((r) => setTimeout(r, 2000));
      if (isCancelled) return;

      // 2. Expense Arrives: Top card floats in
      setStage("expense_arrives");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 3. Trajectory Flows: Pink connector draws down slowly
      setStage("trajectory_flows");
      await new Promise((r) => setTimeout(r, 1400));
      if (isCancelled) return;

      // 4. Impact Hits: Bead reacts and curve absorbs
      setStage("impact_hits");
      await new Promise((r) => setTimeout(r, 900));
      if (isCancelled) return;

      // 5. Now Updates: Arrow and "Now" appear, counter counts down smoothly
      setStage("now_updates");

      const startVal = current.beforeComfortable;
      const targetVal = current.nowComfortable;
      const startPct = current.beforePercentage;
      const targetPct = current.nowPercentage;
      const rollDuration = 1400; // Slower, relaxed count down
      const startTime = performance.now();

      const rollPromise = new Promise<void>((resolve) => {
        const updateCounter = (currentTime: number) => {
          if (isCancelled) return resolve();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / rollDuration, 1);
          // Smooth cubic ease out
          const ease = 1 - Math.pow(1 - progress, 3);
          setDisplayedComfortable(Math.round(startVal - (startVal - targetVal) * ease));
          setDisplayedPercentage(Math.round(startPct - (startPct - targetPct) * ease));

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            resolve();
          }
        };
        requestAnimationFrame(updateCounter);
      });

      await rollPromise;
      if (isCancelled) return;

      // Pause to let the user see the recalculated safe-to-spend figure
      await new Promise((r) => setTimeout(r, 1200));
      if (isCancelled) return;

      // 6. Goal Reassured: Vertical pulse drops down into Goa Trip card
      setStage("goal_reassured");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 7. Settled: Full picture visible and peaceful for 4.5 seconds
      setStage("settled");
      await new Promise((r) => setTimeout(r, 4500));
      if (isCancelled) return;

      // Cycle gently to next scenario
      setActiveScenarioIndex((prev) => (prev + 1) % scenarios.length);
    };

    runProgressiveStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView, activeScenarioIndex]);

  // Progressive visibility flags
  const showExpenseCard = stage !== "baseline";
  const showTrajectory = stage !== "baseline" && stage !== "expense_arrives";
  const showImpact = stage === "impact_hits" || stage === "now_updates" || stage === "goal_reassured" || stage === "settled";
  const showNowCard = stage === "now_updates" || stage === "goal_reassured" || stage === "settled";
  const showGoalCard = stage === "goal_reassured" || stage === "settled";

  return (
    <section 
      ref={containerRef}
      id="plans-change" 
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white"
    >
      <style>{`
        .plans-change-serif-italic {
          font-family: "Fraunces", "DM Serif Display", Georgia, serif !important;
          font-style: italic !important;
          font-weight: 500 !important;
          letter-spacing: -0.02em !important;
        }
      `}</style>

      {/* Subtle ambient lighting behind timeline */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[500px] pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(244, 63, 94, 0.08) 0%, rgba(129, 140, 248, 0.04) 45%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: THE STEP-BY-STEP PROGRESSIVE FINANCIAL STORY         */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center py-4">
            <div className="relative w-[540px] sm:w-[580px] h-[460px] sm:h-[480px] select-none shrink-0 scale-[0.88] xs:scale-[0.95] sm:scale-100 origin-center">
              
              {/* SVG LAYER: Sweeping Horizon Curves, Pink Trajectory Arrow & Glowing Impact Node */}
              <svg 
                viewBox="0 0 600 480" 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                fill="none"
              >
                <defs>
                  {/* Horizon gradient */}
                  <linearGradient id="plansCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.85" />
                    <stop offset="42%" stopColor="#FB7185" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#C4B5FD" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.75" />
                  </linearGradient>

                  {/* Soft radial glow for the impact point */}
                  <radialGradient id="plansImpactGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#FB7185" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Faint dashed secondary guide curve */}
                <path 
                  d="M 15,225 C 100,200 180,180 320,180 C 420,180 500,120 585,130" 
                  stroke="#CBD5E1" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                  opacity="0.75" 
                />

                {/* 2. Main smooth horizon gradient S-curve */}
                <motion.path 
                  d="M 10,215 C 80,140 170,135 305,208 C 395,255 475,145 590,165" 
                  stroke="url(#plansCurveGrad)" 
                  strokeWidth="2.25" 
                  strokeLinecap="round" 
                  animate={{
                    d: stage === "impact_hits"
                      ? "M 10,215 C 80,140 170,138 305,214 C 395,258 475,145 590,165"
                      : "M 10,215 C 80,140 170,135 305,208 C 395,255 475,145 590,165"
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                />

                {/* 3. Pink downward curved trajectory - draws smoothly */}
                {showTrajectory && (
                  <motion.path 
                    d="M 215,128 C 235,165 275,190 304,204" 
                    stroke="#FB7185" 
                    strokeWidth="1.75" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                {/* Arrowhead at the tip of the pink trajectory */}
                {showTrajectory && (
                  <motion.path 
                    d="M 297,196 L 305,205 L 295,208" 
                    stroke="#FB7185" 
                    strokeWidth="1.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                )}

                {/* 4. Glowing impact bead on the line */}
                {showImpact && (
                  <g>
                    {/* Expanding ripple ring */}
                    {stage === "impact_hits" && (
                      <motion.circle
                        cx="305"
                        cy="208"
                        fill="none"
                        stroke="#F43F5E"
                        strokeWidth="1.75"
                        initial={{ r: 6, opacity: 0.9 }}
                        animate={{ r: 28, opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    )}

                    {/* Outer radial halo */}
                    <circle cx="305" cy="208" r="18" fill="url(#plansImpactGlow)" />
                    {/* Inner bead */}
                    <circle cx="305" cy="208" r="6" fill="#F43F5E" />
                    {/* Center glint */}
                    <circle cx="303.5" cy="206.5" r="1.5" fill="#FFE4E6" />

                    {/* Radiating 3 tick marks */}
                    <path d="M 297,194 L 292,187" stroke="#FB7185" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M 305,190 L 305,182" stroke="#FB7185" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M 314,194 L 320,187" stroke="#FB7185" strokeWidth="1.75" strokeLinecap="round" />
                  </g>
                )}

                {/* 5. Vertical dashed connector dropping from "Now" card down to "Goa Trip" card */}
                {showNowCard && (
                  <motion.line 
                    x1="288" 
                    y1="340" 
                    x2="288" 
                    y2="378" 
                    stroke={stage === "goal_reassured" ? "#10B981" : "#CBD5E1"} 
                    strokeWidth={stage === "goal_reassured" ? "2" : "1.5"}
                    strokeDasharray="3 3.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </svg>

              {/* STEP 2: Top Expense Card ("Dinner - ₹1,200") */}
              {/* Slides down smoothly when expense takes place */}
              <AnimatePresence>
                {showExpenseCard && (
                  <motion.div 
                    initial={{ opacity: 0, y: -24, scale: 0.92, rotate: -4 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
                    exit={{ opacity: 0, y: -12, scale: 0.96 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[6%] left-[17%] sm:left-[21%] z-20 pointer-events-none"
                  >
                    <div 
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100/90 w-44 sm:w-52 relative overflow-hidden"
                      style={{
                        boxShadow: "0 18px 40px -8px rgba(0, 0, 0, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.03)"
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-rose-500" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-[13px] text-slate-500 font-medium block">
                          {current.title}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          Debited
                        </span>
                      </div>

                      <div className="text-lg sm:text-[22px] font-bold text-slate-900 tracking-tight my-0.5 tabular-nums">
                        – ₹{current.amount.toLocaleString("en-IN")}
                      </div>
                      
                      <span className="text-[11px] text-slate-400 font-normal block">
                        {current.paymentMethod} · {current.time}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* STEP 1 & STEP 5: "Before this expense" -> "Now" */}
              <div className="absolute top-[49%] left-[3%] right-[3%] flex items-center justify-center gap-3 sm:gap-4 z-20">
                
                {/* Left Card: Before this expense (Always visible as the baseline anchor) */}
                <div 
                  className="flex-1 max-w-[205px] bg-white rounded-2xl p-4 sm:p-5 border border-slate-100"
                  style={{
                    boxShadow: "0 14px 34px -6px rgba(0, 0, 0, 0.06), 0 3px 10px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  <span className="text-xs sm:text-[13px] text-slate-500 font-medium block">
                    Before this expense
                  </span>
                  <div className="text-xl sm:text-[26px] font-bold text-slate-900 tracking-tight mt-1 mb-0.5 tabular-nums">
                    ₹{current.beforeComfortable.toLocaleString("en-IN")}
                  </div>
                  <span className="text-xs sm:text-[13px] text-slate-500 font-normal block">
                    comfortable to spend
                  </span>
                  <div className="h-1.5 sm:h-2 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-[#10B981] rounded-full" 
                      style={{ width: `${current.beforePercentage}%` }}
                    />
                  </div>
                </div>

                {/* Arrow in-between - emerges after impact */}
                <div className="w-5 flex items-center justify-center shrink-0">
                  <AnimatePresence>
                    {showNowCard && (
                      <motion.div 
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-slate-400 sm:text-slate-500 text-lg sm:text-xl font-light shrink-0" 
                        aria-hidden="true"
                      >
                        →
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Card: Now - gracefully slides and updates */}
                <div className="flex-1 max-w-[205px]">
                  <AnimatePresence mode="wait">
                    {showNowCard ? (
                      <motion.div 
                        key="now-active"
                        initial={{ opacity: 0, x: 14, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 relative overflow-hidden"
                        style={{
                          boxShadow: "0 14px 34px -6px rgba(0, 0, 0, 0.06), 0 3px 10px rgba(0, 0, 0, 0.02)"
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-[13px] text-slate-500 font-medium block">
                            Now
                          </span>
                          <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full">
                            Recalculated
                          </span>
                        </div>
                        <div className="text-xl sm:text-[26px] font-bold text-slate-900 tracking-tight mt-1 mb-0.5 tabular-nums">
                          ₹{displayedComfortable.toLocaleString("en-IN")}
                        </div>
                        <span className="text-xs sm:text-[13px] text-slate-500 font-normal block">
                          comfortable to spend
                        </span>
                        <div className="h-1.5 sm:h-2 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                          <div 
                            className="h-full bg-[#10B981] rounded-full transition-all duration-300" 
                            style={{ width: `${displayedPercentage}%` }}
                          />
                        </div>
                      </motion.div>
                    ) : (
                      /* Placeholder card space while in baseline phase for visual calmness */
                      <div 
                        key="now-placeholder" 
                        className="h-[105px] sm:h-[115px] rounded-2xl border border-dashed border-slate-200/60 bg-slate-50/40 flex items-center justify-center"
                      >
                        <span className="text-xs text-slate-400 font-normal">
                          Awaiting change...
                        </span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* STEP 6: Bottom Goal Card ("Goa Trip") */}
              {/* Appears when reassessing long-term goals */}
              <div className="absolute top-[80%] left-[23%] sm:left-[27%] z-20">
                <AnimatePresence>
                  {showGoalCard && (
                    <motion.div 
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white rounded-2xl py-3 px-4 sm:px-5 border border-emerald-200 ring-2 ring-emerald-50 flex items-center justify-between gap-6 sm:gap-8"
                      style={{
                        boxShadow: "0 12px 30px -6px rgba(16, 185, 129, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02)"
                      }}
                    >
                      <div>
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium block">
                          {current.goalTitle}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-nowrap block">
                            {current.goalStatus}
                          </span>
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-50 text-emerald-600">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[11px] sm:text-xs text-slate-500 font-medium block tabular-nums">
                          ₹{current.goalSaved.toLocaleString("en-IN")} of ₹{current.goalTarget.toLocaleString("en-IN")}
                        </span>
                        <div className="h-1.5 w-20 sm:w-24 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                          <div 
                            className="h-full bg-[#10B981] rounded-full" 
                            style={{ width: `${current.goalPercentage}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: SECTION 02 EDITORIAL COPY                           */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 02 ─────── */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-400 font-medium text-sm sm:text-base tracking-wider font-mono">
                02
              </span>
              <div className="w-16 sm:w-20 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Title: Plans change. Your money should know. */}
            <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.08] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
              Plans change.<br />
              <span className="plans-change-serif-italic block mt-1 text-[#0F172A]">
                Your money should know.
              </span>
            </h2>

            {/* Explanation paragraph */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-lg">
              Kubear works out what that change means for what you can spend, save, invest and still stay on track for.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
