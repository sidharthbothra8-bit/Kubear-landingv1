/* Living Ledger design: outcome modules form a composed personal ledger, not a generic feature grid. */
import { ArrowUpRight, CalendarClock, CircleHelp, Landmark, UsersRound, WalletCards } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

const modules = [
  { icon: Landmark, tag: "The picture", title: "Know where you stand", body: "Bring the financial information you choose to connect into a view that is easier to understand than a round of app switching." },
  { icon: CalendarClock, tag: "The timeline", title: "Know what is coming", body: "Keep an eye on incoming money, upcoming bills, subscriptions and planned commitments in the same story." },
  { icon: WalletCards, tag: "The context", title: "Know what is already spoken for", body: "See a safer view of what may be available after the obligations that deserve a place in the decision." },
  { icon: CircleHelp, tag: "The question", title: "Ask behind the number", body: "Ask a plain-language question about your own money context rather than trying to reconstruct it from individual account histories." },
  { icon: UsersRound, tag: "The boundary", title: "Share home money, not your whole life", body: "Keep a meaningful distinction between a shared household view and personal financial information." },
];

export default function MoneyPicture() {
  return <SiteLayout><PageMeta title="Your money picture | Kubear" description="Explore the product outcomes Kubear is designed to make easier: context, timeline, shared money and plain-language answers." path="/your-money-picture" />
    <section className="bg-[#102B28] px-5 py-20 text-[#FDF9F0] sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><p className="eyebrow text-[#E2BA66]">Your money picture</p><div className="mt-6 max-w-4xl"><h1 className="display">The number is useful. The story around it is better.</h1><p className="lede mt-7 text-[#CBD4CF]">A balance alone cannot tell you about a bill, a subscription, a SIP, a shared cost or the question you are about to ask. The value is in the context.</p></div></div></section>
    <section className="paper-grid px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="staggered-list">{modules.map((module, index) => { const Icon = module.icon; return <article className={`outcome-row ${index === 1 ? "lg:ml-[12%]" : ""} ${index === 3 ? "lg:ml-[6%]" : ""}`} key={module.title}><div className="flex items-start gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#E7DED0] text-[#C96632]"><Icon className="size-5" /></span><div><p className="eyebrow text-[#C96632]">{module.tag}</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.045em] text-[#102B28] sm:text-3xl">{module.title}</h2><p className="mt-3 max-w-xl leading-7 text-[#53625B]">{module.body}</p></div></div><span className="hidden font-serif text-5xl text-[#D6C7B5] md:block">0{index + 1}</span></article>; })}</div></div></section>
    <section className="mx-5 mb-20 overflow-hidden rounded-[2rem] bg-[#E2BA66] px-6 py-14 sm:mx-8 sm:px-10 lg:mx-12 lg:mb-28 lg:px-16"><div className="mx-auto flex max-w-[1150px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="eyebrow text-[#635021]">Not an investing app. Not an expense spreadsheet.</p><h2 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.055em] text-[#102B28] sm:text-5xl">A calmer layer over the money tools you already use.</h2></div><a href="https://kubear.kuberos.in" target="_blank" rel="noreferrer" className="button button-dark shrink-0">Join early access <ArrowUpRight className="size-4" /></a></div></section>
  </SiteLayout>;
}
