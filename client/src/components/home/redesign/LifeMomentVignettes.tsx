import React from "react";

// ============================================================================
// VIGNETTE 1: FIRST SALARY
// Ultra-sleek MacBook Pro with live glowing Kubear salary allocation UI, artisan latte
// with rising steam wisps, leather Moleskine journal, brass pen, warm sunbeam drift
// ============================================================================
export function FirstSalaryVignette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] select-none group shadow-inner ${className}`}>
      <svg 
        viewBox="0 0 480 360" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes fs_steam_rise_1 {
              0% { transform: translateY(0) scaleX(1); opacity: 0; }
              25% { opacity: 0.65; }
              60% { transform: translateY(-18px) scaleX(1.3) translateX(3px); opacity: 0.45; }
              100% { transform: translateY(-34px) scaleX(1.7) translateX(7px); opacity: 0; }
            }
            @keyframes fs_steam_rise_2 {
              0% { transform: translateY(0) scaleX(1); opacity: 0; }
              30% { opacity: 0.55; }
              70% { transform: translateY(-22px) scaleX(1.4) translateX(-4px); opacity: 0.35; }
              100% { transform: translateY(-40px) scaleX(1.8) translateX(-8px); opacity: 0; }
            }
            @keyframes fs_sun_breathe {
              0%, 100% { opacity: 0.72; }
              50% { opacity: 0.92; }
            }
            @keyframes fs_pulse_dot {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.35; transform: scale(1.4); }
            }
            @keyframes fs_screen_sheen {
              0%, 100% { opacity: 0.03; transform: translateX(-10px); }
              50% { opacity: 0.08; transform: translateX(15px); }
            }
            .fs-steam-1 {
              animation: fs_steam_rise_1 3.4s ease-in-out infinite;
              transform-origin: 404px 212px;
            }
            .fs-steam-2 {
              animation: fs_steam_rise_2 4.1s ease-in-out 1.2s infinite;
              transform-origin: 412px 210px;
            }
            .fs-sunbeam {
              animation: fs_sun_breathe 6s ease-in-out infinite;
            }
            .fs-pulse {
              animation: fs_pulse_dot 2s ease-in-out infinite;
              transform-origin: 258px 131px;
            }
            .fs-sheen {
              animation: fs_screen_sheen 8s ease-in-out infinite;
            }
          `}</style>

          {/* Natural ambient room background */}
          <linearGradient id="fs_bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#F2ECE1" />
            <stop offset="100%" stopColor="#E2D7C5" />
          </linearGradient>

          {/* Warm diagonal morning sunlight beam */}
          <linearGradient id="fs_sunbeam" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#FFF7E6" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#FFECC7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
          </linearGradient>

          {/* Rich Scandinavian Oak Table Surface */}
          <linearGradient id="fs_wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFBF96" />
            <stop offset="25%" stopColor="#CFAB7E" />
            <stop offset="70%" stopColor="#BF9664" />
            <stop offset="100%" stopColor="#A77E4D" />
          </linearGradient>

          <linearGradient id="fs_wood_edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F6E4CD" />
            <stop offset="50%" stopColor="#FFF2E0" />
            <stop offset="100%" stopColor="#EBD3B5" />
          </linearGradient>

          {/* Space Gray Laptop Anodized Aluminum */}
          <linearGradient id="fs_metal_base" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A8ADB8" />
            <stop offset="35%" stopColor="#CCD1DB" />
            <stop offset="70%" stopColor="#B4B9C4" />
            <stop offset="100%" stopColor="#8E939E" />
          </linearGradient>

          {/* Glowing Retina Display */}
          <linearGradient id="fs_screen_glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E232E" />
            <stop offset="100%" stopColor="#111317" />
          </linearGradient>

          {/* Chart orange glow */}
          <linearGradient id="fs_chart_grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F06535" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F06535" stopOpacity="0.05" />
          </linearGradient>

          {/* Ceramic mug gradient */}
          <linearGradient id="fs_mug_ceramic" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ECE5D8" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F4EDE2" />
            <stop offset="100%" stopColor="#DDD3C1" />
          </linearGradient>

          {/* Coffee Crema */}
          <radialGradient id="fs_crema" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#C99464" />
            <stop offset="60%" stopColor="#8F582D" />
            <stop offset="100%" stopColor="#5E3516" />
          </radialGradient>

          {/* Cognac Leather Journal */}
          <linearGradient id="fs_leather" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8622F" />
            <stop offset="50%" stopColor="#9C4B1B" />
            <stop offset="100%" stopColor="#75320F" />
          </linearGradient>

          {/* Polished Brass Pen */}
          <linearGradient id="fs_brass" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D99B26" />
            <stop offset="40%" stopColor="#FDE68A" />
            <stop offset="70%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>

          <filter id="fs_soft_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4B331E" floodOpacity="0.22" />
          </filter>
          <filter id="fs_laptop_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#362414" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 1. Warm Architectural Wall Background */}
        <rect width="480" height="360" fill="url(#fs_bg)" />

        {/* Subtle Window Blind Shadows on Wall */}
        <path d="M 60 -20 L 260 220 L 230 220 L 30 -20 Z" fill="#000" opacity="0.025" />
        <path d="M 120 -20 L 320 220 L 290 220 L 90 -20 Z" fill="#000" opacity="0.025" />
        <path d="M 180 -20 L 380 220 L 350 220 L 150 -20 Z" fill="#000" opacity="0.025" />

        {/* 2. Living Sunbeam Angle */}
        <polygon points="110,0 290,0 440,240 210,240" fill="url(#fs_sunbeam)" className="fs-sunbeam" />

        {/* 3. Solid Oak Desk Surface */}
        <polygon points="0,205 480,195 480,360 0,360" fill="url(#fs_wood)" />
        <line x1="0" y1="205" x2="480" y2="195" stroke="url(#fs_wood_edge)" strokeWidth="2.5" />
        <line x1="0" y1="230" x2="480" y2="220" stroke="#B08655" strokeWidth="1" opacity="0.35" />
        <line x1="0" y1="265" x2="480" y2="255" stroke="#9C7343" strokeWidth="1.2" opacity="0.3" />
        <line x1="0" y1="310" x2="480" y2="300" stroke="#8C6335" strokeWidth="1" opacity="0.25" />

        {/* 4. Left: Moleskine Leather Journal with Brass Pen */}
        <g filter="url(#fs_soft_shadow)">
          <polygon points="40,245 125,230 145,295 55,315" fill="url(#fs_leather)" />
          <polygon points="125,230 131,234 151,299 145,295" fill="#FAF6ED" />
          <path d="M 90 236 L 96 322 L 102 316 L 108 322 L 102 234 Z" fill="#F59E0B" opacity="0.9" />
          <circle cx="85" cy="275" r="9" fill="#D97706" opacity="0.85" />
          <text x="85" y="278.5" fontSize="7" fontWeight="bold" fill="#FEF3C7" textAnchor="middle" fontFamily="sans-serif">K</text>
          <polygon points="135,248 140,246 160,312 155,314" fill="url(#fs_brass)" />
          <line x1="138" y1="255" x2="142" y2="270" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* 5. Centerpiece: Sleek MacBook Pro */}
        <g filter="url(#fs_laptop_shadow)">
          <polygon points="160,285 365,270 388,295 135,312" fill="url(#fs_metal_base)" />
          <polygon points="135,312 388,295 386,300 137,317" fill="#7C828D" />
          <polygon points="230,290 295,285 299,297 233,303" fill="#DFE2E8" stroke="#B0B5C0" strokeWidth="0.8" />

          {/* Screen Upper Lid */}
          <polygon points="168,115 352,102 368,270 156,285" fill="#0F1115" rx="6" />
          <polygon points="175,123 345,111 360,265 165,277" fill="url(#fs_screen_glow)" />

          {/* Screen Glass Light Sheen */}
          <polygon points="175,123 270,116 220,273 165,277" fill="#FFF" className="fs-sheen" />

          {/* KUBEAR UI DISPLAY ON SCREEN */}
          <line x1="184" y1="138" x2="338" y2="127" stroke="#2D333F" strokeWidth="1" />
          <circle cx="192" cy="133" r="3" fill="#F06535" />
          <rect x="200" y="130" width="35" height="5" rx="2" fill="#64748B" opacity="0.8" />
          
          {/* Live Notification Pill */}
          <rect x="250" y="125" width="85" height="13" rx="4" fill="#064E3B" stroke="#059669" strokeWidth="0.8" />
          <circle cx="258" cy="131" r="2.4" fill="#34D399" className="fs-pulse" />
          <text x="264" y="134" fontSize="6.5" fontWeight="bold" fill="#A7F3D0" fontFamily="monospace">₹85,000 CREDITED</text>

          {/* Big Cashflow Metric */}
          <text x="186" y="157" fontSize="13" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">₹85,000</text>
          <text x="186" y="166" fontSize="6" fill="#94A3B8" fontFamily="sans-serif">Monthly Inflow · 100% Allocated</text>

          {/* 3-Bucket Smart Allocation Bars */}
          <rect x="186" y="174" width="70" height="4.5" rx="2" fill="#242B35" />
          <rect x="186" y="174" width="35" height="4.5" rx="2" fill="#F06535" />
          <text x="186" y="184" fontSize="5.5" fill="#E2E8F0" fontFamily="sans-serif">Essentials (50%) · ₹42,500</text>

          <rect x="186" y="190" width="70" height="4.5" rx="2" fill="#242B35" />
          <rect x="186" y="190" width="14" height="4.5" rx="2" fill="#10B981" />
          <text x="186" y="200" fontSize="5.5" fill="#A7F3D0" fontFamily="sans-serif">Auto-SIP (20%) · ₹17,000</text>

          <rect x="186" y="206" width="70" height="4.5" rx="2" fill="#242B35" />
          <rect x="186" y="206" width="21" height="4.5" rx="2" fill="#F59E0B" />
          <text x="186" y="216" fontSize="5.5" fill="#FCD34D" fontFamily="sans-serif">Guilt-Free (30%) · ₹25,500</text>

          {/* Mini Compounding Wealth Chart on Right Side */}
          <path d="M 270 205 Q 295 195 315 175 T 345 150 L 345 220 L 270 220 Z" fill="url(#fs_chart_grad)" />
          <path d="M 270 205 Q 295 195 315 175 T 345 150" fill="none" stroke="#F06535" strokeWidth="2" strokeLinecap="round" />
          <circle cx="345" cy="150" r="3.5" fill="#F06535" />
          <circle cx="345" cy="150" r="1.8" fill="#FFF" />
          <text x="280" y="230" fontSize="5" fill="#94A3B8" fontFamily="sans-serif">5-Yr Trajectory: ₹14.8L</text>
        </g>

        {/* 6. Foreground Right: Artisan Ceramic Latte Mug with Animated Rising Steam */}
        <g filter="url(#fs_soft_shadow)">
          <ellipse cx="410" cy="275" rx="34" ry="12" fill="#4B331E" opacity="0.32" />
          <path d="M 432 235 C 452 235, 452 265, 430 265" stroke="url(#fs_mug_ceramic)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 382 225 L 434 225 C 435 258, 430 275, 408 275 C 386 275, 381 258, 382 225 Z" fill="url(#fs_mug_ceramic)" />
          <path d="M 383 260 C 390 272, 426 272, 433 260 L 432 270 C 425 277, 391 277, 384 270 Z" fill="#D97706" opacity="0.85" />
          <ellipse cx="408" cy="225" rx="26" ry="8" fill="#FFF" />
          <ellipse cx="408" cy="225" rx="23" ry="6.5" fill="url(#fs_crema)" />

          {/* Latte Art Foam */}
          <path d="M 408 221 C 404 224, 404 227, 408 229 C 412 227, 412 224, 408 221 Z" fill="#FFF" opacity="0.9" />
          <circle cx="408" cy="223" r="1.5" fill="#FFF" opacity="0.9" />

          {/* Animated Rising Coffee Steam Wisps */}
          <path 
            className="fs-steam-1" 
            d="M 404 212 C 398 198, 408 188, 402 174" 
            stroke="#FFF" 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            className="fs-steam-2" 
            d="M 412 210 C 418 196, 408 185, 416 170" 
            stroke="#FFF" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            fill="none" 
          />
        </g>

        {/* 7. Background Left: Desk Succulent */}
        <g>
          <ellipse cx="85" cy="215" rx="20" ry="7" fill="#4B331E" opacity="0.25" />
          <polygon points="70,185 100,185 95,215 75,215" fill="#D97706" />
          <ellipse cx="85" cy="185" rx="15" ry="4" fill="#B45309" />
          <path d="M 85 185 C 75 160, 60 168, 62 178 C 72 181, 80 184, 85 185 Z" fill="#4D7C0F" />
          <path d="M 85 185 C 95 155, 110 162, 108 174 C 98 179, 90 183, 85 185 Z" fill="#65A30D" />
          <path d="M 85 185 C 85 150, 95 150, 85 165 Z" fill="#84CC16" />
        </g>

        {/* Floating Contextual Glass Badge */}
        <g className="transition-transform duration-300 group-hover:translate-y-[-2px]">
          <rect x="290" y="24" width="168" height="34" rx="8" fill="#16191E" fillOpacity="0.88" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" filter="url(#fs_soft_shadow)" />
          <circle cx="306" cy="41" r="4.5" fill="#10B981" />
          <circle cx="306" cy="41" r="2" fill="#ECFDF5" />
          <text x="318" y="37" fontSize="9" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">First Paycheck Credited</text>
          <text x="318" y="49" fontSize="8" fill="#94A3B8" fontFamily="sans-serif">₹85,000 · Smart 50/30/20 Plan</text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// VIGNETTE 2: MOVING OUT
// Sunlit contemporary loft apartment, swaying monstera leaves in window breeze,
// kraft packing boxes, vintage leather duffel, brass keys with gleam, skyline
// ============================================================================
export function MovingOutVignette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] select-none group shadow-inner ${className}`}>
      <svg 
        viewBox="0 0 480 360" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes mo_leaf_breeze_1 {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(3.2deg); }
            }
            @keyframes mo_leaf_breeze_2 {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-2.8deg); }
            }
            @keyframes mo_floor_sun {
              0%, 100% { opacity: 0.32; }
              50% { opacity: 0.48; }
            }
            @keyframes mo_tag_sway {
              0%, 100% { transform: rotate(22deg); }
              50% { transform: rotate(26deg); }
            }
            @keyframes mo_key_sparkle {
              0%, 65%, 100% { opacity: 0; transform: scale(0.3); }
              75% { opacity: 1; transform: scale(1.3); }
              85% { opacity: 0.2; transform: scale(0.7); }
            }
            .mo-leaf-1 {
              animation: mo_leaf_breeze_1 5s ease-in-out infinite;
              transform-origin: 435px 200px;
            }
            .mo-leaf-2 {
              animation: mo_leaf_breeze_2 6.2s ease-in-out 1s infinite;
              transform-origin: 435px 200px;
            }
            .mo-sunlight {
              animation: mo_floor_sun 7s ease-in-out infinite;
            }
            .mo-tag {
              animation: mo_tag_sway 4s ease-in-out infinite;
              transform-origin: 355px 225px;
            }
            .mo-sparkle {
              animation: mo_key_sparkle 4s ease-in-out 1s infinite;
              transform-origin: 245px 325px;
            }
          `}</style>

          <linearGradient id="mo_sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCE8F0" />
            <stop offset="55%" stopColor="#F8EDE2" />
            <stop offset="100%" stopColor="#F9E2CF" />
          </linearGradient>

          <linearGradient id="mo_floor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#DFD2BD" />
            <stop offset="50%" stopColor="#D1C1A7" />
            <stop offset="100%" stopColor="#BEAB8E" />
          </linearGradient>

          <linearGradient id="mo_box_front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D5A973" />
            <stop offset="100%" stopColor="#BD8F56" />
          </linearGradient>
          <linearGradient id="mo_box_side" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B68852" />
            <stop offset="100%" stopColor="#9B6F3B" />
          </linearGradient>
          <linearGradient id="mo_box_top" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5C396" />
            <stop offset="100%" stopColor="#D5AC7A" />
          </linearGradient>

          <linearGradient id="mo_leather_duffel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="50%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#713208" />
          </linearGradient>

          <linearGradient id="mo_brass_keys" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <filter id="mo_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#3F2916" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* 1. Large High-Loft Industrial Window & Skyline */}
        <rect width="480" height="240" fill="url(#mo_sky)" />

        {/* City Skyline */}
        <polygon points="50,150 90,150 90,220 50,220" fill="#CBD5E1" opacity="0.65" />
        <polygon points="90,120 135,120 135,220 90,220" fill="#B7C4D5" opacity="0.6" />
        <polygon points="112,85 90,120 135,120" fill="#B7C4D5" opacity="0.6" />
        <polygon points="150,140 195,140 195,220 150,220" fill="#CBD5E1" opacity="0.7" />
        <polygon points="210,105 260,105 260,220 210,220" fill="#B7C4D5" opacity="0.65" />
        <polygon points="280,135 320,135 320,220 280,220" fill="#CBD5E1" opacity="0.6" />
        <polygon points="340,110 395,110 395,220 340,220" fill="#B7C4D5" opacity="0.55" />

        {/* Window Sill & Steel Grid Frame */}
        <rect x="0" y="215" width="480" height="15" fill="#E8DEC9" />
        <line x1="0" y1="215" x2="480" y2="215" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="160" y1="0" x2="160" y2="215" stroke="#E2D6C0" strokeWidth="5" />
        <line x1="320" y1="0" x2="320" y2="215" stroke="#E2D6C0" strokeWidth="5" />
        <line x1="0" y1="80" x2="480" y2="80" stroke="#E2D6C0" strokeWidth="4" />

        {/* 2. Sunlit Hardwood Apartment Floor */}
        <polygon points="0,230 480,230 480,360 0,360" fill="url(#mo_floor)" />
        <line x1="60" y1="230" x2="0" y2="350" stroke="#B8A78F" strokeWidth="1.5" />
        <line x1="170" y1="230" x2="100" y2="360" stroke="#B8A78F" strokeWidth="1.5" />
        <line x1="280" y1="230" x2="210" y2="360" stroke="#B8A78F" strokeWidth="1.5" />
        <line x1="390" y1="230" x2="320" y2="360" stroke="#B8A78F" strokeWidth="1.5" />

        {/* Sunlight Pool on Floor */}
        <polygon points="120,230 380,230 430,360 170,360" fill="#FFF8EB" className="mo-sunlight" />

        {/* 3. Centerpiece: Stacked Kraft Moving Boxes */}
        <g filter="url(#mo_shadow)">
          <polygon points="80,185 190,185 190,295 80,295" fill="url(#mo_box_front)" />
          <polygon points="190,185 240,155 240,265 190,295" fill="url(#mo_box_side)" />
          <polygon points="80,185 130,155 240,155 190,185" fill="url(#mo_box_top)" />
          <polygon points="135,185 145,185 145,295 135,295" fill="#E2B882" opacity="0.85" />
          <polygon points="135,185 185,155 195,155 145,185" fill="#E2B882" opacity="0.85" />

          {/* Sharpie Label */}
          <rect x="95" y="210" width="70" height="42" rx="3" fill="#FFFFFF" opacity="0.9" />
          <text x="102" y="225" fontSize="8" fontWeight="bold" fill="#1E293B" fontFamily="sans-serif">STUDIO 4B</text>
          <text x="102" y="236" fontSize="7" fill="#64748B" fontFamily="sans-serif">Kitchen &amp; Records</text>
          <text x="102" y="246" fontSize="6.5" fontWeight="bold" fill="#DC2626" fontFamily="sans-serif">FRAGILE ↑</text>

          {/* Secondary Stacked Box */}
          <polygon points="105,120 185,120 185,185 105,185" fill="url(#mo_box_front)" />
          <polygon points="185,120 220,95 220,160 185,185" fill="url(#mo_box_side)" />
          <polygon points="105,120 140,95 220,95 185,120" fill="url(#mo_box_top)" />
          <text x="115" y="152" fontSize="7.5" fontWeight="bold" fill="#78350F" fontFamily="sans-serif">BOOKS &amp; DESK</text>
        </g>

        {/* 4. Foreground Right: Luxury Cognac Leather Duffel Bag */}
        <g filter="url(#mo_shadow)">
          <ellipse cx="320" cy="305" rx="65" ry="18" fill="#3F2916" opacity="0.32" />
          <rect x="255" y="220" width="130" height="80" rx="22" fill="url(#mo_leather_duffel)" />
          <rect x="285" y="220" width="10" height="80" fill="#5A2405" />
          <rect x="350" y="220" width="10" height="80" fill="#5A2405" />
          <rect x="283" y="250" width="14" height="12" rx="2" fill="url(#mo_brass_keys)" />
          <rect x="348" y="250" width="14" height="12" rx="2" fill="url(#mo_brass_keys)" />
          <path d="M 290 220 C 290 190, 355 190, 355 220" stroke="#5A2405" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 290 220 C 290 190, 355 190, 355 220" stroke="#8A3807" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Animated Luggage Tag */}
          <g className="mo-tag">
            <polygon points="355,225 368,252 356,256 345,228" fill="#FEF3C7" stroke="#92400E" strokeWidth="1" />
            <text x="350" y="244" fontSize="5" fontWeight="bold" fill="#78350F">BLR / 2026</text>
          </g>
        </g>

        {/* 5. Foreground Left: Solid Brass Apartment Key Ring on Floor */}
        <g filter="url(#mo_shadow)">
          <circle cx="215" cy="315" r="12" fill="none" stroke="url(#mo_brass_keys)" strokeWidth="3" />
          <polygon points="215,315 255,325 253,330 215,318" fill="url(#mo_brass_keys)" />
          <rect x="240" y="325" width="4" height="6" fill="url(#mo_brass_keys)" />
          <rect x="248" y="327" width="3" height="5" fill="url(#mo_brass_keys)" />

          {/* Key Glint Starburst */}
          <g className="mo-sparkle">
            <circle cx="245" cy="325" r="3" fill="#FFF" />
            <line x1="245" y1="319" x2="245" y2="331" stroke="#FFF" strokeWidth="1.5" />
            <line x1="239" y1="325" x2="251" y2="325" stroke="#FFF" strokeWidth="1.5" />
          </g>

          <polygon points="210,318 175,335 185,348 218,322" fill="#78350F" />
          <text x="180" y="339" fontSize="6" fontWeight="bold" fill="#FDE68A" transform="rotate(-20 180 339)">APT 4B</text>
        </g>

        {/* 6. Background Right: Swaying Potted Monstera Plant in Window Breeze */}
        <g>
          <ellipse cx="435" cy="245" rx="20" ry="6" fill="#3F2916" opacity="0.25" />
          <path d="M 418 200 L 452 200 L 448 245 L 422 245 Z" fill="#ECE5D8" stroke="#DDD3C1" strokeWidth="1" />
          
          {/* Animated Monstera Leaves */}
          <path className="mo-leaf-1" d="M 435 200 Q 405 160 395 140 Q 430 145 435 200 Z" fill="#15803D" />
          <path className="mo-leaf-2" d="M 435 200 Q 455 150 468 135 Q 470 165 435 200 Z" fill="#16A34A" />
          <path d="M 435 200 Q 435 140 442 120 Q 450 150 435 200 Z" fill="#22C55E" />
        </g>

        {/* Floating Contextual Glass Badge */}
        <g className="transition-transform duration-300 group-hover:translate-y-[-2px]">
          <rect x="280" y="24" width="178" height="34" rx="8" fill="#16191E" fillOpacity="0.88" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" filter="url(#mo_shadow)" />
          <circle cx="296" cy="41" r="4.5" fill="#F59E0B" />
          <circle cx="296" cy="41" r="2" fill="#FFFBEB" />
          <text x="308" y="37" fontSize="9" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">New City &amp; First Lease</text>
          <text x="308" y="49" fontSize="8" fill="#94A3B8" fontFamily="sans-serif">Deposit + Rent Overhead Active</text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// VIGNETTE 3: MARRIAGE / TWO LIVES
// Sunlit Scandinavian table, twin steaming artisanal ceramic cups, intertwined
// rose gold & platinum wedding bands with sunlight starburst glint, shared iPad
// ============================================================================
export function MarriageVignette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] select-none group shadow-inner ${className}`}>
      <svg 
        viewBox="0 0 480 360" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes mar_steam_1 {
              0% { transform: translateY(0); opacity: 0; }
              25% { opacity: 0.55; }
              60% { transform: translateY(-16px) translateX(4px); opacity: 0.35; }
              100% { transform: translateY(-30px) translateX(7px); opacity: 0; }
            }
            @keyframes mar_steam_2 {
              0% { transform: translateY(0); opacity: 0; }
              30% { opacity: 0.6; }
              70% { transform: translateY(-18px) translateX(-4px); opacity: 0.35; }
              100% { transform: translateY(-32px) translateX(-6px); opacity: 0; }
            }
            @keyframes mar_ring_sparkle {
              0%, 70%, 100% { opacity: 0; transform: scale(0.2) rotate(0deg); }
              80% { opacity: 1; transform: scale(1.4) rotate(45deg); }
              90% { opacity: 0.3; transform: scale(0.6) rotate(90deg); }
            }
            @keyframes mar_joint_pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.45; }
            }
            .mar-steam-left {
              animation: mar_steam_1 3.8s ease-in-out infinite;
              transform-origin: 148px 194px;
            }
            .mar-steam-right {
              animation: mar_steam_2 4.2s ease-in-out 1.4s infinite;
              transform-origin: 187px 190px;
            }
            .mar-sparkle {
              animation: mar_ring_sparkle 5s ease-in-out 2s infinite;
              transform-origin: 265px 265px;
            }
            .mar-pulse {
              animation: mar_joint_pulse 2.2s ease-in-out infinite;
            }
          `}</style>

          <linearGradient id="mar_bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="60%" stopColor="#F3EDE3" />
            <stop offset="100%" stopColor="#E6DDCF" />
          </linearGradient>

          <linearGradient id="mar_oak_table" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8BA93" />
            <stop offset="40%" stopColor="#C9A77D" />
            <stop offset="100%" stopColor="#AF8B5E" />
          </linearGradient>

          <linearGradient id="mar_rosegold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="40%" stopColor="#F43F5E" />
            <stop offset="70%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>

          <linearGradient id="mar_platinum" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="80%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="mar_cup_terracotta" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="40%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>

          <linearGradient id="mar_cup_charcoal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="40%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="mar_tablet_screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <filter id="mar_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#422915" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Warm Dining Room Wall */}
        <rect width="480" height="360" fill="url(#mar_bg)" />

        {/* Subtle framed architectural art */}
        <rect x="180" y="25" width="120" height="85" rx="3" fill="#FFFDF8" stroke="#D8C9B2" strokeWidth="2.5" />
        <ellipse cx="230" cy="65" rx="20" ry="12" fill="#F06535" opacity="0.6" />
        <circle cx="255" cy="55" r="14" fill="#0D9488" opacity="0.5" />

        {/* 2. Solid Oak Dining Table */}
        <polygon points="0,175 480,165 480,360 0,360" fill="url(#mar_oak_table)" />
        <line x1="0" y1="175" x2="480" y2="165" stroke="#FCECD7" strokeWidth="2" />
        <line x1="0" y1="210" x2="480" y2="200" stroke="#9C774E" strokeWidth="1" opacity="0.25" />
        <line x1="0" y1="260" x2="480" y2="250" stroke="#9C774E" strokeWidth="1" opacity="0.25" />

        {/* Textured Cream Linen Table Runner */}
        <polygon points="110,173 370,167 385,360 95,360" fill="#FAF6EE" />
        <line x1="110" y1="173" x2="95" y2="360" stroke="#E2D6C0" strokeWidth="1.5" />
        <line x1="370" y1="167" x2="385" y2="360" stroke="#E2D6C0" strokeWidth="1.5" />

        {/* 3. Centerpiece Left: Twin Stoneware Steaming Coffee Cups */}
        <g filter="url(#mar_shadow)">
          <ellipse cx="165" cy="265" rx="45" ry="14" fill="#422915" opacity="0.28" />

          {/* Cup 1: Terracotta Mug */}
          <rect x="130" y="205" width="36" height="48" rx="8" fill="url(#mar_cup_terracotta)" />
          <path d="M 130 216 C 118 216, 118 238, 130 238" stroke="#EA580C" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <ellipse cx="148" cy="205" rx="18" ry="6" fill="#FB923C" />
          <ellipse cx="148" cy="205" rx="15" ry="4.5" fill="#451A03" />

          {/* Cup 2: Charcoal Mug */}
          <rect x="168" y="200" width="38" height="52" rx="8" fill="url(#mar_cup_charcoal)" />
          <path d="M 206 214 C 218 214, 218 236, 206 236" stroke="#475569" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <ellipse cx="187" cy="200" rx="19" ry="6.5" fill="#64748B" />
          <ellipse cx="187" cy="200" rx="16" ry="5" fill="#0F172A" />

          {/* Animated Steam Wisps */}
          <path className="mar-steam-left" d="M 148 194 C 142 178, 160 168, 154 150" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path className="mar-steam-right" d="M 187 190 C 192 175, 178 165, 185 148" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>

        {/* 4. Centerpiece Center: Intertwined Rose Gold & Titanium Rings with Starburst Sparkle */}
        <g filter="url(#mar_shadow)">
          <polygon points="215,260 275,250 290,295 230,305" fill="#F4EFE6" stroke="#E2D9C8" strokeWidth="1" />
          <ellipse cx="245" cy="275" rx="15" ry="11" fill="none" stroke="url(#mar_platinum)" strokeWidth="4.5" />
          <ellipse cx="258" cy="272" rx="14" ry="10" fill="none" stroke="url(#mar_rosegold)" strokeWidth="4" />

          {/* Animated Sunlight Sparkle Glint */}
          <g className="mar-sparkle">
            <circle cx="265" cy="265" r="3.5" fill="#FFFFFF" />
            <line x1="265" y1="256" x2="265" y2="274" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="256" y1="265" x2="274" y2="265" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </g>

        {/* 5. Centerpiece Right: Sleek Tablet with Kubear Household Ledger */}
        <g filter="url(#mar_shadow)">
          <rect x="290" y="195" width="135" height="98" rx="8" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
          <rect x="295" y="200" width="125" height="88" rx="5" fill="url(#mar_tablet_screen)" />

          <rect x="303" y="207" width="50" height="6" rx="2" fill="#38BDF8" opacity="0.85" />
          <circle cx="405" cy="210" r="4" fill="#F06535" />
          <circle cx="414" cy="210" r="4" fill="#38BDF8" />

          <rect x="303" y="218" width="52" height="28" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.8" />
          <text x="307" y="228" fontSize="5" fill="#94A3B8" fontFamily="sans-serif">PARTNER 1</text>
          <text x="307" y="238" fontSize="7.5" fontWeight="bold" fill="#F8FAFC" fontFamily="sans-serif">₹1.15 L</text>

          <rect x="360" y="218" width="52" height="28" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="0.8" />
          <text x="364" y="228" fontSize="5" fill="#94A3B8" fontFamily="sans-serif">PARTNER 2</text>
          <text x="364" y="238" fontSize="7.5" fontWeight="bold" fill="#F8FAFC" fontFamily="sans-serif">₹95,000</text>

          <rect x="303" y="252" width="109" height="15" rx="3" fill="#065F46" />
          <circle cx="311" cy="259.5" r="2.5" fill="#34D399" className="mar-pulse" />
          <text x="317" y="262" fontSize="5.5" fontWeight="bold" fill="#D1FAE5" fontFamily="sans-serif">SHARED EXPENSES · 100% ALIGNED</text>
          <text x="303" y="278" fontSize="5.5" fill="#64748B" fontFamily="sans-serif">Autonomy Kept: ₹35K each</text>
        </g>

        {/* 6. Background Fluted Vase with Dried Eucalyptus */}
        <g>
          <rect x="65" y="140" width="22" height="42" rx="6" fill="#E2D9C8" stroke="#D1C4AD" strokeWidth="1" />
          <path d="M 76 140 Q 60 100 50 85" stroke="#65A30D" strokeWidth="1.5" fill="none" />
          <ellipse cx="52" cy="90" rx="6" ry="4" fill="#84CC16" />
          <ellipse cx="62" cy="110" rx="7" ry="5" fill="#65A30D" />
          <path d="M 76 140 Q 90 95 105 80" stroke="#65A30D" strokeWidth="1.5" fill="none" />
          <ellipse cx="100" cy="85" rx="6" ry="4" fill="#84CC16" />
        </g>

        {/* Floating Contextual Glass Badge */}
        <g className="transition-transform duration-300 group-hover:translate-y-[-2px]">
          <rect x="270" y="24" width="188" height="34" rx="8" fill="#16191E" fillOpacity="0.88" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" filter="url(#mar_shadow)" />
          <circle cx="286" cy="41" r="4.5" fill="#F43F5E" />
          <circle cx="286" cy="41" r="2" fill="#FFF1F2" />
          <text x="298" y="37" fontSize="9" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">Two Financial Lives</text>
          <text x="298" y="49" fontSize="8" fill="#94A3B8" fontFamily="sans-serif">Joint Pool + Independent Freedom</text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// VIGNETTE 4: A CHILD
// Sunlit Scandinavian birch nursery, gently swaying celestial ceiling mobile,
// handcrafted birch crib, breathing plush heirloom teddy bear with amber scarf
// ============================================================================
export function ChildVignette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] select-none group shadow-inner ${className}`}>
      <svg 
        viewBox="0 0 480 360" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes ch_mobile_1 {
              0%, 100% { transform: rotate(-3.5deg); }
              50% { transform: rotate(3.5deg); }
            }
            @keyframes ch_mobile_2 {
              0%, 100% { transform: rotate(4deg); }
              50% { transform: rotate(-4deg); }
            }
            @keyframes ch_mobile_3 {
              0%, 100% { transform: rotate(-5deg); }
              50% { transform: rotate(5deg); }
            }
            @keyframes ch_teddy_breath {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02, 1.03); }
            }
            .ch-mobile-moon {
              animation: ch_mobile_1 6s ease-in-out infinite;
              transform-origin: 280px 0px;
            }
            .ch-mobile-planet {
              animation: ch_mobile_2 5.2s ease-in-out 0.8s infinite;
              transform-origin: 320px 0px;
            }
            .ch-mobile-star {
              animation: ch_mobile_3 7s ease-in-out 1.5s infinite;
              transform-origin: 350px 0px;
            }
            .ch-bear {
              animation: ch_teddy_breath 4.5s ease-in-out infinite;
              transform-origin: 140px 240px;
            }
          `}</style>

          <linearGradient id="ch_bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9F0" />
            <stop offset="60%" stopColor="#F7EEDF" />
            <stop offset="100%" stopColor="#EBDFC9" />
          </linearGradient>

          <linearGradient id="ch_birch" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EAD9BD" />
            <stop offset="50%" stopColor="#DFC8A3" />
            <stop offset="100%" stopColor="#CCA97E" />
          </linearGradient>

          <linearGradient id="ch_teddy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D98A45" />
            <stop offset="60%" stopColor="#B46123" />
            <stop offset="100%" stopColor="#8C4212" />
          </linearGradient>

          <linearGradient id="ch_blanket" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <radialGradient id="ch_rug" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F2ECE2" />
            <stop offset="100%" stopColor="#DFD5C4" />
          </radialGradient>

          <filter id="ch_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#3F2714" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Warm Soft Nursery Wall */}
        <rect width="480" height="360" fill="url(#ch_bg)" />

        {/* Animated Hanging Mobile Stars & Moon from Ceiling */}
        <g className="ch-mobile-moon">
          <line x1="280" y1="0" x2="280" y2="45" stroke="#D1C2A5" strokeWidth="1" />
          <path d="M 280 45 C 285 45, 290 50, 290 55 C 285 55, 280 50, 280 45 Z" fill="#F59E0B" />
        </g>
        <g className="ch-mobile-planet">
          <line x1="320" y1="0" x2="320" y2="35" stroke="#D1C2A5" strokeWidth="1" />
          <circle cx="320" cy="38" r="4.5" fill="#38BDF8" opacity="0.8" />
        </g>
        <g className="ch-mobile-star">
          <line x1="350" y1="0" x2="350" y2="52" stroke="#D1C2A5" strokeWidth="1" />
          <polygon points="350,52 353,58 359,58 354,62 356,68 350,64 344,68 346,62 341,58 347,58" fill="#FBBF24" />
        </g>

        {/* 2. Light Birch Nursery Floor & Organic Rug */}
        <rect x="0" y="240" width="480" height="120" fill="#DBCBB2" />
        <line x1="0" y1="240" x2="480" y2="240" stroke="#F2E6D4" strokeWidth="2" />
        <line x1="0" y1="275" x2="480" y2="275" stroke="#C4B093" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="315" x2="480" y2="315" stroke="#C4B093" strokeWidth="1" opacity="0.4" />
        <ellipse cx="190" cy="290" rx="140" ry="48" fill="url(#ch_rug)" stroke="#E5DAC8" strokeWidth="2" strokeDasharray="4 2" />

        {/* 3. Centerpiece Right: Scandinavian Birch Crib */}
        <g filter="url(#ch_shadow)">
          <rect x="220" y="95" width="220" height="145" rx="8" fill="none" stroke="url(#ch_birch)" strokeWidth="6" />
          <line x1="250" y1="95" x2="250" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />
          <line x1="280" y1="95" x2="280" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />
          <line x1="310" y1="95" x2="310" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />
          <line x1="340" y1="95" x2="340" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />
          <line x1="370" y1="95" x2="370" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />
          <line x1="400" y1="95" x2="400" y2="240" stroke="url(#ch_birch)" strokeWidth="5" />

          {/* Organic Cotton Mattress */}
          <rect x="225" y="185" width="210" height="42" rx="10" fill="#FFFFFF" stroke="#E5DEC9" strokeWidth="2" />
          <rect x="235" y="172" width="45" height="24" rx="7" fill="#FDF8F0" stroke="#E8DFCD" strokeWidth="1.5" />

          {/* Crib Front Rail */}
          <rect x="215" y="125" width="230" height="115" rx="6" fill="none" stroke="url(#ch_birch)" strokeWidth="6" />
          <line x1="245" y1="125" x2="245" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="275" y1="125" x2="275" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="305" y1="125" x2="305" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="335" y1="125" x2="335" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="365" y1="125" x2="365" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="395" y1="125" x2="395" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />
          <line x1="425" y1="125" x2="425" y2="240" stroke="url(#ch_birch)" strokeWidth="4.5" />

          <rect x="220" y="235" width="10" height="45" rx="4" fill="#BFA37E" />
          <rect x="430" y="235" width="10" height="45" rx="4" fill="#BFA37E" />

          {/* Draped Waffle-Knit Blanket */}
          <path d="M 310 135 C 310 115, 360 115, 360 135 L 365 210 C 345 215, 325 215, 305 210 Z" fill="url(#ch_blanket)" />
          <line x1="315" y1="211" x2="315" y2="220" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          <line x1="325" y1="213" x2="325" y2="222" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          <line x1="335" y1="214" x2="335" y2="223" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          <line x1="345" y1="213" x2="345" y2="222" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          <line x1="355" y1="211" x2="355" y2="220" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 4. Centerpiece Left: Handcrafted Heirloom Plush Teddy Bear with Gentle Breathing */}
        <g filter="url(#ch_shadow)" className="ch-bear">
          <ellipse cx="140" cy="300" rx="45" ry="15" fill="#3F2714" opacity="0.3" />

          <ellipse cx="140" cy="235" rx="35" ry="42" fill="url(#ch_teddy)" />
          <ellipse cx="140" cy="240" rx="22" ry="26" fill="#F3C397" opacity="0.9" />

          {/* Head & Ears */}
          <circle cx="140" cy="170" r="32" fill="url(#ch_teddy)" />
          <circle cx="115" cy="146" r="12" fill="url(#ch_teddy)" />
          <circle cx="115" cy="146" r="6.5" fill="#F3C397" />
          <circle cx="165" cy="146" r="12" fill="url(#ch_teddy)" />
          <circle cx="165" cy="146" r="6.5" fill="#F3C397" />

          <ellipse cx="140" cy="178" rx="15" ry="11" fill="#FDE8D4" />
          <polygon points="140,178 135,172 145,172" fill="#3F1D0B" />
          <line x1="140" y1="178" x2="140" y2="183" stroke="#3F1D0B" strokeWidth="1.8" />

          {/* Expressive Glossy Eyes */}
          <circle cx="128" cy="165" r="3.8" fill="#1C1008" />
          <circle cx="127" cy="164" r="1.2" fill="#FFFFFF" />
          <circle cx="152" cy="165" r="3.8" fill="#1C1008" />
          <circle cx="151" cy="164" r="1.2" fill="#FFFFFF" />

          {/* Knitted Scarf */}
          <rect x="122" y="196" width="36" height="12" rx="5" fill="#F06535" />
          <polygon points="146,204 156,230 144,232 138,206" fill="#D94A1A" />

          {/* Paws */}
          <ellipse cx="106" cy="230" rx="13" ry="24" fill="url(#ch_teddy)" transform="rotate(25 106 230)" />
          <ellipse cx="174" cy="230" rx="13" ry="24" fill="url(#ch_teddy)" transform="rotate(-25 174 230)" />
          <ellipse cx="116" cy="275" rx="18" ry="14" fill="url(#ch_teddy)" />
          <ellipse cx="116" cy="275" rx="10" ry="8" fill="#F3C397" />
          <ellipse cx="164" cy="275" rx="18" ry="14" fill="url(#ch_teddy)" />
          <ellipse cx="164" cy="275" rx="10" ry="8" fill="#F3C397" />
        </g>

        {/* 5. Wooden Milestone Blocks on Floor */}
        <g filter="url(#ch_shadow)">
          <polygon points="50,285 75,285 75,310 50,310" fill="#FBBF24" />
          <polygon points="50,285 62,273 87,273 75,285" fill="#FDE68A" />
          <polygon points="75,285 87,273 87,298 75,310" fill="#D97706" />
          <text x="62.5" y="302" fontSize="14" fontWeight="bold" fill="#78350F" textAnchor="middle" fontFamily="sans-serif">A</text>

          <polygon points="75,295 98,295 98,318 75,318" fill="#38BDF8" />
          <polygon points="75,295 86,284 109,284 98,295" fill="#BAE6FD" />
          <polygon points="98,295 109,284 109,307 98,318" fill="#0284C7" />
          <text x="86.5" y="311" fontSize="13" fontWeight="bold" fill="#0C4A6E" textAnchor="middle" fontFamily="sans-serif">1</text>
        </g>

        {/* Floating Contextual Glass Badge */}
        <g className="transition-transform duration-300 group-hover:translate-y-[-2px]">
          <rect x="270" y="24" width="188" height="34" rx="8" fill="#16191E" fillOpacity="0.88" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" filter="url(#ch_shadow)" />
          <circle cx="286" cy="41" r="4.5" fill="#38BDF8" />
          <circle cx="286" cy="41" r="2" fill="#F0F9FF" />
          <text x="298" y="37" fontSize="9" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">Welcoming a Child</text>
          <text x="298" y="49" fontSize="8" fill="#94A3B8" fontFamily="sans-serif">18-Yr Milestone &amp; Safety Buffer</text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// VIGNETTE 5: BUYING A HOME
// Heavy solid timber drafting table, blueprint sheets with sunbeam drift,
// glowing porcelain architectural home model with warm hearth light, brass keys
// ============================================================================
export function BuyingHomeVignette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] select-none group shadow-inner ${className}`}>
      <svg 
        viewBox="0 0 480 360" 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes bh_hearth_warmth {
              0%, 100% { opacity: 0.85; filter: drop-shadow(0 0 3px #FBBF24); }
              50% { opacity: 1; filter: drop-shadow(0 0 7px #F59E0B); }
            }
            @keyframes bh_sun_drift {
              0%, 100% { opacity: 0.28; transform: translateX(-6px); }
              50% { opacity: 0.46; transform: translateX(10px); }
            }
            @keyframes bh_key_sheen {
              0%, 70%, 100% { opacity: 0; transform: scale(0.3); }
              80% { opacity: 1; transform: scale(1.3); }
              90% { opacity: 0.2; transform: scale(0.6); }
            }
            .bh-hearth {
              animation: bh_hearth_warmth 4s ease-in-out infinite;
            }
            .bh-sunbeam {
              animation: bh_sun_drift 7s ease-in-out infinite;
            }
            .bh-sparkle {
              animation: bh_key_sheen 5s ease-in-out 1.8s infinite;
              transform-origin: 360px 285px;
            }
          `}</style>

          <linearGradient id="bh_sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFEAF2" />
            <stop offset="60%" stopColor="#F5EDE1" />
            <stop offset="100%" stopColor="#EADCC7" />
          </linearGradient>

          <linearGradient id="bh_timber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D2B188" />
            <stop offset="45%" stopColor="#BE996D" />
            <stop offset="100%" stopColor="#A27A4B" />
          </linearGradient>

          <linearGradient id="bh_blueprint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>

          <linearGradient id="bh_brass_keys" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <linearGradient id="bh_terracotta_roof" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>

          <filter id="bh_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#3F2714" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* 1. Large Window Backing */}
        <rect width="480" height="210" fill="url(#bh_sky)" />
        <circle cx="80" cy="180" r="60" fill="#CAD3C3" opacity="0.5" />
        <circle cx="410" cy="175" r="75" fill="#C2CDB9" opacity="0.5" />

        {/* 2. Solid Timber Architect Workstation */}
        <polygon points="0,195 480,185 480,360 0,360" fill="url(#bh_timber)" />
        <line x1="0" y1="195" x2="480" y2="185" stroke="#FCE9D2" strokeWidth="2.5" />
        <line x1="0" y1="230" x2="480" y2="220" stroke="#8E6738" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="280" x2="480" y2="270" stroke="#8E6738" strokeWidth="1" opacity="0.3" />

        {/* 3. Centerpiece Blueprint Floor Plan Sheets */}
        <g filter="url(#bh_shadow)">
          <polygon points="55,200 280,180 305,325 80,345" fill="url(#bh_blueprint)" />
          <line x1="85" y1="198" x2="110" y2="343" stroke="#3B82F6" strokeWidth="0.8" opacity="0.45" />
          <line x1="125" y1="194" x2="150" y2="339" stroke="#3B82F6" strokeWidth="0.8" opacity="0.45" />
          <line x1="165" y1="190" x2="190" y2="335" stroke="#3B82F6" strokeWidth="0.8" opacity="0.45" />
          <line x1="205" y1="186" x2="230" y2="331" stroke="#3B82F6" strokeWidth="0.8" opacity="0.45" />
          <line x1="245" y1="182" x2="270" y2="327" stroke="#3B82F6" strokeWidth="0.8" opacity="0.45" />

          {/* Architectural White Ink Floor Plan Layout */}
          <polygon points="90,225 240,212 255,305 105,318" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 2" opacity="0.9" />
          <line x1="165" y1="218" x2="180" y2="311" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
          <line x1="98" y1="270" x2="172" y2="264" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

          <text x="105" y="248" fontSize="7" fontWeight="bold" fill="#93C5FD" fontFamily="sans-serif">MASTER SUITE</text>
          <text x="105" y="258" fontSize="5.5" fill="#BFDBFE" fontFamily="sans-serif">14'0" × 16'6"</text>
          <text x="190" y="240" fontSize="7" fontWeight="bold" fill="#93C5FD" fontFamily="sans-serif">LIVING &amp; BALCONY</text>
          <text x="190" y="250" fontSize="5.5" fill="#BFDBFE" fontFamily="sans-serif">24'8" × 18'0"</text>
          <text x="190" y="280" fontSize="6.5" fontWeight="bold" fill="#FDE047" fontFamily="monospace">APPROVED · 3BHK</text>

          {/* Animated Sunbeam over Blueprint */}
          <polygon points="80,190 140,185 180,340 120,345" fill="#FFFFFF" className="bh-sunbeam" />
        </g>

        {/* 4. Centerpiece Center: Minimalist Porcelain Modern House Model with Warm Glowing Hearth Windows */}
        <g filter="url(#bh_shadow)">
          <ellipse cx="270" cy="275" rx="65" ry="18" fill="#3F2714" opacity="0.32" />

          {/* Walnut Wooden Pedestal */}
          <polygon points="195,260 345,250 335,275 185,285" fill="#78350F" />
          <polygon points="185,285 335,275 333,280 183,290" fill="#582509" />

          {/* Porcelain House Body */}
          <polygon points="215,160 270,120 270,250 215,260" fill="#FFFFFF" stroke="#E2D8C7" strokeWidth="1.2" />
          <polygon points="270,120 330,150 330,240 270,250" fill="#F4EFE6" stroke="#DDD2C0" strokeWidth="1.2" />

          {/* Terracotta Modern Roof */}
          <polygon points="205,162 265,110 275,110 215,165" fill="#FB923C" />
          <polygon points="212,163 270,110 338,145 280,200" fill="url(#bh_terracotta_roof)" />
          <polygon points="270,110 345,142 338,152 268,118" fill="#9A3412" />
          <line x1="270" y1="110" x2="345" y2="142" stroke="#FED7AA" strokeWidth="1.5" />

          {/* Front Door */}
          <polygon points="230,195 252,187 252,253 230,257" fill="#6B3714" />
          <circle cx="247" cy="226" r="2" fill="url(#bh_brass_keys)" />

          {/* Glowing Animated Warm Windows */}
          <polygon points="285,165 315,178 315,212 285,200" fill="#FEF08A" stroke="#B45309" strokeWidth="1.2" className="bh-hearth" />
          <line x1="300" y1="171" x2="300" y2="206" stroke="#B45309" strokeWidth="1" />
          <line x1="285" y1="188" x2="315" y2="195" stroke="#B45309" strokeWidth="1" />
        </g>

        {/* 5. Foreground Right: Solid Brass Keys with Leather Fob & Sparkle */}
        <g filter="url(#bh_shadow)">
          <ellipse cx="375" cy="305" rx="42" ry="14" fill="#3F2714" opacity="0.32" />
          <circle cx="360" cy="285" r="14" fill="none" stroke="url(#bh_brass_keys)" strokeWidth="4" />
          <polygon points="360,285 435,270 445,295 370,310" fill="#9A3412" stroke="#7C2D12" strokeWidth="1" />
          <text x="390" y="294" fontSize="8" fontWeight="bold" fill="#FEF3C7" transform="rotate(-12 390 294)">HOME 2026</text>

          <polygon points="360,285 320,325 328,332 368,292" fill="url(#bh_brass_keys)" />
          <rect x="330" y="322" width="6" height="8" fill="url(#bh_brass_keys)" />
          <rect x="340" y="312" width="5" height="7" fill="url(#bh_brass_keys)" />
          <polygon points="360,285 345,340 354,342 368,287" fill="url(#bh_brass_keys)" opacity="0.9" />

          {/* Animated Brass Sparkle */}
          <g className="bh-sparkle">
            <circle cx="360" cy="285" r="3.5" fill="#FFFFFF" />
            <line x1="360" y1="277" x2="360" y2="293" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="352" y1="285" x2="368" y2="285" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </g>

        {/* 6. Stainless Steel Drafting Ruler */}
        <g filter="url(#bh_shadow)">
          <polygon points="35,240 135,230 137,242 37,252" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
          <line x1="45" y1="239" x2="45" y2="245" stroke="#475569" strokeWidth="1" />
          <line x1="55" y1="238" x2="55" y2="244" stroke="#475569" strokeWidth="1" />
          <line x1="65" y1="237" x2="65" y2="243" stroke="#475569" strokeWidth="1" />
          <line x1="75" y1="236" x2="75" y2="242" stroke="#475569" strokeWidth="1" />
          <line x1="85" y1="235" x2="85" y2="241" stroke="#475569" strokeWidth="1" />
        </g>

        {/* Floating Contextual Glass Badge */}
        <g className="transition-transform duration-300 group-hover:translate-y-[-2px]">
          <rect x="270" y="24" width="188" height="34" rx="8" fill="#16191E" fillOpacity="0.88" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1" filter="url(#bh_shadow)" />
          <circle cx="286" cy="41" r="4.5" fill="#EA580C" />
          <circle cx="286" cy="41" r="2" fill="#FFF7ED" />
          <text x="298" y="37" fontSize="9" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">Buying a Home</text>
          <text x="298" y="49" fontSize="8" fill="#94A3B8" fontFamily="sans-serif">Net Worth Asset &amp; EMI Safety</text>
        </g>
      </svg>
    </div>
  );
}
