/**
 * CyberPrahari - Authentic I4C Cyber Digest Case Intelligence Database
 * Sourced from official releases, advisories, and publications by:
 * - Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs (MHA)
 * - National Cyber Crime Reporting Portal (NCRP)
 * - Computer Emergency Response Team - India (CERT-In)
 * - Reserve Bank of India (RBI) Regulatory Directives
 */

export const I4C_CASES = [
  {
    id: "case-01",
    caseNumber: 1,
    title: "Digital Arrest Cyber Extortion Syndicate",
    date: "November 2023 – Continuous (I4C High Alert 2024)",
    source: "I4C Cyber Digest Bulletin / MHA Advisory on Impersonation Frauds",
    target: "Senior citizens, retired professionals, corporate executives, and homemakers across metropolitan cities",
    category: "Extortion & Social Engineering",
    threatLevel: "Critical",
    severityScore: 9.6,
    attackMethod: "Impersonation of Law Enforcement (CBI, ED, Cyber Police, Customs) via VoIP Video Calls with simulated police stations and digital isolation.",
    cybercrimeType: "Cyber Blackmail, Extortion, Impersonation (Cheating by Personation), and Identity Exploitation",
    attackFlow: [
      { step: 1, actor: "Threat Actor", action: "Initiates automated IVR call or Skype/WhatsApp call claiming a parcel containing contraband (drugs/fake passports) was intercepted in victim's name." },
      { step: 2, actor: "Syndicate Impersonator", action: "Transfers call to a fake 'CBI/Customs Police Officer' in uniform sitting in front of a simulated official studio backdrop." },
      { step: 3, actor: "Psychological Trap", action: "Subject is placed under 'Digital Arrest', ordered not to hang up or contact family, under threat of immediate non-bailable arrest." },
      { step: 4, actor: "Financial Extraction", action: "Victim is coerced into transferring entire savings to a 'Safe Government Verification Account' (mule account) for judicial clearance." },
      { step: 5, actor: "Exfiltration & Laundering", action: "Funds are immediately layered through crypto-wallets and cross-border hawala channels; communication is severed." }
    ],
    impact: "Severe financial ruin (individual losses ranging from ₹50 Lakhs to ₹15 Crores), extreme psychological trauma, panic, and erosion of public trust in legitimate law enforcement.",
    ethicalIssues: [
      "Exploitation of fear, authority bias, and deference to state enforcement institutions.",
      "Violation of individual dignity through psychological confinement ('digital arrest').",
      "Systematic exploitation of elderly and vulnerable digital citizens.",
      "Weaponization of deepfake audio/video and digital communication tools against unarmed users."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66D", description: "Punishment for cheating by personation by using computer resource (up to 3 years imprisonment and fine)." },
      { statute: "IT Act, 2000 - Section 66C", description: "Punishment for identity theft, unauthorized use of electronic signatures or unique identification markers." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318(4)", description: "Cheating and dishonestly inducing delivery of property (equivalent to IPC 420)." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 204", description: "Impersonating a public servant (equivalent to IPC 170)." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 308", description: "Extortion by putting person in fear of injury or legal consequence." }
    ],
    weaknesses: {
      human: "Fear of legal persecution, lack of awareness that Indian law contains no provision for 'Digital Arrest', isolation from family support.",
      technical: "Unverified VoIP caller ID spoofing, misuse of end-to-end encrypted messaging platforms without sender verification badges, unvetted banking mule networks."
    },
    prevention: [
      "Awareness: Indian law enforcement agencies (CBI, ED, Police, Courts) NEVER conduct interrogations or place individuals under arrest via video call.",
      "Immediate Action: Disconnect suspicious video calls immediately; do not share financial details or Aadhaar numbers.",
      "Verification: Call local police helpline or the National Cybercrime Helpline '1930' immediately.",
      "Cross-Check: Verify any claimed judicial arrest warrant by directly contacting the registered office."
    ],
    recommendations: [
      "Telecommunication providers must mandate cryptographic caller ID verification (STIR/SHAKEN protocols) on VoIP gateways.",
      "Banks must introduce automated velocity checks and pause large inter-account transfers made immediately after prolonged video calls.",
      "Public platforms must display proactive warning dialogs whenever an unfamiliar account initiates a video call requesting money transfers."
    ],
    keyLearnings: [
      "There is legally NO concept of 'Digital Arrest' under Indian procedural law (CrPC / BNSS).",
      "Fear-based psychological engineering can override common sense even among highly educated citizens.",
      "Inter-agency coordination between I4C and commercial banks is crucial during the 'Golden Hour' (first 2 hours)."
    ]
  },
  {
    id: "case-02",
    caseNumber: 2,
    title: "Aadhaar Enabled Payment System (AePS) Biometric Spoofing",
    date: "March 2023 – Ongoing (I4C Advisory Series)",
    source: "I4C Cyber Digest / UIDAI Biometric Fraud Intelligence Reports",
    target: "Rural and semi-urban bank account holders with linked Aadhaar accounts, property registrants",
    category: "Biometric & Identity Fraud",
    threatLevel: "High",
    severityScore: 8.8,
    attackMethod: "Extraction of public land registry deeds containing Aadhaar numbers and thumb impressions, creation of cloned silicone fingerprints, and fraudulent cash withdrawals via Point of Sale (PoS) micro-ATMs.",
    cybercrimeType: "Biometric Identity Theft, Financial Cyber Fraud, and Unauthorized System Access",
    attackFlow: [
      { step: 1, actor: "Data Harvester", action: "Accesses public land registry portals and downloads scanned property sale deeds containing visible biometric thumbprints and Aadhaar numbers." },
      { step: 2, actor: "Fabrication Unit", action: "Prints inverted fingerprint impressions onto butter paper or copper plates and casts 3D silicone/polymer synthetic rubber thumbs." },
      { step: 3, actor: "Corrupt Business Correspondent", action: "Operates an AePS micro-ATM terminal in a remote location without customer physical presence." },
      { step: 4, actor: "Unauthorized Cash-out", action: "Submits Aadhaar number and presses fake silicone fingerprint onto biometric scanner; bank server authorizes cash deduction without OTP." },
      { step: 5, actor: "Victim Discovery", action: "Victim receives SMS hours later (or days later in rural areas) showing account debited in multiple small transactions (₹10,000 max limit)." }
    ],
    impact: "Unexplained financial depletion of poor and elderly citizens' life savings; loss of trust in digital financial inclusion and biometric authentication systems.",
    ethicalIssues: [
      "Publication of sensitive biometric data on public land record portals without redacting fingerprints.",
      "Failure of financial service providers to implement liveness detection on edge biometric sensors.",
      "Imbalance between frictionless ease of payment and citizen asset protection."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 43 & 66", description: "Unauthorized data download, extraction, and fraudulent access to a computer system." },
      { statute: "IT Act, 2000 - Section 66C", description: "Identity theft through fraudulent use of electronic signatures or unique identification features." },
      { statute: "Aadhaar Act, 2016 - Section 38 & 42", description: "Penalty for unauthorized access to Central Identities Data Repository (CIDR) and manipulation of biometric records." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318", description: "Cheating and fraudulent inducement." }
    ],
    weaknesses: {
      human: "Citizens unaware of Aadhaar biometric lock feature; failure to monitor bank debit alerts.",
      technical: "Lack of mandatory Liveness Detection (detecting blood flow/body heat) on low-cost AePS biometric scanners; public availability of unredacted land registry scans online."
    },
    prevention: [
      "Aadhaar Biometric Lock: Lock your Aadhaar biometrics using the mAadhaar app or UIDAI portal; unlock only when needed.",
      "Masked Aadhaar: Use Masked Aadhaar (showing only the last 4 digits) for all KYC and documentation purposes.",
      "SMS Vigilance: Register active mobile numbers with banks to receive instantaneous debit notifications."
    ],
    recommendations: [
      "State land registration departments must redact fingerprint impressions and Aadhaar numbers from publicly accessible online records.",
      "NPCI and RBI must enforce AI-powered liveness detection on all AePS terminals nationwide.",
      "Implement multi-factor authentication (MFA) requiring both biometric match and OTP for AePS transactions exceeding ₹2,000."
    ],
    keyLearnings: [
      "Biometrics are public identifiers, not secrets; once compromised, a fingerprint cannot be changed like a password.",
      "Security models must incorporate 'Biometric Revocation' and proactive locking mechanisms."
    ]
  },
  {
    id: "case-03",
    caseNumber: 3,
    title: "Telegram Part-Time Task & YouTube 'Like' Scam",
    date: "July 2023 – Present (I4C Nationwide Bust Reports)",
    source: "I4C Cyber Digest / NCRP Daily Threat Feeds",
    target: "College students, unemployed youth, job seekers, and stay-at-home homemakers",
    category: "Financial Fraud & Social Engineering",
    threatLevel: "High",
    severityScore: 8.5,
    attackMethod: "Luring victims with promises of high daily earnings for simple digital tasks (liking YouTube videos, reviewing hotels on Google Maps), followed by high-ticket prepaid investment traps.",
    cybercrimeType: "Prepaid Task Fraud, Ponzi Cyber Scam, and Organized Transnational Financial Fraud",
    attackFlow: [
      { step: 1, actor: "Recruiter Bot/Agent", action: "Sends unsolicited WhatsApp/SMS messages offering work-from-home earning ₹2,000–₹5,000 per day with zero prior experience." },
      { step: 2, actor: "Introductory Task", action: "Victim is asked to like 3 YouTube videos and submit screenshots; receives legitimate ₹150–₹500 payment via UPI to build trust." },
      { step: 3, actor: "Telegram Group Infiltration", action: "Victim is migrated to a private Telegram group where paid actors post fake payment proofs and celebrate 'VIP earnings'." },
      { step: 4, actor: "Prepaid Task Coercion", action: "Victim is instructed to deposit funds (e.g. ₹5,000 to earn ₹8,000) on a fake dashboard; dashboard shows fictional skyrocketing profits." },
      { step: 5, actor: "The Trap & Exit", action: "When attempting withdrawal, scammer claims system errors, tax fees, or higher tier unlock fees (demanding ₹50k to ₹5 Lakhs); victim is blocked." }
    ],
    impact: "Severe financial debt among youth, student loan diversions, psychological depression, and conversion of young bank accounts into illegal 'mule accounts'.",
    ethicalIssues: [
      "Exploitation of economic vulnerability and unemployment distress.",
      "Creation of manufactured social proof using bot networks and manipulated crowd psychology.",
      "Abuse of digital messaging channels (Telegram, WhatsApp) for unregulated financial solicitations."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66D", description: "Cheating by personation by using computer resources and electronic communication." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318(4)", description: "Cheating and dishonestly inducing transfer of valuable security." },
      { statute: "Prize Chits and Money Circulation Schemes (Banning) Act, 1978", description: "Prohibition of pyramid schemes and fraudulent money circulation models." },
      { statute: "Prevention of Money Laundering Act (PMLA), 2002", description: "Applicable to organizers laundering illicit proceeds through mule accounts." }
    ],
    weaknesses: {
      human: "Desire for quick financial gain, cognitive vulnerability to early small incentive payouts (gambling hook effect).",
      technical: "Ease of creating anonymous Telegram accounts and bot networks; lack of merchant KYC verification on UPI payment gateways handling mule deposits."
    },
    prevention: [
      "Universal Rule: Legitimate companies NEVER ask job seekers to deposit money in order to work or earn commissions.",
      "Immediate Flag: Unsolicited WhatsApp/Telegram offers promising high payouts for simple likes/ratings are 100% fraudulent.",
      "Reporting: Report suspicious recruiter phone numbers on WhatsApp and to the national portal `cybercrime.gov.in`."
    ],
    recommendations: [
      "Telegram and WhatsApp must enforce stricter spam detection algorithms and flag bulk message invitations containing external payment links.",
      "UPI providers should implement warning triggers when payments are made to newly created, high-velocity merchant accounts."
    ],
    keyLearnings: [
      "Small upfront payouts are deliberately designed psychological bait ('sugar coating') to lure victims into catastrophic losses.",
      "Digital tasks that require financial deposits are Ponzi schemes disguised as employment."
    ]
  },
  {
    id: "case-04",
    caseNumber: 4,
    title: "Fraudulent Institutional Trading & Fake Stock Market Apps",
    date: "Late 2023 – Mid 2024 (I4C & SEBI Joint Warning)",
    source: "I4C Cyber Digest / Securities and Exchange Board of India (SEBI) Public Alerts",
    target: "Retail stock investors, crypto enthusiasts, salaried professionals looking for high equity returns",
    category: "Financial Fraud & Rogue Software",
    threatLevel: "Critical",
    severityScore: 9.4,
    attackMethod: "Deceptive social media advertisements using names of reputed institutional brokers (e.g. Goldman Sachs, Morgan Stanley, institutional FPIs), driving victims to private WhatsApp/Telegram advisory groups and sideloaded rogue trading apps.",
    cybercrimeType: "Securities Fraud, Fake Trading Application Distribution, and Unauthorized Deposit Taking",
    attackFlow: [
      { step: 1, actor: "Ad Campaign", action: "Scammers run targeted ads on Facebook/Instagram claiming insider institutional FII/FPI access offering 500% returns on IPO allotments." },
      { step: 2, actor: "VIP Mentorship Group", action: "Victim is added to a WhatsApp community run by a fake 'Professor' or 'Investment Guru' where fake members post daily multi-lakh profit screenshots." },
      { step: 3, actor: "Sideloading Rogue App", action: "Victim is instructed to download an unverified Android APK or iOS enterprise profile mimicking a legitimate institutional trading terminal." },
      { step: 4, actor: "Simulated Trading Dashboard", action: "Transfers are made to varied individual mule current accounts; the app displays simulated trades with unrealistically surging portfolio values." },
      { step: 5, actor: "Extortionate Exit Barriers", action: "When the victim requests cash withdrawal, the platform demands 20–30% 'institutional tax' and 'management fee'; victim is abruptly locked out." }
    ],
    impact: "Catastrophic individual losses (frequently exceeding ₹1 Crore to ₹10 Crores per victim), liquidation of retirement funds and ancestral assets.",
    ethicalIssues: [
      "Misappropriation of legitimate corporate identities and academic credentials to establish fraudulent trust.",
      "Manipulative financial gaslighting forcing victims to take loans to 'save' their locked funds.",
      "Targeting vulnerable citizens who lack sophisticated financial and technological literacy."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66C & 66D", description: "Identity theft and cheating by personation using malicious mobile applications." },
      { statute: "SEBI Act, 1992 - Section 12A & PFUTP Regulations", description: "Prohibition of manipulative, fraudulent, and unfair trade practices in the securities market." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318", description: "Aggravated cheating and fraudulent conversion of assets." }
    ],
    weaknesses: {
      human: "Greed and fear of missing out (FOMO) regarding IPO allocations; assumption that social media advertisements are vetted.",
      technical: "Sideloading unknown APKs outside official app stores; unmonitored opening of corporate current accounts used as mule conduits."
    },
    prevention: [
      "Verify Registration: Check SEBI's official website (sebi.gov.in) to verify whether the broker or advisor is genuinely registered.",
      "Official Channels Only: Never download trading apps from third-party links or WhatsApp chat messages; use official Google Play Store / Apple App Store only.",
      "Direct Banking: Regulated stock trading in India strictly occurs through registered broker accounts via ASBA/linked bank accounts, never via random personal/corporate current accounts."
    ],
    recommendations: [
      "Search and social media giants must restrict financial investment advertisements exclusively to verified SEBI-registered entities.",
      "Mobile operating systems (Android/iOS) must display persistent warnings whenever sideloaded applications request network connections to financial servers."
    ],
    keyLearnings: [
      "Foreign Portfolio Investors (FPI) and institutional accounts NEVER offer retail trading access through WhatsApp groups.",
      "A software screen showing 'profits' has zero financial value if the underlying broker is unregulated."
    ]
  },
  {
    id: "case-05",
    caseNumber: 5,
    title: "Predatory Instant Loan Apps & Extortion via Contact Scraping",
    date: "2022 – Ongoing (I4C Enforcement Operations)",
    source: "I4C Cyber Digest / Enforcement Directorate & RBI Digital Lending Circulars",
    target: "Low-income individuals, gig workers, college students, financially distressed borrowers",
    category: "Extortion & Rogue Software",
    threatLevel: "Critical",
    severityScore: 9.2,
    attackMethod: "Unregulated mobile loan applications requiring blanket permissions (contacts, photo gallery, location), disbursing partial loans with exorbitant hidden deductions, and unleashing extortionate harassment campaigns using morphed images.",
    cybercrimeType: "Cyber Blackmail, Extortion, Data Theft, and Cyber Harassment",
    attackFlow: [
      { step: 1, actor: "Malicious App Listing", action: "App promotes 5-minute hassle-free loans with 'zero credit score check' on third-party websites or rogue app stores." },
      { step: 2, actor: "Excessive Permission Harvesting", action: "During installation, app forces full access to user's phone contacts, SMS history, camera, and private image storage." },
      { step: 3, actor: "Shortened Disbursal", action: "Victim requests ₹10,000; receives only ₹6,000 after 'processing charges' with repayment of ₹12,000 demanded within 7 days." },
      { step: 4, actor: "Morphed Photo Harassment", action: "Upon minor payment delay, recovery agents download private photos from device, morph them into obscene/nude images, and send them to the borrower's family and workplace contacts." },
      { step: 5, actor: "Continuous Extortion", action: "Victim is coerced to take loans from sister apps to pay the original loan, creating an inescapable extortion vortex." }
    ],
    impact: "Severe mental agony, social humiliation, multiple reported cases of victim suicide, unauthorized exfiltration of millions of personal contacts.",
    ethicalIssues: [
      "Vicious violation of bodily and digital privacy through non-consensual image manipulation.",
      "Predatory lending targeting citizens with acute financial desperation.",
      "Violation of fundamental data protection principle of purpose limitation and data minimization."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66E", description: "Violation of privacy through intentional capture, publishing, or transmitting images of private area without consent." },
      { statute: "IT Act, 2000 - Section 67 & 67A", description: "Punishment for publishing or transmitting obscene or sexually explicit material in electronic form." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 308", description: "Extortion." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 351", description: "Criminal intimidation." },
      { statute: "Digital Personal Data Protection Act, 2023", description: "Violation of personal data processing mandates, non-consensual sharing of personal directory data." }
    ],
    weaknesses: {
      human: "Urgent need for short-term emergency cash; blindly granting device permissions without reading permission prompts.",
      technical: "Mobile operating systems permitting apps to request broad 'READ_CONTACTS' and 'READ_EXTERNAL_STORAGE' without fine-grained scoping."
    },
    prevention: [
      "Check RBI White List: Borrow exclusively from RBI-regulated Non-Banking Financial Companies (NBFCs) or licensed scheduled banks.",
      "Deny Invasive Permissions: Never allow a financial or loan utility app access to your contact list or personal photo gallery.",
      "Report Immediately: In case of threats or morphed photo blackmail, do not pay additional money; register a complaint at `cybercrime.gov.in` and police immediately."
    ],
    recommendations: [
      "Google and Apple must enforce complete bans on loan applications requiring access to contact lists and external storage.",
      "RBI and I4C must maintain an updated, publicly searchable registry of certified digital lending apps."
    ],
    keyLearnings: [
      "A loan application has no legitimate technical justification to access your family photo album or complete contact book.",
      "Paying extortion money does not stop harassment; it only invites aggressive subsequent demands."
    ]
  },
  {
    id: "case-06",
    caseNumber: 6,
    title: "SIM Swap & Targeted Telecommunications Hijacking",
    date: "2023 – 2024 (I4C Telecom Threat Analysis)",
    source: "I4C Cyber Digest / DoT (Department of Telecommunications) Security Directives",
    target: "High-net-worth individuals, crypto traders, enterprise administrators, and bank account holders",
    category: "Telecommunications & Identity Fraud",
    threatLevel: "High",
    severityScore: 8.7,
    attackMethod: "Targeted reconnaissance to acquire victim's personal identifiable information (PII), followed by fraudulent submission of counterfeit identity proofs to telecom retail outlets to obtain a duplicate SIM, deactivating the victim's service and capturing SMS OTPs.",
    cybercrimeType: "Telecom Hijacking, Account Takeover (ATO), and Financial Fraud",
    attackFlow: [
      { step: 1, actor: "Reconnaissance", action: "Attacker acquires victim's name, mobile number, date of birth, and Aadhaar copy through data leaks or spear-phishing." },
      { step: 2, actor: "Counterfeit Application", action: "Attacker visits a telecom customer service store in another city, posing as the victim with forged identification claiming a lost SIM card." },
      { step: 3, actor: "Service Switch", action: "Telecom executive issues a new SIM; the victim's genuine phone suddenly loses cellular network connectivity ('No Service')." },
      { step: 4, actor: "Password Resets & 2FA Capture", action: "Attacker triggers password reset on victim's net-banking, email, and crypto exchanges, capturing incoming SMS OTPs directly." },
      { step: 5, actor: "Siphoning Assets", action: "Attacker adds beneficiary accounts, exhausts transfer limits, and drains bank balances before the victim realizes network disconnection." }
    ],
    impact: "Complete digital identity takeover, loss of corporate communications, financial theft running into millions, and delayed response time due to loss of phone reception.",
    ethicalIssues: [
      "Lax verification and compromise of customer trust by telecom retail representatives.",
      "Over-reliance of critical banking infrastructure on insecure legacy SMS protocols.",
      "Severe disruption of victim's personal safety and communication lifeline."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 43 & 66", description: "Hacking and unauthorized alteration of computer data / telecommunication network resources." },
      { statute: "IT Act, 2000 - Section 66C", description: "Identity theft through fraudulent appropriation of telecommunication identity tokens." },
      { statute: "Indian Telecommunications Act, 2023", description: "Severe penalties for acquiring SIM cards through fraudulent means, cheating, or impersonation." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 319", description: "Cheating by personation." }
    ],
    weaknesses: {
      human: "Telecom staff neglecting strict in-person KYC verification; victim ignoring prolonged 'No Service' status on their phone.",
      technical: "Vulnerability of SMS as an unencrypted, legacy protocol unsuitable for secure out-of-band two-factor authentication (2FA)."
    },
    prevention: [
      "Immediate Network Check: If your phone abruptly shows 'No Signal' or 'No Service' for an extended period, immediately contact your telecom operator from another phone.",
      "Hardware / App-based 2FA: Migrate banking and email authentication away from SMS OTPs to time-based authenticator apps (Google Authenticator, Microsoft Authenticator) or FIDO security keys.",
      "Carrier Lock: Inquire with your telecom provider regarding SIM-swap protection and secondary PIN verification on account modifications."
    ],
    recommendations: [
      "DoT and TRAI must mandate that newly swapped SIM cards have a mandatory 24-hour block on incoming and outgoing SMS and banking OTPs.",
      "Banks must query telecom carrier databases for recent SIM change events before releasing high-value transactions."
    ],
    keyLearnings: [
      "SMS-based OTP is the weakest link in digital authentication architectures.",
      "A lost cellular signal in an area with good coverage must be treated as a potential security incident, not just a network glitch."
    ]
  },
  {
    id: "case-07",
    caseNumber: 7,
    title: "Electricity Bill Disconnection Phishing via Malicious APKs",
    date: "August 2023 – Ongoing (I4C Nationwide Warning)",
    source: "I4C Cyber Digest / State Electricity Distribution Companies (DISCOMs) Alerts",
    target: "Residential electricity consumers, small business owners, traders, and shopkeepers",
    category: "Malware & Remote Access Trojan",
    threatLevel: "High",
    severityScore: 8.6,
    attackMethod: "Deceptive SMS warning of imminent power cutoff by 9:30 PM due to unpaid electricity bills, tricking victims into contacting a fake billing executive who commands installation of a malicious APK remote-access utility.",
    cybercrimeType: "Phishing, Remote Access Trojan (RAT) Malware Distribution, and Financial Espionage",
    attackFlow: [
      { step: 1, actor: "Urgency Phishing SMS", action: "Victim receives SMS: 'Dear consumer, your electricity power will be disconnected tonight at 9:30 PM because previous month bill was not updated. Please immediately contact our power officer at 98xxxxxx'." },
      { step: 2, actor: "Social Engineering Call", action: "Panic-stricken victim dials the number; fraudster poses as an assistant engineer from the local state power board (e.g. UGVCL, BESCOM, MSEDCL)." },
      { step: 3, actor: "Malicious App Sideloading", action: "Fraudster asks victim to pay a token ₹10 bill update fee by downloading an 'official helper app' sent via WhatsApp (an APK containing remote management trojan code like AnyDesk, TeamViewer QuickSupport, or customized malware)." },
      { step: 4, actor: "Credential Harvesting", action: "During the token payment, the malicious APK captures screen coordinates, keystrokes, and intercepts the banking OTP." },
      { step: 5, actor: "Account Drainage", action: "Fraudster utilizes full remote control to debit the victim's primary bank account and transfer funds across multiple intermediary wallets." }
    ],
    impact: "Widespread financial losses across non-tech-savvy citizens; exploitation of essential public utility trust; widespread panic regarding power cuts.",
    ethicalIssues: [
      "Weaponization of essential municipal public utilities (electricity, water) to induce panic and irrational behavior.",
      "Exploitation of senior citizens and small business owners who cannot afford business disruptions.",
      "Abuse of legitimate remote IT administration tools for criminal surveillance and theft."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 43 & 66", description: "Damage to computer systems, introduction of computer contaminants, and unpermitted access." },
      { statute: "IT Act, 2000 - Section 66D", description: "Punishment for cheating by personation through telecommunication resources." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318", description: "Cheating and dishonestly inducing delivery of money." }
    ],
    weaknesses: {
      human: "Panic triggered by the threat of darkness or business disruption; willingness to follow instructions from self-proclaimed utility officials.",
      technical: "Sideloading unverified third-party APKs bypassing Play Protect; lack of OS-level screen protection when financial apps are displayed over screen-sharing sessions."
    },
    prevention: [
      "Check Official Portals: Utility bills should only be verified and paid through official state electricity utility portals (DISCOM website) or trusted aggregator apps (Bharat BillPay / BBPS).",
      "Notice Sender Header: Government and electricity boards NEVER send bill warnings from personal 10-digit mobile numbers; authentic notices come from verified SMS headers (e.g. VM-UGVCL, VK-BESCOM).",
      "Never Install Remote Apps: Never install AnyDesk, QuickSupport, or APK files sent over WhatsApp upon request from unknown callers."
    ],
    recommendations: [
      "Android OS and banking applications must enforce mandatory `FLAG_SECURE` window attributes, causing the screen to turn completely black if any screen-sharing tool is active.",
      "Telecom providers must terminate SMS accounts sending mass spoofed messages containing keywords like 'electricity disconnected'."
    ],
    keyLearnings: [
      "Official public utilities never dispatch technicians or disconnection notices via personal WhatsApp or individual phone numbers.",
      "Screen-sharing applications give hackers the equivalent of sitting physically in front of your unlocked phone."
    ]
  },
  {
    id: "case-08",
    caseNumber: 8,
    title: "AI Deepfake Video Call & Voice Cloning Impersonation",
    date: "Early 2024 – Present (I4C Emerging Threat Advisory)",
    source: "I4C Cyber Digest Emerging Technology Brief / CERT-In Advisory on AI Threats",
    target: "Corporate finance departments, family members of overseas students, professionals",
    category: "Artificial Intelligence & Identity Spoofing",
    threatLevel: "Critical",
    severityScore: 9.5,
    attackMethod: "Utilization of generative AI deepfake video synthesis and 3-second audio voice cloning algorithms to impersonate close relatives or corporate chief executives requesting emergency fund disbursements.",
    cybercrimeType: "Generative AI Impersonation, Synthetic Identity Theft, and High-Tech Corporate Fraud",
    attackFlow: [
      { step: 1, actor: "Biometric Data Harvesting", action: "Scammers scrape public YouTube videos, Instagram reels, and podcasts to acquire 30 seconds of high-fidelity facial imagery and vocal audio of the target." },
      { step: 2, actor: "AI Synthesis", action: "Threat actors train an open-source deepfake video generator and neural voice clone capable of real-time conversational latency." },
      { step: 3, actor: "Emergency Contact", action: "A short, frantic WhatsApp video call or phone call is made to the victim (e.g. parents or corporate accounts officer) claiming an urgent medical emergency or confidential business acquisition." },
      { step: 4, actor: "Distraction & Urgency", action: "The visual appearance and voice match perfectly; call quality is intentionally degraded ('poor network in hospital') to mask rendering artifacts." },
      { step: 5, actor: "Emergency Fund Transfer", action: "Victim transfers funds immediately to a specified UPI/IMPS account; later discovers the genuine relative was safe elsewhere." }
    ],
    impact: "Unprecedented psychological shock, disruption of human sensory trust, significant corporate treasury theft, and destruction of digital forensic reliability.",
    ethicalIssues: [
      "Severe violation of personal identity rights and biometric autonomy.",
      "Irresponsible release of open-source dual-use generative AI models without guardrails or watermarks.",
      "Complete erosion of human interpersonal trust in digital audiovisual communications."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66D", description: "Cheating by personation by utilizing computer systems and AI-generated electronic media." },
      { statute: "IT Act, 2000 - Section 66C", description: "Identity theft through unauthorized simulation of biometric vocal/facial identity markers." },
      { statute: "Digital Personal Data Protection Act, 2023 - Section 6 & 8", description: "Unauthorized processing of personal biometric data for synthetic generation without consent." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318 & 336", description: "Cheating and forgery for the purpose of harming reputation or extracting funds." }
    ],
    weaknesses: {
      human: "Instinctive human belief that 'seeing is believing'; intense emotional vulnerability when a child or parent appears in distress.",
      technical: "Absence of mandatory cryptographic watermarks (C2PA standard) in consumer-facing generative AI tools; lack of deepfake artifact detection in consumer video call platforms."
    },
    prevention: [
      "Establish a Family Safe Word: Agree on a confidential, offline verbal password with close family members that must be recited during any emergency fund request.",
      "Ask a Disqualifying Question: Ask the caller a personal question that only the real person would know (e.g., 'What was the name of our childhood pet?').",
      "Visual Test: Ask the caller to wave their hand across their face, turn their head quickly 90 degrees sideways, or blink slowly; current real-time deepfakes frequently glitch or distort at boundary edges."
    ],
    recommendations: [
      "AI development companies must implement tamper-proof digital watermarking and provenance metadata (Coalition for Content Provenance and Authenticity - C2PA) on all generated media.",
      "Video conferencing platforms (WhatsApp, Zoom, Teams) should integrate on-device neural deepfake detection warning badges."
    ],
    keyLearnings: [
      "In the generative AI era, audiovisual evidence is no longer proof of physical reality.",
      "Emergency financial requests made via digital channels must always be verified through an independent callback on a trusted traditional cellular line."
    ]
  },
  {
    id: "case-09",
    caseNumber: 9,
    title: "QR Code Phishing ('Quishing') & Reverse UPI Payment Fraud Syndicate",
    date: "January 2024 – Continuous (I4C & NPCI Advisory)",
    source: "I4C Cyber Digest / NPCI Public Security Advisory Series",
    target: "Online marketplace sellers (OLX, Quikr, Facebook Marketplace), small retail shopkeepers, and students receiving fake cashback/scholarship claims",
    category: "Financial Fraud & Social Engineering",
    threatLevel: "High",
    severityScore: 8.7,
    attackMethod: "Deceptive dynamic QR code generation disguised as 'Scan to Receive Payment / Claim Prize'; systematically inverting transaction semantics to trick the victim into entering their UPI PIN, which triggers immediate account debit.",
    cybercrimeType: "Reverse Payment Fraud, QR Code Phishing (Quishing), Cheating by Personation, and Financial Cyber Fraud",
    attackFlow: [
      { step: 1, actor: "Threat Actor", action: "Posing as an eager buyer on OLX/marketplace, agrees to purchase an item without bargaining and insists on paying immediately via UPI." },
      { step: 2, actor: "Deceptive Lure", action: "Sends a screenshot of a dynamic QR code stating: 'Scan this official QR code to receive ₹15,000 into your linked bank account instantly'." },
      { step: 3, actor: "Semantic Confusion", action: "When the victim scans using Google Pay/PhonePe, the app interface prompts: 'Enter UPI PIN to Authorize'. Attacker falsely claims: 'Entering PIN is required by NPCI to credit your account'." },
      { step: 4, actor: "Instant Debit", action: "The moment the victim inputs their UPI PIN, the funds (₹15,000) are debited from their account instead of credited." },
      { step: 5, actor: "Second Exploit & Exit", action: "Attacker claims a 'system glitch', sends another QR code for ₹30,000 to 'reverse the transaction', drains more funds, and blocks the victim." }
    ],
    impact: "Rapid direct financial loss (₹10,000 to ₹2,50,000 per victim), psychological confusion, and diminished trust in unified digital payment infrastructure across small merchants and peer-to-peer sellers.",
    ethicalIssues: [
      "Malicious manipulation of interface semantics and terminology ('Pay' vs 'Receive').",
      "Exploitation of digital literacy gaps among new UPI users and small business owners.",
      "Cynical weaponization of open public marketplaces designed for citizen commerce."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 66D", description: "Punishment for cheating by personation by using computer resource and digital payment interfaces." },
      { statute: "IT Act, 2000 - Section 43 & 66", description: "Unauthorized access and fraudulent inducement of electronic fund transfers." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318(4)", description: "Cheating and dishonestly inducing delivery of movable property (replaces IPC 420)." },
      { statute: "Payment and Settlement Systems Act, 2007", description: "Violation of authorized payment system operating guidelines and customer safeguards." }
    ],
    weaknesses: {
      human: "Fundamental misunderstanding of UPI architecture—citizens failing to realize that receiving money NEVER requires entering a UPI PIN.",
      technical: "Payment applications historically displayed ambiguous confirmation dialogs that did not sufficiently highlight the difference between 'Collect Request' debits and incoming credits."
    },
    prevention: [
      "Golden Rule of UPI: You NEVER enter a UPI PIN to RECEIVE money. A UPI PIN is strictly and exclusively used to DEBIT (send) funds from your account.",
      "Reject QR Codes for Receiving Money: Do not scan any QR code sent to you over chat to receive payment. To receive funds, merely sharing your UPI ID or mobile number is sufficient.",
      "Beware of Remote Buyers Over-Eager to Pay: Never deal with buyers who refuse to meet in person and immediately send QR codes or payment links."
    ],
    recommendations: [
      "UPI payment applications (NPCI, PhonePe, GPay, Paytm) must display full-screen, high-contrast warning alerts whenever a user scans a merchant QR code that triggers a debit while in an active chat session.",
      "Classified platforms (OLX, Quikr) should implement in-app payment escrow systems and restrict direct off-platform QR code sharing."
    ],
    keyLearnings: [
      "UPI PIN is an authentication secret for outflowing transactions only.",
      "Social engineers exploit the cognitive rush of receiving money to blind victims to the wording on transaction authorization screens."
    ]
  },
  {
    id: "case-10",
    caseNumber: 10,
    title: "Fake Courier Delivery & Customs Clearance Smishing via Trojan APKs",
    date: "April 2024 – Continuous (I4C Nationwide High Priority Alert)",
    source: "I4C Cyber Digest Bulletin / India Post & CERT-In Smishing Advisory",
    target: "E-commerce shoppers, festive season online consumers, citizens awaiting postal/consignment deliveries",
    category: "Malware & Remote Access Trojan",
    threatLevel: "High",
    severityScore: 9.0,
    attackMethod: "SMS smishing lure claiming an urgent postal package cannot be delivered due to an address mismatch; directs victim to click a phishing URL that downloads a malicious APK Trojan disguised as a courier tracking tool, exfiltrating SMS OTPs and banking credentials.",
    cybercrimeType: "Smishing, Malware Distribution, Banking Credential Exfiltration, and Remote Access Trojan (RAT)",
    attackFlow: [
      { step: 1, actor: "Smishing Gateway", action: "Broadcasts mass SMS lures from unverified numbers: 'IndiaPost: Your package IN982713 arrived at warehouse but cannot be delivered due to incomplete address. Update within 12 hours: http://indiapost-update[.]top'." },
      { step: 2, actor: "Phishing Redirect", action: "Clicking the link opens a spoofed website mimicking India Post, Blue Dart, or DTDC, prompting the victim to pay a token ₹5 or ₹10 redelivery fee." },
      { step: 3, actor: "Malicious Sideloading", action: "Site prompts the user to download an 'Official Postal Tracking Utility' (`IndiaPost_Tracking.apk` or `SpeedPost_v2.apk`) to complete the address verification." },
      { step: 4, actor: "Permission Hijack", action: "Upon installation, the Trojan requests accessibility permissions, reads incoming SMS messages, and mirrors keystrokes." },
      { step: 5, actor: "Credential Theft & Exfiltration", action: "When the victim enters credit card / net banking credentials for the token ₹10 fee, the Trojan intercepts the incoming bank OTP, performs high-value unauthorized debits, and suppresses notification SMS." }
    ],
    impact: "Uncontrolled financial drain from bank accounts (₹50,000 to ₹10 Lakhs), unauthorized remote control of mobile devices, silent interception of sensitive two-factor authentication tokens.",
    ethicalIssues: [
      "Weaponization of citizen expectations of public postal infrastructure (India Post) and consumer trust in essential delivery logistics.",
      "Deceptive abuse of Android accessibility services designed to assist disabled individuals.",
      "Covert data exfiltration and silent suppression of security notifications without user knowledge."
    ],
    legalProvisions: [
      { statute: "IT Act, 2000 - Section 43 & 66", description: "Hacking, introducing computer contaminant/Trojan, and unauthorized data extraction." },
      { statute: "IT Act, 2000 - Section 66C", description: "Identity theft through electronic interception of passwords and one-time authentication tokens." },
      { statute: "IT Act, 2000 - Section 66D", description: "Cheating by personation by simulating official postal and logistics websites." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 318(4)", description: "Cheating and dishonestly inducing property transfer via digital fraud." },
      { statute: "Bharatiya Nyaya Sanhita, 2023 - Section 336", description: "Forgery of electronic records and simulating official government emblems." }
    ],
    weaknesses: {
      human: "Urgency over missing a parcel; cognitive compliance with paying a negligible fee (₹5–₹10); habitual granting of Android application permissions without scrutiny.",
      technical: "Ability to sideload unverified third-party APK packages from mobile web browsers; mobile operating systems allowing background SMS reading when accessibility services are granted."
    },
    prevention: [
      "Official Post & Courier Policy: India Post and legitimate logistics firms (Blue Dart, Delhivery) NEVER send tracking links via personal 10-digit mobile numbers (+91-9xxxxxx).",
      "Inspect URL Domains: Authentic government domains strictly end with `.gov.in` (e.g., `indiapost.gov.in`), never `.top`, `.vip`, `.xyz`, or `.online`.",
      "Zero APK Sideloading: Never download or install `.apk` files received via SMS, WhatsApp, or third-party websites. Legitimate courier tracking never requires installing an APK outside Google Play Store.",
      "Check Android Permissions: Never grant 'Accessibility Services' or 'Notification Access' permissions to utility or courier tracking applications."
    ],
    recommendations: [
      "Telecom providers must enforce strict SMS firewall filtering on alphanumeric sender IDs (headers) and automatically block SMS containing suspicious external `.apk` download links.",
      "Mobile operating system vendors (Android) should mandate strict sandboxing preventing accessibility services from accessing one-time password (OTP) input fields and notification streams."
    ],
    keyLearnings: [
      "Smishing attacks leverage low-value fees (₹5 or ₹10) as psychological bait to capture high-value banking credentials and device permissions.",
      "Logistics updates should always be verified independently by visiting official web portals directly using the consignment tracking number."
    ]
  }
];

export const THREAT_CATEGORIES = [
  "All",
  "Extortion & Social Engineering",
  "Biometric & Identity Fraud",
  "Financial Fraud & Social Engineering",
  "Financial Fraud & Rogue Software",
  "Extortion & Rogue Software",
  "Telecommunications & Identity Fraud",
  "Malware & Remote Access Trojan",
  "Artificial Intelligence & Identity Spoofing"
];
