import React, { useState } from "react";
import { 
  Check, 
  CreditCard, 
  Home, 
  Coins, 
  Sparkles, 
  TrendingUp, 
  User,
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

export function ThreeQuestionsSection() {
  const [boostGoal, setBoostGoal] = useState(false);
  const [affordScenario, setAffordScenario] = useState<"iphone" | "trip">("iphone");

  return (
    <section id="your-money-questions" className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cultural Prosperity Container (Luminous Lotus Ivory with Saffron/Emerald Ambient Radiance) */}
        <div 
          data-reveal
          className="rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] p-6 sm:p-10 lg:p-12 border border-[#EADBCA] shadow-[inset_0_1.5px_0_rgba(255,255,255,1),0_12px_40px_-16px_rgba(234,88,12,0.08),0_20px_50px_-20px_rgba(5,150,105,0.08)] relative overflow-hidden"
        >
          {/* Subtle auspicious ambient glow orbs behind the cards */}
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-gradient-to-br from-[#FEF3C7]/40 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-gradient-to-tl from-[#ECFDF5]/50 to-transparent blur-3xl pointer-events-none" />

          {/* Section Header - persistently side-by-side */}
          <div className="flex flex-row items-baseline justify-between gap-4 pb-6 sm:pb-10 relative z-10">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.35rem)] rounded-full text-[clamp(0.65rem,0.8vw,0.75rem)] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-2 sm:mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <span className="size-1.5 rounded-full bg-[#EA580C] kh-live-dot" />
                Live Decision Clarity
              </span>
              <h2 className="text-[clamp(1.15rem,2.3vw,2.35rem)] font-bold text-[#0E241E] tracking-tight">
                The questions behind every money decision.
              </h2>
            </div>
            <p className="text-[clamp(0.72rem,1vw,0.95rem)] text-[#5B6E66] max-w-[40%] text-right font-medium shrink-0">
              Concrete answers with your EMIs, rent, and family commitments factored in.
            </p>
          </div>

          {/* 3 White Cards Grid - NEVER REARRANGE */}
          <div className="grid grid-cols-3 gap-[clamp(0.45rem,1.5vw,1.5rem)] relative z-10">
            {/* CARD 1: Can I afford it? (The Decision Engine - Kalyan Emerald) */}
            <div 
              data-reveal
              data-reveal-delay="1"
              className={`kh-tactile-card rounded-[clamp(0.85rem,1.4vw,1.25rem)] p-[clamp(0.65rem,1.4vw,1.75rem)] flex flex-col justify-between min-h-[clamp(310px,32vw,400px)] group transition-all duration-300 border-t-2 ${
                affordScenario === "iphone" ? "border-t-[#059669]" : "border-t-[#EA580C]"
              }`}
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-3 gap-1">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[clamp(8px,0.8vw,10.5px)] font-bold uppercase tracking-wider border transition-colors ${
                    affordScenario === "iphone"
                      ? "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]"
                      : "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]"
                  }`}>
                    <Sparkles className="size-2.5" />
                    Decision Check
                  </span>
                  <span className={`text-[clamp(8px,0.8vw,11px)] font-bold px-2 py-0.5 rounded-full border transition-colors whitespace-nowrap ${
                    affordScenario === "iphone"
                      ? "text-[#065F46] bg-[#D1FAE5] border-[#A7F3D0]"
                      : "text-[#EA580C] bg-[#FFF1EB] border-[#FDC2A5]"
                  }`}>
                    {affordScenario === "iphone" ? "Safe to Buy" : "Over Budget"}
                  </span>
                </div>

                <h3 className="text-[clamp(0.92rem,1.3vw,1.25rem)] font-bold font-sans text-[#0E241E]">
                  Can I afford this today?
                </h3>

                {/* Scenario Toggle Selector */}
                <div className="flex gap-1 mt-2.5 p-0.5 bg-[#F4EFE6] rounded-lg sm:rounded-xl">
                  <button
                    type="button"
                    onClick={() => setAffordScenario("iphone")}
                    className={`flex-1 py-1 px-1.5 text-[clamp(8.5px,0.85vw,11px)] font-bold rounded-md sm:rounded-lg transition-all cursor-pointer truncate ${
                      affordScenario === "iphone"
                        ? "bg-white text-[#0E241E] shadow-sm"
                        : "text-[#6E827A] hover:text-[#0E241E]"
                    }`}
                  >
                    iPhone EMI (₹6.5k)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAffordScenario("trip")}
                    className={`flex-1 py-1 px-1.5 text-[clamp(8.5px,0.85vw,11px)] font-bold rounded-md sm:rounded-lg transition-all cursor-pointer truncate ${
                      affordScenario === "trip"
                        ? "bg-white text-[#0E241E] shadow-sm"
                        : "text-[#6E827A] hover:text-[#0E241E]"
                    }`}
                  >
                    Goa Flight (₹16k)
                  </button>
                </div>

                {/* Live Math Breakdown Preview */}
                <div className="bg-[#F8FAF9] border border-[#E2EBE5] rounded-lg sm:rounded-xl p-2 sm:p-3 text-[clamp(8.5px,0.85vw,11.5px)] space-y-1 mt-2.5">
                  <div className="flex items-center justify-between text-[#42564F]">
                    <span className="truncate">Disposable cash</span>
                    <span className="font-semibold text-[#0E241E] tabular-nums shrink-0 ml-1">₹38,000</span>
                  </div>
                  <div className="flex items-center justify-between text-[#71857E]">
                    <span className="truncate">Rent + SIP + Bills</span>
                    <span className="font-semibold text-[#71857E] tabular-nums shrink-0 ml-1">-₹27,300</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold pt-1 border-t border-[#EAEFE9]">
                    <span className={`truncate ${affordScenario === "iphone" ? "text-[#047857]" : "text-[#EA580C]"}`}>
                      {affordScenario === "iphone" ? "New EMI: -₹6.5k" : "Trip: -₹16k"}
                    </span>
                    <span className={`tabular-nums shrink-0 ml-1 ${affordScenario === "iphone" ? "text-[#047857]" : "text-[#EA580C]"}`}>
                      {affordScenario === "iphone" ? "+₹4,200" : "-₹5,300"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Answer Box Verdict */}
              <div className={`rounded-lg sm:rounded-xl border p-2 sm:p-3.5 flex items-start gap-2 sm:gap-3 transition-all mt-2.5 ${
                affordScenario === "iphone"
                  ? "bg-gradient-to-br from-[#F0FDF4] via-[#E8F8EE] to-[#DCF5E5] border-[#B7E8C7] shadow-xs"
                  : "bg-gradient-to-br from-[#FFF9F5] via-[#FFF3EC] to-[#FFEBE0] border-[#FDD5BE] shadow-xs"
              }`}>
                <div className={`size-6 sm:size-8 rounded-full flex items-center justify-center shrink-0 shadow-sm mt-0.5 ${
                  affordScenario === "iphone" ? "bg-[#065F46]" : "bg-[#EA580C]"
                }`}>
                  <KubearLogo className="size-3 sm:size-4" inverse={true} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[clamp(0.9rem,1.3vw,1.15rem)] font-extrabold text-[#0E241E] tabular-nums tracking-tight">
                      {affordScenario === "iphone" ? "₹4,200" : "-₹5,300"}
                    </span>
                    <span className={`inline-flex items-center text-[clamp(7.5px,0.75vw,9.5px)] font-bold px-1.5 py-0.5 rounded-full border whitespace-nowrap ${
                      affordScenario === "iphone"
                        ? "text-[#065F46] bg-[#D1FAE5] border-[#A7F3D0]"
                        : "text-[#EA580C] bg-[#FFF1EB] border-[#FDC2A5]"
                    }`}>
                      {affordScenario === "iphone" ? (
                        <><Check className="size-2.5 mr-0.5" /> Safe</>
                      ) : (
                        <><Clock className="size-2.5 mr-0.5" /> Deficit</>
                      )}
                    </span>
                  </div>
                  <p className="text-[clamp(8.5px,0.85vw,11px)] mt-0.5 leading-snug font-medium text-[#42564F]">
                    {affordScenario === "iphone"
                      ? "Rent on 5th is 100% safe."
                      : "Dips into ₹25k rent fund."}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: What needs my attention next? (Timeline & Commitments - Surya Saffron) */}
            <div 
              data-reveal
              data-reveal-delay="2"
              className="kh-tactile-card rounded-[clamp(0.85rem,1.4vw,1.25rem)] p-[clamp(0.65rem,1.4vw,1.75rem)] flex flex-col justify-between min-h-[clamp(310px,32vw,400px)] group transition-all duration-300 border-t-2 border-t-[#EA580C]"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-3 gap-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[clamp(8px,0.8vw,10.5px)] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5]">
                    <span className="size-1.5 rounded-full bg-[#EA580C] kh-live-dot" />
                    Due in 7 Days
                  </span>
                  <span className="text-[clamp(8px,0.8vw,11px)] font-semibold text-[#EA580C] bg-[#FFF7ED] px-2 py-0.5 rounded-full whitespace-nowrap">
                    2 Scheduled
                  </span>
                </div>

                <h3 className="text-[clamp(0.92rem,1.3vw,1.25rem)] font-bold font-sans text-[#0E241E]">
                  What needs attention next?
                </h3>
                <p className="text-[clamp(8.5px,0.85vw,11px)] text-[#6E827A] mt-0.5 font-medium">
                  Obligations due before salary arrives on 1st.
                </p>

                {/* Ledger Items Stack */}
                <div className="space-y-2 mt-3">
                  {/* Item 1: Imminent HDFC Credit Card */}
                  <div className="flex items-center justify-between p-2 rounded-lg sm:rounded-xl bg-[#FFF9F5] border border-[#FDD5BE] transition-transform duration-200 group-hover:translate-x-0.5 shadow-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="size-7 sm:size-8 rounded-lg bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] border border-[#FDBA74] flex items-center justify-center text-[#EA580C] shadow-sm shrink-0">
                        <CreditCard className="size-3.5 sm:size-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[clamp(9px,0.85vw,11.5px)] font-bold text-[#0E241E] truncate">
                          HDFC Card Bill
                        </div>
                        <div className="text-[clamp(8px,0.8vw,10px)] text-[#8C644E] tabular-nums font-medium flex items-center gap-0.5 truncate">
                          <Calendar className="size-2.5 text-[#EA580C]" /> Due 16th
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-1.5">
                      <div className="text-[clamp(9.5px,0.9vw,12px)] font-extrabold text-[#0E241E] tabular-nums">
                        ₹14,250
                      </div>
                      <span className="inline-flex items-center text-[clamp(7.5px,0.75vw,9.5px)] font-bold text-[#EA580C] bg-[#FFF1EB] border border-[#FDC2A5] px-1 py-0.2 rounded">
                        In 3 days
                      </span>
                    </div>
                  </div>

                  {/* Item 2: Society Maintenance */}
                  <div className="flex items-center justify-between p-2 rounded-lg sm:rounded-xl bg-[#FAFDFB] border border-[#DFEBE3] transition-transform duration-200 group-hover:translate-x-0.5 shadow-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="size-7 sm:size-8 rounded-lg bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] shadow-sm shrink-0">
                        <Home className="size-3.5 sm:size-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[clamp(9px,0.85vw,11.5px)] font-bold text-[#0E241E] truncate">
                          Society & Cook
                        </div>
                        <div className="text-[clamp(8px,0.8vw,10px)] text-[#556C63] tabular-nums font-medium truncate">
                          Due 20 Sep
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-1.5">
                      <div className="text-[clamp(9.5px,0.9vw,12px)] font-extrabold text-[#0E241E] tabular-nums">
                        ₹7,500
                      </div>
                      <span className="inline-flex items-center text-[clamp(7.5px,0.75vw,9.5px)] font-medium text-[#6E827A]">
                        In 6 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reserved Status Footnote */}
              <div className="mt-3 pt-2.5 border-t border-[#EDE4D6] flex items-center justify-between text-[clamp(8.5px,0.85vw,11px)]">
                <span className="text-[#7D6F63] font-medium truncate">Protected in account</span>
                <span className="font-extrabold text-[#0E241E] tabular-nums bg-[#FFF8EE] px-1.5 py-0.5 rounded border border-[#F3E3CD] shrink-0 ml-1">
                  ₹21,750 marked
                </span>
              </div>
            </div>

            {/* CARD 3: Am I on track? (Goal Velocity & Festive Milestones - Utsav Gold) */}
            <div 
              data-reveal
              data-reveal-delay="3"
              className="kh-tactile-card rounded-[clamp(0.85rem,1.4vw,1.25rem)] p-[clamp(0.65rem,1.4vw,1.75rem)] flex flex-col justify-between min-h-[clamp(310px,32vw,400px)] group transition-all duration-300 border-t-2 border-t-[#D97706]"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-3 gap-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[clamp(8px,0.8vw,10.5px)] font-bold uppercase tracking-wider bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
                    <TrendingUp className="size-2.5 text-[#D97706]" />
                    Utsav & Goals
                  </span>
                  {boostGoal ? (
                    <span className="inline-flex items-center gap-0.5 text-[clamp(8px,0.8vw,11px)] font-bold text-[#065F46] bg-[#D1FAE5] border border-[#A7F3D0] px-2 py-0.5 rounded-full transition-all whitespace-nowrap">
                      <Check className="size-2.5" /> On Track
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 text-[clamp(8px,0.8vw,11px)] font-bold text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-2 py-0.5 rounded-full transition-all whitespace-nowrap">
                      <Clock className="size-2.5" /> Tight Pace
                    </span>
                  )}
                </div>

                <h3 className="text-[clamp(0.92rem,1.3vw,1.25rem)] font-bold font-sans text-[#0E241E]">
                  Am I on track for Diwali?
                </h3>

                {/* Goal Metric Header */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="size-7 sm:size-8 rounded-lg bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-[#FCD34D] flex items-center justify-center shadow-sm shrink-0">
                      <Coins className="size-3.5 sm:size-4 text-[#B45309]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[clamp(9.5px,0.9vw,12px)] font-bold text-[#0E241E] truncate">
                        Dhanteras Gold
                      </div>
                      <div className="text-[clamp(8px,0.8vw,10px)] text-[#7A684C] font-medium flex items-center gap-0.5 truncate">
                        <Calendar className="size-2.5 text-[#D97706]" /> Target: 29 Oct
                      </div>
                    </div>
                  </div>
                  <span className={`text-[clamp(0.95rem,1.3vw,1.15rem)] font-extrabold tabular-nums shrink-0 ml-1.5 transition-colors ${boostGoal ? "text-[#059669]" : "text-[#D97706]"}`}>
                    {boostGoal ? "85%" : "60%"}
                  </span>
                </div>

                {/* Progress bar Runway */}
                <div className="mt-2.5">
                  <div className="w-full h-2.5 bg-[#EFE9DF] rounded-full overflow-hidden p-[1px] shadow-inner">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        boostGoal 
                          ? "bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]" 
                          : "bg-gradient-to-r from-[#059669] via-[#D97706] to-[#EA580C]"
                      }`}
                      style={{ width: boostGoal ? "85%" : "60%" }}
                    />
                  </div>

                  {/* Saved vs Target metrics */}
                  <div className="flex items-center justify-between mt-1.5 text-[clamp(8px,0.8vw,10.5px)]">
                    <span className="text-[#556C63] tabular-nums font-medium truncate">
                      {boostGoal ? "₹59.5k" : "₹42k"} of ₹70k
                    </span>
                    <span className={`font-bold tabular-nums shrink-0 ml-1 ${boostGoal ? "text-[#059669]" : "text-[#EA580C]"}`}>
                      {boostGoal ? "₹10.5k left" : "₹28k left"}
                    </span>
                  </div>
                </div>

                {/* Real-time Forecast Callout */}
                <div className={`mt-2.5 p-2 rounded-lg border text-[clamp(8px,0.8vw,10.5px)] transition-all ${
                  boostGoal 
                    ? "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]" 
                    : "bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]"
                }`}>
                  <div className="flex items-center gap-1.5">
                    {boostGoal ? (
                      <>
                        <Check className="size-3 shrink-0 text-[#059669]" />
                        <span className="font-medium truncate">
                          Reaches ₹70k on <strong>24 Oct (early!)</strong>
                        </span>
                      </>
                    ) : (
                      <>
                        <Clock className="size-3 shrink-0 text-[#D97706]" />
                        <span className="font-medium truncate">
                          Completes on <strong>10 Nov (+12 days)</strong>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Interactive Boost Simulation Toggle Card */}
              <div className="mt-3 pt-2.5 border-t border-[#EDE4D6]">
                <button
                  type="button"
                  onClick={() => setBoostGoal(!boostGoal)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg sm:rounded-xl border transition-all cursor-pointer shadow-xs active:scale-[0.99] ${
                    boostGoal 
                      ? "bg-gradient-to-r from-[#F0FDF4] to-[#ECFDF5] border-[#A7F3D0]" 
                      : "bg-gradient-to-r from-[#FFFDF9] to-[#FEF8ED] hover:from-[#FEF5E7] hover:to-[#FDF0DE] border-[#F6DEB2]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-left min-w-0">
                    <div className={`size-6 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      boostGoal 
                        ? "bg-[#D1FAE5] border-[#A7F3D0] text-[#047857]" 
                        : "bg-[#FEF3C7] border-[#FDE68A] text-[#D97706]"
                    }`}>
                      <Sparkles className="size-3" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[clamp(8.5px,0.85vw,11px)] font-bold text-[#0E241E] truncate">
                        +₹2.5k/mo SIP
                      </div>
                      <div className="text-[clamp(7.5px,0.75vw,9.5px)] text-[#6E827A] font-medium truncate">
                        {boostGoal ? "Boost active" : "Festive booster"}
                      </div>
                    </div>
                  </div>
                  <span className={`shrink-0 ml-1.5 whitespace-nowrap text-[clamp(8px,0.8vw,10.5px)] font-bold px-2 py-1 rounded-md border transition-all ${
                    boostGoal 
                      ? "bg-[#059669] text-white border-[#047857]" 
                      : "bg-white text-[#EA580C] border-[#FDBA74] hover:bg-[#FFF7ED]"
                  }`}>
                    {boostGoal ? "Active ✓" : "Try Boost"}
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


