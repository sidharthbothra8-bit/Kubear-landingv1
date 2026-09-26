import React from "react";

// 1. House & Rent Vignette (Miniature 3D House with terracotta roof + orange rays)
export function HouseVignette() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Orange hand-drawn sketched rays above the roof */}
      <svg
        className="w-12 h-4 text-[#EA580C] -mb-1 overflow-visible select-none pointer-events-none"
        viewBox="0 0 48 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 12 12 L 6 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 24 10 L 24 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 36 12 L 42 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      {/* 3D Miniature Cottage */}
      <div className="relative w-20 h-16 sm:w-22 sm:h-18 drop-shadow-[0_12px_20px_rgba(180,83,9,0.22)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gradient-to-t from-white/90 via-amber-100/40 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
          <defs>
            {/* Roof terracotta gradient */}
            <linearGradient id="roofLeft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EA580C" />
              <stop offset="50%" stopColor="#C2410C" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>
            <linearGradient id="roofRight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            {/* Wall gradients */}
            <linearGradient id="wallFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="100%" stopColor="#F5EFE0" />
            </linearGradient>
            <linearGradient id="wallSide" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EADECB" />
              <stop offset="100%" stopColor="#D5C5AC" />
            </linearGradient>
            {/* Chimney */}
            <linearGradient id="chimneyGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9A3412" />
              <stop offset="100%" stopColor="#7C2D12" />
            </linearGradient>
          </defs>

          {/* Chimney */}
          <polygon points="65,18 73,14 73,28 65,33" fill="url(#chimneyGrad)" />
          <polygon points="65,18 73,14 70,12 62,16" fill="#EA580C" />
          {/* Chimney soft smoke */}
          <circle cx="68" cy="8" r="3" fill="#E5DFD5" opacity="0.6" />
          <circle cx="73" cy="4" r="2.2" fill="#E5DFD5" opacity="0.4" />

          {/* Main House Walls */}
          {/* Front Wall */}
          <polygon points="20,44 50,26 50,68 20,72" fill="url(#wallFront)" stroke="#E5DFD5" strokeWidth="0.8" />
          {/* Side Wall */}
          <polygon points="50,26 84,40 84,66 50,68" fill="url(#wallSide)" stroke="#D5C5AC" strokeWidth="0.8" />

          {/* Roof Overhangs */}
          {/* Front Roof slope */}
          <polygon points="14,44 48,22 50,22 17,46" fill="#F97316" />
          <polygon points="16,45 50,22 86,38 52,60" fill="none" />
          <polygon points="15,44 49,21 82,35 48,58" fill="url(#roofLeft)" />
          {/* Roof tiles lines */}
          <line x1="26" y1="38" x2="57" y2="25" stroke="#7C2D12" strokeWidth="0.9" opacity="0.5" />
          <line x1="34" y1="44" x2="65" y2="31" stroke="#7C2D12" strokeWidth="0.9" opacity="0.5" />
          <line x1="42" y1="50" x2="73" y2="37" stroke="#7C2D12" strokeWidth="0.9" opacity="0.5" />

          {/* Right Roof slope */}
          <polygon points="49,21 88,37 84,42 48,25" fill="url(#roofRight)" />

          {/* Front Door with Wood Texture & Brass Knob */}
          <polygon points="28,52 38,48 38,71 28,72" fill="#78350F" />
          <polygon points="30,54 36,51 36,70 30,71" fill="#92400E" />
          <circle cx="36" cy="61" r="1" fill="#FDE047" />

          {/* Windows with Warm Interior Glow */}
          {/* Attic window */}
          <polygon points="32,36 38,33 38,42 32,44" fill="#FEF08A" stroke="#B45309" strokeWidth="0.8" />
          <line x1="35" y1="34.5" x2="35" y2="43" stroke="#78350F" strokeWidth="0.6" />
          <line x1="32" y1="39" x2="38" y2="36.5" stroke="#78350F" strokeWidth="0.6" />

          {/* Side window */}
          <polygon points="60,46 72,51 72,59 60,54" fill="#FEF08A" stroke="#92400E" strokeWidth="0.8" />
          <line x1="66" y1="48.5" x2="66" y2="56.5" stroke="#78350F" strokeWidth="0.6" />
          <line x1="60" y1="50" x2="72" y2="55" stroke="#78350F" strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  );
}

