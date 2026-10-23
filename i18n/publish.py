"""Rebuilds every approved translation and points each English page at its translations.

usage (from the site root): python i18n/publish.py

The pages are those in TRANSLATED in assets/site-nav.js. For each one this builds /ms/ and
/zh/ without noindex (i18n_build.py) and gives the English page the same hreflang
alternates its translations carry, inserted after its canonical link. The English file is
edited as text rather than re-serialised, so nothing else in it moves.

Add a page to TRANSLATED only once a native reader has approved it: this script publishes
whatever is listed."""
import os, re, subprocess, sys

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://steadydevs.com'
nav = open(os.path.join(SITE, 'assets', 'site-nav.js'), encoding='utf-8').read()
pages = re.findall(r"'([\w.-]+\.html)'", re.search(r'var TRANSLATED = \[([^\]]*)\]', nav).group(1))

failed = []
for page in pages:
    name = page[:-5].replace('-', '_')
    for lang in ('ms', 'zh'):
        r = subprocess.run([sys.executable, os.path.join('i18n', 'i18n_build.py'), page, lang,
                            os.path.join('i18n', f'{name}_{lang}.py')], cwd=SITE, capture_output=True, text=True, encoding='utf-8',
                           env={**os.environ, 'PYTHONIOENCODING': 'utf-8'})
        print((r.stdout or r.stderr).strip()[:300])
        if r.returncode: failed.append(f'{lang}/{page}')

    path = os.path.join(SITE, page)
    html = open(path, encoding='utf-8', newline='').read()
    m = re.search(r'([ \t]*)<link rel="canonical" href="([^"]+)">(\r?\n)', html)
    en_path = m.group(2)[len(BASE):]
    indent, nl = m.group(1), m.group(3)
    alts = [('en', ''), ('ms', 'ms/'), ('zh-Hans', 'zh/'), ('x-default', '')]
    block = ''.join(f'{indent}<link rel="alternate" hreflang="{hl}" href="{BASE}/{prefix}{en_path.lstrip("/")}">{nl}'
                    for hl, prefix in alts)
    html = re.sub(r'[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*/?>\r?\n', '', html)
    html = html.replace(m.group(0), m.group(0) + block, 1)
    open(path, 'w', encoding='utf-8', newline='').write(html)

print(f'{len(pages)} pages published' + (f'; FAILED: {failed}' if failed else ''))
sys.exit(1 if failed else 0)
