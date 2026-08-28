import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const fixture = mkdtempSync(join(tmpdir(), "nerv-ui-react-fixture-"));
const npm = process.platform === "win32" ? process.env.ComSpec || "cmd.exe" : "npm";

function npmArgs(args) {
  return process.platform === "win32" ? ["/d", "/s", "/c", "npm", ...args] : args;
}

function run(command, args, cwd, capture = false) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    shell: false,
    stdio: capture ? "pipe" : "inherit",
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with exit code ${result.status}.\n${result.error || ""}\n${result.stderr || ""}`);
  }
  return result.stdout;
}

try {
  const builtCss = readFileSync(join(root, "dist/styles.css"), "utf8");
  if (/\@import\s+["']tailwindcss["']|\@theme\b/.test(builtCss)) {
    throw new Error("dist/styles.css must be compiled and standalone before packaging.");
  }

  const packOutput = run(npm, npmArgs(["pack", "--json", "--pack-destination", fixture]), root, true);
  const packed = JSON.parse(packOutput)[0];
  const tarball = basename(packed.filename);
  const rootPackage = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

  writeFileSync(join(fixture, "package.json"), JSON.stringify({
    private: true,
    type: "module",
    scripts: { typecheck: "tsc --noEmit", build: "vite build", "build:next": "next build" },
    dependencies: {
      "@mdrbx/nerv-ui": `file:./${tarball}`,
      "framer-motion": rootPackage.devDependencies["framer-motion"],
      react: rootPackage.devDependencies.react,
      "react-dom": rootPackage.devDependencies["react-dom"],
    },
    devDependencies: {
      "@types/node": rootPackage.devDependencies["@types/node"],
      "@types/react": rootPackage.devDependencies["@types/react"],
      "@types/react-dom": rootPackage.devDependencies["@types/react-dom"],
      "@vitejs/plugin-react": rootPackage.devDependencies["@vitejs/plugin-react"],
      next: rootPackage.devDependencies.next,
      typescript: rootPackage.devDependencies.typescript,
      vite: "^7.0.0",
    },
  }, null, 2));
  writeFileSync(join(fixture, "index.html"), '<div id="root"></div><script type="module" src="/src.tsx"></script>');
  writeFileSync(join(fixture, "tsconfig.json"), JSON.stringify({ compilerOptions: {
    target: "ES2020", lib: ["ES2020", "DOM", "DOM.Iterable"], module: "ESNext",
    moduleResolution: "Bundler", jsx: "react-jsx", strict: true, skipLibCheck: true,
    noEmit: true,
  }, include: ["src.tsx"] }, null, 2));
  writeFileSync(join(fixture, "src.tsx"), `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BarChart, Card, Gauge, TerminalDisplay } from "@mdrbx/nerv-ui";
import "@mdrbx/nerv-ui/styles.css";

const bars = [
  { label: "API", value: 92, color: "#00FFFF" },
  { label: "QUEUE", value: 68, color: "#FF9900" },
];

function App() {
  return <main style={{ minHeight: "100vh", background: "#000", padding: 24 }}>
    <Card title="SERVICE READINESS">
      <Gauge value={68} label="LOAD" color="orange" />
      <BarChart bars={bars} unit="%" color="cyan" showGrid />
      <TerminalDisplay lines={["CONTROL PLANE ONLINE", "NO ACTIVE INCIDENTS"]} color="green" />
    </Card>
  </main>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
`);
  mkdirSync(join(fixture, "app"));
  writeFileSync(join(fixture, "app/layout.tsx"), `import "@mdrbx/nerv-ui/styles.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
`);
  writeFileSync(join(fixture, "app/page.tsx"), `"use client";

import { Gauge, TerminalDisplay } from "@mdrbx/nerv-ui";

export default function Page() {
  return <main><Gauge value={74} label="READINESS" color="cyan" /><TerminalDisplay lines={["SYSTEM READY"]} /></main>;
}
`);
  writeFileSync(join(fixture, "next.config.mjs"), "export default { output: 'export' };\n");

  run(npm, npmArgs(["install", "--no-audit", "--no-fund"]), fixture);
  run(npm, npmArgs(["run", "typecheck"]), fixture);
  run(npm, npmArgs(["run", "build"]), fixture);
  run(npm, npmArgs(["run", "build:next"]), fixture);
  console.log(`React fixture installed ${packed.name}@${packed.version}, type-checked, and built with Vite and Next.js.`);
} finally {
  rmSync(fixture, { recursive: true, force: true });
}
