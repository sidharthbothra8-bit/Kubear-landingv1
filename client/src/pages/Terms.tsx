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
import { Link } from "wouter";

export default function Terms() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://kubear.kuberos.in/terms");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SiteLayout>
      <PageMeta
        title="Kubear Terms of Use"
        description="Official Kubear Terms of Use. Version 2026-09-08. Effective date 8 September 2026. Public URL: https://kubear.kuberos.in/terms."
        path="/terms"
      />

      {/* Header / Intro */}
      <section className="border-b border-[#123630]/10 bg-[#FAF7F0] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C96632] mb-3">
            <Scale className="size-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123630] font-normal tracking-tight">
            Kubear Terms of Use
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
                  href="https://kubear.kuberos.in/terms"
                  className="text-sm font-semibold text-[#C96632] hover:underline mt-0.5 block truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  kubear.kuberos.in/terms
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 p-2 rounded-lg text-[#123630]/70 hover:text-[#123630] hover:bg-[#123630]/5 transition-colors"
                title="Copy Public URL"
                aria-label="Copy public terms URL"
              >
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <main className="px-4 py-12 sm:px-6 lg:px-8 bg-[#FCFBF7]">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#123630]/10">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6E817B] mb-3">Sections</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#operator-and-agreement" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">1.</span> Operator and agreement
              </a>
              <a href="#eligibility-security" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">2.</span> Eligibility and account security
              </a>
              <a href="#what-kubear-provides" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">3.</span> What Kubear provides
              </a>
              <a href="#not-adviser" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">4.</span> Not a financial or professional adviser
              </a>
              <a href="#review-confirmation" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">5.</span> Review, confirmation and corrections
              </a>
              <a href="#household-information" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">6.</span> Household and other people's information
              </a>
              <a href="#documents-ai-third-party" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">7.</span> Documents, AI and third-party services
              </a>
              <a href="#fees-rewards" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">8.</span> Fees, access levels and non-cash rewards
              </a>
              <a href="#acceptable-use" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">9.</span> Acceptable use
              </a>
              <a href="#intellectual-property" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">10.</span> Kuberos intellectual property
              </a>
              <a href="#availability-changes" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">11.</span> Availability, changes and suspension
              </a>
              <a href="#responsibility-limitations" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">12.</span> Responsibility and limitations
              </a>
              <a href="#closure-data-rights" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">13.</span> Closure and data rights
              </a>
              <a href="#complaints-governing-law" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5">
                <span className="text-[#C96632] font-mono font-semibold">14.</span> Complaints, governing law and disputes
              </a>
              <a href="#changes-general" className="text-[#123630] hover:text-[#C96632] hover:underline flex items-center gap-1.5 py-0.5 sm:col-span-2">
                <span className="text-[#C96632] font-mono font-semibold">15.</span> Changes and general provisions
              </a>
            </div>
          </nav>

          {/* Section 1 */}
          <article id="operator-and-agreement" className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                1. Operator and agreement
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              These Terms govern your use of Kubear, operated by <strong>KUBEROS INNOVATIONS PRIVATE LIMITED</strong>, CIN <strong>U62099GJ2026PTC177330</strong>, an Indian company (“Kuberos”, “we”, “us” or “our”).
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
                <strong>Enquiries:</strong>{" "}
                <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                  support@kuberos.in
                </a>
              </p>
              <p>
                <strong>Contact person:</strong> Sidharth Bothra
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You should be able to read and retain these Terms before agreeing to them. An affirmative acceptance applies to the version presented to you. Simply visiting a public page is not consent to process sensitive financial information or to enable every optional feature.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              The{" "}
              <Link href="/privacy" className="text-[#C96632] hover:underline font-medium">
                Privacy Policy
              </Link>
              ,{" "}
              <a
                href="https://kubear.kuberos.in/consent"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Consent Notice <ExternalLink className="size-3 inline" />
              </a>
              ,{" "}
              <a
                href="https://kubear.kuberos.in/data-deletion"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Deletion page <ExternalLink className="size-3 inline" />
              </a>
              ,{" "}
              <a
                href="https://kubear.kuberos.in/support"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Support page <ExternalLink className="size-3 inline" />
              </a>{" "}
              and{" "}
              <a
                href="https://kubear.kuberos.in/cookies"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Cookie Notice <ExternalLink className="size-3 inline" />
              </a>{" "}
              explain related matters. Privacy consent is purpose-specific, not an unrestricted consequence of accepting these Terms.
            </p>
          </article>

          {/* Section 2 */}
          <article id="eligibility-security" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                2. Eligibility and account security
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear is offered for use in India by people aged <strong>18 or older</strong> with capacity to enter into a binding contract. Use accurate account information and a mobile number you are authorised to use. Do not impersonate another person, bypass access controls or let another person use your credentials to act as you.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Keep control of your phone, SIM, device and signed-in sessions. Tell support promptly about unauthorised access, a lost device or a reassigned number. We may require reasonable verification to protect an account. Staff will not ask you to send an OTP, bank password or payment-card security code by email.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You are responsible for your authorised actions and for taking reasonable care, but these Terms do not make you automatically liable for every action carried out through a compromised account or for a failure attributable to Kuberos.
            </p>
          </article>

          {/* Section 3 */}
          <article id="what-kubear-provides" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                3. What Kubear provides
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear helps you record and organise personal and authorised Household financial facts, review information from selected documents, track recorded commitments and goals, view calculations and trends, and obtain optional explanations.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Records can include income, expenses, accounts, balances, investments, debts, insurance-policy facts, tax-organiser information, split records and selected documents. Availability depends on the released feature and the information provided. A missing, stale or incomplete input can make a calculation unavailable.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A recorded balance or a server save receipt is not independent verification by a bank, insurer, broker or government authority. A plan, reminder or commitment does not prove payment. A holding value is a dated recorded value, not necessarily a live market price. Marking a debt or split as settled records an assertion; it does not move money externally.
            </p>
          </article>

          {/* Section 4 */}
          <article id="not-adviser" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                4. Not a financial or professional adviser
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear provides visibility, calculations and general education, not personalised investment, insurance, tax, legal, credit or debt advice. It does not recommend or rank products, assess suitability, prescribe allocations, choose a repayment strategy, or tell you what to buy, sell, insure or file.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kubear is not providing banking, brokerage, payment execution, lending, insurance distribution or tax filing through these recordkeeping features. It does not hold your financial assets merely because they appear in a record.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              AI explanations, scenario calculations and general educational material are not professional opinions or guarantees. Check source facts, dates, assumptions and calculations. Obtain advice from an appropriately qualified professional where your decision needs it. This description does not remove Kuberos's responsibility for its own service or allow misleading claims about its accuracy.
            </p>
          </article>

          {/* Section 5 */}
          <article id="review-confirmation" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">05</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                5. Review, confirmation and corrections
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Check amounts, dates, account/Household context and source information before confirming a proposed record or correction. An extraction or AI suggestion remains review material until accepted through the normal save process.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A pending or offline action is not an authoritative completed save. A server receipt confirms acceptance of the specified record, not external movement of money or a legal determination of ownership. Corrections may use replacement, reversal or an audit trail to keep the history understandable.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Maintain independent copies of important source documents. Kubear's organiser is not a substitute for bank statements, executed contracts, official tax records or original policy documents.
            </p>
          </article>

          {/* Section 6 */}
          <article id="household-information" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">06</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                6. Household and other people's information
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Only use a shared space within your permissions. Do not upload another person's information without an appropriate basis or share their private records merely because they are a family member.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Household membership does not itself transfer ownership of money, establish a power of attorney, create a joint bank account or entitle a member to private account credentials. An administrator's role is limited to the controls made available and the server's permissions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Personal records remain separate unless deliberately shared. Members may retain lawful exports or copies of shared information. Leaving a Household does not erase every other member's legitimate records. Account deletion may require ownership-transfer decisions or support review to avoid deleting another person's records; see the Deletion page.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A nominee or continuity entry is organisational information only. It is not a will, probate decision, insurance nomination accepted by an insurer, statutory privacy nomination or automatic authority to access an account.
            </p>
          </article>

          {/* Section 7 */}
          <article id="documents-ai-third-party" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">07</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                7. Documents, AI and third-party services
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You retain your rights in material you submit. You give Kuberos a limited, non-exclusive permission to store, copy, transmit, process and display that material only as needed to provide requested features, operate authorised sharing, protect the service and comply with law, consistently with the Privacy Policy. This is not ownership of your financial information or unrestricted permission to reuse it for model training or advertising.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Temporary file parsing differs from deliberately saved Protect documents and support attachments. Removing a parsing upload does not remove reviewed facts already saved as records. The Privacy Policy explains retention and providers.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              AI can produce incorrect, incomplete or misleading text. Do not use Kubear's AI output to make eligibility decisions about another person or as proof that a financial fact has been independently checked. Optional external search and external links may have separate terms and privacy practices. A link is not endorsement, and an external source must not be represented as live or authoritative without its date and attribution.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You must have the rights necessary for material you upload. Do not upload unnecessary identity documents, credentials or highly sensitive information unrelated to the feature.
            </p>
          </article>

          {/* Section 8 */}
          <article id="fees-rewards" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">08</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                8. Fees, access levels and non-cash rewards
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Creating an account or accepting these Terms does <strong>not</strong> authorise a payment. A price, taxes, billing frequency, included service, renewal, cancellation and refund terms must be clearly shown before a paid purchase is agreed to. No paid subscription or automatic renewal is created by a plan label, trial or these Terms alone.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Any free promotional access is subject to the eligibility, duration and scope actually shown for that offer. Expiry of free access does not itself authorise charging you.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Where Kubear displays Khazana coins, streaks or similar in-app recognition, these are service features, not money, deposits, securities, cryptoassets or a promised return. They cannot be bought, transferred or redeemed for cash under these Terms. Do not treat a displayed counter as a bank balance or guaranteed entitlement to a future offer. Any genuine future promotion needs clear separate terms before participation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              These Terms do not impose a blanket “no refunds” rule or remove remedies required by law. If paid services are introduced, the checkout-specific terms must be reviewed and made available before launch.
            </p>
          </article>

          {/* Section 9 */}
          <article id="acceptable-use" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">09</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                9. Acceptable use
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Do not:
            </p>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#41534D] list-disc pl-5">
              <li>
                access another person's account or records without authority, bypass Household permissions, or misuse invitations;
              </li>
              <li>
                submit unlawful, infringing, deceptive or malicious material;
              </li>
              <li>
                attempt to obtain secrets or private records through prompt injection, manipulated attachments or abusive requests;
              </li>
              <li>
                introduce malware, disrupt the service, evade protective limits, or scrape private data;
              </li>
              <li>
                misrepresent Kubear output as licensed advice, an official statement or verified external financial data;
              </li>
              <li>
                use service access, exports or other people's information for unlawful profiling, harassment or commercial resale.
              </li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              This clause does not prohibit rights given by law or authorised security testing. Security reports go to{" "}
              <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                support@kuberos.in
              </a>{" "}
              with subject “Kubear security report”; reporting does not itself authorise intrusive testing or create a bounty agreement.
            </p>
          </article>

          {/* Section 10 */}
          <article id="intellectual-property" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">10</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                10. Kuberos intellectual property
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Kuberos and its licensors retain rights in Kubear's software, branding and original service content, subject to third-party and open-source licences. You receive a limited permission to use the service for its intended purposes while entitled to access it.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Your own records remain yours. You may export and use your information through available controls. You do not need to transfer ownership of your records or grant an unrestricted publicity licence to use Kubear.
            </p>
          </article>

          {/* Section 11 */}
          <article id="availability-changes" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">11</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                11. Availability, changes and suspension
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We aim to operate a dependable service, but maintenance, connectivity problems, supplier failures or security incidents may interrupt access. We do not guarantee uninterrupted availability, perfect AI output or that every feature suits every purpose.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We may restrict access where reasonably necessary to address a credible security threat, material misuse, legal requirement or other substantial breach. Where lawful and practical, we will explain the reason, allow correction or review and provide an appropriate route for export or account requests. Restrictions should be proportionate; a minor issue does not automatically justify indefinite account loss.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              For a material withdrawal of the service, we will provide reasonable advance notice and an opportunity to export where reasonably possible. Urgent legal or security action may require immediate measures. You may stop using Kubear and request deletion.
            </p>
          </article>

          {/* Section 12 */}
          <article id="responsibility-limitations" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">12</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                12. Responsibility and limitations
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              You are responsible for the accuracy of information you choose to submit and your independent financial decisions. Kuberos remains responsible for obligations that apply to its service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              To the extent permitted by applicable law, Kuberos is not liable for losses that are too remote or not reasonably foreseeable, or losses caused solely by events outside its reasonable control. This does not exclude responsibility for failing to take reasonable protective or mitigating steps.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including applicable consumer remedies, liability for fraud or wilful misconduct, or binding privacy/security obligations. There is no blanket waiver of data-loss claims, mandatory consumer remedies or claims arising from Kuberos's own wrongful conduct. These Terms do not require an unlimited consumer indemnity.
            </p>
          </article>

          {/* Section 13 */}
          <article id="closure-data-rights" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">13</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                13. Closure and data rights
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Follow the{" "}
              <a
                href="https://kubear.kuberos.in/data-deletion"
                target="_blank"
                rel="noreferrer"
                className="text-[#C96632] hover:underline font-medium inline-flex items-center gap-0.5"
              >
                Account and Data Deletion page <ExternalLink className="size-3 inline" />
              </a>{" "}
              to request closure. Signing out, uninstalling or clearing a browser is not server-side deletion. Export needed records first; confirmed deletion is not promised to be reversible.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              A request receipt means the request was received, not that every system has completed erasure. Limited lawful retention and shared-record handling are explained in the Privacy Policy and Deletion page. Account closure does not erase legitimate rights or obligations already accrued.
            </p>
          </article>

          {/* Section 14 */}
          <article id="complaints-governing-law" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">14</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                14. Complaints, governing law and disputes
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Indian law governs these Terms, subject to mandatory protections applicable to you. Contact{" "}
              <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                support@kuberos.in
              </a>{" "}
              for service issues and <strong>Sidharth Bothra</strong> at{" "}
              <a href="mailto:grievance@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                grievance@kuberos.in
              </a>{" "}
              for a formal grievance.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We encourage an attempt to resolve concerns directly, but this is not a compulsory waiting period or a waiver of urgent relief, statutory complaint rights or limitation periods. You may use courts, consumer commissions or authorities having jurisdiction under applicable law. These Terms do not impose mandatory private arbitration or exclusive Surat jurisdiction that would remove a legally available forum.
            </p>
          </article>

          {/* Section 15 */}
          <article id="changes-general" className="space-y-4 pt-6 border-t border-[#123630]/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#C96632]">15</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#123630] font-normal">
                15. Changes and general provisions
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              We will identify the applicable version and effective date and provide appropriate notice of material changes. Where fresh acceptance or consent is required, it must be obtained; a later edit does not rewrite an earlier receipt.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              If part of these Terms is unenforceable, the remaining provisions apply to the extent they can operate lawfully. Failure to enforce a term immediately is not a permanent waiver. Neither these Terms nor an account creates a partnership, employment, agency or fiduciary-adviser relationship.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#41534D]">
              Legal notices may be emailed to{" "}
              <a href="mailto:support@kuberos.in" className="text-[#C96632] hover:underline font-semibold">
                support@kuberos.in
              </a>{" "}
              with subject “Kubear legal notice”, addressed to KUBEROS INNOVATIONS PRIVATE LIMITED, or sent to its registered office. Statutory service requirements still apply. General phone support does not replace any legally required formal notice.
            </p>
          </article>

          {/* Contact and Escalation Card */}
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

            <p className="text-xs sm:text-sm text-[#41534D] leading-relaxed">
              For assistance regarding these Terms or account inquiries, contact support at{" "}
              <a href="mailto:support@kuberos.in" className="font-semibold text-[#C96632] hover:underline">
                support@kuberos.in
              </a>
              . For formal grievances, contact Sidharth Bothra at{" "}
              <a href="mailto:grievance@kuberos.in" className="font-semibold text-[#C96632] hover:underline">
                grievance@kuberos.in
              </a>
              .
            </p>
          </div>

        </div>
      </main>
    </SiteLayout>
  );
}
