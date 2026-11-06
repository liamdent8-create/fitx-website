// Copy the built site (dist/) into a folder where every link is relative, so
// it can be previewed from any sub-path (e.g. a private preview page) without
// a server. Page links point at index.html files directly.
//   node scripts/make-static-preview.mjs <out dir>
// Build first (HIDE_TODOS=1 npm run build for the public look).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync, rmSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const DIST = 'dist';
const OUT = process.argv[2];
if (!OUT) throw new Error('usage: node scripts/make-static-preview.mjs <out dir>');
const SKIP = new Set(['index.html', 'robots.txt', 'sitemap-0.xml', 'sitemap-index.xml']);
// Netlify redirects, mirrored for the preview.
const REDIRECTS = { '/': '/studio/', '/mums-and-bubs': '/classes/mums-and-bubs/' };

rmSync(OUT, { recursive: true, force: true });
const files = [];
const walk = (dir) => readdirSync(dir).forEach((f) => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) walk(p); else files.push(relative(DIST, p).replace(/\\/g, '/'));
});
walk(DIST);

// "/classes/strength/#x" seen from "studio/index.html" -> "../classes/strength/index.html#x"
const rel = (from, url) => {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const [pathAndQuery, hash = ''] = url.split('#');
  let path = pathAndQuery.split('?')[0];
  path = REDIRECTS[path] ?? REDIRECTS[path.replace(/\/$/, '')] ?? path;
  if (!posix.extname(path)) path = path.replace(/\/?$/, '/') + 'index.html';
  const r = posix.relative(posix.dirname(from), path.slice(1)) || posix.basename(path);
  return r + (hash ? `#${hash}` : '');
};

let pages = 0;
for (const f of files) {
  if (SKIP.has(f)) continue;
  const src = join(DIST, f);
  const dest = join(OUT, f);
  mkdirSync(dirname(dest), { recursive: true });
  if (f.endsWith('.html')) {
    let html = readFileSync(src, 'utf8');
    html = html.replace(/\b(href|src|poster|action)="(\/[^"]*)"/g, (_, a, u) => `${a}="${rel(f, u)}"`);
    html = html.replace(/\bsrcset="([^"]*)"/g, (_, s) => `srcset="${s.split(',').map((part) => {
      const [u, ...rest] = part.trim().split(/\s+/);
      return [rel(f, u), ...rest].join(' ');
    }).join(', ')}"`);
    html = html.replace(/url\((['"]?)(\/[^)'"]+)\1\)/g, (_, q, u) => `url(${q}${rel(f, u)}${q})`);
    writeFileSync(dest, html);
    pages++;
  } else if (f.endsWith('.css')) {
    const css = readFileSync(src, 'utf8').replace(/url\((['"]?)(\/[^)'"]+)\1\)/g, (_, q, u) => `url(${q}${rel(f, u)}${q})`);
    writeFileSync(dest, css);
  } else copyFileSync(src, dest);
}
console.log(`Wrote ${pages} pages to ${OUT}`);
