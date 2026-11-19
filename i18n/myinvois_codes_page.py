"""Builds myinvois-code-lookup.html and assets/myinvois-codes.json from LHDN's code lists.

Download the lists from the MyInvois SDK (https://sdk.myinvois.hasil.gov.my/codes/) into one
folder, then run from the site root:

    python i18n/myinvois_codes_page.py <folder-with-the-json-files> <checked-date YYYY-MM-DD>

Files read: TaxTypes, EInvoiceTypes, PaymentMethods, StateCodes, ClassificationCodes,
UnitTypes, CurrencyCodes, CountryCodes (.json). The short lists are written into the page as
HTML tables so search engines can read them; all eight also go into the JSON file that the
page's search box loads. Rerun whenever LHDN updates a list.
"""
import html, json, os, sys
from datetime import date

src, checked = sys.argv[1], sys.argv[2]
d_checked = date.fromisoformat(checked)


def load(name, value_key):
    rows = json.load(open(os.path.join(src, name + ".json"), encoding="utf-8-sig"))
    return [(r["Code"].strip(), " ".join(str(r[value_key]).split())) for r in rows]


LISTS = [
    # key, title, file, value field, shown as a table in the page
    ("tax", "Tax types", "TaxTypes", "Description", True),
    ("type", "e-Invoice types", "EInvoiceTypes", "Description", True),
    ("pay", "Payment methods", "PaymentMethods", "Payment Method", True),
    ("state", "State codes", "StateCodes", "State", True),
    ("class", "Classification codes", "ClassificationCodes", "Description", True),
    ("unit", "Unit of measure codes", "UnitTypes", "Name", False),
    ("cur", "Currency codes", "CurrencyCodes", "Currency", False),
    ("country", "Country codes", "CountryCodes", "Country", False),
]
data = {k: load(f, v) for k, _, f, v, _ in LISTS}

# What each short list is for, in our words. Codes are LHDN's; these notes are not.
NOTES = {
    "tax": "Goes in each line's tax category. A line taxed at 0% under an exemption uses E, with the exemption reason. 06 is for a supplier not registered for sales or service tax.",
    "type": "The document type code. Credit, debit and refund notes (02, 03, 04, and 12 to 14 for self-billed) must name the original e-invoice's LHDN UUID.",
    "pay": "Optional on the e-invoice. Use 08 (Others) for a method not listed.",
    "state": "The state of each party's address. 17 (Not Applicable) is for a foreign address, and for the buyer on a consolidated e-invoice.",
    "class": "One per line. 004 is the code for a consolidated e-invoice: every line of one uses it. The self-billed cases have their own codes: 033 to 037 and 045.",
}

COMMON_UNITS = ["C62", "EA", "H87", "SET", "PR", "KGM", "GRM", "TNE", "LTR", "MLT", "MTR", "CMT", "MTK",
                "HUR", "DAY", "MON", "XBX", "XCT", "XPK", "XBG", "XRO", "E48", "LS", "KWH"]

e = html.escape
units = dict(data["unit"])


def table(rows, head2):
    body = "".join(f'<tr><td class="f-mono">{e(c)}</td><td>{e(v)}</td></tr>' for c, v in rows)
    return (f'<div class="f-table-wrap"><table class="f-table mc-table"><thead><tr><th>Code</th>'
            f'<th>{e(head2)}</th></tr></thead><tbody>{body}</tbody></table></div>')


sections = []
for key, title, _, _, static in LISTS:
    if not static:
        continue
    sections.append(
        f'<div class="mc-block" id="{key}"><h2 class="f-h3">{e(title)}</h2>'
        f'<p class="mc-note">{e(NOTES[key])}</p>{table(data[key], "Meaning")}</div>')
common = [(c, units[c]) for c in COMMON_UNITS if c in units]
sections.append(
    '<div class="mc-block" id="unit"><h2 class="f-h3">Common unit of measure codes</h2>'
    f'<p class="mc-note">LHDN uses the UN/ECE list, {len(data["unit"]):,} codes in all: search above for any other. '
    'Codes many systems use that are <strong>not</strong> on it include HR, KG, PCS, KIT, BOX, PAX and LOT.</p>'
    f'{table(common, "Unit")}</div>')

counts = ", ".join(f'{len(data[k]):,} {t.lower()}' for k, t, *_ in LISTS)
faq = [
    ("What is classification code 004?",
     "Consolidated e-invoice. Every line of a monthly consolidated e-invoice for walk-in sales uses 004, with the buyer as the general public (TIN EI00000000010, ID NA)."),
    ("What is state code 17?",
     "Not Applicable. Use it for a party with an address outside Malaysia, and for the buyer on a consolidated e-invoice, whose address is NA."),
    ("Which tax type code is sales tax?",
     "01 is Sales Tax and 02 is Service Tax. 03 is Tourism Tax, 04 High-Value Goods Tax, 05 Sales Tax on Low Value Goods, 06 Not Applicable and E Tax exemption."),
    ("Which unit code do I use for pieces or hours?",
     "LHDN uses the UN/ECE unit codes. A piece is H87 (or C62 for one, EA for each), an hour is HUR, a box XBX and a kilogram KGM. Common shorthand such as PCS, HR, BOX or KG is not on LHDN's list."),
]
faq_ld = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
    {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]}
faq_html = "".join(f"<details><summary>{e(q)}</summary><div>{e(a)}</div></details>" for q, a in faq)

json_out = {"checked": checked, "lists": {k: {"title": t, "rows": data[k]} for k, t, *_ in LISTS}}
os.makedirs("assets", exist_ok=True)
with open("assets/myinvois-codes.json", "w", encoding="utf-8", newline="\n") as f:
    json.dump(json_out, f, ensure_ascii=False, separators=(",", ":"))

desc = ("Every LHDN MyInvois code list in one search: tax types, e-invoice types, payment methods, "
        "state codes, classification codes, units, currencies and countries. From LHDN's SDK.")
title = "MyInvois Code Lookup: Tax, State, Classification and Unit Codes | SteadyDevs"

page = open("i18n/myinvois_codes_template.html", encoding="utf-8").read()
for k, v in {
    "{{TITLE}}": e(title), "{{DESC}}": e(desc), "{{FAQ_LD}}": json.dumps(faq_ld, ensure_ascii=False),
    "{{SECTIONS}}": "\n".join(sections), "{{FAQ}}": faq_html, "{{COUNTS}}": e(counts),
    "{{CHECKED}}": f"{d_checked.day} {d_checked:%B %Y}", "{{CHECKED_ISO}}": checked,
}.items():
    page = page.replace(k, v)
with open("myinvois-code-lookup.html", "w", encoding="utf-8", newline="\n") as f:
    f.write(page)
print("wrote myinvois-code-lookup.html and assets/myinvois-codes.json:", counts)
