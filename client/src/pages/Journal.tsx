/* Living Ledger remediation: the legacy Journal route now keeps readers inside Kubear’s clear, internal Learn journey. */
import { ArrowRight, ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { SpendRhythmInstrument } from "@/components/TactileMoneyInstruments";
import { staticParsedArticles } from "@shared/articlesData";
import { getLearnTopic } from "@/lib/learnTopics";

export default function Journal() {
  const featured = staticParsedArticles[0];
  const readingList = staticParsedArticles.slice(1, 7);

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Journal | Everyday money notes"
        description="A practical internal reading path for salary, UPI, bills, goals and home money."
        path="/journal"
      />
      <section className="paper-grid px-5 pb-16 pt-16 sm:px-8 sm:pt-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div data-reveal>
            <p className="eyebrow text-[#C96632]">Kubear Journal</p>
            <h1 className="display mt-5 text-[#102B28]">
              Useful money notes.<br />No finance lecture.
            </h1>
            <p className="lede mt-7">
              Short reads for the questions that show up between salary day, a card bill and the weekend plan.
            </p>
            <Link href="/learn" className="button button-orange mt-8">
              Browse Kubear Learn <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <SpendRhythmInstrument />
        </div>
      </section>

      <section className="bg-[#FAF7F0] border-y-2 border-[#123630]/10 px-5 py-16 text-[#123630] sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div className="journal-feature-card bg-white border-2 border-[#123630]/15 shadow-sm text-[#123630]" aria-label="Featured reading summary">
            <BookOpen className="size-7 text-[#CD4623]" />
            <p className="font-mono text-xs font-bold text-[#CD4623]">FEATURED ISSUE</p>
            <strong className="text-[#123630]">One clear question.<br />One useful next step.</strong>
            <div className="text-[#516761]">
              <span>{featured.category.toUpperCase()}</span>
              <span>{featured.readTime}</span>
              <span>ISSUE {String(featured.calendarOrder).padStart(2, "0")}</span>
            </div>
          </div>
          <article data-reveal>
            <p className="eyebrow text-[#CD4623]">Featured internal read</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-[.98] tracking-[-.055em] sm:text-4xl lg:text-5xl text-[#123630]">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-xl text-xs sm:text-sm leading-relaxed text-[#516761]">
              {featured.dek}
            </p>
            {featured.takeaway && (
              <p className="journal-feature-takeaway bg-white border border-[#123630]/15 text-[#123630]">
                <span className="text-[#CD4623] font-bold">Takeaway</span>
                {featured.takeaway}
              </p>
            )}
            <Link href={`/learn/${featured.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B19] text-white px-6 py-3 text-sm font-bold shadow-[0_3px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] transition-all mt-8">
              Read in {featured.readTime} <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="journal-remediation-head">
            <div>
              <p className="eyebrow text-[#C96632]">Keep reading</p>
              <h2 className="section-title mt-4">Find the question that is on your mind.</h2>
            </div>
            <Link href="/learn" className="mm-text-link">
              All 50 Learn guides <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="journal-internal-list">
            {readingList.map((article, index) => (
              <Link href={`/learn/${article.slug}`} key={article.slug}>
                <span>{String(index + 2).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">
                    {getLearnTopic(article.topic)?.label ?? article.category} <i>·</i> {article.readTime}
                  </p>
                  <h3>{article.title}</h3>
                  <p>{article.dek}</p>
                </div>
                <Clock3 className="size-4" />
                <ArrowRight className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
