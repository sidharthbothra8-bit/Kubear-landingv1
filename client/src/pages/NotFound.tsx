/* Living Ledger design: even an error state offers a quiet, obvious route back to the financial picture. */
import { ArrowRight, BookOpen, CircleDollarSign, House } from "lucide-react";
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

export default function NotFound() {
  return <SiteLayout><PageMeta title="Page not found | Kubear" description="The requested Kubear page was not found." path="/404" />
    <section className="not-found-page paper-grid px-5 py-28 sm:px-8 lg:px-12 lg:py-40"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow text-[#C96632]">404 · Not in this picture</p><h1 className="display mt-5 text-[#102B28]">This page has wandered off the ledger.</h1><p className="lede mt-6">The route is not available in this preview. Try a useful way back into the picture.</p><Link href="/" className="button button-primary mt-9">Back to Kubear <ArrowRight className="size-4" /></Link><nav className="not-found-links" aria-label="Helpful routes"><Link href="/"><House className="size-4" />Home</Link><Link href="/tools"><CircleDollarSign className="size-4" />Tools</Link><Link href="/learn"><BookOpen className="size-4" />Learn</Link></nav></div></section>
  </SiteLayout>;
}
