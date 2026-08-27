/* Living Ledger visual system: functional, labelled money states replace decorative pseudo-charts with calm, responsive financial explanations. */
import { Check, Eye, LockKeyhole, Plus, Sparkles } from "lucide-react";

type InstrumentProps = { className?: string };

function InstrumentLabel({ children }: { children: React.ReactNode }) {
  return <p className="instrument-label"><span aria-hidden="true" />{children}</p>;
}

export function MoneyPictureInstrument({ className = "" }: InstrumentProps) {
  const rows = [
    ["Salary", "Income in", "₹54,000", "is-income"],
    ["Rent + bills", "Due this month", "₹18,600", "is-due"],
    ["UPI week", "Spent so far", "₹7,240", "is-spend"],
    ["Goa plan", "Set aside", "₹1,500", "is-goal"],
  ];
  return <section className={`money-instrument money-picture-instrument ${className}`} aria-label="Illustrative money picture"><div className="instrument-paper"><div className="instrument-topline"><InstrumentLabel>Today&apos;s money picture</InstrumentLabel><span className="instrument-state"><Eye className="size-3.5" />View only</span></div><div className="instrument-balance"><div><small>After planned commitments</small><strong>₹26,660</strong></div><span>Illustrative example</span></div><div className="instrument-row-list">{rows.map(([title, detail, amount, state]) => <div className="instrument-row" key={title}><span className={`instrument-dot ${state}`} aria-hidden="true" /><div><strong>{title}</strong><small>{detail}</small></div><b>{amount}</b></div>)}</div></div><span className="instrument-tag tag-card">Card bill Friday</span><span className="instrument-tag tag-note">Selected details, one view</span></section>;
}

export function WeeklySignalBoard({ className = "" }: InstrumentProps) {
  const moments = [
    { day: "MON", title: "Salary", detail: "arrived", tone: "income" },
    { day: "TUE", title: "UPI week", detail: "in view", tone: "spend" },
    { day: "FRI", title: "Rent", detail: "coming up", tone: "due" },
    { day: "APR", title: "Goa", detail: "still visible", tone: "goal" },
  ];
  return <section className={`weekly-signal-board ${className}`} aria-label="Illustrative weekly money signal board"><div className="signal-board-top"><div><InstrumentLabel>Your week, in one signal</InstrumentLabel><strong>What&apos;s moving.<br />What&apos;s next.</strong></div><span className="signal-live"><i aria-hidden="true" />Live view</span></div><div className="signal-board-main"><div className="signal-total"><small>After planned commitments</small><b>₹26,660</b><span>Illustrative only</span></div><div className="signal-moment-list">{moments.map((moment, index) => <div className={`signal-moment signal-${moment.tone}`} key={moment.title}><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /><div><b>{moment.title}</b><small>{moment.detail}</small></div><em>{moment.day}</em></div>)}</div></div><div className="signal-board-bottom"><span><Eye className="size-3.5" />Only what you choose to see</span><span>HOME SPACE · 2 selected costs</span></div></section>;
}

export function MoneyWeekMosaic({ className = "" }: InstrumentProps) {
  const moments = [["01", "Salary", "in", "violet"], ["02", "UPI", "week", "coral"], ["03", "Rent", "due", "cream"], ["04", "Goa", "open", "mint"]];
  return <section className={`money-week-mosaic ${className}`} aria-label="Illustrative money week mosaic"><div className="mosaic-radiance" aria-hidden="true" /><div className="mosaic-orbit mosaic-orbit-one" aria-hidden="true" /><div className="mosaic-orbit mosaic-orbit-two" aria-hidden="true" /><div className="mosaic-ledger-stitch" aria-hidden="true"><i /><i /><i /><i /></div><header className="mosaic-head"><InstrumentLabel>The week, held together</InstrumentLabel><span><i aria-hidden="true" />In view</span></header><div className="mosaic-core"><div className="mosaic-core-label"><span>MONDAY</span><b>Salary lands.<br />The week gets a shape.</b></div><div className="mosaic-core-total"><small>After planned commitments</small><strong>₹26,660</strong><span>Illustrative only</span></div></div><div className="mosaic-moments">{moments.map(([number, name, note, tone], index) => <div className={`mosaic-moment tone-${tone}`} key={name} style={{ "--moment": index } as React.CSSProperties}><span>{number}</span><i aria-hidden="true" /><div><b>{name}</b><small>{note}</small></div></div>)}</div><footer className="mosaic-foot"><span><Eye className="size-3.5" />Only what you choose to see</span><span>APRIL · HOME SPACE</span></footer></section>;
}

