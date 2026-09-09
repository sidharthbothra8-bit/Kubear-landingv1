import { useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  Check,
  Clock,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  Phone,
  Scale,
  Shield,
  ShieldAlert,
  UserCheck,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { Link } from "wouter";

const supportDirectory = [
  {
    matter: "App, account and general support",
    email: "support@kuberos.in",
    subject: "Kubear support",
  },
  {
    matter: "Privacy, correction, export or consent",
    email: "privacy@kuberos.in",
    subject: "Kubear privacy request",
  },
  {
    matter: "Account deletion",
    email: "privacy@kuberos.in",
    subject: "Kubear account deletion",
    href: "mailto:privacy@kuberos.in?subject=Kubear%20account%20deletion",
  },
  {
    matter: "Formal grievance",
    email: "grievance@kuberos.in",
    subject: "Kubear grievance — attention Sidharth Bothra",
  },
  {
    matter: "Security report",
    email: "support@kuberos.in",
    subject: "Kubear security report",
  },
  {
    matter: "Legal notice",
    email: "support@kuberos.in",
    subject: "Kubear legal notice — KUBEROS INNOVATIONS PRIVATE LIMITED",
  },
];

export default function Support() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kuberos.in/support");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Support and Grievances"
        description="Official Kubear Support and Grievances directory. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kuberos.in/support."
        path="/support"
      />

      {/* Header / Intro */}
      <section className="border-b border-[#123630]/10 bg-[#FAF7F0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C96632] mb-3">
            <HelpCircle className="size-3.5" />
            <span>Assistance & Grievance Directory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Support and Grievances
          </h1>

          {/* Document Metadata Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#123630]/10">
            <div className="bg-white/80 rounded-xl p-3.5 border border-[#123630]/8 shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Version</span>
              <span className="text-sm font-semibold text-[#123630] mt-0.5 block font-mono">2026-09-08</span>
            </div>
            <div className="bg-white/80 rounded-xl p-3.5 border border-[#123630]/8 shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Effective date</span>
              <span className="text-sm font-semibold text-[#123630] mt-0.5 block">8 September 2026</span>
            </div>
            <div className="bg-white/80 rounded-xl p-3.5 border border-[#123630]/8 shadow-xs flex items-center justify-between">
              <div className="min-w-0 pr-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Public URL</span>
                <a
                  href="https://kuberos.in/support"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kuberos.in/support
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public support URL"
              >
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 py-12 sm:px-6 lg:px-8 bg-[#FCFBF7]">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E817B] mb-3">Sections</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#company-contact-person" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Company and contact person
              </a>
              <a href="#where-to-write" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Where to write
              </a>
              <a href="#information-helps-respond" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> Information that helps us respond
              </a>
              <a href="#formal-grievances-deadlines" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> Formal grievances and deadlines
              </a>
              <a href="#security-reports" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> Security reports
              </a>
              <a href="#legal-notices-personal-info" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">6.</span> Legal notices and personal information
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="company-contact-person" className="space-y-4 pt-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              1. Company and contact person
            </h2>

            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#123630]/10 text-xs sm:text-sm text-[#3E514B] space-y-2 leading-relaxed">
              <p>
                <strong>Operator:</strong> KUBEROS INNOVATIONS PRIVATE LIMITED
              </p>
              <p>
                <strong>CIN:</strong> U62099GJ2026PTC177330
              </p>
              <p>
                <strong>Registered office:</strong> A-1001 Shyam Palce, Near Shrungar Residency, Athwalines, Surat City, Surat-395001, Gujarat, India
              </p>
              <p>
                <strong>Business location:</strong> Surat, Gujarat, India
              </p>
              <p>
                <strong>Telephone:</strong>{" "}
                <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                  +91 7875664515
                </a>
              </p>
              <p>
                <strong>Grievance Officer and privacy contact:</strong> Sidharth Bothra
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article id="where-to-write" className="space-y-6 pt-6 border-t border-[#123630]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              2. Where to write
            </h2>

            {/* Email Routing Directory Table */}
            <div className="overflow-hidden rounded-xl border border-[#123630]/15 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF7F0] border-b border-[#123630]/15 text-[#123630]">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-1/2">
                        Matter
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-1/2">
                        Email and subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#123630]/10 text-[#41534D]">
                    {supportDirectory.map((item, idx) => {
                      const mailtoUrl = item.href || `mailto:${item.email}?subject=${encodeURIComponent(item.subject)}`;
                      return (
                        <tr key={idx} className="hover:bg-[#FAF7F0]/60 transition-colors">
                          <td className="px-4 py-3.5 font-medium text-[#123630] align-top">
                            {item.matter}
                          </td>
                          <td className="px-4 py-3.5 leading-relaxed align-top">
                            <a href={mailtoUrl} className="font-semibold text-[#C96632] hover:underline">
                              {item.email}
                            </a>
                            <span className="text-[#6E817B]"> — “{item.subject}”</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              These routes are handled by Kuberos. If an alias bounces, the direct fallback mailbox is{" "}
              <a href="mailto:sidharth@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                sidharth@kuberos.in
              </a>
              . An unavailable alias does not remove a legal right.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              The telephone number is a business contact, not a promise of 24-hour support, emergency service or support through a messaging application.
            </p>
          </article>

          {/* Section 3 */}
          <article id="information-helps-respond" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              3. Information that helps us respond
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Describe the issue, when it happened, the outcome you seek and any support, transaction or deletion reference. For an account-specific issue, provide the registered mobile number with country code and your account name if present.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Attach only relevant, redacted screenshots or documents. Do not send OTPs, passwords, bank credentials, payment-card security codes or unnecessary identity documents. We may request proportionate verification before disclosing information, changing ownership or deleting an account. Someone else's mobile number alone is not authority to act for them.
            </p>
          </article>

          {/* Section 4 */}
          <article id="formal-grievances-deadlines" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              4. Formal grievances and deadlines
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Address a grievance to <strong>Sidharth Bothra</strong> at{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>
              , by telephone above, or at the registered office. Include the facts, relevant dates, earlier correspondence and requested resolution.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kuberos will record receipt, assess the issue, seek necessary information and communicate the outcome or a reasoned response. Grievances covered by the applicable 2011 sensitive-personal-data rules will be addressed expeditiously and within <strong>one month from receipt</strong>. Any shorter binding requirement takes priority. Internal workload, routing between aliases or a request for verification does not automatically extend a statutory deadline.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Our service target is to acknowledge written requests within <strong>two business days</strong>. For other requests, the applicable legal deadline and any expressly communicated service target apply. No general 24-hour staffed-support promise is made. Account erasure and backup expiry can involve different steps; see the{" "}
              <Link href="/data-deletion" className="text-[#C96632] hover:underline font-medium">
                Deletion page
              </Link>
              .
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If unresolved, reply using the reference and request further review. You may also approach a competent authority, consumer forum or court where legally available. Internal escalation is not a waiver of those remedies or a requirement to let a limitation period expire. Statutory data-protection escalation mechanisms apply according to the law and provisions in force at the time.
            </p>
          </article>

          {/* Section 5 */}
          <article id="security-reports" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              5. Security reports
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              State the affected feature, approximate time, safe reproduction details and potential impact. Stop testing if you encounter another person's information. Do not download, retain or send that person's records as evidence.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A report does not authorise penetration testing, access to other accounts, disruption, public disclosure of private data or a reward. We will assess reports and make legally required incident notifications. Do not rely on this mailbox to handle an immediate financial emergency; contact the relevant bank or emergency authority directly.
            </p>
          </article>

          {/* Section 6 */}
          <article id="legal-notices-personal-info" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
              6. Legal notices and personal information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Address notices to the company, not just the product name. The email route supplements, and does not replace, any statutory method of service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We use correspondence and necessary attachments to investigate, verify and respond, with access and retention governed by the{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>
              . Information about another person will be restricted where required.
            </p>
          </article>

          {/* Company & Grievance Directory Card */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#123630]/12 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#FAF7F0] text-[#123630] border border-[#123630]/10">
                <Building2 className="size-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#123630]">
                  KUBEROS INNOVATIONS PRIVATE LIMITED
                </h3>
                <p className="text-xs font-mono text-[#6E817B]">CIN: U62099GJ2026PTC177330 • Surat, Gujarat, India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="bg-[#FAF7F0] rounded-xl p-3 border border-[#123630]/8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Primary Support & Security</span>
                <a href="mailto:support@kuberos.in" className="font-semibold text-[#C96632] hover:underline mt-0.5 block">
                  support@kuberos.in
                </a>
              </div>
              <div className="bg-[#FAF7F0] rounded-xl p-3 border border-[#123630]/8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Grievance Officer</span>
                <p className="font-semibold text-[#123630] mt-0.5">
                  Sidharth Bothra •{" "}
                  <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-medium">
                    grievance@kuberos.in
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </SiteLayout>
  );
}
