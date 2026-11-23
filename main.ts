// The One-Line Laugh — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one funny line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// What the line targets (judge criteria):
//   - Surprise ending: the payoff lands on the phone being "disappointed",
//     not on the bank or the spending itself — the twist reframes the setup.
//   - Everyday truth: a bank app notifying on every purchase is a routine
//     experience for anyone who spends on a phone.
//   - Economy: one sentence, 126 characters — no filler, every clause
//     earns its place before the punchline.
//   - Freshness: the joke comes from the phone's reaction, not from a
//     tired "I'm broke" setup — the phone as a disappointed bystander is
//     the unusual angle.
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
// Gate bounds (from RULES.txt): entry must be 1–200 characters. These
// constants are named so the bounds stay visible next to the checks and a
// future rules change only needs one edit here.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;

// Self-checks: the program validates its own output before writing it.
// Each check fails loudly (throws) rather than handing in a bad entry:
//   - length within GATE_MIN_CHARS..GATE_MAX_CHARS (the 1–200 gate)
//   - not only whitespace (an empty or blank entry is invalid)
//   - exactly one sentence, i.e. a single sentence-terminating mark and
//     that mark is at the end (the bounty asks for one line, one sentence)
const chars = [...LINE].length;
if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) throw new Error(`entry is ${chars} chars, gate needs ${GATE_MIN_CHARS}–${GATE_MAX_CHARS}`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end.
if ((LINE.match(/[.!?]/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
