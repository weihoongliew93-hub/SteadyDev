# Translations (Bahasa Malaysia, Chinese)

The English page is the source. Each translated page is built from it plus a translation
file, so a layout change to the English page carries over by rebuilding.

- `<name>_ms.py`, `<name>_zh.py`: the translations. `B` maps text-block ids to translated
  HTML, `HEAD` the title and description, `ATTR` placeholders, aria-labels, image alt text and titles, `SCRIPT` strings a page's own
  script writes. Reviewers edit these.
- `i18n_extract.py`: lists a page's text blocks and ids (`python i18n/i18n_extract.py
  einvoice.html out.json`). Ids follow page order, so after editing the English page,
  extract again and check which blocks moved or changed before rebuilding.
- `i18n_build.py`: writes `ms/<page>` or `zh/<page>`. Run from the site root:
  `python i18n/i18n_build.py einvoice.html ms i18n/einvoice_ms.py --draft`.
  The build lists every English text block with no translation.
- `msic_page.py`: generates `msic-code-lookup.html` from LHDN's MSIC file; rerun when LHDN
  updates it, then rebuild the translations.

`--draft` adds noindex: use it for a copy that is up for review.

Publishing, once a native reader has approved a page:

1. Add the page to `TRANSLATED` in `assets/site-nav.js`. That one list drives the language
   menu, which links between pages stay inside a language folder, and what gets published.
2. Run `python i18n/publish.py`. It rebuilds every listed page in both languages without
   noindex, and gives each English page the matching hreflang alternates.
3. Run `node blog/_build/gen-sitemap.js`. It adds every /ms/ and /zh/ copy that is not
   noindex. The daily publish workflow reruns it, so it stays current.

Module names follow the page: `pricing-terms.html` → `pricing_terms_ms.py`. URLs follow the
English canonical, so `/venue-booking` becomes `/ms/venue-booking`.

Needs Python 3 and `beautifulsoup4`.
