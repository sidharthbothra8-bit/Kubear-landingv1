import React, { useState } from "react";

interface LogoProps {
  className?: string;
  size?: number | string;
  inverse?: boolean;
  alt?: string;
}

/**
 * KubearLogo component loads the SVG directly from /branding/logo.svg (or /branding/logo-dark.svg).
 * To replace the logo everywhere across the app, simply paste your SVG file into:
 * /client/public/branding/logo.svg
 */
export function KubearLogo({
  className = "size-8",
  inverse = false,
  alt = "Kubear Logo",
}: LogoProps) {
  const [srcError, setSrcError] = useState(false);

  // Use inverse logo for dark mode sections if available, or standard logo
  const logoSrc = srcError
    ? "/logo.svg"
    : inverse
    ? "/branding/logo-dark.svg"
    : "/branding/logo.svg";

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`object-contain inline-block shrink-0 ${className}`}
      onError={() => {
        if (!srcError) setSrcError(true);
      }}
      loading="eager"
      decoding="async"
    />
  );
}

