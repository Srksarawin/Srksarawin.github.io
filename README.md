# Sarawin R — AI/ML Engineer Portfolio

A dark, futuristic single-page portfolio built with React + Vite. Every piece of
content lives in one file, so future updates take minutes, not a rebuild.

## Stack

- React 18 + Vite (plain JavaScript, no TypeScript)
- Plain CSS with a design-token system (no Tailwind/UI kit dependency)
- No external APIs — fully static, deploys as flat HTML/CSS/JS

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Update your content (the only file you usually need)

Open **`src/data/portfolio.js`**. Everything on the site — your name, summary,
skills, work experience, projects, education, certifications, publications,
and contact links — is defined there as plain JavaScript objects/arrays.

Examples:

- Add a new job → add a new object to the `experience` array.
- Add a new project → add a new object to the `projects` array.
- Change your email/phone/links → edit the `profile` object.
- Add/remove a skill → edit the relevant group in the `skills` array.

You do **not** need to touch any component file for normal content updates.

If you want to change colors or fonts, edit the CSS variables at the top of
`src/index.css` (`--bg`, `--accent-teal`, `--accent-blue`, `--font-display`, etc.) —
they cascade through the whole site.

## 3. Deploy to GitHub Pages

**Before deploying**, open `vite.config.js` and set `base` to match your repo:

- Repo named `portfolio` deployed at `https://<username>.github.io/portfolio/` → `base: "/portfolio/"`
- Repo named `<username>.github.io` deployed at the root → `base: "/"`

### Option A — GitHub Actions (recommended, auto-deploys on every push)

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically. Your site will be live at the URL shown
   in **Settings → Pages** within a minute or two.

### Option B — Manual deploy with `gh-pages`

```bash
npm install
npm run deploy
```

This builds the site and pushes the `dist/` folder to a `gh-pages` branch.
Then in **Settings → Pages → Source**, select **Deploy from a branch** →
`gh-pages` → `/ (root)`.

## Project structure

```
src/
  data/portfolio.js     ← all content — edit this
  components/           ← UI sections (Hero, About, Experience, Projects, Credentials, Contact, Nav)
  index.css              ← design tokens (colors, fonts) + global styles
  App.jsx                ← page layout / section order
```

## Notes

- Reduced-motion preference is respected (ambient background animation and
  smooth scroll turn off automatically).
- Fonts (Space Grotesk, JetBrains Mono, Inter) load from Google Fonts —
  no local font files to manage.
