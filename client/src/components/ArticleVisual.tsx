import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Coins,
  CreditCard,
  Eye,
  FileCheck,
  FileText,
  Flame,
  Home,
  Hourglass,
  Info,
  Landmark,
  Layers,
  Lock,
  LockKeyhole,
  MapPin,
  Palmtree,
  Percent,
  PiggyBank,
  Plane,
  Receipt,
  RotateCcw,
  Scale,
  ScanLine,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  Tag,
  TrendingUp,
  UserCheck,
  Users,
  Utensils,
  Wallet,
  WalletCards,
  Zap,
} from "lucide-react";

export type VisualType =
  | "rent"
  | "commitments"
  | "salary"
  | "upi"
  | "spends"
  | "goa"
  | "goals"
  | "home"
  | "split"
  | "emergency"
  | "runway"
  | "tax"
  | "taxes"
  | "investing"
  | "sip"
  | "debt"
  | "credit"
  | "retirement"
  | "wealth"
  | "family"
  | "library"
  | string;

interface ArticleVisualProps {
  visual?: VisualType;
  topic?: string;
  className?: string;
  compact?: boolean;
}

/**
 * Normalizes visual type or falls back to topic-based matching
 */
function normalizeVisualType(visual?: string, topic?: string): string {
  const v = (visual || "").toLowerCase();
  const t = (topic || "").toLowerCase();

  if (v.includes("rent") || v.includes("commit") || t.includes("rent") || t.includes("commit")) return "rent";
  if (v.includes("salary") || t.includes("salary") || t.includes("income")) return "salary";
  if (v.includes("upi") || v.includes("spend") || t.includes("upi") || t.includes("spend") || t.includes("daily")) return "upi";
  if (v.includes("goa") || v.includes("goal") || v.includes("travel") || t.includes("goal") || t.includes("travel")) return "goa";
  if (v.includes("home") || v.includes("split") || v.includes("house") || t.includes("split") || t.includes("household") || t.includes("shared")) return "home";
  if (v.includes("emerg") || v.includes("runway") || v.includes("buffer") || t.includes("emerg") || t.includes("runway") || t.includes("safety")) return "emergency";
  if (v.includes("tax") || t.includes("tax") || t.includes("80c") || t.includes("regime")) return "tax";
  if (v.includes("invest") || v.includes("sip") || v.includes("fund") || t.includes("invest") || t.includes("mutual") || t.includes("market")) return "investing";
  if (v.includes("debt") || v.includes("credit") || v.includes("card") || v.includes("loan") || t.includes("debt") || t.includes("cibil") || t.includes("emi")) return "debt";
  if (v.includes("retire") || v.includes("fire") || v.includes("pension") || t.includes("wealth") || t.includes("retire") || t.includes("long-term")) return "retirement";
  if (v.includes("family") || v.includes("parent") || t.includes("family") || t.includes("parent")) return "family";

  return "library";
}

export function ArticleVisual({ visual, topic, className = "", compact = false }: ArticleVisualProps) {
  const kind = normalizeVisualType(visual, topic);

  // If in compact thumbnail mode (used in feed lists & small cards)
  if (compact) {
    return <CompactVisual kind={kind} className={className} />;
  }

  // Full Hero & Featured Banner Visual Instruments
  switch (kind) {
    case "rent":
      return <RentVisual className={className} />;
    case "salary":
      return <SalaryVisual className={className} />;
    case "upi":
      return <UpiVisual className={className} />;
    case "goa":
      return <GoaVisual className={className} />;
    case "home":
      return <HomeSplitVisual className={className} />;
    case "emergency":
      return <EmergencyVisual className={className} />;
    case "tax":
      return <TaxVisual className={className} />;
    case "investing":
      return <InvestingVisual className={className} />;
    case "debt":
      return <DebtVisual className={className} />;
    case "retirement":
      return <RetirementVisual className={className} />;
    case "family":
      return <FamilyVisual className={className} />;
    default:
      return <LibraryVisual className={className} />;
  }
}

