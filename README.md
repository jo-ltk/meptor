# MEPTOR — Next.js landing page

The project runs as a Next.js App Router application. The original
interactive landing page export is preserved under `public/landing.html`
with its supporting assets, and is displayed by the root Next.js route.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a production
build with `npm run build`, then serve it with `npm run start`.

## Contents

- `app/` — Next.js layout, root page, and global styles.
- `public/landing.html` — the original interactive landing page.
- `public/assets/`, `public/vendor/`, `public/support.js` — files required
  by the exported page.
- `Main.dc.html` — the original editable source export.
- `assets/`, `support.js`, `vendor/` — the original source assets.

## Updating the landing page

When changing `Main.dc.html` or its source assets, copy the updated page,
`support.js`, `assets/`, and `vendor/` into `public/` so the version served
by Next.js stays in sync.
