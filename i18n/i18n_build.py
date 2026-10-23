"""Writes a translated copy of a site page into /ms/ or /zh/.

usage (from the site root): python i18n/i18n_build.py <page.html> <ms|zh> i18n/<name>_<lang>.py [--draft]

The English page is the structure: each text block found by i18n_extract.blocks() gets its
translation; blocks without one keep their English (numbers, codes, demo credentials).
Relative links gain "../" because the copy sits one folder down. --draft adds noindex so a
copy published before review is not indexed."""
import os, sys, re, importlib.util
from bs4 import BeautifulSoup
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from i18n_extract import blocks

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://steadydevs.com"
LANGS = {'en': ('en', ''), 'ms': ('ms', 'ms/'), 'zh': ('zh-Hans', 'zh/')}

page, lang, tr_path = sys.argv[1], sys.argv[2], sys.argv[3]
draft = '--draft' in sys.argv
spec = importlib.util.spec_from_file_location('tr', tr_path); tr = importlib.util.module_from_spec(spec); spec.loader.exec_module(tr)

soup = BeautifulSoup(open(os.path.join(SITE, page), encoding='utf-8').read(), 'html.parser')
els = blocks(soup)
missing = []
for i, el in enumerate(els):
    key = f'b{i}'
    if key in tr.B:
        el.clear()
        el.append(BeautifulSoup(tr.B[key], 'html.parser'))
    elif re.search(r'[a-z]{3,}', el.get_text()):
        missing.append((key, el.get_text()[:60]))

html_tag = soup.html
html_tag['lang'] = LANGS[lang][0]
soup.title.string = tr.HEAD['title']
# Every language's URL is the English canonical path under its folder, so a page served
# without ".html" (/venue-booking) keeps that form in /ms/ and /zh/, and the alternates
# below agree with each copy's own canonical.
canon = soup.find('link', rel='canonical')
en_path = canon['href'][len(BASE):] if canon and canon['href'].startswith(BASE) else '/' + page
def lang_url(code):
    return BASE + '/' + LANGS[code][1] + en_path.lstrip('/')
url = lang_url(lang)
for sel, attr, val in [
    ({'name': 'description'}, 'content', tr.HEAD['description']),
    ({'property': 'og:title'}, 'content', tr.HEAD['title'].split(' | ')[0]),
    ({'property': 'og:description'}, 'content', tr.HEAD['description']),
    ({'name': 'twitter:title'}, 'content', tr.HEAD['title'].split(' | ')[0]),
    ({'name': 'twitter:description'}, 'content', tr.HEAD['description']),
    ({'property': 'og:url'}, 'content', url),
]:
    m = soup.find('meta', attrs=sel)
    if m: m[attr] = val
canon['href'] = url

# One alternate per language plus x-default, the same set on every language's copy.
for old in soup.find_all('link', rel='alternate', hreflang=True):
    # Drop the line break after it too, or every rebuild leaves another blank line behind.
    if old.next_sibling is not None and isinstance(old.next_sibling, str) and not old.next_sibling.strip():
        old.next_sibling.extract()
    old.decompose()
for code, (hl, prefix) in LANGS.items():
    canon.insert_after(soup.new_tag('link', rel='alternate', hreflang=hl, href=lang_url(code)))
canon.insert_after(soup.new_tag('link', rel='alternate', hreflang='x-default', href=lang_url('en')))

if draft and not soup.find('meta', attrs={'name': 'robots'}):
    soup.head.insert(0, soup.new_tag('meta', attrs={'name': 'robots', 'content': 'noindex'}))

# Pages that exist in every language: links between them stay inside the language folder.
# The list lives in assets/site-nav.js (TRANSLATED), which the language menu also reads.
TRANSLATED = set(re.findall(r"'([\w.-]+\.html)'", re.search(r'var TRANSLATED = \[([^\]]*)\]',
    open(os.path.join(SITE, 'assets', 'site-nav.js'), encoding='utf-8').read()).group(1)))
def relative(u):
    return u and not re.match(r'^(https?:|mailto:|tel:|#|data:|/|\.\./|javascript:)', u)
for tag in soup.find_all(True):
    for attr in ('href', 'src'):
        u = tag.get(attr)
        if relative(u) and not (tag.name == 'a' and re.split(r'[?#]', u)[0] in TRANSLATED):
            tag[attr] = '../' + u

# Placeholders and labels carried in attributes.
for el in soup.find_all(attrs={'placeholder': True}):
    el['placeholder'] = getattr(tr, 'ATTR', {}).get(el['placeholder'], el['placeholder'])
for name in ('aria-label', 'alt', 'title'):
    for el in soup.find_all(attrs={name: True}):
        if el.name != 'link':
            el[name] = getattr(tr, 'ATTR', {}).get(el[name], el[name])

# Enquiries say which language they were written from, so the reply can match.
for form in soup.find_all('form'):
    form.insert(0, soup.new_tag('input', attrs={'type': 'hidden', 'name': 'language', 'value': {'ms': 'Bahasa Malaysia', 'zh': 'Chinese'}[lang]}))

# Strings a page's own script writes (button states); each module may list them as SCRIPT.
for script in soup.find_all('script'):
    if script.string:
        txt = script.string
        for en, t in getattr(tr, 'SCRIPT', {}).items():
            txt = txt.replace(en, t)
        script.string.replace_with(txt)

out = os.path.join(SITE, LANGS[lang][1].rstrip('/'), page)
import os; os.makedirs(os.path.dirname(out), exist_ok=True)
text = str(soup)
if not text.lower().startswith('<!doctype'): text = '<!DOCTYPE html>\n' + text
open(out, 'w', encoding='utf-8', newline='\n').write(text)
print(f'{out}: {len(els)} blocks, {len(els) - len(missing)} translated or kept; untranslated text blocks: {missing}')
