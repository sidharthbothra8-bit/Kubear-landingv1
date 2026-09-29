import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

interface FinanceThought {
  id: string;
  text: string;
  bg: string;
  border: string;
  textColor: string;
  left: string;
  top: string;
  rotate: number;
  appearTime: number; // in seconds
  zIndex?: number;
}

// Full-spectrum personal finance thoughts covering spending, EMIs, SIPs, taxes, rent, savings, goals
// Sequence: 1 -> +1 -> +2 -> +4 -> avalanche to 100% cover all whitespace!
const FINANCE_THOUGHTS: FinanceThought[] = [
  // --- Wave 1: 1 thought (0.4s) ---
  {
    id: "dinner",
    text: "Can I afford this dinner?",
    bg: "bg-[#FFFBEB]",
    border: "border-[#FDE68A]",
    textColor: "text-[#92400E]",
    left: "6%",
    top: "14%",
    rotate: -3,
    appearTime: 0.4,
    zIndex: 10,
  },

  // --- Wave 2: 1 more thought (1.6s) ---
  {
    id: "cc-bill",
    text: "Wait... what about the credit card bill?",
    bg: "bg-[#FEF2F2]",
    border: "border-[#FECACA]",
    textColor: "text-[#B91C1C]",
    left: "48%",
    top: "20%",
    rotate: 2.5,
    appearTime: 1.6,
    zIndex: 11,
  },

  // --- Wave 3: 2 more thoughts (2.7s) ---
  {
    id: "goa-trip",
    text: "Can we still take that Goa trip?",
    bg: "bg-[#FAF5FF]",
    border: "border-[#E9D5FF]",
    textColor: "text-[#7E22CE]",
    left: "14%",
    top: "34%",
    rotate: -2,
    appearTime: 2.7,
    zIndex: 12,
  },
  {
    id: "rent",
    text: "Did my rent payment go through?",
    bg: "bg-[#EFF6FF]",
    border: "border-[#BFDBFE]",
    textColor: "text-[#1D4ED8]",
    left: "54%",
    top: "38%",
    rotate: 3,
    appearTime: 2.7,
    zIndex: 13,
  },

  // --- Wave 4: 4 more thoughts (3.8s) ---
  {
    id: "safe-spend",
    text: "How much can I actually spend?!",
    bg: "bg-[#FFF1F2]",
    border: "border-[#FDA4AF]",
    textColor: "text-[#BE123C]",
    left: "26%",
    top: "50%",
    rotate: -2,
    appearTime: 3.8,
    zIndex: 14,
  },
  {
    id: "emi",
    text: "Did the home loan EMI auto-debit?",
    bg: "bg-[#FDF4FF]",
    border: "border-[#F5D0FE]",
    textColor: "text-[#86198F]",
    left: "4%",
    top: "62%",
    rotate: 2,
    appearTime: 3.8,
    zIndex: 15,
  },
  {
    id: "sip",
    text: "Should I pause my SIP this month?",
    bg: "bg-[#ECFDF5]",
    border: "border-[#A7F3D0]",
    textColor: "text-[#065F46]",
    left: "58%",
    top: "54%",
    rotate: -3,
    appearTime: 3.8,
    zIndex: 16,
  },
  {
    id: "savings",
    text: "Will this hurt my emergency fund?",
    bg: "bg-[#F0FDF4]",
    border: "border-[#BBF7D0]",
    textColor: "text-[#166534]",
    left: "32%",
    top: "70%",
    rotate: 2.5,
    appearTime: 3.8,
    zIndex: 17,
  },

  // --- Wave 5: Avalanche filling every corner & gap with ZERO whitespace (4.7s) ---
  {
    id: "tds",
    text: "Did TDS deduct extra salary?!",
    bg: "bg-[#FEFCE8]",
    border: "border-[#FEF08A]",
    textColor: "text-[#854D0E]",
    left: "34%",
    top: "4%",
    rotate: -1,
    appearTime: 4.7,
    zIndex: 18,
  },
  {
    id: "bonus",
    text: "Where did my bonus go already?!",
    bg: "bg-[#FFF7ED]",
    border: "border-[#FED7AA]",
    textColor: "text-[#9A3412]",
    left: "68%",
    top: "6%",
    rotate: 3,
    appearTime: 4.7,
    zIndex: 19,
  },
  {
    id: "car-loan",
    text: "Car loan interest jumped again?!",
    bg: "bg-[#FEE2E2]",
    border: "border-[#FCA5A5]",
    textColor: "text-[#991B1B]",
    left: "2%",
    top: "24%",
    rotate: 2,
    appearTime: 4.8,
    zIndex: 20,
  },
  {
    id: "portfolio",
    text: "Why is my mutual fund in the red?",
    bg: "bg-[#F3E8FF]",
    border: "border-[#D8B4FE]",
    textColor: "text-[#6B21A8]",
    left: "38%",
    top: "28%",
    rotate: -2.5,
    appearTime: 4.8,
    zIndex: 21,
  },
  {
    id: "tax",
    text: "How much advance tax will I owe?",
    bg: "bg-[#FEF3C7]",
    border: "border-[#FDE68A]",
    textColor: "text-[#78350F]",
    left: "72%",
    top: "28%",
    rotate: -1.5,
    appearTime: 4.9,
    zIndex: 22,
  },
  {
    id: "balance",
    text: "Why does my account feel empty?!",
    bg: "bg-[#FFE4E6]",
    border: "border-[#FECDD3]",
    textColor: "text-[#9F1239]",
    left: "2%",
    top: "46%",
    rotate: 3.5,
    appearTime: 4.9,
    zIndex: 23,
  },
  {
    id: "credit-limit",
    text: "Am I hitting my credit limit?!",
    bg: "bg-[#FFF8F1]",
    border: "border-[#FDBA74]",
    textColor: "text-[#C2410C]",
    left: "68%",
    top: "44%",
    rotate: -2,
    appearTime: 5.0,
    zIndex: 24,
  },
  {
    id: "school-fees",
    text: "School annual fees due next week?!",
    bg: "bg-[#E0F2FE]",
    border: "border-[#7DD3FC]",
    textColor: "text-[#0369A1]",
    left: "2%",
    top: "76%",
    rotate: -2,
    appearTime: 5.0,
    zIndex: 25,
  },
  {
    id: "inflation",
    text: "Groceries cost double now?!",
    bg: "bg-[#FDF2F8]",
    border: "border-[#FBCFE8]",
    textColor: "text-[#9D174D]",
    left: "62%",
    top: "74%",
    rotate: 2.5,
    appearTime: 5.1,
    zIndex: 26,
  },
  {
    id: "behind",
    text: "Am I falling behind everyone?!",
    bg: "bg-[#F1F5F9]",
    border: "border-[#CBD5E1]",
    textColor: "text-[#1E293B]",
    left: "14%",
    top: "88%",
    rotate: 1.5,
    appearTime: 5.1,
    zIndex: 27,
  },
  {
    id: "retirement",
    text: "Will I ever be able to retire?!",
    bg: "bg-[#FEF2F2]",
    border: "border-[#FCA5A5]",
    textColor: "text-[#991B1B]",
    left: "52%",
    top: "86%",
    rotate: -3,
    appearTime: 5.2,
    zIndex: 28,
  },
];

