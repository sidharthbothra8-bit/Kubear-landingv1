/* Money Moment library: each selector reveals its own photo or code-built scene, never a repeated generic campaign image. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Home, MapPin, ReceiptText, Sparkles, WalletCards } from "lucide-react";
import { useState } from "react";

export const APP_URL = "https://kubear.kuberos.in";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const moments = [
  { id: "salary", label: "Salary day", detail: "Give rent, bills, your buffer and a plan one clear place before the month gets busy.", icon: WalletCards },
  { id: "upi", label: "UPI week", detail: "Chai, metro, food and small spends are normal. Seeing them together helps.", icon: Sparkles },
  { id: "rent", label: "Rent due", detail: "Put the big dates where you can see them before they become a last-minute worry.", icon: ReceiptText },
  { id: "goa", label: "Goa plan", detail: "A good plan belongs beside the bills. It does not need to fight the whole month.", icon: MapPin },
  { id: "home", label: "Home money", detail: "Share selected household costs. Your personal plans stay in your own view.", icon: Home },
];

function UpiArt() {
  return <div className="moment-built moment-upi" aria-hidden="true"><span className="upi-map-grid" /><span className="upi-route" /><span className="upi-dot upi-dot-a" /><span className="upi-dot upi-dot-b" /><div className="upi-card"><small>FRI · QUICK CHECK</small><b>UPI week</b><span>small spends</span></div><div className="upi-chai"><i /></div><div className="upi-token"><span>METRO</span><b>09:12</b></div><div className="upi-receipt"><small>₹</small><b>one more thing</b><span>worth noticing</span></div></div>;
}

function RentArt() {
  return <div className="moment-built moment-rent" aria-hidden="true"><span className="rent-rule rent-rule-one" /><span className="rent-rule rent-rule-two" /><span className="rent-route" /><div className="rent-key"><i /></div><div className="rent-slip"><small>MONTHLY</small><b>Rent due</b><span>keep it close</span></div><div className="rent-date"><span>04</span><small>DATE</small></div><div className="rent-envelope"><i /><i /></div></div>;
}

function MomentArt({ id }: { id: string }) {
  if (id === "upi") return <UpiArt />;
  if (id === "rent") return <RentArt />;
  const data = id === "salary" ? { src: "/manus-storage/kubear-salary-morning-ref_172ccce8.png", alt: "Original late-morning salary planning desk with a rent envelope, budget notebook and goal tab." } : id === "goa" ? { src: "/manus-storage/kubear-goa-goal-still-life_2bd357a8.png", alt: "Original Goa planning still-life with a travel tag, map edge and savings marker." } : { src: "/manus-storage/kubear-home-table_49e1543c.png", alt: "Original evening home-table still-life showing a shared household planning moment." };
  return <img className="moment-photo" src={data.src} alt={data.alt} />;
}

export function MoneyOrbit() {
  const [active, setActive] = useState("salary");
  const selected = moments.find((moment) => moment.id === active) ?? moments[0];
  return <div className="moment-module" data-reveal>
    <div className="moment-stage">
      <AnimatePresence mode="wait"><motion.div key={selected.id} className="moment-media" initial={{ opacity: 0, y: 14, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.99 }} transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}><MomentArt id={selected.id} /></motion.div></AnimatePresence>
      <div className="moment-annotation"><span>Money moment</span><strong>{selected.label}</strong></div>
      <motion.div className="moment-copy" key={`${selected.id}-copy`} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, delay: 0.08 }}><span>Why it matters</span><strong>{selected.detail}</strong></motion.div>
    </div>
    <div className="moment-selector" role="tablist" aria-label="Choose a money moment">{moments.map((moment) => { const Icon = moment.icon; const on = moment.id === active; return <button key={moment.id} type="button" role="tab" aria-selected={on} className={on ? "is-selected" : ""} onClick={() => setActive(moment.id)}><Icon className="size-4" /><span>{moment.label}</span></button>; })}</div>
  </div>;
}

export function SalaryCurrent() {
  return <div className="salary-photo-scene" data-reveal><img src="/manus-storage/kubear-salary-morning-ref_172ccce8.png" alt="Original salary day planning desk showing a budget note, rent envelope and goal tab." /><div className="salary-path"><span>Salary</span><i /><b>Rent</b><i /><b>Bills</b><i /><b>Goa</b></div><div className="salary-caption"><small>PLAN PEHLE</small><strong>Give every important thing a place.</strong></div></div>;
}

export function HomeChoice() {
  const [view, setView] = useState<"home" | "personal">("home");
  const content = view === "home" ? { image: "/manus-storage/kubear-home-table_49e1543c.png", title: "The things you share", body: "Rent, groceries and bills can be easier when the right people see the right thing." } : { image: "/manus-storage/kubear-personal-desk_b28783ab.png", title: "The money that is yours", body: "Your own plans, savings and everyday spends can stay in your own view." };
  return <div className="home-choice" data-reveal><div className="choice-tabs" role="tablist" aria-label="Choose between home and personal money"><button type="button" role="tab" aria-selected={view === "home"} onClick={() => setView("home")}>Home</button><button type="button" role="tab" aria-selected={view === "personal"} onClick={() => setView("personal")}>Personal</button></div><motion.div className="choice-visual" key={view} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}><img src={content.image} alt={view === "home" ? "An original evening home-table still-life with selected shared-expense objects." : "An original personal desk still-life with selected personal-planning objects."} /><div className="choice-caption"><span>{view === "home" ? "Selected shared view" : "Your personal view"}</span><strong>{content.title}</strong><p>{content.body}</p></div></motion.div></div>;
}

export function TrustVault() { return <div className="vault-visual" data-reveal><img src="/manus-storage/kubear-trust-vault_d51fc28a.png" alt="Original illustration of selected money objects protected inside a calm glass vault." /><div className="vault-note"><Check className="size-4" />You choose what comes in</div></div>; }
