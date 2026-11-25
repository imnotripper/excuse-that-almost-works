// The Excuse That Almost Works — one line, written to /output/entry.txt.
// Deterministic, zero dependencies, no network: the file on disk is exactly
// what gets graded, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

export const LINE =
  "Sorry, the courier needs a signature and they only deliver while I'm meant to be at work.";

export const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
export const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

export function run(): string {
  const words = LINE.trim().split(/\s+/).length;
  if (LINE.trim().length === 0 || LINE.length > 140 || words > 20) {
    throw new Error(
      `entry outside the gate: ${LINE.length} chars, ${words} words`,
    );
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  return OUTPUT_PATH;
}

run();
