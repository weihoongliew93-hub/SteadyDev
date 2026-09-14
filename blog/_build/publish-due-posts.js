/**
 * Scheduled Publisher
 * Flips "published": false -> true for any post in blog-posts.json whose date
 * has arrived (date <= today in Asia/Kuala_Lumpur).
 *
 * Posts are scheduled simply by setting a future "date" and "published": false.
 * Spacing the dates is the schedule - this script just releases what's due.
 *
 * The JSON is edited as text (not re-serialised) so the rest of the file keeps
 * its exact formatting and only the changed flags show up in the diff.
 *
 * Run from this directory:  node publish-due-posts.js   (or: npm run publish)
 *   --dry-run   report what would be published, change nothing
 *
 * Exit code 0 always; prints "PUBLISHED_COUNT=n" for CI to read.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const JSON_PATH = path.join(ROOT, 'blog', 'blog-posts.json');
const DRY_RUN = process.argv.includes('--dry-run');

// Today in Malaysia time, regardless of where this runs (CI runs in UTC).
const TODAY = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Kuala_Lumpur',
  year: 'numeric', month: '2-digit', day: '2-digit'
}).format(new Date());

const raw = fs.readFileSync(JSON_PATH, 'utf8');
const posts = JSON.parse(raw);

const due = posts.filter(p => p.published === false && p.date && p.date <= TODAY);
const pending = posts.filter(p => p.published === false && p.date && p.date > TODAY);

console.log(`Today (Asia/Kuala_Lumpur): ${TODAY}`);

if (due.length === 0) {
  console.log('Nothing due for publishing.');
  if (pending.length) {
    const next = pending.sort((a, b) => a.date.localeCompare(b.date))[0];
    console.log(`Next scheduled: ${next.date} - ${next.slug}`);
  }
  console.log('PUBLISHED_COUNT=0');
  process.exit(0);
}

// Rewrite "published": false -> true inside each due post's object only.
let out = raw;
for (const post of due) {
  const idKey = `"id": "${post.id}"`;
  const start = out.indexOf(idKey);
  if (start === -1) {
    console.error(`Could not locate post in JSON text: ${post.id} - skipping.`);
    continue;
  }
  // Bound the search to this post's object: the flag sits above "content".
  const end = out.indexOf('"content"', start);
  const block = out.slice(start, end);
  const replaced = block.replace(/"published":\s*false/, '"published": true');
  if (replaced === block) {
    console.error(`No "published": false found for ${post.id} - skipping.`);
    continue;
  }
  out = out.slice(0, start) + replaced + out.slice(end);
  console.log(`${DRY_RUN ? 'Would publish' : 'Publishing'}: ${post.date} - ${post.slug}`);
}

// Never write a file we can't parse back.
const reparsed = JSON.parse(out);
if (reparsed.length !== posts.length) {
  console.error('Post count changed after edit - aborting.');
  process.exit(1);
}

if (!DRY_RUN) {
  fs.writeFileSync(JSON_PATH, out);
}

if (pending.length) {
  const next = pending.sort((a, b) => a.date.localeCompare(b.date))[0];
  console.log(`Next scheduled: ${next.date} - ${next.slug}`);
} else {
  console.log('No further posts scheduled - the queue is empty.');
}

console.log(`PUBLISHED_COUNT=${due.length}`);
