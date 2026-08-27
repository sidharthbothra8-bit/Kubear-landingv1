import { describe, expect, it } from "vitest";
import { emiEstimate, goalEstimate, monthsUntil, readNumber, sipEstimate } from "./calculatorMath";

describe("Kubear calculator math", () => {
  it("calculates a zero-return SIP without producing a broken result", () => expect(sipEstimate(5000, 0, 1)).toMatchObject({ value: 60000, contributed: 60000, periods: 12 }));
  it("calculates a zero-interest EMI", () => expect(emiEstimate(120000, 0, 1)).toMatchObject({ emi: 10000, total: 120000, interest: 0, periods: 12 }));
  it("returns a usable estimate for familiar SIP sample inputs", () => expect(Math.round(sipEstimate(5000, 12, 10).value)).toBe(1161695));
  it("handles a goal already met", () => expect(goalEstimate(60000, 60000, "2027-01", new Date("2026-08-01"))).toMatchObject({ remaining: 0, complete: true }));
  it("marks a past goal date as overdue", () => expect(goalEstimate(60000, 15000, "2026-07", new Date("2026-08-01"))).toMatchObject({ overdue: true, monthly: 0 }));
  it("keeps blank and invalid values out of formulas", () => { expect(readNumber("", "Loan amount").valid).toBe(false); expect(readNumber("abc", "Loan amount").valid).toBe(false); expect(monthsUntil("bad-date", new Date("2026-08-01"))).toBe(0); });
});
