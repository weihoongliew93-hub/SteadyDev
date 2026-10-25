/**
 * Deploy-time Draft Stripper
 * Removes "published": false posts from blog-posts.json and blog-index.json
 * in the working copy that is about to be uploaded to GitHub Pages.
 *
 * Both JSON files are public, so any scheduled post left in them exposes its
 * slug. Google reads URLs out of JSON and then reports the not-yet-built page
 * as a 404. The repo keeps the full queue (publish-due-posts.js needs it);
 * only the deployed copy is trimmed.
 *
 * CI ONLY - never commit the result. Run after any commit step, just before
 * the Pages artifact is uploaded:  node strip-unpublished.js
 */

const fs = require('fs');
const path = require('path');

const BLOG = path.resolve(__dirname, '..');

for (const name of ['blog-posts.json', 'blog-index.json']) {
  const file = path.join(BLOG, name);
  const posts = JSON.parse(fs.readFileSync(file, 'utf8'));
  // Same rule as blog/index.html: only an explicit false is a draft
  const live = posts.filter(p => p.published !== false);
  const dropped = posts.length - live.length;
  fs.writeFileSync(file, name === 'blog-index.json'
    ? JSON.stringify(live)
    : JSON.stringify(live, null, 2) + '\n');
  console.log(`${name}: kept ${live.length}, removed ${dropped} unpublished`);
}
