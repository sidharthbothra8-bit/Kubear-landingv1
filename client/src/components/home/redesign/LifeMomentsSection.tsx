import React from "react";
import { 
  FirstSalaryVignette, 
  MovingOutVignette, 
  MarriageVignette, 
  ChildVignette, 
  BuyingHomeVignette 
} from "./LifeMomentVignettes";
import { 
  Sparkles, 
  Home,
  Users,
  Baby,
  Building,
  Briefcase
} from "lucide-react";

interface MilestoneData {
  id: string;
  number: string;
  chapter: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  vignette: React.ComponentType<{ className?: string }>;
  ruleBadge: string;
  ruleColor: string;
  kubearFocus: string;
}

const milestones: MilestoneData[] = [
  {
    id: "first-salary",
    number: "01",
    chapter: "FOUNDATION",
    icon: Briefcase,
    title: "First salary",
    shortDesc: "You're earning your own money. Now you have to decide what to do with it.",
    vignette: FirstSalaryVignette,
    ruleBadge: "50 / 30 / 20 Rule",
    ruleColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    kubearFocus: "Automated 3-bucket cashflow on Day 1"
  },
  {
    id: "moving-out",
    number: "02",
    chapter: "INDEPENDENCE",
    icon: Building,
    title: "Moving out",
    shortDesc: "Rent, food, travel and everyday spending are suddenly yours to manage.",
    vignette: MovingOutVignette,
    ruleBadge: "< 30% Rent Ceiling",
    ruleColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    kubearFocus: "Lease overhead & emergency runway test"
  },
  {
    id: "marriage",
    number: "03",
    chapter: "PARTNERSHIP",
    icon: Users,
    title: "Marriage",
    shortDesc: "Two financial lives start affecting the same decisions.",
    vignette: MarriageVignette,
    ruleBadge: "Proportional Split",
    ruleColor: "bg-rose-50 text-rose-700 border-rose-200/80",
    kubearFocus: "Joint household ledger + personal freedom"
  },
  {
    id: "a-child",
    number: "04",
    chapter: "FAMILY",
    icon: Baby,
    title: "A child",
    shortDesc: "Your money now has more people and more years to plan for.",
    vignette: ChildVignette,
    ruleBadge: "18-Yr Horizon",
    ruleColor: "bg-sky-50 text-sky-700 border-sky-200/80",
    kubearFocus: "18-year milestone & safety buffer"
  },
  {
    id: "buying-a-home",
    number: "05",
    chapter: "ASSET",
    icon: Home,
    title: "Buying a home",
    shortDesc: "One big commitment changes what you can afford everywhere else.",
    vignette: BuyingHomeVignette,
    ruleBadge: "< 35% Debt Cap",
    ruleColor: "bg-orange-50 text-orange-700 border-orange-200/80",
    kubearFocus: "20-year EMI stress test & liquidity lock"
  }
];

export function LifeMomentsSection() {
  return (
    <section id="life-moments" className="w-full py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#ECE7DC] relative">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[85vw] max-w-7xl h-[420px] pointer-events-none opacity-40 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, #FFEEDD 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE1] border border-[#E5DAC8] text-[#8C5D35] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="size-3.5 text-[#F06535]" />
            <span>Life Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-[#16191E] leading-[1.14]">
            Your money changes when your{" "}
            <span className="text-[#F06535] relative inline-block">
              life does.
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#F06535]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#525660] leading-relaxed mt-4">
            A new job, a new city, or a new family member completely transforms your commitments and cash flow.
            Kubear anticipates what changes so you can move forward with confidence.
          </p>
        </div>

        {/* 5 Milestone Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {milestones.map((item) => {
            const Vignette = item.vignette;
            const ItemIcon = item.icon;

            return (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl p-3 bg-white border border-[#EAE3D6] hover:border-[#D8CCBA] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Elevated Animated Artwork Thumbnail */}
                <div className="relative rounded-xl overflow-hidden shadow-xs border border-[#E5DEC9] bg-[#EFE8DC]">
                  <Vignette />
                </div>

                {/* Text Content */}
                <div className="p-2 pt-4 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Chapter & Rule Badge */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-1.5">
                        <ItemIcon className="size-3.5 text-[#8C5D35] group-hover:text-[#F06535] transition-colors" />
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C5D35] group-hover:text-[#F06535] transition-colors">
                          {item.number} · {item.chapter}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${item.ruleColor} whitespace-nowrap`}>
                        {item.ruleBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#16191E] group-hover:text-[#F06535] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Short Relatable Description */}
                    <p className="text-xs sm:text-[13px] text-[#5E6470] leading-relaxed mt-2 font-normal">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Kubear Protection Point */}
                  <div className="mt-4 pt-3 border-t border-[#F2ECE1]">
                    <span className="text-[11px] font-medium text-[#7C828D] block leading-snug">
                      {item.kubearFocus}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
