# Rafa Fernandez Portfolio

Public portfolio site for Rafa Fernandez, focused on product-oriented web work, selected shipped projects, and in-progress applications presented without exposing private repositories.

## Live Site

- Portfolio: <https://raferto1973.github.io/>
- Sitemap: <https://raferto1973.github.io/sitemap.xml>
- Robots: <https://raferto1973.github.io/robots.txt>

## Highlights

- Bilingual interface in English and Spanish
- Released and in-progress projects clearly separated
- Real product screenshots integrated into the gallery
- Privacy-conscious project descriptions without public repo links
- Direct contact flow via email

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Data-driven content via `projects-data.js` and `content-data.js`

## Project Structure

- `index.html`: portfolio layout and content structure
- `projects-data.js`: editable project dataset used to render the portfolio cards
- `content-data.js`: editable site copy, gallery, experience, tech stack, and contact dataset
- `styles.css`: design system, responsive layout, and visual treatment
- `script.js`: translations, data merging, dynamic rendering, filtering, reveal behavior, copy-to-email, and interactions
- `editor.html`: unified local editor to manage projects, site copy, gallery, experience blocks, tech stack, and contact without touching the layout code
- `assets/`: screenshots and supporting visual assets

## Local Preview

This is a static site with no build step.

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Editing Portfolio Content Without Touching HTML

Open `editor.html` in the browser.

- Edit projects, general copy, gallery items, experience blocks, tech stack, and contact data from the same panel
- Use `Guardar proyectos` to overwrite `projects-data.js`
- Use `Guardar contenido` to overwrite `content-data.js`
- Refresh `index.html` to verify the changes
- Commit and push when you want the update published on GitHub Pages

The public portfolio now reads its editable content from external data files, so routine updates no longer require editing the main HTML structure.

## Contact

- Email: <mailto:infowebs.rafa@gmail.com>

## Notes

The portfolio is intentionally curated to show product value, delivery quality, and technical direction while keeping sensitive implementation details private where appropriate.

SEO-related setup notes are documented in `SEO_SETUP.md`.
