import React from "react";
import { ArrowRight, BarChart3, Check, FileText, Sparkles } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14 sm:py-18 lg:py-24 border-t border-[#E8EFEA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - persistently side-by-side */}
        <div className="flex flex-row items-baseline justify-between gap-4 pb-8 sm:pb-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.35rem)] rounded-full text-[clamp(0.65rem,0.8vw,0.75rem)] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              Three simple steps
            </span>
            <h2 className="text-[clamp(1.2rem,2.4vw,2.25rem)] font-bold text-[#0E241E] tracking-tight">
              Start with what you know.
            </h2>
          </div>
          <p className="text-[clamp(0.72rem,1.1vw,1rem)] text-[#5B6E66] max-w-[45%] text-right font-medium shrink-0">
            It only takes two minutes to bring total harmony to your monthly commitments.
          </p>
        </div>

        {/* 3 Steps in a Row with Continuous Flow - NEVER REARRANGE */}
        <div className="relative">
          {/* Connecting line behind cards - always visible */}
          <div className="block absolute top-9 sm:top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#FFD8B5] via-[#A7F3D0] to-[#FDE68A] pointer-events-none z-0" />

          <div className="grid grid-cols-3 gap-[clamp(0.5rem,1.6vw,2rem)] relative z-10">
            {/* STEP 1: Surya Saffron */}
            <div 
              data-reveal
              data-reveal-delay="1"
              className="kh-tactile-card rounded-[clamp(0.85rem,1.5vw,1.25rem)] p-[clamp(0.75rem,1.6vw,1.75rem)] flex flex-col justify-between group min-h-[clamp(240px,26vw,340px)] border-t-2 border-t-[#EA580C]"
            >
              <div>
                {/* Header: Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-[clamp(34px,3.8vw,48px)] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] border border-[#FDBA74] text-[#EA580C] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_12px_rgba(234,88,12,0.15)] transition-transform duration-200 group-hover:scale-105 shrink-0">
                      <FileText className="size-[clamp(15px,1.6vw,20px)]" />
                    </div>
                    <div>
                      <span className="text-[clamp(9px,0.85vw,11px)] font-extrabold uppercase tracking-wider text-[#EA580C] block">
                        Step 01
                      </span>
                      <span className="text-[clamp(10px,0.9vw,12px)] text-[#7A6B63] font-medium">
                        Quick Add
                      </span>
                    </div>
                  </div>

                  {/* Flow indicator to next step */}
                  <span className="inline-flex items-center text-[clamp(9px,0.8vw,11px)] font-semibold text-[#EA580C] bg-[#FFF7ED] border border-[#FFEDD5] px-2 py-0.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    Next <ArrowRight className="size-2.5 sm:size-3 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h3 className="text-[clamp(0.95rem,1.35vw,1.25rem)] font-bold font-sans text-[#0E241E] mt-3 sm:mt-5">
                  Tell Kubear.
                </h3>
                <p className="text-[clamp(0.72rem,0.95vw,0.875rem)] text-[#42564F] mt-1 sm:mt-2 leading-relaxed font-medium">
                  Add salary, SIPs, rent, and card bills. No bank passwords needed.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible User Input */}
              <div className="mt-4 pt-3 border-t border-[#F2EBE3]">
                <div className="flex items-center justify-between text-[clamp(8.5px,0.8vw,10.5px)] font-bold text-[#8C644E] uppercase tracking-wider mb-1.5">
                  <span>What you enter</span>
                  <span className="text-[#EA580C] font-extrabold">Step 1</span>
                </div>
                <div className="inline-flex items-center w-full px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-[#FFF9F5] border border-[#FDD5BE] text-[clamp(8.5px,0.9vw,11.5px)] font-bold text-[#0E241E] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-1.5 sm:size-2 rounded-full bg-[#EA580C] mr-2 shrink-0 kh-live-dot" />
                  <span className="truncate">Salary ₹85k · Rent ₹22k · SIP ₹15k</span>
                </div>
              </div>
            </div>

            {/* STEP 2: Kalyan Emerald */}
            <div 
              data-reveal
              data-reveal-delay="2"
              className="kh-tactile-card rounded-[clamp(0.85rem,1.5vw,1.25rem)] p-[clamp(0.75rem,1.6vw,1.75rem)] flex flex-col justify-between group min-h-[clamp(240px,26vw,340px)] border-t-2 border-t-[#059669]"
            >
              <div>
                {/* Header: Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-[clamp(34px,3.8vw,48px)] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_12px_rgba(5,150,105,0.15)] transition-transform duration-200 group-hover:scale-105 shrink-0">
                      <Sparkles className="size-[clamp(15px,1.6vw,20px)]" />
                    </div>
                    <div>
                      <span className="text-[clamp(9px,0.85vw,11px)] font-extrabold uppercase tracking-wider text-[#059669] block">
                        Step 02
                      </span>
                      <span className="text-[clamp(10px,0.9vw,12px)] text-[#556C63] font-medium">
                        Smart Link
                      </span>
                    </div>
                  </div>

                  {/* Flow indicator to next step */}
                  <span className="inline-flex items-center text-[clamp(9px,0.8vw,11px)] font-semibold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    Next <ArrowRight className="size-2.5 sm:size-3 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h3 className="text-[clamp(0.95rem,1.35vw,1.25rem)] font-bold font-sans text-[#0E241E] mt-3 sm:mt-5">
                  Review the link.
                </h3>
                <p className="text-[clamp(0.72rem,0.95vw,0.875rem)] text-[#42564F] mt-1 sm:mt-2 leading-relaxed font-medium">
                  We categorize commitments and shield what must be reserved before month-end.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible Auto-Connection */}
              <div className="mt-4 pt-3 border-t border-[#E2EBE5]">
                <div className="flex items-center justify-between text-[clamp(8.5px,0.8vw,10.5px)] font-bold text-[#556C63] uppercase tracking-wider mb-1.5">
                  <span>How Kubear shields it</span>
                  <span className="text-[#059669] font-extrabold">Step 2</span>
                </div>
                <div className="inline-flex items-center w-full px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-[#F0FDF4] border border-[#B7E8C7] text-[clamp(8.5px,0.9vw,11.5px)] font-bold text-[#0E241E] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-1.5 sm:size-2 rounded-full bg-[#059669] mr-2 shrink-0 kh-live-dot" />
                  <span className="truncate">Rent + SIP Locked · ₹48k headroom</span>
                </div>
              </div>
            </div>

            {/* STEP 3: Utsav Gold */}
            <div 
              data-reveal
              data-reveal-delay="3"
              className="kh-tactile-card rounded-[clamp(0.85rem,1.5vw,1.25rem)] p-[clamp(0.75rem,1.6vw,1.75rem)] flex flex-col justify-between group min-h-[clamp(240px,26vw,340px)] border-t-2 border-t-[#D97706]"
            >
              <div>
                {/* Header: Step Milestone + Icon Pod */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-[clamp(34px,3.8vw,48px)] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-[#FCD34D] text-[#B45309] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_12px_rgba(217,119,6,0.18)] transition-transform duration-200 group-hover:scale-105 shrink-0">
                      <BarChart3 className="size-[clamp(15px,1.6vw,20px)]" />
                    </div>
                    <div>
                      <span className="text-[clamp(9px,0.85vw,11px)] font-extrabold uppercase tracking-wider text-[#B45309] block">
                        Step 03
                      </span>
                      <span className="text-[clamp(10px,0.9vw,12px)] text-[#7A684C] font-medium">
                        Instant Peace
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-[clamp(9px,0.8vw,11px)] font-extrabold text-[#065F46] bg-[#D1FAE5] border border-[#A7F3D0] px-2 py-0.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <Check className="size-2.5 sm:size-3 mr-0.5 text-[#065F46]" /> Clear
                  </span>
                </div>

                <h3 className="text-[clamp(0.95rem,1.35vw,1.25rem)] font-bold font-sans text-[#0E241E] mt-3 sm:mt-5">
                  Decide with joy.
                </h3>
                <p className="text-[clamp(0.72rem,0.95vw,0.875rem)] text-[#42564F] mt-1 sm:mt-2 leading-relaxed font-medium">
                  Know exactly how much you can spend on weekend dining, festivals, or holidays without anxiety.
                </p>
              </div>

              {/* Bottom Micro-Artifact: Tangible Verdict */}
              <div className="mt-4 pt-3 border-t border-[#F2EBE3]">
                <div className="flex items-center justify-between text-[clamp(8.5px,0.8vw,10.5px)] font-bold text-[#7A684C] uppercase tracking-wider mb-1.5">
                  <span>Your clear answer</span>
                  <span className="text-[#D97706] font-extrabold">Step 3</span>
                </div>
                <div className="inline-flex items-center w-full px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-[#FFFDF9] border border-[#FDE68A] text-[clamp(8.5px,0.9vw,11.5px)] font-bold text-[#0E241E] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <span className="size-1.5 sm:size-2 rounded-full bg-[#D97706] mr-2 shrink-0 kh-live-dot" />
                  <span className="truncate">₹5,400 safe for Diwali shopping this weekend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


