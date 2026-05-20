# E-Invoice Platform
## Onboarding Session Checklist

**Document Type:** Internal Use — Session Facilitator  
**Duration:** 60–90 minutes  
**Version:** 1.0  
**Date:** May 20, 2026

---

## Pre-Session Preparation

**24 hours before session:**

- [ ] Client questionnaire received and reviewed
- [ ] Integration complexity assessed
- [ ] Sample invoices reviewed
- [ ] LHDN credentials validated (if provided early)
- [ ] Meeting link sent (Teams/Zoom)
- [ ] Calendar invite sent with agenda
- [ ] Screen-sharing and recording permissions confirmed

**Required Materials:**

- [ ] Client's completed questionnaire
- [ ] Integration assessment report (if custom work)
- [ ] API documentation link (if API integration)
- [ ] CSV template file (if manual upload)
- [ ] SOW document (if integration work required)
- [ ] Access to demo platform account

**Required Attendees:**

**From Client:**
- Primary contact (decision maker)
- Technical/IT staff (if available)
- Accounting/finance lead

**From SteadyDevs:**
- Onboarding facilitator (primary)
- Technical support (for integration questions)

---

## Session Structure

### Opening (5 minutes)

- [ ] **Welcome & introductions**
  - Introduce SteadyDevs team
  - Client team introductions + roles
  - Confirm recording permission
- [ ] **Agenda overview** (set expectations)
  - Account setup (15 min)
  - LHDN credentials (20 min)
  - Environment config (10 min)
  - Product master (15 min)
  - Integration (20 min)
  - Testing (15 min)
  - Q&A (10 min)
- [ ] **Housekeeping**
  - Keep questions for end of each section
  - Screen sharing will be used throughout
  - Session will be recorded for internal reference

---

## Phase 1: Account Setup (15 minutes)

### 1.1 Plan Tier Confirmation

- [ ] Confirm selected plan: ☐ Free ☐ Starter ☐ Business ☐ Growth ☐ Premium
- [ ] Review plan features:
  - Invoice quota: [X] invoices/month
  - User seats: [X] users
  - API keys: [X] keys
  - Webhooks: [X] endpoints
- [ ] Confirm billing cycle: ☐ Monthly ☐ Annual (17% discount)
- [ ] 30-day free trial explained (no credit card required)

### 1.2 Account Creation

**Screen share: Platform registration page**

- [ ] Navigate to registration URL
- [ ] **Primary admin user:**
  - [ ] Email address entered
  - [ ] Strong password created (show requirements)
  - [ ] Password confirmed
- [ ] **Email verification:**
  - [ ] Verification email sent
  - [ ] Client clicks verification link
  - [ ] Email confirmed ✅
- [ ] **First login successful**

### 1.3 Company Profile Completion

**Screen share: Settings → Company Profile**

- [ ] **Business information:**
  - [ ] Company legal name (copy from questionnaire)
  - [ ] Business Registration Number (BRN)
  - [ ] Taxpayer Identification Number (TIN)
    - Format validation: C1234567890 or IG1234567890
  - [ ] MSIC Code (validate against lookup table)
- [ ] **Registered address:**
  - [ ] Address line 1
  - [ ] City
  - [ ] State (dropdown)
  - [ ] Postcode (5-digit validation)
  - [ ] Country: Malaysia
- [ ] **Contact information:**
  - [ ] Primary contact name
  - [ ] Primary contact phone
  - [ ] Accounting contact (if different)
- [ ] **Profile saved** ✅

### 1.4 Multi-Entity Setup (Premium Only)

**Skip this section if not Premium plan**

- [ ] **For each additional entity:**
  - [ ] Create tenant
  - [ ] Enter TIN (must be unique)
  - [ ] Enter company name
  - [ ] Separate LHDN credentials will be configured per entity
- [ ] **Explain isolation:** Each entity has separate invoices, certificates, submission history

---

## Phase 2: LHDN Credentials Setup (20 minutes)

**⚠️ CRITICAL SECTION — Go slowly, validate each step**

### 2.1 Navigate to LHDN Configuration

**Screen share: Settings → LHDN Configuration**

