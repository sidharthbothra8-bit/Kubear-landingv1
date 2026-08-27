/* Money Week tools: simple, live planning calculators designed around one clear answer per mobile screen. */
import { ArrowRight, ChevronDown, Info, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { getTool, tools } from "@/lib/contentRegistry";

type CalculatorKind = "sip" | "emi" | "goa";
const formatInr = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? Math.max(0, value) : 0);
const n = (value: string) => Math.max(0, Number(value) || 0);

export function ToolVisual({ kind }: { kind: CalculatorKind }) {
  const marks = kind === "sip" ? ["Monthly amount", "Time", "Estimate"] : kind === "emi" ? ["Loan", "Rate", "Tenure"] : ["Goa plan", "Saved", "Left"];
  return <div className={`tool-visual tool-visual-${kind}`} aria-hidden="true"><div className="tool-grid" /><div className="tool-ruler"><span /><span /><span /><span /><span /></div><div className="tool-dial"><i /><b>{kind === "sip" ? "SIP" : kind === "emi" ? "EMI" : "GOA"}</b></div><div className="tool-tag"><span>{marks[0]}</span><b>{marks[1]}</b><small>{marks[2]}</small></div><div className="tool-path" /></div>;
}

function NumberField({ label, value, onChange, suffix = "₹", min = 0, step = 1, hint }: { label: string; value: string; onChange: (value: string) => void; suffix?: string; min?: number; step?: number; hint?: string }) {
  return <label className="calc-field"><span>{label}</span><div><input inputMode="decimal" min={min} step={step} value={value} onChange={(event) => onChange(event.target.value)} aria-describedby={hint ? `${label.replace(/\W/g, "")}-hint` : undefined} /><b>{suffix}</b></div>{hint ? <small id={`${label.replace(/\W/g, "")}-hint`}>{hint}</small> : null}</label>;
}

