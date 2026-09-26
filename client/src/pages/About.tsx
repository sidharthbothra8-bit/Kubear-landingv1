import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Lock, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Users 
} from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/SiteChrome";
import { PageMeta } from "@/components/PageMeta";
import { APP_URL, PLAY_URL } from "@/const";

export default function About() {
  return (
    <SiteLayout>
      <PageMeta
        title="About Us | Kuberos Innovations & Kubear"
        description="Kuberos Innovations Private Limited is the technology company behind Kubear, building intelligent personal finance and household cashflow infrastructure for India."
        path="/about"
      />

      {/* Main Content Area */}
      <div className="bg-[#FAF7F0] text-[#123630] selection:bg-[#EA580C]/20">
        {/* Header Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-6 shadow-xs">
                <Building2 className="size-3.5 text-[#EA580C]" />
                Corporate Profile & Technology Architecture
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E241E] leading-[1.15]">
                Kuberos Innovations Private Limited
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-serif text-[#C96632] leading-snug">
                Building calm, intelligent financial infrastructure for everyday Indian decisions.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#42564F] leading-relaxed">
                Kuberos Innovations is an Indian software technology startup headquartered in Surat, Gujarat. We engineer consumer software, data models, and analytical tools that turn complicated personal finance into clear, confident daily actions.
              </p>
            </div>
          </div>
        </section>

        {/* The Flagship Product: Kubear */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  Flagship Product
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E241E] mt-2 tracking-tight">
                  Kubear: Complete Financial Life in One Clear View
                </h2>
                <p className="mt-4 text-[#42564F] leading-relaxed">
                  Developed and operated by Kuberos Innovations, <strong>Kubear</strong> is a read-only personal finance platform and visual money ledger built specifically for Indian salaried professionals, freelancers, and modern households.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                      <CheckCircle2 className="size-4 text-[#047857]" />
                      Day-1 Salary Allocation
                    </div>
                    <p className="text-xs text-[#556963] mt-1.5 leading-relaxed">
                      Earmarks rent, parents&apos; support, utility bills, and committed SIPs upfront before spending begins.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                      <CheckCircle2 className="size-4 text-[#047857]" />
                      Safe Daily Spend Limits
                    </div>
                    <p className="text-xs text-[#556963] mt-1.5 leading-relaxed">
                      Dynamically recalibrates guilt-free daily budgets so families never run dry before month-end.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                      <CheckCircle2 className="size-4 text-[#047857]" />
                      Shared Household Splits
                    </div>
                    <p className="text-xs text-[#556963] mt-1.5 leading-relaxed">
                      Transparent cost sharing for rent, domestic staff, and groceries while personal accounts remain private.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E8DEC8] shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0E241E]">
                      <CheckCircle2 className="size-4 text-[#047857]" />
                      Step-Up Goal Runways
                    </div>
                    <p className="text-xs text-[#556963] mt-1.5 leading-relaxed">
                      Inflation-adjusted milestone simulators for emergency buffers, travel funds, and wedding planning.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E241E] hover:bg-[#1C3B33] text-white font-bold text-sm shadow-xs transition-colors"
                  >
                    Open Kubear Web App
                    <ExternalLink className="size-4" />
                  </a>
                  <a
                    href={PLAY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F3EADA] border border-[#E8DEC8] text-[#0E241E] font-bold text-sm shadow-xs transition-colors"
                  >
                    Get on Google Play Store
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F3EADA] border border-[#E8DEC8] shadow-sm">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C96632]">
                    Product Principles
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0E241E] mt-1">
                    Privacy-First by Architecture
                  </h3>
                  <ul className="mt-4 space-y-3.5 text-sm text-[#42564F]">
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="size-4.5 text-[#047857] shrink-0 mt-0.5" />
                      <span><strong>No SMS Scraping:</strong> Kubear never reads user SMS inboxes or requests intrusive device permissions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Lock className="size-4.5 text-[#047857] shrink-0 mt-0.5" />
                      <span><strong>Non-Custodial:</strong> We do not move, hold, or execute financial transactions. We are purely an analytical guide.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Sparkles className="size-4.5 text-[#047857] shrink-0 mt-0.5" />
                      <span><strong>Zero Dark Patterns:</strong> No aggressive loan offers, commission-driven product recommendations, or hidden ads.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Cloud Infrastructure Stack */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8] bg-[#FAF5EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                Technical Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E241E] mt-2 tracking-tight">
                Modern Cloud Infrastructure & Security
              </h2>
              <p className="mt-3 text-[#42564F] leading-relaxed">
                Kuberos Innovations builds scalable, microservices-driven cloud systems engineered for high availability, deterministic financial accuracy, and data sovereignty under Indian regulations.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                <div className="size-10 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#EA580C] mb-4">
                  <Server className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0E241E]">Cloud Native & Serverless</h3>
                <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                  Containerized application runtime leveraging modern container infrastructure (Google Cloud Run / Cloud Architecture), enabling automatic scale-to-zero efficiency and sub-second cold starts.
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">Containerized Services</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">Stateless APIs</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                <div className="size-10 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6] flex items-center justify-center text-[#047857] mb-4">
                  <Cpu className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0E241E]">Financial Math Engines</h3>
                <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                  Deterministic simulation algorithms for Indian tax regimes (Budget 2024–26 New vs Old), amortization schedules, compounding SIP returns, and multi-currency inflation discounting.
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">Client & Edge Math</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">High Precision</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                <div className="size-10 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#B45309] mb-4">
                  <Lock className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0E241E]">Data Encryption & DPDP</h3>
                <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                  Compliant with India&apos;s Digital Personal Data Protection Act (DPDP). TLS 1.3 encryption in transit, AES-256 for persistent assets, and strict tenant isolation with self-serve data purge mechanisms.
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">TLS 1.3</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">DPDP Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Mission */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="size-12 rounded-full bg-[#123630] text-[#FFF8EE] flex items-center justify-center font-bold text-lg mb-4">
                    SB
                  </div>
                  <h3 className="text-lg font-bold text-[#0E241E]">Sidharth Bothra</h3>
                  <p className="text-xs font-mono text-[#EA580C] uppercase tracking-wider mt-0.5">
                    Founder & Director
                  </p>
                  <p className="text-sm text-[#42564F] mt-3 leading-relaxed">
                    Passionate about building intuitive software products that solve real consumer pain points in India. Dedicated to replacing financial anxiety and confusing spreadsheets with tactile, stress-free software.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#F0EBE1]">
                    <a
                      href="mailto:sidharthbothra8@gmail.com"
                      className="text-xs text-[#047857] hover:underline font-semibold flex items-center gap-1"
                    >
                      <Mail className="size-3.5" />
                      Contact Leadership
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  Our Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E241E] mt-2">
                  Building for Financial Sanity
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#42564F] leading-relaxed">
                  Personal finance products in India have traditionally been dominated by credit card pushers, lending platforms, or complex trading screens. Most working professionals simply want to answer basic questions: <em>&quot;Can I afford this rent?&quot;</em>, <em>&quot;How much can I safely spend each day?&quot;</em>, and <em>&quot;Are my family commitments secure?&quot;</em>
                </p>
                <p className="mt-3 text-sm sm:text-base text-[#42564F] leading-relaxed">
                  At Kuberos Innovations, we engineer calm, visual computing tools that respect user attention and privacy. We believe software should help you understand your money, not sell you debt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Entity Details & Official Directory */}
        <section className="py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DEC8] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                    Corporate Information
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E241E] mt-1">
                    Registered Company Details
                  </h3>
                  <dl className="mt-6 space-y-3.5 text-sm">
                    <div>
                      <dt className="text-xs font-bold text-[#6B807A] uppercase">Legal Entity Name</dt>
                      <dd className="font-semibold text-[#0E241E] mt-0.5">Kuberos Innovations Private Limited</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold text-[#6B807A] uppercase">Industry / Classification</dt>
                      <dd className="text-[#42564F] mt-0.5">Software Development, Consumer Internet & Financial Analytics</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold text-[#6B807A] uppercase">Registered Location</dt>
                      <dd className="text-[#42564F] mt-0.5 flex items-center gap-1.5">
                        <MapPin className="size-4 text-[#EA580C] shrink-0" />
                        Surat, Gujarat, India
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold text-[#6B807A] uppercase">Primary Website Domain</dt>
                      <dd className="text-[#42564F] mt-0.5 font-mono text-xs">
                        <a href="https://www.kuberos.in" className="text-[#047857] hover:underline">
                          https://www.kuberos.in
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                    Communication & Governance
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E241E] mt-1">
                    Official Inquiries & Support
                  </h3>
                  <div className="mt-6 space-y-3 text-sm">
                    <p className="text-xs text-[#556963]">
                      For partnerships, cloud infrastructure verification, or support queries:
                    </p>
                    <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">General & Corporate Inquiries</span>
                      <a href="mailto:hello@kuberos.in" className="font-mono text-xs font-bold text-[#EA580C] hover:underline">
                        hello@kuberos.in
                      </a>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">Technical & Customer Support</span>
                      <a href="mailto:support@kuberos.in" className="font-mono text-xs font-bold text-[#EA580C] hover:underline">
                        support@kuberos.in
                      </a>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">Data Privacy & Grievance Officer</span>
                      <a href="mailto:grievance@kuberos.in" className="font-mono text-xs font-bold text-[#EA580C] hover:underline">
                        grievance@kuberos.in
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center gap-3 text-xs text-[#6B807A]">
                    <Link href="/privacy" className="hover:text-[#EA580C] underline">Privacy Policy</Link>
                    <span>·</span>
                    <Link href="/terms" className="hover:text-[#EA580C] underline">Terms of Use</Link>
                    <span>·</span>
                    <Link href="/consent" className="hover:text-[#EA580C] underline">Consent Framework</Link>
                    <span>·</span>
                    <Link href="/data-deletion" className="hover:text-[#EA580C] underline">Data Deletion</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
