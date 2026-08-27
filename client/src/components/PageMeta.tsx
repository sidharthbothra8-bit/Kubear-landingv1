/* Living Ledger design: page metadata keeps each calm, human route understandable outside the visual composition. */
import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

const origin = "https://www.kuberos.in";
const defaultImage = "https://www.kuberos.in/manus-storage/kubear-money-orbit-master_fa60fb1b.png";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let node = document.querySelector<HTMLMetaElement>(selector);
  if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, key); document.head.appendChild(node); }
  node.setAttribute("content", content);
}

export function PageMeta({ title, description, path = "/", image = defaultImage, type = "website" }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    const canonicalNode = document.querySelector('link[rel="canonical"]');
    if (canonicalNode) canonicalNode.setAttribute("href", `${origin}${path}`);
    const segments = path.split("/").filter(Boolean);
    const breadcrumb = {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: segments.map((segment, index, parts) => ({ "@type": "ListItem", position: index + 1, name: segment.replaceAll("-", " "), item: `${origin}/${parts.slice(0, index + 1).join("/")}` })),
    };
    let schema = document.querySelector<HTMLScriptElement>("#kubear-breadcrumb-schema");
    if (!segments.length) { schema?.remove(); return; }
    if (!schema) { schema = document.createElement("script"); schema.id = "kubear-breadcrumb-schema"; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(breadcrumb);
  }, [description, image, path, title, type]);

  return null;
}
