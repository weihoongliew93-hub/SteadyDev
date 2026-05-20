# E-Invoice Platform
## Integration Services — Pricing & SOW Templates

**Document Type:** Sales & Contracts  
**Version:** 1.0  
**Date:** May 20, 2026

---

## Pricing Structure

### What's Included in Subscription (No Extra Charge)

**All plans receive:**
✅ Technical onboarding session (60-90 minutes)  
✅ Dashboard training and user guides  
✅ CSV template + import guidance  
✅ Email/webhook configuration support  
✅ Standard technical support (as per plan SLA)

**Starter plan and above receive:**
✅ API documentation and code samples  
✅ API key generation and management  
✅ Basic troubleshooting and debugging

**Business plan and above receive:**
✅ Pre-built adapter installation (if adapter exists for client's system)  
✅ Webhook endpoint setup and testing

---

### Billable Integration Services

**Custom integration work is charged separately when:**

💰 **Custom adapter development** — System-specific connector doesn't exist  
💰 **Database integration** — Direct SQL queries, stored procedures, table polling  
💰 **Legacy system integration** — File watchers, scheduled batch jobs, data transformation  
💰 **Enterprise middleware** — SAP, Oracle, Microsoft Dynamics connectors  
💰 **On-premise system modifications** — Changes to client's existing codebase  
💰 **Complex data mapping** — Custom business logic, conditional transformations  
💰 **Ongoing integration maintenance** — Beyond 1-week post-deployment warranty

---

## Standard Rates

| Service Type | Rate | Minimum |
|--------------|------|---------|
| **Development** (custom integrations) | RM 400/hour | 2 hours |
| **Technical Consulting** (discovery, assessment) | RM 400/hour | 1 hour |
| **Training** (beyond standard onboarding) | RM 400/hour | 1 hour |
| **On-site Work** | RM 400/hour + RM 500/day on-site premium | Half day |
| **Emergency Support** (non-Premium plans) | RM 600/hour | 1 hour |
| **Ongoing Maintenance Retainer** | RM 500–2,000/month | 1 month |

---

## Fixed-Price Integration Packages

### Package 1: Simple Integration (Low Complexity)

**Suitable for:**
- Pre-built adapter customization
- Simple CSV automation (scheduled export + import)
- Basic API integration (client implements, we support)

**What's included:**
- Initial scoping call (1 hour)
- Development and configuration (2-4 hours)
- Testing with 10 sample invoices
- Deployment to production
- 1-week post-deployment support
- Basic documentation

**Timeline:** 3–5 business days  
**Fixed Price:** **RM 800 – RM 1,500**

**Payment Terms:** 100% upfront (low risk, small project)

---

### Package 2: Standard Integration (Medium Complexity)

**Suitable for:**
- Database connector (SQL Accounting, AutoCount, custom systems)
- Scheduled batch processing (hourly/daily)
- File watcher + CSV/XML parser
- Custom field mapping logic
- Webhook implementation

**What's included:**
- Requirements gathering session (1 hour)
- Technical assessment + architecture design (1 hour)
- Development (4-12 hours total):
  - Data extraction logic
  - Field mapping + validation
  - Scheduling + error handling
- Testing with 20+ sample invoices
- Deployment to production environment
- 1-week post-deployment support (bug fixes included)
- Integration documentation + handover session

**Timeline:** 1–2 weeks  
**Fixed Price:** **RM 1,500 – RM 4,500**

**Payment Terms:** 50% upfront, 50% upon successful deployment

---

### Package 3: Enterprise Integration (High Complexity)

**Suitable for:**
- SAP, Oracle, Microsoft Dynamics ERP
- Multi-system orchestration (POS + inventory + CRM)
- Real-time event-driven architecture
- Legacy mainframe systems
- Complex business logic + data transformation
- VPN/tunnel setup for firewalled systems

**What's included:**
- Discovery workshop (half day, 4 hours)
- Requirements documentation + sign-off
- Architecture design + review session
- Development (12-40 hours total):
  - Integration layer/middleware
  - Real-time or batch data sync
  - Complex ETL pipeline
  - Custom business rules
  - Error handling + retry logic
  - Monitoring + logging
- Comprehensive testing (production-like environment)
- Staged rollout (sandbox → production)
- 2-week post-deployment support
- Full documentation + training session
- 30-day check-in + optimization review

**Timeline:** 3–8 weeks  
**Fixed Price:** **RM 4,500 – RM 15,000**

**Payment Terms:** 40% upfront, 40% at milestone (development complete), 20% upon go-live

---

## Ongoing Maintenance Retainer

**For clients who need continuous support beyond warranty period:**

| Tier | Monthly Fee | Included Hours | Overage Rate | Best For |
|------|-------------|----------------|--------------|----------|
| **Basic** | RM 500/month | 1 hour/month | RM 600/hour | Simple integrations, occasional adjustments |
| **Standard** | RM 1,000/month | 2.5 hours/month | RM 500/hour | Medium integrations, regular updates |
| **Premium** | RM 2,000/month | 5 hours/month | RM 450/hour | Complex integrations, proactive monitoring |

**Retainer includes:**
- Priority support (response within 4 hours)
- Proactive monitoring of integration health
- Monthly status report
- Bug fixes and minor enhancements
- System update compatibility checks
- Performance optimization

**Minimum commitment:** 3 months  
**Unused hours:** Roll over for 1 month, then expire

---

## Pricing Decision Tree

Use this to determine what to charge:

```
Does pre-built adapter exist for client's system?
├─ Yes → RM 0 (adapter installation included in subscription)
└─ No → Continue

Can client implement API integration themselves?
├─ Yes, they have dev team → RM 0 (provide API docs + support)
└─ No → Continue

Integration complexity?
├─ Low (2-4 hours)
│   ├─ CSV automation, simple data mapping
│   └─ Quote: RM 800 – RM 1,500
│
├─ Medium (4-12 hours)
│   ├─ Database connector, scheduled batch, file watcher
│   └─ Quote: RM 1,500 – RM 4,500
│
└─ High (12-40 hours)
    ├─ Enterprise ERP, multi-system, real-time sync
    └─ Quote: RM 4,500 – RM 15,000

Add-ons:
├─ On-site work? → +RM 500/day + travel
├─ Urgent delivery (< 1 week)? → +50% premium
└─ Ongoing maintenance? → RM 500-2,000/month retainer
```

---

## Statement of Work (SOW) Template

Use this for all integration projects RM 1,500 and above.

---

<div style="page-break-before: always;"></div>

# STATEMENT OF WORK  
## E-Invoice Platform Integration Services

**Project Title:** [Client System Name] Integration  
**Client:** [Client Company Name]  
**Date:** [Date]  
**Valid Until:** [Date + 30 days]  
**SOW Reference:** SOW-EINV-[YYYY-MM-###]

---

## 1. Parties

**Service Provider:**  
SteadyDevs Solutions  
SSM Registration: 202603092285  
Address: [Your address]  
Contact: [Your email/phone]

**Client:**  
[Client Company Name]  
BRN: [Client BRN]  
Address: [Client address]  
Contact: [Client contact name/email/phone]

---

## 2. Project Overview

SteadyDevs Solutions ("Provider") will develop a custom integration between [Client's System Name/Version] and the SteadyDevs E-Invoice Platform to enable automated invoice submission to LHDN MyInvois.

**Integration Objective:**  
[Example: Automatically extract invoices from SQL Accounting database every hour and submit to LHDN MyInvois via the e-invoice platform, with real-time status synchronization back to the accounting system.]

---

## 3. Scope of Work

### 3.1 Deliverables

Provider will deliver the following:

- [ ] **Custom Integration Adapter**
  - Type: [Database connector / File watcher / API integration / Other]
  - Frequency: [Real-time / Every 30 minutes / Hourly / Daily at HH:MM]
  - Platform: [Windows Service / Docker container / Cloud function / Other]

- [ ] **Data Extraction Logic**
  - Source: [Database tables / File exports / API endpoints]
  - Query/Parser: [SQL queries / CSV parser / JSON transformer / Other]
  - Specific mappings:
    - [Source field] → [E-invoice API field]
    - [Example: customers.tin → buyer_tin]
    - [Example: invoices.doc_no → invoice_number]
    - [Add all critical mappings]

- [ ] **Validation & Error Handling**
  - Pre-submission validation rules
  - Retry logic: [3 attempts with exponential backoff]
  - Error logging: [Database / File / Cloud logging service]
  - Error notifications: [Email to X recipients]

- [ ] **Testing & Validation**
  - Unit testing of extraction logic
  - Integration testing with [X] sample invoices
  - Sandbox testing (LHDN sandbox mode)
  - Production smoke test (1-5 live invoices)

- [ ] **Deployment**
  - Deployment target: [Client's server / Provider's infrastructure / Cloud]
  - Installation guide (if client-hosted)
  - Configuration management
  - Startup/shutdown procedures

- [ ] **Documentation**
  - Integration architecture diagram
  - Configuration guide
  - Troubleshooting procedures
  - Field mapping reference
  - [Optional: Code documentation if client maintains]

- [ ] **Training & Handover**
  - 1-hour handover session
  - Q&A and knowledge transfer
  - Contact for post-deployment support

### 3.2 Out of Scope

The following are **not included** in this SOW and will be quoted separately if requested:

- ❌ Modifications to [Client's System Name] source code (unless specified below)
- ❌ Training for client's IT staff beyond 1-hour handover session
- ❌ Ongoing maintenance after 1-week warranty period (see retainer options)
- ❌ Integration with additional systems not listed in Section 2
- ❌ [Add other exclusions specific to this project]

---

## 4. Technical Approach

**4.1 Architecture**

[Include or attach architecture diagram]

```
┌─────────────────────────┐
│ [Client System]         │
│ [Database/API/Files]    │
└────────┬────────────────┘
         │ [Extraction method]
         ↓
┌─────────────────────────┐
│ Integration Adapter     │
│ [Polling/Webhook/Batch] │
└────────┬────────────────┘
         │ HTTPS POST
         ↓
┌─────────────────────────┐
│ E-Invoice Platform API  │
│ (Three-tier validation) │
└────────┬────────────────┘
         │ Digital signature
         ↓
┌─────────────────────────┐
│ LHDN MyInvois API       │
└─────────────────────────┘
```

**4.2 Integration Method**

[Choose one and describe in detail:]

**Option: Database Polling**
- Connect to [Client's Database] using [Connection string]
- Query `[table_name]` table every [frequency]
- Filter: `WHERE submission_status IS NULL AND created_date > [last_run]`
- Extract invoice header and line items
- Transform data to E-Invoice API format
- POST to `/api/v1/adapter/import`
- Update `submission_status` column on success

**Option: File Watcher**
- Monitor folder: `[Path to shared folder]`
- File pattern: `invoices_*.csv` or `*.xml`
- Parse file using [CSV reader / XML parser]
- Validate data structure
- Transform to E-Invoice API format
- POST to `/api/v1/adapter/import`
- Move processed file to `[archive_folder]`

**Option: API Integration**
- Client's system makes HTTPS POST to E-Invoice Platform API
- Authentication: API key in `X-API-Key` header
- Payload format: JSON (schema provided separately)
- Provider supplies: API documentation + code samples
- Client's development team implements the integration
- Provider supports troubleshooting and testing

---

## 5. Assumptions & Dependencies

**5.1 Client Responsibilities**

Client agrees to provide the following within the specified timelines:

- [ ] **Database access credentials** (if database integration)
  - Connection string, username, password
  - Read-only access is sufficient
  - **Due:** Within 3 business days of SOW signature

- [ ] **API documentation** (if API integration)
  - Endpoint URLs, authentication method
  - Request/response examples
  - **Due:** Within 3 business days of SOW signature

- [ ] **Test environment access**
  - Separate from production for development/testing
  - Contains realistic sample data
  - **Due:** Within 3 business days of SOW signature

- [ ] **Sample invoice data**
  - Minimum 20 invoices in various scenarios (normal, credit note, high-value, etc.)
  - Includes all edge cases (zero-rated, exempt, multiple currencies if applicable)
  - **Due:** Provided with questionnaire or within 3 business days

- [ ] **Technical contact availability**
  - Designated person for technical questions
  - Response time: Within 1 business day
  - **Duration:** Throughout project timeline

- [ ] **Testing participation**
  - Validate sample output
  - Approve test results before production deployment
  - **Timeline:** Per Section 7 (Timeline)

- [ ] **Production deployment window**
  - Scheduled downtime or low-traffic period (if applicable)
  - **To be agreed:** At least 5 business days in advance

**5.2 Provider Assumptions**

Provider's work is based on the following assumptions:

- Client's system documentation is accurate and up-to-date
- Test environment mirrors production environment
- No more than [3] rounds of revisions to field mappings
- Client provides timely feedback (within 2 business days)
- No significant changes to client's system during project timeline
- Client's system can [export data / accept API calls / other technical requirement]
- LHDN MyInvois API specifications remain stable during project

**If any assumption proves incorrect, Provider reserves the right to reassess scope and provide updated timeline/pricing.**

---

## 6. Testing & Acceptance Criteria

**6.1 Testing Phases**

| Phase | Description | Success Criteria | Timeline |
|-------|-------------|------------------|----------|
| **Unit Testing** | Test data extraction logic in isolation | All extraction queries return expected data | Week [X] |
| **Integration Testing** | Test full flow from source to API | 20+ sample invoices processed without errors | Week [X] |
| **Sandbox Testing** | Submit to LHDN sandbox | Invoices accepted by LHDN sandbox, UUIDs returned | Week [X] |
| **Production Smoke Test** | Submit 1-5 real invoices | Real invoices approved by LHDN production | Week [X+1] |

**6.2 Acceptance Criteria**

Client will accept the integration as complete when:

- [ ] Adapter successfully extracts invoices from source system
- [ ] All required fields correctly mapped to E-Invoice API format
- [ ] 95% of test invoices pass three-tier validation
- [ ] Successful submission to LHDN sandbox (20+ invoices approved)
- [ ] Error handling works as specified (errors logged, notifications sent)
- [ ] Documentation delivered and reviewed
- [ ] Handover session completed

**Acceptance Period:** Client has 5 business days from deployment notification to test and accept or request changes.

---

## 7. Project Timeline

| Milestone | Deliverable | Target Date | Owner |
|-----------|-------------|-------------|-------|
| **Kickoff** | SOW signed, deposit paid, access credentials provided | [Date] | Client |
| **Requirements Validation** | Client provides all dependencies, requirements confirmed | [Date] | Client + Provider |
| **Development Start** | Adapter development begins | [Date] | Provider |
| **Alpha Release** | Internal testing complete, ready for client review | [Date] | Provider |
| **Client Testing** | Client validates with sample data, provides feedback | [Date] | Client |
| **Revisions** | Provider addresses feedback (up to 3 rounds) | [Date] | Provider |
| **Sandbox Deployment** | Deployed to test environment, sandbox submissions | [Date] | Provider |
| **Sandbox Sign-off** | Client approves sandbox test results | [Date] | Client |
| **Production Deployment** | Deployed to production, live submissions begin | [Date] | Provider |
| **Handover** | Training session, documentation delivered | [Date] | Provider |
| **Project Complete** | Final payment due | [Date] | Client |

**Total Duration:** [X] weeks from kickoff

**Delays:** If Client fails to provide dependencies or feedback within agreed timelines, project timeline will be extended accordingly at no penalty to Provider.

---

## 8. Investment & Payment Terms

### 8.1 Pricing

| Item | Amount (RM) |
|------|-------------|
| **Integration Development** | [Amount] |
| [Optional: On-site work, if applicable] | [Amount] |
| [Optional: Urgent delivery premium, if applicable] | [Amount] |
| **Subtotal** | [Amount] |
| **SST (8%)** (if applicable) | [Amount] |
| **Total Investment** | **RM [Total]** |

**OR**

**Hourly Billing:** [X-Y] hours estimated @ RM 400/hour = RM [Total]  
_Actual hours may vary; client will be invoiced based on actual time spent. Provider will notify client if estimate will be exceeded by >20%._

### 8.2 Payment Schedule

**For fixed-price projects:**

| Milestone | Amount | Due Date |
|-----------|--------|----------|
| **Deposit** (upon SOW signature) | 50% (RM [Amount]) | [Date] |
| **Final Payment** (upon production deployment) | 50% (RM [Amount]) | [Date] |

**For hourly projects:**

| Milestone | Amount | Due Date |
|-----------|--------|----------|
| **Deposit** (upon SOW signature) | 50% of estimate (RM [Amount]) | [Date] |
| **Final Invoice** (upon completion, adjusted for actual hours) | Balance (RM [Amount]) | Within 14 days of invoice |

### 8.3 Payment Method

- Bank transfer to SteadyDevs Solutions account (details provided on invoice)
- Credit card via Stripe payment link (3% processing fee applies)

### 8.4 Late Payment

Invoices not paid within 30 days of due date will incur a 2% monthly late fee. Provider reserves the right to suspend integration service and support until payment is current.

---

## 9. Warranty & Support

### 9.1 Warranty Period

Provider warrants that the integration will function as specified in this SOW for a period of **7 days** from production deployment date.

During the warranty period, Provider will:
- Fix bugs and errors at no additional charge
- Respond to support requests within [1 business day]
- Provide remote troubleshooting and debugging

### 9.2 Post-Warranty Support

After the 7-day warranty period, support is available as follows:

**Option 1: Per-incident support**
- Rate: RM 400/hour (1-hour minimum)
- Response time: 2-5 business days

**Option 2: Ongoing maintenance retainer** (see Section "Ongoing Maintenance Retainer" above)
- Basic: RM 500/month (1 hour included)
- Standard: RM 1,000/month (2.5 hours included)
- Premium: RM 2,000/month (5 hours included)

---

## 10. Change Requests

Any changes to the scope defined in this SOW must be submitted in writing and will be subject to additional fees.

**Change request process:**
1. Client submits change request via email
2. Provider assesses impact on timeline and cost
3. Provider provides written quote for change
4. Client approves quote in writing
5. Work proceeds on revised terms

**Minor changes** (< 1 hour effort) may be accommodated within the original scope at Provider's discretion.

---

## 11. Intellectual Property

### 11.1 Ownership

**Custom Adapter Code:** Provider retains ownership of all code, configurations, and intellectual property developed under this SOW. Client receives a perpetual, non-exclusive, non-transferable license to use the integration adapter for their internal business purposes only.

**Client Data:** Client retains all rights to their invoice data and business information. Provider will not use, share, or disclose client data except as necessary to perform services under this SOW.

### 11.2 Reuse

Provider may reuse general patterns, methodologies, and non-client-specific code in future projects. Provider will not disclose client-specific business logic, data structures, or proprietary information without written consent.

---

## 12. Confidentiality

Both parties agree to keep confidential all non-public information disclosed during the project, including but not limited to:
- Technical specifications and system architecture
- Business processes and data structures
- Access credentials and security configurations
- Pricing and financial terms

Confidentiality obligations survive termination of this SOW for a period of 3 years.

---

## 13. Limitation of Liability

Provider's total liability under this SOW shall not exceed the total amount paid by Client for integration services (excluding subscription fees).

Provider is not liable for:
- Issues arising from client's source system (downtime, data corruption, etc.)
- LHDN MyInvois API changes or downtime
- Third-party service failures beyond Provider's control
- Consequential damages, lost revenue, or missed LHDN deadlines

Client acknowledges that Provider is not responsible for LHDN compliance decisions or invoice rejections by LHDN.

---

## 14. Termination

Either party may terminate this SOW with 7 days' written notice.

**Upon termination:**
- Client pays for all work completed to date (hourly projects)
- Provider delivers all completed work and documentation
- No refund of deposit (fixed-price projects)
- Provider is not obligated to complete unfinished deliverables

---

## 15. Acceptance & Signatures

By signing below, both parties agree to the terms and conditions set forth in this Statement of Work.

**CLIENT**

Company Name: _____________________________  
Authorized Signatory: _____________________________  
Name (print): _____________________________  
Title: _____________________________  
Date: _____________________________

**SERVICE PROVIDER**

Company Name: SteadyDevs Solutions  
Authorized Signatory: _____________________________  
Name (print): _____________________________  
Title: _____________________________  
Date: _____________________________

---

## Attachments

- [ ] Attachment A: Technical Architecture Diagram
- [ ] Attachment B: Field Mapping Reference
- [ ] Attachment C: Sample Invoice Data (provided by client)
- [ ] Attachment D: API Documentation (if applicable)

---

**END OF STATEMENT OF WORK**

---

**Document Control:**

- **Template Version:** 1.0
- **Last Updated:** May 20, 2026
- **Owner:** SteadyDevs Solutions
- **Next Review:** August 20, 2026

