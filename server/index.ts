import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Dev proxy: forward requests from /api/proxy/* to external API to avoid CORS in local dev
  // Example: /api/proxy/auth/register -> ${VITE_API_BASE_URL}/auth/register
  try {
    // lazy load to avoid adding dependency in production bundle
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { handleProxy } = require("./routes/proxy");
    app.use("/api/proxy", handleProxy);
  } catch (e) {
    // ignore if proxy not available
    console.warn("Proxy route not registered", e && e.message ? e.message : e);
  }

  return app;
}
