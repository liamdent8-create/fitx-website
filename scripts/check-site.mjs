// Pre-launch check of the built site (dist/). No extra installs needed.
//   npm run check
// Builds the site as the public will see it (placeholders hidden), then checks
// every page for: leftover placeholders, missing alt text, images without
// width/height, broken internal links and anchors, one <h1> per page, title and
// description lengths, duplicate titles, and valid structured data.
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
execSync('npm run build', { stdio: 'ignore', env: { ...process.env, HIDE_TODOS: '1' } });

const pages = [];
const walk = (dir) => readdirSync(dir).forEach((f) => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (f.endsWith('.html')) pages.push(p);
});
walk(DIST);

const urlOf = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
const exists = (path) => {
  const clean = path.split('#')[0].split('?')[0];
  if (clean === '/' ) return true; // redirected to /studio by Netlify
  const base = join(DIST, clean);
  return existsSync(base) && statSync(base).isFile() || existsSync(join(base, 'index.html'));
};
const redirects = readFileSync('netlify.toml', 'utf8').match(/from = "([^"]+)"/g)?.map((m) => m.slice(8, -1)) ?? [];

const problems = [];
const titles = new Map();
const flag = (url, msg) => problems.push(`${url}: ${msg}`);

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const url = urlOf(file);
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');

  if (/NEEDS LAUREN|VSL coming|Shot needed|App screenshot coming|lorem ipsum/i.test(text)) flag(url, 'placeholder text on the live page');

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) flag(url, `${h1} <h1> headings (want exactly 1)`);

  const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) flag(url, 'no <title>');
  else if (title.length > 65) flag(url, `title is ${title.length} characters (Google shows about 60): "${title}"`);
  if (!desc) flag(url, 'no meta description');
  else if (desc.length < 70 || desc.length > 160) flag(url, `description is ${desc.length} characters (aim for 70 to 160)`);
  if (title) titles.set(title, [...(titles.get(title) || []), url]);

  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt(=|\s|>)/.test(img)) flag(url, `image without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth=/.test(img) || !/\bheight=/.test(img)) flag(url, `image without width/height (layout shift): ${img.slice(0, 80)}`);
  }

  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id && !new RegExp(`id="${id}"`).test(html)) flag(url, `link to missing anchor ${href}`);
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      const path = href.split('#')[0];
      if (!exists(path) && !redirects.includes(path.replace(/\/$/, ''))) flag(url, `broken internal link ${href}`);
    }
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { flag(url, 'structured data is not valid JSON'); }
  }
}
for (const [title, urls] of titles) if (urls.length > 1) problems.push(`duplicate title on ${urls.join(', ')}: "${title}"`);

console.log(`Checked ${pages.length} pages.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n- ` + problems.join('\n- '));
  process.exitCode = 1;
} else console.log('No problems found.');

// Rebuild the normal preview (placeholders visible) so local previews stay as they were.
execSync('npm run build', { stdio: 'ignore', env: { ...process.env, HIDE_TODOS: '' } });
