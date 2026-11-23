import { mkdirSync, writeFileSync } from "node:fs";

const line = "I can teleport anywhere in the world \u2014 but only to places I'm already standing.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
