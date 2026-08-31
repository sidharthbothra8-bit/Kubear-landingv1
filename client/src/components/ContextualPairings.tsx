import { useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Calculator, ChevronRight, Landmark, Plane, Sparkles, TrendingUp, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { emiEstimate, goalEstimate, sipEstimate } from "@/lib/calculatorMath";

const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    Number.isFinite(value) ? Math.max(0, value) : 0
  );

export function ContextualPairings() {
  // Live quick states for inline calculator snippets
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  const [emiLoan, setEmiLoan] = useState(2500000);
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiYears, setEmiYears] = useState(5);

  const [goalTarget, setGoalTarget] = useState(60000);
  const [goalSaved, setGoalSaved] = useState(15000);
  const [goalMonths, setGoalMonths] = useState(6);

  const sipResult = sipEstimate(sipMonthly, sipRate, sipYears);
  const emiResult = emiEstimate(emiLoan, emiRate, emiYears);
  const goalRemaining = Math.max(0, goalTarget - goalSaved);
  const goalMonthlyEstimate = Math.ceil(goalRemaining / Math.max(1, goalMonths));

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-label="Contextual math and guide pairings">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#123630]/12 mb-8">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-1.5">
            <Sparkles className="size-3.5" /> Side-by-Side Contextual Pairing
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#123630] font-normal tracking-tight">
            Math & words together.
          </h2>
        </div>
        <p className="text-sm text-[#4B605B] max-w-md">
          Calculators are paired directly with the exact editorial frameworks they belong to — no jumping between separate tabs.
        </p>
      </div>

      <div className="space-y-8">
        {/* Pairing 1: SIP & Investing Guides */}
        <div className="bg-[#FFFDF8] border border-[#123630]/12 rounded-3xl p-5 sm:p-7 shadow-xs hover:border-[#123630]/25 transition-all">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#123630]/10 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#FF5C2B]/10 text-[#FF5C2B]">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5C2B]">Pillar 05 · Investing</span>
                <h3 className="text-lg sm:text-xl font-serif text-[#123630]">Monthly SIP & Compounding Growth</h3>
              </div>
            </div>
            <Link
              href="/learn/tools/sip-calculator"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#123630] hover:text-[#C96632] transition-colors"
            >
              <span>Open full tool</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Quick Calculator Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#123630]/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-3">
                  <span>Interactive Quick Test</span>
                  <span className="font-mono text-[#FF5C2B]">SIP Calculator</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Monthly Contribution</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(sipMonthly)}</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Return Rate</span>
                        <span className="font-mono font-bold text-[#123630]">{sipRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={18}
                        step={0.5}
                        value={sipRate}
                        onChange={(e) => setSipRate(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Horizon</span>
                        <span className="font-mono font-bold text-[#123630]">{sipYears} yrs</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={30}
                        step={1}
                        value={sipYears}
                        onChange={(e) => setSipYears(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Output */}
                <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">Estimated Future Corpus</span>
                  <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                    {formatInr(sipResult.value)}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                    <span>Invested: {formatInr(sipResult.contributed)}</span>
                    <span className="text-[#2F7E4B] font-semibold">Growth: +{formatInr(sipResult.growth)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/learn/tools/sip-calculator"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#123630] text-[#FFF8EE] text-xs font-bold hover:bg-[#1C4E46] transition-colors"
              >
                <span>Launch Full SIP Workspace</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Paired Reading Guides */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526660] flex items-center gap-1.5">
                <BookOpen className="size-3.5 text-[#C96632]" /> Paired Editorial Guides
              </span>

              <div className="space-y-2.5">
                <Link
                  href="/learn/index-funds-vs-active-mutual-funds-india"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#21</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Investing</span>
                      <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Index Funds vs. Active Mutual Funds in India: What the Data Shows
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Why low-cost Nifty 50 and Nifty Next 50 index funds consistently beat most large-cap active funds after fees.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/salary-day-is-not-spending-day"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#01</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Salary Day</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Salary day is not a spending day. Try these four jobs first.
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Lock your monthly SIP on Day 1 alongside rent and bills before discretionary spending takes over.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/direct-vs-regular-mutual-funds"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#23</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Investing</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Direct vs Regular Mutual Funds: The 1% That Costs You Lakhs
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Understanding distributor commissions and how to ensure your SIP compounding works 100% for you.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pairing 2: EMI & Housing Guides */}
        <div className="bg-[#FFFDF8] border border-[#123630]/12 rounded-3xl p-5 sm:p-7 shadow-xs hover:border-[#123630]/25 transition-all">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#123630]/10 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#123630]/10 text-[#123630]">
                <Landmark className="size-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#123630]">Pillar 04 · Debt & Housing</span>
                <h3 className="text-lg sm:text-xl font-serif text-[#123630]">Loan EMI, Interest Totals & Rent vs Buy</h3>
              </div>
            </div>
            <Link
              href="/learn/tools/emi-calculator"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#123630] hover:text-[#C96632] transition-colors"
            >
              <span>Open full tool</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Quick Calculator Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#123630]/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-3">
                  <span>Interactive Quick Test</span>
                  <span className="font-mono text-[#123630]">EMI Calculator</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Loan Amount</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(emiLoan)}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={10000000}
                      step={100000}
                      value={emiLoan}
                      onChange={(e) => setEmiLoan(Number(e.target.value))}
                      className="w-full accent-[#123630] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Interest Rate</span>
                        <span className="font-mono font-bold text-[#123630]">{emiRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={7}
                        max={16}
                        step={0.25}
                        value={emiRate}
                        onChange={(e) => setEmiRate(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Tenure</span>
                        <span className="font-mono font-bold text-[#123630]">{emiYears} yrs</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={30}
                        step={1}
                        value={emiYears}
                        onChange={(e) => setEmiYears(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Output */}
                <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">Monthly EMI Commitment</span>
                  <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                    {formatInr(emiResult.emi)} / mo
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                    <span>Total: {formatInr(emiResult.total)}</span>
                    <span className="text-[#C96632] font-semibold">Interest: {formatInr(emiResult.interest)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/learn/tools/emi-calculator"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#123630] text-[#FFF8EE] text-xs font-bold hover:bg-[#1C4E46] transition-colors"
              >
                <span>Launch Full EMI Workspace</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Paired Reading Guides */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526660] flex items-center gap-1.5">
                <BookOpen className="size-3.5 text-[#C96632]" /> Paired Editorial Guides
              </span>

              <div className="space-y-2.5">
                <Link
                  href="/learn/rent-vs-buy-in-india-the-real-math"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#16</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Decisions</span>
                      <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Rent vs Buy in India: The Real Math Behind the 25-Year Decision
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Comparing 3% rental yields with 8.5% home loan EMIs, maintenance costs, and opportunity cost.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/prepaying-your-home-loan-vs-investing"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#18</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt & Housing</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Prepaying Your Home Loan vs Investing the Difference
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      How 1 extra EMI per year can shave 5+ years and lakhs in interest off a 20-year home loan.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/debt-snowball-vs-debt-avalanche-india"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#11</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Debt Snowball vs. Debt Avalanche: Practical Strategies for Indian Loans
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Tackling high-interest credit card debt and personal loans methodically while protecting daily cash flow.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pairing 3: Goa Goal & Milestone Savings Guides */}
        <div className="bg-[#FFFDF8] border border-[#123630]/12 rounded-3xl p-5 sm:p-7 shadow-xs hover:border-[#123630]/25 transition-all">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#123630]/10 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#E5AD2B]/15 text-[#B87B08]">
                <Plane className="size-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B87B08]">Pillar 06 · Goals & Milestones</span>
                <h3 className="text-lg sm:text-xl font-serif text-[#123630]">Target Runway, Travel Funds & Emergency Buffers</h3>
              </div>
            </div>
            <Link
              href="/learn/tools/goa-goal-calculator"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#123630] hover:text-[#C96632] transition-colors"
            >
              <span>Open full tool</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Quick Calculator Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#123630]/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-3">
                  <span>Interactive Quick Test</span>
                  <span className="font-mono text-[#B87B08]">Goal Runway</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Total Goal Target</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(goalTarget)}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={500000}
                      step={5000}
                      value={goalTarget}
                      onChange={(e) => setGoalTarget(Number(e.target.value))}
                      className="w-full accent-[#B87B08] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Already Saved</span>
                        <span className="font-mono font-bold text-[#123630]">{formatInr(goalSaved)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={goalTarget}
                        step={2500}
                        value={goalSaved}
                        onChange={(e) => setGoalSaved(Number(e.target.value))}
                        className="w-full accent-[#B87B08] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Months Left</span>
                        <span className="font-mono font-bold text-[#123630]">{goalMonths} mo</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={24}
                        step={1}
                        value={goalMonths}
                        onChange={(e) => setGoalMonths(Number(e.target.value))}
                        className="w-full accent-[#B87B08] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Output */}
                <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">Monthly Savings Pace Needed</span>
                  <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                    {formatInr(goalMonthlyEstimate)} / mo
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                    <span>Remaining: {formatInr(goalRemaining)}</span>
                    <span className="text-[#123630] font-semibold">{goalMonths} months to go</span>
                  </div>
                </div>
              </div>

              <Link
                href="/learn/tools/goa-goal-calculator"
                className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#123630] text-[#FFF8EE] text-xs font-bold hover:bg-[#1C4E46] transition-colors"
              >
                <span>Launch Full Goal Workspace</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Paired Reading Guides */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526660] flex items-center gap-1.5">
                <BookOpen className="size-3.5 text-[#C96632]" /> Paired Editorial Guides
              </span>

              <div className="space-y-2.5">
                <Link
                  href="/learn/goa-fund-without-guilt"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#26</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Goals</span>
                      <span className="text-[10px] text-[#71827C] font-mono">3 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Goa ka plan. A simple way to keep it visible without guilt.
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Why separating fun holiday plans from monthly living costs prevents burnout and budget collapse.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/emergency-fund-in-india-how-much-is-enough"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#06</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Buffers</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Emergency Fund in India: 3 to 6 Months of True Expenses
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Calculating real living baseline costs and choosing liquid instruments that protect without locking funds.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>

                <Link
                  href="/learn/short-term-vs-long-term-goals-where-to-park-money"
                  className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-[#C96632]">#27</span>
                      <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Goals</span>
                      <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                      Short-Term vs Long-Term Goals: Where to Park Money Safely
                    </h4>
                    <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                      Matching timeline horizons with the right instruments: arbitrage, liquid funds, fixed deposits, or equity.
                    </p>
                  </div>
                  <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
