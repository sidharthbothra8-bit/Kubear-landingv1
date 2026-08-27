/* Navigation rule: new pages and browser history routes begin at the top, leaving hash links to retain their intended anchor. */
import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  }, [location]);
  return null;
}
