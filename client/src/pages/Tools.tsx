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
  const title = tool ? `${tool.title} India | Kubear by Kuberos` : "Kubear Money Calculators by Kuberos | Simple Financial Tools for India";
  const description = tool ? `${tool.description} Built by Kuberos Innovations Pvt. Ltd.` : "Free interactive calculators for SIP step-up, home loan prepayment EMIs, Goa vacation sinking funds, and flatmate expense splits by Kuberos Innovations.";
  return <SiteLayout><PageMeta title={title} description={description} path={tool ? `/learn/tools/${tool.slug}` : "/learn/tools"} />{tool ? <CalculatorExperience slug={tool.slug} /> : <ToolsHub />}</SiteLayout>;
}