/** Compact thumbnail version for feed items & search rows */
function CompactVisual({ kind, className = "" }: { kind: string; className?: string }) {
  const meta: Record<string, { bg: string; icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string; badge: string; badgeColor: string }> = {
    rent: {
      bg: "bg-[#FAF4EB] border-[#E8DCC8]",
      icon: Home,
      title: "Commitments",
      subtitle: "Rent due 5th · Locked",
      badge: "Fixed First",
      badgeColor: "bg-[#C96632] text-white",
    },
    salary: {
      bg: "bg-[#F3F8F4] border-[#CCE0D3]",
      icon: WalletCards,
      title: "Salary Blueprint",
      subtitle: "50-30-20 Rule",
      badge: "Day 1 Allocation",
      badgeColor: "bg-[#143B35] text-[#D8E8DE]",
    },
    upi: {
      bg: "bg-[#FFF9F3] border-[#FED7AA]",
      icon: ScanLine,
      title: "UPI Spend Rhythm",
      subtitle: "₹40 Chai · ₹85 Auto",
      badge: "Friday Check",
      badgeColor: "bg-[#FF5C2B] text-white",
    },
    goa: {
      bg: "bg-[#FEFCE8] border-[#FEF08A]",
      icon: Plane,
      title: "Goal Runway",
      subtitle: "Goa Trip · 71% Saved",
      badge: "Target: ₹45K",
      badgeColor: "bg-[#D97706] text-white",
    },
    home: {
      bg: "bg-[#EFF6FF] border-[#BFDBFE]",
      icon: Users,
      title: "Two Tables",
      subtitle: "Cook & WiFi · Private Date",
      badge: "Shared Split",
      badgeColor: "bg-[#2563EB] text-white",
    },
    emergency: {
      bg: "bg-[#ECFDF5] border-[#A7F3D0]",
      icon: ShieldCheck,
      title: "Liquid Safety",
      subtitle: "6.2 Months Buffer",
      badge: "Peace of Mind",
      badgeColor: "bg-[#059669] text-white",
    },
    tax: {
      bg: "bg-[#FAF5FF] border-[#E9D5FF]",
      icon: FileCheck,
      title: "Tax Regimes",
      subtitle: "New vs Old · 80C Stack",
      badge: "Statutory",
      badgeColor: "bg-[#7C3AED] text-white",
    },
    investing: {
      bg: "bg-[#F0FDF4] border-[#BBF7D0]",
      icon: TrendingUp,
      title: "Compounding",
      subtitle: "12% SIP Step-Up",
      badge: "₹50.4L Corpus",
      badgeColor: "bg-[#16A34A] text-white",
    },
    debt: {
      bg: "bg-[#FFF1F2] border-[#FECDD3]",
      icon: CreditCard,
      title: "Credit & Debt",
      subtitle: "50-day Grace Period",
      badge: "Avalanche",
      badgeColor: "bg-[#E11D48] text-white",
    },
    retirement: {
      bg: "bg-[#F8FAFC] border-[#CBD5E1]",
      icon: Landmark,
      title: "Independence",
      subtitle: "FIRE Runway · EPF + NPS",
      badge: "Corpus Goal",
      badgeColor: "bg-[#475569] text-white",
    },
    family: {
      bg: "bg-[#FFF7ED] border-[#FFEDD5]",
      icon: HeartIcon,
      title: "Family Care",
      subtitle: "Parents Mediclaim",
      badge: "Top-Up Cover",
      badgeColor: "bg-[#EA580C] text-white",
    },
    library: {
      bg: "bg-[#FAF7F0] border-[#143B35]/15",
      icon: BookOpen,
      title: "Editorial Guide",
      subtitle: "Plain words, no jargon",
      badge: "Verified",
      badgeColor: "bg-[#143B35] text-[#D8E8DE]",
    },
  };

  const current = meta[kind] || meta.library;
  const Icon = current.icon;

  return (
    <div
      className={`relative flex items-center gap-3 p-2.5 rounded-xl border ${current.bg} shadow-2xs overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/90 border border-[#143B35]/10 shadow-2xs">
        <Icon className="size-4.5 text-[#143B35]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="font-serif font-bold text-xs text-[#102B28] truncate">{current.title}</span>
          <span className={`px-1.5 py-0.2 rounded-md text-[9px] font-mono font-bold tracking-tight shrink-0 ${current.badgeColor}`}>
            {current.badge}
          </span>
        </div>
        <p className="text-[10px] text-[#556962] truncate mt-0.5">{current.subtitle}</p>
      </div>
    </div>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

/** 01. Commitments & Rent Runway Visual Instrument */
function RentVisual({ className = "" }: { className?: string }) {
  const milestones = [
    { day: "05", name: "House Rent", amount: "₹24,000", tag: "Due First", status: "locked", icon: Home, tone: "border-[#C96632] bg-[#FFF8EE] text-[#C96632]" },
    { day: "11", name: "Credit Card", amount: "₹8,450", tag: "Autopay Ready", status: "ready", icon: CreditCard, tone: "border-[#143B35]/20 bg-white text-[#143B35]" },
    { day: "15", name: "Index SIP", amount: "₹10,000", tag: "Allocated", status: "done", icon: TrendingUp, tone: "border-emerald-600/30 bg-emerald-50 text-emerald-800" },
    { day: "28", name: "Cook & Staff", amount: "₹6,000", tag: "Scheduled", status: "ready", icon: Users, tone: "border-[#143B35]/20 bg-white text-[#143B35]" },
  ];

  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Commitments Runway Visual Illustration"
    >
      {/* Topline Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#C96632]/10 text-[#C96632]">
            <LockKeyhole className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Commitments &amp; Rent Runway
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Upfront Protection Blueprint
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#143B35] text-[#FFF8EE]">
          <ShieldCheck className="size-3.5 text-[#4ADE80]" /> Fixed First
        </span>
      </div>

      {/* Milestone Cards Runway */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-5">
        {milestones.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.name}
              className={`flex flex-col justify-between p-3 rounded-xl border ${m.tone} shadow-2xs transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="font-mono text-xs font-black tracking-tight">{m.day}th</span>
                <span className="text-[10px] font-mono font-semibold opacity-80 uppercase">{m.tag}</span>
              </div>
              <div className="my-1">
                <p className="text-xs font-bold truncate text-[#102B28]">{m.name}</p>
                <p className="text-sm sm:text-base font-serif font-bold text-[#102B28] mt-0.5">{m.amount}</p>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-medium text-[#5E726B] pt-1.5 border-t border-current/10">
                <Icon className="size-3" />
                <span>Protected</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
        <div className="flex items-center gap-2 text-xs text-[#31463F]">
          <CheckCircle2 className="size-4 text-emerald-700 shrink-0" />
          <span>
            <strong>₹48,450 Committed</strong> · Locked on 1st of month
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#143B35]/15 text-xs font-bold text-[#143B35]">
          <span>Remaining ₹31,550 is 100% Safe Spend</span>
        </div>
      </div>
    </div>
  );
}

/** 02. Salary Allocation 3-Bucket Visual */
function SalaryVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Salary Allocation 3-Bucket Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#143B35]/10 text-[#143B35]">
            <WalletCards className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              1st of Month Routine
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Three-Bucket Salary Blueprint
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FAF7F0] border border-[#143B35]/15 text-[#143B35]">
          ₹80,000 Net In-Hand
        </span>
      </div>

      {/* Visual Stacked Progress Bar */}
      <div className="my-4">
        <div className="flex items-center justify-between text-xs font-mono font-bold mb-1.5 text-[#546A63]">
          <span>Allocation Distribution</span>
          <span>100% Accounted For</span>
        </div>
        <div className="h-3.5 w-full rounded-full bg-[#E5EAE7] flex overflow-hidden p-0.5">
          <div className="h-full rounded-l-full bg-[#143B35]" style={{ width: "50%" }} title="Fixed Commitments 50%" />
          <div className="h-full bg-[#C96632]" style={{ width: "30%" }} title="Future & Goals 30%" />
          <div className="h-full rounded-r-full bg-[#F4C452]" style={{ width: "20%" }} title="Guilt-Free Spend 20%" />
        </div>
      </div>

      {/* Three Buckets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
        <div className="p-3.5 rounded-xl bg-[#F4F8F6] border border-[#143B35]/15">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-[#143B35]">50% FIXED</span>
            <span className="text-sm font-serif font-bold text-[#143B35]">₹40,000</span>
          </div>
          <p className="text-xs font-bold text-[#102B28]">Needs &amp; Obligations</p>
          <p className="text-[11px] text-[#556D65] mt-1 leading-snug">Rent, EMIs, electricity, parent remittance, WiFi</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF6F2] border border-[#C96632]/25">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-[#C96632]">30% FUTURE</span>
            <span className="text-sm font-serif font-bold text-[#C96632]">₹24,000</span>
          </div>
          <p className="text-xs font-bold text-[#102B28]">Compounding &amp; Goals</p>
          <p className="text-[11px] text-[#785E53] mt-1 leading-snug">Index SIPs, Goa vacation fund, emergency reserve</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFFDF0] border border-[#F4C452]/40">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-[#B07804]">20% SAFE SPEND</span>
            <span className="text-sm font-serif font-bold text-[#966703]">₹16,000</span>
          </div>
          <p className="text-xs font-bold text-[#102B28]">Guilt-Free Buffer</p>
          <p className="text-[11px] text-[#7A6E4F] mt-1 leading-snug">Chai, dining out, weekend movies, spontaneous plans</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Give every rupee a job before the month starts</span>
        <span className="font-mono font-bold text-[#143B35]">₹533 / Day Safe Daily</span>
      </div>
    </div>
  );
}

/** 03. UPI Weekly Velocity & Micro-Spends Visual */
function UpiVisual({ className = "" }: { className?: string }) {
  const days = [
    { d: "Mon", count: "₹140", items: "Chai + Metro", full: 35 },
    { d: "Tue", count: "₹280", items: "Lunch out", full: 50 },
    { d: "Wed", count: "₹95", items: "Auto to office", full: 25 },
    { d: "Thu", count: "₹340", items: "Blinkit snack", full: 60 },
    { d: "Fri", count: "₹620", items: "Dinner + Cab", full: 90, highlight: true },
    { d: "Sat", count: "₹450", items: "Coffee & Date", full: 70 },
    { d: "Sun", count: "₹180", items: "Grocery top-up", full: 40 },
  ];

  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="UPI Spend Rhythm Visual Illustration"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#FF5C2B]/10 text-[#FF5C2B]">
            <ScanLine className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Instant Chat &amp; OCR Capture
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              UPI Spend Velocity &amp; Friday Check-in
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5C2B] text-white">
          <Sparkles className="size-3.5" /> Real-Time Buffer
        </span>
      </div>

      {/* 7-Day Velocity Bars */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 my-4">
        {days.map((item) => (
          <div
            key={item.d}
            className={`flex flex-col items-center justify-end p-2 rounded-xl border text-center transition-all ${
              item.highlight
                ? "bg-[#FFF4EE] border-[#FF5C2B] ring-1 ring-[#FF5C2B]/30"
                : "bg-[#FAF7F0] border-[#143B35]/10"
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-[#102B28] mb-1">{item.count}</span>
            <div className="w-full bg-[#E4EAE6] rounded-full h-12 flex flex-col justify-end p-0.5 overflow-hidden">
              <div
                className={`w-full rounded-full transition-all ${
                  item.highlight ? "bg-[#FF5C2B]" : "bg-[#143B35]"
                }`}
                style={{ height: `${item.full}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold mt-1.5 uppercase text-[#475C55]">
              {item.d}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Receipts Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
        <div className="flex items-center gap-2">
          <Receipt className="size-4 text-[#C96632]" />
          <span className="text-xs text-[#2A423B]">
            <strong>Friday Check-in:</strong> ₹2,105 spent this week · Remaining allowance on track
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
          +₹620 Safe Daily Left
        </span>
      </div>
    </div>
  );
}

/** 04. Goa Goal Milestone Runway Visual */
function GoaVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Goa Goal Runway Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#E5AD2B]/15 text-[#B87B08]">
            <Plane className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Milestone &amp; Travel Runway
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Goa Year-End Vacation Target
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
          <Palmtree className="size-3.5" /> Target: Dec 2026
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 items-center">
        {/* Circular Progress Gauge */}
        <div className="flex items-center justify-center p-4 rounded-xl bg-[#FAF7F0] border border-[#143B35]/10">
          <div className="relative flex size-24 items-center justify-center rounded-full border-6 border-[#E5AD2B] border-t-[#143B35] border-r-[#143B35] bg-white shadow-2xs">
            <div className="text-center">
              <span className="font-serif font-bold text-lg text-[#102B28] leading-none">71%</span>
              <span className="block text-[9px] font-mono font-bold text-[#637770] uppercase mt-0.5">Saved</span>
            </div>
          </div>
        </div>

        {/* Milestone Breakdown */}
        <div className="sm:col-span-2 space-y-2.5">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#143B35]/12">
            <div>
              <p className="text-xs font-bold text-[#102B28]">Saved in Liquid Pot</p>
              <p className="text-[11px] text-[#637770]">₹4,500/month automatic pace</p>
            </div>
            <strong className="text-base font-serif font-bold text-[#143B35]">₹32,000</strong>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF9ED] border border-[#E5AD2B]/30">
            <div>
              <p className="text-xs font-bold text-[#92400E]">Total Goal Target</p>
              <p className="text-[11px] text-[#92400E]/80">Flight tickets + Beach resort stays</p>
            </div>
            <strong className="text-base font-serif font-bold text-[#92400E]">₹45,000</strong>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#52665F]">
        <span>✓ 3 months remaining · Goal sits side-by-side with fixed bills</span>
        <span className="font-mono font-bold text-[#C96632]">Remaining: ₹13,000</span>
      </div>
    </div>
  );
}

/** 05. Two Tables Shared vs Private Visual */
function HomeSplitVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Two Tables Shared vs Private Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
            <Split className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Money Spaces Architecture
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Two Tables: Shared House vs 100% Private
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
          <Lock className="size-3.5" /> Selective Privacy
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        {/* Table A: Shared Flatmate Table */}
        <div className="p-4 rounded-xl bg-[#F0F7FF] border border-[#2563EB]/25">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1D4ED8]">
              <Users className="size-3.5" /> Shared Flat Table
            </span>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#1D4ED8] text-white px-2 py-0.5 rounded-full">
              3 Flatmates
            </span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#1E3A8A]">
            <li className="flex justify-between border-b border-blue-200/60 pb-1">
              <span>Cook Aunty Salary</span>
              <strong>₹4,500</strong>
            </li>
            <li className="flex justify-between border-b border-blue-200/60 pb-1">
              <span>Blinkit Pantry Staples</span>
              <strong>₹2,840</strong>
            </li>
            <li className="flex justify-between">
              <span>Airtel Fiber Broadband</span>
              <strong>₹1,199</strong>
            </li>
          </ul>
          <p className="text-[11px] font-mono font-bold text-[#1D4ED8] mt-3 pt-2 border-t border-blue-200/60">
            Your 1/3 Share: ₹2,846
          </p>
        </div>

        {/* Table B: 100% Private Table */}
        <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#143B35]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#143B35]">
              <LockKeyhole className="size-3.5 text-[#C96632]" /> 100% Private To You
            </span>
            <span className="text-[10px] font-mono font-bold uppercase bg-[#143B35] text-white px-2 py-0.5 rounded-full">
              Hidden
            </span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#2F4740]">
            <li className="flex justify-between border-b border-[#143B35]/10 pb-1">
              <span>Zara Autumn Jacket</span>
              <strong>₹3,490</strong>
            </li>
            <li className="flex justify-between border-b border-[#143B35]/10 pb-1">
              <span>Third Wave Coffee &amp; Bagel</span>
              <strong>₹420</strong>
            </li>
            <li className="flex justify-between">
              <span>Weekend Movie Date</span>
              <strong>₹1,650</strong>
            </li>
          </ul>
          <p className="text-[11px] font-mono font-bold text-[#C96632] mt-3 pt-2 border-t border-[#143B35]/10">
            Never appears on shared table
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Zero awkward end-of-month roommate spreadsheets</span>
        <span className="font-mono font-bold text-[#143B35]">Settled via single summary</span>
      </div>
    </div>
  );
}

/** 06. Emergency Runway Visual */
function EmergencyVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Emergency Runway Safety Net Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Liquid Safety Architecture
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Emergency Fund: 6.2 Months Fixed Runway
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
          Fully Funded
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-emerald-800">POT 1 · INSTANT (3 MO)</span>
            <strong className="text-sm font-serif font-bold text-emerald-900">₹1,20,000</strong>
          </div>
          <p className="text-xs font-bold text-[#102B28]">High-Yield Savings &amp; UPI Liquid</p>
          <p className="text-[11px] text-emerald-900/80 mt-1">Available 24/7 in under 60 seconds for medical or car urgent repairs</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-[#143B35]">POT 2 · SWEEP FD (3.2 MO)</span>
            <strong className="text-sm font-serif font-bold text-[#102B28]">₹1,30,000</strong>
          </div>
          <p className="text-xs font-bold text-[#102B28]">Sweep-in Bank Fixed Deposit</p>
          <p className="text-[11px] text-[#556962] mt-1">Earning 7.2% annual interest while remaining 100% penalty-free breakable</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Total Safety Net: ₹2,50,000 (Covers ₹40k/month burn rate)</span>
        <span className="font-mono font-bold text-emerald-800">Zero Career Fear</span>
      </div>
    </div>
  );
}

/** 07. Tax & Section 80C Visual */
function TaxVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Tax Comparison Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-purple-600/10 text-purple-700">
            <FileCheck className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Statutory Tax Framework
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              New Regime vs Old Regime Decision Map
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-100 text-purple-800 border border-purple-200">
          FY 2026-27 Slabs
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        <div className="p-3.5 rounded-xl bg-[#FAF5FF] border border-purple-200">
          <p className="text-[11px] font-mono font-bold text-purple-800 uppercase">New Tax Regime (Default)</p>
          <p className="text-xs font-bold text-[#102B28] mt-0.5">Lower Slabs + Standard Deduction</p>
          <ul className="mt-2 space-y-1 text-xs text-purple-950">
            <li>✓ ₹75,000 Standard Deduction</li>
            <li>✓ Zero tax up to ₹7.75L effective</li>
            <li>✓ Zero paperwork or investment locks</li>
          </ul>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
          <p className="text-[11px] font-mono font-bold text-[#143B35] uppercase">Old Tax Regime (Exemptions)</p>
          <p className="text-xs font-bold text-[#102B28] mt-0.5">High HRA + 80C/80D Stack</p>
          <ul className="mt-2 space-y-1 text-xs text-[#354D46]">
            <li>✓ 80C ELSS/EPF (₹1.5L)</li>
            <li>✓ 80D Parents Mediclaim (₹50k)</li>
            <li>✓ HRA Exemption if rent &gt; ₹30k/mo</li>
          </ul>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ AIS &amp; Form 26AS Tax Reconciled</span>
        <span className="font-mono font-bold text-[#C96632]">Advance Tax Q4: 15 Mar</span>
      </div>
    </div>
  );
}

