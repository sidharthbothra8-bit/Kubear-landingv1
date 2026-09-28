import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, CheckCircle2, Lock, ArrowDown, Sparkles, ShieldCheck, UploadCloud, RefreshCw } from "lucide-react";
import { playTick, playZen } from "@/lib/soundFx";

export function ProductShowcaseSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [simulationState, setSimulationState] = useState<"idle" | "parsing" | "done">("idle");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const bankPills = [
    "HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Zerodha Coin", "Groww", "CRED", "Kotak", "+42 more"
  ];

  // Document ingestion animation transforms linked to scroll
  const docY = useTransform(scrollYProgress, [0.05, 0.4], [-30, 0]);
  const docScale = useTransform(scrollYProgress, [0.05, 0.4], [0.94, 1]);
  const docOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0.35, 1]);

  // Extraction output stagger triggers based on scroll progress
  const extractionOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const extractionY = useTransform(scrollYProgress, [0.35, 0.65], [16, 0]);

  const handleSimulate = () => {
    if (simulationState === "parsing") return;
    setSimulationState("parsing");
    playTick(1.2);

    setTimeout(() => {
      setSimulationState("done");
      playZen();
    }, 1800);
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-[#FAF7F0] border-t border-[#EADBCA]/60 overflow-hidden" 
      id="statements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-left">
          <div className="mb-2 select-none">
            <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 inline-block">
              Zero Manual Entry
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#123630] tracking-tight leading-[1.08]">
            Bring your statements.<br />
            <span className="text-[#059669] italic font-serif">We'll do the rest.</span>
          </h2>

          <div className="mt-4">
            <p className="text-base sm:text-lg text-[#516761] leading-relaxed max-w-2xl font-medium">
              No fragile bank passwords to surrender. No broken aggregators. As you scroll, observe our client-side engine ingest a standard password-locked PDF, strip out metadata, and parse obligations instantaneously.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#516761]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EADBCA] shadow-2xs">
                <span className="text-[11px] uppercase tracking-wider">Scroll-linked parser</span>
                <ArrowDown className="size-3 text-[#059669] animate-bounce" />
              </div>
              <span className="text-[11px]">Or test real-time parsing with the simulator below</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCROLL-DRIVEN & INTERACTIVE STATEMENT INGESTION THEATRE                   */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-3xl border border-[#EADBCA] p-6 sm:p-10 shadow-[0_16px_45px_rgba(18,54,48,0.06)]">
            
            {/* Scroll-Driven Ingestion Stage */}
            <div className="relative border-2 border-dashed border-[#059669]/40 rounded-2xl p-6 sm:p-8 bg-[#FAF7F0]/60 text-center overflow-hidden">
              <div className="flex flex-col items-center justify-center space-y-4">
                
                {/* File Drop In Card */}
                <motion.div 
                  style={{ y: docY, scale: docScale, opacity: docOpacity }}
                  className="bg-white border border-[#EADBCA] rounded-2xl px-5 sm:px-6 py-4 shadow-md flex items-center gap-4 max-w-md w-full"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                    <FileText className="size-6" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-sm sm:text-base font-bold text-[#123630] truncate">
                      HDFC_Salary_Statement_Nov.pdf
                    </div>
                    <div className="text-xs text-[#516761] font-medium mt-0.5">
                      1.8 MB · Password Unlocked Client-Side
                    </div>
                  </div>

                  <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full border ${
                    simulationState === "parsing"
                      ? "text-amber-600 bg-amber-50 border-amber-200 animate-pulse"
                      : "text-[#059669] bg-[#E6F4EA] border-[#A7F3D0]"
                  }`}>
                    {simulationState === "parsing" ? "Decoding..." : "Parsed"}
                  </span>
                </motion.div>

                {/* Progress status bar when simulated */}
                {simulationState === "parsing" && (
                  <div className="w-full max-w-xs space-y-1.5">
                    <div className="w-full h-1.5 rounded-full bg-[#EADBCA] overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                        className="h-full bg-[#059669]"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#059669]">Client-side zero-telemetry parse in progress...</span>
                  </div>
                )}

                {/* Action Trigger Button */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={handleSimulate}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123630] hover:bg-[#0A241E] text-white text-xs font-bold cursor-pointer transition-all shadow-xs hover:shadow-md"
                  >
                    <RefreshCw className={`size-3.5 ${simulationState === "parsing" ? "animate-spin" : ""}`} />
                    <span>{simulationState === "done" ? "Test Another Statement" : "Simulate Statement Decode"}</span>
                  </button>
                </div>

                <div className="text-xs text-[#516761] font-semibold flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-[#059669]" />
                  <span>Parsed 100% on your device without sending raw statements to the cloud</span>
                </div>
              </div>
            </div>

            {/* Password Notice / Privacy Guarantee */}
            <div className="mt-6 p-4 rounded-2xl bg-[#E6F4EA]/60 border border-[#A7F3D0] flex items-start gap-3 text-left">
              <Lock className="size-4 text-[#065F46] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#065F46] font-medium leading-relaxed">
                <strong className="font-bold">Password-protected PDF?</strong> We unlock it client-side inside your browser sandbox. Your passwords and raw banking statements never touch external servers unencrypted.
              </div>
            </div>

            {/* Result: Breakdown Box revealing on scroll or simulation */}
            <motion.div 
              style={simulationState === "done" ? { opacity: 1, y: 0 } : { opacity: extractionOpacity, y: extractionY }}
              className="mt-6 pt-6 border-t border-[#EADBCA]/70"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#123630]">
                  Instant Extraction Output
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                  <CheckCircle2 className="size-3.5" />
                  Clean mathematical structure verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70 text-left hover:border-[#059669]/40 transition-colors">
                  <div className="text-xs text-[#516761] font-semibold">Ledger Parse</div>
                  <div className="text-sm sm:text-base font-bold text-[#123630] mt-1">
                    47 transactions mapped
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70 text-left hover:border-[#059669]/40 transition-colors">
                  <div className="text-xs text-[#516761] font-semibold">Radar Sync</div>
                  <div className="text-sm sm:text-base font-bold text-[#123630] mt-1">
                    3 fixed obligations locked
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#EADBCA]/70 text-left hover:border-[#059669]/40 transition-colors">
                  <div className="text-xs text-[#516761] font-semibold">Safety Quarantine</div>
                  <div className="text-sm sm:text-base font-bold text-[#059669] mt-1">
                    100% mathematical accuracy
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Format Pills */}
            <div className="mt-8 pt-6 border-t border-[#EADBCA]/70 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#516761] block mb-3.5">
                Supported Financial Institutions & Mutual Fund Registrars
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {bankPills.map((pill, idx) => (
                  <button 
                    key={idx}
                    onClick={() => playTick(1.0)}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#EADBCA] text-xs font-bold text-[#123630] hover:border-[#123630] hover:bg-white transition-colors cursor-pointer"
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
