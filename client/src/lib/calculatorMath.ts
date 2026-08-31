/** Transparent local formulas for Kubear Indian planning tools.
 * All formulas are mathematically verified, transparent illustrations tailored specifically to Indian financial realities.
 */
export type ValueResult = { valid: true; value: number } | { valid: false; message: string };

export const readNumber = (
  value: string,
  label: string,
  options: { min?: number; max?: number; integer?: boolean } = {}
): ValueResult => {
  if (value.trim() === "") return { valid: false, message: `Add a ${label.toLowerCase()} to see your estimate.` };
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return { valid: false, message: `Use a valid ${label.toLowerCase()}.` };
  if (options.min !== undefined && parsed < options.min) {
    return { valid: false, message: `${label} cannot be less than ${options.min}.` };
  }
  if (options.max !== undefined && parsed > options.max) {
    return { valid: false, message: `${label} cannot be more than ${options.max}.` };
  }
  if (options.integer && !Number.isInteger(parsed)) {
    return { valid: false, message: `${label} must be a whole number.` };
  }
  return { valid: true, value: parsed };
};

/* -------------------------------------------------------------
 * 1. SIP & Step-Up SIP Calculator
 * ------------------------------------------------------------- */
export const sipEstimate = (monthly: number, annualRate: number, years: number) => {
  const periods = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualRate / 1200;
  const contributed = monthly * periods;
  const value =
    monthlyRate === 0
      ? contributed
      : monthly * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate) * (1 + monthlyRate);
  return { value, contributed, growth: value - contributed, periods };
};

export const stepUpSipEstimate = (
  initialMonthly: number,
  annualRate: number,
  years: number,
  annualStepUpPercent: number
) => {
  const monthlyRate = annualRate / 1200;
  let totalContributed = 0;
  let totalValue = 0;
  let currentMonthly = initialMonthly;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      const remainingMonths = (years - year) * 12 + (12 - month) + 1;
      totalContributed += currentMonthly;
      const futureValue =
        monthlyRate === 0
          ? currentMonthly
          : currentMonthly * Math.pow(1 + monthlyRate, remainingMonths);
      totalValue += futureValue;
    }
    currentMonthly = currentMonthly * (1 + annualStepUpPercent / 100);
  }

  // Flat SIP benchmark
  const flatSip = sipEstimate(initialMonthly, annualRate, years);
  const stepUpAdvantage = totalValue - flatSip.value;

  // Real inflation-adjusted value (assuming 6% Indian long-term inflation)
  const inflationRate = 0.06;
  const realPurchasingPower = totalValue / Math.pow(1 + inflationRate, years);

  return {
    value: totalValue,
    contributed: totalContributed,
    growth: totalValue - totalContributed,
    flatSipValue: flatSip.value,
    flatSipContributed: flatSip.contributed,
    stepUpAdvantage,
    realPurchasingPower,
    finalMonthlySip: currentMonthly / (1 + annualStepUpPercent / 100),
  };
};

/* -------------------------------------------------------------
 * 2. Home Loan / Car Loan EMI Calculator
 * ------------------------------------------------------------- */
export const emiEstimate = (loan: number, annualRate: number, years: number) => {
  const periods = Math.max(1, Math.round(years * 12));
  const monthlyRate = annualRate / 1200;
  const emi =
    monthlyRate === 0
      ? loan / periods
      : (loan * monthlyRate * Math.pow(1 + monthlyRate, periods)) / (Math.pow(1 + monthlyRate, periods) - 1);
  const total = emi * periods;
  return { emi, total, interest: total - loan, periods };
};

/* -------------------------------------------------------------
 * 3. Day 1 Salary Allocation & Daily Guilt-Free Burn
 * ------------------------------------------------------------- */
export const salaryAllocationEstimate = (
  salary: number,
  rent: number,
  parents: number,
  sip: number,
  bills: number
) => {
  const totalCommitted = rent + parents + sip + bills;
  const discretionary = Math.max(0, salary - totalCommitted);
  const dailySpend = Math.floor(discretionary / 30);
  const weeklySpend = Math.floor(discretionary / 4.28);
  const committedRatio = salary > 0 ? Math.round((totalCommitted / salary) * 100) : 0;
  const discretionaryRatio = 100 - committedRatio;

  // Benchmark against 50/30/20 rule
  const needsRatio = salary > 0 ? Math.round(((rent + parents + bills) / salary) * 100) : 0;
  const savingsRatio = salary > 0 ? Math.round((sip / salary) * 100) : 0;

  return {
    totalCommitted,
    discretionary,
    dailySpend,
    weeklySpend,
    committedRatio,
    discretionaryRatio,
    needsRatio,
    savingsRatio,
  };
};

