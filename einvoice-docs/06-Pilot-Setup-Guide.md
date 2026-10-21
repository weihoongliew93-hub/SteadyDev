# E-Invoice Platform
## Pilot Setup Guide

**Document type:** Walk-through for pilot customers (you share your screen, they follow)
**Version:** 0.1, 21 October 2026
**Time needed:** about 45 minutes, plus LHDN's own waiting time

This is the order a pilot goes through, from nothing to their first invoice accepted by
LHDN. Every step marked **(checked)** was done for real against LHDN's sandbox on
21 October 2026. Steps marked **(not yet possible)** need platform work first; see the
last section before booking a pilot.

---

## Before the session

Ask the pilot to have these ready. Most delays come from the first two.

| What | Where they get it | Why |
|---|---|---|
| Access to the MyInvois portal as their business | Log in through MyTax with the director's or authorised person's account | Everything on the LHDN side happens here |
| Their TIN | MyTax, or any LHDN letter | Sole proprietors have an `IG…` TIN; companies have `C…` |
| SSM registration number | SSM certificate | Goes on every e-invoice as the seller ID |
| MSIC code (5 digits) | SSM business profile, or LHDN's MSIC list | Must be on LHDN's list; the platform refuses invented codes |
| Registered address with postcode and state | SSM certificate | Required on every e-invoice |
| SST registration number, if registered | Customs (MySST) | Otherwise "NA" |

---

## Part 1 — In the MyInvois portal (pilot does this)

LHDN keeps sandbox and production separate: **credentials from one do not work in the
other.** Start in the sandbox (the "pre-production" portal); the pilot first registers
their business there.

### Option A: their own ERP credentials (works today)

1. In the MyInvois portal, open **View and Register ERP** and register a new ERP system
   (name it "Steady Devs e-Invoice").
2. LHDN shows a **Client ID** and **two Client Secrets**. Both secrets expire on the same
   date; the second is a spare. **Copy them straight away** into the platform (Part 2,
   step 2). Do not email or message them.
3. Note the expiry date. The platform cannot file once the secret expires.

### Option B: authorise Steady Devs as intermediary (built, not yet tried on LHDN)

The pilot adds Steady Devs as their intermediary in the portal and gives no credentials
and no certificate. The platform supports this since 21 October 2026, but only once
Steady Devs' own sandbox and production logins and certificate are configured on the
server; until then the wizard does not offer it. It has not been run against LHDN yet:
do that with a second sandbox taxpayer before offering it to a pilot.

---

## Part 2 — In the platform (setup wizard)

The wizard opens on first login. It has five steps.

1. **Business profile (checked).** Business name, TIN, MSIC, address, city, state,
   postcode. The TIN check accepts individual (`IG`) and company (`C`) TINs of 10 or 11
   digits. Use the SSM number as the registration number.
   - *Phase 4 businesses (turnover up to RM5 million):* tick **Phase 4 relaxation**
     under Settings > Business Profile if they want to file consolidated e-invoices for
     everything until 31 December 2027. This is their declaration; we cannot check it.
2. **How to connect.** Option A: choose "Use my own MyInvois credentials" and paste the
   Client ID and one Client Secret from Part 1 (checked); the secret is masked once saved.
   Option B: choose "Steady Devs files for me"; nothing to paste.
3. **Intermediary authorisation.** Option A: nothing to do. Option B: the pilot authorises
   Steady Devs in MyInvois; step 5 confirms it with LHDN. There is no tick-box any more.
4. **Environment (checked).** Choose **Staging** (LHDN sandbox) first. Switch to
   Production only after Part 3 passes and you have new production credentials.
5. **Test connection (checked for Option A).** Signs in to LHDN. With Option A a failure is
   almost always a mistyped secret or credentials from the wrong environment. With
   Option B a pass is what marks the authorisation as done.

**Digital certificate.** Option B needs none from the pilot: Steady Devs' certificate
signs. Option A still needs the pilot's own certificate, and the app has no screen to
upload one (the settings API accepts it, but nothing checks it or reads its expiry).

---

## Part 3 — First invoices (in the sandbox)

Send these three, in this order, and check each one on the pilot's MyInvois sandbox
portal as well as in the platform:

| # | Invoice | What success looks like |
|---|---|---|
| 1 | A normal invoice to a buyer with a real TIN | **Valid** at LHDN within a minute, then **Approved** in the platform within 5 minutes, with a share link |
| 2 | Cancel invoice 1 (reason: "Sandbox test") | Shows **Cancelled** on the portal. Cancelling is only possible within 72 hours |
| 3 | A consolidated invoice for walk-in sales (general buyer TIN `EI00000000010`, buyer ID "NA", classification 004) | **Valid** at LHDN |

**Common rejections seen in the sandbox, and the fix:**

| LHDN says | Fix |
|---|---|
| Authenticated TIN and document's TIN is not matching | The business profile's TIN or ID does not match the LHDN account. Sole proprietors must use their own IC as the ID |
| Enter valid e-mail address - BUYER | Leave the buyer email blank rather than typing "N/A" |
| ERR228 / ERR237 (general TIN not allowed) | The general TIN is only allowed with an individual's IC, or on a consolidated invoice |

---

## Part 4 — Going live

1. Pilot registers the business (or ERP) again in the **production** MyInvois portal and
   gets **production** credentials.
2. In the platform: environment to **Production**, paste the production credentials, run
   **Test connection** again.
3. Send one real low-value invoice and check it on the production portal.
4. Tell the pilot how to reach you, and note anything they found confusing.

---

## Fix before booking pilots

Found while writing this guide (21 October 2026). Each of these stops a pilot or misleads one:

1. **Run Option B once against LHDN's sandbox** with a second taxpayer authorising
   Steady Devs. That needs Steady Devs' own sandbox ERP login and certificate configured.
   Note whether LHDN refuses at sign-in or only at submission when no authorisation
   exists, and whether a sole proprietor needs `TIN:ROB` instead of the TIN alone.
2. **Option A has no certificate upload screen.** Either add one or steer pilots to
   Option B.
3. Done 21 October 2026: intermediary mode built; wizard step 3 is no longer a tick-box.
