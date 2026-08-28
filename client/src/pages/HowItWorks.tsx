/* How Kubear Works & Your Complete Money View: Unified single-destination guide and interactive experience with warm light editorial aesthetic */
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock,
  Coffee,
  Coins,
  Eye,
  FileText,
  HelpCircle,
  Home as HomeIcon,
  Landmark,
  Layers,
  Lock,
  LockKeyhole,
  MessageSquare,
  Palmtree,
  Play,
  Receipt,
  RotateCcw,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  TrendingUp,
  UploadCloud,
  Users,
  UsersRound,
  Utensils,
  Wallet,
  WalletCards,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { HowItWorksInteractiveSandbox } from "@/components/HowItWorksInteractiveSandbox";
import { MoneyViewSnapshot } from "@/components/TactileMoneyInstruments";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear";

const moneyViewDimensions = [
  {
    icon: Landmark,
    number: "01",
    tag: "Your Real Balance",
    title: "See what you really have",
    body: "Your bank balance is just a raw number. Kubear connects it with your actual commitments so you see what is genuinely available rather than a false sense of surplus.",
    badge: "Available vs Committed",
  },
  {
    icon: CalendarClock,
    number: "02",
    tag: "Coming Up",
    title: "See what is due next",
    body: "House rent, SIP investments, electricity, credit card bills, and family support are locked upfront on the 1st of the month before they collide with everyday spending.",
    badge: "Upfront Protection",
  },
  {
    icon: WalletCards,
    number: "03",
    tag: "Safe Daily Runway",
    title: "Know what you can spend today",
    body: "After locking your fixed bills and savings goals, Kubear calculates your safe daily and weekly allowance (e.g. ₹550/day) so you spend completely guilt-free.",
    badge: "Guilt-Free Buffer",
  },
  {
    icon: MessageSquare,
    number: "04",
    tag: "5-Second Capture",
    title: "Log naturally via chat & bill photo",
    body: "No painful 6-field forms or bank OTP delays. Type naturally ('Paid ₹40 auto to metro') or snap a paper restaurant receipt. Our fast OCR handles itemization in 2 seconds.",
    badge: "Natural Chat + OCR",
  },
  {
    icon: UsersRound,
    number: "05",
    tag: "Two Tables Architecture",
    title: "Keep home shared, personal private",
    body: "Shared flatmate costs (Cook Aunty salary, Blinkit groceries, Airtel WiFi) live on the shared house table. Your personal clothes shopping, dates, and coffee remain 100% private.",
    badge: "Selective Sharing",
  },
];

