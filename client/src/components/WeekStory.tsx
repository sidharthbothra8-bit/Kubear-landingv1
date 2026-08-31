/* Week Comes Together: authentic Kubear money scenes, where tactile UI explains salary, UPI, home and goal relationships. */
import {
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  Eye,
  Home,
  Landmark,
  Lock,
  LockKeyhole,
  MapPin,
  Palmtree,
  Plane,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Split,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";
import { useState } from "react";

export const APP_URL = "https://kubear.kuberos.in";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

export function WeekAssembly() {
  const tickets = [
    { label: "Salary", note: "Monday", icon: Landmark, className: "ticket-salary" },
    { label: "UPI", note: "All week", icon: ScanLine, className: "ticket-upi" },
    { label: "Card bill", note: "Friday", icon: CreditCard, className: "ticket-card" },
    { label: "Goa fund", note: "Sunday", icon: Plane, className: "ticket-goa" },
    { label: "Home rent", note: "This month", icon: Home, className: "ticket-home" },
  ];

  return (
    <div
      className="week-assembly"
      aria-label="An illustrative week of salary, UPI, card bill, Goa fund and home-rent signals coming into a single Kubear view"
    >
      <div className="week-orbit week-orbit-one" />
      <div className="week-orbit week-orbit-two" />
      <div className="week-link week-link-a" />
      <div className="week-link week-link-b" />
      {tickets.map(({ label, note, icon: Icon, className }) => (
        <div className={`week-ticket ${className}`} key={label}>
          <span className="week-ticket-icon">
            <Icon className="size-3.5" />
          </span>
          <span>
            <b>{label}</b>
            <small>{note}</small>
          </span>
        </div>
      ))}
      <div className="week-device">
        <div className="week-device-top">
          <span>
            <i />
            Aaj ka view
          </span>
          <b>Week 01</b>
        </div>
        {/* Realistic Mobile Screen Mockup */}
        <div className="w-full bg-[#102B28] text-white p-3 rounded-lg flex flex-col justify-between my-2 shadow-inner">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[10px] text-[#A7F3D0]">
            <span>Safe to spend this week</span>
            <span className="font-mono font-bold text-white">₹18,400</span>
          </div>
          <div className="space-y-1 my-2 text-[10px]">
            <div className="flex justify-between text-white/80">
              <span>✓ Salary received</span>
              <span className="text-emerald-400">Credited</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>⚡ Card bill Friday</span>
              <span className="text-amber-400">₹8,450 Due</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>🏠 Home rent</span>
              <span className="text-orange-300">5th Locked</span>
            </div>
          </div>
          <span className="text-[9px] text-[#A7F3D0]/80 font-mono text-center">
            One calm view · Zero panic
          </span>
        </div>
        <div className="week-device-caption">Kubear Interactive View</div>
      </div>
      <div className="week-stamp">Aaj · clarity first</div>
    </div>
  );
}

export function SalaryRibbon() {
  return (
    <div
      className="salary-ribbon-scene"
      aria-label="An illustrative salary plan that allocates money to monthly needs, bills, a Goa fund and a buffer"
    >
      <div className="salary-origin">
        <span>Salary day</span>
        <b>₹</b>
      </div>
      <div className="salary-ribbon-line" />
      <div className="salary-allocation allocation-one">
        <span>Needs</span>
        <b>Rent + home</b>
      </div>
      <div className="salary-allocation allocation-two">
        <span>Due next</span>
        <b>Card bill</b>
      </div>
      <div className="salary-allocation allocation-three">
        <span>Plan</span>
        <b>Goa fund</b>
      </div>
      <div className="salary-allocation allocation-four">
        <span>Left</span>
        <b>Buffer</b>
      </div>
      <p>Example plan. Your numbers stay yours.</p>
    </div>
  );
}

export function HomeMoneyToggle() {
  const [view, setView] = useState<"home" | "personal">("home");

  return (
    <div className="home-money-module" data-active={view}>
      <div className="home-switch" role="group" aria-label="Choose a money view">
        <button type="button" onClick={() => setView("home")} aria-pressed={view === "home"}>
          <Home className="size-4" />
          Home
        </button>
        <button type="button" onClick={() => setView("personal")} aria-pressed={view === "personal"}>
          <UserRound className="size-4" />
          Personal
        </button>
      </div>
      <div className="home-money-stage">
        <div className="home-money-link" />
        <article className="home-money-paper home-paper-personal">
          <span className="eyebrow">Personal</span>
          <h3>Your own money view</h3>
          <p>Salary, savings and personal plans stay here.</p>
        </article>
        <article className="home-money-paper home-paper-home">
          <span className="eyebrow">Home</span>
          <h3>The things you share</h3>
          <div className="home-money-tags">
            <b>Rent</b>
            <b>Groceries</b>
            <b>Bills</b>
          </div>
          <p>Share selected home entries without mixing everything.</p>
        </article>
        <div className="home-rent-note">
          <ReceiptText className="size-4" />
          Rent due
        </div>
      </div>
    </div>
  );
}

export function GoalMoment() {
  return (
    <div className="goal-moment" aria-label="A Goa trip fund shown beside Kubear’s goals view">
      <div className="goal-grid" />
      <div className="goal-path">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="goal-pin">
        <Plane className="size-4" />
        <span>Goa fund</span>
        <b>On the way</b>
      </div>
      <div className="goal-device">
        <div className="p-3 bg-[#143B35] text-white rounded-xl text-center">
          <span className="text-[10px] font-mono text-[#D8E8DE] uppercase">Target Goal</span>
          <strong className="block text-base font-serif text-white my-0.5">₹45,000</strong>
          <span className="text-[10px] text-emerald-400 font-mono">71% Saved (₹32k)</span>
        </div>
      </div>
      <div className="goal-bill">Card bill first</div>
    </div>
  );
}

export function ProductPoster({ type }: { type: "today" | "privacy" | "home" }) {
  const labels = { today: "Aaj ka view", privacy: "Your rules", home: "Home money" };

  return (
    <figure className={`product-poster poster-${type}`}>
      <div className="poster-tab">{labels[type]}</div>
      <div className="w-full min-h-[200px] p-4 bg-[#FAF7F0] border border-[#143B35]/15 rounded-xl flex flex-col justify-between">
        {type === "today" ? (
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-[#143B35]/10">
              <span className="text-xs font-mono font-bold text-[#143B35]">This Week</span>
              <strong className="text-sm font-serif text-[#102B28]">₹18,400</strong>
            </div>
            <div className="space-y-1.5 mt-2 text-xs text-[#375249]">
              <div className="flex justify-between">
                <span>⚡ Card bill Fri</span>
                <strong>₹8,450</strong>
              </div>
              <div className="flex justify-between">
                <span>☕ Daily Buffer</span>
                <strong>₹620/day</strong>
              </div>
            </div>
          </div>
        ) : type === "privacy" ? (
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-[#143B35]/10">
              <span className="text-xs font-mono font-bold text-[#C96632]">Read-Only</span>
              <ShieldCheck className="size-4 text-emerald-700" />
            </div>
            <p className="text-xs text-[#375249] mt-2">
              You choose what is connected. Kubear never initiates or moves money. Disconnect anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-[#143B35]/10">
              <span className="text-xs font-mono font-bold text-[#2563EB]">Two Tables</span>
              <Users className="size-4 text-[#2563EB]" />
            </div>
            <p className="text-xs text-[#375249] mt-2">
              Shared costs like Cook &amp; WiFi sit on the flatmate table. Private dinners stay on your table.
            </p>
          </div>
        )}
      </div>
      <figcaption>Current Kubear product visual</figcaption>
    </figure>
  );
}
