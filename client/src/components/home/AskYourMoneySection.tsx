import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

interface DialogueExchange {
  id: string;
  userQuery: string;
  responseHeadline: string;
  responseDetail: string;
  outcomeText: string;
}

const DIALOGUES: DialogueExchange[] = [
  {
    id: "swiggy",
    userQuery: "How much did I spend on Swiggy and Zomato last month?",
    responseHeadline: "₹8,420 across 23 orders. 14% of your total food budget.",
    responseDetail: "6 of those orders occurred after 11:00 PM on weeknights. Quarantining ₹4,200/mo into emergency reserves accelerates your safety target by 2 full months.",
    outcomeText: "Emergency target met by August without cutting essentials",
  },
  {
    id: "trip",
    userQuery: "Can I take a spontaneous Goa trip this weekend for ₹22,000?",
    responseHeadline: "Yes. Your current unallocated safe surplus is ₹28,400.",
    responseDetail: "House rent, utility bills, and both index fund SIPs are already locked. ₹22,000 leaves ₹6,400 pure cushion before the next paycheck.",
    outcomeText: "Zero risk to HDFC credit card auto-clearance on the 10th",
  },
  {
    id: "tax",
    userQuery: "How much tax proof am I still missing before HR deadline?",
    responseHeadline: "You have a ₹35,000 shortfall under Section 80C.",
    responseDetail: "Setting up an ELSS SIP tranche of ₹11,667 over the next 3 months saves ₹10,920 in income tax, reducing monthly TDS deduction immediately.",
    outcomeText: "Recovers ₹3,640/month in take-home pay",
  },
];

export function AskYourMoneySection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

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
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
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
              Type it like you'd text a trusted friend who happens to understand all your accounts, dues, and goals. As you scroll, observe how Kubear synthesizes real numbers into calm, guilt-free clarity.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-stone-400">
              <span className="text-[11px] uppercase tracking-wider">Scroll down to unfold the live conversation</span>
              <ArrowDown className="size-3 text-emerald-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCROLL-SEQUENCED EDITORIAL THEATRE                                       */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {DIALOGUES.map((item, index) => {
            const startRange = 0.05 + index * 0.28;
            const userBubbleEnd = startRange + 0.12;
            const replyEnd = startRange + 0.24;

            return (
              <DialogueBlock 
                key={item.id}
                exchange={item}
                scrollProgress={scrollYProgress}
                userRange={[startRange, userBubbleEnd]}
                replyRange={[userBubbleEnd, replyEnd]}
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
  index,
}: {
  exchange: DialogueExchange;
  scrollProgress: any;
  userRange: [number, number];
  replyRange: [number, number];
  index: number;
}) {
  const userOpacity = useTransform(scrollProgress, userRange, [0, 1]);
  const userY = useTransform(scrollProgress, userRange, [24, 0]);

  const replyOpacity = useTransform(scrollProgress, replyRange, [0, 1]);
  const replyY = useTransform(scrollProgress, replyRange, [24, 0]);

  return (
    <div className="space-y-4">
      
      {/* 1. User Query Bubble */}
      <motion.div 
        style={{ opacity: userOpacity, y: userY }}
        className="flex justify-end"
      >
        <div className="bg-white text-[#123630] rounded-2xl rounded-tr-xs px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-md max-w-[85%] leading-snug">
          "{exchange.userQuery}"
        </div>
      </motion.div>

      {/* 2. Kubear Response Bubble */}
      <motion.div 
        style={{ opacity: replyOpacity, y: replyY }}
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
