import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface StationDetail {
  id: string;
  name: string;
  badge: string;
  amount: string;
  status: string;
  color: string;
  textColor: string;
  badgeBg: string;
}

const STATIONS: Record<string, StationDetail> = {
  salary: {
    id: "salary",
    name: "Salary Inflow",
    badge: "Income",
    amount: "₹95,000",
    status: "Safely allocated into buffer",
    color: "#10B981",
    textColor: "text-emerald-700",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  dinner: {
    id: "dinner",
    name: "Dinner & Drinks",
    badge: "Lifestyle",
    amount: "– ₹4,200",
    status: "Zero impact on long-term plans",
    color: "#FB7185",
    textColor: "text-rose-700",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-800",
  },
  center: {
    id: "center",
    name: "Autonomous Engine",
    badge: "Active",
    amount: "100% On Track",
    status: "Recalculated instantly in background",
    color: "#14B8A6",
    textColor: "text-teal-700",
    badgeBg: "bg-teal-50 border-teal-200 text-teal-800",
  },
  emi: {
    id: "emi",
    name: "Fixed Commitments",
    badge: "Mandatory",
    amount: "₹18,500 EMI",
    status: "Pre-funded & isolated from spending",
    color: "#3B82F6",
    textColor: "text-blue-700",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-800",
  },
  trip: {
    id: "trip",
    name: "Goa Vacation Goal",
    badge: "Milestone",
    amount: "₹42,000 / ₹70,000",
    status: "Zero days delayed",
    color: "#F59E0B",
    textColor: "text-amber-700",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-800",
  },
};

export function YourLifeComesFirstSection() {
  const APP_URL = "https://kubear.kuberos.in";
  const [activeStation, setActiveStation] = useState<string | null>(null);

  return (
    <section 
      id="life-comes-first" 
      className="relative w-full pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================= */}
        {/* CENTERED HEADER & VALUE PROPOSITION                               */}
        {/* ================================================================= */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Section Marker: 06 ──────── */}
          <div className="flex items-center justify-center gap-3.5 mb-5 sm:mb-6">
            <span className="text-slate-400 font-medium text-xs sm:text-sm tracking-wider font-mono">
              06
            </span>
            <div className="w-14 sm:w-16 h-[1.5px] bg-slate-200" aria-hidden="true" />
          </div>

          {/* Main Headline with Clean Single-Line Yellow Capsule */}
          <h2 className="text-[#0F172A] tracking-[-0.035em] leading-[1.2] text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold">
            <span className="block">Your life comes first.</span>
            <span className="inline-block relative mt-2.5 sm:mt-3">
              <span 
                className="absolute inset-0 bg-[#FEF3C7] rounded-full z-0"
                aria-hidden="true"
              />
              <span className="relative z-10 text-[#0F172A] px-5 sm:px-8 py-0.5 sm:py-1 font-bold whitespace-nowrap block">
                Your money can work around it.
              </span>
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-lg leading-[1.65] font-normal tracking-[-0.01em] max-w-xl mx-auto">
            Bring your money together once. Kubear helps you understand where you stand, what you can do and what needs your attention next.
          </p>

          {/* CTA Button */}
          <div className="mt-7 sm:mt-8">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111827] hover:bg-[#1E293B] text-white font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Get started</span>
              <span className="text-lg leading-none">→</span>
            </a>
          </div>

          {/* Trust microcopy */}
          <p className="mt-4 text-xs sm:text-sm text-slate-500 font-normal flex items-center justify-center gap-2.5">
            <span>Free to try</span>
            <span className="text-slate-300">•</span>
            <span>Built for India</span>
            <span className="text-slate-300">•</span>
            <span>Your data stays yours</span>
          </p>

        </div>

        {/* ================================================================= */}
        {/* FINANCIAL HORIZON & MILESTONES RIVER COMPOSITION                  */}
        {/* ================================================================= */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 w-full overflow-x-auto lg:overflow-visible pb-8 pt-4 flex justify-center">
          <div className="relative w-[980px] lg:w-full max-w-5xl mx-auto h-[270px] select-none scale-[0.64] min-[420px]:scale-[0.74] sm:scale-[0.88] lg:scale-100 origin-center -my-10 min-[420px]:-my-6 sm:-my-2 lg:my-0 shrink-0">
            
            {/* SVG RIVER FLOW LINE & AMBIENCE */}
            <svg 
              viewBox="0 0 1000 240" 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              fill="none"
            >
              <defs>
                {/* Continuous flowing horizontal gradient */}
                <linearGradient id="riverWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="25%" stopColor="#FB7185" />
                  <stop offset="50%" stopColor="#14B8A6" />
                  <stop offset="75%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>

                {/* Traveling beam glowing gradient */}
                <linearGradient id="pulseGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* Soft ambient atmospheric glows behind illustrations */}
                <radialGradient id="salaryAuraGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#D1FAE5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="dinnerAuraGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FECDD3" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#FFE4E6" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerAuraGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#99F6E4" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#CCFBF1" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="emiAuraGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="tripAuraGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#FEF3C7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient Radial Auras directly behind illustrations */}
              <ellipse cx="100" cy="115" rx="95" ry="75" fill="url(#salaryAuraGlow)" />
              <ellipse cx="310" cy="120" rx="85" ry="65" fill="url(#dinnerAuraGlow)" />
              <ellipse cx="505" cy="115" rx="85" ry="65" fill="url(#centerAuraGlow)" />
              <ellipse cx="710" cy="115" rx="85" ry="65" fill="url(#emiAuraGlow)" />
              <ellipse cx="898" cy="115" rx="95" ry="75" fill="url(#tripAuraGlow)" />

              {/* ============================================================ */}
              {/* STATION 1: SALARY (3D Laptop + Botanical Leaves + Checkmark) */}
              {/* ============================================================ */}
              <g 
                transform="translate(45, 48)"
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "salary" ? null : "salary")}
                onMouseEnter={() => setActiveStation("salary")}
                onMouseLeave={() => setActiveStation(null)}
              >
                {/* Botanical leaves behind laptop */}
                <path
                  d="M 12,68 C 0,55 -2,32 8,16 C 16,32 24,52 26,64 Z"
                  fill="#86EFAC"
                  opacity="0.9"
                />
                <path
                  d="M 6,42 C 14,48 20,54 26,64"
                  stroke="#4ADE80"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 28,68 C 22,54 20,40 26,28 C 32,40 34,54 32,68 Z"
                  fill="#6EE7B7"
                  opacity="0.75"
                />

                {/* Radiating Green Sparks with twinkle pulse */}
                <motion.g
                  animate={{ opacity: [0.6, 1, 0.6], scale: [0.97, 1.03, 0.97] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <line x1="48" y1="-4" x2="45" y2="-16" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="62" y1="-8" x2="64" y2="-22" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="76" y1="-4" x2="82" y2="-16" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                </motion.g>

                {/* Soft Drop Shadow under laptop */}
                <ellipse cx="64" cy="74" rx="46" ry="6" fill="#10B981" opacity="0.18" />

                {/* 3D Tilted Laptop Screen Body */}
                <motion.g
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <rect
                    x="24"
                    y="6"
                    width="78"
                    height="58"
                    rx="9"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="3.2"
                    transform="rotate(-5 63 35)"
                  />
                  {/* Screen Bezel Inside */}
                  <rect
                    x="29"
                    y="11"
                    width="68"
                    height="48"
                    rx="6"
                    fill="#F0FDF4"
                    transform="rotate(-5 63 35)"
                  />
                  {/* Vibrant Emerald Circular Badge in Screen with pulse */}
                  <circle
                    cx="63"
                    cy="35"
                    r="16"
                    fill="#10B981"
                    transform="rotate(-5 63 35)"
                  />
                  <path
                    d="M 55,35 L 61,41 L 71,29"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    transform="rotate(-5 63 35)"
                  />

                  {/* Laptop Keyboard Base (Slanted Perspective Base) */}
                  <path
                    d="M 12,68 L 28,62 L 100,56 L 112,68 L 12,68 Z"
                    fill="#A7F3D0"
                    stroke="#10B981"
                    strokeWidth="2.8"
                    strokeLinejoin="round"
                  />
                  {/* Trackpad */}
                  <rect
                    x="48"
                    y="63"
                    width="30"
                    height="3"
                    rx="1.5"
                    fill="#34D399"
                  />
                </motion.g>
              </g>

              {/* ============================================================ */}
              {/* STATION 2: DINNER (Ceramic Bowl with Curry & Steaming Mug)   */}
              {/* ============================================================ */}
              <g 
                transform="translate(252, 54)"
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "dinner" ? null : "dinner")}
                onMouseEnter={() => setActiveStation("dinner")}
                onMouseLeave={() => setActiveStation(null)}
              >
                {/* Radiating Coral Sparks with twinkle */}
                <motion.g
                  animate={{ opacity: [0.6, 1, 0.6], scale: [0.97, 1.03, 0.97] }}
                  transition={{ duration: 2.6, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <line x1="48" y1="-4" x2="45" y2="-16" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="62" y1="-8" x2="64" y2="-22" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="76" y1="-4" x2="82" y2="-16" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" />
                </motion.g>

                {/* Soft Bowl Shadow */}
                <ellipse cx="50" cy="68" rx="42" ry="7" fill="#F43F5E" opacity="0.14" />

                {/* Hover gentle floating group */}
                <motion.g
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 4, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Ceramic Bowl Body */}
                  <path
                    d="M 12,44 C 14,62 32,68 50,68 C 68,68 86,62 88,44 Z"
                    fill="#FDA4AF"
                    stroke="#FB7185"
                    strokeWidth="2.5"
                  />
                  {/* Bowl Inner Rim */}
                  <ellipse cx="50" cy="44" rx="38" ry="11" fill="#FFE4E6" stroke="#FB7185" strokeWidth="2" />

                  {/* Warm Food Mounds in Bowl */}
                  <ellipse cx="38" cy="42" rx="12" ry="8" fill="#FBBF24" />
                  <ellipse cx="52" cy="40" rx="13" ry="9" fill="#F59E0B" />
                  <ellipse cx="65" cy="42" rx="10" ry="7" fill="#D97706" />
                  <ellipse cx="46" cy="44" rx="9" ry="6" fill="#EF4444" />
                  {/* Herb garnishes */}
                  <circle cx="50" cy="38" r="1.5" fill="#059669" />
                  <circle cx="58" cy="41" r="1.5" fill="#059669" />
                  <circle cx="41" cy="41" r="1.2" fill="#059669" />

                  {/* Steaming Ceramic Mug */}
                  <g transform="translate(82, 34)">
                    <ellipse cx="14" cy="32" rx="13" ry="4" fill="#F43F5E" opacity="0.14" />
                    <path
                      d="M 4,12 L 6,28 C 7,31 21,31 22,28 L 24,12 Z"
                      fill="#FB7185"
                      stroke="#F43F5E"
                      strokeWidth="1.8"
                    />
                    <ellipse cx="14" cy="12" rx="10" ry="3.5" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="1.5" />
                    <ellipse cx="14" cy="12" rx="8" ry="2.5" fill="#78350F" />
                    {/* Handle */}
                    <path
                      d="M 23,14 C 29,14 29,26 22,26"
                      fill="none"
                      stroke="#F43F5E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Animated rising steam curls */}
                    <motion.path
                      d="M 11,5 C 10,0 15,-2 13,-7"
                      fill="none"
                      stroke="#FDA4AF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      animate={{ y: [0, -4, 0], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M 16,6 C 17,1 13,-1 16,-6"
                      fill="none"
                      stroke="#FDA4AF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </g>
                </motion.g>
              </g>

              {/* ============================================================ */}
              {/* STATION 3: EMI (Folded Paper Invoice + 3D Desk Calendar)     */}
              {/* ============================================================ */}
              <g 
                transform="translate(650, 48)"
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "emi" ? null : "emi")}
                onMouseEnter={() => setActiveStation("emi")}
                onMouseLeave={() => setActiveStation(null)}
              >
                {/* Soft Document Shadow */}
                <rect x="16" y="24" width="60" height="70" rx="8" fill="#3B82F6" opacity="0.12" />

                <motion.g
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.8, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Folded Document Sheet */}
                  <path
                    d="M 18,14 L 60,14 L 74,28 L 74,84 C 74,88 70,90 66,90 L 18,90 C 14,90 10,88 10,84 L 10,22 C 10,18 14,14 18,14 Z"
                    fill="#FFFFFF"
                    stroke="#93C5FD"
                    strokeWidth="2.8"
                  />
                  {/* Corner Fold Triangle */}
                  <path
                    d="M 60,14 L 60,28 L 74,28 Z"
                    fill="#BFDBFE"
                    stroke="#93C5FD"
                    strokeWidth="2.2"
                  />
                  {/* Blue "EMI" Header Pill */}
                  <rect x="18" y="26" width="38" height="18" rx="4" fill="#DBEAFE" />
                  <text x="37" y="39" textAnchor="middle" fill="#1D4ED8" fontSize="11" fontWeight="bold" fontFamily="system-ui, sans-serif">
                    EMI
                  </text>
                  {/* Preview text placeholder lines */}
                  <line x1="18" y1="52" x2="62" y2="52" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18" y1="62" x2="56" y2="62" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18" y1="72" x2="44" y2="72" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />

                  {/* 3D Floating Calendar Card */}
                  <g transform="translate(68, 14)">
                    <rect x="7" y="0" width="4" height="6" rx="2" fill="#3B82F6" />
                    <rect x="25" y="0" width="4" height="6" rx="2" fill="#3B82F6" />

                    <rect x="0" y="4" width="36" height="36" rx="8" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2.2" />
                    <rect x="0" y="4" width="36" height="11" rx="6" fill="#3B82F6" />

                    {/* Date Grid */}
                    <rect x="5" y="19" width="5.5" height="5.5" rx="1.5" fill="#93C5FD" />
                    <rect x="15" y="19" width="5.5" height="5.5" rx="1.5" fill="#3B82F6" />
                    <rect x="25" y="19" width="5.5" height="5.5" rx="1.5" fill="#93C5FD" />
                    <rect x="5" y="28" width="5.5" height="5.5" rx="1.5" fill="#93C5FD" />
                    <rect x="15" y="28" width="5.5" height="5.5" rx="1.5" fill="#93C5FD" />
                    <rect x="25" y="28" width="5.5" height="5.5" rx="1.5" fill="#93C5FD" />
                  </g>
                </motion.g>
              </g>

              {/* ============================================================ */}
              {/* STATION 4: TRIP (Golden Suitcase + Palm Tree + Island Dune)  */}
              {/* ============================================================ */}
              <g 
                transform="translate(836, 44)"
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "trip" ? null : "trip")}
                onMouseEnter={() => setActiveStation("trip")}
                onMouseLeave={() => setActiveStation(null)}
              >
                {/* Radiating Golden Sparks */}
                <motion.g
                  animate={{ opacity: [0.6, 1, 0.6], scale: [0.97, 1.03, 0.97] }}
                  transition={{ duration: 2.8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <line x1="58" y1="-4" x2="56" y2="-16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="72" y1="-8" x2="74" y2="-22" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="86" y1="-4" x2="92" y2="-16" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                </motion.g>

                {/* Soft Distant Island Dune in background */}
                <path
                  d="M 74,76 C 88,54 104,52 120,76 Z"
                  fill="#A7F3D0"
                  opacity="0.8"
                />

                {/* Coconut Palm Tree with gentle breeze sway */}
                <motion.g 
                  transform="translate(88, 6)"
                  animate={{ rotate: [-1.8, 1.8, -1.8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "12px 72px" }}
                >
                  {/* Curved Textured Trunk */}
                  <path
                    d="M 12,72 C 16,50 20,34 14,18"
                    stroke="#78350F"
                    strokeWidth="4.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 12,72 C 16,50 20,34 14,18"
                    stroke="#92400E"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Spreading Palm Fronds */}
                  <path d="M 14,18 C 6,14 -4,16 -12,24 C -4,20 6,22 14,18" fill="#10B981" />
                  <path d="M 14,18 C 14,6 20,-2 26,-6 C 22,4 20,12 14,18" fill="#059669" />
                  <path d="M 14,18 C 24,10 36,12 42,20 C 34,16 24,18 14,18" fill="#10B981" />
                  <path d="M 14,18 C 22,22 32,30 34,42 C 28,30 20,24 14,18" fill="#047857" />
                  <path d="M 14,18 C 4,22 -6,28 -10,38 C -4,28 6,24 14,18" fill="#047857" />
                </motion.g>

                {/* Suitcase Shadow */}
                <ellipse cx="48" cy="78" rx="42" ry="5.5" fill="#F59E0B" opacity="0.18" />

                <motion.g
                  animate={{ y: [0, -3.5, 0] }}
                  transition={{ duration: 4.2, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Suitcase Handle */}
                  <path
                    d="M 40,16 L 40,8 C 40,5 58,5 58,8 L 58,16"
                    fill="none"
                    stroke="#92400E"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                  />

                  {/* Golden Suitcase Main Trunk */}
                  <rect
                    x="12"
                    y="16"
                    width="74"
                    height="60"
                    rx="11"
                    fill="#FBBF24"
                    stroke="#D97706"
                    strokeWidth="2.8"
                  />
                  {/* Ribbed lines */}
                  <line x1="30" y1="16" x2="30" y2="76" stroke="#D97706" strokeWidth="2.5" />
                  <line x1="68" y1="16" x2="68" y2="76" stroke="#D97706" strokeWidth="2.5" />
                  {/* Buckles */}
                  <rect x="27" y="42" width="6.5" height="6.5" rx="1.5" fill="#78350F" />
                  <rect x="65" y="42" width="6.5" height="6.5" rx="1.5" fill="#78350F" />
                  {/* Corner Protectors */}
                  <rect x="12" y="16" width="9" height="9" rx="3" fill="#D97706" />
                  <rect x="77" y="16" width="9" height="9" rx="3" fill="#D97706" />
                  <rect x="12" y="67" width="9" height="9" rx="3" fill="#D97706" />
                  <rect x="77" y="67" width="9" height="9" rx="3" fill="#D97706" />
                </motion.g>
              </g>

              {/* ============================================================ */}
              {/* CONTINUOUS ROLLING RIVER WAVE LINE & TRAVELING PARTICLES      */}
              {/* ============================================================ */}
              {/* Background ambient glow line */}
              <path 
                d="M 0,172 C 50,186 75,182 100,182 C 145,182 175,160 215,160 C 255,160 280,188 310,188 C 345,188 375,168 415,168 C 455,168 480,186 505,186 C 530,186 555,168 595,168 C 635,168 670,188 710,188 C 745,188 775,160 810,160 C 845,160 870,182 898,182 C 930,182 965,168 1000,172" 
                stroke="url(#riverWaveGrad)" 
                strokeWidth="7" 
                strokeLinecap="round"
                opacity="0.25"
              />

              {/* Main crisp ribbon line */}
              <path 
                d="M 0,172 C 50,186 75,182 100,182 C 145,182 175,160 215,160 C 255,160 280,188 310,188 C 345,188 375,168 415,168 C 455,168 480,186 505,186 C 530,186 555,168 595,168 C 635,168 670,188 710,188 C 745,188 775,160 810,160 C 845,160 870,182 898,182 C 930,182 965,168 1000,172" 
                stroke="url(#riverWaveGrad)" 
                strokeWidth="3.8" 
                strokeLinecap="round"
              />

              {/* Glowing animated light pulse beam racing along the river */}
              <motion.path 
                d="M 0,172 C 50,186 75,182 100,182 C 145,182 175,160 215,160 C 255,160 280,188 310,188 C 345,188 375,168 415,168 C 455,168 480,186 505,186 C 530,186 555,168 595,168 C 635,168 670,188 710,188 C 745,188 775,160 810,160 C 845,160 870,182 898,182 C 930,182 965,168 1000,172" 
                stroke="#FFFFFF" 
                strokeWidth="2.8" 
                strokeLinecap="round"
                strokeDasharray="30 180"
                animate={{ strokeDashoffset: [210, -590] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
                opacity={0.95}
              />

              {/* Extra traveling secondary particle */}
              <motion.path 
                d="M 0,172 C 50,186 75,182 100,182 C 145,182 175,160 215,160 C 255,160 280,188 310,188 C 345,188 375,168 415,168 C 455,168 480,186 505,186 C 530,186 555,168 595,168 C 635,168 670,188 710,188 C 745,188 775,160 810,160 C 845,160 870,182 898,182 C 930,182 965,168 1000,172" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="14 180"
                animate={{ strokeDashoffset: [400, -400] }}
                transition={{ duration: 3.8, delay: 1.9, repeat: Infinity, ease: "linear" }}
                opacity={0.8}
              />

              {/* NODE 1: Salary (Emerald) */}
              <g 
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "salary" ? null : "salary")}
                onMouseEnter={() => setActiveStation("salary")}
                onMouseLeave={() => setActiveStation(null)}
              >
                <motion.circle 
                  cx="100" 
                  cy="182" 
                  r="14" 
                  fill="#10B981" 
                  fillOpacity="0.25"
                  animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="100" cy="182" r="7" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
                <circle cx="100" cy="182" r="3.5" fill="#10B981" />
              </g>

              {/* NODE 2: Dinner (Coral) */}
              <g 
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "dinner" ? null : "dinner")}
                onMouseEnter={() => setActiveStation("dinner")}
                onMouseLeave={() => setActiveStation(null)}
              >
                <motion.circle 
                  cx="310" 
                  cy="188" 
                  r="14" 
                  fill="#FB7185" 
                  fillOpacity="0.25"
                  animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 2.8, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="310" cy="188" r="7" fill="#FFFFFF" stroke="#FB7185" strokeWidth="2.5" />
                <circle cx="310" cy="188" r="3.5" fill="#FB7185" />
              </g>

              {/* NODE 3: Center (Mint/Cyan) */}
              <g 
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "center" ? null : "center")}
                onMouseEnter={() => setActiveStation("center")}
                onMouseLeave={() => setActiveStation(null)}
              >
                <motion.circle 
                  cx="505" 
                  cy="186" 
                  r="16" 
                  fill="#14B8A6" 
                  fillOpacity="0.3" 
                  animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 2.8, delay: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="505" cy="186" r="8" fill="#FFFFFF" stroke="#14B8A6" strokeWidth="2.5" />
                <circle cx="505" cy="186" r="4" fill="#14B8A6" />
              </g>

              {/* NODE 4: EMI (Sky Blue) */}
              <g 
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "emi" ? null : "emi")}
                onMouseEnter={() => setActiveStation("emi")}
                onMouseLeave={() => setActiveStation(null)}
              >
                <motion.circle 
                  cx="710" 
                  cy="188" 
                  r="14" 
                  fill="#3B82F6" 
                  fillOpacity="0.25" 
                  animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 2.8, delay: 2.1, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="710" cy="188" r="7" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="710" cy="188" r="3.5" fill="#3B82F6" />
              </g>

              {/* NODE 5: Trip (Amber) */}
              <g 
                className="cursor-pointer pointer-events-auto"
                onClick={() => setActiveStation(activeStation === "trip" ? null : "trip")}
                onMouseEnter={() => setActiveStation("trip")}
                onMouseLeave={() => setActiveStation(null)}
              >
                <motion.circle 
                  cx="898" 
                  cy="182" 
                  r="14" 
                  fill="#F59E0B" 
                  fillOpacity="0.25" 
                  animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 2.8, delay: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="898" cy="182" r="7" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />
                <circle cx="898" cy="182" r="3.5" fill="#F59E0B" />
              </g>
            </svg>

            {/* ============================================================= */}
            {/* FLOATING CENTER CARD: "Everything still on track."             */}
            {/* ============================================================= */}
            <motion.div 
              className="absolute top-[78px] left-[420px] z-20 cursor-pointer"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => setActiveStation(activeStation === "center" ? null : "center")}
              onMouseEnter={() => setActiveStation("center")}
              onMouseLeave={() => setActiveStation(null)}
            >
              {/* Radiating sparks above center card */}
              <motion.div 
                className="flex items-center justify-center gap-1.5 mb-1.5 text-teal-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-0.5 h-2 rounded-full bg-teal-400 transform -rotate-[25deg]" />
                <span className="w-0.5 h-2.5 rounded-full bg-teal-400 transform -translate-y-0.5" />
                <span className="w-0.5 h-2 rounded-full bg-teal-400 transform rotate-[25deg]" />
              </motion.div>

              <div 
                className="bg-white/95 backdrop-blur-md rounded-2xl py-3 px-5 border border-slate-100/90 flex items-center gap-3.5 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: "0 20px 42px -8px rgba(20, 184, 166, 0.28), 0 4px 16px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* 3 Rising Rounded Bar Chart with dynamic bounce */}
                <div className="flex items-end gap-1 h-5 shrink-0 pb-0.5">
                  <motion.span 
                    className="w-1.5 bg-teal-400 rounded-full" 
                    animate={{ height: ["8px", "14px", "8px"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span 
                    className="w-1.5 bg-teal-500 rounded-full" 
                    animate={{ height: ["14px", "20px", "14px"] }}
                    transition={{ duration: 1.8, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span 
                    className="w-1.5 bg-emerald-500 rounded-full" 
                    animate={{ height: ["18px", "22px", "18px"] }}
                    transition={{ duration: 1.8, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className="text-left whitespace-nowrap">
                  <span className="text-sm font-bold text-slate-900 block leading-tight">
                    Everything
                  </span>
                  <span className="text-xs sm:text-[13px] text-slate-600 font-medium block leading-tight mt-0.5">
                    still on track.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* LABELS UNDER NODES WITH INTERACTIVE HOVER TOUCH */}
            <div 
              className="absolute top-[204px] left-[70px] w-[60px] text-center cursor-pointer"
              onClick={() => setActiveStation(activeStation === "salary" ? null : "salary")}
              onMouseEnter={() => setActiveStation("salary")}
              onMouseLeave={() => setActiveStation(null)}
            >
              <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                activeStation === "salary" ? "text-emerald-600 font-bold" : "text-slate-800"
              }`}>
                Salary
              </span>
            </div>

            <div 
              className="absolute top-[210px] left-[280px] w-[60px] text-center cursor-pointer"
              onClick={() => setActiveStation(activeStation === "dinner" ? null : "dinner")}
              onMouseEnter={() => setActiveStation("dinner")}
              onMouseLeave={() => setActiveStation(null)}
            >
              <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                activeStation === "dinner" ? "text-rose-600 font-bold" : "text-slate-800"
              }`}>
                Dinner
              </span>
            </div>

            <div 
              className="absolute top-[210px] left-[680px] w-[60px] text-center cursor-pointer"
              onClick={() => setActiveStation(activeStation === "emi" ? null : "emi")}
              onMouseEnter={() => setActiveStation("emi")}
              onMouseLeave={() => setActiveStation(null)}
            >
              <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                activeStation === "emi" ? "text-blue-600 font-bold" : "text-slate-800"
              }`}>
                EMI
              </span>
            </div>

            <div 
              className="absolute top-[204px] left-[868px] w-[60px] text-center cursor-pointer"
              onClick={() => setActiveStation(activeStation === "trip" ? null : "trip")}
              onMouseEnter={() => setActiveStation("trip")}
              onMouseLeave={() => setActiveStation(null)}
            >
              <span className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                activeStation === "trip" ? "text-amber-600 font-bold" : "text-slate-800"
              }`}>
                Trip
              </span>
            </div>

            {/* INTERACTIVE FLOATING DETAIL TOOLTIP ON CLICK / HOVER */}
            <AnimatePresence>
              {activeStation && STATIONS[activeStation] && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 z-30 pointer-events-none"
                >
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${STATIONS[activeStation].badgeBg}`}>
                    {STATIONS[activeStation].badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {STATIONS[activeStation].name}:
                    </span>
                    <span className={`text-xs font-mono font-bold ${STATIONS[activeStation].textColor}`}>
                      {STATIONS[activeStation].amount}
                    </span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-medium">
                    {STATIONS[activeStation].status}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
