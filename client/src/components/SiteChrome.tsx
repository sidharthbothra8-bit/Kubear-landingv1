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

export function Header() {
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
    <header className={`mm-header mm-header-light ${isScrolled ? "is-scrolled" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mm-header-inner">
        <Brand inverse={false} compact={isScrolled} />

        {/* Desktop / Tablet Navigation Links */}
        <nav className="hidden sm:flex items-center" aria-label="Money Map">
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
                    ? "bg-[#123630] text-[#FFF8EE] shadow-xs border border-[#123630]"
                    : "bg-[#123630]/[0.04] text-[#24453E] border border-[#123630]/10 hover:bg-[#123630]/10 hover:border-[#123630]/25 hover:text-[#123630]"
                }`}
              >
                <Icon
                  className={`transition-colors ${
                    isScrolled ? "size-3.5" : "size-4"
                  } ${active ? "text-[#FFB18E]" : "text-[#C96632]"}`}
                />
                <span className={active ? "text-[#FFF8EE]" : "text-[#143B35]"}>{item.label}</span>
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

export function MobileBottomNav() {
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
      <div className="max-w-xs mx-auto bg-[#FFFDF8] rounded-2xl shadow-[0_10px_30px_rgba(18,54,48,0.12)] border border-[#123630]/10 p-1.5 flex items-center justify-between gap-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl transition-all ${
                active
                  ? "bg-[#123630] text-[#FFF8EE] font-bold shadow-xs"
                  : "text-[#516761] hover:text-[#123630] hover:bg-[#123630]/5 font-medium"
              }`}
            >
              <Icon className={`size-4 ${active ? "text-[#FFB18E]" : "text-[#516761]"}`} />
              <span className={`text-xs tracking-tight font-bold whitespace-nowrap ${active ? "text-[#FFF8EE]" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#123630] text-[#FFFDF8] border-t border-[#1C453E]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-16">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-sm text-base leading-7 text-[#D8E8DE]">
              Less chasing money. More space to live your week. Zero bank passwords, zero SMS scraping.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFB18E] transition-transform hover:translate-x-1"
                href={APP_URL}
              >
                Open Web App <MoveRight className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F4D277] transition-transform hover:translate-x-1"
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get on Google Play <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-[#F4D277]">Explore</p>
              <div className="mt-4 grid gap-3 text-sm text-[#D8E8DE]">
                <Link href="/" className="hover:text-white">
                  Overview
                </Link>
                <Link href="/learn" className="hover:text-white">
                  Learn & Tools
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow text-[#F4D277]">Trust</p>
              <div className="mt-4 grid gap-3 text-sm text-[#D8E8DE]">
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
                <Link href="/consent" className="hover:text-white">
                  Consent
                </Link>
                <Link href="/data-deletion" className="hover:text-white">
                  Delete account
                </Link>
                <Link href="/support" className="hover:text-white">
                  Support & Grievances
                </Link>
                <Link href="/cookies" className="hover:text-white">
                  Cookies & Storage
                </Link>
                <a href="mailto:hello@kuberos.in" className="hover:text-white">
                  hello@kuberos.in
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow text-[#FFB18E]">Your next view</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-white">
              Money moves. Your view can keep up.
            </p>
            <a className="button button-light mt-6" href={APP_URL}>
              Open Web App <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-[#AAB6AE] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Kuberos Innovations Pvt. Ltd. · Surat, India.</span>
          <span>For everyday Indian money moments.</span>
        </div>
      </div>
    </footer>
  );
}
export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MotionObserver />
      <main id="main-content" className="pb-28 sm:pb-0">{children}</main>
      <MobileBottomNav />
      <Footer />
    </>
  );
}
