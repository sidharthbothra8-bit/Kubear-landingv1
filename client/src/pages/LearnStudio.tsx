/* Living Ledger studio: an intentionally small, protected desk where each future note earns its public release. */
import DashboardLayout from "@/components/DashboardLayout";
import { trpc } from "@/lib/trpc";
import { CalendarClock, CheckCircle2, CirclePause, ExternalLink, FileCheck2, LoaderCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

const displayDate = (value: Date | string | null | undefined) => value ? new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(value)) : "Not dated";
const statusLabel = (status: string) => status.replaceAll("_", " ");

export default function LearnStudio() {
  const utils = trpc.useUtils();
  const studio = trpc.learn.studio.useQuery();
  const action = trpc.learn.articleAction.useMutation({ onSuccess: () => utils.learn.studio.invalidate() });
  const activate = trpc.learn.activateWeeklyPublishing.useMutation({ onSuccess: () => utils.learn.studio.invalidate() });
  const isPreview = typeof window !== "undefined" && window.location.hostname.includes("manus.computer");
  const rows = useMemo(() => studio.data?.articles ?? [], [studio.data?.articles]);
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleRows = rows.slice(0, visibleCount);

  return <DashboardLayout title="Kubear Editorial" menuItems={[{ icon: CalendarClock, label: "Learn calendar", path: "/studio/learn" }]}> 
    <section className="learn-studio-shell">
      <header className="learn-studio-head"><div><p className="week-kicker"><span /> Kubear editorial desk</p><h1>Fifty notes. <em>One careful release at a time.</em></h1><p>Future Learn articles are private by default. A note needs a dated review and product-claim approval before it can be scheduled or published.</p></div><Link href="/learn" className="learn-studio-public-link">View public Learn <ExternalLink className="size-4" /></Link></header>
      {studio.isLoading ? <StudioLoading /> : studio.error ? <section className="learn-studio-blocked"><ShieldCheck className="size-6" /><h2>Unable to load editorial ledger.</h2><p>Please refresh the page to reload the editorial schedule.</p></section> : <>
        <section className="learn-studio-status"><div><span>Release rhythm</span><strong>Every Tuesday · 09:00 IST</strong><p>{studio.data?.schedule?.isEnabled ? "The publication check is active." : "The publication check is held until the live site is published and the first note is approved."}</p></div><div><span>Calendar</span><strong>{rows.length} private notes</strong><p>{rows.filter(article => article.status === "published" || article.status === "updated").length} published · {rows.filter(article => article.status === "scheduled").length} scheduled</p></div><button type="button" className="button button-primary" disabled={isPreview || activate.isPending || Boolean(studio.data?.schedule?.isEnabled)} onClick={() => activate.mutate()}>{activate.isPending ? <LoaderCircle className="size-4 animate-spin" /> : <CalendarClock className="size-4" />}{isPreview ? "Publish site to activate" : studio.data?.schedule?.isEnabled ? "Weekly release active" : "Activate weekly release"}</button></section>
        <section className="learn-studio-note"><FileCheck2 className="size-5" /><p><strong>Publication safeguard:</strong> the release job only publishes an article after its scheduled date, editorial review and product-claim check are recorded. It is deliberately disabled in preview and must be activated from the deployed site.</p></section>
        <section className="learn-studio-table"><div className="learn-studio-table-head"><span>Issue</span><span>Scheduled date</span><span>Article</span><span>State</span><span>Editorial action</span></div>{visibleRows.map(article => <div className="learn-studio-row" key={article.id}><span className="learn-studio-order">{String(article.calendarOrder).padStart(2, "0")}</span><span className="learn-studio-date">{displayDate(article.scheduledAt)}</span><div><p>{article.topic.replaceAll("-", " ")}</p><h2>{article.title}</h2><small>{article.readTime} · {article.targetWordCount.toLocaleString("en-IN")} word target</small></div><span className={`learn-status learn-status-${article.status}`}>{statusLabel(article.status)}</span><div className="learn-studio-actions">{article.status === "draft" ? <button type="button" onClick={() => action.mutate({ id: article.id, action: "mark_review" })} disabled={action.isPending}>Mark reviewed</button> : null}{article.status === "in_review" ? <button type="button" onClick={() => action.mutate({ id: article.id, action: "approve_schedule" })} disabled={action.isPending}>Approve schedule</button> : null}{article.status === "scheduled" ? <><button type="button" onClick={() => action.mutate({ id: article.id, action: "pause" })} disabled={action.isPending}>Pause</button><button type="button" className="is-accent" onClick={() => action.mutate({ id: article.id, action: "publish_now" })} disabled={action.isPending}>Publish now</button></> : null}{article.status === "paused" ? <button type="button" onClick={() => action.mutate({ id: article.id, action: "mark_review" })} disabled={action.isPending}>Return to review</button> : null}{(article.status === "published" || article.status === "updated") ? <span className="learn-published"><CheckCircle2 className="size-4" />Live</span> : null}</div></div>)}{rows.length > visibleRows.length ? <div className="learn-studio-more"><span>Showing {visibleRows.length} of {rows.length} notes</span><button type="button" onClick={() => setVisibleCount(current => Math.min(current + 12, rows.length))}>Show 12 more</button></div> : rows.length > 12 ? <div className="learn-studio-more"><span>All {rows.length} notes are in view</span><button type="button" onClick={() => setVisibleCount(12)}>Show fewer</button></div> : null}</section>
      </>}
    </section>
  </DashboardLayout>;
}

function StudioLoading() { return <section className="learn-studio-loading"><LoaderCircle className="size-5 animate-spin" /><p>Opening the editorial ledger…</p></section>; }
