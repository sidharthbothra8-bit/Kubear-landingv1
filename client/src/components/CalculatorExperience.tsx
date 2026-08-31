/* Mobile-first planning workspace: typed local formulas, dual tactile sliders, transparent visual breakdowns and direct App CTA. */
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  BookOpen, 
  Calculator, 
  CheckCircle2, 
  ChevronDown, 
  Info, 
  Landmark, 
  Plane, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  WalletCards 
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { emiEstimate, goalEstimate, readNumber, salaryAllocationEstimate, sipEstimate } from "@/lib/calculatorMath";
import { getTool, tools } from "@/lib/contentRegistry";
import { CalculatorLogicInstrument, ToolBenchInstrument } from "@/components/TactileMoneyInstruments";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

type CalculatorKind = "salary" | "sip" | "emi" | "goa";
type FormState = {
  salary: string;
  rent: string;
  parents: string;
  sip: string;
  bills: string;
  monthly: string;
  rate: string;
  years: string;
  loan: string;
  target: string;
  saved: string;
  targetMonth: string;
};

const initialFor = (slug: string): FormState => ({
  salary: "65000",
  rent: "20000",
  parents: "10000",
  sip: "5000",
  bills: "2500",
  monthly: "5000",
  rate: slug === "sip-calculator" ? "12" : "8.5",
  years: slug === "sip-calculator" ? "10" : "5",
  loan: "2500000",
  target: "60000",
  saved: "15000",
  targetMonth: "2027-01",
});

const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    Number.isFinite(value) ? Math.max(0, value) : 0
  );

const currentMonth = () => new Date().toISOString().slice(0, 7);

const firstInvalidMessage = (...values: { valid: boolean; message?: string }[]) =>
  values.find((value) => !value.valid)?.message ?? "Check the values and try again.";

