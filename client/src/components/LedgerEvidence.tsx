/* Living Ledger design: page-specific paper fragments and copper connectors make each route feel like one financial page being assembled. */
import { CalendarDays, Eye, HeartHandshake, Landmark, LockKeyhole, WalletCards } from "lucide-react";

type Variant = "life" | "privacy" | "journal";

const lifeMarkers = ["Move", "Home", "Family", "Pause", "Travel", "Later"];

export function LedgerEvidence({ variant }: { variant: Variant }) {
  if (variant === "life") return <div className="evidence-scene evidence-life" aria-label="Illustrative life markers connected by a copper ledger line">
    <div className="life-thread" />
    {lifeMarkers.map((marker, index) => <div className={`life-marker life-marker-${index}`} key={marker}><span>{String(index + 1).padStart(2, "0")}</span><b>{marker}</b></div>)}
    <div className="absolute bottom-5 left-6 right-6 border-l-2 border-[#C96632] pl-4 text-sm leading-6 text-[#53625B]">A financial decision rarely sits alone. It arrives beside a plan, a person or a moment in life.</div>
  </div>;

  if (variant === "privacy") return <div className="evidence-scene evidence-privacy" aria-label="Illustrative read-only financial information and user-control boundaries">
    <div className="privacy-folio"><div className="flex items-center justify-between"><span className="eyebrow text-[#C96632]">Your boundary</span><LockKeyhole className="size-4 text-[#143B35]" /></div><h3>What is in the picture.</h3><div className="mt-5 space-y-3"><span className="evidence-row"><Landmark className="size-3.5" /> Account information <i>chosen</i></span><span className="evidence-row"><WalletCards className="size-3.5" /> Upcoming commitments <i>context</i></span><span className="evidence-row"><Eye className="size-3.5" /> Read-only view <i>no movement</i></span></div></div>
    <div className="privacy-stub privacy-stub-a"><Eye className="size-3.5" /> See</div><div className="privacy-stub privacy-stub-b"><LockKeyhole className="size-3.5" /> Control</div><div className="privacy-stub privacy-stub-c">Disconnect anytime</div><p className="absolute bottom-5 left-6 right-6 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#65726C]">Illustrative explanation—not a live product screen</p>
  </div>;

  return <div className="evidence-scene evidence-journal" aria-label="Illustrative journal notes connecting everyday money questions">
    <div className="journal-rule" />
    <div className="journal-note journal-note-a"><span className="eyebrow text-[#C96632]">Question</span><b>What needs attention?</b><CalendarDays className="size-4 text-[#C96632]" /></div>
    <div className="journal-note journal-note-b"><span className="eyebrow text-[#4D7869]">Context</span><b>One clear answer at a time.</b><Landmark className="size-4 text-[#4D7869]" /></div>
    <div className="journal-note journal-note-c"><span className="eyebrow text-[#A46C1E]">Life</span><b>Money behind the moment.</b><HeartHandshake className="size-4 text-[#A46C1E]" /></div>
  </div>;
}
