# Inside AI Safety

A responsive English website for an emerging AI safety research initiative. Plain HTML, CSS, and JavaScript; no build step or package dependencies.

## Preview

Run `python3 -m http.server 8080` in this directory, then open http://localhost:8080.

## Edit

- `index.html`: all text, research links, founder information, and contact email.
- `styles.css`: layout, colors, typography, and responsive styles.
- `script.js`: accessible research-lens interaction.
- `assets/mark.svg`: original vector brand mark.

The site uses Google Fonts with local system fallbacks. No analytics, cookies, contact-form backend, or donations are configured. The contact button opens an email to the founder's publicly listed address.

## Content status

The initiative is described as developing a nonprofit organization. No incorporation completion, IRS recognition, university endorsement, paid openings, or tax-deductible donations are asserted. Existing papers are clearly identified as prior work by the founder and collaborators, not work produced by the new organization. Update this wording once status and organizational details are confirmed.

Sources: https://enyijiang.github.io/ and linked arXiv papers (2606.08044, 2601.22083, 2608.21278). Reviewed October 15, 2026.

## GitHub Pages

Choose Settings → Pages → Source: GitHub Actions. The included workflow deploys only the public website files on pushes to main.

## Custom domain: insideaisafety.org

The domain is intentionally not activated until its DNS is ready. In GitHub Pages settings, add and verify `insideaisafety.org`, then configure the domain registrar following GitHub's current instructions. Add a root `CNAME` file containing `insideaisafety.org` when activating it. Enable HTTPS when GitHub has issued the certificate.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Do not put account passwords, API keys, tax records, private addresses, or donor information in this repository.
