/* Mobile-first expansion: Learn is an internal reading library with topic clusters, practical article pages and strong contextual paths. */
import { ArrowLeft, ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { articles, getArticle, getTopic, topics } from "@/lib/contentRegistry";

const photoUrls: Partial<Record<string, string>> = {
  salary: "/manus-storage/kubear-salary-morning-ref_172ccce8.png", goa: "/manus-storage/kubear-goa-goal-still-life_2bd357a8.png", home: "/manus-storage/kubear-home-table_49e1543c.png",
};

function ArticleVisual({ visual, className = "" }: { visual: string; className?: string }) {
  const photo = photoUrls[visual];
  if (photo) return <div className={`learn-visual ${className}`}><img src={photo} alt="" loading="lazy" /></div>;
  if (visual === "upi") return <div className={`learn-visual learn-visual-upi ${className}`} aria-hidden="true"><span className="upi-rail" /><span className="upi-cup" /><span className="upi-ticket">UPI</span><span className="upi-spark upi-spark-one" /><span className="upi-spark upi-spark-two" /></div>;
  if (visual === "rent") return <div className={`learn-visual learn-visual-rent ${className}`} aria-hidden="true"><span className="rent-envelope" /><span className="rent-key" /><span className="rent-route" /><span className="rent-label">Due first</span></div>;
  return <div className={`learn-visual learn-visual-library ${className}`} aria-hidden="true"><span className="library-mini-tab one" /><span className="library-mini-tab two" /><span className="library-mini-card"><BookOpen className="size-6" />Learn</span><span className="library-mini-route" /></div>;
}

export default function Learn() {
  const [, params] = useRoute("/learn/:slug");
  if (params?.slug) return <LearnDetail slug={params.slug} />;
  return <LearnHub />;
}

function LearnHub() {
  const featured = articles[0];
  return <SiteLayout><PageMeta title="Kubear Learn | Money talk, no jargon" description="Practical and simple guides for salary planning, UPI spending, home money and long-term basics." path="/learn" /><section className="learn-hero"><div className="learn-library-object" aria-hidden="true"><div className="library-tab tab-one" /><div className="library-tab tab-two" /><div className="library-card"><BookOpen className="size-7" /><b>Learn</b><span>money, in plain words</span></div><div className="library-ribbon" /></div><div><p className="week-kicker"><span /> Kubear Learn</p><h1 className="week-section-title">Money talk. <em>No jargon.</em></h1><p className="week-lede">Useful notes for the money questions that come up between salary day, weekend plans and monthly bills.</p></div></section><section className="learn-topic-rail" aria-label="Learn topics">{topics.map((topic) => <Link key={topic.slug} href={`/learn/${topic.slug}`}>{topic.label}<ArrowRight className="size-3" /></Link>)}</section><section className="learn-feature"><ArticleVisual visual={featured.visual} /><div><p className="eyebrow text-[#FF6A35]">Featured read</p><h2>{featured.title}</h2><p>{featured.description}</p><Link href={`/learn/${featured.slug}`} className="button button-primary">Read in {featured.readTime} <ArrowRight className="size-4" /></Link></div></section><section className="learn-feed"><div className="learn-feed-head"><p className="eyebrow">Read in five minutes</p><span>Clear questions. Better next steps.</span></div>{articles.slice(1).map((article, index) => <Link href={`/learn/${article.slug}`} className="learn-feed-item" key={article.slug}><span>0{index + 2}</span><ArticleVisual visual={article.visual} /><div><p className="eyebrow">{getTopic(article.topic)?.label} · {article.readTime}</p><h2>{article.title}</h2><p>{article.description}</p></div><ArrowRight className="size-5" /></Link>)}</section></SiteLayout>;
}

function LearnDetail({ slug }: { slug: string }) {
  const article = getArticle(slug); const topic = getTopic(slug);
  if (topic && !article) return <TopicPage slug={slug} />;
  if (!article) return <SiteLayout><PageMeta title="Learn | Kubear" description="Simple money notes from Kubear." path="/learn" /><section className="px-5 py-32 text-center"><h1 className="section-title">That guide is not here yet.</h1><Link href="/learn" className="button button-primary mt-8">Back to Learn</Link></section></SiteLayout>;
  const related = articles.filter((item) => item.slug !== article.slug && (item.topic === article.topic || item.tool)).slice(0, 2);
  return <SiteLayout><PageMeta title={`${article.title} | Kubear Learn`} description={article.description} path={`/learn/${article.slug}`} /><article className="article-page"><Link href="/learn" className="article-back"><ArrowLeft className="size-4" /> Back to Learn</Link><div className="article-intro"><p className="week-kicker"><span /> {getTopic(article.topic)?.label} · {article.readTime}</p><h1>{article.title}</h1><p>{article.description}</p></div><ArticleVisual visual={article.visual} className="article-hero-visual" /><div className="article-body"><aside><Sparkles className="size-5" /><p>{article.takeaway}</p></aside><div>{article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<p className="article-safety">This article is general education. It is not personal financial, tax or investment advice.</p>{article.tool ? <Link href={article.tool.href} className="article-tool-link">{article.tool.label} <ArrowRight className="size-4" /></Link> : null}</div></div><section className="article-related"><p className="eyebrow">Keep reading</p>{related.map((item) => <Link href={`/learn/${item.slug}`} key={item.slug}><span><Clock3 className="size-4" /> {item.readTime}</span><b>{item.title}</b><ArrowRight className="size-4" /></Link>)}</section></article></SiteLayout>;
}

function TopicPage({ slug }: { slug: string }) { const topic = getTopic(slug)!; const collection = articles.filter((article) => article.topic === slug); return <SiteLayout><PageMeta title={`${topic.title} | Kubear Learn`} description={topic.description} path={`/learn/${topic.slug}`} /><section className="topic-hero"><p className="week-kicker"><span /> Kubear Learn</p><h1 className="week-section-title">{topic.title}</h1><p className="week-lede">{topic.description}</p></section><section className="topic-list">{collection.length ? collection.map((article) => <Link href={`/learn/${article.slug}`} key={article.slug}><ArticleVisual visual={article.visual} /><div><p className="eyebrow">{article.readTime}</p><h2>{article.title}</h2><p>{article.description}</p></div><ArrowRight className="size-5" /></Link>) : <p className="topic-empty">This collection is being built. Start with a guide below.</p>}{articles.filter((article) => !collection.includes(article)).slice(0, 3).map((article) => <Link href={`/learn/${article.slug}`} key={article.slug}><ArticleVisual visual={article.visual} /><div><p className="eyebrow">Related · {article.readTime}</p><h2>{article.title}</h2><p>{article.description}</p></div><ArrowRight className="size-5" /></Link>)}</section></SiteLayout>; }
