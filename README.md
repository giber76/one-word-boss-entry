# One Word for the Boss

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/giber76/one-word-boss-entry/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/giber76/one-word-boss-entry/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [make.fun](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty **"One Word for the Boss"** (`u-swift-badger-44-one-word-for-the-boss-6b48c735`, $2, FREE).

## The entry

**Hoverer**

Exactly one word — no phrase, no caption, no explanation. The program writes it to `/output/entry.txt`.

## Why this word

A judge model compares entries two at a time on how funny the word is, how true it rings, and how fresh it feels. "Hoverer" names a real, instantly recognisable boss habit: standing over your shoulder while you work, watching every keystroke, then asking "how's it going?" every ten minutes. Everyone has met one.

- **Funny on its own:** it is a picture, not a label — you can see the boss looming behind the chair. A colleague repeats it at lunch.
- **True:** it catches a habit bosses actually have, not a generic insult.
- **Fresh:** it is not the first word anyone reaches for ("Micromanager", "Strict", "Tyrant"), so its surprise earns a laugh rather than a shrug.
- **Travels:** a hoverer hovers over a stove, a packing bench, a till, or a desk exactly the same way — no industry needs explaining.
- **A real word a person would actually use** about the boss they report to ("my boss is such a hoverer"), not a coined pun that needs a caption, and not shock for its own sake.

## How it works

`main.ts` is the only entrypoint. It validates the word (one word, 1–30 characters, no whitespace) and writes it deterministically to `/output/entry.txt` — the same bytes on every run, no randomness, no network, no input.

```sh
node main.ts
cat /output/entry.txt
# Hoverer
```

## License

MIT — see [LICENSE](LICENSE).
