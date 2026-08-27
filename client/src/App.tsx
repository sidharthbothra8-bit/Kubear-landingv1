/* Living Ledger design: all routes share a warm, editorial system so the product, privacy, tools and learning surfaces feel like one calm picture. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import HowItWorks from "@/pages/HowItWorks";
import Journal from "@/pages/Journal";
import Learn from "@/pages/Learn";
import LearnStudio from "@/pages/LearnStudio";
import MoneyPicture from "@/pages/MoneyPicture";
import NotFound from "@/pages/NotFound";
import PrivacyData from "@/pages/PrivacyData";
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
    <Route path="/how-it-works" component={HowItWorks} />
    <Route path="/your-money-picture" component={MoneyPicture} />
    <Route path="/privacy-data" component={PrivacyData} />
    <Route path="/journal" component={Journal} />
    <Route path="/learn" component={Learn} />
    <Route path="/learn/tools" component={Tools} />
    <Route path="/learn/tools/:slug" component={Tools} />
    <Route path="/learn/:slug" component={Learn} />
    <Route path="/studio/learn" component={LearnStudio} />
    <Route path="/tools" component={LegacyToolsRedirect} />
    <Route path="/tools/:slug" component={LegacyToolsRedirect} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></>;
}

function LegacyToolsRedirect() {
  const [location, setLocation] = useLocation();
  const destination = location.replace(/^\/tools/, "/learn/tools");
  useEffect(() => { setLocation(destination, { replace: true }); }, [destination, setLocation]);
  return <main className="grid min-h-screen place-items-center bg-[#FFFCF7] p-6 text-center"><div><p className="eyebrow text-[#C96632]">Kubear Learn</p><h1 className="mt-3 font-serif text-4xl text-[#152043]">Opening Learn tools.</h1><p className="mt-3 text-[#5E6680]">Your planning tool now lives inside Learn.</p><Link href={destination} className="button button-primary mt-6">Continue to Learn tools</Link></div></main>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
