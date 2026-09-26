import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { APP_URL, PLAY_URL } from "@/const";

function GooglePlayIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186A2.37 2.37 0 0 1 3 20.5V3.5c0-.66.224-1.267.609-1.686z"
        fill="#00D3FF"
      />
      <path
        d="M17.158 8.634L13.792 12l3.366 3.366 3.774-2.144a1.442 1.442 0 0 0 0-2.444l-3.774-2.144z"
        fill="#FFCE00"
      />
      <path
        d="M3.609 1.814L13.792 12l3.366-3.366L6.082.906A2.235 2.235 0 0 0 3.61 1.814z"
        fill="#00F076"
      />
      <path
        d="M13.792 12L3.61 22.186c.744.82 1.942.923 2.472.623l11.076-6.289L13.792 12z"
        fill="#FF3A44"
      />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden text-center" id="get-started">
      {/* Warm golden ambient glow */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#FEF3C7]/50 via-[#FFEDD5]/60 to-[#ECFDF5]/40 blur-3xl pointer-events-none rounded-full" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Handwritten Tag */}
        <div className="mb-3 select-none">
          <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
            Start with one statement
          </span>
        </div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#123630] font-bold tracking-tight leading-[1.08]"
        >
          See where you stand. <span className="text-[#059669] italic font-serif">In 5 minutes.</span>
        </motion.h2>
        
        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base sm:text-xl text-[#516761] max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Drop one PDF. See your true safe-to-spend number. Experience the psychological relief of knowing, not guessing.
        </motion.p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[52px] sm:min-h-[56px] px-8 sm:px-10 py-3.5 rounded-full bg-[#123630] hover:bg-[#0A241E] text-white font-bold text-sm sm:text-base cursor-pointer gap-2 shadow-[0_10px_25px_rgba(18,54,48,0.2)] hover:shadow-[0_14px_35px_rgba(18,54,48,0.3)] transition-all group"
          >
            <span>Start on Web</span>
            <ArrowRight className="size-4.5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[52px] sm:min-h-[56px] px-7 sm:px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#EADBCA] hover:border-[#123630] text-[#123630] font-bold text-sm sm:text-base cursor-pointer gap-2.5 shadow-xs hover:shadow-md transition-all"
          >
            <GooglePlayIcon className="size-5 shrink-0" />
            <span>Get on Android</span>
          </motion.a>
        </div>

        {/* Bottom microcopy: Free early access + Security reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#516761]">
          <div className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-[#059669]" />
            <span>Free while in early access</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-[#059669]" />
            <span>No credit card required</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#059669]" />
            <span>Client-side decryption</span>
          </div>
        </div>

      </div>

      {/* Subtle organic horizon footer trim */}
      <div className="mt-14 w-full max-w-6xl mx-auto px-4 opacity-35">
        <svg className="w-full h-14 sm:h-18 text-[#D8C7B0]" viewBox="0 0 900 80" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,80 L0,55 Q50,40 100,50 T200,35 T300,55 T400,30 T500,45 T600,30 T700,50 T800,35 L900,50 L900,80 Z" />
        </svg>
      </div>

    </section>
  );
}
