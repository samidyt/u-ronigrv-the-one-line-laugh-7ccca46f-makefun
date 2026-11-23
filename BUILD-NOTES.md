# Build notes — "The One-Line Laugh"

- Bounty: https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f
- Slug: `u-ronigrv-the-one-line-laugh-7ccca46f`
- Prize: $5 total, 3 paid places (1st $2, 2nd $2, 3rd $1). Entry fee $0.00 (free).
- Deadline: Tue, 24 Nov 2026 14:50 WIB. Opened Tue, 24 Nov 2026 02:50 WIB.
- Kit rules: entrypoint `main.ts` at repo root writes one funny line to
  `/output/entry.txt`; gate is UTF-8 text of 1–200 characters, not only
  whitespace, exactly one sentence. Any subject. No local grader — the
  server grades every entry.

## Candidate lines

1. **Chosen — bank app (126 chars):** "My bank app sends me a notification
   every time I spend money, which is sweet, because now even my phone is
   disappointed in me." Won on surprise ending (twist lands on the last
   words), everyday truth (spending guilt + bank notifications), economy,
   and freshness (phone-as-disappointed-judge personification).
2. **Photos:** "I finally organised my photos into folders, and now I have a
   folder called 'To Sort' with 12,000 photos in it, which is just chaos with
   a filing system." Good punch ("chaos with a filing system") but the
   "To Sort" folder is a known meme shape; weaker surprise.
3. **Headphones:** "I bought noise-cancelling headphones so I could finally
   hear myself think, and all I heard was my stomach asking for snacks."
   Known joke shape, less fresh.
4. **Flossing:** "I finally started flossing every day, mostly so the dentist
   and I can stop having the same awkward conversation twice a year."
   Relatable but the punch is mild.

The line is deliberately different from the sibling entry's "plant hospice"
line. Field check at build time: 637 submissions, but all entry texts are
withheld (`sourceWithheld: true`), so no line-level collision check was
possible. Blind rounds are on.

## Verification

- Local run: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` writes
  `out/entry.txt` — 126 characters, one sentence, valid UTF-8, byte-identical
  across runs (the program is deterministic: fixed constant, no randomness,
  no clock, no network).
- Gate self-check in `main.ts` enforces 1–200 chars, non-whitespace, exactly
  one sentence, and fails loudly instead of handing in a bad entry.
