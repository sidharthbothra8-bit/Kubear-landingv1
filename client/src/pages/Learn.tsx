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
import { ArticleVisual } from "@/components/ArticleVisual";
import { LearnLibraryVisual } from "@/components/LearnLibraryVisual";
import { getLearnTopic, learnTopics } from "@/lib/learnTopics";
import {
  staticParsedArticles,
  getStaticArticleBySlug,
  getStaticArticlesByTopic,
} from "@shared/articlesData";

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

export default function Learn() {
  const [, params] = useRoute("/learn/:slug");
  if (params?.slug) return <LearnDetail slug={params.slug} />;
  return <LearnHub />;
}

function LearnHub() {
  const [location] = useLocation();
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

  const allArticles = staticParsedArticles;

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

  const featured = allArticles[0];


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
        <LearnLibraryVisual />
        <div>
          <p className="week-kicker">
            <span /> Kubear Learn & Tools Desk
          </p>
          <h1 className="week-section-title">
            Money talk &amp; practical math.
          </h1>
          <p className="week-lede">
            Short, verified guides and interactive calculators for the decisions that shape Indian financial lives, from salary day SIPs and rent vs buy math to emergency runway and FIRE goals.
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

      {/* Segmented Switcher Bar */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2" aria-label="Desk view mode selector">
        <div className="flex items-center justify-center sm:justify-start">
          {/* Segmented Switcher Controls */}
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-1 sm:gap-1.5 w-full sm:w-auto p-1 bg-[#FAF7F0] rounded-xl sm:rounded-2xl border border-[#123630]/12 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                viewMode === "all"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <Layers className="size-3.5 shrink-0" />
              <span className="truncate">All</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none shrink-0 ${
                  viewMode === "all" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                53
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("calculators")}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                viewMode === "calculators"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <Calculator className="size-3.5 shrink-0" />
              <span className="truncate">
                <span className="sm:hidden">Calculators</span>
                <span className="hidden sm:inline">Interactive Calculators</span>
              </span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none shrink-0 ${
                  viewMode === "calculators" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                3
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("guides")}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                viewMode === "guides"
                  ? "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : "text-[#4A5E58] hover:text-[#123630] hover:bg-[#123630]/5"
              }`}
            >
              <BookOpen className="size-3.5 shrink-0" />
              <span className="truncate">
                <span className="sm:hidden">Guides</span>
                <span className="hidden sm:inline">Guides & Articles</span>
              </span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none shrink-0 ${
                  viewMode === "guides" ? "bg-[#FFF8EE]/20 text-[#FFF8EE]" : "bg-[#123630]/8 text-[#546862]"
                }`}
              >
                50
              </span>
            </button>
          </div>
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

          <div className="relative group">
            {/* Left fade indicator */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#FBF8F2] to-transparent z-10 opacity-70" />
            {/* Right fade indicator */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FBF8F2] to-transparent z-10 opacity-90" />

            <div
              ref={topicRailRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
            >
              <button
                type="button"
                onClick={() => setActiveTopicFilter("all")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0 ${
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
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0 ${
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
          {/* Featured Cornerstone Article (when not searching/filtering) */}
          {!search && activeTopicFilter === "all" && featured ? (
                <section className="learn-feature">
                  <ArticleVisual visual={featured.heroType} topic={featured.topic} />
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

                <div className="flex flex-col gap-3">
                  {filteredArticles.map((article) => (
                    <Link
                      href={`/learn/${article.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] hover:bg-white border border-[#143B35]/12 hover:border-[#143B35]/30 hover:shadow-md transition-all duration-200 no-underline"
                      key={article.slug}
                    >
                      {/* Left: Issue Index Tag & Thumbnail Visual */}
                      <div className="flex items-center sm:items-start gap-2.5 sm:gap-3 shrink-0">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[#FAF5EE] border border-[#E8DCC8] font-mono font-bold text-[11px] sm:text-xs text-[#C96632] shrink-0">
                          #{String(article.calendarOrder).padStart(2, "0")}
                        </span>
                        <div className="w-48 sm:w-56 shrink-0 hidden md:block">
                          <ArticleVisual visual={article.heroType} topic={article.topic} compact={true} />
                        </div>
                      </div>

                      {/* Middle: Editorial Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                          <span className="px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold font-mono uppercase tracking-wider bg-[#143B35]/10 text-[#143B35]">
                            {getLearnTopic(article.topic)?.label ?? article.topic}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-[#65726C] font-mono flex items-center gap-1">
                            <Clock3 className="size-2.5 sm:size-3 text-[#C96632]" />
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="text-base sm:text-lg md:text-xl font-serif text-[#123630] group-hover:text-[#C96632] transition-colors leading-snug">
                          {article.title}
                        </h2>
                        <p className="line-clamp-2 text-xs sm:text-sm text-[#5B6D67] mt-1 leading-relaxed">
                          {article.dek}
                        </p>
                      </div>

                      {/* Right: Interaction Arrow */}
                      <div className="size-7 sm:size-9 rounded-full bg-[#143B35]/5 group-hover:bg-[#C96632] flex items-center justify-center shrink-0 transition-colors self-end sm:self-center ml-auto">
                        <ArrowRight className="size-3.5 sm:size-4 text-[#143B35] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
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
    </SiteLayout>
  );
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const calculated = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(calculated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#123630]/10 z-50 pointer-events-none">
      <div
        className="h-full bg-[#C96632] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function LearnDetail({ slug }: { slug: string }) {
  const topic = getLearnTopic(slug);
  if (topic) return <TopicPage slug={slug} />;

  const article = getStaticArticleBySlug(slug);

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
      {/* Reading Progress Indicator Bar */}
      <ReadingProgressBar />

      <article className="article-page pt-24 sm:pt-28 md:pt-32 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#123630]/15 text-xs font-mono font-bold text-[#3E524D] hover:text-[#123630] hover:border-[#123630]/35 transition-all shadow-xs"
            >
              <ArrowLeft className="size-3.5 text-[#C96632]" />
              <span>Learn Hub</span>
            </Link>
            <span className="text-xs text-[#8A9B95] font-mono">/</span>
            <Link
              href={`/learn/${article.topic}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FAF7F0] border border-[#123630]/10 text-xs font-mono font-bold text-[#143B35] hover:border-[#123630]/30 transition-all"
            >
              <Tag className="size-3 text-[#C96632]" />
              <span>{getLearnTopic(article.topic)?.label ?? article.topic}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {toolHref ? (
              <Link
                href={toolHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#143B35] text-[#FFF8EE] text-xs font-mono font-bold hover:bg-[#1E4D45] transition-all shadow-xs"
              >
                <Calculator className="size-3 text-[#FF5C2B]" />
                <span>Interactive Math</span>
                <ArrowRight className="size-3" />
              </Link>
            ) : null}
          </div>
        </div>

        <div className="article-intro">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#C96632]/10 text-[#C96632] border border-[#C96632]/20">
              Issue #{String(article.calendarOrder).padStart(2, "0")}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#143B35]/10 text-[#143B35]">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-[#5B6D67] ml-auto">
              <Clock3 className="size-3.5 text-[#C96632]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#123630] font-normal leading-[1.12] tracking-tight">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#556962] font-sans mt-3 leading-relaxed max-w-3xl">
            {article.dek}
          </p>

          {/* Byline & Reviewer Confidence Chip */}
          <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-[#143B35]/10 text-xs font-mono text-[#657670]">
            <span className="flex items-center gap-1.5">
              <UserRound className="size-3.5 text-[#143B35]" />
              <strong>{article.authorName}</strong>
            </span>
            <span className="text-[#A4B3AD]">·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-emerald-700" />
              <span>Verified for Indian statutory rules</span>
            </span>
            <span className="text-[#A4B3AD]">·</span>
            <span>Reviewed {displayDate(article.reviewedAt)}</span>
          </div>
        </div>

        <ArticleVisual visual={article.heroType} topic={article.topic} className="article-hero-visual my-6" />

        {article.takeaway ? (
          <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#FFFDF8] border-l-4 border-[#C96632] border-y border-r border-[#143B35]/15 shadow-xs flex items-start gap-4">
            <div className="size-10 rounded-xl bg-[#FFF5EB] border border-[#FED7AA] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="size-5 text-[#C96632]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C96632] block mb-1">
                Key Takeaway
              </span>
              <p className="text-base sm:text-lg font-medium text-[#102B28] leading-relaxed">
                {article.takeaway}
              </p>
            </div>
          </div>
        ) : null}

        <div className="max-w-none">
          <div className="learn-prose">
            <Streamdown>{article.bodyMarkdown}</Streamdown>
          </div>

          {article.indianScenario ? (
            <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#F4F8F6] border border-[#143B35]/15 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 rounded-full bg-[#143B35]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#143B35]">
                  Real Indian Context
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#1E3F39] leading-relaxed">
                {article.indianScenario}
              </p>
            </div>
          ) : null}

          {toolHref && article.toolLabel ? (
            <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#FAF7F0] border-2 border-[#143B35]/15 text-[#123630] flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF5C2B]/10 text-[#CD4623] mb-2">
                  <Calculator className="size-3 text-[#CD4623]" />
                  Interactive Tool
                </div>
                <h3 className="text-xl font-serif text-[#123630] font-normal">
                  {article.toolLabel}
                </h3>
                <p className="text-xs text-[#52665F] mt-1 max-w-md">
                  Calculate your exact allocation numbers with verified Indian tax and expense rules.
                </p>
              </div>
              <Link
                href={toolHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B19] text-white text-sm font-bold shadow-[0_3px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] transition-all shrink-0 no-underline"
              >
                <span>Open Calculator</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : article.ctaHref ? (
            <div className="my-10 p-6 sm:p-7 rounded-2xl bg-[#FAF7F0] border-2 border-[#143B35]/15 text-[#123630] flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
              <div>
                <h3 className="text-xl font-serif text-[#123630] font-normal">
                  {article.ctaLabel}
                </h3>
              </div>
              <Link
                href={article.ctaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B19] text-white text-sm font-bold shadow-[0_3px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] transition-all shrink-0 no-underline"
              >
                <span>Get Started</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : null}
        </div>

        {"sources" in article && Array.isArray((article as any).sources) && (article as any).sources.length > 0 ? (
          <section className="mt-12 pt-8 border-t border-[#143B35]/15">
            <h3 className="text-xl font-serif text-[#102B28] mb-4">Sources &amp; Statutory References</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {((article as any).sources as { id: number; sourceUrl: string; sourceTitle: string; accessedAt?: Date | string | null }[]).map((source) => (
                <a
                  key={source.id}
                  href={source.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-xl bg-[#FAF7F0] border border-[#143B35]/12 hover:border-[#C96632]/40 hover:bg-white transition-all flex flex-col justify-between gap-2 no-underline"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-[#143B35] group-hover:text-[#C96632] transition-colors leading-snug">
                      {source.sourceTitle}
                    </span>
                    <ExternalLink className="size-3.5 text-[#62726C] group-hover:text-[#C96632] shrink-0 mt-0.5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#718079]">
                    Verified route recorded {displayDate(source.accessedAt)}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {(() => {
          const relatedItems =
            "related" in article && Array.isArray((article as any).related) && (article as any).related.length > 0
              ? (article as any).related
              : article.relatedSlugs && article.relatedSlugs.length > 0
              ? article.relatedSlugs
                  .map((relSlug: string) => getStaticArticleBySlug(relSlug))
                  .filter((item: any): item is NonNullable<typeof item> => Boolean(item))
              : [];

          if (relatedItems.length === 0) return null;

          return (
            <section className="mt-12 pt-8 border-t border-[#143B35]/15">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632]">
                  Related Guides
                </p>
                <span className="text-xs font-mono text-[#62726C]">
                  Issue #{String(article.calendarOrder).padStart(2, "0")} series
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedItems.map((item: any) => (
                  <Link
                    href={`/learn/${item.slug}`}
                    key={item.slug}
                    className="group p-5 rounded-2xl bg-[#FFFDF8] hover:bg-white border border-[#143B35]/12 hover:border-[#143B35]/30 hover:shadow-md transition-all flex flex-col justify-between gap-3 no-underline"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#62726C] mb-2">
                        <Clock3 className="size-3 text-[#C96632]" />
                        <span>{item.readTime}</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-[#102B28] group-hover:text-[#C96632] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#C96632] group-hover:translate-x-1 transition-transform self-end mt-2">
                      <span>Read guide</span>
                      <ArrowRight className="size-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

      </article>
    </SiteLayout>
  );
}

function TopicPage({ slug }: { slug: string }) {
  const topic = getLearnTopic(slug)!;
  const topicArticles = useMemo(() => getStaticArticlesByTopic(slug), [slug]);

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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        {topicArticles.length > 0 ? (
          <div className="flex flex-col gap-3">
            {topicArticles.map((article) => (
              <Link
                href={`/learn/${article.slug}`}
                key={article.slug}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] hover:bg-white border border-[#143B35]/12 hover:border-[#143B35]/30 hover:shadow-md transition-all duration-200 no-underline"
              >
                <div className="flex items-center sm:items-start gap-3 shrink-0">
                  <span className="px-2.5 py-1 rounded-lg bg-[#FAF5EE] border border-[#E8DCC8] font-mono font-bold text-xs text-[#C96632] shrink-0">
                    #{String(article.calendarOrder).padStart(2, "0")}
                  </span>
                  <div className="w-48 sm:w-52 shrink-0 hidden md:block">
                    <ArticleVisual visual={article.heroType} topic={topic.slug} compact={true} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-[#143B35]/10 text-[#143B35]">
                      {topic.label}
                    </span>
                    <span className="text-[11px] text-[#65726C] font-mono flex items-center gap-1">
                      <Clock3 className="size-3 text-[#C96632]" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-serif text-[#123630] group-hover:text-[#C96632] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="line-clamp-2 text-xs sm:text-sm text-[#5B6D67] mt-1.5 leading-relaxed">
                    {article.dek}
                  </p>
                </div>
                <div className="size-9 rounded-full bg-[#143B35]/5 group-hover:bg-[#C96632] flex items-center justify-center shrink-0 transition-colors self-end sm:self-center ml-auto">
                  <ArrowRight className="size-4 text-[#143B35] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
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
