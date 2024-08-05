// paths.js
import { readdirSync } from "fs";
import { resolve, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the config directory
const configDir = resolve(__dirname, "config");

// Read files in the config directory
const configFiles = readdirSync(configDir);

// Create paths object dynamically
const paths = configFiles.reduce((acc, file) => {
  const key = file.replace(/\.(ts|js|cjs)$/, "").toUpperCase() + "_CONFIG";
  acc[key] = resolve(configDir, file);
  return acc;
}, {});

console.log("paths", configFiles);
console.log("key", key);
// Set environment variables
Object.entries(paths).forEach(([key, value]) => {
  process.env[key] = value;
});

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
