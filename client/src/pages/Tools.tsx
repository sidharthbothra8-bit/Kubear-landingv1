/* Mobile-first expansion: the Tools route becomes a working planning workspace with local, transparent calculations. */
import { useLocation } from "wouter";
import { CalculatorExperience, ToolsHub } from "@/components/CalculatorExperience";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { getTool } from "@/lib/contentRegistry";

export default function Tools() {
  const [location] = useLocation();
  const toolSlug = location.match(/^\/(?:learn\/tools|tools)\/([^/]+)$/)?.[1];
  const tool = toolSlug ? getTool(toolSlug) : undefined;
  const title = tool ? `${tool.title} India | Kubear Learn` : "Kubear Learn tools | Simple money answers";
  const description = tool ? tool.description : "Try simple planning tools for salary-day SIPs, home-plan EMIs and a Goa savings goal.";
  return <SiteLayout><PageMeta title={title} description={description} path={tool ? `/learn/tools/${tool.slug}` : "/learn/tools"} />{tool ? <CalculatorExperience slug={tool.slug} /> : <ToolsHub />}</SiteLayout>;
}
