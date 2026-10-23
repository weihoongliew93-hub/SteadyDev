"""Builds SteadyDev/msic-code-lookup.html from LHDN's published MSIC sub-category list.
Rerun with a fresh copy of the file when LHDN updates it."""
import json, html, os, re, sys

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'msic-code-lookup.html')
codes = json.load(open(SRC, encoding='utf-8-sig'))

SECTIONS = {
    'A': 'Agriculture, forestry and fishing', 'B': 'Mining and quarrying', 'C': 'Manufacturing',
    'D': 'Electricity, gas, steam and air conditioning supply',
    'E': 'Water supply; sewerage, waste management and remediation', 'F': 'Construction',
    'G': 'Wholesale and retail trade; repair of motor vehicles and motorcycles',
    'H': 'Transportation and storage', 'I': 'Accommodation and food service activities',
    'J': 'Information and communication', 'K': 'Financial and insurance/takaful activities',
    'L': 'Real estate activities', 'M': 'Professional, scientific and technical activities',
    'N': 'Administrative and support service activities',
    'O': 'Public administration and defence; compulsory social security', 'P': 'Education',
    'Q': 'Human health and social work activities', 'R': 'Arts, entertainment and recreation',
    'S': 'Other service activities', 'T': 'Activities of households as employers',
    'U': 'Activities of extraterritorial organisations and bodies',
}

def sentence_case(s):
    s = s.strip()
    return s[:1].upper() + s[1:].lower() if s.isupper() else s

rows = []
for c in codes:
    sec = (c.get('MSIC Category Reference') or '').strip()
    desc = sentence_case(c['Description'])
    rows.append(
        f'<tr data-s="{sec}"><td><button type="button" class="msic-code" data-code="{c["Code"]}" '
        f'aria-label="Copy {c["Code"]}">{c["Code"]}</button></td><td>{html.escape(desc)}</td>'
        f'<td class="msic-sec">{sec or "&ndash;"}</td></tr>')

options = ''.join(f'<option value="{k}">{k} &middot; {html.escape(v)}</option>' for k, v in SECTIONS.items())

faq = [
    ("What is an MSIC code?",
     "The Malaysia Standard Industrial Classification code: five digits describing a business activity. LHDN requires the seller's MSIC code on every e-invoice, and it must be one of the codes on LHDN's own list, which is what this page shows."),
    ("Where do I find my business's MSIC code?",
     "It is usually in your SSM registration details and in what you declared to LHDN. If you are not sure which applies, search this page for your main activity and confirm with your tax agent."),
    ("Which code should I use if my business does several things?",
     "Use the code that describes the activity you mainly carry on. Your tax agent can confirm the right one for your registration."),
    ("Why was my e-invoice rejected for its MSIC code?",
     "Usually because the code is not on LHDN's list (some older lists and software contain codes LHDN does not accept) or the description does not match the code. Every code on this page is one LHDN accepts."),
]
faq_html = ''.join(f'<details><summary>{html.escape(q)}</summary><div>{html.escape(a)}</div></details>' for q, a in faq)
faq_ld = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]}, ensure_ascii=False)

TITLE = "MSIC Code Lookup for LHDN e-Invoice | SteadyDevs"
DESC = f"Search all {len(codes):,} MSIC codes LHDN accepts on e-invoices, by code or business activity. Free, taken from LHDN's own list (October 2026)."
URL = "https://steadydevs.com/msic-code-lookup.html"

