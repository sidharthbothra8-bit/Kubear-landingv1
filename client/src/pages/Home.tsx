import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  ExternalLink,
  Flame,
  Heart,
  HelpCircle,
  Home as HomeIcon,
  IndianRupee,
  Layers,
  Lock,
  MessageSquare,
  Mic,
  MinusCircle,
  Play,
  PlusCircle,
  QrCode,
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
  Umbrella,
  Users,
  Utensils,
  Volume2,
  Wallet,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { APP_URL, PLAY_URL } from "@/components/MovingMoneyWorld";
import { FirstFactAuthModal } from "@/components/FirstFactAuthModal";

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"auth" | "demo">("auth");

  // Hero interactive question state
  const heroQuestions = [
    {
      id: "goa",
      title: "🏖️ Goa trip pe jaaun ya rent rukega?",
      question: "Dost keh rahe hain Goa chal, ₹15,000 lagenge. Jaaun ya 1st ko rent ruk jayega?",
      verdict: "Haan, bilkul jao! 100% Safe",
      verdictTone: "safe",
      badge: "Safe to Spend • No Guilt",
      answer:
        "Bhai aaraam se jao! Aapka ₹18,000 rent aur ₹5,000 Nifty SIP pehle se locked (ring-fenced) hai. Trip ke baad agle 12 din ke liye pocket money ₹550/day bachegi. Chill karo!",
      rentStatus: "₹18,000 Rent Locked (Protected)",
      sipStatus: "₹5,000 SIP Untouched",
      dailyPace: "Living Pace: ₹550 / day remaining",
    },
    {
      id: "mummy",
      title: "👨‍👩‍👧 Mummy-Papa ko ₹10,000 bhejna hai",
      question: "Ghar pe mummy-papa ko ₹10,000 bhejne ke baad mahina kaise chalega?",
      verdict: "Family First • Zero Warning Alarms",
      verdictTone: "family",
      badge: "Farz & Pyaar • Never Overspending",
      answer:
        "Ghar paise bhejna farz hai, koi overspending nahi! ₹10,000 bhejne ke baad bhi aapka 4.8 months ka emergency buffer safe hai aur baaki 18 din bina tension nikal jayenge.",
      rentStatus: "Bills & Ration fully funded",
      sipStatus: "4.8 Months Emergency Fund Intact",
      dailyPace: "Tagged under 'Family Support' with respect",
    },
    {
      id: "flatmate",
      title: "🏠 Cook didi & Wi-Fi split (bina Splitwise paywall)",
      question: "Flat ka cook didi (₹3,000) aur Wi-Fi (₹1,200) split karna hai Rahul aur Aman ke saath.",
      verdict: "Instant Split • Free Forever",
      verdictTone: "split",
      badge: "Zero Timers • Direct UPI Links",
      answer:
        "Total ₹4,200 hua. Aapka hisaab ₹1,400. Rahul aur Aman se ₹1,400 each lena hai. WhatsApp pe 1-tap UPI payment link generate ho gaya. No 3-expense limits, no 10-sec timer!",
      rentStatus: "Your Share: ₹1,400 recorded in Living Pool",
      sipStatus: "₹2,800 due from Flatmates (Tracked)",
      dailyPace: "1-Tap UPI WhatsApp request ready",
    },
    {
      id: "macbook",
      title: "💻 MacBook EMI pe lun ya savings crash hogi?",
      question: "Office ke liye MacBook chahiye, ₹8,500/month no-cost EMI. Lun ya wait karun?",
      verdict: "Affordable • Fits in 30% DTI Limit",
      verdictTone: "safe",
      badge: "Healthy Math • Verified",
      answer:
        "₹8,500/month EMI aapke 30% take-home limit ke andar aati hai. ₹5,000 SIP bina ruke chalti rahegi. Bas weekend dining ko thoda balance karna hoga (₹320/day ka adjustment).",
      rentStatus: "Total EMIs: ₹14,500 (Safe under 30% limit)",
      sipStatus: "SIP growth continues untouched",
      dailyPace: "Pace adjusts smoothly without guilt",
    },
  ];

  const [activeHeroQ, setActiveHeroQ] = useState(heroQuestions[0]);
  const [customQuery, setCustomQuery] = useState("");

  const handleCustomQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    setActiveHeroQ({
      id: "custom",
      title: "✨ Aapka Sawaal",
      question: customQuery,
      verdict: "Kubear ne hisaab check kar liya!",
      verdictTone: "safe",
      badge: "Personalized Ledger Check",
      answer:
        `"${customQuery}" — Aapke Pakke Kharche (Rent, EMIs, Mummy) pehle se surakshit hain. Yeh kharcha aapke daily flexible pool se bina guilt adjust ho sakta hai.`,
      rentStatus: "Fixed obligations locked & ring-fenced",
      sipStatus: "Wealth goals intact",
      dailyPace: "Self-healing ledger maintains daily balance",
    });
  };

  // Fold 2: Zero Typing Fatigue Input Modes
  const [activeInputTab, setActiveInputTab] = useState<"voice" | "camera" | "chat">("voice");
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  // Fold 3: The 3 Spaces Tab
  const [activeSpaceTab, setActiveSpaceTab] = useState<"flatmates" | "family" | "private">("flatmates");

  // Fold 4: Budget DNA Interactive Slider
  const [weekendPartySpend, setWeekendPartySpend] = useState(3500);

  // Calculation for self-healing budget
  const originalDailyPace = 800;
  const daysRemaining = 14;
  const extraSpend = Math.max(0, weekendPartySpend - 1500);
  const adjustedDailyPace = Math.max(380, Math.round(originalDailyPace - extraSpend / daysRemaining));

  // FAQ Accordion open item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear: Stop guessing your bank balance."
        description="Know what you can actually afford, what to do next, and if your goals are safe. 100% free ledger made for Indian reality."
      />

      {/* ========================================================================= */}
      {/* HERO SECTION: THE INDIAN REALITY & "BHAI, SACH KYA HAI?"                   */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 lg:pt-40 md:pb-24 bg-[#FAF7F0] border-b border-[#123630]/12">
        {/* Subtle Indian motif background texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123630_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Indian Reality Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5C2B]/10 border border-[#FF5C2B]/25 text-[#CD4623] text-xs sm:text-sm font-bold tracking-tight shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C2B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C2B]" />
              </span>
              <span>Made for Indian Homes • 100% Free Ledger • Zero Spam</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Punchy Hero Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#123630] leading-[1.08] font-normal tracking-tight">
                Stop guessing your <br />
                <span className="italic text-[#FF5C2B] font-medium">bank balance.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#2C403B] leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                Account mein <strong className="text-[#123630] font-bold">₹48,000</strong> dekh ke ameer mat samjho. 
                5 din baad flat rent, mummy ki medicine, aur Monday ki SIP katni hai. 
                <span className="block mt-2 font-medium text-[#123630]">
                  Kubear tells you what’s <span className="underline decoration-[#FF5C2B] decoration-2 underline-offset-4">actually yours to spend</span> without anxiety.
                </span>
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={() => {
                    setModalMode("auth");
                    setIsAuthModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0E382F] hover:bg-[#164E41] text-[#FAF7F0] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>Open Free Ledger</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform text-[#FF5C2B]" />
                </button>

                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4EFE6] border-2 border-[#123630]/15 text-[#123630] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Smartphone className="size-4 text-[#047857]" />
                  <span>Google Play Download</span>
                </a>
              </div>

              {/* 3 Indian Trust Micro-Chips */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#516761]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-[#047857]" /> No Net-Banking Passwords
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-[#047857]" /> No SMS Snooping
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-[#047857]" /> Zero Telemarketing Spam
                </span>
              </div>
            </div>

            {/* Right: The "Bank App vs The Truth" Visual Device */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-white border-2 border-[#123630]/15 p-5 sm:p-7 shadow-xl">
                {/* Desi Khata Header Strip */}
                <div className="flex items-center justify-between border-b border-[#123630]/10 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-[#FF5C2B] flex items-center justify-center text-white font-black text-sm shadow-xs">
                      ₹
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#123630] leading-none">The Reality Check</h3>
                      <p className="text-[11px] text-[#52665F] mt-0.5">Bank Balance vs. Asli Pocket Money</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                    Live Simulation
                  </span>
                </div>

                {/* The Comparison Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Left: What bank app shows */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10 relative overflow-hidden">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#52665F] block">
                      Bank App Dikhata Hai:
                    </span>
                    <div className="mt-2 text-2xl sm:text-3xl font-black text-[#123630] font-sans">
                      ₹48,500
                    </div>
                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="size-3" /> "Ameer Lag Rahe Ho"
                    </span>

                    {/* Pending Dues Breakdown */}
                    <div className="mt-4 pt-3 border-t border-[#123630]/10 space-y-1.5 text-xs text-[#52665F]">
                      <div className="flex justify-between">
                        <span>🏠 Flat Rent (Due 1st):</span>
                        <strong className="text-[#DC2626] font-bold">- ₹18,000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>👨‍👩‍👧 Mummy Medicine:</span>
                        <strong className="text-[#DC2626] font-bold">- ₹10,000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>📈 Nifty 50 Index SIP:</span>
                        <strong className="text-[#DC2626] font-bold">- ₹5,000</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>💳 Credit Card Bill:</span>
                        <strong className="text-[#DC2626] font-bold">- ₹9,500</strong>
                      </div>
                    </div>
                  </div>

                  {/* Right: What Kubear Tells You */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0E382F] to-[#124237] text-white border border-[#0E382F] relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7F3D0] block">
                        Kubear Asli Hisaab:
                      </span>
                      <div className="mt-2 text-3xl sm:text-4xl font-black text-[#FFFDF9] font-sans">
                        ₹6,000
                      </div>
                      <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-[#FF5C2B] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                        ⚡ Asli Pocket Money
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 space-y-2">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                        <div className="text-[11px] text-[#A7F3D0] font-semibold">Safe Daily Pace:</div>
                        <div className="text-base font-black text-white">₹500 / day</div>
                        <div className="text-[10px] text-white/70">Agle 12 din ke liye tension-free.</div>
                      </div>
                      <p className="text-[11px] text-[#A7F3D0] leading-snug">
                        ✓ Rent ring-fenced & safe <br />
                        ✓ Family transfer secured <br />
                        ✓ Zero guilt for your dinners
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="mt-4 p-3 rounded-xl bg-[#FFF8EE] border border-[#F5E2C5] flex items-center gap-2.5 text-xs text-[#7C4800] font-medium">
                  <Sparkles className="size-4 text-[#FF5C2B] shrink-0" />
                  <span>
                    <strong>Bhai, bank app jhooth bolti hai.</strong> Kubear aapka asli buffer bacha ke rakhta hai taaki end-of-month salary crash na ho.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* INTERACTIVE COMPONENT: "POOCHO KUBEAR SE" (Ask Kubear)         */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white border-2 border-[#123630]/15 p-5 sm:p-7 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#123630]/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#CD4623] px-2 py-0.5 rounded bg-[#FF5C2B]/10">
                    Interactive Voice & Chat Engine
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#123630] font-normal mt-1">
                    "Poocho Kubear Se" (Try Indian Money Scenarios)
                  </h3>
                </div>
                <div className="text-xs text-[#52665F] font-medium flex items-center gap-1.5">
                  <Volume2 className="size-4 text-[#FF5C2B]" /> Click any question below:
                </div>
              </div>

              {/* Scenario Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {heroQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveHeroQ(q)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border text-left ${
                      activeHeroQ.id === q.id
                        ? "bg-[#0E382F] text-white border-[#0E382F] shadow-xs"
                        : "bg-[#FAF7F0] text-[#123630] border-[#123630]/12 hover:border-[#FF5C2B]"
                    }`}
                  >
                    {q.title}
                  </button>
                ))}
              </div>

              {/* The Conversational Verdict Card */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border border-[#123630]/12 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#52665F]">
                    Aapka Sawaal: <span className="text-[#123630] italic font-medium">"{activeHeroQ.question}"</span>
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                    {activeHeroQ.verdict}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#123630]/10 text-xs sm:text-sm text-[#123630] leading-relaxed font-medium">
                  "{activeHeroQ.answer}"
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-[#123630]/10">
                    <span className="text-[#52665F] block font-semibold text-[11px]">Pakke Kharche:</span>
                    <strong className="text-[#047857] font-bold mt-0.5 block">{activeHeroQ.rentStatus}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#123630]/10">
                    <span className="text-[#52665F] block font-semibold text-[11px]">Wealth & Goals:</span>
                    <strong className="text-[#123630] font-bold mt-0.5 block">{activeHeroQ.sipStatus}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#123630]/10">
                    <span className="text-[#52665F] block font-semibold text-[11px]">Pace Calculation:</span>
                    <strong className="text-[#FF5C2B] font-bold mt-0.5 block">{activeHeroQ.dailyPace}</strong>
                  </div>
                </div>
              </div>

              {/* Custom Question Input */}
              <form onSubmit={handleCustomQuery} className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Apna sawaal likho: 'Can I buy iPhone 16 on EMI?' ya 'Indiranagar dinner budget?'"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#123630]/20 bg-[#FAF7F0] focus:bg-white focus:border-[#FF5C2B] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#FF5C2B] hover:bg-[#E8501E] text-white text-xs sm:text-sm font-bold shadow-xs cursor-pointer transition-colors shrink-0"
                >
                  Poocho
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE VISUAL BENTO FACE-OFF (WESTERN APPS VS INDIAN REALITY)      */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-[#123630]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              The Honest Truth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Why Silicon Valley finance apps fail in Indian homes.
            </h2>
            <p className="text-sm sm:text-base text-[#2C403B]">
              Foreign apps assume you live alone in a studio apartment and love filling 15-category forms. Here is the Indian reality:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Left Card: Western Apps */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#F5F4F0] border-2 border-dashed border-[#123630]/20 space-y-5">
              <div className="flex items-center justify-between border-b border-[#123630]/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A3E2F]">
                  Traditional Western Apps
                </span>
                <span className="text-xs font-bold text-[#DC2626] bg-[#FEE2E2] px-2.5 py-0.5 rounded-full">
                  Frustrating 📉
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="size-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">15 Pie Chart Categories</h4>
                    <p className="text-xs text-[#52665F] mt-0.5">
                      "Is chai under Food &gt; Dining or Beverage?" You spend 45 seconds per entry and quit after 4 days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="size-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">Splitwise Paywall & Ads</h4>
                    <p className="text-xs text-[#52665F] mt-0.5">
                      Adding 3 expenses locks your screen with a 10-second timer or forces a ₹299/mo subscription.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="size-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">Solo Mindset (No Family Context)</h4>
                    <p className="text-xs text-[#52665F] mt-0.5">
                      Sends an angry red "Budget Broken!" alert when you send ₹10,000 home for parents' medicines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="size-5 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#123630]">Aggressive Loan Telemarketing</h4>
                    <p className="text-xs text-[#52665F] mt-0.5">
                      They scrape your bank SMS and sell your data to loan agents who call you 4 times a day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Kubear (Indian Reality) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0E382F] text-white border-2 border-[#0E382F] shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles className="size-40 text-[#FF5C2B]" />
              </div>

              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                  Kubear (Built for India 🇮🇳)
                </span>
                <span className="text-xs font-bold text-[#0E382F] bg-[#A7F3D0] px-2.5 py-0.5 rounded-full">
                  Grounded & Calm ✨
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">5-Sec Voice & WhatsApp Note</h4>
                    <p className="text-xs text-[#A7F3D0]/80 mt-0.5">
                      "Auto 70, Chai 20" — Tap mic or drop a Zepto screenshot. Hisaab bante bante ban jayega.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Free Flatmate Splits</h4>
                    <p className="text-xs text-[#A7F3D0]/80 mt-0.5">
                      Cook didi, groceries, Wi-Fi. Unlimited splits, zero paywalls, zero timers, and 1-tap UPI WhatsApp requests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Family First (Farz & Pyaar)</h4>
                    <p className="text-xs text-[#A7F3D0]/80 mt-0.5">
                      Parents' transfer is tracked with respect in a dedicated space. Never counted as frivolous overspending.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Zero SMS Snooping & Zero Spam</h4>
                    <p className="text-xs text-[#A7F3D0]/80 mt-0.5">
                      No net-banking passwords, no reading your OTPs. We never sell your number to personal loan telemarketers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: "HISAAB BANTE BANTE BAN JAYEGA" (ZERO TYPING FATIGUE)           */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#123630]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Zero Form Filling
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] font-normal">
              "Hisaab bante bante ban jayega."
            </h2>
            <p className="text-sm sm:text-base text-[#2C403B]">
              Auto se utre, QR scan kiya, chai pee ke nikal gaye. Nobody has 45 seconds to open apps and select 5 dropdowns.
            </p>
          </div>

          {/* 3 Visual Input Switchers */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="flex justify-center p-1.5 rounded-2xl bg-white border-2 border-[#123630]/15 gap-2 shadow-xs">
              <button
                onClick={() => setActiveInputTab("voice")}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  activeInputTab === "voice"
                    ? "bg-[#0E382F] text-white shadow-xs"
                    : "text-[#52665F] hover:bg-[#FAF7F0]"
                }`}
              >
                <Mic className="size-4 text-[#FF5C2B]" />
                <span>🎙️ Bol Ke Note Karo</span>
              </button>

              <button
                onClick={() => setActiveInputTab("camera")}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  activeInputTab === "camera"
                    ? "bg-[#0E382F] text-white shadow-xs"
                    : "text-[#52665F] hover:bg-[#FAF7F0]"
                }`}
              >
                <Camera className="size-4 text-[#047857]" />
                <span>📸 Bill Ya Screenshot Phenko</span>
              </button>

              <button
                onClick={() => setActiveInputTab("chat")}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  activeInputTab === "chat"
                    ? "bg-[#0E382F] text-white shadow-xs"
                    : "text-[#52665F] hover:bg-[#FAF7F0]"
                }`}
              >
                <MessageSquare className="size-4 text-[#FF5C2B]" />
                <span>💬 WhatsApp Shorthand</span>
              </button>
            </div>

            {/* Interactive Mode Showcase Card */}
            <div className="mt-6 rounded-3xl bg-white border-2 border-[#123630]/15 p-6 sm:p-8 shadow-lg">
              {activeInputTab === "voice" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0E382F] text-white">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsVoicePlaying(!isVoicePlaying)}
                        className="size-12 rounded-full bg-[#FF5C2B] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shrink-0 shadow-md"
                      >
                        {isVoicePlaying ? <RotateCcw className="size-5 text-white" /> : <Play className="size-5 text-white ml-0.5" />}
                      </button>
                      <div>
                        <span className="text-[11px] uppercase font-bold tracking-wider text-[#A7F3D0] block">
                          Hinglish Voice Note (0:04s)
                        </span>
                        <p className="text-sm font-medium text-white italic mt-0.5">
                          "Bhai auto wale ko 70 diya aur Indiranagar metro station pe chai pee 20 ki."
                        </p>
                      </div>
                    </div>

                    {/* Animated Soundwave Visual */}
                    <div className="flex items-center gap-1 h-8 px-3 py-1 rounded-lg bg-white/10">
                      <div className={`w-1 bg-[#FF5C2B] rounded-full transition-all ${isVoicePlaying ? "h-6 animate-pulse" : "h-2"}`} />
                      <div className={`w-1 bg-[#FF5C2B] rounded-full transition-all ${isVoicePlaying ? "h-8 animate-pulse delay-75" : "h-4"}`} />
                      <div className={`w-1 bg-[#FF5C2B] rounded-full transition-all ${isVoicePlaying ? "h-5 animate-pulse delay-150" : "h-3"}`} />
                      <div className={`w-1 bg-[#FF5C2B] rounded-full transition-all ${isVoicePlaying ? "h-7 animate-pulse delay-100" : "h-2"}`} />
                      <div className={`w-1 bg-[#FF5C2B] rounded-full transition-all ${isVoicePlaying ? "h-4 animate-pulse delay-200" : "h-5"}`} />
                    </div>
                  </div>

                  {/* Instant AI Ledger Output */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#52665F] block mb-3">
                      Kubear Auto-Extracted Into Living Ledger:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#123630]/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">🛺</span>
                          <div>
                            <strong className="text-xs font-bold text-[#123630] block">Auto Rickshaw</strong>
                            <span className="text-[11px] text-[#52665F]">Commute • Indiranagar</span>
                          </div>
                        </div>
                        <span className="text-sm font-black text-[#123630]">₹70</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#123630]/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">☕</span>
                          <div>
                            <strong className="text-xs font-bold text-[#123630] block">Chai Cutting</strong>
                            <span className="text-[11px] text-[#52665F]">Refreshment • Metro</span>
                          </div>
                        </div>
                        <span className="text-sm font-black text-[#123630]">₹20</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeInputTab === "camera" && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#F5E2C5] flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-[#FF5C2B]/10 border border-[#FF5C2B]/30 flex items-center justify-center shrink-0">
                      <Receipt className="size-6 text-[#FF5C2B]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#123630]">Zepto / Swiggy / Amazon Receipt Scan</h4>
                      <p className="text-xs text-[#52665F] mt-0.5">
                        Bas order ka screenshot drop karo. Kubear delivery fee, discounts, aur items automatically split kar deta hai.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#123630]/10">
                    <div className="flex items-center justify-between border-b border-[#123630]/10 pb-2 mb-2 text-xs">
                      <span className="font-bold text-[#123630]">Zepto Instant Grocery Invoice (#ZP-8842)</span>
                      <span className="font-bold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">Scanned in 1.2s</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-[#52665F]">
                      <div className="flex justify-between">
                        <span>Milk, Bread, Bananas (Kitchen Shared):</span>
                        <strong className="text-[#123630]">₹230</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Diet Coke (Personal Pocket):</span>
                        <strong className="text-[#123630]">₹40</strong>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#123630]/10 flex justify-between items-center text-xs">
                      <span className="font-bold text-[#047857]">Auto-split with Flatmates:</span>
                      <span className="font-bold text-[#123630]">₹115 added to Roommate Ledger</span>
                    </div>
                  </div>
                </div>
              )}

              {activeInputTab === "chat" && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center gap-3">
                    <MessageSquare className="size-6 text-[#1E40AF] shrink-0" />
                    <p className="text-xs sm:text-sm text-[#1E40AF] font-medium">
                      Natural Indian Shorthand: Type exactly like you chat on WhatsApp. No forms, no category pickers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-end gap-2 justify-end">
                      <div className="p-3 rounded-2xl rounded-br-xs bg-[#0E382F] text-white text-xs font-medium max-w-sm">
                        "Cook 1800 split Aman Rahul, Wi-Fi 999, Dosa 140"
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="p-3.5 rounded-2xl rounded-tl-xs bg-[#FAF7F0] border border-[#123630]/12 text-xs text-[#123630] font-medium space-y-1.5 max-w-md">
                        <div className="font-bold text-[#047857]">✓ Samjh gaya! 3 entries log ho gayi:</div>
                        <div>1. Cook Didi: ₹1,800 (Aman & Rahul owe you ₹600 each)</div>
                        <div>2. Wi-Fi: ₹999 (Split in 3 equal parts)</div>
                        <div>3. Dosa: ₹140 (Personal Dining)</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: IN INDIA, FINANCE IS NEVER SOLO (THE 3 SACRED SPACES)           */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-[#123630]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Cultural Reality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] font-normal">
              In India, money is never solo.
            </h2>
            <p className="text-sm sm:text-base text-[#2C403B]">
              Salary aayi nahi ki pehle flatmate ka rent share, phir ghar paise bhejne hain, aur jo bacha woh aapka.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Flatmates */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF7F0] border-2 border-[#123630]/15 space-y-5 hover:border-[#FF5C2B] transition-colors flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-[#FF5C2B]/10 border border-[#FF5C2B]/25 flex items-center justify-center text-[#FF5C2B]">
                  <HomeIcon className="size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5C2B] block">
                    Free Splitwise Alternative
                  </span>
                  <h3 className="font-serif text-2xl text-[#123630] font-normal mt-0.5">
                    🏠 Flatmates & Roommates
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52665F] mt-2 leading-relaxed">
                    Cook didi, groceries, maid, Wi-Fi. <strong>Zero paywalls, zero 10-second timers</strong>, and unlimited expenses forever.
                  </p>
                </div>

                {/* Mock Split Bill Card */}
                <div className="p-3.5 rounded-xl bg-white border border-[#123630]/10 text-xs space-y-2">
                  <div className="flex justify-between font-bold text-[#123630]">
                    <span>Flat #402 Shared Pool</span>
                    <span className="text-[#047857]">₹8,400</span>
                  </div>
                  <div className="text-[11px] text-[#52665F]">
                    Rahul owes you ₹2,100 • Aman owes you ₹2,100
                  </div>
                  <div className="pt-2 border-t border-[#123630]/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#123630]">WhatsApp UPI Request:</span>
                    <span className="text-[10px] font-bold text-[#0E382F] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#123630]/15">
                      1-Tap Pay Link
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-[#047857] flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Unlimited users & zero ads forever</span>
              </div>
            </div>

            {/* Card 2: Family */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF7F0] border-2 border-[#123630]/15 space-y-5 hover:border-[#1E40AF] transition-colors flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1E40AF]">
                  <Heart className="size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40AF] block">
                    Farz & Pyaar • Family First
                  </span>
                  <h3 className="font-serif text-2xl text-[#123630] font-normal mt-0.5">
                    👨‍👩‍👧 Family & Parents
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52665F] mt-2 leading-relaxed">
                    Ghar paise bhejna, mummy ki dawai, ya choti behen ki fees. <strong>Tracked with respect</strong>, never marked as "overspending".
                  </p>
                </div>

                {/* Mock Family Card */}
                <div className="p-3.5 rounded-xl bg-white border border-[#123630]/10 text-xs space-y-2">
                  <div className="flex justify-between font-bold text-[#123630]">
                    <span>Monthly Home Transfer</span>
                    <span className="text-[#1E40AF]">₹15,000</span>
                  </div>
                  <div className="text-[11px] text-[#52665F]">
                    Papa's Health Checkup: ₹3,400 (Covered)
                  </div>
                  <div className="pt-2 border-t border-[#123630]/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#047857]">Status:</span>
                    <span className="text-[10px] font-bold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                      Ring-fenced & Safe
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-[#1E40AF] flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Zero guilt alarms for family duties</span>
              </div>
            </div>

            {/* Card 3: Private */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF7F0] border-2 border-[#123630]/15 space-y-5 hover:border-[#0E382F] transition-colors flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-[#0E382F]/10 border border-[#0E382F]/25 flex items-center justify-center text-[#0E382F]">
                  <Lock className="size-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E382F] block">
                    100% Encrypted & Solo
                  </span>
                  <h3 className="font-serif text-2xl text-[#123630] font-normal mt-0.5">
                    🔒 Apna Private Pocket
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52665F] mt-2 leading-relaxed">
                    Salary, stock portfolio, Nifty SIPs, weekend shopping, secret Royal Enfield fund. <strong>Flatmates aur parents ko nahi dikhta.</strong>
                  </p>
                </div>

                {/* Mock Private Card */}
                <div className="p-3.5 rounded-xl bg-white border border-[#123630]/10 text-xs space-y-2">
                  <div className="flex justify-between font-bold text-[#123630]">
                    <span>Personal Wealth Stash</span>
                    <span className="text-[#0E382F]">₹3,42,000</span>
                  </div>
                  <div className="text-[11px] text-[#52665F]">
                    Nifty 50: ₹1.2L • Emergency Reserve: ₹1.8L
                  </div>
                  <div className="pt-2 border-t border-[#123630]/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#0E382F]">Privacy Guard:</span>
                    <span className="text-[10px] font-bold text-[#0E382F] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#123630]/15">
                      Biometric Protected
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-[#0E382F] flex items-center gap-1.5 pt-2">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Zero leakage into shared flatmate tabs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: BUDGET DNA™ — SELF-HEALING BUDGET (JO AAPKO JUDGE NAHI KARTA)  */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#123630]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              No Red Alarms • Zero Guilt
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] font-normal">
              Budget DNA™: Jo aapko judge nahi karta.
            </h2>
            <p className="text-sm sm:text-base text-[#2C403B]">
              Life happens. Saturday night doston ke saath biryani aur drinks pe extra kharch ho gaya? Kubear panic alarm nahi bajata, quietly self-heal karta hai.
            </p>
          </div>

          {/* Interactive Self-Healing Simulator */}
          <div className="mt-10 max-w-2xl mx-auto rounded-3xl bg-white border-2 border-[#123630]/15 p-6 sm:p-8 shadow-xl">
            <div className="border-b border-[#123630]/10 pb-4">
              <span className="text-xs font-bold text-[#52665F] uppercase tracking-wider block">
                Live Simulator:
              </span>
              <h3 className="font-bold text-base sm:text-lg text-[#123630] mt-0.5">
                Saturday Night Extra Spend: <span className="text-[#FF5C2B]">₹{weekendPartySpend.toLocaleString("en-IN")}</span>
              </h3>
              <p className="text-xs text-[#52665F] mt-1">
                Slider ko drag karke dekhiye Kubear kaise mathematically adapt karta hai:
              </p>

              {/* Slider */}
              <input
                type="range"
                min="1000"
                max="6000"
                step="250"
                value={weekendPartySpend}
                onChange={(e) => setWeekendPartySpend(Number(e.target.value))}
                className="w-full mt-4 accent-[#FF5C2B] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#52665F] font-semibold mt-1">
                <span>₹1,000 (Ghar ka khana)</span>
                <span>₹3,500 (Social Dinner)</span>
                <span>₹6,000 (Big Weekend)</span>
              </div>
            </div>

            {/* The Response Comparison */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Old App Reaction */}
              <div className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] space-y-2">
                <span className="text-[11px] font-bold uppercase text-[#DC2626] block">
                  Puraane Apps Ka Reaction:
                </span>
                <div className="text-base font-black text-[#DC2626]">
                  🚨 140% BUDGET EXCEEDED!
                </div>
                <p className="text-xs text-[#7F1D1D] leading-relaxed">
                  Red progress bar, guilty notifications, "You failed this month". User quits the app out of frustration.
                </p>
              </div>

              {/* Kubear Self-Healing Reaction */}
              <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#6EE7B7] space-y-2">
                <span className="text-[11px] font-bold uppercase text-[#047857] block">
                  Kubear Self-Healing:
                </span>
                <div className="text-base font-black text-[#047857]">
                  🌿 Adjusted: ₹{adjustedDailyPace} / day
                </div>
                <p className="text-xs text-[#064E3B] leading-relaxed">
                  "Koi baat nahi! Agle 14 din ke liye daily pace ₹{adjustedDailyPace}/day ho gaya. Rent aur SIP 100% safe hain."
                </p>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-[#FAF7F0] border border-[#123630]/10 text-xs text-[#52665F] flex items-center gap-2">
              <Zap className="size-4 text-[#FF5C2B] shrink-0" />
              <span>
                <strong>Zero Math Homework:</strong> You don't have to adjust spreadsheets. Kubear distributes the variance smoothly.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: THE INDIAN TRUST SHIELD (ZERO SPAM, ZERO SMS SNOOPING)          */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-[#123630]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#047857] px-3 py-1 rounded-full bg-[#ECFDF5] inline-block border border-[#A7F3D0]">
              Fintech Defense
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123630] font-normal">
              In India, your financial privacy is sacred.
            </h2>
            <p className="text-sm sm:text-base text-[#2C403B]">
              Sabko pata hai kya hota hai jab aap kisi app ko bank SMS access dete ho: 4 alag banks se personal loan ke spam calls aane lagte hain.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-[#FAF7F0] border-2 border-[#123630]/12 space-y-3 text-center sm:text-left">
              <div className="size-12 rounded-2xl bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center mx-auto sm:mx-0">
                <Lock className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-[#123630] font-normal">
                No Net-Banking Passwords
              </h3>
              <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed">
                Hum aapse kabhi bhi aapka bank login, net-banking credentials, ya debit card PIN nahi maangte. Zero credential risk.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF7F0] border-2 border-[#123630]/12 space-y-3 text-center sm:text-left">
              <div className="size-12 rounded-2xl bg-[#FF5C2B]/10 text-[#FF5C2B] flex items-center justify-center mx-auto sm:mx-0">
                <Smartphone className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-[#123630] font-normal">
                No SMS / OTP Snooping
              </h3>
              <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed">
                Typical finance apps background mein aapke personal OTPs aur private SMS read karte hain. Kubear uses transparent manual & voice entries.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF7F0] border-2 border-[#123630]/12 space-y-3 text-center sm:text-left">
              <div className="size-12 rounded-2xl bg-[#047857]/10 text-[#047857] flex items-center justify-center mx-auto sm:mx-0">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-[#123630] font-normal">
                Zero Telemarketing Spam
              </h3>
              <p className="text-xs sm:text-sm text-[#52665F] leading-relaxed">
                "Sir, pre-approved loan le lo ₹5,00,000 ka." We never sell your number to NBFCs, credit card brokers, or loan telemarketers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: INDIAN USER FAQS                                                */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FAF7F0] border-b border-[#123630]/12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CD4623] px-3 py-1 rounded-full bg-[#FF5C2B]/10 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Aapke Sawaal, Hamare Saaf Jawab
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Kya yeh sach mein 100% free hai ya Splitwise ki tarah baad mein paywall aayega?",
                a: "Kubear ka core ledger, shared flatmate splits, and basic wealth tracking 100% free hain. Hum Splitwise ki tarah 3 expense ke baad timer ya countdown nahi lagate. Flatmate hisaab hamesha free rahega.",
              },
              {
                q: "Kya mujhe apna bank password ya OTP enter karna hoga?",
                a: "Bilkul nahi! Kubear aapse kabhi bhi bank password ya net-banking login nahi maangta. Aap voice note, screenshot, ya WhatsApp-style text se transaction log karte hain.",
              },
              {
                q: "Kya mere flatmate meri salary ya mutual fund investments dekh sakte hain?",
                a: "Nahi! Aapka 'Apna Private Pocket' 100% encrypted aur alag hai. Flatmate space mein sirf wahi hisaab dikhta hai jo aap shared flat mein add karte ho (jaise Cook didi, Wi-Fi, ya Groceries).",
              },
              {
                q: "Main voice note Hinglish mein bol sakta hoon?",
                a: "Haan! Kubear natural Indian speech samajhta hai. Chahe aap bolo 'Auto wale ko 70 diya' ya 'Indiranagar dinner split with Rahul' — Kubear accurately categorize kar lega.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#123630]/12 p-4 sm:p-5 transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm sm:text-base font-bold text-[#123630]">
                    {faq.q}
                  </h4>
                  <ChevronDown
                    className={`size-4 text-[#52665F] shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#FF5C2B]" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <p className="mt-3 pt-3 border-t border-[#123630]/10 text-xs sm:text-sm text-[#52665F] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION (START IN 30 SECONDS)                                 */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0E382F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F0_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#A7F3D0] text-xs font-bold border border-white/15">
            <Zap className="size-3.5 text-[#FF5C2B]" /> 30 Seconds Setup • Zero Data Scraping
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            Stop guessing your bank balance. <br />
            <span className="italic text-[#FF5C2B]">Start your clear money life today.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7F3D0]/80 max-w-xl mx-auto leading-relaxed">
            No bank passwords. No SMS snooping. Just clean, calm clarity on what you can afford and when to treat yourself.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setModalMode("auth");
                setIsAuthModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF5C2B] hover:bg-[#E8501E] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <span>Open Free Ledger</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
            >
              <Smartphone className="size-4 text-[#34D399]" />
              <span>Get Android App</span>
            </a>
          </div>

          <p className="text-[11px] text-[#A7F3D0]/60 pt-2">
            100% Free Ledger for Life • Splitwise Alternative with Unlimited Splits
          </p>
        </div>
      </section>

      {/* Auth Modal Trigger */}
      <FirstFactAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={modalMode}
      />
    </SiteLayout>
  );
}
