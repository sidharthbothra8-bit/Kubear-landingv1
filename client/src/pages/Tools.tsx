/* Mobile-first expansion: the Tools route becomes a working planning workspace with local, transparent calculations. */
import { useRoute } from "wouter";
import { CalculatorExperience, ToolsHub } from "@/components/CalculatorExperience";
import { PageMeta } from "@/components/PageMeta";
import { SiteLayout } from "@/components/SiteChrome";
import { getTool } from "@/lib/contentRegistry";

export default function Tools() {
  const [, params] = useRoute("/tools/:slug");
  const tool = params?.slug ? getTool(params.slug) : undefined;
  const title = tool ? `${tool.title} India | Kubear Tools` : "Kubear Tools | Simple money answers";
  const description = tool ? tool.description : "Explore simple planning calculators for SIP, EMI and a Goa savings goal.";
  return <SiteLayout><PageMeta title={title} description={description} path={tool ? `/tools/${tool.slug}` : "/tools"} />{tool ? <CalculatorExperience slug={tool.slug} /> : <ToolsHub />}</SiteLayout>;
}
