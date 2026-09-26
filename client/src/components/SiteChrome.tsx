/* Money Map: a floating product guide that gives every route a clear name, active position and thumb-ready app handoff. */
import { ArrowUpRight, BookOpen, Building2, Home as HomeIcon, MoveRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { MotionObserver } from "@/components/MotionObserver";
import { KubearLogo } from "@/components/KubearLogo";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const desktopNavItems = [
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
  { href: "/about", label: "About Us", icon: Building2 },
];

const mobileNavItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
  { href: "/about", label: "About", icon: Building2 },
];

export function Brand({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.045em] shrink-0 transition-all duration-200 hover:opacity-90 ${
        inverse ? "text-[#FFF8EE]" : "text-[#123630]"
      }`}
      aria-label="Kubear by Kuberos home"
    >
      <KubearLogo
        className={`w-auto aspect-[470/365] transition-all duration-200 ${
          inverse
            ? "h-8 sm:h-9"
            : compact
            ? "h-6.5 sm:h-7"
            : "h-7.5 sm:h-8.5"
        }`}
        inverse={inverse}
      />
      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight transition-all duration-200 leading-none ${
            compact ? "text-[1.12rem] sm:text-[1.2rem]" : "text-[1.22rem] sm:text-[1.34rem]"
          }`}
        >
          Kubear
        </span>
        <span className="text-[9px] font-mono tracking-wider uppercase text-[#C96632] opacity-80 leading-none mt-0.5 hidden xs:inline-block">
          by Kuberos
        </span>
      </div>
    </Link>
  );
}

