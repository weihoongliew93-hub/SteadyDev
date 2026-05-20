# E-Invoice Platform
## Email Templates — Customer Communications

**Document Type:** Ready-to-Use Templates  
**Version:** 1.0  
**Date:** May 20, 2026

---

## Template 1: Pre-Onboarding — Questionnaire Request

**Subject:** E-Invoice Platform Onboarding — Information Required

**To:** [Client Email]  
**From:** support@steadydevs.com  
**CC:** [Sales rep if applicable]

---

Hi [Client Name],

Thank you for choosing SteadyDevs E-Invoice Platform! We're excited to help automate your LHDN MyInvois compliance.

We've scheduled your technical onboarding session for:

**📅 Date:** [Date]  
**🕐 Time:** [Time] (Malaysian Time)  
**⏱️ Duration:** 60–90 minutes  
**💻 Platform:** [Microsoft Teams / Zoom — link will be sent separately]

---

### What You Need to Prepare

To make the session as productive as possible, please complete the attached **Pre-Onboarding Questionnaire** and return it to us by **[Date, 3 days before session]**.

The questionnaire covers:
- ✅ Company and LHDN credential information
- ✅ Details about your current invoice system
- ✅ Integration preferences and technical requirements

**📎 Attached:**
1. Pre-Onboarding Questionnaire (PDF form)
2. Sample invoice template (for your reference)

---

### Critical Requirement: LHDN Credentials

**⚠️ Important:** You must have the following from LHDN before we can proceed:

- MyInvois Client ID
- MyInvois Client Secret
- Digital certificate (X.509 format, .pem or .pfx)
- Intermediary authorization confirmed

**Don't have these yet?** This process typically takes 5-10 business days. We can guide you through LHDN registration if needed (billable consulting: 2-hour guided session available).

Please let us know immediately if you need assistance with LHDN registration so we can reschedule your onboarding accordingly.

---

### Sample Data Request

Please also provide **3-5 sample invoices** from your current system (PDF or CSV format). This helps us:
- Understand your data structure
- Identify any missing LHDN-required fields
- Estimate integration complexity accurately

---

### Questions?

If you have any questions while completing the questionnaire, feel free to reply to this email or call us at [Phone Number].

**Business Hours:** Monday–Friday, 9:00 AM – 6:00 PM MYT

Looking forward to your onboarding session!

Best regards,  
[Your Name]  
Customer Success Team  
**SteadyDevs Solutions**

📧 support@steadydevs.com  
🌐 https://steadydevs.com  
SSM: 202603092285

---

## Template 2: Meeting Reminder — 48 Hours Before

**Subject:** Reminder: E-Invoice Platform Onboarding Tomorrow — [Date] at [Time]

