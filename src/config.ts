// Public base URL of the R2 download bucket (the app repo's
// OCTAVO_DOWNLOAD_URL). Set PUBLIC_DOWNLOAD_URL in the deploy workflow; when
// it is empty the download buttons say the first release is on its way.
export const DOWNLOAD_URL = (import.meta.env.PUBLIC_DOWNLOAD_URL ?? '').replace(/\/+$/, '')

export const REPO_URL = 'https://github.com/bright-wan/octavo'
export const RELEASES_URL = `${REPO_URL}/releases`
export const PRIVACY_URL = `${REPO_URL}/blob/main/PRIVACY.md`
export const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`
export const BUILD_URL = `${REPO_URL}#building-from-source`
export const UPSTREAM_URL = 'https://github.com/genspark-ai/genoffice'

// Stable alias names scripts/r2-release-upload.cjs re-points every release.
// Keys match the "files" ids in latest.json.
export const FILES = {
  'mac-arm64': 'Octavo-mac-arm64.dmg',
  'win-x64': 'Octavo-win-x64.exe',
  'linux-appimage': 'Octavo-linux-x86_64.AppImage',
  'linux-deb': 'octavo-linux-amd64.deb',
  'linux-rpm': 'octavo-linux-x86_64.rpm',
} as const

export type FileId = keyof typeof FILES

export function downloadHref(id: FileId): string | null {
  return DOWNLOAD_URL ? `${DOWNLOAD_URL}/${FILES[id]}` : null
}
