import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The bug you fear most is already in production, patiently waiting for Friday.";

// The gate requires 1 to 120 characters of UTF-8 text.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