export function Header({ dark = false }: { dark?: boolean }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  // If on Homepage, render the exact editorial navigation from download.png
  if (isHome) {
    return (
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-[#FAF7F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(18,54,48,0.06)] border-b border-[#EADBCA]/80 py-3" 
          : "bg-[#FAF7F0] py-4 sm:py-5 border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand */}
          <Brand compact={isScrolled} />

          {/* Center Links (matching download.png: Home, Features, Security, Stories, Blog) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-bold">
            <Link 
              href="/" 
              className="text-[#EA580C] transition-colors relative py-1"
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            </Link>
            <a 
              href="#features" 
              className="text-[#516761] hover:text-[#123630] transition-colors"
            >
              Features
            </a>
            <a 
              href="#security" 
              className="text-[#516761] hover:text-[#123630] transition-colors"
            >
              Security
            </a>
            <a 
              href="#stories" 
              className="text-[#516761] hover:text-[#123630] transition-colors"
            >
              Stories
            </a>
            <Link 
              href="/learn" 
              className="text-[#516761] hover:text-[#123630] transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right: Sign in & Start on Web button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://kubear.kuberos.in"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-bold text-[#123630] hover:text-[#EA580C] transition-colors"
            >
              Sign in
            </a>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#123630] hover:bg-[#0A241E] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start on Web
            </a>
          </div>

        </div>
      </header>
    );
  }

  // Standard Header for other sub-routes
  const isNavActive = (href: string) =>
    location === href || (href === "/learn" && (location.startsWith("/learn") || location.startsWith("/tools")));

  return (
    <header className={`mm-header ${dark ? "mm-header-dark" : "mm-header-light"} ${isScrolled ? "is-scrolled" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mm-header-inner">
        <Brand inverse={dark} compact={isScrolled} />

        {/* Navigation Links */}
        <nav className="flex items-center" aria-label="Money Map">
          {desktopNavItems.map((item) => {
            const Icon = item.icon;
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center gap-2 rounded-xl font-bold whitespace-nowrap transition-all duration-200 ${
                  isScrolled ? "px-3 py-1.5 text-xs" : "px-3.5 py-1.5 text-[0.82rem]"
                } ${
                  active
                    ? dark
                      ? "bg-white text-stone-950 shadow-xs border border-white"
                      : "bg-[#123630] text-[#FFF8EE] shadow-xs border border-[#123630]"
                    : dark
                    ? "bg-white/5 text-stone-300 border border-white/10 hover:bg-white/10 hover:text-white"
                    : "bg-[#123630]/[0.04] text-[#24453E] border border-[#123630]/10 hover:bg-[#123630]/10 hover:border-[#123630]/25 hover:text-[#123630]"
                }`}
              >
                <Icon
                  className={`transition-colors ${
                    isScrolled ? "size-3.5" : "size-4"
                  } ${active ? (dark ? "text-emerald-700" : "text-[#FFB18E]") : (dark ? "text-emerald-400" : "text-[#C96632]")}`}
                />
                <span className={active ? (dark ? "text-stone-950" : "text-[#FFF8EE]") : (dark ? "text-stone-200" : "text-[#143B35]")}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center shrink-0">
          <a
            className={`inline-flex items-center gap-1.5 rounded-[0.65rem] sm:rounded-[0.75rem] bg-[#FF5C2B] text-[#FFF8EE] font-black shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#9F3017] transition-all duration-200 shrink-0 ${
              isScrolled
                ? "px-3 py-1.5 text-xs sm:text-[0.78rem]"
                : "px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[0.82rem]"
            }`}
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span>Start on Web →</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function MobileBottomNav({ dark = false }: { dark?: boolean }) {
  const [location] = useLocation();

  const isNavActive = (href: string) => {
    if (href === "/") return location === "/";
    return location === href || (href === "/learn" && (location.startsWith("/learn") || location.startsWith("/tools")));
  };

  return (
    <nav
      className="sm:hidden fixed bottom-3 left-4 right-4 z-50 pointer-events-auto"
      aria-label="Mobile Navigation"
    >
      <div className={`max-w-xs mx-auto rounded-2xl p-1.5 flex items-center justify-between gap-1 ${
        dark
          ? "bg-[#0F1412] shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10"
          : "bg-[#FFFDF8] shadow-[0_10px_30px_rgba(18,54,48,0.12)] border border-[#123630]/10"
      }`}>
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                active
                  ? dark
                    ? "bg-white text-stone-950 shadow-xs"
                    : "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : dark
                  ? "text-stone-400 hover:text-white"
                  : "text-[#24453E] hover:bg-[#123630]/5"
              }`}
            >
              <Icon className="size-3.5 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-black bg-[#FF5C2B] text-white shadow-[0_2px_0_#9F3017]"
        >
          <span>App</span>
          <ArrowUpRight className="size-3" />
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B231D] text-[#7A9C94] border-t border-[#13332B] pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & App links (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Kubear home"
            >
              <div className="size-10 rounded-full bg-[#081814] border border-[#16362E] flex items-center justify-center p-1.5 shadow-xs transition-transform group-hover:scale-105">
                <KubearLogo className="size-7 w-auto aspect-[470/365]" inverse />
              </div>
              <span className="font-serif text-2xl sm:text-[1.75rem] font-bold tracking-tight text-[#2D5A50] group-hover:text-[#E0EFEA] transition-colors">
                Kubear
              </span>
            </Link>

            <p className="text-sm sm:text-[15px] text-[#6F9088] leading-relaxed max-w-sm font-normal">
              Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you&apos;re on track for your goals.
            </p>

            <div className="pt-2 flex flex-col items-start gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#F95721] hover:text-[#FF7343] transition-all hover:translate-x-1"
              >
                <span>Open Web App</span>
                <span className="text-lg leading-none">→</span>
              </a>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#00A86B] hover:text-[#34D399] transition-all hover:translate-x-1"
              >
                <span>Get on Google Play</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E25C2D] mb-5">
              EXPLORE
            </p>
            <nav className="space-y-3 text-[15px] font-normal" aria-label="Explore navigation">
              <Link
                href="/"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/learn"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Learn &amp; Tools
              </Link>
              <Link
                href="/about"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Column 3: TRUST & Legal Links (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E25C2D] mb-5">
              TRUST
            </p>
            <nav className="space-y-2.5 text-[15px] font-normal" aria-label="Trust and Legal navigation">
              <Link
                href="/privacy"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/consent"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Consent
              </Link>
              <Link
                href="/data-deletion"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Delete account
              </Link>
              <Link
                href="/support"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Support
              </Link>
              <Link
                href="/cookies"
                className="block text-[#6F9088] hover:text-white transition-colors"
              >
                Cookies
              </Link>
              <a
                href="mailto:hello@kuberos.in"
                className="block text-[#6F9088] hover:text-white transition-colors pt-1"
              >
                hello@kuberos.in
              </a>
            </nav>
          </div>

          {/* Column 4: FINANCIAL CLARITY (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E25C2D]">
              FINANCIAL CLARITY
            </p>
            
            <h3 className="font-serif text-2xl sm:text-[1.85rem] font-bold text-white tracking-tight leading-[1.2]">
              Know your number. Sleep with peace of mind.
            </h3>

            <div className="pt-2">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#F95721] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-base shadow-[0_5px_0_#C23A0E,0_12px_24px_rgba(249,87,33,0.35)] hover:shadow-[0_3px_0_#C23A0E,0_8px_16px_rgba(249,87,33,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              >
                <span>Open Web App</span>
                <ArrowUpRight className="size-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#13332B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#4F7168] font-medium">
          <p>© 2026 Kuberos Innovations Pvt. Ltd. · Surat, India.</p>
          <p>Understand your complete financial life.</p>
        </div>

      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#123630]">
      <MotionObserver />
      <Header />
      <div className="flex-1 w-full" id="main-content">
        {children}
      </div>
      <MobileBottomNav />
      <Footer />
    </div>
  );
}
