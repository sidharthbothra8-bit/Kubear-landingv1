/* Living Ledger design: this route uses a restrained editorial sequence to explain control before complexity. */
import { ArrowUpRight, Eye, Layers3, SlidersHorizontal } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { LedgerScene } from "@/components/LedgerScene";
import { SiteLayout } from "@/components/SiteChrome";

const steps = [
  { number: "01", icon: SlidersHorizontal, title: "Choose what belongs in the picture", text: "Connect only the accounts and information you want Kubear to consider. The control stays with you." },
  { number: "02", icon: Layers3, title: "Let the pieces meet", text: "Transactions, upcoming commitments and financial accounts can become one readable layer instead of many disconnected checks." },
  { number: "03", icon: Eye, title: "See what is worth your attention", text: "Use the picture to understand what changed, what is coming up and what may matter before the next decision." },
];

export default function HowItWorks() {
  return <SiteLayout><PageMeta title="How Kubear works — a calmer financial picture" description="Understand how Kubear is designed to bring the financial information you choose to connect into one read-only picture." path="/how-it-works" />
    <section className="paper-grid overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="eyebrow">How it works</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div><h1 className="display text-[#102B28]">A clearer picture starts with better context.</h1><p className="lede mt-7">Kubear is designed to help you connect the money information you choose to share, then make the useful relationships easier to see. It is not here to move your money.</p><a className="button button-primary mt-8" href="https://kubear.kuberos.in" target="_blank" rel="noreferrer">Join early access <ArrowUpRight className="size-4" /></a></div>
          <LedgerScene compact />
        </div>
      </div>
    </section>
    <section className="bg-[#102B28] px-5 py-20 text-[#FDF9F0] sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1280px]"><p className="eyebrow text-[#E2BA66]">The sequence</p><div className="mt-10 grid gap-5 lg:grid-cols-3">{steps.map((step) => { const Icon = step.icon; return <article className="border-t border-white/25 pt-6" key={step.number}><span className="font-serif text-5xl text-[#E2BA66]">{step.number}</span><Icon className="mt-10 size-6 text-[#E2BA66]" /><h2 className="mt-4 text-2xl font-bold tracking-[-0.04em]">{step.title}</h2><p className="mt-4 max-w-sm leading-7 text-[#CBD4CF]">{step.text}</p></article>; })}</div></div></section>
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">The boundary matters</p><h2 className="section-title mt-5">See it all. Move nothing.</h2></div><div className="space-y-6 text-lg leading-8 text-[#42514B]"><p>Kubear’s current public materials describe a read-only model: the product can show the information you choose to connect, but does not move money.[*]</p><p className="border-l-2 border-[#C96632] pl-5 text-[#102B28]">That difference is not a footnote. It is part of the product experience—one place to understand the picture, while your bank, payment app and investment platform continue to do their own jobs.</p><p className="text-sm leading-6 text-[#65726C]">[*] Public product, terms and privacy pages should be re-approved by Kubear before publication of production copy.</p></div></div></section>
  </SiteLayout>;
}