page = f'''<!DOCTYPE html>
<html lang="en" data-design="f">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>{TITLE}</title>
  <meta name="description" content="{html.escape(DESC)}">
  <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{URL}">
  <meta property="og:title" content="MSIC code lookup for LHDN e-invoices">
  <meta property="og:description" content="{html.escape(DESC)}">
  <meta property="og:image" content="https://steadydevs.com/images/SteadyDevsLogo.svg">
  <meta name="twitter:card" content="summary">
  <link rel="canonical" href="{URL}">
  <script type="application/ld+json">{faq_ld}</script>
  <script>try{{var t=localStorage.getItem("sd-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}}catch(e){{}}</script>
  <meta name="theme-color" content="#0A0B0F">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Chakra+Petch:wght@600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Chakra+Petch:wght@600;700&display=swap"></noscript>
  <link rel="stylesheet" href="assets/f.css?v=10">
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-5LRWB31H8T');
    addEventListener('load', function () {{
      var s = document.createElement('script'); s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=G-5LRWB31H8T';
      document.head.appendChild(s);
    }});
  </script>
  <style>
    /* MSIC lookup (design F): every code is in the HTML so search engines read it; the box filters rows. */
    .msic-tools {{ display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 12px; margin-top: 32px; }}
    @media (max-width: 720px) {{ .msic-tools {{ grid-template-columns: 1fr; }} }}
    .msic-count {{ margin-top: 12px; font-size: 14px; color: var(--faint); font-family: var(--mono); }}
    .msic-table td:first-child {{ width: 96px; }}
    .msic-code {{ font-family: var(--mono); font-size: 14px; padding: 4px 8px; border-radius: 6px; border: 1px solid var(--border); background: var(--surface-inset); color: var(--text-strong); cursor: pointer; }}
    .msic-code:hover {{ border-color: var(--border-strong); }}
    .msic-code.is-copied {{ color: var(--ok); border-color: currentColor; }}
    .msic-sec {{ width: 48px; color: var(--faint); font-family: var(--mono); }}
    .msic-table-wrap {{ max-height: 70vh; overflow: auto; }}
    .msic-table th {{ position: sticky; top: 0; z-index: 1; }}
  </style>
</head>
<body>
  <a class="f-skip" href="#main">Skip to content</a>
  <div id="sd-site-nav"></div>
  <script src="assets/site-nav.js?v=3"></script>
  <main id="main">
    <section class="f-glow-top">
      <div class="f-container f-page-hero">
        <p class="f-eyebrow">Free tool &middot; LHDN e-invoice</p>
        <h1 class="f-h1">MSIC code lookup</h1>
        <p class="f-lead">Every e-invoice must carry the seller's five-digit MSIC code, and LHDN only accepts codes on its own list. Search all {len(codes):,} of them by code or by what your business does.</p>
        <div class="msic-tools">
          <div class="f-field"><label for="msicQ">Search</label><input class="f-input" id="msicQ" type="search" placeholder="e.g. restaurant, software, 47111" autocomplete="off"></div>
          <div class="f-field"><label for="msicS">Section</label><select class="f-input" id="msicS"><option value="">All sections</option>{options}</select></div>
        </div>
        <p class="msic-count" id="msicCount" aria-live="polite">{len(codes):,} codes</p>
        <div class="f-table-wrap msic-table-wrap">
          <table class="f-table msic-table">
            <thead><tr><th scope="col">Code</th><th scope="col">Activity</th><th scope="col">Section</th></tr></thead>
            <tbody id="msicRows">{''.join(rows)}</tbody>
          </table>
        </div>
        <p class="f-note">Click a code to copy it. Source: <a href="https://sdk.myinvois.hasil.gov.my/codes/msic-codes/">LHDN MyInvois SDK, MSIC sub-category codes</a>, retrieved 22 October 2026.</p>
      </div>
    </section>

    <section class="f-section f-section--alt">
      <div class="f-container">
        <div class="f-callout f-callout--tip" style="margin-top: 0">
          <span class="f-callout__label">Checked before LHDN sees it</span>
          The SteadyDevs e-Invoice platform refuses any MSIC code that isn't on this list, along with LHDN's other rules, before an invoice is sent. <a href="einvoice.html">See the e-Invoice platform &rarr;</a> Not sure you have to e-invoice yet? <a href="e-invoice-checker.html">Check in three questions &rarr;</a>
        </div>
        <div class="f-head" style="margin-top: 56px"><h2 class="f-h2">Common questions</h2></div>
        <div class="f-faq">{faq_html}</div>
      </div>
    </section>
  </main>

  <footer class="ff">
    <div class="f-container">
      <div class="ff__grid">
        <div class="ff__brand">
          <a href="index.html" class="fh__logo"><svg class="fh__mark" viewBox="1 5 23 30" aria-hidden="true" focusable="false"><rect class="sd-b1" x="2" y="24" width="10" height="10" rx="2"/><rect class="sd-b2" x="13" y="18" width="10" height="16" rx="2"/><rect class="sd-b3" x="2" y="12" width="10" height="10" rx="2"/><rect class="sd-b4" x="13" y="6" width="10" height="10" rx="2"/></svg>SteadyDevs</a>
          <p>Software and engineering for systems Malaysian businesses can't afford to lose.</p>
        </div>
        <div class="ff__col"><h2>Offerings</h2><ul>
          <li><a href="solutions.html">Engineering services</a></li><li><a href="einvoice.html">EInvoice Platform</a></li>
          <li><a href="venue-booking.html">Venue Booking</a></li><li><a href="steadypost.html">SteadyPost</a></li></ul></div>
        <div class="ff__col"><h2>Company</h2><ul>
          <li><a href="about.html">About</a></li><li><a href="portfolio.html">Case studies</a></li>
          <li><a href="blog/index.html">Blog</a></li><li><a href="contact.html">Contact</a></li></ul></div>
        <div class="ff__col"><h2>More</h2><ul>
          <li><a href="pricing-terms.html">Pricing terms</a></li><li><a href="my-account.html">My account</a></li>
          <li><a href="https://www.linkedin.com/company/steadydevs">LinkedIn</a></li></ul></div>
        <div class="ff__col"><h2>Free tools</h2><ul>
          <li><a href="e-invoice-checker.html">Do I need to e-invoice?</a></li><li><a href="msic-code-lookup.html">MSIC code lookup</a></li><li><a href="microsoft-end-of-support-lookup.html">End-of-support lookup</a></li><li><a href="legacy-system-risk-scorecard.html">Risk scorecard</a></li><li><a href="free-tools.html">All free tools &rarr;</a></li></ul></div>
      </div>
      <div class="ff__base"><span>&copy; 2026 Steady Devs Solutions · SSM 202603092285</span><span>Malaysia · Singapore</span></div>
    </div>
  </footer>

  <script>
    (function () {{
      var q = document.getElementById('msicQ'), s = document.getElementById('msicS');
      var rows = Array.prototype.slice.call(document.querySelectorAll('#msicRows tr'));
      var count = document.getElementById('msicCount');
      var text = rows.map(function (r) {{ return r.textContent.toLowerCase(); }});
      function apply() {{
        var words = q.value.toLowerCase().split(/\\s+/).filter(Boolean), sec = s.value, shown = 0;
        rows.forEach(function (r, i) {{
          var ok = (!sec || r.getAttribute('data-s') === sec) && words.every(function (w) {{ return text[i].indexOf(w) !== -1; }});
          r.hidden = !ok; if (ok) shown++;
        }});
        count.textContent = shown.toLocaleString() + (shown === 1 ? ' code' : ' codes');
      }}
      q.addEventListener('input', apply); s.addEventListener('change', apply);
      document.getElementById('msicRows').addEventListener('click', function (e) {{
        var b = e.target.closest('.msic-code'); if (!b) return;
        var code = b.getAttribute('data-code');
        (navigator.clipboard ? navigator.clipboard.writeText(code) : Promise.reject()).then(function () {{
          b.classList.add('is-copied'); b.textContent = 'Copied';
          setTimeout(function () {{ b.classList.remove('is-copied'); b.textContent = code; }}, 1200);
          if (typeof gtag === 'function') gtag('event', 'msic_copy', {{ code: code }});
        }}).catch(function () {{ /* clipboard blocked: the code is visible to copy by hand */ }});
      }});
    }})();
  </script>
</body>
</html>
'''
open(OUT, 'w', encoding='utf-8', newline='\n').write(page)
print('written', len(page) // 1024, 'KB,', len(codes), 'codes')