// 2. Investments (SIP) Vignette (Potted vibrant jade plant in handcrafted terracotta & slate pot)
export function PlantVignette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-18 h-18 sm:w-20 sm:h-20 drop-shadow-[0_14px_24px_rgba(5,150,105,0.26)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-22 h-6 rounded-full bg-gradient-to-t from-white/95 via-emerald-100/50 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 90 90" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="potBody3D" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#78716C" />
              <stop offset="30%" stopColor="#A8A29E" />
              <stop offset="70%" stopColor="#57534E" />
              <stop offset="100%" stopColor="#292524" />
            </linearGradient>
            <linearGradient id="potRim3D" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D6D3D1" />
              <stop offset="50%" stopColor="#78716C" />
              <stop offset="100%" stopColor="#44403C" />
            </linearGradient>
            <linearGradient id="richSoil" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B2104" />
              <stop offset="100%" stopColor="#1C1917" />
            </linearGradient>
            <linearGradient id="leafEmerald1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="40%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="leafEmerald2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="leafEmeraldTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BBF7D0" />
              <stop offset="60%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Plant Stem */}
          <path
            d="M 45 52 Q 44 38 45 28"
            fill="none"
            stroke="#059669"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Large Glossy Leaf */}
          <path
            d="M 44 35 C 28 30, 16 40, 24 49 C 33 55, 41 42, 44 35 Z"
            fill="url(#leafEmerald1)"
            stroke="#047857"
            strokeWidth="0.9"
          />
          {/* Leaf vein & shine */}
          <path d="M 43 36 Q 32 42 25 46" fill="none" stroke="#D1FAE5" strokeWidth="1" opacity="0.85" />
          <ellipse cx="32" cy="40" rx="3.5" ry="1.2" fill="#FFFFFF" opacity="0.4" transform="rotate(-20 32 40)" />

          {/* Right Rising Lush Leaf */}
          <path
            d="M 46 29 C 48 14, 68 16, 66 31 C 64 41, 53 38, 46 29 Z"
            fill="url(#leafEmerald2)"
            stroke="#047857"
            strokeWidth="0.9"
          />
          {/* Leaf vein & shine */}
          <path d="M 47 29 Q 55 24 63 26" fill="none" stroke="#ECFDF5" strokeWidth="1" opacity="0.85" />
          <ellipse cx="55" cy="24" rx="4" ry="1.5" fill="#FFFFFF" opacity="0.45" transform="rotate(25 55 24)" />

          {/* Center Emerging Baby Sprout / Crown */}
          <path
            d="M 45 27 C 42 16, 48 16, 45 27 Z"
            fill="url(#leafEmeraldTop)"
            stroke="#059669"
            strokeWidth="0.8"
          />
          <path
            d="M 45 27 C 40 19, 44 14, 45 27 Z"
            fill="#86EFAC"
          />

          {/* Ceramic Pot Base */}
          <ellipse cx="45" cy="53" rx="23" ry="8" fill="url(#richSoil)" />
          <path
            d="M 22 53 L 29 80 C 29 84, 61 84, 61 80 L 68 53 Z"
            fill="url(#potBody3D)"
            stroke="#44403C"
            strokeWidth="1"
          />
          {/* Pot Rim with Beveled 3D look */}
          <ellipse cx="45" cy="52" rx="24" ry="7.5" fill="url(#potRim3D)" stroke="#57534E" strokeWidth="0.9" />
          <ellipse cx="45" cy="52.5" rx="21" ry="6" fill="url(#richSoil)" />

          {/* Terracotta Decorative Stripe Band */}
          <path
            d="M 25 61 L 27 67 C 36 71, 54 71, 63 67 L 65 61 C 55 65, 35 65, 25 61 Z"
            fill="#EA580C"
            opacity="0.85"
          />

          {/* Dew drop highlight on leaf */}
          <circle cx="59" cy="22" r="1.8" fill="#FFFFFF" opacity="0.95" />
          <circle cx="58.5" cy="21.5" r="0.6" fill="#D1FAE5" />
        </svg>
      </div>
    </div>
  );
}

