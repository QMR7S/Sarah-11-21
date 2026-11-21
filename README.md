# SARA — A Little Universe Made for You ♡

A personalized Arabic birthday experience for Sara (21 November), with floral scenes, interactive notes, a private letter, cake, stars, a secret heart, and an original instrumental birthday melody.

## Status

The full website files are committed to the `main` branch. GitHub Pages activation is still required by the repository owner in **Settings → Pages** because the initial automated setup did not have permission to create a Pages site.

## Activate GitHub Pages

1. Open [Repository Pages settings](https://github.com/QMR7S/Sarah-11-21/settings/pages).
2. Under **Build and deployment**, select **GitHub Actions**.
3. If GitHub Pages is unavailable because the repository is private on GitHub Free, either upgrade to an eligible plan or make the repository public under **Settings → General → Danger Zone → Change repository visibility**. **Important:** The site and source contain personal birthday messages; making the repository public makes those messages publicly readable.
4. Open [Publish Sara Birthday Website](https://github.com/QMR7S/Sarah-11-21/actions/workflows/pages.yml) and choose **Re-run all jobs**, or trigger **Run workflow** after Pages is enabled.
5. When the workflow succeeds, the expected site URL is [https://qmr7s.github.io/Sarah-11-21/](https://qmr7s.github.io/Sarah-11-21/).

## File structure

- `index.html` — lightweight entry point that loads and reconstructs the complete birthday page.
- `parts/part-01.txt` through `parts/part-14.txt` — encoded chunks of the single-file HTML site, including its art and audio. All 14 chunks are necessary.
- `.nojekyll` — static-host configuration.
- `.github/workflows/pages.yml` — automated Pages publish workflow.

The original one-file offline HTML version is preserved outside this repository. The online loader does **not** require Replit, Manus, Vercel, a backend, or a database.

## Notes

The embedded track is instrumental, not a human-sung birthday song. The heart-themed QR is only shareable after the site URL is live.

