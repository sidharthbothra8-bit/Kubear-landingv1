import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeroVisualPlaceholderProps {
  className?: string;
}

const DEFAULT_PUBLIC_PATH = "/hero-artwork.png?v=3";

export function HeroVisualPlaceholder({ className = "" }: HeroVisualPlaceholderProps) {
  const [loadError, setLoadError] = useState(false);

  return (
    <div className={`relative w-full max-w-[760px] flex items-center justify-center select-none ${className}`}>
      {/* Seamless Integrated Artwork with gentle breathing float */}
      {!loadError ? (
        <motion.div 
          className="relative w-full flex items-center justify-center"
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src={DEFAULT_PUBLIC_PATH}
            alt="Kubear - Your money shouldn't feel like homework"
            className="w-full h-auto max-h-[500px] lg:max-h-[540px] xl:max-h-[580px] object-contain mix-blend-multiply select-none pointer-events-none transition-opacity duration-300"
            onError={() => setLoadError(true)}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ) : (
        <div className="w-full aspect-[16/10] rounded-3xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] flex flex-col items-center justify-center p-8 text-center text-[#94A3B8]">
          <span className="text-sm font-medium">Hero Artwork Visual</span>
        </div>
      )}
    </div>
  );
}
