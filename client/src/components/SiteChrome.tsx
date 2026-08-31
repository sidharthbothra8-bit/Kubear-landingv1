/* Money Map: a floating product guide that gives every route a clear name, active position and thumb-ready app handoff. */
import { ArrowUpRight, BookOpen, Compass, Home as HomeIcon, MoveRight, Sparkles, WalletCards } from "lucide-react";
import { Link, useLocation } from "wouter";
import { MotionObserver } from "@/components/MotionObserver";
import { KubearLogo } from "@/components/KubearLogo";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";

const desktopNavItems = [
  { href: "/how-it-works", label: "How it works", icon: Compass },
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
];

const mobileNavItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/how-it-works", label: "How it works", icon: Sparkles },
  { href: "/learn", label: "Learn & Tools", icon: BookOpen },
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.045em] shrink-0 transition-opacity hover:opacity-90 ${
        inverse ? "text-[#FFF8EE]" : "text-[#123630]"
      }`}
      aria-label="Kubear home"
    >
      <KubearLogo className={inverse ? "size-8 sm:size-9" : "size-7 sm:size-8"} inverse={inverse} />
      <span className="text-[1.18rem] font-black sm:text-[1.32rem] tracking-tight">Kubear</span>
    </Link>
  );
}

export function Header() {
  const [location] = useLocation();

  const isNavActive = (href: string) =>
    location === href || (href === "/learn" && (location.startsWith("/learn") || location.startsWith("/tools")));

  return (
    <header className="mm-header mm-header-light">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mm-header-inner">
        <Brand inverse={false} />
        
        {/* Desktop / Tablet Navigation Links */}
        <nav className="hidden sm:flex items-center gap-1.5" aria-label="Money Map">
          {desktopNavItems.map((item) => {
            const Icon = item.icon;
            const active = isNavActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[0.65rem] font-bold text-[0.82rem] whitespace-nowrap transition-all ${
                  active
                    ? "bg-[#123630] text-[#FFF8EE] shadow-sm"
                    : "text-[#3E5750] hover:text-[#123630] hover:bg-[#123630]/5"
                }`}
              >
                <Icon className={`size-3.5 ${active ? "text-[#FFF8EE]" : "text-[#3E5750]"}`} />
                <span className={active ? "text-[#FFF8EE]" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Spacious and perfectly aligned on both mobile & desktop) */}
        <div className="flex items-center shrink-0">
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[0.65rem] sm:rounded-[0.75rem] bg-[#FF5C2B] text-[#FFF8EE] font-black text-xs sm:text-[0.82rem] shadow-[0_3px_0_#9F3017] hover:shadow-[0_4px_0_#9F3017] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#9F3017] transition-all shrink-0"
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span>Open App</span>
            <ArrowUpRight className="size-3.5" />
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
      className="sm:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-auto"
      aria-label="Mobile Navigation"
    >
      <div className="max-w-md mx-auto bg-[#FFFDF8] rounded-2xl shadow-[0_10px_30px_rgba(18,54,48,0.1)] p-1.5 flex items-center justify-between gap-1">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const active = isNavActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 min-h-[46px] flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                active
                  ? "bg-[#123630] text-[#FFF8EE] font-bold shadow-sm"
                  : "text-[#516761] hover:text-[#123630] hover:bg-[#123630]/5 font-medium"
              }`}
            >
              <Icon className={`size-4 mb-0.5 ${active ? "text-[#FFF8EE]" : "text-[#516761]"}`} />
              <span className={`text-[10px] tracking-tight leading-none whitespace-nowrap ${active ? "text-[#FFF8EE]" : ""}`}>{item.label}</span>
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
                Open Kubear Web App <MoveRight className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-[#F4D277] transition-transform hover:translate-x-1"
                href={PLAY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get it on Google Play <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-[#F4D277]">Explore</p>
              <div className="mt-4 grid gap-3 text-sm text-[#D8E8DE]">
                <Link href="/how-it-works" className="hover:text-white">
                  How it works
                </Link>
                <Link href="/learn" className="hover:text-white">
                  Learn & Tools
                </Link>
                <Link href="/journal" className="hover:text-white">
                  Journal
                </Link>
              </div>
            </div>
            <div>
              <p className="eyebrow text-[#F4D277]">Trust</p>
              <div className="mt-4 grid gap-3 text-sm text-[#D8E8DE]">
                <Link href="/privacy-data" className="hover:text-white">
                  Privacy
                </Link>
                <a href="https://www.kuberos.in/legal/terms" target="_blank" rel="noreferrer" className="hover:text-white">
                  Terms
                </a>
                <a
                  href="https://www.kuberos.in/legal/delete-account"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Delete account
                </a>
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
              Use the web app <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-[#AAB6AE] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Kuberos Technologies. Made with care in India.</span>
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
      <main id="main-content" className="pb-20 sm:pb-0">{children}</main>
      <MobileBottomNav />
      <Footer />
    </>
  );
}
