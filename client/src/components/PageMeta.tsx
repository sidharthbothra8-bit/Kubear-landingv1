/* Living Ledger design: page metadata keeps each calm, human route understandable outside the visual composition. */
import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
};

export function PageMeta({ title, description, path = "/" }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const descriptionNode = document.querySelector('meta[name="description"]');
    if (descriptionNode) descriptionNode.setAttribute("content", description);
    const canonicalNode = document.querySelector('link[rel="canonical"]');
    if (canonicalNode) canonicalNode.setAttribute("href", `https://www.kuberos.in${path}`);
  }, [description, path, title]);

  return null;
}
