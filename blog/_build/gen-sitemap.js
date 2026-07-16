/**
 * Sitemap Generator
 * Regenerates ../../sitemap.xml from the current file structure.
 *
 *   - Main pages: explicit list below (priority + changefreq), lastmod from file mtime
 *   - Case studies: auto-discovered case-*.html, lastmod from file mtime
 *   - Blog posts: auto-discovered; date from blog-posts.json (or parsed from the
 *     post's HTML for standalone posts). Drafts (published:false) are skipped.
 *
 * Run from this directory:  node gen-sitemap.js   (or: npm run sitemap)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'blog');
const BASE = 'https://steadydevs.com';

const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const TODAY = ymd(new Date());
const mtime = rel => { try { return ymd(fs.statSync(path.join(ROOT, rel)).mtime); } catch { return TODAY; } };

// --- blog-posts.json: slug -> date, plus draft set ---
const json = JSON.parse(fs.readFileSync(path.join(BLOG, 'blog-posts.json'), 'utf8'));
const dateBySlug = {};
const draftSlugs = new Set();
json.forEach(p => {
  if (!p.slug) return;
  if (p.date) dateBySlug[p.slug] = p.date;
  if (p.published === false) draftSlugs.add(p.slug);
});

// Parse a publish date out of a standalone post's HTML (not in blog-posts.json).
function parseDate(file) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/"datePublished":\s*"(\d{4}-\d{2}-\d{2})/)
        || html.match(/article:published_time"\s+content="(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : null;
}

const entries = [];
const add = (loc, lastmod, changefreq, priority) => entries.push({ loc, lastmod, changefreq, priority });

// --- Main pages (edit this list when you add/remove a top-level page) ---
const MAIN = [
  { file: 'index.html',         loc: '/',                   changefreq: 'monthly', priority: '1.0' },
  { file: 'index.html',         loc: '/index.html',         changefreq: 'monthly', priority: '1.0' },
  { file: 'solutions.html',     loc: '/solutions.html',     changefreq: 'monthly', priority: '0.95' },
  { file: 'portfolio.html',     loc: '/portfolio.html',     changefreq: 'monthly', priority: '0.9' },
  { file: 'einvoice.html',      loc: '/einvoice.html',      changefreq: 'monthly', priority: '0.9' },
  { file: 'pricing-terms.html', loc: '/pricing-terms.html', changefreq: 'monthly', priority: '0.9' },
  { file: 'services.html',      loc: '/services.html',      changefreq: 'monthly', priority: '0.8' },
  { file: 'contact.html',       loc: '/contact.html',       changefreq: 'monthly', priority: '0.8' },
  { file: 'about.html',         loc: '/about.html',         changefreq: 'monthly', priority: '0.7' },
];
MAIN.forEach(p => { if (fs.existsSync(path.join(ROOT, p.file))) add(p.loc, mtime(p.file), p.changefreq, p.priority); });

// --- Portfolio case studies (auto-discovered) ---
fs.readdirSync(ROOT)
  .filter(f => f.startsWith('case-') && f.endsWith('.html'))
  .sort()
  .forEach(f => add('/' + f, mtime(f), 'monthly', '0.7'));

// --- Blog index / feed / topics ---
add('/blog/feed.xml',    mtime('blog/feed.xml'), 'weekly', '0.7');
add('/blog/',            TODAY,                  'weekly', '0.8');
add('/blog/index.html',  mtime('blog/index.html'), 'weekly', '0.8');
add('/blog/topics.html', mtime('blog/topics.html'), 'weekly', '0.8');

// --- Blog posts (auto-discovered; drafts skipped) ---
let skipped = 0;
fs.readdirSync(BLOG)
  .filter(f => f.endsWith('.html'))
  .filter(f => !['index.html', 'topics.html', 'blog-template.html'].includes(f))
  .sort()
  .forEach(f => {
    const slug = f.replace(/\.html$/, '');
    if (draftSlugs.has(slug)) { skipped++; return; }
    const lastmod = dateBySlug[slug] || parseDate(path.join(BLOG, f)) || TODAY;
    add('/blog/' + f, lastmod, 'monthly', '0.6');
  });

// --- Serialize ---
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.map(e =>
    '  <url>\n' +
    `    <loc>${BASE}${e.loc}</loc>\n` +
    `    <lastmod>${e.lastmod}</lastmod>\n` +
    `    <changefreq>${e.changefreq}</changefreq>\n` +
    `    <priority>${e.priority}</priority>\n` +
    '  </url>'
  ).join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`✅ sitemap.xml: ${entries.length} URLs written (${skipped} draft post(s) skipped).`);