// 3. Travel & Experiences Vignette (Jet airliner soaring over boarding pass)
export function TravelVignette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-22 h-16 sm:w-26 sm:h-18 drop-shadow-[0_14px_24px_rgba(234,88,12,0.22)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-gradient-to-t from-white/95 via-orange-100/40 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 110 75" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="ticketGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F3F4F6" />
            </linearGradient>
            <linearGradient id="planeBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="planeTail" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>

          {/* Realistic Flight Boarding Pass / Ticket underneath */}
          <g transform="rotate(8 55 45)">
            <rect
              x="20"
              y="38"
              width="68"
              height="28"
              rx="4"
              fill="url(#ticketGrad)"
              stroke="#CBD5E1"
              strokeWidth="0.9"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"
            />
            {/* Boarding pass accent header bar */}
            <rect x="20" y="38" width="68" height="6" rx="3" fill="#EA580C" />
            {/* Cutout notch */}
            <circle cx="68" cy="38" r="3" fill="#FAF8F5" />
            <circle cx="68" cy="66" r="3" fill="#FAF8F5" />
            <line x1="68" y1="41" x2="68" y2="63" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="2 2" />
            {/* Flight text micro details */}
            <text x="24" y="50" fontSize="5" fontWeight="bold" fill="#0F172A">DEL → GOA</text>
            <text x="24" y="58" fontSize="3.8" fill="#64748B">GATE 04 · SEAT 12A</text>
            {/* Barcode lines */}
            <rect x="73" y="47" width="1.2" height="13" fill="#1E293B" />
            <rect x="76" y="47" width="2" height="13" fill="#1E293B" />
            <rect x="79" y="47" width="0.8" height="13" fill="#1E293B" />
            <rect x="81" y="47" width="1.6" height="13" fill="#1E293B" />
          </g>

          {/* Passenger Jet Airliner Soaring Diagonally */}
          <g transform="translate(18, 2) rotate(-14 45 30)">
            {/* Shadow under plane */}
            <ellipse cx="44" cy="38" rx="20" ry="4" fill="#000000" opacity="0.12" />

            {/* Left Wing */}
            <polygon points="40,24 16,38 24,40 45,28" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.6" />
            {/* Jet Engine on Left Wing */}
            <rect x="28" y="32" width="9" height="4.5" rx="2" fill="#475569" />

            {/* Main Fuselage */}
            <path
              d="M 12 25 Q 40 22 68 20 Q 76 21 78 24 Q 76 27 68 28 Q 38 29 12 27 Z"
              fill="url(#planeBody)"
              stroke="#CBD5E1"
              strokeWidth="0.8"
            />
            {/* Cockpit Window */}
            <path d="M 72 22 Q 75 23 76 24 L 73 24 Z" fill="#0F172A" />
            {/* Passenger Cabin Windows */}
            <circle cx="34" cy="24" r="1" fill="#1E293B" />
            <circle cx="40" cy="24" r="1" fill="#1E293B" />
            <circle cx="46" cy="24" r="1" fill="#1E293B" />
            <circle cx="52" cy="24" r="1" fill="#1E293B" />
            <circle cx="58" cy="24" r="1" fill="#1E293B" />
            <circle cx="64" cy="24" r="1" fill="#1E293B" />

            {/* Vertical Tail Fin */}
            <polygon points="12,25 6,10 16,10 24,25" fill="url(#planeTail)" stroke="#1D4ED8" strokeWidth="0.6" />

            {/* Right Wing (Foreground) */}
            <polygon points="44,27 34,48 42,48 54,27" fill="url(#planeBody)" stroke="#94A3B8" strokeWidth="0.7" />
            {/* Jet Engine on Right Wing */}
            <rect x="38" y="38" width="9" height="5" rx="2.5" fill="#334155" stroke="#1E293B" strokeWidth="0.6" />
            <ellipse cx="47" cy="40.5" rx="1.5" ry="2.2" fill="#0F172A" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// 4. Family Support Vignette (Exquisite 3D Handcrafted Wooden & Gold Frame with Warm Indian Parents Portrait)
export function FamilyVignette() {
  return (
    <div className="relative flex items-center">
      {/* 3D Wooden Picture Frame */}
      <div className="relative w-18 h-20 sm:w-20 sm:h-22 drop-shadow-[0_14px_24px_rgba(180,83,9,0.28)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gradient-to-t from-white/95 via-amber-100/50 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 84 94" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="frameWoodRich" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A16207" />
              <stop offset="35%" stopColor="#78350F" />
              <stop offset="70%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#291002" />
            </linearGradient>
            <linearGradient id="frameGoldBevel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="80%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="photoWarmAmbient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="45%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FDBA74" />
            </linearGradient>
            <radialGradient id="sunGlowInPhoto" cx="50%" cy="30%" r="45%">
              <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wooden Frame Outer Layer with shadow */}
          <rect
            x="6"
            y="6"
            width="72"
            height="82"
            rx="6"
            fill="url(#frameWoodRich)"
            stroke="#92400E"
            strokeWidth="1.2"
          />
          {/* Inner Golden Ornate Filigree Bevel */}
          <rect
            x="11"
            y="11"
            width="62"
            height="72"
            rx="4"
            fill="url(#frameGoldBevel)"
            stroke="#D97706"
            strokeWidth="0.8"
          />
          {/* Deep inner shadow border */}
          <rect
            x="14"
            y="14"
            width="56"
            height="66"
            rx="2.5"
            fill="#451A03"
          />

          {/* Portrait Canvas */}
          <g>
            <rect x="15.5" y="15.5" width="53" height="63" rx="2" fill="url(#photoWarmAmbient)" />
            {/* Ambient golden sun aura */}
            <circle cx="42" cy="36" r="26" fill="url(#sunGlowInPhoto)" />

            {/* Realistic Detailed Illustration: Loving Indian Parents */}
            {/* Father (Left) */}
            <g>
              {/* Shoulders / Kurta with rich emerald tone and embroidery collar */}
              <path d="M 18 68 C 20 54, 27 50, 36 50 C 44 50, 48 54, 49 68 Z" fill="#065F46" />
              {/* Kurta placket line */}
              <line x1="36" y1="50" x2="36" y2="68" stroke="#047857" strokeWidth="1" />
              <circle cx="36" cy="54" r="0.8" fill="#FDE047" />
              <circle cx="36" cy="58" r="0.8" fill="#FDE047" />
              {/* Neck */}
              <rect x="33" y="44" width="7" height="8" rx="2" fill="#D97706" />
              {/* Head / Face */}
              <ellipse cx="36.5" cy="38" rx="8" ry="9.5" fill="#F59E0B" />
              {/* Hair (Sleek dark styled hair) */}
              <path d="M 28 35 C 28 26, 45 26, 45 35 C 45 33, 43 27, 36.5 27 C 30 27, 28 32, 28 35 Z" fill="#1C1917" />
              {/* Facial features: Warm smile, glasses or neat eyes */}
              <path d="M 32 37 Q 34 39 36 37" fill="none" stroke="#78350F" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M 38 37 Q 40 39 42 37" fill="none" stroke="#78350F" strokeWidth="0.8" strokeLinecap="round" />
              {/* Gentle smile */}
              <path d="M 34 43 Q 36.5 45.5 39 43" fill="none" stroke="#9A3412" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Mother (Right - leaning gently in with maroon/gold saree) */}
            <g>
              {/* Saree drape / Pallu with gold zari border */}
              <path d="M 39 68 C 42 54, 52 50, 61 54 C 67 57, 68 64, 68 68 Z" fill="#991B1B" />
              {/* Gold Zari Border on Saree */}
              <path d="M 43 68 Q 48 53 58 53" fill="none" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" />
              {/* Neck */}
              <rect x="48" y="45" width="6.5" height="8" rx="2" fill="#EAB308" />
              {/* Gold Necklace */}
              <path d="M 47 50 Q 51 53 55 50" fill="none" stroke="#FDE047" strokeWidth="1.2" />
              {/* Head / Face */}
              <ellipse cx="51" cy="39" rx="7.5" ry="9" fill="#FBBF24" />
              {/* Hair (Neat center-part with bun) */}
              <path d="M 43 36 C 43 28, 59 28, 59 36 C 58 31, 52 28, 51 28 C 48 28, 44 31, 43 36 Z" fill="#18181B" />
              {/* Red Bindi */}
              <circle cx="51" cy="35" r="1.1" fill="#DC2626" />
              {/* Kind eyes */}
              <path d="M 47 38 Q 48.5 39.5 50 38" fill="none" stroke="#78350F" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M 52 38 Q 53.5 39.5 55 38" fill="none" stroke="#78350F" strokeWidth="0.8" strokeLinecap="round" />
              {/* Gentle smile */}
              <path d="M 48.5 44 Q 51 46 53.5 44" fill="none" stroke="#B91C1C" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Specular Diagonal Glass Reflection Shine */}
            <polygon points="15.5,15.5 42,15.5 15.5,42" fill="#FFFFFF" opacity="0.32" />
            <polygon points="28,15.5 54,15.5 15.5,54 15.5,42" fill="#FFFFFF" opacity="0.14" />
          </g>

          {/* Golden Corner Details on Frame */}
          <circle cx="12" cy="12" r="1.5" fill="#FEF08A" />
          <circle cx="72" cy="12" r="1.5" fill="#FEF08A" />
          <circle cx="12" cy="82" r="1.5" fill="#FEF08A" />
          <circle cx="72" cy="82" r="1.5" fill="#FEF08A" />
        </svg>
      </div>

      {/* Hand-drawn Orange Sketched Rays to the Right */}
      <svg
        className="w-4.5 h-10 text-[#EA580C] ml-1 overflow-visible select-none pointer-events-none"
        viewBox="0 0 16 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 2 10 L 13 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 3 20 L 15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 2 30 L 13 36" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// 5. Insurance & Emergency Vignette (3D Jewel Shield in Deep Marine Sapphire & Emerald with Chrome Bevel)
