import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { KubearLogo } from "@/components/KubearLogo";

interface QAData {
  id: string;
  question: string;
  answerHeadline: string;
  answerText: string;
  spend: string;
  emergency: string;
  homeGoal: string;
}

const questionsData: QAData[] = [
  {
    id: "rent-gurgaon",
    question: "Can I afford ₹30,000 rent in Gurgaon?",
    answerHeadline: "Yes, you can.",
    answerText: "With a ₹30,000 rent, you'll still be able to meet your monthly expenses, continue your investments and stay on track for your goals.",
    spend: "₹18,000",
    emergency: "Stays on track",
    homeGoal: "Delayed by 1 month",
  },
  {
    id: "raise",
    question: "I got a ₹3 lakh raise. How much can I spend more?",
    answerHeadline: "₹14,500/month comfortably.",
    answerText: "After tax and proportional SIP step-ups, you have ₹14,500 in clean disposable headroom without slowing down any future milestones.",
    spend: "₹42,500",
    emergency: "Fully cushioned",
    homeGoal: "Accelerated by 5 months",
  },
  {
    id: "home-next-year",
    question: "Can we afford a home next year?",
    answerHeadline: "Needs 4 more months of savings.",
    answerText: "At your current savings rate, your down-payment corpus reaches the recommended 20% by next spring without touching your emergency reserve.",
    spend: "₹24,000",
    emergency: "Stays on track",
    homeGoal: "On track for Spring 2027",
  },
  {
    id: "trip-goals",
    question: "If I take this trip, will my other goals still be okay?",
    answerHeadline: "Yes, with zero delay.",
    answerText: "A ₹75,000 trip fits neatly within your flexible travel buffer and leaves your monthly SIPs and emergency fund completely untouched.",
    spend: "₹16,500",
    emergency: "100% protected",
    homeGoal: "Stays on track",
  },
];

export function AskKubearSection() {
  const [selectedId, setSelectedId] = useState<string>("rent-gurgaon");
  const [customInput, setCustomInput] = useState<string>("");

  const activeQA = questionsData.find((q) => q.id === selectedId) || questionsData[0];

  return (
    <section id="ask" className="w-full py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#ECE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Questions List */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8D96] mb-3">
                ASK KUBEAR
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#16191E] leading-[1.12]">
                Ask the questions you <span className="text-[#F06535]">actually have.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#525660] leading-relaxed font-normal mt-4 max-w-xl">
                Kubear answers using your actual finances, not a generic rule.
              </p>
            </div>

            {/* 4 Example Questions as Interactive Buttons */}
            <div className="space-y-3 pt-2">
              {questionsData.map((q) => {
                const isSelected = q.id === selectedId;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setSelectedId(q.id)}
                    className={`w-full p-4 sm:p-4.5 rounded-2xl text-left flex items-center justify-between transition-all duration-200 border ${
                      isSelected
                        ? "bg-white text-[#16191E] border-[#E0D7C8] shadow-sm ring-1 ring-[#16191E]/10"
                        : "bg-white/60 hover:bg-white text-[#4A4E58] border-transparent hover:border-[#ECE7DC]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold pr-3">
                      {q.question}
                    </span>
                    <div className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "bg-[#16191E] text-white" : "bg-[#F3EFE6] text-[#7A7D85]"
                    }`}>
                      <ArrowRight className="size-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Kubear Product Chat Interface */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(20,25,35,0.06)] border border-[#ECE7DC] flex flex-col justify-between min-h-[460px]">
              
              <div className="space-y-5">
                {/* User Prompt Bubble (Top Right) */}
                <div className="flex justify-end">
                  <div className="bg-[#FAF8F5] border border-[#ECE7DC] text-[#16191E] px-4 py-2.5 rounded-2xl rounded-tr-xs text-xs sm:text-[13px] font-semibold max-w-[85%] shadow-xs">
                    {activeQA.question}
                  </div>
                </div>

                {/* Assistant Answer Box */}
                <div className="space-y-4">
                  
                  {/* Avatar + Main Answer Heading */}
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-[#FFF2EB] border border-[#FADCCB] flex items-center justify-center shrink-0 mt-0.5">
                      <KubearLogo className="size-5 w-auto aspect-[470/365]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#16191E]">
                        {activeQA.answerHeadline}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#525660] leading-relaxed mt-1 font-normal">
                        {activeQA.answerText}
                      </p>
                    </div>
                  </div>

                  {/* Consequences Box */}
                  <div className="bg-[#FAF8F5] border border-[#EBE6DC] rounded-2xl p-4 sm:p-4.5 space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EFECE4]">
                      <span className="text-[#7A7D85] font-medium">Available to spend</span>
                      <span className="font-bold font-mono text-[#16191E] tabular-nums text-sm">
                        {activeQA.spend}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EFECE4]">
                      <span className="text-[#7A7D85] font-medium">Emergency fund</span>
                      <span className="font-bold text-[#525660]">
                        {activeQA.emergency}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#7A7D85] font-medium">Home goal</span>
                      <span className="font-bold text-[#E85D26]">
                        {activeQA.homeGoal}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Input Field */}
              <div className="pt-6 mt-4 border-t border-[#F5F2EB]">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (customInput.trim()) {
                      setSelectedId("rent-gurgaon"); // keeps answer coherent
                      setCustomInput("");
                    }
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-full bg-[#FAF8F5] border border-[#EBE6DC] text-xs sm:text-sm text-[#16191E] placeholder:text-[#A0A4AD] focus:outline-none focus:border-[#16191E]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 size-8 rounded-full bg-[#16191E] hover:bg-black text-white flex items-center justify-center transition-colors"
                    aria-label="Submit question"
                  >
                    <ArrowRight className="size-3.5" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
