# 🛡️ CyberPrahari (साइबर प्रहरी)
### National Cyber Threat Intelligence & Citizen Defense Platform

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20Zero--Tracking-06b6d4.svg)](#-privacy-by-design--security-architecture)

> **CyberPrahari** (*The Sentinel / Guardian*) is an empirical, privacy-first Cyber Threat Intelligence and Citizen Defense platform built upon authentic case telemetry from the **Indian Cyber Crime Coordination Centre (I4C)** under the **Ministry of Home Affairs (MHA), Government of India**.
>
> The platform transforms static government advisories into interactive, zero-tracking defensive tools: real-time scam risk diagnostics, personal cyber hygiene self-audits, deep forensic case studies, statutory legal mappings (IT Act & Bharatiya Nyaya Sanhita 2023), and emergency incident response workflows for National Helpline **1930**.

---

## 🌟 Key Features & Platform Capabilities

### 1. 🔍 210 Real-World I4C Cyber Incident Dossiers & Threat Library
A comprehensive threat intelligence repository featuring **210 authentic cybercrime cases** categorized across 12 distinct threat vectors and 20+ Indian states:
* **10 Core Master Dossiers (Pages 1):** Detailed forensic breakdowns structured across a standardized **14-parameter forensic framework**:
  * **Case 01:** "Digital Arrest" Cyber Extortion Syndicate (VoIP impersonation of CBI/ED/Customs)
  * **Case 02:** AePS Biometric Spoofing & Land Registry Thumbprint Cloning
  * **Case 03:** Telegram Part-Time Task & YouTube "Like" Ponzi Fraud
  * **Case 04:** Fraudulent Institutional Trading Platforms & Sideloaded Rogue Stock APKs
  * **Case 05:** Predatory Instant Loan Apps, Permission Scraping & Defamatory Morphing Extortion
  * **Case 06:** SIM Swap & Telecommunications 2FA Hijacking
  * **Case 07:** Electricity Bill Disconnection Phishing via Remote Access Trojan APKs
  * **Case 08:** AI Deepfake Video Call & Neural Voice Cloning Impersonation
  * **Case 09:** QR Code Phishing ("Quishing") & Reverse UPI Collect PIN Fraud
  * **Case 10:** Fake Courier Delivery & Customs Clearance Smishing via Trojan APKs
* **200 Expanded Threat Telemetry Profiles:** Real-world incident case studies spanning Pig Butchering, Sextortion, Banking Trojans, Work-from-Home scams, Utility frauds, and Crypto drainers.
* **Intelligent Library Navigation:** Multi-category filtering, instant full-text search, and lightweight 12-card responsive pagination with quick-jump to Core Dossiers.

### 2. ⚡ Interactive "Is This a Scam?" Risk Analyzer
A client-side heuristic decision-support engine evaluating incoming calls, SMS messages, and emails:
* Evaluates **10 weighted heuristic red flags** (e.g., impersonation of CBI/Police, urgent payment demands, remote screen-sharing requests, QR code PIN traps).
* Calculates a real-time risk score from **0 to 100** with instant threat classification: **Low Risk**, **Moderate Suspicion**, **High Threat**, or **Critical Scam Danger**.
* Provides immediate, actionable defensive instructions (e.g., *hang up immediately, refuse OTP disclosure, preserve call logs, and dial 1930*).

### 3. 🛡️ Personal Cyber Hygiene Self-Audit
An interactive 10-point scored assessment tool for citizens and professionals:
* Checks critical security baselines: Aadhaar biometric locking via mAadhaar, app-based 2FA over SMS OTPs, third-party APK sideloading avoidance, family safe words for AI voice cloning, and SEBI advisor verification.
* Displays dynamic SVG completion ring, overall hygiene score, and tailored hardening recommendations.

### 4. ⚖️ Comprehensive 19-Statute Indian Cyber Law Matrix
Cross-maps technical attack vectors against the Indian statutory and regulatory framework across **19 essential legal provisions**:
* **Bharatiya Nyaya Sanhita, 2023 (BNS):** Section 111 (Organized Cybercrime), Section 204 (Impersonating a Public Servant), Section 308 (Extortion), Section 318(4) (Cheating & Dishonest Inducement), Section 336 (Electronic Forgery), and Section 351 (Criminal Intimidation).
* **Information Technology Act, 2000 (as amended):** Sections 43, 66, 66C (Identity Theft), 66D (Cheating by Personation), 66E (Privacy Violation), 67/67A (Obscene/Sexually Explicit Content Extortion), and 70B (Mandatory CERT-In 6-Hour Incident Reporting).
* **Digital Personal Data Protection Act, 2023 (DPDP):** Section 6 & 8 (Consent Architecture, Biometric Data Protection, and penalties up to ₹250 Crores).
* **Aadhaar Act, 2016:** Sections 38 & 42 (Penal provisions for unauthorized biometric identity access and impersonation).
* **Telecommunications Act, 2023:** Sections 28 & 29 (Spam mitigation, telecom identity spoofing, and rogue SIM distribution penalties).
* **Financial & Regulatory Statutes:** Payment and Settlement Systems Act 2007 (Unauthorized Payment Routing), Prevention of Money Laundering Act 2002 (PMLA Sec 3/4 - Mule Accounts), SEBI PFUTP Regulations (Unregistered Trading Advisory), and RBI Zero Liability Directives.

### 5. 🚨 National Cyber Incident Response & Helpline 1930 Hub
A rapid-action emergency response guide for financial cyber fraud:
* Step-by-step roadmap to navigate the critical **120-minute "Golden Window"**.
* Direct protocols to trigger banking freezes via the **Citizen Financial Cyber Fraud Reporting System (CFCFRS)** and National Helpline **1930**.
* Verification checklists and direct access to [cybercrime.gov.in](https://cybercrime.gov.in) and [sancharsaathi.gov.in](https://sancharsaathi.gov.in).

---

## 🔒 Privacy by Design & Security Architecture

CyberPrahari implements strict **Privacy by Design** principles in its software architecture:

* **Zero Personal Data Collection:** The platform requires **no user registration**, no phone number, no email address, and no account creation.
* **100% Client-Side Computation:** The Scam Risk Analyzer and Cyber Hygiene Audit compute all heuristics entirely in the user's browser using pure JavaScript. Zero diagnostic inputs are transmitted over the network or stored in databases.
* **Zero External Telemetry:** No third-party tracking scripts, no advertising beacons, and no persistent tracking cookies.
* **Open & Verifiable:** All heuristic rule weights, threat models, and legal citations are fully transparent in the source code.

---

## 🏗️ Technical Architecture & Stack

| Layer | Technologies | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 (Functional Components, Hooks) | Reactive component-driven UI architecture |
| **Build Tooling** | Vite 6 | Sub-second HMR and production bundle optimization |
| **Styling & Theme** | Tailwind CSS 3.4 | Custom cybersecurity dark palette (`#070b14`, `#0a0f1d`, cyan, saffron) |
| **Iconography** | Lucide React | Lightweight, accessible SVG interface icons |
| **Containerization** | Docker, Nginx Alpine, Docker Compose | Production multi-stage build and deployment |

---

## 📁 Repository Directory Structure

```
ethics/
├── frontend/                                # Production-Ready React Web Application
│   ├── index.html                           # HTML entry point with CyberPrahari branding
│   ├── package.json                         # Dependencies & npm scripts
│   ├── vite.config.js                       # Vite bundler configuration
│   ├── tailwind.config.js                   # Tailwind cybersecurity color tokens
│   ├── Dockerfile                           # Multi-stage container build (Node + Nginx)
│   ├── nginx.conf                           # High-performance Nginx web server config
│   └── src/
│       ├── main.jsx                         # Application root entry point
│       ├── App.jsx                          # Route navigation & view state
│       ├── index.css                        # Cyberpunk dark theme styles
│       ├── data/
│       │   ├── i4cCases.js                  # 210 verified authentic I4C incident dossiers (10 Core + 200 Telemetry)
│       │   ├── cyberLaws.js                 # 19 Indian cyber laws & statutory penal provisions (BNS, IT Act, DPDP)
│       │   ├── ethicsData.js                # Digital ethics & Privacy by Design frameworks
│       │   ├── checklistData.js             # 10-point personal cyber hygiene question set
│       │   └── scamRules.js                 # Rule-based diagnostic weights for scam detection
│       ├── components/
│       │   ├── Navbar.jsx                   # Navigation bar, advisory ticker & emergency 1930 CTA
│       │   └── Footer.jsx                   # Legal disclaimers & verified government portal links
│       └── pages/
│           ├── Home.jsx                     # Threat dashboard, statistics & featured incident
│           ├── CaseLibrary.jsx              # Searchable & filterable 210-case intelligence library with pagination
│           ├── CaseDetailModal.jsx          # 14-parameter forensic incident inspection modal
│           ├── ScamAnalyzer.jsx             # Interactive "Is This a Scam?" diagnostic engine
│           ├── SecurityAudit.jsx            # Interactive scored Cyber Hygiene self-audit
│           ├── CyberLawGuide.jsx            # Interactive statutory law matrix with case cross-links
│           ├── DigitalEthicsHub.jsx         # Ethics frameworks & developer codes of conduct
│           ├── IncidentResponse.jsx         # Emergency 1930 Helpline & Golden Hour roadmap
│           └── AwarenessCampaign.jsx        # Citizen awareness poster suite & 5 Golden Rules
│
├── docs/                                    # Official Submission Deliverables (PDFs)
│   ├── A_Project_Report_13_Pages_Sujal_Shrivastav.pdf        # Formal 13-page project report (123 links)
│   ├── B_Presentation_12_Slides_Sujal_Shrivastav.pdf         # 12-slide interactive seminar deck (230 links)
│   └── C_Awareness_Poster_Infographic_Sujal_Shrivastav.pdf   # 1-page high-impact citizen poster (5 links)
│
├── docker-compose.yml                       # Single-command Docker deployment
├── LICENSE                                  # Proprietary software license & copyright terms
└── README.md                                # Platform overview & technical documentation
```

---

## 🚀 Quickstart & Local Setup

### Prerequisites
* **Node.js:** v18.0 or higher
* **npm:** v9.0 or higher (or yarn / pnpm)

### Option 1: Running with Node.js & Vite

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sujal-Shrivastav-07/ethics.git
   cd ethics/frontend
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be live at:  
   👉 **`http://localhost:5173`**

4. **Create a production build:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `frontend/dist/`.

---

### Option 2: Running with Docker Compose

Run the platform as a containerized web application served via Nginx:

```bash
# From the project root
docker compose up --build -d
```

Access the platform at:  
👉 **`http://localhost:8080`**

To stop the container:
```bash
docker compose down
```

---

## 📑 Project Documentation & Deliverables

All formal submission documents are compiled as interactive PDFs in the [`docs/`](docs/) directory:

* [📄 **A_Project_Report_13_Pages_Sujal_Shrivastav.pdf**](docs/A_Project_Report_13_Pages_Sujal_Shrivastav.pdf): 13-page formal technical report with clickable Table of Contents, 123 verified references, and complete statutory mapping.
* [📊 **B_Presentation_12_Slides_Sujal_Shrivastav.pdf**](docs/B_Presentation_12_Slides_Sujal_Shrivastav.pdf): 12-slide interactive seminar deck featuring an embedded slide-jump navigation ribbon and speaker notes.
* [🎨 **C_Awareness_Poster_Infographic_Sujal_Shrivastav.pdf**](docs/C_Awareness_Poster_Infographic_Sujal_Shrivastav.pdf): 1-page high-impact citizen awareness poster with clickable links to Helpline 1930 and national portals.

---

## 👤 Author & Attribution

* **Author:** Sujal Shrivastav
* **GitHub Profile:** [@Sujal-Shrivastav-07](https://github.com/Sujal-Shrivastav-07)
* **Project Repository:** [https://github.com/Sujal-Shrivastav-07/ethics](https://github.com/Sujal-Shrivastav-07/ethics)

---

## ⚖️ License & Copyright Protection

This project and all associated intelligence dossiers, diagnostic engines, and documentation are proprietary and protected under statutory intellectual property and copyright laws:

**Copyright © 2026 Sujal Shrivastav. All Rights Reserved.**

Unauthorized copying, redistribution, or re-hosting of this codebase or associated research materials without explicit prior written authorization is strictly prohibited. See the [LICENSE](LICENSE) file for full terms.
