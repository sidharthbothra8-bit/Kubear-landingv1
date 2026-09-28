import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Target, Wallet, Users } from "lucide-react";

export function HouseholdSection() {
  const [tab, setTab] = useState<"mine" | "household">("household");

  return (
    <section id="household" className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#ECE7DC] overflow-hidden">
      
      {/* Subtle organic room plant leaf silhouette in bottom-left background */}
      <div 
        aria-hidden="true"
        className="absolute -bottom-10 -left-12 w-64 h-80 pointer-events-none opacity-20 select-none z-0"
      >
        <svg viewBox="0 0 200 300" className="w-full h-full fill-[#4A5D4E]">
          <path d="M 0 300 Q 80 200 120 120 Q 90 180 0 260 Z" />
          <path d="M 20 280 Q 140 180 180 80 Q 130 150 20 250 Z" />
          <path d="M 0 240 Q 90 140 130 40 Q 90 110 0 210 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: One Large Mobile/Product UI */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] transform lg:-rotate-2 transition-transform duration-300 hover:rotate-0">
              
              {/* Soft device drop shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F1E8DC] to-transparent rounded-[52px] filter blur-xl opacity-70 pointer-events-none -z-10" />

              {/* Hardware Device Chassis */}
              <div className="rounded-[44px] p-3 sm:p-3.5 bg-[#1C1F26] shadow-[0_25px_60px_-15px_rgba(20,25,35,0.3),0_0_0_1px_rgba(255,255,255,0.12)_inset]">
                
                {/* Inner Screen */}
                <div className="rounded-[36px] bg-[#FAF8F5] pt-7 pb-6 px-5 text-[#16191E] select-none border border-[#EBE6DC]">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#8A8D96] px-1 mb-4">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px]">5G</span>
                      <div className="w-5 h-2.5 border border-[#8A8D96] rounded-xs p-0.5 flex items-center">
                        <div className="w-full h-full bg-[#8A8D96] rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Header */}
                  <div className="flex items-center gap-1.5 mb-5 text-[#16191E]">
                    <ChevronLeft className="size-4" />
                    <span className="text-xs font-bold">Household</span>
                  </div>

                  {/* Segmented Control: Mine | Household */}
                  <div className="bg-[#EFECE4] p-1 rounded-full flex items-center mb-6">
                    <button
                      type="button"
                      onClick={() => setTab("mine")}
                      className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${
                        tab === "mine" ? "bg-white text-[#16191E] shadow-xs" : "text-[#7A7D85] hover:text-[#16191E]"
                      }`}
                    >
                      Mine
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("household")}
                      className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${
                        tab === "household" ? "bg-white text-[#16191E] shadow-xs" : "text-[#7A7D85] hover:text-[#16191E]"
                      }`}
                    >
                      Household
                    </button>
                  </div>

                  {/* Household Total */}
                  <div className="mb-6 px-1">
                    <p className="text-xs font-semibold text-[#7A7D85]">
                      {tab === "household" ? "Household total" : "Personal total"}
                    </p>
                    <p className="text-3xl font-extrabold text-[#16191E] tracking-tight mt-1 font-mono tabular-nums">
                      {tab === "household" ? "₹1,26,00,000" : "₹42,50,000"}
                    </p>
                  </div>

                  {/* List Rows */}
                  <div className="space-y-2.5">
                    
                    {/* Row 1: Goals */}
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EBE6DC] shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-xl bg-[#FFF2EB] text-[#F06535] flex items-center justify-center">
                          <Target className="size-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#16191E]">
                          Our goals
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#525660]">
                        <span>3 goals</span>
                        <ChevronRight className="size-3.5 text-[#C4C6CC]" />
                      </div>
                    </div>

                    {/* Row 2: Shared Expenses */}
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EBE6DC] shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-xl bg-[#FFF2EB] text-[#F06535] flex items-center justify-center">
                          <Wallet className="size-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#16191E]">
                          Shared expenses
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#525660]">
                        <span>₹46,000 / month</span>
                        <ChevronRight className="size-3.5 text-[#C4C6CC]" />
                      </div>
                    </div>

                    {/* Row 3: Family Members */}
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EBE6DC] shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-xl bg-[#FFF2EB] text-[#F06535] flex items-center justify-center">
                          <Users className="size-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#16191E]">
                          Family members
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#525660]">
                        <span>3 people</span>
                        <ChevronRight className="size-3.5 text-[#C4C6CC]" />
                      </div>
                    </div>

                  </div>

                  {/* Indicator bar */}
                  <div className="w-24 h-1 bg-[#16191E]/20 rounded-full mx-auto mt-6" />

                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Confident Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8D96]">
              HOUSEHOLD
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#16191E] leading-[1.12]">
              Your money can be{" "}
              <span className="text-[#F06535]">personal</span> and{" "}
              <span className="text-[#F06535]">shared</span> at the same time.
            </h2>
            <p className="text-base sm:text-lg text-[#525660] leading-relaxed font-normal max-w-xl">
              Keep your own finances private while managing shared expenses, goals and responsibilities with your partner or family.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
