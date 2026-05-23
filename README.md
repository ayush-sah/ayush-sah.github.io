# ayush-sah.github.io

Personal portfolio site. Plain HTML, CSS, and JS — no build step.

## Stack

- HTML + CSS + vanilla JS (no framework, no bundler)
- Google Fonts: JetBrains Mono + Fraunces
- Single-page scroll, mobile responsive

## Local preview

Any static server works. Easiest:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open <http://localhost:8000>.

## Deploying to GitHub Pages

This repo is named `ayush-sah.github.io`, so GitHub Pages serves it
automatically from the `master` branch.

1. Replace your existing files with these (or push to a new branch first and PR).
2. Drop your latest resume as `Ayush_Sah_Resume.pdf` in the root — the nav download button links to it.
3. Push to `master`. Site goes live at <https://ayush-sah.github.io> within a minute.

## File structure

```
.
├── index.html              # everything lives here
├── style.css               # all styles
├── script.js               # typewriter + scroll fades
├── Ayush_Sah_Resume.pdf    # add this manually (link in nav)
└── README.md
```

## Customizing

- **Colors:** all in `:root` at the top of `style.css`. The accent is one CSS variable (`--accent`) — change it and the whole site shifts.
- **Hero typewriter phrases:** `phrases` array near the top of `script.js`.
- **Sections:** each `<section>` in `index.html` is independent — duplicate, delete, or reorder.
- **Easter egg:** type `sudo` anywhere on the page.

## Old version

The previous version of this site (built during college) lived on the same
repo. You can restore it from earlier commits if you ever want it back.