export function HeroClarityArtwork() {
  // Pacing Timeline:
  // 0.0s – 6.2s : Thoughts fill up (1 -> +1 -> +2 -> +4 -> 100% packed wall of thoughts)
  // 6.2s – 7.8s : ONE smooth, continuous wipe sweeps Left to Right (1.6s)
  // 7.8s – 15.0s: "We got you." settles with HUGE prominent logo in peaceful calm (~7.2s)
  const [phase, setPhase] = useState<"clutter" | "wiping" | "peace">("clutter");
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [wipePercent, setWipePercent] = useState<number>(0);
  const [cycle, setCycle] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    let start = Date.now();
    const interval = setInterval(() => {
      const diff = (Date.now() - start) / 1000;
      setElapsedTime(diff);

      if (diff < 6.2) {
        setPhase("clutter");
        setWipePercent(0);
      } else if (diff >= 6.2 && diff < 7.8) {
        setPhase("wiping");
        // Linear smooth progression from 0% to 100% over 1.6s
        const progress = Math.min(Math.max((diff - 6.2) / 1.6, 0), 1);
        setWipePercent(progress * 100);
      } else if (diff >= 7.8 && diff < 15.0) {
        setPhase("peace");
        setWipePercent(100);
      } else if (diff >= 15.0) {
        // Reset smoothly
        setPhase("clutter");
        setElapsedTime(0);
        setWipePercent(0);
        setCycle((c) => c + 1);
        start = Date.now();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, cycle]);

  const handleManualReplay = () => {
    setPhase("clutter");
    setElapsedTime(0);
    setWipePercent(0);
    setCycle((c) => c + 1);
  };

  const isPeace = phase === "peace";
  const isWiping = phase === "wiping";
  const isClutter = phase === "clutter";

  return (
    <div 
      className="relative w-full max-w-[700px] aspect-[16/11] select-none flex items-center justify-center cursor-pointer overflow-hidden rounded-3xl"
      onClick={handleManualReplay}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title="Click to replay"
    >
      {/* =================================================================== */}
      {/* LAYER 1: PACKED WALL OF FINANCIAL THOUGHTS (ZERO WHITESPACE)        */}
      {/* =================================================================== */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          // Hardware-accelerated clip path driven by the single wipe sweep
          clipPath: isWiping 
            ? `polygon(${wipePercent}% 0, 100% 0, 100% 100%, ${wipePercent}% 100%)`
            : isPeace 
            ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" 
            : "none",
        }}
      >
        {/* Soft background tone that builds up as thoughts pack in */}
        <div 
          className="absolute inset-0 transition-opacity duration-700 bg-radial from-amber-50/40 via-rose-50/30 to-transparent"
          style={{ opacity: Math.min(elapsedTime / 4.8, 0.8) }}
        />

        {/* 19 PACKED THOUGHT BUBBLES COVERING EVERY INCH OF SPACE */}
        {FINANCE_THOUGHTS.map((t) => {
          const isShown = elapsedTime >= t.appearTime;
          if (!isShown) return null;

          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.65, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                stiffness: 260,
              }}
              style={{
                position: "absolute",
                left: t.left,
                top: t.top,
                transform: `rotate(${t.rotate}deg)`,
                zIndex: t.zIndex,
              }}
            >
              <div
                className={`relative px-3.5 sm:px-4.5 py-1.5 sm:py-2.5 rounded-2xl border-2 shadow-sm backdrop-blur-xs ${t.bg} ${t.border}`}
              >
                {/* Speech tail */}
                <div
                  className={`absolute -bottom-1.5 left-4 w-2 h-2 rotate-45 border-r border-b ${t.bg} ${t.border}`}
                />
                <span
                  className={`font-bold tracking-tight text-[11px] sm:text-[13px] md:text-sm whitespace-nowrap block ${t.textColor}`}
                >
                  {t.text}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* LAYER 2: THE SINGLE, CLEAN KUBEAR WIPE (Left to Right Sweep)         */}
      {/* =================================================================== */}
      {isWiping && (
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-40"
          style={{
            left: `${wipePercent}%`,
            transform: "translateX(-50%)",
          }}
        >
          {/* Luminous vertical wiping blade */}
          <div className="w-1.5 h-full bg-gradient-to-b from-transparent via-[#F97316] to-transparent shadow-[0_0_32px_12px_rgba(249,115,22,0.7)]" />

          {/* Kubear mascot badge surfing the sweep line */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-orange-400 shadow-[0_10px_30px_rgba(249,115,22,0.45)] flex items-center justify-center">
            <KubearLogo className="size-9" />
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* LAYER 3: SEAMLESS PEACE RESOLUTION — MUCH BIGGER HERO LOGO!         */}
      {/* =================================================================== */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-6 pointer-events-none"
        style={{
          // Revealed progressively by the single sweep
          clipPath: isWiping 
            ? `polygon(0 0, ${wipePercent}% 0, ${wipePercent}% 100%, 0 100%)`
            : isPeace 
            ? "none" 
            : "polygon(0 0, 0 0, 0 100%, 0 100%)",
          opacity: isClutter ? 0 : 1,
        }}
      >
        {/* Soft, warm ambient aura behind mascot */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-radial from-amber-100/70 via-orange-50/40 to-transparent rounded-full -z-10 blur-3xl pointer-events-none"
        />

        {/* MUCH BIGGER KUBEAR LOGO BADGE (Requested by user) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-6"
        >
          {/* Main Hero Circle: Big, bold & iconic (w-36 h-36 sm:w-40 sm:h-40) */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-[#FFF7ED] via-white to-[#FEF3C7] border-2 border-[#FED7AA] shadow-[0_24px_50px_-10px_rgba(234,88,12,0.32)] flex items-center justify-center">
            {/* The Bear Logo: Prominent and high resolution */}
            <KubearLogo className="size-20 sm:size-24 md:size-28" />

            {/* Checkmark badge: Scaled proportionally and crisp */}
            <div className="absolute top-0 right-1 size-10 sm:size-11 md:size-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-[3px] border-white">
              <Check className="size-5 sm:size-6 stroke-[3.8]" />
            </div>
          </div>
        </motion.div>

        {/* Bold Headline: "We got you." */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          We got you.
        </h2>

        {/* Reassuring copy */}
        <p className="mt-2.5 text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-md">
          Every bill planned. Every goal protected.
          <span className="block text-slate-900 font-bold mt-1">
            Take a breath. Your money is handled.
          </span>
        </p>
      </div>
    </div>
  );
}