/** 08. Investing & Compounding Visual */
function InvestingVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="SIP Compounding Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700">
            <TrendingUp className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Wealth Engine
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Index SIP Compounding @ 12% CAGR
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
          ₹10,000 / Month
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <p className="text-[10px] font-mono uppercase text-[#5B6F69]">5 Years Horizon</p>
          <strong className="text-sm sm:text-base font-serif font-bold text-[#102B28]">₹8.24 Lakh</strong>
          <p className="text-[10px] text-[#5B6F69] mt-0.5">Invested: ₹6.0L</p>
        </div>

        <div className="p-3 rounded-xl bg-[#F0FDF4] border border-emerald-200">
          <p className="text-[10px] font-mono uppercase text-emerald-800">10 Years Horizon</p>
          <strong className="text-sm sm:text-base font-serif font-bold text-emerald-950">₹23.23 Lakh</strong>
          <p className="text-[10px] text-emerald-800 mt-0.5">Invested: ₹12.0L</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF8EE] border border-[#F2DEB9]">
          <p className="text-[10px] font-mono uppercase text-[#9A5200] font-bold">15 Years Horizon</p>
          <strong className="text-sm sm:text-base font-serif font-bold text-[#143B35]">₹50.45 Lakh</strong>
          <p className="text-[10px] text-[#786146] mt-0.5 font-medium">Invested: ₹18.0L</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ 10% annual step-up adds extra ₹28.5 Lakh to corpus</span>
        <span className="font-mono font-bold text-emerald-800">Nifty 50 Broad Index</span>
      </div>
    </div>
  );
}