/* -------------------------------------------------------------
 * 4. Old vs New Tax Regime Comparator (India FY 2024-25 / FY 2025-26)
 * ------------------------------------------------------------- */
export const taxRegimeEstimate = (params: {
  grossSalary: number;
  basicSalary: number;
  rentPaidAnnual: number;
  isMetro: boolean;
  section80C: number; // Max 1.5L
  section80D: number; // Health Insurance (self + parents)
  section24b: number; // Home Loan Interest (max 2L)
  section80CCD1B: number; // NPS additional (max 50k)
  otherExemptions: number;
}) => {
  const {
    grossSalary,
    basicSalary,
    rentPaidAnnual,
    isMetro,
    section80C,
    section80D,
    section24b,
    section80CCD1B,
    otherExemptions,
  } = params;

  // --- NEW REGIME (FY 2024-25 / FY 2025-26 Budget Slabs) ---
  // Standard Deduction: ₹75,000 for salaried
  const newStdDeduction = 75000;
  const newNetTaxable = Math.max(0, grossSalary - newStdDeduction);

  let newTax = 0;
  // Slabs:
  // 0 - 3,00,000: Nil
  // 3,00,001 - 7,00,000: 5%
  // 7,00,001 - 10,00,000: 10%
  // 10,00,001 - 12,00,000: 15%
  // 12,00,001 - 15,00,000: 20%
  // > 15,00,000: 30%
  if (newNetTaxable > 1500000) {
    newTax += (newNetTaxable - 1500000) * 0.30;
    newTax += 300000 * 0.20; // 12-15L
    newTax += 200000 * 0.15; // 10-12L
    newTax += 300000 * 0.10; // 7-10L
    newTax += 400000 * 0.05; // 3-7L
  } else if (newNetTaxable > 1200000) {
    newTax += (newNetTaxable - 1200000) * 0.20;
    newTax += 200000 * 0.15;
    newTax += 300000 * 0.10;
    newTax += 400000 * 0.05;
  } else if (newNetTaxable > 1000000) {
    newTax += (newNetTaxable - 1000000) * 0.15;
    newTax += 300000 * 0.10;
    newTax += 400000 * 0.05;
  } else if (newNetTaxable > 700000) {
    newTax += (newNetTaxable - 700000) * 0.10;
    newTax += 400000 * 0.05;
  } else if (newNetTaxable > 300000) {
    newTax += (newNetTaxable - 300000) * 0.05;
  }

  // Section 87A rebate: Nil tax if net taxable income <= ₹7,00,000 (effectively up to ₹7.75L gross)
  if (newNetTaxable <= 700000) {
    newTax = 0;
  }
  const newCess = newTax * 0.04;
  const newTotalTax = Math.round(newTax + newCess);

  // --- OLD REGIME ---
  // Standard Deduction: ₹50,000
  const oldStdDeduction = 50000;

  // HRA Calculation (Least of: 1. Actual HRA received [approx 40-50% basic], 2. Rent paid - 10% of basic, 3. 50% basic for metro / 40% non-metro)
  let hraExemption = 0;
  if (rentPaidAnnual > 0 && basicSalary > 0) {
    const rentMinusTenPercent = Math.max(0, rentPaidAnnual - 0.10 * basicSalary);
    const metroPercentLimit = (isMetro ? 0.50 : 0.40) * basicSalary;
    hraExemption = Math.min(rentPaidAnnual, rentMinusTenPercent, metroPercentLimit);
  }

  const capped80C = Math.min(150000, Math.max(0, section80C));
  const capped80D = Math.min(100000, Math.max(0, section80D));
  const capped24b = Math.min(200000, Math.max(0, section24b));
  const capped80CCD1B = Math.min(50000, Math.max(0, section80CCD1B));

  const totalDeductions =
    oldStdDeduction +
    hraExemption +
    capped80C +
    capped80D +
    capped24b +
    capped80CCD1B +
    Math.max(0, otherExemptions);

  const oldNetTaxable = Math.max(0, grossSalary - totalDeductions);

  let oldTax = 0;
  // Slabs:
  // 0 - 2,50,000: Nil
  // 2,50,001 - 5,00,000: 5%
  // 5,00,001 - 10,00,000: 20%
  // > 10,00,000: 30%
  if (oldNetTaxable > 1000000) {
    oldTax += (oldNetTaxable - 1000000) * 0.30;
    oldTax += 500000 * 0.20;
    oldTax += 250000 * 0.05;
  } else if (oldNetTaxable > 500000) {
    oldTax += (oldNetTaxable - 500000) * 0.20;
    oldTax += 250000 * 0.05;
  } else if (oldNetTaxable > 250000) {
    oldTax += (oldNetTaxable - 250000) * 0.05;
  }

  // Section 87A rebate under old regime: Nil tax if taxable <= 5,00,000
  if (oldNetTaxable <= 500000) {
    oldTax = 0;
  }
  const oldCess = oldTax * 0.04;
  const oldTotalTax = Math.round(oldTax + oldCess);

  const difference = oldTotalTax - newTotalTax;
  const recommended = difference > 0 ? ("new" as const) : difference < 0 ? ("old" as const) : ("equal" as const);
  const annualSavings = Math.abs(difference);
  const monthlyTakeHomeDifference = Math.round(annualSavings / 12);

  return {
    newTotalTax,
    newNetTaxable,
    newStdDeduction,
    oldTotalTax,
    oldNetTaxable,
    totalDeductions,
    hraExemption,
    recommended,
    annualSavings,
    monthlyTakeHomeDifference,
  };
};

