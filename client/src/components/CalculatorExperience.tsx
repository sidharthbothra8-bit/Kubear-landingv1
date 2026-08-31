/* Living Ledger planning workspace: typed local formulas, tactile sliders, transparent visual breakdowns and direct App CTA. */
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  BookOpen,
  Building2,
  Calculator,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Flame,
  HelpCircle,
  Home as HomeIcon,
  Info,
  Landmark,
  Layers,
  Palmtree,
  PiggyBank,
  Plane,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
  Wallet,
  WalletCards,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  buyVsRentEstimate,
  carVsCabEstimate,
  creditCardTrapEstimate,
  emergencyRunwayEstimate,
  emiEstimate,
  flatmateSplitEstimate,
  goalEstimate,
  readNumber,
  salaryAllocationEstimate,
  sipEstimate,
  stepUpSipEstimate,
  taxRegimeEstimate,
} from "@/lib/calculatorMath";
import { getTool, tools, ToolCategory, ToolItem } from "@/lib/contentRegistry";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? Math.max(0, value) : 0);

const formatCompactInr = (value: number) => {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
  return `₹${Math.round(value)}`;
};

const currentMonth = () => new Date().toISOString().slice(0, 7);

/* -------------------------------------------------------------
 * Main Calculator Form State Structure
 * ------------------------------------------------------------- */
type FormState = {
  // Salary Allocation
  salary: string;
  rent: string;
  parents: string;
  sip: string;
  bills: string;

  // SIP & Step-Up
  sipMonthly: string;
  sipRate: string;
  sipYears: string;
  sipStepUp: string;

  // Loan EMI
  loanAmount: string;
  loanRate: string;
  loanYears: string;

  // Tax Regime
  taxGross: string;
  taxBasic: string;
  taxRentPaid: string;
  taxIsMetro: boolean;
  tax80C: string;
  tax80D: string;
  tax24b: string;
  tax80CCD: string;
  taxOther: string;

  // Credit Card Trap
  cardBalance: string;
  cardApr: string;
  cardPayMode: "minimum" | "fixed";
  cardFixedPayment: string;

  // Flatmate Split
  flatRent: string;
  maidCook: string;
  flatWifiElec: string;
  flatZepto: string;
  flatmatesCount: string;
  masterExtra: string;

  // Emergency Runway
  runwayFixed: string;
  runwayFood: string;
  runwayBills: string;
  runwayFamily: string;
  runwayInsurance: string;
  runwaySavings: string;
  runwayDependents: boolean;

  // Buy vs Rent
  buyPrice: string;
  buyDownPayment: string;
  buyInterest: string;
  buyTenure: string;
  buyRentEquiv: string;
  buyAppreciation: string;
  buyEquityReturn: string;

  // Car vs Cab
  carPrice: string;
  carDown: string;
  carTenure: string;
  carRate: string;
  carDailyKm: string;
  carFuelRate: string;
  carInsuranceService: string;
  carParkingTolls: string;
  cabDailyCost: string;

  // Goals (Goa / Wedding)
  goalTarget: string;
  goalSaved: string;
  goalMonth: string;
  goalCategory: string;
};

const initialFormState: FormState = {
  // Salary
  salary: "75000",
  rent: "22000",
  parents: "10000",
  sip: "12000",
  bills: "3500",

  // SIP
  sipMonthly: "10000",
  sipRate: "12",
  sipYears: "10",
  sipStepUp: "10",

  // Loan
  loanAmount: "3500000",
  loanRate: "8.5",
  loanYears: "20",

  // Tax
  taxGross: "1200000",
  taxBasic: "600000",
  taxRentPaid: "240000",
  taxIsMetro: true,
  tax80C: "150000",
  tax80D: "25000",
  tax24b: "0",
  tax80CCD: "50000",
  taxOther: "0",

  // Card
  cardBalance: "65000",
  cardApr: "42",
  cardPayMode: "minimum",
  cardFixedPayment: "3500",

  // Flatmate
  flatRent: "48000",
  maidCook: "9000",
  flatWifiElec: "4500",
  flatZepto: "6000",
  flatmatesCount: "3",
  masterExtra: "3000",

  // Emergency
  runwayFixed: "25000",
  runwayFood: "12000",
  runwayBills: "3500",
  runwayFamily: "8000",
  runwayInsurance: "2500",
  runwaySavings: "180000",
  runwayDependents: false,

  // Buy vs Rent
  buyPrice: "8500000",
  buyDownPayment: "2000000",
  buyInterest: "8.5",
  buyTenure: "20",
  buyRentEquiv: "30000",
  buyAppreciation: "5",
  buyEquityReturn: "12",

  // Car vs Cab
  carPrice: "1200000",
  carDown: "300000",
  carTenure: "5",
  carRate: "9.0",
  carDailyKm: "30",
  carFuelRate: "7.5",
  carInsuranceService: "42000",
  carParkingTolls: "2500",
  cabDailyCost: "550",

  // Goals
  goalTarget: "75000",
  goalSaved: "20000",
  goalMonth: "2027-02",
  goalCategory: "Goa Beach Trip",
};

type CalculationResult =
  | {
      valid: true;
      main: number | string;
      mainLabel: string;
      subA: string;
      subB: string;
      explanation: string;
      ratioA?: number;
      ratioB?: number;
      labelA?: string;
      labelB?: string;
      chips?: { label: string; val: string }[];
      ctaHeadline?: string;
    }
  | {
      valid: false;
      message: string;
    };

