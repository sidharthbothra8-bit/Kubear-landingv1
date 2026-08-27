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

export function MoneyFlowInstrument({ className = "" }: InstrumentProps) {
  return <section className={`money-instrument money-flow-instrument ${className}`} aria-label="Illustrative Kubear money-view flow"><div className="flow-instrument-top"><InstrumentLabel>One view, step by step</InstrumentLabel><span>Illustrative flow</span></div><div className="flow-instrument-steps"><div><span>01</span><strong>Choose</strong><p>Pick the details you want in view.</p><div className="flow-pills"><i>Salary</i><i>Rent</i><i>UPI</i></div></div><b aria-hidden="true" /><div><span>02</span><strong>Group</strong><p>Let the month sit in one place.</p><div className="flow-ledger-lines"><i /><i /><i /></div></div><b aria-hidden="true" /><div><span>03</span><strong>Review</strong><p>See what needs your attention.</p><div className="flow-review"><i /><span>Bill Friday</span></div></div></div><p className="instrument-footnote"><Eye className="size-3.5" />A view you choose, not a service that moves money.</p></section>;
}

export function ToolBenchInstrument({ className = "" }: InstrumentProps) {
  return <section className={`money-instrument tool-bench-instrument ${className}`} aria-label="Illustrative Kubear planning tool bench"><div><InstrumentLabel>Three simple questions</InstrumentLabel><strong>Pick a number. See the next useful view.</strong></div><div className="tool-bench-list"><span><i>01</i><b>SIP</b><small>Monthly step</small></span><span><i>02</i><b>EMI</b><small>Monthly payment</small></span><span><i>03</i><b>Goa goal</b><small>Months left</small></span></div><p className="instrument-footnote"><Sparkles className="size-3.5" />Illustrative planning, not advice.</p></section>;
}

export function SalaryAllocationInstrument({ className = "" }: InstrumentProps) {
  const allocations = [["Rent + bills", "₹18,600", "copper"], ["Everyday life", "₹9,400", "mint"], ["Goa plan", "₹1,500", "saffron"], ["Room to breathe", "₹6,000", "cream"]];
  return <section className={`money-instrument salary-allocation-instrument ${className}`} aria-label="Illustrative salary allocation"><div className="allocation-header"><div><InstrumentLabel>Salary day, with jobs</InstrumentLabel><strong>₹54,000 <small>example income</small></strong></div><span className="allocation-stamp">APRIL</span></div><div className="allocation-stack">{allocations.map(([name, amount, tone], index) => <div className={`allocation-piece ${tone}`} key={name} style={{ "--step": index } as React.CSSProperties}><div><span>{name}</span><b>{amount}</b></div><i aria-hidden="true" /></div>)}</div><p className="instrument-footnote"><Sparkles className="size-3.5" />Each job stays visible before the month gets busy.</p></section>;
}

export function SpendRhythmInstrument({ className = "" }: InstrumentProps) {
  const days = [["M", "Metro"], ["T", "Chai"], ["W", "Groceries"], ["T", "-"], ["F", "UPI check"], ["S", "-"], ["S", "-" ]];
  return <section className={`money-instrument spend-rhythm-instrument ${className}`} aria-label="Illustrative weekly spending rhythm"><div className="rhythm-top"><div><InstrumentLabel>UPI week, at a glance</InstrumentLabel><strong>Small spends deserve a place too.</strong></div><span>Example week</span></div><div className="rhythm-days">{days.map(([day, event], index) => <div className={`rhythm-day ${event === "-" ? "is-quiet" : ""} ${event === "UPI check" ? "is-check" : ""}`} key={`${day}-${index}`}><b>{day}</b><i aria-hidden="true" /><span>{event}</span></div>)}</div><div className="rhythm-note"><span><i className="dot-copper" />Quick payments</span><span><i className="dot-mint" />A quiet day</span></div></section>;
}

