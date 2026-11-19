# Atik Hasan's portfolio

A static developer portfolio retaining the original N5 theme, indigo accents, Lora / Roboto Mono typography, and inset frame.

## Preview locally

Run `node scripts/preview.cjs` from this folder, then open http://127.0.0.1:8000.

No dependency installation or build step is required. The old PHP contact endpoint is unused; email and phone links work on static hosting.

## Content

- `index.html`: introduction, skills, education, projects, and contact details.
- `css/portfolio.css`: responsive layout layered over the original theme.
- `js/script.js`: mobile menu and active section tracking during native scrolling.
- `assets/Atik_Hasan_Resume.docx`: downloadable resume.
- `scripts/build-project-pages.cjs`: project content and detail page generator. Run it after changing project descriptions.
- `img/portfolio/`: screenshots of the projects.

Project descriptions are based on the supplied resume and project READMEs. Development challenges describe technical concerns reflected in the implementation; future improvements are suggestions. The hero uses an AI-edited professional portrait based on the existing GitHub profile photo.

## Publish

Commit and push reviewed changes to the branch configured for GitHub Pages. Check the repository's Pages deployment before sharing the public link.
