import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LifeNodeData } from "./types";
import {
  HouseVignette,
  PlantVignette,
  TravelVignette,
  FamilyVignette,
  ShieldVignette,
  CardsVignette,
  ShoppingVignette,
} from "./VignetteArtwork";

interface LifeNodeProps {
  node: LifeNodeData;
  isActive: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  index: number;
}

export function LifeNode({ node, isActive, isDimmed, onHover, index }: LifeNodeProps) {
  const shouldReduceMotion = useReducedMotion();

  // Gentle floating ambient drift parameters per node
  const floatY = shouldReduceMotion ? 0 : [0, -3.5, 0, 2.5, 0];
  const floatDuration = 5.2 + (index % 3) * 0.9;
  const baseScale = node.scale || 1.0;

  // Render 3D realistic miniature vignette
  const renderVignette = () => {
    switch (node.iconType) {
      case "home":
        return <HouseVignette />;
      case "investments":
        return <PlantVignette />;
      case "travel":
        return <TravelVignette />;
      case "family":
        return <FamilyVignette />;
      case "emergency":
        return <ShieldVignette />;
      case "emi":
        return <CardsVignette />;
      case "everyday":
        return <ShoppingVignette />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute cursor-pointer select-none group"
      style={{
        left: `${node.desktopPos.xPercent}%`,
        top: `${node.desktopPos.yPercent}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isActive ? 40 : node.depth === "front" ? 32 : 24,
      }}
      initial={{ opacity: 0, scale: 0.82, y: 12 }}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        scale: isActive ? baseScale * 1.05 : baseScale,
        y: floatY,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { type: "spring", stiffness: 350, damping: 25 },
        y: {
          repeat: Infinity,
          duration: floatDuration,
          delay: node.floatingDelay,
          ease: "easeInOut",
        },
      }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      aria-label={`${node.label}: ${node.formattedAmount}`}
    >
      {/* Node container: Object-first hierarchy (70% object, 30% label) */}
      <div className="flex flex-col items-center gap-1.5 transition-transform duration-200">
        
        {/* 1. 3D Miniature Object Artwork (Hero of the Node) */}
        <div className="relative">
          {/* Subtle soft backdrop bloom */}
          <div
            className="absolute -inset-3.5 rounded-full blur-md transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: node.accentColor,
              opacity: isActive ? 0.3 : 0.08,
            }}
          />

          {/* Spark Accents */}
          {node.id === "home" && (
            <div className="absolute -top-2.5 -right-3 pointer-events-none select-none text-[#EA580C]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M 6 18 L 16 6" />
                <path d="M 12 20 L 22 8" />
              </svg>
            </div>
          )}

          {node.id === "family" && (
            <div className="absolute -top-2 -right-3 pointer-events-none select-none text-[#EA580C]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M 4 8 L 14 20" />
                <path d="M 10 6 L 20 18" />
              </svg>
            </div>
          )}

          {node.id === "everyday" && (
            <div className="absolute -top-2 -left-3 pointer-events-none select-none text-[#EA580C]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M 18 18 L 8 6" />
                <path d="M 14 20 L 4 8" />
              </svg>
            </div>
          )}

          {renderVignette()}
        </div>

        {/* 2. Minimalist, Refined Floating Caption (Non-dominant, subtle container) */}
        <div
          className={`px-3 py-1 rounded-xl transition-all duration-200 text-center ${node.labelWidth || ""} ${
            isActive
              ? "bg-white border border-[#0A241E]/40 shadow-md ring-1 ring-[#0A241E]/15 -translate-y-0.5"
              : "bg-white/95 backdrop-blur-sm border border-[#EBE4D8]/80 shadow-[0_3px_10px_rgba(0,0,0,0.05)] hover:border-[#D5CBBC]"
          }`}
        >
          <div className="text-[11px] font-medium text-[#52525B] leading-tight whitespace-nowrap">
            {node.label}
          </div>
          <div className="text-[13px] font-bold text-[#18181B] tabular-nums leading-tight tracking-tight mt-0.5 font-serif">
            {node.formattedAmount}
          </div>
        </div>

        {/* Micro-context on hover */}
        <div
          className={`transition-all duration-200 pointer-events-none overflow-hidden ${
            isActive ? "max-h-12 opacity-100 -mt-0.5" : "max-h-0 opacity-0"
          }`}
        >
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0A241E] text-white text-[10px] font-medium shadow-sm whitespace-nowrap">
            {node.microContext}
          </span>
        </div>
      </div>
    </motion.div>
  );
}


