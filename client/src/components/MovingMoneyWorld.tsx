/* Moving Money Universe: original visual storytelling uses tactile objects and live HTML labels, never product screenshots or financial dashboards. */
import { motion } from "framer-motion";
import { ArrowRight, Check, Home, MapPin, ReceiptText, Sparkles, WalletCards } from "lucide-react";
import { useState } from "react";

export const APP_URL = "https://kubear.kuberos.in";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const moments = [
  { id: "salary", label: "Salary day", detail: "Give every important thing a place before the month gets busy.", icon: WalletCards },
  { id: "upi", label: "UPI week", detail: "Small spends are normal. Seeing them with everything else helps.", icon: Sparkles },
  { id: "rent", label: "Rent due", detail: "Keep the big things close, not stuck in a reminder somewhere.", icon: ReceiptText },
  { id: "goa", label: "Goa plan", detail: "A plan for something good deserves a place beside the bills.", icon: MapPin },
  { id: "home", label: "Home money", detail: "Share selected household costs. Keep your personal view personal.", icon: Home },
];

export function MoneyOrbit() {
  const [active, setActive] = useState("salary");
  const selected = moments.find((moment) => moment.id === active) ?? moments[0];
  return <div className="orbit-module" data-reveal>
    <div className="orbit-art-wrap"><img className="orbit-art" src="/manus-storage/kubear-money-orbit-master_fa60fb1b.png" alt="Original illustration of salary, rent, bills, a travel plan and home expenses settling into one connected money orbit." /><div className="orbit-gradient" />
      <motion.div className="orbit-copy" key={selected.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}><span>{selected.label}</span><strong>{selected.detail}</strong></motion.div>
      <div className="orbit-curve orbit-curve-one" /><div className="orbit-curve orbit-curve-two" />
    </div>
    <div className="orbit-selector" role="tablist" aria-label="Choose a money moment">{moments.map((moment) => { const Icon = moment.icon; const on = moment.id === active; return <button key={moment.id} role="tab" aria-selected={on} className={on ? "is-selected" : ""} onClick={() => setActive(moment.id)}><Icon className="size-4" /><span>{moment.label}</span></button>; })}</div>
  </div>;
}

export function SalaryCurrent() {
  return <div className="salary-current" data-reveal aria-label="Illustration of salary being planned across rent, bills, buffer and a Goa plan"><div className="salary-token"><span>Salary day</span><b>Arrives</b></div><svg viewBox="0 0 600 290" aria-hidden="true"><motion.path d="M78 67 C155 67 150 150 235 150 S325 56 405 56 S500 132 556 132" fill="none" stroke="#FF5C2B" strokeWidth="18" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.25, ease: "easeInOut" }} /><motion.path d="M238 151 C323 151 355 236 514 236" fill="none" stroke="#F4B63A" strokeWidth="12" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, ease: "easeInOut", delay: 0.48 }} /></svg><div className="salary-stop stop-rent"><span>First</span><b>Rent</b></div><div className="salary-stop stop-bill"><span>Then</span><b>Bill</b></div><div className="salary-stop stop-buffer"><span>Keep</span><b>Buffer</b></div><div className="salary-stop stop-goa"><span>Also</span><b>Goa plan</b></div><p>Not numbers. Just a better order.</p></div>;
}

export function HomeChoice() {
  const [view, setView] = useState<"home" | "personal">("home");
  const content = view === "home" ? { image: "/manus-storage/kubear-home-table_49e1543c.png", title: "The things you share", body: "Rent, groceries and bills can be easier when the right people see the right thing." } : { image: "/manus-storage/kubear-personal-desk_b28783ab.png", title: "The money that is yours", body: "Your own plans, savings and everyday spends can stay in your own view." };
  return <div className="home-choice" data-reveal><div className="choice-tabs" role="tablist" aria-label="Choose between home and personal money"><button role="tab" aria-selected={view === "home"} onClick={() => setView("home")}>Home</button><button role="tab" aria-selected={view === "personal"} onClick={() => setView("personal")}>Personal</button></div><motion.div className="choice-visual" key={view} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}><img src={content.image} alt={view === "home" ? "An original evening home-table still-life with selected shared-expense objects." : "An original personal desk still-life with selected personal-planning objects."} /><div className="choice-caption"><span>{view === "home" ? "Selected shared view" : "Your personal view"}</span><strong>{content.title}</strong><p>{content.body}</p></div></motion.div></div>;
}

export function TrustVault() { return <div className="vault-visual" data-reveal><img src="/manus-storage/kubear-trust-vault_d51fc28a.png" alt="Original illustration of selected money objects protected inside a calm glass vault." /><div className="vault-note"><Check className="size-4" />You choose what comes in</div></div>; }
