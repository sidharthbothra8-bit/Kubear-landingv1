import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Home, Utensils, Lock, Check, ShieldCheck, Eye, EyeOff } from "lucide-react";

export function JustMineAndOursSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  // Staged Reveal:
  // 0: "clean" -> Canvas starts completely clean
  // 1: "rent_in" -> ONLY Rent card drops in, fills 50/50, stamps "Paid together"
  // 2: "dinner_in" -> Dinner card drops in below with "🔒 Private to you"
  // 3: "priya_view" -> Flips to Priya's view: dinner morphs to "•••••• 🔒 Hidden"
  // 4: "settled" -> Stays calm for reading, then loops
  const [stage, setStage] = useState<"clean" | "rent_in" | "dinner_in" | "priya_view" | "settled">("rent_in");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [cycleCount, setCycleCount] = useState<number>(0);

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    if (!isInView) {
      setStage("rent_in");
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

    const runStory = async () => {
      while (!isCancelled) {
        if (!isPlayingRef.current) {
          await wait(300);
          continue;
        }

        // 0. Clean start
        setStage("clean");
        await wait(600);
        if (isCancelled || !isPlayingRef.current) continue;

        // 1. Rent enters first
        setStage("rent_in");
        await wait(2400);
        if (isCancelled || !isPlayingRef.current) continue;

        // 2. Personal dinner drops in
        setStage("dinner_in");
        await wait(2400);
        if (isCancelled || !isPlayingRef.current) continue;

        // 3. Perspective flips to Priya's view
        setStage("priya_view");
        await wait(2800);
        if (isCancelled || !isPlayingRef.current) continue;

        // 4. Settled reading pause
        setStage("settled");
        await wait(7000);
        if (isCancelled || !isPlayingRef.current) continue;
      }
    };

    runStory();

    return () => {
      isCancelled = true;
    };
  }, [isInView, cycleCount]);

  const isPriya = stage === "priya_view" || stage === "settled";
  const showRent = stage !== "clean";
  const showDinner = stage === "dinner_in" || stage === "priya_view" || stage === "settled";

  return (
    <section
      ref={containerRef}
      id="just-mine-and-ours"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & MINIMAL COPY                  */}
          {/* ================================================================= */}
          <div className="md:col-span-5 flex flex-col justify-center">
            {/* Section Index: 05 ─────── */}
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
              <span className="text-slate-400 font-medium text-xs sm:text-sm tracking-wider font-mono">
                05
              </span>
              <div className="w-14 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="text-[#0F172A] tracking-[-0.035em] leading-[1.12] text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold">
              <span>Not everything</span>
              <br />
              <span>needs to be shared.</span>
              <br />
              <span className="inline-block relative mt-2.5 sm:mt-3">
                <span className="absolute inset-0 bg-[#FEF3C7] rounded-full z-0" aria-hidden="true" />
                <span className="relative z-10 text-[#0F172A] px-5 sm:px-7 py-0.5 sm:py-1 font-bold whitespace-nowrap block">
                  Just the things
                </span>
              </span>
              <br />
              <span className="inline-block relative mt-1.5 sm:mt-2">
                <span className="absolute inset-0 bg-[#FEF3C7] rounded-full z-0" aria-hidden="true" />
                <span className="relative z-10 text-[#0F172A] px-5 sm:px-7 py-0.5 sm:py-1 font-bold whitespace-nowrap block">
                  you share.
                </span>
              </span>
            </h2>

            {/* Reduced, Punchy Paragraph */}
            <p className="mt-5 text-slate-600 text-sm sm:text-base md:text-[1.1rem] leading-[1.6] font-normal max-w-md">
              Split rent and household bills together. Keep personal spending completely private.
            </p>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: STAGED ARRIVAL WITH MINIMAL TEXT                    */}
          {/* ================================================================= */}
          <div className="md:col-span-7 flex justify-center items-center py-4 w-full">
            <div className="w-full max-w-[500px] flex flex-col gap-4 min-h-[380px]">
              
              {/* TOP PERSPECTIVE PILL */}
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Live Preview
                </span>

                <motion.div
                  key={isPriya ? "priya" : "you"}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                    isPriya
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-slate-100 text-slate-800 border-slate-200"
                  }`}
                >
                  {isPriya ? <EyeOff className="w-3.5 h-3.5 text-emerald-600" /> : <Eye className="w-3.5 h-3.5 text-blue-600" />}
                  <span>{isPriya ? "Priya's Screen" : "Your Screen"}</span>
                </motion.div>
              </div>

              {/* CARD 1: APARTMENT RENT (ENTERS FIRST) */}
              <AnimatePresence>
                {showRent && (
                  <motion.div
                    initial={{ opacity: 0, y: -16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Home className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-slate-900">
                              Apartment Rent
                            </h4>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                              Shared
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            ₹15,000 each · Split 50/50
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xl font-bold text-slate-900 font-mono">
                          ₹30,000
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Paid together</span>
                        </span>
                      </div>
                    </div>

                    {/* Minimal Progress Line */}
                    <div className="mt-4 pt-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "50%" }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full bg-blue-500"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "50%" }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CARD 2: PERSONAL DINNER (ENTERS SECOND & FLIPS TO HIDDEN) */}
              <AnimatePresence>
                {showDinner && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={`p-5 rounded-3xl border transition-all duration-400 shadow-md ${
                      isPriya
                        ? "bg-slate-50/90 border-slate-200"
                        : "bg-white border-rose-200/80 shadow-rose-500/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                            isPriya ? "bg-slate-200 text-slate-500" : "bg-rose-500 text-white"
                          }`}
                        >
                          {isPriya ? <Lock className="w-5 h-5" /> : <Utensils className="w-5 h-5 stroke-[2.2]" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-slate-900">
                              {isPriya ? "Personal Spending" : "Dinner with Friends"}
                            </h4>
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                                isPriya
                                  ? "bg-slate-200/70 text-slate-600 border-slate-300"
                                  : "bg-rose-50 text-rose-700 border-rose-200/80"
                              }`}
                            >
                              Private
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {isPriya ? "Zero access to your account" : "Friday evening"}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <AnimatePresence mode="wait">
                          {isPriya ? (
                            <motion.div
                              key="hidden_dots"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-lg font-bold text-slate-400 font-mono tracking-widest"
                            >
                              ••••••
                            </motion.div>
                          ) : (
                            <motion.div
                              key="amount"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-xl font-bold text-slate-900 font-mono"
                            >
                              -₹4,200
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold mt-0.5 ${
                            isPriya ? "text-slate-500" : "text-rose-700"
                          }`}
                        >
                          <Lock className="w-3 h-3" />
                          <span>{isPriya ? "Hidden from Priya" : "100% Private"}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BOTTOM REASSURANCE PILL (MINIMAL) */}
              <AnimatePresence>
                {showDinner && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="p-3.5 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600"
                  >
                    <span className="flex items-center gap-2 font-medium text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Bills co-funded · Personal money stays private</span>
                    </span>
                    <span className="font-bold text-emerald-700">Zero awkwardness ✓</span>
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
