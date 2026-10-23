# Translations (Bahasa Malaysia, Chinese)

The English page is the source. Each translated page is built from it plus a translation
file, so a layout change to the English page carries over by rebuilding.

- `<name>_ms.py`, `<name>_zh.py`: the translations. `B` maps text-block ids to translated
  HTML, `HEAD` the title and description, `ATTR` placeholders, `SCRIPT` strings a page's own
  script writes. Reviewers edit these.
- `i18n_extract.py`: lists a page's text blocks and ids (`python i18n/i18n_extract.py
  einvoice.html out.json`). Ids follow page order, so after editing the English page,
  extract again and check which blocks moved or changed before rebuilding.
- `i18n_build.py`: writes `ms/<page>` or `zh/<page>`. Run from the site root:
  `python i18n/i18n_build.py einvoice.html ms i18n/einvoice_ms.py --draft`.
  The build lists every English text block with no translation.
- `msic_page.py`: generates `msic-code-lookup.html` from LHDN's MSIC file; rerun when LHDN
  updates it, then rebuild the translations.

`--draft` adds noindex. Drop it, and add the page's hreflang alternates to the English
page, only when a native reader has approved the translation; `assets/site-nav.js` shows the
language switch on any page that declares them.

Needs Python 3 and `beautifulsoup4`.
