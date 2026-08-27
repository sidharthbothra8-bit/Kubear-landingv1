import { ArrowUpRight, Landmark, Plane, WalletCards } from "lucide-react";
import { Link } from "wouter";

const toolMoments = [
  { href: "/learn/tools/sip-calculator", index: "01", moment: "Salary day", title: "Set a monthly SIP", detail: "Try the monthly amount, time and a return assumption.", icon: WalletCards, tone: "salary" },
  { href: "/learn/tools/emi-calculator", index: "02", moment: "Home plan", title: "Understand an EMI", detail: "See a monthly payment with loan amount, rate and tenure.", icon: Landmark, tone: "home" },
  { href: "/learn/tools/goa-goal-calculator", index: "03", moment: "Goa plan", title: "Keep a goal visible", detail: "Spread what is left across the months that remain.", icon: Plane, tone: "goal" },
] as const;

export function LearnDeskTools({ compact = false }: { compact?: boolean }) {
  return <section className={`learn-desk-tools ${compact ? "is-compact" : ""}`} aria-labelledby="learn-tools-title"><div className="learn-desk-tools-head"><div><p className="eyebrow">Try a useful number</p><h2 id="learn-tools-title">Start with the money moment.</h2></div><p>Short planning tools, right beside the notes that make the numbers easier to use.</p></div><div className="learn-desk-tool-list">{toolMoments.map(({ href, index, moment, title, detail, icon: Icon, tone }) => <Link href={href} className={`learn-desk-tool-card tone-${tone}`} key={href}><span className="learn-desk-tool-index">{index}</span><Icon className="size-5" /><div><p>{moment}</p><strong>{title}</strong><small>{detail}</small></div><ArrowUpRight className="learn-desk-tool-arrow size-4" /></Link>)}</div><p className="learn-desk-tools-note">For illustration and planning. Calculator outputs are not personal financial advice or a prediction of results.</p></section>;
}