/** 09. Debt Avalanche & Credit Cards Visual */
function DebtVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Credit Card Cycle & Debt Avalanche Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-rose-600/10 text-rose-700">
            <CreditCard className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Credit Discipline &amp; Avalanche
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              50-Day Interest-Free Cycle Blueprint
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200">
          Autopay Full Balance
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">18TH OF MONTH</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Statement Date</p>
          <p className="text-[11px] text-[#556962]">Monthly bill generated</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF1F2] border border-rose-200">
          <span className="text-[10px] font-mono font-bold text-rose-700">20-DAY GRACE</span>
          <p className="text-xs font-bold text-rose-950 mt-1">Interest-Free Window</p>
          <p className="text-[11px] text-rose-800">0% cost if paid in full</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <span className="text-[10px] font-mono font-bold text-[#143B35]">7TH NEXT MONTH</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Payment Due Date</p>
          <p className="text-[11px] text-[#556962]">Autopay clears 100%</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Never pay minimum due (avoids 42% APR revolving trap)</span>
        <span className="font-mono font-bold text-[#143B35]">CIBIL 780+ Target</span>
      </div>
    </div>
  );
}

/** 10. Retirement & Financial Independence Visual */
function RetirementVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Retirement & Financial Independence Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#143B35]/10 text-[#143B35]">
            <Landmark className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Financial Independence (FIRE)
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Corpus Target: 30x Annual Expenses
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#143B35] text-[#FFF8EE]">
          3.3% Safe Withdrawal
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <span className="text-[10px] font-mono font-bold text-[#143B35]">EQUITY (60%)</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Growth &amp; Inflation Beat</p>
          <p className="text-[11px] text-[#556962]">Nifty 50 + Midcap 150</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">DEBT (30%)</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Stability &amp; Regular Income</p>
          <p className="text-[11px] text-[#556962]">EPF + NPS Tier 1 + G-Secs</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12">
          <span className="text-[10px] font-mono font-bold text-[#B87B08]">GOLD (10%)</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Currency Hedge</p>
          <p className="text-[11px] text-[#556962]">Sovereign Gold Bonds (SGB)</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Long-term wealth compounded peacefully</span>
        <span className="font-mono font-bold text-[#143B35]">Real Freedom</span>
      </div>
    </div>
  );
}

