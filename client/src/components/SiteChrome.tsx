/* Money Map: a floating product guide that gives every route a clear name, active position and thumb-ready app handoff. */
import { ArrowUpRight, BookOpen, Compass, MoveRight, Smartphone, WalletCards } from "lucide-react";
import { Link, useLocation } from "wouter";
import { MotionObserver } from "@/components/MotionObserver";
import { useEffect, useState } from "react";

const APP_URL = "https://kubear.kuberos.in";
const PLAY_URL = "https://play.google.com/store/apps/details?id=in.kuberos.kubear&pcampaignid=web_share";
const navItems = [
  { href: "/how-it-works", label: "How it works", icon: Compass },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/learn/tools", label: "Tools", icon: WalletCards },
];
function Mark() { return <img src="/manus-storage/kubear-symbol-mark_f469077a.png" alt="" className="size-9 object-contain" />; }
export function Brand({ inverse = false }: { inverse?: boolean }) { return <Link href="/" className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.045em] ${inverse ? "text-[#FFF8EE]" : "text-[#123630]"}`} aria-label="Kubear home"><span className={inverse ? "brightness-0 invert" : ""}><Mark /></span><span className="text-[1.28rem]">Kubear</span></Link>; }

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isNavActive = (href: string) => location === href || (href === "/learn" && location.startsWith("/learn/"));
  return (
    <header className="mm-header mm-header-light">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mm-header-inner">
        <Brand inverse={false} />
        <nav className="map-nav flex items-center" aria-label="Money Map">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`map-nav-link ${isNavActive(item.href) ? "is-active" : ""}`}
              >
                <Icon className="size-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a className="map-open" href={APP_URL}>
            <span>Open Kubear</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
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
                  Learn
                </Link>
                <Link href="/learn/tools" className="hover:text-white">
                  Learn tools
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
export function SiteLayout({ children }: { children: React.ReactNode }) { return <><Header /><MotionObserver /><main id="main-content">{children}</main><Footer /></>; }
