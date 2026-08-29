/* Living Ledger visual system: functional, labelled money states replace decorative pseudo-charts with calm, responsive financial explanations. */
import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Coffee,
  Eye,
  FileText,
  Home as HomeIcon,
  Lock,
  LockKeyhole,
  MessageSquare,
  Palmtree,
  Plus,
  Receipt,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

type InstrumentProps = { className?: string };

function InstrumentLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="instrument-label">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function MoneyPictureInstrument({ className = "" }: InstrumentProps) {
  const rows = [
    ["Salary", "Income in", "₹54,000", "is-income"],
    ["Rent + bills", "Due this month", "₹18,600", "is-due"],
    ["Daily Spends", "Logged via chat", "₹7,240", "is-spend"],
    ["Goa plan", "Set aside", "₹1,500", "is-goal"],
  ];
  return (
    <section className={`money-instrument money-picture-instrument ${className}`} aria-label="Illustrative money picture">
      <div className="instrument-paper">
        <div className="instrument-topline">
          <InstrumentLabel>Today&apos;s money picture</InstrumentLabel>
          <span className="instrument-state">
            <Eye className="size-3.5" />View only
          </span>
        </div>
        <div className="instrument-balance">
          <div>
            <small>After planned commitments</small>
            <strong>₹26,660</strong>
          </div>
          <span>Illustrative example</span>
        </div>
        <div className="instrument-row-list">
          {rows.map(([title, detail, amount, state]) => (
            <div className="instrument-row" key={title}>
              <span className={`instrument-dot ${state}`} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <b>{amount}</b>
            </div>
          ))}
        </div>
      </div>
      <span className="instrument-tag tag-card">Rent Due 5th</span>
      <span className="instrument-tag tag-note">Manual chat & upload entry</span>
    </section>
  );
}