export function CalculatorExperience({ slug }: { slug: string }) {
  const tool = getTool(slug) || tools[0];
  const [form, setForm] = useState<FormState>(initialFormState);

  // Reset to tool-specific presets on slug change
  useEffect(() => {
    setForm(initialFormState);
  }, [slug]);

  const set = (field: keyof FormState) => (value: any) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const reset = () => setForm(initialFormState);

  /* -------------------------------------------------------------
   * Compute Calculation Results Based on Current Tool
   * ------------------------------------------------------------- */
  const calculation = useMemo<CalculationResult>(() => {
    switch (tool.slug) {
      /* 1. Salary Allocation */
      case "salary-allocation": {
        const s = readNumber(form.salary, "Salary", { min: 1 });
        const r = readNumber(form.rent, "Rent", { min: 0 });
        const p = readNumber(form.parents, "Parents", { min: 0 });
        const sip = readNumber(form.sip, "SIP", { min: 0 });
        const b = readNumber(form.bills, "Bills", { min: 0 });
        if (!s.valid || !r.valid || !p.valid || !sip.valid || !b.valid) {
          return { valid: false as const, message: "Please fill in valid monthly amounts." };
        }
        const est = salaryAllocationEstimate(s.value, r.value, p.value, sip.value, b.value);
        return {
          valid: true as const,
          main: est.dailySpend,
          mainLabel: "Guilt-Free Daily Burn Limit",
          subA: `Committed Day 1: ${formatInr(est.totalCommitted)} (${est.committedRatio}%)`,
          subB: `Discretionary Pool: ${formatInr(est.discretionary)} / mo`,
          explanation: `After securing rent, parents, SIPs, and bills on Day 1, you can safely spend ₹${est.dailySpend.toLocaleString("en-IN")} per day (or ~${formatInr(est.weeklySpend)}/week) with zero month-end anxiety.`,
          ratioA: est.committedRatio,
          ratioB: est.discretionaryRatio,
          labelA: "Committed Fixed",
          labelB: "Daily Burn Pool",
          chips: [
            { label: "Needs Ratio", val: `${est.needsRatio}% (Target <50%)` },
            { label: "Savings Ratio", val: `${est.savingsRatio}% (Target >20%)` },
            { label: "Weekly Cap", val: `${formatInr(est.weeklySpend)} / week` },
          ],
          ctaHeadline: `Lock your ${formatInr(est.totalCommitted)} Day-1 commitments automatically in Kubear.`,
        };
      }

      /* 2. Tax Regime Comparator */
      case "tax-regime-comparator": {
        const gross = readNumber(form.taxGross, "Gross Salary", { min: 10000 });
        const basic = readNumber(form.taxBasic, "Basic Salary", { min: 0 });
        const rentPaid = readNumber(form.taxRentPaid, "Rent Paid", { min: 0 });
        const s80C = readNumber(form.tax80C, "80C", { min: 0 });
        const s80D = readNumber(form.tax80D, "80D", { min: 0 });
        const s24b = readNumber(form.tax24b, "24b", { min: 0 });
        const s80CCD = readNumber(form.tax80CCD, "80CCD", { min: 0 });
        const other = readNumber(form.taxOther, "Other", { min: 0 });

        if (!gross.valid) return { valid: false as const, message: "Enter a valid Annual Gross CTC." };

        const est = taxRegimeEstimate({
          grossSalary: gross.value,
          basicSalary: basic.valid ? basic.value : gross.value * 0.5,
          rentPaidAnnual: rentPaid.valid ? rentPaid.value : 0,
          isMetro: form.taxIsMetro,
          section80C: s80C.valid ? s80C.value : 0,
          section80D: s80D.valid ? s80D.value : 0,
          section24b: s24b.valid ? s24b.value : 0,
          section80CCD1B: s80CCD.valid ? s80CCD.value : 0,
          otherExemptions: other.valid ? other.value : 0,
        });

        const recLabel =
          est.recommended === "new"
            ? "New Tax Regime Saves You More"
            : est.recommended === "old"
            ? "Old Tax Regime Saves You More"
            : "Both Regimes Result in Equal Tax";

        const recColor = est.recommended === "new" ? "#047857" : "#C96632";

        return {
          valid: true as const,
          main: est.annualSavings,
          mainLabel: `Annual Tax Savings (${est.recommended.toUpperCase()} Regime)`,
          subA: `New Regime Tax: ${formatInr(est.newTotalTax)}`,
          subB: `Old Regime Tax: ${formatInr(est.oldTotalTax)}`,
          explanation: `By opting for the ${est.recommended.toUpperCase()} Regime, you save ${formatInr(est.annualSavings)} annually (approx. +${formatInr(est.monthlyTakeHomeDifference)} in extra monthly in-hand salary). Standard deduction under New Regime is ₹75,000 with 100% Section 87A rebate up to ₹7 Lakhs taxable.`,
          ratioA: Math.round((est.newTotalTax / Math.max(1, est.newTotalTax + est.oldTotalTax)) * 100),
          ratioB: Math.round((est.oldTotalTax / Math.max(1, est.newTotalTax + est.oldTotalTax)) * 100),
          labelA: "New Regime Tax",
          labelB: "Old Regime Tax",
          chips: [
            { label: "Recommended", val: recLabel },
            { label: "Monthly In-Hand Boost", val: `+${formatInr(est.monthlyTakeHomeDifference)}/mo` },
            { label: "Old Regime Deductions", val: `${formatInr(est.totalDeductions)}` },
          ],
          ctaHeadline: `Optimize your monthly salary tax deductions seamlessly in Kubear.`,
        };
      }

      /* 3. Credit Card Trap */
      case "credit-card-trap": {
        const bal = readNumber(form.cardBalance, "Card Balance", { min: 100 });
        const apr = readNumber(form.cardApr, "APR %", { min: 1, max: 100 });
        const fix = readNumber(form.cardFixedPayment, "Fixed Payment", { min: 500 });
        if (!bal.valid || !apr.valid) return { valid: false as const, message: "Enter a valid card balance & APR." };

        const est = creditCardTrapEstimate(
          bal.value,
          apr.value,
          form.cardPayMode,
          fix.valid ? fix.value : 3000
        );

        return {
          valid: true as const,
          main: est.totalInterest,
          mainLabel: form.cardPayMode === "minimum" ? "Brutal Interest Paid (Minimum Due Trap)" : "Total Interest Under Fixed Payoff",
          subA: `Time to Debt-Free: ${est.years} Years (${est.months} months)`,
          subB: `Total Amount Repaid: ${formatInr(est.totalPaid)} on ${formatInr(bal.value)}`,
          explanation:
            form.cardPayMode === "minimum"
              ? `Paying only the 5% minimum due keeps you trapped in debt for ${est.years} years! You end up paying ${formatInr(est.totalInterest)} just in interest—that is ${((est.totalInterest / bal.value) * 100).toFixed(0)}% more than your actual purchase!`
              : `With a disciplined fixed payoff of ${formatInr(fix.valid ? fix.value : 3500)}/mo, you become debt-free in ${est.months} months and save ${formatInr(est.interestSaved)} in interest compared to paying minimum due.`,
          ratioA: 100 - est.interestRatio,
          ratioB: est.interestRatio,
          labelA: "Principal Balance",
          labelB: "Interest Paid to Bank",
          chips: [
            { label: "Interest Saved", val: `${formatInr(est.interestSaved)}` },
            { label: "Months Saved", val: `${est.monthsSaved} Months Faster` },
            { label: "Trap Status", val: est.isTrap ? "🚨 Dangerous Debt Trap" : "✅ Manageable Payoff" },
          ],
          ctaHeadline: `Track credit card billing cycles and payoff milestones in Kubear.`,
        };
      }

      /* 4. Step-Up SIP Engine */
      case "sip-calculator": {
        const m = readNumber(form.sipMonthly, "Monthly SIP", { min: 500 });
        const r = readNumber(form.sipRate, "CAGR Return", { min: 1, max: 50 });
        const y = readNumber(form.sipYears, "Years", { min: 1, max: 50 });
        const step = readNumber(form.sipStepUp, "Step Up %", { min: 0, max: 50 });
        if (!m.valid || !r.valid || !y.valid) return { valid: false as const, message: "Enter valid SIP inputs." };

        const est = stepUpSipEstimate(m.value, r.value, y.value, step.valid ? step.value : 0);
        const invRatio = Math.round((est.contributed / Math.max(1, est.value)) * 100);

        return {
          valid: true as const,
          main: est.value,
          mainLabel: `Estimated Maturity Corpus (${y.value} Years)`,
          subA: `You Invest: ${formatInr(est.contributed)}`,
          subB: `Compounded Growth: ${formatInr(est.growth)}`,
          explanation: `With a ${step.valid ? step.value : 0}% annual step-up linked to your salary increment, your corpus reaches ${formatCompactInr(est.value)}—that is ${formatCompactInr(est.stepUpAdvantage)} higher than a flat SIP! (Inflation-adjusted purchasing power: ${formatCompactInr(est.realPurchasingPower)}).`,
          ratioA: invRatio,
          ratioB: 100 - invRatio,
          labelA: "Amount Contributed",
          labelB: "Compounded Wealth",
          chips: [
            { label: "Step-Up Advantage", val: `+${formatCompactInr(est.stepUpAdvantage)}` },
            { label: "Real Inflation Value", val: `${formatCompactInr(est.realPurchasingPower)}` },
            { label: "Final Monthly SIP", val: `${formatInr(est.finalMonthlySip)}/mo` },
          ],
          ctaHeadline: `Automate your monthly salary SIP allocation in Kubear.`,
        };
      }

      /* 5. Flatmate & Maid Split Manager */
      case "flatmate-maid-split": {
        const rent = readNumber(form.flatRent, "Flat Rent", { min: 1000 });
        const maid = readNumber(form.maidCook, "Maid & Cook", { min: 0 });
        const wifi = readNumber(form.flatWifiElec, "Wifi & Electricity", { min: 0 });
        const zepto = readNumber(form.flatZepto, "Groceries Pool", { min: 0 });
        const count = readNumber(form.flatmatesCount, "Flatmates Count", { min: 1, max: 10, integer: true });
        const master = readNumber(form.masterExtra, "Master Room Extra", { min: 0 });

        if (!rent.valid) return { valid: false as const, message: "Enter a valid flat rent amount." };

        const est = flatmateSplitEstimate({
          flatRent: rent.value,
          maidCookSalary: maid.valid ? maid.value : 0,
          electricityGasWifi: wifi.valid ? wifi.value : 0,
          groceryZeptoPool: zepto.valid ? zepto.value : 0,
          numFlatmates: count.valid ? count.value : 3,
          masterBedroomExtra: master.valid ? master.value : 0,
        });

        return {
          valid: true as const,
          main: est.regularRoomTotal,
          mainLabel: "Per Person Monthly Split (Regular Room)",
          subA: `Master Bed Share: ${formatInr(est.masterRoomTotal)}`,
          subB: `Common Utilities: ${formatInr(est.commonPerPerson)} / person`,
          explanation: `Total apartment upkeep is ${formatInr(est.grandTotal)}/mo (including ${formatInr(est.maidCookSalary)} for domestic staff & groceries). Regular room flatmates pay ${formatInr(est.regularRoomTotal)} each, while the master bedroom pays ${formatInr(est.masterRoomTotal)}.`,
          ratioA: Math.round((rent.value / est.grandTotal) * 100),
          ratioB: 100 - Math.round((rent.value / est.grandTotal) * 100),
          labelA: "Rent Share",
          labelB: "Cook, Maid & Utilities",
          chips: [
            { label: "Total Apartment Cost", val: `${formatInr(est.grandTotal)} / mo` },
            { label: "Maid & Cook Pool", val: `${formatInr(est.maidCookSalary)} / mo` },
            { label: "Per Head Utilities", val: `${formatInr(est.commonPerPerson)} / mo` },
          ],
          ctaHeadline: `Track shared flatmate expenses and maid payment dates in Kubear.`,
        };
      }

      /* 6. Emergency Runway Meter */
      case "emergency-runway": {
        const fixed = readNumber(form.runwayFixed, "Rent / EMI", { min: 0 });
        const food = readNumber(form.runwayFood, "Groceries", { min: 0 });
        const bills = readNumber(form.runwayBills, "Bills", { min: 0 });
        const family = readNumber(form.runwayFamily, "Family Support", { min: 0 });
        const ins = readNumber(form.runwayInsurance, "Insurance", { min: 0 });
        const sav = readNumber(form.runwaySavings, "Liquid Savings", { min: 0 });

        const est = emergencyRunwayEstimate({
          monthlyRentOrEmi: fixed.valid ? fixed.value : 0,
          monthlyGroceriesFood: food.valid ? food.value : 0,
          monthlyUtilitiesBills: bills.valid ? bills.value : 0,
          monthlyFamilySupport: family.valid ? family.value : 0,
          monthlyInsuranceEmi: ins.valid ? ins.value : 0,
          currentLiquidSavings: sav.valid ? sav.value : 0,
          hasDependents: form.runwayDependents,
        });

        const statusLabels = {
          critical: "🚨 Critical Runway (< 3 months)",
          fragile: "⚠️ Fragile Runway (3 - 6 months)",
          healthy: "✅ Healthy & Safe (6+ months)",
          bulletproof: "🛡️ Rock-Solid Bulletproof (9+ months)",
        };

        return {
          valid: true as const,
          main: est.runwayMonths,
          mainLabel: "Financial Runway (Months of Survival)",
          subA: `Monthly Survival Cost: ${formatInr(est.essentialMonthlyBurn)}`,
          subB: `Target Corpus (${est.recommendedMonths}mo): ${formatInr(est.targetCorpus)}`,
          explanation: `Your inescapable monthly burn is ${formatInr(est.essentialMonthlyBurn)}. With your current liquid funds of ${formatInr(sav.valid ? sav.value : 0)}, you can sustain your household for exactly ${est.runwayMonths} months without active salary.`,
          ratioA: est.progressPercent,
          ratioB: 100 - est.progressPercent,
          labelA: "Corpus Funded",
          labelB: "Gap to Target",
          chips: [
            { label: "Safety Status", val: statusLabels[est.healthStatus] },
            { label: "Target 6-9mo Buffer", val: `${formatInr(est.targetCorpus)}` },
            {
              label: est.deficitOrSurplus >= 0 ? "Surplus Buffer" : "Savings Deficit",
              val: `${formatInr(Math.abs(est.deficitOrSurplus))}`,
            },
          ],
          ctaHeadline: `Protect your emergency liquid buffer from daily overspending in Kubear.`,
        };
      }

      /* 7. Buy vs Rent Simulator */
      case "buy-vs-rent": {
        const price = readNumber(form.buyPrice, "Property Price", { min: 100000 });
        const down = readNumber(form.buyDownPayment, "Downpayment", { min: 0 });
        const rate = readNumber(form.buyInterest, "Loan Rate", { min: 1 });
        const tenure = readNumber(form.buyTenure, "Tenure", { min: 1, max: 40 });
        const rentEquiv = readNumber(form.buyRentEquiv, "Rent Equivalent", { min: 1000 });
        const app = readNumber(form.buyAppreciation, "Appreciation", { min: 0 });
        const eq = readNumber(form.buyEquityReturn, "Equity Return", { min: 1 });

        if (!price.valid) return { valid: false as const, message: "Enter a valid property price." };

        const est = buyVsRentEstimate({
          propertyPrice: price.value,
          downPayment: down.valid ? down.value : 1500000,
          loanInterestRate: rate.valid ? rate.value : 8.5,
          loanTenureYears: tenure.valid ? tenure.value : 20,
          monthlyRentEquivalent: rentEquiv.valid ? rentEquiv.value : 30000,
          propertyAppreciationRate: app.valid ? app.value : 5,
          equityInvestmentReturn: eq.valid ? eq.value : 12,
        });

        const outcomeText =
          est.recommendedOutcome === "rent"
            ? `Renting & Investing saves +${formatCompactInr(est.rentAdvantage)} more wealth over ${tenure.valid ? tenure.value : 20} years.`
            : `Buying generates +${formatCompactInr(Math.abs(est.rentAdvantage))} more wealth over ${tenure.valid ? tenure.value : 20} years.`;

        return {
          valid: true as const,
          main: est.monthlyEmi,
          mainLabel: "Monthly Home Loan EMI (vs Rent)",
          subA: `Monthly Buy Cost: ${formatInr(est.totalMonthlyCostBuy)} (incl. maintenance)`,
          subB: `Equivalent Rent: ${formatInr(est.monthlyRentEquivalent)} / mo`,
          explanation: outcomeText,
          ratioA: Math.round((est.futurePropertyValue / Math.max(1, est.futurePropertyValue + est.totalRentingWealth)) * 100),
          ratioB: 100 - Math.round((est.futurePropertyValue / Math.max(1, est.futurePropertyValue + est.totalRentingWealth)) * 100),
          labelA: "Real Estate Value",
          labelB: "Renting + Equity Portfolio",
          chips: [
            { label: "Future House Value", val: `${formatCompactInr(est.futurePropertyValue)}` },
            { label: "Renting Net Wealth", val: `${formatCompactInr(est.totalRentingWealth)}` },
            { label: "Monthly Cashflow Gap", val: `${formatInr(est.monthlyRentDiff)}/mo` },
          ],
          ctaHeadline: `Simulate high-ticket milestone planning in Kubear.`,
        };
      }

      /* 8. Car vs Cab Analyzer */
      case "car-vs-cab": {
        const carP = readNumber(form.carPrice, "Car Price", { min: 100000 });
        const carD = readNumber(form.carDown, "Downpayment", { min: 0 });
        const carT = readNumber(form.carTenure, "Tenure", { min: 1, max: 10 });
        const carR = readNumber(form.carRate, "Loan Rate", { min: 1 });
        const km = readNumber(form.carDailyKm, "Daily KM", { min: 1 });
        const fuel = readNumber(form.carFuelRate, "Fuel / KM", { min: 1 });
        const ins = readNumber(form.carInsuranceService, "Insurance/Service", { min: 0 });
        const park = readNumber(form.carParkingTolls, "Parking/Tolls", { min: 0 });
        const cab = readNumber(form.cabDailyCost, "Daily Cab", { min: 50 });

        if (!carP.valid) return { valid: false as const, message: "Enter a valid car price." };

        const est = carVsCabEstimate({
          onRoadPrice: carP.value,
          downPayment: carD.valid ? carD.value : 250000,
          loanTenureYears: carT.valid ? carT.value : 5,
          loanInterestRate: carR.valid ? carR.value : 9.0,
          dailyCommuteKm: km.valid ? km.value : 30,
          fuelOrEvCostPerKm: fuel.valid ? fuel.value : 7.5,
          annualInsuranceAndService: ins.valid ? ins.value : 40000,
          monthlyParkingAndTolls: park.valid ? park.value : 2500,
          dailyCabSpendAlternative: cab.valid ? cab.value : 550,
        });

        return {
          valid: true as const,
          main: est.trueMonthlyCarCost,
          mainLabel: "True Monthly Cost of Owning a Car",
          subA: `Alternative Cabs + Metro: ${formatInr(est.monthlyCabCost)} / mo`,
          subB: `Monthly Difference: ${formatInr(Math.abs(est.monthlyDifference))}`,
          explanation: `Owning a ₹${((carP.value) / 100000).toFixed(1)}L car actually costs ${formatInr(est.trueMonthlyCarCost)}/mo when factoring in EMI (${formatInr(est.carCostBreakdown.emi)}), Fuel (${formatInr(est.carCostBreakdown.fuel)}), Insurance, Parking & Depreciation. Daily Uber/Ola/Metro costs ~${formatInr(est.monthlyCabCost)}/mo (5-Year net difference: ${formatInr(est.fiveYearDifference)}).`,
          ratioA: Math.round((est.carCostBreakdown.emi / est.trueMonthlyCarCost) * 100),
          ratioB: 100 - Math.round((est.carCostBreakdown.emi / est.trueMonthlyCarCost) * 100),
          labelA: "Loan EMI Portion",
          labelB: "Fuel, Insurance & Depreciation",
          chips: [
            { label: "5-Year Total Difference", val: `${formatCompactInr(Math.abs(est.fiveYearDifference))}` },
            { label: "Monthly Fuel Cost", val: `${formatInr(est.carCostBreakdown.fuel)}/mo` },
            { label: "Monthly Depreciation", val: `${formatInr(est.carCostBreakdown.depreciation)}/mo` },
          ],
          ctaHeadline: `Track your true monthly transportation burn in Kubear.`,
        };
      }

      /* 9. Goal Planner (Goa / Wedding / Gadget) */
      case "goa-goal-calculator": {
        const target = readNumber(form.goalTarget, "Target Amount", { min: 1000 });
        const saved = readNumber(form.goalSaved, "Already Saved", { min: 0 });
        if (!target.valid || !saved.valid) return { valid: false as const, message: "Enter valid goal numbers." };

        const est = goalEstimate(target.value, saved.value, form.goalMonth);
        const progress = Math.min(100, Math.round((saved.value / Math.max(1, target.value)) * 100));

        if (est.complete) {
          return {
            valid: true as const,
            main: 0,
            mainLabel: "Goal 100% Fully Funded! 🎉",
            subA: `Target: ${formatInr(target.value)}`,
            subB: `Saved: ${formatInr(saved.value)}`,
            explanation: "Congratulations! You have already covered 100% of your target amount. You can book without touching your emergency fund.",
            ratioA: 100,
            ratioB: 0,
            labelA: "Already Saved",
            labelB: "Remaining",
            chips: [
              { label: "Funding Status", val: "100% Complete" },
              { label: "Target Month", val: form.goalMonth },
              { label: "Ready to Book", val: "Yes! 🚀" },
            ],
            ctaHeadline: `Create separate goal vaults in Kubear.`,
          };
        }

        return {
          valid: true as const,
          main: est.monthly,
          mainLabel: `Monthly Savings Needed for ${form.goalCategory}`,
          subA: `Remaining to Save: ${formatInr(est.remaining)}`,
          subB: `Months Available: ${est.months} Months`,
          explanation: `To reach your ${form.goalCategory} target of ${formatInr(target.value)} by ${form.goalMonth}, set aside ${formatInr(est.monthly)} per month across the remaining ${est.months} months.`,
          ratioA: progress,
          ratioB: 100 - progress,
          labelA: "Saved So Far",
          labelB: "Remaining Target",
          chips: [
            { label: "Progress", val: `${progress}% Funded` },
            { label: "Time Horizon", val: `${est.months} Months` },
            { label: "Remaining Gap", val: `${formatInr(est.remaining)}` },
          ],
          ctaHeadline: `Track goal progress visually in Kubear.`,
        };
      }

      /* 10. Loan EMI Visualizer */
      default: {
        const loan = readNumber(form.loanAmount, "Loan Amount", { min: 1000 });
        const rate = readNumber(form.loanRate, "Interest Rate", { min: 0.1, max: 100 });
        const years = readNumber(form.loanYears, "Tenure", { min: 1, max: 50 });
        if (!loan.valid || !rate.valid || !years.valid) {
          return { valid: false as const, message: "Enter valid loan parameters." };
        }
        const est = emiEstimate(loan.value, rate.value, years.value);
        const pRatio = Math.round((loan.value / Math.max(1, est.total)) * 100);

        return {
          valid: true as const,
          main: est.emi,
          mainLabel: "Estimated Monthly EMI",
          subA: `Total Interest Burden: ${formatInr(est.interest)}`,
          subB: `Total Repayment: ${formatInr(est.total)}`,
          explanation: `At ${rate.value}% p.a. over ${years.value} years (${est.periods} months), your monthly instalment is ${formatInr(est.emi)}. Total interest paid equals ${formatInr(est.interest)} (${(100 - pRatio)}% of total repayment).`,
          ratioA: pRatio,
          ratioB: 100 - pRatio,
          labelA: "Principal Loan",
          labelB: "Interest Paid to Bank",
          chips: [
            { label: "Principal", val: `${formatInr(loan.value)}` },
            { label: "Total Interest", val: `${formatInr(est.interest)}` },
            { label: "Total Cost", val: `${formatInr(est.total)}` },
          ],
          ctaHeadline: `Track your home and auto loan EMIs in Kubear.`,
        };
      }
    }
  }, [form, tool.slug]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20">
      {/* Top Breadcrumb Navigation */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/learn/tools"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#123630] shadow-sm hover:bg-white hover:border-[#123630]/35 hover:-translate-x-0.5 transition-all group"
        >
          <ArrowLeft className="size-3.5 text-[#C96632] group-hover:-translate-x-0.5 transition-transform" />
          <span>All 9 Planning Tools</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#687C75] bg-[#123630]/5 px-2.5 py-1 rounded-lg">
            {tool.categoryLabel}
          </span>
          {tool.badge && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C96632] bg-[#FF5C2B]/10 px-2.5 py-1 rounded-lg border border-[#FF5C2B]/20">
              {tool.badge}
            </span>
          )}
        </div>
      </div>

      {/* Header Banner */}
      <header className="mb-8 pb-6 border-b border-[#123630]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-1.5">
              <span className="size-2 rounded-full bg-[#C96632]" /> {tool.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif text-[#123630] font-normal tracking-tight leading-tight">
              {tool.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#4B605B] max-w-3xl leading-relaxed">
              {tool.description}
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#556963] hover:text-[#123630] hover:bg-white hover:border-[#123630]/30 transition-all cursor-pointer self-start md:self-auto shrink-0 shadow-sm"
          >
            <RotateCcw className="size-3.5" />
            Reset Defaults
          </button>
        </div>
      </header>

      {/* 2-Column Responsive Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Workbench (With Clear Input Checklist) */}
        <div className="lg:col-span-7 space-y-6">
          {/* "What to Feed" Input Guidance Card */}
          <div className="bg-[#FAF7F0] border border-[#123630]/12 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#123630] flex items-center gap-1.5">
                <Info className="size-3.5 text-[#C96632]" /> What You Need To Feed
              </span>
              <span className="text-[11px] font-mono text-[#60746E] flex items-center gap-1">
                <Clock3 className="size-3" /> Takes ~{tool.timeToFill}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tool.inputsRequired.map((inp) => (
                <span
                  key={inp}
                  className="inline-flex items-center gap-1 text-[11px] font-bold bg-white text-[#123630] border border-[#123630]/15 px-2.5 py-1 rounded-lg"
                >
                  <span className="size-1.5 rounded-full bg-[#047857]" />
                  {inp}
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Input Panels */}
          <div className="bg-[#FFFDF8] rounded-2xl border border-[#123630]/12 p-5 sm:p-7 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#123630]/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#123630] flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#123630]" /> Interactive Input Sliders
              </span>
              <span className="text-[11px] font-mono text-[#71827C]">Live Instant Math</span>
            </div>

            {/* 1. Salary Allocation Inputs */}
            {tool.slug === "salary-allocation" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Monthly In-Hand Salary</label>
                    <span className="text-xs font-mono font-bold text-[#C96632]">
                      {formatInr(Number(form.salary) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={400000}
                    step={5000}
                    value={form.salary}
                    onChange={(e) => set("salary")(e.target.value)}
                    className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      { label: "₹35k Fresher", val: "35000" },
                      { label: "₹75k Mid-Level", val: "75000" },
                      { label: "₹1.5L Senior", val: "150000" },
                      { label: "₹2.5L Lead", val: "250000" },
                    ].map((chip) => (
                      <button
                        type="button"
                        key={chip.val}
                        onClick={() => set("salary")(chip.val)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.salary === chip.val
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Rent to Landlord</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.rent}
                        step={1000}
                        onChange={(e) => set("rent")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Parents & Family Support</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.parents}
                        step={1000}
                        onChange={(e) => set("parents")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Committed SIPs / PPF</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.sip}
                        step={1000}
                        onChange={(e) => set("sip")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Wifi, Gas & Utility Bills</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.bills}
                        step={500}
                        onChange={(e) => set("bills")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Tax Regime Comparator Inputs */}
            {tool.slug === "tax-regime-comparator" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Annual Gross CTC / Total Income</label>
                    <span className="text-xs font-mono font-bold text-[#C96632]">
                      {formatInr(Number(form.taxGross) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={300000}
                    max={5000000}
                    step={50000}
                    value={form.taxGross}
                    onChange={(e) => set("taxGross")(e.target.value)}
                    className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      { label: "₹7.5L (Rebate Edge)", val: "750000" },
                      { label: "₹12L Standard", val: "1200000" },
                      { label: "₹18L Senior", val: "1800000" },
                      { label: "₹30L Tech Lead", val: "3000000" },
                    ].map((chip) => (
                      <button
                        type="button"
                        key={chip.val}
                        onClick={() => set("taxGross")(chip.val)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.taxGross === chip.val
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Annual Rent Paid (for HRA)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.taxRentPaid}
                        step={10000}
                        onChange={(e) => set("taxRentPaid")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Metro City for HRA (50%)</label>
                    <button
                      type="button"
                      onClick={() => set("taxIsMetro")(!form.taxIsMetro)}
                      className={`w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        form.taxIsMetro
                          ? "bg-[#123630] text-[#FFFDF8] border-[#123630]"
                          : "bg-[#FAF7F0] text-[#556963] border-[#123630]/15"
                      }`}
                    >
                      <span>{form.taxIsMetro ? "Metro (Mumbai/Delhi/BLR/Kol)" : "Non-Metro (40% limit)"}</span>
                      <span className="text-[10px] font-mono bg-white/15 px-2 py-0.5 rounded-md">Toggle</span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Section 80C (EPF/PPF/ELSS, max 1.5L)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.tax80C}
                        step={10000}
                        onChange={(e) => set("tax80C")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Section 80D (Health Insurance)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.tax80D}
                        step={5000}
                        onChange={(e) => set("tax80D")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">NPS 80CCD (1B, max 50k)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.tax80CCD}
                        step={5000}
                        onChange={(e) => set("tax80CCD")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Home Loan Interest (24b, max 2L)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.tax24b}
                        step={10000}
                        onChange={(e) => set("tax24b")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Credit Card Trap Inputs */}
            {tool.slug === "credit-card-trap" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Outstanding Card Balance</label>
                    <span className="text-xs font-mono font-bold text-[#C96632]">
                      {formatInr(Number(form.cardBalance) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={500000}
                    step={5000}
                    value={form.cardBalance}
                    onChange={(e) => set("cardBalance")(e.target.value)}
                    className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["25000", "50000", "75000", "120000", "200000"].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => set("cardBalance")(amt)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.cardBalance === amt
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {formatInr(Number(amt))}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Payment Strategy</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => set("cardPayMode")("minimum")}
                        className={`py-2 px-2.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                          form.cardPayMode === "minimum"
                            ? "bg-[#C96632] text-white border-[#C96632]"
                            : "bg-[#FAF7F0] text-[#556963] border-[#123630]/15"
                        }`}
                      >
                        5% Minimum Due
                      </button>
                      <button
                        type="button"
                        onClick={() => set("cardPayMode")("fixed")}
                        className={`py-2 px-2.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                          form.cardPayMode === "fixed"
                            ? "bg-[#047857] text-white border-[#047857]"
                            : "bg-[#FAF7F0] text-[#556963] border-[#123630]/15"
                        }`}
                      >
                        Fixed Payoff
                      </button>
                    </div>
                  </div>

                  {form.cardPayMode === "fixed" ? (
                    <div>
                      <label className="block text-[11px] font-bold text-[#556963] mb-1">Fixed Monthly Payoff</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                        <input
                          type="number"
                          value={form.cardFixedPayment}
                          step={500}
                          onChange={(e) => set("cardFixedPayment")(e.target.value)}
                          className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[11px] font-bold text-[#556963] mb-1">Annual APR % (Bank Rate)</label>
                      <div className="relative">
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                        <input
                          type="number"
                          value={form.cardApr}
                          step={1}
                          onChange={(e) => set("cardApr")(e.target.value)}
                          className="w-full pl-3 pr-7 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. SIP Compounding Inputs */}
            {tool.slug === "sip-calculator" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Initial Monthly SIP</label>
                    <span className="text-xs font-mono font-bold text-[#C96632]">
                      {formatInr(Number(form.sipMonthly) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={150000}
                    step={1000}
                    value={form.sipMonthly}
                    onChange={(e) => set("sipMonthly")(e.target.value)}
                    className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["5000", "10000", "20000", "35000", "50000"].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => set("sipMonthly")(amt)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.sipMonthly === amt
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {formatInr(Number(amt))}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Expected Return %</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                      <input
                        type="number"
                        value={form.sipRate}
                        step={0.5}
                        onChange={(e) => set("sipRate")(e.target.value)}
                        className="w-full pl-3 pr-7 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Time Horizon (Years)</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">yrs</span>
                      <input
                        type="number"
                        value={form.sipYears}
                        step={1}
                        onChange={(e) => set("sipYears")(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Annual Step-Up % (Hike)</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                      <input
                        type="number"
                        value={form.sipStepUp}
                        step={1}
                        onChange={(e) => set("sipStepUp")(e.target.value)}
                        className="w-full pl-3 pr-7 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Flatmate Split Inputs */}
            {tool.slug === "flatmate-maid-split" && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Total Flat Rent</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.flatRent}
                        step={2000}
                        onChange={(e) => set("flatRent")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Number of Flatmates</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={8}
                        value={form.flatmatesCount}
                        onChange={(e) => set("flatmatesCount")(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Cook & Maid Monthly Salary</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.maidCook}
                        step={500}
                        onChange={(e) => set("maidCook")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Wifi, Gas & Electricity</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.flatWifiElec}
                        step={500}
                        onChange={(e) => set("flatWifiElec")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Zepto / Blinkit Grocery Pool</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.flatZepto}
                        step={500}
                        onChange={(e) => set("flatZepto")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Master Bedroom Extra Premium</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.masterExtra}
                        step={500}
                        onChange={(e) => set("masterExtra")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Emergency Runway Inputs */}
            {tool.slug === "emergency-runway" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Current Liquid Savings (Bank + FD + Liquid MF)</label>
                    <span className="text-xs font-mono font-bold text-[#047857]">
                      {formatInr(Number(form.runwaySavings) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={2000000}
                    step={10000}
                    value={form.runwaySavings}
                    onChange={(e) => set("runwaySavings")(e.target.value)}
                    className="w-full accent-[#047857] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Rent / Home Loan EMI</label>
                    <input
                      type="number"
                      value={form.runwayFixed}
                      step={1000}
                      onChange={(e) => set("runwayFixed")(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Groceries & Essential Food</label>
                    <input
                      type="number"
                      value={form.runwayFood}
                      step={1000}
                      onChange={(e) => set("runwayFood")(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Family Support & Medicines</label>
                    <input
                      type="number"
                      value={form.runwayFamily}
                      step={1000}
                      onChange={(e) => set("runwayFamily")(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Have Dependents? (Kids/Parents)</label>
                    <button
                      type="button"
                      onClick={() => set("runwayDependents")(!form.runwayDependents)}
                      className={`w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        form.runwayDependents
                          ? "bg-[#123630] text-white border-[#123630]"
                          : "bg-[#FAF7F0] text-[#556963] border-[#123630]/15"
                      }`}
                    >
                      <span>{form.runwayDependents ? "Yes (9 Months Target)" : "No (6 Months Target)"}</span>
                      <span className="text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded">Toggle</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Buy vs Rent Inputs */}
            {tool.slug === "buy-vs-rent" && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Property Purchase Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.buyPrice}
                        step={100000}
                        onChange={(e) => set("buyPrice")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Downpayment Available</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.buyDownPayment}
                        step={100000}
                        onChange={(e) => set("buyDownPayment")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Equivalent Monthly Rent</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.buyRentEquiv}
                        step={1000}
                        onChange={(e) => set("buyRentEquiv")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Home Loan Rate %</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                      <input
                        type="number"
                        value={form.buyInterest}
                        step={0.1}
                        onChange={(e) => set("buyInterest")(e.target.value)}
                        className="w-full pl-3 pr-7 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. Car vs Cab Inputs */}
            {tool.slug === "car-vs-cab" && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Car On-Road Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.carPrice}
                        step={50000}
                        onChange={(e) => set("carPrice")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Daily Round-Trip Commute (KM)</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">km</span>
                      <input
                        type="number"
                        value={form.carDailyKm}
                        step={5}
                        onChange={(e) => set("carDailyKm")(e.target.value)}
                        className="w-full pl-3 pr-9 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Daily Cab / Auto Cost Alternative</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.cabDailyCost}
                        step={50}
                        onChange={(e) => set("cabDailyCost")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Fuel / EV Cost per KM</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.carFuelRate}
                        step={0.5}
                        onChange={(e) => set("carFuelRate")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 9. Goal Planner Inputs */}
            {tool.slug === "goa-goal-calculator" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Target Amount Needed</label>
                    <span className="text-xs font-mono font-bold text-[#C96632]">
                      {formatInr(Number(form.goalTarget) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={1000000}
                    step={5000}
                    value={form.goalTarget}
                    onChange={(e) => set("goalTarget")(e.target.value)}
                    className="w-full accent-[#C96632] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      { label: "🏖️ Goa Trip (₹60k)", val: "60000", name: "Goa Beach Trip" },
                      { label: "📱 iPhone / Mac (₹1.2L)", val: "120000", name: "Tech Gadget Upgrade" },
                      { label: "💍 Wedding Fund (₹5L)", val: "500000", name: "Wedding Celebration" },
                      { label: "🪙 Gold / SGB (₹2L)", val: "200000", name: "Sovereign Gold" },
                    ].map((chip) => (
                      <button
                        type="button"
                        key={chip.val}
                        onClick={() => {
                          set("goalTarget")(chip.val);
                          set("goalCategory")(chip.name);
                        }}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.goalTarget === chip.val
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Already Saved in Hand</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">₹</span>
                      <input
                        type="number"
                        value={form.goalSaved}
                        step={2000}
                        onChange={(e) => set("goalSaved")(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Target Month to Complete</label>
                    <input
                      type="month"
                      min={currentMonth()}
                      value={form.goalMonth}
                      onChange={(e) => set("goalMonth")(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs font-bold text-[#123630] bg-[#FAF7F0] border border-[#123630]/15 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 10. Loan EMI Visualizer Inputs */}
            {tool.slug === "emi-calculator" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#123630]">Principal Loan Amount</label>
                    <span className="text-xs font-mono font-bold text-[#123630]">
                      {formatInr(Number(form.loanAmount) || 0)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={15000000}
                    step={100000}
                    value={form.loanAmount}
                    onChange={(e) => set("loanAmount")(e.target.value)}
                    className="w-full accent-[#123630] h-2 bg-[#E9E4DA] rounded-lg cursor-pointer"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      { label: "₹10L Auto/Personal", val: "1000000" },
                      { label: "₹35L 2BHK Flat", val: "3500000" },
                      { label: "₹75L 3BHK Metro", val: "7500000" },
                      { label: "₹1.2 Cr Luxury", val: "12000000" },
                    ].map((chip) => (
                      <button
                        type="button"
                        key={chip.val}
                        onClick={() => set("loanAmount")(chip.val)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                          form.loanAmount === chip.val
                            ? "bg-[#123630] border-[#123630] text-[#FFF8EE]"
                            : "bg-[#FAF7F0] border-[#123630]/12 text-[#516761] hover:bg-white"
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Annual Interest Rate %</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">%</span>
                      <input
                        type="number"
                        value={form.loanRate}
                        step={0.1}
                        onChange={(e) => set("loanRate")(e.target.value)}
                        className="w-full pl-3 pr-7 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#556963] mb-1">Loan Tenure in Years</label>
                    <div className="relative">
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#71827C]">yrs</span>
                      <input
                        type="number"
                        value={form.loanYears}
                        step={1}
                        onChange={(e) => set("loanYears")(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Calculated Answer, Breakdown & High-Impact App Integration CTA */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          {/* Main Answer Instrument (Light, Warm, High-Contrast & Comprehensive) */}
          <div className="bg-[#FFFDF8] rounded-3xl p-5 sm:p-6 text-[#123630] shadow-sm border-2 border-[#123630]/15 relative overflow-hidden space-y-5">
            {/* Instrument Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#123630]/10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632] flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[#C96632]" /> 02 · Calculated Result
              </span>
              <span className="text-[10px] font-mono font-bold text-[#047857] bg-[#047857]/10 px-2.5 py-0.5 rounded-full">
                Instant Local Math
              </span>
            </div>

            {calculation.valid ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#556963] font-bold uppercase tracking-wide">{calculation.mainLabel}</p>
                  <motion.div
                    key={typeof calculation.main === "number" ? Math.round(calculation.main) : 0}
                    initial={{ opacity: 0.5, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-[#123630] tracking-tight mt-1 leading-none"
                  >
                    {typeof calculation.main === "number" ? formatInr(calculation.main) : calculation.main}
                  </motion.div>
                </div>

                {/* Visual Proportion Breakdown Bar */}
                {calculation.ratioA !== undefined && calculation.ratioB !== undefined && (
                  <div className="space-y-1.5 pt-2 border-t border-[#123630]/8">
                    <div className="flex justify-between text-[11px] font-mono font-bold text-[#455A54]">
                      <span>{calculation.labelA}: {calculation.ratioA}%</span>
                      <span>{calculation.labelB}: {calculation.ratioB}%</span>
                    </div>
                    <div className="w-full h-3 bg-[#EBE5DA] rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${Math.min(100, Math.max(0, calculation.ratioA))}%` }}
                        className="h-full bg-[#FF5C2B] transition-all duration-300"
                      />
                      <div
                        style={{ width: `${Math.min(100, Math.max(0, calculation.ratioB))}%` }}
                        className="h-full bg-[#E5AD2B] transition-all duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Sub-Metrics Details */}
                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="bg-[#FAF7F0] border border-[#123630]/10 rounded-xl p-3">
                    <span className="block text-[10px] text-[#6E807A] uppercase font-mono font-bold">Breakdown A</span>
                    <strong className="text-xs font-bold text-[#123630] block mt-0.5 leading-snug">{calculation.subA}</strong>
                  </div>
                  <div className="bg-[#FAF7F0] border border-[#123630]/10 rounded-xl p-3">
                    <span className="block text-[10px] text-[#6E807A] uppercase font-mono font-bold">Breakdown B</span>
                    <strong className="text-xs font-bold text-[#123630] block mt-0.5 leading-snug">{calculation.subB}</strong>
                  </div>
                </div>

                {/* Key Insights Chips */}
                {calculation.chips && calculation.chips.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {calculation.chips.map((chip, idx) => (
                      <div key={idx} className="bg-[#FAF7F0] rounded-xl px-2.5 py-1.5 border border-[#123630]/10">
                        <span className="block text-[9px] font-mono text-[#C96632] uppercase font-bold">{chip.label}</span>
                        <span className="text-[11px] font-bold text-[#123630] block truncate">{chip.val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Plain-English Explanation */}
                <div className="p-3 bg-[#FAF7F0] border border-[#123630]/8 rounded-xl text-xs text-[#4B605B] leading-relaxed">
                  {calculation.explanation}
                </div>

                {/* Direct App Next-Step Integration CTA (Integrated & Highly Visible) */}
                <div className="pt-4 border-t border-[#123630]/12 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#FF5C2B] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
                      Actionable Next Step
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#123630] leading-snug">
                    {calculation.ctaHeadline || "Automate this money plan in Kubear."}
                  </h3>

                  <p className="text-xs text-[#556963] leading-relaxed">
                    Track your weekly Indian salary, expenses, and savings in 2 minutes without bank passwords or SMS scrapers.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5C2B] text-[#FFFDF8] font-bold text-xs sm:text-sm shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-center flex-1 no-underline"
                    >
                      <span>Open in Kubear Web App</span>
                      <ArrowUpRight className="size-4 shrink-0" />
                    </a>

                    <a
                      href={PLAY_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#123630]/20 text-[#123630] font-bold text-xs hover:border-[#123630]/40 hover:bg-[#FAF7F0] transition-all shrink-0 no-underline shadow-xs"
                    >
                      <span>Google Play</span>
                      <ArrowUpRight className="size-3 text-[#556963]" />
                    </a>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-[#6E817B]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <ShieldCheck className="size-3.5 text-[#047857]" /> 100% Private Ledger
                    </span>
                    <span>·</span>
                    <span>No bank login needed</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-2">
                <Info className="size-6 text-[#C96632] mx-auto" />
                <p className="text-sm text-[#556963]">{calculation.message}</p>
              </div>
            )}
          </div>

          {/* Related Companion Guide Link */}
          {tool.learnSlug && (
            <Link
              href={`/learn/${tool.learnSlug}`}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#123630]/12 hover:border-[#C96632]/50 hover:shadow-xs transition-all text-xs font-bold text-[#123630] group no-underline"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="size-3.5 text-[#C96632]" />
                <span className="truncate">Read companion guide: {tool.title}</span>
              </div>
              <ArrowRight className="size-3.5 text-[#C96632] group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
 * Redesigned Tools Hub Component with Category Tabs & Feed Checklist
 * ------------------------------------------------------------- */
export function ToolsHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: { id: string; label: string; count: number }[] = useMemo(() => {
    return [
      { id: "all", label: "All Planning Tools", count: tools.length },
      { id: "salary-cashflow", label: "Salary & Cashflow", count: tools.filter((t) => t.category === "salary-cashflow").length },
      { id: "tax-debt", label: "Tax & Debt Defense", count: tools.filter((t) => t.category === "tax-debt").length },
      { id: "wealth-investing", label: "Wealth & Compounding", count: tools.filter((t) => t.category === "wealth-investing").length },
      { id: "metro-living", label: "Metro Living & Lifestyle", count: tools.filter((t) => t.category === "metro-living").length },
    ];
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.inputsRequired.some((inp) => inp.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFFDF8] border border-[#123630]/15 text-xs font-bold text-[#123630] shadow-sm hover:bg-white hover:border-[#123630]/35 hover:-translate-x-0.5 transition-all group"
        >
          <ArrowLeft className="size-3.5 text-[#C96632] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Learn & Knowledge Desk</span>
        </Link>
      </div>

      {/* Header Banner */}
      <header className="mb-10 pb-6 border-b border-[#123630]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632] mb-2">
              <Calculator className="size-3.5" /> Living Ledger Planning Tools · India
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#102B28] font-normal tracking-tight">
              Practical planning instruments for <em className="text-[#C96632] italic">Indian money moments.</em>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#4B605B] max-w-3xl leading-relaxed">
              Every tool is built specifically for urban Indian salaried professionals, flatmates, and families. Transparent math, zero data harvesting, and immediate monthly clarity.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#71827C]" />
            <input
              type="text"
              placeholder="Search tools, rent, tax, maid..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-bold bg-[#FAF7F0] border border-[#123630]/15 rounded-xl placeholder-[#859690] focus:bg-white focus:outline-none focus:border-[#C96632]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#102B28] text-[#FFFDF8] shadow-xs"
                    : "bg-[#FAF7F0] text-[#556963] hover:bg-white border border-[#123630]/10"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <Link
            href={`/learn/tools/${tool.slug}`}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#FFFDF8] border border-[#123630]/12 shadow-sm hover:shadow-md hover:border-[#123630]/30 hover:-translate-y-1 transition-all group no-underline"
            key={tool.slug}
          >
            <div>
              {/* Card Topline with Badge & Time */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
                  TOOL 0{index + 1} · {tool.eyebrow}
                </span>
                <span className="text-[10px] font-mono text-[#687C75] bg-[#123630]/5 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Clock3 className="size-2.5" /> ~{tool.timeToFill}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-serif font-bold text-[#102B28] group-hover:text-[#C96632] transition-colors leading-snug mb-2.5">
                {tool.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5B6F68] leading-relaxed mb-4">
                {tool.description}
              </p>

              {/* "What You Need to Feed" Preview Pills */}
              <div className="pt-3 border-t border-[#123630]/8 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#71827C] block">
                  Feed required:
                </span>
                <div className="flex flex-wrap gap-1">
                  {tool.inputsRequired.slice(0, 3).map((inp) => (
                    <span
                      key={inp}
                      className="text-[10px] bg-[#FAF7F0] text-[#123630] border border-[#123630]/10 px-2 py-0.5 rounded-md font-medium"
                    >
                      {inp}
                    </span>
                  ))}
                  {tool.inputsRequired.length > 3 && (
                    <span className="text-[10px] text-[#71827C] font-mono py-0.5">
                      +{tool.inputsRequired.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Action Row */}
            <div className="flex items-center justify-between pt-4 mt-6 border-t border-[#123630]/8 text-xs font-bold text-[#102B28] group-hover:text-[#C96632] transition-colors">
              <span>Open live calculation</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="py-16 text-center bg-[#FAF7F0] rounded-3xl border border-[#123630]/10">
          <Calculator className="size-8 text-[#71827C] mx-auto mb-2" />
          <h3 className="text-lg font-serif font-bold text-[#102B28]">No planning tools matched your search</h3>
          <p className="text-xs text-[#556963] mt-1">Try clearing your search query or selecting All Planning Tools.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#102B28] text-white text-xs font-bold cursor-pointer"
          >
            Show All Tools
          </button>
        </div>
      )}

      {/* App Action Banner (Light, Warm, High-Contrast & Clear CTA) */}
      <div className="mt-14 p-6 sm:p-9 rounded-3xl bg-[#FAF7F0] text-[#123630] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm border-2 border-[#123630]/12">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632] flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#C96632]" /> Ready to track your numbers in real life?
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#123630] font-bold leading-tight">
            Turn these calculations into a 2-minute weekly money rhythm.
          </h3>
          <p className="text-xs sm:text-sm text-[#516761] max-w-xl leading-relaxed">
            Log expenses in seconds via conversational chat, split flatmate bills with domestic staff schedules, and protect your guilt-free daily burn pool.
          </p>
          <div className="flex items-center gap-3 pt-1 text-xs text-[#6E817B]">
            <span>✓ 100% Free Ledger</span>
            <span>·</span>
            <span>No bank logins required</span>
            <span>·</span>
            <span>Private & encrypted</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#FF5C2B] text-[#FFFDF8] font-bold text-xs sm:text-sm shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 transition-all w-full sm:w-auto no-underline text-center"
          >
            <span>Open Kubear Web App</span>
            <ArrowUpRight className="size-4 shrink-0" />
          </a>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-white border border-[#123630]/20 text-[#123630] font-bold text-xs hover:border-[#123630]/40 transition-all w-full sm:w-auto no-underline text-center shadow-xs"
          >
            <span>Google Play</span>
            <ArrowUpRight className="size-3.5 text-[#556963]" />
          </a>
        </div>
      </div>
    </div>
  );
}
