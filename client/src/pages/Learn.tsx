/* Kubear Learn is the practical editorial desk: 50 trusted notes and planning tools live in one deliberate journey. */
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CalendarDays, 
  CheckCircle2, 
  ChevronRight, 
  Clock3, 
  Compass, 
  ExternalLink, 
  Filter, 
  Layers, 
  RefreshCw, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  Tag, 
  UserRound, 
  X 
} from "lucide-react";
import { Streamdown } from "streamdown";
import { useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { LearnDeskTools } from "@/components/LearnDeskTools";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { getLearnTopic, learnTopics } from "@/lib/learnTopics";
import { trpc } from "@/lib/trpc";

const displayDate = (value: Date | string | null | undefined) =>
  value
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      }).format(new Date(value))
    : "";

function ArticleVisual({ visual, className = "" }: { visual: string; className?: string }) {
  if (visual === "salary")
    return (
      <div className={`learn-visual learn-visual-instrument visual-salary ${className}`} aria-hidden="true">
        <span className="article-visual-kicker">Salary jobs</span>
        <div><i /><b>Rent</b><small>placed</small></div>
        <div><i /><b>Goa</b><small>visible</small></div>
        <div><i /><b>Buffer</b><small>saved</small></div>
      </div>
    );
  if (visual === "upi")
    return (
      <div className={`learn-visual learn-visual-instrument visual-upi ${className}`} aria-hidden="true">
        <span className="article-visual-kicker">UPI week</span>
        <div className="article-visual-days">
          <i>M</i><i>T</i><i>W</i><i>T</i><i className="today">F</i><i>S</i><i>S</i>
        </div>
        <b>Friday check-in</b>
      </div>
    );
  if (visual === "rent")
    return (
      <div className={`learn-visual learn-visual-instrument visual-rent ${className}`} aria-hidden="true">
        <span className="article-visual-kicker">Commitments</span>
        <div className="article-visual-runway">
          <i>05</i><b>Rent</b><i>11</i><b>Card</b><i>27</i><b>Plan</b>
        </div>
        <span>Due first</span>
      </div>
    );
  if (visual === "goa")
    return (
      <div className={`learn-visual learn-visual-instrument visual-goa ${className}`} aria-hidden="true">
        <span className="article-visual-kicker">Goal marker</span>
        <div className="article-visual-goal">
          <i /><b>₹15K</b><small>saved so far</small>
        </div>
        <span>one plan at a time</span>
      </div>
    );
  if (visual === "home")
    return (
      <div className={`learn-visual learn-visual-instrument visual-home ${className}`} aria-hidden="true">
        <span className="article-visual-kicker">Selected sharing</span>
        <div><b>Home</b><span>Electricity</span><span>Groceries</span></div>
        <div><b>Personal</b><span>Lunch out</span><span>Weekend plan</span></div>
      </div>
    );
  return (
    <div className={`learn-visual learn-visual-instrument visual-library ${className}`} aria-hidden="true">
      <span className="article-visual-kicker">Kubear Learn</span>
      <BookOpen className="size-7" />
      <b>Money, in focus</b>
      <span>Plain words, no jargon</span>
    </div>
  );
}

export default function Learn() {
  const [, params] = useRoute("/learn/:slug");
  if (params?.slug) return <LearnDetail slug={params.slug} />;
  return <LearnHub />;
}

