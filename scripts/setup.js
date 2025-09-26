#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // ✅ Now works in ESM

const userAgent = process.env.npm_config_user_agent || "";

// Detect package manager
let pkgManager = "npm";
if (userAgent.includes("bun")) pkgManager = "bun";
else if (userAgent.includes("pnpm")) pkgManager = "pnpm";
else if (userAgent.includes("yarn")) pkgManager = "yarn";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("❌ Please specify target: client, server, docs");
  process.exit(1);
}

const target = args[0];
const cwd = path.join(__dirname, "..", target); // ✅ works on Win & Unix

console.log(`➡️  Setting up ${target} using ${pkgManager}...`);

try {
  let installCmd = "";
  switch (pkgManager) {
    case "bun":
      installCmd = "bun install";
      break;
    case "pnpm":
      installCmd = "pnpm install";
      break;
    case "yarn":
      installCmd = "yarn install";
      break;
    default:
      installCmd = "npm install";
  }

  execSync(`cd ${cwd} && ${installCmd}`, { stdio: "inherit" });

  console.log("✅ Done!");
} catch (err) {
  console.error("❌ Failed:", err.message);
  process.exit(1);
}
