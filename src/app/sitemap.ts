import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://mdrbx.github.io/nerv-ui";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/docs/", "/docs/getting-started/installation/", "/docs/components/button/", "/examples/", "/examples/dashboard/", "/examples/surveillance/", "/examples/auth/login/"].map((path) => ({
    url: path ? `${baseUrl}${path}` : `${baseUrl}/`,
    lastModified: new Date("2026-08-28T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
