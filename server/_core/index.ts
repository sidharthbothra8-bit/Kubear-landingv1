import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { runLearnPublication } from "../learnPublication";
import { getPublishedLearnPaths } from "../learn";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const distSitemap = path.resolve(process.cwd(), "dist", "public", "sitemap.xml");
      const clientSitemap = path.resolve(process.cwd(), "client", "public", "sitemap.xml");
      const sitemapPath = fs.existsSync(distSitemap) ? distSitemap : clientSitemap;
      if (fs.existsSync(sitemapPath)) {
        const xml = await fs.promises.readFile(sitemapPath, "utf8");
        return res.type("application/xml").send(xml);
      }
      const stablePaths = ["/", "/about", "/how-it-works", "/privacy", "/privacy-data", "/terms", "/terms-of-use", "/consent", "/consent-notice", "/data-deletion", "/delete-account", "/support", "/grievances", "/cookies", "/cookie-notice", "/journal", "/learn", "/learn/tools", "/learn/start-here", "/learn/salary-spending", "/learn/saving-buffers", "/learn/debt-credit", "/learn/investing", "/learn/goals-decisions", "/learn/home-household", "/learn/insurance-protection", "/learn/tax-records", "/learn/long-term"];
      const articles = await getPublishedLearnPaths();
      const urlset = [
        ...stablePaths.map(path => ({ path, updatedAt: null })),
        ...articles.map(article => ({ path: article.canonicalPath, updatedAt: article.updatedAt })),
      ];
      const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset.map(({ path, updatedAt }) => `<url><loc>https://www.kuberos.in${path}</loc>${updatedAt ? `<lastmod>${updatedAt.toISOString().slice(0, 10)}</lastmod>` : ""}</url>`).join("")}</urlset>`;
      res.type("application/xml").send(xml);
    } catch {
      res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.kuberos.in/learn</loc></url></urlset>`);
    }
  });
  app.post("/api/scheduled/publish-learn", runLearnPublication);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
