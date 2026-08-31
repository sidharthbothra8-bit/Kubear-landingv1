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
import { APP_URL } from "./MovingMoneyWorld";

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
    {
      index: "01",
      label: "Balance & Runway",
      detail: "after planned commitments",
      value: "₹26,660",
      tag: "Free to spend",
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
      dotColor: "bg-emerald-500",
      icon: Wallet,
    },
    {
      index: "02",
      label: "Due Next",
      detail: "House Rent due this Friday",
      value: "₹22,000",
      tag: "Fixed bill",
      tagColor: "bg-rose-50 text-rose-800 border-rose-200/60",
      dotColor: "bg-rose-500",
      icon: HomeIcon,
    },
    {
      index: "03",
      label: "Daily Spends",
      detail: "Auto, chai, lunches logged via chat",
      value: "₹7,240",
      tag: "14 logs",
      tagColor: "bg-amber-50 text-amber-800 border-amber-200/60",
      dotColor: "bg-amber-500",
      icon: Coffee,
    },
    {
      index: "04",
      label: "Flatmate Splits",
      detail: "Cook & grocery reconciliation",
      value: "2 Pending",
      tag: "Shared",
      tagColor: "bg-teal-50 text-teal-800 border-teal-200/60",
      dotColor: "bg-teal-500",
      icon: Users,
    },
  ];

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-[#123630]/15 bg-linear-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#F5EFE4] p-5 sm:p-7 shadow-xl shadow-[#123630]/8 text-[#123630] ${className}`}
      aria-label="Illustrative five-part money view"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[#FF5C2B]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#123630]/10">
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider uppercase text-[#C96632]">
          <span className="size-2 rounded-xs border border-current rotate-45" />
          <span>One week, with context</span>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#123630]/15 bg-[#FFFDF8] text-[10px] font-mono font-bold uppercase tracking-wider text-[#536861]">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Illustrative view
        </span>
      </div>

      {/* Hero Balance Snapshot */}
      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#123630] text-[#FFF8EE] shadow-md shadow-[#123630]/15 relative overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#D8E8DE]/70">
              Today&apos;s Picture · Free Cashflow
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <strong className="text-3xl sm:text-4xl font-serif font-normal text-[#FFF8EE] tracking-tight">
                ₹26,660
              </strong>
            </div>
            <p className="text-xs text-[#D8E8DE]/80 mt-1">
              after all planned commitments and upcoming bills
            </p>
          </div>
          <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#FFF8EE]/10 border border-[#FFF8EE]/20 text-[10px] font-mono font-bold text-[#F4D277] uppercase tracking-wider">
            Safe Runway
          </span>
        </div>
      </div>

      {/* Dimension rows (01 - 04) */}
      <div className="space-y-2.5">
        {points.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.index}
              className="group flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border border-[#123630]/10 bg-[#FFFDF8]/90 hover:bg-white hover:border-[#123630]/25 transition-all shadow-xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-xs font-bold text-[#8C9E97]">
                  {item.index}
                </span>
                <div className="size-8 rounded-lg bg-[#FAF7F0] border border-[#123630]/10 flex items-center justify-center text-[#123630] shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="size-4 text-[#123630]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <b className="text-xs sm:text-sm font-semibold text-[#123630] truncate">
                      {item.label}
                    </b>
                    <span
                      className={`hidden xs:inline-flex px-2 py-0.2 rounded-full border text-[10px] font-medium ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6A7C75] truncate">
                    {item.detail}
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="font-serif text-sm sm:text-base font-semibold text-[#123630] block">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Trust Indicator */}
      <div className="mt-4 pt-3.5 border-t border-[#123630]/10 flex items-center gap-2 text-[11px] text-[#556963]">
        <LockKeyhole className="size-3.5 text-emerald-700 shrink-0" />
        <span>
          Manual chat & upload entry. Kubear does not touch your money or connect to bank accounts.
        </span>
      </div>
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
/* NEW REDESIGNED RELATABLE INDIAN HOMEPAGE CARDS (COMPACT, CRISP & TACTILE)   */
/* -------------------------------------------------------------------------- */

/** 1. MORNING HERO CARD: Quick Chat Logging (Compact, Crisp, Flat Ledger) */
function ChatLogHeroCard() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<Array<{ name: string; tag: string; cost: number; icon: string }>>([
    { name: "Metro auto", tag: "Commute", cost: 70, icon: "🛺" },
    { name: "Chai point", tag: "Snacks", cost: 45, icon: "☕" },
    { name: "Blinkit grocery", tag: "Dairy & fruit", cost: 160, icon: "🥛" },
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
    const cleanName = inputText.replace(/\d+/, "").replace(/rs|inr|₹/gi, "").trim() || "Quick spend";
    setItems((prev) => [...prev, { name: cleanName.slice(0, 24), tag: "Daily", cost: amount, icon: "💳" }]);
    setInputText("");
  };

  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[#FFEDD5] blur-2xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-[#D1FAE5] blur-2xl opacity-40" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#E7DED0] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#FF5C2B] text-white shadow-sm">
            <MessageSquare className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#FF5C2B] block">Today&apos;s Spend</span>
            <span className="text-[11px] text-[#60746D] font-medium">Logged via quick chat</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-900 shrink-0">
          <Sparkles className="size-3 text-amber-600" /> ₹0 math effort
        </span>
      </div>

      {/* Quick Tap Buttons */}
      <div className="relative z-10 mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          type="button"
          onClick={() => handleAddSample("Chai tapri", 30, "Snacks", "☕")}
          className="rounded-full bg-white border border-[#E7DED0] px-3 py-1 font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-xs"
        >
          + Chai ₹30
        </button>
        <button
          type="button"
          onClick={() => handleAddSample("Uber cab", 180, "Commute", "🚕")}
          className="rounded-full bg-white border border-[#E7DED0] px-3 py-1 font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-xs"
        >
          + Uber ₹180
        </button>
        <button
          type="button"
          onClick={() => handleAddSample("Swiggy meal", 320, "Dinner", "🍲")}
          className="rounded-full bg-white border border-[#E7DED0] px-3 py-1 font-semibold text-[#123630] hover:bg-orange-50 hover:border-[#FF5C2B] transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-xs"
        >
          + Swiggy ₹320
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleCustomSubmit} className="relative z-10 mt-2.5 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type 'Dosa 60' or 'Auto 40'..."
          className="flex-1 rounded-xl border border-[#E7DED0] bg-white px-3 py-2 text-xs text-[#123630] placeholder:text-[#94A3B8] focus:border-[#FF5C2B] focus:outline-none shadow-xs"
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-xl bg-[#FF5C2B] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#D44722] transition-colors cursor-pointer shrink-0 active:scale-95"
        >
          <Send className="size-3.5" />
        </button>
      </form>

      {/* Sleek Flat Mini-Ledger */}
      <div className="relative z-10 mt-3 rounded-xl border border-orange-200/80 bg-[#FFF9F5] p-3">
        <div className="flex items-center justify-between border-b border-orange-200/60 pb-2 text-xs">
          <span className="flex items-center gap-1.5 font-bold text-[#059669]">
            <CheckCircle2 className="size-3.5 text-[#10B981]" /> {items.length} items logged today
          </span>
          <span className="font-mono font-extrabold text-[#D44722]">₹{totalSpent} total</span>
        </div>

        <div className="mt-2 space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/70 hover:bg-white transition-colors text-xs border border-orange-100/60"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-sm">{item.icon}</span>
                <span className="font-semibold text-[#123630] truncate">{item.name}</span>
                <span className="font-mono text-[10px] text-orange-600 font-medium">· {item.tag}</span>
              </div>
              <span className="font-mono text-xs font-extrabold text-[#D44722] shrink-0">₹{item.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slim Pacing Line */}
      <div className="relative z-10 mt-3 rounded-xl border border-[#86EFAC] bg-[#F0FDF4] p-2.5 text-xs">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#065F46] font-medium">Daily Safe Pacing: <strong className="font-mono font-bold text-[#123630]">₹{dailyLimit}</strong></span>
          <span className="font-mono font-extrabold text-[#059669]">₹{remaining} safe left</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#DCFCE7]">
          <div
            style={{ width: `${percent}%` }}
            className={`h-full rounded-full transition-all duration-300 ${percent > 90 ? "bg-red-500" : "bg-[#10B981]"}`}
          />
        </div>
      </div>
    </div>
  );
}

/** 2. COFFEE / DAILY EXPENSES CARD: Bill & Receipt Photo Upload */
function ReceiptUploadCard() {
  const [selectedBill, setSelectedBill] = useState<"meghana" | "swiggy" | "dmart">("meghana");
  const [isScanning, setIsScanning] = useState(false);

  const bills = {
    meghana: {
      name: "Meghana Biryani",
      tag: "Sunday Dinner",
      items: [
        { name: "Chicken Biryani", price: 420 },
        { name: "Paneer 65", price: 340 },
        { name: "Lime Soda (2)", price: 160 },
        { name: "Taxes & Pack", price: 46 },
      ],
      total: 966,
      category: "🍔 Dining",
      splitCount: 3,
      perPerson: 322,
    },
    swiggy: {
      name: "Swiggy Order",
      tag: "Friday Night",
      items: [
        { name: "Sourdough Pizza", price: 490 },
        { name: "Garlic Bread", price: 180 },
        { name: "Delivery Fee", price: 65 },
      ],
      total: 735,
      category: "🍕 Delivery",
      splitCount: 2,
      perPerson: 368,
    },
    dmart: {
      name: "DMart Pantry",
      tag: "Weekly Staples",
      items: [
        { name: "Basmati Rice 5kg", price: 450 },
        { name: "Groundnut Oil 2L", price: 360 },
        { name: "Soaps & Sponges", price: 290 },
      ],
      total: 1100,
      category: "🛒 Grocery",
      splitCount: 3,
      perPerson: 367,
    },
  };

  const current = bills[selectedBill];

  const handleSwitchBill = (key: "meghana" | "swiggy" | "dmart") => {
    setIsScanning(true);
    setSelectedBill(key);
    setTimeout(() => setIsScanning(false), 180);
  };

  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E7DED0] pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#2563EB] text-white shadow-sm">
            <Camera className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#2563EB] block">Bill Scanner</span>
            <span className="text-[11px] text-[#60746D] font-medium">Instant OCR & category extraction</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {(["meghana", "swiggy", "dmart"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleSwitchBill(key)}
              className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-all cursor-pointer ${
                selectedBill === key
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "bg-blue-50 text-[#1D4ED8] hover:bg-blue-100 border border-blue-200"
              }`}
            >
              {key === "meghana" ? "Biryani" : key === "swiggy" ? "Swiggy" : "DMart"}
            </button>
          ))}
        </div>
      </div>

      {/* Dual Tight Layout: Mini Receipt + Instant Split */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Left: Tear-off receipt style */}
        <div className="rounded-xl border border-dashed border-[#FED7AA] bg-[#FFFDF9] p-3 text-xs shadow-2xs">
          <div className="flex justify-between items-center border-b border-dashed border-[#FED7AA] pb-1.5">
            <span className="font-serif text-xs font-bold text-[#123630] truncate">{current.name}</span>
            <span className="font-mono text-[10px] text-orange-700 font-bold bg-orange-50 px-1.5 py-0.5 rounded">{current.tag}</span>
          </div>
          <div className="mt-2 space-y-1 text-xs text-[#4B605B]">
            {current.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-0.5">
                <span className="truncate max-w-[110px]">{item.name}</span>
                <span className="font-mono font-bold text-[#123630]">₹{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between items-center border-t border-[#FED7AA] pt-1.5 text-xs">
            <span className="font-bold text-[#123630]">Total</span>
            <span className="font-mono font-extrabold text-[#D44722] text-sm">₹{current.total}</span>
          </div>
        </div>

        {/* Right: Extracted Result & Split */}
        <div className="flex flex-col justify-between rounded-xl border border-[#86EFAC] bg-[#F0FDF4] p-3 text-xs shadow-2xs">
          <div>
            <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
              <span className="inline-flex items-center gap-1 font-bold text-emerald-800 text-[10.5px]">
                <Check className="size-3 text-emerald-600" /> {isScanning ? "Scanning..." : "Parsed in 1.1s"}
              </span>
              <span className="font-mono text-[10px] font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                {current.category}
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#5A6E69]">Total:</span>
                <span className="font-mono font-bold">₹{current.total}</span>
              </div>
              <div className="flex justify-between font-bold text-emerald-800 border-t border-emerald-200/60 pt-1">
                <span>{current.splitCount}-way split:</span>
                <span className="font-mono font-extrabold text-sm">₹{current.perPerson}/ea</span>
              </div>
            </div>
          </div>
          <p className="mt-2 text-[10.5px] text-[#065F46] leading-tight font-semibold bg-emerald-100/50 p-1.5 rounded-lg">
            ✓ Auto-categorised with zero manual entry.
          </p>
        </div>
      </div>
    </div>
  );
}

/** 3. SALARY DAY CARD: 1st of Month Allocation */
function SalaryAllocationCard() {
  const [salary, setSalary] = useState(85000);
  const rent = 22000;
  const parents = 12000;
  const sip = 10000;

  const totalCommitted = rent + parents + sip;
  const discretionary = Math.max(0, salary - totalCommitted);
  const dailySpend = Math.floor(discretionary / 30);
  const committedRatio = Math.round((totalCommitted / salary) * 100);

  return (
    <div id="salary-allocation-simulator" className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-200/70 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B] text-white shadow-sm font-black text-sm">
            ₹
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#B45309] block">Salary Autopilot</span>
            <span className="text-[11px] text-[#60746D] font-medium">Day 1 commitments locked</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-300 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-800 shrink-0">
          {committedRatio}% Protected
        </span>
      </div>

      {/* Salary Selector */}
      <div className="mt-3 flex items-center justify-between bg-amber-50/50 p-2 rounded-xl border border-amber-100">
        <div className="flex gap-1.5">
          {[50000, 85000, 120000, 150000].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setSalary(val)}
              className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold cursor-pointer transition-colors ${
                salary === val
                  ? "bg-[#B45309] text-white shadow-xs"
                  : "bg-white border border-amber-200 text-amber-900 hover:bg-amber-100"
              }`}
            >
              ₹{(val / 1000)}k
            </button>
          ))}
        </div>
        <span className="font-mono text-sm font-extrabold text-[#B45309]">₹{salary.toLocaleString("en-IN")}</span>
      </div>

      {/* Stacked Proportional Segment Bar */}
      <div className="mt-3 space-y-1.5">
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-amber-100 text-[10px] font-mono font-bold text-white shadow-inner">
          <div style={{ width: `${(rent / salary) * 100}%` }} className="bg-[#C2410C] flex items-center justify-center" title="Rent" />
          <div style={{ width: `${(parents / salary) * 100}%` }} className="bg-[#D97706] flex items-center justify-center" title="Parents" />
          <div style={{ width: `${(sip / salary) * 100}%` }} className="bg-[#059669] flex items-center justify-center" title="SIP" />
          <div style={{ width: `${(discretionary / salary) * 100}%` }} className="bg-[#10B981] flex items-center justify-center" title="Safe Spend" />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#5A6E69]">
          <span className="text-[#C2410C] font-semibold">Rent 22k</span>
          <span className="text-[#D97706] font-semibold">Parents 12k</span>
          <span className="text-[#059669] font-semibold">SIP 10k</span>
          <span className="text-[#10B981] font-bold">Safe Spend</span>
        </div>
      </div>

      {/* Guilt-Free Spending Outcome Pill */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#86EFAC] bg-[#F0FDF4] p-3 text-[#123630] shadow-xs">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
            Guilt-Free Left
          </span>
          <p className="font-serif text-xl font-bold leading-tight text-[#123630]">₹{discretionary.toLocaleString("en-IN")}</p>
        </div>
        <div className="text-right">
          <span className="inline-block rounded-lg bg-white border border-[#86EFAC] px-3 py-1 font-mono text-xs font-extrabold text-[#15803D] shadow-xs">
            ₹{dailySpend.toLocaleString("en-IN")} / day safe
          </span>
        </div>
      </div>
    </div>
  );
}

/** 4. GOA / GOAL RUNWAY CARD */
function GoaGoalCard() {
  const [savedSoFar, setSavedSoFar] = useState(24500);
  const goalAmount = 35000;
  const monthsLeft = 2;

  const remainingNeeded = goalAmount - savedSoFar;
  const dailySave = Math.ceil((remainingNeeded / monthsLeft) / 30);
  const progressPercent = Math.min(100, Math.round((savedSoFar / goalAmount) * 100));

  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-orange-200/70 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#EA580C] text-white shadow-sm">
            <Palmtree className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#EA580C] block">Goa Trip Runway</span>
            <span className="text-[11px] text-[#60746D] font-medium">April holiday pacing</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 border border-orange-300 px-2.5 py-1 font-mono text-[11px] font-bold text-[#C2410C] shrink-0">
          {monthsLeft} Mos Left
        </span>
      </div>

      {/* Progress Track with Milestones */}
      <div className="mt-3">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-xs text-[#123630]">Progress ({progressPercent}%)</span>
          <span className="font-mono text-xs text-[#EA580C] font-extrabold">₹{savedSoFar.toLocaleString("en-IN")} / ₹{goalAmount.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-orange-100 shadow-inner">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] transition-all"
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-mono text-[#839791]">
          <span className="bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 font-semibold text-[#123630]">✈️ Flights (Locked)</span>
          <span className="bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100 font-semibold text-[#123630]">🏨 Stay (Locked)</span>
          <span className="text-[#EA580C] font-bold bg-orange-100 px-1.5 py-0.5 rounded">🌴 Goa (85%)</span>
        </div>
      </div>

      {/* Slider & Daily Action */}
      <div className="mt-3 rounded-xl bg-orange-50/70 border border-orange-200 p-3">
        <div className="flex justify-between text-xs font-bold text-[#123630] mb-1.5">
          <span>Saved: ₹{savedSoFar.toLocaleString("en-IN")}</span>
          <span className="font-mono text-emerald-800 font-bold bg-white px-2.5 py-0.5 rounded-md border border-emerald-200 text-xs shadow-2xs">
            Save ₹{dailySave}/day
          </span>
        </div>
        <input
          type="range"
          min="0"
          max={goalAmount}
          step="1500"
          value={savedSoFar}
          onChange={(e) => setSavedSoFar(Number(e.target.value))}
          className="w-full accent-[#EA580C] cursor-pointer h-2"
        />
      </div>
    </div>
  );
}

/** 5. HOME / FLATMATE SPLIT CARD */
function FlatmateSplitCard() {
  const [numRoommates, setNumRoommates] = useState(3);
  const totalShared = 8400; // Cook 4500 + Wifi 1200 + Grocery 2700
  const perPerson = Math.round(totalShared / numRoommates);

  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-100 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED] text-white shadow-sm">
            <Users className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#7C3AED] block">Flat 402 Matrix</span>
            <span className="text-[11px] text-[#60746D] font-medium">Shared vs Private Isolation</span>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-[11px] font-bold text-purple-900 mr-1">Flatmates:</span>
          {[2, 3, 4].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setNumRoommates(count)}
              className={`size-6 rounded-lg font-mono text-xs font-bold transition-colors cursor-pointer ${
                numRoommates === count
                  ? "bg-[#7C3AED] text-white shadow-xs"
                  : "bg-purple-100 text-[#7C3AED] hover:bg-purple-200"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-side contrast */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {/* Shared Table */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/80 p-3 shadow-2xs">
          <div className="flex justify-between items-center border-b border-orange-200/60 pb-1.5">
            <span className="text-xs font-bold text-[#C2410C]">🏠 Shared Table</span>
            <span className="font-mono text-[9px] font-bold text-[#C2410C] bg-white px-1.5 py-0.5 rounded-full border border-orange-200">All {numRoommates} see</span>
          </div>
          <div className="mt-2 space-y-1 text-xs">
            <div className="flex justify-between"><span className="text-[#5A6E69]">Cook + WiFi:</span><span className="font-mono font-bold">₹{totalShared}</span></div>
            <div className="flex justify-between font-bold text-[#C2410C] border-t border-orange-200/60 pt-1.5">
              <span>Your share:</span>
              <span className="font-mono font-extrabold text-sm">₹{perPerson}</span>
            </div>
          </div>
        </div>

        {/* Private Table */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 shadow-2xs">
          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-1.5">
            <span className="text-xs font-bold text-emerald-900">🔒 Private Ledger</span>
            <span className="font-mono text-[9px] font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded-full border border-emerald-200">You only</span>
          </div>
          <div className="mt-2 space-y-1 text-xs">
            <div className="flex justify-between"><span className="text-[#5A6E69]">Cafe &amp; dates:</span><span className="font-mono font-bold text-emerald-900">₹1,990</span></div>
            <div className="border-t border-emerald-200/60 pt-1.5 text-[10px] text-emerald-800 font-semibold truncate">
              ✓ 100% hidden from flatmates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 6. CONTROL / PRIVACY CARD: No Bank Passwords */
function ControlPrivacyCard() {
  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-200/70 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm font-bold">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">Total Privacy</span>
            <span className="text-[11px] text-[#60746D] font-medium">Zero bank logins, zero sync</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-800 shrink-0">
          Zero Sync
        </span>
      </div>

      {/* 2x2 Crisp Security Stamps */}
      <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-rose-800 text-xs">✕</span>
            <p className="text-xs font-bold text-rose-950">No SMS Reading</p>
          </div>
          <p className="mt-1 text-[10.5px] text-rose-900/80 leading-tight">Zero OTP or message snooping.</p>
        </div>

        <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-orange-800 text-xs">✕</span>
            <p className="text-xs font-bold text-orange-950">No Netbanking</p>
          </div>
          <p className="mt-1 text-[10.5px] text-orange-900/80 leading-tight">No bank passwords requested.</p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-emerald-900 text-xs">✓</span>
            <p className="text-xs font-bold text-emerald-950">Never Sold</p>
          </div>
          <p className="mt-1 text-[10.5px] text-emerald-900/80 leading-tight">No loan or card sales calls.</p>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-blue-900 text-xs">✓</span>
            <p className="text-xs font-bold text-blue-950">1-Tap Export</p>
          </div>
          <p className="mt-1 text-[10.5px] text-blue-900/80 leading-tight">Download ledger CSV anytime.</p>
        </div>
      </div>
    </div>
  );
}

/** 7. CLOSING CALM SUMMARY CARD */
function CalmClosingCard() {
  return (
    <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#E7DED0] bg-[#FFFDF9] p-4 sm:p-5 text-[#123630] shadow-[0_12px_32px_rgba(18,54,48,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-orange-200/70 pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#FF5C2B] text-white shadow-sm font-black">
            <Sparkles className="size-4" />
          </span>
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#FF5C2B] block truncate">Monthly Picture</span>
            <span className="text-[11px] text-[#60746D] font-medium">Calm financial control</span>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-[#FFFBEB] border border-[#FCD34D] px-2.5 py-1 font-mono text-[11px] font-bold text-[#B45309] shrink-0">
          Zero Anxiety
        </span>
      </div>

      {/* 4-Metric Grid */}
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-2">
          <span className="text-[10px] uppercase tracking-wider text-blue-700 font-bold block">Salary</span>
          <p className="font-mono text-sm font-bold text-blue-950 mt-1">₹85k</p>
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-2">
          <span className="text-[10px] uppercase tracking-wider text-[#C2410C] font-bold block">Fixed</span>
          <p className="font-mono text-sm font-bold text-[#C2410C] mt-1">₹47.5k</p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-2">
          <span className="text-[10px] uppercase tracking-wider text-[#A16207] font-bold block">Logged</span>
          <p className="font-mono text-sm font-bold text-[#A16207] mt-1">₹14.2k</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-2">
          <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">Safe</span>
          <p className="font-mono text-sm font-bold text-emerald-800 mt-1">₹23.3k</p>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-[#5A6E69] font-medium bg-[#FAF7F0] p-2 rounded-xl border border-[#E7DED0]">
        &quot;No lost paper receipts. Just calm clarity every single day.&quot;
      </p>
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
    <figure className={`w-full flex justify-center lg:justify-end ${className}`} aria-label={`Kubear ${kind} money scenario`}>
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

