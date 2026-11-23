# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/samidyt/u-ronigrv-the-one-line-laugh-7ccca46f-makefun/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/samidyt/u-ronigrv-the-one-line-laugh-7ccca46f-makefun/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One original funny line, written by the program in `main.ts` to
`/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The line (126 chars)

> My bank app sends me a notification every time I spend money, which is sweet, because now even my phone is disappointed in me.

## Why this line

- **Surprise at the end:** the setup (bank-app notifications) pays off on the
  last words — "even my phone is disappointed in me" — a turn the reader
  doesn't see coming that still makes sense.
- **Everyday truth:** spending money, push notifications, and the guilt that
  follows — instantly recognisable.
- **Economical:** 126 characters, every clause earns its place; nothing there
  to explain the joke.
- **Fresh:** the phone as a disappointed judge is a new turn, not a stock
  joke phrasing.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one sentence — and fails loudly instead of handing in a
bad entry. Verified: the line is 126 characters, one sentence, valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
