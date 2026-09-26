import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Landmark, Send } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";
import { LIFE_NODES, SALARY_FORMATTED, SALARY_LABEL } from "./heroData";
import {
  HouseVignette,
  PlantVignette,
  TravelVignette,
  FamilyVignette,
  ShieldVignette,
  CardsVignette,
  ShoppingVignette,
} from "./VignetteArtwork";

export function MobileLifeFlow() {
  const shouldReduceMotion = useReducedMotion();

  const renderMiniVignette = (type: string) => {
    switch (type) {
      case "home":
        return <HouseVignette />;
      case "investments":
        return <PlantVignette />;
      case "travel":
        return <TravelVignette />;
      case "family":
        return <FamilyVignette />;
      case "emergency":
        return <ShieldVignette />;
      case "emi":
        return <CardsVignette />;
      case "everyday":
        return <ShoppingVignette />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-2 pb-4 select-none">
      {/* 1. Salary Node Capsule matching download.png */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] flex items-center gap-2.5">
          <div className="size-8 rounded-lg bg-[#E6F4EA] border border-[#A8DAB5] flex items-center justify-center text-[#137333] shrink-0">
            <Landmark className="size-4.5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[11px] font-medium text-[#64748B]">
              {SALARY_LABEL}
            </span>
            <span className="text-base font-bold text-[#0F172A] tracking-tight tabular-nums font-serif">
              {SALARY_FORMATTED}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Connecting Golden Filament Stream */}
      <div className="w-0.5 h-6 bg-gradient-to-b from-[#F59E0B] to-[#FED7AA] my-2" />

      {/* 2. 3D Life Nodes in Responsive Grid */}
      <div className="relative w-full max-w-sm sm:max-w-md px-2">
        <div className="grid grid-cols-2 gap-3 relative z-10">
          {LIFE_NODES.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.1 + index * 0.06,
              }}
              className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center gap-2"
            >
              <div className="scale-85 origin-center">
                {renderMiniVignette(node.iconType)}
              </div>
              <div>
                <div className="text-[11px] font-medium text-[#4A5568] leading-tight">
                  {node.label}
                </div>
                <div className="text-[13px] font-bold text-[#0F172A] tabular-nums tracking-tight mt-0.5">
                  {node.formattedAmount}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting Vertical Stream */}
      <div className="w-0.5 h-6 bg-gradient-to-b from-[#FED7AA] to-[#EA580C]/50 my-2" />

      {/* 3. The Kubear Decision Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-sm sm:max-w-md px-2"
      >
        <div className="rounded-2xl p-4 bg-white border border-[#E2E8F0] shadow-[0_12px_28px_-8px_rgba(10,36,30,0.12)]">
          {/* Question */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[13px] font-semibold text-[#0F172A]">
              Can I spend ₹8,000 on a weekend trip?
            </span>
            <div className="size-6 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0">
              <Send className="size-3 text-[#475569] -rotate-12" />
            </div>
          </div>

          {/* Answer */}
          <div className="rounded-xl bg-[#EAF8F0] border border-[#A7F3D0] p-3 shadow-inner flex items-start gap-2.5">
            <div className="size-8 rounded-xl bg-[#064E3B] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <KubearLogo className="size-4.5" inverse={true} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-serif text-base font-bold text-[#064E3B] tracking-tight leading-none">
                Yes, you can!
              </div>
              <p className="text-[11.5px] text-[#164E3D] mt-1 leading-snug font-normal">
                Your bills, investments and goals will still stay on track.
              </p>
            </div>
          </div>

          {/* Handwritten Note on Mobile */}
          <div className="mt-2 text-center">
            <span className="font-['Caveat'] text-[#EA580C] text-lg font-bold">
              Live today. Stay on track tomorrow.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
