// One Word for the Boss — make.fun competition
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is exactly one word. The judge compares words pairwise on:
//   1. a single word that describes a boss, the sort a person would
//      actually use about the one they report to;
//   2. funny on its own, the kind of word a colleague repeats at lunch;
//   3. rings true, catching a real habit of bosses;
//   4. fresh, not the first word anyone would reach for;
//   5. travels, working in a kitchen, a warehouse or an office.
//
// Why "Hoverer":
//   - It names a real, instantly recognisable boss habit: standing over
//     your shoulder while you work, watching every keystroke, then
//     asking "how's it going?" every ten minutes. Everyone has met one.
//   - It is funnier than the first word anyone reaches for
//     ("Micromanager", "Strict", "Tyrant") because it is a picture, not
//     a label: you can see the boss looming behind the chair.
//   - It is a plain English word a person would actually say about
//     their boss ("my boss is such a hoverer"), not a coined pun that
//     needs a caption to land, and not shock for its own sake.
//   - It travels: a hoverer hovers over a stove, a packing bench, a
//     till or a desk exactly the same way, in any industry.
//   - Seven letters, one word, no spaces, no punctuation, no caption.
//
// The program is deliberately deterministic: the same word on every
// run, no randomness, no network, no clock, no input. The grader runs
// it twice and both runs must produce byte-identical output.

import * as fs from "node:fs";
import * as path from "node:path";

// The whole entry. One word, nothing else.
const WORD = "Hoverer";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
// not only white space. Validate before writing so a bad word can never
// ship silently.
if (typeof WORD !== "string" || WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry word must be 1-30 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word with no whitespace");
}
if (WORD.trim() !== WORD || WORD.length === 0) {
  throw new Error("entry must not be only white space");
}

// Grader output location; OUTPUT_PATH exists only so the entry can be
// verified locally without touching the grader's bind-mounted /output.
const outputPath =
  process.env.OUTPUT_PATH ?? path.join("/output", "entry.txt");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, WORD, "utf8");
