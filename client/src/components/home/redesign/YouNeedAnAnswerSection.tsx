import React, { useState, useEffect, useRef } from "react";
import { Check, Send, ShieldCheck, CheckCircle2, Search, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface QuestionPreset {
  id: string;
  label: string;
  question: string;
  amount: number;
  answer: string;
  subAnswer: string;
  comfortableSpend: number;
  thisMonthLeft: number;
  thisMonthPercentage: number;
  commitmentsStatus: string;
  commitmentsSub: string;
  commitmentsPercentage: number;
  goalsStatus: string;
  goalsSub: string;
  goalsPercentage: number;
  impactBadge1Title: string;
  impactBadge1Sub: string;
  impactBadge2Title: string;
  impactBadge2Sub: string;
  imageAlt: string;
  imageUrl: string;
}

const PRESETS: QuestionPreset[] = [
  {
    id: "goa",
    label: "Goa Flights",
    question: "Can I book these Goa flights?",
    amount: 12800,
    answer: "Yes.",
    subAnswer: "You can book it.",
    comfortableSpend: 10300,
    thisMonthLeft: 23100,
    thisMonthPercentage: 56,
    commitmentsStatus: "On track",
    commitmentsSub: "EMIs covered",
    commitmentsPercentage: 52,
    goalsStatus: "On track",
    goalsSub: "Goa trip stays on track",
    goalsPercentage: 40,
    impactBadge1Title: "EMI stays covered",
    impactBadge1Sub: "There's no impact.",
    impactBadge2Title: "Goa trip stays on track",
    impactBadge2Sub: "Target by Dec 2026.",
    imageAlt: "Tropical palm beach view for Goa vacation",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=360&q=80",
  },
  {
    id: "espresso",
    label: "Coffee Machine",
    question: "Can I buy this espresso maker?",
    amount: 18500,
    answer: "Yes.",
    subAnswer: "Safe to buy today.",
    comfortableSpend: 4600,
    thisMonthLeft: 23100,
    thisMonthPercentage: 35,
    commitmentsStatus: "Protected",
    commitmentsSub: "All bills pre-allocated",
    commitmentsPercentage: 58,
    goalsStatus: "Safe",
    goalsSub: "SIPs continue as usual",
    goalsPercentage: 48,
    impactBadge1Title: "Zero debt impact",
    impactBadge1Sub: "Paid from safe buffer.",
    impactBadge2Title: "Emergency fund intact",
    impactBadge2Sub: "6 months fully shielded.",
    imageAlt: "Modern kitchen espresso machine",
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=360&q=80",
  },
  {
    id: "roadtrip",
    label: "Weekend Trip",
    question: "Can we do the weekend getaway?",
    amount: 6400,
    answer: "Yes.",
    subAnswer: "Completely within budget.",
    comfortableSpend: 16700,
    thisMonthLeft: 23100,
    thisMonthPercentage: 72,
    commitmentsStatus: "Unchanged",
    commitmentsSub: "House rent set aside",
    commitmentsPercentage: 60,
    goalsStatus: "On schedule",
    goalsSub: "No delay to milestones",
    goalsPercentage: 45,
    impactBadge1Title: "Rent is safe",
    impactBadge1Sub: "Transferred on the 1st.",
    impactBadge2Title: "Buffer preserved",
    impactBadge2Sub: "Leaves ₹16,700 cushion.",
    imageAlt: "Car scenic road trip through hills",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=360&q=80",
  },
];

export function YouNeedAnAnswerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const [activePreset, setActivePreset] = useState<QuestionPreset>(PRESETS[0]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Logical Narrative Stages (Calm, Paced & Physically Grounded):
  // 0: Clean Canvas
  // 1: User Asks Question (Question pill & tilted photo appear calmly)
  // 2: Question Dispatches to Pillars (Query sends line towards the 3 cards on the right)
  // 3: Pillar 1 Audited (Card 1: This Month lights up, validates ₹23,100 buffer -> "✓ Passed")
  // 4: Pillar 2 Audited (Card 2: Upcoming Commitments lights up, validates EMIs -> "✓ Passed")
  // 5: Pillar 3 Audited (Card 3: Goals lights up, validates Goa trip target -> "✓ Passed")
  // 6: All 3 Verified Pillars Converge (3 lines flow inwards towards the center-left to formulate the verdict)
  // 7: Main YES Verdict Delivered (Yes. + Green checkmark pops in, ₹10,300 rolls up)
  // 8: Reassurance Badges Drop (Bottom 2 badges connect and anchor)
  // 9: Settled Reading State (Stable for 8.5 seconds before smooth reset)
  const [stage, setStage] = useState<number>(0);
  const [spendValue, setSpendValue] = useState<number>(0);
  const [playCount, setPlayCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) {
      setStage(0);
      setSpendValue(0);
      return;
    }

    if (isPaused) return;

    let isCancelled = false;

    const runStory = async () => {
      // 0. Reset to empty canvas (gentle pause)
      setStage(0);
      setSpendValue(0);
      await new Promise((r) => setTimeout(r, 600));
      if (isCancelled) return;

      // 1. User Asks Question (Question pill & tilted photo appear calmly)
      setStage(1);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 2. Query Dispatches to Pillars: line draws from send button towards the 3 cards on right
      setStage(2);
      await new Promise((r) => setTimeout(r, 1800));
      if (isCancelled) return;

      // 3. Pillar 1 Audited: This Month card pops in and verifies
      setStage(3);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 4. Pillar 2 Audited: Commitments card pops in and verifies
      setStage(4);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 5. Pillar 3 Audited: Goals card pops in and verifies
      setStage(5);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 6. Convergence: All 3 cards send lines flowing back inwards towards the answer card
      setStage(6);
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 7. Verdict Card Reveals: "Yes. ✓" pops up, comfortable spend counts up steadily
      setStage(7);
      let currentVal = 0;
      const targetVal = activePreset.comfortableSpend;
      const increment = Math.ceil(targetVal / 28);
      const counterTimer = setInterval(() => {
        currentVal += increment;
        if (currentVal >= targetVal) {
          setSpendValue(targetVal);
          clearInterval(counterTimer);
        } else {
          setSpendValue(currentVal);
        }
      }, 35);

      await new Promise((r) => setTimeout(r, 2400));
      if (isCancelled) return;

      // 8. Reassurance badges drop down
      setStage(8);
      await new Promise((r) => setTimeout(r, 1800));
      if (isCancelled) return;

      // 9. Settled reading state: full 8.5 seconds of calm, peaceful absorption
      setStage(9);
      await new Promise((r) => setTimeout(r, 8500));
      if (isCancelled) return;

      // Loop again smoothly
      runStory();
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView, activePreset.id, playCount, isPaused]);

  return (
    <section 
      ref={containerRef}
      id="need-an-answer" 
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & COPY                          */}
          {/* ================================================================= */}
          <div className="md:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 03 ─────── */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <span className="text-slate-400 font-medium text-xs sm:text-sm tracking-wider font-mono">
                03
              </span>
              <div className="w-14 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Headline with Clean Horizontal Yellow Capsule */}
            <h2 className="text-[#0F172A] tracking-[-0.035em] leading-[1.12] text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold">
              <span className="block">Some days,</span>
              <span className="block">you don’t need</span>
              <span className="block">another chart.</span>
              <span className="inline-block relative mt-2.5 sm:mt-3">
                <span 
                  className="absolute inset-0 bg-[#FEF3C7] rounded-full z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-[#0F172A] px-5 sm:px-7 py-0.5 sm:py-1 font-bold whitespace-nowrap block">
                  You need an answer.
                </span>
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-[1.12rem] leading-[1.65] font-normal tracking-[-0.01em] max-w-lg">
              Ask the question you actually have. Kubear routes your question through what you’ve already spent, what’s committed next, and what you’re working towards before answering.
            </p>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: PROGRESSIVE ANSWER COMPOSITION (MATCHING SCREENSHOT) */}
          {/* ================================================================= */}
          <div className="md:col-span-7 flex flex-col justify-center items-center py-2 md:py-4 w-full overflow-hidden md:overflow-visible">
            <div className="relative w-[620px] h-[550px] select-none shrink-0 scale-[0.52] min-[370px]:scale-[0.58] min-[400px]:scale-[0.64] min-[440px]:scale-[0.70] xs:scale-[0.78] sm:scale-[0.88] md:scale-[0.76] lg:scale-[0.92] xl:scale-100 origin-center -my-22 min-[370px]:-my-18 min-[400px]:-my-14 min-[440px]:-my-10 xs:my-0">
              
              {/* Soft Luminous Background Ambient Glow Auras */}
              <motion.div 
                className="absolute top-[130px] left-[15px] w-[360px] h-[360px] rounded-full pointer-events-none -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 7 ? 0.8 : stage >= 6 ? 0.45 : 0 }}
                transition={{ duration: 1.0 }}
                style={{
                  background: "radial-gradient(circle, rgba(167, 243, 208, 0.45) 0%, rgba(209, 250, 229, 0.2) 50%, transparent 75%)"
                }}
                aria-hidden="true"
              />
              <motion.div 
                className="absolute top-[10px] left-[170px] w-[390px] h-[230px] rounded-full pointer-events-none -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 ? 0.6 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "radial-gradient(ellipse at center, rgba(221, 214, 254, 0.45) 0%, rgba(243, 232, 255, 0.2) 50%, transparent 75%)"
                }}
                aria-hidden="true"
              />

              {/* ============================================================= */}
              {/* SVG CONNECTOR LINES: LOGICAL CAUSAL FLOW                      */}
              {/* (Question -> Routes into 3 Cards FIRST -> Converges into YES) */}
              {/* ============================================================= */}
              <svg 
                viewBox="0 0 620 550" 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-15"
                fill="none"
              >
                {/* 1. DISPATCH BEAM: From Question Send Button (505, 95) down to Right 3 Cards */}
                {/* Feeder curve curving towards Card 1 entrance */}
                <motion.path 
                  d="M 505,95 C 505,135 440,150 405,178" 
                  stroke="#A855F7" 
                  strokeWidth="2.2" 
                  strokeDasharray="4 4" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 2 ? 1 : 0, 
                    opacity: stage >= 2 ? 1 : 0 
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />

                {/* Traveling packet gliding from Question Send button into Card 1 */}
                {stage === 2 && (
                  <motion.circle
                    r="5.5"
                    fill="#7C3AED"
                    initial={{ cx: 505, cy: 95 }}
                    animate={{ 
                      cx: [505, 470, 405], 
                      cy: [95, 140, 178] 
                    }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                  />
                )}

                {/* Step Connector down from Card 1 to Card 2 */}
                <motion.path 
                  d="M 405,232 L 405,258" 
                  stroke="#38BDF8" 
                  strokeWidth="2" 
                  strokeDasharray="3 3" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 4 ? 1 : 0, 
                    opacity: stage >= 4 ? 1 : 0 
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Step Connector down from Card 2 to Card 3 */}
                <motion.path 
                  d="M 405,314 L 405,340" 
                  stroke="#A855F7" 
                  strokeWidth="2" 
                  strokeDasharray="3 3" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 5 ? 1 : 0, 
                    opacity: stage >= 5 ? 1 : 0 
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* 2. CONVERGENCE BEAMS: From the 3 verified cards CONVERGING INTO THE YES CARD */}
                {/* From Card 1 (This Month) left edge into Main YES Card */}
                <motion.path 
                  d="M 390,205 C 375,205 375,235 358,235" 
                  stroke="#10B981" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 6 ? 1 : 0, 
                    opacity: stage >= 6 ? 1 : 0 
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />

                {/* From Card 2 (Commitments) left edge into Main YES Card */}
                <motion.path 
                  d="M 390,286 L 358,286" 
                  stroke="#38BDF8" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 6 ? 1 : 0, 
                    opacity: stage >= 6 ? 1 : 0 
                  }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
                />

                {/* From Card 3 (Goals) left edge into Main YES Card */}
                <motion.path 
                  d="M 390,368 C 375,368 375,335 358,335" 
                  stroke="#A855F7" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: stage >= 6 ? 1 : 0, 
                    opacity: stage >= 6 ? 1 : 0 
                  }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                />

                {/* Animated light pulses when the 3 cards converge in stage 6 */}
                {stage === 6 && (
                  <g>
                    <motion.circle
                      r="4.5"
                      fill="#10B981"
                      animate={{ cx: [390, 358], cy: [205, 235] }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                    <motion.circle
                      r="4.5"
                      fill="#38BDF8"
                      animate={{ cx: [390, 358], cy: [286, 286] }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                    <motion.circle
                      r="4.5"
                      fill="#A855F7"
                      animate={{ cx: [390, 358], cy: [368, 335] }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                  </g>
                )}

                {/* 3. Dropdown lines from YES Card to Bottom Badges */}
                <g>
                  {/* Line down to EMI badge */}
                  <motion.line 
                    x1="125" 
                    y1="392" 
                    x2="125" 
                    y2="426" 
                    stroke="#10B981" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: stage >= 8 ? 1 : 0, 
                      opacity: stage >= 8 ? 1 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Line down to Goa Trip badge */}
                  <motion.line 
                    x1="260" 
                    y1="392" 
                    x2="260" 
                    y2="426" 
                    stroke="#A855F7" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: stage >= 8 ? 1 : 0, 
                      opacity: stage >= 8 ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />
                </g>
              </svg>

              {/* ============================================================= */}
              {/* ELEMENT 1: Tilted Beach Photo Thumbnail (Enters calmly at Beat 1) */}
              {/* ============================================================= */}
              <motion.div 
                className="absolute top-[26px] left-[65px] z-20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.7, y: -20, rotate: -18 }}
                animate={
                  stage >= 1 
                    ? { opacity: 1, scale: 1, y: 0, rotate: -10 } 
                    : { opacity: 0, scale: 0.7, y: -20, rotate: -18 }
                }
                transition={{ 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="w-26 h-26 sm:w-28 sm:h-28 rounded-[24px] overflow-hidden border-[3.5px] border-white shadow-[0_14px_30px_rgba(0,0,0,0.14)] bg-slate-100">
                  <img 
                    src={activePreset.imageUrl} 
                    alt={activePreset.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* ============================================================= */}
              {/* ELEMENT 2: Top Question Prompt Card (Enters calmly at Beat 1)  */}
              {/* ============================================================= */}
              <motion.div 
                className="absolute top-[44px] left-[175px] sm:left-[185px] z-20"
                initial={{ opacity: 0, scale: 0.85, y: -16 }}
                animate={
                  stage >= 1 
                    ? { opacity: 1, scale: 1, y: 0 } 
                    : { opacity: 0, scale: 0.85, y: -16 }
                }
                transition={{ 
                  duration: 0.7, 
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div 
                  className="bg-white rounded-full py-3.5 px-6 border border-slate-100/90 flex items-center gap-6 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.08),0_4px_14px_rgba(0,0,0,0.02)]"
                >
                  <div>
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium block">
                      {activePreset.question}
                    </span>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5 tabular-nums">
                      ₹{activePreset.amount.toLocaleString("en-IN")}
                    </div>
                  </div>

                  {/* Purple Circular Send Button with active pulse on Beat 2 */}
                  <motion.div 
                    animate={
                      stage === 2 
                        ? { scale: [1, 0.86, 1.12, 1] } 
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                      stage >= 2 ? "bg-[#7C3AED] text-white shadow-purple-200 shadow-md" : "bg-[#EDE9FE] text-[#7C3AED]"
                    }`}
                  >
                    <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px] transform rotate-45 -translate-y-0.5 translate-x-0.5 fill-current" />
                  </motion.div>
                </div>
              </motion.div>

              {/* ============================================================= */}
              {/* ELEMENT 3: RIGHT-SIDE 3 PILLAR CARDS (Audited FIRST at beats 3, 4, 5) */}
              {/* ============================================================= */}
              <div className="absolute top-[170px] left-[398px] flex flex-col gap-3.5 z-20 w-[220px]">
                
                {/* Pillar 1: This month (Audited at stage 3) */}
                <motion.div 
                  initial={{ opacity: 0, x: 26, scale: 0.92 }}
                  animate={
                    stage >= 3 
                      ? { opacity: 1, x: 0, scale: 1 } 
                      : { opacity: 0, x: 26, scale: 0.92 }
                  }
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* Indicator Dot with Ring */}
                  <span className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-400 ${
                    stage >= 3 ? "bg-[#10B981] ring-4 ring-emerald-100 scale-110" : "bg-slate-300"
                  } z-30`} />
                  
                  <div className={`bg-white rounded-2xl p-3.5 border transition-all duration-400 ${
                    stage === 3 
                      ? "border-emerald-400 ring-4 ring-emerald-50 shadow-md scale-102" 
                      : stage > 3 
                      ? "border-emerald-200 shadow-sm"
                      : "border-slate-100 shadow-xs"
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-700 font-semibold">
                            This month
                          </span>
                          {stage >= 3 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                              ✓ PASS
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          Cash Buffer Check
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-xs sm:text-[13px] font-bold text-slate-900 block tabular-nums leading-tight">
                          ₹{activePreset.thisMonthLeft.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                          left to spend
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar fills smoothly */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#10B981] rounded-full" 
                        initial={{ width: "0%" }}
                        animate={{ width: stage >= 3 ? `${activePreset.thisMonthPercentage}%` : "0%" }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Pillar 2: Upcoming commitments (Audited at stage 4) */}
                <motion.div 
                  initial={{ opacity: 0, x: 26, scale: 0.92 }}
                  animate={
                    stage >= 4 
                      ? { opacity: 1, x: 0, scale: 1 } 
                      : { opacity: 0, x: 26, scale: 0.92 }
                  }
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* Indicator Dot */}
                  <span className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-400 ${
                    stage >= 4 ? "bg-[#38BDF8] ring-4 ring-sky-100 scale-110" : "bg-slate-300"
                  } z-30`} />
                  
                  <div className={`bg-white rounded-2xl p-3.5 border transition-all duration-400 ${
                    stage === 4 
                      ? "border-sky-400 ring-4 ring-sky-50 shadow-md scale-102" 
                      : stage > 4 
                      ? "border-sky-200 shadow-sm"
                      : "border-slate-100 shadow-xs"
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-700 font-semibold">
                            Commitments
                          </span>
                          {stage >= 4 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-200">
                              ✓ PASS
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          EMIs & Fixed Bills
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight">
                          {activePreset.commitmentsStatus}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                          {activePreset.commitmentsSub}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar fills smoothly */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#38BDF8] rounded-full" 
                        initial={{ width: "0%" }}
                        animate={{ width: stage >= 4 ? `${activePreset.commitmentsPercentage}%` : "0%" }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Pillar 3: Your goals (Audited at stage 5) */}
                <motion.div 
                  initial={{ opacity: 0, x: 26, scale: 0.92 }}
                  animate={
                    stage >= 5 
                      ? { opacity: 1, x: 0, scale: 1 } 
                      : { opacity: 0, x: 26, scale: 0.92 }
                  }
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* Indicator Dot */}
                  <span className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-400 ${
                    stage >= 5 ? "bg-[#A855F7] ring-4 ring-purple-100 scale-110" : "bg-slate-300"
                  } z-30`} />
                  
                  <div className={`bg-white rounded-2xl p-3.5 border transition-all duration-400 ${
                    stage === 5 
                      ? "border-purple-400 ring-4 ring-purple-50 shadow-md scale-102" 
                      : stage > 5 
                      ? "border-purple-200 shadow-sm"
                      : "border-slate-100 shadow-xs"
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-700 font-semibold">
                            Your goals
                          </span>
                          {stage >= 5 && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-200">
                              ✓ PASS
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          Long-term Milestones
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight">
                          {activePreset.goalsStatus}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                          {activePreset.goalsSub}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar fills smoothly */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#A855F7] rounded-full" 
                        initial={{ width: "0%" }}
                        animate={{ width: stage >= 5 ? `${activePreset.goalsPercentage}%` : "0%" }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ============================================================= */}
              {/* ELEMENT 4: MAIN VERDICT CARD (Formulated AFTER the 3 checks!) */}
              {/* ============================================================= */}
              <motion.div 
                className="absolute top-[188px] left-[55px] z-20 w-[295px] sm:w-[305px]"
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                animate={
                  stage >= 6
                    ? {
                        opacity: 1,
                        scale: stage >= 7 ? [0.98, 1.02, 1] : 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        scale: 0.88,
                        y: 24,
                      }
                }
                transition={{ 
                  duration: 0.65, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div 
                  className={`bg-white rounded-[32px] p-6 sm:p-7 border transition-all duration-600 ${
                    stage >= 7 
                      ? "border-emerald-200 ring-4 ring-emerald-50 shadow-[0_24px_60px_-10px_rgba(16,185,129,0.22),0_4px_18px_rgba(0,0,0,0.03)]" 
                      : "border-purple-100 ring-2 ring-purple-50/60 shadow-[0_20px_45px_-10px_rgba(168,85,247,0.12),0_4px_14px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {/* Prior to final verdict reveal: shows synthesis pulse */}
                  {stage === 6 ? (
                    <div className="py-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-3 animate-pulse">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-800">
                        Synthesizing 3 Checks...
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Cash + Commitments + Goals verified
                      </p>
                    </div>
                  ) : (
                    /* Final Verdict Revealed: Matches image.png reference */
                    <div>
                      {/* Verdict Row: "Yes." + Green Checkmark Badge */}
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-3xl sm:text-[34px] font-bold text-slate-900 leading-none">
                          {activePreset.answer}
                        </h3>
                        
                        {/* Punchy animated green check badge */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.35, 1] }}
                          transition={{ duration: 0.45 }}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                        </motion.div>
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-1">
                        {activePreset.subAnswer}
                      </p>

                      {/* Big bold calculated amount */}
                      <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight mt-6 mb-0.5 tabular-nums">
                        ₹{spendValue.toLocaleString("en-IN")}
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
                        comfortable to spend this month.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* ============================================================= */}
              {/* ELEMENT 5: BOTTOM 2 IMPACT BADGES (Drop down at stage 8)      */}
              {/* ============================================================= */}
              <div className="absolute top-[426px] left-[50px] flex items-center gap-3.5 z-20">
                
                {/* Badge 1: EMI stays covered */}
                <motion.div 
                  initial={{ opacity: 0, y: 16, scale: 0.88 }}
                  animate={
                    stage >= 8 
                      ? { opacity: 1, y: 0, scale: 1 } 
                      : { opacity: 0, y: 16, scale: 0.88 }
                  }
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-white rounded-2xl py-3 px-4 sm:px-5 border border-slate-100 flex items-center gap-3 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {activePreset.impactBadge1Title}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                      {activePreset.impactBadge1Sub}
                    </span>
                  </div>
                </motion.div>

                {/* Badge 2: Goa trip stays on track */}
                <motion.div 
                  initial={{ opacity: 0, y: 16, scale: 0.88 }}
                  animate={
                    stage >= 8 
                      ? { opacity: 1, y: 0, scale: 1 } 
                      : { opacity: 0, y: 16, scale: 0.88 }
                  }
                  transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 
                  }}
                  className="bg-white rounded-2xl py-3 px-4 sm:px-5 border border-slate-100 flex items-center gap-3 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#A855F7] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {activePreset.impactBadge2Title}
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                      {activePreset.impactBadge2Sub}
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

