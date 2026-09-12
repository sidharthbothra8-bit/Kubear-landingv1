import React from "react";
import { ArrowRight, BarChart3, Check, FileText, Sparkles } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 border-t border-[#E5EBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-10 sm:pb-14">
          <div>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#C96632] mb-2">
              Three simple steps
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#142823] tracking-tight">
              Start with what you know.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7D8D86] max-w-md sm:text-right">
            It only takes a few minutes to get a clearer picture of your money.
          </p>
        </div>

        {/* 3 Steps in a Row with Continuous Flow */}
        <div className="relative">
          {/* Subtle horizontal connecting line behind the cards on desktop */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#F5DACB] via-[#E2EAE4] to-[#CDE4D6] pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {/* STEP 1 */}
            <div className="kh-tactile-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group min-h-[310px]">
              <div>
                {/* Header: Consolidated Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-[#FFF7F2] to-[#FDE8DC] border border-[#FAD7C2] text-[#C96632] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(201,102,50,0.12)] transition-transform duration-200 group-hover:scale-105">
                      <FileText className="size-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C96632] block">
                        Step 01
                      </span>
                      <span className="text-xs text-[#7A6B63] font-medium">
                        Input
                      </span>
                    </div>
                  </div>

                  {/* Flow indicator to next step */}
                  <span className="hidden md:inline-flex items-center text-xs font-semibold text-[#C96632] bg-[#FFF4EE] border border-[#FCDAC7] px-2.5 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    Next <ArrowRight className="size-3 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-[#142823] mt-5">
                  Tell Kubear.
                </h3>
                <p className="text-sm text-[#53625C] mt-2 leading-relaxed">
                  Add what matters: income, bills, savings, goals, and more. No complex setup required.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible User Input */}
              <div className="mt-6 pt-4 border-t border-[#F2EBE3]">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#8F7D73] uppercase tracking-wider mb-2">
                  <span>What you add</span>
                  <span className="text-[#C96632] font-semibold">Step 1</span>
                </div>
                <div className="inline-flex items-center w-full px-3 py-2 rounded-xl bg-[#FFF9F5] border border-[#F5DACB] text-xs font-semibold text-[#142823] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-2 rounded-full bg-[#E85D3F] mr-2.5 shrink-0" />
                  <span className="truncate">Salary ₹75,000 · Rent ₹18,000</span>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="kh-tactile-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group min-h-[310px]">
              <div>
                {/* Header: Consolidated Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-[#F5F9F6] to-[#E5F1E8] border border-[#D5E8DA] text-[#24523F] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(36,82,63,0.08)] transition-transform duration-200 group-hover:scale-105">
                      <Sparkles className="size-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#24523F] block">
                        Step 02
                      </span>
                      <span className="text-xs text-[#63756C] font-medium">
                        Processing
                      </span>
                    </div>
                  </div>

                  {/* Flow indicator to next step */}
                  <span className="hidden md:inline-flex items-center text-xs font-semibold text-[#24523F] bg-[#EEF6F0] border border-[#D5EADC] px-2.5 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    Next <ArrowRight className="size-3 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-[#142823] mt-5">
                  Review the details.
                </h3>
                <p className="text-sm text-[#53625C] mt-2 leading-relaxed">
                  We’ll make sense of it, link your recurring expenses, and connect the dots for you automatically.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible Auto-Connection */}
              <div className="mt-6 pt-4 border-t border-[#E8EEE9]">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7D74] uppercase tracking-wider mb-2">
                  <span>How Kubear connects it</span>
                  <span className="text-[#24523F] font-semibold">Step 2</span>
                </div>
                <div className="inline-flex items-center w-full px-3 py-2 rounded-xl bg-[#F4F9F5] border border-[#D6EADB] text-xs font-semibold text-[#142823] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-2 rounded-full bg-[#3D7A5D] mr-2.5 shrink-0" />
                  <span className="truncate">Rent → Fixed Need · ₹32k free</span>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="kh-tactile-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group min-h-[310px]">
              <div>
                {/* Header: Consolidated Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-[#F5EEDD] border border-[#EADBBD] text-[#8C6424] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(140,100,36,0.1)] transition-transform duration-200 group-hover:scale-105">
                      <BarChart3 className="size-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6424] block">
                        Step 03
                      </span>
                      <span className="text-xs text-[#7D705B] font-medium">
                        Clarity
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-xs font-bold text-[#24523F] bg-[#E9F5EC] border border-[#CDE5D4] px-2.5 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <Check className="size-3 mr-1 text-[#24523F]" /> Ready
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-[#142823] mt-5">
                  See what it means.
                </h3>
                <p className="text-sm text-[#53625C] mt-2 leading-relaxed">
                  Get simple, personalised answers to your biggest money questions without second guessing.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible Verdict */}
              <div className="mt-6 pt-4 border-t border-[#EDE7D9]">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#7D705B] uppercase tracking-wider mb-2">
                  <span>Your clear answer</span>
                  <span className="text-[#8C6424] font-semibold">Step 3</span>
                </div>
                <div className="inline-flex items-center w-full px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#E9DDC2] text-xs font-bold text-[#142823] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-2 rounded-full bg-[#8C6424] mr-2.5 shrink-0" />
                  <span className="truncate">₹3,000 left for your weekend plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

