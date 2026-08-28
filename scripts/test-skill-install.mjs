import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const canonical = join(root, "skills/nerv-ui");
const fixtureRoot = mkdtempSync(join(tmpdir(), "nerv-ui-skill-"));
const installed = join(fixtureRoot, "skills/nerv-ui");

try {
  if (!existsSync(join(canonical, "SKILL.md"))) throw new Error("Canonical SKILL.md is missing.");
  cpSync(canonical, installed, { recursive: true });
  const installedSkill = readFileSync(join(installed, "SKILL.md"), "utf8");
  if (!/^---\nname: nerv-ui\n/m.test(installedSkill)) {
    throw new Error("Installed fixture is missing valid skill frontmatter.");
  }
  for (const reference of ["references/recipes.md", "references/component-catalog.md"]) {
    if (!existsSync(join(installed, reference))) throw new Error(`Installed fixture is missing ${reference}.`);
  }

  console.log("Skill installation fixture copied with valid frontmatter and references.");
} finally {
  rmSync(fixtureRoot, { recursive: true, force: true });
}