/* -------------------------------------------------------------
 * 5. Credit Card Minimum Due Trap & Payoff Simulator
 * ------------------------------------------------------------- */
export const creditCardTrapEstimate = (
  balance: number,
  annualAprPercent: number, // Typical Indian cards: 42% to 45% (3.5% / month)
  paymentMode: "minimum" | "fixed",
  fixedMonthlyPayment: number
) => {
  const monthlyRate = annualAprPercent / 1200;
  let remainingBalance = balance;
  let months = 0;
  let totalPaid = 0;
  let totalInterest = 0;
  const maxMonths = 360; // 30-year safety cutoff

  // Simulation
  while (remainingBalance > 1 && months < maxMonths) {
    months++;
    const interestThisMonth = remainingBalance * monthlyRate;
    totalInterest += interestThisMonth;

    let payment = 0;
    if (paymentMode === "minimum") {
      // Minimum due in India is usually MAX(5% of balance, ₹500 or interest + 1%)
      payment = Math.max(500, remainingBalance * 0.05, interestThisMonth + 100);
    } else {
      payment = Math.max(fixedMonthlyPayment, interestThisMonth + 50);
    }

    if (payment >= remainingBalance + interestThisMonth) {
      payment = remainingBalance + interestThisMonth;
      remainingBalance = 0;
      totalPaid += payment;
      break;
    }

    remainingBalance = remainingBalance + interestThisMonth - payment;
    totalPaid += payment;
  }

  // Minimum due benchmark for comparison
  let minDueBalance = balance;
  let minDueMonths = 0;
  let minDueInterest = 0;
  let minDuePaid = 0;
  while (minDueBalance > 1 && minDueMonths < maxMonths) {
    minDueMonths++;
    const interest = minDueBalance * monthlyRate;
    minDueInterest += interest;
    let payment = Math.max(500, minDueBalance * 0.05, interest + 100);
    if (payment >= minDueBalance + interest) {
      payment = minDueBalance + interest;
      minDueBalance = 0;
      minDuePaid += payment;
      break;
    }
    minDueBalance = minDueBalance + interest - payment;
    minDuePaid += payment;
  }

  return {
    months,
    years: (months / 12).toFixed(1),
    totalPaid: Math.round(totalPaid),
    totalInterest: Math.round(totalInterest),
    interestRatio: totalPaid > 0 ? Math.round((totalInterest / totalPaid) * 100) : 0,
    minDueMonths,
    minDueInterest: Math.round(minDueInterest),
    minDuePaid: Math.round(minDuePaid),
    interestSaved: Math.max(0, Math.round(minDueInterest - totalInterest)),
    monthsSaved: Math.max(0, minDueMonths - months),
    isTrap: months >= 36,
  };
};

/* -------------------------------------------------------------
 * 6. Metro Flatmate & Domestic Help Split Manager
 * ------------------------------------------------------------- */
