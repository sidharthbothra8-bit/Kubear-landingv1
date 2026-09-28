import React, { useState } from "react";
import { ArrowRight, ArrowDownRight, ArrowUpRight } from "lucide-react";

export function ConnectedPlanningSection() {
  // Rent slider state: default ₹20,000 (can slide from ₹10,000 to ₹40,000)
  const [rent, setRent] = useState<number>(30000); // Set to ₹30,000 so it visually matches the exact "+₹10,000" example in the screenshot on load!

  const baseRent = 20000;
  const delta = rent - baseRent;

  // Connected calculations
  const baseSpend = 28000;
  const currentSpend = Math.max(8000, baseSpend - Math.round(delta * 1.0));

  const baseEmergencyMonths = 6;
  const currentEmergencyMonths = Math.min(12, Math.max(3, baseEmergencyMonths + Math.round(delta / 5000)));

  const baseInvest = 12000;
  const currentInvest = Math.max(3000, baseInvest - Math.round(delta * 0.3));

  // Home Goal calculation
  const monthsDelay = Math.round(delta / 1666);
  const homeGoalTarget = delta === 0 ? "Dec 2030" : delta > 0 ? (delta >= 10000 ? "Jun 2031" : "Feb 2031") : "Aug 2030";

  return (
    <section id="how-it-works" className="w-full py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#ECE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Rent Slider & Connected Consequences */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 1. Slider Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(20,25,35,0.05)] border border-[#ECE7DC]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#7A7D85]">Monthly rent</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#16191E] font-mono tabular-nums">
                  ₹{rent.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Slider Input */}
              <div className="py-4">
                <input
                  type="range"
                  min={10000}
                  max={40000}
                  step={1000}
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EFECE4] rounded-lg appearance-none cursor-pointer accent-[#F06535] focus:outline-none"
                  aria-label="Adjust monthly rent"
                />
                
                {/* Ticks */}
                <div className="flex justify-between text-[11px] font-medium text-[#8A8D96] mt-2 font-mono">
                  <span>0</span>
                  <span>₹10K</span>
                  <span>₹20K</span>
                  <span>₹30K</span>
                  <span>₹40K</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#F5F2EB]">
                <span className="text-[11px] font-semibold text-[#7A7D85] mr-1">Presets:</span>
                <button
                  type="button"
                  onClick={() => setRent(20000)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    rent === 20000 ? "bg-[#16191E] text-white" : "bg-[#F5F2EB] text-[#525660] hover:text-[#16191E]"
                  }`}
                >
                  ₹20K (Base)
                </button>
                <button
                  type="button"
                  onClick={() => setRent(30000)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    rent === 30000 ? "bg-[#16191E] text-white" : "bg-[#F5F2EB] text-[#525660] hover:text-[#16191E]"
                  }`}
                >
                  +₹10K
                </button>
                <button
                  type="button"
                  onClick={() => setRent(40000)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    rent === 40000 ? "bg-[#16191E] text-white" : "bg-[#F5F2EB] text-[#525660] hover:text-[#16191E]"
                  }`}
                >
                  +₹20K
                </button>
              </div>
            </div>

            {/* 2. Connected Consequences Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(20,25,35,0.05)] border border-[#ECE7DC] space-y-3.5">
              
              {/* Row 1: Available to spend */}
              <div className="flex items-center justify-between py-2 border-b border-[#F5F2EB]">
                <span className="text-xs sm:text-sm font-semibold text-[#16191E]">Available to spend</span>
                <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
                  <span className="text-[#8A8D96] line-through">₹28,000</span>
                  <span className="text-[#16191E]">→</span>
                  <span className="font-bold text-[#16191E] tabular-nums">
                    ₹{currentSpend.toLocaleString("en-IN")}
                  </span>
                  {delta !== 0 && (
                    <span className="inline-flex items-center text-[11px] font-bold text-[#E85D26] bg-[#FFF2EB] px-1.5 py-0.5 rounded-sm">
                      <ArrowDownRight className="size-3 mr-0.5" />
                      ₹{Math.abs(delta).toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Emergency fund */}
              <div className="flex items-center justify-between py-2 border-b border-[#F5F2EB]">
                <span className="text-xs sm:text-sm font-semibold text-[#16191E]">Emergency fund</span>
                <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
                  <span className="text-[#8A8D96] line-through">6 months</span>
                  <span className="text-[#16191E]">→</span>
                  <span className="font-bold text-[#16191E] tabular-nums">
                    {currentEmergencyMonths} months
                  </span>
                  {delta !== 0 && (
                    <span className="inline-flex items-center text-[11px] font-bold text-[#E85D26] bg-[#FFF2EB] px-1.5 py-0.5 rounded-sm">
                      <ArrowUpRight className="size-3 mr-0.5" />
                      {Math.abs(currentEmergencyMonths - baseEmergencyMonths)} months
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Home goal */}
              <div className="flex items-center justify-between py-2 border-b border-[#F5F2EB]">
                <span className="text-xs sm:text-sm font-semibold text-[#16191E]">Home goal</span>
                <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
                  <span className="text-[#8A8D96] line-through">Dec 2030</span>
                  <span className="text-[#16191E]">→</span>
                  <span className="font-bold text-[#E85D26] tabular-nums">
                    {homeGoalTarget}
                  </span>
                  {delta > 0 && (
                    <span className="inline-flex items-center text-[11px] font-bold text-[#E85D26] bg-[#FFF2EB] px-1.5 py-0.5 rounded-sm">
                      <ArrowUpRight className="size-3 mr-0.5" />
                      {monthsDelay || 6} months
                    </span>
                  )}
                </div>
              </div>

              {/* Row 4: Monthly investing */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs sm:text-sm font-semibold text-[#16191E]">Monthly investing</span>
                <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm">
                  <span className="text-[#8A8D96] line-through">₹12,000</span>
                  <span className="text-[#16191E]">→</span>
                  <span className="font-bold text-[#16191E] tabular-nums">
                    ₹{currentInvest.toLocaleString("en-IN")}
                  </span>
                  {delta !== 0 && (
                    <span className="inline-flex items-center text-[11px] font-bold text-[#E85D26] bg-[#FFF2EB] px-1.5 py-0.5 rounded-sm">
                      <ArrowDownRight className="size-3 mr-0.5" />
                      ₹{Math.abs(baseInvest - currentInvest).toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Confident Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8D96]">
              CONNECTED PLANNING
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#16191E] leading-[1.12]">
              What happens if you spend{" "}
              <span className="text-[#F06535]">₹10,000 more every month?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#525660] leading-relaxed font-normal max-w-xl">
              Change your rent, salary, EMI or goals and Kubear shows you what that means for the rest of your finances.
            </p>
            <div className="pt-2">
              <a
                href="https://kubear.kuberos.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#16191E] hover:bg-black text-white font-semibold text-sm transition-all shadow-xs hover:shadow-sm"
              >
                <span>Try it yourself</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
