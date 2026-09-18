import React from "react";
import { Lock, ShieldCheck, User, Users } from "lucide-react";

export function PersonalHouseholdSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-[#E8EFEA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-[clamp(0.75rem,2.5vw,2.5rem)] items-center">
          {/* Left Column: Heading and Subtitle */}
          <div data-reveal className="col-span-5">
            <span className="inline-flex items-center gap-1.5 px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.35rem)] rounded-full text-[clamp(0.65rem,0.8vw,0.75rem)] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-2 sm:mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              Privacy & Harmony
            </span>
            <h2 className="text-[clamp(1.15rem,2.3vw,2.25rem)] font-bold text-[#0E241E] tracking-tight leading-tight">
              Some money is yours.<br />
              Some plans are shared.
            </h2>
            <p className="text-[clamp(0.72rem,1vw,1rem)] text-[#5B6E66] mt-2 sm:mt-3 font-medium leading-relaxed">
              Maintain full autonomy over personal allowances, mutual funds, and discretionary spends while sharing joint rent and family budgets.
            </p>
          </div>

          {/* Right Column: Two Cards Side by Side - persistent 2 cols */}
          <div className="col-span-7 grid grid-cols-2 gap-[clamp(0.45rem,1.4vw,1.5rem)]">
            {/* Card 1: Personal (Neel Indigo) */}
            <div 
              data-reveal
              data-reveal-delay="1"
              className="kh-tactile-card rounded-[clamp(0.75rem,1.4vw,1rem)] p-[clamp(0.6rem,1.4vw,1.5rem)] flex flex-col justify-between group border-t-2 border-t-[#4F46E5] min-h-[clamp(140px,16vw,175px)]"
            >
              <div className="flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
                <div className="size-[clamp(2.25rem,4vw,3.25rem)] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border border-[#C7D2FE] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105">
                  <User className="size-[clamp(1.1rem,2vw,1.5rem)] text-[#4F46E5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[clamp(0.85rem,1.15vw,1rem)] font-bold text-[#0E241E] truncate">
                      Personal Vault
                    </h3>
                    <span className="inline-flex items-center gap-0.5 text-[clamp(7.5px,0.75vw,10px)] font-bold text-[#4F46E5] bg-[#EEF2FF] px-1.5 py-0.5 rounded-full border border-[#C7D2FE] shrink-0">
                      <Lock className="size-2 sm:size-2.5" /> Private
                    </span>
                  </div>
                  <p className="text-[clamp(8px,0.8vw,11.5px)] text-[#5B6E66] mt-1 leading-snug font-medium line-clamp-3 sm:line-clamp-none">
                    Your salary, personal credit cards, and investments stay strictly private by default.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Household (Surya Saffron) */}
            <div 
              data-reveal
              data-reveal-delay="2"
              className="kh-tactile-card rounded-[clamp(0.75rem,1.4vw,1rem)] p-[clamp(0.6rem,1.4vw,1.5rem)] flex flex-col justify-between group border-t-2 border-t-[#EA580C] min-h-[clamp(140px,16vw,175px)]"
            >
              <div className="flex items-start gap-[clamp(0.5rem,1vw,1rem)]">
                <div className="size-[clamp(2.25rem,4vw,3.25rem)] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] border border-[#FDBA74] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-105">
                  <Users className="size-[clamp(1.1rem,2vw,1.5rem)] text-[#EA580C]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[clamp(0.85rem,1.15vw,1rem)] font-bold text-[#0E241E] truncate">
                      Household Circle
                    </h3>
                    <span className="inline-flex items-center gap-0.5 text-[clamp(7.5px,0.75vw,10px)] font-bold text-[#EA580C] bg-[#FFF7ED] px-1.5 py-0.5 rounded-full border border-[#FFEDD5] shrink-0">
                      <ShieldCheck className="size-2 sm:size-2.5" /> Shared
                    </span>
                  </div>
                  <p className="text-[clamp(8px,0.8vw,11.5px)] text-[#5B6E66] mt-1 leading-snug font-medium line-clamp-3 sm:line-clamp-none">
                    Coordinate house rent, grocery accounts, school fees, and festival funds together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

