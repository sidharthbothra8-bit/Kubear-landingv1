/* Living Ledger design: all routes share a warm, editorial system so the product, privacy, tools and learning surfaces feel like one calm picture. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Journal from "@/pages/Journal";
import Learn from "@/pages/Learn";
import LearnStudio from "@/pages/LearnStudio";
import NotFound from "@/pages/NotFound";
import PrivacyData from "@/pages/PrivacyData";
import Terms from "@/pages/Terms";
import Consent from "@/pages/Consent";
import DataDeletion from "@/pages/DataDeletion";
import Support from "@/pages/Support";
import Cookies from "@/pages/Cookies";
import Tools from "@/pages/Tools";
import { Link, Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return <><ScrollToTop /><Switch>
    <Route path="/" component={Home} />
    <Route path="/how-it-works" component={LegacyHomeRedirect} />
    <Route path="/your-money-picture" component={LegacyHomeRedirect} />
    <Route path="/money-view" component={LegacyHomeRedirect} />
    <Route path="/privacy" component={PrivacyData} />
    <Route path="/privacy-data" component={PrivacyData} />
    <Route path="/terms" component={Terms} />
    <Route path="/terms-of-use" component={Terms} />
    <Route path="/consent" component={Consent} />
    <Route path="/consent-notice" component={Consent} />
    <Route path="/data-deletion" component={DataDeletion} />
    <Route path="/delete-account" component={DataDeletion} />
    <Route path="/support" component={Support} />
    <Route path="/grievances" component={Support} />
    <Route path="/cookies" component={Cookies} />
    <Route path="/cookie-notice" component={Cookies} />
    <Route path="/journal" component={Journal} />
    <Route path="/learn" component={Learn} />
    <Route path="/learn/tools" component={Tools} />
    <Route path="/learn/tools/:slug" component={Tools} />
    <Route path="/learn/:slug" component={Learn} />
    <Route path="/studio/learn" component={LearnStudio} />
    <Route path="/tools" component={LegacyToolsRedirect} />
    <Route path="/tools/:slug" component={LegacyToolsRedirect} />
    <Route path="/desk" component={LegacyDeskRedirect} />
    <Route path="/desk/:slug" component={LegacyDeskRedirect} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></>;
}

function LegacyHomeRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/", { replace: true });
  }, [setLocation]);
  return (
    <main className="grid min-h-screen place-items-center bg-[#FAF7F0] p-6 text-center">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#D44722]">Kubear</p>
        <h1 className="mt-3 font-serif text-4xl text-[#123630]">Returning to Home</h1>
        <p className="mt-3 text-[#5A6E69]">The product story is fully integrated on our homepage.</p>
        <Link href="/" className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#123630] px-6 text-sm font-extrabold text-[#FFFDF8] mt-6">
          Continue to Home
        </Link>
      </div>
    </main>
  );
}

function LegacyToolsRedirect() {
  const [location, setLocation] = useLocation();
  const destination = location.replace(/^\/tools/, "/learn/tools");
  useEffect(() => { setLocation(destination, { replace: true }); }, [destination, setLocation]);
  return <main className="grid min-h-screen place-items-center bg-[#FFFCF7] p-6 text-center"><div><p className="eyebrow text-[#C96632]">Kubear Learn & Tools</p><h1 className="mt-3 font-serif text-4xl text-[#152043]">Opening Learn & Tools.</h1><p className="mt-3 text-[#5E6680]">Planning tools now live inside the Learn & Tools desk.</p><Link href={destination} className="button button-primary mt-6">Continue to Learn & Tools</Link></div></main>;
}

function LegacyDeskRedirect() {
  const [location, setLocation] = useLocation();
  const destination = location.replace(/^\/desk/, "/learn");
  useEffect(() => {
    setLocation(destination, { replace: true });
  }, [destination, setLocation]);
  return (
    <main className="grid min-h-screen place-items-center bg-[#FAF7F0] p-6 text-center">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#C96632]">Kubear Learn & Tools</p>
        <h1 className="mt-3 font-serif text-4xl text-[#123630]">Opening the Learn & Tools Desk</h1>
        <p className="mt-3 text-[#5A6E69]">Your planning tools and money guides live together.</p>
        <Link href={destination} className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#123630] px-6 text-sm font-extrabold text-[#FFFDF8] mt-6">
          Continue to Learn & Tools
        </Link>
      </div>
    </main>
  );
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
