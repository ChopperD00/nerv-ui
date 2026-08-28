import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const barrel = readFileSync(resolve(root, "src/components/index.ts"), "utf8");
const skill = readFileSync(resolve(root, "skills/nerv-ui/SKILL.md"), "utf8");
const catalogue = skill.match(/<!-- catalog:start -->\s*([\s\S]*?)\s*<!-- catalog:end -->/)?.[1];

if (!catalogue) throw new Error("SKILL.md is missing its component catalogue markers.");

const exports = [...barrel.matchAll(/export\s*\{([^}]+)\}/g)]
  .flatMap((match) => match[1].split(","))
  .map((entry) => entry.trim().split(/\s+as\s+/)[0])
  .filter(Boolean);
const documented = catalogue.split(",").map((name) => name.trim()).filter(Boolean);
const missing = documented.filter((name) => !exports.includes(name));
const undocumented = exports.filter((name) => !documented.includes(name));

if (missing.length || undocumented.length) {
  throw new Error(`Skill catalogue divergence. Missing exports: ${missing.join(", ") || "none"}. Undocumented exports: ${undocumented.join(", ") || "none"}.`);
}

console.log(`Skill catalogue matches ${exports.length} public component exports.`);
