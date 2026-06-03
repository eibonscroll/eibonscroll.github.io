# mikepurvis.tech — Claude Context

## Session startup (required)

At the start of every session, before anything else:
1. Read `C:\shell\CONTEXT.md` — owner identity, permissions, context map
2. Find `C:\shell\context\sessions\mikepurvis-tech\` and read the most recent
   file in it. If that subfolder does not exist, read the most recent file in
   `C:\shell\context\sessions\` instead.
3. Confirm orientation in one short paragraph: who you are working with and
   where things left off on this project.
4. If `C:\shell` cannot be found or read, stop immediately and ask:
   "I can't find your personal context shell. Where is it?
   (Windows: C:\shell — Mac/Linux: ~/shell or /home/yourname/shell)"

Personal blog, resume, and portfolio site for Mike Purvis. Eleventy static site
deployed on GitHub Pages.

**Live:** https://www.mikepurvis.tech  
**Repo:** https://github.com/eibonscroll/eibonscroll.github.io

## Stack

- Generator: [Eleventy](https://www.11ty.dev/) v3
- Templates: Nunjucks (`.njk`) + Markdown (`.md`)
- Resume data: `resume.json` (JSON Resume schema) — single source of truth for
  `/resume/` and `/projects/`
- Hosting: GitHub Pages (root of main branch, built by GitHub Actions)
- Input dir: `src/` — Output dir: `_site/`

## Key files

- `src/blog/` — blog posts (`.md` or `.njk`)
- `src/index.njk` — home page
- `src/blog.njk` — blog listing
- `src/projects.njk` — projects page (driven by `resume.json`)
- `src/resume.njk` — resume page (driven by `resume.json`)
- `src/_includes/layouts/` — base and post layouts
- `resume.json` — all resume/project data
- `.eleventy.js` — Eleventy config (no custom markdown-it; HTML in `.md` disabled)

## Notes

- Blog posts that need raw HTML (e.g. branded styling) should be `.njk`, not `.md`
- markdown-it HTML is not enabled — don't use HTML blocks in `.md` files
- GitHub Actions handles the build and deploy on push to main
