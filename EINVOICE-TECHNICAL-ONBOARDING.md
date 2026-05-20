# E-Invoice Platform — Technical Onboarding Checklist

**Version:** 1.0  
**Last Updated:** May 20, 2026  
**Owner:** SteadyDevs Solutions

---

## Table of Contents

1. [Pre-Onboarding Information Required](#1-pre-onboarding-information-required)
2. [Integration Assessment & Scoping](#2-integration-assessment--scoping)
3. [Onboarding Session Checklist](#3-onboarding-session-checklist)
4. [Post-Onboarding Deliverables](#4-post-onboarding-deliverables)
5. [Integration Work — Pricing Guidelines](#5-integration-work--pricing-guidelines)

---

## 1. Pre-Onboarding Information Required

Send this checklist to the client **at least 3 business days before** the onboarding session.

### 1.1 Business Information

**Required from all clients:**

- [ ] **Company legal name** (as registered with SSM)
- [ ] **Business Registration Number (BRN)** or NRIC (for sole proprietors)
- [ ] **Taxpayer Identification Number (TIN)** (format: C1234567890 for companies, IG1234567890 for individuals)
- [ ] **Registered business address** (full address including postcode)
- [ ] **MSIC Code** (Malaysia Standard Industrial Classification 2008)
- [ ] **Primary contact person** (name, email, phone)
- [ ] **Accounting/finance contact** (if different from primary)
- [ ] **Expected invoice volume per month** (to recommend correct plan tier)

**For multi-entity setups (Premium plan only):**

- [ ] List of all company TINs to be managed under one account
- [ ] Relationship between entities (subsidiary, separate clients, etc.)

---

### 1.2 LHDN MyInvois Credentials

**Critical:** Client must already have these from LHDN before onboarding.

- [ ] **MyInvois Client ID** (obtained from LHDN portal)
- [ ] **MyInvois Client Secret** (obtained from LHDN portal)
- [ ] **Intermediary authorization status** (confirmed with LHDN)
- [ ] **Digital certificate file** (X.509, .pem or .pfx format)
  - [ ] Certificate issued by approved Malaysian Certificate Authority
  - [ ] Certificate TIN matches company TIN
  - [ ] Certificate valid for at least 60 days from onboarding date
- [ ] **Certificate password** (if .pfx format)

**If client does not have these yet:**

> ⚠️ **Stop onboarding and provide guidance:**  
> 1. Client must register at [https://myinvois.hasil.gov.my](https://myinvois.hasil.gov.my)  
> 2. Apply for intermediary authorization (allow 5–10 business days)  
> 3. Obtain digital certificate from approved CA (RM 500–2,000/year)  
> 4. Reschedule onboarding session once credentials are ready

---

### 1.3 Current System/Integration Information

**This is the critical section for integration assessment.**

#### System Discovery Questionnaire

Send this to the client to understand their current setup:

**1. What system(s) currently generate your invoices?**
- [ ] POS system (specify brand/version): ___________________________
- [ ] ERP system (specify: SQL Accounting, AutoCount, SAP, etc.): ___________________________
- [ ] E-commerce platform (Shopify, WooCommerce, custom): ___________________________
- [ ] Custom-built system (in-house development)
- [ ] Manual invoicing (Excel, Word, PDF tools)
- [ ] Other: ___________________________

**2. System technical details:**
- [ ] **Software name and version:** ___________________________
- [ ] **Is it cloud-hosted or on-premise?** ___________________________
- [ ] **Do you have access to the system's database?** (Yes/No)
- [ ] **Can the system export data?** (Yes/No)
  - If yes, what formats? (CSV, JSON, XML, API, database export, etc.)
- [ ] **Does the system have an API?** (Yes/No/Don't know)
  - If yes, is API documentation available?
- [ ] **Is the system actively maintained/supported by a vendor?** (Yes/No)
  - Vendor name: ___________________________
  - Support contact: ___________________________

**3. Invoice data access:**
- [ ] Can you export a sample invoice file? (**Request this immediately**)
- [ ] Can you provide database schema/table structure? (if applicable)
- [ ] Do you have technical contact at the software vendor? (if vendor system)

**4. Current invoicing workflow:**
- [ ] How many invoices are generated per day? ___________________________
- [ ] Are invoices generated in batches or real-time? ___________________________
- [ ] Who currently handles invoice data entry? ___________________________
- [ ] What triggers invoice creation? (sale completed, order shipped, manual entry, etc.)

**5. Technical environment (for on-premise systems):**
- [ ] **Operating system:** (Windows Server, Linux, etc.)
- [ ] **Database:** (SQL Server, MySQL, PostgreSQL, SQLite, MS Access, etc.)
- [ ] **Programming language/framework** (if custom-built): ___________________________
- [ ] **Network accessibility:** Can the system make outbound HTTPS requests? (Yes/No/Don't know)

**6. Integration preferences:**
- [ ] **Real-time submission** (invoice sent to e-invoice platform immediately after creation)
- [ ] **Batch submission** (invoices collected and submitted once/twice daily)
- [ ] **Manual upload** (export CSV daily, upload via dashboard)

---

### 1.4 Email & Notification Setup

Required for production alerts (certificate expiry, quota warnings, LHDN rejections):

- [ ] **SMTP server details** (if using company email server)
  - Host: ___________________________
  - Port: ___________________________
  - Username: ___________________________
  - Password: ___________________________ (will be encrypted)
- [ ] **OR: Email service preference** (SendGrid, AWS SES, Mailgun — we can provision)
- [ ] **Notification email addresses:**
  - Primary recipient: ___________________________
  - CC recipients (optional): ___________________________
  - Critical alerts only recipient (optional): ___________________________

**If client prefers we set up email service:**
- We'll provision SendGrid on their behalf (cost: RM 0–50/month depending on volume)
- Client approves this cost? (Yes/No)

---

### 1.5 Sample Data Request

**Critical for integration planning:**

Request these files from the client **before the onboarding session**:

- [ ] **3–5 sample invoices** (PDF or printed format)
- [ ] **Sample invoice data export** (if system can export: CSV, JSON, XML, database dump)
- [ ] **Screenshot of invoice in their current system** (if available)

This helps us:
1. Understand their data structure
2. Map fields to LHDN requirements
3. Identify missing data (buyer TIN, MSIC, classification codes)
4. Estimate integration complexity

---

## 2. Integration Assessment & Scoping

**Conduct this assessment during or after reviewing the pre-onboarding information.**

### 2.1 Integration Complexity Matrix

| System Type | Integration Method | Estimated Effort | Recommended Approach | Custom Work Required? |
|-------------|-------------------|------------------|----------------------|----------------------|
| **Modern POS with API** (StoreHub, Square, etc.) | REST API | Low (2–4 hours) | Pre-built adapter or API integration | Possibly — adapter customization |
| **SQL Accounting / AutoCount** | Database connector or CSV export | Medium (4–8 hours) | Database polling + adapter | Yes — custom SQL queries |
| **WooCommerce / Shopify** | Webhook + plugin | Low (2–4 hours) | Pre-built plugin | No — use standard plugin |
| **SAP / Oracle ERP** | API or middleware | High (16–40 hours) | Enterprise integration layer | Yes — significant custom work |
| **Custom .NET system** | Direct integration or database | Medium–High (8–24 hours) | Code-level integration | Yes — SteadyDevs specialty |
| **Legacy on-premise system (no API)** | Scheduled file export + batch upload | Medium (4–12 hours) | Automated file watcher + CSV parser | Yes — custom parser |
| **Manual Excel invoicing** | Dashboard CSV upload | None (0 hours) | User trains on CSV template + manual upload | No |

### 2.2 Integration Scoping Checklist

Use this during the scoping call to determine if custom integration work is required:

**Quick Assessment Questions:**

1. **Can the system export invoice data automatically?**
   - ✅ Yes → Likely low-medium complexity
   - ❌ No → Requires manual process or significant custom work

2. **Does the system have an API or database we can connect to?**
   - ✅ API available → Pre-built adapter possible
   - ✅ Database accessible → Medium complexity (custom SQL)
   - ❌ Neither → High complexity or manual process

3. **Is this a vendor-supported system or custom-built?**
   - Vendor system → Check if we have existing adapter
   - Custom-built → Requires code-level integration (billable work)

4. **Does the client have in-house technical staff?**
   - ✅ Yes (developer/IT team) → They can potentially integrate themselves with API documentation
   - ❌ No → We must handle the integration (billable work)

5. **What's the invoice volume?**
   - < 50/month → Manual CSV upload acceptable
   - 50–500/month → Automated batch integration recommended
   - > 500/month → Real-time integration required

**Integration Recommendation Template:**

> **Integration Assessment for [Client Name]**
> 
> **Current System:** [System name, version]  
> **Integration Complexity:** [Low / Medium / High]  
> **Recommended Approach:** [API / Database connector / File export / Manual]  
> **Estimated Integration Hours:** [X–Y hours]  
> **Custom Development Required:** [Yes/No]  
> **Estimated Cost:** [See section 5 for pricing]
>
> **Next Steps:**
> - [ ] Client approves integration approach
> - [ ] Client provides sample data for validation
> - [ ] Integration work scheduled (if custom work required)
> - [ ] Target go-live date: [Date]

---

## 3. Onboarding Session Checklist

**Session Duration:** 60–90 minutes  
**Required Attendees:** 
- Client: Primary contact + technical/IT staff (if available) + accounting/finance lead
- SteadyDevs: Onboarding lead + technical support (for integration questions)

### Phase 1: Account Setup (15 minutes)

- [ ] **Welcome & agenda overview**
- [ ] **Plan tier confirmation** (Free, Starter, Business, Growth, Premium)
- [ ] **Account creation**
  - [ ] Primary admin user registered
  - [ ] Email verified
  - [ ] Password strength confirmed
- [ ] **Company profile completion** (Business name, BRN, TIN, address, MSIC)
- [ ] **Tenant created** (if multi-entity: repeat for each entity)

---

### Phase 2: LHDN Credentials Setup (20 minutes)

**Critical:** This is the highest-risk part of onboarding. Take time to validate each step.

- [ ] **Navigate to Settings → LHDN Configuration**
- [ ] **Enter MyInvois credentials:**
  - [ ] Client ID (copy-paste to avoid typos)
  - [ ] Client Secret (masked after entry)
  - [ ] TIN matches company TIN (validate format: C1234567890)
- [ ] **Upload digital certificate:**
  - [ ] File format validated (.pem or .pfx)
  - [ ] Certificate expiry date checked (must be > 60 days)
  - [ ] Certificate TIN matches company TIN
  - [ ] Password entered (if .pfx)
- [ ] **Test LHDN connection:**
  - [ ] Click "Test Connection" button
  - [ ] OAuth2 token successfully retrieved
  - [ ] Certificate signature test passed
  - [ ] ✅ **Green checkmark confirms readiness**

**If test fails:**
- Check error message (display in plain English)
- Common issues:
  - Wrong Client ID/Secret → Re-enter credentials
  - Certificate TIN mismatch → Client must obtain correct certificate
  - Certificate expired → Client must renew certificate
  - LHDN API unreachable → Check client internet/firewall, retry in 5 min
- **Do not proceed until test passes**

---

### Phase 3: Environment Configuration (10 minutes)

- [ ] **Sandbox vs Production toggle:**
  - [ ] Explain: Sandbox = testing mode, no real LHDN submissions
  - [ ] Production = live submissions to LHDN (only enable after testing)
  - [ ] **Start in Sandbox mode** (recommended for first 1–2 weeks)
- [ ] **Email alert configuration:**
  - [ ] SMTP settings entered (if client-provided)
  - [ ] OR: SendGrid provisioned (if SteadyDevs-managed)
  - [ ] Test email sent successfully
  - [ ] Notification preferences set (certificate expiry, quota warnings, rejections)
- [ ] **Quota & billing:**
  - [ ] Current plan invoice limit confirmed
  - [ ] Overage rate acknowledged (RM 0.30–0.80 per extra invoice)
  - [ ] Alert thresholds set (80%, 95% of monthly limit)

---

### Phase 4: Product Master Setup (15 minutes)

**Purpose:** Pre-populate the product catalogue so Tier 3 validation can auto-enrich invoices.

- [ ] **Navigate to Product Master**
- [ ] **Explain purpose:** Tax type, tax rate, classification codes auto-filled per product
- [ ] **Bulk import option:**
  - [ ] If client has product list in CSV/Excel → Template provided
  - [ ] Client uploads → System validates
- [ ] **OR: Manual entry demonstration:**
  - [ ] Add 2–3 sample products together
  - [ ] Show required fields: Item code, description, tax type, tax rate, classification code
  - [ ] Explain MSIC classification codes (link to reference doc)
- [ ] **Action item:** Client completes product master setup within 3 days

---

### Phase 5: Integration Setup (20 minutes)

**This section varies based on integration complexity.**

#### Option A: Manual CSV Upload (No integration work)

- [ ] **Navigate to Invoices → Import**
- [ ] **Download CSV template**
- [ ] **Review required fields** (invoice_number, date, buyer_tin, buyer_name, items[], amounts)
- [ ] **Demo upload:** Use sample invoice data provided by client
- [ ] **Validation walkthrough:** Show Tier 1, Tier 2, Tier 3 checks
- [ ] **Training:** Client practices uploading 1 invoice

#### Option B: API Integration (Client handles or custom work)

- [ ] **Navigate to Settings → API Keys**
- [ ] **Generate API key** (starts with `ei_`)
- [ ] **Copy API documentation URL** (provide link)
- [ ] **Review authentication:** API key in `X-API-Key` header
- [ ] **Test endpoint:** `POST /api/v1/adapter/import`
- [ ] **Explain webhook setup** (for status callbacks)
- [ ] **Action item:** 
  - If client has dev team → They implement integration
  - If custom work required → Schedule integration work separately

#### Option C: Pre-Built Adapter (If available)

- [ ] **Navigate to Integrations → Adapter Registry**
- [ ] **Search for client's system** (e.g., "WooCommerce", "SQL Accounting")
- [ ] **Install approved adapter**
- [ ] **Configure adapter settings** (connection string, credentials, polling interval)
- [ ] **Test adapter:** Trigger sample invoice pull
- [ ] **Verify invoice appears in dashboard**

---

### Phase 6: Testing & Validation (15 minutes)

**Objective:** Submit 1 test invoice end-to-end in sandbox mode.

- [ ] **Submit test invoice** (via CSV upload, API, or adapter)
- [ ] **Watch submission flow:**
  - [ ] Invoice appears in "Pending" (if Tier 2 soft-reject)
  - [ ] OR: Invoice moves to "Submitted" (if all tiers pass)
  - [ ] Background job picks up invoice (show Jobs page)
  - [ ] LHDN API called (sandbox mode)
  - [ ] Status updates to "Approved" (in sandbox, auto-approved)
  - [ ] Webhook fires (if configured)
- [ ] **Review invoice detail page:** UUID, QR code, status history
- [ ] **Explain status polling:** Every 5 minutes from MyInvois
- [ ] **Show rejection handling:** Demo what happens if invoice rejected (use bad test data)

---

### Phase 7: User Management (5 minutes)

**For Business, Growth, Premium plans only (multi-user):**

- [ ] **Navigate to Settings → Users**
- [ ] **Explain roles:**
  - TENANT_ADMIN: Full access, can invite users
  - TENANT_USER: Submit invoices, view dashboard
  - TENANT_VIEWER: Read-only access
- [ ] **Invite team members:**
  - [ ] Enter email addresses
  - [ ] Assign roles
  - [ ] Invite links sent (48-hour expiry)
- [ ] **Action item:** Client invites accounting/finance team

---

### Phase 8: Go-Live Planning (5 minutes)

- [ ] **Review checklist:**
  - [ ] ✅ LHDN credentials tested
  - [ ] ✅ Product master populated
  - [ ] ✅ Integration method decided
  - [ ] ✅ Test invoice submitted successfully
  - [ ] ✅ Email alerts configured
- [ ] **Set go-live date:**
  - [ ] Sandbox testing period: [1–2 weeks recommended]
  - [ ] Switch to production mode: [Target date]
  - [ ] First real submission: [Target date]
- [ ] **Confirm support channel:**
  - [ ] Email: support@steadydevs.com
  - [ ] Response time: 2BD (Business plan), 1BD (Growth), 4 hours (Premium)
  - [ ] Emergency contact: [If Premium plan]

---

### Phase 9: Q&A & Next Steps (10 minutes)

- [ ] **Answer client questions**
- [ ] **Provide resources:**
  - [ ] Link to documentation portal
  - [ ] API reference (if using API)
  - [ ] LHDN error code reference guide
  - [ ] Contact details for support
- [ ] **Schedule follow-up:** (if integration work required)
  - [ ] Integration kickoff call: [Date]
  - [ ] Integration completion target: [Date]
  - [ ] Go-live readiness review: [Date]
- [ ] **Send onboarding summary email** (action items, links, contacts)

---

## 4. Post-Onboarding Deliverables

**Within 24 hours of onboarding session, send the client:**

- [ ] **Onboarding session summary**
  - Account details (masked credentials)
  - Configuration settings applied
  - Action items with owners and deadlines
- [ ] **Access credentials** (if applicable)
  - Dashboard URL
  - Admin username
  - API key (if generated)
- [ ] **Documentation links**
  - Platform user guide
  - API documentation (if using API)
  - CSV import template + field reference
  - LHDN error code troubleshooting guide
- [ ] **Integration SOW** (if custom work required — see section 5)
- [ ] **Support contact card**
  - Email: support@steadydevs.com
  - Response SLA based on plan tier
  - Emergency escalation (Premium only)

**Action items tracking:**

Create a simple tracking sheet:

| Action Item | Owner | Deadline | Status |
|-------------|-------|----------|--------|
| Complete product master setup | Client | [Date] | 🟡 In Progress |
| Provide database schema for integration | Client | [Date] | 🔴 Pending |
| Develop custom adapter | SteadyDevs | [Date] | 🔴 Not Started |
| Test 10 invoices in sandbox | Client | [Date] | 🔴 Pending |
| Switch to production mode | Both | [Date] | 🔴 Pending |

---

## 5. Integration Work — Pricing Guidelines

### 5.1 When to Charge for Integration Work

**Included in subscription (no extra charge):**

✅ Dashboard training and onboarding session (all plans)  
✅ CSV template guidance and sample data validation (all plans)  
✅ API documentation and example code (Starter and above)  
✅ Pre-built adapter installation and configuration (if adapter exists)  
✅ Email/webhook configuration (Business and above)  
✅ Basic troubleshooting and support (as per plan SLA)

**Billable custom integration work:**

💰 **Custom adapter development** (system-specific connector)  
💰 **Database integration** (direct SQL queries, stored procedures)  
💰 **Legacy system integration** (file watchers, scheduled batch jobs)  
💰 **Enterprise middleware** (SAP, Oracle ERP integration layers)  
💰 **On-premise system modifications** (code changes to client's existing system)  
💰 **Custom data transformation** (complex field mapping, business logic)  
💰 **Ongoing integration maintenance** (beyond standard support)

---

### 5.2 Integration Pricing Structure

**Pricing Model:** Fixed-price project or hourly billing (client's choice)

| Integration Complexity | Estimated Hours | Fixed Price Range | Hourly Rate |
|------------------------|-----------------|-------------------|-------------|
| **Low Complexity**<br>Pre-built adapter customization, simple CSV automation, basic API integration | 2–4 hours | RM 800 – RM 1,500 | RM 400/hour |
| **Medium Complexity**<br>Database connector, scheduled batch jobs, custom field mapping, webhook implementation | 4–12 hours | RM 1,500 – RM 4,500 | RM 400/hour |
| **High Complexity**<br>Legacy system integration, enterprise ERP connectors, real-time sync, multi-system orchestration | 12–40 hours | RM 4,500 – RM 15,000 | RM 400/hour |
| **Ongoing Maintenance**<br>Monthly retainer for integration monitoring, updates, troubleshooting | N/A | RM 500 – RM 2,000/month | Based on hours used |

**Included in fixed price:**
- Initial scoping and requirements gathering (1 hour)
- Development and testing
- Deployment to client's production environment
- 1-week post-deployment support
- Basic documentation

**Not included (additional charges):**
- Changes to requirements after development starts (charged hourly)
- Training beyond onboarding session (RM 400/hour)
- On-site work (add travel costs + RM 500/day on-site premium)
- Ongoing maintenance beyond 1-week warranty period

---

### 5.3 Integration SOW Template

Use this template when quoting custom integration work:

---

**STATEMENT OF WORK — INTEGRATION SERVICES**

**Project:** E-Invoice Platform Integration for [Client Name]  
**Date:** [Date]  
**Valid Until:** [30 days from date]

**1. Scope of Work**

We will develop a custom integration between [Client's System Name/Version] and the SteadyDevs E-Invoice Platform to enable automated invoice submission to LHDN MyInvois.

**Deliverables:**

- [ ] Custom adapter/connector for [System Name]
- [ ] Automated data extraction from [database/API/file system]
- [ ] Field mapping: [List critical mappings, e.g., CustomerID → buyer_tin]
- [ ] Validation logic: [Any custom validation rules]
- [ ] Scheduling: [Real-time / Hourly / Daily batch at XX:XX]
- [ ] Error handling: [Retry logic, failure notifications]
- [ ] Testing: [10 test invoices submitted and validated]
- [ ] Documentation: [Integration setup guide, troubleshooting]

**Out of Scope:**

- Modifications to [Client's System Name] source code (unless specified)
- Training for client's IT staff beyond handover session (1 hour included)
- Ongoing maintenance after 1-week warranty period

**2. Technical Approach**

[Describe the integration method: API calls, database polling, file watcher, etc.]

**3. Assumptions**

- Client provides database schema / API documentation within 3 business days
- Client provides test environment access for development
- Client's system can [export data / allow database connections / make API calls]
- Sample invoice data provided for testing (minimum 10 invoices)
- Client's IT staff available for clarifications within 1 business day

**4. Timeline**

| Milestone | Deliverable | Target Date |
|-----------|-------------|-------------|
| Kick-off & requirements validation | Requirements doc signed off | [Date] |
| Development complete | Adapter code ready for testing | [Date] |
| Testing in sandbox | 10 test invoices processed | [Date] |
| Production deployment | Live integration activated | [Date] |
| Handover & documentation | Client team trained, docs delivered | [Date] |

**5. Investment**

| Item | Amount |
|------|--------|
| Integration development (fixed price) | RM [Amount] |
| OR: Hourly billing ([X] hours estimated) | RM [Rate]/hour |
| Deployment & handover (included) | Included |
| 1-week post-deployment support (included) | Included |
| **Total Investment** | **RM [Total]** |

**Payment Terms:** 50% upfront, 50% upon successful production deployment

**6. Approval**

Client Name: _____________________________  
Signature: _____________________________  
Date: _____________________________

SteadyDevs Representative: _____________________________  
Signature: _____________________________  
Date: _____________________________

---

### 5.4 Integration Kickoff Checklist

**Before starting development:**

- [ ] SOW signed by client
- [ ] 50% deposit received
- [ ] Client provided sample data (minimum 10 invoices)
- [ ] Client provided system access (database credentials, API keys, test environment)
- [ ] Client provided technical contact for clarifications
- [ ] Requirements document reviewed and approved
- [ ] Timeline agreed with client
- [ ] Development environment set up
- [ ] Communication channel established (email, Slack, Teams, etc.)

---

## 6. Common Onboarding Issues & Solutions

### Issue 1: Client doesn't have LHDN credentials yet

**Solution:**  
- Pause onboarding
- Provide LHDN registration guide (prepare a PDF with screenshots)
- Offer to guide them through LHDN portal setup (billable consulting: 1 hour)
- Reschedule onboarding session for 2–3 weeks later (LHDN approval time)

---

### Issue 2: Certificate TIN mismatch

**Problem:** Certificate was issued for a different TIN (common with company name changes or wrong certificate ordered)

**Solution:**
- Certificate must be re-issued by the Certificate Authority
- This is client's cost (RM 500–2,000)
- Cannot proceed with onboarding until correct certificate obtained
- Offer to review certificate before client pays CA (send certificate file for validation)

---

### Issue 3: Client has no idea how to access invoice data from their system

**Solution:**
- Escalate to vendor support (if vendor system)
- Offer integration assessment service (RM 1,500 fixed):
  - 2-hour discovery session
  - System analysis and data extraction research
  - Written recommendation report with 3 integration options
  - Cost estimate for each option
- If vendor unresponsive → Recommend switching to a modern system (opportunity for SteadyDevs to build replacement)

---

### Issue 4: Invoice volume is 1,000+/month but client wants to use CSV upload

**Problem:** Manual process won't scale, client will miss deadlines

**Solution:**
- Explain the risk: 1,000 invoices = ~33 per working day = 4 per hour
- Show the math: 5 minutes per CSV upload = 20 working hours/day (impossible)
- **Strong recommendation:** Automated integration is mandatory at this volume
- Offer integration services (see section 5)
- If client refuses → Have them sign a waiver acknowledging the risk

---

### Issue 5: Client wants real-time integration but system is behind firewall

**Problem:** Client's on-premise system cannot be reached from cloud

**Solution:**
- **Option A:** Outbound API calls (client's system pushes to e-invoice platform)
  - Client's system makes HTTPS POST to our API (firewall allows outbound)
  - Client's IT implements the API calls (provide API docs)
- **Option B:** Scheduled file export
  - Client's system exports CSV to shared folder (Google Drive, Dropbox, SFTP)
  - Our platform polls the folder every hour, auto-imports files
  - We develop the polling service (billable work)
- **Option C:** VPN tunnel (enterprise only)
  - Requires VPN setup between client's network and our infrastructure
  - High complexity, high cost (RM 8,000–15,000)
  - Only for Premium/Custom plans with >5,000 invoices/month

---

## 7. Success Metrics

Track these metrics to measure onboarding quality:

| Metric | Target | How to Track |
|--------|--------|--------------|
| **Time to first test invoice** | < 60 minutes from start of session | Onboarding session notes |
| **LHDN credential test pass rate** | > 95% | Dashboard analytics |
| **Sandbox to production conversion** | > 80% within 30 days | Account status tracking |
| **Client satisfaction (post-onboarding survey)** | > 4.5/5 | Survey sent 1 week after onboarding |
| **Integration completion (if custom work)** | On time, on budget | Project tracking |
| **Support tickets within first 30 days** | < 3 per client | Support ticket system |

---

## 8. Onboarding Session Recording & Notes

**Best practices:**

- [ ] Record the session (with client's permission) for internal training
- [ ] Take detailed notes in shared doc (Google Doc, Notion)
- [ ] Screenshot critical configurations (masked credentials)
- [ ] Document any unique client requirements for future reference
- [ ] Add client to CRM with onboarding date, plan tier, integration status

---

## Appendix: Quick Reference

### Pre-Onboarding Email Template

```
Subject: EInvoice Platform Onboarding — Information Required

Hi [Client Name],

Thank you for choosing SteadyDevs E-Invoice Platform! 

We've scheduled your technical onboarding session for:
📅 [Date] at [Time]
⏱️ Duration: 60–90 minutes

To make the session as productive as possible, please prepare the following:

**1. LHDN MyInvois Credentials (critical)**
- MyInvois Client ID and Client Secret
- Digital certificate file (.pem or .pfx)
- Certificate password (if applicable)

If you don't have these yet, please let us know immediately so we can guide you through the LHDN registration process.

**2. Company Information**
- Business Registration Number (BRN)
- Taxpayer Identification Number (TIN)
- MSIC Code

**3. Current System Information**
Please complete this short questionnaire: [Link to Google Form with section 1.3 questions]

**4. Sample Data**
Please provide 3–5 sample invoices (PDF or CSV export from your current system).

Please submit all information by [Date, 3 days before session].

If you have any questions before the session, feel free to reply to this email.

Looking forward to getting you set up!

Best regards,
[Your Name]
SteadyDevs Solutions
support@steadydevs.com
```

---

**End of Document**

---

**Document Control:**

- **Version:** 1.0
- **Created:** May 20, 2026
- **Next Review:** August 20, 2026 (quarterly review)
- **Owner:** SteadyDevs Operations Team
- **Feedback:** Send suggestions to operations@steadydevs.com