export function CalculatorExperience({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const kind = (tool?.visual ?? "sip") as CalculatorKind;
  const [form, setForm] = useState<FormState>(() => initialFor(slug));
  useEffect(() => setForm(initialFor(slug)), [slug]);

  const set = (field: keyof FormState) => (value: string) =>
    setForm((previous) => ({ ...previous, [field]: value }));

  const reset = () => setForm(initialFor(slug));

  const result = useMemo(() => {
    if (kind === "salary") {
      const salary = readNumber(form.salary, "Monthly take-home salary", { min: 1 });
      const rent = readNumber(form.rent, "Rent", { min: 0 });
      const parents = readNumber(form.parents, "Parents support", { min: 0 });
      const sip = readNumber(form.sip, "Monthly SIP", { min: 0 });
      const bills = readNumber(form.bills, "Bills & utilities", { min: 0 });
      if (!salary.valid || !rent.valid || !parents.valid || !sip.valid || !bills.valid) {
        return { valid: false as const, message: firstInvalidMessage(salary, rent, parents, sip, bills) };
      }
      const estimate = salaryAllocationEstimate(salary.value, rent.value, parents.value, sip.value, bills.value);
      const committedPercent = Math.min(100, Math.round((estimate.totalCommitted / Math.max(1, salary.value)) * 100));
      const freePercent = 100 - committedPercent;
      return {
        valid: true as const,
        main: estimate.dailySpend,
        label: "Guilt-Free Daily Spend Limit",
        detailA: `Day 1 Committed: ${formatInr(estimate.totalCommitted)} (${estimate.committedRatio}%)`,
        detailB: `Monthly Discretionary: ${formatInr(estimate.discretionary)}`,
        explanation: `With ₹${estimate.totalCommitted.toLocaleString("en-IN")} committed on Day 1, you have ${formatInr(estimate.discretionary)} for food, travel & leisure, or ~${formatInr(estimate.dailySpend)} per day.`,
        ratioA: committedPercent,
        ratioB: freePercent,
        labelA: "Committed Fixed",
        labelB: "Daily Spend Pool",
        rawValA: estimate.totalCommitted,
        rawValB: estimate.discretionary,
      };
    }
    if (kind === "sip") {
      const monthly = readNumber(form.monthly, "Monthly SIP", { min: 1 });
      const rate = readNumber(form.rate, "Expected annual return", { min: 0, max: 100 });
      const years = readNumber(form.years, "Years", { min: 1, max: 70 });
      if (!monthly.valid || !rate.valid || !years.valid)
        return { valid: false as const, message: firstInvalidMessage(monthly, rate, years) };
      const estimate = sipEstimate(monthly.value, rate.value, years.value);
      const total = estimate.value;
      const invRatio = total > 0 ? Math.round((estimate.contributed / total) * 100) : 50;
      const growthRatio = 100 - invRatio;
      return {
        valid: true as const,
        main: estimate.value,
        label: "Estimated Maturity Corpus",
        detailA: `You Invest: ${formatInr(estimate.contributed)}`,
        detailB: `Estimated Growth: ${formatInr(estimate.growth)}`,
        explanation: `Assuming ${rate.value}% annual compounding across ${estimate.periods} monthly contributions (${years.value} years).`,
        ratioA: invRatio,
        ratioB: growthRatio,
        labelA: "Invested Amount",
        labelB: "Estimated Growth",
        rawValA: estimate.contributed,
        rawValB: estimate.growth,
      };
    }
    if (kind === "emi") {
      const loan = readNumber(form.loan, "Loan amount", { min: 1 });
      const rate = readNumber(form.rate, "Annual interest rate", { min: 0, max: 100 });
      const years = readNumber(form.years, "Tenure", { min: 1, max: 50 });
      if (!loan.valid || !rate.valid || !years.valid)
        return { valid: false as const, message: firstInvalidMessage(loan, rate, years) };
      const estimate = emiEstimate(loan.value, rate.value, years.value);
      const principalRatio = estimate.total > 0 ? Math.round((loan.value / estimate.total) * 100) : 50;
      const interestRatio = 100 - principalRatio;
      return {
        valid: true as const,
        main: estimate.emi,
        label: "Estimated Monthly EMI",
        detailA: `Total Repayment: ${formatInr(estimate.total)}`,
        detailB: `Total Interest: ${formatInr(estimate.interest)}`,
        explanation: `Calculated at ${rate.value}% p.a. reducing balance over ${estimate.periods} monthly instalments.`,
        ratioA: principalRatio,
        ratioB: interestRatio,
        labelA: "Principal Loan",
        labelB: "Interest Paid",
        rawValA: loan.value,
        rawValB: estimate.interest,
      };
    }
    // Goa goal
    const target = readNumber(form.target, "Goa plan amount", { min: 1 });
    const saved = readNumber(form.saved, "Already saved", { min: 0 });
    if (!target.valid || !saved.valid) return { valid: false as const, message: firstInvalidMessage(target, saved) };
    const estimate = goalEstimate(target.value, saved.value, form.targetMonth);
    const progressPercent = Math.min(100, Math.round((saved.value / Math.max(1, target.value)) * 100));
    if (estimate.complete) {
      return {
        valid: true as const,
        main: 0,
        label: "Goal Fully Funded! 🎉",
        detailA: `Goal Target: ${formatInr(target.value)}`,
        detailB: "100% already saved",
        explanation: "Fantastic! You have already covered your target amount. You are ready to book.",
        ratioA: 100,
        ratioB: 0,
        labelA: "Already Saved",
        labelB: "Remaining",
        rawValA: saved.value,
        rawValB: 0,
      };
    }
    if (estimate.overdue) {
      return { valid: false as const, message: "Choose a future target month to see a useful monthly estimate." };
    }
    return {
      valid: true as const,
      main: estimate.monthly,
      label: "Monthly Savings Target",
      detailA: `Remaining to Save: ${formatInr(estimate.remaining)}`,
      detailB: `Time Horizon: ${estimate.months} months`,
      explanation: `Dividing ${formatInr(estimate.remaining)} evenly across the remaining ${estimate.months} months to your target date.`,
      ratioA: progressPercent,
      ratioB: 100 - progressPercent,
      labelA: "Saved So Far",
      labelB: "To Save",
      rawValA: saved.value,
      rawValB: estimate.remaining,
    };
  }, [form, kind]);

  if (!tool) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
      {/* Top Back Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#123630] shadow-sm hover:bg-white hover:border-[#123630]/35 hover:-translate-x-0.5 transition-all group"
        >
          <ArrowLeft className="size-3.5 text-[#C96632] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Learn & Tools Desk</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="mb-8 pb-6 border-b border-[#123630]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-2">
              <span className="size-2 rounded-full bg-[#C96632]" /> {tool.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif text-[#123630] font-normal tracking-tight leading-tight">
              {tool.title}. <em className="text-[#C96632] italic">Live calculation.</em>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#4B605B] max-w-2xl leading-relaxed">
              {tool.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#556963] hover:text-[#123630] hover:bg-white hover:border-[#123630]/30 transition-all cursor-pointer"
            >
              <RotateCcw className="size-3.5" />
              Reset values
            </button>
          </div>
        </div>
      </header>

      {/* Interactive 2-Column Calculation Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Inputs (Where users adjust numbers) */}
        <div className="lg:col-span-7 bg-[#FFFDF8] rounded-2xl border border-[#123630]/12 p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#123630]/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#123630] flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#123630]" /> 01 · Adjust Your Numbers
            </span>
            <span className="text-[11px] font-mono text-[#71827C]">Live Auto-Updating</span>
          </div>

          {/* Form Fields according to Calculator Type */}
          {kind === "sip" ? (
            <div className="space-y-5">
              {/* Field 1: Monthly SIP */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Monthly Investment (SIP)</label>
                  <span className="text-xs font-mono font-bold text-[#C96632]">{formatInr(Number(form.monthly) || 0)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={500}
                    max={100000}
                    step={500}
                    value={form.monthly}
                    onChange={(e) => set("monthly")(e.target.value)}
                    className="flex-1 accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                    <input
                      type="number"
                      value={form.monthly}
                      onChange={(e) => set("monthly")(e.target.value)}
                      className="w-full pl-6 pr-2 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["2500", "5000", "10000", "25000", "50000"].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => set("monthly")(amt)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.monthly === amt
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {formatInr(Number(amt))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Expected Rate */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Expected Annual Return (CAGR)</label>
                  <span className="text-xs font-mono font-bold text-[#C96632]">{form.rate}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={4}
                    max={25}
                    step={0.5}
                    value={form.rate}
                    onChange={(e) => set("rate")(e.target.value)}
                    className="flex-1 accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                    <input
                      type="number"
                      value={form.rate}
                      step={0.5}
                      onChange={(e) => set("rate")(e.target.value)}
                      className="w-full pl-2 pr-6 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    { label: "Debt (8%)", val: "8" },
                    { label: "Hybrid (10%)", val: "10" },
                    { label: "Nifty 50 (12%)", val: "12" },
                    { label: "Midcap (14%)", val: "14" },
                  ].map((chip) => (
                    <button
                      type="button"
                      key={chip.val}
                      onClick={() => set("rate")(chip.val)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.rate === chip.val
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 3: Time Horizon */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Time Horizon (Years)</label>
                  <span className="text-xs font-mono font-bold text-[#C96632]">{form.years} Years</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={form.years}
                    onChange={(e) => set("years")(e.target.value)}
                    className="flex-1 accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#71827C]">yrs</span>
                    <input
                      type="number"
                      value={form.years}
                      onChange={(e) => set("years")(e.target.value)}
                      className="w-full pl-2 pr-7 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["3", "5", "10", "15", "20", "25"].map((yr) => (
                    <button
                      type="button"
                      key={yr}
                      onClick={() => set("years")(yr)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.years === yr
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {yr} yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : kind === "emi" ? (
            <div className="space-y-5">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Loan Amount</label>
                  <span className="text-xs font-mono font-bold text-[#123630]">{formatInr(Number(form.loan) || 0)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={100000}
                    max={15000000}
                    step={100000}
                    value={form.loan}
                    onChange={(e) => set("loan")(e.target.value)}
                    className="flex-1 accent-[#123630] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-32 shrink-0">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                    <input
                      type="number"
                      value={form.loan}
                      step={50000}
                      onChange={(e) => set("loan")(e.target.value)}
                      className="w-full pl-6 pr-2 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    { label: "₹10 Lakh", val: "1000000" },
                    { label: "₹25 Lakh", val: "2500000" },
                    { label: "₹50 Lakh", val: "5000000" },
                    { label: "₹75 Lakh", val: "7500000" },
                    { label: "₹1 Crore", val: "10000000" },
                  ].map((chip) => (
                    <button
                      type="button"
                      key={chip.val}
                      onClick={() => set("loan")(chip.val)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.loan === chip.val
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Interest Rate (p.a.)</label>
                  <span className="text-xs font-mono font-bold text-[#123630]">{form.rate}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={6}
                    max={18}
                    step={0.1}
                    value={form.rate}
                    onChange={(e) => set("rate")(e.target.value)}
                    className="flex-1 accent-[#123630] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-32 shrink-0">
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                    <input
                      type="number"
                      value={form.rate}
                      step={0.1}
                      onChange={(e) => set("rate")(e.target.value)}
                      className="w-full pl-2 pr-6 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    { label: "Home (8.5%)", val: "8.5" },
                    { label: "Car (9.0%)", val: "9.0" },
                    { label: "Personal (11.5%)", val: "11.5" },
                  ].map((chip) => (
                    <button
                      type="button"
                      key={chip.val}
                      onClick={() => set("rate")(chip.val)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.rate === chip.val
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Loan Tenure (Years)</label>
                  <span className="text-xs font-mono font-bold text-[#123630]">{form.years} Years</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={form.years}
                    onChange={(e) => set("years")(e.target.value)}
                    className="flex-1 accent-[#123630] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-32 shrink-0">
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#71827C]">yrs</span>
                    <input
                      type="number"
                      value={form.years}
                      onChange={(e) => set("years")(e.target.value)}
                      className="w-full pl-2 pr-7 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["3", "5", "7", "10", "15", "20", "25"].map((yr) => (
                    <button
                      type="button"
                      key={yr}
                      onClick={() => set("years")(yr)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.years === yr
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {yr} yrs
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : kind === "goa" ? (
            <div className="space-y-5">
              {/* Target Amount */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Total Goal Cost (e.g. Goa Trip)</label>
                  <span className="text-xs font-mono font-bold text-[#B87B08]">{formatInr(Number(form.target) || 0)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={10000}
                    max={500000}
                    step={5000}
                    value={form.target}
                    onChange={(e) => set("target")(e.target.value)}
                    className="flex-1 accent-[#B87B08] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                    <input
                      type="number"
                      value={form.target}
                      step={5000}
                      onChange={(e) => set("target")(e.target.value)}
                      className="w-full pl-6 pr-2 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["30000", "60000", "100000", "150000", "250000"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => set("target")(val)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                        form.target === val
                          ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                          : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                      }`}
                    >
                      {formatInr(Number(val))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Already Saved */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#123630]">Already Saved / Buffer in Hand</label>
                  <span className="text-xs font-mono font-bold text-[#123630]">{formatInr(Number(form.saved) || 0)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={Number(form.target) || 100000}
                    step={2000}
                    value={form.saved}
                    onChange={(e) => set("saved")(e.target.value)}
                    className="flex-1 accent-[#123630] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                    <input
                      type="number"
                      value={form.saved}
                      step={2000}
                      onChange={(e) => set("saved")(e.target.value)}
                      className="w-full pl-6 pr-2 py-1.5 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-lg text-right"
                    />
                  </div>
                </div>
              </div>

              {/* Target Month */}
              <div>
                <label className="block text-xs font-bold text-[#123630] mb-1.5">Target Month to Travel</label>
                <input
                  type="month"
                  min={currentMonth()}
                  value={form.targetMonth}
                  onChange={(e) => set("targetMonth")(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Salary Breakdown Inputs */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#123630]">Monthly Take-Home Salary</label>
                  <span className="text-xs font-mono font-bold text-[#C96632]">{formatInr(Number(form.salary) || 0)}</span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={300000}
                  step={5000}
                  value={form.salary}
                  onChange={(e) => set("salary")(e.target.value)}
                  className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer mb-1.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#556963] mb-1">Rent to Owner</label>
                  <input
                    type="number"
                    value={form.rent}
                    step={1000}
                    onChange={(e) => set("rent")(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#556963] mb-1">Parents & Family</label>
                  <input
                    type="number"
                    value={form.parents}
                    step={1000}
                    onChange={(e) => set("parents")(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#556963] mb-1">Monthly SIP</label>
                  <input
                    type="number"
                    value={form.sip}
                    step={1000}
                    onChange={(e) => set("sip")(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#556963] mb-1">Bills & Utilities</label>
                  <input
                    type="number"
                    value={form.bills}
                    step={500}
                    onChange={(e) => set("bills")(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Calculated Answer & Breakdown & App CTA */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Answer Card */}
          <div className="bg-[#123630] rounded-2xl p-6 sm:p-7 text-[#FFF8EE] shadow-md border border-[#123630]">
            <div className="flex items-center justify-between pb-3 border-b border-white/12">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FFB18E] flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[#F4D277]" /> 02 · Live Result
              </span>
              <span className="text-[10px] font-mono text-[#BDE8D0] bg-white/10 px-2 py-0.5 rounded-full">
                Instant Math
              </span>
            </div>

            {result.valid ? (
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs text-[#D8E8DE] font-medium">{result.label}</p>
                  <motion.div
                    key={Math.round(result.main)}
                    initial={{ opacity: 0.4, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif text-[#F4D277] font-normal tracking-tight mt-1 leading-none"
                  >
                    {formatInr(result.main)}
                  </motion.div>
                </div>

                {/* Visual Proportion Breakdown Bar */}
                {result.ratioA !== undefined && result.ratioB !== undefined ? (
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="flex justify-between text-[11px] font-mono text-[#D8E8DE]">
                      <span>{result.labelA}: {result.ratioA}%</span>
                      <span>{result.labelB}: {result.ratioB}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${result.ratioA}%` }}
                        className="h-full bg-[#FF5C2B] transition-all duration-300"
                        title={`${result.labelA}: ${result.ratioA}%`}
                      />
                      <div
                        style={{ width: `${result.ratioB}%` }}
                        className="h-full bg-[#F4D277] transition-all duration-300"
                        title={`${result.labelB}: ${result.ratioB}%`}
                      />
                    </div>
                  </div>
                ) : null}

                {/* Sub-Metrics Detail Row */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                  <div className="bg-white/8 rounded-xl p-2.5">
                    <span className="block text-[10px] text-[#A3B8B0] uppercase font-mono">Component A</span>
                    <strong className="text-xs font-bold text-[#FFF8EE]">{result.detailA}</strong>
                  </div>
                  <div className="bg-white/8 rounded-xl p-2.5">
                    <span className="block text-[10px] text-[#A3B8B0] uppercase font-mono">Component B</span>
                    <strong className="text-xs font-bold text-[#FFF8EE]">{result.detailB}</strong>
                  </div>
                </div>

                <p className="text-xs text-[#D8E8DE] leading-relaxed pt-1">
                  {result.explanation}
                </p>
              </div>
            ) : (
              <div className="py-8 text-center space-y-2">
                <Info className="size-6 text-[#FFB18E] mx-auto" />
                <p className="text-sm text-[#D8E8DE]">{result.message}</p>
              </div>
            )}
          </div>

          {/* Direct Call-to-Action to App (Requirement 3: "in tools after doing something cta to app") */}
          <div className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF6F0] border border-[#FF5C2B]/30 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-[#FF5C2B] animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
                Next Step in Kubear App
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-serif font-bold text-[#123630] leading-snug mb-1.5">
              {kind === "sip"
                ? `Lock this ${formatInr(Number(form.monthly) || 5000)} SIP rule on salary day.`
                : kind === "emi"
                ? `Track your ${formatInr(Number(form.loan) || 2500000)} debt runway stress-free.`
                : kind === "goa"
                ? `Create a dedicated ${formatInr(Number(form.target) || 60000)} goal bucket in Kubear.`
                : "Lock your Day-1 essentials automatically on salary day."}
            </h3>

            <p className="text-xs text-[#516761] leading-relaxed mb-4">
              Kubear keeps your money picture clear in 2 minutes a week without bank logins or SMS reading.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5C2B] text-[#FFFDF8] font-bold text-xs shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
              >
                <span>Open in Kubear Web App</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#123630]/15 text-[#123630] font-bold text-xs hover:border-[#123630]/35 transition-all"
              >
                <span>Google Play</span>
                <ArrowUpRight className="size-3 text-[#556963]" />
              </a>
            </div>

            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#123630]/10 text-[10px] text-[#6E817B]">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="size-3 text-[#047857]" /> No bank passwords
              </span>
              <span>·</span>
              <span>100% Private</span>
            </div>
          </div>

          {/* Related Companion Guide Link */}
          {tool.learnSlug ? (
            <Link
              href={`/learn/${tool.learnSlug}`}
              className="flex items-center justify-between p-4 rounded-xl bg-[#FFFDF8] border border-[#123630]/12 hover:border-[#C96632]/50 transition-all text-xs font-bold text-[#123630] group"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="size-4 text-[#C96632]" />
                <span>Read companion guide: {tool.title}</span>
              </div>
              <ArrowRight className="size-4 text-[#C96632] group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ToolsHub() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
      {/* Top Back Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#123630] shadow-sm hover:bg-white hover:border-[#123630]/35 hover:-translate-x-0.5 transition-all group"
        >
          <ArrowLeft className="size-3.5 text-[#C96632] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Learn & Tools Desk</span>
        </Link>
      </div>

      <header className="mb-8 pb-6 border-b border-[#123630]/10">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-2">
          <Calculator className="size-3.5" /> Kubear Planning Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#123630] font-normal tracking-tight">
          A number can be <em className="text-[#C96632] italic">a good first step.</em>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#4B605B] max-w-2xl leading-relaxed">
          Salary day, a home plan or Goa. Pick the money moment first, then try the numbers you want to understand.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tools.map((tool, index) => (
          <Link
            href={`/learn/tools/${tool.slug}`}
            className="flex flex-col justify-between p-6 rounded-2xl bg-[#FFFDF8] border border-[#123630]/12 shadow-sm hover:shadow-md hover:border-[#123630]/30 transition-all hover:-translate-y-1 group"
            key={tool.slug}
          >
            <div>
              <span className="font-mono text-xs font-bold text-[#C96632] tracking-wider block mb-2">
                TOOL 0{index + 1} · {tool.eyebrow}
              </span>
              <h2 className="text-xl font-serif font-bold text-[#123630] group-hover:text-[#C96632] transition-colors mb-2">
                {tool.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6F68] leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-6 border-t border-[#123630]/8 text-xs font-bold text-[#123630] group-hover:text-[#C96632] transition-colors">
              <span>Open live calculator</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* App Action Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#123630] text-[#FFF8EE] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFB18E]">Ready to track in real life?</span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#FFF8EE] font-normal mt-1">
            Turn these calculations into your weekly rhythm.
          </h3>
          <p className="text-xs sm:text-sm text-[#D8E8DE] mt-1.5 max-w-xl">
            Log expenses in seconds via quick chat, split flatmate rent, and protect your guilt-free spending pool.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF5C2B] text-[#FFFDF8] font-bold text-xs shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 transition-all"
          >
            <span>Open Kubear App</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

