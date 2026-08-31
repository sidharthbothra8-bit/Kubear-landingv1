import { ArrowRight, ArrowUpRight, Calculator, Landmark, Plane, Sparkles, WalletCards } from "lucide-react";
import { Link } from "wouter";

const toolMoments = [
  {
    href: "/learn/tools/sip-calculator",
    index: "01",
    moment: "Salary Day",
    title: "Set a monthly SIP",
    detail: "Test monthly investments, time horizons, and compounded growth assumptions.",
    icon: WalletCards,
    accent: "#FF5C2B",
    bgAccent: "bg-[#FF5C2B]/10 text-[#D44722]",
  },
  {
    href: "/learn/tools/emi-calculator",
    index: "02",
    moment: "Home & Loan Plan",
    title: "Understand your EMI",
    detail: "Calculate true monthly payments, interest totals, and tenure trade-offs.",
    icon: Landmark,
    accent: "#123630",
    bgAccent: "bg-[#123630]/10 text-[#123630]",
  },
  {
    href: "/learn/tools/goa-goal-calculator",
    index: "03",
    moment: "Holiday & Milestones",
    title: "Target savings runway",
    detail: "Spread what is left across the months that remain to reach your goal.",
    icon: Plane,
    accent: "#E5AD2B",
    bgAccent: "bg-[#E5AD2B]/15 text-[#B87B08]",
  },
] as const;

export function LearnDeskTools({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
        compact ? "py-8 md:py-12" : "py-12 md:py-16"
      }`}
      aria-labelledby="learn-tools-title"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#123630]/12">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-1.5">
            <Calculator className="size-3.5" /> Interactive Planning Desk
          </p>
          <h2
            id="learn-tools-title"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#123630] font-normal tracking-tight"
          >
            Start with the money moment.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#4B605B] max-w-md">
          Simple, grounded calculators that turn complex money decisions into clear, monthly clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-6">
        {toolMoments.map(({ href, index, moment, title, detail, icon: Icon, bgAccent }) => (
          <Link
            href={href}
            key={href}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FFFDF8] border border-[#123630]/12 shadow-sm hover:shadow-md hover:border-[#123630]/30 transition-all duration-200 hover:-translate-y-1 overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-[#6F827C] tracking-wider">
                  TOOL {index}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${bgAccent}`}
                >
                  <Icon className="size-3.5" />
                  {moment}
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#123630] group-hover:text-[#C96632] transition-colors mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6F68] leading-relaxed">
                {detail}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#123630]/8 text-xs font-bold text-[#123630] group-hover:text-[#C96632] transition-colors">
              <span>Open calculator</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <p className="text-[11px] text-[#6E817B] text-center md:text-left mt-4">
        For illustration and planning. Calculator outputs are educational and do not constitute financial advice.
      </p>
    </section>
  );
}