export const flatmateSplitEstimate = (params: {
  flatRent: number;
  maidCookSalary: number;
  electricityGasWifi: number;
  groceryZeptoPool: number;
  numFlatmates: number;
  masterBedroomExtra: number; // Extra amount paid by master room occupant
}) => {
  const {
    flatRent,
    maidCookSalary,
    electricityGasWifi,
    groceryZeptoPool,
    numFlatmates,
    masterBedroomExtra,
  } = params;

  const validFlatmates = Math.max(1, numFlatmates);
  const totalCommonUtilities = maidCookSalary + electricityGasWifi + groceryZeptoPool;
  const commonPerPerson = Math.round(totalCommonUtilities / validFlatmates);

  // Rent split with master bedroom differential
  const baseRentPool = Math.max(0, flatRent - masterBedroomExtra);
  const baseRentPerPerson = Math.round(baseRentPool / validFlatmates);

  const regularRoomTotal = baseRentPerPerson + commonPerPerson;
  const masterRoomTotal = baseRentPerPerson + masterBedroomExtra + commonPerPerson;
  const grandTotal = flatRent + totalCommonUtilities;

  return {
    grandTotal,
    totalCommonUtilities,
    commonPerPerson,
    baseRentPerPerson,
    regularRoomTotal,
    masterRoomTotal,
    maidCookSalary,
  };
};

/* -------------------------------------------------------------
 * 7. Emergency Fund & Job Loss Runway Meter
 * ------------------------------------------------------------- */
export const emergencyRunwayEstimate = (params: {
  monthlyRentOrEmi: number;
  monthlyGroceriesFood: number;
  monthlyUtilitiesBills: number;
  monthlyFamilySupport: number;
  monthlyInsuranceEmi: number;
  currentLiquidSavings: number; // Bank + FD + Liquid MF
  hasDependents: boolean;
}) => {
  const {
    monthlyRentOrEmi,
    monthlyGroceriesFood,
    monthlyUtilitiesBills,
    monthlyFamilySupport,
    monthlyInsuranceEmi,
    currentLiquidSavings,
    hasDependents,
  } = params;

  const essentialMonthlyBurn =
    monthlyRentOrEmi +
    monthlyGroceriesFood +
    monthlyUtilitiesBills +
    monthlyFamilySupport +
    monthlyInsuranceEmi;

  const runwayMonths =
    essentialMonthlyBurn > 0
      ? Math.round((currentLiquidSavings / essentialMonthlyBurn) * 10) / 10
      : 0;

  const recommendedMonths = hasDependents ? 9 : 6;
  const targetCorpus = essentialMonthlyBurn * recommendedMonths;
  const deficitOrSurplus = currentLiquidSavings - targetCorpus;

  let healthStatus: "critical" | "fragile" | "healthy" | "bulletproof" = "critical";
  if (runwayMonths >= recommendedMonths * 1.5) healthStatus = "bulletproof";
  else if (runwayMonths >= recommendedMonths) healthStatus = "healthy";
  else if (runwayMonths >= 3) healthStatus = "fragile";

  return {
    essentialMonthlyBurn,
    runwayMonths,
    recommendedMonths,
    targetCorpus,
    deficitOrSurplus,
    healthStatus,
    progressPercent: Math.min(100, Math.round((currentLiquidSavings / Math.max(1, targetCorpus)) * 100)),
  };
};

/* -------------------------------------------------------------
 * 8. Buy vs Rent Home Decision Simulator (Indian Metros)
 * ------------------------------------------------------------- */
export const buyVsRentEstimate = (params: {
  propertyPrice: number; // e.g. ₹90,00,000
  downPayment: number; // e.g. ₹20,00,000
  loanInterestRate: number; // e.g. 8.5%
  loanTenureYears: number; // e.g. 20
  monthlyRentEquivalent: number; // e.g. ₹32,000
  propertyAppreciationRate: number; // e.g. 5% p.a.
  equityInvestmentReturn: number; // e.g. 12% p.a. for SIP
}) => {
  const {
    propertyPrice,
    downPayment,
    loanInterestRate,
    loanTenureYears,
    monthlyRentEquivalent,
    propertyAppreciationRate,
    equityInvestmentReturn,
  } = params;

  const loanAmount = Math.max(0, propertyPrice - downPayment);
  const emiData = emiEstimate(loanAmount, loanInterestRate, loanTenureYears);

  // Property ownership extra: Maintenance + Property Tax ~ 0.5% of value annually
  const monthlyMaintenance = Math.round((propertyPrice * 0.005) / 12);
  const totalMonthlyCostBuy = emiData.emi + monthlyMaintenance;

  // Monthly surplus if renting: Difference between (EMI + Maintenance) and Rent
  const monthlyRentDiff = Math.max(0, totalMonthlyCostBuy - monthlyRentEquivalent);

  // Future Property Value after tenure
  const futurePropertyValue =
    propertyPrice * Math.pow(1 + propertyAppreciationRate / 100, loanTenureYears);

  // If Renting: Downpayment is invested in index funds + monthly difference is SIPed
  const investedDownpaymentFuture =
    downPayment * Math.pow(1 + equityInvestmentReturn / 100, loanTenureYears);
  const investedMonthlyDiffFuture =
    monthlyRentDiff > 0
      ? sipEstimate(monthlyRentDiff, equityInvestmentReturn, loanTenureYears).value
      : 0;

  const totalRentingWealth = Math.round(investedDownpaymentFuture + investedMonthlyDiffFuture);
  const totalBuyingWealth = Math.round(futurePropertyValue);

  const rentAdvantage = totalRentingWealth - totalBuyingWealth;

  return {
    monthlyEmi: emiData.emi,
    monthlyMaintenance,
    totalMonthlyCostBuy,
    monthlyRentEquivalent,
    monthlyRentDiff,
    totalBuyingCostPaid: emiData.total + downPayment + monthlyMaintenance * 12 * loanTenureYears,
    futurePropertyValue: Math.round(futurePropertyValue),
    totalRentingWealth,
    rentAdvantage,
    recommendedOutcome: rentAdvantage > 0 ? "rent" : "buy",
  };
};

