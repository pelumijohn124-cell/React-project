# Adamolekun Pelumi John — Portfolio

A responsive single-page React and Vite portfolio. The Home, About, Projects, and Contact sections are all on one page, with the navigation scrolling to each section. The contact form validates input and prepares an email draft.

## Run locally

1. Install Node.js (version 20.19+ or 22.12+ for Vite 8).
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Check the production bundle with `npm run build` and code quality with `npm run lint`.

## Personalize before publishing

- Copy `.env.example` to `.env.local` and add your real `VITE_CONTACT_EMAIL` and optional `VITE_CONTACT_PHONE`. Contact details are not invented. The form creates an email draft; the visitor must still send it.
- Update project names, descriptions, technologies, and real repository/demo URLs in `src/data/projects.js`. Project links are intentionally left blank until real URLs are available.
- Replace learning-project content with work you have actually built.

Environment variables are embedded into the client bundle at build time. Set the same values in your hosting provider before building. Do not put secrets in `VITE_` variables.

## Deploy

Build with `npm run build` and publish the generated `dist/` folder. This is a single-page site, so use static hosting that serves `index.html` for the root URL.
