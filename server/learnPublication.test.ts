import { describe, expect, it } from "vitest";
import { canPublishLearnArticle } from "./learn";

describe("Kubear Learn publication gate", () => {
  const now = new Date("2026-09-01T03:30:00.000Z");

  it("publishes only a reviewed, approved article at or after its scheduled time", () => {
    expect(canPublishLearnArticle({ status: "scheduled", scheduledAt: now, reviewedAt: now, productClaimReview: true }, now)).toBe(true);
  });

  it("keeps unreviewed, unapproved and future articles private", () => {
    expect(canPublishLearnArticle({ status: "scheduled", scheduledAt: now, reviewedAt: null, productClaimReview: true }, now)).toBe(false);
    expect(canPublishLearnArticle({ status: "scheduled", scheduledAt: now, reviewedAt: now, productClaimReview: false }, now)).toBe(false);
    expect(canPublishLearnArticle({ status: "scheduled", scheduledAt: new Date("2026-09-08T03:30:00.000Z"), reviewedAt: now, productClaimReview: true }, now)).toBe(false);
  });
});
