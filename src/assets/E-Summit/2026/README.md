# E-Summit 2026 assets

Copy media from the **e-summit-2026** project into this folder so `/esummit` works correctly.

## From `e-summit-2026/src/assets/` copy:

- **Root:** `4 1.png`, `e-summit'26 4.png`, `e summit yellow.png`, `OPEM UNSTOP.png`, `W 1 (1).png`, `schedule.png`, `EVENTS.png`, `HACKATHON_12.png`, `grunge-style-starburst-background.jpg`, `Mehbooba Mehbooba Song.mp3`, `Video_Background_Removal_For_Logo.mp4`
- **gallery/** – all images (e.g. `IMG_3162.JPG`, `_DSC3228.JPG`, …)
- **events/** – all images (e.g. `artist show.JPG`, `hackathon.JPG`, …)

One-time copy (from repo root):

```bash
# If e-summit-2026 is at ../e-summit-2026 or similar:
cp -r /path/to/e-summit-2026/src/assets/* src/assets/E-Summit/2026/
```

Then ensure `src/assets/E-Summit/2026/gallery/` and `src/assets/E-Summit/2026/events/` exist with the expected files.
