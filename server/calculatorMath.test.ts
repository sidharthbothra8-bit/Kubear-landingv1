import { describe, expect, it } from "vitest";
import { emiEstimate, goalEstimate, readNumber, sipEstimate } from "../client/src/lib/calculatorMath";

describe("Kubear Learn planning formulas", () => {
  it("keeps zero-rate SIP and EMI calculations transparent", () => {
    expect(sipEstimate(5_000, 0, 1)).toMatchObject({ contributed: 60_000, value: 60_000, growth: 0, periods: 12 });
    expect(emiEstimate(120_000, 0, 1)).toMatchObject({ emi: 10_000, total: 120_000, interest: 0, periods: 12 });
  });

  it("returns an illustrative monthly SIP estimate for valid inputs", () => {
    const result = sipEstimate(5_000, 12, 10);
    expect(result.periods).toBe(120);
    expect(result.contributed).toBe(600_000);
    expect(result.value).toBeGreaterThan(result.contributed);
    expect(result.growth).toBeCloseTo(result.value - result.contributed, 5);
  });

  it("handles achieved, overdue and incomplete goals without producing a false monthly amount", () => {
    expect(goalEstimate(60_000, 60_000, "2027-01", new Date("2026-08-01"))).toMatchObject({ complete: true, remaining: 0, monthly: 0 });
    expect(goalEstimate(60_000, 15_000, "2026-07", new Date("2026-08-01"))).toMatchObject({ overdue: true, remaining: 45_000, monthly: 0 });
    expect(goalEstimate(60_000, 15_000, "2027-01", new Date("2026-08-01"))).toMatchObject({ months: 5, monthly: 9_000, overdue: false });
  });

  it("explains blank and invalid number fields", () => {
    expect(readNumber("", "Monthly SIP")).toEqual({ valid: false, message: "Add a monthly sip to see your estimate." });
    expect(readNumber("not-a-number", "Loan amount")).toEqual({ valid: false, message: "Use a valid loan amount." });
  });
});