const lifecycleSteps = [
  {
    number: "01",
    phase: "Capture",
    title: "Log in 5 seconds via chat or photo",
    subtitle: "Chai, Auto, Dinner, DMart Bills",
    description:
      "Type naturally in Hinglish or English like 'Paid ₹40 auto to metro' or snap a photo of your restaurant receipt. Kubear automatically tags the category and calculates your remaining daily buffer.",
    badge: "Natural Chat + OCR",
    badgeColor: "text-[#D44722] bg-[#FFF2EC] border border-[#FED7AA]",
    points: [
      "No tedious dropdowns or bank login steps",
      "Itemized receipt parsing in under 2 seconds",
      "Instant feedback on remaining daily allowance",
    ],
  },
  {
    number: "02",
    phase: "Allocate",
    title: "Lock upfront commitments on salary day",
    subtitle: "Rent, SIPs, Parents, Bills",
    description:
      "On the 1st of the month, give every rupee a job before you spend. Lock house rent, SIP investments, family support, and your Goa trip fund upfront. Whatever remains is 100% guilt-free.",
    badge: "1st of Month Routine",
    badgeColor: "text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A]",
    points: [
      "Rent and fixed bills never collide with daily fun",
      "Clear daily target (e.g. ₹550/day) prevents month-end crunch",
      "Automated peace of mind without complex spreadsheets",
    ],
  },
  {
    number: "03",
    phase: "Split",
    title: "Split home costs with Two Tables",
    subtitle: "Flatmates & Household vs Private Spends",
    description:
      "Coordinate shared expenses like Cook Aunty salary, Blinkit pantry staples, and Airtel WiFi on the shared table. Your personal clothes shopping, dates, and coffee remain 100% private to you.",
    badge: "Money Spaces",
    badgeColor: "text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE]",
    points: [
      "Zero awkward roommate math at month-end",
      "Selective sharing — personal items never appear on the home board",
      "Instant 50/50 or custom percentage settlement summary",
    ],
  },
  {
    number: "04",
    phase: "Track",
    title: "Keep Goa and long-term plans in view",
    subtitle: "Visual Goal Runway",
    description:
      "Goals do not need to fight against daily life. Place upcoming vacations, gadget upgrades, or emergency funds on the same timeline with your monthly commitments and watch progress compound.",
    badge: "Goal Runway",
    badgeColor: "text-[#047857] bg-[#ECFDF5] border border-[#A7F3D0]",
    points: [
      "Visual runway keeps target dates realistic",
      "Month-by-month progress bars without aggressive lock-in",
      "Always know how much runway is left before the trip",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Input Method",
    traditional: "Intrusive SMS scraping or 6-field tedious forms",
    kubear: "Fast natural chat ('Chai ₹30') or bill photo snapshot",
  },
  {
    feature: "Bank Sync & Logins",
    traditional: "Requires Netbanking passwords, OTPs & AA scrapers",
    kubear: "Zero bank login, zero SMS read permissions",
  },
  {
    feature: "Money Clarity & Story",
    traditional: "Raw bank balance with no context on upcoming bills",
    kubear: "Connected view: balance, due bills, daily buffer & goals",
  },
  {
    feature: "Shared Expenses",
    traditional: "Separate split apps where history gets messy & public",
    kubear: "Two Tables: Home split sits beside private spends",
  },
  {
    feature: "Salary Planning",
    traditional: "Post-facto pie charts showing where money vanished",
    kubear: "Upfront job allocation (Rent, SIP, Goa) on day 1",
  },
  {
    feature: "Privacy & Ads",
    traditional: "Sells lending offers, credit cards & loan spam",
    kubear: "100% private ledger. Zero ads, zero spam calls",
  },
];

const howFaq = [
  {
    q: "Why doesn't Kubear automatically read my SMS or connect to my bank?",
    a: "Automated SMS scraping and bank aggregator APIs require massive privacy compromises, frequently miscategorize transfers (like moving ₹10,000 between your own accounts being counted as 'income'), and expose your financial data to third-party scrapers. Kubear puts you in complete control: logging takes literally 5 seconds via chat, so your ledger is 100% accurate, private, and intentional.",
  },
  {
    q: "How does the Money View differ from a regular bank balance?",
    a: "A bank balance is just a static number — it doesn't know you have ₹14,000 rent due this Friday, a ₹5,000 SIP next Tuesday, or a shared flatmate grocery split. Kubear's unified Money View connects what you have with what is already committed, giving you an exact, safe-to-spend daily allowance.",
  },
  {
    q: "How does the receipt photo upload work?",
    a: "Whenever you get a paper bill (from a restaurant, supermarket, or medical store), tap the camera icon in Kubear. Our secure OCR instantly reads the items, detects the total amount, and categorizes it. You can review and confirm with one tap.",
  },
  {
    q: "How do Money Spaces work for flatmates or couples?",
    a: "Money Spaces gives you 'Two Tables'. You invite your flatmate or partner to a shared Space. Any entry you mark as shared (like Rent, Cook salary, WiFi) appears on both screens with split balances. Any entry you mark as private remains completely invisible to the other person.",
  },
  {
    q: "Can Kubear move my money or trigger UPI transfers?",
    a: "Never. Kubear is strictly a manual recording, planning, and clarity tool. It does not hold funds, cannot initiate UPI transactions, and has zero access to your bank balance.",
  },
  {
    q: "Can I export or delete my data whenever I want?",
    a: "Yes. You have complete ownership. You can export your entire financial history to CSV or permanently delete your account and all records with a single click in Settings.",
  },
];

export default function HowItWorks() {
  return (
    <SiteLayout>
      <PageMeta
        title="How Kubear Works & Your Money View | One Unified Picture"
        description="Learn how Kubear gives you calm control over every rupee: fast natural chat, bill photo capture, upfront salary allocation, two-table flatmate splits, and a clear money view without bank passwords."
        path="/how-it-works"
      />

      {/* 1. Hero Header: The Unified Living Ledger & Money View */}
      <section className="relative overflow-hidden bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 pb-20 pt-16 text-[#123630] sm:px-8 sm:pt-24 lg:px-12 lg:pb-28">
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#DECBB5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1280px] relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DEC69A] bg-[#FFF5E6] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D44722]">
            <Sparkles className="size-3.5 text-[#D44722]" />
            The Complete Living Ledger &amp; Money View
          </div>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div data-reveal>
              <h1 className="font-serif text-4xl font-normal leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl text-[#123630]">
                Your balance is one number.{" "}
                <em className="italic text-[#D44722] font-serif">Your money has a story.</em>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#5A6E69] max-w-xl">
                A bank balance doesn&apos;t tell you about rent due Friday, your SIP, flatmate grocery splits, or your Goa trip fund. Kubear unifies your entire money picture through fast natural chat, photo receipts, and upfront salary allocation — with zero bank logins and zero SMS snooping.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#123630] px-6 text-sm font-extrabold text-[#FFFDF8] shadow-md hover:bg-[#D44722] transition-all cursor-pointer"
                  href={APP_URL}
                >
                  Try Kubear Web App <ArrowUpRight className="size-4" />
                </a>
                <a
                  className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-[#D4CCC0] bg-[#FFFDF8] px-6 text-sm font-extrabold text-[#123630] hover:border-[#123630] hover:bg-[#F6F2EA] transition-all cursor-pointer"
                  href={PLAY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Android App <Play className="size-3.5 fill-[#123630]" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-bold text-[#5A6E69]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-emerald-700" />
                  <span>Zero Bank Scraping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="size-4 text-[#D44722]" />
                  <span>5-Second Fast Logging</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LockKeyhole className="size-4 text-emerald-700" />
                  <span>100% Private Ledger</span>
                </div>
              </div>
            </div>

            {/* Tactile Money View Snapshot */}
            <div data-reveal className="w-full">
              <MoneyViewSnapshot />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 5-Dimension Money View Framework */}
      <section className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl mb-14" data-reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              The 5 Lenses of Clarity
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#123630] font-normal">
              Five questions your money view answers in seconds.
            </h2>
            <p className="mt-4 text-base text-[#5A6E69]">
              Instead of switching between three banking apps, a shared expense tracker, and a chaotic notes app, Kubear brings every dimension of your money week into one clear, tactile view.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moneyViewDimensions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-reveal
                  className={`flex flex-col justify-between rounded-3xl border border-[#E5DFD4] bg-[#FAF7F0] p-6.5 transition-all hover:border-[#D4CCC0] hover:shadow-md ${
                    idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-[#FFF2EC] text-[#D44722] border border-[#FED7AA]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-xs font-extrabold text-[#839791]">
                        {item.number}
                      </span>
                    </div>

                    <span className="mt-4 inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-[#D44722]">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-normal text-[#123630]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A6E69]">
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#E8E1D5] pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFDF8] border border-[#E5DFD4] px-3 py-1 font-mono text-[11px] font-bold text-[#123630]">
                      <Check className="size-3 text-emerald-700" />
                      {item.badge}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Experience Simulator */}
      <section className="bg-[#FAF7F0] border-b border-[#E8E1D5] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Interactive Sandbox
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Experience the 4 pillars firsthand.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A6E69]">
              Click between the simulator tabs below to see how easy it is to chat, scan bills, allocate salary, and split flatmate rent.
            </p>
          </div>

          <HowItWorksInteractiveSandbox />
        </div>
      </section>

      {/* 4. Deep Dive: The 4 Operational Steps in Detail */}
      <section className="bg-[#FFFDF8] border-b border-[#E8E1D5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl mb-16" data-reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Step-by-step Routine
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#123630] font-normal">
              Designed specifically for how money moves in India.
            </h2>
            <p className="mt-4 text-base text-[#5A6E69]">
              We stripped away everything that makes traditional personal finance stressful — SMS background snooping, annoying loan notifications, and endless forms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {lifecycleSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-3xl border border-[#E5DFD4] bg-[#FAF7F0] p-7 shadow-sm transition-all hover:shadow-md hover:border-[#D4CCC0]"
                data-reveal
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-normal text-[#123630]/30">
                      {step.number}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs font-extrabold ${step.badgeColor}`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-normal text-[#123630]">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-bold text-[#D44722] uppercase tracking-wider">
                    {step.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#5A6E69]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E8E1D5] pt-4">
                  <div className="space-y-2.5 text-xs font-bold text-[#123630]">
                    {step.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="size-3.5 text-[#D44722] flex-none" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Comparison: Why Kubear Rejects Bank Aggregators */}
      <section className="bg-[#FAF7F0] px-5 py-20 text-[#123630] sm:px-8 lg:px-12 lg:py-28 border-b border-[#E8E1D5]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Direct Comparison
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Why Kubear rejects automated bank sync.
            </h2>
            <p className="mt-3 text-sm text-[#5A6E69]">
              Bank scraping apps sell loans and miscalculate your transfers. Here is how Kubear is built differently.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#E5DFD4] bg-[#FFFDF8] shadow-lg" data-reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#E8E1D5] bg-[#F6F2EA] p-4.5 font-mono text-xs font-bold uppercase tracking-wider text-[#123630]">
              <div>Dimension</div>
              <div className="hidden md:block text-[#991B1B]">Automated Sync / SMS Apps</div>
              <div className="hidden md:block text-[#065F46]">Kubear Living Ledger</div>
            </div>

            <div className="divide-y divide-[#E8E1D5] text-xs sm:text-sm bg-white">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-5 hover:bg-[#FAF7F0] transition-colors"
                >
                  <div className="font-bold text-[#123630]">{row.feature}</div>
                  <div className="text-[#6B7280]">
                    <span className="md:hidden font-mono text-[10px] uppercase text-[#991B1B] block mb-1 font-bold">
                      Traditional:
                    </span>
                    {row.traditional}
                  </div>
                  <div className="font-semibold text-[#065F46]">
                    <span className="md:hidden font-mono text-[10px] uppercase text-[#065F46] block mb-1 font-bold">
                      Kubear:
                    </span>
                    <strong className="text-[#065F46]">{row.kubear}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="bg-[#FFFDF8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 border-b border-[#E8E1D5]">
        <div className="mx-auto max-w-[1280px] grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#D44722]">
              Clarity &amp; Security
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#123630] font-normal">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6E69]">
              Have questions about data privacy, OCR extraction, Money Spaces, or how your money view is calculated? Here is everything you need to know.
            </p>
            <div className="mt-8 rounded-2xl bg-[#FFF5E6] border border-[#E8D3B5] p-5 text-xs text-[#123630]">
              <div className="flex items-center gap-2 font-bold text-[#D44722]">
                <ShieldCheck className="size-4 text-[#D44722]" />
                <span>Zero Sales Pitch Promise</span>
              </div>
              <p className="mt-2 text-[#5A6E69] leading-relaxed">
                Kubear is built to help you see clearly. We will never sell your data, partner with credit card issuers, or push personal loans on your dashboard.
              </p>
            </div>
          </div>

          <div data-reveal>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {howFaq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-2xl border border-[#E5DFD4] bg-[#FAF7F0] px-5 shadow-xs"
                >
                  <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-normal text-[#123630] hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm leading-relaxed text-[#5A6E69] pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 7. CTA Footer: Warm Tactile Apricot & Linen Card */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5ED] via-[#FDF8F2] to-[#FFF0E6] px-5 py-20 text-[#123630] sm:px-8 lg:px-12 text-center">
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#D44722_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-3xl relative z-10" data-reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0E6] border border-[#FCD34D]/80 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">
            <Sparkles className="size-3.5 text-[#D44722]" /> Start in 10 seconds
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-6xl text-[#123630] font-normal leading-[1.05] tracking-tight">
            Ready for a calm, clear money picture?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A6E69] max-w-xl mx-auto">
            Log your next chai or Swiggy dinner in 5 seconds. Available instantly on web and Android.
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

          <p className="mt-6 text-xs font-bold text-[#839791]">
            No bank connection required • 100% free &amp; private
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