export function WeeklySignalBoard({ className = "" }: InstrumentProps) {
  const moments = [
    { day: "MON", title: "Salary", detail: "arrived", tone: "income" },
    { day: "TUE", title: "Auto & Chai", detail: "logged via chat", tone: "spend" },
    { day: "FRI", title: "Rent to owner", detail: "coming up", tone: "due" },
    { day: "APR", title: "Goa trip", detail: "still visible", tone: "goal" },
  ];
  return (
    <section className={`weekly-signal-board ${className}`} aria-label="Illustrative weekly money signal board">
      <div className="signal-board-top">
        <div>
          <InstrumentLabel>Your week, in one signal</InstrumentLabel>
          <strong>What&apos;s moving.<br />What&apos;s next.</strong>
        </div>
        <span className="signal-live">
          <i aria-hidden="true" />Live view
        </span>
      </div>
      <div className="signal-board-main">
        <div className="signal-total">
          <small>After planned commitments</small>
          <b>₹26,660</b>
          <span>Illustrative only</span>
        </div>
        <div className="signal-moment-list">
          {moments.map((moment, index) => (
            <div className={`signal-moment signal-${moment.tone}`} key={moment.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i aria-hidden="true" />
              <div>
                <b>{moment.title}</b>
                <small>{moment.detail}</small>
              </div>
              <em>{moment.day}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="signal-board-bottom">
        <span><Eye className="size-3.5" />Only what you choose to log</span>
        <span>HOME SPACE · Flatmate splits</span>
      </div>
    </section>
  );
}

export function MoneyWeekMosaic({ className = "" }: InstrumentProps) {
  const moments = [
    ["01", "Salary", "in", "violet"],
    ["02", "Daily Spends", "chat logged", "coral"],
    ["03", "Rent", "due", "cream"],
    ["04", "Goa", "open", "mint"],
  ];
  return (
    <section className={`money-week-mosaic ${className}`} aria-label="Illustrative money week mosaic">
      <div className="mosaic-radiance" aria-hidden="true" />
      <div className="mosaic-orbit mosaic-orbit-one" aria-hidden="true" />
      <div className="mosaic-orbit mosaic-orbit-two" aria-hidden="true" />
      <div className="mosaic-ledger-stitch" aria-hidden="true"><i /><i /><i /><i /></div>
      <header className="mosaic-head">
        <InstrumentLabel>The week, held together</InstrumentLabel>
        <span><i aria-hidden="true" />In view</span>
      </header>
      <div className="mosaic-core">
        <div className="mosaic-core-label">
          <span>MONDAY</span>
          <b>Salary lands.<br />The week gets a shape.</b>
        </div>
        <div className="mosaic-core-total">
          <small>After planned commitments</small>
          <strong>₹26,660</strong>
          <span>Illustrative only</span>
        </div>
      </div>
      <div className="mosaic-moments">
        {moments.map(([number, name, note, tone], index) => (
          <div className={`mosaic-moment tone-${tone}`} key={name} style={{ "--moment": index } as React.CSSProperties}>
            <span>{number}</span>
            <i aria-hidden="true" />
            <div>
              <b>{name}</b>
              <small>{note}</small>
            </div>
          </div>
        ))}
      </div>
      <footer className="mosaic-foot">
        <span><Eye className="size-3.5" />Only what you choose to log</span>
        <span>APRIL · HOME SPACE</span>
      </footer>
    </section>
  );
}

export function MoneyViewSnapshot({ className = "" }: InstrumentProps) {
  const points = [
    ["Balance", "after plans", "₹26,660"],
    ["Due next", "Friday", "House Rent"],
    ["Daily Spends", "logged in chat", "₹7,240"],
    ["Flatmates", "Cook & Groceries", "2 splits"],
  ];
  return (
    <section className={`money-view-snapshot ${className}`} aria-label="Illustrative five-part money view">
      <div className="snapshot-glow" aria-hidden="true" />
      <div className="snapshot-header">
        <InstrumentLabel>One week, with context</InstrumentLabel>
        <span>Illustrative view</span>
      </div>
      <div className="snapshot-core">
        <div>
          <small>Today&apos;s picture</small>
          <b>₹26,660</b>
          <span>after planned commitments</span>
        </div>
        <i aria-hidden="true" />
      </div>
      <div className="snapshot-points">
        {points.map(([label, detail, value], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{label}</small>
            <b>{value}</b>
            <em>{detail}</em>
          </div>
        ))}
      </div>
      <p><Eye className="size-3.5" />Manual chat & upload entry. Kubear does not touch your money.</p>
    </section>
  );
}

export function MoneyFlowInstrument({ className = "" }: InstrumentProps) {
  return (
    <section className={`money-instrument money-flow-instrument ${className}`} aria-label="Illustrative Kubear money-view flow">
      <div className="flow-instrument-top">
        <InstrumentLabel>One view, step by step</InstrumentLabel>
        <span>Illustrative flow</span>
      </div>
      <div className="flow-instrument-steps">
        <div>
          <span>01</span>
          <strong>Log</strong>
          <p>Type in chat or upload a bill photo.</p>
          <div className="flow-pills"><i>Auto 70</i><i>Chai 45</i><i>Bill upload</i></div>
        </div>
        <b aria-hidden="true" />
        <div>
          <span>02</span>
          <strong>Organise</strong>
          <p>Kubear categorises and updates your ledger.</p>
          <div className="flow-ledger-lines"><i /><i /><i /></div>
        </div>
        <b aria-hidden="true" />
        <div>
          <span>03</span>
          <strong>Relax</strong>
          <p>Know exactly what is safe to spend today.</p>
          <div className="flow-review"><i /><span>Safe ₹525 left</span></div>
        </div>
      </div>
      <p className="instrument-footnote"><Eye className="size-3.5" />Manual chat & upload. No bank passwords.</p>
    </section>
  );
}

export function ToolBenchInstrument({ className = "" }: InstrumentProps) {
  return (
    <section className={`money-instrument tool-bench-instrument ${className}`} aria-label="Illustrative Kubear planning tool bench">
      <div>
        <InstrumentLabel>Three simple questions</InstrumentLabel>
        <strong>Start with the moment.<br />Then see the number.</strong>
      </div>
      <div className="tool-bench-list">
        <span>
          <i>01</i>
          <div><small>Salary day</small><b>SIP</b></div>
          <em>Monthly step</em>
        </span>
        <span>
          <i>02</i>
          <div><small>Home plan</small><b>EMI</b></div>
          <em>Monthly payment</em>
        </span>
        <span>
          <i>03</i>
          <div><small>Goa plan</small><b>Goal</b></div>
          <em>Months left</em>
        </span>
      </div>
      <p className="instrument-footnote"><Sparkles className="size-3.5" />Illustrative planning, not advice.</p>
    </section>
  );
}

export function SalaryAllocationInstrument({ className = "" }: InstrumentProps) {
  const allocations = [
    ["Rent to owner", "₹18,000", "copper"],
    ["Sent to parents", "₹10,000", "saffron"],
    ["Mutual Fund SIP", "₹7,000", "mint"],
    ["Safe daily living", "₹19,000", "cream"],
  ];
  return (
    <section className={`money-instrument salary-allocation-instrument ${className}`} aria-label="Illustrative salary allocation">
      <div className="allocation-header">
        <div>
          <InstrumentLabel>Salary day, with jobs</InstrumentLabel>
          <strong>₹54,000 <small>example income</small></strong>
        </div>
        <span className="allocation-stamp">1ST OF MONTH</span>
      </div>
      <div className="allocation-stack">
        {allocations.map(([name, amount, tone], index) => (
          <div className={`allocation-piece ${tone}`} key={name} style={{ "--step": index } as React.CSSProperties}>
            <div>
              <span>{name}</span>
              <b>{amount}</b>
            </div>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
      <p className="instrument-footnote"><Sparkles className="size-3.5" />Essential commitments locked upfront before spending.</p>
    </section>
  );
}

export function SpendRhythmInstrument({ className = "" }: InstrumentProps) {
  const days = [
    ["M", "Auto ₹70"],
    ["T", "Chai ₹45"],
    ["W", "Blinkit ₹320"],
    ["T", "Quiet Day"],
    ["F", "Dinner ₹850"],
    ["S", "Movie ₹450"],
    ["S", "Quiet Day"],
  ];
  return (
    <section className={`money-instrument spend-rhythm-instrument ${className}`} aria-label="Illustrative weekly spending rhythm">
      <div className="rhythm-top">
        <div>
          <InstrumentLabel>Weekly Spends, at a glance</InstrumentLabel>
          <strong>Small spends deserve a place too.</strong>
        </div>
        <span>Logged via chat</span>
      </div>
      <div className="rhythm-days">
        {days.map(([day, event], index) => (
          <div className={`rhythm-day ${event === "Quiet Day" ? "is-quiet" : ""} ${event.includes("Dinner") ? "is-check" : ""}`} key={`${day}-${index}`}>
            <b>{day}</b>
            <i aria-hidden="true" />
            <span>{event}</span>
          </div>
        ))}
      </div>
      <div className="rhythm-note">
        <span><i className="dot-copper" />Logged kharcha</span>
        <span><i className="dot-mint" />Quiet day</span>
      </div>
    </section>
  );
}

export function SpendingStoryInstrument({ className = "" }: InstrumentProps) {
  const entries = [
    ["MON", "Auto to office", "Commute", "₹70", "coral"],
    ["TUE", "Chai & bun maska", "Snack", "₹45", "saffron"],
    ["WED", "Blinkit grocery", "Dahi & fruits", "₹160", "mint"],
  ];
  return (
    <section className={`spending-story-instrument ${className}`} aria-label="Illustrative small spending pattern">
      <header className="spend-story-head">
        <div>
          <InstrumentLabel>Quick Chat Trail</InstrumentLabel>
          <strong>Three quick texts.<br />One clean total.</strong>
        </div>
        <span>Natural text entry</span>
      </header>
      <div className="spend-story-canvas">
        <div className="spend-story-total">
          <small>Today&apos;s daily spent</small>
          <b>₹275</b>
          <span>₹525 safe budget remaining</span>
        </div>
        <ol className="spend-story-list">
          {entries.map(([day, title, note, amount, tone], index) => (
            <li className={`spend-story-entry tone-${tone}`} key={title}>
              <span className="spend-story-day">{day}</span>
              <i aria-hidden="true" />
              <div>
                <b>{title}</b>
                <small>{note}</small>
              </div>
              <strong>{amount}</strong>
              {index < entries.length - 1 ? <em aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
        <p className="spend-story-note">
          <span>No spreadsheet math</span>
          <b>Just type what you spent in plain Hinglish or English.</b>
        </p>
      </div>
      <footer>
        <span><Eye className="size-3.5" />Manual chat entry. No bank passwords.</span>
        <span>INSTANT PARSE</span>
      </footer>
    </section>
  );
}

export type HumanSceneKind = "morning" | "coffee" | "salary" | "goa" | "home" | "control" | "closing";

/* -------------------------------------------------------------------------- */
/* NEW REDESIGNED RELATABLE INDIAN HOMEPAGE CARDS (MANUAL CHAT & UPLOAD ONLY)  */
/* -------------------------------------------------------------------------- */

/** 1. MORNING HERO CARD: Quick Chat Logging (Interactive Demo) */
function ChatLogHeroCard() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<Array<{ name: string; tag: string; cost: number; icon: string }>>([
    { name: "Auto to Metro", tag: "Commute", cost: 70, icon: "🛺" },
    { name: "Chai & Maska", tag: "Snack", cost: 45, icon: "☕" },
    { name: "Blinkit Dairy", tag: "Grocery", cost: 160, icon: "🥛" },
  ]);

  const totalSpent = items.reduce((acc, curr) => acc + curr.cost, 0);
  const dailyLimit = 800;
  const remaining = Math.max(0, dailyLimit - totalSpent);
  const percent = Math.min(100, Math.round((totalSpent / dailyLimit) * 100));

  const handleAddSample = (text: string, cost: number, tag: string, icon: string) => {
    setItems((prev) => [...prev, { name: text, tag, cost, icon }]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const match = inputText.match(/\d+/);
    const amount = match ? parseInt(match[0], 10) : 50;
    const cleanName = inputText.replace(/\d+/, "").replace(/rs|inr|₹/gi, "").trim() || "Quick Expense";
    setItems((prev) => [...prev, { name: cleanName, tag: "Daily Spend", cost: amount, icon: "💳" }]);
    setInputText("");
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#FED7AA] bg-[#FFFDF8] p-4 sm:p-6 lg:p-7 text-[#123630] shadow-[0_20px_50px_rgba(212,71,34,0.1)]">
      {/* Background ambient pattern */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#FFEDD5] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#D1FAE5] blur-3xl opacity-70" />

      {/* Top status bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 border-b border-[#FEE2E2]/60 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#FF5C2B] text-white shadow-sm">
            <MessageSquare className="size-4" />
          </span>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5C2B]">Quick Chat Entry</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#4B605B]">Interactive Simulator • Type or tap quick chips</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-[#FCD34D] bg-[#FFFBEB] px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#B45309]">
          <Zap className="size-3 text-[#D97706]" /> Live interactive
        </span>
      </div>

      {/* Interactive Quick Add Chips */}
      <div className="relative z-10 mt-3.5 sm:mt-4 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-bold text-[#5A6E69]">Quick chips:</span>
        <button
          type="button"
          onClick={() => handleAddSample("Filter Coffee", 30, "Beverage", "☕")}
          className="rounded-full bg-white border border-[#FED7AA] px-2.5 py-1 text-[11px] font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer shadow-2xs"
        >
          + Chai ₹30
        </button>
        <button
          type="button"
          onClick={() => handleAddSample("Uber to HSR", 180, "Transport", "🚕")}
          className="rounded-full bg-white border border-[#FED7AA] px-2.5 py-1 text-[11px] font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer shadow-2xs"
        >
          + Uber ₹180
        </button>
        <button
          type="button"
          onClick={() => handleAddSample("Swiggy Biryani", 320, "Food", "🍲")}
          className="rounded-full bg-white border border-[#FED7AA] px-2.5 py-1 text-[11px] font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer shadow-2xs"
        >
          + Swiggy ₹320
        </button>
        {items.length > 3 && (
          <button
            type="button"
            onClick={() => setItems([
              { name: "Auto to Metro", tag: "Commute", cost: 70, icon: "🛺" },
              { name: "Chai & Maska", tag: "Snack", cost: 45, icon: "☕" },
              { name: "Blinkit Dairy", tag: "Grocery", cost: 160, icon: "🥛" },
            ])}
            className="text-[10px] font-mono text-orange-700 hover:underline ml-auto cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      {/* Chat Simulation Area */}
      <div className="relative z-10 mt-3.5 sm:mt-4 space-y-3">
        {/* Custom Input Form */}
        <form onSubmit={handleCustomSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type 'Dosa 60' or 'Auto 40'..."
            className="flex-1 rounded-xl border border-[#FED7AA] bg-white px-3 sm:px-3.5 py-2 text-xs text-[#123630] placeholder:text-[#94A3B8] focus:border-[#FF5C2B] focus:outline-none shadow-inner"
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-xl bg-[#FF5C2B] px-3 sm:px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#D44722] transition-colors cursor-pointer shrink-0"
          >
            <Send className="size-3.5" />
          </button>
        </form>

        {/* Kubear Response Bubble with parsed cards */}
        <div className="flex items-start gap-2 sm:gap-2.5">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FF5C2B] text-xs font-bold text-white shadow-sm">
            K
          </div>
          <div className="w-full min-w-0 rounded-2xl rounded-tl-sm border border-[#FED7AA] bg-[#FFF8F3] p-3 sm:p-3.5 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#FDBA74]/40 pb-2">
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#059669] truncate">
                <CheckCircle2 className="size-3.5 shrink-0 text-[#10B981]" /> {items.length} items (₹{totalSpent.toLocaleString("en-IN")})
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#D44722] shrink-0 ml-1">Today&apos;s Ledger</span>
            </div>

            {/* Parsed items breakdown */}
            <div className="mt-2.5 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-h-44 overflow-y-auto pr-1">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-xl border border-orange-200 bg-white/95 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-xs">
                  <div className="min-w-0 pr-1">
                    <p className="truncate text-xs font-bold text-[#123630]">{item.icon} {item.name}</p>
                    <p className="font-mono text-[10px] text-orange-600 font-semibold">{item.tag}</p>
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#D44722] shrink-0">₹{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Pacing Metric Card */}
      <div className="relative z-10 mt-3.5 sm:mt-4 rounded-2xl border border-[#86EFAC] bg-gradient-to-r from-[#F0FDF4] to-[#ECFDF5] p-3.5 sm:p-4 shadow-xs">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#065F46] font-medium">Daily safe limit: <strong className="font-mono text-[#123630]">₹{dailyLimit}</strong></span>
          <span className="font-mono font-bold text-[#059669]">₹{remaining} left today</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-[#DCFCE7]">
          <div
            style={{ width: `${percent}%` }}
            className={`h-full rounded-full transition-all duration-300 ${percent > 90 ? "bg-red-500" : "bg-gradient-to-r from-[#FF5C2B] via-[#F59E0B] to-[#10B981]"}`}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-[#047857] font-mono font-bold">
          <span>₹{totalSpent} spent ({percent}%)</span>
          <span>Buffer target ₹{dailyLimit}</span>
        </div>
      </div>

      {/* Card Footnote */}
      <div className="relative z-10 mt-3.5 sm:mt-4 flex flex-wrap items-center justify-between gap-1 border-t border-[#FED7AA]/60 pt-3 text-xs text-[#4B605B]">
        <span className="inline-flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
          <Sparkles className="size-3.5 text-[#F59E0B] shrink-0" /> Type anything or tap the quick chips.
        </span>
        <span className="font-mono text-[10px] font-bold uppercase text-[#FF5C2B]">Live Simulator</span>
      </div>
    </div>
  );
}

/** 2. COFFEE / DAILY EXPENSES CARD: Bill & Receipt Photo Upload (Interactive Demo) */
function ReceiptUploadCard() {
  const [selectedBill, setSelectedBill] = useState<"meghana" | "swiggy" | "dmart">("meghana");
  const [isScanning, setIsScanning] = useState(false);
  const [mobileTab, setMobileTab] = useState<"receipt" | "extracted">("receipt");

  const bills = {
    meghana: {
      name: "Meghana Foods Biryani",
      tag: "Sunday Dinner",
      items: [
        { name: "1x Special Chicken Biryani", price: 420 },
        { name: "1x Paneer 65 Starter", price: 340 },
        { name: "2x Fresh Lime Soda", price: 160 },
        { name: "GST & Service", price: 46 },
      ],
      total: 966,
      category: "🍔 Dining & Outings",
      bufferRemaining: 3450,
    },
    swiggy: {
      name: "Swiggy Gourmet Order",
      tag: "Friday Night",
      items: [
        { name: "1x Sourdough Pizza", price: 490 },
        { name: "1x Garlic Breadsticks", price: 180 },
        { name: "Delivery & Packing", price: 65 },
      ],
      total: 735,
      category: "🍕 Food Delivery",
      bufferRemaining: 4265,
    },
    dmart: {
      name: "DMart Ready Pantry",
      tag: "Weekly Staples",
      items: [
        { name: "5kg Basmati Rice", price: 450 },
        { name: "2L Cold Pressed Oil", price: 360 },
        { name: "Detergent & Soaps", price: 290 },
      ],
      total: 1100,
      category: "🛒 Household Groceries",
      bufferRemaining: 6900,
    },
  };

  const current = bills[selectedBill];

  const handleSwitchBill = (key: "meghana" | "swiggy" | "dmart") => {
    setIsScanning(true);
    setSelectedBill(key);
    setTimeout(() => setIsScanning(false), 250);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#BFDBFE] bg-[#FFFDF8] p-4 sm:p-6 lg:p-7 text-[#123630] shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-sm">
            <Camera className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">Receipt &amp; Bill Upload</span>
            <p className="text-[11px] sm:text-xs text-[#4B605B]">Interactive Demo • Tap sample to scan</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {(["meghana", "swiggy", "dmart"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleSwitchBill(key)}
              className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedBill === key
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "bg-blue-50 text-[#1D4ED8] border border-blue-200 hover:bg-blue-100"
              }`}
            >
              {key === "meghana" ? "Restaurant" : key === "swiggy" ? "Swiggy" : "DMart"}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Sub-view Toggle (Visible on small screens) */}
      <div className="mt-3 flex sm:hidden rounded-xl bg-blue-50/80 p-1 border border-blue-100">
        <button
          type="button"
          onClick={() => setMobileTab("receipt")}
          className={`flex-1 rounded-lg py-1 text-center font-mono text-xs font-bold transition-all ${
            mobileTab === "receipt" ? "bg-white text-[#123630] shadow-2xs" : "text-[#4B605B]"
          }`}
        >
          🧾 1. Receipt Bill
        </button>
        <button
          type="button"
          onClick={() => setMobileTab("extracted")}
          className={`flex-1 rounded-lg py-1 text-center font-mono text-xs font-bold transition-all ${
            mobileTab === "extracted" ? "bg-emerald-600 text-white shadow-2xs" : "text-[#4B605B]"
          }`}
        >
          ✨ 2. Parsed Ledger
        </button>
      </div>

      {/* Dual Column: Upload Preview vs Parsed Result */}
      <div className="mt-4 sm:mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {/* Left: Tactile Receipt Snippet */}
        <div
          className={`relative rounded-2xl border border-dashed border-[#FDBA74] bg-[#FFFDF9] p-3.5 sm:p-4 shadow-xs transition-all duration-200 ${
            mobileTab !== "receipt" ? "hidden sm:block" : "block"
          } ${isScanning ? "opacity-40 scale-[0.99]" : "opacity-100 scale-100"}`}
        >
          <div className="flex items-center justify-between border-b border-dashed border-[#FED7AA] pb-2">
            <div className="flex items-center gap-1.5 truncate">
              <Receipt className="size-4 shrink-0 text-[#FF5C2B]" />
              <span className="truncate font-serif text-sm font-bold text-[#123630]">{current.name}</span>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-orange-700 font-bold ml-1">{current.tag}</span>
          </div>

          <div className="mt-3 space-y-1.5 text-xs text-[#4B605B]">
            {current.items.map((item, idx) => (
              <div key={idx} className="flex justify-between gap-2">
                <span className="truncate">{item.name}</span>
                <span className="font-mono font-bold text-[#123630] shrink-0">₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-[#FED7AA] pt-2">
            <span className="text-xs font-bold text-[#123630]">Total Paid</span>
            <span className="font-mono text-base font-extrabold text-[#D44722]">₹{current.total}</span>
          </div>

          {/* Quick tap indicator on mobile */}
          <div className="mt-3 flex sm:hidden justify-end">
            <button
              type="button"
              onClick={() => setMobileTab("extracted")}
              className="text-[11px] font-bold text-blue-600 inline-flex items-center gap-1 hover:underline"
            >
              View parsed breakdown →
            </button>
          </div>
        </div>

        {/* Right: Kubear Live Ledger Update */}
        <div
          className={`flex flex-col justify-between rounded-2xl border border-[#86EFAC] bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]/50 p-3.5 sm:p-4 text-[#123630] ${
            mobileTab !== "extracted" ? "hidden sm:flex" : "flex"
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-bold text-emerald-800 shrink-0">
                <Check className="size-3 text-emerald-600" /> {isScanning ? "Scanning..." : "Extracted in 1.2s"}
              </span>
              <span className="font-mono text-[10px] font-bold text-emerald-700 truncate">Auto Categorized</span>
            </div>

            <div className="mt-2.5 sm:mt-3">
              <span className="text-xs text-[#065F46] font-medium">Category tagged</span>
              <p className="text-sm sm:text-base font-bold text-[#123630] truncate">{current.category}</p>
            </div>

            <div className="mt-2.5 sm:mt-3 rounded-xl bg-white border border-[#A7F3D0] p-2.5 text-xs shadow-2xs">
              <div className="flex justify-between text-[#4B605B]">
                <span>Logged to ledger:</span>
                <span className="font-mono font-bold text-[#123630]">₹{current.total}</span>
              </div>
              <div className="mt-1 flex justify-between font-mono text-[11px] text-emerald-700 font-bold">
                <span>Safe left for month:</span>
                <span>₹{current.bufferRemaining.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-[#065F46] font-medium leading-relaxed">
            Zero typing. OCR automatically itemizes prices and tags the buffer.
          </p>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-blue-100 pt-3 text-xs text-[#4B605B]">
        <span className="flex items-center gap-1.5 font-medium">
          <Eye className="size-3.5 text-[#2563EB] shrink-0" /> Only what you upload is saved. Never scraped.
        </span>
        <span className="font-mono text-[10px] font-bold uppercase text-[#2563EB]">Zero Math</span>
      </div>
    </div>
  );
}

/** 3. SALARY DAY CARD: Day 1 Allocation for Indian Life (Interactive Simulator) */
function SalaryAllocationCard() {
  const [salary, setSalary] = useState(65000);
  const [rent, setRent] = useState(18000);
  const [parents, setParents] = useState(10000);
  const [sip, setSip] = useState(7000);
  const [bills, setBills] = useState(2500);

  const totalCommitted = rent + parents + sip + bills;
  const discretionary = Math.max(0, salary - totalCommitted);
  const dailySpend = Math.floor(discretionary / 30);
  const committedRatio = Math.round((totalCommitted / salary) * 100);

  return (
    <div id="salary-allocation-simulator" className="relative w-full overflow-hidden rounded-3xl border border-[#FDE68A] bg-[#FFFDF8] p-5 sm:p-7 text-[#123630] shadow-[0_20px_50px_rgba(245,158,11,0.1)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#F59E0B] text-white shadow-sm font-black">
            ₹
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">1st of the Month</span>
            <p className="text-xs text-[#4B605B]">Salary Allocation Simulator</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 border border-emerald-300 px-3 py-1 font-mono text-[11px] font-bold text-emerald-800">
            {committedRatio}% Locked Upfront
          </span>
        </div>
      </div>

      {/* Salary Quick Selector */}
      <div className="mt-4 rounded-2xl bg-amber-50/60 border border-amber-200 p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-[#123630]">Your Take-Home Monthly Salary:</span>
          <span className="font-mono text-sm font-extrabold text-[#B45309]">₹{salary.toLocaleString("en-IN")}</span>
        </div>
        <input
          type="range"
          min="30000"
          max="200000"
          step="5000"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full accent-[#B45309] cursor-pointer"
        />
        <div className="mt-2 flex gap-1.5">
          {[45000, 65000, 90000, 120000, 150000].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setSalary(val)}
              className={`rounded-lg px-2 py-0.5 font-mono text-[10px] font-bold cursor-pointer transition-colors ${
                salary === val
                  ? "bg-[#B45309] text-white"
                  : "bg-white border border-amber-200 text-amber-900 hover:bg-amber-100"
              }`}
            >
              ₹{(val / 1000)}k
            </button>
          ))}
        </div>
      </div>

      {/* Protected Fixed Commitments Stack */}
      <div className="mt-4 space-y-2.5">
        {/* House Rent */}
        <div className="rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-[#FFF7ED] p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <HomeIcon className="size-4 text-[#C2410C]" />
              <div>
                <p className="text-xs font-bold text-[#123630]">House Rent to Owner</p>
                <p className="font-mono text-[10px] text-orange-700">Due 5th • Locked upfront</p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-[#C2410C]">₹{rent.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min="5000"
            max="60000"
            step="1000"
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            className="w-full accent-[#C2410C] mt-2 cursor-pointer"
          />
        </div>

        {/* Parents Support */}
        <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-[#FFFBEB] p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Users className="size-4 text-[#A16207]" />
              <div>
                <p className="text-xs font-bold text-[#123630]">Sent Home to Parents</p>
                <p className="font-mono text-[10px] text-amber-700">Family priority</p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-[#A16207]">₹{parents.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min="0"
            max="40000"
            step="1000"
            value={parents}
            onChange={(e) => setParents(Number(e.target.value))}
            className="w-full accent-[#A16207] mt-2 cursor-pointer"
          />
        </div>

        {/* SIP & Investments */}
        <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-[#F0FDF4] p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="size-4 text-[#15803D]" />
              <div>
                <p className="text-xs font-bold text-[#123630]">Mutual Fund Index SIP</p>
                <p className="font-mono text-[10px] text-emerald-700">Future growth</p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-[#15803D]">₹{sip.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={sip}
            onChange={(e) => setSip(Number(e.target.value))}
            className="w-full accent-[#15803D] mt-2 cursor-pointer"
          />
        </div>

        {/* Bills & Utilities */}
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-[#EFF6FF] p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Zap className="size-4 text-[#1D4ED8]" />
              <div>
                <p className="text-xs font-bold text-[#123630]">Electricity, WiFi &amp; Bills</p>
                <p className="font-mono text-[10px] text-blue-700">Utilities</p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-[#1D4ED8]">₹{bills.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min="500"
            max="15000"
            step="500"
            value={bills}
            onChange={(e) => setBills(Number(e.target.value))}
            className="w-full accent-[#1D4ED8] mt-2 cursor-pointer"
          />
        </div>
      </div>

      {/* Highlight Box: Safe Spending Remaining */}
      <div className="mt-5 rounded-2xl border border-[#86EFAC] bg-gradient-to-r from-[#F0FDF4] via-[#ECFDF5] to-[#E0F2FE] p-4 text-[#123630]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Left for Living &amp; Fun
            </span>
            <p className="font-serif text-2xl font-bold text-[#123630] sm:text-3xl">₹{discretionary.toLocaleString("en-IN")}</p>
          </div>
          <div className="text-right">
            <span className="inline-block rounded-lg bg-white border border-[#86EFAC] px-2.5 py-1 font-mono text-xs font-bold text-[#15803D] shadow-2xs">
              ₹{dailySpend.toLocaleString("en-IN")} / day limit
            </span>
            <p className="mt-1 text-[10px] text-emerald-700 font-medium">Guilt-free daily spend</p>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-4 flex items-center justify-between border-t border-amber-200 pt-3 text-xs text-[#4B605B]">
        <span>Total committed: <strong className="font-mono font-bold text-[#B45309]">₹{totalCommitted.toLocaleString("en-IN")}</strong></span>
        <span className="font-mono text-[10px] font-bold text-emerald-800">100% CLEAR</span>
      </div>
    </div>
  );
}

/** 4. GOA / GOAL RUNWAY CARD: Rent first, Goal too (Interactive) */
function GoaGoalCard() {
  const [goalAmount, setGoalAmount] = useState(30000);
  const [savedSoFar, setSavedSoFar] = useState(22500);
  const [monthsLeft, setMonthsLeft] = useState(3);

  const neededPerMonth = Math.ceil((goalAmount - savedSoFar) / monthsLeft);
  const progressPercent = Math.min(100, Math.round((savedSoFar / goalAmount) * 100));

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#FDBA74] bg-[#FFFDF8] p-5 sm:p-7 text-[#123630] shadow-[0_20px_50px_rgba(234,88,12,0.1)]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#FFEDD5] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#CCFBF1] blur-3xl opacity-70" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-200 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#EA580C] text-white shadow-sm">
            <Palmtree className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#EA580C]">Goal Runway Tracker</span>
            <p className="text-xs text-[#4B605B]">Interactive • Goa Trip with Friends</p>
          </div>
        </div>
        <span className="rounded-full bg-orange-100 border border-orange-300 px-3 py-1 font-mono text-[11px] font-bold text-[#C2410C]">
          {monthsLeft} Months Left
        </span>
      </div>

      {/* Progress Bar & Amount Display */}
      <div className="relative z-10 mt-5">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-[#123630]">Progress ({progressPercent}%)</span>
          <span className="font-mono text-[#EA580C]">₹{savedSoFar.toLocaleString("en-IN")} / ₹{goalAmount.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-orange-100">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] transition-all duration-300"
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-[#839791] font-mono">
          <span>0%</span>
          <span>₹{(goalAmount - savedSoFar).toLocaleString("en-IN")} needed</span>
          <span>100%</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="relative z-10 mt-4 rounded-2xl bg-orange-50/70 border border-orange-200 p-3.5 space-y-3">
        <div>
          <div className="flex justify-between text-xs font-bold text-[#123630] mb-1">
            <span>Saved So Far:</span>
            <span className="font-mono text-[#EA580C]">₹{savedSoFar.toLocaleString("en-IN")}</span>
          </div>
          <input
            type="range"
            min="0"
            max={goalAmount}
            step="1500"
            value={savedSoFar}
            onChange={(e) => setSavedSoFar(Number(e.target.value))}
            className="w-full accent-[#EA580C] cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between pt-1 text-xs">
          <span className="font-medium text-[#123630]">Monthly Savings Needed:</span>
          <span className="font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
            ₹{neededPerMonth.toLocaleString("en-IN")} / month
          </span>
        </div>
      </div>

      {/* Footnote */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-orange-200 pt-3 text-xs text-[#4B605B]">
        <span>Plans don&apos;t fight with rent. They live side-by-side.</span>
        <span className="font-mono text-[10px] uppercase font-bold text-[#EA580C]">On Track</span>
      </div>
    </div>
  );
}

/** 5. HOME / FLATMATE SPLIT CARD: Shared Flat & Ghar Ka Kharcha (Interactive) */
function FlatmateSplitCard() {
  const [cookCost, setCookCost] = useState(4500);
  const [wifiCost, setWifiCost] = useState(1200);
  const [groceryCost, setGroceryCost] = useState(2400);
  const [numRoommates, setNumRoommates] = useState(3);

  const totalShared = cookCost + wifiCost + groceryCost;
  const perPerson = Math.round(totalShared / numRoommates);
  const toCollect = totalShared - perPerson;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#DDD6FE] bg-[#FFFDF8] p-5 sm:p-7 text-[#123630] shadow-[0_20px_50px_rgba(124,58,237,0.08)]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#EDE9FE] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#FEF3C7] blur-3xl opacity-70" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#7C3AED] text-white shadow-sm">
            <Users className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7C3AED]">Shared Ghar &amp; Flatmates</span>
            <p className="text-xs text-[#4B605B]">Interactive Two Tables Splitter</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold text-purple-900 mr-1">Flatmates:</span>
          {[2, 3, 4].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setNumRoommates(count)}
              className={`size-6 rounded-md font-mono text-xs font-bold transition-colors cursor-pointer ${
                numRoommates === count
                  ? "bg-[#7C3AED] text-white"
                  : "bg-purple-100 text-[#7C3AED] hover:bg-purple-200"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Shared Expenses Live Adjuster */}
      <div className="relative z-10 mt-4 space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-white border border-purple-100 p-2.5 text-xs shadow-2xs">
          <span className="font-bold text-[#123630]">👩‍🍳 Cook Aunty Salary:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={cookCost}
              onChange={(e) => setCookCost(Number(e.target.value))}
              className="w-20 rounded-md border border-purple-200 px-2 py-1 text-right font-mono font-bold text-[#7C3AED]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white border border-purple-100 p-2.5 text-xs shadow-2xs">
          <span className="font-bold text-[#123630]">⚡ Wi-Fi &amp; Utilities:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={wifiCost}
              onChange={(e) => setWifiCost(Number(e.target.value))}
              className="w-20 rounded-md border border-purple-200 px-2 py-1 text-right font-mono font-bold text-[#7C3AED]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white border border-purple-100 p-2.5 text-xs shadow-2xs">
          <span className="font-bold text-[#123630]">🥦 Shared Groceries:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={groceryCost}
              onChange={(e) => setGroceryCost(Number(e.target.value))}
              className="w-20 rounded-md border border-purple-200 px-2 py-1 text-right font-mono font-bold text-[#7C3AED]"
            />
          </div>
        </div>
      </div>

      {/* Split Result Matrix */}
      <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
        {/* Shared Table */}
        <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50 to-[#FFF7ED] p-3.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#C2410C]">🏠 Shared House Table</span>
            <span className="font-mono text-[10px] font-bold text-[#C2410C] bg-white px-1.5 py-0.5 rounded">Visible to {numRoommates}</span>
          </div>
          <div className="mt-2.5 space-y-1.5 text-xs text-[#123630]">
            <div className="flex justify-between">
              <span>Total Shared Spends</span>
              <span className="font-mono font-bold">₹{totalShared.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-[#C2410C] font-semibold">
              <span>Your Exact Share (1/{numRoommates})</span>
              <span className="font-mono font-bold">₹{perPerson.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between font-bold text-emerald-700">
              <span>To Collect from Others</span>
              <span className="font-mono">₹{toCollect.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Private Table */}
        <div className="rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-[#F0FDF4] p-3.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-900">🔒 Your Private Ledger</span>
            <span className="font-mono text-[10px] font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded">You Only</span>
          </div>
          <div className="mt-2.5 space-y-1.5 text-xs text-[#123630]">
            <div className="flex justify-between">
              <span>Zara Shirt &amp; Weekend Outing</span>
              <span className="font-mono font-bold text-emerald-900">₹2,800</span>
            </div>
            <div className="flex justify-between">
              <span>Filter Coffee &amp; Snacks</span>
              <span className="font-mono font-bold text-emerald-900">₹140</span>
            </div>
            <div className="border-t border-emerald-200 pt-1 text-[11px] text-emerald-800 font-medium">
              ✓ Invisible to roommates
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-purple-100 pt-3 text-xs text-[#4B605B]">
        <span>Zero awkward roommate WhatsApp chats at month end.</span>
        <span className="font-mono text-[10px] uppercase font-bold text-[#7C3AED]">Two Tables</span>
      </div>
    </div>
  );
}

/** 6. CONTROL / PRIVACY CARD: No Bank Passwords, No Movement */
function ControlPrivacyCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#A7F3D0] bg-[#FFFDF8] p-5 sm:p-7 text-[#123630] shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#D1FAE5] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#E0E7FF] blur-3xl opacity-70" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm font-bold">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">Privacy &amp; Control</span>
            <p className="text-xs text-[#4B605B]">Manual Read-Only Organiser</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 font-mono text-[11px] font-bold text-emerald-800">
          Zero Movement
        </span>
      </div>

      {/* 4 Pillars of Trust */}
      <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-[#FFF1F2] p-3.5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-rose-200 text-rose-800 font-mono text-xs font-bold">✕</span>
            <p className="text-xs font-bold text-rose-950">No Bank Passwords</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-rose-900/80">
            Never enter net banking logins, UPI PINs, or bank passwords. All entries are manual.
          </p>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-[#FFF7ED] p-3.5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-orange-200 text-orange-800 font-mono text-xs font-bold">✕</span>
            <p className="text-xs font-bold text-orange-950">Zero Money Movement</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-orange-900/80">
            Kubear cannot debit, transfer, or touch a single rupee of your money.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-[#F0FDF4] p-3.5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-emerald-200 text-emerald-900 font-mono text-xs font-bold">✓</span>
            <p className="text-xs font-bold text-emerald-950">Encrypted &amp; Private</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-emerald-900/80">
            Your data belongs to you. We never sell your spending details to credit card or loan companies.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-[#EFF6FF] p-3.5 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-blue-200 text-blue-900 font-mono text-xs font-bold">✓</span>
            <p className="text-xs font-bold text-blue-950">1-Click Export &amp; Delete</p>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-blue-900/80">
            Export your entire transaction ledger or delete your account anytime with zero lock-in.
          </p>
        </div>
      </div>

      {/* Footnote */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-emerald-200 pt-3 text-xs text-[#4B605B]">
        <span>A quiet, respectful tool for your eyes only.</span>
        <span className="font-mono text-[10px] font-bold text-emerald-800">YOU LEAD</span>
      </div>
    </div>
  );
}

/** 7. CLOSING CALM SUMMARY CARD */
function CalmClosingCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-[#FED7AA] bg-[#FFFDF8] p-5 sm:p-7 text-[#123630] shadow-[0_20px_50px_rgba(212,71,34,0.1)]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#FFEDD5] blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#D1FAE5] blur-3xl opacity-70" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-200 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#FF5C2B] text-white shadow-sm font-black">
            <Sparkles className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5C2B]">One Calm Picture</span>
            <p className="text-xs text-[#4B605B]">Week in Review</p>
          </div>
        </div>
        <span className="rounded-full bg-[#FFFBEB] border border-[#FCD34D] px-3 py-1 font-mono text-[11px] font-bold text-[#B45309]">
          Clarity &gt; Complexity
        </span>
      </div>

      {/* Summary Matrix */}
      <div className="relative z-10 mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-3 text-center shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-blue-700 font-bold">Salary Inflow</span>
          <p className="mt-1 font-mono text-lg font-bold text-blue-950">₹65,000</p>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-gradient-to-b from-orange-50 to-white p-3 text-center shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#C2410C] font-bold">Rent &amp; Bills</span>
          <p className="mt-1 font-mono text-lg font-bold text-[#C2410C]">₹37,500</p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-3 text-center shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#A16207] font-bold">Chat Spends</span>
          <p className="mt-1 font-mono text-lg font-bold text-[#A16207]">₹11,240</p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-3 text-center shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold">Safe Buffer</span>
          <p className="mt-1 font-mono text-lg font-bold text-emerald-800">₹16,260</p>
        </div>
      </div>

      <div className="relative z-10 mt-4 rounded-2xl bg-gradient-to-r from-orange-50 via-[#FFF7ED] to-amber-50 border border-orange-200 p-3.5 text-center text-xs font-medium text-[#123630]">
        &quot;No lost paper receipts. No Excel spreadsheet anxiety. Just peace of mind.&quot;
      </div>

      {/* Footnote */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-orange-200 pt-3 text-xs text-[#4B605B]">
        <span>Available on Web &amp; Android.</span>
        <span className="font-mono text-[10px] font-bold text-[#FF5C2B]">KUBEAR 2026</span>
      </div>
    </div>
  );
}

/** Unified HumanMoneyScene router to render the new cards */
export function HumanMoneyScene({ kind, className = "" }: InstrumentProps & { kind: HumanSceneKind }) {
  const cardMap: Record<HumanSceneKind, React.ReactNode> = {
    morning: <ChatLogHeroCard />,
    coffee: <ReceiptUploadCard />,
    salary: <SalaryAllocationCard />,
    goa: <GoaGoalCard />,
    home: <FlatmateSplitCard />,
    control: <ControlPrivacyCard />,
    closing: <CalmClosingCard />,
  };

  return (
    <figure className={`w-full max-w-[42rem] justify-self-end ${className}`} aria-label={`Kubear ${kind} money scenario`}>
      {cardMap[kind]}
    </figure>
  );
}

export function GoalRunwayInstrument({ className = "" }: InstrumentProps) {
  const moments = [
    ["05", "House Rent", "Due 5th to owner", "copper"],
    ["10", "SIP & Bills", "Locked in view", "ink"],
    ["27", "Goa Trip", "₹22.5k saved", "saffron"],
  ];
  return (
    <section className={`goal-runway-instrument ${className}`} aria-label="Illustrative monthly goal runway">
      <div className="goal-runway-top">
        <div>
          <InstrumentLabel>April, in one view</InstrumentLabel>
          <strong>Due dates and your plan can sit together.</strong>
        </div>
        <span>Illustrative month</span>
      </div>
      <div className="goal-runway-lane">
        {moments.map(([date, title, detail, tone], index) => (
          <div className={`goal-runway-stop ${tone}`} key={title}>
            <span>
              {date}<small>APR</small>
            </span>
            <i aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
            {index < moments.length - 1 ? <b aria-hidden="true" /> : null}
          </div>
        ))}
        <div className="goal-runway-destination" aria-hidden="true">
          <span>GOA</span>
          <i />
          <small>₹30k goal open</small>
        </div>
      </div>
      <div className="goal-runway-summary">
        <div>
          <small>After the commitments you planned</small>
          <strong>There is still room to choose.</strong>
        </div>
        <span><Check className="size-4" />Goal stays visible</span>
      </div>
    </section>
  );
}

export function HomeSplitInstrument({ className = "" }: InstrumentProps) {
  return (
    <section className={`home-two-tables ${className}`} aria-label="Illustrative selected home money sharing">
      <header>
        <div>
          <InstrumentLabel>Choose what is shared</InstrumentLabel>
          <strong>Two tables.<br />One clearer home view.</strong>
        </div>
        <span><LockKeyhole className="size-3.5" />By choice</span>
      </header>
      <div className="two-tables-stage">
        <article className="two-table shared-table">
          <p><i aria-hidden="true" />Home table</p>
          <div>
            <span>Cook Aunty Salary</span>
            <small>Shared with flatmates</small>
          </div>
          <div>
            <span>Blinkit Groceries</span>
            <small>Shared with flatmates</small>
          </div>
        </article>
        <span className="two-tables-divider" aria-hidden="true">
          <i />
          <small>ONLY WHAT<br />BELONGS<br />TOGETHER</small>
          <i />
        </span>
        <article className="two-table personal-table">
          <p><i aria-hidden="true" />Personal table</p>
          <div>
            <span>Coffee out</span>
            <small>Only yours</small>
          </div>
          <div>
            <span>Weekend shopping</span>
            <small>Only yours</small>
          </div>
        </article>
      </div>
      <footer>
        <span><Plus className="size-3.5" />Add only what belongs together</span>
        <b>Selected sharing</b>
      </footer>
    </section>
  );
}

export function HomeControlRoomInstrument({ className = "" }: InstrumentProps) {
  const boundaries = [
    ["01", "Manual Log", "Chat or photo upload"],
    ["02", "Review", "What needs care"],
    ["03", "Leave", "Whenever you want"],
  ];
  return (
    <section className={`home-control-room ${className}`} aria-label="Illustrative user control room">
      <div className="control-room-grid" aria-hidden="true" />
      <header>
        <div>
          <InstrumentLabel>Your boundary</InstrumentLabel>
          <strong>You stay at the controls.</strong>
        </div>
        <span><Eye className="size-3.5" />View, not movement</span>
      </header>
      <div className="control-room-console">
        {boundaries.map(([number, action, note], index) => (
          <div key={action} className="control-room-command" style={{ "--command": index } as React.CSSProperties}>
            <span>{number}</span>
            <i aria-hidden="true" />
            <div>
              <b>{action}</b>
              <small>{note}</small>
            </div>
            <em>{index === 0 ? "ON" : "YOU"}</em>
          </div>
        ))}
      </div>
      <footer>
        <span><LockKeyhole className="size-3.5" />Your choices lead</span>
        <span>No money movement</span>
      </footer>
    </section>
  );
}

export function ControlBoundaryInstrument({ className = "" }: InstrumentProps) {
  const lines = [
    ["Account details", "Manual input only"],
    ["Bill plans", "Clear context"],
    ["Money movement", "Zero / None"],
  ];
  return (
    <section className={`money-instrument control-boundary-instrument ${className}`} aria-label="Illustrative privacy and control boundary">
      <div className="boundary-grid" aria-hidden="true" />
      <div className="boundary-card">
        <div>
          <InstrumentLabel>Your boundary</InstrumentLabel>
          <strong>What is in your view.</strong>
        </div>
        {lines.map(([name, state]) => (
          <div className="boundary-line" key={name}>
            <span>{name}</span>
            <b>{state}</b>
          </div>
        ))}
      </div>
      <span className="boundary-sticker sticker-see"><Eye className="size-3" />See</span>
      <span className="boundary-sticker sticker-control"><LockKeyhole className="size-3" />Control</span>
      <span className="boundary-sticker sticker-leave">Leave anytime</span>
    </section>
  );
}

export function CalculatorLogicInstrument({ kind }: { kind: "salary" | "sip" | "emi" | "goa" }) {
  const content =
    kind === "salary"
      ? {
          label: "Salary Day Allocation",
          headline: "Lock fixed commitments on Day 1. Spend the rest freely.",
          pieces: [
            ["Salary", "₹65,000"],
            ["Rent & Bills", "₹37,500"],
            ["Daily Safe", "₹915/day"],
          ],
        }
      : kind === "sip"
      ? {
          label: "Monthly SIP",
          headline: "Small monthly steps, held in one line.",
          pieces: [
            ["Today", "₹5,000"],
            ["Every month", "+₹5,000"],
            ["Time", "10 years"],
          ],
        }
      : kind === "emi"
      ? {
          label: "Loan plan",
          headline: "One payment, with the full path beside it.",
          pieces: [
            ["Loan", "₹25L"],
            ["Rate", "8.5%"],
            ["Tenure", "5 years"],
          ],
        }
      : {
          label: "Goa plan",
          headline: "A plan looks lighter when the months are visible.",
          pieces: [
            ["Trip fund", "₹30K"],
            ["Saved", "₹22.5K"],
            ["Time", "3 months"],
          ],
        };
  const visual =
    kind === "salary" || kind === "sip" ? (
      <div className="logic-sip-ladder">
        {content.pieces.map(([label, value], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>
              {label}<b>{value}</b>
            </p>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
    ) : kind === "emi" ? (
      <div className="logic-emi-path">
        {content.pieces.map(([label, value], index) => (
          <div key={label}>
            <span>{label}</span>
            <b>{value}</b>
            {index < content.pieces.length - 1 ? <i aria-hidden="true" /> : null}
          </div>
        ))}
        <p>Monthly payment sits at the end of the path.</p>
      </div>
    ) : (
      <div className="logic-goa-runway">
        <div>
          <span>Saved</span>
          <b>₹22.5K</b>
        </div>
        <i aria-hidden="true">
          <span>3 months left</span>
        </i>
        <div>
          <span>Goal</span>
          <b>₹30K</b>
        </div>
        <p>Put the trip in the month before it gets busy.</p>
      </div>
    );
  return (
    <section className={`money-instrument calculator-logic-instrument calculator-logic-${kind}`} aria-label={`${content.label} illustration`}>
      <div className="calculator-logic-head">
        <InstrumentLabel>{content.label}</InstrumentLabel>
        <strong>{content.headline}</strong>
      </div>
      {visual}
      <p className="instrument-footnote">Illustrative inputs. Change yours below.</p>
    </section>
  );
}

