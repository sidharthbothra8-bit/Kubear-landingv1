/* Money Moment library: each selector reveals its own code-built tactile scene, never a broken link or generic placeholder. */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  CreditCard,
  Eye,
  FileCheck,
  Home,
  Landmark,
  Lock,
  LockKeyhole,
  MapPin,
  Palmtree,
  PiggyBank,
  Plane,
  Receipt,
  ReceiptText,
  ScanLine,
  Shield,
  ShieldCheck,
  Sparkles,
  Split,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
  WalletCards,
} from "lucide-react";
import { useState } from "react";

export const APP_URL = "https://kubear.kuberos.in";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const moments = [
  {
    id: "salary",
    label: "Salary day",
    detail: "Give rent, bills, your buffer and a plan one clear place before the month gets busy.",
    icon: WalletCards,
  },
  {
    id: "upi",
    label: "UPI week",
    detail: "Chai, metro, food and small spends are normal. Seeing them together helps.",
    icon: Sparkles,
  },
  {
    id: "rent",
    label: "Rent due",
    detail: "Put the big dates where you can see them before they become a last-minute worry.",
    icon: ReceiptText,
  },
  {
    id: "goa",
    label: "Goa plan",
    detail: "A good plan belongs beside the bills. It does not need to fight the whole month.",
    icon: MapPin,
  },
  {
    id: "home",
    label: "Home money",
    detail: "Share selected household costs. Your personal plans stay in your own view.",
    icon: Home,
  },
];

