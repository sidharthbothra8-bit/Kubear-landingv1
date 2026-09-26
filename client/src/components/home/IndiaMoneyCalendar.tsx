import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gift, GraduationCap, Sparkles, Flame, Heart, FileText, ArrowDown, CheckCircle2 } from "lucide-react";

interface BurstMilestone {
  id: string;
  month: string;
  seasonLabel: string;
  icon: React.ElementType;
  items: string[];
  impactEstimate: string;
  quarantineRule: string;
  highlight?: boolean;
}

const burstMilestones: BurstMilestone[] = [
  {
    id: "mar",
    month: "March",
    seasonLabel: "Bonus & Year-End Tax",
    icon: Gift,
    items: ["Annual performance bonus", "Section 80C & 80D tax proofs", "NPS top-up deadline"],
    impactEstimate: "+₹1,80,000 net influx",
    quarantineRule: "40% auto-routed to tax & emergency reserves",
  },
  {
    id: "apr",
    month: "April",
    seasonLabel: "New School Year & Policies",
    icon: GraduationCap,
    items: ["School admission & fees (₹45,000)", "Health insurance annual renewal", "Club memberships"],
    impactEstimate: "−₹72,000 concentrated outlay",
    quarantineRule: "Smoothed across Jan–Mar salary reserves",
  },
  {
    id: "aug",
    month: "August",
    seasonLabel: "Festive Kickoff & Gifting",
    icon: Sparkles,
    items: ["Raksha Bandhan gifts", "Onam celebration", "Independence Day long weekend"],
    impactEstimate: "−₹28,000 lifestyle spike",
    quarantineRule: "Protected under July festive sub-vault",
  },
  {
    id: "oct",
    month: "October",
    seasonLabel: "Grand Festivities & Dhanteras",
    icon: Flame,
    items: ["Diwali family bonuses", "24K Gold / Sovereign Gold Bond", "Home renovation & appliances"],
    impactEstimate: "−₹1,15,000 seasonal peak",
    quarantineRule: "Pre-funded via 6-month micro-accruals",
    highlight: true,
  },
  {
    id: "nov",
    month: "November",
    seasonLabel: "Weddings & Winter Travel",
    icon: Heart,
    items: ["Family wedding travel & outfits", "Flight bookings for December break", "Winter wardrobe"],
    impactEstimate: "−₹65,000 travel & social",
    quarantineRule: "Separated from core monthly rent & EMIs",
  },
  {
    id: "jan",
    month: "January",
    seasonLabel: "Tax Submissions & Term 2",
    icon: FileText,
    items: ["Employer Form 12BB lock", "School term 2 tuition", "Health checkup vouchers"],
    impactEstimate: "−₹48,000 compliance burst",
    quarantineRule: "Zero impact on Jan SIP commitments",
  },
];

export function IndiaMoneyCalendar() {
  const containerRef = useRef<HTMLElement>(null);

  // Bind scroll progress directly to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const timelineWidth = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="calendar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Built for Indian Households
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]">
            Money in India doesn't follow a calendar.<br />
            <span className="text-[#059669] italic font-serif">It follows life.</span>
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              Bonuses in March. School fees in April. Festive bursts from Rakhi to Diwali. Wedding season in November. As you scroll, experience how Kubear maps your annual horizon so no seasonal surge catches you unprepared.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#516761]">
              <span className="text-[11px] uppercase tracking-wider">Scroll down to traverse the 12-month rhythm</span>
              <div className="w-28 h-1.5 bg-[#EADBCA] rounded-full overflow-hidden">
                <motion.div 
                  style={{ width: timelineWidth }} 
                  className="h-full bg-[#EA580C] rounded-full" 
                />
              </div>
              <ArrowDown className="size-3 text-[#EA580C] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Scroll Progress Timeline Track */}
        <div className="hidden lg:block relative w-full h-1.5 bg-[#EADBCA] rounded-full mb-10 overflow-hidden">
          <motion.div 
            style={{ width: timelineWidth }}
            className="h-full bg-gradient-to-r from-[#EA580C] via-[#059669] to-[#123630]" 
          />
        </div>

        {/* Living Horizon Cards Grid: All 6 bursts active with scroll choreography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {burstMilestones.map((milestone, idx) => {
            const cardStart = 0.05 + idx * 0.12;
            const cardEnd = Math.min(1, cardStart + 0.3);
            const Icon = milestone.icon;

            return (
              <MilestoneCard 
                key={milestone.id}
                milestone={milestone}
                scrollProgress={scrollYProgress}
                range={[cardStart, cardEnd]}
                Icon={Icon}
              />
            );
          })}
        </div>

        {/* Annotation (handwritten) */}
        <div className="mt-12 text-center select-none">
          <span className="kh-handwritten text-[#EA580C] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
            Your salary comes monthly. Your life happens in bursts. We plan for the bursts.
          </span>
        </div>

      </div>
    </section>
  );
}

function MilestoneCard({
  milestone,
  scrollProgress,
  range,
  Icon,
}: {
  milestone: BurstMilestone;
  scrollProgress: any;
  range: [number, number];
  Icon: React.ElementType;
}) {
  const y = useTransform(scrollProgress, range, [32, 0]);
  const opacity = useTransform(scrollProgress, range, [0.25, 1]);
  const scale = useTransform(scrollProgress, range, [0.97, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className={`rounded-3xl border p-6 sm:p-7 shadow-[0_8px_24px_rgba(18,54,48,0.05)] hover:shadow-[0_16px_36px_rgba(18,54,48,0.1)] transition-all duration-300 flex flex-col justify-between ${
        milestone.highlight 
          ? "bg-[#FFFDF7] border-[#EA580C]/40 ring-1 ring-[#EA580C]/30" 
          : "bg-white border-[#EADBCA]"
      }`}
    >
      <div>
        {/* Month + Icon Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className={`size-8 rounded-xl flex items-center justify-center ${
              milestone.highlight ? "bg-[#FFF7ED] text-[#EA580C]" : "bg-[#FAF7F0] text-[#123630]"
            }`}>
              <Icon className="size-4" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#123630]">
              {milestone.month}
            </span>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#516761] bg-[#FAF7F0] px-2.5 py-1 rounded-full border border-[#EADBCA]/70">
            {milestone.seasonLabel.split("&")[0]}
          </span>
        </div>

        {/* Impact Estimate */}
        <div className="mb-4">
          <span className="text-xs text-[#516761] font-semibold block mb-0.5">Seasonal Flow</span>
          <span className={`font-serif text-lg font-bold tabular-nums ${
            milestone.impactEstimate.startsWith("+") ? "text-[#059669]" : "text-[#EA580C]"
          }`}>
            {milestone.impactEstimate}
          </span>
        </div>

        {/* Items List */}
        <div className="space-y-1.5 pt-3 border-t border-[#FAF7F0] text-xs font-medium text-[#123630]">
          {milestone.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-stone-400 font-bold">·</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cushion Strategy */}
      <div className="mt-6 pt-4 border-t border-[#FAF7F0]">
        <div className="p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70 flex items-start gap-2">
          <CheckCircle2 className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#516761] font-medium leading-relaxed">
            <strong className="text-[#123630]">Cushion:</strong> {milestone.quarantineRule}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