export function ShieldVignette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-16 h-18 sm:w-18 sm:h-20 drop-shadow-[0_14px_24px_rgba(15,23,42,0.3)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-22 h-6 rounded-full bg-gradient-to-t from-white/95 via-sky-100/50 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 76 86" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="shieldChromeOuter" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="75%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="shieldJewelBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="35%" stopColor="#0E7490" />
              <stop offset="70%" stopColor="#064E3B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
            <linearGradient id="crossBevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <radialGradient id="shieldCenterGlow" cx="50%" cy="40%" r="45%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Chrome / Silver Beveled Outer Rim */}
          <path
            d="M 38 6 L 68 17 C 68 52, 52 74, 38 81 C 24 74, 8 52, 8 17 Z"
            fill="url(#shieldChromeOuter)"
            stroke="#94A3B8"
            strokeWidth="0.8"
          />

          {/* Deep Navy/Teal Jewel Shield Core */}
          <path
            d="M 38 10 L 64 20 C 64 50, 50 69, 38 76 C 26 69, 12 50, 12 20 Z"
            fill="url(#shieldJewelBody)"
          />

          {/* Center luminous aura */}
          <ellipse cx="38" cy="40" rx="20" ry="24" fill="url(#shieldCenterGlow)" />

          {/* Diagonal Glass Reflection Sheen */}
          <path
            d="M 38 10 L 64 20 C 64 38, 55 52, 38 60 Z"
            fill="#FFFFFF"
            opacity="0.22"
          />

          {/* Glowing Pure White Cross */}
          {/* Subtle cross drop shadow */}
          <rect
            x="32"
            y="26"
            width="12"
            height="30"
            rx="3"
            fill="#0F172A"
            opacity="0.3"
          />
          <rect
            x="23"
            y="35"
            width="30"
            height="12"
            rx="3"
            fill="#0F172A"
            opacity="0.3"
          />

          {/* Cross Vertical */}
          <rect
            x="33"
            y="25"
            width="10"
            height="29"
            rx="2.5"
            fill="url(#crossBevel)"
            stroke="#E2E8F0"
            strokeWidth="0.6"
          />
          {/* Cross Horizontal */}
          <rect
            x="23.5"
            y="34.5"
            width="29"
            height="10"
            rx="2.5"
            fill="url(#crossBevel)"
            stroke="#E2E8F0"
            strokeWidth="0.6"
          />

          {/* Inner Cross Highlight */}
          <line x1="38" y1="27" x2="38" y2="52" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="25" y1="39.5" x2="51" y2="39.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// 6. EMI & Loans Vignette (Two realistic fanned credit cards: obsidian black + white/orange)
