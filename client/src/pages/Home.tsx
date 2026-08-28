/* Moving Money Universe: A screenshot-free, high-craft interactive page for real Indian money moments. */
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleHelp, Eye, LockKeyhole, MessageSquare, Play, ShieldCheck, Sparkles, UploadCloud } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { APP_URL, PLAY_URL } from "@/components/MovingMoneyWorld";
import { HumanMoneyScene } from "@/components/TactileMoneyInstruments";

const faq = [
  [
    "Do I need to give bank login, SMS permissions, or OTPs?",
    "Never. Kubear does not use SMS sync, bank scraping, or Account Aggregator. You log expenses naturally via quick chat ('₹40 auto', '₹150 lunch') or by uploading bill photos. You stay in 100% control of every entry.",
  ],
  [
    "How does the chat and receipt upload work?",
    "Just type in natural Hinglish or English like 'Paid ₹250 for Swiggy dinner' or snap a photo of your restaurant/grocery receipt. Kubear automatically extracts the amount, tags the category, and updates your monthly picture in 2 seconds.",
  ],
  [
    "Can I split expenses with flatmates or family?",
    "Yes! With Money Spaces, you can manage shared costs (like Cook Aunty, WiFi, Blinkit groceries) on a shared table, while keeping personal expenses (like shopping or dates) completely private.",
  ],
  [
    "Can Kubear move my money or initiate UPI payments?",
    "No. Kubear is strictly a manual recording and planning companion. It never connects to your bank account, holds zero funds, and cannot initiate payments or transfers.",
  ],
  [
    "Is this financial advice?",
    "No. Kubear is not a registered investment adviser, bank, or tax consultant. It is a personal and household organizer that gives you clarity on where your salary and savings go.",
  ],
];

const ledgerMoments = {
  salary: {
    label: "Salary day allocation",
    eyebrow: "Give every rupee a job",
    rows: [
      ["01", "House Rent", "locked 5th"],
      ["02", "Home & SIP", "allocated"],
      ["03", "Goa Fund", "₹5k saved"],
    ],
  },
  goa: {
    label: "Trip goals on monthly runway",
    eyebrow: "One clear runway",
    rows: [
      ["01", "Fixed Bills", "planned first"],
      ["02", "Goa Plan", "3 months left"],
      ["03", "Guilt-free Spend", "clear daily buffer"],
    ],
  },
  home: {
    label: "Flatmate & home splits",
    eyebrow: "Share by choice",
    rows: [
      ["01", "Cook & WiFi", "shared 50/50"],
      ["02", "Personal Coffee", "private view"],
      ["03", "Month-end Settle", "zero math confusion"],
    ],
  },
  trust: {
    label: "Zero scraping trust boundary",
    eyebrow: "Strictly private",
    rows: [
      ["01", "Manual Chat/Photo", "your input only"],
      ["02", "SMS / Bank Sync", "none / zero"],
      ["03", "Your Data", "export & delete anytime"],
    ],
  },
} as const;

