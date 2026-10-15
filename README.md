# RAEIC

## Deploying to Vercel

Import this repository into Vercel with the project root set to the directory containing this README:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`

These settings are also defined in `vercel.json`. Use Node.js 20.19+ or 22.12+, as required by Vite 7. The app uses hash-based routing, so routes are served from the root without additional rewrite configuration.
