# E-Invoice Platform
## Pre-Onboarding Client Questionnaire

**Document Type:** Client-Facing  
**Send to Client:** 3 business days before onboarding session  
**Version:** 1.0  
**Date:** May 20, 2026

---

## Purpose

This questionnaire helps us prepare for your technical onboarding session. Please complete all sections and return to us at least **3 business days before** your scheduled onboarding.

**Scheduled Onboarding Session:**
- **Date:** ___________________________
- **Time:** ___________________________
- **Duration:** 60–90 minutes
- **Platform:** Google Meet (link will be sent separately)

---

## Section 1: Business Information

### 1.1 Company Details

| Field | Your Information |
|-------|------------------|
| **Company Legal Name** (as registered with SSM) | |
| **Business Registration Number (BRN)** | |
| **Taxpayer Identification Number (TIN)** | |
| **Registered Business Address** | |
| **City** | |
| **State** | |
| **Postcode** | |
| **MSIC Code** (Malaysia Standard Industrial Classification 2008) | |

### 1.2 Contact Information

| Field | Your Information |
|-------|------------------|
| **Primary Contact Name** | |
| **Primary Contact Email** | |
| **Primary Contact Phone** | |
| **Accounting/Finance Contact** (if different) | |
| **Technical/IT Contact** (if available) | |

### 1.3 Invoice Volume

| Field | Your Information |
|-------|------------------|
| **Expected monthly invoice volume** | |
| **Current average invoices per day** | |
| **Peak season volume** (if applicable) | |
| **Preferred plan tier** | ☐ Free ☐ Starter ☐ Business ☐ Growth ☐ Premium |

---

## Section 2: LHDN MyInvois Credentials

### 2.1 Credential Status Check

**Do you currently have these credentials from LHDN?**

- [ ] **MyInvois Client ID** (obtained from LHDN portal)
- [ ] **MyInvois Client Secret** (obtained from LHDN portal)
- [ ] **Intermediary authorization** confirmed by LHDN
- [ ] **Digital certificate file** (X.509 format, .pem or .pfx)

**If you checked all boxes above, please proceed to Section 2.2.**

**If you are missing any credentials:**

