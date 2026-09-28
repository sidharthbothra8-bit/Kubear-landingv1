import React, { useState, useEffect, useRef } from "react";
import { Check, Send } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface AnswerScenario {
  id: string;
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
}

const scenario: AnswerScenario = {
  id: "goa",
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
};

// Progressive stages for Section 03:
// 1. "question_typed"   -> User prompt card & vacation photo appears
// 2. "analyzing"        -> Purple dashed connector sends query to financial engine
// 3. "verdict_arrives"  -> Main answer card pops in: "Yes. You can book it. ₹10,300 comfortable to spend"
// 4. "breakdown_reveals"-> 3 check cards on right appear sequentially (This month, Commitments, Goals)
// 5. "badges_confirm"   -> Bottom reassurance badges check off (EMI covered, Goa trip safe)
// 6. "settled"          -> Sits calmly for reading before gently refreshing

export function YouNeedAnAnswerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  const [data] = useState<AnswerScenario>(scenario);
  const [stage, setStage] = useState<"question_typed" | "analyzing" | "verdict_arrives" | "breakdown_reveals" | "badges_confirm" | "settled">("question_typed");

  useEffect(() => {
    if (!isInView) {
      setStage("question_typed");
      return;
    }

    let isCancelled = false;

    const runStory = async () => {
      if (isCancelled) return;

      // 1. Question appears first
      setStage("question_typed");
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 2. Analyzing flow
      setStage("analyzing");
      await new Promise((r) => setTimeout(r, 1400));
      if (isCancelled) return;

      // 3. Main answer arrives
      setStage("verdict_arrives");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 4. Breakdown cards reveal
      setStage("breakdown_reveals");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 5. Impact badges confirm
      setStage("badges_confirm");
      await new Promise((r) => setTimeout(r, 1600));
      if (isCancelled) return;

      // 6. Settled reading state
      setStage("settled");
      await new Promise((r) => setTimeout(r, 5500));
      if (isCancelled) return;

      // Restart sequence gently
      runStory();
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView]);

  const showQuestion = true;
  const showDashedConnector = stage !== "question_typed";
  const showVerdict = stage === "verdict_arrives" || stage === "breakdown_reveals" || stage === "badges_confirm" || stage === "settled";
  const showBreakdown = stage === "breakdown_reveals" || stage === "badges_confirm" || stage === "settled";
  const showBadges = stage === "badges_confirm" || stage === "settled";

  return (
    <section 
      ref={containerRef}
      id="need-an-answer" 
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div 
        className="absolute top-1/4 right-1/4 w-[520px] h-[520px] pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(192, 132, 252, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 75%)"
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-[460px] h-[460px] pointer-events-none opacity-35 blur-3xl -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & COPY                          */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 03 ─────── */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-slate-400 font-medium text-sm sm:text-base tracking-wider font-mono">
                03
              </span>
              <div className="w-16 sm:w-20 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.08] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
              Some days,<br />
              you don’t need<br />
              another chart.<br />
              <span className="inline-block relative mt-2 pt-0.5">
                <span 
                  className="absolute inset-0 bg-[#FEF08A]/75 rounded-full -skew-y-0.5 scale-y-110 scale-x-105 z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-[#0F172A] px-3.5 py-0.5 font-bold">
                  You need an answer.
                </span>
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-8 text-slate-600 text-base sm:text-lg lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-lg">
              Ask the question you actually have. Kubear looks at what you’ve already spent, what’s committed next and what you’re working towards before answering.
            </p>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: PROGRESSIVE ANSWER COMPOSITION                      */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex justify-center items-center overflow-x-auto sm:overflow-visible py-4">
            <div className="relative w-[560px] sm:w-[620px] h-[520px] sm:h-[530px] select-none shrink-0 scale-[0.82] xs:scale-[0.9] sm:scale-100 origin-center">
              
              {/* SVG CONNECTOR LINES & FLOW PATHS */}
              <svg 
                viewBox="0 0 620 530" 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                fill="none"
              >
                {/* 1. Purple dashed curve from Question card down to Answer card */}
                {showDashedConnector && (
                  <motion.path 
                    d="M 400,122 C 390,165 240,165 220,198" 
                    stroke="#C084FC" 
                    strokeWidth="1.75" 
                    strokeDasharray="4 4" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                {/* 2. Branching connectors from Center Card right edge to the 3 breakdown cards */}
                {showBreakdown && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* To Top Card */}
                    <path 
                      d="M 350,290 C 380,290 385,238 408,238" 
                      stroke="#A7F3D0" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3.5" 
                    />
                    {/* To Middle Card */}
                    <path 
                      d="M 350,300 C 375,300 385,316 408,316" 
                      stroke="#BAE6FD" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3.5" 
                    />
                    {/* To Bottom Card */}
                    <path 
                      d="M 350,310 C 380,310 385,394 408,394" 
                      stroke="#DDD6FE" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3.5" 
                    />
                  </motion.g>
                )}

                {/* 3. Vertical dashed connectors dropping down from Answer Card to Bottom Badges */}
                {showBadges && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <line 
                      x1="125" 
                      y1="400" 
                      x2="125" 
                      y2="426" 
                      stroke="#E2E8F0" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3" 
                    />
                    <line 
                      x1="260" 
                      y1="400" 
                      x2="260" 
                      y2="426" 
                      stroke="#E2E8F0" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3" 
                    />
                  </motion.g>
                )}
              </svg>

              {/* ELEMENT 1: Tilted Beach Photo Thumbnail */}
              <motion.div 
                className="absolute top-[32px] left-[70px] z-10 transform -rotate-[10deg]"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-[3px] border-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=360&q=80" 
                    alt={data.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* ELEMENT 2: Top Question Prompt Card */}
              <motion.div 
                className="absolute top-[48px] left-[175px] sm:left-[188px] z-20"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <div 
                  className="bg-white rounded-3xl py-3.5 px-5 sm:py-4 sm:px-6 border border-slate-100/90 flex items-center gap-5 sm:gap-7 shadow-sm"
                  style={{
                    boxShadow: "0 18px 40px -10px rgba(0, 0, 0, 0.07), 0 4px 14px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  <div>
                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium block">
                      {data.question}
                    </span>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5 tabular-nums">
                      ₹{data.amount.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0 shadow-sm">
                    <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px] transform rotate-45 -translate-y-0.5 translate-x-0.5 fill-[#7C3AED]" />
                  </div>
                </div>
              </motion.div>

              {/* ELEMENT 3: Main Answer Card ("Yes. You can book it.") */}
              <div className="absolute top-[200px] left-[65px] z-20 w-[275px] sm:w-[285px]">
                <AnimatePresence>
                  {showVerdict && (
                    <motion.div 
                      initial={{ opacity: 0, y: 16, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-md"
                      style={{
                        boxShadow: "0 22px 50px -12px rgba(16, 185, 129, 0.12), 0 16px 36px -10px rgba(0, 0, 0, 0.06)"
                      }}
                    >
                      <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 leading-tight">
                        {data.answer}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">
                        {data.subAnswer}
                      </p>

                      <div className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mt-7 mb-1 tabular-nums">
                        ₹{data.comfortableSpend.toLocaleString("en-IN")}
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
                        comfortable to spend this month.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ELEMENT 4: Right-side 3 Breakdown Cards */}
              <div className="absolute top-[190px] left-[390px] sm:left-[405px] flex flex-col gap-3 z-20 w-[210px] sm:w-[220px]">
                <AnimatePresence>
                  {showBreakdown && (
                    <>
                      {/* Breakdown Card 1: This month */}
                      <motion.div 
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="relative"
                      >
                        <span className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-4 ring-emerald-50 z-30" />
                        <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-sm">
                          <div className="flex items-start justify-between">
                            <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                              This month
                            </span>
                            <div className="text-right">
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 block tabular-nums leading-tight">
                                ₹{data.thisMonthLeft.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                                left to spend
                              </span>
                            </div>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                            <div className="h-full bg-[#10B981] rounded-full" style={{ width: `${data.thisMonthPercentage}%` }} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Breakdown Card 2: Upcoming commitments */}
                      <motion.div 
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                      >
                        <span className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#3B82F6] ring-4 ring-sky-50 z-30" />
                        <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-sm">
                          <div className="flex items-start justify-between">
                            <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                              Upcoming commitments
                            </span>
                            <div className="text-right">
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight">
                                {data.commitmentsStatus}
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                                {data.commitmentsSub}
                              </span>
                            </div>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                            <div className="h-full bg-[#38BDF8] rounded-full" style={{ width: `${data.commitmentsPercentage}%` }} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Breakdown Card 3: Your goals */}
                      <motion.div 
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="relative"
                      >
                        <span className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#A855F7] ring-4 ring-purple-50 z-30" />
                        <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100 shadow-sm">
                          <div className="flex items-start justify-between">
                            <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                              Your goals
                            </span>
                            <div className="text-right">
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-tight">
                                {data.goalsStatus}
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 block leading-tight">
                                {data.goalsSub}
                              </span>
                            </div>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                            <div className="h-full bg-[#A855F7] rounded-full" style={{ width: `${data.goalsPercentage}%` }} />
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* ELEMENT 5: Bottom 2 Impact Badges */}
              <div className="absolute top-[426px] left-[45px] sm:left-[50px] flex items-center gap-3 z-20">
                <AnimatePresence>
                  {showBadges && (
                    <>
                      {/* Badge 1: EMI stays covered */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-2xl py-2.5 px-3.5 sm:px-4 border border-slate-100 flex items-center gap-3 shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-900 block leading-tight">
                            {data.impactBadge1Title}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-slate-500 block leading-tight mt-0.5">
                            {data.impactBadge1Sub}
                          </span>
                        </div>
                      </motion.div>

                      {/* Badge 2: Goa trip stays on track */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="bg-white rounded-2xl py-2.5 px-3.5 sm:px-4 border border-slate-100 flex items-center gap-3 shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#A855F7] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-900 block leading-tight">
                            {data.impactBadge2Title}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-slate-500 block leading-tight mt-0.5">
                            {data.impactBadge2Sub}
                          </span>
                        </div>
                      </motion.div>
                    </>
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
