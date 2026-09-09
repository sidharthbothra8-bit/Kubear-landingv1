import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Heart,
  Home as HomeIcon,
  IndianRupee,
  Lock,
  MessageSquare,
  MinusCircle,
  Play,
  PlusCircle,
  Receipt,
  RotateCcw,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  TrendingDown,
  TrendingUp,
  Users,
  Utensils,
  Wallet,
  XCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { APP_URL, PLAY_URL } from "@/components/MovingMoneyWorld";
import { FirstFactAuthModal } from "@/components/FirstFactAuthModal";

export default function Home() {
  // Modal state for Frictionless First-Fact Funnel
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"auth" | "demo">("auth");

  // SECTION 1: Hero Interactive Mechanism State
  const [heroInput, setHeroInput] = useState("");
  const [activeHeroExpense, setActiveHeroExpense] = useState({
    prompt: "Chai & snacks ₹60",
    parsedAmount: "₹60",
    category: "Chai & Snacks",
    dailyRemaining: "₹540",
    rentDueDays: 4,
    confirmed: true,
  });

  const heroSamplePrompts = [
    { label: "Chai & snacks ₹60", prompt: "Chai & snacks ₹60", amount: "₹60", cat: "Chai & Snacks", rem: "₹540" },
    { label: "Auto to metro ₹85", prompt: "Auto to Indiranagar metro ₹85", amount: "₹85", cat: "Daily Commute", rem: "₹515" },
    { label: "Swiggy dinner ₹320", prompt: "Swiggy paneer biryani ₹320", amount: "₹320", cat: "Food Delivery", rem: "₹280" },
    { label: "Zepto milk & bread ₹110", prompt: "Zepto bread and milk ₹110", amount: "₹110", cat: "Groceries", rem: "₹490" },
  ];

  const handleApplyHeroPrompt = (item: typeof heroSamplePrompts[0]) => {
    setActiveHeroExpense({
      prompt: item.prompt,
      parsedAmount: item.amount,
      category: item.cat,
      dailyRemaining: item.rem,
      rentDueDays: 4,
      confirmed: true,
    });
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroInput.trim()) return;

    let amount = "₹120";
    let cat = "Daily Living";
    let rem = "₹480";

    const lower = heroInput.toLowerCase();
    const match = heroInput.match(/\d+/);
    if (match) {
      amount = `₹${match[0]}`;
      const num = parseInt(match[0], 10);
      rem = `₹${Math.max(0, 600 - num)}`;
    }

    if (lower.includes("auto") || lower.includes("uber") || lower.includes("metro")) {
      cat = "Transport";
    } else if (lower.includes("chai") || lower.includes("coffee") || lower.includes("tea")) {
      cat = "Chai & Snacks";
    } else if (lower.includes("swiggy") || lower.includes("zomato") || lower.includes("food")) {
      cat = "Food Delivery";
    } else if (lower.includes("zepto") || lower.includes("blinkit") || lower.includes("milk")) {
      cat = "Groceries";
    }

    setActiveHeroExpense({
      prompt: heroInput,
      parsedAmount: amount,
      category: cat,
      dailyRemaining: rem,
      rentDueDays: 4,
      confirmed: true,
    });
    setHeroInput("");
  };

  // SECTION 2: How It Works (15-Second Habit) Stepper State
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  // SECTION 3: Connected Financial Picture Interactive Simulator
  const [spentSoFar, setSpentSoFar] = useState(11550);
  const totalIncome = 75000;
  const fixedCommitments = 42000;
  const setAsideGoals = 10000;
  const availableForLiving = totalIncome - fixedCommitments - setAsideGoals; // ₹23,000
  const remainingMonthLiving = Math.max(0, availableForLiving - spentSoFar); // ₹11,450
  const daysLeft = 17;
  const dailyRemainingRate = Math.round(remainingMonthLiving / daysLeft); // ~₹675 / day

  // SECTION 4: Two Clean Worlds (Personal vs Shared) View
  const [activeSpaceTab, setActiveSpaceTab] = useState<"both" | "shared" | "personal">("both");

  const openAuth = (mode: "auth" | "demo" = "auth") => {
    setModalMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear: Know what you spent. See what’s still due."
        description="Record expenses in seconds through chat. Keep track of your commitments, balances, and savings—with personal and shared household money kept strictly separate."
        path="/"
      />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: HERO & TRUST STRIP (Show the Mechanism in 10s)     */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAF7F0] border-b border-[#123630]/10">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123630_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (60% Desktop) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123630]/[0.06] border border-[#123630]/12 text-[#123630]">
                <span className="text-sm">🇮🇳</span>
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#123630]">
                  Built for Indian Personal & Household Money
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-normal tracking-tight text-[#123630] leading-[1.08]">
                Know what you spent. <br />
                <span className="text-[#FF5C2B] font-serif italic">See what’s still due.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-[#3D5851] leading-relaxed max-w-2xl font-sans">
                Record expenses in seconds through chat. Keep track of your commitments, balances, and savings—with personal and shared household money kept strictly separate.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => openAuth("auth")}
                  className="min-h-[52px] px-7 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B1D] text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_4px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Start for Free on Web</span>
                  <ArrowRight className="size-4.5" />
                </button>

                <button
                  onClick={() => openAuth("demo")}
                  className="min-h-[52px] px-6 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#123630] font-bold text-base border-2 border-[#123630]/20 hover:border-[#123630]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Play className="size-4 fill-current text-[#FF5C2B]" />
                  <span>See 30s Demo</span>
                </button>
              </div>

              {/* Micro-Trust Line */}
              <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm font-mono text-[#4A635D]">
                <ShieldCheck className="size-4.5 text-[#10B981] shrink-0" />
                <span>
                  <strong>🔒 No bank passwords</strong> • No SMS snooping • Free to use • 30-second start
                </span>
              </div>
            </div>

            {/* Right Column (40% Desktop): The 10-Second Mechanism */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md rounded-3xl bg-[#FFFDF8] border-2 border-[#123630]/15 p-5 sm:p-6 shadow-xl space-y-4.5">
                {/* Mechanism Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D2]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#123630]">
                      The 10-Second Mechanism
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FF5C2B]/10 text-[#CD4623] font-bold">
                    Try Below
                  </span>
                </div>

                {/* 1. Chat Message Bubble */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#68857E] uppercase">
                    1. You Text Like A Friend
                  </div>
                  <div className="flex items-end justify-end">
                    <div className="rounded-2xl rounded-br-xs bg-[#123630] text-white px-4 py-2.5 max-w-[85%] text-sm font-medium shadow-xs">
                      {activeHeroExpense.prompt}
                    </div>
                  </div>
                </div>

                {/* 2. Soft Green Verification Pill */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs font-medium animate-in fade-in duration-300">
                  <CheckCircle2 className="size-4 text-[#10B981] shrink-0" />
                  <span>
                    Recorded <strong>{activeHeroExpense.parsedAmount}</strong> under <strong>{activeHeroExpense.category}</strong>
                  </span>
                </div>

                {/* 3. Live Daily Clarity Card */}
                <div className="p-4.5 rounded-2xl bg-[#123630] text-white shadow-md space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A5DDD0] pb-2 border-b border-white/12">
                    <span className="uppercase font-bold tracking-wider">Daily Clarity Card</span>
                    <span className="px-1.5 py-0.2 rounded bg-white/10 text-white">Live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10">
                      <div className="text-[11px] font-mono text-[#CBDCD6]">Today's Remaining Limit</div>
                      <div className="text-2xl font-serif font-bold text-[#F4D277] mt-0.5">
                        {activeHeroExpense.dailyRemaining}
                      </div>
                      <div className="text-[10px] text-[#A5DDD0] mt-0.5 font-mono">from ₹600 limit</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/10">
                      <div className="text-[11px] font-mono text-[#CBDCD6]">Bills Due This Week</div>
                      <div className="text-xl font-serif font-bold text-white mt-0.5">
                        Rent ₹18,000
                      </div>
                      <div className="text-[10px] text-[#FCA5A5] mt-0.5 font-mono">in {activeHeroExpense.rentDueDays} days (Set aside)</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#CBDCD6] font-mono flex items-center gap-1.5 pt-1">
                    <Lock className="size-3 text-[#F4D277]" />
                    <span>Personal spending kept strictly separate from rent buffer.</span>
                  </div>
                </div>

                {/* Sample Prompt Chips */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-[#5F7B74] font-bold uppercase">
                    Tap to see balance transform:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {heroSamplePrompts.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleApplyHeroPrompt(item)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-colors cursor-pointer ${
                          activeHeroExpense.parsedAmount === item.amount
                            ? "bg-[#123630] text-white border-[#123630]"
                            : "bg-[#FAF6EE] text-[#123630] border-[#E0D8C8] hover:border-[#123630]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Custom Input */}
                <form onSubmit={handleHeroSubmit} className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="or type e.g. 'Coffee 120'"
                    value={heroInput}
                    onChange={(e) => setHeroInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#123630]/20 bg-white placeholder:text-[#9FB3AC] focus:border-[#FF5C2B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 text-xs font-bold rounded-xl bg-[#123630] hover:bg-[#0A221E] text-white cursor-pointer transition-colors shrink-0"
                  >
                    Test
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: HOW IT WORKS (The 15-Second Habit)                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FFFDF8] border-b border-[#123630]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              The 15-Second Habit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] leading-tight font-normal">
              No spreadsheets. No endless forms. <br />
              <span className="italic text-[#FF5C2B]">Just tell it like you text.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4E6760] font-sans max-w-2xl mx-auto">
              You don't need another app that feels like unpaid homework. Kubear turns quick conversational notes into an organized, connected money picture.
            </p>
          </div>

          {/* Stepper Tabs (Interactive Loop) */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF5ED] border border-[#123630]/10 gap-2">
              {[
                { step: 1, title: "01. Just Text" },
                { step: 2, title: "02. Quick Review" },
                { step: 3, title: "03. Done & Connected" },
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(item.step as 1 | 2 | 3)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeStep === item.step
                      ? "bg-[#123630] text-white shadow-xs"
                      : "text-[#4B635D] hover:text-[#123630]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Step Visual Display Card */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-[#FAF7F0] border border-[#123630]/15 p-6 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left explanation */}
              <div className="md:col-span-6 space-y-4">
                {activeStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="font-mono text-xs font-bold text-[#FF5C2B] uppercase">Step 01 • Instant Entry</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#123630]">
                      Just type naturally in chat
                    </h3>
                    <p className="text-sm sm:text-base text-[#4E6760] leading-relaxed">
                      Type `"Swiggy 420"`, `"Auto 65"`, or `"Split 1200 groceries with Rahul"`. No 8-step forms, no mandatory dropdowns, and no categories to manually hunt down.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E0D7C5] text-xs font-mono text-[#123630]">
                      💡 <strong>What you learn:</strong> Logging an expense takes under 5 seconds, right as you step out of the auto or finish dinner.
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="font-mono text-xs font-bold text-[#FF5C2B] uppercase">Step 02 • Intelligent Confirmation</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#123630]">
                      Quick review. You stay in control.
                    </h3>
                    <p className="text-sm sm:text-base text-[#4E6760] leading-relaxed">
                      Kubear extracts the amount, matches the right category, and tags whether it belongs to your personal wallet or a shared flatmate split. Tap once to confirm.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E0D7C5] text-xs font-mono text-[#123630]">
                      💡 <strong>What you learn:</strong> You stay in full control. Zero mysterious AI miscalculations or accidental bank errors.
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <span className="font-mono text-xs font-bold text-[#FF5C2B] uppercase">Step 03 • The Connected Picture</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#123630]">
                      Instantly reflected in your daily limit
                    </h3>
                    <p className="text-sm sm:text-base text-[#4E6760] leading-relaxed">
                      Your daily spending limit immediately recalibrates. You see what’s left for today, what’s saved for rent, and what flatmates owe you—all in one unified number.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E0D7C5] text-xs font-mono text-[#123630]">
                      💡 <strong>What you learn:</strong> No mental math before ordering. You immediately know if you're on pace for the week.
                    </div>
                  </div>
                )}
              </div>

              {/* Right Visual Simulator Box */}
              <div className="md:col-span-6">
                <div className="rounded-2xl bg-white border border-[#123630]/15 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D2]">
                    <span className="font-mono text-xs font-bold text-[#123630]">
                      Live Demo • Step {activeStep} of 3
                    </span>
                    <span className="font-mono text-[11px] text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded font-bold">
                      Zero Forms
                    </span>
                  </div>

                  {activeStep === 1 && (
                    <div className="space-y-3 py-2">
                      <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#E5DEC9] text-sm text-[#123630] font-mono">
                        &gt; Swiggy dinner 420
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#E5DEC9] text-sm text-[#123630] font-mono">
                        &gt; Split 1200 groceries with Rahul
                      </div>
                      <p className="text-xs text-[#526D66] font-mono text-center">
                        Simple plain English or Hinglish text is parsed instantly.
                      </p>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 py-2">
                      <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-[#10B981]" />
                          <span className="text-xs font-mono font-bold text-[#065F46]">
                            Swiggy Dinner • ₹420
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981] text-white font-bold">
                          Food Delivery
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Split className="size-4 text-[#2563EB]" />
                          <span className="text-xs font-mono font-bold text-[#1E40AF]">
                            Groceries • ₹1,200 (Split 50/50)
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2563EB] text-white font-bold">
                          Rahul owes ₹600
                        </span>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3 py-2">
                      <div className="p-4 rounded-xl bg-[#123630] text-white space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono text-[#A5DDD0]">
                          <span>Daily Living Remaining</span>
                          <span className="text-[#F4D277] font-bold">₹540 / day</span>
                        </div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#10B981] h-2 rounded-full" style={{ width: "74%" }} />
                        </div>
                        <div className="flex justify-between text-[11px] text-[#CBDCD6] pt-1">
                          <span>Rent set aside: ₹18,000</span>
                          <span>Flatmate dues: +₹4,100</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex justify-between items-center text-xs">
                    <button
                      onClick={() => setActiveStep((prev) => (prev === 1 ? 3 : ((prev - 1) as 1 | 2 | 3)))}
                      className="text-[#4E6760] font-mono hover:text-[#123630] cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev === 3 ? 1 : ((prev + 1) as 1 | 2 | 3)))}
                      className="text-[#FF5C2B] font-mono font-bold hover:underline cursor-pointer"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: THE CONNECTED FINANCIAL PICTURE (No Math Anxiety)  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#123630]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
                No Math Anxiety
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] leading-tight font-normal">
                Know exactly where you stand <br />
                <span className="italic text-[#FF5C2B]">before the month ends.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#4E6760] leading-relaxed font-sans">
                Small UPI payments add up quietly. Kubear keeps your commitments visible so you always know what is genuinely yours to spend.
              </p>

              {/* Three Clarity Pillars */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#123630]/10 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">
                      Available for Daily Living (Not false bank balance)
                    </h4>
                    <p className="text-xs text-[#526D66] mt-0.5">
                      Your bank account says ₹50,000, but ₹32,000 is already spoken for rent, EMIs, and cook salary. Kubear hides the illusion.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#123630]/10 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">
                      Daily Spending Limit that adjusts dynamically
                    </h4>
                    <p className="text-xs text-[#526D66] mt-0.5">
                      Spend ₹1,200 on a weekend dinner? Your daily limit naturally adapts for the remaining 16 days so you never run dry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => openAuth("auth")}
                  className="min-h-[48px] px-6 rounded-xl bg-[#123630] hover:bg-[#092520] text-white font-bold text-sm flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <span>See Your Numbers in Kubear</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Verified Calculation Breakdown Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#123630] text-white p-6 sm:p-8 shadow-2xl border border-white/10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#A5DDD0] block">
                      Monthly Connected Picture
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-0.5">
                      September 2026 Overview
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#4ADE80] font-bold">
                    Zero Math Headache
                  </span>
                </div>

                {/* Calculation Rows (Exact Blueprint Math) */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 text-white/90">
                    <span className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#10B981]" />
                      Income Recorded
                    </span>
                    <span className="font-bold text-base text-white">₹75,000</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 text-[#FCA5A5]">
                    <span className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#EF4444]" />
                      Fixed Commitments (Rent, EMIs, SIPs)
                    </span>
                    <span className="font-bold">- ₹42,000</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 text-[#FDE68A]">
                    <span className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#F59E0B]" />
                      Set Aside for Annual Bills & Goals
                    </span>
                    <span className="font-bold">- ₹10,000</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t-2 border-white/20 pt-3" />

                  <div className="flex items-center justify-between text-[#A5DDD0] font-bold text-sm sm:text-base">
                    <span>Available for Daily Living</span>
                    <span className="text-white text-lg">₹23,000</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 mt-4">
                    <div className="flex justify-between items-center text-xs text-[#CBDCD6]">
                      <span>Spent this month to date:</span>
                      <span className="font-bold text-white">₹{spentSoFar.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="flex justify-between items-center text-sm font-bold text-[#F4D277]">
                      <span>Remaining this month:</span>
                      <span className="text-lg">₹{remainingMonthLiving.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#A5DDD0]">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-[#F4D277]" />
                        Next {daysLeft} days pace:
                      </span>
                      <span className="font-bold text-base text-[#4ADE80]">
                        ₹{dailyRemainingRate} / day
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro-Slider to simulate spending */}
                <div className="pt-1 space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-[#9ABDB4]">
                    <span>Simulate spending more:</span>
                    <span>₹{spentSoFar.toLocaleString("en-IN")}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="22000"
                    step="500"
                    value={spentSoFar}
                    onChange={(e) => setSpentSoFar(parseInt(e.target.value, 10))}
                    className="w-full accent-[#FF5C2B] cursor-pointer"
                  />
                  <div className="text-[10px] text-center font-mono text-[#CBDCD6]">
                    Drag slider to see how your daily living pace updates in real time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: TWO CLEAN WORLDS (Personal Space vs Shared House)  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FFFDF8] border-b border-[#123630]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Two Clean Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] leading-tight font-normal">
              Share apartment bills. <br />
              <span className="italic text-[#FF5C2B]">Keep your private life private.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4E6760] font-sans max-w-2xl mx-auto">
              Split rent, maid salaries, and groceries with flatmates or a partner without exposing your personal savings, investments, or weekend shopping.
            </p>
          </div>

          {/* Mobile view toggle (hidden on md and up) */}
          <div className="mt-8 flex justify-center md:hidden">
            <div className="inline-flex p-1 rounded-xl bg-[#FAF5ED] border border-[#123630]/10 gap-1 font-mono text-xs">
              <button
                onClick={() => setActiveSpaceTab("shared")}
                className={`px-3 py-1.5 rounded-lg font-bold ${
                  activeSpaceTab === "shared" ? "bg-[#123630] text-white" : "text-[#4E6760]"
                }`}
              >
                🏠 Shared Household
              </button>
              <button
                onClick={() => setActiveSpaceTab("personal")}
                className={`px-3 py-1.5 rounded-lg font-bold ${
                  activeSpaceTab === "personal" ? "bg-[#123630] text-white" : "text-[#4E6760]"
                }`}
              >
                🔒 Private Personal
              </button>
            </div>
          </div>

          {/* Side-by-Side Visual Comparison Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 1. Shared Household Space */}
            <div
              className={`rounded-3xl bg-[#FAF7F0] border-2 border-[#123630]/15 p-6 sm:p-8 shadow-md space-y-5 transition-all ${
                activeSpaceTab === "personal" ? "hidden md:block" : "block"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D2]">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-[#FF5C2B]/15 text-[#CD4623]">
                    <HomeIcon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#123630]">
                      Shared Household Space
                    </h3>
                    <span className="text-xs font-mono text-[#58736C]">
                      Visible to: You + 2 Flatmates (Aman & Rahul)
                    </span>
                  </div>
                </div>
              </div>

              {/* Shared Items List */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-white border border-[#E2D9C8] flex justify-between items-center">
                  <div>
                    <strong className="block text-[#123630]">Flat Rent</strong>
                    <span className="text-[11px] text-[#637E77]">Split 3 ways equal</span>
                  </div>
                  <span className="font-bold text-[#123630]">₹32,000</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E2D9C8] flex justify-between items-center">
                  <div>
                    <strong className="block text-[#123630]">Cook & Maid Salary</strong>
                    <span className="text-[11px] text-[#637E77]">Due 1st of month</span>
                  </div>
                  <span className="font-bold text-[#123630]">₹7,500</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E2D9C8] flex justify-between items-center">
                  <div>
                    <strong className="block text-[#123630]">WiFi & Electricity</strong>
                    <span className="text-[11px] text-[#637E77]">Act Fiber (Monthly)</span>
                  </div>
                  <span className="font-bold text-[#123630]">₹1,199</span>
                </div>

                {/* Summary Pill */}
                <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between text-xs text-[#1E40AF]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Split className="size-4 text-[#2563EB]" />
                    Rahul owes you:
                  </span>
                  <span className="font-bold text-sm">₹4,100</span>
                </div>
              </div>

              <p className="text-xs text-[#526D66] font-mono leading-relaxed">
                Shared costs are settled simply without awkward payment reminders. Everyone sees what’s paid.
              </p>
            </div>

            {/* 2. Private Personal Space */}
            <div
              className={`rounded-3xl bg-[#123630] text-white p-6 sm:p-8 shadow-md space-y-5 border border-white/10 transition-all ${
                activeSpaceTab === "shared" ? "hidden md:block" : "block"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-white/10 text-[#F4D277]">
                    <Lock className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white">
                      Private Personal Space
                    </h3>
                    <span className="text-xs font-mono text-[#A5DDD0]">
                      Visible to: Only You (Encrypted)
                    </span>
                  </div>
                </div>
              </div>

              {/* Private Items List */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div>
                    <strong className="block text-white">Monthly Nifty SIP</strong>
                    <span className="text-[11px] text-[#CBDCD6]">Auto-debit on 5th</span>
                  </div>
                  <span className="font-bold text-[#F4D277]">₹5,000</span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div>
                    <strong className="block text-white">Weekend Dinner & Shopping</strong>
                    <span className="text-[11px] text-[#CBDCD6]">Personal leisure</span>
                  </div>
                  <span className="font-bold text-white">₹1,850</span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                  <div>
                    <strong className="block text-white">Emergency Fund Reserve</strong>
                    <span className="text-[11px] text-[#CBDCD6]">3 months runway lockbox</span>
                  </div>
                  <span className="font-bold text-[#4ADE80]">₹25,000</span>
                </div>

                {/* Privacy Badge */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between text-xs text-[#CBDCD6]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="size-4 text-[#4ADE80]" />
                    Privacy Status:
                  </span>
                  <span className="font-bold text-[#4ADE80]">100% Private & Separate</span>
                </div>
              </div>

              <p className="text-xs text-[#CBDCD6] font-mono leading-relaxed">
                Flatmates cannot see your salary, your personal investments, or where you spend on weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: RADICAL PRIVACY & INTEGRITY (Fintech Defense)       */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#123630]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Radical Privacy & Integrity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] leading-tight font-normal">
              No ads. No loan calls. <br />
              <span className="italic text-[#FF5C2B]">No selling your financial life.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4E6760] font-sans max-w-2xl mx-auto">
              Most money apps make money by selling your profile to credit card and personal loan telemarketers. Kubear is built on a completely different model.
            </p>
          </div>

          {/* The 3 Hard Guarantees */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-3xl bg-white border border-[#123630]/15 p-6 sm:p-7 shadow-xs space-y-3">
              <div className="size-12 rounded-2xl bg-[#FF5C2B]/10 text-[#CD4623] flex items-center justify-center font-bold">
                <Lock className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-[#123630]">
                1. Zero Bank Credentials
              </h3>
              <p className="text-sm text-[#4E6760] leading-relaxed">
                You never enter net-banking passwords, UPI PINs, or debit card numbers. Kubear is strictly read-only and unlinked from your bank funds.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#123630]/15 p-6 sm:p-7 shadow-xs space-y-3">
              <div className="size-12 rounded-2xl bg-[#10B981]/15 text-[#047857] flex items-center justify-center font-bold">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-[#123630]">
                2. Zero SMS Invasiveness
              </h3>
              <p className="text-sm text-[#4E6760] leading-relaxed">
                We don’t snoop through your private messages, bank notifications, or personal OTPs. Your personal life stays personal.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#123630]/15 p-6 sm:p-7 shadow-xs space-y-3">
              <div className="size-12 rounded-2xl bg-[#123630]/10 text-[#123630] flex items-center justify-center font-bold">
                <ShieldAlert className="size-6 text-[#123630]" />
              </div>
              <h3 className="font-serif text-xl text-[#123630]">
                3. Zero Spam Calls
              </h3>
              <p className="text-sm text-[#4E6760] leading-relaxed">
                You will never receive an unsolicited phone call, pre-approved credit card pitch, or instant personal loan offer through Kubear. Ever.
              </p>
            </div>
          </div>

          {/* Comparison Matrix: Kubear vs Typical "Free" Expense Apps */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-[#FFFDF8] border-2 border-[#123630]/15 overflow-hidden shadow-md">
            <div className="px-6 py-4 bg-[#FAF5ED] border-b border-[#EAE3D2] flex justify-between items-center">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#123630]">
                Defense Comparison: Kubear vs. Typical "Free" Expense Trackers
              </span>
              <span className="text-xs font-mono text-[#FF5C2B] font-bold">
                Honest Breakdown
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-mono">
                <thead>
                  <tr className="border-b border-[#EAE3D2] bg-white text-[#526D66]">
                    <th className="py-3.5 px-5 font-bold uppercase">Security Factor</th>
                    <th className="py-3.5 px-5 font-bold uppercase text-[#065F46] bg-[#ECFDF5]/50">
                      Kubear
                    </th>
                    <th className="py-3.5 px-5 font-bold uppercase text-[#991B1B]">
                      Typical "Free" SMS Scrapers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE3D2]">
                  <tr>
                    <td className="py-3 px-5 font-bold text-[#123630]">Bank Passwords & Credentials</td>
                    <td className="py-3 px-5 text-[#065F46] bg-[#ECFDF5]/30 font-bold">
                      ✅ Never requested
                    </td>
                    <td className="py-3 px-5 text-[#991B1B]">
                      ⚠️ Requires net-banking / AA login
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-bold text-[#123630]">SMS & OTP Reading Permissions</td>
                    <td className="py-3 px-5 text-[#065F46] bg-[#ECFDF5]/30 font-bold">
                      ✅ Zero SMS permissions
                    </td>
                    <td className="py-3 px-5 text-[#991B1B]">
                      ⚠️ Reads every SMS, including private OTPs
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-bold text-[#123630]">Telemarketing & Loan Leads</td>
                    <td className="py-3 px-5 text-[#065F46] bg-[#ECFDF5]/30 font-bold">
                      ✅ Zero ads, zero loan calls
                    </td>
                    <td className="py-3 px-5 text-[#991B1B]">
                      ⚠️ Sells financial profile to telemarketers
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-bold text-[#123630]">Shared Flat & Personal Separation</td>
                    <td className="py-3 px-5 text-[#065F46] bg-[#ECFDF5]/30 font-bold">
                      ✅ Strict two-space privacy
                    </td>
                    <td className="py-3 px-5 text-[#991B1B]">
                      ⚠️ Messy mixed feeds or single user only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: HIGH-CONVERSION FAQS                               */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#FFFDF8] border-b border-[#123630]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#4E6760]">
              Everything you need to know about our privacy, data ownership, and everyday logging.
            </p>
          </div>

          {/* Accordion List with 5 High-Conversion Objections */}
          <div className="rounded-3xl bg-[#FAF7F0] border border-[#123630]/15 p-6 sm:p-8 shadow-xs">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-[#E0D7C5] pb-3">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-[#123630] hover:text-[#FF5C2B] transition-colors py-2">
                  Do I have to connect my bank account or enter my UPI PIN?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#4E6760] font-sans leading-relaxed pt-2">
                  No, never. Kubear is completely read-only and unlinked from your bank. You never enter bank credentials, debit card details, or UPI PINs. You log expenses in seconds via quick chat, text, or bill photos. Your money cannot be moved or touched.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-[#E0D7C5] pb-3">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-[#123630] hover:text-[#FF5C2B] transition-colors py-2">
                  Does Kubear read my SMS messages?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#4E6760] font-sans leading-relaxed pt-2">
                  No. Kubear will never ask for SMS permissions or snoop through your private messages, bank notifications, or personal OTPs. Unlike invasive aggregator apps that sell SMS transaction data to loan companies, your financial privacy remains 100% yours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-[#E0D7C5] pb-3">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-[#123630] hover:text-[#FF5C2B] transition-colors py-2">
                  How does Kubear compare to Splitwise or traditional budget spreadsheets?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#4E6760] font-sans leading-relaxed pt-2">
                  Splitwise only tracks who owes what in a group—it doesn’t connect to your personal commitments, bills due, or daily living limits. Budget spreadsheets take hours to maintain and break easily. Kubear connects both worlds: you split shared flat expenses effortlessly, while keeping personal savings and daily spending limits in one clear, private picture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-[#E0D7C5] pb-3">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-[#123630] hover:text-[#FF5C2B] transition-colors py-2">
                  What happens if I forget to log an expense for a few days?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#4E6760] font-sans leading-relaxed pt-2">
                  No guilt, no broken formulas. When you open Kubear, you can quickly catch up by logging a quick estimate or just continuing from today. Kubear automatically recalibrates your daily spending limit for the remaining days of the month so you always know where you stand.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-[#123630] hover:text-[#FF5C2B] transition-colors py-2">
                  Can I export or delete my data whenever I want?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#4E6760] font-sans leading-relaxed pt-2">
                  Yes, absolutely. You retain 100% ownership of your data. You can export your full transaction ledger as a clean CSV or permanently delete your account and all associated records with a single click in your account settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: FINAL INVITATION & ONE-CLICK START                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#123630] text-white text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5C2B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F4D277] px-3.5 py-1.5 rounded-full bg-white/10 inline-block">
            Start in 30 Seconds • Free to Use
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Start your daily money clarity.
          </h2>

          <p className="text-base sm:text-lg text-[#CBDCD6] max-w-xl mx-auto leading-relaxed">
            No credit card required. Start tracking on web in under 60 seconds.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAuth("auth")}
              className="w-full sm:w-auto min-h-[52px] px-8 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B1D] text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_4px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Open Kubear on Web</span>
              <ArrowRight className="size-4.5" />
            </button>

            <a
              href={PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-7 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 flex items-center justify-center gap-2 transition-all"
            >
              <Play className="size-4 fill-current text-[#F4D277]" />
              <span>Get on Google Play</span>
            </a>
          </div>

          <p className="pt-2 text-xs font-mono text-[#9ABDB4]">
            Works in any mobile or desktop browser. No app store download required.
          </p>
        </div>
      </section>

      {/* First-Fact Authentication & Onboarding Modal Funnel */}
      <FirstFactAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={modalMode}
      />
    </SiteLayout>
  );
}
