import { useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  Phone,
  ShieldAlert,
  Smartphone,
  Trash2,
  UserCheck,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { Link } from "wouter";

export default function DataDeletion() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kubear.kuberos.in/data-deletion");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Account and Data Deletion"
        description="Official Kubear Account and Data Deletion Notice. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kubear.kuberos.in/data-deletion."
        path="/data-deletion"
      />

      {/* Header / Intro */}
      <section className="border-b border-[#123630]/10 bg-[#FAF7F0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C96632] mb-3">
            <Trash2 className="size-3.5" />
            <span>Account & Data Rights</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Account and Data Deletion
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
                  href="https://kubear.kuberos.in/data-deletion"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kubear.kuberos.in/data-deletion
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public deletion notice URL"
              >
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white border border-[#123630]/10 text-xs sm:text-sm text-[#3E514B] leading-relaxed">
            Kubear is operated by <strong>KUBEROS INNOVATIONS PRIVATE LIMITED</strong>, CIN <strong>U62099GJ2026PTC177330</strong>. You can request deletion without reinstalling the app or signing into it.
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
              <a href="#request-by-email" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Request deletion by email
              </a>
              <a href="#request-in-app" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Request deletion in the app
              </a>
              <a href="#before-you-confirm" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> Before you confirm
              </a>
              <a href="#what-deletion-covers" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> What account deletion covers
              </a>
              <a href="#household-ownership" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> Household ownership and shared records
              </a>
              <a href="#timing-exceptions-confirmation" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">6.</span> Timing, exceptions and confirmation
              </a>
              <a href="#help-and-grievances" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5 sm:col-span-2">
                <span className="text-[#C96632] font-mono font-semibold">7.</span> Help and grievances
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="request-by-email" className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                1. Request deletion by email
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Email{" "}
              <a
                href="mailto:privacy@kuberos.in?subject=Kubear%20account%20deletion"
                className="font-bold text-[#C96632] hover:underline"
              >
                privacy@kuberos.in
              </a>{" "}
              with subject <strong>“Kubear account deletion”</strong>.
            </p>

            <div className="p-5 rounded-xl bg-white border border-[#123630]/12 space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6E817B] font-bold">Include in your email:</p>
              <ul className="space-y-2 text-sm sm:text-base text-[#3E514B] list-disc pl-5 leading-relaxed">
                <li>the mobile number registered with Kubear, including country code;</li>
                <li>your name as recorded in Kubear, if present;</li>
                <li>a clear statement that you want your Kubear account and associated personal data deleted;</li>
                <li>an existing deletion/support reference, if you have one;</li>
                <li>an email address at which we can reply, if different from the sender.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-2 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <ShieldAlert className="size-4 shrink-0 text-amber-700" />
                <span>Security & Identity Verification</span>
              </div>
              <p>
                Do not send OTPs, passwords, bank credentials, full card numbers or identity documents. We may need additional proportionate verification before deleting an account. An email mentioning a mobile number alone does not prove ownership.
              </p>
              <p>
                If you have lost access to your registered number, explain that in the request. We will explain a verification route; do not send another person's OTP or create a new account to impersonate the old one.
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article id="request-in-app" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                2. Request deletion in the app
              </h2>
            </div>

            <ol className="space-y-3 p-5 rounded-xl bg-white border border-[#123630]/12 text-sm sm:text-base text-[#3E514B] list-decimal pl-5 leading-relaxed">
              <li>Sign in to Kubear.</li>
              <li>
                Open <strong>Settings → Privacy Center</strong>.
              </li>
              <li>
                Select <strong>Request account deletion</strong>.
              </li>
              <li>
                Read the warning. Household ownership is checked when the server receives your confirmation; the request may be rejected or paused if an ownership issue needs resolution.
              </li>
              <li>Confirm the request and keep the request reference.</li>
            </ol>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A server request reference confirms intake, <strong>not completed erasure</strong>. The app may sign you out after intake. Keep your reference outside the app and contact{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-medium">
                privacy@kuberos.in
              </a>{" "}
              for status; we do not promise an in-app progress tracker after sign-out.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If the app cannot accept the request, use the email route above. You do not need to keep using or reinstall the app to pursue it.
            </p>
          </article>

          {/* Section 3 */}
          <article id="before-you-confirm" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                3. Before you confirm
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Export information you need and save original documents outside Kubear. Deletion may be irreversible once processing starts. A cancellation request can be considered only if deletion has not progressed too far; cancellation is not guaranteed.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Signing out, uninstalling, revoking a notification permission or clearing browser storage does <strong>not</strong> delete the server account. Clearing local storage before sync can remove unsaved entries without creating a server deletion request.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Deleting an individual record is different from closing an account. Use the relevant record control where available, or explain the specific correction/deletion request by email.
            </p>
          </article>

          {/* Section 4 */}
          <article id="what-deletion-covers" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                4. What account deletion covers
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              After verification and safe processing, the account-deletion workflow covers the linked sign-in identity and associated account records, financial content, account-held AI/chat data, relevant stored files, account/bootstrap state and related server-managed data, subject to the exceptions below.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              The scope includes temporary uploads and deliberately retained account-associated documents or support attachments where they are not subject to a justified retention exception. A deleted parsing upload does not automatically delete facts previously saved from it.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Account-associated data held by service providers must also be addressed through applicable deletion mechanisms. Provider abuse logs, backups and lawful retained records may have separate expiry rules. Deleting Firebase sign-in alone is not evidence that all account data has been erased.
            </p>
          </article>

          {/* Section 5 */}
          <article id="household-ownership" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                5. Household ownership and shared records
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Deletion must protect both your rights and other members' legitimate records. Shared entries may require unlinking, minimisation, tombstoning or an authorised ownership transfer instead of indiscriminately deleting an entire Household.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If you own a shared space, deletion may pause or be rejected at intake where there is no clear eligible adult successor, multiple possible successors, or changed ownership relationships. Contact{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-medium">
                privacy@kuberos.in
              </a>{" "}
              with the reference so the issue can be reviewed and you can be told what action is needed.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              An ownership issue does not authorise indefinite retention of unrelated Personal data. Kuberos must assess what can be deleted separately and retain only what is justified. Other members' lawful exports or screenshots cannot necessarily be retrieved.
            </p>
          </article>

          {/* Section 6 */}
          <article id="timing-exceptions-confirmation" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                6. Timing, exceptions and confirmation
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Our normal target is to complete account deletion from active systems <strong>within 30 calendar days after proportionate ownership verification</strong>. If completion is delayed by an ownership dispute, legal hold, supplier dependency or technical failure, we will explain the outstanding steps and expected next update. We do not treat verification or this service target as an automatic extension of any binding legal deadline.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              <strong>Backups and providers:</strong> copies expire according to the affected system's configured backup rotation or the provider's deletion/retention process after active-system deletion. Restricted recovery copies must not return to ordinary use; a restore must reapply deletion restrictions. We will identify applicable expiry criteria or expected periods in our response. For an enabled Google Search grounding request, Google's disclosed retention period for the grounding prompt, context and output is 30 days; other service/security records follow the applicable terms, not an invented universal 30-day limit.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Deletion is asynchronous and may involve verification, shared-record review, retries and several storage systems. A scheduled worker interval is not the promised completion time.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Any retained information must be limited to a defined legal obligation, security/fraud need, unresolved dispute or other applicable lawful justification. Examples can include restricted evidence of the request and its handling, required security logs or records under a legal hold. These exceptions are not permission to retain the whole account for unspecified future use. Outstanding holds and deletion exceptions are reviewed at least every 90 days.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We will record the result and provide a completion or exception response through the verified contact route. You can also contact{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>{" "}
              with your reference for status. Do not assume the response is automated or that receiving an intake reference proves completion. Where information must remain, we will identify its category, purpose and retention or review period unless disclosure is legally restricted. Removing data from normal use and expiry of all backup copies may be different events. Restoring a backup must not silently reactivate deleted account information.
            </p>
          </article>

          {/* Section 7 */}
          <article id="help-and-grievances" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                7. Help and grievances
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              For status, email <strong>privacy@kuberos.in</strong> with the request reference and registered mobile number. For a formal grievance, contact <strong>Sidharth Bothra</strong>,{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>
              , telephone{" "}
              <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                +91 7875664515
              </a>
              .
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Grievances covered by the applicable 2011 sensitive-personal-data rules are to be addressed expeditiously and within <strong>one month of receipt</strong>; shorter binding deadlines prevail. This grievance deadline is not a claim that every backup is erased within a month.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Company/registered-office details and wider retention information are in the{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>
              . See{" "}
              <a
                href="https://kubear.kuberos.in/support"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Support and Grievances <ExternalLink className="size-3 inline" />
              </a>{" "}
              for submission and escalation.
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
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Email Intake Channel</span>
                <a href="mailto:privacy@kuberos.in?subject=Kubear%20account%20deletion" className="font-semibold text-[#C96632] hover:underline mt-0.5 block">
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
