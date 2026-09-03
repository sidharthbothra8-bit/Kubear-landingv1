import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Calculator, CheckCircle2, ChevronRight, Info, Landmark, Plane, RotateCcw, Sparkles, TrendingUp, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { emiEstimate, goalEstimate, readNumber, salaryAllocationEstimate, sipEstimate } from "@/lib/calculatorMath";
import { tools } from "@/lib/contentRegistry";
import { CalculatorLogicInstrument } from "@/components/TactileMoneyInstruments";

type ToolSlug = "sip-calculator" | "emi-calculator" | "goa-goal-calculator" | "salary-allocation";

const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    Number.isFinite(value) ? Math.max(0, value) : 0
  );

export function InteractiveCalculatorSuite({ defaultSlug = "sip-calculator" }: { defaultSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState<ToolSlug>(
    (defaultSlug as ToolSlug) || "sip-calculator"
  );

  // Form states for each calculator
  const [sipMonthly, setSipMonthly] = useState("5000");
  const [sipRate, setSipRate] = useState("12");
  const [sipYears, setSipYears] = useState("10");

  const [emiLoan, setEmiLoan] = useState("2500000");
  const [emiRate, setEmiRate] = useState("8.5");
  const [emiYears, setEmiYears] = useState("5");

  const [goalTarget, setGoalTarget] = useState("60000");
  const [goalSaved, setGoalSaved] = useState("15000");
  const [goalMonth, setGoalMonth] = useState("2027-01");

  const [salaryIncome, setSalaryIncome] = useState("65000");
  const [salaryRent, setSalaryRent] = useState("20000");
  const [salaryParents, setSalaryParents] = useState("10000");
  const [salarySip, setSalarySip] = useState("5000");
  const [salaryBills, setSalaryBills] = useState("2500");

  // Calculations
  const sipResult = useMemo(() => {
    const m = readNumber(sipMonthly, "Monthly SIP", { min: 1 });
    const r = readNumber(sipRate, "Return Rate", { min: 0, max: 100 });
    const y = readNumber(sipYears, "Years", { min: 1, max: 70 });
    if (!m.valid || !r.valid || !y.valid) return { valid: false as const, message: "Enter valid numbers for SIP." };
    const est = sipEstimate(m.value, r.value, y.value);
    return {
      valid: true as const,
      main: est.value,
      label: "Estimated Maturity Corpus",
      detailA: `Total Invested: ${formatInr(est.contributed)}`,
      detailB: `Estimated Growth: ${formatInr(est.growth)}`,
      explanation: `Assuming an annual compounding rate of ${r.value}% over ${est.periods} months.`,
      linkedGuide: "/learn/index-funds-vs-active-large-cap",
      guideTitle: "Index Funds vs Active Mutual Funds in India",
      guideSlug: "index-funds-vs-active-large-cap",
      guideNumber: "23",
    };
  }, [sipMonthly, sipRate, sipYears]);

  const emiResult = useMemo(() => {
    const l = readNumber(emiLoan, "Loan Amount", { min: 1 });
    const r = readNumber(emiRate, "Interest Rate", { min: 0, max: 100 });
    const y = readNumber(emiYears, "Tenure", { min: 1, max: 50 });
    if (!l.valid || !r.valid || !y.valid) return { valid: false as const, message: "Enter valid numbers for Loan." };
    const est = emiEstimate(l.value, r.value, y.value);
    return {
      valid: true as const,
      main: est.emi,
      label: "Estimated Monthly EMI",
      detailA: `Total Amount Payable: ${formatInr(est.total)}`,
      detailB: `Total Interest: ${formatInr(est.interest)}`,
      explanation: `Calculated at ${r.value}% p.a. reducing balance over ${est.periods} monthly instalments.`,
      linkedGuide: "/learn/rent-vs-buy-in-indian-metros",
      guideTitle: "Rent vs Buy in Indian Metros: Rental Yields, EMI Math",
      guideSlug: "rent-vs-buy-in-indian-metros",
      guideNumber: "31",
    };
  }, [emiLoan, emiRate, emiYears]);

  const goalResult = useMemo(() => {
    const t = readNumber(goalTarget, "Target", { min: 1 });
    const s = readNumber(goalSaved, "Saved", { min: 0 });
    if (!t.valid || !s.valid) return { valid: false as const, message: "Enter valid goal numbers." };
    const est = goalEstimate(t.value, s.value, goalMonth);
    if (est.complete) {
      return {
        valid: true as const,
        main: 0,
        label: "Goal Fully Funded",
        detailA: "Target already achieved!",
        detailB: "No additional monthly savings required",
        explanation: "Your goal is 100% covered by current savings.",
        linkedGuide: "/learn/travel-fund-goa-to-europe-sinking-fund",
        guideTitle: "From Goa to Europe: Travel Sinking Funds",
        guideSlug: "travel-fund-goa-to-europe-sinking-fund",
        guideNumber: "30",
      };
    }
    return {
      valid: true as const,
      main: est.monthly,
      label: "Required Monthly Savings",
      detailA: `Remaining to Save: ${formatInr(est.remaining)}`,
      detailB: `Time Horizon: ${est.months} months`,
      explanation: `Dividing ${formatInr(est.remaining)} evenly across the remaining ${est.months} months to target.`,
      linkedGuide: "/learn/travel-fund-goa-to-europe-sinking-fund",
      guideTitle: "From Goa to Europe: Travel Sinking Funds",
      guideSlug: "travel-fund-goa-to-europe-sinking-fund",
      guideNumber: "30",
    };
  }, [goalTarget, goalSaved, goalMonth]);

  const salaryResult = useMemo(() => {
    const sal = readNumber(salaryIncome, "Salary", { min: 1 });
    const rent = readNumber(salaryRent, "Rent", { min: 0 });
    const par = readNumber(salaryParents, "Parents", { min: 0 });
    const sip = readNumber(salarySip, "SIP", { min: 0 });
    const bill = readNumber(salaryBills, "Bills", { min: 0 });
    if (!sal.valid || !rent.valid || !par.valid || !sip.valid || !bill.valid) {
      return { valid: false as const, message: "Enter valid income and expense numbers." };
    }
    const est = salaryAllocationEstimate(sal.value, rent.value, par.value, sip.value, bill.value);
    return {
      valid: true as const,
      main: est.dailySpend,
      label: "Guilt-Free Daily Spend Limit",
      detailA: `Day 1 Committed: ${formatInr(est.totalCommitted)} (${est.committedRatio}%)`,
      detailB: `Free Discretionary Pool: ${formatInr(est.discretionary)}/mo`,
      explanation: `With all fixed obligations locked on Day 1, you can spend up to ${formatInr(est.dailySpend)} every day without guilt.`,
      linkedGuide: "/learn/salary-day-is-not-spending-day",
      guideTitle: "Salary Day Is Not Spending Day: 4 Jobs First",
      guideSlug: "salary-day-is-not-spending-day",
      guideNumber: "01",
    };
  }, [salaryIncome, salaryRent, salaryParents, salarySip, salaryBills]);

  const currentResult =
    activeSlug === "sip-calculator"
      ? sipResult
      : activeSlug === "emi-calculator"
      ? emiResult
      : activeSlug === "goa-goal-calculator"
      ? goalResult
      : salaryResult;

  const currentKind =
    activeSlug === "sip-calculator"
      ? "sip"
      : activeSlug === "emi-calculator"
      ? "emi"
      : activeSlug === "goa-goal-calculator"
      ? "goa"
      : "salary";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="interactive-calculators-hub">
      {/* Selector Navigation */}
      <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#123630]/12">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] flex items-center gap-1.5">
            <Calculator className="size-3.5" /> Interactive Planning Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#123630] font-normal tracking-tight mt-1">
            Choose a calculation model.
          </h2>
        </div>
        <Link
          href={`/learn/tools/${activeSlug}`}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#123630]/15 bg-[#FFFDF8] text-xs font-bold text-[#123630] hover:bg-white hover:border-[#123630]/35 transition-all"
        >
          <span>Open Full Page View</span>
          <ArrowUpRight className="size-3.5 text-[#C96632]" />
        </Link>
      </div>

      {/* Tabs list for calculators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
        <button
          type="button"
          onClick={() => setActiveSlug("sip-calculator")}
          className={`flex items-center gap-2.5 p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeSlug === "sip-calculator"
              ? "bg-[#123630] border-[#123630] text-[#FFF8EE] shadow-sm"
              : "bg-[#FFFDF8] border-[#123630]/15 text-[#3D534D] hover:bg-white hover:border-[#123630]/30"
          }`}
        >
          <WalletCards className={`size-4 shrink-0 ${activeSlug === "sip-calculator" ? "text-[#FF5C2B]" : "text-[#FF5C2B]"}`} />
          <div className="min-w-0">
            <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider ${activeSlug === "sip-calculator" ? "text-[#FFF8EE]/60" : "text-[#71827C]"}`}>
              Tool 01
            </span>
            <strong className="block text-xs sm:text-sm font-serif font-bold truncate">SIP Calculator</strong>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSlug("emi-calculator")}
          className={`flex items-center gap-2.5 p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeSlug === "emi-calculator"
              ? "bg-[#123630] border-[#123630] text-[#FFF8EE] shadow-sm"
              : "bg-[#FFFDF8] border-[#123630]/15 text-[#3D534D] hover:bg-white hover:border-[#123630]/30"
          }`}
        >
          <Landmark className={`size-4 shrink-0 ${activeSlug === "emi-calculator" ? "text-[#A3E5D4]" : "text-[#123630]"}`} />
          <div className="min-w-0">
            <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider ${activeSlug === "emi-calculator" ? "text-[#FFF8EE]/60" : "text-[#71827C]"}`}>
              Tool 02
            </span>
            <strong className="block text-xs sm:text-sm font-serif font-bold truncate">EMI & Loan</strong>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSlug("goa-goal-calculator")}
          className={`flex items-center gap-2.5 p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeSlug === "goa-goal-calculator"
              ? "bg-[#123630] border-[#123630] text-[#FFF8EE] shadow-sm"
              : "bg-[#FFFDF8] border-[#123630]/15 text-[#3D534D] hover:bg-white hover:border-[#123630]/30"
          }`}
        >
          <Plane className={`size-4 shrink-0 ${activeSlug === "goa-goal-calculator" ? "text-[#F4D277]" : "text-[#B87B08]"}`} />
          <div className="min-w-0">
            <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider ${activeSlug === "goa-goal-calculator" ? "text-[#FFF8EE]/60" : "text-[#71827C]"}`}>
              Tool 03
            </span>
            <strong className="block text-xs sm:text-sm font-serif font-bold truncate">Goa & Milestones</strong>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSlug("salary-allocation")}
          className={`flex items-center gap-2.5 p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeSlug === "salary-allocation"
              ? "bg-[#123630] border-[#123630] text-[#FFF8EE] shadow-sm"
              : "bg-[#FFFDF8] border-[#123630]/15 text-[#3D534D] hover:bg-white hover:border-[#123630]/30"
          }`}
        >
          <TrendingUp className={`size-4 shrink-0 ${activeSlug === "salary-allocation" ? "text-[#FF5C2B]" : "text-[#FF5C2B]"}`} />
          <div className="min-w-0">
            <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider ${activeSlug === "salary-allocation" ? "text-[#FFF8EE]/60" : "text-[#71827C]"}`}>
              Tool 04
            </span>
            <strong className="block text-xs sm:text-sm font-serif font-bold truncate">Salary Day Allocator</strong>
          </div>
        </button>
      </div>

      {/* Main Interactive Workbench Container */}
      <div className="bg-[#FFFDF8] border border-[#123630]/12 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Inputs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#123630]/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#123630] flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#C96632]" /> Step 1: Input Your Numbers
              </span>
              <button
                type="button"
                onClick={() => {
                  if (activeSlug === "sip-calculator") {
                    setSipMonthly("5000");
                    setSipRate("12");
                    setSipYears("10");
                  } else if (activeSlug === "emi-calculator") {
                    setEmiLoan("2500000");
                    setEmiRate("8.5");
                    setEmiYears("5");
                  } else if (activeSlug === "goa-goal-calculator") {
                    setGoalTarget("60000");
                    setGoalSaved("15000");
                    setGoalMonth("2027-01");
                  } else {
                    setSalaryIncome("65000");
                    setSalaryRent("20000");
                    setSalaryParents("10000");
                    setSalarySip("5000");
                    setSalaryBills("2500");
                  }
                }}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5B6D67] hover:text-[#123630] cursor-pointer"
              >
                <RotateCcw className="size-3" /> Reset example
              </button>
            </div>

            {/* Form Fields by Tool */}
            {activeSlug === "sip-calculator" && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#123630] mb-1.5">
                    <label htmlFor="sip-monthly-input">Monthly SIP Amount</label>
                    <span className="font-mono text-[#FF5C2B] text-sm">{formatInr(Number(sipMonthly) || 0)}</span>
                  </div>
                  <input
                    id="sip-monthly-input"
                    type="number"
                    min="500"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C2B]/30"
                  />
                  <div className="flex gap-2 mt-2">
                    {[2500, 5000, 10000, 25000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSipMonthly(String(amt))}
                        className="px-2.5 py-1 rounded-lg border border-[#123630]/15 bg-white text-[11px] font-mono text-[#3E524D] hover:border-[#123630]/35 cursor-pointer"
                      >
                        ₹{(amt / 1000)}k
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="sip-rate-input">
                      Expected Annual Return (%)
                    </label>
                    <input
                      id="sip-rate-input"
                      type="number"
                      min="1"
                      max="30"
                      step="0.5"
                      value={sipRate}
                      onChange={(e) => setSipRate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C2B]/30"
                    />
                    <small className="text-[10px] text-[#697B75] mt-1 block">Historical Nifty 50 CAGR is ~12-13%</small>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="sip-years-input">
                      Time Horizon (Years)
                    </label>
                    <input
                      id="sip-years-input"
                      type="number"
                      min="1"
                      max="50"
                      step="1"
                      value={sipYears}
                      onChange={(e) => setSipYears(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5C2B]/30"
                    />
                    <div className="flex gap-1.5 mt-1.5">
                      {[3, 5, 10, 15, 20].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setSipYears(String(yr))}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                            sipYears === String(yr)
                              ? "bg-[#123630] text-white font-bold"
                              : "bg-[#123630]/5 text-[#51645E]"
                          }`}
                        >
                          {yr}y
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSlug === "emi-calculator" && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#123630] mb-1.5">
                    <label htmlFor="emi-loan-input">Loan Principal Amount</label>
                    <span className="font-mono text-[#123630] text-sm">{formatInr(Number(emiLoan) || 0)}</span>
                  </div>
                  <input
                    id="emi-loan-input"
                    type="number"
                    min="10000"
                    step="50000"
                    value={emiLoan}
                    onChange={(e) => setEmiLoan(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123630]/30"
                  />
                  <div className="flex gap-2 mt-2">
                    {[500000, 2500000, 5000000, 7500000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setEmiLoan(String(amt))}
                        className="px-2.5 py-1 rounded-lg border border-[#123630]/15 bg-white text-[11px] font-mono text-[#3E524D] hover:border-[#123630]/35 cursor-pointer"
                      >
                        ₹{(amt / 100000)} Lakh
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="emi-rate-input">
                      Annual Interest Rate (%)
                    </label>
                    <input
                      id="emi-rate-input"
                      type="number"
                      min="1"
                      max="30"
                      step="0.1"
                      value={emiRate}
                      onChange={(e) => setEmiRate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123630]/30"
                    />
                    <small className="text-[10px] text-[#697B75] mt-1 block">Current home loan rates are ~8.50 - 9.00%</small>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="emi-years-input">
                      Loan Tenure (Years)
                    </label>
                    <input
                      id="emi-years-input"
                      type="number"
                      min="1"
                      max="35"
                      step="1"
                      value={emiYears}
                      onChange={(e) => setEmiYears(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123630]/30"
                    />
                    <div className="flex gap-1.5 mt-1.5">
                      {[3, 5, 10, 15, 20, 25].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setEmiYears(String(yr))}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                            emiYears === String(yr)
                              ? "bg-[#123630] text-white font-bold"
                              : "bg-[#123630]/5 text-[#51645E]"
                          }`}
                        >
                          {yr}y
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSlug === "goa-goal-calculator" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="goal-target-input">
                      Goal Target Amount
                    </label>
                    <input
                      id="goal-target-input"
                      type="number"
                      min="1000"
                      step="5000"
                      value={goalTarget}
                      onChange={(e) => setGoalTarget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B87B08]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="goal-saved-input">
                      Already Saved / Buffer
                    </label>
                    <input
                      id="goal-saved-input"
                      type="number"
                      min="0"
                      step="1000"
                      value={goalSaved}
                      onChange={(e) => setGoalSaved(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B87B08]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123630] mb-1.5" htmlFor="goal-month-input">
                    Target Milestone Month
                  </label>
                  <input
                    id="goal-month-input"
                    type="month"
                    value={goalMonth}
                    onChange={(e) => setGoalMonth(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeSlug === "salary-allocation" && (
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#123630] mb-1" htmlFor="sal-income-input">
                    Monthly Take-Home Salary
                  </label>
                  <input
                    id="sal-income-input"
                    type="number"
                    min="5000"
                    step="1000"
                    value={salaryIncome}
                    onChange={(e) => setSalaryIncome(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1" htmlFor="sal-rent-input">
                      Rent
                    </label>
                    <input
                      id="sal-rent-input"
                      type="number"
                      min="0"
                      step="500"
                      value={salaryRent}
                      onChange={(e) => setSalaryRent(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1" htmlFor="sal-parents-input">
                      Parents / Family
                    </label>
                    <input
                      id="sal-parents-input"
                      type="number"
                      min="0"
                      step="500"
                      value={salaryParents}
                      onChange={(e) => setSalaryParents(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1" htmlFor="sal-sip-input">
                      Day 1 SIP
                    </label>
                    <input
                      id="sal-sip-input"
                      type="number"
                      min="0"
                      step="500"
                      value={salarySip}
                      onChange={(e) => setSalarySip(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#123630] mb-1" htmlFor="sal-bills-input">
                      Bills & Utilities
                    </label>
                    <input
                      id="sal-bills-input"
                      type="number"
                      min="0"
                      step="200"
                      value={salaryBills}
                      onChange={(e) => setSalaryBills(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-sm font-mono text-[#123630]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Results & Linked Guide Companion */}
          <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#123630]/12 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632] block mb-2">
                Step 2: Instant Calculated Answer
              </span>

              {currentResult.valid ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-[#123630]/10 shadow-xs">
                    <span className="text-[11px] font-mono text-[#5A6E68] uppercase tracking-wider block">
                      {currentResult.label}
                    </span>
                    <motion.div
                      key={Math.round(currentResult.main)}
                      initial={{ opacity: 0.3, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl font-serif text-[#123630] font-bold mt-1"
                    >
                      {formatInr(currentResult.main)}
                    </motion.div>
                    <div className="mt-3 pt-3 border-t border-[#123630]/8 space-y-1 text-xs font-mono text-[#4A5D57]">
                      <div>{currentResult.detailA}</div>
                      <div>{currentResult.detailB}</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#526660] leading-relaxed">
                    {currentResult.explanation}
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white border border-red-200 text-xs text-red-700">
                  {currentResult.message}
                </div>
              )}
            </div>

            {/* Companion Guide Card */}
            {currentResult.valid && currentResult.linkedGuide && (
              <div className="mt-6 pt-5 border-t border-[#123630]/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#697B75] flex items-center gap-1 mb-2">
                  <BookOpen className="size-3 text-[#C96632]" /> Related Reading Companion
                </span>
                <Link
                  href={currentResult.linkedGuide}
                  className="group block p-3.5 rounded-xl bg-white border border-[#123630]/10 hover:border-[#C96632]/40 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] font-bold text-[#C96632]">
                      #{currentResult.guideNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[#6A7B76]">Editorial Guide</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-[#123630] group-hover:text-[#C96632] transition-colors leading-snug">
                    {currentResult.guideTitle}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#C96632] mt-2 group-hover:translate-x-0.5 transition-transform">
                    <span>Read complete guide</span>
                    <ArrowRight className="size-3" />
                  </div>
                </Link>
              </div>
            )}

            {/* Direct App CTA */}
            {currentResult.valid && (
              <div className="mt-4 p-4 rounded-xl bg-white border-2 border-[#123630]/12 shadow-xs text-[#123630] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C96632] flex items-center gap-1">
                    <Sparkles className="size-3 text-[#C96632]" /> Ready to track this live?
                  </span>
                  <p className="text-xs text-[#556963] mt-1 leading-relaxed">
                    Set up this target in Kubear to auto-track every payment, salary deposit, and SIP transaction with 0 bank logins.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="https://kubear.kuberos.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#FF5C2B] text-[#FFFDF8] text-xs font-bold shadow-[0_2px_0_#9F3017] hover:shadow-[0_3px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center no-underline"
                  >
                    <span>Open Kubear App</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kubear.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center py-2 px-2.5 rounded-lg bg-[#FAF7F0] border border-[#123630]/15 text-[#123630] hover:bg-white text-[11px] font-bold transition-all no-underline shadow-xs"
                    title="Get on Android"
                  >
                    Android
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