export function MoneyViewSnapshot({ className = "" }: InstrumentProps) {
  const points = [["Balance", "after plans", "₹26,660"], ["Due next", "Friday", "Card bill"], ["UPI week", "quick check", "₹7,240"], ["Home", "selected", "2 costs"]];
  return <section className={`money-view-snapshot ${className}`} aria-label="Illustrative five-part money view"><div className="snapshot-glow" aria-hidden="true" /><div className="snapshot-header"><InstrumentLabel>One week, with context</InstrumentLabel><span>Illustrative view</span></div><div className="snapshot-core"><div><small>Today&apos;s picture</small><b>₹26,660</b><span>after planned commitments</span></div><i aria-hidden="true" /></div><div className="snapshot-points">{points.map(([label, detail, value], index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><small>{label}</small><b>{value}</b><em>{detail}</em></div>)}</div><p><Eye className="size-3.5" />A view you choose. Not a service that moves money.</p></section>;
}

export function MoneyFlowInstrument({ className = "" }: InstrumentProps) {
  return <section className={`money-instrument money-flow-instrument ${className}`} aria-label="Illustrative Kubear money-view flow"><div className="flow-instrument-top"><InstrumentLabel>One view, step by step</InstrumentLabel><span>Illustrative flow</span></div><div className="flow-instrument-steps"><div><span>01</span><strong>Choose</strong><p>Pick the details you want in view.</p><div className="flow-pills"><i>Salary</i><i>Rent</i><i>UPI</i></div></div><b aria-hidden="true" /><div><span>02</span><strong>Group</strong><p>Let the month sit in one place.</p><div className="flow-ledger-lines"><i /><i /><i /></div></div><b aria-hidden="true" /><div><span>03</span><strong>Review</strong><p>See what needs your attention.</p><div className="flow-review"><i /><span>Bill Friday</span></div></div></div><p className="instrument-footnote"><Eye className="size-3.5" />A view you choose, not a service that moves money.</p></section>;
}

export function ToolBenchInstrument({ className = "" }: InstrumentProps) {
  return <section className={`money-instrument tool-bench-instrument ${className}`} aria-label="Illustrative Kubear planning tool bench"><div><InstrumentLabel>Three simple questions</InstrumentLabel><strong>Start with the moment.<br />Then see the number.</strong></div><div className="tool-bench-list"><span><i>01</i><div><small>Salary day</small><b>SIP</b></div><em>Monthly step</em></span><span><i>02</i><div><small>Home plan</small><b>EMI</b></div><em>Monthly payment</em></span><span><i>03</i><div><small>Goa plan</small><b>Goal</b></div><em>Months left</em></span></div><p className="instrument-footnote"><Sparkles className="size-3.5" />Illustrative planning, not advice.</p></section>;
}

export function SalaryAllocationInstrument({ className = "" }: InstrumentProps) {
  const allocations = [["Rent + bills", "₹18,600", "copper"], ["Everyday life", "₹9,400", "mint"], ["Goa plan", "₹1,500", "saffron"], ["Room to breathe", "₹6,000", "cream"]];
  return <section className={`money-instrument salary-allocation-instrument ${className}`} aria-label="Illustrative salary allocation"><div className="allocation-header"><div><InstrumentLabel>Salary day, with jobs</InstrumentLabel><strong>₹54,000 <small>example income</small></strong></div><span className="allocation-stamp">APRIL</span></div><div className="allocation-stack">{allocations.map(([name, amount, tone], index) => <div className={`allocation-piece ${tone}`} key={name} style={{ "--step": index } as React.CSSProperties}><div><span>{name}</span><b>{amount}</b></div><i aria-hidden="true" /></div>)}</div><p className="instrument-footnote"><Sparkles className="size-3.5" />Each job stays visible before the month gets busy.</p></section>;
}

export function SpendRhythmInstrument({ className = "" }: InstrumentProps) {
  const days = [["M", "Metro"], ["T", "Chai"], ["W", "Groceries"], ["T", "-"], ["F", "UPI check"], ["S", "-"], ["S", "-" ]];
  return <section className={`money-instrument spend-rhythm-instrument ${className}`} aria-label="Illustrative weekly spending rhythm"><div className="rhythm-top"><div><InstrumentLabel>UPI week, at a glance</InstrumentLabel><strong>Small spends deserve a place too.</strong></div><span>Example week</span></div><div className="rhythm-days">{days.map(([day, event], index) => <div className={`rhythm-day ${event === "-" ? "is-quiet" : ""} ${event === "UPI check" ? "is-check" : ""}`} key={`${day}-${index}`}><b>{day}</b><i aria-hidden="true" /><span>{event}</span></div>)}</div><div className="rhythm-note"><span><i className="dot-copper" />Quick payments</span><span><i className="dot-mint" />A quiet day</span></div></section>;
}

export function GoalRunwayInstrument({ className = "" }: InstrumentProps) {
  const moments = [["05", "Rent", "Due first", "copper"], ["11", "Card bill", "Kept visible", "ink"], ["27", "Goa plan", "Still open", "saffron"]];
  return <section className={`goal-runway-instrument ${className}`} aria-label="Illustrative monthly goal runway"><div className="goal-runway-top"><div><InstrumentLabel>April, in one view</InstrumentLabel><strong>Due dates and your plan can sit together.</strong></div><span>Illustrative month</span></div><div className="goal-runway-lane">{moments.map(([date, title, detail, tone], index) => <div className={`goal-runway-stop ${tone}`} key={title}><span>{date}<small>APR</small></span><i aria-hidden="true" /><div><strong>{title}</strong><small>{detail}</small></div>{index < moments.length - 1 ? <b aria-hidden="true" /> : null}</div>)}<div className="goal-runway-destination" aria-hidden="true"><span>GOA</span><i /><small>plan stays open</small></div></div><div className="goal-runway-summary"><div><small>After the commitments you planned</small><strong>There is still room to choose.</strong></div><span><Check className="size-4" />Goal stays visible</span></div></section>;
}

export function HomeSplitInstrument({ className = "" }: InstrumentProps) {
  return <section className={`home-two-tables ${className}`} aria-label="Illustrative selected home money sharing"><header><div><InstrumentLabel>Choose what is shared</InstrumentLabel><strong>Two tables.<br />One clearer home view.</strong></div><span><LockKeyhole className="size-3.5" />By choice</span></header><div className="two-tables-stage"><article className="two-table shared-table"><p><i aria-hidden="true" />Home table</p><div><span>Electricity</span><small>Shared with home</small></div><div><span>Groceries</span><small>Shared with home</small></div></article><span className="two-tables-divider" aria-hidden="true"><i /><small>ONLY WHAT<br />BELONGS<br />TOGETHER</small><i /></span><article className="two-table personal-table"><p><i aria-hidden="true" />Personal table</p><div><span>Lunch out</span><small>Only yours</small></div><div><span>Weekend plan</span><small>Only yours</small></div></article></div><footer><span><Plus className="size-3.5" />Add only what belongs together</span><b>Selected sharing</b></footer></section>;
}

export function HomeControlRoomInstrument({ className = "" }: InstrumentProps) {
  const boundaries = [["01", "Choose", "what is visible"], ["02", "Review", "what needs care"], ["03", "Leave", "whenever you want"]];
  return <section className={`home-control-room ${className}`} aria-label="Illustrative user control room"><div className="control-room-grid" aria-hidden="true" /><header><div><InstrumentLabel>Your boundary</InstrumentLabel><strong>You stay at the controls.</strong></div><span><Eye className="size-3.5" />View, not movement</span></header><div className="control-room-console">{boundaries.map(([number, action, note], index) => <div key={action} className="control-room-command" style={{ "--command": index } as React.CSSProperties}><span>{number}</span><i aria-hidden="true" /><div><b>{action}</b><small>{note}</small></div><em>{index === 0 ? "ON" : "YOU"}</em></div>)}</div><footer><span><LockKeyhole className="size-3.5" />Your choices lead</span><span>No money movement</span></footer></section>;
}

export function ControlBoundaryInstrument({ className = "" }: InstrumentProps) {
  const lines = [["Account details", "Chosen"], ["Bill plans", "Context"], ["Money movement", "None"]];
  return <section className={`money-instrument control-boundary-instrument ${className}`} aria-label="Illustrative privacy and control boundary"><div className="boundary-grid" aria-hidden="true" /><div className="boundary-card"><div><InstrumentLabel>Your boundary</InstrumentLabel><strong>What is in your view.</strong></div>{lines.map(([name, state]) => <div className="boundary-line" key={name}><span>{name}</span><b>{state}</b></div>)}</div><span className="boundary-sticker sticker-see"><Eye className="size-3" />See</span><span className="boundary-sticker sticker-control"><LockKeyhole className="size-3" />Control</span><span className="boundary-sticker sticker-leave">Leave anytime</span></section>;
}

export function CalculatorLogicInstrument({ kind }: { kind: "sip" | "emi" | "goa" }) {
  const content = kind === "sip" ? { label: "Monthly SIP", headline: "Small monthly steps, held in one line.", pieces: [["Today", "₹5,000"], ["Every month", "+₹5,000"], ["Time", "10 years"]] } : kind === "emi" ? { label: "Loan plan", headline: "One payment, with the full path beside it.", pieces: [["Loan", "₹25L"], ["Rate", "8.5%"], ["Tenure", "5 years"]] } : { label: "Goa plan", headline: "A plan looks lighter when the months are visible.", pieces: [["Trip fund", "₹60K"], ["Saved", "₹15K"], ["Time", "9 months"]] };
  const visual = kind === "sip" ? <div className="logic-sip-ladder">{content.pieces.map(([label, value], index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><p>{label}<b>{value}</b></p><i aria-hidden="true" /></div>)}</div> : kind === "emi" ? <div className="logic-emi-path">{content.pieces.map(([label, value], index) => <div key={label}><span>{label}</span><b>{value}</b>{index < content.pieces.length - 1 ? <i aria-hidden="true" /> : null}</div>)}<p>Monthly payment sits at the end of the path.</p></div> : <div className="logic-goa-runway"><div><span>Saved</span><b>₹15K</b></div><i aria-hidden="true"><span>5 months left</span></i><div><span>Goal</span><b>₹60K</b></div><p>Put the trip in the month before it gets busy.</p></div>;
  return <section className={`money-instrument calculator-logic-instrument calculator-logic-${kind}`} aria-label={`${content.label} illustration`}><div className="calculator-logic-head"><InstrumentLabel>{content.label}</InstrumentLabel><strong>{content.headline}</strong></div>{visual}<p className="instrument-footnote">Illustrative inputs. Change yours below.</p></section>;
}
