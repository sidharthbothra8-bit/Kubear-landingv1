/* Week Comes Together: real Kubear Android visuals sit inside original weekly-money scenes, where motion explains salary, UPI, home and goal relationships. */
import { CalendarDays, CreditCard, Home, Landmark, Plane, ReceiptText, ScanLine, UserRound } from "lucide-react";
import { useState } from "react";

export const APP_URL = "https://kubear.kuberos.in";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const APP_IMAGES = {
  privacy: "/manus-storage/kubear-app-privacy_2ea7f9aa.webp",
  entry: "/manus-storage/kubear-app-money-entry_7b8b7d73.webp",
  home: "/manus-storage/kubear-app-home-plan_b6b4876e.webp",
  goals: "/manus-storage/kubear-app-goals_5c6c75a2.webp",
};

export function WeekAssembly() {
  const tickets = [
    { label: "Salary", note: "Monday", icon: Landmark, className: "ticket-salary" },
    { label: "UPI", note: "All week", icon: ScanLine, className: "ticket-upi" },
    { label: "Card bill", note: "Friday", icon: CreditCard, className: "ticket-card" },
    { label: "Goa fund", note: "Sunday", icon: Plane, className: "ticket-goa" },
    { label: "Home rent", note: "This month", icon: Home, className: "ticket-home" },
  ];
  return <div className="week-assembly" aria-label="An illustrative week of salary, UPI, card bill, Goa fund and home-rent signals coming into a single Kubear view">
    <div className="week-orbit week-orbit-one" /><div className="week-orbit week-orbit-two" /><div className="week-link week-link-a" /><div className="week-link week-link-b" />
    {tickets.map(({ label, note, icon: Icon, className }) => <div className={`week-ticket ${className}`} key={label}><span className="week-ticket-icon"><Icon className="size-3.5" /></span><span><b>{label}</b><small>{note}</small></span></div>)}
    <div className="week-device"><div className="week-device-top"><span><i />Aaj ka view</span><b>Week 01</b></div><img src={APP_IMAGES.entry} alt="Kubear Android app money-entry screen" /><div className="week-device-caption">Actual Kubear Android screen</div></div>
    <div className="week-stamp">Aaj · clarity first</div>
  </div>;
}

export function SalaryRibbon() {
  return <div className="salary-ribbon-scene" aria-label="An illustrative salary plan that allocates money to monthly needs, bills, a Goa fund and a buffer"><div className="salary-origin"><span>Salary day</span><b>₹</b></div><div className="salary-ribbon-line" /><div className="salary-allocation allocation-one"><span>Needs</span><b>Rent + home</b></div><div className="salary-allocation allocation-two"><span>Due next</span><b>Card bill</b></div><div className="salary-allocation allocation-three"><span>Plan</span><b>Goa fund</b></div><div className="salary-allocation allocation-four"><span>Left</span><b>Buffer</b></div><p>Example plan. Your numbers stay yours.</p></div>;
}

export function HomeMoneyToggle() {
  const [view, setView] = useState<"home" | "personal">("home");
  return <div className="home-money-module" data-active={view}>
    <div className="home-switch" role="group" aria-label="Choose a money view"><button type="button" onClick={() => setView("home")} aria-pressed={view === "home"}><Home className="size-4" />Home</button><button type="button" onClick={() => setView("personal")} aria-pressed={view === "personal"}><UserRound className="size-4" />Personal</button></div>
    <div className="home-money-stage"><div className="home-money-link" /><article className="home-money-paper home-paper-personal"><span className="eyebrow">Personal</span><h3>Your own money view</h3><p>Salary, savings and personal plans stay here.</p></article><article className="home-money-paper home-paper-home"><span className="eyebrow">Home</span><h3>The things you share</h3><div className="home-money-tags"><b>Rent</b><b>Groceries</b><b>Bills</b></div><p>Share selected home entries without mixing everything.</p></article><div className="home-rent-note"><ReceiptText className="size-4" />Rent due</div></div>
  </div>;
}

export function GoalMoment() {
  return <div className="goal-moment" aria-label="A Goa trip fund shown beside Kubear’s goals Android app screen"><div className="goal-grid" /><div className="goal-path"><i /><i /><i /><i /></div><div className="goal-pin"><Plane className="size-4" /><span>Goa fund</span><b>On the way</b></div><div className="goal-device"><img src={APP_IMAGES.goals} alt="Kubear Android app goals screen" /></div><div className="goal-bill">Card bill first</div></div>;
}

export function ProductPoster({ type }: { type: "today" | "privacy" | "home" }) {
  const source = type === "privacy" ? APP_IMAGES.privacy : type === "home" ? APP_IMAGES.home : APP_IMAGES.entry;
  const labels = { today: "Aaj ka view", privacy: "Your rules", home: "Home money" };
  return <figure className={`product-poster poster-${type}`}><div className="poster-tab">{labels[type]}</div><img src={source} alt={`Kubear Android ${labels[type].toLowerCase()} screen`} /><figcaption>Current Android product visual</figcaption></figure>;
}
