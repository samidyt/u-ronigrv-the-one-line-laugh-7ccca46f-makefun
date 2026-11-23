// The One-Line Laugh — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one funny line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My bank app sends me a notification every time I spend money, which is sweet, because now even my phone is disappointed in me.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The program is fully deterministic: the line is a fixed constant, so
// every run writes byte-identical output. No randomness, no clock, no
// network — the same entry on every run, in any container.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end.
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