/** 11. Family & Parents Care Visual */
function FamilyVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FFFDF8] border border-[#143B35]/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Family Support & Parents Care Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-orange-600/10 text-orange-700">
            <HeartIcon className="size-4 text-orange-700" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Family Care &amp; Responsibility
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#102B28]">
              Parents Healthcare &amp; Remittance Protection
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-orange-800">
          Super Top-Up Ready
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-200">
          <p className="text-[11px] font-mono font-bold text-orange-900 uppercase">Healthcare Super Top-Up</p>
          <p className="text-xs font-bold text-[#102B28] mt-0.5">₹25 Lakh Cover with ₹5L Deductible</p>
          <p className="text-[11px] text-orange-900/80 mt-1">Protects life savings from major hospital bills without huge baseline premiums</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
          <p className="text-[11px] font-mono font-bold text-[#143B35] uppercase">Fixed 1st-of-Month Remittance</p>
          <p className="text-xs font-bold text-[#102B28] mt-0.5">₹15,000 Automated Transfer</p>
          <p className="text-[11px] text-[#556962] mt-1">Directly allocated on salary day so family support is never delayed or stressed</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#52665F]">
        <span>✓ Respectful, predictable support for Indian households</span>
        <span className="font-mono font-bold text-[#143B35]">Section 80D Eligible</span>
      </div>
    </div>
  );
}