- [ ] **Sandbox mode toggle visible**
  - [ ] **Start in Sandbox mode** (recommended)
  - [ ] Explain: Sandbox = test mode, no real LHDN submissions
  - [ ] Production = live submissions (only after testing)

### 2.2 Enter MyInvois Credentials

- [ ] **Client ID:**
  - [ ] Copy-paste from client's documentation (avoid typos)
  - [ ] Trim whitespace
  - [ ] Example format: `C1234567890_1234567890abcdef`
- [ ] **Client Secret:**
  - [ ] Copy-paste carefully
  - [ ] Field masks secret after entry (shows •••••••)
  - [ ] **Important:** Cannot be retrieved after save
- [ ] **Taxpayer TIN:**
  - [ ] Must match company TIN from profile
  - [ ] Validate format automatically
  - [ ] ⚠️ If mismatch → Error shown, must correct

### 2.3 Upload Digital Certificate

- [ ] **Certificate file upload:**
  - [ ] Click "Upload Certificate" button
  - [ ] Select file (.pem or .pfx)
  - [ ] **Validation checks:**
    - [ ] File format valid ✅
    - [ ] Certificate not expired ✅
    - [ ] Certificate TIN matches company TIN ✅
    - [ ] Certificate valid for > 60 days ✅
- [ ] **Certificate password (if .pfx):**
  - [ ] Enter password
  - [ ] Confirm password
- [ ] **Certificate uploaded** ✅

### 2.4 Test LHDN Connection

**This is the moment of truth**

- [ ] Click **"Test Connection"** button
- [ ] **Watch for:**
  - [ ] "Connecting to LHDN..." spinner
  - [ ] OAuth2 token request sent
  - [ ] Token received ✅
  - [ ] Certificate signature test passed ✅
  - [ ] **Green checkmark: "Connection successful"** ✅

**If test FAILS:**

**Common error 1:** Invalid Client ID/Secret
- [ ] Re-enter credentials carefully
- [ ] Check for extra spaces, wrong characters
- [ ] Verify credentials with LHDN portal
- [ ] Retry test

**Common error 2:** Certificate TIN mismatch
- [ ] Certificate TIN: [Show value from cert]
- [ ] Company TIN: [Show value from profile]
- [ ] ⚠️ Client must obtain correct certificate
- [ ] **Cannot proceed until resolved**

**Common error 3:** Certificate expired
- [ ] Check certificate expiry date
- [ ] Client must renew certificate with CA
- [ ] **Cannot proceed until resolved**

**Common error 4:** LHDN API unreachable
- [ ] Check client's internet connection
- [ ] Check firewall settings
- [ ] Retry in 2-3 minutes
- [ ] If persistent → LHDN service may be down (rare)

**⚠️ DO NOT PROCEED UNTIL TEST PASSES**

- [ ] **Final check: Readiness Level 2 = COMPLETE** ✅

---

## Phase 3: Environment Configuration (10 minutes)

### 3.1 Sandbox vs Production

- [ ] **Confirm current mode: Sandbox** ✅
- [ ] **Explain testing period:**
  - Recommend 1–2 weeks in sandbox
  - Submit 50–100 test invoices
  - Validate all workflows
  - Switch to production only after confidence
- [ ] **Production switch process:**
  - Simple toggle (requires confirmation)
  - All future submissions go to real LHDN
  - Invoice counter resets
  - No data migration needed (test data stays separate)

### 3.2 Email Alerts Configuration

**Screen share: Settings → Notifications**

- [ ] **Email service type:**
  - [ ] ☐ Client's SMTP server
  - [ ] ☐ SteadyDevs-managed SendGrid

