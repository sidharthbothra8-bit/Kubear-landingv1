/* Money Map: a floating product guide that gives every route a clear name, active position and thumb-ready app handoff. */
import { ArrowUpRight, BookOpen, Home as HomeIcon, MoveRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { MotionObserver } from "@/components/MotionObserver";
import { KubearLogo } from "@/components/KubearLogo";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const desktopNavItems = [
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
];

const mobileNavItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
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

  const isNavActive = (href: string) =>
    location === href || (href === "/learn" && (location.startsWith("/learn") || location.startsWith("/tools")));

  return (
    <header className={`mm-header ${dark ? "mm-header-dark" : "mm-header-light"} ${isScrolled ? "is-scrolled" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mm-header-inner">
        <Brand inverse={dark} compact={isScrolled} />

        {/* Navigation Links - always centered and visible */}
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

        {/* Action Button (Seamlessly becomes compact on scroll) */}
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

export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer className={dark ? "bg-[#050706] text-stone-400 border-t border-white/10" : "bg-[#FAF7F0] text-[#123630] border-t-2 border-[#123630]/12"}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-[clamp(0.75rem,2vw,3rem)]">
          <div>
            <Brand inverse={dark} />
            <p className={`mt-3 sm:mt-5 max-w-sm text-[clamp(0.75rem,0.95vw,1rem)] leading-relaxed ${dark ? "text-stone-400" : "text-[#516761]"}`}>
              Kubear understands your complete financial life and tells you what you can afford, what to do next, and whether you’re on track for your goals.
            </p>
            <div className="mt-4 sm:mt-7 flex flex-col items-start gap-2 sm:gap-3">
              <a
                className="inline-flex items-center gap-1.5 text-[clamp(0.75rem,0.9vw,0.875rem)] font-bold text-[#FF5C2B] transition-transform hover:translate-x-1"
                href={APP_URL}
              >
                Open Web App <MoveRight className="size-3 sm:size-4" />
              </a>
              <a
                className={`inline-flex items-center gap-1.5 text-[clamp(0.75rem,0.9vw,0.875rem)] font-bold transition-transform hover:translate-x-1 ${
                  dark ? "text-emerald-400 hover:text-emerald-300" : "text-[#047857]"
                }`}
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get on Google Play <ArrowUpRight className="size-3 sm:size-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div>
              <p className="eyebrow text-[#CD4623] font-bold text-[clamp(0.7rem,0.8vw,0.875rem)]">Explore</p>
              <div className={`mt-2 sm:mt-4 grid gap-2 sm:gap-3 text-[clamp(0.72rem,0.85vw,0.875rem)] ${dark ? "text-stone-400" : "text-[#41534D]"}`}>
                <Link href="/" className="hover:text-[#FF5C2B] transition-colors">
                  Overview
                </Link>
                <Link href="/learn" className="hover:text-[#FF5C2B] transition-colors">
                  Learn & Tools
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow text-[#CD4623] font-bold text-[clamp(0.7rem,0.8vw,0.875rem)]">Trust</p>
              <div className={`mt-2 sm:mt-4 grid gap-1.5 sm:gap-2.5 text-[clamp(0.7rem,0.82vw,0.875rem)] ${dark ? "text-stone-400" : "text-[#41534D]"}`}>
                <Link href="/privacy" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Terms
                </Link>
                <Link href="/consent" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Consent
                </Link>
                <Link href="/data-deletion" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Delete account
                </Link>
                <Link href="/support" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Support
                </Link>
                <Link href="/cookies" className="hover:text-[#FF5C2B] transition-colors truncate">
                  Cookies
                </Link>
                <a href="mailto:hello@kuberos.in" className="hover:text-[#FF5C2B] transition-colors truncate">
                  hello@kuberos.in
                </a>
              </div>
            </div>
          </div>
          <div className={`border-l pl-3 sm:pl-6 lg:pl-10 ${
            dark ? "border-white/10" : "border-[#123630]/10"
          }`}>
            <p className="eyebrow text-[#CD4623] font-bold text-[clamp(0.7rem,0.8vw,0.875rem)]">Financial Clarity</p>
            <p className={`mt-2 sm:mt-4 font-serif text-[clamp(0.95rem,1.4vw,1.75rem)] leading-tight ${dark ? "text-white" : "text-[#123630]"}`}>
              Know your number. Sleep with peace of mind.
            </p>
            <a className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF5C2B] hover:bg-[#E04B19] text-white px-3 sm:px-6 py-2 sm:py-3 text-[clamp(0.72rem,0.85vw,0.875rem)] font-bold shadow-[0_3px_0_#9F3017] hover:shadow-[0_2px_0_#9F3017] transition-all mt-3 sm:mt-6" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-3.5 sm:size-4" />
            </a>
          </div>
        </div>
        <div className={`mt-10 sm:mt-16 flex flex-row items-center justify-between border-t pt-4 sm:pt-6 text-[clamp(0.65rem,0.8vw,0.75rem)] ${
          dark ? "border-white/10 text-stone-500" : "border-[#123630]/10 text-[#6B807A]"
        }`}>
          <span>© 2026 Kuberos Innovations Pvt. Ltd. · Surat, India.</span>
          <span className="text-right">Understand your complete financial life.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? "bg-[#060807] text-white min-h-screen selection:bg-emerald-500/30" : "min-h-screen"}>
      <Header dark={dark} />
      <MotionObserver />
      <main id="main-content" className="pb-28 sm:pb-0">{children}</main>
      <MobileBottomNav dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
