import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  FileCheck2,
  Mail,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Building2,
  UserCheck,
} from "lucide-react";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";

export default function PrivacyData() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kubear.kuberos.in/privacy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Privacy Policy"
        description="Official Kubear Privacy Policy. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kubear.kuberos.in/privacy."
        path="/privacy"
      />

      {/* Header Banner */}
      <section className="bg-[#FAF7F0] border-b border-[#123630]/10 px-5 py-12 sm:px-8 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123630]/5 text-[#C96632] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Shield className="size-3.5" />
            <span>Official Policy Document</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Privacy Policy
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
                  href="https://kubear.kuberos.in/privacy"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kubear.kuberos.in/privacy
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public policy URL"
              >
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Content */}
      <section className="bg-[#FFFDF8] px-5 py-12 sm:px-8 md:px-12">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Quick Jump Index */}
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E817B] mb-3">Policy Sections</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#who-we-are" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Who we are and what this policy covers
              </a>
              <a href="#information-we-process" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Information we process
              </a>
              <a href="#purposes-consent-required" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> Purposes, consent and required processing
              </a>
              <a href="#personal-and-household" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> Personal and Household information
              </a>
              <a href="#ai-document-review-voice" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> AI, document review and voice
              </a>
              <a href="#providers-locations" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">6.</span> Providers, recipients and processing locations
              </a>
              <a href="#retention" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">7.</span> Retention
              </a>
              <a href="#your-controls-requests" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">8.</span> Your controls and requests
              </a>
              <a href="#adults-and-children" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">9.</span> Adults and information about children
              </a>
              <a href="#security-and-incidents" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">10.</span> Security and incidents
              </a>
              <a href="#grievances-and-changes" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5 sm:col-span-2">
                <span className="text-[#C96632] font-mono font-semibold">11.</span> Grievances and changes
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="who-we-are" className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                1. Who we are and what this policy covers
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear is operated by <strong>KUBEROS INNOVATIONS PRIVATE LIMITED</strong>, an Indian company, CIN <strong>U62099GJ2026PTC177330</strong> (“Kuberos”, “we”, “us” or “our”).
            </p>

            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#123630]/10 text-xs sm:text-sm text-[#3E514B] space-y-2 leading-relaxed">
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
                <strong>Privacy:</strong>{" "}
                <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                  privacy@kuberos.in
                </a>
              </p>
              <p>
                <strong>Grievance contact:</strong> Sidharth Bothra,{" "}
                <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                  grievance@kuberos.in
                </a>
              </p>
              <p>
                <strong>General enquiries:</strong>{" "}
                <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                  support@kuberos.in
                </a>
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              This policy covers Kubear accounts, the web application, associated support and the processing described below. A separate website or third-party service may have its own notice. It does not make those services part of Kubear.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear is an India-only, adult personal and household financial recordkeeping service. It organises facts you provide, produces calculations and offers optional explanations. It does not access a bank account merely because you record its balance, move money, execute investments, issue credit or insurance, file tax returns, or provide personalised financial, tax or legal advice.
            </p>
          </article>

          {/* Section 2 */}
          <article id="information-we-process" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                2. Information we process
              </h2>
            </div>

            {/* Structured Table */}
            <div className="overflow-x-auto rounded-xl border border-[#123630]/12 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF7F0] border-b border-[#123630]/12 text-[#123630]">
                    <th className="p-3.5 sm:p-4 font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs w-[30%]">
                      Information
                    </th>
                    <th className="p-3.5 sm:p-4 font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs w-[45%]">
                      Source and purpose
                    </th>
                    <th className="p-3.5 sm:p-4 font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs w-[25%]">
                      Choice
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#123630]/8 text-[#41534D]">
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Mobile number, authentication user ID and sign-in/session information
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      You and our authentication provider; account access, restore, account administration and abuse prevention
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#123630]/5 text-[#123630] font-medium text-xs">
                        Necessary for an account
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Profile information, such as name and optional demographic or preference fields
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      You; identify your account and display the preferences you supply
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Supply only fields needed or wanted; optional fields can be omitted
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Income, spending, balances, accounts, commitments, budgets, goals, holdings, debts, policy and tax-organiser facts
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Records you enter or review; save, sync, correct, export, calculate and display your financial picture
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      You choose the records; a requested calculation may be unavailable without its inputs
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Household membership, invitations, roles, shared entries and split records
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      You and authorised participants; operate the shared space and control access
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Joining and sharing are separate choices
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Selected receipts, photos, statements and other files; extracted text and reviewed facts
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Files you select; optional extraction, review, storage or support
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Optional; temporary parsing and saved documents have different lifecycles
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      AI prompts, permitted record context, outputs and usage/audit information
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Your AI request and server-selected records you may access; generate explanations and operate safeguards
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Optional AI use; see section 5
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Support messages, email addresses, attachments, requests and case references
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      You and support handling; respond, verify requests and record their outcome
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Contacting support is optional; reasonable verification may be needed
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Consent choices, notice versions, request receipts and record-change metadata
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Your actions and service operation; remember choices, sync reliably and evidence handling
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#123630]/5 text-[#123630] font-medium text-xs">
                        Necessary to administer the relevant action
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      IP/network information, browser/device details, integrity signals, technical errors and operational logs
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Service requests and security/reliability tools; authenticate, prevent abuse, diagnose failures and investigate incidents
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Some processing is necessary for secure delivery; not the same as optional product analytics
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Notification registration tokens, reminder settings and delivery status
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Your enabled notification feature; deliver and administer requested reminders
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Optional; device permission is separate
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Voice transcript
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      A voice feature you start; place recognised words into an editable draft
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Optional; browser/OS speech processing is explained below
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Files and free-text entries may contain more information than Kubear needs, including another person's details, health information or identifiers. Redact unnecessary information before uploading. Do not submit bank passwords, OTPs, card security codes, full payment-card details or unnecessary identity documents. We do not need your banking credentials to maintain financial records.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              The current web application does not intentionally read your contacts, SMS inbox or call logs, track GPS location, or record background microphone audio. Technical services can still receive an IP address; that is not a promise that network-derived location information never exists.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Phone sign-in sends your mobile number to Google/Firebase to send the verification SMS and authenticate you. Google also stores numbers supplied for authentication to improve spam and abuse prevention across its services. Review the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Google Privacy Policy <ExternalLink className="size-3 inline" />
              </a>{" "}
              before requesting an OTP. Control of your SIM or an unlocked signed-in device can allow access to your account; tell us promptly if your number is lost or reassigned.
            </p>
          </article>

          {/* Section 3 */}
          <article id="purposes-consent-required" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                3. Purposes, consent and required processing
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We process information to provide the functions you request: secure sign-in, Personal and Household recordkeeping, review and confirmation, server receipts, sync and restore, calculations, export, optional file/AI features, support and account controls. We also administer service limits, investigate abuse, maintain security and meet applicable legal requirements.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Where consent is required, it must cover the stated purpose before processing begins. Accepting the Terms is not permission for unrelated advertising, new uses of sensitive information or every optional feature. An operating-system permission is not a substitute for an appropriate explanation and consent.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You can decline to provide optional information. If you withhold or withdraw information necessary for a particular service, we may be unable to provide that service; we will not treat that as consent to another purpose. Withdrawal does not retrospectively undo lawful processing. Any continuing retention must have a specific lawful justification, not merely that the information might be useful.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              See the{" "}
              <a
                href="https://kubear.kuberos.in/consent"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Consent Notice <ExternalLink className="size-3 inline" />
              </a>{" "}
              for feature choices. We do not sell personal information or use your financial records for targeted advertising.
            </p>
          </article>

          {/* Section 4 */}
          <article id="personal-and-household" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                4. Personal and Household information
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Personal records are intended to remain separate from Household records. Joining a Household does not by itself authorise disclosure of your Personal records. Information deliberately placed in a shared space is accessible to members according to server-enforced membership, roles and the feature's permissions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Other members may see shared financial facts, participants and relevant activity, and may retain copies or exports they lawfully obtained. Removing access cannot retrieve a screenshot or export already held outside Kubear. A Household owner is not entitled to another member's private credentials or unrestricted Personal account access.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If you supply another person's information, have an appropriate basis to do so, explain the relevant use to them and share only what is necessary. Membership alone does not establish consent for all information about everyone in the household. A person whose information was supplied by someone else can contact us directly at{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>
              ; they do not need to create an account.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Shared ownership and legitimate records of other members need special handling when an account is deleted. They do not justify indefinite retention of all information about the departing member.
            </p>
          </article>

          {/* Section 5 */}
          <article id="ai-document-review-voice" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                5. AI, document review and voice
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              When you request an AI explanation, Kubear sends the prompt and relevant server-authorised account or Household context to a Google Gemini service. Document extraction can send the selected file's content to the provider. Context may contain sensitive financial information. AI outputs and chat records may be saved with your account; usage and security records may also be generated.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              AI can make mistakes. It is a read-only explanation or review aid, not authority to change records, execute transactions or make decisions about creditworthiness, insurance eligibility or legal rights. Review extracted facts before confirming a record.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear's release policy is to use an eligible paid <strong>Google Gemini API</strong> arrangement for AI processing of personal information. Under Google's paid-service terms, prompts and responses are not used to improve Google's products, but limited security/abuse processing, service metadata and legally required retention still apply. This is not a zero-retention or India-only processing promise. See the{" "}
              <a
                href="https://ai.google.dev/gemini-api/terms"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Gemini API terms <ExternalLink className="size-3 inline" />
              </a>{" "}
              and linked data-processing terms. This restriction concerns the service configuration, not whether you pay for a Kubear account.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Optional web-grounded requests can involve <strong>Grounding with Google Search</strong>. Google's terms provide for retention of grounding prompts, supplied context and output for <strong>30 days</strong> for that feature, including debugging and testing. Avoid entering private details into a search query. An AI consent does not automatically authorise separate web search.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              The current browser voice feature uses browser/operating-system speech recognition and puts a transcript into an editable draft before you send it. Kubear's current web flow does not store the original microphone recording. Your browser or speech supplier may process audio on its own systems under its terms; this is not a guarantee about that supplier's audio retention.
            </p>
          </article>

          {/* Section 6 */}
          <article id="providers-locations" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                6. Providers, recipients and processing locations
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We use providers for infrastructure and features, including:
            </p>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#41534D] list-disc pl-5">
              <li>
                <strong>Google/Firebase and Google Cloud:</strong> phone authentication, anti-abuse/integrity services, hosting and server execution, databases, file storage and, when enabled, notifications.
              </li>
              <li>
                <strong>Google Gemini and associated search services:</strong> the optional processing described above.
              </li>
              <li>
                <strong>Sentry, where enabled in the deployed configuration:</strong> error and reliability diagnostics. The source includes filtering to reduce sensitive content; it cannot guarantee that every error is anonymous. This processing is not controlled by the product-analytics switch.
              </li>
              <li>
                <strong>Google Workspace business email and support handling:</strong> correspondence, support attachments, privacy requests and their resolution.
              </li>
              <li>
                <strong>Authorised Household participants:</strong> information shared within their permissions.
              </li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Access by staff or contractors must be limited to authorised support, security and operating needs. Providers are not all interchangeable: their processing roles and terms must be assessed for the particular service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Information may be processed outside India by suppliers or their support infrastructure. A database configured in an Indian region does not mean that authentication, AI, diagnostics, email, backups and support all remain in India. Transfers of sensitive information must meet applicable safeguards and consent or necessity requirements; this policy does not waive them.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We may disclose necessary information when required by law or a valid legal process, to address security or fraud, or to establish or defend legal claims, subject to applicable restrictions. Any business transfer involving personal information remains subject to privacy obligations and appropriate notice; it is not an unrestricted licence to sell records.
            </p>
          </article>

          {/* Section 7 */}
          <article id="retention" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                7. Retention
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We retain information for its stated purpose and applicable legal requirements, then delete it or genuinely anonymise it. Removing a name while retaining a linkable user ID is not necessarily anonymisation.
            </p>

            {/* Retention Table */}
            <div className="overflow-x-auto rounded-xl border border-[#123630]/12 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF7F0] border-b border-[#123630]/12 text-[#123630]">
                    <th className="p-3.5 sm:p-4 font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs w-[35%]">
                      Record category
                    </th>
                    <th className="p-3.5 sm:p-4 font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs w-[65%]">
                      Lifecycle and retention rule
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#123630]/8 text-[#41534D]">
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Account and reviewed financial records
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Held to provide the account and its requested history; covered by verified deletion, subject to narrow documented exceptions
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Temporary parsing uploads
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Immediate cleanup is attempted after processing succeeds or fails. A scheduled cleanup is configured for abandoned eligible uploads; it is not a guarantee of instant erasure or a provider-copy deletion promise
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Saved Protect documents
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Deliberately retained separately from temporary parsing, using the retention date associated with the saved document; earlier supported deletion and lawful restrictions may also apply
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Support attachments and messages
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Remain with the case rather than the temporary-upload sweep. Our retention policy is to remove unnecessary attachments when their purpose ends and close-case correspondence within 12 months of closure, unless a specific legal, security or dispute need requires longer retention
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Reviewed facts extracted from files
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Remain financial records after the original processing upload is removed; delete or correct them through the relevant record/account controls
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      AI chats, prompts and responses
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Account-held content follows account/content deletion; provider-held copies follow the confirmed provider terms
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Consent, deletion, security and dispute records
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Retain only the minimum information needed for a defined compliance, security or evidential purpose, with restricted access
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-medium text-[#123630] align-top">
                      Backups and provider copies
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed align-top">
                      Erasure may follow verified backup rotation or provider deletion processes; deleted information must not silently re-enter normal use on restore
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Our normal account-deletion target is <strong>30 calendar days after proportionate ownership verification</strong>. This is an operating target, not a guarantee of instantaneous deletion or expiry of every supplier backup. If completion is delayed, we will explain the reason, outstanding steps and expected next update. A legal deadline takes priority and is not automatically extended by verification.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Backup copies expire through the relevant system's configured rotation or provider-deletion process after removal from active systems. Where a copy cannot immediately be erased, it must remain restricted to recovery, security or a specific lawful obligation and be removed when that purpose and applicable cycle end. We will identify the applicable expiry criteria or expected period when responding to a deletion request. Routine restores must reapply deletion restrictions before the information returns to normal use.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Operational/security logs are limited to their necessary security and legal purposes. Applicable CERT-In ICT-log requirements and any later applicable DPDP retention requirements are assessed separately from financial-record retention. A documented legal hold lasts only while its reason remains valid; we review outstanding holds and deletion exceptions at least every 90 days.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Retention of legally required security logs does not justify keeping every financial record for the same period. Where an exception affects your request, we will explain the category, reason and expected retention or review period, unless the law prevents disclosure.
            </p>
          </article>

          {/* Section 8 */}
          <article id="your-controls-requests" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">08</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                8. Your controls and requests
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You may use available account controls or email{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>{" "}
              to request information about processing, access or export, correction, deletion or withdrawal of consent. Not every right has identical scope or timing under every law. Statutory rights apply as their provisions come into force; service controls can also be offered voluntarily.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We will seek proportionate verification before disclosing or changing private information. Do not email an OTP, password or unredacted identity document. We will explain any necessary additional verification, relevant limits and reasons for refusing or restricting a request.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              See{" "}
              <a
                href="https://kubear.kuberos.in/data-deletion"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                Account and Data Deletion <ExternalLink className="size-3 inline" />
              </a>
              . Signing out, uninstalling or clearing browser storage is not an account-deletion request. Clearing storage can also remove unsynced entries.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              An authorised representative can contact us with evidence of authority. Recording a nominee on a policy or in a continuity checklist does not automatically grant access to a Kubear account or create a statutory privacy nomination.
            </p>
          </article>

          {/* Section 9 */}
          <article id="adults-and-children" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">09</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                9. Adults and information about children
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Accounts are for people aged 18 or older who can enter into a binding contract. Children must not create accounts. Adult-only registration does not mean every uploaded document is child-free.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Avoid unnecessary child identifiers, photographs, health details or other sensitive information in household and policy records. If information about a child is needed, appropriate authority and safeguards remain necessary; an adult's checkbox is not proof that all requirements have been met. Contact{" "}
              <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                privacy@kuberos.in
              </a>{" "}
              about a child account or inappropriate child-data collection so that we can investigate and restrict or remove it as appropriate.
            </p>
          </article>

          {/* Section 10 */}
          <article id="security-and-incidents" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">10</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                10. Security and incidents
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear uses measures designed to protect information, including authenticated server access, access restrictions, integrity checks, encrypted local persistence and secure network communication. These do not make the service end-to-end encrypted: authorised server processing and selected suppliers can process readable information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              No system is perfectly secure. Protect your device, mobile number and signed-in sessions, and report suspected unauthorised access to{" "}
              <a href="mailto:support@kuberos.in?subject=Kubear%20security%20report" className="text-[#C96632] hover:underline font-semibold">
                support@kuberos.in
              </a>
              , subject “Kubear security report”. Do not include exploit data containing another person's private information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We will assess incidents and make notifications required by applicable law. A security report is not a guarantee of continuous emergency support, immunity for unauthorised testing or a bounty.
            </p>
          </article>

          {/* Section 11 */}
          <article id="grievances-and-changes" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">11</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                11. Grievances and changes
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Address privacy grievances to <strong>Sidharth Bothra</strong>,{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>
              , telephone{" "}
              <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                +91 7875664515
              </a>
              , at the registered office above. Grievances covered by the applicable 2011 sensitive-personal-data rules will be addressed expeditiously and within <strong>one month of receipt</strong>. A shorter binding deadline takes priority. Verification or an internal queue does not automatically extend a statutory deadline.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Our{" "}
              <a
                href="https://kubear.kuberos.in/support"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                Support and Grievances page <ExternalLink className="size-3 inline" />
              </a>{" "}
              explains submissions and escalation. Nothing here prevents use of a competent authority, court or other legally available remedy.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We will identify revised policies by version and effective date, explain material changes and obtain new consent where required before using information for a new purpose. A later website edit does not retrospectively change what a user previously accepted.
            </p>

            {/* Official Contact Summary Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F0] border border-[#123630]/12 space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="size-4 text-[#C96632]" />
                <h3 className="font-serif text-lg font-normal text-[#123630]">Entity & Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#41534D]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E817B] block">Operating Entity</span>
                  <span className="text-[#123630] font-semibold block">
                    KUBEROS INNOVATIONS PRIVATE LIMITED
                  </span>
                  <span className="text-xs text-[#6E817B] block font-mono mt-0.5">
                    CIN: U62099GJ2026PTC177330
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E817B] block">Registered Office</span>
                  <span className="text-[#123630]">
                    A-1001 Shyam Palce, Near Shrungar Residency, Athwalines, Surat City, Surat-395001, Gujarat, India
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E817B] block">Grievance Officer</span>
                  <span className="font-semibold text-[#123630]">Sidharth Bothra</span>
                  <div className="mt-1 space-x-2">
                    <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                      grievance@kuberos.in
                    </a>
                    <span className="text-[#6E817B]">·</span>
                    <a href="tel:+917875664515" className="text-[#123630] hover:underline font-semibold">
                      +91 7875664515
                    </a>
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E817B] block">Direct Emails</span>
                  <div className="space-y-1 mt-0.5">
                    <div>
                      <span className="text-[#6E817B]">Privacy:</span>{" "}
                      <a href="mailto:privacy@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                        privacy@kuberos.in
                      </a>
                    </div>
                    <div>
                      <span className="text-[#6E817B]">Support:</span>{" "}
                      <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                        support@kuberos.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Quick Legal Navigation Links */}
          <div className="pt-6 border-t border-[#123630]/10 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap gap-4 text-[#556963]">
              <a href="https://kubear.kuberos.in/consent" target="_blank" rel="noreferrer" className="hover:text-[#123630] underline flex items-center gap-1">
                Consent Notice <ArrowUpRight className="size-3" />
              </a>
              <a href="https://kubear.kuberos.in/data-deletion" target="_blank" rel="noreferrer" className="hover:text-[#123630] underline flex items-center gap-1">
                Account and Data Deletion <ArrowUpRight className="size-3" />
              </a>
              <a href="https://kubear.kuberos.in/support" target="_blank" rel="noreferrer" className="hover:text-[#123630] underline flex items-center gap-1">
                Support and Grievances <ArrowUpRight className="size-3" />
              </a>
              <a href="https://kubear.kuberos.in/privacy" className="hover:text-[#123630] underline">
                https://kubear.kuberos.in/privacy
              </a>
            </div>
            <p className="text-[11px] text-[#6E817B]">© {new Date().getFullYear()} KUBEROS INNOVATIONS PRIVATE LIMITED</p>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}


