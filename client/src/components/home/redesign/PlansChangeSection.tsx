import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Target, Utensils, Car, ShoppingBag } from "lucide-react";

interface LedgerItem {
  id: string;
  name: string;
  category: string;
  amount: number;
  bank: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  budgetAfter: number;
  percentageAfter: number;
}

const LEDGER_ITEMS: LedgerItem[] = [
  {
    id: "tx1",
    name: "Dinner · Swiggy",
    category: "Food & Dining",
    amount: 1200,
    bank: "HDFC Bank ••4821",
    time: "8:42 PM",
    icon: Utensils,
    iconBg: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-600",
    budgetAfter: 23100,
    percentageAfter: 54,
  },
  {
    id: "tx2",
    name: "Airport Cab · Uber",
    category: "Travel",
    amount: 650,
    bank: "ICICI Bank ••9012",
    time: "9:15 PM",
    icon: Car,
    iconBg: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-600",
    budgetAfter: 22450,
    percentageAfter: 50,
  },
  {
    id: "tx3",
    name: "Weekend Groceries",
    category: "Household",
    amount: 2800,
    bank: "SBI Card ••3319",
    time: "10:04 PM",
    icon: ShoppingBag,
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    budgetAfter: 19650,
    percentageAfter: 42,
  },
];

export function PlansChangeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playCount, setPlayCount] = useState<number>(0);

  // Clean Story Stages:
  // 0: Clean Starting Budget (₹24,300)
  // 1: Transaction 1 arrives (Dinner –₹1,200) -> Budget drops to ₹23,100
  // 2: Transaction 2 arrives (Cab –₹650) -> Budget drops to ₹22,450
  // 3: Transaction 3 arrives (Groceries –₹2,800) -> Budget drops to ₹19,650
  // 4: Goal Replanning triggers -> Goa goal recalculates & confirms: "Still 100% on track!"
  // 5: Settled Reading State -> 8.5 seconds calm absorption
  const [stage, setStage] = useState<number>(0);
  const [budgetValue, setBudgetValue] = useState<number>(24300);
  const [progressWidth, setProgressWidth] = useState<number>(62);

  // Status message telling exactly WHAT and WHY Kubear is doing at every moment
  useEffect(() => {
    if (!isInView) {
      setStage(0);
      setBudgetValue(24300);
      setProgressWidth(62);
      return;
    }

    if (isPaused) return;

    let isCancelled = false;

    const runStory = async () => {
      // 0. Initial baseline
      setStage(0);
      setBudgetValue(24300);
      setProgressWidth(62);
      await new Promise((r) => setTimeout(r, 1400));
      if (isCancelled) return;

      // 1. Transaction 1: Dinner
      setStage(1);
      animateToBudget(23100, 54);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 2. Transaction 2: Cab
      setStage(2);
      animateToBudget(22450, 50);
      await new Promise((r) => setTimeout(r, 2200));
      if (isCancelled) return;

      // 3. Transaction 3: Groceries
      setStage(3);
      animateToBudget(19650, 42);
      await new Promise((r) => setTimeout(r, 2400));
      if (isCancelled) return;

      // 4. Goal Replanning
      setStage(4);
      await new Promise((r) => setTimeout(r, 2000));
      if (isCancelled) return;

      // 5. Settled reading pause
      setStage(5);
      await new Promise((r) => setTimeout(r, 8500));
      if (isCancelled) return;

      runStory();
    };

    const animateToBudget = (target: number, targetWidth: number) => {
      let current = budgetValue;
      const decrement = Math.ceil(Math.abs(current - target) / 20);
      const timer = setInterval(() => {
        current -= decrement;
        if (current <= target) {
          setBudgetValue(target);
          setProgressWidth(targetWidth);
          clearInterval(timer);
        } else {
          setBudgetValue(current);
        }
      }, 30);
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView, playCount, isPaused]);

  return (
    <section 
      ref={containerRef}
      id="plans-change" 
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: THE CLEAN BIG BUDGET CARD + 3-ITEM LEDGER + GOAL     */}
          {/* ================================================================= */}
          <div className="md:col-span-7 flex flex-col items-center justify-center py-2 md:py-4 w-full">
            {/* ============================================================= */}
            {/* THE ONE BIG HERO BUDGET & LEDGER CARD                         */}
            {/* ============================================================= */}
            <div className="w-full max-w-[520px] bg-white rounded-3xl border border-slate-200/90 shadow-[0_22px_50px_-12px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 min-h-[455px] flex flex-col justify-between">
              
              {/* TOP HEADER: Safe to spend this month */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Safe to spend this month
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <div className={`text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight tabular-nums transition-colors duration-400 ${
                        stage >= 1 ? "text-emerald-700" : "text-slate-900"
                      }`}>
                        ₹{budgetValue.toLocaleString("en-IN")}
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        buffer remaining
                      </span>
                    </div>
                  </div>

                  {/* Top-Right Badge: Syncing status */}
                  <div>
                    {stage >= 1 && stage < 4 ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#059669] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-100 animate-spin" />
                        <span>Updating budget...</span>
                      </motion.div>
                    ) : stage >= 4 ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        <span>Budget synced</span>
                      </motion.div>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 bg-slate-100 rounded-md">
                        Live balance
                      </span>
                    )}
                  </div>
                </div>

                {/* Retracting Progress Bar */}
                <div className="mt-3">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#10B981] rounded-full" 
                      style={{ width: `${progressWidth}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* MIDDLE SECTION: LEDGER WITH FIXED HEIGHT (PREVENTS PAGE DRAGGING) */}
              <div className="p-4 sm:p-5 bg-white flex-1 flex flex-col justify-start">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-slate-900">
                    Recent Transactions
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {stage === 0 ? "0 new" : `${Math.min(stage, 3)} debited`}
                  </span>
                </div>

                {/* Fixed height container reserved for all 3 transaction rows */}
                <div className="space-y-2 h-[154px] flex flex-col justify-start">
                  {LEDGER_ITEMS.map((item, index) => {
                    const isVisible = stage >= index + 1;
                    const isJustAdded = stage === index + 1;
                    const IconComponent = item.icon;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={
                          isVisible
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: -6, scale: 0.97 }
                        }
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-[44px] rounded-xl px-3 border transition-colors duration-300 ${
                          isVisible ? "flex" : "hidden"
                        } items-center justify-between ${
                          isJustAdded 
                            ? "bg-rose-50/40 border-rose-200 ring-1 ring-rose-100" 
                            : "bg-slate-50/60 border-slate-100 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${item.iconBg}`}>
                            <IconComponent className={`w-3.5 h-3.5 ${item.iconColor}`} />
                          </div>

                          <span className="text-xs font-semibold text-slate-900 leading-tight">
                            {item.name}
                          </span>
                        </div>

                        <div className="text-right">
                          <span className="text-xs sm:text-sm font-bold text-rose-600 tabular-nums leading-tight">
                            – ₹{item.amount.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Empty state when stage is 0 (occupies the exact reserved height) */}
                  {stage === 0 && (
                    <div className="h-full flex items-center justify-center text-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
                      <span className="text-xs text-slate-400">
                        Waiting for incoming transaction...
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* BOTTOM SECTION: GOAL REPLANNING */}
              <div className="p-4 sm:p-5 bg-slate-50/60 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-purple-600" />
                    <span>Goal Impact & Replanning</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                    stage >= 4 
                      ? "bg-emerald-100 text-emerald-800" 
                      : stage >= 1 
                      ? "bg-amber-100 text-amber-800" 
                      : "bg-slate-200 text-slate-700"
                  }`}>
                    {stage >= 4 ? "✓ ON TRACK" : stage >= 1 ? "ANALYZING..." : "PROTECTED"}
                  </span>
                </div>

                <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        stage >= 4 ? "bg-emerald-500 text-white" : "bg-purple-100 text-purple-700"
                      }`}>
                        {stage >= 4 ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          <Target className="w-3.5 h-3.5" />
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-900 block leading-tight">
                          Goa Vacation Goal
                        </span>
                        <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">
                          {stage >= 4 ? "0 days delayed · ₹3,500 monthly SIP untouched" : "Target: Dec 2026"}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-900 block tabular-nums leading-tight">
                        ₹42,000 / ₹70,000
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold block leading-tight mt-0.5">
                        {stage >= 4 ? "Safe ✓" : "Protected"}
                      </span>
                    </div>
                  </div>

                  {/* Goal Savings Progress */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2.5 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: SECTION 02 EDITORIAL COPY                           */}
          {/* ================================================================= */}
          <div className="md:col-span-5 flex flex-col justify-center">
            
            {/* Section Index: 02 ─────── */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <span className="text-slate-400 font-medium text-xs sm:text-sm tracking-wider font-mono">
                02
              </span>
              <div className="w-14 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Main Title: Plans change. Your money should know. */}
            <h2 className="text-[#0F172A] tracking-[-0.035em] leading-[1.12] text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold">
              <span className="block">Plans change.</span>
              <span className="block mt-1 font-semibold italic">
                Your money should know.
              </span>
            </h2>

            {/* Explanation paragraph */}
            <p className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-[1.12rem] leading-[1.65] font-normal tracking-[-0.01em] max-w-lg">
              Kubear works out what that change means for what you can spend, save, invest and still stay on track for.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