function LearnHub() {
  const query = trpc.learn.hub.useQuery();
  const [search, setSearch] = useState("");
  const [activeTopicFilter, setActiveTopicFilter] = useState<string>("all");

  const allArticles = useMemo(() => query.data?.articles ?? [], [query.data?.articles]);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesSearch =
        !search ||
        `${article.title} ${article.dek} ${article.topic} ${article.category} ${article.takeaway} ${article.indianScenario}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesTopic =
        activeTopicFilter === "all" ||
        article.topic === activeTopicFilter ||
        (activeTopicFilter === "tax-records" && (article.topic === "taxes-records" || article.topic === "tax-records")) ||
        (activeTopicFilter === "long-term" && (article.topic === "wealth-independence" || article.topic === "long-term"));

      return matchesSearch && matchesTopic;
    });
  }, [allArticles, search, activeTopicFilter]);

  const featured = allArticles[0] ?? query.data?.featured;

  // Group all articles by Pillar / Topic
  const pillarGroups = useMemo(() => {
    return learnTopics.map((topic) => {
      const topicArticles = allArticles.filter(
        (a) =>
          a.topic === topic.slug ||
          (topic.slug === "tax-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
          (topic.slug === "long-term" && (a.topic === "wealth-independence" || a.topic === "long-term"))
      );
      return {
        topic,
        articles: topicArticles,
      };
    });
  }, [allArticles]);

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Learn | 50 Plain-English Indian Money Guides & Planning Tools"
        description="Comprehensive, verified guides for salary day, UPI habits, rent vs buy, index funds, debt snowball, insurance and retirement in India."
        path="/learn"
      />

      {/* Editorial Hero Banner */}
      <section className="learn-hero learn-desk-hero">
        <div className="learn-library-object" aria-hidden="true">
          <div className="library-tab tab-one" />
          <div className="library-tab tab-two" />
          <div className="library-card">
            <BookOpen className="size-7" />
            <b>50 Guides</b>
            <span>Editorial & Planning Desk</span>
          </div>
          <div className="library-ribbon" />
        </div>
        <div>
          <p className="week-kicker">
            <span /> Kubear Editorial Library
          </p>
          <h1 className="week-section-title">
            Money talk. <em>50 practical next steps.</em>
          </h1>
          <p className="week-lede">
            Short, verified notes and calculators for the decisions that shape Indian financial lives - from salary day and credit card traps to rent vs buy and FIRE math.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Link className="learn-desk-hero-action" href="/learn/tools">
              Try a planning tool <ArrowRight className="size-4" />
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#123630]/20 bg-[#FAF7F0] text-xs font-semibold text-[#123630]">
              <ShieldCheck className="size-3.5 text-[#C96632]" /> Complete 10-Pillar Curriculum
            </span>
          </div>
        </div>
      </section>

      {/* Topic Horizontal Rail */}
      <section className="learn-topic-rail no-scrollbar" aria-label="Learn topic taxonomy">
        <button
          type="button"
          onClick={() => setActiveTopicFilter("all")}
          className={`shrink-0 transition-colors ${activeTopicFilter === "all" ? "bg-[#143B35] text-[#FFF8EE] font-bold" : ""}`}
        >
          All Topics ({allArticles.length})
        </button>
        {learnTopics.map((topic) => {
          const count = allArticles.filter(
            (a) =>
              a.topic === topic.slug ||
              (topic.slug === "tax-records" && (a.topic === "taxes-records" || a.topic === "tax-records")) ||
              (topic.slug === "long-term" && (a.topic === "wealth-independence" || a.topic === "long-term"))
          ).length;
          const isActive = activeTopicFilter === topic.slug;
          return (
            <button
              key={topic.slug}
              type="button"
              onClick={() => setActiveTopicFilter(topic.slug)}
              className={`shrink-0 transition-colors ${isActive ? "bg-[#143B35] text-[#FFF8EE] font-bold" : ""}`}
            >
              {topic.label} ({count})
            </button>
          );
        })}
      </section>

      {/* Interactive Planning Tools Section */}
      <LearnDeskTools compact />

      {query.isLoading ? (
        <LibraryLoading />
      ) : query.isError ? (
        <LibraryUnavailable onRetry={() => void query.refetch()} />
      ) : (
        <>
          {/* Featured Cornerstone Article (when not searching/filtering) */}
          {!search && activeTopicFilter === "all" && featured ? (
            <section className="learn-feature">
              <ArticleVisual visual={featured.heroType} />
              <div>
                <p className="eyebrow text-[#C96632]">
                  Cornerstone Guide · Issue {String(featured.calendarOrder).padStart(2, "0")}
                </p>
                <h2>{featured.title}</h2>
                <p>{featured.dek}</p>
                <div className="flex items-center gap-3 mt-4">
                  <Link href={`/learn/${featured.slug}`} className="button button-primary">
                    Read guide ({featured.readTime}) <ArrowRight className="size-4" />
                  </Link>
                  <span className="text-xs font-mono text-[#53625B]">{featured.category}</span>
                </div>
              </div>
            </section>
          ) : null}

          {/* Search & Filter Bar */}
          <section className="learn-archive-controls">
            <label className="learn-search">
              <Search className="size-4 text-[#143B35]" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by topic, keyword (e.g. SIP, EMI, CIBIL, Tax, Gold)..."
                aria-label="Search all 50 Learn guides"
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="p-1 text-xs text-gray-500 hover:text-black"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </label>
            <div className="flex items-center gap-3">
              <span className="learn-archive-count">
                Showing {filteredArticles.length} of {allArticles.length} guides
              </span>
              {activeTopicFilter !== "all" || search ? (
                <button
                  type="button"
                  onClick={() => {
                    setActiveTopicFilter("all");
                    setSearch("");
                  }}
                  className="text-xs font-bold text-[#C96632] hover:underline"
                >
                  Reset filters
                </button>
              ) : null}
            </div>
          </section>

          {/* Articles Feed */}
          <section className="learn-feed">
            <div className="learn-feed-head">
              <p className="eyebrow">
                {activeTopicFilter !== "all"
                  ? getLearnTopic(activeTopicFilter)?.label || "Filtered Collection"
                  : search
                  ? "Search Results"
                  : "All 50 Published Guides"}
              </p>
              <span>Verified Indian financial frameworks</span>
            </div>

            <div className="grid gap-3">
              {filteredArticles.map((article) => (
                <Link href={`/learn/${article.slug}`} className="learn-feed-item group" key={article.slug}>
                  <span className="font-mono font-bold text-xs text-[#C96632]">
                    #{String(article.calendarOrder).padStart(2, "0")}
                  </span>
                  <ArticleVisual visual={article.heroType} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#143B35]/10 text-[#143B35]">
                        {getLearnTopic(article.topic)?.label ?? article.topic}
                      </span>
                      <span className="text-[11px] text-[#65726C] font-mono">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="group-hover:text-[#C96632] transition-colors">{article.title}</h2>
                    <p className="line-clamp-2">{article.dek}</p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-[#143B35] group-hover:translate-x-1 group-hover:text-[#C96632] transition-transform" />
                </Link>
              ))}

              {filteredArticles.length === 0 ? (
                <div className="p-8 text-center bg-[#FEFCF7] rounded-2xl border border-[#102B28]/10 my-4">
                  <p className="text-base font-bold text-[#102B28]">No guides match your search.</p>
                  <p className="text-xs text-[#65726C] mt-1">Try clearing your search query or selecting 'All Topics'.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveTopicFilter("all");
                    }}
                    className="button button-primary mt-4"
                  >
                    View all 50 guides
                  </button>
                </div>
              ) : null}
            </div>
          </section>

          {/* 10-Pillar Full Curriculum Overview */}
          <section className="learn-calendar">
            <div className="learn-calendar-head">
              <div>
                <h2>The 10-Pillar Curriculum</h2>
                <p>A comprehensive path spanning every phase of modern Indian financial life.</p>
              </div>
              <Link href="/learn/tools" className="text-xs font-bold text-[#C96632] hover:underline flex items-center gap-1">
                Explore calculation tools <ChevronRight className="size-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillarGroups.map(({ topic, articles }) => (
                <section className="learn-month-card" key={topic.slug}>
                  <div className="flex items-start justify-between gap-2 border-b border-[#102B28]/10 pb-2">
                    <div>
                      <h3 className="text-base font-bold text-[#102B28]">{topic.label}</h3>
                      <p className="text-xs text-[#53625B] mt-0.5">{topic.description}</p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#C96632]/10 text-[#C96632] font-mono text-[10px] font-bold">
                      {articles.length} guides
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {articles.map((article) => (
                      <li className="is-public flex items-start gap-2" key={article.slug}>
                        <span className="font-mono text-[11px] font-bold text-[#C96632] shrink-0">
                          {String(article.calendarOrder).padStart(2, "0")}
                        </span>
                        <Link href={`/learn/${article.slug}`} className="hover:text-[#C96632] transition-colors text-xs font-medium text-[#102B28] leading-relaxed">
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </>
      )}
    </SiteLayout>
  );
}

function LearnDetail({ slug }: { slug: string }) {
  const topic = getLearnTopic(slug);
  if (topic) return <TopicPage slug={slug} />;
  const query = trpc.learn.article.useQuery({ slug });
  const article = query.data;

  if (query.isLoading)
    return (
      <SiteLayout>
        <LibraryLoading />
      </SiteLayout>
    );

  if (query.isError)
    return (
      <SiteLayout>
        <LibraryUnavailable onRetry={() => void query.refetch()} />
      </SiteLayout>
    );

  if (!article)
    return (
      <SiteLayout>
        <PageMeta
          title="Learn Guide | Kubear"
          description="Simple money notes and useful planning tools from Kubear."
          path="/learn"
        />
        <section className="learn-empty">
          <div>
            <h2>That note is not public yet.</h2>
            <p>Explore the full 50-article library or try an interactive planning tool.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/learn" className="button button-primary">
                Back to Learn
              </Link>
              <Link href="/learn/tools" className="button button-outline">
                Explore Learn tools
              </Link>
            </div>
          </div>
        </section>
      </SiteLayout>
    );

  const toolHref = article.toolHref?.replace(/^\/tools(?=\/|$)/, "/learn/tools");

  return (
    <SiteLayout>
      <PageMeta
        title={article.seoTitle}
        description={article.metaDescription}
        path={article.canonicalPath}
        type="article"
        article={{
          author: article.authorName,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
        }}
      />
      <article className="article-page">
        <Link href="/learn" className="article-back">
          <ArrowLeft className="size-4" /> Back to all 50 guides
        </Link>
        <div className="article-intro">
          <p className="week-kicker">
            <span /> {getLearnTopic(article.topic)?.label ?? article.topic} · Issue{" "}
            {String(article.calendarOrder).padStart(2, "0")}
          </p>
          <h1>{article.title}</h1>
          <p>{article.dek}</p>
          <div className="article-meta-strip">
            <span>
              <CalendarDays className="size-3.5" /> Published {displayDate(article.publishedAt)}
            </span>
            <span>
              <Clock3 className="size-3.5" /> {article.readTime}
            </span>
            <span>
              <UserRound className="size-3.5" /> {article.authorName}
            </span>
            {article.updatedAt ? (
              <span>Updated {displayDate(article.updatedAt)}</span>
            ) : null}
          </div>
        </div>

        <ArticleVisual visual={article.heroType} className="article-hero-visual" />

        <div className="article-body">
          <aside>
            <Sparkles className="size-5 text-[#C96632]" />
            <p>{article.takeaway}</p>
          </aside>
          <div>
            <div className="learn-prose">
              <Streamdown>{article.bodyMarkdown}</Streamdown>
            </div>

            {article.indianScenario ? (
              <div className="my-6 p-4 rounded-xl bg-[#FAF7F0] border border-[#143B35]/15">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632] mb-1">
                  Real Indian Context
                </p>
                <p className="text-sm text-[#143B35] leading-relaxed">{article.indianScenario}</p>
              </div>
            ) : null}

            <p className="article-safety mt-6">
              This article is general financial education. It is not personal tax, legal, or investment advice.
            </p>

            {toolHref && article.toolLabel ? (
              <Link href={toolHref} className="article-tool-link">
                {article.toolLabel} <ArrowRight className="size-4" />
              </Link>
            ) : article.ctaHref ? (
              <Link href={article.ctaHref} className="article-tool-link">
                {article.ctaLabel} <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </div>

        {article.sources && article.sources.length > 0 ? (
          <section className="article-sources">
            <h2>Sources & Statutory References</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.id}>
                  <a href={source.sourceUrl} target="_blank" rel="noreferrer">
                    {source.sourceTitle}
                    <ExternalLink className="size-3" />
                  </a>
                  <small>Verified route recorded {displayDate(source.accessedAt)}</small>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {article.related && article.related.length > 0 ? (
          <section className="article-related">
            <p className="eyebrow">Related Guides</p>
            {article.related.map((item) => (
              <Link href={`/learn/${item.slug}`} key={item.slug}>
                <span>
                  <Clock3 className="size-4" /> {item.readTime}
                </span>
                <b>{item.title}</b>
                <ArrowRight className="size-4" />
              </Link>
            ))}
          </section>
        ) : null}
      </article>
    </SiteLayout>
  );
}

function TopicPage({ slug }: { slug: string }) {
  const topic = getLearnTopic(slug)!;
  const query = trpc.learn.topic.useQuery({ topic: slug });

  return (
    <SiteLayout>
      <PageMeta
        title={`${topic.title} | Kubear Learn`}
        description={topic.description}
        path={`/learn/${topic.slug}`}
      />
      <section className="topic-hero">
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C96632] mb-3 hover:underline">
          <ArrowLeft className="size-3.5" /> All Topics
        </Link>
        <p className="week-kicker">
          <span /> {topic.label}
        </p>
        <h1 className="week-section-title">{topic.title}</h1>
        <p className="week-lede">{topic.description}</p>
        <Link href="/learn/tools" className="topic-tools-link">
          Try a planning tool <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="topic-list">
        {query.isLoading ? (
          <LibraryLoading />
        ) : query.isError ? (
          <LibraryUnavailable onRetry={() => void query.refetch()} />
        ) : query.data?.length ? (
          query.data.map((article) => (
            <Link href={`/learn/${article.slug}`} key={article.slug}>
              <ArticleVisual visual={article.heroType} />
              <div>
                <p className="eyebrow">
                  Issue {String(article.calendarOrder).padStart(2, "0")} · {article.readTime}
                </p>
                <h2>{article.title}</h2>
                <p>{article.dek}</p>
              </div>
              <ArrowRight className="size-5" />
            </Link>
          ))
        ) : (
          <p className="topic-empty">
            This collection is being carefully built. Try a practical Learn tool while the next notes are reviewed.
          </p>
        )}
      </section>
      <LearnDeskTools compact />
    </SiteLayout>
  );
}

function LibraryLoading() {
  return (
    <section className="learn-loading" aria-live="polite">
      <div>
        <p className="eyebrow">Kubear Learn</p>
        <h2>Opening the library.</h2>
        <p>Loading 50 verified editorial notes and calculators...</p>
        <div className="learn-loading-slips" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </section>
  );
}

function LibraryUnavailable({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="learn-empty learn-unavailable" role="status">
      <div>
        <p className="eyebrow text-[#C96632]">Learn is taking a moment</p>
        <h2>The library did not open just yet.</h2>
        <p>
          Your notes and tools are still here. Try again, or use a planning tool while the library reconnects.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="button button-primary" type="button" onClick={onRetry}>
            <RefreshCw className="size-4" />
            Try again
          </button>
          <Link href="/learn/tools" className="button button-outline">
            Explore Learn tools
          </Link>
        </div>
      </div>
    </section>
  );
}
