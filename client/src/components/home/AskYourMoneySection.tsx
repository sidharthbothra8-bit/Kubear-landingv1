import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles, MessageSquareQuote } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";
import { playChime, playTick } from "@/lib/soundFx";

interface DialogueExchange {
  id: string;
  chipLabel: string;
  userQuery: string;
  responseHeadline: string;
  responseDetail: string;
  outcomeText: string;
}

const DIALOGUES: DialogueExchange[] = [
  {
    id: "swiggy",
    chipLabel: "🥘 Swiggy & Zomato",
    userQuery: "How much did I spend on Swiggy and Zomato last month?",
    responseHeadline: "₹8,420 across 23 orders. 14% of your total food budget.",
    responseDetail: "6 of those orders occurred after 11:00 PM on weeknights. Quarantining ₹4,200/mo into emergency reserves accelerates your safety target by 2 full months.",
    outcomeText: "Emergency target met by August without cutting essentials",
  },
  {
    id: "trip",
    chipLabel: "🏖️ Goa Spontaneous Trip",
    userQuery: "Can I take a spontaneous Goa trip this weekend for ₹22,000?",
    responseHeadline: "Yes. Your current unallocated safe surplus is ₹28,400.",
    responseDetail: "House rent, utility bills, and both index fund SIPs are already locked. ₹22,000 leaves ₹6,400 pure cushion before the next paycheck.",
    outcomeText: "Zero risk to HDFC credit card auto-clearance on the 10th",
  },
  {
    id: "tax",
    chipLabel: "📑 Tax Shortfall Proofs",
    userQuery: "How much tax proof am I still missing before HR deadline?",
    responseHeadline: "You have a ₹35,000 shortfall under Section 80C.",
    responseDetail: "Setting up an ELSS SIP tranche of ₹11,667 over the next 3 months saves ₹10,920 in income tax, reducing monthly TDS deduction immediately.",
    outcomeText: "Recovers ₹3,640/month in take-home pay",
  },
  {
    id: "car",
    chipLabel: "🚗 Upgrade Car EMI",
    userQuery: "Can I increase my car EMI from ₹18,000 to ₹32,000 for the new SUV?",
    responseHeadline: "Not recommended right now without adjusting your travel fund.",
    responseDetail: "An extra ₹14,000/mo EMI consumes 64% of your free guilt-free spend and pushes your Europe runway back by 14 months. Reallocating from the dining budget keeps it safe.",
    outcomeText: "Preserves your 6-month liquid emergency runway",
  },
];

export function AskYourMoneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeQueryId, setActiveQueryId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const handleChipClick = (id: string) => {
    setActiveQueryId(id);
    playChime();
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#071915] text-white overflow-hidden" 
      id="ask"
    >
      {/* Warm ambient lamp lighting */}
      <motion.div 
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [0.95, 1.15]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.6]),
        }}
        className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-bl from-amber-400/20 via-amber-600/10 to-transparent blur-3xl pointer-events-none rounded-full" 
      />

      {/* Deep forest glow on the bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-950/60 via-emerald-900/25 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-left">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#F97316] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Conversational Clarity
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08]">
            Ask your money <span className="text-emerald-300 italic font-serif">anything</span>.
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-medium max-w-2xl">
              Type it like you'd text a trusted friend who happens to understand all your accounts, dues, and goals. Scroll through or tap any question below to see how Kubear turns complex finances into calm, guilt-free clarity.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-400">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300">
                <span className="text-[11px] uppercase tracking-wider">Scroll-driven dialogue</span>
                <ArrowDown className="size-3 text-emerald-400 animate-bounce" />
              </div>
              <span className="text-stone-400">Tap below to preview any query instantly</span>
            </div>
          </div>
        </div>

        {/* Interactive Query Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 select-none">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 mr-1 flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-amber-400" />
            <span>Try Asking:</span>
          </span>
          {DIALOGUES.map((d) => {
            const isSelected = activeQueryId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => handleChipClick(d.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-emerald-400 text-[#071915] font-extrabold shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                    : "bg-[#0E241E] text-stone-300 border border-emerald-900 hover:border-emerald-700 hover:text-white"
                }`}
              >
                {d.chipLabel}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SCROLL-SEQUENCED & INTERACTIVE THEATRE                                    */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {DIALOGUES.map((item, index) => {
            const startRange = 0.05 + index * 0.22;
            const userBubbleEnd = startRange + 0.10;
            const replyEnd = startRange + 0.20;
            const isExplicitlyActive = activeQueryId === item.id;

            return (
              <DialogueBlock 
                key={item.id}
                exchange={item}
                scrollProgress={scrollYProgress}
                userRange={[startRange, userBubbleEnd]}
                replyRange={[userBubbleEnd, replyEnd]}
                isExplicitlyActive={isExplicitlyActive}
                index={index}
              />
            );
          })}
        </div>

        {/* Annotation (handwritten): It doesn't judge. It just shows you the math. */}
        <div className="mt-14 text-center select-none">
          <span className="kh-handwritten text-[#F97316] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
            It doesn't judge. It just shows you the math.
          </span>
        </div>

      </div>
    </section>
  );
}

function DialogueBlock({
  exchange,
  scrollProgress,
  userRange,
  replyRange,
  isExplicitlyActive,
  index,
}: {
  exchange: DialogueExchange;
  scrollProgress: any;
  userRange: [number, number];
  replyRange: [number, number];
  isExplicitlyActive: boolean;
  index: number;
}) {
  const userOpacity = useTransform(scrollProgress, userRange, [0.15, 1]);
  const userY = useTransform(scrollProgress, userRange, [18, 0]);

  const replyOpacity = useTransform(scrollProgress, replyRange, [0.15, 1]);
  const replyY = useTransform(scrollProgress, replyRange, [18, 0]);

  return (
    <div className={`space-y-4 transition-all duration-300 ${isExplicitlyActive ? "ring-2 ring-emerald-400/40 p-4 rounded-3xl bg-emerald-950/30" : ""}`}>
      
      {/* 1. User Query Bubble */}
      <motion.div 
        style={isExplicitlyActive ? { opacity: 1, y: 0 } : { opacity: userOpacity, y: userY }}
        className="flex justify-end"
      >
        <div className="bg-white text-[#123630] rounded-2xl rounded-tr-xs px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-md max-w-[85%] leading-snug">
          "{exchange.userQuery}"
        </div>
      </motion.div>

      {/* 2. Kubear Response Bubble */}
      <motion.div 
        style={isExplicitlyActive ? { opacity: 1, y: 0 } : { opacity: replyOpacity, y: replyY }}
        className="flex items-start gap-3.5"
      >
        <div className="size-9 sm:size-10 rounded-full bg-[#123630] border border-[#059669]/60 flex items-center justify-center shrink-0 text-white shadow-xs mt-1">
          <KubearLogo className="h-5 w-auto" inverse />
        </div>

        <div className="bg-[#0E241E]/95 border border-emerald-800/60 rounded-3xl rounded-tl-xs p-5 sm:p-7 text-sm sm:text-base text-stone-100 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-[92%] leading-relaxed space-y-3">
          <p className="font-serif text-base sm:text-lg text-emerald-300 font-bold leading-snug">
            {exchange.responseHeadline}
          </p>
          <p className="text-stone-300 text-xs sm:text-sm font-normal leading-relaxed">
            {exchange.responseDetail}
          </p>

          <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>{exchange.outcomeText}</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
