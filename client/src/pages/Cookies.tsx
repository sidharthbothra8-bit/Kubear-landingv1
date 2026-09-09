import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Cookie,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { Link } from "wouter";

const technologies = [
  {
    technology: "Authentication/session persistence and anti-abuse technologies",
    purpose:
      "Keep the appropriate account signed in and help prevent automated abuse. Firebase authentication and Google verification services may use their own storage and signals",
  },
  {
    technology: "Local storage and IndexedDB",
    purpose:
      "Store essential routing/preferences and encrypted local account snapshots or pending sync information used by the application",
  },
  {
    technology: "Cache/service-worker storage, where used by the release",
    purpose:
      "Deliver application resources and support permitted offline behaviour; a cached screen is not proof of a completed server save",
  },
  {
    technology: "Notification registration and preferences",
    purpose:
      "Support push notifications you enable and remember corresponding choices",
  },
  {
    technology: "Consent/preference records",
    purpose:
      "Remember settings and help administer your choices; some records are also held on the server",
  },
  {
    technology: "Operational error reporting, where configured",
    purpose:
      "Diagnose technical failures. Sentry is configuration-dependent, not controlled by the product-analytics switch; technical SDK and network metadata may be involved",
  },
];

export default function CookiesPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kubear.kuberos.in/cookies");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Cookie and Browser Storage Notice"
        description="Official Kubear Cookie and Browser Storage Notice. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kubear.kuberos.in/cookies."
        path="/cookies"
      />

      {/* Header / Intro */}
      <section className="border-b border-[#123630]/10 bg-[#FAF7F0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C96632] mb-3">
            <Cookie className="size-3.5" />
            <span>Technical & Browser Storage Notice</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Cookie and Browser Storage Notice
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
                  href="https://kubear.kuberos.in/cookies"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kubear.kuberos.in/cookies
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public cookies notice URL"
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
              <a href="#scope" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Scope
              </a>
              <a href="#technologies-purposes" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Technologies and purposes
              </a>
              <a href="#optional-technology" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> Optional technology
              </a>
              <a href="#duration-controls" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> Duration and controls
              </a>
              <a href="#providers-contact" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5 sm:col-span-2">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> Providers and contact
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="scope" className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                1. Scope
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              This notice describes cookies, browser storage and similar technologies used by Kubear, operated by <strong>KUBEROS INNOVATIONS PRIVATE LIMITED</strong>, CIN <strong>U62099GJ2026PTC177330</strong>, at kubear.kuberos.in. It supplements the{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              It is not an audit of every technology installed on kuberos.in or another website. A main website with different analytics, embedded media, forms or advertising needs disclosures and controls for those technologies.
            </p>
          </article>

          {/* Section 2 */}
          <article id="technologies-purposes" className="space-y-6 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                2. Technologies and purposes
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-[#123630]/15 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF7F0] border-b border-[#123630]/15 text-[#123630]">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-2/5">
                        Technology
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-3/5">
                        Purpose and handling
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#123630]/10 text-[#41534D]">
                    {technologies.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F0]/60 transition-colors">
                        <td className="px-4 py-3.5 font-medium text-[#123630] align-top">
                          {item.technology}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed align-top">
                          {item.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Not every listed mechanism is a cookie. Local financial snapshots are not advertising identifiers. Encryption of a local snapshot is not end-to-end encryption of all service processing and does not protect an already-unlocked compromised device.
            </p>
          </article>

          {/* Section 3 */}
          <article id="optional-technology" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                3. Optional technology
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear does not use this notice as permission to introduce advertising trackers or unrelated analytics. This release does not offer unrelated advertising tracking as part of core recordkeeping. Any future optional measurement will have a specific disclosure and appropriate choice before activation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Essential authentication/security processing and operational diagnostics must be assessed separately. Labelling an SDK “necessary” does not remove applicable privacy requirements. A general product-analytics toggle must not be described as controlling every third-party request.
            </p>
          </article>

          {/* Section 4 */}
          <article id="duration-controls" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                4. Duration and controls
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Authentication persistence lasts according to the selected session mode and provider/browser controls, until expiry or removal. Local preferences and encrypted snapshots can persist between visits until replaced or cleared by an applicable account action or your browser. Application caches remain until replaced, expired or cleared; closing a tab alone is not removal. Notification registration persists until revoked, invalidated or removed by the relevant account/device action. Provider-managed storage follows that provider's expiry and controls.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Some storage lasts for a session; other storage can remain until expiry, sign-out cleanup, site-data removal or a supported account action. Browser behaviour and permissions affect persistence. Do not assume everything disappears when a tab closes.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You can use browser settings to manage cookies, site data and notification/microphone/camera permissions, and available Kubear controls to manage optional choices. Blocking required storage can prevent sign-in or restore. Clearing storage can remove local preferences and unsynced records and may sign you out.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Clearing browser data, deleting a shortcut or uninstalling an app does <strong>not</strong> delete the server account. Use{" "}
              <Link href="/data-deletion" className="text-[#C96632] hover:underline font-medium">
                Account and Data Deletion
              </Link>
              .
            </p>
          </article>

          {/* Section 5 */}
          <article id="providers-contact" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                5. Providers and contact
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Google verification services have separate{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Google Privacy Policy <ExternalLink className="size-3 inline" />
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Terms of Service <ExternalLink className="size-3 inline" />
              </a>
              . The{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>{" "}
              explains other providers and possible processing outside India; this notice is not a guarantee of India-only storage.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Privacy questions:{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>
              . Grievances: <strong>Sidharth Bothra</strong>,{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>
              ,{" "}
              <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                +91 7875664515
              </a>
              . Company and registered-office details are in the{" "}
              <Link href="/support" className="text-[#C96632] hover:underline font-medium">
                Support page
              </Link>
              .
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
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Privacy & Storage Inquiries</span>
                <a href="mailto:privacy@kuberos.in" className="font-semibold text-[#C96632] hover:underline mt-0.5 block">
                  privacy@kuberos.in
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
