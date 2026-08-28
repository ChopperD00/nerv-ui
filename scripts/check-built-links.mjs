import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = join(root, "out");
const basePath = "/nerv-ui";

if (!existsSync(output)) {
  throw new Error("Static output is missing. Run `npm run build` before `npm run check:links`.");
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeForHtml(path) {
  const route = relative(output, dirname(path)).replaceAll("\\", "/");
  return route ? `/${route}/` : "/";
}

function targetCandidates(href, source) {
  const withoutFragment = href.split(/[?#]/, 1)[0];
  let pathname = decodeURIComponent(withoutFragment);
  if (pathname === basePath) pathname = "/";
  if (pathname.startsWith(`${basePath}/`)) pathname = pathname.slice(basePath.length);

  const sourceRoute = routeForHtml(source);
  const route = pathname.startsWith("/")
    ? pathname
    : new URL(pathname, `https://local.invalid${sourceRoute}`).pathname;
  const target = join(output, route.replace(/^\/+/, ""));

  if (route.endsWith("/")) return [join(target, "index.html")];
  if (extname(route)) return [target];
  return [target, `${target}.html`, join(target, "index.html")];
}

const htmlFiles = walk(output).filter((path) => path.endsWith(".html"));
const failures = [];
let checked = 0;

for (const source of htmlFiles) {
  const html = readFileSync(source, "utf8");
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href || /^(?:#|https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    checked += 1;
    const candidates = targetCandidates(href, source);
    if (!candidates.some((candidate) => existsSync(candidate) && statSync(candidate).isFile())) {
      failures.push(`${relative(output, source)} -> ${href}`);
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Broken internal links:\n${[...new Set(failures)].join("\n")}`);
}

console.log(`Validated ${checked} internal links across ${htmlFiles.length} exported HTML pages.`);
