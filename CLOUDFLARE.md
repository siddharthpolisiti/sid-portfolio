Cloudflare Pages deployment notes

- Root directory: set to `pixel-portfolio-playground` (so CF builds the correct subfolder).
- Install command: use `npm install` instead of `npm ci` if you want the build machine to resolve and regenerate lockfiles when necessary.
- Recommended build command: `npm install && npm run build`.
- Node version: ensure Cloudflare Pages uses the same Node version as local (add an `.nvmrc` with your Node version if needed).

Why switch to `npm install`?
- `npm ci` requires `package-lock.json` to be perfectly in sync with `package.json`. If the build environment or package resolution differs, `npm ci` fails with EUSAGE errors. `npm install` is more forgiving and will produce a lockfile consistent with the resolved dependency tree.

If you prefer strict reproducible builds, keep `npm ci` and ensure `package-lock.json` in the repo is generated in the same Node/npm environment as the CI environment.
