import React from "react";
import {
  BarChart2,
  Briefcase,
  FileText,
  PiggyBank,
  Target,
  Users,
} from "lucide-react";

const nodes = [
  {
    label: "Income",
    icon: Briefcase,
    bgColor: "bg-[#DBEFE2]",
    iconColor: "text-[#24523F]",
  },
  {
    label: "Bills & EMIs",
    icon: FileText,
    bgColor: "bg-[#FCEAE4]",
    iconColor: "text-[#B84E38]",
  },
  {
    label: "Savings",
    icon: PiggyBank,
    bgColor: "bg-[#DDEEFB]",
    iconColor: "text-[#2B628A]",
  },
  {
    label: "Goals",
    icon: Target,
    bgColor: "bg-[#FFE8DC]",
    iconColor: "text-[#C96632]",
  },
  {
    label: "Investments",
    icon: BarChart2,
    bgColor: "bg-[#EDE8F7]",
    iconColor: "text-[#583896]",
  },
  {
    label: "Family",
    icon: Users,
    bgColor: "bg-[#FDE4EA]",
    iconColor: "text-[#9E3658]",
  },
];

export function ConnectedLifeSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-[#E5EBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-12 sm:pb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#142823] tracking-tight">
            Because your money is all connected.
          </h2>
          <p className="text-sm sm:text-base text-[#7D8D86]">
            A complete picture helps you make better decisions.
          </p>
        </div>

        {/* Connected nodes with horizontal line */}
        <div className="relative w-full">
          {/* Continuous connecting horizontal line with luminous energy pulse passing through center of circles */}
          <div className="hidden sm:block absolute top-7 left-8 right-8 h-[3px] rounded-full kh-luminous-wire pointer-events-none" />

          {/* Nodes row */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-4 relative z-10">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.label}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Circle container with tactile lens finish */}
                  <div
                    className={`kh-node-orb size-14 sm:size-16 rounded-full ${node.bgColor} flex items-center justify-center border-4 border-white relative`}
                  >
                    <Icon className={`size-5 sm:size-6 ${node.iconColor} transition-transform duration-200 group-hover:scale-110`} />
                  </div>

                  {/* Label */}
                  <span className="text-xs sm:text-sm font-semibold text-[#142823] group-hover:text-[#24523F] transition-colors mt-3.5">
                    {node.label}
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
