import React from "react";
import { User, Users } from "lucide-react";

export function PersonalHouseholdSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-[#E5EBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#142823] tracking-tight leading-tight">
              Some money is yours.<br />
              Some plans are shared.
            </h2>
            <p className="text-sm sm:text-base text-[#53625C] mt-3">
              Keep personal records private. Share what you choose.
            </p>
          </div>

          {/* Right Column: Two Cards Side by Side */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Personal */}
            <div className="kh-tactile-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 group">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#E6F3FD] to-[#D5EBFB] border border-[#C5E1F7] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(52,102,141,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-200 group-hover:scale-105">
                <User className="size-5 text-[#2C597D]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#142823]">
                  Personal
                </h3>
                <p className="text-xs text-[#53625C] mt-0.5 leading-snug">
                  Your information stays private by default.
                </p>
              </div>
            </div>

            {/* Card 2: Household */}
            <div className="kh-tactile-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 group">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#FEF0E4] to-[#FCE2CD] border border-[#F9D3B4] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(158,90,40,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-200 group-hover:scale-105">
                <Users className="size-5 text-[#8D4E20]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#142823]">
                  Household
                </h3>
                <p className="text-xs text-[#53625C] mt-0.5 leading-snug">
                  Share selected information with your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
