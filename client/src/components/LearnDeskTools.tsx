import { ArrowRight, ArrowUpRight, Calculator, CreditCard, Landmark, Plane, Sparkles, Users, Wallet, WalletCards } from "lucide-react";
import { Link } from "wouter";

const toolMoments = [
  {
    href: "/learn/tools/salary-allocation",
    index: "01",
    moment: "Salary Day Burn",
    title: "Day-1 Salary Allocation",
    detail: "Lock rent, parents & SIPs upfront. See your exact daily guilt-free spend limit.",
    icon: Wallet,
    accent: "#FF5C2B",
    bgAccent: "bg-[#FF5C2B]/10 text-[#D44722]",
  },
  {
    href: "/learn/tools/tax-regime-comparator",
    index: "02",
    moment: "Tax Planning",
    title: "Old vs New Tax Regime",
    detail: "Compare Budget 2024-26 standard deductions, 87A rebate & 80C/80D tax exemptions.",
    icon: Landmark,
    accent: "#047857",
    bgAccent: "bg-[#047857]/10 text-[#047857]",
  },
  {
    href: "/learn/tools/credit-card-trap",
    index: "03",
    moment: "Debt Freedom",
    title: "Credit Card Trap Simulator",
    detail: "See the brutal 42% APR math on minimum due payments and fixed payoff milestones.",
    icon: CreditCard,
    accent: "#C96632",
    bgAccent: "bg-[#C96632]/10 text-[#9F3017]",
  },
  {
    href: "/learn/tools/flatmate-maid-split",
    index: "04",
    moment: "Shared Living",
    title: "Flatmate & Maid Split",
    detail: "Split rent, cook, maid, wifi, and grocery pools with transparent room-size weights.",
    icon: Users,
    accent: "#123630",
    bgAccent: "bg-[#123630]/10 text-[#123630]",
  },
  {
    href: "/learn/tools/sip-calculator",
    index: "05",
    moment: "Wealth Compounding",
    title: "Step-Up SIP Engine",
    detail: "Model annual salary increment step-ups with 6% inflation purchasing power.",
    icon: WalletCards,
    accent: "#FF5C2B",
    bgAccent: "bg-[#FF5C2B]/10 text-[#D44722]",
  },
  {
    href: "/learn/tools/goa-goal-calculator",
    index: "06",
    moment: "Travel & Goals",
    title: "Goa & Wedding Planner",
    detail: "Spread what is left across remaining months to fund trips without loans.",
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
            <Calculator className="size-3.5" /> Interactive Planning Desk · India
          </p>
          <h2
            id="learn-tools-title"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#123630] font-normal tracking-tight"
          >
            Start with the money moment.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="text-sm sm:text-base text-[#4B605B] max-w-md">
            Grounded financial calculators tailored for urban Indian salaries, rent, and investments.
          </p>
          <Link
            href="/learn/tools"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#123630] text-[#FFFDF8] text-xs font-bold shrink-0 hover:bg-[#1A4B43] transition-all no-underline"
          >
            <span>View All 9 Tools</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Mobile Swipe Rail / Desktop 3-Column Grid */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
        {toolMoments.map(({ href, index, moment, title, detail, icon: Icon, bgAccent }) => (
          <Link
            href={href}
            key={href}
            className="group relative flex flex-col justify-between p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-[#FFFDF8] border border-[#123630]/12 shadow-xs hover:shadow-md hover:border-[#123630]/30 transition-all duration-200 overflow-hidden no-underline shrink-0 w-[82vw] max-w-[290px] sm:w-[320px] md:w-auto snap-start"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs font-bold text-[#6F827C] tracking-wider">
                  TOOL {index}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${bgAccent}`}
                >
                  <Icon className="size-3 sm:size-3.5" />
                  {moment}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#123630] group-hover:text-[#C96632] transition-colors mb-1.5 sm:mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6F68] leading-relaxed line-clamp-2 sm:line-clamp-none">
                {detail}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#123630]/8 text-[11px] sm:text-xs font-bold text-[#123630] group-hover:text-[#C96632] transition-colors">
              <span>Open live calculation</span>
              <ArrowUpRight className="size-3.5 sm:size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <p className="text-[11px] text-[#6E817B] text-center md:text-left mt-4">
        For illustration and planning. Calculator outputs are educational, local to Indian tax/financial regimes, and do not constitute formal financial advice.
      </p>
    </section>
  );
}
