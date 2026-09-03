/* Kubear Homepage: Storyteller Narrative Flow (Part 1: The Problem -> The Turning Point -> Part 2: The Transformation) */
import React, { useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Coffee,
  Coins,
  CreditCard,
  Eye,
  FileSpreadsheet,
  Flame,
  Heart,
  Home as HomeIcon,
  IndianRupee,
  Landmark,
  Layers,
  Lock,
  LockKeyhole,
  MessageSquare,
  MinusCircle,
  Palmtree,
  Play,
  Plus,
  PlusCircle,
  Receipt,
  RotateCcw,
  Send,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  TrendingDown,
  TrendingUp,
  Users,
  Utensils,
  Wallet,
  XCircle,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { APP_URL, PLAY_URL } from "@/components/MovingMoneyWorld";
import { HumanMoneyScene } from "@/components/TactileMoneyInstruments";

const faq = [
  [
    "Do I need to give bank login, SMS permissions, or OTPs?",
    "Never. Kubear does not use SMS sync, bank scraping, or Account Aggregator. You log expenses naturally via quick chat ('₹40 auto', '₹150 lunch') or by snapping bill photos. Zero bank logins, zero telemarketing spam, zero data selling.",
  ],
  [
    "How does the chat and receipt upload work?",
    "Just type in natural Hinglish or English like 'Paid ₹250 for Swiggy dinner' or snap a photo of your cafe receipt. Kubear automatically extracts the amount, tags the category, and recalculates your daily safe runway in 2 seconds.",
  ],
  [
    "Can I split expenses with flatmates or family without them seeing my personal spends?",
    "Yes! That is the core of Kubear's Two Tables system. You manage shared costs (like Cook Aunty, WiFi, Blinkit groceries) on a shared table with 50/50 balance tracking, while keeping personal expenses (like dates, shopping, investments) 100% private.",
  ],
  [
    "Can Kubear move my money or initiate UPI payments?",
    "No. Kubear is strictly a manual recording, allocation, and runway companion. It never connects to your bank account, holds zero funds, and cannot initiate payments or transfers.",
  ],
  [
    "Why not just use an SMS scraper app?",
    "SMS scraper apps sell your financial profile to loan and credit card aggregators. Plus, they break constantly: they confuse self-transfers between your own accounts as 'expenses' and miss every cash, split, and tapri expense.",
  ],
];

export default function Home() {
  // Salary Day Interactive Step
  const [salaryStep, setSalaryStep] = useState<"illusion" | "locked" | "runway">("illusion");

  // Micro-Leak Steppers
  const [chaiCount, setChaiCount] = useState(2); // ₹20/cup
  const [quickCommCount, setQuickCommCount] = useState(4); // ₹180/order
  const [swiggyCount, setSwiggyCount] = useState(3); // ₹380/meal
  const [autoCount, setAutoCount] = useState(3); // ₹160/ride

  // Chat Simulator State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; tag?: string; amount?: string; runway?: string }>>([
    { sender: "user", text: "Auto to Indiranagar metro ₹65" },
    { sender: "bot", text: "Logged ₹65 under Daily Commute", tag: "Transport", amount: "₹65", runway: "₹585 daily runway left" },
    { sender: "user", text: "Filter coffee + dosa ₹140" },
    { sender: "bot", text: "Logged ₹140 under Chai & Snacks", tag: "Food & Drinks", amount: "₹140", runway: "₹445 daily runway left" },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Two Tables toggle
  const [activeTable, setActiveTable] = useState<"shared" | "private">("shared");

  // Calculations
  const monthlyChai = chaiCount * 20 * 30;
  const monthlyQuickComm = quickCommCount * 180 * 4;
  const monthlySwiggy = swiggyCount * 380 * 4;
  const monthlyAuto = autoCount * 160 * 4;
  const totalLeaks = monthlyChai + monthlyQuickComm + monthlySwiggy + monthlyAuto;

  const handleSendChat = (textToSend: string) => {
    if (!textToSend.trim()) return;
    const userMsg = { sender: "user" as const, text: textToSend };
    let botReply = {
      sender: "bot" as const,
      text: `Logged ${textToSend}`,
      tag: "General Spend",
      amount: "₹",
      runway: "Safe runway updated",
    };

    const lower = textToSend.toLowerCase();
    if (lower.includes("swiggy") || lower.includes("zomato") || lower.includes("biryani") || lower.includes("dinner") || lower.includes("pizza")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹340 under Food Delivery",
        tag: "Dining Out",
        amount: "₹340",
        runway: "₹320 daily runway left",
      };
    } else if (lower.includes("zepto") || lower.includes("blinkit") || lower.includes("instamart") || lower.includes("milk") || lower.includes("bread")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹160 under Quick Groceries",
        tag: "Household",
        amount: "₹160",
        runway: "Grocery buffer on track",
      };
    } else if (lower.includes("auto") || lower.includes("uber") || lower.includes("ola") || lower.includes("rapido") || lower.includes("cab")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹85 under Commute",
        tag: "Transport",
        amount: "₹85",
        runway: "Weekly travel budget safe",
      };
    } else if (lower.includes("cook") || lower.includes("wifi") || lower.includes("maid") || lower.includes("rent") || lower.includes("electricity")) {
      botReply = {
        sender: "bot",
        text: "Logged to Shared House Table • Split 50/50 with Flatmates",
        tag: "Shared House",
        amount: "₹1,500",
        runway: "Personal balance 100% isolated",
      };
    } else if (lower.includes("bill") || lower.includes("receipt") || lower.includes("snap") || lower.includes("cafe")) {
      botReply = {
        sender: "bot",
        text: "OCR Scanned: ₹240 Cappuccino + ₹180 Butter Croissant = ₹420",
        tag: "Cafe / Dining",
        amount: "₹420",
        runway: "Runway safely adjusted (-₹420)",
      };
    }

    setChatMessages((prev) => [...prev, userMsg, botReply]);
    setChatInput("");
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear by Kuberos | Real Money Clarity for India. Zero Bank Scraping."
        description="Kubear by Kuberos Innovations helps you log daily chai, split flatmate bills, lock salary allocations, and track Goa sinking funds via chat and photo upload. 100% private and read-only."
        path="/"
      />

      {/* HERO SECTION - KEPT INTACT */}
      <section className="mm-hero instrument-hero money-week-hero">
        <div className="instrument-hero-grid" aria-hidden="true" />
        <div className="mm-hero-content">
          <div className="hero-ledger-rail" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <p className="mm-eyebrow">
            <span />
            Made for Indian Money Reality
          </p>
          <h1>
            UPI is fast.
            <br />
            <em>Your money clarity should be faster.</em>
          </h1>
          <p className="mm-hero-lede">
            From ₹20 cutting chai to ₹25,000 house rent. Type it in chat or snap the bill. Zero bank logins, zero OTP snooping.
          </p>

          <div className="mm-actions">
            <a className="mm-button mm-button-orange desktop-primary" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
            <a className="mm-button mm-button-ghost desktop-secondary" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get on Google Play <Play className="size-3.5 fill-current" />
            </a>
            <a className="mm-button mm-button-orange mobile-primary" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get on Google Play <Play className="size-3.5 fill-current" />
            </a>
            <a className="mm-button mm-button-ghost mobile-secondary" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
          </div>

          <p className="mm-trust">
            <ShieldCheck className="size-4 text-[#4ADE80]" />
            Zero bank logins. Zero SMS scraping. Zero telemarketing spam.
          </p>
        </div>

        <HumanMoneyScene kind="morning" className="hero-human-scene" />

        <a className="scroll-prompt" href="#story-start">
          See the money story <ArrowDownRight className="size-4" />
        </a>
      </section>

      {/* 4-CARD REALITY METRICS STRIP (MATCHING EXACT USER DESIGN) */}
      <section
        id="story-start"
        className="border-y border-[#E8DEC8] py-6 sm:py-8 bg-[#F7F3EB] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4">
            {/* Card 1: 6.8 Apps */}
            <div className="bg-white rounded-[20px] border border-[#E6DDD0] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5 shadow-xs transition-transform hover:-translate-y-0.5 min-w-0">
              <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#CD4623] leading-none mb-1.5 sm:mb-2 font-sans whitespace-nowrap">
                6.8 Apps
              </div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#4F6761] font-normal leading-tight sm:leading-normal">
                Average finance tools on an Indian phone
              </p>
            </div>

            {/* Card 2: ₹40–₹250 */}
            <div className="bg-white rounded-[20px] border border-[#E6DDD0] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5 shadow-xs transition-transform hover:-translate-y-0.5 min-w-0">
              <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#CD4623] leading-none mb-1.5 sm:mb-2 font-sans whitespace-nowrap">
                ₹40–₹250
              </div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#4F6761] font-normal leading-tight sm:leading-normal">
                Invisible average UPI micro-leak size
              </p>
            </div>

            {/* Card 3: 82% */}
            <div className="bg-white rounded-[20px] border border-[#E6DDD0] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5 shadow-xs transition-transform hover:-translate-y-0.5 min-w-0">
              <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#113730] leading-none mb-1.5 sm:mb-2 font-sans whitespace-nowrap">
                82%
              </div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#4F6761] font-normal leading-tight sm:leading-normal">
                Spreadsheets abandoned within 7 days
              </p>
            </div>

            {/* Card 4: 5 Sec/Day */}
            <div className="bg-white rounded-[20px] border border-[#E6DDD0] px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5 shadow-xs transition-transform hover:-translate-y-0.5 min-w-0">
              <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#005E4C] leading-none mb-1.5 sm:mb-2 font-sans whitespace-nowrap">
                5 Sec/Day
              </div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-[#4F6761] font-normal leading-tight sm:leading-normal">
                Time needed for complete Kubear clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PART 1: LIFE BEFORE KUBEAR (THE 4 PROBLEMS)                               */}
      {/* ========================================================================= */}

      {/* SECTION HEADER FOR PART 1 */}
      <div className="bg-[#FFF4EC] border-b border-[#EED7C7] py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#DC2626] font-mono text-xs font-bold uppercase tracking-wider">
              Part 1 • The Struggle
            </span>
            <span className="text-sm font-serif italic text-[#665044] hidden sm:inline">
              Why personal finance in India feels like an unending headache
            </span>
          </div>
          <span className="text-xs font-mono text-[#8C6D5D]">4 Invisible Roadblocks</span>
        </div>
      </div>

      {/* PROBLEM 1: THE 8-APP KHICHDI */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#E8DEC8] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-mono font-bold text-[#D0451B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Smartphone className="size-3.5" /> Problem 01 • The Scattered Brain
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#123630] tracking-tight leading-tight">
                You don't have a money problem.
                <br />
                <span className="text-[#FF5C2B] italic font-serif">You have an 8-App Khichdi.</span>
              </h2>
            </div>
            <p className="text-[#526D66] max-w-md text-sm md:text-base leading-relaxed">
              Your salary lands in HDFC. Chai on GPay, credit cards on CRED, flatmates on Splitwise, SIPs on Groww, and cash to the maid. <em>Where is the single source of truth?</em>
            </p>
          </div>

          {/* Scattered App Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* HDFC Salary */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#1E3A8A]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#1E3A8A]/10 text-[#1E3A8A] font-mono text-[11px] font-bold">HDFC Salary A/c</span>
                <Landmark className="size-4 text-[#1E3A8A]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">₹75,000</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">Salary lands here. Rent auto-debited. Looks full on Day 1, empty by Day 22.</p>
            </div>

            {/* SBI Minimum Balance */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#0284C7]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0284C7]/10 text-[#0284C7] font-mono text-[11px] font-bold">SBI College A/c</span>
                <Coins className="size-4 text-[#0284C7]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">₹3,450</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">Emergency buffer kept untouched to avoid ₹50 minimum balance penalty.</p>
            </div>

            {/* GPay & PhonePe */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#059669]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#059669]/10 text-[#059669] font-mono text-[11px] font-bold">GPay & PhonePe</span>
                <Zap className="size-4 text-[#059669]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">42 Taps / Week</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">Chai, coconuts, auto rides, panipuri. Zero friction, zero mental tracking.</p>
            </div>

            {/* Credit Cards & CRED */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#DC2626]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#DC2626]/10 text-[#DC2626] font-mono text-[11px] font-bold">CRED & 2 Cards</span>
                <CreditCard className="size-4 text-[#DC2626]" />
              </div>
              <div className="text-2xl font-bold text-[#DC2626] font-mono mb-1">₹24,800 Due</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">Swiped for flights and dinners on Day 15. Due next month. False safety net.</p>
            </div>

            {/* Groww / Zerodha */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#7C3AED]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#7C3AED]/10 text-[#7C3AED] font-mono text-[11px] font-bold">Groww SIPs</span>
                <TrendingUp className="size-4 text-[#7C3AED]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">₹12,000 / mo</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">Nifty 50 + Midcap funds. Auto-debited on the 5th, leaving bank balance lower.</p>
            </div>

            {/* Flatmate Splits */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#EA580C]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#EA580C]/10 text-[#EA580C] font-mono text-[11px] font-bold">Flatmate Splits</span>
                <Users className="size-4 text-[#EA580C]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">₹4,200 Owed</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">WiFi bill, cook salary, Zepto oil cans. Who owes whom? Nobody settled yet.</p>
            </div>

            {/* Physical Cash */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#D97706]/20 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#D97706]/10 text-[#D97706] font-mono text-[11px] font-bold">Pocket Cash</span>
                <Wallet className="size-4 text-[#D97706]" />
              </div>
              <div className="text-2xl font-bold text-[#123630] font-mono mb-1">₹1,100</div>
              <p className="text-xs text-[#6B8079] leading-relaxed">ATM withdrawal on Sunday. Spent on iron press, tender coconut, parking. Vanished.</p>
            </div>

            {/* The Result Card */}
            <div className="bg-[#123630] text-white p-5 rounded-2xl border-2 border-[#123630] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[#F59E0B] font-mono text-xs font-bold mb-2">
                  <AlertTriangle className="size-3.5" /> The Core Anxiety
                </div>
                <div className="text-lg font-bold font-serif mb-1 leading-snug">"Can I afford dinner with friends tonight?"</div>
                <p className="text-xs text-[#B8CCC6] leading-relaxed">
                  You check 3 banking apps and 2 credit cards. None gives you a direct, guilt-free answer.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/15 text-[11px] font-mono text-[#F4D277]">
                Result: Daily low-grade financial stress.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 2: SALARY DAY DOPAMINE ILLUSION */}
      <section className="py-12 md:py-20 bg-[#FAF7F0] border-b border-[#E8DEC8] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="md:col-span-5">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-[#D0451B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <IndianRupee className="size-3.5" /> Problem 02 • The Day 1 Mirage
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
                SMS: ₹75,000 Credited.
                <br />
                <span className="text-[#FF5C2B] italic font-serif">Reality: ₹650 / day.</span>
              </h2>
              <p className="text-[#526D66] text-xs sm:text-sm leading-relaxed mb-5">
                On the 1st of the month, you feel rich. You order sushi, book a hotel, and buy sneakers. But <strong>65% of that balance belongs to someone else</strong> already.
              </p>

              {/* Interactive Step Switcher */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSalaryStep("illusion")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    salaryStep === "illusion"
                      ? "bg-white border-[#123630] shadow-xs ring-2 ring-[#123630]/10"
                      : "bg-white/60 border-[#E2DCBD] hover:bg-white"
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold font-mono text-[#123630]">1. The Dopamine Mirage</div>
                  <div className="text-[11px] sm:text-xs text-[#6B8079] mt-0.5">Seeing ₹75,000 in your account and feeling invincible.</div>
                </button>

                <button
                  onClick={() => setSalaryStep("locked")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    salaryStep === "locked"
                      ? "bg-white border-[#FF5C2B] shadow-xs ring-2 ring-[#FF5C2B]/15"
                      : "bg-white/60 border-[#E2DCBD] hover:bg-white"
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold font-mono text-[#FF5C2B]">2. The Invisible Lockbox (₹55,500 gone)</div>
                  <div className="text-[11px] sm:text-xs text-[#6B8079] mt-0.5">Rent, SIPs, Parents, EMI, WiFi. Not your spending money.</div>
                </button>

                <button
                  onClick={() => setSalaryStep("runway")}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    salaryStep === "runway"
                      ? "bg-[#123630] text-white border-[#123630] shadow-sm"
                      : "bg-white/60 border-[#E2DCBD] hover:bg-white"
                  }`}
                >
                  <div className={`text-[11px] sm:text-xs font-bold font-mono ${salaryStep === "runway" ? "text-[#F4D277]" : "text-[#123630]"}`}>
                    3. The True Safe Runway (₹650/day)
                  </div>
                  <div className={`text-[11px] sm:text-xs mt-0.5 ${salaryStep === "runway" ? "text-[#CBDCD6]" : "text-[#6B8079]"}`}>
                    Your true guilt-free spending budget for the next 30 days.
                  </div>
                </button>
              </div>
            </div>

            {/* Visual Salary Allocation Box */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#123630]/15 p-4 sm:p-6 lg:p-7 shadow-lg relative overflow-hidden">
                {/* Fake Bank Notification Top */}
                <div className="bg-[#123630] text-white px-3.5 py-2.5 rounded-xl mb-4 sm:mb-5 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>HDFC Bank Alert</span>
                  </div>
                  <span className="text-[#9DB8AF]">01-Oct, 09:14 AM</span>
                </div>

                {salaryStep === "illusion" && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="text-center py-5 sm:py-6 bg-[#ECFDF5] rounded-xl sm:rounded-2xl border border-[#A7F3D0]">
                      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#059669] font-bold mb-1">Raw Bank Balance</div>
                      <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-[#065F46] tracking-tight">₹75,000.00</div>
                      <p className="text-[11px] sm:text-xs text-[#047857] mt-1.5">"I can totally afford that weekend trip right now!"</p>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[11px] sm:text-xs text-[#92400E] flex items-center gap-2">
                      <AlertCircle className="size-4 flex-shrink-0" />
                      <span>Warning: This balance does not account for ₹22,000 rent due in 4 days.</span>
                    </div>
                  </div>
                )}

                {salaryStep === "locked" && (
                  <div className="space-y-2.5 animate-in fade-in duration-300">
                    <div className="text-[10px] sm:text-xs font-mono text-[#80968F] uppercase font-bold">Locked Commitments on Day 1:</div>
                    
                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[11px] sm:text-xs font-mono">
                      <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#9F1239]">
                        <HomeIcon className="size-3.5" /> House Rent to Landlord
                      </span>
                      <span className="font-bold text-[#9F1239]">-₹22,000</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] text-[11px] sm:text-xs font-mono">
                      <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#5B21B6]">
                        <TrendingUp className="size-3.5" /> Mutual Fund SIPs (Groww)
                      </span>
                      <span className="font-bold text-[#5B21B6]">-₹10,000</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[11px] sm:text-xs font-mono">
                      <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#92400E]">
                        <Heart className="size-3.5" /> Parents' Monthly Support
                      </span>
                      <span className="font-bold text-[#92400E]">-₹8,000</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] sm:text-xs font-mono">
                      <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#166534]">
                        <Zap className="size-3.5" /> Electricity, WiFi & Subscriptions
                      </span>
                      <span className="font-bold text-[#166534]">-₹3,500</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] sm:text-xs font-mono">
                      <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#1E40AF]">
                        <CreditCard className="size-3.5" /> Last Month's Credit Card Bill
                      </span>
                      <span className="font-bold text-[#1E40AF]">-₹12,000</span>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-[#123630] text-white rounded-xl flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold">
                      <span>Total Committed Upfront:</span>
                      <span className="text-[#FF5C2B]">₹55,500 (74%)</span>
                    </div>
                  </div>
                )}

                {salaryStep === "runway" && (
                  <div className="space-y-3.5 animate-in fade-in duration-300">
                    <div className="text-center py-5 sm:py-6 bg-[#123630] text-white rounded-xl sm:rounded-2xl border border-[#25574D]">
                      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#A5DDD0] font-bold mb-1">
                        True Guilt-Free Spending Runway
                      </div>
                      <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-[#F4D277] tracking-tight">₹650.00 <span className="text-xs sm:text-sm font-sans font-normal text-white/70">/ day</span></div>
                      <p className="text-[11px] sm:text-xs text-[#B8D4CD] mt-1.5">₹19,500 discretionary balance ÷ 30 remaining days</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-[11px] sm:text-xs font-mono">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534]">
                        <strong>Spend ≤ ₹650 today:</strong>
                        <div className="text-[10px] sm:text-[11px] text-[#22C55E] mt-0.5 font-sans">You stay 100% on track for month-end savings.</div>
                      </div>
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B]">
                        <strong>Spend ₹1,200 today:</strong>
                        <div className="text-[10px] sm:text-[11px] text-[#EF4444] mt-0.5 font-sans">Tomorrow's runway automatically drops to ₹631.</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 3: DEATH BY 1,000 UPI TAPS (INTERACTIVE CALCULATOR) */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#E8DEC8] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono font-bold text-[#D0451B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
              <Flame className="size-3.5" /> Problem 03 • The Invisible Micro-Drain
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
              UPI doesn't feel like real money.
              <br />
              <span className="text-[#FF5C2B] italic font-serif">Until Day 25.</span>
            </h2>
            <p className="text-[#5A6F68] text-sm md:text-base">
              You don't go broke buying luxury watches. You go broke through ₹20 cutting chais, ₹180 Zepto orders, and ₹380 Swiggy midnight snacks. Test your monthly leak:
            </p>
          </div>

          {/* Interactive Micro-Leak Simulator Card */}
          <div className="bg-white rounded-3xl border-2 border-[#FF5C2B]/20 p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Sliders / Steppers */}
              <div className="space-y-6">
                {/* Chai & Panipuri */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-2 font-mono">
                    <span className="flex items-center gap-2">
                      <Coffee className="size-4 text-[#C96632]" /> Cutting Chai & Samosa (₹20/cup)
                    </span>
                    <span className="text-[#FF5C2B]">{chaiCount} / day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setChaiCount(Math.max(0, chaiCount - 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Decrease chai count"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="6"
                      value={chaiCount}
                      onChange={(e) => setChaiCount(parseInt(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                    <button
                      onClick={() => setChaiCount(Math.min(6, chaiCount + 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Increase chai count"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right text-[11px] font-mono text-[#829690] mt-1">₹{monthlyChai} / month</div>
                </div>

                {/* Zepto / Blinkit */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-2 font-mono">
                    <span className="flex items-center gap-2">
                      <Zap className="size-4 text-[#F59E0B]" /> Zepto / Blinkit Orders (₹180/order)
                    </span>
                    <span className="text-[#FF5C2B]">{quickCommCount} / week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuickCommCount(Math.max(0, quickCommCount - 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Decrease quick commerce orders"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={quickCommCount}
                      onChange={(e) => setQuickCommCount(parseInt(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                    <button
                      onClick={() => setQuickCommCount(Math.min(10, quickCommCount + 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Increase quick commerce orders"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right text-[11px] font-mono text-[#829690] mt-1">₹{monthlyQuickComm} / month</div>
                </div>

                {/* Swiggy / Zomato */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-2 font-mono">
                    <span className="flex items-center gap-2">
                      <Utensils className="size-4 text-[#EF4444]" /> Swiggy / Zomato Feasts (₹380/meal)
                    </span>
                    <span className="text-[#FF5C2B]">{swiggyCount} / week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSwiggyCount(Math.max(0, swiggyCount - 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Decrease Swiggy orders"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      value={swiggyCount}
                      onChange={(e) => setSwiggyCount(parseInt(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                    <button
                      onClick={() => setSwiggyCount(Math.min(8, swiggyCount + 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Increase Swiggy orders"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right text-[11px] font-mono text-[#829690] mt-1">₹{monthlySwiggy} / month</div>
                </div>

                {/* Auto / Cab */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#123630] mb-2 font-mono">
                    <span className="flex items-center gap-2">
                      <Smartphone className="size-4 text-[#10B981]" /> Auto / Rapido / Uber Surges (₹160/ride)
                    </span>
                    <span className="text-[#FF5C2B]">{autoCount} / week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAutoCount(Math.max(0, autoCount - 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Decrease auto rides"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={autoCount}
                      onChange={(e) => setAutoCount(parseInt(e.target.value))}
                      className="w-full accent-[#FF5C2B] cursor-pointer"
                    />
                    <button
                      onClick={() => setAutoCount(Math.min(10, autoCount + 1))}
                      className="size-10 sm:size-9 rounded-xl bg-[#F5EFE6] border border-[#DDD3C5] font-bold text-base sm:text-sm hover:bg-[#EAE1D2] flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-[36px] transition-colors"
                      aria-label="Increase auto rides"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right text-[11px] font-mono text-[#829690] mt-1">₹{monthlyAuto} / month</div>
                </div>
              </div>

              {/* Live Leak Output Box */}
              <div className="bg-[#123630] text-white p-6 md:p-8 rounded-2xl border border-[#235348] text-center flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FF5C2B]/20 text-[#FF8E6B] font-mono text-[11px] font-bold uppercase mb-3">
                    Your Invisible Monthly Leak
                  </div>
                  <div className="text-4xl md:text-5xl font-bold font-serif text-[#F4D277] mb-2">
                    ₹{totalLeaks.toLocaleString("en-IN")} <span className="text-xs sm:text-sm font-sans font-normal text-[#B4CCC5]">/ month</span>
                  </div>
                  <div className="my-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD480] text-xs font-mono font-bold">
                    <span>⚡ That is ₹{(totalLeaks * 12).toLocaleString("en-IN")} / year</span>
                  </div>
                  <p className="text-xs text-[#B4CCC5] leading-relaxed">
                    Equivalent to an entire international vacation or 1.5 months of your Bangalore/Mumbai rent vanishing in untracked ₹20 and ₹180 micro-taps.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-[#C5DBD4]">
                    <span>Chai & Snacks:</span>
                    <span className="text-white font-bold">₹{monthlyChai}</span>
                  </div>
                  <div className="flex justify-between text-[#C5DBD4]">
                    <span>10-min Groceries:</span>
                    <span className="text-white font-bold">₹{monthlyQuickComm}</span>
                  </div>
                  <div className="flex justify-between text-[#C5DBD4]">
                    <span>Late-night Dining:</span>
                    <span className="text-white font-bold">₹{monthlySwiggy}</span>
                  </div>
                  <div className="flex justify-between text-[#C5DBD4]">
                    <span>Auto & Cabs:</span>
                    <span className="text-white font-bold">₹{monthlyAuto}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 4: WHY SPREADSHEETS & SMS APPS DIED */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#E8DEC8] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono font-bold text-[#D0451B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
              <FileSpreadsheet className="size-3.5" /> Problem 04 • The Failed Past
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
              Why you gave up on every
              <br />
              <span className="text-[#FF5C2B] italic font-serif">budget app before.</span>
            </h2>
            <p className="text-[#526D66] text-sm md:text-base">
              It is not your fault. The existing tools were never built for the reality of high-velocity Indian UPI life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. The Excel Sheet */}
            <div className="bg-white p-6 rounded-3xl border border-[#DDD3C2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-[#EF4444]/10 text-[#DC2626] flex items-center justify-center mb-4">
                  <FileSpreadsheet className="size-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#123630] mb-2">1. The Google Sheet</h3>
                <div className="text-xs font-mono text-[#DC2626] font-bold mb-3">Died on Day 4 of the month</div>
                <p className="text-xs text-[#5C736C] leading-relaxed">
                  You created 14 color-coded tabs on Jan 1st. But after a 10-hour workday, opening a spreadsheet on your phone to log a ₹40 tender coconut feels like torture.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0EAE0] text-[11px] font-mono text-[#991B1B]">
                Verdict: Too much homework.
              </div>
            </div>

            {/* 2. SMS Scrapers */}
            <div className="bg-white p-6 rounded-3xl border border-[#DDD3C2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-[#F59E0B]/10 text-[#D97706] flex items-center justify-center mb-4">
                  <ShieldAlert className="size-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#123630] mb-2">2. SMS Scrapers</h3>
                <div className="text-xs font-mono text-[#D97706] font-bold mb-3">Spam calls & broken data</div>
                <p className="text-xs text-[#5C736C] leading-relaxed">
                  They demand full SMS access, sell your financial profile to loan brokers, and confuse an ATM transfer to your own account as an "Expense". Plus they miss all cash.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0EAE0] text-[11px] font-mono text-[#B45309]">
                Verdict: Privacy risk & inaccurate.
              </div>
            </div>

            {/* 3. 10-Field Form Apps */}
            <div className="bg-white p-6 rounded-3xl border border-[#DDD3C2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-[#3B82F6]/10 text-[#2563EB] flex items-center justify-center mb-4">
                  <Layers className="size-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#123630] mb-2">3. 10-Field Form Apps</h3>
                <div className="text-xs font-mono text-[#2563EB] font-bold mb-3">Impossible at an auto stand</div>
                <p className="text-xs text-[#5C736C] leading-relaxed">
                  Who is going to open an app, select "Category &gt; Transportation &gt; Auto &gt; Account &gt; Payment Mode &gt; Note" while crossing a busy street in Koramangala?
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F0EAE0] text-[11px] font-mono text-[#1D4ED8]">
                Verdict: Too much friction.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ⚡ THE PIVOT: INTRODUCING KUBEAR (THE THRESHOLD - LIGHT THEME)             */}
      {/* ========================================================================= */}
      <section
        className="py-16 md:py-24 border-y border-[#E8DEC8] bg-gradient-to-b from-[#FFFDF8] via-[#FAF6EE] to-[#FFFDF8] relative overflow-hidden text-center"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5C2B]/10 border border-[#FF5C2B]/20 text-[#CD4623] font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="size-3.5 text-[#CD4623]" /> The Turning Point
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-tight text-[#123630] mb-5">
            What if money clarity took
            <br />
            <span className="text-[#CD4623] italic font-serif">just 5 seconds a day?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#526D66] font-sans max-w-2xl mx-auto leading-relaxed mb-8">
            No bank logins. No Excel homework. No loan telemarketing spam.
            <br className="hidden sm:inline" />
            Just you, quick natural text, and your true daily safe runway.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a className="mm-button mm-button-orange text-base px-8 py-3.5 w-full sm:w-auto shadow-sm" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4 ml-1" />
            </a>
            <a
              className="mm-button bg-[#123630] text-white hover:bg-[#0A2621] border border-[#123630] text-base px-8 py-3.5 w-full sm:w-auto shadow-sm"
              href={PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get it on Google Play <Play className="size-3.5 fill-current ml-1" />
            </a>
          </div>

          {/* 3 Metric Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E6DDD0] p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#CD4623] mb-1">0</div>
              <div className="text-xs text-[#526D66] font-mono font-medium">Bank Permissions</div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E6DDD0] p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#123630] mb-1">2 Sec</div>
              <div className="text-xs text-[#526D66] font-mono font-medium">Expense Log Time</div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E6DDD0] p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#005E4C] mb-1">100%</div>
              <div className="text-xs text-[#526D66] font-mono font-medium">Privacy & Peace</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PART 2: LIFE WITH KUBEAR (THE 3-STEP TRANSFORMATION)                     */}
      {/* ========================================================================= */}

      {/* SECTION HEADER FOR PART 2 */}
      <div className="bg-[#E6F7F2] border-b border-[#C7EDE2] py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#047857] font-mono text-xs font-bold uppercase tracking-wider">
              Part 2 • The Transformation
            </span>
            <span className="text-sm font-serif italic text-[#123630] hidden sm:inline">
              How Kubear guides your days with calm, effortless clarity
            </span>
          </div>
          <span className="text-xs font-mono text-[#00604A]">3 Daily Systems</span>
        </div>
      </div>

      {/* SOLUTION 1: THE 5-SECOND CHAT & RECEIPT OCR */}
      <section className="py-12 md:py-20 bg-[#F4FAF7] border-b border-[#D6EBE2] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="md:col-span-5">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-[#047857] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MessageSquare className="size-3.5" /> Transformation 01 • The 5-Second Input
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
                Just text it like you text a friend.
                <br />
                <span className="text-[#FF5C2B] italic font-serif">5 seconds. Done.</span>
              </h2>
              <p className="text-[#4E6760] text-xs sm:text-sm leading-relaxed mb-5">
                Type in Hinglish or English: <em>"Paid ₹340 Swiggy biryani"</em> or snap a photo of your restaurant bill. Kubear tags the category and updates your daily runway instantly.
              </p>

              {/* Quick Prompt Tap Chips */}
              <div className="space-y-1.5 mb-5">
                <div className="text-[11px] sm:text-xs font-mono uppercase font-bold text-[#6D8A82]">Tap to test live prompts:</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "+ Swiggy biryani ₹340",
                    "+ Zepto milk & eggs ₹160",
                    "+ Auto to office ₹85",
                    "+ WiFi bill ₹1,200 (Split)",
                    "📷 Snap cafe bill (₹420)",
                  ].map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendChat(sample.replace("+ ", ""))}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white border border-[#9DD4C4] text-[#123630] text-[11px] sm:text-xs font-bold hover:bg-[#123630] hover:text-white transition-all cursor-pointer shadow-xs"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#BCE5D9] text-[11px] sm:text-xs text-[#2D5A4F] flex items-center gap-2.5 sm:gap-3 mb-5">
                <Camera className="size-4 sm:size-5 text-[#FF5C2B] flex-shrink-0" />
                <span>
                  <strong>Bill Photo Scanner:</strong> Snap paper cafe receipts, hospital bills, or petrol slips. Kubear OCR extracts the exact amount in 2 seconds.
                </span>
              </div>

              <div>
                <a className="mm-button mm-button-orange text-xs py-2 px-4 inline-flex items-center gap-1.5" href={APP_URL}>
                  Test Natural Chat in App <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Chat Widget */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#123630]/20 shadow-lg overflow-hidden flex flex-col h-[400px] sm:h-[440px]">
                {/* Chat Top Bar */}
                <div className="bg-[#123630] text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#FF5C2B] text-white flex items-center justify-center font-bold text-sm">
                      K
                    </div>
                    <div>
                      <div className="font-bold text-sm">Kubear Natural Money Companion</div>
                      <div className="text-[11px] text-[#A6D1C6] font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Online • 0 Bank Permissions
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setChatMessages([
                        { sender: "user", text: "Auto to Indiranagar metro ₹65" },
                        { sender: "bot", text: "Logged ₹65 under Daily Commute", tag: "Transport", amount: "₹65", runway: "₹585 daily runway left" },
                      ])
                    }
                    className="text-[#96C0B5] hover:text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="size-3" /> Reset
                  </button>
                </div>

                {/* Chat Message Scroll */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F7FBF9]">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs md:text-sm ${
                          msg.sender === "user"
                            ? "bg-[#123630] text-white rounded-br-none"
                            : "bg-white border border-[#D5EAE2] text-[#123630] rounded-bl-none shadow-xs"
                        }`}
                      >
                        <div>{msg.text}</div>
                        {msg.tag && (
                          <div className="mt-2 pt-2 border-t border-[#E6F3EE] flex items-center justify-between gap-2 text-[11px] font-mono text-[#059669]">
                            <span className="px-2 py-0.5 rounded bg-[#DCFCE7] font-bold">{msg.tag}</span>
                            <span>{msg.runway}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChat(chatInput);
                  }}
                  className="p-3 bg-white border-t border-[#E3EFEA] flex items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={() => handleSendChat("📷 Snap cafe bill (₹420)")}
                    title="Scan Receipt OCR"
                    aria-label="Snap receipt with camera"
                    className="p-2.5 rounded-xl bg-[#F0FDF9] border border-[#C6EBE0] text-[#123630] hover:bg-[#E3F8F2] cursor-pointer flex items-center justify-center transition-colors shrink-0"
                  >
                    <Camera className="size-4 text-[#FF5C2B]" />
                  </button>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="e.g. Paid ₹40 for ginger chai or tap camera"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#F0FDF9] border border-[#C6EBE0] text-xs md:text-sm text-[#123630] focus:outline-none focus:ring-2 focus:ring-[#123630]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#123630] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#1A4B43] cursor-pointer shrink-0"
                  >
                    <Send className="size-3.5" /> Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION 2: TWO TABLES ARCHITECTURE */}
      <section className="py-16 md:py-24 bg-[#F4FAF7] border-b border-[#D6EBE2] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono font-bold text-[#047857] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
              <Users className="size-3.5" /> Transformation 02 • Flatmate Sanity
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
              Two Tables.
              <br />
              <span className="text-[#FF5C2B] italic font-serif">Shared Apartment + Private Life.</span>
            </h2>
            <p className="text-[#566E67] text-sm md:text-base">
              Manage shared flat costs with 50/50 balance tracking while keeping personal spending, gifts, and investments 100% private.
            </p>
          </div>

          {/* Table Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE9DC] border border-[#DDD3C2]">
              <button
                onClick={() => setActiveTable("shared")}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono transition-all cursor-pointer ${
                  activeTable === "shared"
                    ? "bg-[#123630] text-white shadow-md"
                    : "text-[#556E67] hover:text-[#123630]"
                }`}
              >
                🏠 Shared House Table (Flatmates)
              </button>
              <button
                onClick={() => setActiveTable("private")}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono transition-all cursor-pointer ${
                  activeTable === "private"
                    ? "bg-[#123630] text-white shadow-md"
                    : "text-[#556E67] hover:text-[#123630]"
                }`}
              >
                🔒 Private Personal Ledger (Only You)
              </button>
            </div>
          </div>

          {/* Table Content Views */}
          <div className="bg-white rounded-3xl border-2 border-[#123630]/15 p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
            {activeTable === "shared" ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#EDE4D5]">
                  <div>
                    <div className="font-bold text-lg text-[#123630] font-serif">3BHK Indiranagar Flat Table</div>
                    <div className="text-xs text-[#6B8079]">3 Members: You, Rohit, Ananya</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-[#059669] font-bold">Rohit owes you: ₹1,450</div>
                    <div className="text-[11px] text-[#80968F]">All balances settled in 1-click</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F6F0]">
                    <span>Cook Aunty Monthly Salary</span>
                    <span className="font-bold">₹6,000 (Split 3 ways = ₹2,000 each)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F6F0]">
                    <span>ACT Broadband Fiber WiFi</span>
                    <span className="font-bold">₹1,180 (Split 3 ways = ₹393 each)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F6F0]">
                    <span>Zepto Kitchen Staples & Dishwash</span>
                    <span className="font-bold">₹840 (Paid by You)</span>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] sm:text-xs font-mono text-[#166534] flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="size-4 text-[#16A34A] shrink-0" />
                    Flatmate Isolation Active: Personal investments & secret trip savings are 100% invisible to Rohit & Ananya.
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] font-bold shrink-0">
                    Zero Contamination
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#065F46] flex items-center justify-between">
                  <span>✅ Shared costs settle in 1 tap without polluting your personal runway.</span>
                  <a className="font-bold underline" href={APP_URL}>
                    Open Shared Table →
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#EDE4D5]">
                  <div>
                    <div className="font-bold text-lg text-[#123630] font-serif">Your 100% Private Ledger</div>
                    <div className="text-xs text-[#6B8079]">Visible strictly to your eyes only. No flatmates, no partners, no external eyes.</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#123630] text-[#F4D277] font-mono text-xs font-bold">
                    🔒 Zero Access Partition
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[11px] sm:text-xs font-mono text-[#92400E] flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Lock className="size-4 text-[#D97706] shrink-0" />
                    Complete Privacy Partition: Neither housemates nor bank algorithms can ever view your personal ledger.
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] font-bold shrink-0">
                    Private Vault
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF8F0]">
                    <span>Weekend Dinner & Drinks (Indiranagar)</span>
                    <span className="font-bold text-[#D0451B]">₹2,400 (Private)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF8F0]">
                    <span>Groww Nifty Index Fund SIP</span>
                    <span className="font-bold text-[#7C3AED]">₹10,000 (Private Wealth)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#FFF8F0]">
                    <span>Secret Goa Birthday Trip Fund</span>
                    <span className="font-bold text-[#059669]">₹4,500 Saved</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] flex items-center justify-between">
                  <span>🛡️ 100% zero leak between personal spends and roommate balances.</span>
                  <a className="font-bold underline" href={APP_URL}>
                    View Private Ledger →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SOLUTION 3: DAY 30 SUKOON (THE MONTH-END VICTORY) */}
      <section className="py-16 md:py-24 bg-[#F4FAF7] border-b border-[#D6EBE2] relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono font-bold text-[#047857] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
              <Palmtree className="size-3.5" /> Transformation 03 • Month-End Victory
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#123630] tracking-tight leading-tight mb-3">
              Day 30: Sukoon.
              <br />
              <span className="text-[#059669] italic font-serif">No credit card panic.</span>
            </h2>
            <p className="text-[#526D66] text-sm md:text-base">
              The feeling when all bills are paid, your SIP is invested, and you still have surplus cash carryover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#FECDD3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase font-bold text-[#DC2626] mb-3 flex items-center gap-2">
                  <XCircle className="size-4" /> The Old Indian Month-End
                </div>
                <div className="text-2xl font-bold font-serif text-[#991B1B] mb-2">The Day 26 Panic</div>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  Checking your bank balance and wondering where ₹75,000 evaporated. Swiping credit card for dinner and promising yourself <em>"Next month I will definitely maintain Excel."</em>
                </p>
              </div>
              <div className="pt-4 border-t border-[#FEE2E2] text-xs font-mono text-[#B91C1C]">
                - ₹18,000 unexpected credit card bill
              </div>
            </div>

            {/* The Kubear Way */}
            <div className="bg-[#123630] text-white p-6 md:p-8 rounded-3xl border border-[#235348] shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase font-bold text-[#F4D277] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#10B981]" /> The Kubear Month-End
                </div>
                <div className="text-2xl font-bold font-serif text-[#F4D277] mb-2">Peace & Predictability</div>
                <p className="text-xs text-[#CBDCD6] leading-relaxed mb-4">
                  SIP compounded, rent cleared on time, flatmate debts settled with 1 tap, and a <strong>₹4,850 surplus</strong> rolling into next month's vacation fund.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#10B981] flex items-center justify-between">
                <span>+ ₹4,850 Guilt-Free Surplus</span>
                <span className="text-white/70">100% On Track</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#E8DEC8]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5C2B] mb-2">Zero Jargon Answers</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#123630]">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.map(([q, a], idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-white rounded-2xl border border-[#E6DDD0] px-6 py-2 shadow-xs"
              >
                <AccordionTrigger className="font-serif text-lg text-[#123630] text-left hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-[#556D67] text-sm leading-relaxed pt-2 pb-4">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CLOSING CTA BANNER */}
      <section className="py-20 md:py-28 bg-[#123630] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#F4D277] mb-3">
            Start Your First 5-Second Log Today
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            Stop guessing your money.
            <br />
            <span className="text-[#FF5C2B] italic">Start your daily clarity.</span>
          </h2>
          <p className="text-sm md:text-base text-[#CBDCD6] max-w-xl mx-auto mb-10 leading-relaxed">
            Free forever for personal ledger & daily runway tracking. Zero bank permissions, zero spam calls.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="mm-button mm-button-orange text-base px-8 py-3.5 w-full sm:w-auto" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4 ml-1" />
            </a>
            <a
              className="mm-button mm-button-ghost bg-white/10 text-white border-white/20 hover:bg-white/20 text-base px-8 py-3.5 w-full sm:w-auto"
              href={PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get on Google Play <Play className="size-3.5 fill-current ml-1" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-[#9ABDB4]">
            <ShieldCheck className="size-4 text-[#4ADE80]" />
            No credit card required. No bank OTPs. 100% private.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
