import React, { useState } from "react";
import { 
  Check, 
  CreditCard, 
  Home, 
  Palmtree, 
  Sparkles, 
  TrendingUp, 
  User 
} from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

export function ThreeQuestionsSection() {
  const [boostGoal, setBoostGoal] = useState(false);

  return (
    <section id="your-money-questions" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warm Balanced Sand/Linen Background Container with subtle depth */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#FAF7F2] via-[#F6F2EB] to-[#EFE9E0] p-6 sm:p-10 lg:p-12 border border-[#E6DDCF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_32px_-12px_rgba(40,30,20,0.06)]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-8 sm:pb-10">
            <div>
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#C96632] mb-2">
                Live Decision Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#142823] tracking-tight">
                The questions behind every money decision.
              </h2>
            </div>
            <p className="text-sm text-[#7D8D86] max-w-sm sm:text-right">
              Concrete answers with your actual bills and commitments factored in.
            </p>
          </div>

          {/* 3 White Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CARD 1: Can I afford it? (Decision Engine) */}
            <div className="kh-tactile-card rounded-2xl p-6 flex flex-col justify-between min-h-[360px] group transition-all duration-300">
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF4EE] text-[#C96632] border border-[#FCDAC7]">
                    <Sparkles className="size-3 text-[#E85D3F]" />
                    Decision Check
                  </span>
                  <span className="text-xs text-[#8A7970] font-medium">Headroom</span>
                </div>

                <h3 className="text-lg font-bold font-sans text-[#142823]">
                  Can I afford this today?
                </h3>

                {/* User Scenario Question Bubble */}
                <div className="flex justify-end mt-4 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDFBF7] border border-[#EFE5DA] text-xs font-semibold text-[#142823] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <span>Can I buy the coffee grinder (₹9,000)?</span>
                    <span className="size-4 rounded-full bg-[#FDEEE5] flex items-center justify-center shrink-0">
                      <User className="size-2.5 text-[#C96632]" />
                    </span>
                  </div>
                </div>

                {/* Live Math Breakdown Preview */}
                <div className="bg-[#FAF8F5] border border-[#EFE5DA] rounded-xl p-3 text-xs space-y-1.5 mb-3">
                  <div className="flex items-center justify-between text-[#685A52]">
                    <span>Monthly budget buffer</span>
                    <span className="font-semibold text-[#142823] tabular-nums">₹32,000</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8F7D73]">
                    <span>Reserved for bills & rent</span>
                    <span className="font-semibold text-[#8F7D73] tabular-nums">-₹20,000</span>
                  </div>
                </div>
              </div>

              {/* Answer Box Verdict */}
              <div className="rounded-xl bg-gradient-to-br from-[#FAFCFA] via-[#F6FAF7] to-[#EEF5F0] border border-[#DCE8DF] p-3.5 flex items-start gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_8px_rgba(20,40,32,0.03)]">
                <div className="size-8 rounded-full bg-[#183B32] flex items-center justify-center shrink-0 shadow-[0_2px_4px_rgba(24,59,50,0.25)] mt-0.5">
                  <KubearLogo className="size-4" inverse={true} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-[#142823] tabular-nums tracking-tight">
                      ₹3,000
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#24523F] bg-[#E8F4EC] border border-[#CEE7D5] px-2 py-0.5 rounded-full">
                      <Check className="size-3 mr-0.5" /> Safe to spend
                    </span>
                  </div>
                  <p className="text-[11px] text-[#53625C] mt-1 leading-snug">
                    Safe buffer left. All upcoming commitments remain 100% protected.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: What needs my attention next? (Timeline & Commitments) */}
            <div className="kh-tactile-card rounded-2xl p-6 flex flex-col justify-between min-h-[360px] group transition-all duration-300">
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF1EC] text-[#E85D3F] border border-[#FCD5C5]">
                    <span className="size-1.5 rounded-full bg-[#E85D3F] kh-live-dot" />
                    Due in 7 Days
                  </span>
                  <span className="text-xs text-[#8A7970] font-medium">2 Pending</span>
                </div>

                <h3 className="text-lg font-bold font-sans text-[#142823]">
                  What needs my attention next?
                </h3>
                <p className="text-xs text-[#6E7E77] mt-1">
                  Upcoming obligations queued before salary arrives.
                </p>

                {/* Ledger Items Stack */}
                <div className="space-y-2.5 mt-4">
                  {/* Item 1: Imminent Credit Card */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FFF9F6] border border-[#F8DECFA] transition-transform duration-200 group-hover:translate-x-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-[#FFEFE8] border border-[#FBD9CA] flex items-center justify-center text-[#E85D3F]">
                        <CreditCard className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#142823]">
                          Credit Card Bill
                        </div>
                        <div className="text-[11px] text-[#8F7D73] tabular-nums">
                          Auto-debit active
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#142823] tabular-nums">
                        ₹12,450
                      </div>
                      <span className="inline-flex items-center text-[10px] font-bold text-[#C96632] bg-[#FFF2EB] border border-[#FCD8C6] px-1.5 py-0.2 rounded">
                        In 3 days
                      </span>
                    </div>
                  </div>

                  {/* Item 2: School Fees */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FBFDFB] border border-[#E6ECE8] transition-transform duration-200 group-hover:translate-x-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-[#EFF6F1] border border-[#DCEBE0] flex items-center justify-center text-[#24523F]">
                        <Home className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#142823]">
                          Quarterly School Fees
                        </div>
                        <div className="text-[11px] text-[#73827B] tabular-nums">
                          Due 18 September
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#142823] tabular-nums">
                        ₹6,000
                      </div>
                      <span className="inline-flex items-center text-[10px] font-medium text-[#53625C]">
                        Due in 6 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reserved Status Footnote */}
              <div className="mt-4 pt-3 border-t border-[#F2EBE3] flex items-center justify-between text-xs">
                <span className="text-[#8F7D73]">Protected in account</span>
                <span className="font-bold text-[#142823] tabular-nums">
                  ₹18,450 reserved
                </span>
              </div>
            </div>

            {/* CARD 3: Am I on track? (Goal Velocity Runway) */}
            <div className="kh-tactile-card rounded-2xl p-6 flex flex-col justify-between min-h-[360px] group transition-all duration-300">
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF7EB] text-[#A66E1D] border border-[#F6E6C5]">
                    <TrendingUp className="size-3 text-[#C96632]" />
                    Goal Momentum
                  </span>
                  <span className="text-xs font-bold text-[#24523F] bg-[#E8F4EC] border border-[#CEE7D5] px-2 py-0.5 rounded-full">
                    On track
                  </span>
                </div>

                <h3 className="text-lg font-bold font-sans text-[#142823]">
                  Am I actually on track?
                </h3>

                {/* Goal Metric Header */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#142823]">
                    <div className="size-7 rounded-lg bg-[#FFF3EB] border border-[#FCDCC8] flex items-center justify-center">
                      <Palmtree className="size-4 text-[#C96632]" />
                    </div>
                    <span>Family trip to Ladakh</span>
                  </div>
                  <span className="text-sm font-bold text-[#C96632] tabular-nums">
                    {boostGoal ? "55%" : "40%"}
                  </span>
                </div>

                {/* Progress bar Runway with multi-stage gradient */}
                <div className="mt-3">
                  <div className="w-full h-3 bg-[#E8E4DC] rounded-full overflow-hidden p-[1px] shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-[#24523F] via-[#A87238] to-[#E85D3F] rounded-full shadow-[0_1px_4px_rgba(201,102,50,0.35)] transition-all duration-500"
                      style={{ width: boostGoal ? "55%" : "40%" }}
                    />
                  </div>

                  {/* Saved vs Target metrics */}
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-[#53625C] tabular-nums">
                      {boostGoal ? "₹33,000" : "₹24,000"} of ₹60,000 saved
                    </span>
                    <span className="font-semibold text-[#C96632] tabular-nums">
                      {boostGoal ? "₹27,000 to go" : "₹36,000 to go"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Boost Simulation Toggle */}
              <div className="mt-4 pt-3 border-t border-[#F2EBE3]">
                <button
                  type="button"
                  onClick={() => setBoostGoal(!boostGoal)}
                  className="w-full flex items-center justify-between p-2 rounded-xl bg-[#FAF8F3] hover:bg-[#F5EFE4] border border-[#EADBBD] text-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5 text-[#5C4F44] font-medium">
                    <Sparkles className="size-3 text-[#C96632]" />
                    {boostGoal ? "Added ₹1,500/mo extra" : "Simulate +₹1,500/mo extra"}
                  </span>
                  <span className="text-[#C96632] font-bold">
                    {boostGoal ? "Finished 1 mo earlier" : "Try it"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

