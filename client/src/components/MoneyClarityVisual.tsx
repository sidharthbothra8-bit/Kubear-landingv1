import React, { useEffect, useRef, useState } from "react";

interface MoneyClarityVisualProps {
  className?: string;
  autoPlay?: boolean;
}

/**
 * MoneyClarityVisual
 * 
 * True inline animated SVG recreating:
 * "messy money questions in user's head → everything becomes simpler → one clear answer"
 * 
 * Features:
 * - Named SVG groups & IDs as specified (#question-*, #scribble-*, #flow-line-*, #answer-*)
 * - Pure SVG paths, organic thought bubbles, real text, and self-drawing strokes
 * - IntersectionObserver trigger with one-time execution
 * - Respects prefers-reduced-motion
 * - Dual responsive layouts: horizontal composition on desktop, vertical stack on mobile
 * - Calm, smooth Kubear easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export function MoneyClarityVisual({
  className = "",
  autoPlay = true,
}: MoneyClarityVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  return (
    <div
      ref={containerRef}
      className={`money-clarity-wrapper w-full select-none ${isInView ? "is-animated" : ""} ${className}`}
    >
      <style>{`
        /* ==============================================================
           Money Clarity Animation Styles
           Easing: cubic-bezier(0.22, 1, 0.36, 1)
           ============================================================== */

        .money-clarity-wrapper {
          --ease-kubear: cubic-bezier(0.22, 1, 0.36, 1);
          --dur-enter: 0.85s;
        }

        /* Initial States before intersection */
        .money-clarity-wrapper:not(.is-animated) .anim-fade,
        .money-clarity-wrapper:not(.is-animated) .anim-pop,
        .money-clarity-wrapper:not(.is-animated) .anim-draw {
          opacity: 0;
        }

        /* 1. Question Thought Bubbles Enter Staggered */
        .is-animated #question-can-i-do-this {
          animation: bubbleEnter var(--dur-enter) var(--ease-kubear) 0.1s forwards,
                     thoughtFloatA 6s ease-in-out 1.2s infinite alternate;
        }
        .is-animated #question-am-i-okay {
          animation: bubbleEnter var(--dur-enter) var(--ease-kubear) 0.25s forwards,
                     thoughtFloatB 7s ease-in-out 1.4s infinite alternate;
        }
        .is-animated #question-trip {
          animation: bubbleEnter var(--dur-enter) var(--ease-kubear) 0.4s forwards,
                     thoughtFloatC 6.5s ease-in-out 1.6s infinite alternate;
        }
        .is-animated #question-what-changes {
          animation: bubbleEnter var(--dur-enter) var(--ease-kubear) 0.55s forwards,
                     thoughtFloatA 7.5s ease-in-out 1.8s infinite alternate;
        }
        .is-animated #question-spend {
          animation: bubbleEnter var(--dur-enter) var(--ease-kubear) 0.7s forwards,
                     thoughtFloatB 6.8s ease-in-out 2.0s infinite alternate;
        }

        @keyframes bubbleEnter {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(14px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Subtle organic floating after arrival */
        @keyframes thoughtFloatA {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3.5px) rotate(0.4deg); }
          100% { transform: translateY(2.5px) rotate(-0.3deg); }
        }
        @keyframes thoughtFloatB {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(3px) rotate(-0.5deg); }
          100% { transform: translateY(-3px) rotate(0.3deg); }
        }
        @keyframes thoughtFloatC {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-0.4deg); }
          100% { transform: translateY(2px) rotate(0.5deg); }
        }

        /* 2. Scribbles Draw & Gently Fade as Clarity Emerges */
        .scribble-stroke {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
        }
        .is-animated #scribble-1 .scribble-stroke {
          animation: drawScribble 1.2s var(--ease-kubear) 0.45s forwards,
                     softenScribble 1.5s ease-out 2.4s forwards;
        }
        .is-animated #scribble-2 .scribble-stroke {
          animation: drawScribble 1.2s var(--ease-kubear) 0.65s forwards,
                     softenScribble 1.5s ease-out 2.4s forwards;
        }
        .is-animated #scribble-3 .scribble-stroke {
          animation: drawScribble 1.2s var(--ease-kubear) 0.85s forwards,
                     softenScribble 1.5s ease-out 2.4s forwards;
        }

        @keyframes drawScribble {
          0% { stroke-dashoffset: 240; opacity: 0; }
          20% { opacity: 0.65; }
          100% { stroke-dashoffset: 0; opacity: 0.65; }
        }
        @keyframes softenScribble {
          0% { opacity: 0.65; }
          100% { opacity: 0.28; }
        }

        /* 3. Curved Flow Lines Stream Left to Right */
        .flow-stroke {
          stroke-dasharray: 480;
          stroke-dashoffset: 480;
        }
        .is-animated #flow-line-1 .flow-stroke {
          animation: drawFlow 1.6s var(--ease-kubear) 1.2s forwards;
        }
        .is-animated #flow-line-2 .flow-stroke {
          animation: drawFlow 1.7s var(--ease-kubear) 1.35s forwards;
        }
        .is-animated #flow-line-3 .flow-stroke {
          animation: drawFlow 1.8s var(--ease-kubear) 1.5s forwards;
        }

        @keyframes drawFlow {
          0% { stroke-dashoffset: 480; opacity: 0; }
          15% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        /* 4. Final Relief Answer Container & Content */
        .is-animated #answer-container {
          animation: answerCardEnter 0.9s var(--ease-kubear) 2.0s forwards;
        }
        @keyframes answerCardEnter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateX(18px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        /* Checkmark draws itself */
        .check-path {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
        }
        .is-animated #answer-check .check-path {
          animation: drawCheck 0.75s var(--ease-kubear) 2.45s forwards;
        }
        @keyframes drawCheck {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }

        /* Checkmark badge pop */
        .is-animated #answer-check {
          animation: badgePop 0.5s var(--ease-kubear) 2.3s forwards;
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.6); }
          70% { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Typography Reveal */
        .is-animated #answer-title {
          animation: textFadeSlide 0.7s var(--ease-kubear) 2.65s forwards;
        }
        .is-animated #answer-subtitle {
          animation: textFadeSlide 0.7s var(--ease-kubear) 2.85s forwards;
        }

        @keyframes textFadeSlide {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .money-clarity-wrapper * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            stroke-dashoffset: 0 !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ==============================================================
          DESKTOP VIEWPORT (Horizontal Flow: Questions → Converge → Answer)
          Hidden on small mobile (< 640px)
          ============================================================== */}
      <div className="hidden sm:block w-full">
        <svg
          viewBox="0 0 1020 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible select-none"
          aria-label="Illustration showing chaotic financial thoughts resolving into clarity: Got it. You know where you stand."
          role="img"
        >
          <defs>
            {/* Filter for Answer Card Warm Glow */}
            <filter id="answer-glow" x="-10%" y="-10%" width="125%" height="135%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#123630" floodOpacity="0.08" />
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#EA580C" floodOpacity="0.04" />
            </filter>

            {/* Bubble Drop Shadow */}
            <filter id="bubble-shadow" x="-8%" y="-8%" width="120%" height="130%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1B3830" floodOpacity="0.05" />
            </filter>

            {/* Flow line gradients */}
            <linearGradient id="flow-grad-1" x1="430" y1="130" x2="710" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#EA580C" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>

            <linearGradient id="flow-grad-2" x1="440" y1="240" x2="705" y2="242" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EA580C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <linearGradient id="flow-grad-3" x1="420" y1="360" x2="710" y2="255" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.3" />
              <stop offset="55%" stopColor="#FB923C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
          </defs>

          {/* ==============================================================
              LEFT SIDE: MENTAL LOAD (Pastel Bubbles & Scribbles)
              ============================================================== */}

          {/* Hand-drawn Scribbles Between Bubbles */}
          <g id="scribbles-layer">
            <g id="scribble-1" className="anim-draw">
              <path
                d="M175 105 C 195 90, 220 85, 235 110 C 248 130, 222 145, 205 138 C 188 132, 192 165, 225 160"
                fill="none"
                stroke="#E2A97E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="scribble-stroke"
              />
            </g>

            <g id="scribble-2" className="anim-draw">
              <path
                d="M145 250 C 130 280, 160 295, 175 275 C 188 258, 205 285, 225 295 C 242 304, 255 280, 240 268 C 220 255, 215 235, 238 220"
                fill="none"
                stroke="#D49B80"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="scribble-stroke"
              />
            </g>

            <g id="scribble-3" className="anim-draw">
              <path
                d="M200 375 C 225 365, 235 395, 210 405 C 185 415, 195 435, 230 420 C 255 408, 275 425, 260 440"
                fill="none"
                stroke="#CFA895"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="scribble-stroke"
              />
            </g>
          </g>

          {/* Question 1: "Can I do this?" (Soft Lavender Pill) */}
          <g id="question-can-i-do-this" className="anim-pop">
            <g filter="url(#bubble-shadow)">
              {/* Organic Thought Bubble Shape */}
              <path
                d="M58 84 C 58 64, 76 50, 102 50 L 178 50 C 204 50, 222 64, 222 84 C 222 104, 204 118, 178 118 L 102 118 C 76 118, 58 104, 58 84 Z"
                fill="#F5EEFD"
                stroke="#E2D0FA"
                strokeWidth="1.5"
              />
              {/* Small thought bubbles */}
              <circle cx="218" cy="126" r="4.5" fill="#F5EEFD" stroke="#E2D0FA" strokeWidth="1.2" />
              <circle cx="228" cy="136" r="2.8" fill="#F5EEFD" stroke="#E2D0FA" strokeWidth="1" />
            </g>
            <text
              x="140"
              y="90"
              textAnchor="middle"
              fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#5B21B6"
              letterSpacing="-0.01em"
            >
              Can I do this?
            </text>
          </g>

          {/* Question 2: "Am I okay?" (Soft Mint/Sage Cloud) */}
          <g id="question-am-i-okay" className="anim-pop">
            <g filter="url(#bubble-shadow)">
              <path
                d="M52 196 C 52 176, 70 162, 94 162 L 156 162 C 180 162, 198 176, 198 196 C 198 216, 180 230, 156 230 L 94 230 C 70 230, 52 216, 52 196 Z"
                fill="#EDFAF4"
                stroke="#B8EBCE"
                strokeWidth="1.5"
              />
              <circle cx="58" cy="238" r="4" fill="#EDFAF4" stroke="#B8EBCE" strokeWidth="1.2" />
              <circle cx="50" cy="248" r="2.5" fill="#EDFAF4" stroke="#B8EBCE" strokeWidth="1" />
            </g>
            <text
              x="125"
              y="202"
              textAnchor="middle"
              fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#065F46"
              letterSpacing="-0.01em"
            >
              Am I okay?
            </text>
          </g>

          {/* Question 3: "Can we still take that trip?" (Soft Butter Apricot) */}
          <g id="question-trip" className="anim-pop">
            <g filter="url(#bubble-shadow)">
              <path
                d="M236 102 C 236 78, 258 62, 288 62 L 402 62 C 432 62, 454 78, 454 102 C 454 126, 432 142, 402 142 L 288 142 C 258 142, 236 126, 236 102 Z"
                fill="#FFF9EC"
                stroke="#FDE096"
                strokeWidth="1.5"
              />
              <circle cx="250" cy="150" r="4" fill="#FFF9EC" stroke="#FDE096" strokeWidth="1.2" />
              <circle cx="260" cy="160" r="2.5" fill="#FFF9EC" stroke="#FDE096" strokeWidth="1" />
            </g>
            <text
              x="345"
              y="108"
              textAnchor="middle"
              fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="15.5"
              fontWeight="600"
              fill="#854D0E"
              letterSpacing="-0.01em"
            >
              Can we still take that trip?
            </text>
          </g>

          {/* Question 4: "What changes now?" (Soft Peach Pill) */}
          <g id="question-what-changes" className="anim-pop">
            <g filter="url(#bubble-shadow)">
              <path
                d="M48 322 C 48 300, 68 284, 98 284 L 202 284 C 232 284, 252 300, 252 322 C 252 344, 232 360, 202 360 L 98 360 C 68 360, 48 344, 48 322 Z"
                fill="#FFF3EB"
                stroke="#FFCFB3"
                strokeWidth="1.5"
              />
              <circle cx="242" cy="368" r="4" fill="#FFF3EB" stroke="#FFCFB3" strokeWidth="1.2" />
            </g>
            <text
              x="150"
              y="328"
              textAnchor="middle"
              fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#9A3412"
              letterSpacing="-0.01em"
            >
              What changes now?
            </text>
          </g>

          {/* Question 5: "How much can I spend?" (Soft Rose/Blush Pill) */}
          <g id="question-spend" className="anim-pop">
            <g filter="url(#bubble-shadow)">
              <path
                d="M235 240 C 235 218, 256 202, 286 202 L 396 202 C 426 202, 446 218, 446 240 C 446 262, 426 278, 396 278 L 286 278 C 256 278, 235 262, 235 240 Z"
                fill="#FFF1F4"
                stroke="#FCCCD7"
                strokeWidth="1.5"
              />
              <circle cx="242" cy="286" r="3.5" fill="#FFF1F4" stroke="#FCCCD7" strokeWidth="1" />
            </g>
            <text
              x="340"
              y="246"
              textAnchor="middle"
              fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="16"
              fontWeight="600"
              fill="#9F1239"
              letterSpacing="-0.01em"
            >
              How much can I spend?
            </text>
          </g>

          {/* ==============================================================
              MIDDLE: CONNECTING FLOW (Confusion → Flow → Straightens)
              ============================================================== */}
          <g id="flow-streams-layer">
            {/* Flow Line 1: Starts wavy at top, eases out toward answer */}
            <g id="flow-line-1">
              <path
                d="M440 115 C 490 120, 520 180, 570 195 C 625 210, 660 220, 715 226"
                fill="none"
                stroke="url(#flow-grad-1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-stroke"
              />
            </g>

            {/* Flow Line 2: Center steady path with forward momentum */}
            <g id="flow-line-2">
              <path
                d="M435 242 C 495 242, 540 242, 600 242 C 640 242, 675 242, 712 242"
                fill="none"
                stroke="url(#flow-grad-2)"
                strokeWidth="3.2"
                strokeLinecap="round"
                className="flow-stroke"
              />
            </g>

            {/* Flow Line 3: Starts curving upwards from bottom */}
            <g id="flow-line-3">
              <path
                d="M435 340 C 495 340, 525 295, 580 275 C 630 260, 665 258, 715 254"
                fill="none"
                stroke="url(#flow-grad-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-stroke"
              />
            </g>

            {/* Subtle convergence guide dots */}
            <circle cx="615" cy="242" r="3" fill="#EA580C" opacity="0.75" />
            <circle cx="660" cy="242" r="2.5" fill="#EA580C" opacity="0.6" />
          </g>

          {/* ==============================================================
              RIGHT SIDE: RELIEF & ANSWER (One Calm Rounded Shape)
              ============================================================== */}
          <g id="answer-container" className="anim-fade" filter="url(#answer-glow)">
            {/* Outer Calm Card Frame */}
            <rect
              x="710"
              y="118"
              width="276"
              height="248"
              rx="32"
              fill="#FFFFFF"
              stroke="#E8DEC8"
              strokeWidth="1.5"
            />

            {/* Inner Soft Gradient Wash for subtle depth */}
            <rect
              x="718"
              y="126"
              width="260"
              height="232"
              rx="24"
              fill="#FFFDF8"
            />

            {/* Large Orange Checkmark in Soft Circular Badge */}
            <g id="answer-check" className="anim-pop">
              <circle
                cx="848"
                cy="188"
                r="36"
                fill="#FFF0E6"
                stroke="#FED7AA"
                strokeWidth="1.5"
              />
              {/* Checkmark stroke */}
              <path
                d="M834 188 L 844 198 L 863 176"
                fill="none"
                stroke="#EA580C"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="check-path"
              />
            </g>

            {/* Primary Affirmation: "Got it." */}
            <g id="answer-title" className="anim-fade">
              <text
                x="848"
                y="266"
                textAnchor="middle"
                fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="32"
                fontWeight="700"
                fill="#0E241E"
                letterSpacing="-0.025em"
              >
                Got it.
              </text>
            </g>

            {/* Reassuring Subtitle: "You know where you stand." */}
            <g id="answer-subtitle" className="anim-fade">
              <text
                x="848"
                y="300"
                textAnchor="middle"
                fontFamily="var(--font-outfit, inherit), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="15"
                fontWeight="500"
                fill="#556963"
                letterSpacing="-0.01em"
              >
                You know where you stand.
              </text>
              {/* Micro Status Chip */}
              <g transform="translate(798, 318)">
                <rect width="100" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <circle cx="12" cy="10" r="3" fill="#047857" />
                <text x="24" y="14" fontSize="10.5" fontWeight="600" fill="#065F46" letterSpacing="0.02em">
                  CLEAR &amp; CALM
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* ==============================================================
          MOBILE VIEWPORT (Vertical Stack: Questions at top → Flow down → Answer at bottom)
          Visible only on small screens (< 640px)
          ============================================================== */}
      <div className="block sm:hidden w-full max-w-[420px] mx-auto px-2">
        <svg
          viewBox="0 0 380 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible select-none"
          aria-label="Mobile illustration showing financial thoughts turning into one clear answer: Got it. You know where you stand."
          role="img"
        >
          <defs>
            <filter id="m-answer-glow" x="-10%" y="-10%" width="125%" height="130%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#123630" floodOpacity="0.08" />
            </filter>
            <linearGradient id="m-flow-grad" x1="190" y1="280" x2="190" y2="410" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#EA580C" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Top: Question thoughts cluster */}
          <g id="m-question-can-i-do-this" className="anim-pop">
            <path
              d="M30 48 C 30 32, 45 20, 68 20 L 140 20 C 163 20, 178 32, 178 48 C 178 64, 163 76, 140 76 L 68 76 C 45 76, 30 64, 30 48 Z"
              fill="#F5EEFD"
              stroke="#E2D0FA"
              strokeWidth="1.5"
            />
            <text x="104" y="53" textAnchor="middle" fontSize="14" fontWeight="600" fill="#5B21B6">
              Can I do this?
            </text>
          </g>

          <g id="m-question-trip" className="anim-pop">
            <path
              d="M192 48 C 192 30, 208 18, 230 18 L 328 18 C 350 18, 366 30, 366 48 C 366 66, 350 78, 328 78 L 230 78 C 208 78, 192 66, 192 48 Z"
              fill="#FFF9EC"
              stroke="#FDE096"
              strokeWidth="1.5"
            />
            <text x="279" y="52" textAnchor="middle" fontSize="13" fontWeight="600" fill="#854D0E">
              Can we take that trip?
            </text>
          </g>

          <g id="m-question-am-i-okay" className="anim-pop">
            <path
              d="M40 120 C 40 104, 55 92, 75 92 L 135 92 C 155 92, 170 104, 170 120 C 170 136, 155 148, 135 148 L 75 148 C 55 148, 40 136, 40 120 Z"
              fill="#EDFAF4"
              stroke="#B8EBCE"
              strokeWidth="1.5"
            />
            <text x="105" y="125" textAnchor="middle" fontSize="14" fontWeight="600" fill="#065F46">
              Am I okay?
            </text>
          </g>

          <g id="m-question-spend" className="anim-pop">
            <path
              d="M185 120 C 185 102, 202 90, 226 90 L 334 90 C 358 90, 375 102, 375 120 C 375 138, 358 150, 334 150 L 226 150 C 202 150, 185 138, 185 120 Z"
              fill="#FFF1F4"
              stroke="#FCCCD7"
              strokeWidth="1.5"
            />
            <text x="280" y="125" textAnchor="middle" fontSize="13.5" fontWeight="600" fill="#9F1239">
              How much can I spend?
            </text>
          </g>

          <g id="m-question-what-changes" className="anim-pop">
            <path
              d="M100 195 C 100 178, 118 166, 142 166 L 246 166 C 270 166, 288 178, 288 195 C 288 212, 270 224, 246 224 L 142 224 C 118 224, 100 212, 100 195 Z"
              fill="#FFF3EB"
              stroke="#FFCFB3"
              strokeWidth="1.5"
            />
            <text x="194" y="200" textAnchor="middle" fontSize="14" fontWeight="600" fill="#9A3412">
              What changes now?
            </text>
          </g>

          {/* Gentle Scribble on Mobile */}
          <path
            d="M150 78 C 170 85, 180 110, 160 115 C 145 120, 155 140, 175 135"
            fill="none"
            stroke="#E2A97E"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="scribble-stroke"
          />

          {/* Vertical Stream flowing downward */}
          <g id="m-flow-stream">
            <path
              d="M190 230 C 190 270, 170 290, 190 325 C 205 345, 190 365, 190 395"
              fill="none"
              stroke="url(#m-flow-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              className="flow-stroke"
            />
            <circle cx="190" cy="355" r="3" fill="#EA580C" opacity="0.8" />
          </g>

          {/* Bottom Answer Container */}
          <g id="m-answer-card" className="anim-fade" filter="url(#m-answer-glow)">
            <rect
              x="50"
              y="405"
              width="280"
              height="195"
              rx="28"
              fill="#FFFFFF"
              stroke="#E8DEC8"
              strokeWidth="1.5"
            />
            <rect
              x="58"
              y="413"
              width="264"
              height="179"
              rx="22"
              fill="#FFFDF8"
            />

            {/* Checkmark circle */}
            <circle
              cx="190"
              cy="460"
              r="28"
              fill="#FFF0E6"
              stroke="#FED7AA"
              strokeWidth="1.5"
            />
            <path
              d="M178 460 L 186 468 L 202 450"
              fill="none"
              stroke="#EA580C"
              strokeWidth="3.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-path"
            />

            <text
              x="190"
              y="522"
              textAnchor="middle"
              fontSize="26"
              fontWeight="700"
              fill="#0E241E"
              letterSpacing="-0.02em"
            >
              Got it.
            </text>

            <text
              x="190"
              y="550"
              textAnchor="middle"
              fontSize="14"
              fontWeight="500"
              fill="#556963"
            >
              You know where you stand.
            </text>

            <circle cx="140" cy="572" r="3" fill="#047857" />
            <text x="148" y="575" fontSize="10.5" fontWeight="600" fill="#065F46">
              CLEAR &amp; CALM
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
