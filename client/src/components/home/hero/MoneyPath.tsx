import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MoneyPathProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  accentColor: string;
  isActive: boolean;
  isDimmed: boolean;
  delay?: number;
  curvatureDirection?: "left" | "right" | "direct";
  baseOpacity?: number;
}

export function MoneyPath({
  startX,
  startY,
  endX,
  endY,
  accentColor,
  isActive,
  isDimmed,
  delay = 0.2,
  curvatureDirection = "direct",
  baseOpacity = 0.4,
}: MoneyPathProps) {
  const shouldReduceMotion = useReducedMotion();

  // Natural organic Bezier calculations
  const dx = endX - startX;
  const dy = endY - startY;

  let cp1X = startX + dx * 0.35;
  let cp1Y = startY + dy * 0.2;
  let cp2X = startX + dx * 0.65;
  let cp2Y = startY + dy * 0.85;

  if (curvatureDirection === "left") {
    cp1X = startX - Math.abs(dx) * 0.22;
    cp2X = endX - Math.abs(dx) * 0.12;
  } else if (curvatureDirection === "right") {
    cp1X = startX + Math.abs(dx) * 0.22;
    cp2X = endX + Math.abs(dx) * 0.12;
  }

  const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  // Subtle warm gold / champagne tone
  const filamentColor = "#E6A23C"; // warm honey/champagne rather than harsh orange
  const effectiveOpacity = isActive ? 0.85 : isDimmed ? 0.12 : baseOpacity;

  return (
    <g
      className="transition-opacity duration-500 pointer-events-none"
      style={{ opacity: effectiveOpacity }}
    >
      {/* Background very soft glow filament */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={filamentColor}
        strokeWidth={isActive ? 3 : 1.5}
        strokeOpacity={isActive ? 0.4 : 0.18}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : 1.5,
          delay: delay,
          ease: "easeInOut",
        }}
      />

      {/* Main refined, organic connection stream */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={filamentColor}
        strokeWidth={isActive ? 1.8 : 1.1}
        strokeOpacity={isActive ? 0.95 : 0.75}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.1 : 1.4,
          delay: delay + 0.1,
          ease: "easeInOut",
        }}
      />

      {/* Very faint energy pulse only when active or hovered */}
      {isActive && (
        <motion.path
          d={pathD}
          fill="none"
          stroke="#FFF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="6 14"
          animate={{
            strokeDashoffset: [0, -40],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
        />
      )}
    </g>
  );
}

