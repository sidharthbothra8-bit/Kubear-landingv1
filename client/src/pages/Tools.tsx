/* Living Ledger design: practical tools are presented as an editorial utility shelf, not a generic card gallery. */
import { ArrowUpRight, Calculator, Landmark, Percent, Umbrella } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

const tools = [
  { icon: Landmark, name: "SIP Calculator", note: "See what a small monthly investment could grow into over time.", href: "https://www.kuberos.in/tools/sip", tag: "Invest" },
  { icon: Calculator, name: "EMI Calculator", note: "See the monthly EMI and total interest behind a borrowing decision.", href: "https://www.kuberos.in/tools/emi", tag: "Borrow" },
  { icon: Percent, name: "Old vs New Tax Regime", note: "Compare the regimes with the inputs that matter to your own situation.", href: "https://www.kuberos.in/tools/tax", tag: "Tax" },
  { icon: Umbrella, name: "Retirement Planner", note: "Begin a structured look at the corpus and contribution question.", href: "https://www.kuberos.in/tools/retirement", tag: "Life" },
  { icon: Calculator, name: "Credit Card Payoff", note: "See the cost in time and money of carrying a revolving balance.", href: "https://www.kuberos.in/tools/credit-card", tag: "Borrow" },
  { icon: Landmark, name: "PPF Calculator", note: "Explore a 15-year PPF contribution and maturity calculation.", href: "https://www.kuberos.in/tools/ppf", tag: "Invest" },
];

export default function Tools() {
  return <SiteLayout><PageMeta title="Free Money Tools for Indians | Kubear" description="Explore Kubear’s practical personal-finance calculators for SIP, EMI, tax, retirement, credit cards and PPF." path="/tools" />
    <section className="bg-[#E7DED0] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><p className="eyebrow text-[#C96632]">Kubear Tools · Zero jargon</p><div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"><h1 className="display text-[#102B28]">Money math, without the drama.</h1><p className="lede">A practical calculation is still a useful place to begin. Explore the current Kubear tool set, designed to run without an account.</p></div></div></section>
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="grid gap-x-8 gap-y-0 md:grid-cols-2">{tools.map((tool, index) => { const Icon = tool.icon; return <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer" className="group flex gap-5 border-t border-[#102B28]/15 py-7 transition hover:pl-2"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#E7DED0] text-[#C96632]"><Icon className="size-5" /></span><span className="block"><span className="eyebrow text-[#6E756C]">{tool.tag} · 0{index + 1}</span><span className="mt-2 block text-xl font-bold tracking-[-0.04em] text-[#102B28] group-hover:text-[#C96632]">{tool.name} <ArrowUpRight className="ml-1 inline size-4" /></span><span className="mt-2 block max-w-sm leading-6 text-[#65726C]">{tool.note}</span></span></a>; })}</div><p className="mt-10 text-sm leading-6 text-[#65726C]">The current tool pages remain the source of truth for calculator logic and legal disclosures. This redesign provides a clearer route to them rather than duplicating financial calculations in the marketing preview.</p></div></section>
  </SiteLayout>;
}
