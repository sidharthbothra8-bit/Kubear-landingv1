/* Kubear Learn & Tools is the unified editorial & planning desk: 50 trusted notes and interactive planning tools live in one deliberate workbench. */
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  Calculator,
  CalendarDays, 
  CheckCircle2, 
  ChevronLeft, 
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
  TrendingUp,
  UserRound, 
  WalletCards,
  X 
} from "lucide-react";
import { Streamdown } from "streamdown";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { ContextualPairings } from "@/components/ContextualPairings";
import { InteractiveCalculatorSuite } from "@/components/InteractiveCalculatorSuite";
import { LearnDeskTools } from "@/components/LearnDeskTools";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { getLearnTopic, learnTopics } from "@/lib/learnTopics";
import { trpc } from "@/lib/trpc";

type ViewMode = "all" | "calculators" | "guides";

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
  const [location] = useLocation();
  const query = trpc.learn.hub.useQuery();
  const [search, setSearch] = useState("");
  const [activeTopicFilter, setActiveTopicFilter] = useState<string>("all");
  const topicRailRef = useRef<HTMLDivElement>(null);

  // Parse view mode from query parameter (e.g., ?tab=calculators or ?view=guides)
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get("tab") || searchParams.get("view");
      if (tab === "calculators" || tab === "tools") return "calculators";
      if (tab === "guides" || tab === "articles") return "guides";
    }
    return "all";
  });

  // Sync state if URL search params change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get("tab") || searchParams.get("view");
      if (tab === "calculators" || tab === "tools") setViewMode("calculators");
      else if (tab === "guides" || tab === "articles") setViewMode("guides");
    }
  }, [location]);

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

  const scrollTopicRail = (direction: "left" | "right") => {
    if (topicRailRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      topicRailRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Learn & Tools | 50 Plain-English Guides & Interactive Planning Tools"
        description="Unified desk for Indian money decisions: interactive SIP, EMI & Goa runway calculators paired side-by-side with 50 verified editorial guides."
        path="/learn"
      />

      {/* Editorial & Planning Hero Banner */}
      <section className="learn-hero learn-desk-hero">
        <div className="learn-library-object" aria-hidden="true">
          <div className="library-tab tab-one" />
          <div className="library-tab tab-two" />
          <div className="library-card">
            <BookOpen className="size-7 text-[#C96632]" />
            <b>50 Guides & Tools</b>
            <span>Editorial & Planning Desk</span>
          </div>
          <div className="library-ribbon" />
        </div>
        <div>
          <p className="week-kicker">
            <span /> Kubear Learn & Tools Desk
          </p>
          <h1 className="week-section-title">
            Money talk & practical math. <em>One unified desk.</em>
          </h1>
          <p className="week-lede">
            Short, verified guides and interactive calculators for the decisions that shape Indian financial lives — from salary day SIPs and rent vs buy math to emergency runway and FIRE goals.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <button
              type="button"
              onClick={() => setViewMode("calculators")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#123630] text-[#FFF8EE] text-xs font-bold shadow-xs hover:bg-[#1C4E46] transition-all cursor-pointer"
            >
              <Calculator className="size-3.5 text-[#FF5C2B]" />
              <span>Interactive Calculators (3)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("guides")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#123630]/20 bg-[#FAF7F0] text-xs font-bold text-[#123630] hover:bg-white transition-all cursor-pointer"
            >
              <BookOpen className="size-3.5 text-[#C96632]" />
              <span>Browse 50 Guides</span>
            </button>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#123630]/15 bg-white text-[11px] font-semibold text-[#4F645D]">
              <ShieldCheck className="size-3.5 text-[#C96632]" /> 10-Pillar Verified Curriculum
            </span>
          </div>
        </div>
      </section>

      {/* Prominent Segmented Switcher Bar */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2" aria-label="Desk view mode selector">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-[#FAF7F0] border border-[#123630]/12">
          {/* Segmented Switcher Controls */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto p-1 bg-[#FFFDF8] rounded-xl border border-[#123630]/10 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "all"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <Layers className="size-3.5" />
              <span>All (Desk)</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  viewMode === "all" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                53
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("calculators")}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "calculators"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <Calculator className="size-3.5" />
              <span>Interactive Calculators</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  viewMode === "calculators" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                3
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("guides")}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "guides"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <BookOpen className="size-3.5" />
              <span>Guides & Articles</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  viewMode === "guides" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                50
              </span>
            </button>
          </div>

          <p className="text-xs text-[#5C6E68] text-center sm:text-right">
            {viewMode === "all" && "Showing complete unified desk: tools, contextual pairs & 50 guides."}
            {viewMode === "calculators" && "Showing interactive calculators & contextual math models."}
            {viewMode === "guides" && "Showing 50 verified editorial guides across 10 financial pillars."}
          </p>
        </div>
      </section>

      {/* Modern Interactive Topic Filter Carousel */}
      {(viewMode === "all" || viewMode === "guides") && (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3" aria-label="Topic filter taxonomy">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#5B6D67] flex items-center gap-1.5">
              <Filter className="size-3.5 text-[#C96632]" /> Browse by Life Moment / Pillar
            </p>
            <div className="hidden sm:flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollTopicRail("left")}
                className="p-1.5 rounded-lg border border-[#123630]/15 bg-[#FFFDF8] text-[#123630] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                aria-label="Scroll topics left"
              >
                <ChevronLeft className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTopicRail("right")}
                className="p-1.5 rounded-lg border border-[#123630]/15 bg-[#FFFDF8] text-[#123630] hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                aria-label="Scroll topics right"
              >
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </div>

          <div
            ref={topicRailRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 px-0.5 scroll-smooth"
          >
            <button
              type="button"
              onClick={() => setActiveTopicFilter("all")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeTopicFilter === "all"
                  ? "bg-[#123630] text-[#FFF8EE] border border-[#123630] font-semibold shadow-xs"
                  : "bg-[#FFFDF8] border border-[#123630]/15 text-[#3E5750] hover:border-[#123630]/35 hover:text-[#123630] hover:bg-white"
              }`}
            >
              <span>All Topics</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  activeTopicFilter === "all"
                    ? "bg-[#FFF8EE]/20 text-[#FFF8EE]"
                    : "bg-[#123630]/8 text-[#536861]"
                }`}
              >
                {allArticles.length}
              </span>
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[#123630] text-[#FFF8EE] border border-[#123630] font-semibold shadow-xs"
                      : "bg-[#FFFDF8] border border-[#123630]/15 text-[#3E5750] hover:border-[#123630]/35 hover:text-[#123630] hover:bg-white"
                  }`}
                >
                  <span>{topic.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? "bg-[#FFF8EE]/20 text-[#FFF8EE]"
                        : "bg-[#123630]/8 text-[#536861]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* VIEW: CALCULATORS ONLY */}
      {viewMode === "calculators" && (
        <>
          <InteractiveCalculatorSuite />
          <ContextualPairings />
          <LearnDeskTools compact />
        </>
      )}

      {/* VIEW: ALL (DESK) - UNIFIED HUB */}
      {viewMode === "all" && (
        <>
          {/* Interactive Calculator Quick Suite */}
          <LearnDeskTools compact />

          {/* Side-by-Side Contextual Pairings */}
          <ContextualPairings />
        </>
      )}

      {/* ARTICLES & GUIDES CONTENT (Visible in 'all' and 'guides' view modes) */}
      {(viewMode === "all" || viewMode === "guides") && (
        <>
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
                    placeholder="Search by topic, keyword (e.g. SIP, EMI, CIBIL, Tax, Gold, Rent vs Buy)..."
                    aria-label="Search all 50 Learn guides"
                  />
                  {search ? (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="p-1 text-xs text-gray-500 hover:text-black cursor-pointer"
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
                      className="text-xs font-bold text-[#C96632] hover:underline cursor-pointer"
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

                <div className="grid gap-3.5">
                  {filteredArticles.map((article) => (
                    <Link
                      href={`/learn/${article.slug}`}
                      className="learn-feed-item group hover:shadow-xs transition-all duration-150"
                      key={article.slug}
                    >
                      <span className="font-mono font-bold text-xs text-[#C96632]">
                        #{String(article.calendarOrder).padStart(2, "0")}
                      </span>
                      <ArticleVisual visual={article.heroType} />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#143B35]/10 text-[#143B35]">
                            {getLearnTopic(article.topic)?.label ?? article.topic}
                          </span>
                          <span className="text-[11px] text-[#65726C] font-mono">
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="group-hover:text-[#C96632] transition-colors text-lg sm:text-xl font-serif text-[#123630]">
                          {article.title}
                        </h2>
                        <p className="line-clamp-2 text-xs sm:text-sm text-[#5B6D67] mt-1 leading-relaxed">
                          {article.dek}
                        </p>
                      </div>
                      <ArrowRight className="size-5 shrink-0 text-[#143B35] group-hover:translate-x-1 group-hover:text-[#C96632] transition-all" />
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
                        className="button button-primary mt-4 cursor-pointer"
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
                  <button
                    type="button"
                    onClick={() => setViewMode("calculators")}
                    className="text-xs font-bold text-[#C96632] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Explore calculation tools <ChevronRight className="size-3" />
                  </button>
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
                Back to Learn & Tools Desk
              </Link>
              <Link href="/learn/tools" className="button button-outline">
                Explore Calculators
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
      <article className="article-page pt-24 sm:pt-28 md:pt-32 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#123630]/15 text-xs font-mono font-bold text-[#3E524D] hover:text-[#123630] hover:border-[#123630]/35 transition-all shadow-xs"
          >
            <ArrowLeft className="size-3.5 text-[#C96632]" />
            <span>Back to Learn & Tools</span>
          </Link>
          {toolHref ? (
            <Link
              href={toolHref}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#C96632] hover:underline"
            >
              <span>Interactive Calculator</span>
              <ArrowRight className="size-3" />
            </Link>
          ) : null}
        </div>
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
        title={`${topic.title} | Kubear Learn & Tools`}
        description={topic.description}
        path={`/learn/${topic.slug}`}
      />
      <section className="topic-hero pt-24 sm:pt-28 md:pt-32 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#123630]/15 text-xs font-mono font-bold text-[#3E524D] hover:text-[#123630] hover:border-[#123630]/35 transition-all shadow-xs"
          >
            <ArrowLeft className="size-3.5 text-[#C96632]" />
            <span>Back to Learn & Tools</span>
          </Link>
        </div>
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
            This collection is being carefully built. Try a practical planning tool while the next notes are reviewed.
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
        <p className="eyebrow">Kubear Learn & Tools</p>
        <h2>Opening the library.</h2>
        <p>Loading 50 verified editorial notes and interactive calculators...</p>
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
        <p className="eyebrow text-[#C96632]">Desk is taking a moment</p>
        <h2>The library did not open just yet.</h2>
        <p>
          Your notes and tools are still here. Try again, or use a planning tool while the library reconnects.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="button button-primary cursor-pointer" type="button" onClick={onRetry}>
            <RefreshCw className="size-4" />
            Try again
          </button>
          <Link href="/learn/tools" className="button button-outline">
            Explore Planning Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
