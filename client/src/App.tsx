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
import { Route, Switch } from "wouter";
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
    <Route path="/learn/:slug" component={Learn} />
    <Route path="/studio/learn" component={LearnStudio} />
    <Route path="/tools" component={Tools} />
    <Route path="/tools/:slug" component={Tools} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
