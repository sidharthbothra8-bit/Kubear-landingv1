import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Landmark,
  Plane,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Link } from "wouter";
import {
  creditCardTrapEstimate,
  emiEstimate,
  sipEstimate,
  taxRegimeEstimate,
} from "@/lib/calculatorMath";

const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    Number.isFinite(value) ? Math.max(0, value) : 0
  );

interface DayToolMeta {
  dayIndex: number;
  dayName: string;
  dayShort: string;
  pillar: string;
  toolName: string;
  fullToolHref: string;
  accentColor: string;
  icon: typeof TrendingUp;
}

const DAYS_SCHEDULE: DayToolMeta[] = [
  {
    dayIndex: 0,
    dayName: "Sunday",
    dayShort: "Sun",
    pillar: "Pillar 05 · Investing",
    toolName: "Monthly SIP & Compounding Growth",
    fullToolHref: "/learn/tools/sip-calculator",
    accentColor: "#FF5C2B",
    icon: TrendingUp,
  },
  {
    dayIndex: 1,
    dayName: "Monday",
    dayShort: "Mon",
    pillar: "Pillar 01 · Cash Flow & Salary Day",
    toolName: "Day-1 Salary Allocation & Daily Runway",
    fullToolHref: "/learn/tools/salary-allocation",
    accentColor: "#FF5C2B",
    icon: Wallet,
  },
  {
    dayIndex: 2,
    dayName: "Tuesday",
    dayShort: "Tue",
    pillar: "Pillar 04 · Debt & Housing",
    toolName: "Loan EMI, Interest Totals & Rent vs Buy",
    fullToolHref: "/learn/tools/emi-calculator",
    accentColor: "#123630",
    icon: Landmark,
  },
  {
    dayIndex: 3,
    dayName: "Wednesday",
    dayShort: "Wed",
    pillar: "Pillar 03 · Debt Freedom",
    toolName: "Credit Card Minimum Due Trap & 42% APR",
    fullToolHref: "/learn/tools/credit-card-trap",
    accentColor: "#C96632",
    icon: CreditCard,
  },
  {
    dayIndex: 4,
    dayName: "Thursday",
    dayShort: "Thu",
    pillar: "Pillar 07 · Shared Living",
    toolName: "Flatmate & Shared Living Expense Split",
    fullToolHref: "/learn/tools/flatmate-maid-split",
    accentColor: "#123630",
    icon: Users,
  },
  {
    dayIndex: 5,
    dayName: "Friday",
    dayShort: "Fri",
    pillar: "Pillar 06 · Goals & Milestones",
    toolName: "Target Runway, Travel Funds & Emergency Buffers",
    fullToolHref: "/learn/tools/goa-goal-calculator",
    accentColor: "#E5AD2B",
    icon: Plane,
  },
  {
    dayIndex: 6,
    dayName: "Saturday",
    dayShort: "Sat",
    pillar: "Pillar 08 · Taxes & Records",
    toolName: "Old vs New Tax Regime Comparator",
    fullToolHref: "/learn/tools/tax-regime-comparator",
    accentColor: "#047857",
    icon: Landmark,
  },
];