function UpiArt() {
  return (
    <div className="w-full h-full min-h-[260px] p-5 rounded-2xl bg-[#FFF9F3] border border-[#FED7AA] flex flex-col justify-between select-none relative overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#FF5C2B] text-white">
          <ScanLine className="size-3" /> Friday Check-in
        </span>
        <span className="text-xs font-mono font-bold text-[#FF5C2B]">UPI Live Velocity</span>
      </div>

      <div className="grid grid-cols-5 gap-2 my-3">
        {[
          { label: "Chai", price: "₹40", time: "09:15 AM", day: "Mon" },
          { label: "Metro", price: "₹85", time: "10:30 AM", day: "Tue" },
          { label: "Lunch", price: "₹240", time: "01:20 PM", day: "Wed" },
          { label: "Blinkit", price: "₹310", time: "07:45 PM", day: "Thu" },
          { label: "Dinner", price: "₹580", time: "09:10 PM", day: "Fri" },
        ].map((item) => (
          <div key={item.day} className="p-2 rounded-xl bg-white border border-[#FED7AA] flex flex-col justify-between text-center shadow-2xs">
            <span className="text-[9px] font-mono uppercase text-[#7C2D12]">{item.day}</span>
            <strong className="text-xs font-serif font-bold text-[#102B28] my-0.5">{item.price}</strong>
            <span className="text-[9px] text-[#9A3412] truncate">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-white/90 border border-[#FED7AA] flex items-center justify-between text-xs">
        <span className="text-[#7C2D12] font-medium">Safe Daily Remaining:</span>
        <strong className="font-mono text-sm font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
          +₹620 / day
        </strong>
      </div>
    </div>
  );
}

function RentArt() {
  return (
    <div className="w-full h-full min-h-[260px] p-5 rounded-2xl bg-[#FFFDF8] border border-[#C96632]/20 flex flex-col justify-between select-none relative overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#C96632] text-white">
          <ReceiptText className="size-3" /> Fixed Milestone
        </span>
        <span className="text-xs font-mono font-bold text-[#C96632]">Due 5th Every Month</span>
      </div>

      <div className="my-3 p-4 rounded-xl bg-[#FFF8EE] border border-[#C96632]/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#C96632] text-white font-mono font-bold text-sm">
            05
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-[#102B28]">Apartment Rent Due</h4>
            <p className="text-[11px] text-[#6E5347]">Direct Owner Transfer via UPI</p>
          </div>
        </div>
        <div className="text-right">
          <strong className="text-base sm:text-lg font-serif font-bold text-[#C96632]">₹24,000</strong>
          <span className="block text-[9px] font-mono font-bold uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded mt-0.5">
            Locked on 1st
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#59463F] p-2.5 rounded-lg bg-[#FAF5EE]">
        <span>✓ Never touches guilt-free daily spend</span>
        <span className="font-mono font-bold text-[#143B35]">Clear by Friday</span>
      </div>
    </div>
  );
}

function SalaryArt() {
  return (
    <div className="w-full h-full min-h-[260px] p-5 rounded-2xl bg-[#F4F8F6] border border-[#143B35]/20 flex flex-col justify-between select-none relative overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#143B35] text-white">
          <WalletCards className="size-3" /> Salary Day Blueprint
        </span>
        <span className="text-xs font-mono font-bold text-[#143B35]">₹80,000 In-Hand</span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 my-3">
        <div className="p-3 rounded-xl bg-white border border-[#143B35]/15 text-center">
          <span className="text-[10px] font-mono font-bold text-[#143B35]">50% FIXED</span>
          <strong className="block text-sm sm:text-base font-serif font-bold text-[#102B28] my-0.5">₹40,000</strong>
          <span className="text-[9px] text-[#5A7068]">Rent &amp; Bills</span>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF6F2] border border-[#C96632]/25 text-center">
          <span className="text-[10px] font-mono font-bold text-[#C96632]">30% GOALS</span>
          <strong className="block text-sm sm:text-base font-serif font-bold text-[#C96632] my-0.5">₹24,000</strong>
          <span className="text-[9px] text-[#845E51]">SIP &amp; Goa Pot</span>
        </div>

        <div className="p-3 rounded-xl bg-[#FFFDF0] border border-[#E5AD2B]/40 text-center">
          <span className="text-[10px] font-mono font-bold text-[#92400E]">20% BUFFER</span>
          <strong className="block text-sm sm:text-base font-serif font-bold text-[#92400E] my-0.5">₹16,000</strong>
          <span className="text-[9px] text-[#786438]">Safe Daily Spend</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#375249] p-2.5 rounded-lg bg-white/80 border border-[#143B35]/10">
        <span>✓ 3 buckets prevent end-of-month panic</span>
        <span className="font-mono font-bold text-[#143B35]">Zero Math Stress</span>
      </div>
    </div>
  );
}

function GoaArt() {
  return (
    <div className="w-full h-full min-h-[260px] p-5 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] flex flex-col justify-between select-none relative overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#D97706] text-white">
          <Palmtree className="size-3" /> Goa Trip Pot
        </span>
        <span className="text-xs font-mono font-bold text-[#92400E]">Target: ₹45,000</span>
      </div>

      <div className="my-3 p-4 rounded-xl bg-white/90 border border-[#FEF08A] flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-serif font-bold text-[#102B28]">December Beach Vacation</h4>
          <p className="text-[11px] text-[#78350F]">₹4,500/month automated liquid reserve</p>
          <div className="w-44 bg-[#FEF3C7] rounded-full h-2 mt-2">
            <div className="bg-[#D97706] h-full rounded-full" style={{ width: "71%" }} />
          </div>
        </div>
        <div className="text-right">
          <strong className="text-xl font-serif font-bold text-[#D97706]">71%</strong>
          <span className="block text-[10px] font-mono font-bold text-[#92400E]">₹32,000 Saved</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#78350F] p-2.5 rounded-lg bg-[#FEF9C3]">
        <span>✓ Sits right beside bills with zero guilt</span>
        <span className="font-mono font-bold text-[#92400E]">Flight Tickets Ready</span>
      </div>
    </div>
  );
}

function HomeArt() {
  return (
    <div className="w-full h-full min-h-[260px] p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col justify-between select-none relative overflow-hidden" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#2563EB] text-white">
          <Split className="size-3" /> Two Tables Architecture
        </span>
        <span className="text-xs font-mono font-bold text-[#1E40AF]">Shared vs Private</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 my-3">
        <div className="p-3 rounded-xl bg-white border border-[#BFDBFE]">
          <span className="text-[10px] font-mono font-bold text-[#2563EB]">SHARED TABLE</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Cook + WiFi + Groceries</p>
          <strong className="block text-sm font-serif text-[#2563EB] mt-0.5">₹8,539 Total</strong>
          <p className="text-[9px] text-[#60A5FA] mt-1">Split 3 ways equally</p>
        </div>

        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
          <span className="text-[10px] font-mono font-bold text-[#143B35]">PRIVATE TABLE</span>
          <p className="text-xs font-bold text-[#102B28] mt-1">Dinner Date + Zara + Uber</p>
          <strong className="block text-sm font-serif text-[#143B35] mt-0.5">₹4,200 Private</strong>
          <p className="text-[9px] text-[#58726A] mt-1">100% hidden from roommates</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#1E3A8A] p-2.5 rounded-lg bg-white/80 border border-[#BFDBFE]">
        <span>✓ Zero awkward end-of-month roommate math</span>
        <span className="font-mono font-bold text-[#2563EB]">Clean Boundaries</span>
      </div>
    </div>
  );
}

function MomentArt({ id }: { id: string }) {
  if (id === "upi") return <UpiArt />;
  if (id === "rent") return <RentArt />;
  if (id === "goa") return <GoaArt />;
  if (id === "home") return <HomeArt />;
  return <SalaryArt />;
}

export function MoneyOrbit() {
  const [active, setActive] = useState("salary");
  const selected = moments.find((moment) => moment.id === active) ?? moments[0];

  return (
    <div className="moment-module" data-reveal>
      <div className="moment-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            className="moment-media w-full"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          >
            <MomentArt id={selected.id} />
          </motion.div>
        </AnimatePresence>
        <div className="moment-annotation">
          <span>Money moment</span>
          <strong>{selected.label}</strong>
        </div>
        <motion.div
          className="moment-copy"
          key={`${selected.id}-copy`}
          initial={{ opacity: 0, y: 9 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, delay: 0.08 }}
        >
          <span>Why it matters</span>
          <strong>{selected.detail}</strong>
        </motion.div>
      </div>
      <div className="moment-selector" role="tablist" aria-label="Choose a money moment">
        {moments.map((moment) => {
          const Icon = moment.icon;
          const on = moment.id === active;
          return (
            <button
              key={moment.id}
              type="button"
              role="tab"
              aria-selected={on}
              className={on ? "is-selected" : ""}
              onClick={() => setActive(moment.id)}
            >
              <Icon className="size-4" />
              <span>{moment.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SalaryCurrent() {
  return (
    <div className="salary-photo-scene w-full" data-reveal>
      <SalaryArt />
      <div className="salary-path">
        <span>Salary</span>
        <i />
        <b>Rent</b>
        <i />
        <b>Bills</b>
        <i />
        <b>Goa</b>
      </div>
      <div className="salary-caption">
        <small>PLAN PEHLE</small>
        <strong>Give every important thing a place.</strong>
      </div>
    </div>
  );
}

export function HomeChoice() {
  const [view, setView] = useState<"home" | "personal">("home");

  return (
    <div className="home-choice w-full" data-reveal>
      <div className="choice-tabs" role="tablist" aria-label="Choose between home and personal money">
        <button type="button" role="tab" aria-selected={view === "home"} onClick={() => setView("home")}>
          Home (Shared)
        </button>
        <button type="button" role="tab" aria-selected={view === "personal"} onClick={() => setView("personal")}>
          Personal (Private)
        </button>
      </div>
      <motion.div
        className="choice-visual w-full"
        key={view}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {view === "home" ? <HomeArt /> : <UpiArt />}
        <div className="choice-caption">
          <span>{view === "home" ? "Selected shared view" : "Your personal view"}</span>
          <strong>{view === "home" ? "The things you share" : "The money that is yours"}</strong>
          <p>
            {view === "home"
              ? "Rent, groceries and bills can be easier when the right people see the right thing."
              : "Your own plans, savings and everyday spends can stay in your own view."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function TrustVault() {
  return (
    <div className="vault-visual w-full p-6 rounded-2xl bg-[#FFFDF8] border border-[#143B35]/20 shadow-sm" data-reveal>
      <div className="flex items-center justify-between pb-3 border-b border-[#143B35]/10 mb-4">
        <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#143B35]">
          <ShieldCheck className="size-4 text-[#C96632]" />
          Bank-Grade Privacy Vault
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#143B35] text-white">
          Read-Only Access
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
        <div className="p-3 rounded-xl bg-[#F4F8F6] border border-[#143B35]/15">
          <LockKeyhole className="size-4 text-[#143B35] mb-1" />
          <p className="text-xs font-bold text-[#102B28]">No Money Movement</p>
          <p className="text-[10px] text-[#556D65] mt-0.5">Kubear cannot transfer, touch, or move your funds.</p>
        </div>
        <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
          <Eye className="size-4 text-[#C96632] mb-1" />
          <p className="text-xs font-bold text-[#102B28]">Granular Visibility</p>
          <p className="text-[10px] text-[#556D65] mt-0.5">You decide which bank, UPI or credit accounts to see.</p>
        </div>
        <div className="p-3 rounded-xl bg-[#FFF6F2] border border-[#C96632]/25">
          <Check className="size-4 text-emerald-700 mb-1" />
          <p className="text-xs font-bold text-[#102B28]">Disconnect Anytime</p>
          <p className="text-[10px] text-[#556D65] mt-0.5">Revoke account links in one tap with zero residue.</p>
        </div>
      </div>
      <div className="vault-note mt-4">
        <Check className="size-4" /> You choose what comes in
      </div>
    </div>
  );
}
