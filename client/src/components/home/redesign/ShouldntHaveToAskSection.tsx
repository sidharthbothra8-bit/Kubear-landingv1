import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Check,
  CheckCircle2,
  Utensils,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MousePointer2,
  Wallet,
  HelpCircle
} from "lucide-react";

export function ShouldntHaveToAskSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  // 1. "tx_only": SHOW ONLY THE TRANSACTION FIRST (-₹6,000 Zomato)
  // 2. "question_prompt": Question drops in: "Do we need to split?"
  // 3. "confirm_clicking": Animated cursor glides in and clicks "Confirm Split"
  // 4. "split_card_revealed": Question vanishes, DIRECTLY reveals the NEW split card with 2 names equally divided
  // 5. "settled": Calm reading pause before smooth loop
  const [stage, setStage] = useState<
    "tx_only" | "question_prompt" | "confirm_clicking" | "split_card_revealed" | "settled"
  >("tx_only");

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [cycleCount, setCycleCount] = useState<number>(0);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    if (!isInView) {
      setStage("tx_only");
      return;
    }

    let isCancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const start = Date.now();
        const check = () => {
          if (isCancelled) return resolve();
          if (Date.now() - start >= ms) return resolve();
          setTimeout(check, 100);
        };
        check();
      });

    const runSequence = async () => {
      while (!isCancelled) {
        if (!isPlayingRef.current) {
          await wait(300);
          continue;
        }

        // 1. ONLY TRANSACTION FIRST
        setStage("tx_only");
        await wait(2400);
        if (isCancelled || !isPlayingRef.current) continue;

        // 2. QUESTION: DO WE NEED TO SPLIT?
        setStage("question_prompt");
        await wait(2000);
        if (isCancelled || !isPlayingRef.current) continue;

        // 3. CONFIRM CLICK
        setStage("confirm_clicking");
        await wait(1200);
        if (isCancelled || !isPlayingRef.current) continue;

        // 4. DIRECTLY NEW CARD: SPLIT HAPPENS EQUALLY DIVIDED
        setStage("split_card_revealed");
        await wait(2400);
        if (isCancelled || !isPlayingRef.current) continue;

        // 5. SETTLED READING TIME
        setStage("settled");
        await wait(8500);
        if (isCancelled || !isPlayingRef.current) continue;
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [isInView, cycleCount]);

  const handleManualConfirm = () => {
    setStage("split_card_revealed");
  };

  const showQuestion = stage === "question_prompt" || stage === "confirm_clicking";
  const showSplitCard = stage === "split_card_revealed" || stage === "settled";

  return (
    <section
      ref={containerRef}
      id="shouldnt-have-to-ask"
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div
        className="absolute top-1/4 right-1/4 w-[540px] h-[540px] pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.08) 0%, rgba(249, 115, 22, 0.04) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-[480px] h-[480px] pointer-events-none opacity-30 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.2) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 xl:gap-14 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & COPY                          */}
          {/* ================================================================= */}
          <div className="md:col-span-5 flex flex-col justify-center">
            {/* Section Index: 04 ─────── */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="text-slate-400 font-medium text-xs sm:text-sm md:text-xs lg:text-base tracking-wider font-mono">
                04
              </span>
              <div
                className="w-12 sm:w-16 md:w-12 lg:w-20 h-[1.5px] bg-slate-200"
                aria-hidden="true"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-[#0F172A] tracking-[-0.03em] leading-[1.08] text-3xl sm:text-4xl md:text-3xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold">
              And sometimes,
              <br />
              you shouldn’t
              <br />
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
            <p className="mt-4 md:mt-8 text-slate-600 text-sm sm:text-base md:text-sm lg:text-[1.18rem] leading-[1.7] font-normal tracking-[-0.01em] max-w-lg">
              Kubear notices anomalies and group transactions in real time. When a ₹6,000 dinner bill
              hits your account, it asks if you want to split before a single rupee hurts your
              personal monthly budget.
            </p>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: PROGRESSIVE STAGED INTERACTION                      */}
          {/* ================================================================= */}
          <div className="md:col-span-7 flex justify-center items-center py-4 md:py-6 w-full">
            <div className="relative w-full max-w-[540px] flex flex-col gap-3.5 select-none min-h-[460px]">
              {/* Organic Warm Glow Behind Cards */}
              <div
                className="absolute -top-10 -right-6 w-[420px] h-[420px] rounded-full pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(254, 242, 242, 0.6) 0%, rgba(255, 237, 213, 0.3) 50%, transparent 75%)",
                }}
                aria-hidden="true"
              />

              {/* 1. TRANSACTION CARD (ALWAYS VISIBLE FIRST) */}
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Utensils className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-base">Zomato</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80">
                          Food & Dining
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Debited via HDFC Bank UPI ••4821 · Just now
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
                      -₹6,000
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80 mt-1">
                      <span>⚡ 3× higher than usual</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* CONNECTING STEP BADGE (APPEARS WHEN MOVING BEYOND TRANSACTION) */}
              <AnimatePresence>
                {(showQuestion || showSplitCard) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center -my-1 relative z-10"
                  >
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 shadow-2xs text-[11px] font-semibold text-slate-600">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Kubear Proactive Detection</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 2. THE QUESTION CARD OR 3. DIRECTLY THE NEW SPLIT CARD */}
              <AnimatePresence mode="wait">
                {/* STAGE 2: QUESTION CARD ONLY ("Do we need to split?" + Confirm click) */}
                {showQuestion && (
                  <motion.div
                    key="question_card"
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/90 shadow-md relative overflow-hidden"
                  >
                    {/* Top Alert Bar */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center ring-4 ring-amber-50 shrink-0">
                          <Users className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg tracking-tight">
                            Do we need to split?
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            ₹6,000 at Zomato looks like a group dinner.
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        <span>Split detected</span>
                      </span>
                    </div>

                    {/* Question Callout */}
                    <div className="mt-5 p-3.5 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="text-slate-600">
                        <span className="font-semibold text-slate-800 block">
                          Suggested split with Arjun & Rohan
                        </span>
                        <span>₹2,000 each · 3 equal shares</span>
                      </div>
                      <span className="font-bold text-slate-900 font-mono text-sm">
                        ₹2,000 / person
                      </span>
                    </div>

                    {/* Confirm Button with Animated Cursor */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="text-xs text-slate-500">
                        Tap confirm to automatically log equal shares
                      </div>

                      <div className="relative shrink-0">
                        <button
                          onClick={handleManualConfirm}
                          className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer ${
                            stage === "confirm_clicking"
                              ? "bg-slate-950 ring-4 ring-slate-900/30 scale-95"
                              : "bg-[#0F172A] hover:bg-slate-800 hover:shadow-lg"
                          }`}
                        >
                          <span>Confirm Split</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>

                        {/* Animated Pointer Cursor Gliding in and Clicking Confirm */}
                        {stage === "confirm_clicking" && (
                          <motion.div
                            initial={{ opacity: 0, x: 28, y: 32 }}
                            animate={{
                              opacity: [0, 1, 1, 0],
                              x: [28, 4, 4, 10],
                              y: [32, 6, 6, 14],
                              scale: [1, 1, 0.85, 1],
                            }}
                            transition={{ duration: 1.1, ease: "easeInOut" }}
                            className="absolute right-4 top-2 pointer-events-none z-30 flex items-center gap-1"
                          >
                            <div className="p-1 rounded-full bg-slate-950 text-white shadow-xl ring-2 ring-white">
                              <MousePointer2 className="w-4 h-4 fill-white" />
                            </div>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900 text-white shadow">
                              Click
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 3: DIRECTLY THE NEW SPLIT CARD (Appears after Confirm Click) */}
                {showSplitCard && (
                  <motion.div
                    key="split_result_card"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="bg-white rounded-3xl p-5 sm:p-7 border border-emerald-200 ring-2 ring-emerald-500/10 shadow-md flex flex-col gap-4"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 ring-4 ring-emerald-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                            Added to Split
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Equally divided with 2 friends · Links ready to send
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold tracking-tight shadow-2xs shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Equally Divided</span>
                      </span>
                    </div>

                    {/* Equal Division 3-Ways: Arjun, Rohan, You */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
                        <span>Equally split 3 ways:</span>
                        <span className="font-semibold text-slate-800 font-mono">₹2,000 / person</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* Person 1: Arjun Mehta */}
                        <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                              A
                            </div>
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="block font-semibold text-slate-900 text-xs sm:text-[13px] truncate">
                              Arjun Mehta
                            </span>
                            <span className="block text-xs font-bold text-slate-800 font-mono mt-0.5">
                              ₹2,000
                            </span>
                            <span className="block text-[10px] text-slate-500 mt-0.5 truncate">
                              Split link queued
                            </span>
                          </div>
                        </div>

                        {/* Person 2: Rohan Verma */}
                        <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                              R
                            </div>
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="block font-semibold text-slate-900 text-xs sm:text-[13px] truncate">
                              Rohan Verma
                            </span>
                            <span className="block text-xs font-bold text-slate-800 font-mono mt-0.5">
                              ₹2,000
                            </span>
                            <span className="block text-[10px] text-slate-500 mt-0.5 truncate">
                              Split link queued
                            </span>
                          </div>
                        </div>

                        {/* Person 3: You (Your Share) */}
                        <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                              You
                            </div>
                            <span className="text-[10px] font-semibold text-blue-600 bg-blue-100/70 px-1.5 py-0.5 rounded-full">
                              Your share
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className="block font-semibold text-slate-900 text-xs sm:text-[13px]">
                              Your Share
                            </span>
                            <span className="block text-xs font-bold text-blue-900 font-mono mt-0.5">
                              ₹2,000
                            </span>
                            <span className="block text-[10px] text-slate-500 mt-0.5">
                              Personal expense
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buffer Recovery Banner */}
                    <div className="bg-emerald-500/10 border border-emerald-200/90 rounded-2xl p-3.5 px-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <div>
                          <span className="text-xs sm:text-[13px] font-bold text-emerald-950 block">
                            Added to split with Arjun & Rohan
                          </span>
                          <span className="text-[11px] text-emerald-700 block">
                            ₹4,000 will be credited back as UPI transfers arrive
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[11px] text-emerald-800 font-semibold block">
                          Restored to Buffer
                        </span>
                        <span className="text-sm font-bold text-emerald-900 font-mono">
                          +₹4,000
                        </span>
                      </div>
                    </div>

                    {/* Reassurance line */}
                    <div className="flex items-center justify-between px-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Monthly safe spend protected at ₹22,300</span>
                      </span>
                      <span className="text-slate-400">Goa trip untouched ✓</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 4. DOWNSTREAM SAFE SPEND CARD (Appears when split card is revealed) */}
              <AnimatePresence>
                {showSplitCard && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate-50/80 rounded-2xl p-3.5 px-4 sm:px-5 border border-slate-200/70 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs">
                        <Wallet className="w-3.5 h-3.5 text-slate-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 block">
                          Personal Safe Spend Updated
                        </span>
                        <span className="text-[11px] text-slate-500">
                          ₹2,000 deducted · ₹4,000 receivables tracked
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Goa Trip Safe
                      </span>
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
