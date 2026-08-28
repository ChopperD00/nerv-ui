import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdrbx.github.io"),
  title: {
    default: "NERV-UI — Typed React command-center components",
    template: "%s | NERV-UI",
  },
  description:
    "A typed React component library, live examples, and a portable agent skill for original command-center interfaces.",
  applicationName: "NERV-UI",
  keywords: ["React", "TypeScript", "component library", "design system", "agent skills", "Codex", "Claude Code", "dashboard", "HUD"],
  authors: [{ name: "mdrbx", url: "https://github.com/mdrbx" }],
  creator: "mdrbx",
  publisher: "mdrbx",
  alternates: { canonical: "/nerv-ui/" },
  openGraph: {
    type: "website",
    url: "/nerv-ui/",
    siteName: "NERV-UI",
    title: "NERV-UI — Typed React command-center components",
    description: "React components, live examples, and an agent skill for original command-center interfaces.",
    images: [{ url: "/nerv-ui/social-preview.png", width: 1731, height: 909, alt: "NERV-UI abstract command-center interface" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NERV-UI — Typed React command-center components",
    description: "React components, live examples, and an agent skill for original command-center interfaces.",
    images: ["/nerv-ui/social-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "NERV-UI",
  description:
    "A typed React component library and portable agent skill for original command-center interfaces.",
  codeRepository: "https://github.com/mdrbx/nerv-ui",
  url: "https://mdrbx.github.io/nerv-ui/",
  downloadUrl: "https://www.npmjs.com/package/@mdrbx/nerv-ui",
  license: "https://github.com/mdrbx/nerv-ui/blob/master/LICENSE",
  programmingLanguage: ["TypeScript", "React"],
  runtimePlatform: "Web browser",
  author: {
    "@type": "Person",
    name: "mdrbx",
    url: "https://github.com/mdrbx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Fira+Code:wght@400;500;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;700;900&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-nerv-black text-nerv-orange antialiased">
        {children}
      </body>
    </html>
  );
}
