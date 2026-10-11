# octavo-site

Landing and download page for [Octavo](https://github.com/bright-wan/octavo),
built with [Astro](https://astro.build) and published to GitHub Pages at
<https://bright-wan.github.io/octavo-site/>.

```bash
npm ci
npm run dev        # http://localhost:4321/octavo-site/
npm run build      # static site in dist/
```

## Downloads

The site hosts no installers. The buttons link to stable names in the
Cloudflare R2 bucket (`Octavo-mac-arm64.dmg`, `Octavo-win-x64.exe`, …) that
the app repo's release workflow re-points on every release, and a small
script reads `latest.json` from the bucket to show the version, sizes and
checksums. The names live in `src/config.ts`.

Set the bucket URL as the repository variable `PUBLIC_DOWNLOAD_URL` (and in
`.env` for local work). The bucket needs a CORS rule that allows GET from
`https://bright-wan.github.io`; see `docs/releasing.md` in the app repo.

## Custom domain later

Add `public/CNAME` with the domain, set `SITE_ORIGIN=https://<domain>` and
`SITE_BASE=/` in the deploy workflow's build step, and add the domain to the
bucket's CORS rule. GitHub Pages redirects the old github.io URL.

## Screenshot

The hero shows a drawn mock of Octavo Docs (`src/components/AppMock.astro`).
Swap in a real screenshot once the UI settles.
