import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What do I need to add?",
    answer:
      "Add what matters to you: your regular income, fixed commitments like rent and bills, and any ongoing savings or goals you want to track. You only add what you feel comfortable including, with no bank passwords or invasive SMS reading required.",
  },
  {
    id: "item-2",
    question: "Will my family see everything?",
    answer:
      "No. Kubear keeps your personal records private by default. You choose exactly which specific household commitments (like shared rent, groceries, or family goals) to share with your family or partner.",
  },
  {
    id: "item-3",
    question: "How much does it cost?",
    answer:
      "Kubear is currently free to use. We will clearly communicate any future pricing or optional plans well in advance before introducing them.",
  },
];

export function FaqSection() {
  return (
    <section id="faqs" className="py-16 sm:py-20 border-t border-[#E8EFEA] relative">
      <div data-reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-row items-baseline justify-between gap-4 pb-6 sm:pb-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.35rem)] rounded-full text-[clamp(0.65rem,0.8vw,0.75rem)] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5] mb-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              Clarity & Trust
            </span>
            <h2 className="text-[clamp(1.15rem,2.3vw,2.25rem)] font-bold text-[#0E241E] tracking-tight">
              A few things you might be wondering.
            </h2>
          </div>
          <p className="text-[clamp(0.72rem,1vw,1rem)] text-[#5B6E66] font-medium text-right shrink-0 max-w-[35%]">
            Quick answers to common questions.
          </p>
        </div>

        {/* Accessible Keyboard-Operable Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full border-t border-[#E8EFEA]"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-[#E8EFEA] transition-colors hover:border-[#FDBA74]"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-[#0E241E] hover:no-underline hover:text-[#EA580C] py-5 sm:py-6 transition-colors group">
                <span className="pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-[#42564F] leading-relaxed pb-6 pr-6 font-medium">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
