"""Pull every translatable text block out of a page, keeping inline markup, as {id: html}.
Blocks are the innermost elements that hold text: headings, paragraphs, list items, table
cells, FAQ summaries, buttons, labels. Their inline tags (<strong>, <a>, <code>) stay in the
string so word order can change around them in translation."""
import json, sys, re
from bs4 import BeautifulSoup, NavigableString, Comment

BLOCK = {'h1', 'h2', 'h3', 'h4', 'p', 'li', 'td', 'th', 'dt', 'dd', 'summary', 'figcaption',
         'label', 'button', 'a', 'span', 'div', 'strong', 'small', 'option', 'blockquote', 'caption'}
INLINE = {'strong', 'b', 'em', 'i', 'a', 'code', 'span', 'br', 'sup', 'sub', 'small', 'abbr', 'mark'}


def own_text(el):
    return ''.join(s for s in el.find_all(string=True, recursive=True)
                   if not isinstance(s, Comment) and s.parent.name not in ('script', 'style')).strip()


def is_leaf_block(el):
    if el.name not in BLOCK or not own_text(el):
        return False
    # A block holding another block is not a leaf: translate the inner ones instead.
    for d in el.find_all(True):
        if d.name not in INLINE:
            return False
    # An inline element inside a text-bearing block is translated with its parent.
    p = el.parent
    while p is not None and p.name not in ('body', 'main', 'html', '[document]'):
        if p.name in BLOCK and p.name not in INLINE and all(x.name in INLINE for x in p.find_all(True)):
            return False
        p = p.parent
    return True


def blocks(soup):
    root = soup.body
    out = []
    for el in root.find_all(True):
        if el.find_parent(['script', 'style', 'svg', 'noscript']) or el.name in ('script', 'style', 'svg'):
            continue
        if el.get('id') == 'sd-site-nav' or el.find_parent(id='sd-site-nav'):
            continue
        if is_leaf_block(el):
            out.append(el)
    return out


if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    soup = BeautifulSoup(open(src, encoding='utf-8').read(), 'html.parser')
    data = {}
    for i, el in enumerate(blocks(soup)):
        data[f'b{i}'] = el.decode_contents().strip()
    head = {
        'title': soup.title.string,
        'description': soup.find('meta', attrs={'name': 'description'})['content'],
    }
    json.dump({'head': head, 'blocks': data}, open(dst, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(len(data), 'blocks;', sum(len(re.sub('<[^>]+>', '', v).split()) for v in data.values()), 'words')
