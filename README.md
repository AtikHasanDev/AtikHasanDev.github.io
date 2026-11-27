# Atik Hasan's portfolio

A static developer portfolio with a Manrope type system, indigo accents, floating navigation, responsive project cards, and accessible scroll reveals. The homepage refresh follows the landing-page-design skill.

## Preview locally

Run `node scripts/preview.cjs`, then open http://127.0.0.1:8000. No installation or build is required.

## Content

- `index.html`: introduction, four projects, guiding statement, background, skills, education, and contact.
- `css/refresh.css`: shared responsive design, type styles, focus indicators, and reduced motion support.
- `js/script.js`: mobile menu, keyboard handling, active navigation, and intersection based reveals.
- `scripts/build-project-pages.cjs`: source for all four project detail pages. Run from the repository root after editing descriptions.
- `projects/fixmate.html`: Assignment 9, with live, client repository, and server repository links.
- `fonts/manrope-latin-variable.woff2`: locally served Manrope font; license in the same folder.
- `privacy.html`, `terms.html`, `404.html`: supporting pages for static hosting.

Project descriptions come from project READMEs and supplied portfolio content. Future improvements are suggestions. FixMate uses the repair workbench image from its own public assets, rather than a homepage screenshot. The portrait was already present in this portfolio.

The legacy Bootstrap and N5 files are retained for reference; the refreshed pages use only refresh.css. The old PHP endpoint is unused. There are no analytics or tracking cookies.

## Publish

Origin: https://github.com/AtikHasanDev/AtikHasanDev.github.io

Commit and push reviewed changes to the branch configured for GitHub Pages. Verify the Pages deployment before treating the public website as updated.

## Resume

The hero and contact section download `assets/Atik_Hasan_Resume.pdf`. This one page resume includes FixMate (Assignment 9) and StudioSpace, with clickable live, client, and server links. `assets/resume.html` is its accessible web view. The older Word asset is retained as an archive and is not linked by the updated site. Portfolio case studies show client repository links only, as required by the portfolio rubric.