export function CalculatorExperience({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const [monthly, setMonthly] = useState("5000");
  const [rate, setRate] = useState(slug === "sip-calculator" ? "12" : "8.5");
  const [years, setYears] = useState(slug === "sip-calculator" ? "10" : "5");
  const [loan, setLoan] = useState("2500000");
  const [target, setTarget] = useState("60000");
  const [saved, setSaved] = useState("15000");
  const [targetMonth, setTargetMonth] = useState("2027-01");
  const kind = (tool?.visual ?? "sip") as CalculatorKind;
  const result = useMemo(() => {
    if (kind === "sip") { const p = n(monthly); const r = n(rate) / 1200; const periods = Math.round(n(years) * 12); const future = r === 0 ? p * periods : p * ((Math.pow(1 + r, periods) - 1) / r) * (1 + r); return { main: future, label: "Estimated value", detailA: `You put in ${formatInr(p * periods)}`, detailB: `Estimated growth ${formatInr(future - p * periods)}`, explanation: `This estimate assumes ${n(rate)}% per year for ${periods} monthly contributions.` }; }
    if (kind === "emi") { const p = n(loan); const r = n(rate) / 1200; const periods = Math.max(1, Math.round(n(years) * 12)); const emi = r === 0 ? p / periods : (p * r * Math.pow(1 + r, periods)) / (Math.pow(1 + r, periods) - 1); return { main: emi, label: "Estimated monthly EMI", detailA: `Total payment ${formatInr(emi * periods)}`, detailB: `Estimated interest ${formatInr(emi * periods - p)}`, explanation: `This estimate uses ${n(rate)}% annual interest over ${periods} months.` }; }
    const date = new Date(`${targetMonth}-01T00:00:00`); const today = new Date(); const months = Math.max(1, (date.getFullYear() - today.getFullYear()) * 12 + date.getMonth() - today.getMonth()); const remaining = Math.max(0, n(target) - n(saved)); const required = remaining / months; return { main: required, label: "Estimated amount to set aside each month", detailA: `${formatInr(remaining)} still to save`, detailB: `${months} months to go`, explanation: `This is a simple no-return estimate. It spreads the remaining goal across ${months} months.` };
  }, [kind, loan, monthly, rate, saved, target, targetMonth, years]);

  if (!tool) return null;
  const fields = kind === "sip" ? <><NumberField label="Monthly SIP" value={monthly} onChange={setMonthly} /><NumberField label="Expected annual return" value={rate} onChange={setRate} suffix="%" step={0.1} hint="This is only an assumption, not a promise." /><NumberField label="Years" value={years} onChange={setYears} suffix="years" /></> : kind === "emi" ? <><NumberField label="Loan amount" value={loan} onChange={setLoan} /><NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" step={0.1} /><NumberField label="Tenure" value={years} onChange={setYears} suffix="years" /></> : <><NumberField label="Goa plan amount" value={target} onChange={setTarget} /><NumberField label="Already saved" value={saved} onChange={setSaved} /><label className="calc-field"><span>Target month</span><div><input type="month" value={targetMonth} onChange={(event) => setTargetMonth(event.target.value)} aria-label="Target month" /></div></label></>;

  return <div className="calculator-shell"><section className="tool-hero"><div><p className="week-kicker"><span /> {tool.eyebrow}</p><h1 className="week-section-title">{tool.title}. <em>Start simple.</em></h1><p className="week-lede">{tool.description}</p><p className="tool-hero-note"><Info className="size-4" /> Planning helper only. It is not personal financial advice.</p></div><ToolVisual kind={kind} /></section><section className="calc-workspace"><div className="calc-sheet" data-reveal><div className="calc-sheet-top"><span>01</span><p>Put in your numbers</p><Sparkles className="size-4" /></div><div className="calc-fields">{fields}</div>{kind === "sip" ? <div className="quick-chips" aria-label="Set your investing period">{[1, 5, 10].map((year) => <button type="button" key={year} onClick={() => setYears(String(year))} className={years === String(year) ? "is-selected" : ""}>{year} year{year > 1 ? "s" : ""}</button>)}</div> : null}</div><aside className="calc-answer" data-reveal aria-live="polite"><div className="calc-answer-top"><span>02</span><p>Your simple answer</p></div><p className="calc-answer-label">{result.label}</p><strong>{formatInr(result.main)}</strong><div className="calc-answer-lines"><span>{result.detailA}</span><span>{result.detailB}</span></div><p className="calc-answer-note">{result.explanation}</p></aside></section><section className="calc-details"><details><summary>How this calculation works <ChevronDown className="size-4" /></summary><p>{kind === "sip" ? "The estimate uses a standard monthly contribution calculation. Expected return is an input, not a guarantee." : kind === "emi" ? "The estimate uses the loan amount, monthly interest rate and the number of monthly payments." : "The estimate simply divides what is left to save by the number of months until the target date."}</p></details><Link href={`/learn/${tool.learnSlug}`} className="calc-read-next">Read the related guide <ArrowRight className="size-4" /></Link></section></div>;
}

export function ToolsHub() {
  return <div className="tools-hub"><section className="tools-hub-hero"><div><p className="week-kicker"><span /> Kubear Tools</p><h1 className="week-section-title">A number can be <em>a good first step.</em></h1><p className="week-lede">Pick a simple question. Try the numbers. Then decide what you want to look at next.</p></div><ToolVisual kind="sip" /></section><section className="tools-route-list">{tools.map((tool, index) => <Link href={`/tools/${tool.slug}`} className="tool-route" key={tool.slug}><span>0{index + 1}</span><div><p className="eyebrow">{tool.eyebrow}</p><h2>{tool.title}</h2><p>{tool.description}</p></div><ArrowRight className="size-5" /></Link>)}</section><p className="tools-disclaimer">The tools are for illustration and planning. Their outputs are not recommendations, financial advice or a prediction of results.</p></div>;
}