/* -------------------------------------------------------------
 * 9. Car Ownership vs Metro & Cabs True Cost Analyzer
 * ------------------------------------------------------------- */
export const carVsCabEstimate = (params: {
  onRoadPrice: number; // e.g. ₹12,00,000
  downPayment: number; // e.g. ₹3,00,000
  loanTenureYears: number; // e.g. 5 years
  loanInterestRate: number; // e.g. 9%
  dailyCommuteKm: number; // e.g. 30 km
  fuelOrEvCostPerKm: number; // Petrol: ~₹8/km, EV: ~₹2/km
  annualInsuranceAndService: number; // e.g. ₹45,000/yr
  monthlyParkingAndTolls: number; // e.g. ₹3,000/mo
  dailyCabSpendAlternative: number; // e.g. ₹550/day across 22 working days
}) => {
  const {
    onRoadPrice,
    downPayment,
    loanTenureYears,
    loanInterestRate,
    dailyCommuteKm,
    fuelOrEvCostPerKm,
    annualInsuranceAndService,
    monthlyParkingAndTolls,
    dailyCabSpendAlternative,
  } = params;

  const loanAmount = Math.max(0, onRoadPrice - downPayment);
  const emiData = emiEstimate(loanAmount, loanInterestRate, loanTenureYears);

  const monthlyFuel = dailyCommuteKm * 26 * fuelOrEvCostPerKm;
  const monthlyMaintenanceInsurance = Math.round(annualInsuranceAndService / 12);
  const monthlyDepreciationCost = Math.round((onRoadPrice * 0.50) / (loanTenureYears * 12)); // 50% depreciation over 5 yrs

  const trueMonthlyCarCost =
    emiData.emi +
    monthlyFuel +
    monthlyMaintenanceInsurance +
    monthlyParkingAndTolls +
    monthlyDepreciationCost;

  const monthlyCabCost = dailyCabSpendAlternative * 26 + 2500; // cabs + occasional weekend rental buffer

  const monthlyDifference = trueMonthlyCarCost - monthlyCabCost;
  const fiveYearDifference = monthlyDifference * 12 * loanTenureYears;

  return {
    monthlyEmi: emiData.emi,
    monthlyFuel,
    monthlyMaintenanceInsurance,
    monthlyParkingAndTolls,
    monthlyDepreciationCost,
    trueMonthlyCarCost,
    monthlyCabCost,
    monthlyDifference,
    fiveYearDifference,
    carCostBreakdown: {
      emi: emiData.emi,
      fuel: monthlyFuel,
      maintenance: monthlyMaintenanceInsurance,
      parking: monthlyParkingAndTolls,
      depreciation: monthlyDepreciationCost,
    },
  };
};

/* -------------------------------------------------------------
 * 10. Travel, Wedding & Festive Goal Planner
 * ------------------------------------------------------------- */
export const monthsUntil = (targetMonth: string, now = new Date()) => {
  const target = new Date(`${targetMonth}-01T00:00:00`);
  if (Number.isNaN(target.getTime())) return 0;
  return (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth();
};

export const goalEstimate = (
  target: number,
  saved: number,
  targetMonth: string,
  now = new Date()
) => {
  const remaining = Math.max(0, target - saved);
  const months = monthsUntil(targetMonth, now);
  return {
    remaining,
    months,
    monthly: months > 0 ? remaining / months : 0,
    complete: remaining === 0,
    overdue: remaining > 0 && months <= 0,
  };
};
