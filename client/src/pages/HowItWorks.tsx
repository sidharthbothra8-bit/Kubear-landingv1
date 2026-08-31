/* How Kubear Works: An Immersive Scrolling Indian Money Story */
import React, { useState, useEffect, useRef } from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Coins,
  Compass,
  CreditCard,
  Eye,
  FileSpreadsheet,
  FileText,
  Flame,
  Frown,
  Gift,
  Heart,
  HeartHandshake,
  HelpCircle,
  Home as HomeIcon,
  IndianRupee,
  Landmark,
  Layers,
  Lock,
  LockKeyhole,
  MessageSquare,
  MinusCircle,
  Palmtree,
  PhoneCall,
  PieChart,
  Play,
  Plus,
  PlusCircle,
  Receipt,
  RotateCcw,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Smile,
  Sparkles,
  Split,
  TrendingDown,
  TrendingUp,
  User,
  Users,
  Utensils,
  Wallet,
  XCircle,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear";

export default function HowItWorks() {
  const [activeStoryStage, setActiveStoryStage] = useState(0);
  const [chaosCategory, setChaosCategory] = useState<"all" | "banks" | "upi" | "invest" | "shared" | "offline">("all");
  
  // Micro-leak simulator state
  const [chaiCount, setChaiCount] = useState(2); // ₹20 each
  const [quickCommerceCount, setQuickCommerceCount] = useState(4); // ₹180 each
  const [foodDeliveryCount, setFoodDeliveryCount] = useState(3); // ₹380 each
  const [cabCount, setCabCount] = useState(3); // ₹160 each

  // Chat simulator state
  const [chatLogs, setChatLogs] = useState<Array<{ sender: "user" | "bot"; text: string; tag?: string; amount?: string; runway?: string }>>([
    { sender: "user", text: "Paid ₹40 auto to Indiranagar metro" },
    { sender: "bot", text: "Logged ₹40 under Daily Commute", tag: "Transport", amount: "₹40", runway: "₹610 remaining today" },
    { sender: "user", text: "Filter coffee + bun maska ₹120 with Rahul" },
    { sender: "bot", text: "Logged ₹120 under Food & Chai", tag: "Food & Drinks", amount: "₹120", runway: "₹490 remaining today" },
  ]);
  const [chatInput, setChatInput] = useState("");

  const monthlyChai = chaiCount * 20 * 30;
  const monthlyQuickCommerce = quickCommerceCount * 180 * 4;
  const monthlyFoodDelivery = foodDeliveryCount * 380 * 4;
  const monthlyCab = cabCount * 160 * 4;
  const totalMicroLeaks = monthlyChai + monthlyQuickCommerce + monthlyFoodDelivery + monthlyCab;

  const handleSendChat = (msg: string) => {
    if (!msg.trim()) return;
    const userMsg = { sender: "user" as const, text: msg };
    let botReply = {
      sender: "bot" as const,
      text: `Logged ${msg}`,
      tag: "General",
      amount: "₹",
      runway: "Safe runway updated",
    };

    const lower = msg.toLowerCase();
    if (lower.includes("swiggy") || lower.includes("zomato") || lower.includes("dinner") || lower.includes("biryani") || lower.includes("lunch")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹340 under Food Delivery",
        tag: "Dining Out",
        amount: "₹340",
        runway: "₹310 remaining today",
      };
    } else if (lower.includes("zepto") || lower.includes("blinkit") || lower.includes("instamart") || lower.includes("milk") || lower.includes("grocery")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹160 under Household Groceries",
        tag: "Groceries",
        amount: "₹160",
        runway: "Pantry runway on track",
      };
    } else if (lower.includes("auto") || lower.includes("cab") || lower.includes("uber") || lower.includes("ola") || lower.includes("rapido")) {
      botReply = {
        sender: "bot",
        text: "Logged ₹85 under Commute",
        tag: "Transport",
        amount: "₹85",
        runway: "Weekly travel budget safe",
      };
    } else if (lower.includes("wifi") || lower.includes("electricity") || lower.includes("cook") || lower.includes("maid")) {
      botReply = {
        sender: "bot",
        text: "Logged to Shared House Table • Split 50/50 with flatmate",
        tag: "Shared House",
        amount: "₹1,200",
        runway: "Personal balance untouched",
      };
    }

    setChatLogs((prev) => [...prev, userMsg, botReply]);
    setChatInput("");
  };

  const storyNavItems = [
    { num: "01", title: "The Fragmentation Chaos", label: "Reality of Indian Money" },
    { num: "02", title: "The Salary Illusion", label: "Day 1 Dopamine" },
    { num: "03", title: "Death by 1,000 Taps", label: "UPI Micro-Leaks" },
    { num: "04", title: "Why Spreadsheets Fail", label: "The Exhausting Cycle" },
    { num: "05", title: "The Kubear Way", label: "5-Second Daily Calm" },
    { num: "06", title: "Two Tables Architecture", label: "Shared vs Private" },
    { num: "07", title: "Month-End Calm", label: "Debt-Free Victory" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SiteLayout>
      <PageMeta
        title="How Kubear Works | The Indian Money Story: From Chaos to Calm"
        description="A visual scrolling journey through the reality of Indian personal finance: fragmented apps, UPI micro-leakages, flatmate math, and how Kubear brings 5-second daily clarity."
        path="/how-it-works"
      />

      {/* Floating Story Progress Tracker for Desktop */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2.5 bg-[#FFFDF8]/90 backdrop-blur-md p-3 rounded-2xl border border-[#E5DFD4] shadow-lg">
        <span className="font-mono text-[10px] font-bold text-[#839791] uppercase tracking-wider px-2 pb-1 border-b border-[#E8E1D5]">
          Story Acts
        </span>
        {storyNavItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(`story-act-${idx + 1}`)}
            className={`flex items-center gap-2.5 text-left px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
              activeStoryStage === idx
                ? "bg-[#123630] text-[#FFFDF8] font-bold"
                : "text-[#5A6E69] hover:bg-[#FAF7F0] hover:text-[#123630]"
            }`}
          >
            <span className="font-mono text-[10px] opacity-75">{item.num}</span>
            <span className="truncate max-w-[140px]">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 pb-16 pt-24 text-[#123630] sm:px-8 sm:pt-28 lg:px-12 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-[1240px] relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FED7AA] bg-[#FFF5E6] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D44722]">
            <Sparkles className="size-3.5 text-[#D44722]" />
            An Illustrated Story of Indian Money
          </div>

          <div className="mt-6 max-w-4xl">
            <h1 className="font-serif text-3xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl text-[#123630]">
              You have 7 money apps, 40 UPI taps a week, and{" "}
              <em className="italic text-[#D44722] font-serif">still zero clue</em> where your salary went.
            </h1>
            <p className="mt-5 text-base sm:text-xl leading-relaxed text-[#5A6E69] max-w-2xl">
              This is the story of modern Indian personal finance: the fragmentation, the false salary day wealth, the micro-leaks, and how 5 seconds a day in Kubear brings permanent calm.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollToSection("story-act-1")}
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#123630] px-7 text-sm font-extrabold text-[#FFFDF8] shadow-md hover:bg-[#D44722] transition-all cursor-pointer"
              >
                Scroll the Story <ArrowDown className="size-4 animate-bounce" />
              </button>
              <a
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-[#D4CCC0] bg-[#FFFDF8] px-6 text-sm font-extrabold text-[#123630] hover:border-[#123630] hover:bg-[#F6F2EA] transition-all cursor-pointer shadow-xs"
                href={APP_URL}
              >
                Try App Directly <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-3 pt-8 border-t border-[#E8E1D5]">
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4]">
              <div className="font-mono text-2xl font-bold text-[#D44722]">6.8 Apps</div>
              <div className="text-xs text-[#5A6E69] mt-0.5 font-medium">Average finance tools on an Indian phone</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4]">
              <div className="font-mono text-2xl font-bold text-[#D44722]">₹40–₹250</div>
              <div className="text-xs text-[#5A6E69] mt-0.5 font-medium">Invisible average UPI micro-leak size</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4]">
              <div className="font-mono text-2xl font-bold text-[#123630]">82%</div>
              <div className="text-xs text-[#5A6E69] mt-0.5 font-medium">Spreadsheets abandoned within 7 days</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4]">
              <div className="font-mono text-2xl font-bold text-emerald-800">5 Sec/Day</div>
              <div className="text-xs text-[#5A6E69] mt-0.5 font-medium">Time needed for complete Kubear clarity</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 1: THE REALITY OF MODERN INDIAN FRAGMENTATION */}
      {/* ========================================================================= */}
      <section id="story-act-1" className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-red-900 mb-4">
            <AlertTriangle className="size-3.5 text-red-700" /> Act 1: The Fragmentation Nightmare
          </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3.5xl lg:text-4xl font-normal text-[#123630] leading-tight">
                Your money lives in 8 different silos. None of them talk to each other.
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5A6E69]">
                Meet <strong>Rohan</strong>, a 26-year-old software designer in Bengaluru. He earns well, but his financial life is scattered across a dizzying maze of apps, notifications, paper notes, and mental sticky pads.
              </p>

              {/* Filter Pills for the Matrix */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All 8 Silos" },
                  { id: "banks", label: "3 Bank Accounts" },
                  { id: "upi", label: "UPI & Payment Apps" },
                  { id: "invest", label: "SIPs & Gold" },
                  { id: "shared", label: "Flatmates & House" },
                  { id: "offline", label: "Cash & Street" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setChaosCategory(tab.id as any)}
                    className={`rounded-full px-3 py-1 text-xs font-mono font-bold transition-all cursor-pointer ${
                      chaosCategory === tab.id
                        ? "bg-[#D44722] text-white shadow-xs"
                        : "bg-[#FAF7F0] border border-[#E5DFD4] text-[#5A6E69] hover:text-[#123630]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF5E6] border border-[#FED7AA] p-4.5 text-xs text-[#123630] space-y-2">
                <div className="font-bold text-[#D44722] flex items-center gap-1.5 text-sm">
                  <ShieldAlert className="size-4" /> The Mental Tax of Fragmentation:
                </div>
                <p className="text-[#5A6E69] leading-relaxed">
                  Every time Rohan wants to know <em>&ldquo;Can I afford to go to this music concert this weekend?&rdquo;</em>, he has to mentally subtract rent due on HDFC, credit card bill on CRED, flatmate balance on Splitwise, and auto cash in his pocket. It is exhausting.
                </p>
              </div>
            </div>

            {/* Interactive Fragmentation Chaos Map */}
            <div className="rounded-3xl border-2 border-red-200 bg-[#FAF7F0] p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
                <div className="font-mono text-xs font-bold text-red-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="size-2 rounded-full bg-red-600 animate-ping" />
                  Rohan&apos;s Scattered Money Map
                </div>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-md">
                  No Single Source of Truth
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                {(chaosCategory === "all" || chaosCategory === "banks") && (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                      <div className="font-bold text-[#123630] flex items-center gap-1.5">
                        <Landmark className="size-3.5 text-blue-700" /> HDFC Bank
                      </div>
                      <div className="font-mono text-[11px] text-[#839791] mt-1">Salary &amp; Rent debit</div>
                      <div className="font-mono font-bold text-blue-900 mt-1">₹75,000.00</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                      <div className="font-bold text-[#123630] flex items-center gap-1.5">
                        <Landmark className="size-3.5 text-blue-700" /> SBI Account
                      </div>
                      <div className="font-mono text-[11px] text-[#839791] mt-1">Parents support &amp; Emergency</div>
                      <div className="font-mono font-bold text-blue-900 mt-1">₹14,200.00</div>
                    </div>
                  </>
                )}

                {(chaosCategory === "all" || chaosCategory === "upi") && (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                      <div className="font-bold text-[#123630] flex items-center gap-1.5">
                        <Smartphone className="size-3.5 text-purple-700" /> GPay / PhonePe
                      </div>
                      <div className="font-mono text-[11px] text-[#839791] mt-1">35+ micro-transactions/wk</div>
                      <div className="font-mono font-bold text-purple-900 mt-1">Chai, Auto, Blinkit</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                      <div className="font-bold text-[#123630] flex items-center gap-1.5">
                        <CreditCard className="size-3.5 text-red-700" /> 2 Credit Cards
                      </div>
                      <div className="font-mono text-[11px] text-[#839791] mt-1">Due on 12th &amp; 24th</div>
                      <div className="font-mono font-bold text-red-700 mt-1">-₹18,400 Due</div>
                    </div>
                  </>
                )}

                {(chaosCategory === "all" || chaosCategory === "invest") && (
                  <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                    <div className="font-bold text-[#123630] flex items-center gap-1.5">
                      <TrendingUp className="size-3.5 text-emerald-700" /> Groww / Zerodha
                    </div>
                    <div className="font-mono text-[11px] text-[#839791] mt-1">SIP auto-debit on 5th</div>
                    <div className="font-mono font-bold text-emerald-800 mt-1">₹8,000/mo</div>
                  </div>
                )}

                {(chaosCategory === "all" || chaosCategory === "shared") && (
                  <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs">
                    <div className="font-bold text-[#123630] flex items-center gap-1.5">
                      <Users className="size-3.5 text-amber-700" /> Splitwise / WhatsApp
                    </div>
                    <div className="font-mono text-[11px] text-[#839791] mt-1">Flatmate Cook + WiFi</div>
                    <div className="font-mono font-bold text-amber-800 mt-1">Amit owes ₹1,850</div>
                  </div>
                )}

                {(chaosCategory === "all" || chaosCategory === "offline") && (
                  <div className="p-3 rounded-xl bg-white border border-[#E5DFD4] shadow-xs col-span-2">
                    <div className="font-bold text-[#123630] flex items-center gap-1.5">
                      <Coins className="size-3.5 text-slate-700" /> Physical Cash &amp; Unrecorded Bills
                    </div>
                    <div className="font-mono text-[11px] text-[#839791] mt-1">
                      Auto driver cash, househelp festival bonus, paper medical receipt
                    </div>
                    <div className="font-mono font-bold text-slate-800 mt-1">~₹2,400 (Lost in memory)</div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-red-900 font-bold bg-red-50 p-2.5 rounded-xl">
                <span>Total mental tabs open:</span>
                <span className="font-mono text-red-700">8 Apps • Infinite Friction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 2: THE SALARY DAY ILLUSION (DAY 1) */}
      {/* ========================================================================= */}
      <section id="story-act-2" className="bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 mb-4">
            <Coins className="size-3.5 text-amber-700" /> Act 2: Day 1 of the Month
          </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3.5xl lg:text-4xl font-normal text-[#123630] leading-tight">
                The Salary Day Illusion: You feel rich, but 65% is already spoken for.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
                At 9:00 AM on the 1st, Rohan gets the SMS: <br />
                <span className="font-mono text-xs font-bold bg-white px-2 py-1 rounded border border-[#E5DFD4] text-[#123630] inline-block mt-2">
                  &ldquo;A/c credited with INR 75,000.00 on 01-AUG-26 by Salary. Avl Bal: INR 78,450.00&rdquo;
                </span>
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6E69]">
                A surge of dopamine hits. Rohan orders gourmet coffee for his team and browses Amazon for noise-cancelling headphones. But this raw bank balance is a trap.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4]">
                  <div className="size-6 grid place-items-center rounded-full bg-red-100 text-red-700 font-bold text-xs flex-none mt-0.5">
                    ✗
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#123630] block">What the Bank App Shows:</strong>
                    <span className="text-xs text-[#5A6E69]">₹78,450, looking like a giant pool of spending money.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
                  <div className="size-6 grid place-items-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex-none mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#065F46] block">The Hidden Truth Kubear Uncovers:</strong>
                    <span className="text-xs text-[#065F46]">
                      ₹55,500 is locked for Rent, SIPs, EMIs, and Parents. Rohan actually only has <strong>₹650/day</strong> for flexible life.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Reality Breakdown Card */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#839791]">
                    Day 1 Illusion vs Truth
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#123630]">
                    ₹78,450<span className="text-xs font-sans text-[#839791] font-normal"> In Account</span>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-[11px] font-mono font-bold">
                  Committed Reality
                </span>
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HomeIcon className="size-4 text-[#D44722]" />
                    <span className="font-medium text-[#123630]">House Rent + Maintenance</span>
                  </div>
                  <span className="font-mono font-bold text-[#D44722]">-₹20,000 (26%)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-4 text-emerald-700" />
                    <span className="font-medium text-[#123630]">SIP Investments (Mutual Funds)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-700">-₹8,000 (10%)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="size-4 text-blue-700" />
                    <span className="font-medium text-[#123630]">Parents Allowance Transfer</span>
                  </div>
                  <span className="font-mono font-bold text-blue-700">-₹5,000 (6%)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Utensils className="size-4 text-amber-700" />
                    <span className="font-medium text-[#123630]">Cook + Maid + WiFi Split</span>
                  </div>
                  <span className="font-mono font-bold text-amber-700">-₹3,500 (5%)</span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="size-4 text-red-700" />
                    <span className="font-medium text-[#123630]">Last Month Credit Card Bill</span>
                  </div>
                  <span className="font-mono font-bold text-red-700">-₹18,400 (24%)</span>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E1D5] bg-[#ECFDF5] p-3.5 rounded-xl text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#065F46] block text-sm">Actual Safe Daily Runway:</span>
                    <span className="text-[11px] text-emerald-800 font-mono">₹19,550 flexible pool / 30 days</span>
                  </div>
                  <div className="font-mono font-bold text-lg text-[#065F46]">
                    ₹650<span className="text-xs font-normal">/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 3: DEATH BY 1,000 UPI TAPS (DAYS 2 TO 20) */}
      {/* ========================================================================= */}
      <section id="story-act-3" className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-red-900 mb-4">
            <Flame className="size-3.5 text-red-700" /> Act 3: Days 2 to 20
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123630] leading-tight">
              Death by 1,000 UPI Taps: When money is invisible, it vanishes.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
              In India, UPI made payments frictionless. But frictionless payments also removed all cognitive friction from spending. Without physical currency leaving your wallet, ₹40 here and ₹150 there silently bleed your monthly wealth.
            </p>
          </div>

          {/* Interactive Micro-Leak Simulator */}
          <div className="rounded-3xl border border-[#E5DFD4] bg-[#FAF7F0] p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E1D5]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
                  Interactive Micro-Leak Calculator
                </span>
                <h3 className="font-serif text-2xl text-[#123630] mt-1">
                  How much do your innocent daily taps cost per month?
                </h3>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] text-right">
                <span className="text-[10px] font-mono uppercase font-bold text-[#839791] block">
                  Total Monthly Micro-Leak
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D44722]">
                  ₹{totalMicroLeaks.toLocaleString("en-IN")}
                  <span className="text-xs font-sans text-[#5A6E69] font-normal"> /mo</span>
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Chai / Coffee */}
              <div className="rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coffee className="size-4 text-amber-700" />
                    <span className="font-bold text-xs text-[#123630]">Chai / Filter Coffee</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#839791]">₹20/cup</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#5A6E69]">{chaiCount} cups / day</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setChaiCount((c) => Math.max(0, c - 1))}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-xs w-4 text-center">{chaiCount}</span>
                    <button
                      onClick={() => setChaiCount((c) => c + 1)}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D5] font-mono text-xs font-bold text-[#D44722] text-right">
                  ₹{monthlyChai.toLocaleString("en-IN")}/mo
                </div>
              </div>

              {/* Quick Commerce */}
              <div className="rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-purple-700" />
                    <span className="font-bold text-xs text-[#123630]">Zepto / Blinkit</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#839791]">₹180/order</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#5A6E69]">{quickCommerceCount} orders / wk</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuickCommerceCount((c) => Math.max(0, c - 1))}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-xs w-4 text-center">{quickCommerceCount}</span>
                    <button
                      onClick={() => setQuickCommerceCount((c) => c + 1)}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D5] font-mono text-xs font-bold text-[#D44722] text-right">
                  ₹{monthlyQuickCommerce.toLocaleString("en-IN")}/mo
                </div>
              </div>

              {/* Swiggy / Zomato */}
              <div className="rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Utensils className="size-4 text-[#D44722]" />
                    <span className="font-bold text-xs text-[#123630]">Swiggy / Zomato</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#839791]">₹380/meal</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#5A6E69]">{foodDeliveryCount} meals / wk</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFoodDeliveryCount((c) => Math.max(0, c - 1))}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-xs w-4 text-center">{foodDeliveryCount}</span>
                    <button
                      onClick={() => setFoodDeliveryCount((c) => c + 1)}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D5] font-mono text-xs font-bold text-[#D44722] text-right">
                  ₹{monthlyFoodDelivery.toLocaleString("en-IN")}/mo
                </div>
              </div>

              {/* Auto / Cab */}
              <div className="rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-4 text-blue-700" />
                    <span className="font-bold text-xs text-[#123630]">Auto / Uber / Ola</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#839791]">₹160/ride</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#5A6E69]">{cabCount} rides / wk</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCabCount((c) => Math.max(0, c - 1))}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-xs w-4 text-center">{cabCount}</span>
                    <button
                      onClick={() => setCabCount((c) => c + 1)}
                      className="size-7 grid place-items-center rounded-lg bg-[#FAF7F0] border border-[#E5DFD4] font-bold text-[#123630] hover:bg-[#E5DFD4]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E1D5] font-mono text-xs font-bold text-[#D44722] text-right">
                  ₹{monthlyCab.toLocaleString("en-IN")}/mo
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#5A6E69]">
                💡 Notice how these 4 everyday routines quietly consume nearly <strong>₹{totalMicroLeaks.toLocaleString("en-IN")}</strong> each month without ever feeling like a big purchase.
              </span>
              <span className="font-mono font-bold text-[#D44722] whitespace-nowrap">
                = {(totalMicroLeaks / 75000 * 100).toFixed(0)}% of Rohan&apos;s Salary
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 4: WHY SPREADSHEETS & SMS SCRAPERS FAIL */}
      {/* ========================================================================= */}
      <section id="story-act-4" className="bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 border border-slate-300 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-4">
            <XCircle className="size-3.5 text-slate-700" /> Act 4: The Failed Alternatives
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#123630] leading-tight">
              All the things you’re supposed to do vs what actually happens.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
              Every month, smart Indians make a resolution to &ldquo;track my budget properly&rdquo;. By day 5, the entire system collapses. Here is why:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* The Excel Spreadsheet Nightmare */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-red-100 text-red-700">
                    <FileSpreadsheet className="size-5" />
                  </span>
                  <span className="rounded-full bg-red-100 text-red-900 px-2.5 py-0.5 text-[10px] font-mono font-bold">
                    82% Abandoned
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#123630]">
                  1. The Excel Spreadsheet
                </h3>
                <p className="mt-2 text-xs text-[#5A6E69] leading-relaxed">
                  <strong>The Promise:</strong> &ldquo;I will download 3 bank statements every Sunday, match 60 UPI transactions in Excel, and create pretty pivot charts.&rdquo;
                </p>
                <div className="mt-4 p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] text-xs text-red-900 font-medium">
                  <strong>The Reality:</strong> After a 10-hour workday, nobody wants to open a laptop to log a ₹20 chai. Forgotten by the 4th of every month.
                </div>
              </div>
            </div>

            {/* The SMS Scraping Apps */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-amber-100 text-amber-800">
                    <ShieldAlert className="size-5" />
                  </span>
                  <span className="rounded-full bg-amber-100 text-amber-900 px-2.5 py-0.5 text-[10px] font-mono font-bold">
                    Privacy Risk
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#123630]">
                  2. SMS Scrapers &amp; Aggregators
                </h3>
                <p className="mt-2 text-xs text-[#5A6E69] leading-relaxed">
                  <strong>The Promise:</strong> &ldquo;Just give us full permission to read your private SMS inbox and we will automatically categorize everything.&rdquo;
                </p>
                <div className="mt-4 p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] text-xs text-amber-900 font-medium">
                  <strong>The Reality:</strong> Misclassifies self-transfers as income, fails on cash and paper bills, and exposes your financial data to telemarketers selling personal loans.
                </div>
              </div>
            </div>

            {/* The 10-Field Form Apps */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-100 text-blue-800">
                    <Layers className="size-5" />
                  </span>
                  <span className="rounded-full bg-blue-100 text-blue-900 px-2.5 py-0.5 text-[10px] font-mono font-bold">
                    High Friction
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#123630]">
                  3. Over-Engineered Budget Apps
                </h3>
                <p className="mt-2 text-xs text-[#5A6E69] leading-relaxed">
                  <strong>The Promise:</strong> &ldquo;Fill out our 8-field transaction form (Payee, Category, Subcategory, Account, Tax, Notes, Tag) for every rupee.&rdquo;
                </p>
                <div className="mt-4 p-3 rounded-xl bg-[#FAF7F0] border border-[#E5DFD4] text-xs text-blue-900 font-medium">
                  <strong>The Reality:</strong> Standing at an auto stand trying to select subcategories is impossible. You stop logging after 2 days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 5: THE KUBEAR WAY - 5 SECONDS A DAY */}
      {/* ========================================================================= */}
      <section id="story-act-5" className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 mb-4">
            <Sparkles className="size-3.5 text-emerald-700" /> Act 5: The Kubear Turning Point
          </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3.5xl lg:text-4xl font-normal text-[#123630] leading-tight">
                No forms. No bank snooping. Just 5 seconds in natural language.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
                Kubear meets Indian reality where it actually happens: in quick chats and bill photos.
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E5DFD4]">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#123630]">
                    <MessageSquare className="size-4 text-[#D44722]" /> Natural English / Hinglish Chat
                  </div>
                  <p className="mt-1 text-xs text-[#5A6E69] leading-relaxed">
                    Type <em>&ldquo;Auto ₹40 to metro&rdquo;</em> or <em>&ldquo;Swiggy dinner ₹340 with Nikhil&rdquo;</em>. Kubear extracts the amount, tags the category, and updates your safe daily buffer in under 2 seconds.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E5DFD4]">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#123630]">
                    <Camera className="size-4 text-emerald-700" /> 2-Second Receipt OCR Snap
                  </div>
                  <p className="mt-1 text-xs text-[#5A6E69] leading-relaxed">
                    Received a paper bill at a restaurant or medical store? Tap the camera. Kubear parses the line items and total amount instantly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E5DFD4]">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#123630]">
                    <Compass className="size-4 text-blue-700" /> Real-Time Safe Daily Runway
                  </div>
                  <p className="mt-1 text-xs text-[#5A6E69] leading-relaxed">
                    Instead of a blind bank balance, Kubear constantly tells you: <em>&ldquo;You have ₹490 left to spend guilt-free today.&rdquo;</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Live Chat & Runway Simulator */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FAF7F0] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#123630]">
                    Try Kubear 5-Second Chat
                  </span>
                </div>
                <span className="rounded-full bg-[#FFF2EC] border border-[#FED7AA] text-[#D44722] px-2.5 py-0.5 text-[10px] font-mono font-bold">
                  Live Interactive
                </span>
              </div>

              {/* Chat Screen */}
              <div className="mt-4 rounded-2xl bg-[#FFFDF8] border border-[#E5DFD4] p-4">
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {chatLogs.map((log, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        log.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          log.sender === "user"
                            ? "bg-[#123630] text-white rounded-tr-xs"
                            : "bg-[#FAF7F0] border border-[#E5DFD4] text-[#123630] rounded-tl-xs"
                        }`}
                      >
                        <p className="font-medium">{log.text}</p>
                        {log.tag && (
                          <div className="mt-1.5 pt-1 border-t border-[#E8E1D5] flex items-center justify-between gap-2 text-[10px] font-mono">
                            <span className="text-[#D44722] font-bold">🏷️ {log.tag}</span>
                            <span className="text-emerald-800 font-bold">{log.runway}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Action Prompt Chips */}
                <div className="mt-4 pt-3 border-t border-[#E8E1D5] flex flex-wrap gap-1.5">
                  <button
                    onClick={() => handleSendChat("Swiggy biryani ₹340")}
                    className="rounded-full bg-[#FFF5E6] border border-[#E8D3B5] px-2.5 py-1 text-[11px] font-medium text-[#123630] hover:bg-[#FED7AA] transition-colors cursor-pointer"
                  >
                    + Swiggy ₹340
                  </button>
                  <button
                    onClick={() => handleSendChat("Blinkit milk & eggs ₹160")}
                    className="rounded-full bg-[#FFF5E6] border border-[#E8D3B5] px-2.5 py-1 text-[11px] font-medium text-[#123630] hover:bg-[#FED7AA] transition-colors cursor-pointer"
                  >
                    + Blinkit ₹160
                  </button>
                  <button
                    onClick={() => handleSendChat("Auto to office ₹85")}
                    className="rounded-full bg-[#FFF5E6] border border-[#E8D3B5] px-2.5 py-1 text-[11px] font-medium text-[#123630] hover:bg-[#FED7AA] transition-colors cursor-pointer"
                  >
                    + Auto ₹85
                  </button>
                  <button
                    onClick={() => handleSendChat("WiFi bill ₹1,200 shared")}
                    className="rounded-full bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 text-[11px] font-medium text-[#1E40AF] hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    + Shared WiFi ₹1,200
                  </button>
                </div>

                {/* Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChat(chatInput);
                  }}
                  className="mt-3 flex items-center gap-1.5"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type 'Chai ₹20' or 'Auto ₹50'..."
                    className="flex-1 rounded-xl border border-[#E5DFD4] bg-[#FAF7F0] px-3.5 py-2 text-xs text-[#123630] focus:border-[#D44722] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#123630] p-2 text-white hover:bg-[#D44722] transition-colors cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="size-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 6: TWO TABLES ARCHITECTURE (SHARED VS PRIVATE) */}
      {/* ========================================================================= */}
      <section id="story-act-6" className="bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 border border-blue-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-blue-900 mb-4">
            <Split className="size-3.5 text-blue-700" /> Act 6: The Flatmate &amp; Shared Dilemma
          </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3.5xl lg:text-4xl font-normal text-[#123630] leading-tight">
                Two Tables Architecture: Split house expenses without exposing your private life.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
                Rohan lives with his flatmate Amit. In standard apps, either you have to expose your entire personal bank statement to roommate split tools, or manually maintain messy WhatsApp math.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] p-4.5">
                  <div className="font-bold text-sm text-[#1E40AF] flex items-center gap-2">
                    <Users className="size-4 text-[#1D4ED8]" /> Table 1: Shared House Space
                  </div>
                  <p className="mt-1 text-xs text-[#1E3A8A] leading-relaxed">
                    Cook Aunty salary (₹4,000), Groceries (₹2,500), and Fiber WiFi (₹1,199) are logged here. Both Rohan and Amit see the 50/50 balance in real time. Zero month-end awkward arguments.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] p-4.5">
                  <div className="font-bold text-sm text-[#9A3412] flex items-center gap-2">
                    <LockKeyhole className="size-4 text-[#D44722]" /> Table 2: Rohan&apos;s 100% Private Ledger
                  </div>
                  <p className="mt-1 text-xs text-[#7C2D12] leading-relaxed">
                    Rohan&apos;s personal Zara shopping, weekend dinner dates, mutual fund SIPs, and Goa savings stay strictly on his personal ledger. Amit has zero visibility into Rohan&apos;s private life.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Two-Tables Diagram */}
            <div className="rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] p-6 shadow-sm space-y-5">
              <div className="text-center pb-3 border-b border-[#E8E1D5]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#839791]">
                  Kubear Two-Tables System
                </span>
                <h4 className="font-serif text-xl text-[#123630] mt-0.5">
                  Clean Separation of Shared &amp; Personal
                </h4>
              </div>

              {/* Shared Table */}
              <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/70 p-4">
                <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Users className="size-3.5 text-blue-700" /> Shared Apartment Board
                  </span>
                  <span className="font-mono text-[10px] bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full">
                    Visible to Amit &amp; Rohan
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-blue-900 font-medium">
                  <div className="flex justify-between bg-white/90 p-2 rounded-lg border border-blue-100">
                    <span>Cook Aunty Salary</span>
                    <span className="font-mono font-bold">₹4,000 (₹2,000 each)</span>
                  </div>
                  <div className="flex justify-between bg-white/90 p-2 rounded-lg border border-blue-100">
                    <span>Airtel Fiber Broadband</span>
                    <span className="font-mono font-bold">₹1,199 (₹600 each)</span>
                  </div>
                </div>
              </div>

              {/* Private Table */}
              <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/70 p-4">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-2">
                  <span className="flex items-center gap-1.5">
                    <LockKeyhole className="size-3.5 text-[#D44722]" /> Rohan&apos;s Private Ledger
                  </span>
                  <span className="font-mono text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                    🔒 Strictly Private
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-amber-900 font-medium">
                  <div className="flex justify-between bg-white/90 p-2 rounded-lg border border-amber-100">
                    <span>Zara Casual Shirts</span>
                    <span className="font-mono font-bold text-[#D44722]">₹3,200</span>
                  </div>
                  <div className="flex justify-between bg-white/90 p-2 rounded-lg border border-amber-100">
                    <span>Weekend Dinner Date</span>
                    <span className="font-mono font-bold text-[#D44722]">₹1,850</span>
                  </div>
                  <div className="flex justify-between bg-white/90 p-2 rounded-lg border border-amber-100">
                    <span>Goa Vacation Fund</span>
                    <span className="font-mono font-bold text-emerald-800">₹4,000 Saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 7: MONTH-END CALM & LONG-TERM WEALTH */}
      {/* ========================================================================= */}
      <section id="story-act-7" className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 mb-4">
            <CheckCircle2 className="size-3.5 text-emerald-700" /> Act 7: The 30th of the Month
          </div>

          <div className="grid gap-8 md:gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3.5xl lg:text-4xl font-normal text-[#123630] leading-tight">
                The 30th arrives: Zero panic, zero debt, and Goa trip fully funded.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#5A6E69]">
                In previous months, the 28th was panic week: waiting desperately for the salary credit, checking credit card balances, and feeling guilty.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6E69]">
                With Kubear, Rohan finishes the month with total control:
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-medium text-[#065F46]">
                  <Check className="size-4 text-emerald-700 flex-none" />
                  <span><strong>Rent &amp; Bills:</strong> Paid 100% on time on Day 1 without stress</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-medium text-[#065F46]">
                  <Check className="size-4 text-emerald-700 flex-none" />
                  <span><strong>SIP Investment:</strong> ₹8,000 compounded in Nifty 50 Index</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-medium text-[#065F46]">
                  <Check className="size-4 text-emerald-700 flex-none" />
                  <span><strong>Goa Vacation Goal:</strong> ₹4,000 saved (Target ₹20,000 on schedule)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-medium text-[#065F46]">
                  <Check className="size-4 text-emerald-700 flex-none" />
                  <span><strong>Buffer Carried Over:</strong> +₹1,850 surplus buffer left over</span>
                </div>
              </div>
            </div>

            {/* Victory Scorecard */}
            <div className="rounded-3xl border border-emerald-300 bg-[#F0FDF4] p-8 shadow-sm text-center">
              <div className="mx-auto size-14 grid place-items-center rounded-full bg-emerald-100 text-emerald-800 mb-4">
                <CheckCircle2 className="size-8 text-emerald-700" />
              </div>

              <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Month-End Scorecard
              </span>
              <h3 className="font-serif text-3xl text-[#123630] mt-1">
                Calm Financial Victory
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#065F46] max-w-sm mx-auto">
                No credit card debt roll-over. No awkward roommate math. 100% peace of mind.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-2xl bg-white border border-emerald-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#839791] block">
                    SIP Compounded
                  </span>
                  <span className="font-serif text-xl font-bold text-emerald-800 mt-1 block">
                    ₹8,000
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-emerald-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#839791] block">
                    Goa Fund Added
                  </span>
                  <span className="font-serif text-xl font-bold text-amber-700 mt-1 block">
                    ₹4,000
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-emerald-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#839791] block">
                    Credit Card Debt
                  </span>
                  <span className="font-serif text-xl font-bold text-emerald-800 mt-1 block">
                    ₹0.00
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-emerald-200">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#839791] block">
                    Surplus Saved
                  </span>
                  <span className="font-serif text-xl font-bold text-[#D44722] mt-1 block">
                    +₹1,850
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SUMMARY COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Side-by-Side Summary
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] font-normal">
              The Old Way vs The Kubear Way
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-[#FFFDF8] rounded-3xl border border-[#E5DFD4] shadow-xs overflow-hidden">
              <thead>
                <tr className="border-b border-[#E8E1D5] bg-[#FAF7F0]">
                  <th className="p-4 sm:p-5 font-mono text-xs font-bold uppercase text-[#839791] w-1/3">
                    Everyday Life Moment
                  </th>
                  <th className="p-4 sm:p-5 font-mono text-xs font-bold uppercase text-red-900 w-1/3 bg-red-50/50">
                    The Old Fragmented Way
                  </th>
                  <th className="p-4 sm:p-5 font-mono text-xs font-bold uppercase text-emerald-900 w-1/3 bg-emerald-50/50">
                    The Kubear Way
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D5]">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#123630]">Salary Day (Day 1)</td>
                  <td className="p-4 sm:p-5 text-[#5A6E69] bg-red-50/30">
                    Feel wealthy, spend blindly, forget that rent and SIPs are due.
                  </td>
                  <td className="p-4 sm:p-5 text-[#065F46] font-medium bg-emerald-50/30">
                    Lock commitments in 60s. Get your exact ₹650/day safe runway.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#123630]">Chai, Auto, Swiggy Taps</td>
                  <td className="p-4 sm:p-5 text-[#5A6E69] bg-red-50/30">
                    30+ unmonitored UPI taps per week silently drain ₹15,000+.
                  </td>
                  <td className="p-4 sm:p-5 text-[#065F46] font-medium bg-emerald-50/30">
                    5-second chat (&ldquo;Chai ₹20&rdquo;) keeps you in conscious control.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#123630]">Flatmate Rent &amp; Cook</td>
                  <td className="p-4 sm:p-5 text-[#5A6E69] bg-red-50/30">
                    Awkward month-end WhatsApp arguments and manual calculator math.
                  </td>
                  <td className="p-4 sm:p-5 text-[#065F46] font-medium bg-emerald-50/30">
                    Two Tables: Shared expenses split 50/50, personal life 100% private.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#123630]">Data Privacy &amp; Spam</td>
                  <td className="p-4 sm:p-5 text-[#5A6E69] bg-red-50/30">
                    SMS scrapers sell data to telemarketers spamming loan calls.
                  </td>
                  <td className="p-4 sm:p-5 text-[#065F46] font-medium bg-emerald-50/30">
                    Zero bank logins, zero SMS permissions. 100% private and offline-capable.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#123630]">Month-End (Day 30)</td>
                  <td className="p-4 sm:p-5 text-[#5A6E69] bg-red-50/30">
                    Anxiety, credit card roll-overs, zero progress on vacation goals.
                  </td>
                  <td className="p-4 sm:p-5 text-[#065F46] font-medium bg-emerald-50/30">
                    Peace of mind, all bills paid, SIP compounded, and surplus carried.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="bg-[#FFFDF8] px-5 py-20 sm:px-8 lg:px-12 border-b border-[#E8E1D5]">
        <div className="mx-auto max-w-[1240px] grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Everything you need to know.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6E69]">
              How Kubear stays 100% private, handles Indian UPI workflows, and gives you lasting financial peace.
            </p>

            <div className="mt-8 rounded-2xl bg-[#FFF5E6] border border-[#FED7AA] p-5 text-xs text-[#123630]">
              <div className="flex items-center gap-2 font-bold text-[#D44722]">
                <ShieldCheck className="size-4 text-[#D44722]" />
                <span>Zero Ads • Zero Loan Telemarketing</span>
              </div>
              <p className="mt-2 text-[#5A6E69] leading-relaxed">
                We believe financial software should be an instrument of calm, not a funnel to sell you high-interest personal loans or credit cards.
              </p>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem
                value="faq-1"
                className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-4.5">
                  Why doesn&apos;t Kubear automatically read my SMS inbox?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-4.5">
                  Automated SMS reading requires invasive permissions, frequently misclassifies internal account transfers (e.g. transferring money from your salary account to your investment account is counted as &ldquo;income&rdquo;), and exposes your financial habits to third-party scrapers. Kubear gives you effortless 5-second chat and photo logging so your records are always 100% accurate, private, and deliberate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-2"
                className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-4.5">
                  How does the &ldquo;Safe Daily Runway&rdquo; work?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-4.5">
                  When your salary arrives, Kubear subtracts your locked obligations (Rent, SIPs, EMIs, Family support, and Goal contributions) from your starting balance. It divides the remaining flexible pool across the days in the month, giving you a safe daily allowance (e.g. ₹650/day) so you can spend guilt-free without touching rent or investments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-3"
                className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-4.5">
                  How does the receipt photo scanner work?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-4.5">
                  Whenever you receive a paper receipt from a grocery store, medical shop, or restaurant, tap the camera icon in Kubear. Our on-device OCR instantly reads the items, extracts the final total, and categorizes it in under 2 seconds. You confirm with a single tap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-4"
                className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-4.5">
                  How does the &ldquo;Two Tables&rdquo; concept work for flatmates or couples?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-4.5">
                  Kubear separates your money into two independent layers: a Shared Space (where rent, cook salary, and groceries are shared and split with flatmates or partners) and your Private Personal Ledger (where your personal shopping, gifts, and investments remain 100% invisible to anyone else).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="faq-5"
                className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-4.5">
                  Can Kubear move my money or initiate bank transfers?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-4.5">
                  No. Kubear is strictly a read-and-record clarity companion. It does not connect to payment gateways, cannot touch your bank accounts, and does not initiate UPI transactions. You retain total authority over your money.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5ED] via-[#FDF8F2] to-[#FFF0E6] px-5 py-20 text-[#123630] sm:px-8 lg:px-12 text-center">
        <div className="mx-auto max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0E6] border border-[#FCD34D]/80 px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
            <Sparkles className="size-3.5 text-[#D44722]" /> Start Your 30-Day Calm Today
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#123630] font-normal leading-[1.08] tracking-tight">
            Stop flying blind with your salary.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A6E69] max-w-xl mx-auto">
            Log your next chai or Swiggy dinner in 5 seconds. Available instantly on Web and Android with zero bank setup.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full bg-[#123630] px-8 text-sm font-extrabold text-white shadow-xl hover:bg-[#D44722] transition-all cursor-pointer"
              href={APP_URL}
            >
              Open Kubear Web App <ArrowUpRight className="size-4" />
            </a>
            <a
              className="inline-flex min-h-[3.2rem] items-center justify-center gap-2 rounded-full border border-[#D4CCC0] bg-[#FFFDF8] px-8 text-sm font-extrabold text-[#123630] hover:border-[#123630] hover:bg-[#F6F2EA] transition-all cursor-pointer shadow-sm"
              href={PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get Android App <Play className="size-4 fill-[#123630]" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#839791]">
            <span>✓ No bank credentials</span>
            <span>✓ No SMS reading</span>
            <span>✓ 100% Private Ledger</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
