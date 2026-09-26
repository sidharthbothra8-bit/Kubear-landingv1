import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

interface KubearDecisionProps {
  isHighlighted?: boolean;
}

export function KubearDecision({ isHighlighted = false }: KubearDecisionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      animate={{
        opacity: 1,
        y: shouldReduceMotion ? 0 : [0, -2.5, 0],
        scale: isHighlighted || isHovered ? 1.02 : 1,
      }}
      transition={{
        opacity: { duration: 0.7, delay: 0.6 },
        scale: { type: "spring", stiffness: 300, damping: 20 },
        y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-30 select-none cursor-default max-w-[305px] sm:max-w-[330px]"
    >
      {/* Outer subtle soft halo */}
      <div
        className={`absolute -inset-2 rounded-3xl transition-opacity duration-500 blur-lg pointer-events-none ${
          isHighlighted || isHovered
            ? "bg-emerald-200/40 opacity-80"
            : "bg-emerald-100/25 opacity-40"
        }`}
      />

      {/* Main card body: Refined, elegant, 75% scale compared to before */}
      <div className="relative rounded-2xl p-3 sm:p-3.5 bg-white/95 backdrop-blur-md border border-[#E7E2D8] shadow-[0_14px_30px_-8px_rgba(10,36,30,0.12),0_2px_8px_rgba(0,0,0,0.03)]">
        {/* Top: Conversational user thought + Send icon */}
        <div className="flex items-center justify-between gap-2 mb-2 px-1">
          <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#18181B] tracking-tight">
            Can I spend ₹8,000 on a weekend trip?
          </span>

          <div className="size-5.5 rounded-full bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0 text-[#71717A]">
            <Send className="size-2.5 text-[#52525B] -rotate-12" />
          </div>
        </div>

        {/* Reassuring Kubear Answer Block (Soft Mint Area) */}
        <div className="rounded-xl bg-[#EEF8F2] border border-[#A7E8C5]/80 p-2.5 sm:p-3 shadow-[inset_0_1px_3px_rgba(16,185,129,0.06)]">
          <div className="flex items-start gap-2.5">
            {/* Jewel Bear Mark Badge */}
            <div className="size-7 sm:size-7.5 rounded-lg bg-[#064E3B] flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(6,78,59,0.25)] mt-0.5">
              <KubearLogo className="size-4" inverse={true} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="font-serif text-[16px] sm:text-[17px] font-bold text-[#064E3B] tracking-tight leading-none">
                Yes, you can!
              </div>

              <p className="text-[11px] sm:text-[11.5px] text-[#14532D] mt-1 leading-snug font-normal">
                Your bills, investments and goals will still stay on track.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Underneath the Card: Hand-drawn Orange Curved Arrow + Handwritten Note */}
      <div className="relative mt-2 ml-6 flex items-start gap-1.5 select-none pointer-events-none">
        {/* Hand-drawn Orange Curved Arrow */}
        <svg
          className="w-8 h-8 text-[#EA580C] overflow-visible shrink-0 mt-0.5"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 6 4 C 14 16, 22 22, 28 26"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 22 28 L 29 27 L 27 20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Handwritten text: Live today. Stay on track tomorrow. */}
        <div className="font-['Caveat'] text-[#EA580C] text-[17px] sm:text-[19px] font-bold leading-tight -rotate-2 drop-shadow-xs">
          <div>Live today.</div>
          <div>Stay on track tomorrow.</div>
        </div>
      </div>
    </motion.div>
  );
}

