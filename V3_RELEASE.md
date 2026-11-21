# Sarah — A Little Universe V3.0

An interactive birthday storybook made for Sara (21 November) featuring 12 chapters, flowers, wishes, pharmacy-inspired game, candle, a fully personalized letter, a secret heart, and downloadable QR greeting card.

## What's new in V3

- The supplied personalized birthday recording is the actual song: `assets/sara-birthday-song.mp3` (about 63 seconds).
- Optional site-wide gentle birthday melody, controlled separately from the song, both muted until user interaction.
- Audio never overlaps: starting one pauses the other; song is available from every chapter.
- Richer botanical editorial styling, polished paper elements, motion details, better sound controls, more readable mobile hierarchy.
- QR remains pointed at the published Pages URL in production.

## Published URL

https://qmr7s.github.io/Sarah-11-21/

## Architecture

The existing V2 self-contained storybook is preserved in `parts/part-01.txt` through `parts/part-14.txt`. The page entrypoint assembles them and applies the V3 layer from `assets/v3.css` and `assets/v3.js`. The user's uploaded song is a separate binary media asset.

No backend, login or analytics. The website's personal message is publicly visible because the repository is public.

## QA

Re-test with Chrome/Android and Safari/iPhone before sharing the gift; desktop Chromium local tests passed for audio playback and scene navigation. GitHub Pages may take a moment to refresh after a commit.
