/* Living Ledger modernisation: tools are named like practical questions people actually have around Indian money. */
import { ArrowUpRight, Calculator, Landmark, Percent, Umbrella } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

const tools = [
  { icon: Landmark, name: "SIP Calculator", note: "See what your monthly SIP could become over time.", href: "https://www.kuberos.in/tools/sip", tag: "Invest" },
  { icon: Calculator, name: "EMI Calculator", note: "See your monthly EMI and the full interest cost.", href: "https://www.kuberos.in/tools/emi", tag: "Borrow" },
  { icon: Percent, name: "Old vs New Tax Regime", note: "Compare both regimes with your own numbers.", href: "https://www.kuberos.in/tools/tax", tag: "Tax" },
  { icon: Umbrella, name: "Retirement Planner", note: "Start looking at the money you may need later.", href: "https://www.kuberos.in/tools/retirement", tag: "Life" },
  { icon: Calculator, name: "Credit Card Payoff", note: "See how long it may take to clear your card bill.", href: "https://www.kuberos.in/tools/credit-card", tag: "Borrow" },
  { icon: Landmark, name: "PPF Calculator", note: "Estimate your PPF contribution and maturity amount.", href: "https://www.kuberos.in/tools/ppf", tag: "Invest" },
];

export default function Tools() {
  return <SiteLayout><PageMeta title="Kubear Tools | Simple money answers" description="Use Kubear’s practical money tools for SIP, EMI, tax, retirement, credit-card and PPF questions." path="/tools" /><section className="bg-[#E7DED0] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><p className="eyebrow text-[#C96632]">Kubear tools</p><div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"><h1 className="display text-[#102B28]" data-reveal>Money answers. No headache.</h1><p className="lede" data-reveal>Start with a simple calculation. No account needed.</p></div></div></section><section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><div className="grid gap-x-8 gap-y-0 md:grid-cols-2">{tools.map((tool, index) => { const Icon = tool.icon; return <a data-reveal key={tool.name} href={tool.href} target="_blank" rel="noreferrer" className="group flex gap-5 border-t border-[#102B28]/15 py-7 transition hover:pl-2"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#F6E6DD] text-[#C96632]"><Icon className="size-5" /></span><span className="block"><span className="eyebrow text-[#6E756C]">{tool.tag} · 0{index + 1}</span><span className="mt-2 block text-xl font-bold tracking-[-0.04em] text-[#102B28] group-hover:text-[#C96632]">{tool.name} <ArrowUpRight className="ml-1 inline size-4" /></span><span className="mt-2 block max-w-sm leading-6 text-[#65726C]">{tool.note}</span></span></a>; })}</div><p className="margin-note mt-10">The current tool pages hold the calculator logic and legal details. This preview gives people a clearer way to reach them.</p></div></section></SiteLayout>;
}
