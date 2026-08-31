import { ArrowRight, ArrowUpRight, Eye, KeyRound, Lock, ShieldCheck, Trash2 } from "lucide-react";
import { ControlBoundaryInstrument } from "@/components/TactileMoneyInstruments";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

const points = [
  {
    icon: Eye,
    title: "Read-only ledger view. Never moves money.",
    text: "Kubear is strictly a personal finance assistant and tracking ledger. It cannot initiate UPI payments, transfer funds, execute trades, or move money.",
  },
  {
    icon: KeyRound,
    title: "Zero bank passwords, OTPs, or UPI PINs",
    text: "Kubear never asks for or stores bank credentials, UPI PINs, netbanking passwords, debit/credit card CVVs, or sensitive authentication factors.",
  },
  {
    icon: Trash2,
    title: "Full data deletion on demand",
    text: "You can permanently delete your Kubear account, disconnected ledgers, and chat histories anytime directly in-app or via our web deletion portal.",
  },
  {
    icon: ShieldCheck,
    title: "No data selling or ad-targeting",
    text: "Your personal financial logs and expense categories belong exclusively to you. We do not sell, rent, or monetize user data with advertisers or loan brokers.",
  },
];

export default function PrivacyData() {
  return (
    <SiteLayout>
      <PageMeta
        title="Privacy & Data Control | Kubear"
        description="A simple, transparent guide to Kubear’s read-only architecture, data privacy commitments, and account deletion policies by Kuberos Innovations Pvt. Ltd."
        path="/privacy-data"
      />

      {/* Hero Section */}
      <section className="bg-[#FAF7F0] px-5 py-16 sm:px-8 md:px-10 lg:px-12 border-b border-[#123630]/10">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div data-reveal>
            <p className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#C96632]">
              <Lock className="size-3.5" /> Privacy & Data Control
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight mt-3">
              Your money. Your data. Your control.
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-[#4B605B] leading-relaxed">
              Clear commitments on what Kubear can see, what it cannot do, and how your privacy is protected by design. No confusing fine print.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123630]/8 text-[#123630] text-xs font-medium">
              <span>Operated by <strong>Kuberos Innovations Pvt. Ltd.</strong> · Surat, Gujarat</span>
            </div>
          </div>
          <ControlBoundaryInstrument />
        </div>
      </section>

      {/* Core Privacy Proof Points */}
      <section className="px-5 py-16 sm:px-8 md:px-10 lg:px-12 bg-[#FFFDF8]">
        <div className="mx-auto max-w-[1280px]">
          <div className="pb-8 border-b border-[#123630]/10 mb-8">
            <p className="text-xs font-mono font-bold tracking-wider uppercase text-[#C96632]">Design Principles</p>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#123630] mt-1 font-normal">
              Built with zero-trust financial architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <article
                  data-reveal
                  className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10 flex flex-col justify-between"
                  key={point.title}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#6E817B]">0{index + 1}</span>
                      <span className="grid size-10 place-items-center rounded-xl bg-[#F6E6DD] text-[#C96632]">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#123630] mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#53625B]">
                      {point.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Legal Commitments & Direct Links */}
      <section className="bg-[#FAF7F0] px-5 py-16 text-[#123630] sm:px-8 md:px-10 lg:px-12 border-t border-[#123630]/10">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632]">Corporate Disclosure</p>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#123630] mt-2 font-normal">
              Legal & Entity Disclosures
            </h2>
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#123630]/10 text-xs text-[#556963] space-y-1.5">
              <p className="font-bold text-[#123630]">Kuberos Innovations Pvt. Ltd.</p>
              <p>Registered Office: Surat, Gujarat, India</p>
              <p>Contact: <a href="mailto:hello@kuberos.in" className="text-[#C96632] underline font-bold">hello@kuberos.in</a></p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#4B605B]" data-reveal>
            <p>
              <strong>Kubear</strong> is owned and operated by <strong>Kuberos Innovations Pvt. Ltd.</strong>, headquartered in Surat, Gujarat, India.
            </p>
            <p>
              Kubear is an educational, read-only personal finance planner and expense ledger. It is <em>not</em> a registered bank, NBFC, stock broker, SEBI-registered investment advisor, or payment service provider.
            </p>
            <p>
              User financial logs and entered scenarios are kept strictly confidential. We never monetize personal information, transaction history, or contact details with advertising networks or third-party loan distributors.
            </p>

            <div className="pt-4 border-t border-[#123630]/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://www.kuberos.in/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white border border-[#123630]/12 hover:border-[#C96632] hover:shadow-xs transition-all text-xs font-bold text-[#123630] flex items-center justify-between no-underline group"
              >
                <span>Privacy Policy</span>
                <ArrowUpRight className="size-3.5 text-[#C96632] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://www.kuberos.in/legal/terms"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white border border-[#123630]/12 hover:border-[#C96632] hover:shadow-xs transition-all text-xs font-bold text-[#123630] flex items-center justify-between no-underline group"
              >
                <span>Terms of Service</span>
                <ArrowUpRight className="size-3.5 text-[#C96632] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://www.kuberos.in/legal/delete-account"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white border border-[#123630]/12 hover:border-[#C96632] hover:shadow-xs transition-all text-xs font-bold text-[#123630] flex items-center justify-between no-underline group"
              >
                <span>Delete Account</span>
                <ArrowUpRight className="size-3.5 text-[#C96632] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
