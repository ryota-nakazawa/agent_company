import path from "node:path";
import {spawnSync} from "node:child_process";
import fs from "node:fs";

const [manifestPath, outputPath] = process.argv.slice(2);

if (!manifestPath || !outputPath) {
  console.error(
    "Usage: node scripts/still-captured-demo.mjs <manifestPath> <outputPath>",
  );
  process.exit(1);
}

const projectRoot = process.cwd();
const manifestAbsolutePath = path.join(projectRoot, "public", manifestPath);

if (!fs.existsSync(manifestAbsolutePath)) {
  console.error(`Manifest not found: ${manifestAbsolutePath}`);
  process.exit(1);
}

const remotionBin = path.join(
  projectRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "remotion.cmd" : "remotion",
);

const result = spawnSync(
  remotionBin,
  [
    "still",
    "src/index.ts",
    "CapturedAppShowcase",
    outputPath,
    "--frame=45",
    "--props",
    JSON.stringify({manifestPath}),
  ],
  {
    cwd: projectRoot,
    stdio: "inherit",
  },
);

process.exit(result.status ?? 1);