**If client SMTP:**
- [ ] **SMTP settings entered:**
  - [ ] Host: [Client's SMTP host]
  - [ ] Port: [Usually 587 or 465]
  - [ ] Username: [SMTP username]
  - [ ] Password: [Will be encrypted]
  - [ ] Sender email: [Company email]
- [ ] **Test email sent:**
  - [ ] Click "Send Test Email"
  - [ ] Client checks inbox
  - [ ] Test email received ✅

**If SteadyDevs-managed:**
- [ ] Provisioned SendGrid account
- [ ] Sender domain configured
- [ ] Test email sent ✅

- [ ] **Notification preferences:**
  - [ ] ✅ Certificate expiry warnings (60d, 30d, 7d, 1d)
  - [ ] ✅ Quota warnings (80%, 95%, 100%)
  - [ ] ✅ LHDN rejection alerts
  - [ ] ✅ Daily submission summary (optional)

### 3.3 Quota & Billing

**Screen share: Settings → Billing**

- [ ] **Current plan displayed:**
  - Plan: [Name]
  - Invoice quota: [X]/month
  - Overage rate: RM [X.XX]/invoice
- [ ] **Usage alerts configured:**
  - [ ] 80% warning enabled
  - [ ] 95% warning enabled
  - [ ] 100% warning enabled
- [ ] **Explain overage billing:**
  - Not blocked when limit reached
  - Extra invoices charged at overage rate
  - Billed at start of next month
  - Upgrade recommended if consistently over
- [ ] **Payment method (if not trial):**
  - [ ] Stripe checkout link provided
  - [ ] Credit card details entered
  - [ ] Billing email confirmed

---

## Phase 4: Product Master Setup (15 minutes)

**Screen share: Product Master page**

### 4.1 Explain Purpose

- [ ] **What is product master?**
  - Catalogue of your products/services
  - Pre-defines: Tax type, tax rate, classification codes
  - **Tier 3 validation:** Auto-enriches invoices
  - Reduces manual data entry per invoice

- [ ] **Show benefit:**
  - Without product master: Must enter tax info per invoice line
  - With product master: Item code → all fields auto-filled

### 4.2 Bulk Import Option

**If client has product list in CSV/Excel:**

- [ ] **Download CSV template:**
  - [ ] Click "Download Template"
  - [ ] Show required columns:
    - item_code (unique)
    - description
    - tax_type (E, Z, S, etc.)
    - tax_rate (0.00, 0.06, 0.10)
    - classification_code (MSIC or product code)
- [ ] **Client prepares file:**
  - [ ] Open template in Excel
  - [ ] Fill in products (can do after session)
  - [ ] Save as CSV
- [ ] **Action item:** Client uploads within 3 days

### 4.3 Manual Entry Demonstration

**Let's add 2-3 products together:**

- [ ] **Click "Add Product"**
- [ ] **Product 1 example: Laptop computer**
  - [ ] Item code: `LAP001`
  - [ ] Description: `Dell Latitude Laptop`
  - [ ] Tax type: `S` (Standard-rated)
  - [ ] Tax rate: `0.06` (6% SST)
  - [ ] Classification code: `47413` (Computers retail - MSIC)
  - [ ] Unit price: `RM 2,500.00` (optional)
  - [ ] Save ✅
- [ ] **Product 2 example: Consulting service**
  - [ ] Item code: `SVC001`
  - [ ] Description: `IT Consulting - Hourly`
  - [ ] Tax type: `E` (Exempt)
  - [ ] Tax rate: `0.00`
  - [ ] Classification code: `62020` (IT consulting - MSIC)
  - [ ] Unit price: `RM 400.00`
  - [ ] Save ✅
- [ ] **Product 3 example: Zero-rated export**
  - [ ] Item code: `EXP001`
  - [ ] Description: `Exported goods`
  - [ ] Tax type: `Z` (Zero-rated)
  - [ ] Tax rate: `0.00`
  - [ ] Classification code: [Client's product code]
  - [ ] Save ✅

- [ ] **Action item:** Client completes full product catalogue within 1 week

---

## Phase 5: Integration Setup (20 minutes)

**This section varies based on integration complexity**

### Option A: Manual CSV Upload (No Integration Work)

**Best for:** < 50 invoices/month, no technical resources

- [ ] **Navigate to: Invoices → Import**
- [ ] **Download CSV template:**
  - [ ] Click "Download CSV Template"
  - [ ] Open in Excel
- [ ] **Review required fields:**
  - [ ] invoice_number (must be unique)
  - [ ] invoice_date (YYYY-MM-DD format)
  - [ ] buyer_tin (required for > RM 10,000)
  - [ ] buyer_name
  - [ ] buyer_address
  - [ ] items[].item_code (matches product master)
  - [ ] items[].quantity
  - [ ] items[].unit_price
  - [ ] currency (MYR)
- [ ] **Demo upload with sample data:**
  - [ ] Populate 1-2 rows with client's sample invoice
  - [ ] Save as CSV
  - [ ] Click "Upload CSV"
  - [ ] Select file
  - [ ] Watch validation progress
  - [ ] **Success:** Invoice appears in dashboard
- [ ] **Client practices:**
  - [ ] Client uploads 1 invoice themselves
  - [ ] Guide through any errors
  - [ ] Confirm understanding

### Option B: API Integration (Client Implements)

**Best for:** Client has dev team, modern system with API capability

- [ ] **Navigate to: Settings → API Keys**
- [ ] **Generate API key:**
  - [ ] Click "Generate New API Key"
  - [ ] Name: `[Client System] Integration`
  - [ ] Permissions: ☑ Submit invoices ☑ Query status
  - [ ] Click "Generate"
  - [ ] **Key generated:** `ei_1234567890abcdef...`
  - [ ] **Copy key** (show once only, cannot retrieve)
- [ ] **Provide API documentation:**
  - [ ] Send link: `https://docs.steadydevs.com/einvoice-api`
  - [ ] Show key endpoint: `POST /api/v1/adapter/import`
  - [ ] Authentication: `X-API-Key: ei_...` header
  - [ ] Show example cURL request
  - [ ] Show example JSON payload
- [ ] **Review code sample (if client dev present):**
  ```csharp
  // C# example
  var client = new HttpClient();
  client.DefaultRequestHeaders.Add("X-API-Key", "ei_YOUR_KEY");
  
  var payload = new {
    invoice_number = "INV-2024-001",
    invoice_date = "2024-05-20",
    buyer_tin = "C1234567890",
    // ... other fields
  };
  
  var response = await client.PostAsJsonAsync(
    "https://api.steadydevs.com/einvoice/v1/adapter/import",
    payload
  );
  ```
- [ ] **Webhook setup (if Business+ plan):**
  - [ ] Navigate to: Settings → Webhooks
  - [ ] Click "Add Webhook Endpoint"
  - [ ] Endpoint URL: `https://client-system.com/einvoice/webhook`
  - [ ] Events: ☑ invoice.approved ☑ invoice.rejected
  - [ ] Secret key generated (for HMAC signature validation)
  - [ ] Test webhook: Click "Send Test Event"
  - [ ] Client confirms receipt
- [ ] **Action item:**
  - [ ] Client's dev team implements integration
  - [ ] Target completion: [Date, 1-2 weeks]
  - [ ] First test submission within 3 days
  - [ ] SteadyDevs available for technical support

### Option C: Custom Integration (SteadyDevs Implements)

**Best for:** Client needs custom work, billable project

- [ ] **Confirm integration assessment reviewed**
- [ ] **Review SOW:**
  - [ ] Integration approach: [Database / File watcher / etc.]
  - [ ] Deliverables: [List]
  - [ ] Timeline: [X weeks]
  - [ ] Investment: RM [Amount]
- [ ] **Explain development process:**
  - Week 1: Requirements validation + access provisioning
  - Week 2-X: Development + testing
  - Week X+1: Deployment + handover
- [ ] **What client provides:**
  - [ ] Database credentials / API keys (within 3 days)
  - [ ] Test environment access
  - [ ] Technical contact for questions
  - [ ] Sample data validation
- [ ] **Sign SOW:**
  - [ ] Client reviews and signs SOW
  - [ ] 50% deposit invoice sent
  - [ ] Kickoff meeting scheduled: [Date]
- [ ] **Action item:**
  - [ ] SOW signed and returned
  - [ ] Deposit paid within 5 business days
  - [ ] Integration kickoff: [Date]
  - [ ] Target go-live: [Date]

### Option D: Pre-Built Adapter (If Available)

**Best for:** Common systems with existing adapters

- [ ] **Navigate to: Integrations → Adapter Registry**
- [ ] **Search for client's system:**
  - [ ] Search: `[System name]`
  - [ ] Adapter found: `[Name] v[Version]`
  - [ ] Author: [SteadyDevs / Community]
  - [ ] Status: ✅ Approved
  - [ ] Usage: [X] installs
- [ ] **Install adapter:**
  - [ ] Click "Install"
  - [ ] Adapter installed ✅
- [ ] **Configure adapter:**
  - [ ] Connection string: `[Client's database or API URL]`
  - [ ] Username: `[If required]`
  - [ ] Password: `[If required]`
  - [ ] Polling interval: `[30 minutes / 1 hour / 4 hours]`
  - [ ] Save configuration
- [ ] **Test adapter:**
  - [ ] Click "Test Connection"
  - [ ] Connection successful ✅
  - [ ] Click "Run Once" to trigger sample import
  - [ ] Invoice(s) appear in dashboard ✅
- [ ] **Enable adapter:**
  - [ ] Status: Enabled
  - [ ] Scheduled runs: Active

---

## Phase 6: Testing & Validation (15 minutes)

**Objective: Submit 1 complete test invoice end-to-end**

### 6.1 Submit Test Invoice

**Method depends on integration approach from Phase 5:**

**If manual CSV:**
- [ ] Client uploads 1 test invoice via CSV

**If API:**
- [ ] Demo API call with cURL or Postman
- [ ] Show request payload
- [ ] Show response: 201 Created, invoice_id returned

**If adapter:**
- [ ] Trigger adapter manually: "Run Once"
- [ ] Adapter pulls invoice from source system

### 6.2 Watch Submission Flow

**Screen share: Dashboard → Invoices**

- [ ] **Invoice appears in list:**
  - [ ] Status: `PENDING` (if Tier 2 soft-reject)
  - [ ] OR Status: `SUBMITTED` (if all tiers passed)
  - [ ] Submission time shown
- [ ] **Click invoice to view detail:**
  - [ ] All fields displayed
  - [ ] Validation status for each tier:
    - Tier 1: ✅ Structural validation passed
    - Tier 2: ✅ LHDN completeness passed (or ⚠️ issues listed)
    - Tier 3: ✅ Auto-enrichment applied (or ℹ️ not needed)
- [ ] **Background job processing:**
  - [ ] Navigate to: Jobs (admin view)
  - [ ] Show job queue: "Submit invoice [ID] to LHDN"
  - [ ] Job status: Running → Completed
- [ ] **LHDN API call (sandbox mode):**
  - [ ] Submission log shows API request
  - [ ] LHDN response: 200 OK
  - [ ] UUID assigned: `[LHDN UUID]`
  - [ ] QR code generated
  - [ ] Status updated: `APPROVED` (sandbox auto-approves)
- [ ] **Webhook fired (if configured):**
  - [ ] Webhook delivery log shows
  - [ ] Event: `invoice.approved`
  - [ ] Payload delivered to client's endpoint
  - [ ] Response: 200 OK

### 6.3 Review Invoice Detail Page

- [ ] **Navigate back to invoice detail**
- [ ] **Show key fields:**
  - [ ] LHDN UUID: `[UUID]`
  - [ ] QR code: [Display]
  - [ ] Status: APPROVED
  - [ ] Submission timestamp
  - [ ] Approval timestamp
- [ ] **Status history:**
  - [ ] Draft → Submitted → Approved
  - [ ] Each transition logged with timestamp
- [ ] **Download options:**
  - [ ] Download PDF (with QR code)
  - [ ] Download JSON (LHDN format)

### 6.4 Explain Status Polling

- [ ] **Background job runs every 5 minutes:**
  - Polls LHDN for status updates
  - Updates invoice status automatically
  - Fires webhook on change
- [ ] **In production:**
  - SUBMITTED invoices may stay pending for hours/days
  - LHDN reviews and approves/rejects
  - Status sync keeps dashboard current

### 6.5 Demo Rejection Handling

**Use intentionally bad test data:**

- [ ] **Submit invoice with error:**
  - Example: Missing buyer TIN for RM 11,000 invoice
  - OR: Invalid date format
  - OR: Negative quantity
- [ ] **Show Tier 1 hard reject (400):**
  - Invoice not saved
  - Error message shown immediately
  - Fix required before resubmission
- [ ] **Show Tier 2 soft reject (422):**
  - Invoice saved to "Pending" status
  - Issues listed with plain-English explanation
  - Navigate to: Dashboard → Incomplete Invoices
  - Show action card: "Fix 1 invoice with missing buyer TIN"
  - Click "Fix Now" → Edit form opens
  - Add buyer TIN → Save → Status: Ready to submit
- [ ] **Show Tier 3 auto-enrichment:**
  - Submit invoice with item_code only
  - Tax type, tax rate auto-filled from product master
  - Show "before" and "after" in audit log

---

## Phase 7: User Management (5 minutes)

**For Business, Growth, Premium plans only (skip if Free/Starter)**

### 7.1 Explain Roles

**Screen share: Settings → Users**

- [ ] **Available roles:**
  - **TENANT_ADMIN:** Full access, can invite users, change settings
  - **TENANT_USER:** Submit invoices, view dashboard, edit products
  - **TENANT_VIEWER:** Read-only access, view invoices and reports only
- [ ] **Current user (client):** TENANT_ADMIN by default

### 7.2 Invite Team Members

- [ ] **Click "Invite User"**
- [ ] **For each team member:**
  - [ ] Email address: `[Team member email]`
  - [ ] Role: `[Select appropriate role]`
  - [ ] Send invite ✅
  - [ ] Invite email sent (48-hour expiry)
- [ ] **Explain invite process:**
  - Team member receives email with invite link
  - Clicks link → Sets password → Account created
  - User appears in user list with "Pending" status until accepted
- [ ] **Action item:** Client invites accounting/finance team within 1 week

---

## Phase 8: Go-Live Planning (5 minutes)

### 8.1 Review Onboarding Checklist

- [ ] ✅ Account created
- [ ] ✅ Company profile completed
- [ ] ✅ LHDN credentials tested and working
- [ ] ✅ Email alerts configured
- [ ] ✅ Product master populated (or in progress)
- [ ] ✅ Integration method decided and set up
- [ ] ✅ Test invoice submitted successfully
- [ ] ✅ Team members invited

### 8.2 Set Go-Live Timeline

- [ ] **Sandbox testing period:**
  - Duration: 1–2 weeks recommended
  - Target: Submit 50–100 test invoices
  - Validate all workflows (create, approve, reject, cancel)
  - Train team on dashboard
- [ ] **Switch to production:**
  - Target date: `[Date, 2-4 weeks from today]`
  - Requirements before switch:
    - [ ] Product master 100% complete
    - [ ] All team members onboarded
    - [ ] Integration stable (< 5% error rate)
    - [ ] Client confident with dashboard
- [ ] **First real submission:**
  - Target date: `[Same day as production switch]`
  - Process: Flip sandbox toggle → Submit 1 invoice → Verify LHDN approval
  - SteadyDevs support available during first submission

### 8.3 Confirm Support Channel

- [ ] **Primary support:**
  - Email: support@steadydevs.com
  - Response SLA:
    - Free: 5 business days
    - Starter: 5 business days
    - Business: 2 business days
    - Growth: 1 business day
    - Premium: 4 hours (critical issues)
- [ ] **Emergency contact (Premium only):**
  - Phone: [Premium support number]
  - WhatsApp: [Premium support WhatsApp]
  - Use for: Production outages, urgent deadline issues
- [ ] **Documentation portal:**
  - URL: https://docs.steadydevs.com/einvoice
  - Includes: User guides, API reference, troubleshooting, FAQs

---

## Phase 9: Q&A & Wrap-Up (10 minutes)

### 9.1 Answer Client Questions

- [ ] **Common questions:**
  - "What if LHDN rejects an invoice?"
    → Rejection appears in dashboard with fix instructions, one-click resubmit
  - "Can we change plan tier later?"
    → Yes, upgrade/downgrade anytime, prorated billing
  - "What happens if we exceed invoice limit?"
    → Overage charges apply (RM 0.30–0.80 per invoice), not blocked
  - "How do we cancel?"
    → Cancel via dashboard, no penalty, data retained for [X] months
  - "Is our data backed up?"
    → Yes, daily backups, 99.9% uptime target (Premium SLA)

### 9.2 Provide Resources

- [ ] **Email sent to client immediately after session:**
  - [ ] Dashboard URL: `https://einvoice-platform.onrender.com`
  - [ ] Login credentials: [Client's email]
  - [ ] API key (if generated)
  - [ ] Documentation links
  - [ ] Support email
  - [ ] Action items with deadlines
- [ ] **Resources attached:**
  - [ ] CSV template (if manual upload)
  - [ ] API documentation PDF (if API integration)
  - [ ] LHDN error code reference guide
  - [ ] Product master sample file
  - [ ] SOW (if integration work)

### 9.3 Schedule Follow-Ups

- [ ] **If integration work required:**
  - [ ] Integration kickoff call: [Date, 3-5 days from today]
  - [ ] Integration completion review: [Date, 2-3 weeks]
- [ ] **Go-live readiness review:**
  - [ ] Scheduled for: [Date, 1-2 weeks before production switch]
  - [ ] Agenda: Review test results, answer final questions, confirm go-live date
- [ ] **30-day check-in:**
  - [ ] Scheduled for: [Date, 30 days after go-live]
  - [ ] Agenda: Review usage, collect feedback, address any issues

### 9.4 Send Summary Email

- [ ] **Subject:** Onboarding Complete - [Client Name] E-Invoice Platform
- [ ] **Body includes:**
  - Summary of what was configured
  - Access credentials
  - Action items with owners and deadlines
  - Next meeting dates
  - Support contact
  - Documentation links

---

## Post-Session Tasks

**Within 2 hours of session:**

- [ ] Update CRM: Onboarding status = Complete
- [ ] Send onboarding summary email
- [ ] Add client to "Post-Onboarding" support queue
- [ ] Set reminder for go-live readiness review
- [ ] If integration work: Create project in tracker, assign developer

**Within 24 hours:**

- [ ] Review session recording (if recorded)
- [ ] Note any unique requirements for future reference
- [ ] Update onboarding checklist if improvements needed

**Ongoing:**

- [ ] Monitor client's first 10 invoice submissions
- [ ] Proactively reach out if errors detected
- [ ] Respond to support requests per SLA

---

## Success Metrics

**Track after each onboarding:**

| Metric | Target | Actual |
|--------|--------|--------|
| Session completed on time (< 90 min) | Yes | |
| LHDN credentials test passed | 100% | |
| Test invoice submitted successfully | 100% | |
| Client satisfied (verbal confirmation) | Yes | |
| No post-session issues within 48 hours | Yes | |

---

## Common Issues During Session

### Issue: Client's LHDN credentials don't work

**Solution:**
- Recheck Client ID/Secret for typos
- Verify credentials in LHDN portal
- If persistent → Schedule follow-up after client contacts LHDN
- Do NOT proceed without working credentials

### Issue: Certificate TIN mismatch

**Solution:**
- Client must obtain correct certificate (cannot proceed)
- Offer to validate certificate before client pays CA
- Reschedule onboarding for 1-2 weeks later

### Issue: Client has no product master data

**Solution:**
- Manual entry during session is too time-consuming
- Provide CSV template
- Action item: Complete within 1 week
- Follow up with reminder email

### Issue: Integration assessment missed complexity

**Solution:**
- Be transparent: "Based on what I'm seeing now, this is more complex than initially assessed"
- Provide revised quote immediately
- Client approves or we fall back to manual CSV upload

### Issue: Client expects features not in their plan

**Solution:**
- Clearly explain plan limitations
- Offer upgrade if needed
- Document feature request for future development

---

## Document Control

**Version:** 1.0  
**Last Updated:** May 20, 2026  
**Next Review:** August 20, 2026  
**Owner:** SteadyDevs Onboarding Team

---

**SteadyDevs Solutions**  
SSM: 202603092285  
Internal Use Only — Confidential
