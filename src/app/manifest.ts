import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NERV-UI",
    short_name: "NERV-UI",
    description: "Typed React command-center components and agent skill.",
    start_url: "/nerv-ui/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ff9900",
    icons: [{ src: "/nerv-ui/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
