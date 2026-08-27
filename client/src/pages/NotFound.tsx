/* Living Ledger design: even an error state offers a quiet, obvious route back to the financial picture. */
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

export default function NotFound() {
  return <SiteLayout><PageMeta title="Page not found | Kubear" description="The requested Kubear page was not found." path="/404" />
    <section className="paper-grid px-5 py-28 sm:px-8 lg:px-12 lg:py-40"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow text-[#C96632]">404 · Not in this picture</p><h1 className="display mt-5 text-[#102B28]">This page has wandered off the ledger.</h1><p className="lede mt-6">The route is not available in this preview. Return to the home page to see the whole picture.</p><Link href="/" className="button button-primary mt-9">Back to Kubear</Link></div></section>
  </SiteLayout>;
}