> ⚠️ **Important:** You must obtain LHDN credentials before we can proceed with onboarding. This process typically takes 5–10 business days.
> 
> **Next Steps:**
> 1. Register at [https://myinvois.hasil.gov.my](https://myinvois.hasil.gov.my)
> 2. Apply for intermediary authorization
> 3. Obtain digital certificate from approved Certificate Authority
> 4. Contact us to reschedule your onboarding session
>
> We can provide guidance through this process if needed (billable consulting: RM 1,500 for 2-hour guided setup session).

### 2.2 Certificate Details

**If you have your digital certificate, please provide:**

| Field | Your Information |
|-------|------------------|
| **Certificate file format** | ☐ .pem ☐ .pfx |
| **Certificate issuing authority** (CA name) | |
| **Certificate issue date** | |
| **Certificate expiry date** | |
| **Certificate TIN** (must match company TIN) | |
| **Certificate password protected?** | ☐ Yes ☐ No |

**Action Required:**
- [ ] Attach your certificate file to this email (we'll validate it before the session)
- [ ] Have your certificate password ready (if .pfx format)

---

## Section 3: Current Invoice System

### 3.1 System Identification

**What system(s) currently generate your invoices?** (Check all that apply)

- [ ] **POS System**
  - Brand/Name: ___________________________
  - Version: ___________________________
- [ ] **ERP System** 
  - System name: ☐ SQL Accounting ☐ AutoCount ☐ SAP ☐ Oracle ☐ Other: _______________
  - Version: ___________________________
- [ ] **E-commerce Platform**
  - Platform: ☐ Shopify ☐ WooCommerce ☐ Custom ☐ Other: _______________
- [ ] **Custom-built system** (developed in-house or by vendor)
  - Vendor name: ___________________________
- [ ] **Manual invoicing** (Excel, Word, PDF tools)
- [ ] **Other:** ___________________________

### 3.2 System Technical Details

| Question | Your Answer |
|----------|-------------|
| **Is the system cloud-hosted or on-premise?** | ☐ Cloud ☐ On-premise ☐ Hybrid |
| **Do you have access to the system's database?** | ☐ Yes ☐ No ☐ Don't know |
| **Can the system export invoice data?** | ☐ Yes ☐ No ☐ Don't know |
| **If yes, what export formats are available?** | ☐ CSV ☐ Excel ☐ JSON ☐ XML ☐ PDF only ☐ Other: ______ |
| **Does the system have an API?** | ☐ Yes ☐ No ☐ Don't know |
| **If API exists, is documentation available?** | ☐ Yes ☐ No ☐ Don't know |
| **Is the system actively maintained by a vendor?** | ☐ Yes ☐ No (custom/legacy) |
| **Vendor support contact** (if vendor system) | |

### 3.3 Technical Environment (for on-premise systems)

**If your system is on-premise, please provide:**

| Question | Your Answer |
|----------|-------------|
| **Operating system** | ☐ Windows Server ☐ Linux ☐ Other: ___________ |
| **Database system** | ☐ SQL Server ☐ MySQL ☐ PostgreSQL ☐ MS Access ☐ Other: ___ |
| **Programming language/framework** (if custom) | |
| **Can the system make outbound HTTPS requests?** | ☐ Yes ☐ No ☐ Don't know |
| **Is there a firewall restriction?** | ☐ Yes ☐ No ☐ Don't know |

### 3.4 Current Invoicing Workflow

| Question | Your Answer |
|----------|-------------|
| **How many invoices are generated per day?** | |
| **Are invoices created in real-time or batches?** | ☐ Real-time ☐ Batch ☐ Mixed |
| **Who currently handles invoice data entry?** | |
| **What triggers invoice creation?** | ☐ Sale completed ☐ Order shipped ☐ Manual entry ☐ Other: _____ |
| **Do you have in-house IT/developer staff?** | ☐ Yes ☐ No |

### 3.5 Integration Preference

**How would you prefer to integrate with the e-invoice platform?**

- [ ] **Real-time submission** (invoice sent immediately after creation)
- [ ] **Scheduled batch** (invoices collected and submitted 1-2x daily)
- [ ] **Manual upload** (export CSV daily, upload via dashboard)
- [ ] **Not sure yet** (we'll recommend during onboarding)

---

## Section 4: Sample Data Request

**Critical for integration planning:**

Please attach the following to this email:

- [ ] **3–5 sample invoices** (PDF format or printed screenshots)
- [ ] **Sample invoice data export** (if your system can export: CSV, JSON, XML)
- [ ] **Screenshot of invoice screen** in your current system (if available)

**Why we need this:**
- Understand your data structure
- Map fields to LHDN requirements  
- Identify missing data (buyer TIN, MSIC codes, classification codes)
- Estimate integration complexity accurately

---

## Section 5: Email & Notification Setup

**For production alerts (certificate expiry, quota warnings, LHDN rejections):**

### Option A: Use Your Company SMTP Server

| Field | Your Information |
|-------|------------------|
| **SMTP Host** | |
| **SMTP Port** | |
| **SMTP Username** | |
| **SMTP Password** | (will be encrypted at rest) |
| **Sender email address** | |

### Option B: We Provision Email Service for You

- [ ] **Yes, please set up SendGrid on our behalf**
  - Cost: RM 0–50/month (billed separately based on email volume)
  - We handle all configuration

**Notification Recipients:**

| Field | Email Address |
|-------|---------------|
| **Primary recipient** (receives all alerts) | |
| **CC recipients** (optional) | |
| **Critical alerts only** (optional) | |

---

## Section 6: Multi-Entity Setup (Premium Plan Only)

**If you need to manage multiple company TINs under one account:**

| Company Name | TIN | Relationship |
|--------------|-----|--------------|
| | | ☐ Subsidiary ☐ Client ☐ Other |
| | | ☐ Subsidiary ☐ Client ☐ Other |
| | | ☐ Subsidiary ☐ Client ☐ Other |

---

## Section 7: Additional Information

**Is there anything else we should know before your onboarding session?**

(Technical constraints, urgent deadlines, specific requirements, etc.)

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

---

## Submission Instructions

**Please return this completed form by:** ___________________________

**Send to:** support@steadydevs.com  
**Subject line:** Onboarding Questionnaire - [Your Company Name]

**Attachments to include:**
1. ✅ This completed questionnaire
2. ✅ Digital certificate file (for validation)
3. ✅ 3-5 sample invoices (PDF or screenshots)
4. ✅ Sample invoice data export (if available)

---

## What Happens Next

**After we receive your questionnaire:**

1. **Within 24 hours:** We'll review your submission and confirm receipt
2. **2 days before session:** We'll send:
   - Meeting link (Google Meet)
   - Integration complexity assessment
   - Any clarification questions
3. **On session day:** We'll walk through the platform setup together (60-90 min)
4. **After session:** You'll receive access credentials and documentation

---

## Questions?

If you have any questions while completing this form, please contact us:

**Email:** support@steadydevs.com  
**Phone:** +60 10-228 4272  
**Business Hours:** Monday–Friday, 9:00 AM – 6:00 PM MYT

---

**SteadyDevs Solutions**  
SSM: 202603092285  
[https://steadydevs.com](https://steadydevs.com)

*This document is confidential and intended solely for the use of the named recipient(s).*
