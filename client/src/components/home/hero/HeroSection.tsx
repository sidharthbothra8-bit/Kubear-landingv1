import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Home, Sprout, Palmtree, Users, CreditCard, ShoppingCart, Sparkles, CheckCircle2 } from "lucide-react";
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

interface NodePillProps {
  id: string;
  label: string;
  amount: string;
  category: string;
  icon: React.ElementType;
  className: string;
  floatDelay: number;
  activeNode: string | null;
  setActiveNode: (id: string | null) => void;
  staggerIndex: number;
}

function FloatingPill({
  id,
  label,
  amount,
  category,
  icon: Icon,
  className,
  floatDelay,
  activeNode,
  setActiveNode,
  staggerIndex,
}: NodePillProps) {
  const isActive = activeNode === id;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: isActive ? -4 : [-2.5, 2.5, -2.5]
      }}
      transition={{
        y: isActive 
          ? { duration: 0.25 }
          : {
              duration: 4.2 + (floatDelay % 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: floatDelay * 0.35,
            },
        opacity: { duration: 0.55, delay: 0.5 + staggerIndex * 0.08, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.55, delay: 0.5 + staggerIndex * 0.08, ease: [0.16, 1, 0.3, 1] }
      }}
      whileHover={{ scale: 1.06, y: -6 }}
      onClick={() => setActiveNode(isActive ? null : id)}
      onMouseEnter={() => setActiveNode(id)}
      onMouseLeave={() => setActiveNode(null)}
      className={`absolute z-30 cursor-pointer select-none transition-all duration-300 ${className}`}
    >
      <div 
        className={`bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-2.5 transition-all duration-300 ${
          isActive 
            ? "border-2 border-[#123630] shadow-[0_12px_30px_rgba(18,54,48,0.22)] ring-4 ring-[#059669]/15 scale-105" 
            : "border border-[#EADBCA] shadow-[0_4px_16px_rgba(18,54,48,0.06)] hover:border-[#123630]/60 hover:shadow-lg"
        }`}
      >
        <div className={`size-7 sm:size-8 rounded-xl flex items-center justify-center transition-colors duration-200 ${
          isActive ? "bg-[#123630] text-white" : "bg-[#FAF7F0] border border-[#EADBCA] text-[#123630]"
        }`}>
          <Icon className="size-3.5 sm:size-4" />
        </div>
        <div className="text-left">
          <span className="text-[10px] text-[#516761] font-semibold block leading-none mb-0.5">{label}</span>
          <span className="font-serif text-xs sm:text-sm font-bold text-[#123630] tabular-nums leading-tight block">{amount}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Scroll-triggered opacity shift for the background grid pattern to enhance perceived depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Shift grid pattern opacity from subtle 0.7 down to 0.15 and slight parallax displacement
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.75, 0.12]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const ambientGlowScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const nodeDescriptions: Record<string, { title: string; note: string; tag: string }> = {
    rent: {
      title: "Fixed Obligation (Auto-protected)",
      note: "Earmarked right on salary day so your bank balance doesn't trick you into overspending.",
      tag: "Shelter · Predictable"
    },
    family: {
      title: "Parents & Dependents",
      note: "Monthly support accounted for upfront before calculating your personal guilt-free budget.",
      tag: "Responsibility · Core"
    },
    card: {
      title: "Unbilled Credit Card Spend",
      note: "No surprise deductions on the 20th. Kept safe and deducted from your true available balance.",
      tag: "Liabilities · Safe"
    },
    sip: {
      title: "Future You (Compounding)",
      note: "Automated wealth accumulation prioritized before discretionary café and weekend trips.",
      tag: "Investments · Wealth"
    },
    goa: {
      title: "Quarterly Goa Trip Fund",
      note: "Living well today without dipping into your emergency buffer or using high-interest EMIs.",
      tag: "Joy · Guilt-Free"
    },
    everyday: {
      title: "Groceries & Swiggy/Zomato",
      note: "Smooth daily living spend that adapts as the month progresses with zero spreadsheet stress.",
      tag: "Lifestyle · Fluid"
    },
  };

  // Stagger animation container variants for Headline & Left Editorial
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  // Stagger variants for right-hand visual composition
  const visualContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.85,
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const visualItemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative pt-6 sm:pt-12 pb-14 sm:pb-22 overflow-hidden bg-[#FAF7F0]">
      {/* Scroll-responsive Background Grid Pattern for perceived depth */}
      <motion.div 
        style={{ opacity: gridOpacity, y: gridY }}
        className="absolute inset-0 pointer-events-none select-none z-0"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="hero-architectural-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#EADBCA" strokeWidth="0.85" strokeOpacity="0.45" />
              <circle cx="48" cy="0" r="1.25" fill="#123630" fillOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-architectural-grid)" />
        </svg>
      </motion.div>

      {/* Warm ambient radiance with scroll-scaled glow */}
      <motion.div 
        style={{ scale: ambientGlowScale }}
        className="absolute top-0 right-10 w-[700px] h-[700px] bg-gradient-to-b from-[#FEF3C7]/45 via-[#ECFDF5]/30 to-transparent blur-3xl pointer-events-none rounded-full z-0" 
      />
      <div className="absolute bottom-0 left-0 w-[550px] h-[450px] bg-gradient-to-t from-[#EADBCA]/30 to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT: EDITORIAL STORYTELLING & CTAS (Staggered Animation Flow)             */}
          {/* ========================================================================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start text-left z-20"
          >
            
            {/* 1. Kicker Handwritten Pill */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-3.5 select-none group inline-flex items-center gap-2"
            >
              <span className="kh-handwritten text-[#EA580C] text-2xl sm:text-3xl font-bold -rotate-1 block transition-transform group-hover:scale-105">
                Your money was never out of control.
              </span>
              <svg
                className="w-44 sm:w-56 h-3 text-[#EA580C] -mt-1 overflow-visible hidden sm:block"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M 3 6 C 50 2, 120 2, 195 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* 2. Staggered Master Headline Line 1 */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#123630] tracking-tight leading-[1.04]"
            >
              It was just out of sight.<br />
              <span className="text-[#EA580C] italic font-serif">Until now.</span>
            </motion.h1>

            {/* 3. Staggered Supporting Lede */}
            <motion.p 
              variants={itemVariants}
              className="mt-4 sm:mt-5 text-[#516761] text-base sm:text-lg leading-relaxed max-w-lg font-medium"
            >
              Kubear connects your complete financial life (income, accounts, goals, debts, holdings, insurance, household) into one honest picture.
            </motion.p>

            {/* 4. Staggered Trust Micro-Pill */}
            <motion.div 
              variants={itemVariants}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#065F46] bg-[#E6F4EA]/80 border border-[#A7F3D0] rounded-full px-3.5 py-1 shadow-2xs"
            >
              <CheckCircle2 className="size-3.5 text-[#059669] shrink-0" />
              <span>No account scraping · Zero SMS snooping · Private PDF drop</span>
            </motion.div>

            {/* 5. Staggered CTA Buttons with luxury hover motions */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[50px] sm:min-h-[52px] px-8 sm:px-9 py-3 rounded-full bg-[#123630] hover:bg-[#0A241E] text-white font-bold text-sm sm:text-base cursor-pointer gap-2.5 shadow-md hover:shadow-xl transition-all group"
              >
                <span>Start on Web</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[50px] sm:min-h-[52px] px-6 sm:px-7 py-3 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#EADBCA] hover:border-[#123630] text-[#123630] font-bold text-sm sm:text-base cursor-pointer gap-2.5 shadow-2xs hover:shadow-md transition-all"
              >
                <GooglePlayIcon className="size-5 shrink-0" />
                <span>Get it on Google Play</span>
              </motion.a>
            </motion.div>

            {/* 6. Staggered interactive hint */}
            <motion.div 
              variants={itemVariants}
              className="mt-5 text-xs text-[#516761] flex items-center gap-2 font-medium"
            >
              <Sparkles className="size-3.5 text-[#EA580C] shrink-0 animate-pulse" />
              <span>Hover or tap any node on the life map to trace its flow</span>
            </motion.div>

          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT: THE RELAXED LIFESTYLE PHOTO & ANIMATED COMMITMENT NODES            */}
          {/* ========================================================================= */}
          <motion.div 
            variants={visualContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            
            {/* The Main Container for the Photo Composition */}
            <motion.div 
              variants={visualItemVariants}
              className="relative w-full max-w-[620px] aspect-[4/3.5] rounded-[2.5rem] overflow-hidden border border-[#EADBCA] shadow-[0_24px_60px_rgba(18,54,48,0.1)] bg-[#FAF7F0] group"
            >
              
              {/* Photo of woman holding mug */}
              <img
                src="/hero-artwork.png"
                alt="Kubear - A calmer richer you"
                className="w-full h-full object-cover object-[65%_center] filter brightness-[0.99] transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Gentle gradient vignette for edge harmony */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              {/* Interactive Tooltip Card when a node is hovered */}
              <AnimatePresence>
                {activeNode && nodeDescriptions[activeNode] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EADBCA] shadow-[0_12px_32px_rgba(18,54,48,0.15)] text-left"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669]">
                        {nodeDescriptions[activeNode].tag}
                      </span>
                      <span className="size-2 rounded-full bg-[#059669] animate-pulse" />
                    </div>
                    <div className="text-xs font-bold text-[#123630]">
                      {nodeDescriptions[activeNode].title}
                    </div>
                    <p className="text-[11px] text-[#516761] leading-relaxed mt-1 font-medium">
                      {nodeDescriptions[activeNode].note}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Right Handwritten text: "More life possible ♡" */}
              <motion.div 
                animate={{ rotate: [-2.5, -1, -2.5], y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-5 right-6 select-none pointer-events-none z-20"
              >
                <span className="kh-handwritten text-white text-2xl sm:text-3xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight block text-right">
                  More<br />
                  life<br />
                  possible<br />
                  ♡
                </span>
              </motion.div>
            </motion.div>

            {/* SVG Connecting Branches from "Your Salary" to each node with animated flowing pulses */}
            <motion.svg 
              variants={visualItemVariants}
              className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
              viewBox="0 0 620 520"
              fill="none"
            >
              {/* Line to Rent (385, 25) */}
              <path 
                d="M 310 52 C 340 50, 360 30, 385 25" 
                stroke={activeNode === "rent" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "rent" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "rent" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
              
              {/* Line to Family (120, 65) */}
              <path 
                d="M 310 52 C 220 52, 170 58, 125 65" 
                stroke={activeNode === "family" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "family" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "family" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
              
              {/* Line to Card Bill (115, 175) */}
              <path 
                d="M 310 52 C 210 80, 150 140, 120 175" 
                stroke={activeNode === "card" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "card" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "card" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
              
              {/* Line to SIP (475, 65) */}
              <path 
                d="M 310 52 C 390 52, 440 58, 475 65" 
                stroke={activeNode === "sip" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "sip" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "sip" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
              
              {/* Line to Goa Trip (525, 120) */}
              <path 
                d="M 310 52 C 420 75, 480 100, 525 120" 
                stroke={activeNode === "goa" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "goa" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "goa" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
              
              {/* Line to Everyday (515, 205) */}
              <path 
                d="M 310 52 C 430 110, 480 170, 515 205" 
                stroke={activeNode === "everyday" ? "#059669" : "#123630"} 
                strokeOpacity={activeNode === "everyday" ? 0.95 : 0.35} 
                strokeWidth={activeNode === "everyday" ? 2.5 : 1.5} 
                strokeDasharray="4 4" 
                className="transition-all duration-300"
              />
            </motion.svg>

            {/* TOP ORIGIN NODE: Handwritten "Your Salary" with green pulsing dot */}
            <motion.div 
              variants={visualItemVariants}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center select-none cursor-pointer"
            >
              <span className="kh-handwritten text-[#123630] text-xl sm:text-2xl font-bold -rotate-1 tracking-wide">
                Your Salary
              </span>
              <div className="relative mt-0.5">
                <span className="absolute -inset-1.5 rounded-full bg-[#059669]/30 animate-ping" />
                <div className="size-4 rounded-full bg-[#059669] border-2 border-white shadow-md relative" />
              </div>
            </motion.div>

            {/* ========================================================================= */}
            {/* 6 FLOATING COMMITMENT PILLS WITH STAGGERED ENTRANCE & FLOATING MOTIONS    */}
            {/* ========================================================================= */}

            {/* 1. Rent ₹22,000 (Top Center-Right) */}
            <FloatingPill
              id="rent"
              label="Rent"
              amount="₹22,000"
              category="Fixed"
              icon={Home}
              className="top-2 right-14 sm:right-24"
              floatDelay={0}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={0}
            />

            {/* 2. Family ₹10,000 (Top Left) */}
            <FloatingPill
              id="family"
              label="Family"
              amount="₹10,000"
              category="Duty"
              icon={Users}
              className="top-10 left-1 sm:left-4"
              floatDelay={0.5}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={1}
            />

            {/* 3. Card Bill ₹8,000 (Lower Left) */}
            <FloatingPill
              id="card"
              label="Card Bill"
              amount="₹8,000"
              category="Credit"
              icon={CreditCard}
              className="top-36 left-0 sm:left-2"
              floatDelay={1.0}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={2}
            />

            {/* 4. SIP ₹15,000 (Top Right) */}
            <FloatingPill
              id="sip"
              label="SIP"
              amount="₹15,000"
              category="Wealth"
              icon={Sprout}
              className="top-10 right-2 sm:right-6"
              floatDelay={1.5}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={3}
            />

            {/* 5. Goa Trip ₹20,000 (Mid Right) */}
            <FloatingPill
              id="goa"
              label="Goa Trip"
              amount="₹20,000"
              category="Living"
              icon={Palmtree}
              className="top-28 -right-1 sm:right-2"
              floatDelay={2.0}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={4}
            />

            {/* 6. Everyday ₹15,000 (Lower Right) */}
            <FloatingPill
              id="everyday"
              label="Everyday"
              amount="₹15,000"
              category="Daily"
              icon={ShoppingCart}
              className="top-48 right-1 sm:right-4"
              floatDelay={2.5}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              staggerIndex={5}
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
