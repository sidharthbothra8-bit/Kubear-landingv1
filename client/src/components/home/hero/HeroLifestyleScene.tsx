import React, { useState } from "react";

export function HeroLifestyleScene() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-10">
      {/* 1. Seamless Warm Cream to Golden Sunlit Base Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF6F0] to-[#F7EFE1]" />

      {/* Atmospheric Golden Hour Bloom entering from top right */}
      <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-gradient-to-bl from-[#FDE68A]/30 via-[#FED7AA]/25 to-transparent blur-3xl pointer-events-none" />

      {/* 2. Photo Artwork Rendering (Priority when uploaded to public folder) */}
      {!imgError && (
        <div className="absolute right-0 bottom-0 w-full md:w-[75%] lg:w-[68%] xl:w-[62%] h-[85%] lg:h-[92%] flex items-end justify-end pointer-events-none z-0">
          <img
            src="/hero-artwork.png"
            alt="Kubear Lifestyle Atmosphere"
            className="w-full h-full object-contain object-right-bottom mix-blend-multiply opacity-95 transition-opacity duration-700"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Fallback Vector Scenery if image is not uploaded yet */}
      {imgError && (
        <>
          {/* Large Loft Window on Far Right (Cityscape Sunset) */}
          <div className="absolute top-0 right-0 w-[38%] lg:w-[35%] xl:w-[32%] h-full overflow-hidden">
            {/* Sky gradient inside window frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDE68A]/45 via-[#FED7AA]/40 to-[#FB923C]/35" />

            {/* Sun atmospheric glow */}
            <div className="absolute top-1/6 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#EA580C]/25 via-[#F59E0B]/35 to-transparent blur-2xl" />

            {/* Distant City Skyline Silhouettes */}
            <svg
              viewBox="0 0 360 600"
              className="absolute bottom-20 right-0 w-full h-[68%] opacity-35 overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Skyline Layers */}
              <rect x="15" y="260" width="40" height="340" fill="#9A3412" />
              <rect x="65" y="210" width="50" height="390" fill="#B45309" />
              <polygon points="90,160 65,210 115,210" fill="#B45309" />
              <line x1="90" y1="130" x2="90" y2="160" stroke="#B45309" strokeWidth="2" />
              
              <rect x="130" y="280" width="38" height="320" fill="#78350F" />
              <rect x="180" y="230" width="55" height="370" fill="#9A3412" />
              <rect x="245" y="180" width="48" height="420" fill="#78350F" />
              <line x1="269" y1="140" x2="269" y2="180" stroke="#78350F" strokeWidth="2" />
              <rect x="305" y="260" width="60" height="340" fill="#9A3412" />

              {/* Golden hour glowing windows in towers */}
              <circle cx="80" cy="240" r="1.5" fill="#FEF08A" opacity="0.9" />
              <circle cx="95" cy="270" r="1.5" fill="#FEF08A" opacity="0.9" />
              <circle cx="200" cy="250" r="1.5" fill="#FEF08A" opacity="0.9" />
              <circle cx="265" cy="220" r="1.5" fill="#FEF08A" opacity="0.9" />
              <circle cx="275" cy="240" r="1.5" fill="#FEF08A" opacity="0.9" />
            </svg>

            {/* Window Mullions (Sleek Charcoal/Warm Wood) */}
            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#8C7A6B] to-[#716153] shadow-md" />
            <div className="absolute inset-y-0 right-[42%] w-2 bg-[#968372]/90 shadow-sm" />
            <div className="absolute top-[36%] inset-x-0 h-2 bg-[#968372]/90" />

            {/* Small Succulents on the Window Sill */}
            <div className="absolute bottom-[240px] left-6 flex items-end gap-3 select-none">
              <div className="relative flex flex-col items-center">
                <span className="text-emerald-600 text-xs leading-none">🪴</span>
                <div className="w-5 h-4 bg-[#C2410C] rounded-b-sm" />
              </div>
              <div className="relative flex flex-col items-center">
                <span className="text-emerald-700 text-xs leading-none">🌿</span>
                <div className="w-4 h-3.5 bg-[#B45309] rounded-b-sm" />
              </div>
            </div>

            {/* Delicate handwritten graphite script on wall/window mullion */}
            <div className="absolute top-[28%] right-4 sm:right-6 z-20 pointer-events-none select-none text-right rotate-2">
              <span className="font-['Caveat'] text-[#4A5568]/85 text-xl sm:text-2xl font-bold leading-tight block">
                Same salary.
              </span>
              <span className="font-['Caveat'] text-[#4A5568]/85 text-xl sm:text-2xl font-bold leading-tight block">
                A more open
              </span>
              <span className="font-['Caveat'] text-[#4A5568]/85 text-xl sm:text-2xl font-bold leading-tight block">
                tomorrow.
              </span>
            </div>
          </div>

          {/* Upper Studio Wall Details (Shelf with Pothos Plant + Polaroids) */}
          <div className="absolute top-8 right-[36%] lg:right-[34%] flex items-start gap-5 opacity-90">
            <div className="relative">
              <div className="w-36 h-2 bg-[#A16207]/80 rounded-sm shadow-sm" />
              <svg className="w-32 h-36 -mt-1 overflow-visible" viewBox="0 0 120 140" fill="none">
                <path d="M 20 5 Q 15 40 30 70 T 25 120" stroke="#15803D" strokeWidth="1.6" fill="none" />
                <path d="M 50 5 Q 60 45 45 85 T 55 130" stroke="#16A34A" strokeWidth="1.4" fill="none" />
                <path d="M 80 5 Q 70 35 85 75 T 75 110" stroke="#15803D" strokeWidth="1.5" fill="none" />
                <circle cx="22" cy="25" r="4.5" fill="#22C55E" />
                <circle cx="16" cy="45" r="5" fill="#16A34A" />
                <circle cx="32" cy="70" r="5.5" fill="#15803D" />
                <circle cx="24" cy="95" r="4.5" fill="#22C55E" />
                <circle cx="56" cy="30" r="5" fill="#16A34A" />
                <circle cx="48" cy="60" r="6" fill="#15803D" />
                <circle cx="52" cy="90" r="5" fill="#22C55E" />
                <circle cx="82" cy="28" r="5" fill="#15803D" />
                <circle cx="76" cy="55" r="5.5" fill="#22C55E" />
                <circle cx="84" cy="85" r="4.5" fill="#16A34A" />
              </svg>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <div className="px-2.5 py-1.5 bg-white/95 rounded shadow-sm border border-[#E2E8F0] -rotate-2 select-none">
                <span className="text-[11px] font-medium text-[#334155] flex items-center gap-1">
                  Next Trip ✈️
                </span>
                <span className="text-[10px] text-[#64748B] block font-mono">
                  Loading...
                </span>
              </div>

              <div className="px-2.5 py-2 bg-[#FEF08A] rounded-sm shadow-xs border border-[#FDE047] rotate-3 select-none">
                <span className="font-['Caveat'] text-[#854D0E] text-sm font-bold leading-tight block">
                  Good Finances
                </span>
                <span className="font-['Caveat'] text-[#854D0E] text-sm font-bold leading-tight block">
                  Brighter Days ☀️
                </span>
              </div>
            </div>
          </div>

          {/* Foreground Scene (Walnut Desk, Relaxed Indian Man, Laptop, Books, Mug, Sleeping Dog) */}
          <div className="absolute bottom-0 right-0 w-full lg:w-[75%] xl:w-[70%] h-[380px] sm:h-[440px] lg:h-[490px]">
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background: "linear-gradient(125deg, transparent 35%, rgba(254, 243, 199, 0.45) 70%, rgba(253, 186, 116, 0.35) 100%)",
              }}
            />

            <div 
              className="w-full h-full"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
                maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect"
              }}
            >
              <svg
                viewBox="0 0 1200 490"
                className="w-full h-full object-cover object-bottom overflow-visible"
                preserveAspectRatio="xMidYMax meet"
              >
                <defs>
                  <linearGradient id="deskWoodSurface" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#965B32" />
                    <stop offset="12%" stopColor="#784421" />
                    <stop offset="40%" stopColor="#4D2A12" />
                    <stop offset="100%" stopColor="#2D1708" />
                  </linearGradient>
                  <linearGradient id="deskBevelEdge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#B47444" />
                    <stop offset="50%" stopColor="#D99B6A" />
                    <stop offset="100%" stopColor="#8C4E23" />
                  </linearGradient>
                  <linearGradient id="sweaterGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#255141" />
                    <stop offset="45%" stopColor="#173B2E" />
                    <stop offset="100%" stopColor="#0B2019" />
                  </linearGradient>
                  <linearGradient id="skinToneGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F5C088" />
                    <stop offset="35%" stopColor="#E59F60" />
                    <stop offset="75%" stopColor="#C87A38" />
                    <stop offset="100%" stopColor="#A25920" />
                  </linearGradient>
                  <linearGradient id="laptopLidGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="goldenRetrieverFur" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="35%" stopColor="#FBBF24" />
                    <stop offset="75%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#9A3412" />
                  </linearGradient>
                  <linearGradient id="bookWealthGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="60%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                  <linearGradient id="bookTravelGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#064E3B" />
                    <stop offset="60%" stopColor="#065F46" />
                    <stop offset="100%" stopColor="#022C22" />
                  </linearGradient>
                  <linearGradient id="bookInvestGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#854D0E" />
                    <stop offset="60%" stopColor="#A16207" />
                    <stop offset="100%" stopColor="#582F06" />
                  </linearGradient>
                </defs>

                {/* DESK SURFACE */}
                <rect x="0" y="360" width="1200" height="9" fill="url(#deskBevelEdge)" opacity="0.95" />
                <rect x="0" y="369" width="1200" height="121" fill="url(#deskWoodSurface)" />
                <line x1="0" y1="388" x2="1200" y2="388" stroke="#3D1E08" strokeWidth="1.2" opacity="0.45" />
                <line x1="0" y1="418" x2="1200" y2="418" stroke="#2D1504" strokeWidth="1.4" opacity="0.4" />
                <line x1="0" y1="450" x2="1200" y2="450" stroke="#1F0D02" strokeWidth="1.5" opacity="0.5" />

                {/* LEFT DESK: 3 STACKED HARDBACK BOOKS */}
                <g id="books-stack-realistic" transform="translate(180, 286)">
                  <rect x="0" y="52" width="170" height="22" rx="3.5" fill="url(#bookWealthGrad)" />
                  <line x1="8" y1="54" x2="8" y2="72" stroke="#CA8A04" strokeWidth="1.2" />
                  <text x="28" y="67" fontSize="10" fontWeight="700" fill="#FDE047" letterSpacing="1">
                    Build Wealth
                  </text>

                  <rect x="8" y="32" width="158" height="20" rx="3.5" fill="url(#bookTravelGrad)" />
                  <line x1="16" y1="34" x2="16" y2="50" stroke="#34D399" strokeWidth="1.2" />
                  <text x="36" y="46" fontSize="9.5" fontWeight="700" fill="#D1FAE5" letterSpacing="1">
                    Travel
                  </text>

                  <rect x="16" y="14" width="146" height="18" rx="3.5" fill="url(#bookInvestGrad)" />
                  <line x1="24" y1="16" x2="24" y2="30" stroke="#FDE047" strokeWidth="1.2" />
                  <text x="42" y="27" fontSize="9" fontWeight="700" fill="#FEF08A" letterSpacing="1">
                    Invest
                  </text>
                </g>

                {/* CENTER: RELAXED YOUNG INDIAN MAN IN GREEN SWEATER */}
                <g id="relaxed-man-realistic" transform="translate(540, 168)">
                  <rect x="-95" y="10" width="190" height="210" rx="46" fill="#1E293B" stroke="#334155" strokeWidth="5" />
                  <line x1="-70" y1="60" x2="70" y2="60" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="-80" y1="105" x2="80" y2="105" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="-75" y1="150" x2="75" y2="150" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

                  <path
                    d="M -56 150 C -110 115, -118 45, -50 36 C -32 34, -20 45, -14 56"
                    fill="none"
                    stroke="url(#sweaterGradient)"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M -44 38 Q -26 42 -12 52"
                    fill="none"
                    stroke="url(#skinToneGradient)"
                    strokeWidth="22"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 56 150 C 110 115, 118 45, 50 36 C 32 34, 20 45, 14 56"
                    fill="none"
                    stroke="url(#sweaterGradient)"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 44 38 Q 26 42 12 52"
                    fill="none"
                    stroke="url(#skinToneGradient)"
                    strokeWidth="22"
                    strokeLinecap="round"
                  />

                  <path
                    d="M -90 195 Q -75 120 -40 112 L 40 112 Q 75 120 90 195 Z"
                    fill="url(#sweaterGradient)"
                    stroke="#0B2019"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M -28 112 C -14 126, 14 126, 28 112 C 16 107, -16 107, -28 112 Z"
                    fill="#132E24"
                    stroke="#2B5B49"
                    strokeWidth="2"
                  />

                  <rect x="-16" y="80" width="32" height="38" rx="8" fill="url(#skinToneGradient)" />

                  <g transform="translate(0, 50)">
                    <ellipse cx="0" cy="14" rx="32" ry="38" fill="url(#skinToneGradient)" />

                    <path
                      d="M -32 6 C -34 -28, 34 -28, 32 6 C 32 -10, 18 -22, 0 -22 C -18 -22, -30 -8, -32 6 Z"
                      fill="#18181B"
                    />
                    <circle cx="-18" cy="-10" r="12" fill="#18181B" />
                    <circle cx="0" cy="-18" r="14" fill="#18181B" />
                    <circle cx="18" cy="-10" r="12" fill="#18181B" />
                    <circle cx="28" cy="2" r="8" fill="#18181B" />
                    <path d="M 12 -20 Q 28 -10 32 4" fill="none" stroke="#FDE047" strokeWidth="3" opacity="0.75" />

                    <ellipse cx="-32" cy="15" rx="5" ry="9" fill="url(#skinToneGradient)" />
                    <ellipse cx="32" cy="15" rx="5" ry="9" fill="url(#skinToneGradient)" />

                    <path d="M -20 4 Q -12 -2 -5 2" fill="none" stroke="#27272A" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 5 2 Q 12 -2 20 4" fill="none" stroke="#27272A" strokeWidth="2.8" strokeLinecap="round" />

                    <path d="M -18 13 Q -12 7 -6 12" fill="none" stroke="#27272A" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 6 12 Q 12 7 18 13" fill="none" stroke="#27272A" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="-12" cy="11" r="1" fill="#FFFFFF" />
                    <circle cx="12" cy="11" r="1" fill="#FFFFFF" />

                    <path d="M 0 10 L -1 22 L 4 23" fill="none" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" />

                    <path d="M -13 28 Q 0 38 13 28" fill="none" stroke="#7C2D12" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M -9 29 Q 0 34 9 29" fill="#FFFFFF" opacity="0.9" />

                    <path d="M -16 26 Q -10 38 0 40 Q 10 38 16 26" fill="none" stroke="#451A03" strokeWidth="1" strokeDasharray="1 2" opacity="0.45" />
                  </g>
                </g>

                {/* THE LAPTOP */}
                <g id="laptop-with-kubear-logo" transform="translate(360, 275)">
                  <ellipse cx="90" cy="100" rx="100" ry="12" fill="#1C1917" opacity="0.45" />

                  <polygon points="15,10 165,10 180,95 0,95" fill="url(#laptopLidGrad)" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="0" y1="95" x2="180" y2="95" stroke="#94A3B8" strokeWidth="2" />

                  <g transform="translate(90, 52) scale(0.65)">
                    <path
                      d="M -14 6 C -18 -8, -6 -18, 0 -18 C 6 -18, 18 -8, 14 6 C 16 12, 10 20, 0 20 C -10 20, -16 12, -14 6 Z"
                      fill="#FFFFFF"
                      opacity="0.95"
                    />
                    <circle cx="-11" cy="-14" r="5" fill="#FFFFFF" opacity="0.95" />
                    <circle cx="11" cy="-14" r="5" fill="#FFFFFF" opacity="0.95" />
                    <circle cx="0" cy="2" r="6" fill="#F8FAFC" />
                  </g>

                  <polygon points="0,95 180,95 190,102 -10,102" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                </g>

                {/* WHITE CERAMIC MUG */}
                <g id="better-money-mug" transform="translate(680, 318)">
                  <ellipse cx="28" cy="46" rx="26" ry="6" fill="#1C1917" opacity="0.35" />

                  <path
                    d="M 44 14 C 62 14, 62 38, 44 38"
                    fill="none"
                    stroke="#F8FAFC"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 44 16 C 58 16, 58 36, 44 36"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <rect x="10" y="6" width="38" height="40" rx="5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
                  <ellipse cx="29" cy="6" rx="19" ry="3.5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

                  <text x="28" y="19" fontSize="6" fontWeight="800" fill="#0F172A" textAnchor="middle" letterSpacing="0.3">
                    Better
                  </text>
                  <text x="28" y="27" fontSize="6" fontWeight="800" fill="#0F172A" textAnchor="middle" letterSpacing="0.3">
                    Money
                  </text>
                  <text x="28" y="35" fontSize="6" fontWeight="800" fill="#0F172A" textAnchor="middle" letterSpacing="0.3">
                    Brighter
                  </text>
                  <text x="28" y="42" fontSize="6" fontWeight="800" fill="#0F172A" textAnchor="middle" letterSpacing="0.3">
                    Days
                  </text>
                </g>

                {/* SMARTPHONE & OPEN NOTEBOOK WITH PEN */}
                <g id="phone-notebook" transform="translate(640, 372)">
                  <rect x="-10" y="4" width="36" height="12" rx="2.5" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
                  <rect x="-8" y="5.5" width="32" height="9" rx="1.5" fill="#1E293B" />
                  <line x1="20" y1="10" x2="20" y2="10" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

                  <g transform="translate(110, 0)">
                    <polygon points="0,0 80,0 85,14 -5,14" fill="#FEFDF9" stroke="#E2E8F0" strokeWidth="1" />
                    <line x1="40" y1="0" x2="40" y2="14" stroke="#D1D5DB" strokeWidth="1" />
                    <line x1="20" y1="6" x2="65" y2="10" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="62" y1="9.5" x2="68" y2="10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </g>

                {/* SLEEPING GOLDEN RETRIEVER DOG */}
                <g id="sleeping-golden-retriever" transform="translate(820, 270)">
                  <ellipse cx="100" cy="100" rx="90" ry="14" fill="#291204" opacity="0.45" />

                  <path
                    d="M 50 95 C 30 75, 40 40, 75 35 C 110 30, 160 45, 175 75 C 185 95, 160 100, 130 100 Z"
                    fill="url(#goldenRetrieverFur)"
                  />

                  <path
                    d="M 25 88 C 20 70, 35 52, 60 52 C 85 52, 105 68, 105 88 C 105 100, 85 102, 50 100 Z"
                    fill="url(#goldenRetrieverFur)"
                  />

                  <path
                    d="M 58 55 C 45 55, 30 68, 34 85 C 38 100, 52 95, 62 82 C 68 74, 68 55, 58 55 Z"
                    fill="#B45309"
                  />
                  <path
                    d="M 54 58 C 45 62, 36 72, 40 84 C 44 92, 50 88, 56 78 Z"
                    fill="#92400E"
                  />

                  <path
                    d="M 68 76 Q 74 81 80 77"
                    fill="none"
                    stroke="#451A03"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 88 84 C 84 80, 96 74, 104 84 C 108 88, 102 96, 94 94 Z"
                    fill="#EA580C"
                    opacity="0.3"
                  />
                  <ellipse cx="100" cy="85" rx="5" ry="4" fill="#1C1917" />
                  <ellipse cx="99" cy="84" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.6" />

                  <ellipse cx="38" cy="98" rx="16" ry="6" fill="#FBBF24" stroke="#B45309" strokeWidth="0.8" />
                  <line x1="32" y1="96" x2="32" y2="101" stroke="#92400E" strokeWidth="1" />
                  <line x1="38" y1="96" x2="38" y2="101" stroke="#92400E" strokeWidth="1" />
                  <line x1="44" y1="96" x2="44" y2="101" stroke="#92400E" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
