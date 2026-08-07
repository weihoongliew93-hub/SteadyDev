# GA4 — funnel measurement for SteadyBook

How the plugin-to-purchase funnel is measured, and the console setup it
depends on. Written 7 August 2026.

**Property:** `G-5LRWB31H8T` · **Page:** `steadybook.html`

---

## 1. What was already there

The plugin has always tagged every upgrade link it renders:

```
?utm_source=plugin&utm_medium=upsell&utm_campaign=<where>
```

`<where>` is the admin screen the visitor clicked from — currently
`bays`, `reports`, `upgrade-page`, `account`, `billing`. It comes from
`GBB_Edition::upgrade_url($source)` in the plugin.

GA4 reads those automatically as the session source, so **arrivals were
being counted all along**. Anything claiming the funnel was entirely
unmeasured is wrong — the gap was narrower and further down.

## 2. What was missing

Everything after the arrival. Nothing recorded whether a visitor reached
the pricing table, opened checkout, or bought — so there was traffic but
no conversion rate, and no way to tell which prompt earns its place.

Four events now close that, each carrying the originating prompt:

| Event | Fires when |
|---|---|
| `plugin_upsell_arrival` | landed here from an in-plugin prompt |
| `view_pricing` | pricing table reached 40% visibility |
| `begin_checkout` | clicked a button naming a specific plan |
| `purchase` | Freemius reported a completed sale |

All four carry `upsell_from` (the prompt), plus `utm_source` and
`utm_medium` as a fallback. The commented block in `steadybook.html`
explains the implementation choices.

---

## 3. Console setup — required

> **Do this before deploying the page.** Event-scoped custom dimensions
> are **not retroactive**. GA4 attaches them only to data collected after
> the dimension exists, so any traffic arriving first has its
> `upsell_from` permanently unreadable.

### 3.1 Custom dimension

1. **analytics.google.com** → select the `G-5LRWB31H8T` property
2. **Admin** (gear, bottom-left)
3. **Property** column → **Data display** → **Custom definitions**
4. **Custom dimensions** tab → **Create custom dimension**
5. Fill in:
   - **Dimension name:** `Upsell prompt` — the label shown in reports
   - **Scope:** `Event`
   - **Description:** `Which in-plugin upgrade prompt sent this visitor`
   - **Event parameter:** `upsell_from` — exact, lowercase, underscore
6. **Save**

Optional: repeat for parameter `trial`, named `Trial checkout`, to
separate trial starts from direct purchases.

Do **not** bother registering `utm_source` / `utm_medium`. GA4 has
built-in Session source/medium dimensions that already cover them; the
event parameters exist only as a fallback.

Limit is 50 event-scoped dimensions. This uses one, or two.

### 3.2 Key events

GA4 renamed **Conversions → Key events** in 2024, so the UI may say
either depending on when you read this.

1. **Admin** → **Data display** → **Events**
2. Find `purchase` → toggle **Mark as key event**

Two catches:

- **It may already be on.** `purchase` is a GA4 *recommended* event and
  is often marked automatically. Check before changing anything.
- **The event is absent from that list until GA4 has received it once** —
  up to 24h after the first real sale. If it is not there, use
  **Admin → Key events → New key event** and type `purchase` manually.

Leave `begin_checkout` unmarked. It is a funnel step, not an outcome, and
marking it inflates the conversion count.

---

## 4. Verification

DebugView is the only fast feedback loop; everything else lags a day.

1. Install the **Google Analytics Debugger** Chrome extension, enable it.
   (Alternative: temporarily add `debug_mode: true` to the
   `gtag('config', ...)` call. The extension avoids editing the page.)
2. Open the page with a tagged URL:
   ```
   https://steadydevs.com/steadybook.html?utm_source=plugin&utm_medium=upsell&utm_campaign=reports
   ```
3. **Admin** → **DebugView**
4. Expect, in order:
   - `plugin_upsell_arrival` — immediately on load
   - `view_pricing` — on scrolling the pricing table into view
   - `begin_checkout` — on clicking a plan button
5. Click any event in the timeline and confirm `upsell_from = reports`
   appears in its parameters.

### The one that needs a real transaction

`purchase` fires from Freemius' `purchaseCompleted` callback. **That
callback's payload shape was inferred, not verified against Freemius'
documentation.** The code guards both plausible shapes (`plan_id` or
`plan.id`; `id` or `license_id`), but if the callback is named
differently or never fires, `purchase` will silently not appear.

Complete one real trial signup and confirm it lands. Until that is done,
treat revenue attribution as unverified. The other three events are
unaffected either way, and checkout works regardless — the tracking
no-ops rather than throwing.

---

## 5. The report worth building

1. **Explore** → **Blank**
2. **Technique:** `Funnel exploration`
3. Steps, in order:
   `plugin_upsell_arrival` → `view_pricing` → `begin_checkout` → `purchase`
4. Drag **Upsell prompt** into **Breakdown**

That is the funnel split by prompt: which upgrade screen sends people who
actually buy, and which step loses them. It is the number the strategy
documents describe as missing.

---

## 6. Timing

| Surface | Lag |
|---|---|
| DebugView | seconds |
| Realtime report | minutes |
| Standard reports, Explorations | **24–48 hours** |

Do not conclude anything is broken before 48 hours have passed. Assuming
a reporting lag is a failure is the most common false alarm with GA4.

---

## 7. Known limits

- **Revenue is approximate.** `SB_PLAN_META` in `steadybook.html`
  hardcodes list prices (299 / 699 / 1499 USD). Coupons and prorations
  are not reflected. Fine for comparing tiers and prompts against each
  other, which is the question being asked. **Freemius remains the source
  of truth for money** — do not reconcile books against GA4.
- **Ad blockers suppress everything here.** The tracking degrades to a
  no-op by design, so real traffic is undercounted by whatever share of
  visitors block analytics. Read the funnel as ratios between steps, not
  as absolute counts.
- **`begin_checkout` fires before the overlay branch**, deliberately, so
  visitors whose overlay is blocked and who follow the fallback link to
  hosted checkout are still counted. They buy too.
- **Attribution is stored in `sessionStorage`.** It survives navigation
  within the site but not a new tab or a returning visit the next day.
