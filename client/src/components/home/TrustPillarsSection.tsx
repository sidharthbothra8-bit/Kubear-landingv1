import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldBan, DownloadCloud, ShieldCheck, Check, KeyRound } from "lucide-react";

export function TrustPillarsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pillars = [
    {
      icon: Cpu,
      title: "Local-First Parsing",
      tag: "Client-side",
      description: "Bank PDFs are decoded inside your browser sandbox. Your transactions and account numbers are never sent to third-party ad networks or brokers.",
      proof: "Zero telemetry on transaction line-items",
    },
    {
      icon: ShieldBan,
      title: "Zero Lead Selling",
      tag: "Strict Anti-Spam",
      description: "We do not sell 'pre-approved loans' or referral leads to credit card aggregators. We never generate unsolicited WhatsApp messages or telemarketing calls.",
      proof: "No NBFC kickbacks, ever",
    },
    {
      icon: DownloadCloud,
      title: "Instant Export & Wipe",
      tag: "Full Sovereignty",
      description: "Your financial history belongs to you. Export cleanly formatted CSVs/JSONs in one click or permanently purge your account at any moment.",
      proof: "Complete self-serve deletion",
    },
  ];

  return (
    <section className="relative py-18 sm:py-26 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Privacy as Architecture
            </span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]"
          >
            Your financial life is personal.<br />
            <span className="text-[#059669] italic font-serif">We treat it that way.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              No ads disguised as financial advice. No selling your phone number to telemarketers. No loan commission kickbacks.
            </p>
          </motion.div>
        </div>

        {/* Three Trust Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-8 shadow-[0_8px_30px_rgba(18,54,48,0.05)] hover:border-[#059669]/60 hover:shadow-[0_16px_40px_rgba(18,54,48,0.1)] transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="size-11 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA] flex items-center justify-center text-[#123630] shadow-xs">
                      <Icon className="size-5 text-[#059669]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#065F46] bg-[#E6F4EA] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#123630] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#516761] leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF7F0] flex items-center gap-2 text-xs font-semibold text-[#065F46]">
                  <Check className="size-3.5 text-[#059669] shrink-0" />
                  <span>{pillar.proof}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Annotation (handwritten): You're the customer. Not the product. */}
        <div className="mt-10 sm:mt-12 text-center select-none">
          <span className="kh-handwritten text-[#EA580C] text-xl sm:text-2xl font-bold -rotate-1 inline-block">
            You're the customer. Not the product.
          </span>
        </div>

      </div>
    </section>
  );
}
