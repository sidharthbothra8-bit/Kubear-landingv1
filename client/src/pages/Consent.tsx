import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCheck2,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { Link } from "wouter";

const featureChoices = [
  {
    choice: "AI explanation",
    involves: "Send your prompt and relevant server-authorised records to the disclosed AI provider",
    effect: "Continue manual recordkeeping; do not receive that AI explanation",
  },
  {
    choice: "Document extraction/review",
    involves: "Send selected file content for parsing; review extracted facts before saving",
    effect: "Enter facts manually",
  },
  {
    choice: "Saved Protect document",
    involves: "Retain the selected file as a document record, separate from temporary parsing, with its recorded retention date",
    effect: "Keep only facts you choose to enter, without that stored file",
  },
  {
    choice: "Web/search grounding",
    involves: "Use a separately enabled external search feature for the requested response",
    effect: "Ungrounded permitted features may remain available; do not assume internet access",
  },
  {
    choice: "Reminders and notifications",
    involves: "Store settings and, for push notifications, register a delivery token",
    effect: "No corresponding push delivery; essential account communications may still be necessary",
  },
  {
    choice: "Voice input",
    involves: "Start browser/OS speech recognition and review the transcript",
    effect: "Type instead; the speech supplier's processing is described in the Privacy Policy",
  },
  {
    choice: "Camera or photo/file selection",
    involves: "Access only the input selected or captured for the feature",
    effect: "Use a non-upload/manual option where available",
  },
  {
    choice: "Household sharing",
    involves: "Put information into an authorised shared context",
    effect: "Keep Personal information separate; joining alone does not share every record",
  },
  {
    choice: "Optional analytics or additional personalisation",
    involves: "Only the specific purposes and data explained when an active feature is introduced",
    effect: "Core recordkeeping must not require these unrelated choices",
  },
];

