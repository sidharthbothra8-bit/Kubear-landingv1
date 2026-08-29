/** Transparent local formulas for Kubear planning tools. They are illustrations, not advice or promised outcomes. */
export type ValueResult = { valid: true; value: number } | { valid: false; message: string };

export const readNumber = (value: string, label: string, options: { min?: number; max?: number } = {}): ValueResult => {
  if (value.trim() === "") return { valid: false, message: `Add a ${label.toLowerCase()} to see your estimate.` };
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return { valid: false, message: `Use a valid ${label.toLowerCase()}.` };
  if (options.min !== undefined && parsed < options.min) return { valid: false, message: `${label} cannot be less than ${options.min}.` };
  if (options.max !== undefined && parsed > options.max) return { valid: false, message: `${label} cannot be more than ${options.max}.` };
  return { valid: true, value: parsed };
};

export const sipEstimate = (monthly: number, annualRate: number, years: number) => {
  const periods = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualRate / 1200;
  const contributed = monthly * periods;
  const value = monthlyRate === 0 ? contributed : monthly * ((Math.pow(1 + monthlyRate, periods) - 1) / monthlyRate) * (1 + monthlyRate);
  return { value, contributed, growth: value - contributed, periods };
};

export const emiEstimate = (loan: number, annualRate: number, years: number) => {
  const periods = Math.max(1, Math.round(years * 12));
  const monthlyRate = annualRate / 1200;
  const emi = monthlyRate === 0 ? loan / periods : (loan * monthlyRate * Math.pow(1 + monthlyRate, periods)) / (Math.pow(1 + monthlyRate, periods) - 1);
  const total = emi * periods;
  return { emi, total, interest: total - loan, periods };
};

export const monthsUntil = (targetMonth: string, now = new Date()) => {
  const target = new Date(`${targetMonth}-01T00:00:00`);
  if (Number.isNaN(target.getTime())) return 0;
  return (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth();
};

export const goalEstimate = (target: number, saved: number, targetMonth: string, now = new Date()) => {
  const remaining = Math.max(0, target - saved);
  const months = monthsUntil(targetMonth, now);
  return { remaining, months, monthly: months > 0 ? remaining / months : 0, complete: remaining === 0, overdue: remaining > 0 && months <= 0 };
};

export const salaryAllocationEstimate = (salary: number, rent: number, parents: number, sip: number, bills: number) => {
  const totalCommitted = rent + parents + sip + bills;
  const discretionary = Math.max(0, salary - totalCommitted);
  const dailySpend = Math.floor(discretionary / 30);
  const committedRatio = salary > 0 ? Math.round((totalCommitted / salary) * 100) : 0;
  return { totalCommitted, discretionary, dailySpend, committedRatio };
};
