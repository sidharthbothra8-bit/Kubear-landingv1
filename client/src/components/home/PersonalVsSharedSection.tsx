import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Lock, Home, ShoppingCart, Wifi, Sprout, CreditCard, Target, ShieldCheck, ArrowDown } from "lucide-react";

export function PersonalVsSharedSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  // Dual lens slide and convergence linked to scroll
  const leftX = useTransform(scrollYProgress, [0.05, 0.45], [-35, 0]);
  const rightX = useTransform(scrollYProgress, [0.05, 0.45], [35, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0.3, 1]);

  // Dynamic proportional calculation linked to scroll progression
  // Shifts smoothly from 50/50 to 60/40 proportional split
  const userRatio = useTransform(scrollYProgress, [0.15, 0.75], [50, 60]);
  const totalHouseholdExpense = 92000;
  
  const userShareText = useTransform(userRatio, (r) => `₹${Math.round((totalHouseholdExpense * r) / 100).toLocaleString("en-IN")}`);
  const partnerShareText = useTransform(userRatio, (r) => `₹${Math.round((totalHouseholdExpense * (100 - r)) / 100).toLocaleString("en-IN")}`);
  const splitRatioLabel = useTransform(userRatio, (r) => `${Math.round(r)}% : ${Math.round(100 - r)}%`);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="shared"
    >
      {/* Soft warm ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-gradient-to-r from-amber-100/30 via-emerald-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-l from-orange-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Modern Indian Partnership
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]">
            Some money is <span className="text-[#059669] italic font-serif">yours</span>.<br />
            Some money is <span className="text-[#EA580C] italic font-serif">family</span>.
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              Indian couples share rent, groceries, and school fees without surrendering individual financial autonomy. As you scroll, observe how the proportional split balances automatically while keeping private accounts strictly sealed.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#516761]">
              <span className="text-[11px] uppercase tracking-wider">Scroll down to synchronize the dual lenses</span>
              <ArrowDown className="size-3 text-[#059669] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Dual Cards Container: Left Household View, Right Personal View */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ========================================================================= */}
          {/* LEFT: HOUSEHOLD VIEW                                                      */}
          {/* ========================================================================= */}
          <motion.div
            style={{ x: leftX, opacity: cardsOpacity }}
            className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-8 shadow-[0_12px_36px_rgba(18,54,48,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] text-xs font-bold uppercase tracking-wider mb-3">
                <Users className="size-3.5" />
                <span>Shared Household Lens</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123630]">
                Family Vault
              </h3>
              <p className="text-sm text-[#516761] font-medium mt-2">
                Shared obligations split equitably based on income proportion, eliminating monthly bill friction.
              </p>

              {/* Shared Pool Total & Scroll-Linked Proportions */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-[#516761] font-bold">Total Shared Monthly Need</span>
                  <span className="font-serif font-bold text-lg text-[#123630]">₹92,000</span>
                </div>

                <div className="pt-2 border-t border-[#EADBCA]/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#516761] block">Your Contribution</span>
                    <motion.span className="font-serif font-bold text-sm sm:text-base text-[#EA580C] tabular-nums">
                      {userShareText}
                    </motion.span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#516761] block">Partner Contribution</span>
                    <motion.span className="font-serif font-bold text-sm sm:text-base text-[#123630] tabular-nums">
                      {partnerShareText}
                    </motion.span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] font-semibold text-[#059669]">
                  <span>Dynamic Income Split:</span>
                  <motion.span className="font-mono font-bold">{splitRatioLabel}</motion.span>
                </div>
              </div>

              {/* Breakdown of Shared Items */}
              <div className="space-y-2 pt-4 text-xs font-semibold text-[#123630]">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F0]">
                  <div className="flex items-center gap-2">
                    <Home className="size-3.5 text-[#EA580C]" />
                    <span>Apartment Rent & Maintenance</span>
                  </div>
                  <span className="font-serif font-bold">₹55,000</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F0]">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="size-3.5 text-[#EA580C]" />
                    <span>Monthly Groceries & Cook</span>
                  </div>
                  <span className="font-serif font-bold">₹28,000</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F0]">
                  <div className="flex items-center gap-2">
                    <Wifi className="size-3.5 text-[#EA580C]" />
                    <span>Utilities, Electricity & WiFi</span>
                  </div>
                  <span className="font-serif font-bold">₹9,000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FAF7F0] flex items-center justify-between text-xs text-[#EA580C] font-bold">
              <span>Synchronized in real-time</span>
              <span className="bg-[#FFF7ED] px-2.5 py-1 rounded-full border border-[#FFEDD5]">Shared View</span>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT: PERSONAL VIEW (Strictly private)                                   */}
          {/* ========================================================================= */}
          <motion.div
            style={{ x: rightX, opacity: cardsOpacity }}
            className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-8 shadow-[0_12px_36px_rgba(18,54,48,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4EA] border border-[#A7F3D0] text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3">
                <Lock className="size-3.5" />
                <span>Completely Private Lens</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123630]">
                Personal View
              </h3>
              <p className="text-sm text-[#516761] font-medium mt-2">
                Your mutual funds, personal dining, solo trips: strictly private, encrypted, and invisible to anyone else.
              </p>

              {/* Personal Commitments Badges */}
              <div className="space-y-2.5 pt-5 text-xs sm:text-sm font-semibold text-[#123630]">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                  <div className="flex items-center gap-2.5">
                    <Sprout className="size-4 text-[#059669]" />
                    <span>Your Investment Portfolio</span>
                  </div>
                  <span className="text-[11px] text-[#065F46] font-bold bg-[#E6F4EA] px-2 py-0.5 rounded-full">
                    Private SIPs & Stocks
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="size-4 text-[#059669]" />
                    <span>Guilt-Free Personal Spending</span>
                  </div>
                  <span className="text-[11px] text-[#516761] font-normal">
                    Solo hobbies & gifts
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70">
                  <div className="flex items-center gap-2.5">
                    <Target className="size-4 text-[#059669]" />
                    <span>Individual Life Goals</span>
                  </div>
                  <span className="text-[11px] text-[#516761] font-normal">
                    Gadgets, career courses
                  </span>
                </div>
              </div>

              {/* Privacy Guarantee callout */}
              <div className="mt-5 p-3.5 rounded-2xl bg-[#E6F4EA]/70 border border-[#A7F3D0] flex items-center gap-2.5 text-xs text-[#065F46] font-semibold">
                <ShieldCheck className="size-4 text-[#059669] shrink-0" />
                <span>Zero transactional visibility across shared accounts. Only agreed vault allocations are visible.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FAF7F0] flex items-center justify-between text-xs text-[#065F46] font-bold">
              <span>Complete boundary safety</span>
              <span className="bg-[#E6F4EA] px-2.5 py-1 rounded-full border border-[#A7F3D0]">Encrypted</span>
            </div>
          </motion.div>

        </div>

        {/* Annotation (handwritten): Transparency where it matters. Privacy where it counts. */}
        <div className="mt-12 text-center select-none">
          <span className="kh-handwritten text-[#EA580C] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
            Transparency where it matters. Privacy where it counts.
          </span>
        </div>

      </div>
    </section>
  );
}