export function ContextualPairings() {
  // Deterministic daily tool index: 0 = Sun, 1 = Mon, ..., 6 = Sat
  const todayDayIndex = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(todayDayIndex);

  // States for Day 0 (SIP)
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // States for Day 1 (Salary Allocation)
  const [salaryIncome, setSalaryIncome] = useState(80000);
  const [salaryCommitted, setSalaryCommitted] = useState(45000);
  const [salarySip, setSalarySip] = useState(15000);

  // States for Day 2 (EMI)
  const [emiLoan, setEmiLoan] = useState(2500000);
  const [emiRate, setEmiRate] = useState(8.5);
  const [emiYears, setEmiYears] = useState(5);

  // States for Day 3 (Credit Card Trap)
  const [ccBalance, setCcBalance] = useState(60000);
  const [ccPayment, setCcPayment] = useState(5000);

  // States for Day 4 (Flatmate Split)
  const [flatTotal, setFlatTotal] = useState(60000);
  const [flatmatesCount, setFlatmatesCount] = useState(3);
  const [masterExtra, setMasterExtra] = useState(3000);

  // States for Day 5 (Goal Runway)
  const [goalTarget, setGoalTarget] = useState(60000);
  const [goalSaved, setGoalSaved] = useState(15000);
  const [goalMonths, setGoalMonths] = useState(6);

  // States for Day 6 (Tax Regime)
  const [taxGross, setTaxGross] = useState(1200000);
  const [taxDeductions, setTaxDeductions] = useState(150000);

  // Live Math calculations
  const sipResult = sipEstimate(sipMonthly, sipRate, sipYears);

  const salaryTotalCommitted = salaryCommitted + salarySip;
  const salaryDiscretionary = Math.max(0, salaryIncome - salaryTotalCommitted);
  const salaryDailyBurn = Math.floor(salaryDiscretionary / 30);
  const salaryLockedPct = salaryIncome > 0 ? Math.round((salaryTotalCommitted / salaryIncome) * 100) : 0;

  const emiResult = emiEstimate(emiLoan, emiRate, emiYears);

  const ccResult = creditCardTrapEstimate(ccBalance, 42, "fixed", ccPayment);

  const validFlatmates = Math.max(1, flatmatesCount);
  const baseRentPool = Math.max(0, flatTotal - masterExtra);
  const flatRegularShare = Math.round(baseRentPool / validFlatmates);
  const flatMasterShare = flatRegularShare + masterExtra;

  const goalRemaining = Math.max(0, goalTarget - goalSaved);
  const goalMonthlyEstimate = Math.ceil(goalRemaining / Math.max(1, goalMonths));

  const taxResult = taxRegimeEstimate({
    grossSalary: taxGross,
    basicSalary: taxGross * 0.4,
    rentPaidAnnual: 0,
    isMetro: true,
    section80C: taxDeductions,
    section80D: 25000,
    section24b: 0,
    section80CCD1B: 0,
    otherExemptions: 0,
  });

  const activeMeta = DAYS_SCHEDULE[selectedDay];
  const isToday = selectedDay === todayDayIndex;
  const IconComponent = activeMeta.icon;

  const handlePrevDay = () => {
    setSelectedDay((prev) => (prev === 0 ? 6 : prev - 1));
  };

  const handleNextDay = () => {
    setSelectedDay((prev) => (prev === 6 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-label="Daily contextual math and guide pairing">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#123630]/12 mb-6">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632]">
              <Sparkles className="size-3.5" /> Side-by-Side Contextual Pairing
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#123630]/8 text-[#123630] font-mono text-[11px] font-bold">
              <CalendarDays className="size-3 text-[#C96632]" /> Rotates Daily · 1 Tool per Day
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#123630] font-normal tracking-tight">
            Math & words together.
          </h2>
        </div>
        <p className="text-sm text-[#4B605B] max-w-md">
          Calculators are paired directly with the exact editorial frameworks they belong to. Today’s featured workbench is highlighted below.
        </p>
      </div>

      {/* Daily Rotation Navigator Rail */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-[#FAF7F0] border border-[#123630]/10 p-2.5 sm:p-3 rounded-2xl">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {DAYS_SCHEDULE.map((d) => {
            const selected = d.dayIndex === selectedDay;
            const today = d.dayIndex === todayDayIndex;
            return (
              <button
                key={d.dayIndex}
                type="button"
                onClick={() => setSelectedDay(d.dayIndex)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selected
                    ? "bg-[#123630] text-[#FFF8EE] font-bold shadow-xs"
                    : "bg-white/80 hover:bg-white text-[#4A5D57] hover:text-[#123630] border border-[#123630]/8"
                }`}
              >
                <span>{d.dayShort}</span>
                {today && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                      selected ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#C96632]/10 text-[#C96632]"
                    }`}
                  >
                    Today
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 text-xs">
          {!isToday && (
            <button
              type="button"
              onClick={() => setSelectedDay(todayDayIndex)}
              className="text-[#C96632] hover:underline font-bold text-[11px] cursor-pointer"
            >
              Reset to Today
            </button>
          )}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrevDay}
              title="Previous daily tool"
              aria-label="Previous daily tool"
              className="p-1.5 rounded-lg bg-white border border-[#123630]/10 text-[#123630] hover:bg-[#FAF7F0] cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleNextDay}
              title="Next daily tool"
              aria-label="Next daily tool"
              className="p-1.5 rounded-lg bg-white border border-[#123630]/10 text-[#123630] hover:bg-[#FAF7F0] cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE PAIRED TOOL CARD (Changes Daily) */}
      <div className="bg-[#FFFDF8] border border-[#123630]/12 rounded-3xl p-5 sm:p-7 shadow-xs hover:border-[#123630]/25 transition-all">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#123630]/10 mb-6">
          <div className="flex items-center gap-2.5">
            <span
              className="p-2.5 rounded-xl text-white shrink-0"
              style={{ backgroundColor: activeMeta.accentColor }}
            >
              <IconComponent className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
                  {activeMeta.pillar}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#123630]/6 text-[#123630] font-mono text-[10px] font-bold">
                  {isToday ? `${activeMeta.dayName} · Today's Tool` : `${activeMeta.dayName} Tool`}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-[#123630] mt-0.5">
                {activeMeta.toolName}
              </h3>
            </div>
          </div>
          <Link
            href={activeMeta.fullToolHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123630] hover:text-[#C96632] transition-colors self-start sm:self-center"
          >
            <span>Open full tool</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Card Body: 2 Columns (Left: Quick Live Sandbox, Right: 3 Paired Guides) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: Quick Interactive Calculator */}
          <div className="lg:col-span-5 bg-[#FAF7F0] border border-[#123630]/10 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-3">
                <span>Interactive Quick Test</span>
                <span className="font-mono text-[#C96632]">{activeMeta.dayShort} Sandbox</span>
              </div>

              {/* Day 0: SIP Calculator */}
              {selectedDay === 0 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Monthly Contribution</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(sipMonthly)}</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Return Rate</span>
                        <span className="font-mono font-bold text-[#123630]">{sipRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={18}
                        step={0.5}
                        value={sipRate}
                        onChange={(e) => setSipRate(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Horizon</span>
                        <span className="font-mono font-bold text-[#123630]">{sipYears} yrs</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={30}
                        step={1}
                        value={sipYears}
                        onChange={(e) => setSipYears(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Estimated Future Corpus
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {formatInr(sipResult.value)}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Invested: {formatInr(sipResult.contributed)}</span>
                      <span className="text-[#2F7E4B] font-semibold">Growth: +{formatInr(sipResult.growth)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 1: Salary Allocation */}
              {selectedDay === 1 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Monthly In-Hand Salary</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(salaryIncome)}</span>
                    </div>
                    <input
                      type="range"
                      min={25000}
                      max={250000}
                      step={5000}
                      value={salaryIncome}
                      onChange={(e) => setSalaryIncome(Number(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Rent + EMIs + Bills</span>
                        <span className="font-mono font-bold text-[#123630]">{formatInr(salaryCommitted)}</span>
                      </div>
                      <input
                        type="range"
                        min={10000}
                        max={150000}
                        step={2500}
                        value={salaryCommitted}
                        onChange={(e) => setSalaryCommitted(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Day 1 SIP Lock</span>
                        <span className="font-mono font-bold text-[#123630]">{formatInr(salarySip)}</span>
                      </div>
                      <input
                        type="range"
                        min={2000}
                        max={60000}
                        step={1000}
                        value={salarySip}
                        onChange={(e) => setSalarySip(Number(e.target.value))}
                        className="w-full accent-[#FF5C2B] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Daily Guilt-Free Spend Allowance
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {formatInr(salaryDailyBurn)} <span className="text-xs font-sans text-[#526660]">/ day</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Monthly pool: {formatInr(salaryDiscretionary)}</span>
                      <span className="text-[#C96632] font-semibold">{salaryLockedPct}% locked upfront</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 2: EMI Calculator */}
              {selectedDay === 2 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Loan Amount</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(emiLoan)}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={10000000}
                      step={100000}
                      value={emiLoan}
                      onChange={(e) => setEmiLoan(Number(e.target.value))}
                      className="w-full accent-[#123630] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Interest Rate</span>
                        <span className="font-mono font-bold text-[#123630]">{emiRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={7}
                        max={16}
                        step={0.25}
                        value={emiRate}
                        onChange={(e) => setEmiRate(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Tenure</span>
                        <span className="font-mono font-bold text-[#123630]">{emiYears} yrs</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={30}
                        step={1}
                        value={emiYears}
                        onChange={(e) => setEmiYears(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Monthly EMI Commitment
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {formatInr(emiResult.emi)} / mo
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Total: {formatInr(emiResult.total)}</span>
                      <span className="text-[#C96632] font-semibold">Interest: {formatInr(emiResult.interest)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 3: Credit Card Trap */}
              {selectedDay === 3 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Outstanding Card Balance</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(ccBalance)}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={200000}
                      step={5000}
                      value={ccBalance}
                      onChange={(e) => setCcBalance(Number(e.target.value))}
                      className="w-full accent-[#C96632] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                      <span>Monthly Fixed Repayment (at 42% APR)</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(ccPayment)} / mo</span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={25000}
                      step={500}
                      value={ccPayment}
                      onChange={(e) => setCcPayment(Number(e.target.value))}
                      className="w-full accent-[#C96632] cursor-pointer"
                    />
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Payoff Duration
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {ccResult.months} months ({ccResult.years} yrs)
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Interest: {formatInr(ccResult.totalInterest)}</span>
                      <span className="text-[#2F7E4B] font-semibold">Saved: {formatInr(ccResult.interestSaved)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 4: Flatmate Split */}
              {selectedDay === 4 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Total Flat Pool (Rent + Cook + Wifi)</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(flatTotal)}</span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={120000}
                      step={2500}
                      value={flatTotal}
                      onChange={(e) => setFlatTotal(Number(e.target.value))}
                      className="w-full accent-[#123630] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Flatmates</span>
                        <span className="font-mono font-bold text-[#123630]">{flatmatesCount} people</span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={5}
                        step={1}
                        value={flatmatesCount}
                        onChange={(e) => setFlatmatesCount(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Master Extra</span>
                        <span className="font-mono font-bold text-[#123630]">{formatInr(masterExtra)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={10000}
                        step={500}
                        value={masterExtra}
                        onChange={(e) => setMasterExtra(Number(e.target.value))}
                        className="w-full accent-[#123630] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Regular Room Share
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {formatInr(flatRegularShare)} <span className="text-xs font-sans text-[#526660]">/ person</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Master Room: {formatInr(flatMasterShare)}</span>
                      <span className="text-[#047857] font-semibold">Zero Contamination</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 5: Goal Runway */}
              {selectedDay === 5 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Total Goal Target</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(goalTarget)}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={500000}
                      step={5000}
                      value={goalTarget}
                      onChange={(e) => setGoalTarget(Number(e.target.value))}
                      className="w-full accent-[#B87B08] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Already Saved</span>
                        <span className="font-mono font-bold text-[#123630]">{formatInr(goalSaved)}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={goalTarget}
                        step={2500}
                        value={goalSaved}
                        onChange={(e) => setGoalSaved(Number(e.target.value))}
                        className="w-full accent-[#B87B08] cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                        <span>Months Left</span>
                        <span className="font-mono font-bold text-[#123630]">{goalMonths} mo</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={24}
                        step={1}
                        value={goalMonths}
                        onChange={(e) => setGoalMonths(Number(e.target.value))}
                        className="w-full accent-[#B87B08] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Monthly Savings Pace Needed
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {formatInr(goalMonthlyEstimate)} / mo
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>Remaining: {formatInr(goalRemaining)}</span>
                      <span className="text-[#123630] font-semibold">{goalMonths} months to go</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Day 6: Tax Regime */}
              {selectedDay === 6 && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs text-[#526660] mb-1">
                      <span>Gross Annual Salary (CTC)</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(taxGross)}</span>
                    </div>
                    <input
                      type="range"
                      min={500000}
                      max={2500000}
                      step={50000}
                      value={taxGross}
                      onChange={(e) => setTaxGross(Number(e.target.value))}
                      className="w-full accent-[#047857] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#526660] mb-1">
                      <span>Eligible 80C + 80D Deductions (Old Regime)</span>
                      <span className="font-mono font-bold text-[#123630]">{formatInr(taxDeductions)}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={250000}
                      step={10000}
                      value={taxDeductions}
                      onChange={(e) => setTaxDeductions(Number(e.target.value))}
                      className="w-full accent-[#047857] cursor-pointer"
                    />
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#123630]/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#697A74] block">
                      Recommended FY 2024-26 Regime
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-[#123630] font-bold mt-0.5">
                      {taxResult.recommended === "new"
                        ? "New Tax Regime"
                        : taxResult.recommended === "old"
                        ? "Old Tax Regime"
                        : "Either Regime"}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#526660] border-t border-[#123630]/8 pt-2 mt-2 font-mono">
                      <span>New Tax: {formatInr(taxResult.newTotalTax)}</span>
                      <span className="text-[#047857] font-semibold">
                        {taxResult.annualSavings > 0
                          ? `Saves ${formatInr(taxResult.annualSavings)}/yr`
                          : "Equal tax"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={activeMeta.fullToolHref}
              className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#123630] text-[#FFF8EE] text-xs font-bold hover:bg-[#1C4E46] transition-colors"
            >
              <span>Launch Full Workspace</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* RIGHT: Paired Editorial Reading Guides */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526660] flex items-center gap-1.5">
              <BookOpen className="size-3.5 text-[#C96632]" /> Paired Editorial Frameworks
            </span>

            <div className="space-y-2.5">
              {/* Day 0 Paired Guides (SIP & Investing) */}
              {selectedDay === 0 && (
                <>
                  <Link
                    href="/learn/index-funds-vs-active-large-cap"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#23</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Investing</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Nifty 50 Index Funds vs Active Large-Cap Funds: Plain Evidence
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Why low-cost Nifty 50 and Nifty Next 50 index funds consistently beat most large-cap active funds after fees.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/salary-day-is-not-spending-day"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#01</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Salary Day</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Salary day is not a spending day. Try these four jobs first.
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Lock your monthly SIP on Day 1 alongside rent and bills before discretionary spending takes over.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/direct-vs-regular-mutual-funds"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#23</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Investing</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Direct vs Regular Mutual Funds: The 1% That Costs You Lakhs
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Understanding distributor commissions and how to ensure your SIP compounding works 100% for you.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 1 Paired Guides (Salary Allocation & Cash Flow) */}
              {selectedDay === 1 && (
                <>
                  <Link
                    href="/learn/salary-day-is-not-spending-day"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#01</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Salary Day</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Salary day is not a spending day. Try these four jobs first.
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Move rent, EMIs, parents' support and SIPs out on day one so your remaining money is guilt-free runway.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/the-twenty-fifth-of-month-panic"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#08</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Cash Flow</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        The 25th of the Month Panic: Why Bank Balances Vanish
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How daily runway calculations eliminate the late-month credit card borrow loop.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/four-bank-accounts-system"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#02</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Cash Flow</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        The Four Bank Accounts System: Income, Bills, Spend, Emergency
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Physical partitioning of accounts so UPI swipes never touch rent or investment capital.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 2 Paired Guides (EMI & Housing) */}
              {selectedDay === 2 && (
                <>
                  <Link
                    href="/learn/rent-vs-buy-in-indian-metros"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#31</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Decisions</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Rent vs Buy in Indian Metros: Rental Yields, EMI Math, and Opportunity Cost
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Comparing 3% rental yields with 8.5% home loan EMIs, maintenance costs, and opportunity cost.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/prepaying-home-loan-vs-investing-sip"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#18</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt & Housing</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Prepaying Home Loan vs Continuing Equity SIPs: The Exact Numbers
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How 1 extra EMI per year can shave 5+ years and lakhs in interest off a 20-year home loan.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/credit-card-statement-vs-minimum-due"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#16</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Total Amount Due vs Minimum Due: The High-Cost Indian Card Trap
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Tackling high-interest credit card debt and personal loans methodically while protecting daily cash flow.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 3 Paired Guides (Credit Cards & Debt) */}
              {selectedDay === 3 && (
                <>
                  <Link
                    href="/learn/credit-card-statement-vs-minimum-due"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#16</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Total Amount Due vs Minimum Due: The High-Cost Indian Card Trap
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Why paying 5% minimum due keeps you paying 42% APR interest compounding silently for decades.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/no-cost-emi-truth"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#17</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Debt</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        No-Cost EMI: The Processing Fees and 18% GST You Missed
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How upfront merchant discounts mask bank interest and non-refundable processing charges.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/credit-score-cibil-myths"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#19</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Credit</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Credit Score (CIBIL) Myths: What Actually Moves the Needle
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Credit utilization ratios, loan closures vs credit cards, and checking your own score without penalties.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 4 Paired Guides (Shared Living & Flatmates) */}
              {selectedDay === 4 && (
                <>
                  <Link
                    href="/learn/flatmate-expense-splits-without-bitterness"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#25</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Shared Living</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Flatmate Expense Splits Without Bitterness: The Rulebook
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Establishing clear protocols for maid salaries, wifi, grocery buffers, and master bedroom weights.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/splitwise-vs-private-ledger"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#26</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Privacy & Tools</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Why Shared Expense Trackers Pollute Personal Runways
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How keeping a dedicated house table isolated from your private bank balance eliminates ghost debts.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/shared-kitchen-grocery-split"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#27</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Shared Living</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Cook Aunty, Blinkit Runs, and Common Spices: The Urban Split
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How to handle personal dietary preferences inside a shared kitchen without arguments.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 5 Paired Guides (Goals & Travel) */}
              {selectedDay === 5 && (
                <>
                  <Link
                    href="/learn/travel-fund-goa-to-europe-sinking-fund"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#30</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Goals</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        From Goa to Europe: How to Travel Yearly Without Credit Card Debt
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Why separating fun holiday plans from monthly living costs prevents burnout and budget collapse.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/emergency-fund-where-to-park"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#11</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Buffers</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Emergency Fund: How Much, Where to Park It, and When to Touch It
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Calculating real living baseline costs and choosing liquid instruments that protect without locking funds.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/saving-vs-investing-which-comes-first"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#02</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Goals</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Saving vs Investing: The Sequence Most Young Indians Get Backwards
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Matching timeline horizons with the right instruments: arbitrage, liquid funds, fixed deposits, or equity.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}

              {/* Day 6 Paired Guides (Taxes & Records) */}
              {selectedDay === 6 && (
                <>
                  <Link
                    href="/learn/old-vs-new-tax-regime-salaried"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#36</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Taxes</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Old vs New Tax Regime: The Salary Break-Even Analysis
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        How Budget 2024-26 standard deductions and revised tax slabs change the tipping point for HRA and 80C.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/section-80c-80d-tax-saving-instruments"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#37</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Taxes</span>
                        <span className="text-[10px] text-[#71827C] font-mono">4 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Section 80C & 80D: Beyond the March 31st Panic Investment
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Evaluating ELSS, EPF, PPF, term insurance, and parental health cover without buying toxic ULIPs.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/learn/capital-gains-tax-mutual-funds-equity"
                    className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-[#123630]/8 bg-white hover:border-[#123630]/25 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#C96632]">#39</span>
                        <span className="text-[10px] font-bold text-[#556963] uppercase tracking-wider bg-[#123630]/5 px-2 py-0.5 rounded-md">Taxes</span>
                        <span className="text-[10px] text-[#71827C] font-mono">5 min read</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-serif text-[#123630] group-hover:text-[#C96632] transition-colors">
                        Capital Gains Tax on Equity & Mutual Funds: LTCG vs STCG
                      </h4>
                      <p className="text-xs text-[#5A6E68] line-clamp-1 mt-0.5">
                        Navigating the ₹1.25 Lakh exemption limit, 12.5% LTCG rates, and tax harvesting strategies.
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-[#123630]/40 group-hover:text-[#C96632] group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