export function CommitmentRunwayInstrument({ className = "" }: InstrumentProps) {
  const moments = [["05", "Rent", "First commitment"], ["11", "Card bill", "Keep it visible"], ["27", "Goa plan", "Still has a place"]];
  return <section className={`money-instrument commitment-runway-instrument ${className}`} aria-label="Illustrative monthly commitments timeline"><div className="runway-top"><InstrumentLabel>April, one clear line</InstrumentLabel><strong>Rent first. Goa bhi.</strong></div><div className="runway-track">{moments.map(([date, title, detail], index) => <div className="runway-stop" key={title}><span>{date}<small>APR</small></span><i aria-hidden="true" /><div><strong>{title}</strong><small>{detail}</small></div>{index < moments.length - 1 ? <b aria-hidden="true" /> : null}</div>)}</div><p className="instrument-footnote"><Check className="size-3.5" />Plans do not need to disappear behind due dates.</p></section>;
}

export function HomeSplitInstrument({ className = "" }: InstrumentProps) {
  return <section className={`money-instrument home-split-instrument ${className}`} aria-label="Illustrative selected home money sharing"><div className="split-top"><div><InstrumentLabel>Choose what is shared</InstrumentLabel><strong>Ghar ka money, without the mix-up.</strong></div><span className="split-control"><LockKeyhole className="size-3.5" />You choose</span></div><div className="split-columns"><div><p><span className="split-dot shared" />Home space</p><strong>Electricity</strong><small>Shared with home</small><strong>Groceries</strong><small>Shared with home</small></div><div><p><span className="split-dot personal" />Personal space</p><strong>Lunch out</strong><small>Only yours</small><strong>Weekend plan</strong><small>Only yours</small></div></div><div className="split-footer"><span><Plus className="size-3.5" />Add only what belongs together</span><b>Selected sharing</b></div></section>;
}

export function ControlBoundaryInstrument({ className = "" }: InstrumentProps) {
  const lines = [["Account details", "Chosen"], ["Bill plans", "Context"], ["Money movement", "None"]];
  return <section className={`money-instrument control-boundary-instrument ${className}`} aria-label="Illustrative privacy and control boundary"><div className="boundary-grid" aria-hidden="true" /><div className="boundary-card"><div><InstrumentLabel>Your boundary</InstrumentLabel><strong>What is in your view.</strong></div>{lines.map(([name, state]) => <div className="boundary-line" key={name}><span>{name}</span><b>{state}</b></div>)}</div><span className="boundary-sticker sticker-see"><Eye className="size-3" />See</span><span className="boundary-sticker sticker-control"><LockKeyhole className="size-3" />Control</span><span className="boundary-sticker sticker-leave">Leave anytime</span></section>;
}

export function CalculatorLogicInstrument({ kind }: { kind: "sip" | "emi" | "goa" }) {
  const content = kind === "sip" ? { label: "Monthly SIP", headline: "Small monthly steps, held in one line.", pieces: [["Today", "₹5,000"], ["Every month", "+₹5,000"], ["Time", "10 years"]] } : kind === "emi" ? { label: "Loan plan", headline: "One payment, with the full path beside it.", pieces: [["Loan", "₹25L"], ["Rate", "8.5%"], ["Tenure", "5 years"]] } : { label: "Goa plan", headline: "A plan looks lighter when the months are visible.", pieces: [["Trip fund", "₹60K"], ["Saved", "₹15K"], ["Time", "9 months"]] };
  return <section className={`money-instrument calculator-logic-instrument calculator-logic-${kind}`} aria-label={`${content.label} illustration`}><div className="calculator-logic-head"><InstrumentLabel>{content.label}</InstrumentLabel><strong>{content.headline}</strong></div><div className="logic-steps">{content.pieces.map(([label, value], index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /><p>{label}<b>{value}</b></p></div>)}</div><p className="instrument-footnote">Illustrative inputs. Change yours below.</p></section>;
}
