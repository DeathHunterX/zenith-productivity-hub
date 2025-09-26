#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userAgent = process.env.npm_config_user_agent || "";

// Detect package manager
let pkgManager = "npm";
if (userAgent.includes("bun")) pkgManager = "bun";
else if (userAgent.includes("pnpm")) pkgManager = "pnpm";
else if (userAgent.includes("yarn")) pkgManager = "yarn";

const args = process.argv.slice(2);
// Example: ["client", "dev"]

if (args.length < 2) {
  console.error("❌ Usage: node scripts/run.js <target> <mode>");
  console.error("   Example: node scripts/run.js client dev");
  process.exit(1);
}

const [target, mode] = args;
const cwd = path.join(__dirname, "..", target); // ✅ works everywhere

// Framework-specific mappings
const scriptMap = {
  client: {
    dev: "dev", // Next.js
    build: "build",
    start: "start",
  },
  server: {
    dev: "start:dev", // NestJS
    build: "build",
    start: "start:prod",
  },
  docs: {
    dev: "docs:dev", // VitePress
    build: "docs:build",
    serve: "docs:serve",
  },
};

if (!scriptMap[target] || !scriptMap[target][mode]) {
  console.error(`❌ No script mapping for target='${target}' mode='${mode}'`);
  process.exit(1);
}

const scriptName = scriptMap[target][mode];
console.log(`➡️  Running '${scriptName}' in ${target} using ${pkgManager}...`);

try {
  let runCmd = "";
  switch (pkgManager) {
    case "bun":
      runCmd = `bun run ${scriptName}`;
      break;
    case "pnpm":
      runCmd = `pnpm run ${scriptName}`;
      break;
    case "yarn":
      runCmd = `yarn ${scriptName}`;
      break;
    default:
      runCmd = `npm run ${scriptName}`;
  }

  // ✅ no "cd &&" — use cwd option instead
  execSync(runCmd, { stdio: "inherit", cwd });

  console.log("✅ Done!");
} catch (err) {
  console.error("❌ Failed:", err.message);
  process.exit(1);
}
