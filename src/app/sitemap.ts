import type { MetadataRoute } from "next";
import { docsNavigation } from "@/docs/navigation";

export const dynamic = "force-static";

const baseUrl = "https://mdrbx.github.io/nerv-ui";

const examplePaths = [
  "/examples",
  "/examples/auth/login",
  "/examples/auth/register",
  "/examples/blog",
  "/examples/command-center",
  "/examples/comms",
  "/examples/dashboard",
  "/examples/empty",
  "/examples/error",
  "/examples/files",
  "/examples/form",
  "/examples/help",
  "/examples/inventory",
  "/examples/landing",
  "/examples/pilots",
  "/examples/realtime",
  "/examples/report",
  "/examples/saas",
  "/examples/splash",
  "/examples/surveillance",
];

const paths = [
  "",
  "/docs",
  ...docsNavigation.flatMap((section) => section.items.map((item) => item.href)),
  ...examplePaths,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path ? `${baseUrl}${path}/` : `${baseUrl}/`,
    lastModified: new Date("2026-08-28T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