export function CardsVignette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-20 h-16 sm:w-24 sm:h-18 drop-shadow-[0_12px_22px_rgba(15,23,42,0.2)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-gradient-to-t from-white/90 via-slate-100/40 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 94 72" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="blackCard" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="whiteCard" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="chipGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>

          {/* Background Card: White card with orange wave */}
          <g transform="rotate(14 47 36)">
            <rect
              x="26"
              y="12"
              width="58"
              height="36"
              rx="4"
              fill="url(#whiteCard)"
              stroke="#CBD5E1"
              strokeWidth="0.8"
            />
            {/* Orange graphic wave */}
            <path d="M 52 12 Q 62 25 84 30 L 84 12 Z" fill="#EA580C" opacity="0.85" />
            <circle cx="74" cy="38" r="3.5" fill="#EF4444" opacity="0.8" />
            <circle cx="78" cy="38" r="3.5" fill="#F59E0B" opacity="0.8" />
          </g>

          {/* Foreground Card: Matte Obsidian Black Metal Card */}
          <g transform="rotate(-6 42 38)">
            <rect
              x="12"
              y="18"
              width="62"
              height="38"
              rx="4.5"
              fill="url(#blackCard)"
              stroke="#64748B"
              strokeWidth="0.8"
              filter="drop-shadow(0 8px 14px rgba(0,0,0,0.35))"
            />
            {/* Subtle frosted glass specular sheen line */}
            <path d="M 12 18 L 38 18 L 12 44 Z" fill="#FFFFFF" opacity="0.08" />

            {/* Golden EMV Chip with intricate circuit pattern */}
            <rect x="20" y="27" width="9.5" height="7.5" rx="1.5" fill="url(#chipGold)" stroke="#A16207" strokeWidth="0.5" />
            <line x1="24.8" y1="27" x2="24.8" y2="34.5" stroke="#78350F" strokeWidth="0.5" />
            <line x1="20" y1="30.8" x2="29.5" y2="30.8" stroke="#78350F" strokeWidth="0.5" />
            <rect x="22.5" y="28.5" width="4.5" height="4.5" rx="0.5" fill="none" stroke="#78350F" strokeWidth="0.4" />

            {/* Contactless waves in metallic silver */}
            <path d="M 33 29 Q 35 31 33 33" fill="none" stroke="#CBD5E1" strokeWidth="0.9" strokeLinecap="round" />
            <path d="M 35.5 27 Q 38.5 31 35.5 35" fill="none" stroke="#CBD5E1" strokeWidth="0.9" strokeLinecap="round" />

            {/* Embossed Card Digits */}
            <text x="20" y="44" fontSize="4.8" fontWeight="700" fill="#F8FAFC" letterSpacing="0.8" fontFamily="monospace">•••• 8924</text>
            <text x="20" y="50" fontSize="3.2" fill="#94A3B8" fontFamily="monospace">09/28</text>

            {/* Mastercard / Premium Dual Circles */}
            <circle cx="61" cy="47" r="3.8" fill="#EF4444" opacity="0.9" />
            <circle cx="66" cy="47" r="3.8" fill="#F59E0B" opacity="0.9" />
            <path d="M 63.5 44.5 A 3.8 3.8 0 0 1 63.5 49.5 A 3.8 3.8 0 0 1 63.5 44.5 Z" fill="#F97316" opacity="0.95" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// 7. Everyday Spending Vignette (Kraft Shopping Bag + Takeaway Coffee Cup + Orange Rays)
export function ShoppingVignette() {
  return (
    <div className="relative flex items-center">
      {/* Orange Hand-drawn Sketched Rays to the Left */}
      <svg
        className="w-4 h-10 text-[#EA580C] mr-0.5 overflow-visible select-none pointer-events-none"
        viewBox="0 0 16 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 14 10 L 4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 13 20 L 2 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 14 30 L 4 36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      {/* Kraft Bag + Coffee Cup */}
      <div className="relative w-18 h-18 sm:w-20 sm:h-20 drop-shadow-[0_14px_24px_rgba(180,83,9,0.26)]">
        {/* Soft glowing cloud pedestal */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gradient-to-t from-white/95 via-amber-100/50 to-transparent blur-xs pointer-events-none -z-10" />

        <svg viewBox="0 0 88 88" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="kraftFrontRich" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="40%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="kraftSideRich" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="cupGradPorcelain" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="cupSleeve" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Brown Kraft Paper Bag */}
          {/* Braided Twisted Handles */}
          <path
            d="M 28 32 C 28 16, 42 16, 42 32"
            fill="none"
            stroke="#78350F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 30 32 C 30 18, 40 18, 40 32"
            fill="none"
            stroke="#92400E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Bag Body */}
          <polygon points="18,32 48,32 46,74 16,74" fill="url(#kraftFrontRich)" stroke="#78350F" strokeWidth="0.9" />
          {/* Side fold */}
          <polygon points="48,32 58,25 56,66 46,74" fill="url(#kraftSideRich)" stroke="#451A03" strokeWidth="0.9" />
          {/* Top fold creasing with paper crispness */}
          <polygon points="18,32 48,32 49,36 17,36" fill="#FDE68A" opacity="0.75" />
          {/* Front bag pinch crease */}
          <line x1="33" y1="36" x2="31" y2="74" stroke="#78350F" strokeWidth="0.8" opacity="0.6" />

          {/* Takeaway Coffee Cup sitting next to bag */}
          {/* Gentle steam curls */}
          <path d="M 57 38 Q 55 33 57 28 Q 59 23 57 19" fill="none" stroke="#D97706" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <path d="M 62 36 Q 64 32 62 27" fill="none" stroke="#D97706" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

          {/* Cup body */}
          <polygon points="50,48 70,46 66,74 54,74" fill="url(#cupGradPorcelain)" stroke="#94A3B8" strokeWidth="0.8" />
          {/* Corrugated kraft heat sleeve */}
          <polygon points="51,54 69,52 67,65 53,66" fill="url(#cupSleeve)" stroke="#78350F" strokeWidth="0.7" />
          {/* Sleeve texture lines */}
          <line x1="56" y1="53.5" x2="55" y2="65.5" stroke="#78350F" strokeWidth="0.6" opacity="0.6" />
          <line x1="60" y1="53" x2="59" y2="65" stroke="#78350F" strokeWidth="0.6" opacity="0.6" />
          <line x1="64" y1="52.5" x2="63" y2="64.5" stroke="#78350F" strokeWidth="0.6" opacity="0.6" />

          {/* Black ergonomic sip lid */}
          <ellipse cx="60" cy="46" rx="10.5" ry="3.2" fill="#1E293B" stroke="#0F172A" strokeWidth="0.6" />
          <rect x="53" y="43.5" width="14" height="3" rx="1.2" fill="#334155" />
          <ellipse cx="60" cy="44.5" rx="2" ry="0.8" fill="#0F172A" />
        </svg>
      </div>
    </div>
  );
}
