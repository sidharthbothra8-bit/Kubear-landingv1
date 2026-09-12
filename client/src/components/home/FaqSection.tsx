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
      "Kubear is currently free during early access. We will clearly communicate any future pricing or optional plans well in advance before introducing them.",
  },
];

export function FaqSection() {
  return (
    <section id="faqs" className="py-16 sm:py-20 border-t border-[#E5EBE6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-8 sm:pb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#142823] tracking-tight">
            A few things you might be wondering.
          </h2>
          <p className="text-sm sm:text-base text-[#7D8D86]">
            Quick answers to common questions.
          </p>
        </div>

        {/* Accessible Keyboard-Operable Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full border-t border-[#E5EBE6]"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-[#E5EBE6] transition-colors hover:border-[#F5DACB]"
            >
              <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-[#142823] hover:no-underline hover:text-[#C96632] py-5 sm:py-6 transition-colors group">
                <span className="pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-[#53625C] leading-relaxed pb-6 pr-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
