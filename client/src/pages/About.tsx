import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Lock, 
  MapPin, 
  Mail, 
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/SiteChrome";
import { PageMeta } from "@/components/PageMeta";

export default function About() {
  return (
    <SiteLayout>
      <PageMeta
        title="About Kuberos Innovations | Makers of Kubear"
        description="Kuberos Innovations is an Indian technology startup building Kubear, a personal finance platform for individuals and households."
        path="/about"
      />

      {/* Structured Data: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.kuberos.in/#organization",
            "name": "Kuberos Innovations Private Limited",
            "url": "https://www.kuberos.in",
            "logo": "https://www.kuberos.in/branding/logo.svg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            },
            "founder": {
              "@type": "Person",
              "name": "Sidharth Bothra",
              "jobTitle": "Founder & Director",
              "sameAs": "https://www.linkedin.com/in/sidharthbothra/"
            },
            "email": "hello@kuberos.in"
          })
        }}
      />

      {/* Main Content Area */}
      <div className="bg-[#FAF7F0] text-[#123630] selection:bg-[#EA580C]/20">
        
        {/* =================================================================== */}
        {/* SECTION 1: COMPANY INTRO                                            */}
        {/* =================================================================== */}
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-22 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-6 shadow-xs font-mono">
                <Building2 className="size-3.5 text-[#EA580C]" />
                Technology Company Profile
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E241E] leading-[1.15]">
                Kuberos Innovations Private Limited
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-serif text-[#C96632] leading-snug">
                Building technology that helps everyday Indians make sense of their money.
              </p>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-[#42564F] leading-relaxed">
                <p>
                  Kuberos Innovations is an Indian technology startup building <strong>Kubear</strong>, our personal finance software platform for individuals and households.
                </p>
                <p>
                  Kubear brings income, spending, debt, savings, investments and financial goals into one connected view, helping people understand where they stand and what they can afford to do next.
                </p>
              </div>

              {/* Clean link to the dedicated Product page */}
              <div className="mt-8 pt-6 border-t border-[#E8DEC8]/80 flex items-center">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E241E] hover:bg-[#1C3B33] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>Explore Kubear</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 2: TECHNICAL ARCHITECTURE                                   */}
        {/* =================================================================== */}
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
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded">Client &amp; Edge Math</span>
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

        {/* =================================================================== */}
        {/* SECTION 3: FOUNDER & LEADERSHIP                                     */}
        {/* =================================================================== */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-6 lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="size-14 rounded-full bg-[#123630] text-[#FFF8EE] flex items-center justify-center font-bold text-xl shadow-xs">
                      SB
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0E241E]">Sidharth Bothra</h3>
                      <p className="text-xs font-mono text-[#EA580C] uppercase tracking-wider font-semibold mt-0.5">
                        Founder &amp; Director
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-[15px] text-[#42564F] leading-relaxed">
                    <p>
                      Sidharth is the founder of Kuberos Innovations and leads the development of Kubear. He holds an MBA from IIM Sirmaur and previously worked at EY, with experience in consulting, business strategy and problem solving.
                    </p>
                    <p>
                      He is building Kubear around a simple idea: people should not have to organise their lives around managing money. Money should quietly make sense around the life they are already living.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                    <a
                      href="https://www.linkedin.com/in/sidharthbothra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#0A66C2] hover:text-[#084e96] font-bold transition-colors"
                    >
                      <svg className="size-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                      <span>LinkedIn ↗</span>
                    </a>

                    <a
                      href="mailto:sidharthbothra8@gmail.com"
                      className="text-xs sm:text-sm text-[#047857] hover:underline font-semibold flex items-center gap-1"
                    >
                      <Mail className="size-3.5" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Our Purpose */}
              <div className="md:col-span-6 lg:col-span-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  OUR PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E241E] mt-2">
                  Building money software around real life
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-[#42564F] leading-relaxed">
                  <p>
                    Personal finance is usually split across bank accounts, cards, investments, loans, spreadsheets and separate apps. That makes simple questions surprisingly difficult:
                  </p>
                  
                  <ul className="space-y-2 py-1 pl-2">
                    <li className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <span className="size-1.5 rounded-full bg-[#EA580C]" />
                      Can I afford this?
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <span className="size-1.5 rounded-full bg-[#EA580C]" />
                      How much can I safely spend this month?
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <span className="size-1.5 rounded-full bg-[#EA580C]" />
                      Am I saving enough?
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <span className="size-1.5 rounded-full bg-[#EA580C]" />
                      Are my goals still on track?
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <span className="size-1.5 rounded-full bg-[#EA580C]" />
                      What changes if something unexpected happens?
                    </li>
                  </ul>

                  <p>
                    Kubear is being built to connect those answers instead of making people calculate everything themselves.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 4: CORPORATE ENTITY DETAILS & DIRECTORY                     */}
        {/* =================================================================== */}
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