export default function Consent() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kubear.kuberos.in/consent");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Consent Notice"
        description="Official Kubear Consent Notice. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kubear.kuberos.in/consent."
        path="/consent"
      />

      {/* Header / Intro */}
      <section className="border-b border-[#123630]/10 bg-[#FAF7F0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C96632] mb-3">
            <Sliders className="size-3.5" />
            <span>Choice & Privacy Controls</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Consent Notice
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
                  href="https://kubear.kuberos.in/consent"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kubear.kuberos.in/consent
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public consent notice URL"
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

          {/* Quick Table of Contents */}
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E817B] mb-3">Sections</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#who-is-asking" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Who is asking and why
              </a>
              <a href="#core-recordkeeping" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Core recordkeeping
              </a>
              <a href="#separate-feature-choices" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> Separate feature choices
              </a>
              <a href="#giving-a-valid-choice" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> Giving a valid choice
              </a>
              <a href="#withdrawal-and-existing-info" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> Withdrawal and existing information
              </a>
              <a href="#other-people-children" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">6.</span> Other people, children and representatives
              </a>
              <a href="#records-and-questions" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5 sm:col-span-2">
                <span className="text-[#C96632] font-mono font-semibold">7.</span> Records and questions
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="who-is-asking" className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                1. Who is asking and why
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              <strong>KUBEROS INNOVATIONS PRIVATE LIMITED</strong>, CIN <strong>U62099GJ2026PTC177330</strong>, operates Kubear. This notice explains choices alongside the{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>
              . Company and registered-office details are in that policy.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Consent concerns a specified use of information. Agreeing to the Terms, receiving an OTP, joining a Household or granting a browser permission is not blanket agreement to every use of your data.
            </p>
          </article>

          {/* Section 2 */}
          <article id="core-recordkeeping" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                2. Core recordkeeping
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              An account requires phone authentication, associated security checks and account identifiers. Requesting an OTP sends the mobile number to Google/Firebase; Google also stores it for spam and abuse prevention across Google services. The sign-in notice and{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Google Privacy Policy <ExternalLink className="size-3 inline" />
              </a>{" "}
              explain this before you request the message. Records you deliberately submit are processed to save, synchronise, calculate, restore, correct and export the information requested. Consent and request receipts help administer your choices.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Before collecting sensitive financial information, we will explain its purposes and obtain the consent required by law. Calling processing “core” does not remove that obligation. If you decline or withdraw necessary information, the related service may be unavailable. You do not have to enable unrelated optional features.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Required security and compliance processing is distinct from optional product-improvement analytics. An analytics switch does not promise to disable authentication, anti-abuse checks, essential service logs or separately disclosed operational error reporting.
            </p>
          </article>

          {/* Section 3 */}
          <article id="separate-feature-choices" className="space-y-6 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                3. Separate feature choices
              </h2>
            </div>

            {/* Feature Choices Table */}
            <div className="overflow-hidden rounded-xl border border-[#123630]/15 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF7F0] border-b border-[#123630]/15 text-[#123630]">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-1/4">
                        Choice
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-5/12">
                        What it involves
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-mono font-bold text-xs uppercase tracking-wider text-[#123630] sm:w-1/3">
                        Effect of declining or stopping
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#123630]/10 text-[#41534D]">
                    {featureChoices.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF7F0]/60 transition-colors">
                        <td className="px-4 py-3.5 font-medium text-[#123630] align-top">
                          {item.choice}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed align-top">
                          {item.involves}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed align-top text-[#3E514B]">
                          {item.effect}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Not every option is available in every release. A choice applies to the named feature, not automatically to all technical processing by every supplier. New optional processing requires a specific explanation before it begins.
            </p>
          </article>

          {/* Section 4 */}
          <article id="giving-a-valid-choice" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                4. Giving a valid choice
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A consent request should identify the information, purpose, relevant provider/recipient, optional nature and withdrawal method in language you can understand. Optional choices must not be preselected or obtained through inactivity, misleading controls or unrelated bundled permissions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A deliberate feature action can communicate a choice only if the necessary explanation is available before transmission. A file-picker permission alone does not explain sending that file to an AI supplier. A single acceptance receipt cannot prove consent to an undisplayed purpose.
            </p>
          </article>

          {/* Section 5 */}
          <article id="withdrawal-and-existing-info" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                5. Withdrawal and existing information
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Use <strong>Settings → Privacy Center</strong> for available controls or email{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>
              , subject “Kubear consent request”. State the feature or purpose you want to stop; never email an OTP or password. Device/browser permissions may need to be revoked separately.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Withdrawal stops the corresponding future optional processing once acted on. It does not undo completed lawful processing, retrieve other people's copies, or by itself delete existing records. You can also request deletion of associated information. Any continued processing must be limited to a specific lawful reason, and we will explain relevant consequences.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If a control fails or is unavailable, use the email route. Do not assume that a permission prompt, a local switch or clearing browser storage has removed server or supplier copies.
            </p>
          </article>

          {/* Section 6 */}
          <article id="other-people-children" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                6. Other people, children and representatives
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You cannot consent on behalf of another adult merely because you own a Household. Share only information you are authorised to provide. Child-related information and representative requests require appropriate authority and safeguards; the service is not open to child accounts.
            </p>
          </article>

          {/* Section 7 */}
          <article id="records-and-questions" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                7. Records and questions
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear records applicable choices and notice versions to administer and demonstrate what was agreed. Terms acceptance and acknowledgment of the Privacy Policy do not replace a separate choice for an optional purpose. A revised notice does not retroactively expand earlier consent. We will seek a new choice where a new purpose or applicable law requires one.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Privacy questions:{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>
              . Formal grievances: <strong>Sidharth Bothra</strong>,{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>
              ,{" "}
              <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                +91 7875664515
              </a>
              . See{" "}
              <a
                href="https://kubear.kuberos.in/support"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Support and Grievances <ExternalLink className="size-3 inline" />
              </a>{" "}
              for deadlines and escalation.
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
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E817B] block">Privacy Inquiries</span>
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
