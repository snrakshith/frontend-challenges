import { resolve, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const paths = {
  VITE_CONFIG: resolve(__dirname, "config/vite.config.ts"),
  ESLINT_CONFIG: resolve(__dirname, "config/.eslintrc.cjs"),
};

// Set environment variables
for (const [key, value] of Object.entries(paths)) {
  process.env[key] = value;
}

// Capture the command to run from arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("No command provided");
  process.exit(1);
}

// Replace environment variable placeholders in the command
const command = args
  .join(" ")
  .replace(/\$([A-Z_]+)/g, (_, name) => process.env[name] || "");

console.log("Running command:", command);
execSync(command, { stdio: "inherit" });

console.log("Paths configured:", paths);
// console.log("Paths configured:", paths.VITE_CONFIG);