function LedgerThread({ moment }: { moment: keyof typeof ledgerMoments }) {
  const { label, eyebrow, rows } = ledgerMoments[moment];
  return (
    <aside className={`home-ledger-thread home-ledger-thread-${moment}`} aria-label={label}>
      <p>
        <span />
        {eyebrow}
      </p>
      <div>
        {rows.map(([number, name, state]) => (
          <span className="home-ledger-thread-row" key={name}>
            <b>{number}</b>
            <i aria-hidden="true" />
            <strong>{name}</strong>
            <em>{state}</em>
          </span>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <PageMeta
        title="Kubear | Real Money Clarity for India. Zero Bank Scraping."
        description="Log chai, split flatmate rent, lock salary day allocations, and track Goa goals via quick chat and photo upload. 100% manual, private, and calm."
      />

      {/* Hero Section */}
      <section className="mm-hero instrument-hero money-week-hero">
        <div className="instrument-hero-grid" aria-hidden="true" />
        <div className="mm-hero-content">
          <div className="hero-ledger-rail" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <p className="mm-eyebrow">
            <span />
            Real Indian Money Life • Zero Bank Sync
          </p>
          <h1>
            Money is moving.
            <br />
            <em>Keep the whole picture calm.</em>
          </h1>
          <p className="mm-hero-lede">
            Log in 5 seconds via chat or photo upload. Track chai, split rent with flatmates, lock salary allocations, and save for Goa — completely manual, 100% private.
          </p>

          <div className="mm-actions">
            <a className="mm-button mm-button-orange desktop-primary" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
            <a className="mm-button mm-button-ghost desktop-secondary" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get Android App <ArrowUpRight className="size-4" />
            </a>
            <a className="mm-button mm-button-orange mobile-primary" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get it on Google Play <ArrowUpRight className="size-4" />
            </a>
            <a className="mm-button mm-button-ghost mobile-secondary" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
          </div>

          <p className="mm-trust">
            <ShieldCheck className="size-4 text-[#4ADE80]" />
            No SMS scraping. No bank login. You enter what you choose.
          </p>
        </div>

        <HumanMoneyScene kind="morning" className="hero-human-scene" />

        <a className="scroll-prompt" href="#the-orbit">
          See the money moments <ArrowDownRight className="size-4" />
        </a>
      </section>

      {/* 1. Natural Logging & Spends */}
      <section id="the-orbit" className="mm-orbit-section money-chapter-spend">
        <div className="mm-shell instrument-story-grid">
          <div className="mm-section-intro" data-reveal>
            <p className="mm-eyebrow">
              <span />
              Quick Capture • Zero Form Fatigue
            </p>
            <h2>
              Chai, Auto, Dinner.
              <br />
              <em>Just chat or snap the bill.</em>
            </h2>
            <p>
              Type <em>&ldquo;₹40 auto to metro&rdquo;</em> or snap your restaurant receipt. Kubear extracts the items and updates your weekly category buffer in seconds.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#123630]">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-[#123630]/15 px-3 py-1">
                <MessageSquare className="size-3.5 text-[#FF5C2B]" /> Hinglish Natural Chat
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-[#123630]/15 px-3 py-1">
                <UploadCloud className="size-3.5 text-[#2563EB]" /> Photo Bill Extraction
              </span>
            </div>
          </div>
          <HumanMoneyScene kind="coffee" />
        </div>
      </section>

      {/* 2. Salary Allocation */}
      <section className="mm-salary-section money-chapter-salary">
        <div className="mm-shell mm-salary-grid">
          <div className="mm-salary-copy" data-reveal>
            <p className="mm-eyebrow">
              <span />
              1st of the Month • Order Before Spending
            </p>
            <h2>
              Salary arrives.
              <br />
              <em>Give every rupee a job.</em>
            </h2>
            <p>
              Rent to owner locked. SIP and electricity bill put aside. Mummy papa support scheduled. What remains is your real guilt-free spending money.
            </p>
            <p className="mm-margin-note">Pehle plan karo, phir spend karo with zero guilt.</p>
            <LedgerThread moment="salary" />
            <a className="mm-text-link" href={APP_URL}>
              Try Salary Allocation <ArrowRight className="size-4" />
            </a>
          </div>
          <HumanMoneyScene kind="salary" />
        </div>
      </section>

      {/* 3. Goal Runway: Goa Trip */}
      <section className="mm-goa-section">
        <div className="mm-shell goal-runway-layout">
          <div className="mm-goa-copy" data-reveal>
            <p className="mm-eyebrow">
              <span />
              Goals On Your Monthly Runway
            </p>
            <h2>
              Rent first.
              <br />
              <em>Goa plan bhi.</em>
            </h2>
            <p>
              A vacation goal should not fight with monthly commitments. Place your dream trip on the same timeline with your fixed bills and see exact monthly progress.
            </p>
            <p className="goal-runway-copy-note">
              3 months • ₹22.5k saved of ₹30k. Clear visual runway so you stay on track.
            </p>
            <a className="mm-button mm-button-dark mt-8" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get the Android App <ArrowUpRight className="size-4" />
            </a>
          </div>
          <HumanMoneyScene kind="goa" />
        </div>
      </section>

      {/* 4. Flatmate & Home Splits */}
      <section className="mm-home-section money-chapter-home">
        <div className="mm-shell mm-home-grid">
          <div className="mm-home-copy" data-reveal>
            <p className="mm-eyebrow">
              <span />
              Shared Flat vs Personal Life
            </p>
            <h2>
              Ghar ka kharcha together.
              <br />
              <em>Personal stays personal.</em>
            </h2>
            <p>
              Split Cook Aunty salary, Blinkit groceries, and WiFi with flatmates on the shared table. Your weekend shopping and dates stay strictly on your private table.
            </p>
            <LedgerThread moment="home" />
            <a className="mm-text-link" href="/how-it-works">
              See Two-Table Sharing <ArrowRight className="size-4" />
            </a>
          </div>
          <HumanMoneyScene kind="home" />
        </div>
      </section>

      {/* 5. Trust & Zero Scraping Privacy */}
      <section className="mm-trust-section money-chapter-control">
        <div className="mm-shell mm-trust-grid">
          <div className="mm-trust-copy" data-reveal>
            <p className="mm-eyebrow">
              <span />
              Absolute Privacy • You Hold the Keys
            </p>
            <h2>
              No bank logins.
              <br />
              <em>No SMS snooping.</em>
            </h2>
            <p>
              Kubear never asks for your bank credentials, net banking password, or SMS read permissions. What you enter is all that is saved.
            </p>
            <LedgerThread moment="trust" />
            <div className="mm-rules">
              <p>
                <ShieldCheck className="size-4 text-[#4ADE80]" /> Zero bank scraping
              </p>
              <p>
                <LockKeyhole className="size-4 text-[#FCD34D]" /> Manual chat &amp; photo only
              </p>
              <p>
                <Check className="size-4 text-[#4ADE80]" /> Export or delete anytime
              </p>
            </div>
            <a className="mm-text-link mm-text-link-light" href="/privacy-data">
              Read Our Privacy Manifesto <ArrowRight className="size-4" />
            </a>
          </div>
          <HumanMoneyScene kind="control" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mm-faq-section">
        <div className="mm-shell mm-faq-grid">
          <div data-reveal>
            <p className="mm-eyebrow">
              <span />
              No Finance Jargon
            </p>
            <h2>
              Simple questions.
              <br />
              <em>Straight answers.</em>
            </h2>
            <p>Everything you need to know about how Kubear keeps your money picture clean and private.</p>
          </div>
          <Accordion type="single" collapsible className="mm-accordion" data-reveal>
            {faq.map(([question, answer], index) => (
              <AccordionItem value={`faq-${index}`} key={question}>
                <AccordionTrigger className="py-6 text-left text-base font-bold text-[#123630] no-underline hover:no-underline sm:text-lg">
                  <span>
                    <CircleHelp className="mr-3 inline size-4 text-[#FF5C2B]" />
                    {question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-[#4B625D]">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final Section */}
      <section className="mm-final-section">
        <div className="mm-final-orb orb-a" />
        <div className="mm-final-orb orb-b" />
        <HumanMoneyScene kind="closing" className="final-human-scene" />
        <div className="mm-shell mm-final-content" data-reveal>
          <p className="mm-eyebrow">
            <span />
            Calm Week Ahead
          </p>
          <h2>
            Life keeps moving.
            <br />
            <em>Your money picture can stay clear.</em>
          </h2>
          <p>Available on web and Android. Start recording in 10 seconds without any bank sync hassle.</p>
          <div className="mm-actions">
            <a className="mm-button mm-button-orange" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
            <a className="mm-button mm-button-ghost-light" href={PLAY_URL} target="_blank" rel="noreferrer">
              Get it on Google Play <Play className="size-4" />
            </a>
          </div>
          <p className="mm-final-note">
            <Sparkles className="size-4 text-[#FCD34D]" />
            A clearer money view. No sales pitch, no bank sync.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

