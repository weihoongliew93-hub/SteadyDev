/**
 * RSS Feed Generator
 * Regenerates ../feed.xml from the current blog posts.
 *
 *   - Posts in blog-posts.json use its title/excerpt/date/tags.
 *   - Standalone posts (HTML present but not in blog-posts.json) are parsed
 *     from their HTML (<title>, meta description, datePublished, article:tag).
 *   - Drafts (published:false) are skipped, matching blog/index.html.
 *   - Items are sorted newest-first.
 *
 * Run from this directory:  node gen-feed.js   (or: npm run feed)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const BLOG = path.join(ROOT, 'blog');
const BASE = 'https://steadydevs.com';

const pad = n => String(n).padStart(2, '0');
const TODAY = (d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`)(new Date());

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function rfc822(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dow = DOW[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${dow}, ${pad(d)} ${MON[m - 1]} ${y} 00:00:00 +0800`;
}
const decode = s => String(s)
  .replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&rsquo;/g, '’')
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const field = (html, re) => { const m = html.match(re); return m ? m[1] : ''; };

// --- Collect posts from blog-posts.json ---
const json = JSON.parse(fs.readFileSync(path.join(BLOG, 'blog-posts.json'), 'utf8'));
const jsonSlugs = new Set(json.map(p => p.slug).filter(Boolean));
const posts = json
  .filter(p => p.slug && p.published !== false)
  .map(p => ({
    slug: p.slug,
    title: p.title,
    description: p.excerpt || '',
    date: p.date || TODAY,
    categories: Array.isArray(p.tags) ? p.tags : [],
  }));

// --- Add standalone posts (HTML present but not in blog-posts.json) ---
fs.readdirSync(BLOG)
  .filter(f => f.endsWith('.html'))
  .filter(f => !['index.html', 'topics.html', 'blog-template.html'].includes(f))
  .forEach(f => {
    const slug = f.replace(/\.html$/, '');
    if (jsonSlugs.has(slug)) return;
    const html = fs.readFileSync(path.join(BLOG, f), 'utf8');
    const title = decode(field(html, /<title>([^<]*)<\/title>/).replace(/\s*\|\s*SteadyDevs\s*$/, ''));
    const description = decode(field(html, /<meta name="description" content="([^"]*)"/));
    const date = field(html, /"datePublished":\s*"(\d{4}-\d{2}-\d{2})/)
              || field(html, /article:published_time"\s+content="(\d{4}-\d{2}-\d{2})/)
              || TODAY;
    const tags = field(html, /article:tag"\s+content="([^"]*)"/);
    posts.push({
      slug,
      title,
      description,
      date,
      categories: tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [],
    });
  });

// --- Sort newest first ---
posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

// --- Build items ---
const items = posts.map(p => {
  const url = `${BASE}/blog/${p.slug}.html`;
  const cats = p.categories.map(c => `      <category>${esc(c)}</category>`).join('\n');
  return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <description>${esc(p.description)}</description>
      <pubDate>${rfc822(p.date)}</pubDate>
      <guid>${url}</guid>
      <dc:creator>SteadyDevs</dc:creator>
${cats}
    </item>`;
}).join('\n\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SteadyDevs Blog - Legacy .NET Systems Insights</title>
    <link>https://steadydevs.com/blog/</link>
    <description>Expert insights on maintaining, stabilizing, and improving legacy .NET systems. Practical tips and real-world case studies from 11+ years of production experience.</description>
    <language>en-my</language>
    <lastBuildDate>${rfc822(TODAY)}</lastBuildDate>
    <atom:link href="https://steadydevs.com/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://steadydevs.com/images/SteadyDevsLogo.svg</url>
      <title>SteadyDevs Blog</title>
      <link>https://steadydevs.com/blog/</link>
    </image>

${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(BLOG, 'feed.xml'), rss);
console.log(`✅ feed.xml: ${posts.length} items written (newest ${posts[0].date}, oldest ${posts[posts.length - 1].date}).`);
