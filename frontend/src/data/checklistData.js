/**
 * CyberPrahari - Interactive Personal Cyber Hygiene & Security Audit Data
 */

export const AUDIT_QUESTIONS = [
  {
    id: "q1",
    category: "Authentication",
    question: "Do you use unique, 12+ character passphrases or a password manager instead of reusing the same password across accounts?",
    impactScore: 10,
    rationale: "Credential stuffing attacks exploit reused passwords from previous web leaks to breach banking and email accounts."
  },
  {
    id: "q2",
    category: "Authentication",
    question: "Have you enabled App-based Two-Factor Authentication (Authenticator App) rather than relying solely on SMS OTPs where supported?",
    impactScore: 10,
    rationale: "SMS OTPs are vulnerable to SIM Swap and SS7 telecom interception; authenticator apps generate offline cryptographic tokens."
  },
  {
    id: "q3",
    category: "Identity Protection",
    question: "Have you locked your Aadhaar Biometrics via the official mAadhaar application or UIDAI portal?",
    impactScore: 10,
    rationale: "Locking biometrics stops AePS cloned silicone fingerprint withdrawals even if your Aadhaar number is known to scammers."
  },
  {
    id: "q4",
    category: "Device Hygiene",
    question: "Do you strictly avoid sideloading APK files from WhatsApp, Telegram, or unofficial websites?",
    impactScore: 10,
    rationale: "Sideloaded APKs bypass app store security scans and frequently contain hidden Remote Access Trojans (RATs) and keyloggers."
  },
  {
    id: "q5",
    category: "Social Engineering Awareness",
    question: "Do you know that Indian Police, CBI, ED, and courts NEVER conduct 'Digital Arrests' or demand money via video call?",
    impactScore: 10,
    rationale: "Understanding that 'Digital Arrest' is a complete legal fiction prevents panic when threatened by fake uniformed officers."
  },
  {
    id: "q6",
    category: "Device Hygiene",
    question: "Do you refuse to install remote-sharing utilities (AnyDesk, TeamViewer, RustDesk) at the request of utility or bank callers?",
    impactScore: 10,
    rationale: "Remote utilities allow threat actors to mirror your phone screen, record keystrokes, and authorize UPI transactions live."
  },
  {
    id: "q7",
    category: "Financial Safety",
    question: "Do you verify stock advisors and brokers against the SEBI official registry before transferring any investment capital?",
    impactScore: 10,
    rationale: "Unregulated WhatsApp/Telegram 'institutional trading' groups fabricate mock software balances to siphon retirement funds."
  },
  {
    id: "q8",
    category: "Privacy & Permissions",
    question: "Do you review and reject unnecessary phone permissions (Contacts, Gallery, Location) requested by utility and loan apps?",
    impactScore: 10,
    rationale: "Predatory apps harvest contact books and private photo galleries to conduct extortion and morphed-image blackmail."
  },
  {
    id: "q9",
    category: "Incident Readiness",
    question: "Do you have the National Cybercrime Helpline '1930' saved on your phone and understand the 'Golden Hour' reporting window?",
    impactScore: 10,
    rationale: "Calling 1930 within the first 2 hours of financial fraud enables the Citizen Financial Cyber Fraud Reporting System to freeze stolen funds in transit."
  },
  {
    id: "q10",
    category: "AI & Media Literacy",
    question: "Have you established an offline verbal 'Family Safe Word' to verify identity in the event of an urgent AI voice or video clone call?",
    impactScore: 10,
    rationale: "Generative AI voice synthesis can replicate a loved one's voice in seconds; a private safe word instantly disproves synthetic identity fraud."
  }
];