/** 12. Editorial Master Desk Visual */
function LibraryVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#FAF7F0] border-2 border-[#143B35]/15 text-[#123630] p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between select-none ${className}`}
      aria-label="Kubear Learn Editorial Desk Visual"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#143B35]/10">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#C96632] text-white">
            <BookOpen className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632]">
              Kubear Editorial Desk
            </p>
            <h4 className="text-sm sm:text-base font-serif font-bold text-[#123630]">
              50 Plain-English Guides &amp; Math Tools
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#047857] border border-[#10B981]/25">
          <ShieldCheck className="size-3.5 text-[#047857]" /> 10-Pillar Verified
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-4">
        <div className="p-3 rounded-xl bg-white border border-[#E0D8C8] shadow-xs">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">PILLARS 1-3</span>
          <p className="text-xs font-bold text-[#123630] mt-1">Foundation</p>
          <p className="text-[10px] text-[#556963]">Salary, UPI &amp; Rent</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E0D8C8] shadow-xs">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">PILLARS 4-6</span>
          <p className="text-xs font-bold text-[#123630] mt-1">Protection</p>
          <p className="text-[10px] text-[#556963]">Emergency, Tax &amp; Debt</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E0D8C8] shadow-xs">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">PILLARS 7-8</span>
          <p className="text-xs font-bold text-[#123630] mt-1">Growth</p>
          <p className="text-[10px] text-[#556963]">SIPs, Compounding &amp; Goals</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E0D8C8] shadow-xs">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">PILLARS 9-10</span>
          <p className="text-xs font-bold text-[#123630] mt-1">Independence</p>
          <p className="text-[10px] text-[#556963]">FIRE, Parents &amp; Housing</p>
        </div>
      </div>

      <div className="pt-3 border-t border-[#143B35]/10 flex items-center justify-between text-xs text-[#556963]">
        <span>✓ Grounded in statutory Indian tax laws &amp; financial math</span>
        <span className="font-mono font-bold text-[#C96632]">No Jargon · Plain Words</span>
      </div>
    </div>
  );
}