**To:** [Client Email]  
**CC:** [Client's team members if provided]

---

Hi [Client Name],

This is a friendly reminder that your **E-Invoice Platform onboarding session** is scheduled for:

**📅 Tomorrow, [Date]**  
**🕐 [Time] Malaysian Time**  
**⏱️ Duration: 60–90 minutes**

**💻 Join Link:** [Microsoft Teams / Zoom link]

---

### What We Received

✅ Pre-onboarding questionnaire (received [Date])  
✅ Sample invoice data  
✅ [Add any other items received]

**Still missing:**
- [ ] [List any outstanding items, or write "All set!" if complete]

---

### Who Should Attend

Please have these team members join if available:
- Primary contact (you)
- Technical/IT staff (for integration setup)
- Accounting/finance lead (for workflow validation)

---

### Agenda Tomorrow

1. Account setup & company profile (15 min)
2. LHDN credentials configuration & testing (20 min)
3. Email alerts & environment setup (10 min)
4. Product master setup (15 min)
5. Integration walkthrough (20 min)
6. Testing: Submit your first test invoice (15 min)
7. Q&A & next steps (10 min)

---

### Integration Assessment

Based on your questionnaire, we've assessed your integration:

**System:** [Client's system name]  
**Complexity:** [Low / Medium / High]  
**Recommended approach:** [API / Database / File batch / Manual CSV]  
**Estimated effort:** [X-Y hours]  
**Custom development required:** [Yes / No]

[If custom work required:]  
We'll discuss the integration proposal during the session. Statement of Work (SOW) will be provided for your review.

---

### What to Have Ready

- [ ] LHDN MyInvois credentials (Client ID, Secret, TIN)
- [ ] Digital certificate file (.pem or .pfx) + password
- [ ] Database credentials (if database integration)
- [ ] Questions about the platform or integration

---

### Can't Make It?

If you need to reschedule, please let us know at least 24 hours in advance. Reply to this email or call [Phone Number].

See you tomorrow!

Best regards,  
[Your Name]  
**SteadyDevs Solutions**

---

## Template 3: Post-Onboarding Summary

**Subject:** Onboarding Complete — [Client Name] E-Invoice Platform Access & Next Steps

**To:** [Client Email]  
**CC:** [Client's team members]  
**Attachments:** [CSV template, API docs, LHDN error reference, etc.]

---

Hi [Client Name],

Thank you for a productive onboarding session today! Your E-Invoice Platform account is now set up and ready for testing.

---

## Your Account Details

**Platform URL:** https://einvoice-platform.onrender.com  
**Login Email:** [Client's email]  
**Plan:** [Plan tier]  
**Account ID:** [Account ID]

[If API integration:]  
**API Key:** `ei_1234567890abcdef...` (keep this secure)  
**API Documentation:** https://docs.steadydevs.com/einvoice-api

---

## What We Configured Today

✅ Company profile completed  
✅ LHDN credentials tested successfully  
✅ Email alerts configured ([SMTP/SendGrid])  
✅ Product master setup started ([X] products added)  
✅ Integration method decided: [API / Database / File / Manual CSV]  
✅ Test invoice submitted and approved in sandbox

---

## Action Items with Deadlines

**Your action items:**

- [ ] **Complete product master** (add remaining products via CSV or dashboard)  
  **Deadline:** [Date, 1 week from onboarding]

- [ ] **Invite team members** (Settings → Users)  
  **Deadline:** [Date, 1 week from onboarding]

- [ ] **Submit 50-100 test invoices in sandbox mode**  
  **Deadline:** [Date, 2 weeks from onboarding]

[If custom integration:]
- [ ] **Provide database credentials / API access**  
  **Deadline:** [Date, 3 business days]

- [ ] **Review and sign Statement of Work (SOW)** (attached)  
  **Deadline:** [Date, 5 business days]

**Our action items:**

[If integration work:]
- [ ] **Integration development** (see SOW timeline)
- [ ] **Testing & deployment**
- [ ] **Handover session**

---

## Sandbox Testing Period

**Timeline:** Next 1-2 weeks  
**Goal:** Submit 50-100 test invoices to validate all scenarios

**What to test:**
- Normal invoices (various amounts, products)
- Credit notes
- High-value invoices (> RM 10,000 with buyer TIN)
- Zero-rated and exempt transactions
- Invoice corrections and resubmissions

**Switch to production:** [Target date, 2-4 weeks from today]

---

## Resources

**📎 Attached to this email:**
- CSV import template (if manual upload)
- API documentation (if API integration)
- LHDN error code reference guide
- Product master sample file
[If integration:]
- Statement of Work (SOW) for integration services

**🔗 Online resources:**
- Platform user guide: https://docs.steadydevs.com/einvoice
- Video tutorials: https://docs.steadydevs.com/videos
- FAQ: https://docs.steadydevs.com/faq
- LHDN MyInvois portal: https://myinvois.hasil.gov.my

---

## Support Contact

**Email:** support@steadydevs.com  
**Response SLA:** [2BD / 1BD / 4 hours] (based on your [Plan] plan)

**For urgent issues:**  
[Premium only:] Call/WhatsApp: [Premium support number]

---

## Next Meeting

[If integration work:]  
**Integration Kickoff:** [Date, 3-5 days from today]  
Agenda: Review SOW, provide access credentials, confirm timeline

**Go-Live Readiness Review:** [Date, 1-2 weeks before production]  
Agenda: Review test results, final Q&A, confirm production switch date

---

If you have any questions, don't hesitate to reach out. We're here to help!

Welcome aboard, and looking forward to seeing your first production submissions soon!

Best regards,  
[Your Name]  
**SteadyDevs Solutions**

---

## Template 4: Integration Proposal (Custom Work)

**Subject:** E-Invoice Integration Proposal — [Client System Name]

**To:** [Client Email]  
**Attachments:** Statement of Work (SOW), Architecture Diagram

---

Hi [Client Name],

Thank you for providing detailed information about your current system. I've completed the integration assessment and have good news — we can connect your **[System Name]** to the E-Invoice Platform.

---

## Integration Summary

**Current System:** [System name & version]  
**Integration Method:** [API / Database connector / File export / Other]  
**Complexity Level:** [Low / Medium / High]  
**Development Timeline:** [X] weeks from project kickoff  
**Target Go-Live:** [Date]

---

## What We'll Deliver

✅ **Custom adapter** that connects [System] to E-Invoice Platform  
✅ **Automated data extraction** ([Real-time / Hourly / Daily / frequency])  
✅ **Field mapping and validation logic**  
✅ **Error handling** with email notifications  
✅ **Testing** with your sample invoice data (20+ test cases)  
✅ **Deployment** to [production environment]  
✅ **1-week post-deployment support** (bug fixes included)  
✅ **Integration documentation** + handover session

---

## Technical Approach

**Data Flow:**

```
[Client System]
    ↓ [Extraction method]
[Integration Adapter]
    ↓ HTTPS POST
[E-Invoice Platform API]
    ↓ Three-tier validation
[Digital signature + LHDN submission]
```

**Integration Details:**
- Data Source: [Database / File export / API / Other]
- Frequency: [Real-time / Every 30 min / Hourly / Daily at XX:XX]
- Field Mappings: [List critical mappings, e.g., CustomerID → buyer_tin]
- Error Handling: [Retry logic, logging, email alerts]

[Optional: Attach architecture diagram]

---

## Investment

**Fixed Price:** RM [Amount]  
_OR_  
**Hourly Billing:** [X-Y] hours estimated @ RM 400/hour

**Included in price:**
- Initial scoping & requirements validation
- Development & testing
- Deployment to production
- 1-week post-deployment support
- Basic documentation

**Payment Terms:**  
50% deposit upon SOW signature, 50% upon successful production deployment

---

## Project Timeline

| Milestone | Target Date |
|-----------|-------------|
| Kickoff + requirements validation | [Date] |
| Development complete | [Date] |
| Client testing & feedback | [Date] |
| Production deployment | [Date] |
| Project complete | [Date] |

**Total Duration:** [X] weeks from kickoff

---

## Next Steps

**If you'd like to proceed:**

1. **Review the attached Statement of Work (SOW)** — detailed project scope, deliverables, and terms
2. **Sign and return the SOW** via email or DocuSign [link]
3. **We'll send the first invoice** (50% deposit) via Stripe payment link
4. **Schedule kickoff meeting** to start development

---

## Questions?

I'm happy to jump on a call to discuss the proposal, answer questions, or adjust the scope if needed.

**Book a call:** [Calendly link or suggest times]  
**Email:** [Your email]  
**Phone:** [Your phone]

Looking forward to working with you!

Best regards,  
[Your Name]  
Technical Solutions Lead  
**SteadyDevs Solutions**

---

## Template 5: Integration Kickoff (Custom Work)

**Subject:** Integration Kickoff — [Client Name] E-Invoice Integration Project

**To:** [Client Email]  
**CC:** [Client's technical contact, SteadyDevs developer]  
**Attachments:** Signed SOW, Project Tracker Link

---

Hi [Client Name],

Exciting news — your **E-Invoice integration project** is officially underway!

**Project Start Date:** Today, [Date]  
**Target Completion:** [Date, X weeks from now]  
**Developer Assigned:** [Developer name]

---

## Project Kickoff Details

**SOW Received:** ✅ Signed on [Date]  
**Deposit Received:** ✅ RM [Amount] paid [Date]  
**Kickoff Meeting:** [Date & time] — [Meeting link]

---

## What We Need from You (Urgent)

To keep the project on schedule, please provide these within **3 business days:**

**For Database Integration:**
- [ ] Database connection string
- [ ] Username & password (read-only access is sufficient)
- [ ] Database schema / table structure (if available)
- [ ] VPN credentials (if required)

**For API Integration:**
- [ ] API endpoint URLs
- [ ] Authentication credentials (API keys, OAuth tokens)
- [ ] API documentation
- [ ] Test environment access

**For File-Based Integration:**
- [ ] Sample export files (CSV / XML / JSON)
- [ ] Export schedule (when files are generated)
- [ ] Shared folder access (Google Drive / SFTP / Other)

**For All Integration Types:**
- [ ] 20+ sample invoices (various scenarios)
- [ ] Technical contact availability (1-2 hours/week for questions)

**Send to:** [Developer email] with CC to support@steadydevs.com

---

## Project Tracker

We've set up a shared project tracker so you can monitor progress in real-time:

**📊 Project Tracker:** [Link to Trello / Asana / Notion board]

You'll see:
- Current milestone status
- Upcoming tasks
- Any blockers or questions for your team
- Target dates

---

## Communication Plan

**Weekly Status Updates:** Every [Day] via email  
**Milestone Reviews:** [List key dates for demos/reviews]  
**Questions/Issues:** Email [Developer email], response within 1 business day  
**Urgent Escalation:** Email support@steadydevs.com with "[URGENT]" in subject

---

## Kickoff Meeting Agenda

**Date:** [Date]  
**Time:** [Time]  
**Duration:** 60 minutes  
**Attendees:** [Client team], [SteadyDevs developer], [Project manager]

**Agenda:**
1. Introductions & roles (5 min)
2. Review SOW scope & deliverables (10 min)
3. Technical architecture walkthrough (15 min)
4. Access credentials & environment setup (15 min)
5. Timeline confirmation & milestone dates (10 min)
6. Q&A (5 min)

**Join link:** [Meeting link]

---

## Next Milestones

| Milestone | Date | Owner |
|-----------|------|-------|
| Client provides access credentials | [Date] | Client |
| Development environment setup | [Date] | SteadyDevs |
| Alpha release (internal testing) | [Date] | SteadyDevs |
| Client testing begins | [Date] | Client |

---

Looking forward to kickoff! Let's build something great together.

Best regards,  
[Your Name]  
**SteadyDevs Solutions**

---

## Template 6: Integration Complete — Handover

**Subject:** Integration Complete — [Client Name] E-Invoice Integration Ready for Production

**To:** [Client Email]  
**CC:** [Client's team]  
**Attachments:** Integration Documentation, Configuration Guide, Final Invoice

---

Hi [Client Name],

Great news! Your **[System Name] E-Invoice integration** is complete and ready for production deployment.

---

## Project Summary

**Project Start:** [Date]  
**Project Complete:** [Date]  
**Total Duration:** [X] weeks

**Deliverables Completed:**
✅ Custom integration adapter developed  
✅ Field mapping implemented and tested  
✅ Error handling & logging configured  
✅ Tested with 20+ sample invoices (100% success rate)  
✅ Deployed to [production environment]  
✅ Documentation delivered  
✅ Handover session completed

---

## Integration Details

**Data Source:** [Database / File system / API]  
**Extraction Frequency:** [Real-time / Every 30 min / Hourly / Daily at XX:XX]  
**Deployment Location:** [Client's server / Cloud / Docker container]

**What happens automatically now:**
1. Adapter [polls database / monitors folder / receives webhook] every [frequency]
2. Extracts new/updated invoices
3. Transforms data to E-Invoice API format
4. Submits to LHDN via E-Invoice Platform
5. Updates source system with submission status (if configured)
6. Sends email notification on errors

---

## Next Steps — Production Go-Live

**Recommended Timeline:**

**Week 1 (This Week):**
- [ ] Review integration documentation (attached)
- [ ] Validate first 10-20 production invoices
- [ ] Monitor error logs daily

**Week 2:**
- [ ] Increase volume gradually
- [ ] SteadyDevs monitors for issues
- [ ] Any bugs fixed under warranty period

**Week 3+:**
- [ ] Full production volume
- [ ] Integration runs hands-free

---

## Monitoring & Logs

**Integration Status Dashboard:** [Link if applicable]  
**Log Files Location:** [Path to logs]  
**Error Notifications:** Sent to [Email addresses]

**How to check if integration is running:**
1. [Specific steps for client's setup]
2. [Example: Check Windows Service status]
3. [Example: View log file for recent activity]

---

## Support & Warranty

**Warranty Period:** 7 days from today ([Date] – [Date])

During warranty, we'll fix any bugs or issues at no charge. Please report any problems immediately to support@steadydevs.com.

**After Warranty:**

**Option 1:** Pay-per-incident support  
Rate: RM 400/hour, response in 2-5 business days

**Option 2:** Ongoing maintenance retainer  
- Basic: RM 500/month (1 hour included)
- Standard: RM 1,000/month (2.5 hours included)
- Premium: RM 2,000/month (5 hours included)

[If client hasn't chosen:] Let us know if you'd like to set up a retainer for peace of mind.

---

## Documentation

**📎 Attached:**
- Integration Architecture Diagram
- Configuration Guide
- Troubleshooting Procedures
- Field Mapping Reference
- [Code documentation (if applicable)]

---

## Final Invoice

**Total Project Cost:** RM [Total from SOW]  
**Paid to Date:** RM [Deposit amount]  
**Balance Due:** RM [Remaining 50%]

**Payment Due:** [Date, 14 days from today]

**Payment Link:** [Stripe link]  
_OR_  
**Bank Transfer:** [Bank details]

---

## Thank You!

It's been a pleasure working on this project. We're confident the integration will save your team countless hours of manual work and ensure 100% LHDN compliance.

If you have any questions or need any clarification, don't hesitate to reach out.

**What's next?** We'd love your feedback! A short survey will be sent in a few days.

Best regards,  
[Your Name]  
**SteadyDevs Solutions**

---

## Template 7: Monthly Usage & Quota Warning

**Subject:** E-Invoice Platform — You've Used [X]% of Your Monthly Invoice Quota

**To:** [Client Email]  
**Priority:** [Normal at 80%, High at 95%]

---

Hi [Client Name],

This is a friendly heads-up about your **E-Invoice Platform usage** this month.

---

## Current Usage

**Plan:** [Plan tier]  
**Invoice Quota:** [X] invoices/month  
**Used This Month:** [Y] invoices ([Z]% of quota)  
**Remaining:** [X - Y] invoices

**Billing Period:** [Start date] – [End date]  
**Days Remaining:** [X] days

---

[If 80% threshold:]
## What This Means

You're on track to stay within your plan limit. However, if your volume increases, you may hit the [X] invoice limit before month-end.

**Options:**

**Option 1:** Continue as-is  
If you exceed [X] invoices, overage charges apply:  
**Overage rate:** RM [X.XX] per invoice above the limit  
You won't be blocked — extra invoices will be billed at the start of next month.

**Option 2:** Upgrade your plan  
Upgrade to [Next plan tier] for [higher quota] invoices/month at RM [amount]/month.  
**Upgrade now:** [Dashboard link to billing page]

---

[If 95% threshold:]
## ⚠️ Action Recommended

You're very close to your monthly limit. Based on current usage, you'll likely exceed [X] invoices within the next [Y] days.

**What happens at 100%?**

✅ You **won't be blocked** — invoices will continue to be submitted  
💰 **Overage charges apply:** RM [X.XX] per invoice above [X]  
📧 Overage will be billed automatically at the start of next month

**We recommend upgrading to avoid overage fees:**

**[Next Plan Tier]:** [Higher quota] invoices/month for RM [amount]/month  
**Savings:** If you consistently exceed your current limit, upgrading is more cost-effective.

**Upgrade now:** [Dashboard link]

---

## Questions?

**View detailed usage:** [Dashboard link → Billing → Usage]  
**Contact us:** support@steadydevs.com or reply to this email

Best regards,  
**SteadyDevs E-Invoice Platform**

---

## Template 8: Certificate Expiry Warning

**Subject:** 🔐 URGENT: Your Digital Certificate Expires in [X] Days

**To:** [Client Email]  
**Priority:** High  
**CC:** [Client's technical contact]

---

Hi [Client Name],

**⚠️ Action Required:** Your LHDN MyInvois digital certificate will expire soon.

---

## Certificate Details

**Certificate Issuer:** [CA name]  
**Certificate TIN:** [TIN]  
**Expiry Date:** **[Date] — [X] days from now**

---

## What Happens If Certificate Expires

❌ **All invoice submissions will fail**  
❌ LHDN will reject submissions with "Invalid signature" error  
❌ Your compliance will be at risk

**⚠️ This will affect your ability to meet LHDN deadlines.**

---

## Action Required Immediately

**Step 1:** Renew your certificate with your Certificate Authority  
Cost: Typically RM 500–2,000/year  
Timeline: Allow 3-5 business days for issuance

**Step 2:** Upload new certificate to E-Invoice Platform  
1. Log in to [Dashboard URL]
2. Go to Settings → LHDN Configuration
3. Click "Update Certificate"
4. Upload new certificate file
5. Test connection

**Need Help?**

We can guide you through the renewal process. Reply to this email or call [Phone number].

---

[If 60 days:]
## You Have Time

This is an early warning (60 days before expiry). You have time to renew without disruption, but please don't delay — certificate renewals can take up to 2 weeks.

[If 30 days:]
## Take Action This Week

You have 30 days remaining. Please initiate the renewal process this week to ensure you receive the new certificate with time to test before expiry.

[If 7 days:]
## 🚨 URGENT — Renew Immediately

You have only 7 days remaining. **Start the renewal process today** to avoid service disruption.

[If 1 day:]
## 🚨 CRITICAL — Certificate Expires Tomorrow

**Your certificate expires tomorrow.** If you don't upload a renewed certificate by [Date], all invoice submissions will fail starting [Date + 1].

**Emergency support available:** Call [Phone number] immediately for assistance.

---

## Certificate Renewal Resources

**Approved Certificate Authorities in Malaysia:**
- [List 3-5 approved CAs with links]

**Renewal Process:**
1. Contact your CA (the one who issued your current certificate)
2. Request certificate renewal
3. Provide updated business documents (if required)
4. Pay renewal fee
5. Receive new certificate file (3-5 business days)
6. Upload to E-Invoice Platform

---

This is an automated reminder. If you've already renewed your certificate, please upload it to the platform to stop receiving these alerts.

Best regards,  
**SteadyDevs E-Invoice Platform**

---

**Document Control:**

- **Template Version:** 1.0
- **Last Updated:** May 20, 2026
- **Owner:** SteadyDevs Solutions
- **Next Review:** August 20, 2026

