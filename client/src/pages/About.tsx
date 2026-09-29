import { 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Lock, 
  MapPin, 
  Mail, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/SiteChrome";
import { PageMeta } from "@/components/PageMeta";

export default function About() {
  return (
    <SiteLayout>
      <PageMeta
        title="About Kuberos Innovations | Makers of Kubear"
        description="Kuberos Innovations is an Indian technology startup building Kubear, a personal finance platform that helps individuals and households make sense of their money."
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
        {/* SECTION 1: COMPANY INTRO (CLEAR & HUMAN)                            */}
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
                  Kuberos Innovations is an Indian technology startup. We are the team behind <strong>Kubear</strong>, a personal finance platform created for Indian individuals and families.
                </p>
                <p>
                  We believe managing your money shouldn&apos;t feel like a second job. Kubear connects your income, everyday spending, loans, savings, investments, and life goals into one clear view — so you always know where you stand and what is safe to spend next.
                </p>
              </div>

              {/* Clean link to Product page */}
              <div className="mt-8 pt-6 border-t border-[#E8DEC8]/80 flex items-center">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E241E] hover:bg-[#1C3B33] text-white font-bold text-sm shadow-xs transition-colors"
                >
                  <span>See How Kubear Works</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 2: TECHNICAL ARCHITECTURE (NO JARGON, HIGH TRUST)           */}
        {/* =================================================================== */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8] bg-[#FAF5EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#047857]">
                TECHNOLOGY &amp; SECURITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E241E] mt-2 tracking-tight">
                Built to be fast, accurate, and completely private.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42564F] leading-relaxed">
                Your financial numbers are personal. We engineered Kubear on modern cloud systems to guarantee instant speed, exact Indian financial math, and bank-grade privacy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Fast & Reliable */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#EA580C] mb-4">
                    <Server className="size-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E241E]">Fast &amp; Always Available</h3>
                  <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                    Hosted on Google Cloud modern serverless systems. Whether you check Kubear on your phone or laptop, pages load in milliseconds with real-time sync and 99.9% uptime.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">Google Cloud</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">Real-Time Sync</span>
                </div>
              </div>

              {/* Card 2: Accurate Indian Math */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6] flex items-center justify-center text-[#047857] mb-4">
                    <Cpu className="size-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E241E]">Accurate Indian Math</h3>
                  <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                    Built specifically for how money works in India. Accurately calculates New vs. Old income tax slabs, home loan EMIs, compounding SIP growth, and inflation so your numbers are always correct.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">Indian Tax Slabs</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">Exact EMI &amp; SIP Math</span>
                </div>
              </div>

              {/* Card 3: Private & Secure */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center text-[#B45309] mb-4">
                    <Lock className="size-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0E241E]">Private &amp; Strictly Protected</h3>
                  <p className="text-xs sm:text-sm text-[#556963] mt-2 leading-relaxed">
                    Your financial data belongs exclusively to you. Encrypted with bank-grade security (TLS 1.3 &amp; AES-256) and built in full compliance with India&apos;s DPDP Act. We never sell your data.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex flex-wrap gap-1.5 text-[11px] font-mono text-[#047857]">
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">Bank-Grade Encryption</span>
                  <span className="bg-[#E6F4EA] px-2 py-0.5 rounded font-semibold">DPDP Compliant</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* SECTION 3: FOUNDER & OUR PURPOSE                                    */}
        {/* =================================================================== */}
        <section className="py-14 sm:py-20 border-b border-[#E8DEC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Founder Profile Card */}
              <div className="md:col-span-6 lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E8DEC8] shadow-xs">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="size-14 rounded-full bg-[#123630] text-[#FFF8EE] flex items-center justify-center font-bold text-xl shadow-xs">
                      SB
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-[#0E241E]">Sidharth Bothra</h3>
                        <a
                          href="https://www.linkedin.com/in/sidharthbothra/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] text-xs font-semibold transition-colors"
                          aria-label="Sidharth Bothra on LinkedIn"
                        >
                          <svg className="size-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                          </svg>
                          <span>LinkedIn</span>
                          <ArrowUpRight className="size-2.5 text-[#0A66C2]/70" />
                        </a>
                      </div>
                      <p className="text-xs font-mono text-[#EA580C] uppercase tracking-wider font-semibold mt-0.5">
                        Founder &amp; Director
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-[15px] text-[#42564F] leading-relaxed">
                    <p>
                      Sidharth is the founder of Kuberos Innovations and leads the development of Kubear. He holds an MBA from IIM Sirmaur and previously worked at EY in consulting and strategy.
                    </p>
                    <p>
                      He started Kuberos around one simple truth: people shouldn&apos;t have to organize their whole lives around managing money. Software should quietly handle the numbers around the life they are already living.
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
                      <span>LinkedIn Profile ↗</span>
                    </a>

                    <a
                      href="mailto:sidharthbothra8@gmail.com"
                      className="text-xs sm:text-sm text-[#047857] hover:underline font-semibold flex items-center gap-1"
                    >
                      <Mail className="size-3.5" />
                      <span>Email Sidharth</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Our Purpose in Everyday Words */}
              <div className="md:col-span-6 lg:col-span-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  WHY WE BUILT KUBEAR
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E241E] mt-2">
                  Software built around real human questions
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-[#42564F] leading-relaxed">
                  <p>
                    Today, your money is split across bank accounts, credit cards, mutual fund apps, loan statements, and mental math. That makes simple everyday questions surprisingly stressful:
                  </p>
                  
                  <ul className="space-y-2.5 py-1 pl-1">
                    <li className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm sm:text-base">
                      <span className="size-2 rounded-full bg-[#EA580C] shrink-0" />
                      &ldquo;Can I afford this purchase right now?&rdquo;
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm sm:text-base">
                      <span className="size-2 rounded-full bg-[#EA580C] shrink-0" />
                      &ldquo;How much is safe to spend until my next salary?&rdquo;
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm sm:text-base">
                      <span className="size-2 rounded-full bg-[#EA580C] shrink-0" />
                      &ldquo;Will this surprise bill delay my family goal?&rdquo;
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-800 font-semibold text-sm sm:text-base">
                      <span className="size-2 rounded-full bg-[#EA580C] shrink-0" />
                      &ldquo;How many months of runway do we have if income stops?&rdquo;
                    </li>
                  </ul>

                  <p className="pt-1">
                    Kubear answers these questions automatically, in plain numbers, so you never have to guess.
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
                      <dd className="text-[#42564F] mt-0.5">Software Development, Consumer Internet &amp; Financial Analytics</dd>
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
                    Communication &amp; Support
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E241E] mt-1">
                    Official Inquiries &amp; Contacts
                  </h3>
                  <div className="mt-6 space-y-3 text-sm">
                    <p className="text-xs text-[#556963]">
                      Reach our team directly for questions, partnerships, or support:
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">General &amp; Corporate Inquiries</span>
                      <a href="mailto:hello@kuberos.in" className="font-mono text-xs font-bold text-[#EA580C] hover:underline">
                        hello@kuberos.in
                      </a>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">Technical &amp; Customer Support</span>
                      <a href="mailto:support@kuberos.in" className="font-mono text-xs font-bold text-[#EA580C] hover:underline">
                        support@kuberos.in
                      </a>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-between">
                      <span className="font-medium text-[#0E241E]">Data Privacy &amp; Grievance Officer</span>
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
