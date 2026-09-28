import React from "react";
import { ChevronRight, Landmark, Receipt, Percent, TrendingUp, Target, CalendarClock } from "lucide-react";

export function RealPictureSection() {
  const calculationRows = [
    { label: "Bank balance", amount: "₹2,85,000", isDeduction: false, icon: Landmark },
    { label: "Bills & expenses", amount: "-₹54,000", isDeduction: true, icon: Receipt },
    { label: "EMIs", amount: "-₹22,000", isDeduction: true, icon: Percent },
    { label: "Investments", amount: "-₹36,000", isDeduction: true, icon: TrendingUp },
    { label: "Goals", amount: "-₹20,000", isDeduction: true, icon: Target },
    { label: "Upcoming expenses", amount: "-₹26,000", isDeduction: true, icon: CalendarClock },
  ];

  return (
    <section id="real-picture" className="w-full py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#ECE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold & Simple Copy */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A8D96]">
              THE REAL PICTURE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#16191E] leading-[1.12]">
              Having ₹2,85,000 doesn&apos;t mean you can{" "}
              <span className="text-[#F06535]">spend ₹2,85,000.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#525660] leading-relaxed font-normal max-w-xl">
              Some of that money already has a job: bills, EMIs, investments, goals and upcoming expenses. Kubear accounts for all of it and shows you what&apos;s actually free to use.
            </p>
          </div>

          {/* Right Column: ONE Financial Calculation UI Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(20,25,35,0.06)] border border-[#ECE7DC]">
              
              {/* Card Title */}
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A7D85]">
                  Your money this month
                </p>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#F3EFE6]">
                {calculationRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div 
                      key={row.label}
                      className="py-3 sm:py-3.5 flex items-center justify-between group cursor-default transition-colors hover:bg-[#FAF8F5] px-2 -mx-2 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#EBE6DC] flex items-center justify-center text-[#525660]">
                          <Icon className="size-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#16191E]">
                          {row.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                          row.isDeduction ? "text-[#E85D26]" : "text-[#16191E]"
                        }`}>
                          {row.amount}
                        </span>
                        <ChevronRight className="size-3.5 text-[#C4C6CC]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Highlight Box: Available to Spend */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#FFF5ED] border border-[#FBDBCB]">
                <p className="text-xs font-semibold text-[#C25828]">Available to spend</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#16191E] tracking-tight mt-1 font-mono tabular-nums">
                  ₹28,000
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
