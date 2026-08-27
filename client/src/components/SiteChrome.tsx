/* Living Ledger modernisation: navigation stays short and familiar, leaving room for the money story instead of fintech jargon. */
import { ArrowUpRight, Menu, MoveRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { MotionObserver } from "@/components/MotionObserver";

const navItems = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/your-money-picture", label: "Your money" },
  { href: "/privacy-data", label: "Privacy" },
  { href: "/journal", label: "Learn" },
  { href: "/tools", label: "Tools" },
];

function Mark() {
  return <img src="/manus-storage/kubear-symbol-mark_f469077a.png" alt="" className="size-9 object-contain" />;
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.045em] ${inverse ? "text-[#FDF9F0]" : "text-[#102B28]"}`} aria-label="Kubear home"><span className={inverse ? "brightness-0 invert" : ""}><Mark /></span><span className="text-[1.3rem]">Kubear</span></Link>;
}

export function Header() {
  const [location] = useLocation();
  return <header className="sticky top-0 z-50 border-b border-[#102B28]/10 bg-[#F4EFE4]/90 backdrop-blur-xl"><a href="#main-content" className="skip-link">Skip to main content</a><div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12"><Brand /><nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? "is-active" : ""}`}>{item.label}</Link>)}</nav><div className="flex items-center gap-2"><a className="button button-primary hidden sm:inline-flex" href="https://kubear.kuberos.in" target="_blank" rel="noreferrer">Join early access <ArrowUpRight className="size-4" /></a><details className="relative lg:hidden"><summary className="grid size-11 cursor-pointer place-items-center rounded-xl border border-[#102B28]/15 bg-[#FEFCF7] text-[#102B28] marker:content-none hover:bg-[#E7DED0]" aria-label="Open navigation menu"><Menu className="size-5" /></summary><nav className="mobile-nav absolute right-0 mt-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-[#102B28]/12 bg-[#FEFCF7] p-2 shadow-[0_22px_55px_rgba(16,43,40,0.16)]" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={`block rounded-xl px-4 py-3 text-sm font-semibold ${location === item.href ? "bg-[#102B28] text-[#FDF9F0]" : "text-[#102B28] hover:bg-[#E7DED0]"}`}>{item.label}</Link>)}<a className="button button-primary mt-2 flex w-full justify-center" href="https://kubear.kuberos.in" target="_blank" rel="noreferrer">Join early access <ArrowUpRight className="size-4" /></a></nav></details></div></div></header>;
}

export function Footer() {
  return <footer className="bg-[#102B28] text-[#FDF9F0]"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"><div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-16"><div><Brand inverse /><p className="mt-5 max-w-sm text-base leading-7 text-[#D9D8CC]">See the money you choose to connect in one clear view.</p><a className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#E2BA66] transition-transform hover:translate-x-1" href="https://kubear.kuberos.in" target="_blank" rel="noreferrer">Join early access <MoveRight className="size-4" /></a></div><div className="grid grid-cols-2 gap-8"><div><p className="eyebrow text-[#E2BA66]">Explore</p><div className="mt-4 grid gap-3 text-sm text-[#D9D8CC]"><Link href="/how-it-works" className="hover:text-white">How it works</Link><Link href="/your-money-picture" className="hover:text-white">Your money</Link><Link href="/journal" className="hover:text-white">Learn</Link><Link href="/tools" className="hover:text-white">Tools</Link></div></div><div><p className="eyebrow text-[#E2BA66]">Trust</p><div className="mt-4 grid gap-3 text-sm text-[#D9D8CC]"><Link href="/privacy-data" className="hover:text-white">Privacy</Link><a href="https://www.kuberos.in/legal/terms" target="_blank" rel="noreferrer" className="hover:text-white">Terms</a><a href="https://www.kuberos.in/legal/delete-account" target="_blank" rel="noreferrer" className="hover:text-white">Delete account</a><a href="mailto:hello@kuberos.in" className="hover:text-white">hello@kuberos.in</a></div></div></div><div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><p className="eyebrow text-[#E2BA66]">One clear next step</p><p className="mt-4 font-serif text-3xl leading-tight text-white">Your money is already there. See it clearly.</p><a className="button button-light mt-6" href="https://kubear.kuberos.in" target="_blank" rel="noreferrer">Join early access <ArrowUpRight className="size-4" /></a></div></div><div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-[#AAB6AE] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Kuberos Technologies. Made in India.</span><span>Preview redesign. Final product details need owner approval.</span></div></div></footer>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><Header /><MotionObserver /><main id="main-content">{children}</main><Footer /></>;
}
