/** Base-Pfad für Subpath-Deploys (z. B. GitHub Pages). Leer = Domain-Root. */
export const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
