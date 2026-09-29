import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  PieChart,
  Shield,
  Target,
  Users,
  Wallet,
  Activity,
  MessageSquare,
  Mic,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Building2,
  Maximize2
} from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/SiteChrome";
import { PageMeta } from "@/components/PageMeta";
import { APP_URL, PLAY_URL } from "@/const";

interface ProductScreenshotMockupProps {
  src: string;
  alt: string;
  caption: string;
  viewMode?: "device" | "clean";
  dominant?: boolean;
}

function ProductScreenshotMockup({
  src,
  alt,
  caption,
  viewMode = "device",
  dominant = false,
}: ProductScreenshotMockupProps) {
  const maxW = dominant ? "max-w-[380px] sm:max-w-[430px]" : "max-w-[320px] sm:max-w-[360px]";

  if (viewMode === "clean") {
    return (
      <div className={`relative w-full ${maxW} mx-auto group transition-all duration-300`}>
        {/* Soft Ambient Shadow Aura */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#047857]/12 via-[#EA580C]/8 to-amber-500/10 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all" />

        {/* Clean Frameless Floating Card */}
        <div className="relative rounded-[28px] overflow-hidden bg-white p-1.5 border border-[#E8DEC8] shadow-[0_20px_50px_-12px_rgba(18,54,48,0.18),0_6px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_28px_65px_-12px_rgba(18,54,48,0.22)] transition-all">
          <div className="rounded-[22px] overflow-hidden bg-[#FAF7F0]">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Refined External Pill Badge */}
        <div className="mt-4 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8DEC8] shadow-xs text-xs font-semibold text-[#0E241E]">
            <span className="size-2 rounded-full bg-[#047857] animate-pulse shrink-0" />
            <span>{caption}</span>
          </span>
        </div>
      </div>
    );
  }

  // Modern Smartphone Frame
  return (
    <div className={`relative w-full ${maxW} mx-auto group transition-all duration-300`}>
      {/* Ambient colored backdrop glow */}
      <div className="absolute -inset-5 bg-gradient-to-tr from-[#047857]/15 via-emerald-600/10 to-amber-500/10 rounded-[50px] blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />

      {/* Realistic Titanium Phone Chassis */}
      <div className="relative rounded-[40px] sm:rounded-[46px] p-2 sm:p-2.5 bg-gradient-to-b from-[#2A332F] via-[#161D1A] to-[#0D1210] shadow-[0_28px_70px_-15px_rgba(18,54,48,0.28),0_10px_24px_-6px_rgba(0,0,0,0.12)] border border-[#3B4842]/70 ring-1 ring-black/40">
        
        {/* Subtle hardware side buttons */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-7 bg-[#3B4842] rounded-l-xs" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-11 bg-[#3B4842] rounded-l-xs" />
        <div className="absolute -left-[3px] top-48 w-[3px] h-11 bg-[#3B4842] rounded-l-xs" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#3B4842] rounded-r-xs" />

        {/* Inner Phone Screen */}
        <div className="relative rounded-[32px] sm:rounded-[38px] overflow-hidden bg-[#FAF7F0] ring-1 ring-black/15">
          {/* Subtle Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/95 rounded-full z-20 flex items-center justify-end pr-2.5 pointer-events-none shadow-xs">
            <span className="size-1.5 rounded-full bg-[#182633] ring-1 ring-sky-500/25" />
          </div>

          {/* Screenshot Image Edge-to-Edge */}
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block select-none"
            loading="lazy"
          />

          {/* Glass reflection sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] rounded-[32px] sm:rounded-[38px]" />
        </div>
      </div>

      {/* External Badge Below Device */}
      <div className="mt-5 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E8DEC8] shadow-xs text-xs font-semibold text-[#0E241E]">
          <span className="size-2 rounded-full bg-[#047857] animate-pulse shrink-0" />
          <span>{caption}</span>
        </span>
      </div>
    </div>
  );
}

export default function Product() {
  const [viewMode, setViewMode] = useState<"device" | "clean">("device");
  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Product | Clear, Connected Personal Finance"
        description="See what Kubear does: connect your income, bills, EMIs, savings, investments and life goals in one simple picture so you always know where you stand."
        path="/product"
      />

      <div className="bg-[#FAF7F0] text-[#123630] selection:bg-[#EA580C]/20">
        
        {/* =================================================================== */}
        {/* HERO SECTION: SIMPLE & DIRECT                                       */}
        {/* =================================================================== */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E8DEC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DEC8] shadow-xs mb-6 font-mono">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                KUBEAR
              </span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
                <span className="size-1.5 rounded-full bg-[#047857] animate-pulse" />
                Available on Web &amp; Android
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0E241E] leading-[1.14]">
              Your financial life, all in one place.
            </h1>

            {/* Crystal-Clear Supporting Copy */}
            <p className="mt-5 text-lg sm:text-2xl font-serif text-[#42564F] max-w-3xl mx-auto leading-relaxed">
              Most money apps only look backward at what you already spent. Kubear brings together your income, upcoming bills, EMIs, savings, investments, and life goals — so you always know where you stand today and what you can afford next.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF5C2B] to-[#FF451A] hover:from-[#F04D1D] hover:to-[#E03A10] text-white font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(255,92,43,0.35)] hover:shadow-[0_6px_20px_rgba(255,92,43,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <span>Try Kubear Free</span>
                <span className="text-lg leading-none">→</span>
              </a>

              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#F3EADA] border border-[#E8DEC8] text-[#0E241E] font-bold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all duration-150"
              >
                <Smartphone className="size-4 text-[#EA580C]" />
                <span>Get on Google Play</span>
                <ArrowUpRight className="size-4 text-slate-400" />
              </a>
            </div>

          </div>
        </section>

        {/* =================================================================== */}
        {/* REAL PRODUCT SHOWCASE: SCREEN 1 (EVERYDAY MONEY)                    */}
        {/* =================================================================== */}
        <section className="py-16 sm:py-24 border-b border-[#E8DEC8] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-[#E8DEC8]/70 mb-12 sm:mb-16">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-[#047857] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0E241E]">
                  ACTUAL APP SCREENS · LIVE IN PRODUCTION
                </span>
              </div>

              <div className="inline-flex items-center p-1 rounded-full bg-[#F5EDE1] border border-[#E0D4C0]">
                <button
                  type="button"
                  onClick={() => setViewMode("device")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    viewMode === "device"
                      ? "bg-white text-[#0E241E] shadow-xs"
                      : "text-[#556963] hover:text-[#0E241E]"
                  }`}
                >
                  <Smartphone className="size-3.5" />
                  <span>Phone Frame</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("clean")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    viewMode === "clean"
                      ? "bg-white text-[#0E241E] shadow-xs"
                      : "text-[#556963] hover:text-[#0E241E]"
                  }`}
                >
                  <Maximize2 className="size-3.5" />
                  <span>Clean View</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Copy Side */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  01 · DAILY PEACE OF MIND
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E241E] tracking-tight leading-[1.15]">
                  Start with what matters today.
                </h2>
                <p className="text-base sm:text-lg text-[#42564F] leading-relaxed pt-2">
                  No more digging through multiple bank apps or updating spreadsheets. In just 10 seconds, Kubear gives you a clear snapshot of your money right now.
                </p>

                {/* Highlight Points in Plain English */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E8DEC8]">
                    <div className="size-9 rounded-xl bg-orange-100/80 flex items-center justify-center shrink-0 text-[#EA580C] mt-0.5">
                      <Activity className="size-4.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0E241E] block">10-Second Daily Check</span>
                      <span className="text-xs sm:text-sm text-[#556963] leading-relaxed mt-0.5 block">
                        See your available cash, your safe daily spending pace, and any upcoming bills due in the next 5 days.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E8DEC8]">
                    <div className="size-9 rounded-xl bg-emerald-100/80 flex items-center justify-center shrink-0 text-[#047857] mt-0.5">
                      <Wallet className="size-4.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0E241E] block">Syncs with Your Payday</span>
                      <span className="text-xs sm:text-sm text-[#556963] leading-relaxed mt-0.5 block">
                        Calculates your budget based on when your salary actually lands, not just artificial calendar months.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Device Frame with Actual Software Screen 1 */}
              <div className="lg:col-span-6 flex justify-center">
                <ProductScreenshotMockup
                  src="/screenshots/kubear_everyday_money.png"
                  alt="Kubear app screen showing 10-second pulse, liquid cash, safe pace, and monthly cycle"
                  caption="Everyday Review · 10-Second Pulse"
                  viewMode={viewMode}
                />
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* REAL PRODUCT SHOWCASE: SCREEN 2 (COMPLETE MONEY PICTURE)            */}
        {/* =================================================================== */}
        <section className="py-18 sm:py-28 border-b border-[#E8DEC8] bg-[#FAF5EC] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header intro */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                02 · THE COMPLETE PICTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E241E] tracking-tight leading-[1.14] mt-2">
                See everything connected, not in silos.
              </h2>
              <p className="mt-4 text-base sm:text-xl font-serif text-[#42564F] leading-relaxed">
                Your income, investments, EMIs, and savings all affect each other. Kubear connects them into one clear picture, so every financial decision makes sense.
              </p>
            </div>

            {/* Prominent Showcase Presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Left Column: Key Features in Clear Language */}
              <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
                <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                    <span className="size-2 rounded-full bg-[#047857]" />
                    All Accounts in One View
                  </div>
                  <p className="text-xs sm:text-sm text-[#556963] mt-1.5 leading-relaxed">
                    A calm dashboard showing your bank balances, active investments, and upcoming dues without switching apps.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                    <span className="size-2 rounded-full bg-[#EA580C]" />
                    Organized Navigation
                  </div>
                  <p className="text-xs sm:text-sm text-[#556963] mt-1.5 leading-relaxed">
                    Easily flip between your daily <strong>Cashflow</strong>, your long-term <strong>Wealth</strong>, emergency <strong>Protection</strong>, and your life <strong>Goals</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                    <span className="size-2 rounded-full bg-[#2563EB]" />
                    Emergency Runway
                  </div>
                  <p className="text-xs sm:text-sm text-[#556963] mt-1.5 leading-relaxed">
                    Instantly see how many months your household can live comfortably if income stops tomorrow.
                  </p>
                </div>
              </div>

              {/* Center / Dominant Screenshot Device Frame */}
              <div className="lg:col-span-8 flex justify-center order-1 lg:order-2">
                <ProductScreenshotMockup
                  src="/screenshots/kubear_complete_picture.png"
                  alt="Kubear app screen displaying Your recorded money together, Overview, Cashflow, Wealth, Protect, Goals, and Khazana"
                  caption="Living Ledger · Connected Financial View"
                  viewMode={viewMode}
                  dominant
                />
              </div>

            </div>

          </div>
        </section>

        {/* =================================================================== */}
        {/* REAL PRODUCT SHOWCASE: SCREEN 3 (EFFORTLESS INPUT / VOICE)          */}
        {/* =================================================================== */}
        <section className="py-16 sm:py-24 border-b border-[#E8DEC8] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Minimal Device Frame with Voice Input Screenshot */}
              <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                <ProductScreenshotMockup
                  src="/screenshots/kubear_voice_input.png"
                  alt="Kubear Voice input modal showing browser speech input and review before logging"
                  caption="Natural Input · Speech & Chat Recording"
                  viewMode={viewMode}
                />
              </div>

              {/* Copy Side */}
              <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  03 · QUICK &amp; EASY LOGGING
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E241E] tracking-tight leading-[1.15]">
                  Just speak or type. No spreadsheets.
                </h2>
                <p className="text-base sm:text-lg text-[#42564F] leading-relaxed pt-2">
                  Keeping track of money shouldn&apos;t feel like homework. Just tell Kubear what happened, review it on screen, and confirm.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E8DEC8]">
                    <div className="size-9 rounded-xl bg-orange-100/80 flex items-center justify-center shrink-0 text-[#EA580C] mt-0.5">
                      <Mic className="size-4.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0E241E] block">Speak Naturally</span>
                      <span className="text-xs sm:text-sm text-[#556963] leading-relaxed mt-0.5 block">
                        Tap the mic and say: &ldquo;Spent ₹1,400 on dinner at Swiggy.&rdquo; Kubear prepares the entry so you can review before anything is saved.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E8DEC8]">
                    <div className="size-9 rounded-xl bg-emerald-100/80 flex items-center justify-center shrink-0 text-[#047857] mt-0.5">
                      <MessageSquare className="size-4.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0E241E] block">No Manual Data Entry</span>
                      <span className="text-xs sm:text-sm text-[#556963] leading-relaxed mt-0.5 block">
                        No uploading bank statements, no broken SMS parsers, and no sorting through 50 confusing expense categories.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* WHAT KUBEAR CONNECTS (5 SIMPLE AREAS)                               */}
        {/* =================================================================== */}
        <section className="py-16 sm:py-24 border-b border-[#E8DEC8] bg-[#FAF7F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                THE 5 AREAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E241E] tracking-tight leading-[1.15] mt-2">
                One life. Five connected areas.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42564F]">
                Instead of using five different apps, Kubear connects the five core pillars of your money:
              </p>
            </div>

            {/* 5 Clear Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              
              {/* Area 1: Cashflow */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-xl bg-[#E6F4EA] flex items-center justify-center text-[#047857] mb-3 font-bold">
                    <TrendingUp className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E241E]">Cash Flow</h3>
                  <p className="text-xs text-[#556963] mt-2 leading-relaxed">
                    What you earn, what you spend, and upcoming bills.
                  </p>
                </div>
              </div>

              {/* Area 2: Wealth */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] mb-3 font-bold">
                    <PieChart className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E241E]">Wealth</h3>
                  <p className="text-xs text-[#556963] mt-2 leading-relaxed">
                    Savings, mutual funds, and investments in one place.
                  </p>
                </div>
              </div>

              {/* Area 3: Protect */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-[#B45309] mb-3 font-bold">
                    <Shield className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E241E]">Protection</h3>
                  <p className="text-xs text-[#556963] mt-2 leading-relaxed">
                    Emergency funds and insurances to keep you secure.
                  </p>
                </div>
              </div>

              {/* Area 4: Goals */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-xl bg-[#FAF5FF] flex items-center justify-center text-[#9333EA] mb-3 font-bold">
                    <Target className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E241E]">Goals</h3>
                  <p className="text-xs text-[#556963] mt-2 leading-relaxed">
                    See how today&apos;s spending affects the big things you&apos;re saving for.
                  </p>
                </div>
              </div>

              {/* Area 5: Household */}
              <div className="p-5 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C] mb-3 font-bold">
                    <Users className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E241E]">Family &amp; Home</h3>
                  <p className="text-xs text-[#556963] mt-2 leading-relaxed">
                    Manage shared household expenses without confusing personal money.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* THE CORE IDEA: WHY CONNECTION MATTERS                                */}
        {/* =================================================================== */}
        <section className="py-16 sm:py-24 border-b border-[#E8DEC8] bg-[#0E241E] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7A51]">
              WHY THIS MATTERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-[#FFF8EE] leading-[1.18]">
              Money decisions never happen in isolation.
            </h2>

            {/* Clear ripple connection sequence */}
            <div className="mt-10 max-w-2xl mx-auto space-y-4 text-left font-serif text-lg sm:text-2xl text-[#E2EBE7]">
              <div className="p-4.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                <span className="size-2 rounded-full bg-[#FF7A51] shrink-0" />
                <span>A new loan EMI reduces what you can safely spend today.</span>
              </div>
              <div className="p-4.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                <span className="size-2 rounded-full bg-[#FF7A51] shrink-0" />
                <span>A salary raise increases how much you can invest each month.</span>
              </div>
              <div className="p-4.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                <span className="size-2 rounded-full bg-[#FF7A51] shrink-0" />
                <span>An unexpected car repair delays a planned holiday goal.</span>
              </div>
            </div>

            <p className="mt-8 text-lg sm:text-xl font-sans text-emerald-200/90 font-medium">
              Kubear connects all of them automatically — so your money always makes sense.
            </p>
          </div>
        </section>

        {/* =================================================================== */}
        {/* PRODUCT STATUS: LIVE & VERIFIED                                     */}
        {/* =================================================================== */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8] bg-[#F7F2E7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2D6C0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                    PRODUCT STATUS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6F4EA] text-[#047857] border border-[#CEEAD6]">
                    <span className="size-1.5 rounded-full bg-[#047857] animate-pulse" />
                    Live &amp; Active
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Platform: Web + Android
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E241E] mt-3 tracking-tight">
                  Start using Kubear today.
                </h2>
                
                <p className="mt-3 text-sm sm:text-base text-[#42564F] leading-relaxed">
                  Kubear is available right now on the web and on Android through Google Play. Create your account in under a minute and get instant clarity on your money.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E241E] hover:bg-[#1C3B33] text-white font-bold text-sm shadow-xs transition-colors whitespace-nowrap"
                >
                  <Globe className="size-4" />
                  <span>Open Web App</span>
                  <ArrowRight className="size-4" />
                </a>
                
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F3EADA] border border-[#E8DEC8] text-[#0E241E] font-bold text-sm shadow-xs transition-colors whitespace-nowrap"
                >
                  <Smartphone className="size-4 text-[#EA580C]" />
                  <span>Google Play</span>
                  <ArrowUpRight className="size-4 text-slate-400" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* BUILT BY KUBEROS INNOVATIONS                                        */}
        {/* =================================================================== */}
        <section className="py-14 sm:py-18 bg-[#FAF7F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
              THE TEAM BEHIND KUBEAR
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E241E] mt-2">
              Built by Kuberos Innovations Private Limited
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#42564F] max-w-xl mx-auto leading-relaxed">
              Kubear is designed and operated by Kuberos Innovations, an Indian technology company headquartered in Surat, Gujarat.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#047857] hover:text-[#03543d] hover:underline transition-colors"
              >
                <span>Read Our Story</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
