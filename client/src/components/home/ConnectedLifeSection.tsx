import React from "react";
import {
  BarChart2,
  Briefcase,
  CreditCard,
  HeartHandshake,
  PiggyBank,
  Target,
} from "lucide-react";

const nodes = [
  {
    label: "Salary & Income",
    sublabel: "₹85,000/mo",
    icon: Briefcase,
    bgColor: "bg-[#ECFDF5]",
    borderColor: "border-[#A7F3D0]",
    iconColor: "text-[#047857]",
    ringHover: "group-hover:ring-[#059669]/30",
  },
  {
    label: "Bills & EMIs",
    sublabel: "₹28,500/mo",
    icon: CreditCard,
    bgColor: "bg-[#FFF7ED]",
    borderColor: "border-[#FFEDD5]",
    iconColor: "text-[#EA580C]",
    ringHover: "group-hover:ring-[#EA580C]/30",
  },
  {
    label: "Emergency Fund",
    sublabel: "4 months safe",
    icon: PiggyBank,
    bgColor: "bg-[#EFF6FF]",
    borderColor: "border-[#BFDBFE]",
    iconColor: "text-[#2563EB]",
    ringHover: "group-hover:ring-[#2563EB]/30",
  },
  {
    label: "Diwali & Goals",
    sublabel: "60% funded",
    icon: Target,
    bgColor: "bg-[#FEF3C7]",
    borderColor: "border-[#FDE68A]",
    iconColor: "text-[#D97706]",
    ringHover: "group-hover:ring-[#D97706]/30",
  },
  {
    label: "Mutual Funds & Gold",
    sublabel: "₹15,000 SIP",
    icon: BarChart2,
    bgColor: "bg-[#EEF2FF]",
    borderColor: "border-[#C7D2FE]",
    iconColor: "text-[#4F46E5]",
    ringHover: "group-hover:ring-[#4F46E5]/30",
  },
  {
    label: "Family & Parents",
    sublabel: "Shared balance",
    icon: HeartHandshake,
    bgColor: "bg-[#FDF2F8]",
    borderColor: "border-[#FBCFE8]",
    iconColor: "text-[#DB2777]",
    ringHover: "group-hover:ring-[#DB2777]/30",
  },
];

export function ConnectedLifeSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-[#E8EFEA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-row items-baseline justify-between gap-4 pb-8 sm:pb-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.35rem)] rounded-full text-[clamp(0.65rem,0.8vw,0.75rem)] font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              Unified Financial Radar
            </span>
            <h2 className="text-[clamp(1.15rem,2.3vw,2.25rem)] font-bold text-[#0E241E] tracking-tight">
              Because your money is all connected.
            </h2>
          </div>
          <p className="text-[clamp(0.72rem,1vw,0.95rem)] text-[#5B6E66] font-medium max-w-[42%] text-right shrink-0">
            From household rent to Diwali gold, see how every rupee works together in sync.
          </p>
        </div>

        {/* Connected nodes with horizontal line */}
        <div className="relative w-full">
          {/* Continuous connecting horizontal line with luminous multi-spectral beam */}
          <div className="absolute top-[clamp(1.2rem,2.7vw,2.25rem)] left-[clamp(0.75rem,2vw,2rem)] right-[clamp(0.75rem,2vw,2rem)] h-[2px] sm:h-[3px] rounded-full kh-luminous-wire pointer-events-none" />

          {/* Nodes row - persistent 6-col that never rearranges */}
          <div className="grid grid-cols-6 gap-[clamp(0.25rem,0.8vw,1rem)] relative z-10">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  data-reveal
                  data-reveal-delay={String(Math.min(idx + 1, 5))}
                  className="flex flex-col items-center text-center group cursor-default p-[clamp(0.25rem,0.6vw,0.75rem)] rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-[0_8px_24px_rgba(14,36,30,0.06)]"
                >
                  {/* Circle container with tactile lens finish */}
                  <div
                    className={`kh-node-orb size-[clamp(2.5rem,5.5vw,4.5rem)] rounded-full ${node.bgColor} border border-current sm:border-2 ${node.borderColor} flex items-center justify-center relative ring-2 sm:ring-4 ring-white shadow-sm sm:shadow-md transition-all duration-300 ${node.ringHover}`}
                  >
                    <Icon className={`size-[clamp(1.1rem,2.3vw,1.75rem)] ${node.iconColor} transition-transform duration-200 group-hover:scale-110`} />
                  </div>

                  {/* Label */}
                  <span className="text-[clamp(8px,0.85vw,13px)] font-bold text-[#0E241E] group-hover:text-[#EA580C] transition-colors mt-2 sm:mt-3 leading-tight truncate max-w-full">
                    {node.label}
                  </span>
                  <span className="text-[clamp(7.5px,0.75vw,11px)] font-semibold text-[#6E827A] tabular-nums mt-0.5 truncate max-w-full">
                    {node.sublabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

