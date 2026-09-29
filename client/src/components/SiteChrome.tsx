/* Money Map: a floating product guide that gives every route a clear name, active position and thumb-ready app handoff. */
import { ArrowRight, ArrowUpRight, BookOpen, Building2, ChevronRight, Home as HomeIcon, Instagram, Layers, Mail, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { MotionObserver } from "@/components/MotionObserver";
import { KubearLogo } from "@/components/KubearLogo";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const mobileNavItems = [
  { href: "/product", label: "Product", icon: Layers },
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
  { href: "/about", label: "About Us", icon: Building2 },
];

export function Brand({ compact = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 font-semibold shrink-0 transition-opacity hover:opacity-90"
      aria-label="Kubear home"
    >
      <KubearLogo
        className={`w-auto aspect-[470/365] transition-all duration-200 ${
          compact ? "h-7.5 sm:h-8" : "h-8.5 sm:h-9"
        }`}
      />
      <span className="font-extrabold tracking-tight text-xl sm:text-[22px] text-[#123630]">
        Kubear
      </span>
    </Link>
  );
}

export function Header({ dark = false }: { dark?: boolean }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/product") return location === "/product";
    if (href === "/about") return location === "/about";
    if (href === "/learn") return location === "/learn" || location.startsWith("/learn") || location.startsWith("/tools");
    if (href === "/" || href === "/#overview") return location === "/" && !window.location.hash;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-2 sm:pt-3 px-3 sm:px-4 lg:px-6">
      <div 
        className={`max-w-6xl mx-auto rounded-[2rem] sm:rounded-full bg-[#FFFDF8]/95 sm:bg-[#FFFDF8]/90 backdrop-blur-md border border-[rgba(18,54,48,0.12)] shadow-[0_12px_36px_rgba(18,54,48,0.08)] pointer-events-auto transition-all duration-300 ${
          isScrolled ? "py-2 sm:py-2 px-3.5 sm:px-5 shadow-[0_14px_40px_rgba(18,54,48,0.12)]" : "py-2 sm:py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo & Title */}
          <Brand compact={isScrolled} />

          {/* Center: Desktop Navigation Pills */}
          <nav 
            className="hidden md:flex items-center gap-1.5 lg:gap-2"
            aria-label="Main Navigation"
          >
            {/* Product Pill */}
            <Link
              href="/product"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] lg:text-[14px] font-semibold border transition-all duration-150 ${
                location === "/product"
                  ? "bg-[#102F28] text-white border-[#102F28] shadow-xs"
                  : "bg-[#FFFDF8] text-[#123630] border-[rgba(18,54,48,0.18)] hover:border-[rgba(18,54,48,0.35)] hover:bg-white"
              }`}
            >
              <Layers className={`size-3.5 ${location === "/product" ? "text-amber-200" : "text-[#C96632]"}`} />
              <span>Product</span>
            </Link>

            {/* Learn & Tools Pill */}
            <Link
              href="/learn"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] lg:text-[14px] font-semibold border transition-all duration-150 ${
                location.startsWith("/learn") || location.startsWith("/tools")
                  ? "bg-[#102F28] text-white border-[#102F28] shadow-xs"
                  : "bg-[#FFFDF8] text-[#123630] border-[rgba(18,54,48,0.18)] hover:border-[rgba(18,54,48,0.35)] hover:bg-white"
              }`}
            >
              <BookOpen className={`size-3.5 ${location.startsWith("/learn") || location.startsWith("/tools") ? "text-amber-200" : "text-[#C96632]"}`} />
              <span>Learn &amp; Tools</span>
            </Link>

            {/* About Us Pill */}
            <Link
              href="/about"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13.5px] lg:text-[14px] font-semibold transition-all duration-150 ${
                location === "/about"
                  ? "bg-[#102F28] text-white shadow-xs border border-[#102F28]"
                  : "bg-[#FFFDF8] text-[#123630] border border-[rgba(18,54,48,0.18)] hover:border-[rgba(18,54,48,0.35)] hover:bg-white"
              }`}
            >
              <Building2 className={`size-3.5 ${location === "/about" ? "text-amber-200" : "text-[#C96632]"}`} />
              <span>About Us</span>
            </Link>
          </nav>

          {/* Right: Primary Vibrant Button - Open Kubear */}
          <div className="flex items-center gap-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF5C2B] to-[#FF451A] hover:from-[#F04D1D] hover:to-[#E03A10] text-white font-bold text-xs sm:text-[13.5px] shadow-[0_4px_12px_rgba(255,92,43,0.35)] hover:shadow-[0_6px_16px_rgba(255,92,43,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 whitespace-nowrap"
            >
              <span>Open Kubear</span>
              <span className="text-base leading-none">→</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#123630] hover:bg-[rgba(18,54,48,0.06)] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-[rgba(18,54,48,0.08)] mt-2 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              <Link
                href="/product"
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-[#123630] hover:bg-[rgba(18,54,48,0.05)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Layers className="size-4 text-[#C96632]" />
                  Product
                </span>
                <ChevronRight className="size-4 text-slate-400" />
              </Link>
              <Link
                href="/learn"
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-[#123630] hover:bg-[rgba(18,54,48,0.05)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="size-4 text-[#C96632]" />
                  Learn &amp; Tools
                </span>
                <ChevronRight className="size-4 text-slate-400" />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-[#123630] hover:bg-[rgba(18,54,48,0.05)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Building2 className="size-4 text-[#C96632]" />
                  About Us
                </span>
                <ChevronRight className="size-4 text-slate-400" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function MobileBottomNav({ dark = false }: { dark?: boolean }) {
  const [location] = useLocation();

  const isNavActive = (href: string) => {
    if (href === "/product") return location === "/product";
    if (href === "/") return location === "/";
    return location === href || (href === "/learn" && (location.startsWith("/learn") || location.startsWith("/tools")));
  };

  return (
    <nav
      className="sm:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-auto"
      aria-label="Mobile Navigation"
    >
      <div className={`w-full max-w-[420px] mx-auto rounded-2xl p-1.5 flex items-center justify-between gap-1 shadow-lg backdrop-blur-md ${
        dark
          ? "bg-[#0F1412]/95 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10"
          : "bg-[#FFFDF8]/95 shadow-[0_10px_30px_rgba(18,54,48,0.12)] border border-[#123630]/10"
      }`}>
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                active
                  ? dark
                    ? "bg-white text-stone-950 shadow-xs"
                    : "bg-[#123630] text-[#FFF8EE] shadow-xs"
                  : dark
                  ? "text-stone-400 hover:text-white"
                  : "text-[#24453E] hover:bg-[#123630]/5"
              }`}
            >
              <Icon className="size-4 shrink-0 mb-0.5" />
              <span className="text-[10px] font-semibold tracking-tight leading-none text-center truncate max-w-full">
                {item.label}
              </span>
            </Link>
          );
        })}
        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-0 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-white bg-[#FF5C2B] hover:bg-[#E54D1F] shadow-[0_2px_0_#9F3017] transition-transform active:scale-95"
        >
          <div className="flex items-center gap-0.5">
            <span className="text-[10.5px] font-black tracking-tight leading-none">App</span>
            <ArrowUpRight className="size-3 shrink-0" />
          </div>
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200/80 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Area: 4-Column Navigation (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-6 items-start">
            
            {/* Column 1: Brand & App links (5 cols) */}
            <div className="md:col-span-5 space-y-4 pr-0 sm:pr-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 group"
                aria-label="Kubear home"
              >
                <KubearLogo className="size-9 w-auto aspect-[470/365]" />
                <span 
                  className="text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900 font-sans"
                >
                  Kubear
                </span>
              </Link>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-xs tracking-[-0.01em]">
                Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you’re on track for your goals.
              </p>

              <div className="pt-2 flex flex-col items-start gap-3.5">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs sm:text-[13px] transition-all duration-200 shadow-sm"
                >
                  <span>Open Web App</span>
                  <ArrowRight className="size-3.5" />
                </a>

                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-slate-900 hover:text-orange-600 transition-colors border-b-2 border-orange-300 pb-0.5"
                >
                  <span>Get on Google Play</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: EXPLORE (2 cols) */}
            <div className="md:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-4 font-mono">
                EXPLORE
              </p>
              <nav className="space-y-3 text-xs sm:text-[13px] font-normal" aria-label="Explore navigation">
                <Link
                  href="/product"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Product
                </Link>
                <Link
                  href="/"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Overview
                </Link>
                <Link
                  href="/learn"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Learn &amp; Tools
                </Link>
                <Link
                  href="/about"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  About Us
                </Link>
              </nav>
            </div>

            {/* Column 3: TRUST (2 cols) */}
            <div className="md:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-4 font-mono">
                TRUST
              </p>
              <nav className="space-y-2.5 text-xs sm:text-[13px] font-normal" aria-label="Trust navigation">
                <Link
                  href="/privacy"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Terms
                </Link>
                <Link
                  href="/consent"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Consent
                </Link>
                <Link
                  href="/data-deletion"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Delete account
                </Link>
                <Link
                  href="/support"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Support
                </Link>
                <Link
                  href="/cookies"
                  className="block text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  Cookies
                </Link>
              </nav>
            </div>

            {/* Column 4: CONNECT (3 cols) */}
            <div className="md:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-4 font-mono">
                CONNECT
              </p>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/hellokubear"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Instagram className="size-5 text-slate-800 shrink-0 stroke-[1.75]" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block leading-tight font-mono">
                      Instagram
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-900 block leading-tight mt-0.5 group-hover:underline">
                      hellokubear
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@kuberos.in"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="size-5 text-slate-800 shrink-0 stroke-[1.75]" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 block leading-tight font-mono">
                      Email
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-900 block leading-tight mt-0.5 group-hover:underline">
                      hello@kuberos.in
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Area: Action & Statement Card (4 cols) */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-8 lg:pt-0 lg:pl-10 xl:pl-14 flex flex-col justify-start">
            <h3 
              className="text-2xl sm:text-[26px] xl:text-[28px] font-semibold text-slate-900 leading-[1.25] tracking-tight"
              style={{ fontFamily: '"Fraunces", "DM Serif Display", Georgia, serif' }}
            >
              See where you stand.<br />
              Know what to do next.
            </h3>

            <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal tracking-[-0.01em]">
              Get a clearer view of your complete financial life.
            </p>

            <div className="mt-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Open Web App</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© 2026 Kuberos Innovations Pvt. Ltd. · Surat, India.</p>
          <p>Understand your complete financial life.</p>
        </div>

      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#16191E]">
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
